import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '@/components/navigation/header/Header';
import { Container } from '@/components/styles/layout/container/Container';
import { Main } from '@/components/styles/layout/main/Main';
import { Column, Row } from '@/components/styles/layout/grid/Grid';
import { Heading } from '@/components/styles/typography/heading/Heading';
import { List } from '@/components/styles/typography/list/List';
import { Footer } from '@/components/navigation/footer/Footer';
import { Breadcrumb } from '@/components/navigation/breadcrumb/Breadcrumb';
import { VisuallyHidden } from '@/components/core/visually-hidden/VisuallyHidden';
import { ContentsList } from '@/components/navigation/contents-list/ContentsList';
import { Paragraph } from '@/components/styles/typography/paragraph/Paragraph';
import { Pagination } from '@/components/navigation/pagination/Pagination';

const meta: Meta = {
  title: 'Patterns/Page types/Mini-hub page',
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
          <Breadcrumb.ListItem>Health A to Z</Breadcrumb.ListItem>
        </Breadcrumb.List>
        <Breadcrumb.BackLink>Health A to Z</Breadcrumb.BackLink>
      </Breadcrumb>

      <Container>
        <Main>
          <Row>
            <Column width="two-thirds">
              <Heading>
                <span role="text">
                  What is AMD?
                  <span className="nhsuk-caption-xl nhsuk-caption--bottom">
                    <VisuallyHidden>-</VisuallyHidden>
                    Age-related macular degeneration (AMD)
                  </span>
                </span>
              </Heading>

              <ContentsList aria-label="Pages in this guide">
                <ContentsList.Item href="#" active>
                  What is AMD?
                </ContentsList.Item>
                <ContentsList.Item href="#">Symptoms</ContentsList.Item>
                <ContentsList.Item href="#">
                  Getting diagnosed
                </ContentsList.Item>
                <ContentsList.Item href="#">Treatment</ContentsList.Item>
                <ContentsList.Item href="#">Living with AMD</ContentsList.Item>
              </ContentsList>

              <List variant="unordered">
                <List.Item>
                  <strong>
                    Age-related macular degeneration (AMD) is a common condition
                    that affects the middle part of your vision.
                  </strong>{' '}
                  It usually first affects people in their 50s and 60s.
                </List.Item>
                <List.Item>
                  <strong>It doesn't cause total blindness.</strong> But it can
                  make everyday activities like reading and recognising faces
                  difficult.
                </List.Item>
                <List.Item>
                  <strong>Without treatment, your vision may get worse.</strong>{' '}
                  This can happen gradually over several years ("dry AMD"), or
                  quickly over a few weeks or months ("wet AMD").
                </List.Item>
                <List.Item>
                  <strong>The exact cause is unknown.</strong> It's been linked
                  to smoking, high blood pressure, being overweight and having a
                  family history of AMD.
                </List.Item>
              </List>

              <Paragraph
                variant="small"
                className="nhsuk-u-margin-top-7 nhsuk-u-secondary-text-color"
              >
                Page last reviewed: 27 March 2018 <br />
                Next review due: 27 March 2021
              </Paragraph>

              <Pagination>
                <Pagination.Next pageTitle="Symptoms" />
              </Pagination>
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
