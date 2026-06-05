import { SVGProps } from 'react';

export type Icon = SVGProps<SVGSVGElement> & {
  /**
   * Accessible name for the icon. When set, the icon is exposed to assistive
   * technologies (`role="img"` + `aria-label` + `<title>`). When omitted, the
   * icon is decorative (`aria-hidden="true"`).
   */
  title?: string;
};
