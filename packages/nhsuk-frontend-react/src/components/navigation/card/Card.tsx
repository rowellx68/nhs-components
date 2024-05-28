'use client';

import React from 'react';
import { Factory, factory } from '@/internal/factory/factory';
import { AsElementProps, ElementProps } from '@/types/shared';
import { CardProvider, useCardContext } from './Card.context';
import clsx from 'clsx';
import {
  PolymorphicFactory,
  polymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import { Base } from '@/components/core/base/Base';
import {
  Heading,
  HeadingProps,
} from '@/components/styles/typography/heading/Heading';
import { ChevronRightCircleIcon } from '@/icons/chevron-right-circle/ChevronRightCircle';
import {
  Column,
  ColumnProps,
  Row,
  RowProps,
} from '@/components/styles/layout/grid/Grid';

export type CardProps = {
  clickable?: boolean;
  variant?: 'primary' | 'secondary';
} & ElementProps<'div'>;

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

const Card = factory<CardFactory>(({ variant, clickable, ...props }, ref) => {
  return (
    <CardProvider value={{ variant: variant }}>
      <div
        className={clsx('nhsuk-card', {
          'nhsuk-card--clickable': clickable,
          [`nhsuk-card--${variant}`]: variant,
        })}
        {...props}
        ref={ref}
      />
    </CardProvider>
  );
});

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

export type CardHeadingProps = HeadingProps;

const CardHeading = ({
  className,
  as: component = 'h2',
  ...props
}: CardHeadingProps) => {
  return (
    <Heading
      as={component}
      className={clsx('nhsuk-card__heading', className)}
      {...props}
    />
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
