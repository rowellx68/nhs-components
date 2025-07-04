import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import meta, {
  Default as DefaultStory,
  Visible as VisibleStory,
} from './SectionBreak.stories';

const Default = composeStory(DefaultStory, meta);
const Visible = composeStory(VisibleStory, meta);

it('should render the SectionBreak component', () => {
  const { container } = render(<Default />);

  expect(container.querySelector('.nhsuk-section-break')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the SectionBreak component with visible', () => {
  const { container } = render(<Visible />);

  expect(
    container.querySelector('.nhsuk-section-break--visible'),
  ).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
