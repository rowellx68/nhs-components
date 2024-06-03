import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '@/components/navigation/header/Header';
import { Container } from '@/components/styles/layout/container/Container';
import { Main } from '@/components/styles/layout/main/Main';
import { Column, Row } from '@/components/styles/layout/grid/Grid';
import { Heading } from '@/components/styles/typography/heading/Heading';
import { Footer } from '@/components/navigation/footer/Footer';
import { Breadcrumb } from '@/components/navigation/breadcrumb/Breadcrumb';
import { Paragraph } from '@/components/styles/typography/paragraph/Paragraph';
import { Pagination } from '@/components/navigation/pagination/Pagination';
import { Button } from '@/components/form-elements/button/Button';

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
          <Header.Logo variant="logo-only" href="/" aria-label="NHS homepage" />
        </Header.Container>
        <Header.Nav />
      </Header>

      <Breadcrumb>
        <Breadcrumb.List>
          <Breadcrumb.ListItem>Home</Breadcrumb.ListItem>
          <Breadcrumb.ListItem>Section</Breadcrumb.ListItem>
          <Breadcrumb.ListItem>Subsection</Breadcrumb.ListItem>
        </Breadcrumb.List>
        <Breadcrumb.BackLink>Subsection</Breadcrumb.BackLink>
      </Breadcrumb>

      <Container>
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
