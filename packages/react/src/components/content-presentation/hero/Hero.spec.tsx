import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Hero } from './Hero';

it('renders a section element with the nhsuk-hero class', async () => {
  const page = await render(
    <Hero>
      <Hero.Container>
        <Hero.Heading>We're here for you</Hero.Heading>
      </Hero.Container>
    </Hero>,
  );
  expect(page.container.querySelector('section.nhsuk-hero')).toBeInTheDocument();
});

it('renders heading and paragraph sub-components', async () => {
  const page = await render(
    <Hero>
      <Hero.Container>
        <Hero.Heading>We're here for you</Hero.Heading>
        <Hero.Paragraph>Helping you take control of your health.</Hero.Paragraph>
      </Hero.Container>
    </Hero>,
  );
  await expect.element(page.getByText('We\'re here for you')).toBeInTheDocument();
  await expect
    .element(page.getByText('Helping you take control of your health.'))
    .toBeInTheDocument();
});

it('applies the image-only variant class', async () => {
  const page = await render(<Hero variant="image-only" imageUrl="/hero.jpg" />);
  expect(page.container.querySelector('.nhsuk-hero--image')).toBeInTheDocument();
});

it('applies the image-and-content variant classes', async () => {
  const page = await render(
    <Hero variant="image-and-content" imageUrl="/hero.jpg">
      <Hero.Container>
        <Hero.Heading>Title</Hero.Heading>
      </Hero.Container>
    </Hero>,
  );
  expect(page.container.querySelector('.nhsuk-hero--image')).toBeInTheDocument();
  expect(page.container.querySelector('.nhsuk-hero--image-description')).toBeInTheDocument();
});
