import { createContext, useContext } from 'react'

type TabsContextValue = {
  selectedTab: string
  setSelectedTab: (id: string) => void
}

export const TabsContext = createContext<TabsContextValue>({
  selectedTab: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSelectedTab: /* istanbul ignore next */ () => {},
})

TabsContext.displayName = 'TabsContext'

export const useTabsContext = () => useContext(TabsContext)
