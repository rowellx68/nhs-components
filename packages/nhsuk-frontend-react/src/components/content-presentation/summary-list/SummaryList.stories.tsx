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
};

export default meta;

type Story = StoryObj<typeof SummaryList>;

export const Default: Story = {
  render: (args) => (
    <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Row.Key>Name</SummaryList.Row.Key>
        <SummaryList.Row.Value>John Smith</SummaryList.Row.Value>
        <SummaryList.Row.Actions>
          <SummaryList.Row.ActionLink visuallyHiddenText="name" href="#">
            Change
          </SummaryList.Row.ActionLink>
        </SummaryList.Row.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Row.Key>Date of birth </SummaryList.Row.Key>
        <SummaryList.Row.Value>1 January 1990</SummaryList.Row.Value>
        <SummaryList.Row.Actions>
          <SummaryList.Row.ActionLink
            visuallyHiddenText="date of birth"
            href="#"
          >
            Change
          </SummaryList.Row.ActionLink>
        </SummaryList.Row.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Row.Key>Address</SummaryList.Row.Key>
        <SummaryList.Row.Value>
          1 Smith Street, Smithville, <br />
          Smithfield, <br />
          Smithshire, <br />
          SM1 1SM
        </SummaryList.Row.Value>
        <SummaryList.Row.Actions>
          <SummaryList.Row.ActionLink visuallyHiddenText="address" href="#">
            Change
          </SummaryList.Row.ActionLink>
        </SummaryList.Row.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Row.Key>Contact details</SummaryList.Row.Key>
        <SummaryList.Row.Value>
          07000 000000 <br />
          john.smith@email.com
        </SummaryList.Row.Value>
        <SummaryList.Row.Actions>
          <SummaryList.Row.ActionLink
            visuallyHiddenText="contact details"
            href="#"
          >
            Change
          </SummaryList.Row.ActionLink>
        </SummaryList.Row.Actions>
      </SummaryList.Row>
    </SummaryList>
  ),
};
