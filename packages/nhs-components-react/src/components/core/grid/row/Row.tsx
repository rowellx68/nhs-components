import clsx from 'clsx'
import { HTMLProps } from 'react'

type RowProps = HTMLProps<HTMLDivElement>

const Row: React.FC<RowProps> = ({ children, className, ...rest }) => {
  return (
    <div className={clsx('nhsuk-grid-row', className)} {...rest}>
      {children}
    </div>
  )
}

Row.displayName = 'Row'

export default Row
