import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/form-elements/input/Input';
import { Header } from '@/components/navigation/header/Header';
import { Container } from '@/components/styles/layout/container/Container';
import { Main } from '@/components/styles/layout/main/Main';
import { Column, Row } from '@/components/styles/layout/grid/Grid';
import { Button } from '@/components/form-elements/button/Button';

/**
 * Use this pattern to ask people for their NHS number and help them find it.
 *
 * https://service-manual.nhs.uk/design-system/patterns/ask-users-for-their-nhs-number
 */
const meta: Meta = {
  title: 'Patterns/Tasks/Ask users for their NHS number',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AskUsersForTheirNhsNumber: Story = {
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
              <form>
                <Input
                  label="What is your NHS number?"
                  labelProps={{ variant: 'page-heading', size: 'l' }}
                  width="10"
                  hint={
                    <>
                      Your NHS number is a 10 digit number that you find on any
                      letter the NHS has sent you. For example,{' '}
                      <span className="nhsuk-u-nowrap">485 777 3456</span>.
                    </>
                  }
                />
                <Button>Continue</Button>
              </form>
            </Column>
          </Row>
        </Main>
      </Container>
    </>
  ),
};
