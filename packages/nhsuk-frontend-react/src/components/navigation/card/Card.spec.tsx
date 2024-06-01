import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, {
  TopTask as TopTaskStory,
  Primary as PrimaryStory,
  Secondary as SecondaryStory,
  WithImage as WithImageStory,
  AToZ as AToZStory,
  NonUrgentCareCard as NonUrgentCareCardStory,
  UrgentCareCard as UrgentCareCardStory,
  EmergencyCareCard as EmergencyCareCardStory,
} from './Card.stories';

const TopTask = composeStory(TopTaskStory, meta);
const Primary = composeStory(PrimaryStory, meta);
const Secondary = composeStory(SecondaryStory, meta);
const WithImage = composeStory(WithImageStory, meta);
const AToZ = composeStory(AToZStory, meta);
const NonUrgentCareCard = composeStory(NonUrgentCareCardStory, meta);
const UrgentCareCard = composeStory(UrgentCareCardStory, meta);
const EmergencyCareCard = composeStory(EmergencyCareCardStory, meta);

it('should render the top task card component', () => {
  const { container } = render(<TopTask />);

  expect(container).toMatchSnapshot();
  expect(container.querySelector('h5')).toBeInTheDocument();
});

it('should render the card component with a primary variant', () => {
  const { container } = render(<Primary />);

  expect(container).toMatchSnapshot();
  expect(container.querySelector('h2')).toBeInTheDocument();
  expect(
    container.querySelector('.nhsuk-icon__chevron-right-circle'),
  ).toBeInTheDocument();
});

it('should render the card component with a secondary variant', () => {
  const { container } = render(<Secondary />);

  expect(container).toMatchSnapshot();
  expect(container.querySelector('h2')).toBeInTheDocument();
});

it('should render the card component with an image', () => {
  const { container } = render(<WithImage />);

  expect(container).toMatchSnapshot();
  expect(container.querySelector('h2')).toBeInTheDocument();
  expect(container.querySelector('img')).toBeInTheDocument();
});

it('should render the card component with a feature variant', () => {
  const { container } = render(<AToZ />);

  expect(container).toMatchSnapshot();
  expect(container.querySelector('h2')).toBeInTheDocument();
  expect(container.querySelector('.nhsuk-card--feature')).toBeInTheDocument();
});

it('should render the card component with a non-urgent variant', () => {
  const { container } = render(<NonUrgentCareCard />);

  expect(container).toMatchSnapshot();
  expect(container.querySelector('h2')).toBeInTheDocument();
  expect(
    container.querySelector('.nhsuk-u-visually-hidden'),
  ).toBeInTheDocument();
  expect(
    container.querySelector('.nhsuk-card--care--non-urgent'),
  ).toBeInTheDocument();
});

it('should render the card component with an urgent variant', () => {
  const { container } = render(<UrgentCareCard />);

  expect(container).toMatchSnapshot();
  expect(container.querySelector('h2')).toBeInTheDocument();
  expect(
    container.querySelector('.nhsuk-u-visually-hidden'),
  ).toBeInTheDocument();
  expect(
    container.querySelector('.nhsuk-card--care--urgent'),
  ).toBeInTheDocument();
});

it('should render the card component with an emergency variant', () => {
  const { container } = render(<EmergencyCareCard />);

  expect(container).toMatchSnapshot();
  expect(container.querySelector('h2')).toBeInTheDocument();
  expect(
    container.querySelector('.nhsuk-u-visually-hidden'),
  ).toBeInTheDocument();
  expect(
    container.querySelector('.nhsuk-card--care--emergency'),
  ).toBeInTheDocument();
});
