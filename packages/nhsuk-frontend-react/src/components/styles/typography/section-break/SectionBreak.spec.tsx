import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { SectionBreak } from './SectionBreak';

it('renders an hr with the nhsuk-section-break class', async () => {
  const page = await render(<SectionBreak />);
  expect(page.container.querySelector('hr.nhsuk-section-break')).toBeInTheDocument();
});

it.each(['m', 'l', 'xl'] as const)(
  'applies the nhsuk-section-break--%s size class',
  async (size) => {
    const page = await render(<SectionBreak size={size} />);
    expect(page.container.querySelector(`.nhsuk-section-break--${size}`)).toBeInTheDocument();
  },
);

it('applies the visible class when visible is true', async () => {
  const page = await render(<SectionBreak visible />);
  expect(page.container.querySelector('.nhsuk-section-break--visible')).toBeInTheDocument();
});
