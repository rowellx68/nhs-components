import { HTMLProps } from '../../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
export type ColumnWidth = 'full' | 'one-half' | 'one-third' | 'two-thirds' | 'one-quarter' | 'three-quarters';
type ColumnProps = {
    width?: ColumnWidth;
} & HTMLProps<HTMLDivElement>;
declare const Column: React.FC<ColumnProps>;
export default Column;
