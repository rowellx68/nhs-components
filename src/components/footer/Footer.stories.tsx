import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './Footer';

/**
 * Use the footer to show users they are on an NHS service and to help them find links they expect at the bottom of our pages.
 *
 * https://service-manual.nhs.uk/design-system/components/footer
 */
const meta: Meta<typeof Footer> = {
  title: 'Components/Navigation/Footer',
  component: Footer,
  subcomponents: {
    'Footer.Content': Footer.Content,
    'Footer.List': Footer.List,
    'Footer.ListItem': Footer.ListItem,
    'Footer.Copyright': Footer.Copyright,
  } as Record<string, React.ComponentType<any>>,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FooterWithKeyLinksOnly: Story = {
  render: (args) => (
    <Footer {...args}>
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
    </Footer>
  ),
};

export const FooterWithNavigationLinks: Story = {
  render: (args) => (
    <Footer {...args}>
      <Footer.Content>
        <Footer.List>
          <Footer.ListItem href="#">Home</Footer.ListItem>
          <Footer.ListItem href="#">Health A to Z</Footer.ListItem>
          <Footer.ListItem href="#">Live Well</Footer.ListItem>
          <Footer.ListItem href="#">Mental health</Footer.ListItem>
          <Footer.ListItem href="#">Care and support</Footer.ListItem>
          <Footer.ListItem href="#">Accessibility statement</Footer.ListItem>
          <Footer.ListItem href="#">Pregnancy</Footer.ListItem>
          <Footer.ListItem href="#">NHS services</Footer.ListItem>
          <Footer.ListItem href="#">Coronavirus (COVID-19)</Footer.ListItem>
        </Footer.List>
        <Footer.List>
          <Footer.ListItem href="#">NHS App</Footer.ListItem>
          <Footer.ListItem href="#">Find my NHS number</Footer.ListItem>
          <Footer.ListItem href="#">Your health records</Footer.ListItem>
          <Footer.ListItem href="#">About the NHS</Footer.ListItem>
          <Footer.ListItem href="#">Healthcare abroad</Footer.ListItem>
        </Footer.List>
        <Footer.List>
          <Footer.ListItem href="#">Contact us</Footer.ListItem>
          <Footer.ListItem href="#">Other NHS websites</Footer.ListItem>
          <Footer.ListItem href="#">Profile editor login</Footer.ListItem>
        </Footer.List>
        <Footer.List variant="meta-links">
          <Footer.ListItem href="#">About us</Footer.ListItem>
          <Footer.ListItem href="#">Accessibility statement</Footer.ListItem>
          <Footer.ListItem href="#">Our policies</Footer.ListItem>
          <Footer.ListItem href="#">Cookies</Footer.ListItem>
        </Footer.List>
      </Footer.Content>
      <Footer.Copyright>NHS England</Footer.Copyright>
    </Footer>
  ),
};
