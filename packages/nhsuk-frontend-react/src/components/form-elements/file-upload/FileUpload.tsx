'use client';

import clsx from 'clsx';
import { FileUpload as NhsFileUpload } from 'nhsuk-frontend';
import React, { useEffect, useImperativeHandle, useRef } from 'react';

import { BaseFormElementProps, FormGroup } from '@/components/core/form-group/FormGroup';
import { Factory, factory } from '@/internal/factory/factory';
import { ElementProps } from '@/types/shared';

export type FileUploadProps = BaseFormElementProps & ElementProps<'input', 'size' | 'as' | 'type'>;

type FileUploadFactory = Factory<{
  props: FileUploadProps;
  ref: HTMLInputElement;
}>;

const FileUpload = factory<FileUploadFactory>(({ ...props }, ref) => {
  const internalRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => internalRef.current as HTMLInputElement);

  useEffect(() => {
    const container = internalRef.current?.closest('.nhsuk-file-upload');
    if (!container) {
      return;
    }

    new NhsFileUpload(container);

    return () => {
      container.removeAttribute('data-nhsuk-file-upload-init');
    };
  }, []);

  return (
    <FormGroup
      as="input"
      withErrorLine
      {...props}
      inputType="input"
      formGroupProps={{
        className: 'nhsuk-file-upload',
        'data-module': 'nhsuk-file-upload',
      }}
      render={({ id, name, className, withError: _withError, ...rest }) => (
        <input
          id={id}
          name={name}
          className={clsx('nhsuk-file-upload__input', className)}
          type="file"
          {...rest}
          ref={internalRef}
        />
      )}
    />
  );
});

FileUpload.displayName = 'FileUpload';

export { FileUpload };
