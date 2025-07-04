import React, { Fragment } from 'react';
import { Factory, factory } from '@/internal/factory/factory';
import { ElementProps } from '@/types/shared';
import clsx from 'clsx';
import {
  Container,
  ContainerProps,
} from '@/styles/layout/container/Container';
import { Base } from '@/internal/base/Base';
import { Column, Row } from '@/styles/layout/grid/Grid';
import { Heading } from '@/styles/typography/heading/Heading';
import { Paragraph } from '@/styles/typography/paragraph/Paragraph';

export type HeroProps = (
  | {
      variant?: undefined;
      imageUrl?: undefined;
    }
  | {
      variant?: 'image-only' | 'image-and-content';
      imageUrl: string;
    }
  | {
      variant?: 'content-only';
      imageUrl?: undefined;
    }
) &
  ElementProps<'section'>;

type HeroFactory = Factory<{
  props: HeroProps;
  ref: HTMLDivElement;
  staticComponents: {
    Container: typeof HeroContainer;
    Heading: typeof HeroHeading;
    Paragraph: typeof HeroParagraph;
  };
}>;

const Hero = factory<HeroFactory>(
  (
    { className, children, imageUrl, variant = 'content-only', ...props },
    ref,
  ) => {
    const hasImage = variant?.includes('image-') && imageUrl;

    return (
      <section
        className={clsx(
          'nhsuk-hero',
          {
            'nhsuk-hero--image': hasImage,
            'nhsuk-hero--image-description':
              variant === 'image-and-content' && imageUrl,
          },
          className,
        )}
        {...props}
        style={hasImage ? { backgroundImage: `url('${imageUrl}')` } : {}}
        ref={ref}
      >
        {variant === 'image-only' ? (
          <div className="nhsuk-hero__overlay" />
        ) : (
          children
        )}
      </section>
    );
  },
);

export type HeroContainerProps = {
  variant?: 'overlay' | 'full';
} & Omit<ContainerProps, 'variant'> &
  ElementProps<'div'>;

const HeroContainer = ({
  children,
  variant = 'full',
  className,
  ...props
}: HeroContainerProps) => {
  const baseProps =
    variant === 'overlay'
      ? { as: 'div', className: 'nhsuk-hero__overlay' }
      : { as: Fragment };

  return (
    <Base<any> {...baseProps}>
      <Container {...props}>
        <Row>
          <Column width="two-thirds">
            <div
              className={clsx(
                {
                  'nhsuk-hero__wrapper': variant !== 'overlay',
                  'nhsuk-hero-content': variant === 'overlay',
                },
                className,
              )}
            >
              {children}
              {variant === 'overlay' && (
                <span className="nhsuk-hero__arrow" aria-hidden="true"></span>
              )}
            </div>
          </Column>
        </Row>
      </Container>
    </Base>
  );
};

export type HeroHeadingProps = ElementProps<'h1'>;

const HeroHeading = ({ className, ...props }: HeroHeadingProps) => (
  <Heading
    as="h1"
    className={clsx('nhsuk-u-margin-bottom-3', className)}
    {...props}
  />
);

export type HeroParagraphProps = ElementProps<'p'>;

const HeroParagraph = ({ className, ...props }: HeroParagraphProps) => (
  <Paragraph
    variant="lead"
    className={clsx('nhsuk-u-margin-bottom-0', className)}
    {...props}
  />
);

Hero.displayName = 'Hero';
HeroContainer.displayName = 'Hero.Container';
HeroHeading.displayName = 'Hero.Heading';
HeroParagraph.displayName = 'Hero.Paragraph';

Hero.Container = HeroContainer;
Hero.Heading = HeroHeading;
Hero.Paragraph = HeroParagraph;

export { Hero, HeroContainer, HeroHeading, HeroParagraph };
