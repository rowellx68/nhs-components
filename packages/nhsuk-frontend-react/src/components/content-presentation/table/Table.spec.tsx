import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Table } from './Table';

it('renders a table element with the nhsuk-table class', async () => {
  const page = await render(
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Name</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Jane Smith</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>,
  );
  await expect.element(page.getByRole('table')).toBeInTheDocument();
  expect(page.container.querySelector('table.nhsuk-table')).toBeInTheDocument();
});

it('renders a caption', async () => {
  const page = await render(
    <Table>
      <Table.Caption>Patient list</Table.Caption>
      <Table.Body />
    </Table>,
  );
  await expect.element(page.getByText('Patient list')).toBeInTheDocument();
});

it('applies the responsive class', async () => {
  const page = await render(
    <Table variant="responsive">
      <Table.Body>
        <Table.Row>
          <Table.Cell>Data</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>,
  );
  expect(page.container.querySelector('.nhsuk-table-responsive')).toBeInTheDocument();
});
