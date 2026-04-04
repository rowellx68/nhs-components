import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Checkbox } from './Checkbox';

it('renders with the nhsuk-checkboxes class', async () => {
  const page = await render(
    <Checkbox>
      <Checkbox.Item id="waste-1" name="waste" value="mines">
        Waste from mines or quarries
      </Checkbox.Item>
    </Checkbox>,
  );
  expect(page.container.querySelector('.nhsuk-checkboxes')).toBeInTheDocument();
});

it('renders a checkbox input for each item', async () => {
  const page = await render(
    <Checkbox>
      <Checkbox.Item id="waste-1" name="waste" value="mines">
        Waste from mines or quarries
      </Checkbox.Item>
      <Checkbox.Item id="waste-2" name="waste" value="farm">
        Farm or agricultural waste
      </Checkbox.Item>
    </Checkbox>,
  );
  const checkboxes = page.container.querySelectorAll('input[type="checkbox"]');
  expect(checkboxes).toHaveLength(2);
});

it('applies the small modifier class', async () => {
  const page = await render(
    <Checkbox small>
      <Checkbox.Item id="c1" name="c" value="1">
        Option 1
      </Checkbox.Item>
    </Checkbox>,
  );
  expect(page.container.querySelector('.nhsuk-checkboxes--small')).toBeInTheDocument();
});
