import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import meta, {
  WithMaxCharacters as WithMaxCharactersStory,
  WithMaxWords as WithMaxWordsStory,
} from './CharacterCount.stories';

const WithMaxCharacters = composeStory(WithMaxCharactersStory, meta);
const WithMaxWords = composeStory(WithMaxWordsStory, meta);

it('should render the CharacterCount component with max characters', () => {
  const { container } = render(<WithMaxCharacters />);

  expect(container.querySelector('textarea')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the CharacterCount component with max words', () => {
  const { container } = render(<WithMaxWords />);

  expect(container.querySelector('textarea')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
