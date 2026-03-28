'use client';

import clsx from 'clsx';
import { SkipLink as NhsSkipLink } from 'nhsuk-frontend';
import React, { useEffect, useImperativeHandle, useRef } from 'react';

import { Factory, factory } from '@/internal/factory/factory';
import { ElementProps } from '@/types/shared';

export type SkipLinkProps = ElementProps<'a'>;

type SkipLinkFactory = Factory<{
  props: SkipLinkProps;
  ref: HTMLAnchorElement;
}>;

const SkipLink = factory<SkipLinkFactory>(
  ({ children, className, href = '#maincontent', ...props }, ref) => {
    const internalRef = useRef<HTMLAnchorElement>(null);
    const skiplink = useRef<NhsSkipLink>(null);

    useImperativeHandle(ref, () => internalRef.current as HTMLAnchorElement);

    useEffect(() => {
      if (!internalRef.current) {
        return;
      }

      if (skiplink.current) {
        return;
      }

      skiplink.current = new NhsSkipLink(internalRef.current);

      return () => {
        internalRef.current?.removeAttribute('data-nhsuk-skip-link-init');
      };
    }, [internalRef]);

    return (
      <a
        className={clsx('nhsuk-skip-link', className)}
        data-module="nhsuk-skip-link"
        href={href}
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
