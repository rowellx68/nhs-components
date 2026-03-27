import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { FileUpload } from './FileUpload';

it('renders a file input', async () => {
  const page = await render(
    <FileUpload id="file-upload" name="file-upload" label="Upload a file" />,
  );
  expect(page.container.querySelector('input[type="file"]')).toBeInTheDocument();
});

it('renders the label text', async () => {
  const page = await render(
    <FileUpload id="file-upload" name="file-upload" label="Upload a file" />,
  );
  await expect.element(page.getByText('Upload a file')).toBeInTheDocument();
});

it('renders an error message', async () => {
  const page = await render(
    <FileUpload
      id="file-upload"
      name="file-upload"
      label="Upload a file"
      error="The selected file must be a JPG"
    />,
  );
  await expect.element(page.getByText('The selected file must be a JPG')).toBeInTheDocument();
});
