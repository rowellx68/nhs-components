import type { Meta, StoryObj } from '@storybook/react';
import {
  NonUrgentCareCard,
  UrgentCareCard,
  EmergencyCareCard,
} from '@/components/navigation/card/Card.stories';

/**
 * Care cards help users identify and understand the care they need, who to contact and how quickly.
 *
 * https://service-manual.nhs.uk/design-system/patterns/help-users-decide-when-and-where-to-get-care
 */
const meta: Meta = {
  title: 'Patterns/Tasks/Help users decide when and where to get care',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NonUrgent: Story = NonUrgentCareCard;

export const Urgent: Story = UrgentCareCard;

export const Emergency: Story = EmergencyCareCard;
