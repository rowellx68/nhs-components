'use client';

import clsx from 'clsx';
import { FileUploadTranslations, FileUpload as NhsFileUpload } from 'nhsuk-frontend';
import React, { useEffect, useImperativeHandle, useRef } from 'react';

import { BaseFormElementProps, FormGroup } from '@/components/core/form-group/FormGroup';
import { Factory, factory } from '@/internal/factory/factory';
import { ElementProps } from '@/types/shared';

export type FileUploadProps = BaseFormElementProps &
  ElementProps<'input', 'size' | 'as' | 'type'> & {
    i18n?: FileUploadTranslations;
  };

type FileUploadFactory = Factory<{
  props: FileUploadProps;
  ref: HTMLInputElement;
}>;

const FileUpload = factory<FileUploadFactory>(({ i18n, ...props }, ref) => {
  const internalRef = useRef<HTMLInputElement>(null);
  const fileUpload = useRef<NhsFileUpload>(null);

  useImperativeHandle(ref, () => internalRef.current as HTMLInputElement);

  useEffect(() => {
    const container = internalRef.current?.closest('.nhsuk-file-upload');
    if (!container) {
      return;
    }

    if (fileUpload.current) {
      return;
    }

    fileUpload.current = new NhsFileUpload(container, { i18n });

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
