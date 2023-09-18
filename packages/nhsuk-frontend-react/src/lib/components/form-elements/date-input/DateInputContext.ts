import { ChangeEvent, createContext, useContext } from 'react'
import { DateInputValue, DateInputPart } from './DateInput'

export type DateInputContextValue = {
  id: string
  name: string
  error?: string | boolean
  value?: Partial<DateInputValue>
  defaultValue?: Partial<DateInputValue>
  handleChange: (
    field: DateInputPart,
    event: ChangeEvent<HTMLInputElement>,
  ) => void
  registerInput: (field: DateInputPart, input: HTMLInputElement | null) => void
}

export const DateInputContext = createContext<DateInputContextValue>({
  id: '',
  name: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleChange: /* istanbul ignore next */ () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  registerInput: /* istanbul ignore next */ () => {},
})

DateInputContext.displayName = 'DateInputContext'

export const useDateInputContext = () => useContext(DateInputContext)
