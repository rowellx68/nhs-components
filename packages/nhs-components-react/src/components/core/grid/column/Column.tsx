import clxs from 'clsx'
import { HTMLProps } from 'react'

export type ColumnWidth =
  | 'full'
  | 'one-half'
  | 'one-third'
  | 'two-thirds'
  | 'one-quarter'
  | 'three-quarters'

type ColumnProps = {
  width?: ColumnWidth
} & HTMLProps<HTMLDivElement>

const Column: React.FC<ColumnProps> = ({
  children,
  className,
  width = 'full',
  ...rest
}) => {
  return (
    <div className={clxs(`nhsuk-grid-column-${width}`, className)} {...rest}>
      {children}
    </div>
  )
}

Column.displayName = 'Column'

export default Column
