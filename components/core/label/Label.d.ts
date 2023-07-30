import { Size } from '../../../types/nhsuk-sizes';
import { HTMLProps } from 'react';
export type LabelProps = {
    isPageHeading?: boolean;
    size?: Size;
} & Omit<HTMLProps<HTMLLabelElement>, 'size'>;
/**
 * This component is not meant to be used directly.
 *
 * @param {string} [props.className] - An optional class name to apply to the label.
 * @param {Size} [props.size] - The size of the label.
 * @param {boolean} [props.isPageHeading] - Whether the label is a page heading.
 *
 * @example
 * ```tsx
 * <Label size="xl">Example</Label>
 * <Label isPageHeading>Example</Label>
 * ```
 */
declare const Label: React.FC<LabelProps>;
export default Label;
