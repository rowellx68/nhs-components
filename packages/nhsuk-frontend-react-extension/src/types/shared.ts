import { ComponentPropsWithoutRef, ElementType } from 'react';

export type WithVisuallyHiddenTextProps = {
  /**
   * Visually hidden text for screen readers.
   *
   * @type {string | undefined}
   */
  visuallyHiddenText?: string;
};

export type AsElementProps<TComponent = any> = {
  /**
   * The component to render as.
   */
  as?: TComponent;
};

export type ElementProps<
  TElementType extends ElementType,
  TPropsToOmit extends string = never,
> = Omit<ComponentPropsWithoutRef<TElementType>, 'style' | TPropsToOmit>;

export type HeadingLevel = `h${1 | 2 | 3 | 4 | 5 | 6}`;

export type ColumnWidth =
  | 'full'
  | 'one-half'
  | 'one-third'
  | 'two-thirds'
  | 'one-quarter'
  | 'three-quarters';

export type Size = 's' | 'm' | 'l' | 'xl';

export type InputWidth = '2' | '3' | '4' | '5' | '10' | '20';
