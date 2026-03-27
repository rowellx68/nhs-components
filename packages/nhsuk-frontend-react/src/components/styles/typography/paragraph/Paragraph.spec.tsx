import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Paragraph } from './Paragraph';

it('renders a paragraph with the nhsuk-body class by default', async () => {
  const page = await render(<Paragraph>Body text</Paragraph>);
  expect(page.container.querySelector('p.nhsuk-body')).toBeInTheDocument();
});

it('applies the lead variant class', async () => {
  const page = await render(<Paragraph variant="lead">Lead text</Paragraph>);
  expect(page.container.querySelector('p.nhsuk-body-l')).toBeInTheDocument();
});

it('applies the small variant class', async () => {
  const page = await render(<Paragraph variant="small">Small text</Paragraph>);
  expect(page.container.querySelector('p.nhsuk-body-s')).toBeInTheDocument();
});

it('applies a font size utility class', async () => {
  const page = await render(<Paragraph fontSize="24">Text</Paragraph>);
  expect(page.container.querySelector('.nhsuk-u-font-size-24')).toBeInTheDocument();
});

it('applies a font weight utility class', async () => {
  const page = await render(<Paragraph fontWeight="bold">Text</Paragraph>);
  expect(page.container.querySelector('.nhsuk-u-font-weight-bold')).toBeInTheDocument();
});

it('applies the text-align-right utility class', async () => {
  const page = await render(<Paragraph textAlignRight>Text</Paragraph>);
  expect(page.container.querySelector('.nhsuk-u-text-align-right')).toBeInTheDocument();
});

it('renders the paragraph text', async () => {
  const page = await render(<Paragraph>Hello NHS</Paragraph>);
  await expect.element(page.getByText('Hello NHS')).toBeInTheDocument();
});
