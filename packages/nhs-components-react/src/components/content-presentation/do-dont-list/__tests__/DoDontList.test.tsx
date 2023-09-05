import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import DoDontList from '..'
import { DoDontListType } from '../DoDontList'

describe('DoDontList', () => {
  test('should match snapshot', () => {
    render(
      <DoDontList data-testid="do-dont-list">
        <DoDontList.Item>Do this</DoDontList.Item>
        <DoDontList.Item>Do that</DoDontList.Item>
      </DoDontList>,
    )

    expect(screen.getByTestId('do-dont-list')).toMatchSnapshot()
  })

  test.each(['do', 'dont'] as DoDontListType[])('should match snapshot - type %s', (type) => {
    render(
      <DoDontList data-testid="do-dont-list" type={type}>
        <DoDontList.Item>Do this</DoDontList.Item>
        <DoDontList.Item>Do that</DoDontList.Item>
      </DoDontList>,
    )

    expect(screen.getByTestId('do-dont-list')).toMatchSnapshot()
  })
})
