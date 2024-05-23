import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Figure } from './Figure';

it('should render the Figure component', () => {
  const { container } = render(
    <Figure>
      <Figure.Image
        src="https://assets.nhs.uk/prod/images/S_0318_Bullous_pemphigoid_lesions_.2e16d0ba.fill-320x213.jpg"
        alt="Lots of sore red patches with small blisters spread across white skin on a woman&#39;s chest."
      />
      <Figure.Caption>
        It can affect large areas of the body or limbs.
      </Figure.Caption>
    </Figure>,
  );

  expect(container).toMatchSnapshot();
});
