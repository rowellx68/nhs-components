import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header, HeaderProps } from './Header';

/**
 * Use the appropriate header at the top of every page to show users they are on an NHS service and help them get started in finding what they need.
 *
 * https://service-manual.nhs.uk/design-system/components/header
 */
const meta: Meta<typeof Header> = {
  title: 'Components/Navigation/Header',
  component: Header,
  subcomponents: {
    'Header.Container': Header.Container,
    'Header.Logo': Header.Logo,
    'Header.Content': Header.Content,
    'Header.Search': Header.Search,
    'Header.Nav': Header.Nav,
    'Header.NavList': Header.NavList,
    'Header.NavItem': Header.NavItem,
    'Header.MobileMenu': Header.MobileMenu,
    'Header.TransactionLink': Header.TransactionLink,
  } as Record<string, React.ComponentType<any>>,
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

const SampleNav = (props: HeaderProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 2000);
  }, []);

  return (
    <Header {...props}>
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
          {isVisible ? (
            <>
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
            </>
          ) : (
            <Header.NavItem href="#">Health A-Z</Header.NavItem>
          )}
        </Header.NavList>
      </Header.Nav>
    </Header>
  );
};

export const WithDelayedNav: Story = {
  args: {
    organisationName: 'Anytown Anyplace',
    organisationSplit: 'Anywhere',
    organisationDescriptor: 'NHS Foundation Trust',
  },
  render: (args) => <SampleNav {...args} />,
};
