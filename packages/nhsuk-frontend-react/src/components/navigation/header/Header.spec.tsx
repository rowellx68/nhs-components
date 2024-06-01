import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, {
  Default as DefaultStory,
  WithServiceName as WithServiceNameStory,
  WithOrgansation as WithOrgansationStory,
  Transactional as TransactionalStory,
} from './Header.stories';

const Default = composeStory(DefaultStory, meta);
const WithServiceName = composeStory(WithServiceNameStory, meta);
const WithOrgansation = composeStory(WithOrgansationStory, meta);
const Transactional = composeStory(TransactionalStory, meta);

it('should render the Header component', () => {
  const { container } = render(<Default />);

  expect(container).toMatchSnapshot();
});

it('should render the Header component with a service name', () => {
  const { container } = render(<WithServiceName />);

  expect(container).toMatchSnapshot();
});

it('should render the Header component as transactional', () => {
  const { container } = render(<Transactional />);

  expect(container).toMatchSnapshot();
});

it('should render the Header component with an organisation', () => {
  const { container } = render(<WithOrgansation />);

  expect(container).toMatchSnapshot();
});
