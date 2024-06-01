import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, {
  Default as DefaultStory,
  Lead as LeadStory,
  Small as SmallStory,
  FontSizes as FontSizesStory,
  FontWeights as FontWeightsStory,
  TextAlignRight as TextAlignRightStory,
} from './Paragraph.stories';

const Default = composeStory(DefaultStory, meta);
const Lead = composeStory(LeadStory, meta);
const Small = composeStory(SmallStory, meta);
const FontSizes = composeStory(FontSizesStory, meta);
const FontWeights = composeStory(FontWeightsStory, meta);
const TextAlignRight = composeStory(TextAlignRightStory, meta);

it('should render the Paragraph component', () => {
  const { container } = render(<Default />);

  expect(container.querySelector('.nhsuk-body')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the Paragraph component as lead', () => {
  const { container } = render(<Lead />);

  expect(container.querySelector('.nhsuk-body-l')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the Paragraph component as small', () => {
  const { container } = render(<Small />);

  expect(container.querySelector('.nhsuk-body-s')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it.each(['64', '48', '32', '24', '22', '19', '16', '14'] as const)(
  'should render the Paragraph component with font sizes %s',
  (size) => {
    const { container } = render(<FontSizes fontSize={size} />);

    expect(container).toMatchSnapshot();
  },
);

it.each(['bold', 'normal'] as const)(
  'should render the Paragraph component with font weights %s',
  (weight) => {
    const { container } = render(<FontWeights fontWeight={weight} />);

    expect(container).toMatchSnapshot();
  },
);

it('should render the Paragraph component with text align right', () => {
  const { container } = render(<TextAlignRight />);

  expect(
    container.querySelector('.nhsuk-u-text-align-right'),
  ).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
