import { render, screen } from '@/utils/test-utils'
import { describe, test } from 'vitest'
import Image from '..'

describe('Image', () => {
  test('should match snapshot', () => {
    render(
      <Image
        data-testid="image"
        src="image.jpg"
        alt="Lots of sore red patches with small blisters spread across white skin on a woman&#39;s chest."
      >
        <Image.Caption>
          It can affect large areas of the body or limbs.
        </Image.Caption>
      </Image>,
    )

    expect(screen.getByTestId('image').parentElement).toMatchSnapshot()
  })

  test('should match snapshot - no caption', () => {
    render(
      <Image
        data-testid="image"
        src="image.jpg"
        alt="Lots of sore red patches with small blisters spread across white skin on a woman&#39;s chest."
      />,
    )

    expect(screen.getByTestId('image').parentElement).toMatchSnapshot()
  })

  test('should match snapshot - figure props', () => {
    render(
      <Image
        data-testid="image"
        src="image.jpg"
        alt="Lots of sore red patches with small blisters spread across white skin on a woman&#39;s chest."
        figureProps={{
          className: 'custom-class',
        }}
      />,
    )

    expect(screen.getByTestId('image').parentElement).toMatchSnapshot()
  })
})
