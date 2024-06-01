import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, {
  FooterWithKeyLinksOnly as FooterWithKeyLinksOnlyStory,
  FooterWithNavigationLinks as FooterWithMetaLinksOnlyStory,
} from './Footer.stories';

const FooterWithKeyLinksOnly = composeStory(FooterWithKeyLinksOnlyStory, meta);
const FooterWithMetaLinksOnly = composeStory(
  FooterWithMetaLinksOnlyStory,
  meta,
);

it('should render the footer component', () => {
  const { container } = render(<FooterWithKeyLinksOnly />);

  expect(container.querySelectorAll('a')).toHaveLength(5);
  expect(container.querySelector('footer')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the footer component', () => {
  const { container } = render(<FooterWithMetaLinksOnly />);

  expect(container.querySelectorAll('a')).toHaveLength(21);
  expect(container.querySelector('footer')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
