import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Footer } from './Footer';

it('should render the footer component', () => {
  const { container } = render(
    <Footer>
      <Footer.Content>
        <Footer.List>
          <Footer.ListItem href="#">Accessibility statement</Footer.ListItem>
          <Footer.ListItem href="#">Contact us</Footer.ListItem>
          <Footer.ListItem href="#">Cookies</Footer.ListItem>
          <Footer.ListItem href="#">Privacy policy</Footer.ListItem>
          <Footer.ListItem href="#">Terms and conditions</Footer.ListItem>
        </Footer.List>
        <Footer.Copyright>NHS England</Footer.Copyright>
      </Footer.Content>
    </Footer>,
  );

  expect(container.querySelectorAll('a')).toHaveLength(5);
  expect(container.querySelector('footer')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the footer component', () => {
  const { container } = render(
    <Footer>
      <Footer.Content>
        <Footer.List variant="meta-links">
          <Footer.ListItem href="#">Accessibility statement</Footer.ListItem>
          <Footer.ListItem href="#">Contact us</Footer.ListItem>
          <Footer.ListItem href="#">Cookies</Footer.ListItem>
          <Footer.ListItem href="#">Privacy policy</Footer.ListItem>
          <Footer.ListItem href="#">Terms and conditions</Footer.ListItem>
        </Footer.List>
        <Footer.Copyright>NHS England</Footer.Copyright>
      </Footer.Content>
    </Footer>,
  );

  expect(container.querySelectorAll('a')).toHaveLength(5);
  expect(container.querySelector('footer')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
