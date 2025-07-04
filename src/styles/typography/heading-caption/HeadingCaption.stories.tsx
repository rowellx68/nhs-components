import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeadingCaption } from './HeadingCaption';
import { Heading } from '../heading/Heading';

/**
 * https://service-manual.nhs.uk/design-system/styles/typography#headings
 */
const meta: Meta<typeof HeadingCaption> = {
  title: 'Styles/Typography/HeadingCaption',
  component: HeadingCaption,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['xl', 'l', 'm'],
      table: {
        type: {
          summary: 'union',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const XL: Story = {
  args: {
    size: 'xl',
  },
  render: (args) => (
    <HeadingCaption {...args}>
      nhsuk-caption-
      {args.size}
    </HeadingCaption>
  ),
};

export const WithHeading: Story = {
  args: {
    size: 'xl',
  },
  render: ({ size, ...args }) => (
    <>
      <HeadingCaption size={size} {...args}>
        nhsuk-caption-{size}
      </HeadingCaption>
      <Heading size={size}>nhsuk-heading-{size}</Heading>
    </>
  ),
};

export const WithHeadingCaptionBottom: Story = {
  args: {
    size: 'xl',
  },
  render: ({ size, ...args }) => (
    <>
      <Heading variant="caption-bottom" size={size}>
        nhsuk-heading-{size}
      </Heading>
      <HeadingCaption size={size} {...args}>
        nhsuk-caption-{size}
      </HeadingCaption>
    </>
  ),
};

export const WithCaptionInsideHeading: Story = {
  args: {
    size: 'xl',
  },
  render: ({ size, ...args }) => (
    <Heading size={size}>
      <HeadingCaption size={size} {...args}>
        nhsuk-caption-{size}
      </HeadingCaption>
      nhsuk-heading-{size}
    </Heading>
  ),
};
