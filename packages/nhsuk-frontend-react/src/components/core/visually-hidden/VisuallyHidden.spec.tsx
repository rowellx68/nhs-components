import React from 'react';
import { it, expect, describe } from 'vitest';
import { render } from 'vitest-browser-react';

import { VisuallyHidden } from './VisuallyHidden';

describe('VisuallyHidden', () => {
  it('renders as a span by default', async () => {
    const page = await render(<VisuallyHidden>Content</VisuallyHidden>);
    expect(page.container.querySelector('span')).not.toBeInViewport();
    expect(page.container.querySelector('span')).toBeInTheDocument();
  });

  it('applies the visually hidden class', async () => {
    const page = await render(<VisuallyHidden>Content</VisuallyHidden>);
    expect(page.container.querySelector('.nhsuk-u-visually-hidden')).toBeInTheDocument();
  });

  it('renders children', async () => {
    const page = await render(<VisuallyHidden>Hidden text</VisuallyHidden>);
    await expect.element(page.getByText('Hidden text')).toBeInTheDocument();
  });

  it.each(['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'] as const)(
    'renders as %s when as prop is provided',
    async (as) => {
      const page = await render(<VisuallyHidden as={as}>Content</VisuallyHidden>);
      expect(page.container.querySelector(as)).toHaveClass('nhsuk-u-visually-hidden');
    },
  );

  it('merges custom className with visually hidden class', async () => {
    const page = await render(<VisuallyHidden className="custom-class">Content</VisuallyHidden>);
    expect(page.container.querySelector('span')).toHaveClass(
      'nhsuk-u-visually-hidden',
      'custom-class',
    );
  });

  it('forwards additional props', async () => {
    const page = await render(
      <VisuallyHidden data-testid="vhidden" aria-label="Screen reader only">
        Content
      </VisuallyHidden>,
    );
    expect(page.container.querySelector('[data-testid="vhidden"]')).toHaveAttribute(
      'aria-label',
      'Screen reader only',
    );
  });

  it('forwards ref', async () => {
    const ref = React.createRef<HTMLSpanElement>();
    await render(<VisuallyHidden ref={ref}>Content</VisuallyHidden>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('forwards ref with polymorphic as prop', async () => {
    const ref = React.createRef<HTMLDivElement>();
    await render(
      <VisuallyHidden as="div" ref={ref}>
        Content
      </VisuallyHidden>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
