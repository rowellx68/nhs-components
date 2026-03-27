import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { FileUpload } from './FileUpload';

/**
 * Use the file upload component to let users select and upload a file.
 *
 * https://service-manual.nhs.uk/design-system/components/file-upload
 */
const meta = {
  title: 'Components/Form Elements/File Upload',
  component: FileUpload,
} satisfies Meta<typeof FileUpload>;

export default meta;

type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    id: 'file-upload',
    name: 'file-upload',
    label: 'Upload a file',
    labelProps: { variant: 'page-heading' },
  },
};

export const WithHint: Story = {
  args: {
    id: 'file-upload',
    name: 'file-upload',
    label: 'Upload your photo',
    labelProps: { variant: 'page-heading' },
    hint: 'Your photo may be in your Pictures, Photos, Downloads or Desktop folder',
  },
};

export const WithError: Story = {
  args: {
    id: 'file-upload',
    name: 'file-upload',
    label: 'Upload a file',
    labelProps: { variant: 'page-heading' },
    error: 'The selected file must be a JPG, BMP or TIF',
  },
};

export const Multiple: Story = {
  args: {
    id: 'file-upload',
    name: 'file-upload',
    label: 'Upload multiple files',
    labelProps: { variant: 'page-heading' },
    multiple: true,
  },
};

export const WithoutPageHeading: Story = {
  args: {
    id: 'file-upload',
    name: 'file-upload',
    label: 'Upload a file',
  },
};
