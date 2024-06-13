import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { Example as ExampleStory } from './Fieldset.stories';

const Example = composeStory(ExampleStory, meta);

it('should render the fieldset component', () => {
  const { container } = render(<Example />);

  expect(
    container.querySelector('.nhsuk-fieldset__legend--l'),
  ).toHaveTextContent('What is your address?');
  expect(container).toMatchSnapshot();
});
