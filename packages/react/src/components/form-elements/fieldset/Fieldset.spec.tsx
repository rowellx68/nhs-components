import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Fieldset } from './Fieldset';

it('renders a fieldset element with the nhsuk-fieldset class', async () => {
  const page = await render(
    <Fieldset>
      <Fieldset.Legend>Where do you live?</Fieldset.Legend>
    </Fieldset>,
  );
  expect(page.container.querySelector('fieldset.nhsuk-fieldset')).toBeInTheDocument();
});

it('renders the legend', async () => {
  const page = await render(
    <Fieldset>
      <Fieldset.Legend>Where do you live?</Fieldset.Legend>
    </Fieldset>,
  );
  await expect.element(page.getByText('Where do you live?')).toBeInTheDocument();
});

it('applies a size class to the legend', async () => {
  const page = await render(
    <Fieldset>
      <Fieldset.Legend size="l">Where do you live?</Fieldset.Legend>
    </Fieldset>,
  );
  expect(page.container.querySelector('.nhsuk-fieldset__legend--l')).toBeInTheDocument();
});

it('wraps the legend as a page heading', async () => {
  const page = await render(
    <Fieldset>
      <Fieldset.Legend variant="page-heading" size="l">
        Where do you live?
      </Fieldset.Legend>
    </Fieldset>,
  );
  expect(page.container.querySelector('h1.nhsuk-fieldset__heading')).toBeInTheDocument();
});
