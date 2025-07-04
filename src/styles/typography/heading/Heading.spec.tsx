import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import meta, { H1 as HeadingStory } from './Heading.stories';

const Heading = composeStory(HeadingStory, meta);

it.each(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])(
  'should render the %s Heading component',
  (heading) => {
    const { container } = render(<Heading as={heading} />);

    expect(container.querySelector(heading)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  },
);

it.each(['xs', 's', 'm', 'l', 'xl'])(
  'should render the %s Heading component',
  (size) => {
    const { container } = render(<Heading size={size} />);

    expect(
      container.querySelector(`.nhsuk-heading-${size}`),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  },
);
