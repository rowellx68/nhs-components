import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import SummaryList from '..'

describe('SummaryList', () => {
  test('should match snapshot', () => {
    render(
      <SummaryList data-testid="summary-list">
        <SummaryList.Row>
          <SummaryList.Key>Label</SummaryList.Key>
          <SummaryList.Value>Value</SummaryList.Value>
          <SummaryList.Actions>
            <a href="#/change">Change</a>
          </SummaryList.Actions>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Label</SummaryList.Key>
          <SummaryList.Value>Value</SummaryList.Value>
          <SummaryList.Actions>
            <a href="#/change">Change</a>
          </SummaryList.Actions>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Label</SummaryList.Key>
          <SummaryList.Value>Value</SummaryList.Value>
          <SummaryList.Actions>
            <a href="#/change">Change</a>
          </SummaryList.Actions>
        </SummaryList.Row>
      </SummaryList>,
    )

    expect(screen.getByTestId('summary-list')).toMatchSnapshot()
  })

  test('should match snapshot - borderless', () => {
    render(
      <SummaryList data-testid="summary-list" borderless>
        <SummaryList.Row>
          <SummaryList.Key>Label</SummaryList.Key>
          <SummaryList.Value>Value</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Label</SummaryList.Key>
          <SummaryList.Value>Value</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Label</SummaryList.Key>
          <SummaryList.Value>Value</SummaryList.Value>
        </SummaryList.Row>
      </SummaryList>,
    )

    expect(screen.getByTestId('summary-list')).toMatchSnapshot()
  })
})
