import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { ContentsList } from './ContentsList';

/**
 * Use contents lists to allow users to navigate between related pages, for example about a single condition.
 *
 * https://service-manual.nhs.uk/design-system/components/contents-list
 */
const meta = {
  title: 'Components/Navigation/Contents List',
  component: ContentsList,
  subcomponents: {
    'ContentsList.Item': ContentsList.Item,
    'ContentsList.Link': ContentsList.Link,
  } as Record<string, React.ComponentType<any>>,
} satisfies Meta<typeof ContentsList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    'aria-label': 'Pages in this guide',
  },
  render: (args) => (
    <ContentsList {...args}>
      <ContentsList.Item active>
        <ContentsList.Link active href="#">
          What is AMD?
        </ContentsList.Link>
      </ContentsList.Item>
      <ContentsList.Item>
        <ContentsList.Link href="#">Symptoms</ContentsList.Link>
      </ContentsList.Item>
      <ContentsList.Item>
        <ContentsList.Link href="#">Getting diagnosed</ContentsList.Link>
      </ContentsList.Item>
      <ContentsList.Item>
        <ContentsList.Link href="#">Treatments</ContentsList.Link>
      </ContentsList.Item>
      <ContentsList.Item>
        <ContentsList.Link href="#">Living with AMD</ContentsList.Link>
      </ContentsList.Item>
    </ContentsList>
  ),
};
