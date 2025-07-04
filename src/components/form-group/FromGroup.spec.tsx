import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { FormGroup } from './FormGroup';

it('should render the FormGroup component with a label', () => {
  const { container } = render(
    <FormGroup
      label="This is a label"
      error="This is an error"
      inputType="other"
      render={() => <div />}
    />,
  );

  expect(container.querySelector('label')).toHaveTextContent('This is a label');
  expect(container.querySelector('.nhsuk-error-message')).toHaveTextContent(
    'This is an error',
  );
});
