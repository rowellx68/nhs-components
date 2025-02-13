import React, { PropsWithChildren, forwardRef, JSX } from 'react';
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
>(({ as: Element = 'div', renderRoot, ...props }, ref) => {
  if (renderRoot && typeof renderRoot === 'function') {
    return renderRoot(props);
  }

  return <Element {...props} ref={ref} />;
});

_Base.displayName = 'Base';

export const Base = createPolymorphicComponent<'div', BaseProps>(_Base);
