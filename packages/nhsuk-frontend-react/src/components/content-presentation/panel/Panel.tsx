import React from 'react';
import clsx from 'clsx';
import { factory, Factory } from '@/internal/factory/factory';
import { ElementProps } from '@/types/shared';
import {
  Heading,
  HeadingProps,
} from '@/components/styles/typography/heading/Heading';

export type HeroProps = ElementProps<'div'>;

type PanelFactory = Factory<{
  props: HeroProps;
  ref: HTMLDivElement;
  staticComponents: {
    Title: typeof PanelTitle;
    Body: typeof PanelBody;
  };
}>;

const Panel = factory<PanelFactory>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={clsx('nhsuk-panel', className)} {...props} ref={ref}>
        {children}
      </div>
    );
  },
);

export type PanelTitleProps = HeadingProps;

const PanelTitle = ({ className, ...props }: PanelTitleProps) => {
  return (
    <Heading className={clsx('nhsuk-panel__title', className)} {...props} />
  );
};

export type PanelBodyProps = ElementProps<'div'>;

const PanelBody = ({ className, ...props }: PanelBodyProps) => {
  return <div className={clsx('nhsuk-panel__body', className)} {...props} />;
};

Panel.displayName = 'Panel';
PanelTitle.displayName = 'Panel.Title';
PanelBody.displayName = 'Panel.Body';

Panel.Title = PanelTitle;
Panel.Body = PanelBody;

export { Panel, PanelTitle, PanelBody };
