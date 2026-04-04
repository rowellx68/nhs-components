'use client';

import clsx from 'clsx';
import { Header as NhsHeader } from 'nhsuk-frontend';
import React, { useEffect, useImperativeHandle, useRef } from 'react';

import { factory, Factory } from '@/internal/factory/factory';
import { ElementProps } from '@/types/shared';

export type HeaderNavListProps = ElementProps<'ul'>;

type HeaderNavListFactory = Factory<{
  props: HeaderNavListProps;
  ref: HTMLUListElement;
}>;

const HeaderNavList = factory<HeaderNavListFactory>(
  ({ children, className, ...props }: HeaderNavListProps, ref) => {
    const internalRef = useRef<HTMLUListElement>(null);
    const header = useRef<NhsHeader>(null);

    useImperativeHandle(ref, () => internalRef.current as HTMLUListElement);

    useEffect(() => {
      if (!internalRef.current) {
        return;
      }

      if (header.current) {
        header.current.handleUpdateNavigation();
        return;
      }

      const target = internalRef.current.closest('.nhsuk-header');

      header.current = new NhsHeader(target);
    }, [internalRef, children]);

    return (
      <ul className={clsx('nhsuk-header__navigation-list', className)} {...props} ref={internalRef}>
        {children}
        <li className="nhsuk-header__menu" hidden>
          <button
            className="nhsuk-header__menu-toggle nhsuk-header__navigation-link"
            id="toggle-menu"
            aria-expanded="false"
            type="button"
          >
            <span className="nhsuk-u-visually-hidden">Browse </span>More
          </button>
        </li>
      </ul>
    );
  },
);

export { HeaderNavList };
