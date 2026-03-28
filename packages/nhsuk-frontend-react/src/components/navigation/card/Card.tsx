import clsx from 'clsx';
import React from 'react';

import { Base } from '@/components/core/base/Base';
import { VisuallyHidden } from '@/components/core/visually-hidden/VisuallyHidden';
import { Column, ColumnProps, Row, RowProps } from '@/components/styles/layout/grid/Grid';
import { Heading, HeadingProps } from '@/components/styles/typography/heading/Heading';
import { Factory, factory } from '@/internal/factory/factory';
import { PolymorphicFactory, polymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { AsElementProps, ElementProps } from '@/types/shared';

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
      variant: Extract<CardVariant, 'feature' | 'non-urgent' | 'urgent' | 'emergency'>;
    }
) &
  ElementProps<'div'>;

const careCardVariants = new Set(['non-urgent', 'urgent', 'emergency']);

type CardFactory = Factory<{
  props: CardProps;
  ref: HTMLDivElement;
  staticComponents: {
    Image: typeof CardImage;
    Content: typeof CardContent;
    Heading: typeof CardHeading;
    HeadingContainer: typeof CardHeadingContainer;
    Description: typeof CardDescription;
    Link: typeof CardLink;
    Actions: typeof CardActions;
    Group: typeof CardGroup;
    GroupItem: typeof CardGroupItem;
  };
}>;

const Card = factory<CardFactory>(({ variant, clickable, className, ...props }, ref) => {
  return (
    <div
      className={clsx(
        'nhsuk-card',
        {
          'nhsuk-card--clickable': clickable,
          [`nhsuk-card--${variant}`]: variant && !careCardVariants.has(variant),
          [`nhsuk-card--care nhsuk-card--care--${variant}`]:
            variant && careCardVariants.has(variant),
        },
        className,
      )}
      {...props}
      ref={ref}
    />
  );
});

export type CardImageProps = ElementProps<'img'>;

type CardImageFactory = PolymorphicFactory<{
  props: CardImageProps;
  defaultComponent: 'img';
  defaultRef: HTMLImageElement;
}>;

const CardImage = polymorphicFactory<CardImageFactory>(
  ({ className, as: component = 'img', ...props }: CardImageProps & AsElementProps, ref) => {
    return (
      <Base as={component} className={clsx('nhsuk-card__img', className)} ref={ref} {...props} />
    );
  },
);

export type CardContentProps = ElementProps<'div'>;

const CardContent = ({ className, ...props }: CardContentProps) => (
  <div className={clsx('nhsuk-card__content', className)} {...props} />
);

export type CardHeadingContainerProps = ElementProps<'div'>;

const CardHeadingContainer = ({ className, ...props }: CardHeadingContainerProps) => (
  <div className={clsx('nhsuk-card__heading-container', className)} {...props} />
);

export type CardHeadingProps = {
  careCard?: boolean;
  visuallyHiddenText?: string;
} & HeadingProps;

const CardHeading = ({
  className,
  children,
  as: component = 'h2',
  careCard,
  visuallyHiddenText,
  ...props
}: CardHeadingProps) => {
  return (
    <>
      <Heading as={component} className={clsx('nhsuk-card__heading', className)} {...props}>
        {careCard ? (
          <span role="text">
            {visuallyHiddenText && <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden>}
            {children}
          </span>
        ) : (
          children
        )}
      </Heading>
      {careCard && <span className="nhsuk-card--care__arrow" aria-hidden="true" />}
    </>
  );
};

export type CardDescriptionProps = ElementProps<'p'>;

const CardDescription = ({ className, ...props }: CardDescriptionProps) => (
  <p className={clsx('nhsuk-card__description', className)} {...props} />
);

export type CardLinkProps = ElementProps<'a'>;

type CardLinkFactory = PolymorphicFactory<{
  props: CardLinkProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const CardLink = polymorphicFactory<CardLinkFactory>(
  ({ className, as: component = 'a', ...props }: CardLinkProps & AsElementProps, ref) => {
    return (
      <Base as={component} className={clsx('nhsuk-card__link', className)} ref={ref} {...props} />
    );
  },
);

export type CardActionsProps = ElementProps<'ul'> & ElementProps<'div'>;

const CardActions = ({ className, children, ...props }: CardActionsProps) => {
  const multiple = React.Children.count(children) > 1;
  return multiple ? (
    <ul className={clsx('nhsuk-card__actions', className)} {...props}>
      {React.Children.map(children, (child) => (
        <li className="nhsuk-card__action">{child}</li>
      ))}
    </ul>
  ) : (
    <div className={clsx('nhsuk-card__actions', className)} {...props}>
      {children}
    </div>
  );
};

export type CardGroupProps = RowProps;

const CardGroup = ({ className, ...props }: CardGroupProps) => (
  <Row className={clsx('nhsuk-card-group', className)} {...props} />
);

export type CardGroupItemProps = ColumnProps;

const CardGroupItem = ({ className, ...props }: CardGroupItemProps) => (
  <Column className={clsx('nhsuk-card-group__item', className)} {...props} />
);

Card.displayName = 'Card';
CardImage.displayName = 'Card.Image';
CardContent.displayName = 'Card.Content';
CardHeading.displayName = 'Card.Heading';
CardHeadingContainer.displayName = 'Card.HeadingContainer';
CardDescription.displayName = 'Card.Description';
CardLink.displayName = 'Card.Link';
CardActions.displayName = 'Card.Actions';
CardGroup.displayName = 'Card.Group';
CardGroupItem.displayName = 'Card.GroupItem';

Card.Image = CardImage;
Card.Content = CardContent;
Card.Heading = CardHeading;
Card.HeadingContainer = CardHeadingContainer;
Card.Description = CardDescription;
Card.Link = CardLink;
Card.Actions = CardActions;
Card.Group = CardGroup;
Card.GroupItem = CardGroupItem;

export {
  Card,
  CardImage,
  CardContent,
  CardHeading,
  CardHeadingContainer,
  CardDescription,
  CardLink,
  CardActions,
  CardGroup,
  CardGroupItem,
};
