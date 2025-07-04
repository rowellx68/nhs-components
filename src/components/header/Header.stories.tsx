import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './Header';

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
    'Header.Service': Header.Service,
    'Header.ServiceLogo': Header.ServiceLogo,
    'Header.Search': Header.Search,
    'Header.Nav': Header.Nav,
    'Header.NavList': Header.NavList,
    'Header.NavItem': Header.NavItem,
    'Header.Account': Header.Account,
    'Header.AccountItem': Header.AccountItem,
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

export const WithServiceName: Story = {
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo href="#" serviceName="Digital service manual" />
        </Header.Service>
        <Header.Search
          inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
          buttonProps={{ visuallyHiddenText: 'Search' }}
        />
      </Header.Container>
      <Header.Nav>
        <Header.NavList>
          <Header.NavItem href="#">NHS service standard</Header.NavItem>
          <Header.NavItem href="#">Design system</Header.NavItem>
          <Header.NavItem href="#">Content guide</Header.NavItem>
          <Header.NavItem href="#">Accessibility</Header.NavItem>
          <Header.NavItem href="#">Community and contribution</Header.NavItem>
        </Header.NavList>
      </Header.Nav>
    </Header>
  ),
};

export const LogoAndServiceName: Story = {
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo href="#" serviceName="Manage patients" />
        </Header.Service>
      </Header.Container>
    </Header>
  ),
};

export const SearchBar: Story = {
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo variant="logo-only" href="#" />
        </Header.Service>
        <Header.Search
          inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
          buttonProps={{ visuallyHiddenText: 'Search' }}
        />
      </Header.Container>
    </Header>
  ),
};

export const Navigation: Story = {
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo variant="logo-only" href="#" />
        </Header.Service>
      </Header.Container>
      <Header.Nav>
        <Header.NavList>
          <Header.NavItem href="#">NHS service standard</Header.NavItem>
          <Header.NavItem active href="#">
            Design system
          </Header.NavItem>
          <Header.NavItem href="#">Content guide</Header.NavItem>
          <Header.NavItem href="#">Accessibility</Header.NavItem>
          <Header.NavItem href="#">Community and contribution</Header.NavItem>
        </Header.NavList>
      </Header.Nav>
    </Header>
  ),
};

export const AccountInformationAndLinks: Story = {
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo href="#" serviceName="Manage patients" />
        </Header.Service>
        <Header.Account>
          <Header.AccountItem variant="icon">
            Florence Nightingale
          </Header.AccountItem>
          <Header.AccountItem href="#">Log out</Header.AccountItem>
        </Header.Account>
      </Header.Container>
    </Header>
  ),
};

export const ComplexAccountInformationAndLinks: Story = {
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo href="#" serviceName="Manage patients" />
        </Header.Service>
        <Header.Account>
          <Header.AccountItem variant="icon">
            Florence Nightingale (Regional Manager)
          </Header.AccountItem>
          <Header.AccountItem href="#">Change role</Header.AccountItem>
          <Header.AccountItem href="#">Log out</Header.AccountItem>
        </Header.Account>
      </Header.Container>
      <Header.Nav>
        <Header.NavList>
          <Header.NavItem href="#">Home</Header.NavItem>
          <Header.NavItem href="#">Add new patient</Header.NavItem>
          <Header.NavItem href="#">Find a patient</Header.NavItem>
        </Header.NavList>
      </Header.Nav>
    </Header>
  ),
};

export const BlueOrganisationHeader: Story = {
  args: {
    variant: 'organisation',
    colour: 'default',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo
            href="#"
            organisationName="Anytown Anyplace"
            organisationSplit="Anywhere"
            organisationDescriptor="NHS Foundation Trust"
          />
        </Header.Service>
        <Header.Search
          inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
          buttonProps={{ visuallyHiddenText: 'Search' }}
        />
      </Header.Container>
      <Header.Nav>
        <Header.NavList>
          <Header.NavItem href="#">Your hospital visit</Header.NavItem>
          <Header.NavItem active href="#">
            Wards and departments
          </Header.NavItem>
          <Header.NavItem href="#">Conditions and treatments</Header.NavItem>
          <Header.NavItem href="#">Our people</Header.NavItem>
          <Header.NavItem href="#">Our research</Header.NavItem>
        </Header.NavList>
      </Header.Nav>
    </Header>
  ),
};

export const WhiteOrganisationHeader: Story = {
  args: {
    variant: 'organisation',
    colour: 'white',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo
            href="#"
            organisationName="Anytown Anyplace"
            organisationSplit="Anywhere"
            organisationDescriptor="NHS Foundation Trust"
          />
        </Header.Service>
        <Header.Search
          inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
          buttonProps={{ visuallyHiddenText: 'Search' }}
        />
      </Header.Container>
      <Header.Nav colour="white">
        <Header.NavList>
          <Header.NavItem href="#">Your hospital visit</Header.NavItem>
          <Header.NavItem active href="#">
            Wards and departments
          </Header.NavItem>
          <Header.NavItem href="#">Conditions and treatments</Header.NavItem>
          <Header.NavItem href="#">Our people</Header.NavItem>
          <Header.NavItem href="#">Our research</Header.NavItem>
        </Header.NavList>
      </Header.Nav>
    </Header>
  ),
};

export const WhiteOrganisationHeaderBlueNavigation: Story = {
  args: {
    variant: 'organisation',
    colour: 'white',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Service>
          <Header.ServiceLogo
            href="#"
            organisationName="Anytown Anyplace"
            organisationSplit="Anywhere"
            organisationDescriptor="NHS Foundation Trust"
          />
        </Header.Service>
        <Header.Search
          inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
          buttonProps={{ visuallyHiddenText: 'Search' }}
        />
      </Header.Container>
      <Header.Nav>
        <Header.NavList>
          <Header.NavItem href="#">Your hospital visit</Header.NavItem>
          <Header.NavItem active href="#">
            Wards and departments
          </Header.NavItem>
          <Header.NavItem href="#">Conditions and treatments</Header.NavItem>
          <Header.NavItem href="#">Our people</Header.NavItem>
          <Header.NavItem href="#">Our research</Header.NavItem>
        </Header.NavList>
      </Header.Nav>
    </Header>
  ),
};
