import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import { Link } from 'react-router-dom'
import Pagination from '..'

describe('Pagination', () => {
  test('should match the snapshot', () => {
    render(
      <Pagination data-testid="pagination">
        <Pagination.Link previous href="#previous">
          Page 1
        </Pagination.Link>
        <Pagination.Link next href="#next">
          Page 3
        </Pagination.Link>
      </Pagination>,
    )
    expect(screen.getAllByTestId('pagination')).toMatchSnapshot()
  })

  test('accepts react-router-dom Link element', () => {
    render(
      <Pagination data-testid="pagination">
        <Pagination.Link
          previous
          asElement={Link}
          to="#previous"
          data-testid="pagination-link-previous"
        >
          Page 1
        </Pagination.Link>
        <Pagination.Link
          next
          asElement={Link}
          to="#next"
          data-testid="pagination-link-next"
        >
          Page 3
        </Pagination.Link>
      </Pagination>,
    )
    expect(screen.getAllByTestId('pagination')).toMatchSnapshot()
  })
})
