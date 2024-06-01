import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, {
  Primary as PrimaryStory,
  PrimaryButtonAsLink as PrimaryButtonAsLinkStory,
} from './Button.stories';

const Button = composeStory(PrimaryStory, meta);
const ButtonAsLink = composeStory(PrimaryButtonAsLinkStory, meta);

it('should render the Button component as a button', () => {
  const { container } = render(<Button>Submit</Button>);

  expect(container.querySelector('button')).toBeInTheDocument();
  expect(container).toHaveTextContent('Submit');
});

it.each(['secondary', 'reverse'] as const)(
  'should render the Button component with the %s variant',
  (variant) => {
    const { container } = render(<Button variant={variant}>Action</Button>);

    expect(
      container.querySelector('.nhsuk-button--' + variant),
    ).toBeInTheDocument();
  },
);

it('should render the Button component with the disabled attribute', () => {
  const { container } = render(<Button disabled>Disabled</Button>);

  expect(container.querySelector('button')).toHaveAttribute('disabled');
});

it('should render the Button component as a link', () => {
  const { container } = render(
    <ButtonAsLink as="a" href="https://www.nhs.uk">
      Link
    </ButtonAsLink>,
  );

  expect(container.querySelector('a')).toBeInTheDocument();
});

it.each(['secondary', 'reverse'] as const)(
  'should render the Button component as a link variant %s',
  (variant) => {
    const { container } = render(
      <ButtonAsLink as="a" href="https://www.nhs.uk" variant={variant}>
        Link
      </ButtonAsLink>,
    );

    expect(container.querySelector('a')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
    expect(
      container.querySelector('.nhsuk-button--' + variant),
    ).toBeInTheDocument();
  },
);
