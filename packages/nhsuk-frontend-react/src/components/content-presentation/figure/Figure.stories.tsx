import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Figure } from './Figure';

/**
 * Use images only if there is a real user need. Avoid unnecessary decoration.
 *
 * https://service-manual.nhs.uk/design-system/components/images
 */
const meta: Meta<typeof Figure> = {
  title: 'Components/Content Presentation/Figure',
  component: Figure,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ImageWithCaption: Story = {
  render: (args) => (
    <Figure {...args}>
      <Figure.Image
        src="https://assets.nhs.uk/prod/images/S_0318_Bullous_pemphigoid_lesions_.2e16d0ba.fill-320x213.jpg"
        alt="Lots of sore red patches with small blisters spread across white skin on a woman&#39;s chest."
      />
      <Figure.Caption>
        It can affect large areas of the body or limbs.
      </Figure.Caption>
    </Figure>
  ),
};

export const ImageWithoutCaption: Story = {
  render: (args) => (
    <Figure {...args}>
      <Figure.Image
        src="https://assets.nhs.uk/prod/images/S_0318_Bullous_pemphigoid_lesions_.2e16d0ba.fill-320x213.jpg"
        alt="Lots of sore red patches with small blisters spread across
        white skin on a woman&#39;s chest."
      />
    </Figure>
  ),
};
