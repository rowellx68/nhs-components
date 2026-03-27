import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { CharacterCount } from './CharacterCount';

it('renders a textarea with the nhsuk-js-character-count class', async () => {
  const page = await render(
    <CharacterCount
      id="more-detail"
      label="Can you provide more detail?"
      variant="character-count"
      maxCharacterLength={200}
    />,
  );
  await expect.element(page.getByRole('textbox')).toBeInTheDocument();
  expect(page.container.querySelector('textarea.nhsuk-js-character-count')).toBeInTheDocument();
});

it('renders a word count textarea', async () => {
  const page = await render(
    <CharacterCount id="description" label="Description" variant="word-count" maxWords={50} />,
  );
  await expect.element(page.getByRole('textbox')).toBeInTheDocument();
});

it('associates the label with the textarea', async () => {
  const page = await render(
    <CharacterCount
      id="more-detail"
      label="Can you provide more detail?"
      variant="character-count"
      maxCharacterLength={200}
    />,
  );
  await expect.element(page.getByLabelText('Can you provide more detail?')).toBeInTheDocument();
});
