import { HTMLProps } from 'react'
import clsx from 'clsx'

type Image = {
  Caption: typeof Caption
} & React.FC<ImageProps>

type ImageProps = {
  figureProps?: HTMLProps<HTMLDivElement>
} & HTMLProps<HTMLImageElement>

const Caption: React.FC<HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}): JSX.Element => {
  return (
    <figcaption className={clsx('nhsuk-image__caption', className)} {...rest}>
      {children}
    </figcaption>
  )
}

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
const Image: Image = ({ figureProps, children, className, alt, ...rest }) => {
  const { className: figureClassName, ...restFigureProps } = figureProps || {}

  return (
    <figure
      className={clsx('nhsuk-image', figureClassName)}
      {...restFigureProps}
    >
      <img
        className={clsx('nhsuk-image__img', className)}
        alt={alt}
        {...rest}
      />
      {children}
    </figure>
  )
}

Image.displayName = 'Image'
Caption.displayName = 'Image.Caption'

Image.Caption = Caption

export default Image
