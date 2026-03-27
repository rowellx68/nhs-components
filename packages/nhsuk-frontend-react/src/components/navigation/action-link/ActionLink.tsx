import clsx from 'clsx';
import React from 'react';

import { Base, BaseProps } from '@/components/core/base/Base';
import { ArrowRightCircleIcon } from '@/icons/arrow-right-circle/ArrowRightCircle';
import { polymorphicFactory, PolymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { AsElementProps } from '@/types/shared';

export type ActionLinkProps = {
  variant?: 'reverse';
} & BaseProps;

type ActionLinkFactory = PolymorphicFactory<{
  props: ActionLinkProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const ActionLink = polymorphicFactory<ActionLinkFactory>(
  (
    {
      className,
      children,
      variant,
      as: component = 'a',
      ...props
    }: ActionLinkProps & AsElementProps,
    ref,
  ) => {
    return (
      <Base
        as={component}
        className={clsx(
          'nhsuk-action-link',
          { 'nhsuk-action-link--reverse': variant === 'reverse' },
          className,
        )}
        {...props}
        ref={ref}
      >
        <ArrowRightCircleIcon />
        <span className="nhsuk-action-link__text">{children}</span>
      </Base>
    );
  },
);

ActionLink.displayName = 'ActionLink';

export { ActionLink };
