import { Icon } from '@/types/icon'
import clsx from 'clsx'

export const SearchIcon: React.FC<Icon> = ({
  className,
  width = 34,
  height = 34,
  ...rest
}): JSX.Element => {
  return (
    <svg
      className={clsx('nhsuk-icon nhsuk-icon__search', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      width={width}
      height={height}
      {...rest}
    >
      <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path>
    </svg>
  )
}
