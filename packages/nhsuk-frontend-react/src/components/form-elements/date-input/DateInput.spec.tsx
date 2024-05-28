import React from 'react';
import { it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { DateInput } from './DateInput';

it('should render the date input component', () => {
  const { container } = render(<DateInput />);

  expect(container.querySelectorAll('input')).toHaveLength(3);
  expect(container).toMatchSnapshot();
});

it('should render the date input component with a value', () => {
  const { container, getByLabelText } = render(
    <DateInput value={{ day: '1', month: '1', year: '2000' }} />,
  );

  expect(container.querySelectorAll('input')).toHaveLength(3);
  expect(getByLabelText('Day')).toHaveValue('1');
  expect(getByLabelText('Month')).toHaveValue('1');
  expect(getByLabelText('Year')).toHaveValue('2000');
});

it('should render the date input component with a label and hint', () => {
  const { container, getByText } = render(
    <DateInput label="Date of birth" hint="For example, 31 3 1980" />,
  );

  expect(getByText('Date of birth')).toBeInTheDocument();
  expect(getByText('For example, 31 3 1980')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the date input component with an error message', () => {
  const { container, getByText } = render(<DateInput error="Error message" />);

  expect(getByText('Error message')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should call the onChange function when the input is changed', async () => {
  const onChange = vi.fn();
  const { getByLabelText } = render(<DateInput onChange={onChange} />);

  await userEvent.type(getByLabelText('Day'), '1');
  await userEvent.type(getByLabelText('Month'), '1');
  await userEvent.type(getByLabelText('Year'), '2000');

  expect(onChange).toHaveBeenCalledTimes(6);
});
