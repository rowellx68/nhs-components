import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import ContentsList from '..'

describe('ContentsList', () => {
  test('should match the snapshot', () => {
    render(
      <ContentsList data-testid="contents-list">
        <ContentsList.Item current href="/page-1">
          Page 1
        </ContentsList.Item>
        <ContentsList.Item href="/page-2">Page 2</ContentsList.Item>
      </ContentsList>,
    )

    expect(screen.getByTestId('contents-list')).toMatchSnapshot()
  })
})
