import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs', '@storybook/addon-links'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    reactDocgen: false,
  },
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  features: {
    sidebarOnboardingChecklist: false,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@/': '/src/',
        },
      },
      build: {
        cssMinify: 'esbuild',
      },
    });
  },
};

export default config;
