import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { Default as DefaultStory } from './ErrorMessage.stories';

const Default = composeStory(DefaultStory, meta);

it('should render the error message component', () => {
  const { container } = render(<Default />);

  expect(container.querySelector('.nhsuk-u-visually-hidden')).toHaveTextContent(
    'Error:',
  );
  expect(container).toMatchSnapshot();
});
