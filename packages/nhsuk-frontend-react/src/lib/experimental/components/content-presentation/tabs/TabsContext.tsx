import { createContext, useContext } from 'react'

type TabsContextValue = {
  selectedTab: string
  setSelectedTab: (id: string) => void
}

export const TabsContext = createContext<TabsContextValue>({
  selectedTab: '',
  setSelectedTab: () => {},
})

TabsContext.displayName = 'TabsContext'

export const useTabsContext = () => useContext(TabsContext)
