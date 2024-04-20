import { FormElementProps } from '../../../../types/form-element-types';
import { ForwardRefRenderFunction, HTMLProps } from '../../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
type CharacterCount = Omit<HTMLProps<HTMLTextAreaElement>, 'width'> & FormElementProps & {
    mode: 'word' | 'character';
    limit: number;
    countHint: (limit: number) => string;
    countRemaining: (remaining: number) => string;
    countError: (excess: number) => string;
    threshold?: number;
    containerProps?: HTMLProps<HTMLDivElement>;
};
declare const CharacterCount: ForwardRefRenderFunction<HTMLTextAreaElement, CharacterCount>;
/**
 * Use textarea to let users enter more than 1 line of text.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/textarea).
 *
 * @param {CharacterCount} props - The props of the component.
 * @param {React.ForwardedRef<HTMLTextAreaElement>} ref - Optional ref to be passed to the textarea.
 *
 * @example
 * ```tsx
 * <CharacterCount  id="example" label="Example" />
 * ```
 */
declare const CharacterCountForwardRef: import('../../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react').ForwardRefExoticComponent<Omit<CharacterCount, "ref"> & import('../../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react').RefAttributes<HTMLTextAreaElement>>;
export default CharacterCountForwardRef;
