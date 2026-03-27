import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Row, Column } from './Grid';

it('renders a Row with the nhsuk-grid-row class', async () => {
  const page = await render(<Row>Content</Row>);
  expect(page.container.querySelector('.nhsuk-grid-row')).toBeInTheDocument();
});

it.each(['full', 'one-half', 'one-third', 'two-thirds', 'one-quarter'] as const)(
  'renders a Column with the nhsuk-grid-column-%s class',
  async (width) => {
    const page = await render(<Column width={width}>Content</Column>);
    expect(page.container.querySelector(`.nhsuk-grid-column-${width}`)).toBeInTheDocument();
  },
);
