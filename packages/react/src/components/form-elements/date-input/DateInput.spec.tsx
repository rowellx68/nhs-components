import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { DateInput } from './DateInput';

it('renders with the nhsuk-date-input class', async () => {
  const page = await render(<DateInput id="dob" label="Date of birth" namePrefix="dob" />);
  expect(page.container.querySelector('.nhsuk-date-input')).toBeInTheDocument();
});

it('renders day, month and year inputs', async () => {
  const page = await render(<DateInput id="dob" label="Date of birth" namePrefix="dob" />);
  const inputs = page.container.querySelectorAll('input.nhsuk-date-input__input');
  expect(inputs).toHaveLength(3);
});

it('renders an error message', async () => {
  const page = await render(
    <DateInput id="dob" label="Date of birth" namePrefix="dob" error="Enter a date of birth" />,
  );
  await expect.element(page.getByText('Enter a date of birth')).toBeInTheDocument();
});
