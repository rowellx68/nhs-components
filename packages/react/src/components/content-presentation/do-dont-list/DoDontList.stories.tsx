import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { DoDontList } from './DoDontList';

/**
 * Use Do and Don't lists to help users understand more easily what they should and shouldn't do.
 *
 * https://service-manual.nhs.uk/design-system/components/do-and-dont-lists
 */
const meta = {
  // eslint-disable-next-line @stylistic/quotes
  title: "Components/Content Presentation/Do Don't List",
  component: DoDontList,
  subcomponents: {
    'DoDontList.Title': DoDontList.Title,
    'DoDontList.List': DoDontList.List,
    'DoDontList.Item': DoDontList.Item,
  } as Record<string, React.ComponentType<any>>,
} satisfies Meta<typeof DoDontList>;

export default meta;

type Story = StoryObj<typeof DoDontList>;

export const Default: Story = {
  render: () => (
    <DoDontList>
      <DoDontList.Title>Do</DoDontList.Title>
      <DoDontList.List variant="do">
        <DoDontList.Item variant="do">
          cover blisters with a soft plaster or padded dressing
        </DoDontList.Item>
        <DoDontList.Item variant="do">
          wash your hands before touching a burst blister
        </DoDontList.Item>
        <DoDontList.Item variant="do">
          allow the fluid in a burst blister to drain before covering it with a plaster or dressing
        </DoDontList.Item>
      </DoDontList.List>
    </DoDontList>
  ),
};

export const DoWithCustomPrefix: Story = {
  name: '(do) with custom prefix',
  render: () => (
    <DoDontList>
      <DoDontList.Title>Do</DoDontList.Title>
      <DoDontList.List variant="do">
        <DoDontList.Item variant="do">
          always cover blisters with a soft plaster or padded dressing
        </DoDontList.Item>
        <DoDontList.Item variant="do">
          always wash your hands before touching a burst blister
        </DoDontList.Item>
        <DoDontList.Item variant="do">
          always allow the fluid in a burst blister to drain before covering it with a plaster or
          dressing
        </DoDontList.Item>
      </DoDontList.List>
    </DoDontList>
  ),
};

export const Dont: Story = {
  name: '(don\'t)',
  render: () => (
    <DoDontList>
      <DoDontList.Title>Don't</DoDontList.Title>
      <DoDontList.List variant="dont">
        <DoDontList.Item variant="dont">do not burst a blister yourself</DoDontList.Item>
        <DoDontList.Item variant="dont">do not peel the skin off a burst blister</DoDontList.Item>
        <DoDontList.Item variant="dont">
          do not pick at the edges of the remaining skin
        </DoDontList.Item>
        <DoDontList.Item variant="dont">
          do not wear the shoes or use the equipment that caused your blister until it heals
        </DoDontList.Item>
      </DoDontList.List>
    </DoDontList>
  ),
};

export const DontWithCustomPrefix: Story = {
  name: '(don\'t) with custom prefix',
  render: () => (
    <DoDontList>
      <DoDontList.Title>Never</DoDontList.Title>
      <DoDontList.List variant="dont">
        <DoDontList.Item variant="dont">never burst a blister yourself</DoDontList.Item>
        <DoDontList.Item variant="dont">never peel the skin off a burst blister</DoDontList.Item>
        <DoDontList.Item variant="dont">
          never pick at the edges of the remaining skin
        </DoDontList.Item>
        <DoDontList.Item variant="dont">
          never wear the shoes or use the equipment that caused your blister until it heals
        </DoDontList.Item>
      </DoDontList.List>
    </DoDontList>
  ),
};

export const DontWithHiddenPrefix: Story = {
  name: '(don\'t) with hidden prefix',
  render: () => (
    <DoDontList>
      <DoDontList.Title>Don't</DoDontList.Title>
      <DoDontList.List variant="dont">
        <DoDontList.Item variant="dont">avoid bursting a blister yourself</DoDontList.Item>
        <DoDontList.Item variant="dont">
          certainly don't peel the skin off a burst blister
        </DoDontList.Item>
        <DoDontList.Item variant="dont">
          absolutely do not pick at the edges of the remaining skin
        </DoDontList.Item>
        <DoDontList.Item variant="dont">
          please don't wear the shoes or use the equipment that caused your blister until it heals
        </DoDontList.Item>
      </DoDontList.List>
    </DoDontList>
  ),
};
