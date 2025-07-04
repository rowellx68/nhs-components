import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, {
  WithServiceName as WithServiceNameStory,
} from './Header.stories';

const WithServiceName = composeStory(WithServiceNameStory, meta);

it('should render the Header component with a service name', () => {
  const { container } = render(<WithServiceName />);

  expect(container).toMatchSnapshot();
});
