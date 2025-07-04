import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
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
      <List.Item>
        <a href="#">Money, work and benefits</a>
      </List.Item>
      <List.Item>
        <a href="#">Care after a hospital stay</a>
      </List.Item>
      <List.Item>
        <a href="#">Support and benefits for carers</a>
      </List.Item>
    </List>
  ),
};

export const Bulleted: Story = {
  args: {
    variant: 'unordered',
  },
  render: (args) => (
    <>
      <p>Symptoms can include:</p>
      <List {...args}>
        <List.Item>tiredness and lack of energy</List.Item>
        <List.Item>shortness of breath</List.Item>
        <List.Item>noticeable heartbeats (heart palpitations)</List.Item>
        <List.Item>pale skin</List.Item>
      </List>
    </>
  ),
};

export const Numbered: Story = {
  args: {
    variant: 'ordered',
  },
  render: (args) => (
    <>
      <Heading as="h3">How to gargle with salt water</Heading>
      <List {...args}>
        <List.Item>
          Dissolve half a teaspoon of salt in a glass of warm water.
        </List.Item>
        <List.Item>
          Gargle with the solution then spit it out – don't swallow it.
        </List.Item>
        <List.Item>Repeat as often as you like.</List.Item>
      </List>
    </>
  ),
};

export const WithBorders: Story = {
  args: {
    variant: 'unordered',
    border: true,
  },
  render: (args) => (
    <List {...args}>
      <List.Item>Money, work and benefits</List.Item>
      <List.Item>Care after a hospital stay</List.Item>
      <List.Item>Support and benefits for carers</List.Item>
    </List>
  ),
};
