import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import Card from '..'
import { GroupItemWidth } from '../Card'

describe('Card', () => {
  test('should match the snapshot', () => {
    render(
      <Card data-testid="card">
        <Card.Content>
          <Card.Heading>Card heading</Card.Heading>
          <Card.Description>Card description</Card.Description>
        </Card.Content>
      </Card>,
    )
    expect(screen.getByTestId('card')).toMatchSnapshot()
  })

  test('should match the snapshot - clickable', () => {
    render(
      <Card data-testid="card" clickable>
        <Card.Content>
          <Card.Heading>
            <Card.Link href="#care-support">Card heading</Card.Link>
          </Card.Heading>
          <Card.Description>Card description</Card.Description>
        </Card.Content>
      </Card>,
    )
    expect(screen.getByTestId('card')).toMatchSnapshot()
  })

  test.each(['one-half', 'one-quarter', 'one-third', undefined] as GroupItemWidth[])(
    'should match the snapshot - width %s',
    (width) => {
      render(
        <Card.Group data-testid="card">
          <Card.GroupItem width={width}>
            <Card>
              <Card.Content>
                <Card.Heading>Card heading</Card.Heading>
                <Card.Description>Card description</Card.Description>
              </Card.Content>
            </Card>
          </Card.GroupItem>
        </Card.Group>,
      )
      expect(screen.getByTestId('card')).toMatchSnapshot()
    },
  )

  test('should match the snapshot - image and clickable', () => {
    render(
      <Card data-testid="card" clickable>
        <Card.Image
          src="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg"
          alt="A lady smiling"
        />
        <Card.Content>
          <Card.Heading>Card heading</Card.Heading>
          <Card.Description>Card description</Card.Description>
        </Card.Content>
      </Card>,
    )
    expect(screen.getByTestId('card')).toMatchSnapshot()
  })

  test('should match the snapshot - primary', () => {
    render(
      <Card data-testid="card" primary>
        <Card.Content>
          <Card.Heading>Card heading</Card.Heading>
          <Card.Description>Card description</Card.Description>
        </Card.Content>
      </Card>,
    )
    expect(screen.getByTestId('card')).toMatchSnapshot()
  })

  test('should match the snapshot - primary & withChevron', () => {
    render(
      <Card data-testid="card" primary withChevron>
        <Card.Content>
          <Card.Heading>Card heading</Card.Heading>
          <Card.Description>Card description</Card.Description>
        </Card.Content>
      </Card>,
    )
    expect(screen.getByTestId('card')).toMatchSnapshot()
  })

  test('should match the snapshot - secondary', () => {
    render(
      <Card data-testid="card" secondary>
        <Card.Content>
          <Card.Heading>Card heading</Card.Heading>
          <Card.Description>Card description</Card.Description>
        </Card.Content>
      </Card>,
    )
    expect(screen.getByTestId('card')).toMatchSnapshot()
  })
})
