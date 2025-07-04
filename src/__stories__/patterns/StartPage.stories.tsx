import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from '@/components/header/Header';
import { Container } from '@/styles/layout/container/Container';
import { Main } from '@/styles/layout/main/Main';
import { Column, Row } from '@/styles/layout/grid/Grid';
import { Heading } from '@/styles/typography/heading/Heading';
import { Footer } from '@/components/footer/Footer';
import { Breadcrumb } from '@/components/breadcrumb/Breadcrumb';
import { Paragraph } from '@/styles/typography/paragraph/Paragraph';
import { Pagination } from '@/components/pagination/Pagination';
import { Button } from '@/components/button/Button';

const meta: Meta = {
  title: 'Patterns/Page types/Start page',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const MiniHub: Story = {
  render: (args) => (
    <>
      <Header {...args}>
        <Header.Container>
          <Header.Service>
            <Header.ServiceLogo href="#" variant="logo-only" />
          </Header.Service>
        </Header.Container>
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

        <Main>
          <Row>
            <Column width="two-thirds">
              <Heading>Service name goes here</Heading>

              <Paragraph>Use this service to do something.</Paragraph>
              <Pagination>You can use this service if you:</Pagination>

              <ul>
                <li>live in England</li>
                <li>need to get a thing</li>
                <li>need to change a thing</li>
              </ul>

              <Heading as="h2">Before you start</Heading>

              <Paragraph>We'll ask you for: ...</Paragraph>

              <Button as="a" href="#">
                Start now
              </Button>

              <Paragraph>
                By using this service you are agreeing to our{' '}
                <a href="#">terms of use</a> and <a href="#">privacy policy</a>.
              </Paragraph>
            </Column>
          </Row>
        </Main>
      </Container>

      <Footer>
        <Footer.Content>
          <Footer.List />
          <Footer.Copyright>NHS England</Footer.Copyright>
        </Footer.Content>
      </Footer>
    </>
  ),
};
