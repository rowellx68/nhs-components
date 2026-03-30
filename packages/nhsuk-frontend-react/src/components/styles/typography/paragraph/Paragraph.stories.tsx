import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Paragraph } from './Paragraph';

/**
 * https://service-manual.nhs.uk/design-system/styles/typography#paragraphs
 */
const meta = {
  title: 'Styles/Typography/Paragraph',
  component: Paragraph,
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    children: 'nhsuk-body',
  },
  render: (args) => <Paragraph {...args} />,
};

export const Large: Story = {
  args: {
    size: 'l',
    children: 'nhsuk-body-l',
  },
  render: (args) => <Paragraph {...args} />,
};

/**
 * This is the same as not providing a size.
 */
export const Medium: Story = {
  args: {
    size: 'm',
    children: 'nhsuk-body-m',
  },
  render: (args) => <Paragraph {...args} />,
};

export const Small: Story = {
  args: {
    size: 's',
    children: 'nhsuk-body-s',
  },
  render: (args) => <Paragraph {...args} />,
};

export const FontSizes: Story = {
  args: {
    fontSize: '64',
  },
  argTypes: {
    fontSize: {
      control: {
        type: 'select',
      },
      options: ['64', '48', '32', '24', '22', '19', '16', '14'],
    },
  },
  render: (args) => (
    <Paragraph {...args}>
      nhsuk-u-font-size-
      {args.fontSize}
    </Paragraph>
  ),
};

export const FontWeights: Story = {
  args: {
    fontWeight: 'bold',
  },
  argTypes: {
    fontWeight: {
      control: {
        type: 'select',
      },
      options: ['bold', 'normal'],
    },
  },
  render: (args) => (
    <Paragraph {...args}>
      nhsuk-u-font-weight-
      {args.fontWeight}
    </Paragraph>
  ),
};

export const TextAlignRight: Story = {
  args: {
    textAlignRight: true,
    children: 'تعديل اتجاه الكتابة باللغة العربية ليكون من اليمين الى اليسار',
  },
  render: (args) => (
    <>
      <Paragraph {...args} />
      <Paragraph>Modify the direction of writing in Arabic to be from right to left</Paragraph>
    </>
  ),
};
