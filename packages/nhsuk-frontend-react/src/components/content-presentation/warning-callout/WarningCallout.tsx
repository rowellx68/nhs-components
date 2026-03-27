import clsx from 'clsx';
import React from 'react';

import { Base, BaseProps } from '@/components/core/base/Base';
import { VisuallyHidden } from '@/components/core/visually-hidden/VisuallyHidden';
import { Factory, factory } from '@/internal/factory/factory';
import { polymorphicFactory, PolymorphicFactory } from '@/internal/factory/polymorphic-factory';
import {
  AsElementProps,
  ElementProps,
  HeadingLevel,
  WithVisuallyHiddenTextProps,
} from '@/types/shared';

export type WarningCalloutProps = ElementProps<'div'>;

type WarningCalloutFactory = Factory<{
  props: WarningCalloutProps;
  ref: HTMLDivElement;
  staticComponents: {
    Label: typeof WarningCalloutLabel;
    Description: typeof WarningCalloutDescription;
  };
}>;

const WarningCallout = factory<WarningCalloutFactory>(({ className, children, ...props }, ref) => {
  return (
    <div className={clsx('nhsuk-card nhsuk-card--warning', className)} {...props} ref={ref}>
      <div className="nhsuk-card__content">{children}</div>
    </div>
  );
});

export type WarningCalloutLabelProps = AsElementProps<HeadingLevel> &
  WithVisuallyHiddenTextProps &
  BaseProps;

type WarningCalloutLabelFactory = PolymorphicFactory<{
  props: WarningCalloutLabelProps;
  defaultComponent: 'h3';
  defaultRef: HTMLHeadingElement;
}>;

const WarningCalloutLabel = polymorphicFactory<WarningCalloutLabelFactory>(
  ({ className, children, as: component = 'h3', visuallyHiddenText, ...props }, ref) => {
    return (
      <Base as={component} className={clsx('nhsuk-card__heading', className)} {...props} ref={ref}>
        {visuallyHiddenText ? (
          <span role="text">
            <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden>
            {children}
          </span>
        ) : (
          children
        )}
      </Base>
    );
  },
);

export type WarningCalloutDescriptionProps = BaseProps & AsElementProps<'p'>;

type WarningCalloutDescriptionFactory = PolymorphicFactory<{
  props: WarningCalloutDescriptionProps;
  defaultComponent: 'p';
  defaultRef: HTMLParagraphElement;
}>;

const WarningCalloutDescription = polymorphicFactory<WarningCalloutDescriptionFactory>(
  ({ className, as: component = 'p', ...props }, ref) => {
    return (
      <Base
        as={component}
        className={clsx('nhsuk-card__description', className)}
        {...props}
        ref={ref}
      />
    );
  },
);

WarningCallout.displayName = 'WarningCallout';
WarningCalloutLabel.displayName = 'WarningCallout.Label';
WarningCalloutDescription.displayName = 'WarningCallout.Description';

WarningCallout.Label = WarningCalloutLabel;
WarningCallout.Description = WarningCalloutDescription;

export { WarningCallout, WarningCalloutLabel, WarningCalloutDescription };
