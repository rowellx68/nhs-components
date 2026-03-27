import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Panel } from '@/components/content-presentation/panel/Panel';
import { Button } from '@/components/form-elements/button/Button';
import { BackLink } from '@/components/navigation/back-link/BackLink';
import { Footer } from '@/components/navigation/footer/Footer';
import { Header } from '@/components/navigation/header/Header';
import { SkipLink } from '@/components/navigation/skip-link/SkipLink';
import { Container } from '@/components/styles/layout/container/Container';
import { Column, Row } from '@/components/styles/layout/grid/Grid';
import { Main } from '@/components/styles/layout/main/Main';

/**
 * Use an interruption page to stop users in a transaction when they need to
 * read important information before continuing, or to confirm an action that
 * may have significant consequences.
 *
 * https://service-manual.nhs.uk/patterns/interruption-page
 */
const meta: Meta = {
  title: 'Patterns/Pages/Interruption page',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const InterruptionPage: Story = {
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
        <BackLink href="#">Back</BackLink>
        <Main size="s">
          <Row>
            <Column width="two-thirds">
              <Panel variant="interruption">
                <Panel.Title size="l">
                  Jodie Brown had a COVID-19 vaccine less than 3 months ago
                </Panel.Title>
                <Panel.Body>
                  <p>They had a COVID-19 vaccine on 25 December 2025.</p>
                  <p>
                    For most people, the minimum recommended gap between COVID-19 vaccine doses is 3
                    months.
                  </p>
                  <div className="nhsuk-button-group">
                    <Button as="a" variant="reverse" href="#">
                      Continue anyway
                    </Button>
                    <a href="#">Cancel</a>
                  </div>
                </Panel.Body>
              </Panel>
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
