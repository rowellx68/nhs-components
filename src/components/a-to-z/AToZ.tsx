import React from 'react';
import { ElementProps } from '@/types/shared';
import clsx from 'clsx';
import { Factory, factory } from '@/internal/factory/factory';
import { PolymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { Base } from '@/internal/base/Base';

export type AToZProps = { 'aria-label': string } & ElementProps<
  'nav',
  'aria-label'
>;

type AToZFactory = Factory<{
  props: AToZProps;
  ref: HTMLDivElement;
  staticComponents: {
    Item: typeof AToZItem;
  };
}>;

const AToZ = factory<AToZFactory>(
  (
    {
      children,
      className,
      role = 'navigation',
      'aria-label': ariaLabel = 'A to Z Navigation',
      ...props
    }: AToZProps,
    ref,
  ) => {
    return (
      <nav
        className={clsx(
          'nhsuk-u-margin-bottom-4 nhsuk-u-margin-top-4',
          className,
        )}
        role={role}
        aria-label={ariaLabel}
        {...props}
        ref={ref}
      >
        <ol className="nhsuk-list nhsuk-u-clear nhsuk-u-margin-0" role="list">
          {children}
        </ol>
      </nav>
    );
  },
);

export type AToZItemProps = { noItems?: boolean } & ElementProps<'a'>;

type AToZItemFactory = PolymorphicFactory<{
  props: AToZItemProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const AToZItem = factory<AToZItemFactory>(
  ({ children, className, noItems, ...props }: AToZItemProps, ref) => {
    return (
      <li className="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1 nhsuk-a-to-z-min-width">
        <Base<any>
          as={noItems ? 'span' : 'a'}
          className={clsx(
            'nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block',
            { 'nhsuk-u-secondary-text-color': noItems },
            className,
          )}
          {...props}
          ref={ref}
        >
          {children}
        </Base>
      </li>
    );
  },
);

AToZ.displayName = 'AToZ';
AToZItem.displayName = 'AToZ.Item';

AToZ.Item = AToZItem;

export { AToZ, AToZItem };
