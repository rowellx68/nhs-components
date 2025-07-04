import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { AToZ } from '@/components/a-to-z/AToZ';
import { Header } from '@/components/header/Header';
import { Container } from '@/styles/layout/container/Container';
import { Card } from '@/components/card/Card';
import { Main } from '@/styles/layout/main/Main';
import { Column, Row } from '@/styles/layout/grid/Grid';
import { Heading } from '@/styles/typography/heading/Heading';
import { List } from '@/styles/typography/list/List';
import { Link } from '@/styles/typography/link/Link';
import { Footer } from '@/components/footer/Footer';

/**
 * A to Z is a way of presenting a number of pages alphabetically.
 *
 * https://service-manual.nhs.uk/design-system/patterns/a-to-z-page
 */
const meta: Meta = {
  title: 'Patterns/Page types/A to Z page',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AToZPage: Story = {
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
        <Main>
          <Row>
            <Column width="full">
              <Heading>Health A to Z</Heading>

              <AToZ id="nhsuk-nav-a-z" aria-label="A to Z Navigation">
                <AToZ.Item href="#A">A</AToZ.Item>
                <AToZ.Item href="#B" noItems>
                  B
                </AToZ.Item>
                <AToZ.Item href="#C">C</AToZ.Item>
                <AToZ.Item href="#D">D</AToZ.Item>
              </AToZ>

              <Card variant="feature">
                <Card.Content>
                  <Card.Heading id="A">A</Card.Heading>
                  <List border>
                    <List.Item>
                      <Link href="#">AAA</Link>
                    </List.Item>
                    <List.Item>
                      <Link href="#">Abdominal aortic aneurysm</Link>
                    </List.Item>
                    <List.Item>
                      <Link href="#">Abscess</Link>
                    </List.Item>
                  </List>
                </Card.Content>
              </Card>

              <Card variant="feature">
                <Card.Content>
                  <Card.Heading id="B">B</Card.Heading>
                  <List border>
                    <List.Item>
                      There are currently no conditions listed
                    </List.Item>
                  </List>
                </Card.Content>
              </Card>
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
