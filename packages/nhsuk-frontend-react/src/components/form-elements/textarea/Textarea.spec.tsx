import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Textarea } from './Textarea';

it('renders a textarea with the nhsuk-textarea class', async () => {
  const page = await render(<Textarea id="more-detail" label="Can you provide more detail?" />);
  expect(page.container.querySelector('textarea.nhsuk-textarea')).toBeInTheDocument();
});

it('associates the label with the textarea', async () => {
  const page = await render(<Textarea id="more-detail" label="Can you provide more detail?" />);
  await expect.element(page.getByLabelText('Can you provide more detail?')).toBeInTheDocument();
});

it('renders an error message and applies the error class', async () => {
  const page = await render(
    <Textarea id="more-detail" label="Details" error="Enter more detail" />,
  );
  expect(page.container.querySelector('textarea.nhsuk-textarea--error')).toBeInTheDocument();
  await expect.element(page.getByText('Enter more detail')).toBeInTheDocument();
});
