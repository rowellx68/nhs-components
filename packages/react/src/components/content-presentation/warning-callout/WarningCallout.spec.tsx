import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { WarningCallout } from './WarningCallout';

it('renders with the warning card classes', async () => {
  const page = await render(
    <WarningCallout>
      <WarningCallout.Label>School, nursery or work</WarningCallout.Label>
      <WarningCallout.Description>
        Stay off school until your symptoms have gone.
      </WarningCallout.Description>
    </WarningCallout>,
  );
  expect(page.container.querySelector('.nhsuk-card.nhsuk-card--warning')).toBeInTheDocument();
});

it('renders label and description content', async () => {
  const page = await render(
    <WarningCallout>
      <WarningCallout.Label>School, nursery or work</WarningCallout.Label>
      <WarningCallout.Description>
        Stay off school until your symptoms have gone.
      </WarningCallout.Description>
    </WarningCallout>,
  );
  await expect.element(page.getByText('School, nursery or work')).toBeInTheDocument();
  await expect
    .element(page.getByText('Stay off school until your symptoms have gone.'))
    .toBeInTheDocument();
});
