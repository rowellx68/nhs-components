import FormGroup from '@/components/core/form-group/FormGroup'
import { FormElementProps } from '@/types/form-element-types'
import clsx from 'clsx'
import {
  ChangeEvent,
  ForwardRefRenderFunction,
  HTMLProps,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  DateInputContext,
  DateInputContextValue,
  useDateInputContext,
} from './DateInputContext'
import Label, { LabelProps } from '@/components/core/label/Label'

export type DateInputPart = 'day' | 'month' | 'year'

export type DateInputValue = {
  day: string
  month: string
  year: string
}

export type DateInputChangeEvent = ChangeEvent<HTMLInputElement> & {
  target: HTMLInputElement & { value: DateInputValue }
  currentTarget: HTMLInputElement & { value: DateInputValue }
}

type DateInputProps = {
  autoSelectNext?: boolean
  value?: Partial<DateInputValue>
  defaultValue?: Partial<DateInputValue>
  onChange?: (event: DateInputChangeEvent) => void
} & Omit<HTMLProps<HTMLDivElement>, 'value' | 'defaultValue' | 'ref'> &
  FormElementProps

const dayPartLabels: Record<DateInputPart, string> = {
  day: 'Day',
  month: 'Month',
  year: 'Year',
}

type DatePartProps = {
  labelProps?: LabelProps
  part: DateInputPart
  error?: boolean
} & Omit<HTMLProps<HTMLDivElement>, 'type'>

type DateInput = {
  Day: typeof Day
  Month: typeof Month
  Year: typeof Year
} & React.FC<DateInputProps>

const DatePart: ForwardRefRenderFunction<
  HTMLInputElement,
  Omit<DatePartProps, 'ref'>
> = (
  {
    id,
    className,
    name,
    onChange,
    labelProps = {},
    label,
    part,
    error,
    value,
    defaultValue,
    ...rest
  },
  ref,
): JSX.Element => {
  const {
    id: ctxId,
    name: ctxName,
    value: ctxValue,
    defaultValue: ctxDefaultValue,
    registerInput,
    handleChange: ctxHandleChange,
  } = useDateInputContext()

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    event.persist()
    onChange?.(event)
    if (!event.isPropagationStopped()) {
      ctxHandleChange(part, event)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const passedRef = ref as ((element: HTMLInputElement | null) => void) | null

  const registerRef = (element: HTMLInputElement | null) => {
    registerInput(part, element)
    passedRef?.(element)
  }

  const inputValue = value ?? ctxValue?.[part]
  const inputDefaultValue = defaultValue ?? ctxDefaultValue?.[part]

  const inputId = id || `${ctxId}-${part}`
  const inputName = name || `${ctxName}-${part}`
  const labelId = `${inputId}--label`

  const {
    className: labelClassName,
    id: labelIdProp,
    ...restLabelProps
  } = labelProps
  return (
    <div className="nhsuk-date-input__item">
      <div className="nhsuk-form-group">
        <Label
          className={clsx('nhsuk-date-input__label', labelClassName)}
          id={labelId}
          htmlFor={inputId}
          {...restLabelProps}
        >
          {label || dayPartLabels[part]}
        </Label>
        <input
          className={clsx(
            'nhsuk-input nhsuk-date-input__input',
            {
              'nhsuk-input--width-2': part !== 'year',
              'nhsuk-input--width-4': part === 'year',
              'nhsuk-input--error': error || false,
            },
            className,
          )}
          id={inputId}
          value={inputValue}
          defaultValue={inputDefaultValue}
          aria-labelledby={labelIdProp || labelIdProp}
          name={inputName}
          onChange={handleChange}
          ref={registerRef}
          {...rest}
        />
      </div>
    </div>
  )
}

const ForwardRefDatePart = forwardRef(DatePart)

const Day = forwardRef<HTMLInputElement, Omit<DatePartProps, 'ref' | 'part'>>(
  (props, ref) => <ForwardRefDatePart {...props} part="day" ref={ref} />,
)

const Month = forwardRef<HTMLInputElement, Omit<DatePartProps, 'ref' | 'part'>>(
  (props, ref) => <ForwardRefDatePart {...props} part="month" ref={ref} />,
)

const Year = forwardRef<HTMLInputElement, Omit<DatePartProps, 'ref' | 'part'>>(
  (props, ref) => <ForwardRefDatePart {...props} part="year" ref={ref} />,
)

/**
 * Use date input to help users enter a memorable date, like their date of birth.
 *
 * For more information on when to use this component, go to the [HTN Digital service manual](https://service-manual.nhs.uk/design-system/components/date-input).
 *
 * @link https://service-manual.nhs.uk/design-system/components/date-input
 *
 * @example
 * ```tsx
 * <DateInput label="Date of birth" />
 * ```
 */
const DateInput: DateInput = ({
  children,
  value,
  defaultValue,
  autoSelectNext,
  onChange,
  ...rest
}): JSX.Element => {
  const [, setInternalValue] = useState<{
    values: DateInputValue
  }>({
    values: {
      day: value?.day ?? '',
      month: value?.month ?? '',
      year: value?.year ?? '',
    },
  })

  useEffect(() => {
    setInternalValue((old) => {
      if (
        !value ||
        (old.values.day === value.day &&
          old.values.month === value.month &&
          old.values.year === value.year)
      ) {
        return old
      }

      const { day, month, year } = value

      return {
        values: {
          day: day && old.values.day !== day ? day : old.values.day,
          month: month && old.values.month !== month ? month : old.values.month,
          year: year && old.values.year !== year ? year : old.values.year,
        },
      }
    })
  }, [value])

  const monthRef = useRef<HTMLInputElement | null>(null)
  const yearRef = useRef<HTMLInputElement | null>(null)

  const handleSelectNext = (part: DateInputPart, value: string) => {
    if (!autoSelectNext) {
      return
    }

    if (part === 'day' && value.length === 2) {
      monthRef?.current?.focus()
    } else if (part === 'month' && value.length === 2) {
      yearRef?.current?.focus()
    }
  }

  const registerInput = (
    part: DateInputPart,
    input: HTMLInputElement | null,
  ) => {
    switch (part) {
      case 'month':
        monthRef.current = input
        break
      case 'year':
        yearRef.current = input
        break
    }
  }

  const handleChange = (
    part: DateInputPart,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    handleSelectNext(part, event.target.value)
    event.stopPropagation()
    setInternalValue((old) => {
      const newValue = {
        ...old.values,
        [part]: event.target.value,
      }

      if (onChange) {
        const newEvent = {
          ...event,
          target: { ...event.target, value: newValue },
          currentTarget: { ...event.currentTarget, value: newValue },
        } as DateInputChangeEvent

        onChange(newEvent)
      }

      return {
        values: newValue,
      }
    })
  }

  return (
    <FormGroup<Omit<DateInputProps, 'value' | 'defaultValue'>>
      {...rest}
      inputType="dateinput"
      render={({ id, name, className, error, ...restProps }) => {
        const value: DateInputContextValue = {
          id,
          name,
          error,
          defaultValue,
          handleChange: handleChange,
          registerInput: registerInput,
        }

        return (
          <div
            className={clsx('nhsuk-date-input', className)}
            id={id}
            {...restProps}
          >
            <DateInputContext.Provider value={value}>
              {children || (
                <>
                  <DateInput.Day />
                  <DateInput.Month />
                  <DateInput.Year />
                </>
              )}
            </DateInputContext.Provider>
          </div>
        )
      }}
    />
  )
}

DateInput.displayName = 'DateInput'
Day.displayName = 'DateInput.Day'
Month.displayName = 'DateInput.Month'
Year.displayName = 'DateInput.Year'

DateInput.Day = Day
DateInput.Month = Month
DateInput.Year = Year

export default DateInput
