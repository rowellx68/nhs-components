import { HTMLProps } from 'react';
type Image = {
    Caption: typeof Caption;
} & React.FC<ImageProps>;
type ImageProps = {
    figureProps?: HTMLProps<HTMLDivElement>;
} & HTMLProps<HTMLImageElement>;
declare const Caption: React.FC<HTMLProps<HTMLDivElement>>;
/**
 * Use images only if there is a real user need. Avoid unnecessary decoration.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/images).
 *
 * @link https://service-manual.nhs.uk/design-system/components/images
 *
 * @example
 * ```tsx
 * <Image
 *  src="image.jpg"
 *  alt="Lots of sore red patches with small blisters spread across white skin on a woman&#39;s chest."
 * >
 * <Image.Caption>
 *  It can affect large areas of the body or limbs.
 * </Image.Caption>
 * </Image>
 * ```
 */
declare const Image: Image;
export default Image;
