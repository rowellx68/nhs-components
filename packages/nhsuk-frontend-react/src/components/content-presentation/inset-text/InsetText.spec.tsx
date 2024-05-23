import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { InsetText } from './InsetText';

it('should render the InsetText component', () => {
  const { container } = render(
    <InsetText visuallyHiddenText="Important: ">
      <p>
        You can report any suspected side effect to the{' '}
        <a href="https://yellowcard.mhra.gov.uk/" title="External website">
          UK safety scheme
        </a>
        .
      </p>
    </InsetText>,
  );

  expect(container.querySelector('.nhsuk-inset-text')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
