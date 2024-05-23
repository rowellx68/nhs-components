import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';
import { Heading } from '../heading/Heading';

/**
 * Use lists to make blocks of text easier to read, and to break information into manageable chunks.
 *
 * https://service-manual.nhs.uk/design-system/styles/typography#lists
 */
const meta: Meta<typeof List> = {
  title: 'Styles/Typography/List',
  component: List,
};

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: (args) => (
    <List {...args}>
      <li>
        <a href="#">Money, work and benefits</a>
      </li>
      <li>
        <a href="#">Care after a hospital stay</a>
      </li>
      <li>
        <a href="#">Support and benefits for carers</a>
      </li>
    </List>
  ),
};

export const Bulleted: Story = {
  render: (args) => (
    <>
      <p>Symptoms can include:</p>
      <List bullet {...args}>
        <li>tiredness and lack of energy</li>
        <li>shortness of breath</li>
        <li>noticeable heartbeats (heart palpitations)</li>
        <li>pale skin</li>
      </List>
    </>
  ),
};

export const Numbered: Story = {
  render: (args) => (
    <>
      <Heading as="h3">How to gargle with salt water</Heading>
      <List number {...args}>
        <li>Dissolve half a teaspoon of salt in a glass of warm water.</li>
        <li>Gargle with the solution then spit it out – don't swallow it.</li>
        <li>Repeat as often as you like.</li>
      </List>
    </>
  ),
};
