import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { VisuallyHidden } from '../../core/visually-hidden/VisuallyHidden';
import { Card } from '../../navigation/card/Card';
import { Row, Column } from '../../styles/layout/grid/Grid';
import { Tag } from '../tag/Tag';
import { SummaryList } from './SummaryList';

/**
 * Use the summary list to summarise information, for example, a user's responses at the end of a form.
 *
 * https://service-manual.nhs.uk/design-system/components/summary-list
 */
const meta = {
  title: 'Components/Content Presentation/Summary List',
  component: SummaryList,
  subcomponents: {
    'SummaryList.Row': SummaryList.Row,
    'SummaryList.Key': SummaryList.Key,
    'SummaryList.Value': SummaryList.Value,
    'SummaryList.Actions': SummaryList.Actions,
    'SummaryList.ActionLink': SummaryList.ActionLink,
  } as Record<string, React.ComponentType<any>>,
} satisfies Meta<typeof SummaryList>;

export default meta;

type Story = StoryObj<typeof SummaryList>;

export const Default: Story = {
  render: (args) => (
    <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Karen Francis</SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="name" href="#/change">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>15 March 1984</SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="date of birth" href="#/change">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          73 Roman Rd
          <br />
          Leeds
          <br />
          LS2 5ZN
        </SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="contact information" href="#/change">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <p>07700 900362</p>
          <p>karen.francis@example.com</p>
        </SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="contact details" href="#/change">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
    </SummaryList>
  ),
};

export const WithMultipleActions: Story = {
  name: 'with multiple actions',
  render: (args) => (
    <SummaryList {...args}>
      <SummaryList.Row variant="no-actions">
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Karen Francis</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>15 March 1984</SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="date of birth" href="#/change">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          73 Roman Rd
          <br />
          Leeds
          <br />
          LS2 5ZN
        </SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="contact information" href="#/change">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <p>07700 900362</p>
          <p>karen.francis@example.com</p>
        </SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="new contact details" href="#/add">
            Add
          </SummaryList.ActionLink>
          <SummaryList.ActionLink visuallyHiddenText="contact details" href="#/change">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Medicines</SummaryList.Key>
        <SummaryList.Value>
          <p>Isotretinoin capsules (Roaccutane)</p>
          <p>Isotretinoin gel (Isotrex)</p>
          <p>Pepto-Bismol (bismuth subsalicylate)</p>
        </SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="new medicine" href="#/add">
            Add
          </SummaryList.ActionLink>
          <SummaryList.ActionLink visuallyHiddenText="medicines" href="#/change">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
    </SummaryList>
  ),
};

export const WithoutActions: Story = {
  name: 'without actions',
  render: (args) => (
    <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Karen Francis</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>15 March 1984</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          73 Roman Rd
          <br />
          Leeds
          <br />
          LS2 5ZN
        </SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <p>07700 900362</p>
          <p>karen.francis@example.com</p>
        </SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>
  ),
};

export const WithoutBorder: Story = {
  name: 'without border',
  args: {
    variant: 'no-border',
  },
  render: (args) => (
    <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Karen Francis</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>15 March 1984</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          73 Roman Rd
          <br />
          Leeds
          <br />
          LS2 5ZN
        </SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <p>07700 900362</p>
          <p>karen.francis@example.com</p>
        </SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>
  ),
};

export const WithoutRowBorder: Story = {
  name: 'without row border',
  render: (args) => (
    <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Karen Francis</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>15 March 1984</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          73 Roman Rd
          <br />
          Leeds
          <br />
          LS2 5ZN
        </SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row variant="no-border">
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <p>07700 900362</p>
          <p>karen.francis@example.com</p>
        </SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>
  ),
};

export const AsACard: Story = {
  name: 'as a card',
  render: () => (
    <Card>
      <Card.Content>
        <Card.Heading size="m">Regional Manager</Card.Heading>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Name</SummaryList.Key>
            <SummaryList.Value>Karen Francis</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row variant="no-border">
            <SummaryList.Key>Date of birth</SummaryList.Key>
            <SummaryList.Value>15 March 1984</SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
  ),
};

export const AsACardClickableWithoutActions: Story = {
  name: 'as a card (clickable) without actions',
  render: () => (
    <Card clickable>
      <Card.Content>
        <Card.Heading size="m">
          <Card.Link href="#/card-clickable">Regional Manager</Card.Link>
        </Card.Heading>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Name</SummaryList.Key>
            <SummaryList.Value>Karen Francis</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row variant="no-border">
            <SummaryList.Key>Date of birth</SummaryList.Key>
            <SummaryList.Value>15 March 1984</SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
  ),
};

export const AsACardFeatureWithActions: Story = {
  name: 'as a card (feature) with actions',
  render: () => (
    <Card variant="feature">
      <Card.HeadingContainer>
        <Card.Heading size="m">Regional Manager</Card.Heading>
        <Card.Actions>
          <a className="nhsuk-link" href="#/delete">
            Delete
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
          <a className="nhsuk-link" href="#/withdraw">
            Withdraw
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
        </Card.Actions>
      </Card.HeadingContainer>
      <Card.Content>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Name</SummaryList.Key>
            <SummaryList.Value>Karen Francis</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row variant="no-border">
            <SummaryList.Key>Date of birth</SummaryList.Key>
            <SummaryList.Value>15 March 1984</SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
  ),
};

export const AsACardFeatureWithCustomHtml: Story = {
  name: 'as a card (feature) with custom HTML',
  render: () => (
    <Card variant="feature">
      <Card.Content>
        <Card.Heading size="m">Your read</Card.Heading>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Opinion</SummaryList.Key>
            <SummaryList.Value>
              <p className="nhsuk-u-margin-bottom-3">
                <Tag colour="red">Recall for assessment</Tag>
              </p>
            </SummaryList.Value>
            <SummaryList.Actions>
              <SummaryList.ActionLink visuallyHiddenText="opinion (Your read)" href="#/change">
                Change
              </SummaryList.ActionLink>
            </SummaryList.Actions>
          </SummaryList.Row>
          <SummaryList.Row>
            <SummaryList.Key>Detailed opinion</SummaryList.Key>
            <SummaryList.Value>
              <Row>
                <Column width="one-half">
                  <p className="nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold">Right breast</p>
                  <p className="nhsuk-u-margin-bottom-3">
                    <Tag colour="red">Abnormal</Tag>
                  </p>
                </Column>
                <Column width="one-half">
                  <p className="nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold">Left breast</p>
                  <p className="nhsuk-u-margin-bottom-3 nhsuk-u-secondary-text-colour">
                    Not recorded
                  </p>
                </Column>
              </Row>
            </SummaryList.Value>
            <SummaryList.Actions>
              <SummaryList.ActionLink
                visuallyHiddenText="detailed opinion (Your read)"
                href="#/change"
              >
                Change
              </SummaryList.ActionLink>
            </SummaryList.Actions>
          </SummaryList.Row>
          <SummaryList.Row variant="no-border">
            <SummaryList.Key>Annotations</SummaryList.Key>
            <SummaryList.Value>
              <p className="nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold">Right breast</p>
              <p className="nhsuk-u-margin-bottom-0">
                Microcalcification outside a mass, Clinical abnormality – Level 2 (benign)
              </p>
            </SummaryList.Value>
            <SummaryList.Actions>
              <SummaryList.ActionLink visuallyHiddenText="annotations (Your read)" href="#/change">
                Change
              </SummaryList.ActionLink>
            </SummaryList.Actions>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
  ),
};

export const AsACardSecondaryWithActions: Story = {
  name: 'as a card (secondary) with actions',
  render: () => (
    <Card variant="secondary">
      <Card.HeadingContainer>
        <Card.Heading size="m">Regional Manager</Card.Heading>
        <Card.Actions>
          <a className="nhsuk-link" href="#/delete">
            Delete
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
          <a className="nhsuk-link" href="#/withdraw">
            Withdraw
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
        </Card.Actions>
      </Card.HeadingContainer>
      <Card.Content>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Name</SummaryList.Key>
            <SummaryList.Value>Karen Francis</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row variant="no-border">
            <SummaryList.Key>Date of birth</SummaryList.Key>
            <SummaryList.Value>15 March 1984</SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
  ),
};

export const AsACardTypeEmergencyWithActions: Story = {
  name: 'as a card (type emergency) with actions',
  render: () => (
    <Card variant="emergency">
      <Card.HeadingContainer>
        <Card.Heading careCard visuallyHiddenText="Immediate action required:">
          Regional Manager
        </Card.Heading>
        <Card.Actions>
          <a className="nhsuk-link" href="#/delete">
            Delete
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
          <a className="nhsuk-link" href="#/withdraw">
            Withdraw
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
        </Card.Actions>
      </Card.HeadingContainer>
      <Card.Content>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Name</SummaryList.Key>
            <SummaryList.Value>Karen Francis</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row variant="no-border">
            <SummaryList.Key>Date of birth</SummaryList.Key>
            <SummaryList.Value>15 March 1984</SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
  ),
};

export const AsACardTypeNonUrgentWithActions: Story = {
  name: 'as a card (type non-urgent) with actions',
  render: () => (
    <Card variant="non-urgent">
      <Card.HeadingContainer>
        <Card.Heading careCard visuallyHiddenText="Non-urgent advice:">
          Regional Manager
        </Card.Heading>
        <Card.Actions>
          <a className="nhsuk-link" href="#/delete">
            Delete
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
          <a className="nhsuk-link" href="#/withdraw">
            Withdraw
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
        </Card.Actions>
      </Card.HeadingContainer>
      <Card.Content>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Name</SummaryList.Key>
            <SummaryList.Value>Karen Francis</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row variant="no-border">
            <SummaryList.Key>Date of birth</SummaryList.Key>
            <SummaryList.Value>15 March 1984</SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
  ),
};

export const AsACardTypeUrgentWithActions: Story = {
  name: 'as a card (type urgent) with actions',
  render: () => (
    <Card variant="urgent">
      <Card.HeadingContainer>
        <Card.Heading careCard visuallyHiddenText="Urgent advice:">
          Regional Manager
        </Card.Heading>
        <Card.Actions>
          <a className="nhsuk-link" href="#/delete">
            Delete
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
          <a className="nhsuk-link" href="#/withdraw">
            Withdraw
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
        </Card.Actions>
      </Card.HeadingContainer>
      <Card.Content>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Name</SummaryList.Key>
            <SummaryList.Value>Karen Francis</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row variant="no-border">
            <SummaryList.Key>Date of birth</SummaryList.Key>
            <SummaryList.Value>15 March 1984</SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
  ),
};

export const AsACardWithActions: Story = {
  name: 'as a card with actions',
  render: () => (
    <Card>
      <Card.HeadingContainer>
        <Card.Heading size="m">Regional Manager</Card.Heading>
        <Card.Actions>
          <a className="nhsuk-link" href="#/delete">
            Delete
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
          <a className="nhsuk-link" href="#/withdraw">
            Withdraw
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
        </Card.Actions>
      </Card.HeadingContainer>
      <Card.Content>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Name</SummaryList.Key>
            <SummaryList.Value>Karen Francis</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row variant="no-border">
            <SummaryList.Key>Date of birth</SummaryList.Key>
            <SummaryList.Value>15 March 1984</SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
  ),
};

export const AsACardWithMultipleActions: Story = {
  name: 'as a card with multiple actions',
  render: () => (
    <Card>
      <Card.HeadingContainer>
        <Card.Heading size="l">Regional Manager</Card.Heading>
        <Card.Actions>
          <a className="nhsuk-link" href="#/delete">
            Delete
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
          <a className="nhsuk-link" href="#/withdraw">
            Withdraw
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
        </Card.Actions>
      </Card.HeadingContainer>
      <Card.Content>
        <SummaryList>
          <SummaryList.Row variant="no-actions">
            <SummaryList.Key>Name</SummaryList.Key>
            <SummaryList.Value>Karen Francis</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row>
            <SummaryList.Key>Date of birth</SummaryList.Key>
            <SummaryList.Value>15 March 1984</SummaryList.Value>
            <SummaryList.Actions>
              <SummaryList.ActionLink
                visuallyHiddenText="date of birth (Regional Manager)"
                href="#/change"
              >
                Change
              </SummaryList.ActionLink>
            </SummaryList.Actions>
          </SummaryList.Row>
          <SummaryList.Row>
            <SummaryList.Key>Contact information</SummaryList.Key>
            <SummaryList.Value>
              73 Roman Rd
              <br />
              Leeds
              <br />
              LS2 5ZN
            </SummaryList.Value>
            <SummaryList.Actions>
              <SummaryList.ActionLink
                visuallyHiddenText="contact information (Regional Manager)"
                href="#/change"
              >
                Change
              </SummaryList.ActionLink>
            </SummaryList.Actions>
          </SummaryList.Row>
          <SummaryList.Row>
            <SummaryList.Key>Contact details</SummaryList.Key>
            <SummaryList.Value>
              <p>07700 900362</p>
              <p>karen.francis@example.com</p>
            </SummaryList.Value>
            <SummaryList.Actions>
              <SummaryList.ActionLink
                visuallyHiddenText="new contact details (Regional Manager)"
                href="#/add"
              >
                Add
              </SummaryList.ActionLink>
              <SummaryList.ActionLink
                visuallyHiddenText="contact details (Regional Manager)"
                href="#/change"
              >
                Change
              </SummaryList.ActionLink>
            </SummaryList.Actions>
          </SummaryList.Row>
          <SummaryList.Row variant="no-border">
            <SummaryList.Key>Medicines</SummaryList.Key>
            <SummaryList.Value>
              <p>Isotretinoin capsules (Roaccutane)</p>
              <p>Isotretinoin gel (Isotrex)</p>
              <p>Pepto-Bismol (bismuth subsalicylate)</p>
            </SummaryList.Value>
            <SummaryList.Actions>
              <SummaryList.ActionLink
                visuallyHiddenText="new medicine (Regional Manager)"
                href="#/add"
              >
                Add
              </SummaryList.ActionLink>
              <SummaryList.ActionLink
                visuallyHiddenText="medicines (Regional Manager)"
                href="#/change"
              >
                Change
              </SummaryList.ActionLink>
            </SummaryList.Actions>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
  ),
};
