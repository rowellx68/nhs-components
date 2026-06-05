import clsx from 'clsx';
import React from 'react';

import { Base, BaseProps } from '@/components/core/base/Base';
import { PolymorphicFactory, polymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { AsElementProps } from '@/types/shared';

export type LinkProps = {
  noVisitedState?: boolean;
  textColour?: boolean;
  noUnderline?: boolean;
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
      textColour,
      noUnderline,
      as: component = 'a',
      ...props
    }: LinkProps & AsElementProps,
    ref,
  ) => {
    return (
      <Base
        as={component}
        className={clsx(
          'nhsuk-link',
          {
            'nhsuk-link--no-visited-state': noVisitedState,
            'nhsuk-link--text-colour': textColour,
            'nhsuk-link--no-underline': noUnderline,
          },
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
