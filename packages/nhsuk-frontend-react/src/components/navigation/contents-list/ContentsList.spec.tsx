import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ContentsList } from './ContentsList';

it('should render a navigation element with a contents list', () => {
  const { container } = render(
    <ContentsList aria-label="Contents">
      <ContentsList.Item href="#" active>
        What is AMD?
      </ContentsList.Item>
      <ContentsList.Item href="#">Symptoms</ContentsList.Item>
      <ContentsList.Item href="#">Getting diagnosed</ContentsList.Item>
      <ContentsList.Item href="#">Treatment</ContentsList.Item>
      <ContentsList.Item href="#">Living with AMD</ContentsList.Item>
    </ContentsList>,
  );

  expect(container.querySelector('.nhsuk-contents-list')).toBeInTheDocument();
  expect(container.querySelectorAll('a')).toHaveLength(4);
  expect(container).toMatchSnapshot();
});
