import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Fieldset } from './Fieldset';

it('should render the fieldset component', () => {
  const { container } = render(
    <Fieldset>
      <Fieldset.Legend size="l" variant="page-heading">
        What is your address?
      </Fieldset.Legend>
    </Fieldset>,
  );

  expect(
    container.querySelector('.nhsuk-fieldset__legend--l'),
  ).toHaveTextContent('What is your address?');
  expect(container).toMatchSnapshot();
});
