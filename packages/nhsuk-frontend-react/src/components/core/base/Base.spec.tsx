import React from 'react';
import { it, expect, describe } from 'vitest';
import { render } from 'vitest-browser-react';

import { Base } from './Base';

describe('Base', () => {
  it('renders as a div by default', async () => {
    const page = await render(<Base>Test</Base>);
    expect(page.container.querySelector('div')).toBeInTheDocument();
  });

  it('renders children', async () => {
    const page = await render(<Base>Test content</Base>);
    await expect.element(page.getByText('Test content')).toBeInTheDocument();
  });

  it.each(['a', 'button', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const)(
    'renders as %s when as prop is provided',
    async (as) => {
      const page = await render(<Base as={as}>Test</Base>);
      expect(page.container.querySelector(as)).toBeInTheDocument();
    },
  );

  it('forwards additional props', async () => {
    const page = await render(
      <Base data-testid="base-el" aria-label="base element">
        Test
      </Base>,
    );
    expect(page.container.querySelector('[data-testid="base-el"]')).toHaveAttribute(
      'aria-label',
      'base element',
    );
  });

  it('forwards className', async () => {
    const page = await render(<Base className="custom-class">Test</Base>);
    expect(page.container.querySelector('.custom-class')).toBeInTheDocument();
  });

  it('forwards ref', async () => {
    const ref = React.createRef<HTMLDivElement>();
    await render(<Base ref={ref}>Test</Base>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('renders via renderRoot when provided', async () => {
    const page = await render(<Base renderRoot={(props) => <section {...props} />}>Test</Base>);
    expect(page.container.querySelector('section')).toBeInTheDocument();
  });
});
