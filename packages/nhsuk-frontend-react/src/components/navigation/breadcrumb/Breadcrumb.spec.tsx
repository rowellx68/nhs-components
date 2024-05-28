import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Breadcrumb } from './Breadcrumb';

it('should render a breadcrumb element', () => {
  const { container } = render(
    <Breadcrumb>
      <Breadcrumb.List>
        <Breadcrumb.ListItem href="/level-one">Level one</Breadcrumb.ListItem>
        <Breadcrumb.ListItem href="/level-one/level-two">
          Level two
        </Breadcrumb.ListItem>
        <Breadcrumb.ListItem href="/level-one/level-two/level-three">
          Level three
        </Breadcrumb.ListItem>
      </Breadcrumb.List>
      <Breadcrumb.BackLink href="/level-one/level-two/level-three">
        Level three
      </Breadcrumb.BackLink>
    </Breadcrumb>,
  );

  expect(container.querySelector('.nhsuk-breadcrumb')).toBeInTheDocument();
  expect(container.querySelectorAll('a')).toHaveLength(4);
  expect(container).toMatchSnapshot();
});
