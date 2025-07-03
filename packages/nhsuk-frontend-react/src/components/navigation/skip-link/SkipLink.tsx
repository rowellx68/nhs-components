'use client';

import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { ElementProps } from '@/types/shared';
import clsx from 'clsx';
import { Factory, factory } from '@/internal/factory/factory';
import { SkipLink as NhsSkipLink } from 'nhsuk-frontend';

export type SkipLinkProps = ElementProps<'a'>;

type SkipLinkFactory = Factory<{
  props: SkipLinkProps;
  ref: HTMLAnchorElement;
}>;

const SkipLink = factory<SkipLinkFactory>(
  ({ children, className, href = '#maincontent', ...props }, ref) => {
    const internalRef = useRef<HTMLAnchorElement>(null);
    useImperativeHandle(ref, () => internalRef.current as HTMLAnchorElement);

    useEffect(() => {
      if (!internalRef.current) {
        return;
      }

      new NhsSkipLink(internalRef.current);
    }, [internalRef]);

    return (
      <a
        className={clsx('nhsuk-skip-link', className)}
        href={href}
        tabIndex={0}
        {...props}
        ref={internalRef}
      >
        {children}
      </a>
    );
  },
);

SkipLink.displayName = 'SkipLink';

export { SkipLink };
