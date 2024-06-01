import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { Example as ExampleStory } from './ErrorSummary.stories';

const Example = composeStory(ExampleStory, meta);

it('should render the error summary component', () => {
  const { container } = render(<Example />);

  expect(
    container.querySelector('.nhsuk-error-summary__title'),
  ).toHaveTextContent('There is a problem');
  expect(
    container.querySelector('.nhsuk-error-summary__body p'),
  ).toHaveTextContent('Describe the errors and how to correct them');
  expect(
    container.querySelector('.nhsuk-error-summary__list a'),
  ).toHaveTextContent('Date of birth must be in the past');
  expect(container).toMatchSnapshot();
});
