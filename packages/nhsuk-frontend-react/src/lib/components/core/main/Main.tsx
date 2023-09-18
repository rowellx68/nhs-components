import clsx from 'clsx'

type MainProps = {
  size?: 's' | 'l'
} & React.HTMLAttributes<HTMLDivElement>

const Main: React.FC<MainProps> = ({
  children,
  className,
  size,
  role = 'main',
  ...rest
}) => {
  return (
    <main
      className={clsx(
        'nhsuk-main-wrapper',
        { [`nhsuk-main-wrapper--${size}`]: size },
        className,
      )}
      role={role}
      {...rest}
    >
      {children}
    </main>
  )
}

Main.displayName = 'Main'

export default Main
