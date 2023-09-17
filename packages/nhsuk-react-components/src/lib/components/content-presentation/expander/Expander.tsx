import { HTMLProps } from 'react'
import Details from '../details'

type Expander = Omit<Details, 'ExpanderGroup' | 'expander'> &
  React.FC<HTMLProps<HTMLDetailsElement>>

const Summary = Details.Summary
const Text = Details.Text

/**
 * Make a complex topic easier to digest by letting users reveal more detailed information only if they need it.
 *
 * For more information on when to use this component, got to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/expander).
 *
 * @link https://service-manual.nhs.uk/design-system/components/expander
 *
 * @example
 *
 * ```tsx
 * <Expander>
 *  <Expander.Summary>How to find your NHS number</Expander.Summary>
 *  <Expander.Text>You can find your NHS number...</Expander.Text>
 * </Expander>
 */
const Expander: Expander = ({ children, className, ...rest }): JSX.Element => {
  return (
    <Details expander className={className} {...rest}>
      {children}
    </Details>
  )
}

Summary.displayName = 'Expander.Summary'
Text.displayName = 'Expander.Text'
Expander.displayName = 'Expander'

Expander.Summary = Summary
Expander.Text = Text

export default Expander
