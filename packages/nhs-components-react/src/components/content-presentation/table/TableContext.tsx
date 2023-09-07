import { createContext, useContext } from 'react'

type TableContextValue = {
  isResponsive: boolean
  headings: string[]
  setHeadings: (headings: string[]) => void
}

export const TableContext = createContext<TableContextValue>({
  isResponsive: false,
  headings: [],
  setHeadings: /* istanbul ignore next */ () => {},
})

TableContext.displayName = 'TableContext'

export const useTableContext = () => useContext(TableContext)

type TableSection = 'header' | 'body' | 'none'

export const TableSectionContext = createContext<TableSection>('none')

TableSectionContext.displayName = 'TableSectionContext'

export const useTableSectionContext = () => useContext(TableSectionContext)
