import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import meta, {
  FullWidth as FullWidthStory,
  OneHalf as oneHalfStory,
  OneThird as OneThirdStory,
  TwoThirds as TwoThirdsStory,
  OneQuarter as OneQuarterStory,
  ThreeQuarters as ThreeQuartersStory,
  NestedGrid as NestedGridStory,
} from './Grid.stories';

const FullWidth = composeStory(FullWidthStory, meta);
const OneHalf = composeStory(oneHalfStory, meta);
const OneThird = composeStory(OneThirdStory, meta);
const TwoThirds = composeStory(TwoThirdsStory, meta);
const OneQuarter = composeStory(OneQuarterStory, meta);
const ThreeQuarters = composeStory(ThreeQuartersStory, meta);
const NestedGrid = composeStory(NestedGridStory, meta);

it('should render the FullWidth Grid component', () => {
  const { container } = render(<FullWidth />);

  expect(
    container.querySelector('.nhsuk-grid-column-full'),
  ).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the OneHalf Grid component', () => {
  const { container } = render(<OneHalf />);

  expect(
    container.querySelector('.nhsuk-grid-column-one-half'),
  ).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the OneThird Grid component', () => {
  const { container } = render(<OneThird />);

  expect(
    container.querySelector('.nhsuk-grid-column-one-third'),
  ).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the TwoThirds Grid component', () => {
  const { container } = render(<TwoThirds />);

  expect(
    container.querySelector('.nhsuk-grid-column-two-thirds'),
  ).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the OneQuarter Grid component', () => {
  const { container } = render(<OneQuarter />);

  expect(
    container.querySelector('.nhsuk-grid-column-one-quarter'),
  ).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the ThreeQuarters Grid component', () => {
  const { container } = render(<ThreeQuarters />);

  expect(
    container.querySelector('.nhsuk-grid-column-three-quarters'),
  ).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the NestedGrid Grid component', () => {
  const { container } = render(<NestedGrid />);

  expect(
    container.querySelector('.nhsuk-grid-column-one-half'),
  ).toBeInTheDocument();
  expect(
    container.querySelector('.nhsuk-grid-column-two-thirds'),
  ).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
