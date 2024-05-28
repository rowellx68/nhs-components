import React from 'react';
import { Base, BaseProps } from '@/components/core/base/Base';
import {
  polymorphicFactory,
  PolymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import { ChevronLeftIcon } from '@/icons/chevron-left/ChevronLeft';
import { AsElementProps } from '@/types/shared';
import clsx from 'clsx';

export type BackLinkProps = BaseProps;

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
      ...props
    }: BackLinkProps & AsElementProps,
    ref,
  ) => {
    return (
      <div className="nhsuk-back-link">
        <Base
          as={component}
          className={clsx('nhsuk-back-link__link', className)}
          {...props}
          ref={ref}
        >
          <ChevronLeftIcon />
          {children}
        </Base>
      </div>
    );
  },
);

BackLink.displayName = 'BackLink';

export { BackLink };
