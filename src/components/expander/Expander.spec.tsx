import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import meta, {
  SingleExpander as SingleExpanderStory,
  MoreThanOneExpander as MoreThanOneExpanderStory,
} from './Expander.stories';

const SingleExpander = composeStory(SingleExpanderStory, meta);
const MoreThanOneExpander = composeStory(MoreThanOneExpanderStory, meta);

it('should render the Expander component', () => {
  const { container } = render(<SingleExpander />);

  expect(container.querySelector('.nhsuk-expander')).toBeInTheDocument();
  expect(container.querySelector('summary')).toHaveTextContent(
    'Get your medical records',
  );
  expect(container).toMatchSnapshot();
});

it('should render the Expander Group component', () => {
  const { container } = render(<MoreThanOneExpander />);

  expect(container.querySelector('.nhsuk-expander-group')).toBeInTheDocument();
  expect(container.querySelectorAll('.nhsuk-expander')).toHaveLength(2);
  expect(container).toMatchSnapshot();
});
