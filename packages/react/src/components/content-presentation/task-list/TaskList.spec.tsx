import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { TaskList } from './TaskList';

it('renders a ul element with the nhsuk-task-list class', async () => {
  const page = await render(
    <TaskList>
      <TaskList.Item>
        <TaskList.Item.NameAndHint>Name</TaskList.Item.NameAndHint>
        <TaskList.Item.Status>Not started</TaskList.Item.Status>
      </TaskList.Item>
    </TaskList>,
  );
  expect(page.container.querySelector('ul.nhsuk-task-list')).toBeInTheDocument();
});

it('renders task name and status', async () => {
  const page = await render(
    <TaskList>
      <TaskList.Item>
        <TaskList.Item.NameAndHint>Your details</TaskList.Item.NameAndHint>
        <TaskList.Item.Status>Not started</TaskList.Item.Status>
      </TaskList.Item>
    </TaskList>,
  );
  await expect.element(page.getByText('Your details')).toBeInTheDocument();
  await expect.element(page.getByText('Not started')).toBeInTheDocument();
});

it('applies the with-link item variant', async () => {
  const page = await render(
    <TaskList>
      <TaskList.Item variant="with-link">
        <TaskList.Item.NameAndHint as="a" href="#">
          Name
        </TaskList.Item.NameAndHint>
        <TaskList.Item.Status>Incomplete</TaskList.Item.Status>
      </TaskList.Item>
    </TaskList>,
  );
  expect(page.container.querySelector('.nhsuk-task-list__item--with-link')).toBeInTheDocument();
});

it('applies the completed status class', async () => {
  const page = await render(
    <TaskList>
      <TaskList.Item>
        <TaskList.Item.NameAndHint>Name</TaskList.Item.NameAndHint>
        <TaskList.Item.Status variant="completed">Completed</TaskList.Item.Status>
      </TaskList.Item>
    </TaskList>,
  );
  expect(page.container.querySelector('.nhsuk-task-list__status--completed')).toBeInTheDocument();
});
