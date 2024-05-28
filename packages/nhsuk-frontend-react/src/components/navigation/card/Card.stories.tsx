import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

/**
 * Use a card to give users a brief summary of content or a task, often with a link to more detail. You can display a card alongside other cards to group related content or tasks.
 *
 * https://service-manual.nhs.uk/design-system/components/card
 */
const meta: Meta<typeof Card> = {
  title: 'Components/Navigation/Card',
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const TopTask: Story = {
  render: (args) => (
    <Card.Group>
      <Card.GroupItem width="one-third">
        <Card clickable {...args}>
          <Card.Content>
            <Card.Heading as="h5" size="xs">
              <Card.Link href="#">Order a repeat prescription</Card.Link>
            </Card.Heading>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
  ),
};

export const Primary: Story = {
  render: (args) => (
    <Card.Group>
      <Card.GroupItem width="two-thirds">
        <Card clickable variant="primary" {...args}>
          <Card.Content>
            <Card.Heading as="h2" size="m">
              <Card.Link href="#">Introduction to care and support</Card.Link>
            </Card.Heading>

            <Card.Description>
              A quick guide for people who have care and support needs and their
              carers
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
  ),
};

export const Secondary: Story = {
  render: (args) => (
    <Card.Group>
      <Card.GroupItem width="two-thirds">
        <Card clickable variant="secondary" {...args}>
          <Card.Content>
            <Card.Heading as="h2" size="m">
              <Card.Link href="#">Urgent and emergency care services</Card.Link>
            </Card.Heading>

            <Card.Description>
              Services the NHS provides if you need urgent or emergency medical
              help
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
  ),
};

export const WithImage: Story = {
  render: (args) => (
    <Card.Group>
      <Card.GroupItem width="one-third">
        <Card clickable {...args}>
          <Card.Image
            src="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg"
            alt="A person wearing a face mask"
          />
          <Card.Content>
            <Card.Heading as="h2" size="m">
              <Card.Link href="#">Exercise</Card.Link>
            </Card.Heading>

            <Card.Description>
              Programmes, workouts and tips to get you moving and improve your
              fitness and wellbeing
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
  ),
};
