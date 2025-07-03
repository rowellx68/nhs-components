import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { NhsLogo } from '@/assets/NhsLogo';

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
          <NhsLogo className="nhsuk-header__logo" />
        </Header.Service>
        <Header.Search
          inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
          buttonProps={{ visuallyHiddenText: 'Search' }}
        />
      </Header.Container>
    </Header>
  ),
};

// export const WithOrgansation: Story = {
//   args: {
//     organisationName: 'Anytown Anyplace',
//     organisationSplit: 'Anywhere',
//     organisationDescriptor: 'NHS Foundation Trust',
//     variant: 'white-header-blue-nav',
//   },
//   render: (args) => (
//     <Header {...args}>
//       <Header.Container>
//         <Header.Logo href="#" aria-label="NHS homepage" />
//         <Header.Content>
//           <Header.Search
//             inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
//             buttonProps={{ visuallyHiddenText: 'Search' }}
//           />
//         </Header.Content>
//       </Header.Container>
//       <Header.Nav>
//         <Header.NavList>
//           <Header.NavItem href="#">Health A-Z</Header.NavItem>
//           <Header.NavItem href="#">Live Well</Header.NavItem>
//           <Header.NavItem href="#">Mental health</Header.NavItem>
//           <Header.NavItem href="#">Care and support</Header.NavItem>
//           <Header.NavItem href="#">Pregnancy</Header.NavItem>
//           <Header.NavItem href="#">NHS services</Header.NavItem>
//           <Header.NavItem href="#" variant="home-link">
//             Home
//           </Header.NavItem>
//           <Header.MobileMenu />
//         </Header.NavList>
//       </Header.Nav>
//     </Header>
//   ),
// };

// const SampleNav = (props: HeaderProps) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsVisible(true);
//     }, 2000);
//   }, []);

//   return (
//     <Header {...props}>
//       <Header.Container>
//         <Header.Logo href="#" aria-label="NHS homepage" />
//         <Header.Content>
//           <Header.Search
//             inputProps={{ visuallyHiddenText: 'Search the NHS website' }}
//             buttonProps={{ visuallyHiddenText: 'Search' }}
//           />
//         </Header.Content>
//       </Header.Container>
//       <Header.Nav>
//         <Header.NavList>
//           {isVisible ? (
//             <>
//               <Header.NavItem href="#">Health A-Z</Header.NavItem>
//               <Header.NavItem href="#">Live Well</Header.NavItem>
//               <Header.NavItem href="#">Mental health</Header.NavItem>
//               <Header.NavItem href="#">Care and support</Header.NavItem>
//               <Header.NavItem href="#">Pregnancy</Header.NavItem>
//               <Header.NavItem href="#">NHS services</Header.NavItem>
//               <Header.NavItem href="#" variant="home-link">
//                 Home
//               </Header.NavItem>
//               <Header.MobileMenu />
//             </>
//           ) : (
//             <Header.NavItem href="#">Health A-Z</Header.NavItem>
//           )}
//         </Header.NavList>
//       </Header.Nav>
//     </Header>
//   );
// };

// export const WithDelayedNav: Story = {
//   args: {
//     organisationName: 'Anytown Anyplace',
//     organisationSplit: 'Anywhere',
//     organisationDescriptor: 'NHS Foundation Trust',
//   },
//   render: (args) => <SampleNav {...args} />,
// };
