'use client';

import React, { Fragment } from 'react';
import { Factory, factory } from '@/internal/factory/factory';
import { AsElementProps, ElementProps } from '@/types/shared';
import { CardProvider, useCardContext } from './Card.context';
import clsx from 'clsx';
import {
  PolymorphicFactory,
  polymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import { Base } from '@/internal/base/Base';
import {
  Heading,
  HeadingProps,
} from '@/styles/typography/heading/Heading';
import { ChevronRightCircleIcon } from '@/icons/chevron-right-circle/ChevronRightCircle';
import {
  Column,
  ColumnProps,
  Row,
  RowProps,
} from '@/styles/layout/grid/Grid';
import { VisuallyHidden } from '@/components/visually-hidden/VisuallyHidden';

export type CardVariant =
  | 'primary'
  | 'secondary'
  | 'feature'
  | 'non-urgent'
  | 'urgent'
  | 'emergency';

export type CardProps = (
  | {
      clickable?: boolean;
      variant?: CardVariant;
    }
  | {
      clickable?: false;
      variant: Extract<
        CardVariant,
        'feature' | 'non-urgent' | 'urgent' | 'emergency'
      >;
    }
) &
  ElementProps<'div'>;

const careCardVariants = ['non-urgent', 'urgent', 'emergency'];

type CardFactory = Factory<{
  props: CardProps;
  ref: HTMLDivElement;
  staticComponents: {
    Image: typeof CardImage;
    Content: typeof CardContent;
    Heading: typeof CardHeading;
    Description: typeof CardDescription;
    Link: typeof CardLink;
    Group: typeof CardGroup;
    GroupItem: typeof CardGroupItem;
  };
}>;

const Card = factory<CardFactory>(
  ({ variant, clickable, className, ...props }, ref) => {
    return (
      <CardProvider value={{ variant: variant }}>
        <div
          className={clsx(
            'nhsuk-card',
            {
              'nhsuk-card--clickable': clickable,
              [`nhsuk-card--${variant}`]:
                variant && !careCardVariants.includes(variant),
              [`nhsuk-card--care nhsuk-card--care--${variant}`]:
                variant && careCardVariants.includes(variant),
            },
            className,
          )}
          {...props}
          ref={ref}
        />
      </CardProvider>
    );
  },
);

export type CardImageProps = ElementProps<'img'>;

type CardImageFactory = PolymorphicFactory<{
  props: CardImageProps;
  defaultComponent: 'img';
  defaultRef: HTMLImageElement;
}>;

const CardImage = polymorphicFactory<CardImageFactory>(
  (
    {
      className,
      as: component = 'img',
      ...props
    }: CardImageProps & AsElementProps,
    ref,
  ) => {
    return (
      <Base
        as={component}
        className={clsx('nhsuk-card__img', className)}
        ref={ref}
        {...props}
      />
    );
  },
);

export type CardContentProps = ElementProps<'div'>;

const CardContent = ({ className, children, ...props }: CardContentProps) => {
  const { variant } = useCardContext();
  return (
    <div
      className={clsx(
        'nhsuk-card__content',
        { [`nhsuk-card__content--${variant}`]: variant },
        className,
      )}
      {...props}
    >
      {children}
      {variant === 'primary' && <ChevronRightCircleIcon />}
    </div>
  );
};

export type CardHeadingProps = {
  /**
   * This will only be used if the Card variant is either 'non-urgent', 'urgent' or 'emergency'.
   */
  visuallyHiddenText?: string;
} & HeadingProps;

const CardHeading = ({
  className,
  children,
  as: component = 'h2',
  visuallyHiddenText,
  ...props
}: CardHeadingProps) => {
  const { variant } = useCardContext();
  const careCard = variant && careCardVariants.includes(variant);

  const wrapperProps = {
    as: careCard ? 'div' : Fragment,
    ...(careCard ? { className: 'nhsuk-card--care__heading-container' } : {}),
  };

  const headingTextProps = {
    as: careCard ? 'span' : Fragment,
    ...(careCard ? { role: 'text' } : {}),
  };

  return (
    <Base<any> {...wrapperProps}>
      <Heading
        as={component}
        className={clsx(
          {
            'nhsuk-card__heading':
              !variant || !careCardVariants.includes(variant),
            'nhsuk-card--care__heading': careCard,
            'nhsuk-card__heading--feature nhsuk-u-font-size-24':
              variant === 'feature',
          },
          className,
        )}
        {...props}
      >
        <Base<any> {...headingTextProps}>
          {careCard && <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden>}
          {children}
        </Base>
      </Heading>
      {careCard && (
        <span className="nhsuk-card--care__arrow" aria-hidden="true" />
      )}
    </Base>
  );
};

export type CardDescriptionProps = ElementProps<'p'>;

const CardDescription = ({ className, ...props }: CardDescriptionProps) => {
  return (
    <p className={clsx('nhsuk-card__description', className)} {...props} />
  );
};

export type CardLinkProps = ElementProps<'a'>;

type CardLinkFactory = PolymorphicFactory<{
  props: CardLinkProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const CardLink = polymorphicFactory<CardLinkFactory>(
  (
    {
      className,
      as: component = 'a',
      ...props
    }: CardLinkProps & AsElementProps,
    ref,
  ) => {
    return (
      <Base
        as={component}
        className={clsx('nhsuk-card__link', className)}
        ref={ref}
        {...props}
      />
    );
  },
);

export type CardGroupProps = RowProps;

const CardGroup = ({ className, ...props }: CardGroupProps) => {
  return <Row className={clsx('nhsuk-card-group', className)} {...props} />;
};

export type CardGroupItemProps = ColumnProps;

const CardGroupItem = ({ className, ...props }: CardGroupItemProps) => {
  return (
    <Column className={clsx('nhsuk-card-group__item', className)} {...props} />
  );
};

Card.displayName = 'Card';
CardImage.displayName = 'Card.Image';
CardContent.displayName = 'Card.Content';
CardHeading.displayName = 'Card.Heading';
CardDescription.displayName = 'Card.Description';
CardLink.displayName = 'Card.Link';
CardGroup.displayName = 'Card.Group';
CardGroupItem.displayName = 'Card.GroupItem';

Card.Image = CardImage;
Card.Content = CardContent;
Card.Heading = CardHeading;
Card.Description = CardDescription;
Card.Link = CardLink;
Card.Group = CardGroup;
Card.GroupItem = CardGroupItem;

export {
  Card,
  CardImage,
  CardContent,
  CardHeading,
  CardDescription,
  CardLink,
  CardGroup,
  CardGroupItem,
};
