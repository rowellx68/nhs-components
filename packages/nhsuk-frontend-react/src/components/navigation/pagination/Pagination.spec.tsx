import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Pagination } from './Pagination';

it('should render the Pagination component', () => {
  const { getByText, container } = render(
    <Pagination>
      <Pagination.Previous pageTitle="Treatments" />
      <Pagination.Next pageTitle="Symptoms" />
    </Pagination>,
  );

  expect(getByText('Treatments')).toBeDefined();
  expect(getByText('Symptoms')).toBeDefined();
  expect(container).toMatchSnapshot();
});
