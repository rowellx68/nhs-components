import React from 'react';
import { it, expect, describe } from 'vitest';
import { render } from 'vitest-browser-react';

import { FormGroup } from './FormGroup';

describe('FormGroup', () => {
  it('renders a label', async () => {
    const page = await render(
      <FormGroup label="This is a label" inputType="other" render={() => <div />} />,
    );
    expect(page.container.querySelector('label')).toHaveTextContent('This is a label');
  });

  it('renders an error message', async () => {
    const page = await render(
      <FormGroup label="Label" error="This is an error" inputType="other" render={() => <div />} />,
    );
    expect(page.container.querySelector('.nhsuk-error-message')).toHaveTextContent(
      'This is an error',
    );
  });

  it('renders a hint', async () => {
    const page = await render(
      <FormGroup label="Label" hint="This is a hint" inputType="other" render={() => <div />} />,
    );
    expect(page.container.querySelector('.nhsuk-hint')).toHaveTextContent('This is a hint');
  });

  it('applies the error class when withErrorLine and error are set', async () => {
    const page = await render(
      <FormGroup
        label="Label"
        error="Error"
        withErrorLine
        inputType="other"
        render={() => <div />}
      />,
    );
    expect(page.container.querySelector('.nhsuk-form-group--error')).toBeInTheDocument();
  });

  it('renders the input via the render prop', async () => {
    const page = await render(
      <FormGroup inputType="other" render={() => <input data-testid="the-input" />} />,
    );
    expect(page.container.querySelector('[data-testid="the-input"]')).toBeInTheDocument();
  });

  it('wraps in a fieldset for checkboxes inputType', async () => {
    const page = await render(
      <FormGroup label="Label" inputType="checkboxes" render={() => <div />} />,
    );
    expect(page.container.querySelector('fieldset')).toBeInTheDocument();
  });

  it('wraps in a fieldset for radios inputType', async () => {
    const page = await render(
      <FormGroup label="Label" inputType="radios" render={() => <div />} />,
    );
    expect(page.container.querySelector('fieldset')).toBeInTheDocument();
  });
});
