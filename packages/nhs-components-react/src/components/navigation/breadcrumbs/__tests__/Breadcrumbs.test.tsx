import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import { Link } from 'react-router-dom'
import Breadcrumbs from '..'

describe('Breadcrumb', () => {
  test('should match the snapshot', () => {
    render(
      <Breadcrumbs data-testid="breadcrumb">
        <Breadcrumbs.Item href="/url/1">Item 1</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/url/2">Item 1</Breadcrumbs.Item>
        <Breadcrumbs.Back href="/url/1">Item 1</Breadcrumbs.Back>
      </Breadcrumbs>,
    )

    expect(screen.getByTestId('breadcrumb')).toMatchSnapshot()
  })

  test('should match the snapshot - other elements', () => {
    render(
      <Breadcrumbs data-testid="breadcrumb">
        <Breadcrumbs.Item href="/url/1">Item 1</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/url/2">Item 1</Breadcrumbs.Item>
        <Breadcrumbs.Back href="/url/1">Item 1</Breadcrumbs.Back>
        <>Item</>
        item
      </Breadcrumbs>,
    )

    expect(screen.getByTestId('breadcrumb')).toMatchSnapshot()
  })

  test('accepts react-router-dom Link element', () => {
    render(
      <Breadcrumbs data-testid="breadcrumb">
        <Breadcrumbs.Item asElement={Link} to="/url/1">
          Item 1
        </Breadcrumbs.Item>
        <Breadcrumbs.Item asElement={Link} to="/url/2">
          Item 1
        </Breadcrumbs.Item>
        <Breadcrumbs.Back asElement={Link} to="/url/1">
          Item 1
        </Breadcrumbs.Back>
      </Breadcrumbs>,
    )

    expect(screen.getByTestId('breadcrumb')).toMatchSnapshot()
  })
})
