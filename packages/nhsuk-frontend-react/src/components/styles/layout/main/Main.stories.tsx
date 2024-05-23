import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Main } from './Main';
import { Container } from '../container/Container';

/**
 * The second wrapper is a `main` element with the class `.nhsuk-main-wrapper`, which gives responsive padding to the top and bottom of the page and will be the wrapper for the main content of the page.
 *
 * There should be only one `main` element and it should have a unique id of `maincontent`, which allows keyboard-only users to skip to the main content on a page with the skip link component.
 *
 * https://service-manual.nhs.uk/design-system/styles/layout#main-content
 */
const meta: Meta<typeof Main> = {
  title: 'Styles/Layout/Main',
  component: Main,
  argTypes: {
    id: {
      control: false,
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    role: {
      control: false,
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Main>;

export const Default: Story = {
  args: {
    id: 'maincontent',
    role: 'main',
  },
  render: (args) => (
    <Container>
      <Main {...args}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi dolor
        quos qui, suscipit magni sit nisi, explicabo laborum quasi nam
        architecto dolorum eaque iusto libero autem? Doloribus qui laborum
        optio?
      </Main>
    </Container>
  ),
};
