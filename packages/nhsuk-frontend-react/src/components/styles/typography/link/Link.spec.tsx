import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, {
  Default as DefaultStory,
  NoVisitedState as NoVisitedStateStory,
} from './Link.stories';

const Default = composeStory(DefaultStory, meta);
const NoVisitedState = composeStory(NoVisitedStateStory, meta);

it('should render the Link component', () => {
  const { container } = render(<Default />);

  expect(container.querySelector('.nhsuk-link')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the Link component without visited state', () => {
  const { container } = render(<NoVisitedState />);

  expect(
    container.querySelector('.nhsuk-link--no-visited-state'),
  ).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
