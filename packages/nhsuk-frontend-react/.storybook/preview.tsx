import type { Preview } from '@storybook/react';
import React from 'react';

import 'nhsuk-frontend/dist/nhsuk/nhsuk-frontend.min.css';
import './styles.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="js-enabled nhsuk-frontend-supported">
        <Story />
      </div>
    ),
  ],
};

export default preview;
