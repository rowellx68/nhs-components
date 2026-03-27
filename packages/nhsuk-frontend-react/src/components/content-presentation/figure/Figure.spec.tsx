import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Figure } from './Figure';

it('renders a figure element with the nhsuk-image class', async () => {
  const page = await render(
    <Figure>
      <Figure.Image src="/photo.jpg" alt="A photo" />
    </Figure>,
  );
  expect(page.container.querySelector('figure.nhsuk-image')).toBeInTheDocument();
});

it('renders the image with the nhsuk-image__img class', async () => {
  const page = await render(
    <Figure>
      <Figure.Image src="/photo.jpg" alt="A photo" />
    </Figure>,
  );
  expect(page.container.querySelector('img.nhsuk-image__img')).toBeInTheDocument();
});

it('renders a caption with the nhsuk-image__caption class', async () => {
  const page = await render(
    <Figure>
      <Figure.Image src="/photo.jpg" alt="" />
      <Figure.Caption>A description of the image.</Figure.Caption>
    </Figure>,
  );
  expect(page.container.querySelector('figcaption.nhsuk-image__caption')).toBeInTheDocument();
  await expect.element(page.getByText('A description of the image.')).toBeInTheDocument();
});
