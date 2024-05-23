import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ActionLink } from './ActionLink';

/**
 * Use action links to help users get to the next stage of a journey quickly by signposting the start of a digital service.
 *
 * https://service-manual.nhs.uk/design-system/components/action-link
 *
 * This is a polymorphic component that renders an anchor element by default. You can change the element type by using the `as` prop.
 */
const meta: Meta<typeof ActionLink> = {
  title: 'Components/Navigation/Action Link',
  component: ActionLink,
  argTypes: {
    as: {
      control: false,
      description:
        'The component to render the `ActionLink` as. This can be an anchor or a link-like component.',
      table: {
        defaultValue: {
          summary: 'a',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ActionLink>;

export const Default: Story = {
  args: {
    children: 'Find a minor injuries unit',
  },
  render: (args) => <ActionLink href="#" {...args} />,
};
