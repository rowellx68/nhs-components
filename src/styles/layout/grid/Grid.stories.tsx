import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Row, Column } from './Grid';

/**
 * The grid is structured with a `.nhsuk-grid-row` wrapper which acts as a row to contain your grid columns.
 *
 * You can add columns inside this wrapper to create your layout. To define your columns, add the class beginning with `.nhsuk-grid-column-` to a new container followed by the width, for example `.nhsuk-grid-column-one-third`, to make it the width you want.
 *
 * https://service-manual.nhs.uk/design-system/styles/layout#grid
 */
const meta: Meta = {
  title: 'Styles/Layout/Grid',
  decorators: [
    (Story) => (
      <>
        <style>
          {`[class^="nhsuk-grid-column"] > p {
            background-color: #005eb8;
            color: #fff;
            padding: 20px;
            text-align: center;
          }`}
        </style>
        <Story />
      </>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FullWidth: Story = {
  render: (args) => (
    <Row {...args}>
      <Column width="full">
        <p>nhsuk-grid-column-full</p>
      </Column>
    </Row>
  ),
};

export const OneHalf: Story = {
  render: (args) => (
    <Row {...args}>
      <Column width="one-half">
        <p>nhsuk-grid-column-one-half</p>
      </Column>
    </Row>
  ),
};

export const OneThird: Story = {
  render: (args) => (
    <Row {...args}>
      <Column width="one-third">
        <p>nhsuk-grid-column-one-third</p>
      </Column>
    </Row>
  ),
};

export const TwoThirds: Story = {
  render: (args) => (
    <Row {...args}>
      <Column width="two-thirds">
        <p>nhsuk-grid-column-two-thirds</p>
      </Column>
    </Row>
  ),
};

export const OneQuarter: Story = {
  render: (args) => (
    <Row {...args}>
      <Column width="one-quarter">
        <p>nhsuk-grid-column-one-quarter</p>
      </Column>
    </Row>
  ),
};

export const ThreeQuarters: Story = {
  render: (args) => (
    <Row {...args}>
      <Column width="three-quarters">
        <p>nhsuk-grid-column-three-quarters</p>
      </Column>
    </Row>
  ),
};

export const NestedGrid: Story = {
  render: (args) => (
    <Row {...args}>
      <Column width="two-thirds">
        <p>nhsuk-grid-column-two-thirds</p>
        <Row>
          <Column width="one-half">
            <p>nhsuk-grid-column-one-half</p>
          </Column>
          <Column width="one-half">
            <p>nhsuk-grid-column-one-half</p>
          </Column>
        </Row>
      </Column>
    </Row>
  ),
};
