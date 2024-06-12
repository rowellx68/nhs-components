import type { Preview } from '@storybook/react';
import React from 'react';

import 'nhsuk-frontend/dist/nhsuk.css';
import './styles.css';
import '../src/nhsuk-extension.scss';

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
      <div className="js-enabled">
        <Story />
      </div>
    ),
  ],
};

export default preview;
