import { SVGProps } from 'react';

export type Icon = {
  /**
   * @deprecated Use CSS instead
   */
  width?: number;
  /**
   * @deprecated Use CSS instead
   */
  height?: number;
} & SVGProps<SVGSVGElement>;
