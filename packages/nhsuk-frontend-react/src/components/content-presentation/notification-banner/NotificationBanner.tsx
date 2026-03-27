import clsx from 'clsx';
import React from 'react';

import { Base, BaseProps } from '@/components/core/base/Base';
import { Factory, factory } from '@/internal/factory/factory';
import { PolymorphicFactory, polymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { AsElementProps, ElementProps } from '@/types/shared';

export type NotificationBannerProps = {
  variant?: 'success';
  disableAutoFocus?: boolean;
} & ElementProps<'div'>;

type NotificationBannerFactory = Factory<{
  props: NotificationBannerProps;
  ref: HTMLDivElement;
  staticComponents: {
    Header: typeof NotificationBannerHeader;
    Content: typeof NotificationBannerContent;
    Heading: typeof NotificationBannerHeading;
  };
}>;

const NotificationBanner = factory<NotificationBannerFactory>(
  (
    { variant, disableAutoFocus, role, className, children, ...props }: NotificationBannerProps,
    ref,
  ) => {
    const autoFocusProps: Record<string, string> = {};
    if (disableAutoFocus !== undefined) {
      autoFocusProps['data-disable-auto-focus'] = String(disableAutoFocus);
    }

    return (
      <div
        ref={ref}
        className={clsx(
          'nhsuk-notification-banner',
          { 'nhsuk-notification-banner--success': variant === 'success' },
          className,
        )}
        data-module="nhsuk-notification-banner"
        role={(role ?? variant) ? 'alert' : 'region'}
        aria-labelledby="nhsuk-notification-banner-title"
        {...autoFocusProps}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export type NotificationBannerHeaderProps = {
  variant?: 'success';
  title?: string;
} & ElementProps<'div'>;

const NotificationBannerHeader = ({
  variant,
  title,
  className,
  ...props
}: NotificationBannerHeaderProps) => {
  return (
    <div className={clsx('nhsuk-notification-banner__header', className)} {...props}>
      <h2 className="nhsuk-notification-banner__title" id="nhsuk-notification-banner-title">
        {(title ?? variant === 'success') ? 'Success' : 'Important'}
      </h2>
    </div>
  );
};

export type NotificationBannerContentProps = ElementProps<'div'>;

const NotificationBannerContent = ({
  className,
  children,
  ...props
}: NotificationBannerContentProps) => {
  return (
    <div className={clsx('nhsuk-notification-banner__content', className)} {...props}>
      {children}
    </div>
  );
};

export type NotificationBannerHeadingProps = BaseProps & AsElementProps<'p'>;

type NotificationBannerHeadingFactory = PolymorphicFactory<{
  props: NotificationBannerHeadingProps;
  defaultComponent: 'p';
  defaultRef: HTMLParagraphElement;
}>;

const NotificationBannerHeading = polymorphicFactory<NotificationBannerHeadingFactory>(
  ({ className, as: component = 'p', ...props }: NotificationBannerHeadingProps, ref) => {
    return (
      <Base
        as={component}
        className={clsx('nhsuk-notification-banner__heading', className)}
        {...props}
        ref={ref}
      />
    );
  },
);

NotificationBanner.displayName = 'NotificationBanner';
NotificationBannerHeader.displayName = 'NotificationBanner.Header';
NotificationBannerContent.displayName = 'NotificationBanner.Content';
NotificationBannerHeading.displayName = 'NotificationBanner.Heading';

NotificationBanner.Header = NotificationBannerHeader;
NotificationBanner.Content = NotificationBannerContent;
NotificationBanner.Heading = NotificationBannerHeading;

export {
  NotificationBanner,
  NotificationBannerHeader,
  NotificationBannerContent,
  NotificationBannerHeading,
};
