import clsx from 'clsx'

export type ContainerProps = {
  fluid?: boolean
} & React.HTMLAttributes<HTMLDivElement>

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
