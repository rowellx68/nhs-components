import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { ReadingWidth } from './ReadingWidth';

it('renders with the nhsuk-u-reading-width class', async () => {
  const page = await render(<ReadingWidth>Content</ReadingWidth>);
  expect(page.container.querySelector('.nhsuk-u-reading-width')).toBeInTheDocument();
});
