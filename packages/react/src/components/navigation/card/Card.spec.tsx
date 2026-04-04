import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Card } from './Card';

it('renders with the nhsuk-card class', async () => {
  const page = await render(
    <Card>
      <Card.Content>
        <Card.Heading>Visit our pharmacy</Card.Heading>
      </Card.Content>
    </Card>,
  );
  expect(page.container.querySelector('.nhsuk-card')).toBeInTheDocument();
});

it('applies the clickable class', async () => {
  const page = await render(
    <Card clickable>
      <Card.Content>
        <Card.Heading>Visit our pharmacy</Card.Heading>
        <Card.Link href="#">Visit pharmacy</Card.Link>
      </Card.Content>
    </Card>,
  );
  expect(page.container.querySelector('.nhsuk-card--clickable')).toBeInTheDocument();
});

it.each(['primary', 'secondary', 'feature'] as const)(
  'applies the %s variant class',
  async (variant) => {
    const page = await render(
      <Card variant={variant}>
        <Card.Content />
      </Card>,
    );
    expect(page.container.querySelector(`.nhsuk-card--${variant}`)).toBeInTheDocument();
  },
);

it.each(['non-urgent', 'urgent', 'emergency'] as const)(
  'applies the care card classes for the %s variant',
  async (variant) => {
    const page = await render(
      <Card variant={variant}>
        <Card.Content>
          <Card.Heading careCard visuallyHiddenText="Non-urgent advice:">
            Speak to a GP if:
          </Card.Heading>
        </Card.Content>
      </Card>,
    );
    expect(page.container.querySelector(`.nhsuk-card--care--${variant}`)).toBeInTheDocument();
  },
);
