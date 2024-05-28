import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { DoDontList } from './DoDontList';

it('should render the do variant of the DoDontList component', () => {
  const { getByRole, container } = render(
    <DoDontList variant="do">
      <DoDontList.Label as="h2">Do</DoDontList.Label>
      <DoDontList.List>
        <DoDontList.ListItem>
          cover blisters that are likely to burst with a soft plaster or
          dressing
        </DoDontList.ListItem>
        <DoDontList.ListItem>
          wash your hands before touching a burst blister{' '}
        </DoDontList.ListItem>
        <DoDontList.ListItem>
          allow the fluid in a burst blister to drain before covering it with a
          plaster or dressing{' '}
        </DoDontList.ListItem>
      </DoDontList.List>
    </DoDontList>,
  );

  expect(getByRole('list')).toHaveClass('nhsuk-list nhsuk-list--tick');
  expect(container.querySelectorAll('.nhsuk-icon__tick')).toHaveLength(3);
  expect(container).toMatchSnapshot();
});

it('should render the dont variant of the DoDontList component', () => {
  const { getByRole, container } = render(
    <DoDontList variant="dont">
      <DoDontList.Label as="h2">Don’t</DoDontList.Label>
      <DoDontList.Label as="h2">Don't</DoDontList.Label>
      <DoDontList.List>
        <DoDontList.ListItem>
          do not burst a blister yourself
        </DoDontList.ListItem>
        <DoDontList.ListItem>
          do not peel the skin off a burst blister
        </DoDontList.ListItem>
        <DoDontList.ListItem>
          do not pick at the edges of the remaining skin
        </DoDontList.ListItem>
        <DoDontList.ListItem>
          do not wear the shoes or use the equipment that caused your blister
          until it heals
        </DoDontList.ListItem>
      </DoDontList.List>
    </DoDontList>,
  );

  expect(getByRole('list')).toHaveClass('nhsuk-list nhsuk-list--cross');
  expect(container.querySelectorAll('.nhsuk-icon__cross')).toHaveLength(4);
  expect(container).toMatchSnapshot();
});
