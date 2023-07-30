import { HTMLProps } from 'react';
export type ColumnWidth = 'full' | 'one-half' | 'one-third' | 'two-thirds' | 'one-quarter' | 'three-quarters';
type ColumnProps = {
    width?: ColumnWidth;
} & HTMLProps<HTMLDivElement>;
declare const Column: React.FC<ColumnProps>;
export default Column;
