/* eslint-disable import/export */
import {
  RenderOptions,
  RenderResult,
  cleanup,
  render,
} from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

const customRender = (
  ui: React.ReactElement,
  options: RenderOptions = {},
): RenderResult => {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => <Router>{children}</Router>,
    ...options,
  })
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }
