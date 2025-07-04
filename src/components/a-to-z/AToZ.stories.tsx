import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { AToZ } from './AToZ';

const meta: Meta<typeof AToZ> = {
  title: 'Components/Navigation/A to Z',
  component: AToZ,
  subcomponents: {
    'AToZ.Item': AToZ.Item,
  } as Record<string, React.ComponentType<any>>,
};

export default meta;

type Story = StoryObj<typeof AToZ>;

export const Default: Story = {
  render: (args) => (
    <AToZ {...args} aria-label="A to Z Navigation">
      <AToZ.Item href="#A">A</AToZ.Item>
      <AToZ.Item href="#B" noItems>
        B
      </AToZ.Item>
      <AToZ.Item href="#C">C</AToZ.Item>
      <AToZ.Item href="#D">D</AToZ.Item>
      <AToZ.Item href="#E">E</AToZ.Item>
      <AToZ.Item href="#F">F</AToZ.Item>
      <AToZ.Item href="#G">G</AToZ.Item>
      <AToZ.Item href="#H">H</AToZ.Item>
      <AToZ.Item href="#I">I</AToZ.Item>
      <AToZ.Item href="#J">J</AToZ.Item>
      <AToZ.Item href="#K">K</AToZ.Item>
      <AToZ.Item href="#L">L</AToZ.Item>
      <AToZ.Item href="#M">M</AToZ.Item>
      <AToZ.Item href="#N">N</AToZ.Item>
      <AToZ.Item href="#O">O</AToZ.Item>
      <AToZ.Item href="#P">P</AToZ.Item>
      <AToZ.Item href="#Q">Q</AToZ.Item>
      <AToZ.Item href="#R">R</AToZ.Item>
      <AToZ.Item href="#S">S</AToZ.Item>
      <AToZ.Item href="#T">T</AToZ.Item>
      <AToZ.Item href="#U">U</AToZ.Item>
      <AToZ.Item href="#V">V</AToZ.Item>
      <AToZ.Item href="#W">W</AToZ.Item>
      <AToZ.Item href="#X">X</AToZ.Item>
      <AToZ.Item href="#Y">Y</AToZ.Item>
      <AToZ.Item href="#Z" noItems>
        Z
      </AToZ.Item>
    </AToZ>
  ),
};
