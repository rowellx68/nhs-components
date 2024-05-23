import React, { useEffect } from 'react';
import { ElementProps } from '@/types/shared';
import clsx from 'clsx';
import initSkipLink from 'nhsuk-frontend/packages/components/skip-link/skip-link';
import { Factory, factory } from '@/internal/factory/factory';

export type SkipLinkProps = ElementProps<'a', 'href'>;

type SkipLinkFactory = Factory<{
  props: SkipLinkProps;
  ref: HTMLAnchorElement;
}>;

const SkipLink = factory<SkipLinkFactory>(
  ({ children, className, ...props }, ref) => {
    useEffect(() => {
      setTimeout(() => {
        initSkipLink();
      }, 500);
    });

    return (
      <a
        className={clsx('nhsuk-skip-link', className)}
        href="#maincontent"
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
