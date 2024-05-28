import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ErrorSummary } from './ErrorSummary';

it('should render the error summary component', () => {
  const { container } = render(
    <ErrorSummary>
      <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
      <ErrorSummary.Body>
        <p>Describe the errors and how to correct them</p>
        <ErrorSummary.List>
          <ErrorSummary.ListItem href="#">
            Date of birth must be in the past
          </ErrorSummary.ListItem>
        </ErrorSummary.List>
      </ErrorSummary.Body>
    </ErrorSummary>,
  );

  expect(
    container.querySelector('.nhsuk-error-summary__title'),
  ).toHaveTextContent('There is a problem');
  expect(
    container.querySelector('.nhsuk-error-summary__body p'),
  ).toHaveTextContent('Describe the errors and how to correct them');
  expect(
    container.querySelector('.nhsuk-error-summary__list a'),
  ).toHaveTextContent('Date of birth must be in the past');
  expect(container).toMatchSnapshot();
});
