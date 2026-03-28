'use client';

import clsx from 'clsx';
import { Button as NhsButton } from 'nhsuk-frontend';
import React, { useEffect, useRef, useImperativeHandle } from 'react';

import { Base, BaseProps } from '@/components/core/base/Base';
import { polymorphicFactory, PolymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { AsElementProps } from '@/types/shared';

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'secondary-solid' | 'reverse' | 'warning' | 'login';
  small?: boolean;
  disabled?: boolean;
  preventDoubleClick?: boolean;
  type?: 'button' | 'submit' | 'reset';
} & BaseProps;

type ButtonFactory = PolymorphicFactory<{
  props: ButtonProps;
  defaultComponent: 'button';
  defaultRef: HTMLButtonElement;
}>;

const Button = polymorphicFactory<ButtonFactory>(
  (
    {
      className,
      children,
      variant = 'primary',
      small,
      disabled,
      preventDoubleClick,
      type = 'submit',
      as: component = 'button',
      ...props
    }: ButtonProps & AsElementProps,
    ref,
  ) => {
    const internalRef = useRef<HTMLElement>(null);
    const button = useRef<NhsButton>(null);

    useImperativeHandle(ref, () => internalRef.current as HTMLButtonElement);

    useEffect(() => {
      if (!internalRef.current) {
        return;
      }

      if (button.current) {
        return;
      }

      button.current = new NhsButton(internalRef.current);

      return () => {
        internalRef.current?.removeAttribute('data-nhsuk-button-init');
      };
    }, [internalRef]);

    const notButton = component !== 'button';

    return (
      <Base<any>
        as={component}
        className={clsx(
          'nhsuk-button',
          {
            [`nhsuk-button--${variant}`]: variant !== 'primary',
            'nhsuk-button--small': small,
          },
          className,
        )}
        data-module="nhsuk-button"
        data-prevent-double-click={preventDoubleClick ? 'true' : undefined}
        role={notButton ? 'button' : undefined}
        draggable={notButton ? 'false' : undefined}
        type={notButton ? undefined : type}
        disabled={notButton || !disabled ? undefined : true}
        aria-disabled={disabled ? 'true' : undefined}
        {...props}
        ref={internalRef}
      >
        {children}
      </Base>
    );
  },
);

Button.displayName = 'Button';

export { Button };
