import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Checkbox } from './Checkbox';

it('should render the Checkbox component', () => {
  const { container } = render(
    <Checkbox
      label="How would you like to be contacted?"
      labelProps={{
        size: 'l',
        variant: 'page-heading',
      }}
    >
      <Checkbox.Item value="email">Email</Checkbox.Item>
      <Checkbox.Item value="phone">Phone</Checkbox.Item>
      <Checkbox.Item value="sms">Text message</Checkbox.Item>
    </Checkbox>,
  );

  expect(container.querySelector('input[type="checkbox"]')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the Checkbox with exclusive option', () => {
  const { container } = render(
    <Checkbox
      label="Do you have any of these symptoms?"
      hint="Select all the symptoms you have."
      labelProps={{
        size: 'l',
        variant: 'page-heading',
      }}
    >
      <Checkbox.Item value="sore throat" exclusiveGroup="symptoms-list">
        Sore throat
      </Checkbox.Item>
      <Checkbox.Item value="runny nose" exclusiveGroup="symptoms-list">
        Runny nose
      </Checkbox.Item>
      <Checkbox.Item
        value="muscle or joint pain"
        exclusiveGroup="symptoms-list"
      >
        Muscle or joint pain
      </Checkbox.Item>
      <Checkbox.Divider />
      <Checkbox.Item value="none" exclusive exclusiveGroup="symptoms-list">
        No, I do not have any of these symptoms
      </Checkbox.Item>
    </Checkbox>,
  );

  expect(container.querySelector('input[type="checkbox"]')).toBeInTheDocument();
  expect(
    container.querySelector('.nhsuk-checkboxes__divider'),
  ).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the Checkbox with conditional content', () => {
  const { container } = render(
    <Checkbox
      label="How would you like to be contacted?"
      hint="Select all options that are relevant to you."
      labelProps={{
        size: 'l',
        variant: 'page-heading',
      }}
    >
      <Checkbox.Item value="email" conditional={<input type="email" />}>
        Email
      </Checkbox.Item>
      <Checkbox.Item value="phone" conditional={<input type="tel" />}>
        Phone
      </Checkbox.Item>
      <Checkbox.Item value="sms" conditional={<input type="tel" />}>
        Text message
      </Checkbox.Item>
    </Checkbox>,
  );

  expect(container.querySelector('input[type="email"]')).toBeInTheDocument();
  expect(container.querySelector('input[type="tel"]')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
