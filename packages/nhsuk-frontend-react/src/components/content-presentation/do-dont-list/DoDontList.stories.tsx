import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DoDontList } from './DoDontList';

/**
 * Use Do and Don't lists to help users understand more easily what they should and shouldn't do.
 *
 * https://service-manual.nhs.uk/design-system/components/do-and-dont-lists
 */
const meta: Meta<typeof DoDontList> = {
  // eslint-disable-next-line @stylistic/quotes
  title: "Components/Content Presentation/Do Don't List",
  component: DoDontList,
  subcomponents: {
    'DoDontList.Label': DoDontList.Label,
    'DoDontList.List': DoDontList.List,
    'DoDontList.Item': DoDontList.Item,
  } as Record<string, React.ComponentType<any>>,
};

export default meta;

type Story = StoryObj<typeof DoDontList>;

export const DoList: Story = {
  args: {
    variant: 'do',
  },
  render: (args) => (
    <DoDontList {...args}>
      <DoDontList.Label as="h2">Do</DoDontList.Label>
      <DoDontList.List>
        <DoDontList.Item>
          cover blisters that are likely to burst with a soft plaster or
          dressing
        </DoDontList.Item>
        <DoDontList.Item>
          wash your hands before touching a burst blister{' '}
        </DoDontList.Item>
        <DoDontList.Item>
          allow the fluid in a burst blister to drain before covering it with a
          plaster or dressing{' '}
        </DoDontList.Item>
      </DoDontList.List>
    </DoDontList>
  ),
};

export const DontList: Story = {
  args: {
    variant: 'dont',
  },
  render: (args) => (
    <DoDontList {...args}>
      <DoDontList.Label as="h2">Don't</DoDontList.Label>
      <DoDontList.List>
        <DoDontList.Item>do not burst a blister yourself</DoDontList.Item>
        <DoDontList.Item>
          do not peel the skin off a burst blister
        </DoDontList.Item>
        <DoDontList.Item>
          do not pick at the edges of the remaining skin
        </DoDontList.Item>
        <DoDontList.Item>
          do not wear the shoes or use the equipment that caused your blister
          until it heals
        </DoDontList.Item>
      </DoDontList.List>
    </DoDontList>
  ),
};
