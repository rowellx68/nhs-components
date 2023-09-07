import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import SkipLink from '..'

describe('SkipLink', () => {
  test('should match the snapshot', () => {
    render(<SkipLink data-testid="skip-link" />)
    expect(screen.getAllByTestId('skip-link')).toMatchSnapshot()
  })

  test('should render the correct href and content', () => {
    render(
      <SkipLink data-testid="skip-link" href="#maincontent">
        Skip to main content
      </SkipLink>,
    )
    expect(screen.getByTestId('skip-link')).toMatchSnapshot()
  })
})
