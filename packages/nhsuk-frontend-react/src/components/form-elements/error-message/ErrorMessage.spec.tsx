import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage';

it('should render the error message component', () => {
  const { container } = render(
    <ErrorMessage>There was an error with your input</ErrorMessage>,
  );

  expect(container.querySelector('.nhsuk-u-visually-hidden')).toHaveTextContent(
    'Error:',
  );
  expect(container).toMatchSnapshot();
});
