/**
 * This was copied from https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/core/factory/polymorphic-factory.ts
 */

import {
  forwardRef,
  ForwardRefRenderFunction,
  ReactElement,
  FunctionComponent,
} from 'react';
import { FactoryPayload, StaticComponents } from '@/internal/factory/factory';
import { PolymorphicComponentProps } from '@/internal/factory/create-polymorphic-factory';

export type PolymorphicFactoryPayload = FactoryPayload & {
  defaultComponent: any;
  defaultRef: any;
};

export type PolymorphicFactory<TPayload extends PolymorphicFactoryPayload> =
  TPayload;

export function polymorphicFactory<TPayload extends PolymorphicFactoryPayload>(
  ui: ForwardRefRenderFunction<TPayload['defaultRef'], TPayload['props']>,
) {
  type ComponentProps<TComponent> = PolymorphicComponentProps<
    TComponent,
    TPayload['props']
  >;

  type _PolymorphicComponent = <TComponent = TPayload['defaultComponent']>(
    props: ComponentProps<TComponent>,
  ) => ReactElement;

  type ComponentProperties = Omit<
    FunctionComponent<ComponentProps<any>>,
    never
  >;

  type PolymorphicComponent = _PolymorphicComponent &
    ComponentProperties &
    StaticComponents<TPayload['staticComponents']>;

  return forwardRef(ui) as unknown as PolymorphicComponent;
}
