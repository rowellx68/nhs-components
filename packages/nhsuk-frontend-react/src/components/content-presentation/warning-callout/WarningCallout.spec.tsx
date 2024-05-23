import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { WarningCallout } from './WarningCallout';

it('should render the WarningCallout component', () => {
  const { getByRole } = render(
    <WarningCallout>
      <WarningCallout.Label visuallyHiddenText="Important: ">
        School, nursery or work
      </WarningCallout.Label>
      <p>
        Stay away from school, nursery or work until all the spots have crusted
        over. This is usually 5 days after the spots first appeared.
      </p>
    </WarningCallout>,
  );
  expect(getByRole('text')).toHaveTextContent('Important:');
  expect(getByRole('text')).toHaveTextContent('School, nursery or work');
});

it('should render the WarningCallout component without visually hidden text', () => {
  const { getByRole, container } = render(
    <WarningCallout>
      <WarningCallout.Label>Important</WarningCallout.Label>
      <p>
        For safety, tell your doctor or pharmacist if you're taking any other
        medicines, including herbal medicines, vitamins or supplements.
      </p>
    </WarningCallout>,
  );

  expect(getByRole('text')).toHaveTextContent('Important');
  expect(container.querySelector('h3')).toBeInTheDocument();
});
