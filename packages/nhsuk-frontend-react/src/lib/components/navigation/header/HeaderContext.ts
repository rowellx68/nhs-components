import { createContext, useContext } from 'react'

export type HeaderContextValue = {
  orgName?: string
  orgSplit?: string
  orgDescriptor?: string
  serviceName?: string
  setHasTransactionalLink: (toggle: boolean) => void
  hasTransactionalLink: boolean
  transactional: boolean
}

const HeaderContext = createContext<HeaderContextValue>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setHasTransactionalLink: /* istanbul ignore next */ () => {},
  hasTransactionalLink: false,
  transactional: false,
})

export default HeaderContext

export const useHeaderContext = () => useContext(HeaderContext)
