/**
 * This file was copied from https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/core/factory/factory.ts
 */

import { DataAttributes } from '@/types/html-props';
import { AsElementProps } from '@/types/shared';
import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  ReactNode,
  ForwardRefRenderFunction,
} from 'react';

export type FactoryPayload = {
  props: Record<string, any>;
  ref?: any;
  staticComponents?: Record<string, any>;
};

export type Factory<TPayload extends FactoryPayload> = TPayload;

export type StaticComponents<TComponentMap> =
  TComponentMap extends Record<string, any>
    ? TComponentMap
    : Record<string, never>;

export type ComponentStaticProperties<TPayload extends FactoryPayload> =
  StaticComponents<TPayload['staticComponents']>;

export type Component<TPayload extends FactoryPayload> =
  ForwardRefExoticComponent<
    TPayload['props'] &
      RefAttributes<TPayload['ref']> &
      AsElementProps &
      DataAttributes & {
        renderRoot?: (props: Record<string, any>) => ReactNode;
      }
  > &
    ComponentStaticProperties<TPayload>;

export function factory<TPayload extends FactoryPayload>(
  ui: ForwardRefRenderFunction<TPayload['ref'], TPayload['props']>,
) {
  return forwardRef(ui) as Component<TPayload>;
}
