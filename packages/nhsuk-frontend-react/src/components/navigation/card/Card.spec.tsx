import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Card } from './Card';

it('should render the card component', () => {
  const { container } = render(
    <Card.Group>
      <Card.GroupItem width="one-third">
        <Card clickable>
          <Card.Content>
            <Card.Heading as="h5" size="xs">
              <Card.Link href="#">Order a repeat prescription</Card.Link>
            </Card.Heading>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>,
  );

  expect(container).toMatchSnapshot();
  expect(container.querySelector('h5')).toBeInTheDocument();
});

it('should render the card component with a primary variant', () => {
  const { container } = render(
    <Card.Group>
      <Card.GroupItem width="two-thirds">
        <Card clickable variant="primary">
          <Card.Content>
            <Card.Heading as="h2" size="m">
              <Card.Link href="#">Introduction to care and support</Card.Link>
            </Card.Heading>
            <Card.Description>
              A quick guide for people who have care and support needs and their
              carers
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>,
  );

  expect(container).toMatchSnapshot();
  expect(container.querySelector('h2')).toBeInTheDocument();
  expect(
    container.querySelector('.nhsuk-icon__chevron-right-circle'),
  ).toBeInTheDocument();
});

it('should render the card component with a secondary variant', () => {
  const { container } = render(
    <Card.Group>
      <Card.GroupItem width="two-thirds">
        <Card clickable variant="secondary">
          <Card.Content>
            <Card.Heading as="h2" size="m">
              <Card.Link href="#">Urgent and emergency care services</Card.Link>
            </Card.Heading>
            <Card.Description>
              Services the NHS provides if you need urgent or emergency medical
              help
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>,
  );

  expect(container).toMatchSnapshot();
  expect(container.querySelector('h2')).toBeInTheDocument();
});

it('should render the card component with an image', () => {
  const { container } = render(
    <Card.Group>
      <Card.GroupItem width="one-third">
        <Card clickable>
          <Card.Image
            src="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg"
            alt="A person wearing a face mask"
          />
          <Card.Content>
            <Card.Heading as="h2" size="m">
              <Card.Link href="#">Exercise</Card.Link>
            </Card.Heading>

            <Card.Description>
              Programmes, workouts and tips to get you moving and improve your
              fitness and wellbeing
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>,
  );

  expect(container).toMatchSnapshot();
  expect(container.querySelector('h2')).toBeInTheDocument();
  expect(container.querySelector('img')).toBeInTheDocument();
});
