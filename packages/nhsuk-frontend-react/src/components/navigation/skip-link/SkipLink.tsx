'use client';

import React, { useEffect } from 'react';
import { ElementProps } from '@/types/shared';
import clsx from 'clsx';
import { Factory, factory } from '@/internal/factory/factory';
import { initSkipLinks } from 'nhsuk-frontend';

export type SkipLinkProps = ElementProps<'a', 'href'>;

type SkipLinkFactory = Factory<{
  props: SkipLinkProps;
  ref: HTMLAnchorElement;
}>;

const SkipLink = factory<SkipLinkFactory>(
  ({ children, className, ...props }, ref) => {
    useEffect(() => {
      setTimeout(() => {
        initSkipLinks();
      }, 500);
    });

    return (
      <a
        className={clsx('nhsuk-skip-link', className)}
        href="#maincontent"
        tabIndex={0}
        {...props}
        ref={ref}
      >
        {children}
      </a>
    );
  },
);

SkipLink.displayName = 'SkipLink';

export { SkipLink };
