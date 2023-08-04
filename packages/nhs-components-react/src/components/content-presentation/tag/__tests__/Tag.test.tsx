import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import Tag from '..'
import { TagColour } from '../Tag'

describe('Tag', () => {
  test.each([
    'aqua-green',
    'blue',
    'green',
    'grey',
    'orange',
    'pink',
    'purple',
    'red',
    'white',
    'yellow',
    undefined,
  ] as TagColour[])('should match snapshot - colour %s', (colour) => {
    render(
      <Tag data-testid="tag" colour={colour}>
        Tag
      </Tag>,
    )

    expect(screen.getByTestId('tag')).toMatchSnapshot()
  })
})
