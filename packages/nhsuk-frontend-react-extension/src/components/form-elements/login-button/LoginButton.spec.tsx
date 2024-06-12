import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, {
  Example,
  CareIdentityNoCallToAction,
  CareIdentityReverse,
  CareIdentityReverseNoCallToAction,
  NHSLogin,
  NHSLoginNoLogo,
  NHSLoginReverse,
  NHSLoginReverseNoLogo,
} from './LoginButton.stories';

it('should render the LoginButton component with cis2 variant', () => {
  const LoginButton = composeStory(Example, meta);
  const { container } = render(<LoginButton />);

  expect(container).toMatchSnapshot();
  expect(container).toHaveTextContent('Log in with my Care Identity');
});

it('should render the LoginButton component with cis2-no-cta variant', () => {
  const LoginButton = composeStory(CareIdentityNoCallToAction, meta);
  const { container } = render(<LoginButton />);

  expect(container).toMatchSnapshot();
  expect(container).toHaveTextContent('Care Identity');
});

it('should render the LoginButton component with cis2-reverse variant', () => {
  const LoginButton = composeStory(CareIdentityReverse, meta);
  const { container } = render(<LoginButton />);

  expect(container).toMatchSnapshot();
  expect(container.querySelector('.nhsuk-button--reverse')).toBeInTheDocument();
  expect(container).toHaveTextContent('Log in with my Care Identity');
});

it('should render the LoginButton component with cis2-reverse-no-cta variant', () => {
  const LoginButton = composeStory(CareIdentityReverseNoCallToAction, meta);
  const { container } = render(<LoginButton />);

  expect(container).toMatchSnapshot();
  expect(container.querySelector('.nhsuk-button--reverse')).toBeInTheDocument();
  expect(container).toHaveTextContent('Care Identity');
});

it('should render the LoginButton component with nhs-login variant', () => {
  const LoginButton = composeStory(NHSLogin, meta);
  const { container } = render(<LoginButton />);

  expect(container).toMatchSnapshot();
  expect(container).toHaveTextContent('Continue to NHS login');
});

it('should render the LoginButton component with nhs-login-no-logo variant', () => {
  const LoginButton = composeStory(NHSLoginNoLogo, meta);
  const { container } = render(<LoginButton />);

  expect(container).toMatchSnapshot();
  expect(container.querySelector('svg')).not.toBeInTheDocument();
  expect(container).toHaveTextContent('Continue to NHS login');
});

it('should render the LoginButton component with nhs-login-reverse variant', () => {
  const LoginButton = composeStory(NHSLoginReverse, meta);
  const { container } = render(<LoginButton />);

  expect(container).toMatchSnapshot();
  expect(container.querySelector('.nhsuk-button--reverse')).toBeInTheDocument();
  expect(container).toHaveTextContent('Continue to NHS login');
});

it('should render the LoginButton component with nhs-login-reverse-no-logo variant', () => {
  const LoginButton = composeStory(NHSLoginReverseNoLogo, meta);
  const { container } = render(<LoginButton />);

  expect(container).toMatchSnapshot();
  expect(container.querySelector('.nhsuk-button--reverse')).toBeInTheDocument();
  expect(container.querySelector('svg')).not.toBeInTheDocument();
  expect(container).toHaveTextContent('Continue to NHS login');
});
