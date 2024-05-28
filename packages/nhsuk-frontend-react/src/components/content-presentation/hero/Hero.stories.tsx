import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Components/Content Presentation/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['content-only', 'image-and-content', 'image-only'],
    },
    imageUrl: {
      control: {
        type: 'text',
      },
    },
  },
  subcomponents: {
    'Hero.Container': Hero.Container,
    'Hero.Heading': Hero.Heading,
    'Hero.Paragraph': Hero.Paragraph,
  } as Record<string, React.ComponentType<any>>,
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const WithContentOnly: Story = {
  render: (args) => (
    <Hero {...args}>
      <Hero.Container>
        <Hero.Heading>We're here for you</Hero.Heading>
        <Hero.Paragraph>
          Helping you take control of your health and wellbeing.
        </Hero.Paragraph>
      </Hero.Container>
    </Hero>
  ),
};

export const WithImageContent: Story = {
  args: {
    variant: 'image-and-content',
    imageUrl:
      'https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg',
  },
  render: (args) => (
    <Hero {...args}>
      <Hero.Container variant="overlay">
        <Hero.Heading>We're here for you</Hero.Heading>
        <Hero.Paragraph>
          Helping you take control of your health and wellbeing.
        </Hero.Paragraph>
      </Hero.Container>
    </Hero>
  ),
};

export const WithImageOnly: Story = {
  args: {
    variant: 'image-only',
    imageUrl:
      'https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg',
  },
  render: (args) => <Hero {...args} />,
};
