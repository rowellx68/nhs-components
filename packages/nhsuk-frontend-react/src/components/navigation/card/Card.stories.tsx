import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { List } from '@/components/styles/typography/list/List';
import { Link } from '@/components/styles/typography/link/Link';
import { Paragraph } from '@/components/styles/typography/paragraph/Paragraph';

/**
 * Use a card to give users a brief summary of content or a task, often with a link to more detail. You can display a card alongside other cards to group related content or tasks.
 *
 * https://service-manual.nhs.uk/design-system/components/card
 */
const meta: Meta<typeof Card> = {
  title: 'Components/Navigation/Card',
  component: Card,
  subcomponents: {
    'Card.Content': Card.Content,
    'Card.Description': Card.Description,
    'Card.Heading': Card.Heading,
    'Card.Image': Card.Image,
    'Card.Link': Card.Link,
    'Card.Group': Card.Group,
    'Card.GroupItem': Card.GroupItem,
  } as Record<string, React.ComponentType<any>>,
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

export const AToZ: Story = {
  render: (args) => (
    <div>
      <Card variant="feature" {...args}>
        <Card.Content>
          <Card.Heading>A</Card.Heading>
          <List border>
            <List.Item>
              <Link href="#">AAA</Link>
            </List.Item>
            <List.Item>
              <Link href="#">Abdominal aortic aneurysm</Link>
            </List.Item>
            <List.Item>
              <Link href="#">Abscess</Link>
            </List.Item>
          </List>
        </Card.Content>
      </Card>
    </div>
  ),
};

export const NonUrgentCareCard: Story = {
  args: {
    variant: 'non-urgent',
  },
  render: (args) => (
    <Card {...args}>
      <Card.Heading visuallyHiddenText="Non-urgent advice: ">
        Speak to a GP if:
      </Card.Heading>
      <Card.Content>
        <List variant="unordered">
          <List.Item>you're not sure it's chickenpox</List.Item>
          <List.Item>
            the skin around the blisters is red, hot or painful (signs of
            infection)
          </List.Item>
          <List.Item>
            your child is <a href="#">dehydrated</a>
          </List.Item>
          <List.Item>
            you're concerned about your child or they get worse
          </List.Item>
        </List>
        <Paragraph>
          Tell the receptionist you think it's chickenpox before going in. They
          may recommend a special appointment time if other patients are at
          risk.
        </Paragraph>
      </Card.Content>
    </Card>
  ),
};

export const UrgentCareCard: Story = {
  args: {
    variant: 'urgent',
  },
  render: (args) => (
    <Card {...args}>
      <Card.Heading visuallyHiddenText="Urgent advice: ">
        Ask for an urgent GP appointment if:
      </Card.Heading>
      <Card.Content>
        <List variant="unordered">
          <List.Item>you're an adult and have chickenpox</List.Item>
          <List.Item>
            you're pregnant and haven't had chickenpox before and you've been
            near someone with it
          </List.Item>
          <List.Item>
            you have a weakened immune system and you've been near someone with
            chickenpox
          </List.Item>
          <List.Item>you think your newborn baby has chickenpox</List.Item>
        </List>
        <Paragraph>
          In these situations, your GP can prescribe medicine to prevent
          complications. You need to take it within 24 hours of the spots coming
          out.
        </Paragraph>
      </Card.Content>
    </Card>
  ),
};

export const EmergencyCareCard: Story = {
  args: {
    variant: 'emergency',
  },
  render: (args) => (
    <Card {...args}>
      <Card.Heading visuallyHiddenText="Emergency advice: ">
        Go to A&E or call 999 if:
      </Card.Heading>
      <Card.Content>
        <List variant="unordered">
          <List.Item>you or someone you know needs immediate help</List.Item>
          <List.Item>
            you have seriously harmed yourself – for example, by taking a drug
            overdose
          </List.Item>
        </List>
        <Paragraph>
          A mental health emergency should be taken as seriously as a medical
          emergency.
        </Paragraph>
        <Paragraph>
          <Link href="#">Find your nearest A&E</Link>
        </Paragraph>
      </Card.Content>
    </Card>
  ),
};
