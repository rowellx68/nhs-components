import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Input } from './Input';

it('associates the label with the input', async () => {
  const page = await render(<Input id="name" label="First name" />);
  await expect.element(page.getByLabelText('First name')).toBeInTheDocument();
});

it('renders hint text', async () => {
  const page = await render(<Input id="dob" label="Date of birth" hint="For example, 15 3 1984" />);
  await expect.element(page.getByText('For example, 15 3 1984')).toBeInTheDocument();
});

it('renders an error message and applies the error class to the input', async () => {
  const page = await render(
    <Input id="nhs-number" label="NHS number" error="Enter your NHS number" />,
  );
  await expect.element(page.getByRole('textbox')).toHaveClass('nhsuk-input--error');
  await expect.element(page.getByText('Enter your NHS number')).toBeInTheDocument();
});

it.each(['2', '3', '4', '5', '10', '20', '30'] as const)(
  'applies the nhsuk-input--width-%s class for width="%s"',
  async (width) => {
    const page = await render(<Input id="x" label="l" width={width} />);
    await expect.element(page.getByRole('textbox')).toHaveClass(`nhsuk-input--width-${width}`);
  },
);

it.each(['full', 'one-half', 'one-third', 'two-thirds'] as const)(
  'applies the nhsuk-u-width-%s class for fluid width="%s"',
  async (width) => {
    const page = await render(<Input id="x" label="l" width={width} />);
    await expect.element(page.getByRole('textbox')).toHaveClass(`nhsuk-u-width-${width}`);
  },
);

it('applies the code variant class', async () => {
  const page = await render(<Input id="x" label="NHS number" variant="code" />);
  await expect.element(page.getByRole('textbox')).toHaveClass('nhsuk-input--code');
});

it('renders a prefix', async () => {
  const page = await render(<Input id="x" label="Amount" prefix="£" />);
  expect(page.container.querySelector('.nhsuk-input-wrapper__prefix')).toBeInTheDocument();
});

it('renders a suffix', async () => {
  const page = await render(<Input id="x" label="Weight" suffix="kg" />);
  expect(page.container.querySelector('.nhsuk-input-wrapper__suffix')).toBeInTheDocument();
});
