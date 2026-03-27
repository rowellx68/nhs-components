import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Button } from '../../form-elements/button/Button';
import { Hero } from './Hero';

const meta = {
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
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  render: (args) => (
    <Hero {...args}>
      <Hero.Container>
        <Hero.Heading>We're here for you</Hero.Heading>
        <Hero.Paragraph>Helping you take control of your health and wellbeing.</Hero.Paragraph>
      </Hero.Container>
    </Hero>
  ),
};

export const WithHtmlContent: Story = {
  name: 'with html content',
  render: (args) => (
    <Hero {...args}>
      <Hero.Container>
        <Hero.Heading size="l" className="nhsuk-u-margin-top-5">
          This is a header for the product or service
        </Hero.Heading>
        <p className="nhsuk-body-l">
          This is some more content which explains the product or service.
        </p>
        <Button as="a" variant="reverse" href="#">
          Sign up
        </Button>
      </Hero.Container>
    </Hero>
  ),
};

export const WithImage: Story = {
  name: 'with image',
  args: {
    variant: 'image-only',
    imageUrl: 'https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg',
  },
  render: (args) => <Hero {...args} />,
};

export const WithImageContent: Story = {
  name: 'with image, content',
  args: {
    variant: 'image-and-content',
    imageUrl: 'https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg',
  },
  render: (args) => (
    <Hero {...args}>
      <Hero.Container variant="overlay">
        <Hero.Heading>We're here for you</Hero.Heading>
        <Hero.Paragraph>Helping you take control of your health and wellbeing.</Hero.Paragraph>
      </Hero.Container>
    </Hero>
  ),
};
