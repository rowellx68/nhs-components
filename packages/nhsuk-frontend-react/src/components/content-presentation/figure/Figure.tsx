import React from 'react';
import { Base, BaseProps } from '@/components/core/base/Base';
import {
  PolymorphicFactory,
  polymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import { AsElementProps, ElementProps } from '@/types/shared';
import clsx from 'clsx';
import { Factory, factory } from '@/internal/factory/factory';

export type FigureProps = ElementProps<'figure'>;

type FigureFactory = Factory<{
  props: FigureProps;
  ref: HTMLDivElement;
  staticComponents: {
    Image: typeof FigureImage;
    Caption: typeof FigureCaption;
  };
}>;

const Figure = factory<FigureFactory>(
  ({ children, className, ...props }: FigureProps, ref) => {
    return (
      <figure className={clsx('nhsuk-image', className)} {...props} ref={ref}>
        {children}
      </figure>
    );
  },
);

export type FigureImageProps = Omit<BaseProps, 'children'>;

type FigureImageFactory = PolymorphicFactory<{
  props: FigureImageProps;
  defaultComponent: 'img';
  defaultRef: HTMLImageElement;
}>;

const FigureImage = polymorphicFactory<FigureImageFactory>(
  (
    { className, as: component, ...props }: FigureImageProps & AsElementProps,
    ref,
  ) => {
    return (
      <Base
        as={component || 'img'}
        className={clsx('nhsuk-image__img', className)}
        {...props}
        ref={ref}
      />
    );
  },
);

export type FigureCaptionProps = ElementProps<'figcaption'>;

const FigureCaption = ({
  children,
  className,
  ...props
}: FigureCaptionProps) => {
  return (
    <figcaption className={clsx('nhsuk-image__caption', className)} {...props}>
      {children}
    </figcaption>
  );
};

Figure.displayName = 'Figure';
FigureImage.displayName = 'Figure.Image';
FigureCaption.displayName = 'Figure.Caption';

Figure.Image = FigureImage;
Figure.Caption = FigureCaption;

export { Figure, FigureImage, FigureCaption };
