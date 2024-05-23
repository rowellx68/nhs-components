import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { CharacterCount } from './CharacterCount';

it('should render the CharacterCount component', () => {
  const { container } = render(
    <CharacterCount
      id="character-count"
      label="Character count"
      hint="This is a hint"
      variant="character-count"
      maxLength={10}
    />,
  );

  expect(container.querySelector('textarea')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
