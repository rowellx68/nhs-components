import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Button } from '@/components/form-elements/button/Button';
import { Breadcrumb } from '@/components/navigation/breadcrumb/Breadcrumb';
import { Footer } from '@/components/navigation/footer/Footer';
import { Header } from '@/components/navigation/header/Header';
import { SkipLink } from '@/components/navigation/skip-link/SkipLink';
import { Container } from '@/components/styles/layout/container/Container';
import { Column, Row } from '@/components/styles/layout/grid/Grid';
import { Main } from '@/components/styles/layout/main/Main';
import { Heading } from '@/components/styles/typography/heading/Heading';
import { List } from '@/components/styles/typography/list/List';
import { Paragraph } from '@/components/styles/typography/paragraph/Paragraph';

const meta: Meta = {
  title: 'Patterns/Pages/Start page',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const StartPage: Story = {
  render: (args) => (
    <>
      <SkipLink />
      <Header {...args}>
        <Header.Container>
          <Header.ServiceLogo variant="logo-only" href="/" aria-label="NHS homepage" />
        </Header.Container>
        <Header.Nav />
      </Header>

      <Container>
        <Breadcrumb>
          <Breadcrumb.List>
            <Breadcrumb.ListItem>Home</Breadcrumb.ListItem>
            <Breadcrumb.ListItem>Section</Breadcrumb.ListItem>
            <Breadcrumb.ListItem>Subsection</Breadcrumb.ListItem>
          </Breadcrumb.List>
          <Breadcrumb.BackLink>Subsection</Breadcrumb.BackLink>
        </Breadcrumb>
        <Main size="s">
          <Row>
            <Column width="two-thirds">
              <Heading>Service name goes here</Heading>

              <Paragraph>Use this service to do something.</Paragraph>
              <Paragraph>You can use this service if you:</Paragraph>

              <List variant="unordered">
                <List.Item>live in England</List.Item>
                <List.Item>need to get a thing</List.Item>
                <List.Item>need to change a thing</List.Item>
              </List>

              <Heading as="h2">Before you start</Heading>

              <Paragraph>We'll ask you for: ...</Paragraph>

              <Button as="a" href="#">
                Start now
              </Button>

              <Paragraph>
                By using this service you are agreeing to our <a href="#">terms of use</a> and{' '}
                <a href="#">privacy policy</a>.
              </Paragraph>
            </Column>
          </Row>
        </Main>
      </Container>

      <Footer>
        <Footer.Meta>
          <Footer.Copyright>© NHS England</Footer.Copyright>
        </Footer.Meta>
      </Footer>
    </>
  ),
};
