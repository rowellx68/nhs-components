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
