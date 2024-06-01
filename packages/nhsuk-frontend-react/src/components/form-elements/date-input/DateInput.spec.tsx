import React, { act } from 'react';
import { it, expect, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, {
  Default as DefaultStory,
  WithError as WithErrorStory,
  WithErrorObject as WithErrorObjectStory,
} from './DateInput.stories';

const Default = composeStory(DefaultStory, meta);
const WithError = composeStory(WithErrorStory, meta);
const WithErrorObject = composeStory(WithErrorObjectStory, meta);

it('should render the date input component', () => {
  const { container } = render(<Default />);

  expect(container.querySelectorAll('input')).toHaveLength(3);
  expect(container).toMatchSnapshot();
});

it('should render the date input component with a value', () => {
  const { container, getByLabelText } = render(
    <Default value={{ day: '1', month: '1', year: '2000' }} />,
  );

  expect(container.querySelectorAll('input')).toHaveLength(3);
  expect(getByLabelText('Day')).toHaveValue('1');
  expect(getByLabelText('Month')).toHaveValue('1');
  expect(getByLabelText('Year')).toHaveValue('2000');
});

it('should render the date input component with a label and hint', () => {
  const { container, getByText } = render(
    <Default label="Date of birth" hint="For example, 31 3 1980" />,
  );

  expect(getByText('Date of birth')).toBeInTheDocument();
  expect(getByText('For example, 31 3 1980')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the date input component with an error message', () => {
  const { container, getByText } = render(<WithError />);

  expect(getByText('Please enter a valid date of birth')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the date input component with an error object', () => {
  const { container } = render(<WithErrorObject />);

  expect(container).toHaveTextContent(
    'Please enter a valid day. Please enter a valid month.',
  );
  expect(container).toMatchSnapshot();
});

it('should call the onChange function when the input is changed', () => {
  const onChange = vi.fn();
  const { getByLabelText } = render(<Default onChange={onChange} />);

  act(() => {
    fireEvent.input(getByLabelText('Day'), { target: { value: '1' } });
    fireEvent.input(getByLabelText('Month'), { target: { value: '1' } });
    // simulate typing user input
    fireEvent.input(getByLabelText('Year'), { target: { value: '2' } });
    fireEvent.input(getByLabelText('Year'), { target: { value: '20' } });
    fireEvent.input(getByLabelText('Year'), { target: { value: '200' } });
    fireEvent.input(getByLabelText('Year'), { target: { value: '2000' } });
  });

  expect(onChange).toHaveBeenCalledTimes(6);
});
