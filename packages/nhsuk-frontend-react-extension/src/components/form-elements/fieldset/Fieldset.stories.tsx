import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Fieldset } from './Fieldset';

/**
 * Use a fieldset to group related form inputs.
 *
 * https://service-manual.nhs.uk/design-system/components/fieldset
 */
const meta: Meta<typeof Fieldset> = {
  title: 'Components/Form Elements/Fieldset',
  component: Fieldset,
  subcomponents: {
    'Fieldset.Legend': Fieldset.Legend,
  } as Record<string, React.ComponentType<any>>,
};

export default meta;

type Story = StoryObj<typeof Fieldset>;

export const Example: Story = {
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend size="l" variant="page-heading">
        What is your address?
      </Fieldset.Legend>
    </Fieldset>
  ),
};
