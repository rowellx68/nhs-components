import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SummaryList } from './SummaryList';

/**
 * Use the summary list to summarise information, for example, a user's responses at the end of a form.
 *
 * https://service-manual.nhs.uk/design-system/components/summary-list
 */
const meta: Meta<typeof SummaryList> = {
  title: 'Components/Content Presentation/Summary List',
  component: SummaryList,
  subcomponents: {
    'SummaryList.Row': SummaryList.Row,
  } as Record<string, React.ComponentType<any>>,
};

export default meta;

type Story = StoryObj<typeof SummaryList>;

export const Default: Story = {
  render: (args) => (
    <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>John Smith</SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="name" href="#">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth </SummaryList.Key>
        <SummaryList.Value>1 January 1990</SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="date of birth" href="#">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Address</SummaryList.Key>
        <SummaryList.Value>
          1 Smith Street, Smithville, <br />
          Smithfield, <br />
          Smithshire, <br />
          SM1 1SM
        </SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="address" href="#">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          07000 000000 <br />
          john.smith@email.com
        </SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="contact details" href="#">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
    </SummaryList>
  ),
};

export const NoBorder: Story = {
  args: {
    variant: 'no-border',
  },
  render: (args) => (
    <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>John Smith</SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="name" href="#">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth </SummaryList.Key>
        <SummaryList.Value>1 January 1990</SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="date of birth" href="#">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Address</SummaryList.Key>
        <SummaryList.Value>
          1 Smith Street, Smithville, <br />
          Smithfield, <br />
          Smithshire, <br />
          SM1 1SM
        </SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="address" href="#">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          07000 000000 <br />
          john.smith@email.com
        </SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="contact details" href="#">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
    </SummaryList>
  ),
};
