import React, { PropsWithChildren, forwardRef, JSX, Fragment } from 'react';
import { createPolymorphicComponent } from '@/internal/factory/create-polymorphic-factory';
import { AsElementProps } from '@/types/shared';

export type BaseProps = {
  className?: string;
} & PropsWithChildren;

const _Base = forwardRef<
  HTMLDivElement,
  BaseProps &
    AsElementProps & {
      renderRoot?: (props: Record<string, any>) => JSX.Element;
    }
>(({ as: Element = 'div', renderRoot, ...others }, ref) => {
  const props: Record<string, any> = {
    ...others,
    ...(Element !== Fragment ? { ref } : {}),
  };

  return typeof renderRoot === 'function' ? (
    renderRoot(props)
  ) : (
    <Element {...props} />
  );
});

_Base.displayName = 'Base';

export const Base = createPolymorphicComponent<'div', BaseProps>(_Base);
