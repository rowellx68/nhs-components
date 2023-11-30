import FormGroup from '@/components/core/form-group/FormGroup'
import ErrorMessage from '@/components/form-elements/error-message'
import Hint from '@/components/form-elements/hint'
import { FormElementProps } from '@/types/form-element-types'
import clsx from 'clsx'
import {
  ForwardRefRenderFunction,
  HTMLProps,
  forwardRef,
  useState,
} from 'react'

type CharacterCount = Omit<HTMLProps<HTMLTextAreaElement>, 'width'> &
  FormElementProps & {
    mode: 'word' | 'character'
    limit: number
    countHint: (limit: number) => string
    countRemaining: (remaining: number) => string
    countError: (excess: number) => string
    threshold?: number
    containerProps?: HTMLProps<HTMLDivElement>
  }

const CharacterCount: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  CharacterCount
> = (props, ref): JSX.Element => {
  const {
    mode,
    limit,
    threshold,
    containerProps,
    countError,
    countHint,
    countRemaining,
    ...characterCountRest
  } = props
  const { className: containerClassName, ...containerRest } =
    containerProps || {}

  const [state, setState] = useState({ remaining: limit, thresholdHit: false })

  const onCharacterCountChange = (
    ev: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = ev.target
    const length = mode === 'word' ? value.split(' ').length : value.length
    const remaining = limit - length

    setState({
      remaining,
      thresholdHit: !!threshold && remaining / limit <= threshold / 100,
    })
  }

  return (
    <div
      className={clsx('nhsuk-character-count', containerClassName)}
      {...containerRest}
    >
      <FormGroup<CharacterCount>
        {...characterCountRest}
        inputType="textarea"
        render={({ id, name, error, className, rows, onChange, ...rest }) => (
          <>
            <textarea
              id={id}
              name={name}
              className={clsx(
                'nhsuk-textarea',
                'nhsuk-js-character-count',
                {
                  'nhsuk-textarea--error': error || state.remaining < 0,
                },
                className,
              )}
              ref={ref}
              rows={rows}
              onChange={(ev) => {
                onCharacterCountChange(ev)
                onChange?.(ev)
              }}
              {...rest}
            />
            <Hint
              className="nhsuk-character-count__message nhsuk-u-visually-hidden"
              id={`${id}-info`}
            >
              {countHint(limit)}
            </Hint>
            {state.remaining < 0 ? (
              <ErrorMessage
                className={clsx(
                  'nhsuk-character-count__message nhsuk-character-count__status',
                )}
                aria-hidden="true"
              >
                {countError(Math.abs(state.remaining))}
              </ErrorMessage>
            ) : (
              <Hint
                className={clsx(
                  'nhsuk-character-count__message nhsuk-character-count__status',
                  {
                    'nhsuk-character-count__message--disabled':
                      !!threshold && !state.thresholdHit,
                  },
                )}
                aria-hidden="true"
              >
                {countRemaining(Math.abs(state.remaining))}
              </Hint>
            )}
            <div
              className="nhsuk-character-count__sr-status nhsuk-u-visually-hidden"
              aria-live="polite"
            >
              {state.remaining < 0
                ? countError(Math.abs(state.remaining))
                : countRemaining(Math.abs(state.remaining))}
            </div>
          </>
        )}
      />
    </div>
  )
}

/**
 * Use textarea to let users enter more than 1 line of text.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/textarea).
 *
 * @param {CharacterCount} props - The props of the component.
 * @param {React.ForwardedRef<HTMLTextAreaElement>} ref - Optional ref to be passed to the textarea.
 *
 * @example
 * ```tsx
 * <CharacterCount  id="example" label="Example" />
 * ```
 */
const CharacterCountForwardRef = forwardRef(CharacterCount)

CharacterCountForwardRef.displayName = 'CharacterCount'

export default CharacterCountForwardRef
