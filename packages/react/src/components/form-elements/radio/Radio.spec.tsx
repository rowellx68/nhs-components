import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Radio } from './Radio';

it('renders with the nhsuk-radios class', async () => {
  const page = await render(
    <Radio>
      <Radio.Item id="yes" name="confirm" value="yes">
        Yes
      </Radio.Item>
      <Radio.Item id="no" name="confirm" value="no">
        No
      </Radio.Item>
    </Radio>,
  );
  expect(page.container.querySelector('.nhsuk-radios')).toBeInTheDocument();
});

it('renders radio inputs for each item', async () => {
  const page = await render(
    <Radio>
      <Radio.Item id="yes" name="confirm" value="yes">
        Yes
      </Radio.Item>
      <Radio.Item id="no" name="confirm" value="no">
        No
      </Radio.Item>
    </Radio>,
  );
  const radios = page.container.querySelectorAll('input[type="radio"]');
  expect(radios).toHaveLength(2);
});

it('applies the inline modifier class', async () => {
  const page = await render(
    <Radio inline>
      <Radio.Item id="yes" name="confirm" value="yes">
        Yes
      </Radio.Item>
    </Radio>,
  );
  expect(page.container.querySelector('.nhsuk-radios--inline')).toBeInTheDocument();
});

it('applies the small modifier class', async () => {
  const page = await render(
    <Radio small>
      <Radio.Item id="yes" name="confirm" value="yes">
        Yes
      </Radio.Item>
    </Radio>,
  );
  expect(page.container.querySelector('.nhsuk-radios--small')).toBeInTheDocument();
});

it('disables every item when the group is disabled', async () => {
  const page = await render(
    <Radio disabled>
      <Radio.Item id="yes" name="confirm" value="yes">
        Yes
      </Radio.Item>
      <Radio.Item id="no" name="confirm" value="no">
        No
      </Radio.Item>
    </Radio>,
  );
  const radios = page.container.querySelectorAll<HTMLInputElement>('input[type="radio"]');
  expect([...radios].every((radio) => radio.disabled)).toBe(true);
});

it('allows an individual item to opt in to disabled', async () => {
  const page = await render(
    <Radio>
      <Radio.Item id="yes" name="confirm" value="yes" disabled>
        Yes
      </Radio.Item>
      <Radio.Item id="no" name="confirm" value="no">
        No
      </Radio.Item>
    </Radio>,
  );
  expect(page.container.querySelector<HTMLInputElement>('#yes')!.disabled).toBe(true);
  expect(page.container.querySelector<HTMLInputElement>('#no')!.disabled).toBe(false);
});
