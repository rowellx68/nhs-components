import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { Default as DefaultStory } from './SummaryList.stories';

const Default = composeStory(DefaultStory, meta);

it('should render the SummaryList component', () => {
  const { container } = render(<Default />);

  expect(container).toMatchSnapshot();
  expect(
    container.querySelectorAll('a > .nhsuk-u-visually-hidden'),
  ).toHaveLength(4);
});
