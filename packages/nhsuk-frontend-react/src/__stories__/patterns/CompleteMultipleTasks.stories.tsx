import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '@/components/navigation/header/Header';
import { Container } from '@/components/styles/layout/container/Container';
import { Main } from '@/components/styles/layout/main/Main';
import { Column, Row } from '@/components/styles/layout/grid/Grid';
import { Heading } from '@/components/styles/typography/heading/Heading';
import { Footer } from '@/components/navigation/footer/Footer';
import { TaskList } from '@/components/content-presentation/task-list/TaskList';
import { Button } from '@/components/form-elements/button/Button';

/**
 * Use this pattern to give users more control over how they complete long, complex services.
 *
 * https://service-manual.nhs.uk/design-system/patterns/complete-multiple-tasks
 */
const meta: Meta = {
  title: 'Patterns/Help users to/Complete multiple tasks',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CompleteMultipleTasks: Story = {
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
              <Heading size="l">Service name</Heading>

              <Heading as="h2" size="m">
                Your details
              </Heading>
              <TaskList>
                <TaskList.Item variant="with-link">
                  <TaskList.Item.NameAndHint as="a" href="#">
                    Name
                  </TaskList.Item.NameAndHint>
                  <TaskList.Item.Status variant="completed">
                    Completed
                  </TaskList.Item.Status>
                </TaskList.Item>
                <TaskList.Item variant="with-link">
                  <TaskList.Item.NameAndHint as="a" href="#">
                    Contact details
                  </TaskList.Item.NameAndHint>
                  <TaskList.Item.Status variant="incomplete">
                    Incomplete
                  </TaskList.Item.Status>
                </TaskList.Item>
              </TaskList>

              <Heading as="h2" size="m">
                Your health
              </Heading>
              <TaskList>
                <TaskList.Item variant="with-link">
                  <TaskList.Item.NameAndHint as="a" href="#">
                    Physical activity
                  </TaskList.Item.NameAndHint>
                  <TaskList.Item.Status variant="completed">
                    Completed
                  </TaskList.Item.Status>
                </TaskList.Item>
                <TaskList.Item variant="with-link">
                  <TaskList.Item.NameAndHint as="a" href="#">
                    Smoking history
                  </TaskList.Item.NameAndHint>
                  <TaskList.Item.Status variant="incomplete">
                    Incomplete
                  </TaskList.Item.Status>
                </TaskList.Item>
                <TaskList.Item variant="with-link">
                  <TaskList.Item.NameAndHint as="a" href="#">
                    Vaccination history
                  </TaskList.Item.NameAndHint>
                  <TaskList.Item.Status variant="completed">
                    Completed
                  </TaskList.Item.Status>
                </TaskList.Item>
                <TaskList.Item variant="with-link">
                  <TaskList.Item.NameAndHint as="a" href="#">
                    Alcohol use
                  </TaskList.Item.NameAndHint>
                  <TaskList.Item.Status variant="incomplete">
                    Incomplete
                  </TaskList.Item.Status>
                </TaskList.Item>
                <TaskList.Item variant="with-link">
                  <TaskList.Item.NameAndHint as="a" href="#">
                    Body measurements
                  </TaskList.Item.NameAndHint>
                  <TaskList.Item.Status variant="incomplete">
                    Incomplete
                  </TaskList.Item.Status>
                </TaskList.Item>
              </TaskList>

              <Button>Send</Button>
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
