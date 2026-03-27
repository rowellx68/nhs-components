import clsx from 'clsx';
import React from 'react';

import { Base, BaseProps } from '@/components/core/base/Base';
import { factory, Factory } from '@/internal/factory/factory';
import { PolymorphicFactory, polymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { AsElementProps, ElementProps, HeadingLevel } from '@/types/shared';

export type PanelProps = {
  variant?: 'interruption';
} & ElementProps<'div'>;

type PanelFactory = Factory<{
  props: PanelProps;
  ref: HTMLDivElement;
  staticComponents: {
    Title: typeof PanelTitle;
    Body: typeof PanelBody;
  };
}>;

const Panel = factory<PanelFactory>(({ variant, className, children, ...props }, ref) => {
  return (
    <div
      className={clsx(
        'nhsuk-panel',
        { 'nhsuk-panel--interruption': variant === 'interruption' },
        className,
      )}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  );
});

export type PanelTitleProps = {
  size?: 'm' | 'l' | 'xl';
} & BaseProps &
  AsElementProps<HeadingLevel>;

type PanelTitleFactory = PolymorphicFactory<{
  props: PanelTitleProps;
  defaultComponent: 'h1';
  defaultRef: HTMLHeadingElement;
}>;

const PanelTitle = polymorphicFactory<PanelTitleFactory>(
  ({ size, className, as: component = 'h1', ...props }: PanelTitleProps, ref) => {
    return (
      <Base
        as={component}
        className={clsx('nhsuk-panel__title', { [`nhsuk-panel__title--${size}`]: size }, className)}
        {...props}
        ref={ref}
      />
    );
  },
);

export type PanelBodyProps = ElementProps<'div'>;

const PanelBody = ({ className, ...props }: PanelBodyProps) => {
  return <div className={clsx('nhsuk-panel__body', className)} {...props} />;
};

Panel.displayName = 'Panel';
PanelTitle.displayName = 'Panel.Title';
PanelBody.displayName = 'Panel.Body';

Panel.Title = PanelTitle;
Panel.Body = PanelBody;

export { Panel, PanelTitle, PanelBody };
