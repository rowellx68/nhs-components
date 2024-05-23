import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Details } from './Details';

it('should render the Details component', () => {
  const { container } = render(
    <Details data-testid="details">
      <Details.Summary data-testid="details-summary">
        How to find your NHS number
      </Details.Summary>
      <Details.Text data-testid="details-text">
        <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
        <p>
          You can find your NHS number by logging in to a GP online service or
          on any document the NHS has sent you, such as your:
        </p>
        <ul>
          <li>prescriptions</li>
          <li>test results</li>
          <li>hospital referral letters</li>
          <li>appointment letters</li>
        </ul>
        <p>Ask your GP surgery for help if you can't find your NHS number.</p>
      </Details.Text>
    </Details>,
  );

  expect(container).toMatchSnapshot();
});
