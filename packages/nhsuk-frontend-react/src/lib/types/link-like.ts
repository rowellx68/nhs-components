import { ElementType, HTMLProps } from 'react'

export type AsElementLink<T extends HTMLAnchorElement> = HTMLProps<T> & {
  asElement?: ElementType | ElementType<T>
  to?: unknown
}
