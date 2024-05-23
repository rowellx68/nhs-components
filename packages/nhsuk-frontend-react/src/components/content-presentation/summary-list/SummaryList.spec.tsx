import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { SummaryList } from './SummaryList';

it('should render the SummaryList component', () => {
  const { container } = render(
    <SummaryList>
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
    </SummaryList>,
  );

  expect(container).toMatchSnapshot();
  expect(
    container.querySelectorAll('a > .nhsuk-u-visually-hidden'),
  ).toHaveLength(4);
});
