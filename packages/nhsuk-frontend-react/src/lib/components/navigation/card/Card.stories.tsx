import type { Meta, StoryObj } from '@storybook/react'
import Card from '.'

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Navigation/Card',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Card>

/**
 * The basic usage of the Card component.
 */
export const Basic: Story = {
  args: {
    clickable: false,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Content>
        <Card.Heading>
          If you need help now, but it’s not an emergency
        </Card.Heading>
        <Card.Description>
          Go to <a href="#site">111.nhs.uk</a> or <a href="#site">call 111</a>
        </Card.Description>
      </Card.Content>
    </Card>
  ),
}

/**
 * Card with clickable prop set to true.
 */
export const Clickable: Story = {
  args: {
    clickable: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Content>
        <Card.Heading>
          <Card.Link href="#site">Introduction to care and support</Card.Link>
        </Card.Heading>
        <Card.Description>
          A quick guide for people who have care and support needs and their
          carers
        </Card.Description>
      </Card.Content>
    </Card>
  ),
}

/**
 * Card with clickable prop set to true and primary prop set to true.
 */
export const PrimaryWithChevron: Story = {
  args: {
    primary: true,
    withChevron: true,
    clickable: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Content>
        <Card.Heading>
          <Card.Link href="#site">Introduction to care and support</Card.Link>
        </Card.Heading>
        <Card.Description>
          A quick guide for people who have care and support needs and their
          carers
        </Card.Description>
      </Card.Content>
    </Card>
  ),
}

export const Secondary: Story = {
  args: {
    secondary: true,
    clickable: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Content>
        <Card.Heading>
          <Card.Link href="#site">Introduction to care and support</Card.Link>
        </Card.Heading>
        <Card.Description>
          A quick guide for people who have care and support needs and their
          carers
        </Card.Description>
      </Card.Content>
    </Card>
  ),
}

/**
 * Card with clickable prop set to true and an image.
 */
export const ClickableWithImage: Story = {
  args: {
    clickable: true,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Image
        src="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg"
        alt="A lady smiling"
      />
      <Card.Content>
        <Card.Heading>
          <Card.Link href="#exercise">Exercise</Card.Link>
        </Card.Heading>
        <Card.Description>
          Programmes, workouts and tips to get you moving and improve your
          fitness and wellbeing
        </Card.Description>
      </Card.Content>
    </Card>
  ),
}

/**
 * Card with clickable prop set to true and a group of items.
 */
export const ClickableWithGroup: Story = {
  args: {
    clickable: true,
    width: 'one-half',
  },
  render: (args) => (
    <Card.Group>
      <Card.GroupItem>
        <Card {...args}>
          <Card.Content>
            <Card.Heading>
              <Card.Link href="#care-support">
                Introduction to care and support
              </Card.Link>
            </Card.Heading>
            <Card.Description>
              A quick guide for people who have care and support needs and their
              carers
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
      <Card.GroupItem>
        <Card {...args}>
          <Card.Content>
            <Card.Heading>
              <Card.Link href="#social-services">
                Help from social services and charities
              </Card.Link>
            </Card.Heading>
            <Card.Description>
              Includes helplines, needs assessments, advocacy and reporting
              abuse
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
  ),
}

/**
 * Card heading level
 */
export const HeadingLevel: Story = {
  args: {
    clickable: false,
  },
  render: (args) => (
    <Card {...args}>
      <Card.Content>
        <Card.Heading asElement="h3">
          If you need help now, but it’s not an emergency
        </Card.Heading>
        <Card.Description>
          Go to <a href="#site">111.nhs.uk</a> or <a href="#site">call 111</a>
        </Card.Description>
      </Card.Content>
    </Card>
  ),
}
