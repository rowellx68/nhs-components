'use client';

import clsx from 'clsx';
import { Tabs as NhsTabs } from 'nhsuk-frontend';
import React, { useImperativeHandle, useEffect, useRef } from 'react';

import { Factory, factory } from '@/internal/factory/factory';
import { ElementProps } from '@/types/shared';

export type TabsProps = ElementProps<'div'>;

type TabsFactory = Factory<{
  props: TabsProps;
  ref: HTMLDivElement;
}>;

const Tabs = factory<TabsFactory>(({ children, className, ...props }, ref) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const tabs = useRef<NhsTabs>(null);

  useImperativeHandle(ref, () => internalRef.current as HTMLDivElement);

  useEffect(() => {
    if (!internalRef.current) {
      return;
    }

    if (tabs.current) {
      return;
    }

    tabs.current = new NhsTabs(internalRef.current);

    return () => {
      internalRef.current?.removeAttribute('data-nhsuk-tabs-init');
    };
  }, [internalRef]);

  return (
    <div
      className={clsx('nhsuk-tabs', className)}
      data-module="nhsuk-tabs"
      ref={internalRef}
      {...props}
    >
      {children}
    </div>
  );
});

export { Tabs };
