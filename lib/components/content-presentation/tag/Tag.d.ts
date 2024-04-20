import { HTMLProps } from '../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
export type TagColour = 'white' | 'grey' | 'green' | 'aqua-green' | 'blue' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow';
type TagProps = {
    colour?: TagColour;
} & Omit<HTMLProps<HTMLSpanElement>, 'color'>;
/**
 * Use the tag component when it's possible for something to have more than 1 status and it's useful for the user to know about that status. For example, you can use a tag to show whether an item in a task list has been "completed".
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/tag).
 *
 * @link https://service-manual.nhs.uk/design-system/components/tag
 *
 * @example
 * ```tsx
 * <Tag colour="red">Tag</Tag>
 * ```
 */
declare const Tag: React.FC<TagProps>;
export default Tag;
