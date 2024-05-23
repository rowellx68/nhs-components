import React from 'react';
import { Base, BaseProps } from '@/components/core/base/Base';
import {
  polymorphicFactory,
  PolymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import { ArrowRightCircleIcon } from '@/icons/arrow-right-circle/ArrowRightCircle';
import { AsElementProps } from '@/types/shared';
import clsx from 'clsx';

export type ActionLinkProps = BaseProps;

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
      as: component,
      ...props
    }: ActionLinkProps & AsElementProps,
    ref,
  ) => {
    return (
      <div className="nhsuk-action-link">
        <Base
          as={component || 'a'}
          className={clsx('nhsuk-action-link__link', className)}
          {...props}
          ref={ref}
        >
          <ArrowRightCircleIcon />
          <span className="nhsuk-action-link__text">{children}</span>
        </Base>
      </div>
    );
  },
);

ActionLink.displayName = 'ActionLink';

export { ActionLink };
