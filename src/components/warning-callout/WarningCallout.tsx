import React from 'react';
import { VisuallyHidden } from '@/components/visually-hidden/VisuallyHidden';
import { Base, BaseProps } from '@/internal/base/Base';
import {
  polymorphicFactory,
  PolymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import clsx from 'clsx';
import {
  AsElementProps,
  ElementProps,
  HeadingLevel,
  WithVisuallyHiddenTextProps,
} from '@/types/shared';
import { Factory, factory } from '@/internal/factory/factory';

export type WarningCalloutProps = ElementProps<'div'>;

type WarningCalloutFactory = Factory<{
  props: WarningCalloutProps;
  ref: HTMLDivElement;
  staticComponents: {
    Label: typeof WarningCalloutLabel;
  };
}>;

const WarningCallout = factory<WarningCalloutFactory>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={clsx('nhsuk-warning-callout', className)}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

export type WarningCalloutLabelProps = AsElementProps<HeadingLevel> &
  WithVisuallyHiddenTextProps &
  BaseProps;

type WarningCalloutLabelFactory = PolymorphicFactory<{
  props: WarningCalloutLabelProps;
  defaultComponent: 'h3';
  defaultRef: HTMLHeadingElement;
}>;

const WarningCalloutLabel = polymorphicFactory<WarningCalloutLabelFactory>(
  (
    { className, children, as: component = 'h3', visuallyHiddenText, ...props },
    ref,
  ) => {
    return (
      <Base
        as={component}
        className={clsx('nhsuk-warning-callout__label', className)}
        {...props}
        ref={ref}
      >
        <span role="text">
          {visuallyHiddenText && (
            <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden>
          )}
          {children}
        </span>
      </Base>
    );
  },
);

WarningCallout.displayName = 'WarningCallout';
WarningCalloutLabel.displayName = 'WarningCallout.Label';

WarningCallout.Label = WarningCalloutLabel;

export { WarningCallout, WarningCalloutLabel };
