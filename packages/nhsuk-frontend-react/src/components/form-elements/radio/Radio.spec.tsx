import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Radio } from './Radio';

it('should render the radio component', () => {
  const { container } = render(
    <Radio label="Are you 18 or over?">
      <Radio.Item value="yes" name="adult">
        Yes
      </Radio.Item>
      <Radio.Item value="no" name="adult">
        No
      </Radio.Item>
    </Radio>,
  );

  expect(container).toMatchSnapshot();
});

it('should render the radio component with hint', () => {
  const { container } = render(
    <Radio
      label="Are you 18 or over?"
      hint="You must be 18 or over to continue"
    >
      <Radio.Item value="yes" name="adult">
        Yes
      </Radio.Item>
      <Radio.Item value="no" name="adult">
        No
      </Radio.Item>
    </Radio>,
  );

  expect(container).toMatchSnapshot();
});

it('should render the radio component with error', () => {
  const { container } = render(
    <Radio label="Are you 18 or over?" error="Select yes or no">
      <Radio.Item value="yes" name="adult">
        Yes
      </Radio.Item>
      <Radio.Item value="no" name="adult">
        No
      </Radio.Item>
    </Radio>,
  );

  expect(container).toMatchSnapshot();
});

it('should render the radio component with inline items', () => {
  const { container } = render(
    <Radio label="Are you 18 or over?" inline>
      <Radio.Item value="yes" name="adult">
        Yes
      </Radio.Item>
      <Radio.Item value="no" name="adult">
        No
      </Radio.Item>
    </Radio>,
  );

  expect(container).toMatchSnapshot();
});
