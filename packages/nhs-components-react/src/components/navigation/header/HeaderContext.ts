import { createContext, useContext } from 'react'

export type HeaderContextValue = {
  orgName?: string
  orgSplit?: string
  orgDescriptor?: string
  serviceName?: string
  setHasSearch: (toggle: boolean) => void
  setHasMenuToggle: (toggle: boolean) => void
  toggleMenu: () => void
  toggleSearch: () => void
  hasSearch: boolean
  hasMenuToggle: boolean
  menuOpen: boolean
  searchOpen: boolean
  transactional: boolean
}

const HeaderContext = createContext<HeaderContextValue>({
  setHasSearch: /* istanbul ignore next */ () => {},
  setHasMenuToggle: /* istanbul ignore next */ () => {},
  toggleMenu: /* istanbul ignore next */ () => {},
  toggleSearch: /* istanbul ignore next */ () => {},
  hasSearch: false,
  hasMenuToggle: false,
  menuOpen: false,
  searchOpen: false,
  transactional: false,
})

export default HeaderContext

export const useHeaderContext = () => useContext(HeaderContext)
