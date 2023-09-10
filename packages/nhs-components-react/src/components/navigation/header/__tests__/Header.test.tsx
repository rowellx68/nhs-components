import { render, screen, userEvent } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'

import Header from '..'

describe('Header', () => {
  test.each([true, false])(
    'should match the snapshot - white equal %s',
    (white) => {
      render(
        <Header
          data-testid="header"
          orgName="Anytown Anyplace"
          orgSplit="Anywhere"
          orgDescriptor="NHS Foundation Trust"
          white={white}
        >
          <Header.Container>
            <Header.Logo />
            <Header.Content>
              <Header.MenuToggle />
            </Header.Content>
          </Header.Container>
          <Header.Nav>
            <Header.NavItem mobileOnly href="#">
              Home
            </Header.NavItem>
            <Header.NavItem href="#">Get involved</Header.NavItem>
            <Header.NavItem href="#">About us</Header.NavItem>
            <Header.NavItem href="#">About us</Header.NavItem>
          </Header.Nav>
        </Header>,
      )

      expect(screen.getByTestId('header')).toMatchSnapshot()
    },
  )

  test('should match the snapshot - menu', async () => {
    const container = document.createElement('div')
    container.style.width = '414px'
    container.style.height = '896px'

    render(
      <Header
        data-testid="header"
        orgName="Anytown Anyplace"
        orgSplit="Anywhere"
        orgDescriptor="NHS Foundation Trust"
      >
        <Header.Container>
          <Header.Logo />
          <Header.Content>
            <Header.MenuToggle data-testid="menu-toggle" />
          </Header.Content>
        </Header.Container>
        <Header.Nav>
          <Header.NavItem mobileOnly href="#">
            Home
          </Header.NavItem>
          <Header.NavItem href="#">Get involved</Header.NavItem>
          <Header.NavItem href="#">About us</Header.NavItem>
          <Header.NavItem href="#">About us</Header.NavItem>
        </Header.Nav>
      </Header>,
      { container: document.body.appendChild(container) },
    )

    await userEvent.click(screen.getByTestId('menu-toggle'))
    await userEvent.click(screen.getByTestId('menu-toggle'))

    expect(screen.getByTestId('header')).toMatchSnapshot()
  })

  test('should match the snapshot - search', async () => {
    const container = document.createElement('div')
    container.style.width = '414px'
    container.style.height = '896px'

    render(
      <Header
        data-testid="header"
        orgName="Anytown Anyplace"
        orgSplit="Anywhere"
        orgDescriptor="NHS Foundation Trust"
      >
        <Header.Container>
          <Header.Logo />
          <Header.Content>
            <Header.MenuToggle />
            <Header.Search
              data-testid="search"
              toggleProps={{ 'data-testid': 'search-toggle' }}
              closeProps={{ 'data-testid': 'search-close' }}
            />
          </Header.Content>
        </Header.Container>
        <Header.Nav>
          <Header.NavItem mobileOnly href="#">
            Home
          </Header.NavItem>
          <Header.NavItem href="#">Get involved</Header.NavItem>
          <Header.NavItem href="#">About us</Header.NavItem>
          <Header.NavItem href="#">About us</Header.NavItem>
        </Header.Nav>
      </Header>,
      { container: document.body.appendChild(container) },
    )

    await userEvent.click(screen.getByTestId('search-toggle'))
    await userEvent.type(screen.getByTestId('search'), 'test')
    await userEvent.click(screen.getByTestId('search-close'))

    expect(screen.getByTestId('header')).toMatchSnapshot()
  })

  test('should match the snapshot - service', () => {
    render(
      <Header data-testid="header" serviceName="Service name">
        <Header.Container>
          <Header.Logo />
          <Header.Content>
            <Header.Search />
          </Header.Content>
        </Header.Container>
      </Header>,
    )

    expect(screen.getByTestId('header')).toMatchSnapshot()
  })

  test('should match the snapshot - transactional', () => {
    render(
      <Header data-testid="header" transactional serviceName="Service name">
        <Header.Container>
          <Header.Logo />
          <Header.TransactionalLink />
        </Header.Container>
      </Header>,
    )

    expect(screen.getByTestId('header')).toMatchSnapshot()
  })
})
