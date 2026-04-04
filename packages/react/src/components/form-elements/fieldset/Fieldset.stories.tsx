import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { VisuallyHidden } from '@/components/core/visually-hidden/VisuallyHidden';

import { Input } from '../input/Input';
import { Fieldset } from './Fieldset';

/**
 * Use a fieldset to group related form inputs.
 *
 * https://service-manual.nhs.uk/design-system/components/fieldset
 */
const meta = {
  title: 'Components/Form Elements/Fieldset',
  component: Fieldset,
  subcomponents: {
    'Fieldset.Legend': Fieldset.Legend,
  } as Record<string, React.ComponentType<any>>,
} satisfies Meta<typeof Fieldset>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend size="l" variant="page-heading">
        What is your address?
      </Fieldset.Legend>
      <Input
        label={
          <>
            Building and street <VisuallyHidden>line 1 of 2</VisuallyHidden>
          </>
        }
      />
      <Input label={<VisuallyHidden>Building and street line 2 of 2</VisuallyHidden>} />
      <Input label="Town or city" width="two-thirds" />
      <Input label="County" width="two-thirds" />
      <Input label="Postcode" width="10" />
    </Fieldset>
  ),
};

export const WithPageHeadingLegend: Story = {
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend size="l" variant="page-heading">
        What is your address?
      </Fieldset.Legend>
    </Fieldset>
  ),
};
