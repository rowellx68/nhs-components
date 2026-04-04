import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { InsetText } from './InsetText';

it('renders with the nhsuk-inset-text class', async () => {
  const page = await render(<InsetText>Important information here.</InsetText>);
  expect(page.container.querySelector('.nhsuk-inset-text')).toBeInTheDocument();
});

it('renders children content', async () => {
  const page = await render(<InsetText>Important information here.</InsetText>);
  await expect.element(page.getByText('Important information here.')).toBeInTheDocument();
});

it('renders the default visually hidden text', async () => {
  const page = await render(<InsetText>Content</InsetText>);
  expect(page.container.querySelector('.nhsuk-u-visually-hidden')).toBeInTheDocument();
});
