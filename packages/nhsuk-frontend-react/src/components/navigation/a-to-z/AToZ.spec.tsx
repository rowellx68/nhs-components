import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { Default as DefaultStory } from './AToZ.stories';

const AToZ = composeStory(DefaultStory, meta);

it('should render AToZ', () => {
  const { container } = render(<AToZ />);

  expect(container).toMatchSnapshot();
  expect(container.querySelectorAll('a')).toHaveLength(24);
  expect(
    container.querySelectorAll('.nhsuk-u-secondary-text-color'),
  ).toHaveLength(2);
});
