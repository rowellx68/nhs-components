import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Select } from './Select';

it('renders a select element with the nhsuk-select class', async () => {
  const page = await render(
    <Select id="select-1" label="Select a country">
      <Select.Option value="england">England</Select.Option>
      <Select.Option value="scotland">Scotland</Select.Option>
    </Select>,
  );
  expect(page.container.querySelector('select.nhsuk-select')).toBeInTheDocument();
});

it('associates the label with the select', async () => {
  const page = await render(
    <Select id="select-1" label="Select a country">
      <Select.Option value="england">England</Select.Option>
    </Select>,
  );
  await expect.element(page.getByLabelText('Select a country')).toBeInTheDocument();
});

it('renders options', async () => {
  const page = await render(
    <Select id="select-1" label="Select a country">
      <Select.Option value="england">England</Select.Option>
      <Select.Option value="scotland">Scotland</Select.Option>
    </Select>,
  );
  const options = page.container.querySelectorAll('option');
  expect(options).toHaveLength(2);
});

it('applies the error class when an error is provided', async () => {
  const page = await render(
    <Select id="select-1" label="Select a country" error="Select a country">
      <Select.Option value="">Please select</Select.Option>
    </Select>,
  );
  expect(page.container.querySelector('select.nhsuk-select--error')).toBeInTheDocument();
});
