import clsx from 'clsx'
import { HTMLAttributes, PropsWithChildren } from 'react'

export type ContainerProps = {
  fluid?: boolean
} & HTMLAttributes<HTMLDivElement> &
  PropsWithChildren

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  fluid,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        'nhsuk-width-container',
        { 'nhsuk-width-container-fluid': fluid },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

Container.displayName = 'Container'

export default Container
