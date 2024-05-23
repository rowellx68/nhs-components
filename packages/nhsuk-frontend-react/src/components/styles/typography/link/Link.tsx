import React from 'react';
import { Base, BaseProps } from '@/components/core/base/Base';
import {
  PolymorphicFactory,
  polymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import { AsElementProps } from '@/types/shared';
import clsx from 'clsx';

export type LinkProps = {
  noVisitedState?: boolean;
} & BaseProps;

type LinkFactory = PolymorphicFactory<{
  props: LinkProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const Link = polymorphicFactory<LinkFactory>(
  (
    {
      className,
      noVisitedState,
      as: component,
      ...props
    }: LinkProps & AsElementProps,
    ref,
  ) => {
    return (
      <Base
        as={component || 'a'}
        className={clsx(
          'nhsuk-link',
          { 'nhsuk-link--no-visited-state': noVisitedState },
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Link.displayName = 'Link';

export { Link };
