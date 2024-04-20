import { ElementType, HTMLProps } from '../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
export type AsElementLink<T extends HTMLAnchorElement> = HTMLProps<T> & {
    asElement?: ElementType | ElementType<T>;
    to?: unknown;
};
