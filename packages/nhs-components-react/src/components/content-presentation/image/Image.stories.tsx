import type { Meta, StoryObj } from '@storybook/react'
import Image from '.'

const meta: Meta<typeof Image> = {
  component: Image,
  title: 'Components/Content Presentation/Image',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Image>

/**
 * The basic usage of the Image component.
 */
export const Basic: Story = {
  args: {
    src: 'https://assets.nhs.uk/prod/images/S_0318_Bullous_pemphigoid_lesions_.2e16d0ba.fill-320x213.jpg',
    alt: 'Lots of sore red patches with small blisters spread across white skin on a woman&#39;s chest.',
  },
  render: (args) => (
    <Image {...args}>
      <Image.Caption>
        It can affect large areas of the body or limbs.
      </Image.Caption>
    </Image>
  ),
}
