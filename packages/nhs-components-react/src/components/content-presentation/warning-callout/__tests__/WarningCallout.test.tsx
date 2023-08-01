import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import WarningCallout from '..'

describe('WarningCallout', () => {
  test('should match snapshot', () => {
    render(
      <WarningCallout data-testid="warning-callout">
        <WarningCallout.Label>Important information</WarningCallout.Label>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus quidem unde nobis, rem consequuntur cum, illo, tempore error ipsum dolor fugit fuga excepturi id! Molestias veritatis consequuntur iste deserunt dicta!</p>
      </WarningCallout>
    )

    expect(screen.getByTestId('warning-callout')).toMatchSnapshot()
  })
})
