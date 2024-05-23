import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

/**
 * https://service-manual.nhs.uk/design-system/styles/typography#headings
 */
const meta: Meta<typeof Heading> = {
  title: 'Styles/Typography/Heading',
  component: Heading,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    as: 'h1',
    size: 'xl',
  },
  argTypes: {
    as: {
      control: false,
      table: {
        type: {
          summary: 'union',
        },
        defaultValue: {
          summary: 'h1',
        },
      },
    },
  },
  render: (args) => (
    <Heading {...args}>
      nhsuk-heading-
      {args.size}
    </Heading>
  ),
};

export const H2: Story = {
  args: {
    as: 'h2',
    size: 'l',
  },
  argTypes: {
    as: {
      control: false,
      table: {
        type: {
          summary: 'union',
        },
        defaultValue: {
          summary: 'h1',
        },
      },
    },
  },
  render: (args) => (
    <Heading {...args}>
      nhsuk-heading-
      {args.size}
    </Heading>
  ),
};

export const H3: Story = {
  args: {
    as: 'h3',
    size: 'm',
  },
  argTypes: {
    as: {
      control: false,
      table: {
        type: {
          summary: 'union',
        },
        defaultValue: {
          summary: 'h1',
        },
      },
    },
  },
  render: (args) => (
    <Heading {...args}>
      nhsuk-heading-
      {args.size}
    </Heading>
  ),
};

export const H4: Story = {
  args: {
    as: 'h4',
    size: 's',
  },
  argTypes: {
    as: {
      control: false,
      table: {
        type: {
          summary: 'union',
        },
        defaultValue: {
          summary: 'h1',
        },
      },
    },
  },
  render: (args) => (
    <Heading {...args}>
      nhsuk-heading-
      {args.size}
    </Heading>
  ),
};

export const H5: Story = {
  args: {
    as: 'h5',
    size: 'xs',
  },
  argTypes: {
    as: {
      control: false,
      table: {
        type: {
          summary: 'union',
        },
        defaultValue: {
          summary: 'h1',
        },
      },
    },
  },
  render: (args) => (
    <Heading {...args}>
      nhsuk-heading-
      {args.size}
    </Heading>
  ),
};
