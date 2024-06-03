import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { Default as DefaultStory } from './BackToTopLink.stories';

const BackToTopLink = composeStory(DefaultStory, meta);

it('should render the BackToTopLink component', () => {
  const { getByText } = render(<BackToTopLink />);
  expect(getByText('Back to top')).toBeInTheDocument();
});
