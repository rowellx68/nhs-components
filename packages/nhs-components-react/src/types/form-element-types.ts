import { ErrorMessageProps } from '@/components/form-elements/error-message/ErrorMessage'
import { LabelProps } from '@/components/miscellaneous/label/Label'
import { HTMLProps } from 'react'

export type FormElementProps = {
  label?: string
  labelProps?: LabelProps
  error?: string | boolean
  errorProps?: ErrorMessageProps
  hint?: string
  hintProps?: HTMLProps<HTMLDivElement>
  formGroupProps?: HTMLProps<HTMLDivElement>
  disableErrorLine?: boolean
  id?: string
  name?: string
}
