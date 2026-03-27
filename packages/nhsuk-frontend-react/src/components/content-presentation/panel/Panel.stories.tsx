import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Button } from '../../form-elements/button/Button';
import { Panel } from './Panel';

/**
 * Use a panel to highlight that users have done something successfully.
 *
 * https://service-manual.nhs.uk/design-system/components/panel
 */
const meta = {
  title: 'Components/Content Presentation/Panel',
  component: Panel,
  subcomponents: {
    'Panel.Title': Panel.Title,
    'Panel.Body': Panel.Body,
  } as Record<string, React.ComponentType<any>>,
} satisfies Meta<typeof Panel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Panel>
      <Panel.Title>Booking complete</Panel.Title>
      <Panel.Body>We have sent you a confirmation email</Panel.Body>
    </Panel>
  ),
};

export const Interruption: Story = {
  render: () => (
    <Panel variant="interruption">
      <Panel.Title size="l">Jodie Brown had a COVID-19 vaccine less than 3 months ago</Panel.Title>
      <Panel.Body>
        <p>They had a COVID-19 vaccine on 25 September 2025.</p>
        <p>
          For most people, the minimum recommended gap between COVID-19 vaccine doses is 3 months.
        </p>
        <div className="nhsuk-button-group">
          <Button as="a" variant="reverse" href="#">
            Continue anyway
          </Button>
          <a href="#">Cancel</a>
        </div>
      </Panel.Body>
    </Panel>
  ),
};

export const InterruptionConfirmCancel: Story = {
  name: 'interruption for confirmation to cancel',
  render: () => (
    <Panel variant="interruption">
      <Panel.Title size="l">Confirm you want to cancel your hospital appointment</Panel.Title>
      <Panel.Body>
        <p>
          You will be able to reschedule your appointment for another time, but this may delay your
          treatment.
        </p>
        <p>Cancelling your appointment cannot be undone.</p>
        <div className="nhsuk-button-group">
          <Button as="a" variant="reverse" href="#">
            Cancel appointment
          </Button>
          <a href="#">Change my weight</a>
        </div>
      </Panel.Body>
    </Panel>
  ),
};

export const InterruptionConfirmContinue: Story = {
  name: 'interruption for confirmation to continue',
  render: () => (
    <Panel variant="interruption">
      <Panel.Title size="l">Is your weight correct?</Panel.Title>
      <Panel.Body>
        <p>
          You entered your weight as <b>21.4 kilograms</b>. This is lower than expected.
        </p>
        <div className="nhsuk-button-group">
          <Button as="a" variant="reverse" href="#">
            Yes, this is correct
          </Button>
          <a href="#">Change my weight</a>
        </div>
      </Panel.Body>
    </Panel>
  ),
};

export const TitleSizeM: Story = {
  name: 'title with size M',
  render: () => (
    <Panel>
      <Panel.Title size="m">Booking complete</Panel.Title>
      <Panel.Body>We have sent you a confirmation email</Panel.Body>
    </Panel>
  ),
};

export const TitleSizeL: Story = {
  name: 'title with size L',
  render: () => (
    <Panel>
      <Panel.Title size="l">Booking complete</Panel.Title>
      <Panel.Body>We have sent you a confirmation email</Panel.Body>
    </Panel>
  ),
};

export const TitleSizeXL: Story = {
  name: 'title with size XL',
  render: () => (
    <Panel>
      <Panel.Title size="xl">Booking complete</Panel.Title>
      <Panel.Body>We have sent you a confirmation email</Panel.Body>
    </Panel>
  ),
};

export const WithHeadingLevel: Story = {
  name: 'with title classes and heading level',
  render: () => (
    <Panel>
      <Panel.Title as="h2" size="l">
        Booking complete
      </Panel.Title>
      <Panel.Body>We have sent you a confirmation email</Panel.Body>
    </Panel>
  ),
};
