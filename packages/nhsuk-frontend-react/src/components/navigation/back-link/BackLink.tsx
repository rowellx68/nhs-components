import clsx from 'clsx';
import React from 'react';

import { Base, BaseProps } from '@/components/core/base/Base';
import { polymorphicFactory, PolymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { AsElementProps } from '@/types/shared';

export type BackLinkProps = BaseProps & {
  variant?: 'reverse';
};

type BackLinkFactory = PolymorphicFactory<{
  props: BackLinkProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const BackLink = polymorphicFactory<BackLinkFactory>(
  (
    {
      className,
      children,
      as: component = 'a',
      variant = 'default',
      ...props
    }: BackLinkProps & AsElementProps,
    ref,
  ) => {
    return (
      <Base
        as={component}
        className={clsx(
          'nhsuk-back-link',
          { 'nhsuk-back-link--reverse': variant === 'reverse' },
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </Base>
    );
  },
);

BackLink.displayName = 'BackLink';

export { BackLink };
