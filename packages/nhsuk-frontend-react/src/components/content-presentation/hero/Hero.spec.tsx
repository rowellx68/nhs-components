import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Hero } from './Hero';

it('should render the Hero component', () => {
  const { container } = render(
    <Hero>
      <Hero.Container>
        <Hero.Heading>We're here for you</Hero.Heading>
        <Hero.Paragraph>
          Helping you take control of your health and wellbeing.
        </Hero.Paragraph>
      </Hero.Container>
    </Hero>,
  );

  expect(container).toMatchSnapshot();
});

it('should render the image-and-content variant of the Hero component', () => {
  const { container } = render(
    <Hero
      variant="image-and-content"
      imageUrl="https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"
    >
      <Hero.Container variant="overlay">
        <Hero.Heading>We're here for you</Hero.Heading>
        <Hero.Paragraph>
          Helping you take control of your health and wellbeing.
        </Hero.Paragraph>
      </Hero.Container>
    </Hero>,
  );

  expect(container).toMatchSnapshot();
});

it('should render the image-only variant of the Hero component', () => {
  const { container } = render(
    <Hero
      variant="image-only"
      imageUrl="https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"
    />,
  );

  expect(container).toMatchSnapshot();
});
