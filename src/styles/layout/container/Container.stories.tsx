import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from './Container';

/**
 * To set up your layout, you will need to create 2 wrappers. The first wrapper is a container which sets the maximum width of the content but does not add any vertical margin or padding.
 *
 * You can choose from a fixed-width container (960px) or a fluid-width container (which spans the entire width of the viewport).
 *
 * https://service-manual.nhs.uk/design-system/styles/layout#containers
 */

const meta: Meta<typeof Container> = {
  title: 'Styles/Layout/Container',
  component: Container,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: undefined,
  },
  render: (args) => (
    <Container {...args}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi dolor quos
      qui, suscipit magni sit nisi, explicabo laborum quasi nam architecto
      dolorum eaque iusto libero autem? Doloribus qui laborum optio?
    </Container>
  ),
};

export const FluidWidth: Story = {
  args: {
    variant: 'fluid',
  },
  render: (args) => (
    <Container {...args}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi dolor quos
      qui, suscipit magni sit nisi, explicabo laborum quasi nam architecto
      dolorum eaque iusto libero autem? Doloribus qui laborum optio?
    </Container>
  ),
};
