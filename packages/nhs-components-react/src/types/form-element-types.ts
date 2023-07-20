import { ErrorMessageProps } from '@/components/form-elements/error-message/ErrorMessage'
import { LabelProps } from '@/components/miscellaneous/label/Label'
import { HTMLProps, ReactNode } from 'react'

export type FormElementProps = {
  label?: string
  labelProps?: LabelProps
  error?: string | boolean
  errorProps?: ErrorMessageProps
  hint?: ReactNode
  hintProps?: HTMLProps<HTMLDivElement>
  formGroupProps?: HTMLProps<HTMLDivElement>
  disableErrorLine?: boolean
  id?: string
  name?: string
}
