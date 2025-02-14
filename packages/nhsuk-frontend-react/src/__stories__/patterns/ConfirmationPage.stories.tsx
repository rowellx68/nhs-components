import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Panel } from '@/components/content-presentation/panel/Panel';
import { Header } from '@/components/navigation/header/Header';
import { Container } from '@/components/styles/layout/container/Container';
import { Main } from '@/components/styles/layout/main/Main';
import { Column, Row } from '@/components/styles/layout/grid/Grid';
import { Heading } from '@/components/styles/typography/heading/Heading';
import { Link } from '@/components/styles/typography/link/Link';
import { Footer } from '@/components/navigation/footer/Footer';
import { SummaryList } from '@/components/content-presentation/summary-list/SummaryList';
import { Paragraph } from '@/components/styles/typography/paragraph/Paragraph';

/**
 * Use a confirmation page to show users they have completed a task.
 *
 * https://service-manual.nhs.uk/design-system/patterns/confirmation-page
 */
const meta: Meta = {
  title: 'Patterns/Page types/Confirmation page',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ConfirmationPage: Story = {
  render: (args) => (
    <>
      <Header {...args}>
        <Header.Container>
          <Header.Logo variant="logo-only" href="/" aria-label="NHS homepage" />
        </Header.Container>
        <Header.Nav />
      </Header>

      <Container>
        <Main>
          <Row>
            <Column width="two-thirds">
              <Panel>
                <Panel.Title>Booking complete</Panel.Title>
                <Panel.Body>
                  Confirmation has been sent to you by email
                </Panel.Body>
              </Panel>

              <Heading as="h2">Your appointment details</Heading>
              <SummaryList variant="no-border">
                <SummaryList.Row>
                  <SummaryList.Key>Site location</SummaryList.Key>
                  <SummaryList.Value>
                    St Georges Pharmacy
                    <br />
                    46 St George's Rd,
                    <br />
                    Elephant and Castle,
                    <br />
                    London
                    <br />
                    SE1 6ET
                    <br />
                    <Link href="#">
                      Map and directions (opens in a new tab)
                    </Link>
                  </SummaryList.Value>
                </SummaryList.Row>
                <SummaryList.Row>
                  <SummaryList.Key>Date and time</SummaryList.Key>
                  <SummaryList.Value>
                    Thursday 15 June at 9:10am
                  </SummaryList.Value>
                </SummaryList.Row>
              </SummaryList>

              <Paragraph>
                <Link href="#">
                  Tell us about your experience using this service (opens in a
                  new tab)
                </Link>
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
