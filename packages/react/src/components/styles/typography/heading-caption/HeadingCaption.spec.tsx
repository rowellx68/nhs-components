import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { HeadingCaption } from './HeadingCaption';

it.each(['xl', 'l', 'm'] as const)('applies the nhsuk-caption-%s class', async (size) => {
  const page = await render(<HeadingCaption size={size}>Subtitle</HeadingCaption>);
  expect(page.container.querySelector(`.nhsuk-caption-${size}`)).toBeInTheDocument();
});

it('renders the caption text', async () => {
  const page = await render(<HeadingCaption size="l">NHS Health Check</HeadingCaption>);
  await expect.element(page.getByText('NHS Health Check')).toBeInTheDocument();
});
