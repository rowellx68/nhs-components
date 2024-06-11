/**
 * This file was copied from https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/core/factory/create-polymorphic-component.ts
 */

import {
  FunctionComponent,
  JSXElementConstructor,
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ReactElement,
} from 'react';
import { AsElementProps } from '@/types/shared';

type ExtendedProps<
  Props = Record<string, unknown>,
  OverrideProps = Record<string, unknown>,
> = OverrideProps & Omit<Props, keyof OverrideProps>;

type ElementType = keyof JSX.IntrinsicElements | JSXElementConstructor<any>;

type PropsOf<TComponent extends ElementType> = JSX.LibraryManagedAttributes<
  TComponent,
  ComponentPropsWithoutRef<TComponent>
>;

type InheritedProps<
  TComponent extends ElementType,
  Props = Record<string, unknown>,
> = ExtendedProps<PropsOf<TComponent>, Props>;

export type PolymorphicRef<TComponent> = TComponent extends ElementType
  ? ComponentPropsWithRef<TComponent>['ref']
  : never;

export type PolymorphicComponentProps<
  TComponent,
  TProps = Record<string, unknown>,
> = TComponent extends ElementType
  ? InheritedProps<TComponent, TProps & AsElementProps<TComponent>> & {
      ref?: PolymorphicRef<TComponent>;
      renderRoot?: (props: any) => any;
    }
  : TProps & {
      as: ElementType;
      renderRoot?: (props: Record<string, any>) => any;
    };

export function createPolymorphicComponent<
  ComponentDefaultType,
  Props,
  StaticComponents = Record<string, never>,
>(component: any) {
  type ComponentProps<TComponent> = PolymorphicComponentProps<
    TComponent,
    Props
  >;

  type _PolymorphicComponent = <TComponent = ComponentDefaultType>(
    props: ComponentProps<TComponent>,
  ) => ReactElement;

  type ComponentProperties = Omit<
    FunctionComponent<ComponentProps<any>>,
    never
  >;

  type PolymorphicComponent = _PolymorphicComponent &
    ComponentProperties &
    StaticComponents;

  return component as PolymorphicComponent;
}
