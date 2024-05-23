import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from './Paragraph';

/**
 * https://service-manual.nhs.uk/design-system/styles/typography#paragraphs
 */
const meta: Meta<typeof Paragraph> = {
  title: 'Styles/Typography/Paragraph',
  component: Paragraph,
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    children: 'nhsuk-body',
  },
  render: (args) => <Paragraph {...args} />,
};

export const Lead: Story = {
  args: {
    variant: 'lead',
    children: 'nhsuk-body-l',
  },
  render: (args) => <Paragraph {...args} />,
};

export const Small: Story = {
  args: {
    variant: 'small',
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
      <Paragraph>
        Modify the direction of writing in Arabic to be from right to left
      </Paragraph>
    </>
  ),
};
