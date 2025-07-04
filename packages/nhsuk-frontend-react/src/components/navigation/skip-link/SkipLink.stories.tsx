import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SkipLink } from './SkipLink';
import { Header } from '../header/Header';
import { Main } from '@/components/styles/layout/main/Main';
import { Heading } from '@/components/styles/typography/heading/Heading';
import { Container } from '@/components/styles/layout/container/Container';

/**
 * Use a skip link to help keyboard-only users skip to the main content on a page.
 *
 * https://service-manual.nhs.uk/design-system/components/skip-link
 */
const meta: Meta<typeof SkipLink> = {
  title: 'Components/Navigation/Skip Link',
  component: SkipLink,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SkipLink>;

export const Default: Story = {
  render: (args) => (
    <>
      <SkipLink {...args}>Skip to main content</SkipLink>
      <Header>
        <Header.Container>
          <Header.Service>
            <Header.ServiceLogo href="#" serviceName="Digital service manual" />
          </Header.Service>
        </Header.Container>
      </Header>
      <Container>
        <Main>
          <Heading>This is where the main content is</Heading>
        </Main>
      </Container>
    </>
  ),
};
