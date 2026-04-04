import clsx from 'clsx';
import React from 'react';

import { Base } from '@/components/core/base/Base';
import { PolymorphicFactory, polymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { ElementProps } from '@/types/shared';

export type BackToTopLinkProps = ElementProps<'a'>;

type BackToTopLinkFactory = PolymorphicFactory<{
  props: BackToTopLinkProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const BackToTopLink = polymorphicFactory<BackToTopLinkFactory>(
  ({ children, className, ...props }: BackToTopLinkProps, ref) => {
    return (
      <div className="nhsuk-back-to-top">
        <Base as="a" className={clsx('nhsuk-back-to-top__link', className)} {...props} ref={ref}>
          {children}
        </Base>
      </div>
    );
  },
);

BackToTopLink.displayName = 'BackToTopLink';

export { BackToTopLink };
