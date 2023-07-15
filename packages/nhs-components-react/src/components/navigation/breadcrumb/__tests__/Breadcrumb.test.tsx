import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import { Link } from 'react-router-dom'
import Breadcrumb from '..'

describe('Breadcrumb', () => {
  test('should match the snapshot', () => {
    render(
      <Breadcrumb data-testid="breadcrumb">
        <Breadcrumb.Item href="/url/1">Item 1</Breadcrumb.Item>
        <Breadcrumb.Item href="/url/2">Item 1</Breadcrumb.Item>
        <Breadcrumb.Back href="/url/1">Item 1</Breadcrumb.Back>
      </Breadcrumb>,
    )

    expect(screen.getByTestId('breadcrumb')).toMatchSnapshot()
  })

  test('should match the snapshot - other elements', () => {
    render(
      <Breadcrumb data-testid="breadcrumb">
        <Breadcrumb.Item href="/url/1">Item 1</Breadcrumb.Item>
        <Breadcrumb.Item href="/url/2">Item 1</Breadcrumb.Item>
        <Breadcrumb.Back href="/url/1">Item 1</Breadcrumb.Back>
        <>Item</>
        item
      </Breadcrumb>,
    )

    expect(screen.getByTestId('breadcrumb')).toMatchSnapshot()
  })

  test('accepts react-router-dom Link element', () => {
    render(
      <Breadcrumb data-testid="breadcrumb">
        <Breadcrumb.Item asElement={Link} to="/url/1">
          Item 1
        </Breadcrumb.Item>
        <Breadcrumb.Item asElement={Link} to="/url/2">
          Item 1
        </Breadcrumb.Item>
        <Breadcrumb.Back asElement={Link} to="/url/1">
          Item 1
        </Breadcrumb.Back>
      </Breadcrumb>,
    )

    expect(screen.getByTestId('breadcrumb')).toMatchSnapshot()
  })
})
