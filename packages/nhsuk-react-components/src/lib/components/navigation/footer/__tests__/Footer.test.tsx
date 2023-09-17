import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import Footer from '..'

describe('Footer', () => {
  test('should match the snapshot', () => {
    render(
      <Footer data-testid="footer">
        <Footer.List>
          <Footer.ListItem href="#accessibility">
            Accessibility statement
          </Footer.ListItem>
          <Footer.ListItem href="#contact-us">Contact us</Footer.ListItem>
        </Footer.List>
        <Footer.Copyright>&copy; Crown copyright</Footer.Copyright>
      </Footer>,
    )

    expect(screen.getByTestId('footer').parentNode).toMatchSnapshot()
  })
})
