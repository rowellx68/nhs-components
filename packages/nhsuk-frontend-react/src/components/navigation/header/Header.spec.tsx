import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Header } from './Header';

it('should render the Header component', () => {
  const { container } = render(
    <Header>
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
    </Header>,
  );

  expect(container).toMatchSnapshot();
});

it('should render the Header component with a service name', () => {
  const { container } = render(
    <Header serviceName="Digital service manual">
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
    </Header>,
  );

  expect(container).toMatchSnapshot();
});

it('should render the Header component as transactional', () => {
  const { container } = render(
    <Header>
      <Header.Container>
        <Header.Logo href="#" aria-label="NHS homepage" />
        <Header.TransactionLink href="#">
          Find your NHS number
        </Header.TransactionLink>
      </Header.Container>
    </Header>,
  );

  expect(container).toMatchSnapshot();
});

it('should render the Header component with an organisation', () => {
  const { container } = render(
    <Header
      organisationName="Anytown Anyplace"
      organisationSplit="Anywhere"
      organisationDescriptor="NHS Foundation Trust"
      variant="white-header-blue-nav"
    >
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
    </Header>,
  );

  expect(container).toMatchSnapshot();
});
