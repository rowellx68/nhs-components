import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

/**
 * Use the appropriate header at the top of every page to show users they are on an NHS service and help them get started in finding what they need.
 *
 * https://service-manual.nhs.uk/design-system/components/header
 */
const meta: Meta<typeof Header> = {
  title: 'Components/Navigation/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: [
        'blue-header-blue-nav',
        'blue-header-white-nav',
        'white-header-blue-nav',
        'white-header-white-nav',
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Logo href="#" aria-label="NHS homepage" />
        <Header.Content>
          <Header.Search
            inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
            buttonProps={{ visuallyHiddenText: 'Search' }}
          />
        </Header.Content>
      </Header.Container>
      <Header.Nav>
        <Header.NavList>
          <Header.NavItem href="#">Health A-Z</Header.NavItem>
          <Header.NavItem href="#">Live Well</Header.NavItem>
          <Header.NavItem href="#">Mental health</Header.NavItem>
          <Header.NavItem href="#">Care and support</Header.NavItem>
          <Header.NavItem href="#">Pregnancy</Header.NavItem>
          <Header.NavItem href="#">NHS services</Header.NavItem>
          <Header.NavItem href="#" variant="home-link">
            Home
          </Header.NavItem>
          <Header.MobileMenu />
        </Header.NavList>
      </Header.Nav>
    </Header>
  ),
};

export const WithServiceName: Story = {
  args: {
    serviceName: 'Digital service manual',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Logo href="#" aria-label="NHS homepage" />
        <Header.Content>
          <Header.Search
            inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
            buttonProps={{ visuallyHiddenText: 'Search' }}
          />
        </Header.Content>
      </Header.Container>
      <Header.Nav>
        <Header.NavList>
          <Header.NavItem href="#">Health A-Z</Header.NavItem>
          <Header.NavItem href="#">Live Well</Header.NavItem>
          <Header.NavItem href="#">Mental health</Header.NavItem>
          <Header.NavItem href="#">Care and support</Header.NavItem>
          <Header.NavItem href="#">Pregnancy</Header.NavItem>
          <Header.NavItem href="#">NHS services</Header.NavItem>
          <Header.NavItem href="#" variant="home-link">
            Home
          </Header.NavItem>
          <Header.MobileMenu />
        </Header.NavList>
      </Header.Nav>
    </Header>
  ),
};

export const Transactional: Story = {
  args: {
    transactional: true,
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Logo href="#" aria-label="NHS homepage" />
        <Header.TransactionLink href="#">
          Find your NHS number
        </Header.TransactionLink>
      </Header.Container>
    </Header>
  ),
};

export const WithOrgansation: Story = {
  args: {
    organisationName: 'Anytown Anyplace',
    organisationSplit: 'Anywhere',
    organisationDescriptor: 'NHS Foundation Trust',
    variant: 'white-header-blue-nav',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Logo href="#" aria-label="NHS homepage" />
        <Header.Content>
          <Header.Search
            inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
            buttonProps={{ visuallyHiddenText: 'Search' }}
          />
        </Header.Content>
      </Header.Container>
      <Header.Nav>
        <Header.NavList>
          <Header.NavItem href="#">Health A-Z</Header.NavItem>
          <Header.NavItem href="#">Live Well</Header.NavItem>
          <Header.NavItem href="#">Mental health</Header.NavItem>
          <Header.NavItem href="#">Care and support</Header.NavItem>
          <Header.NavItem href="#">Pregnancy</Header.NavItem>
          <Header.NavItem href="#">NHS services</Header.NavItem>
          <Header.NavItem href="#" variant="home-link">
            Home
          </Header.NavItem>
          <Header.MobileMenu />
        </Header.NavList>
      </Header.Nav>
    </Header>
  ),
};
