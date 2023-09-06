import { HTMLProps } from 'react'
import Details from '../details'

type Expander = Omit<Details, 'ExpanderGroup' | 'expander'> &
  React.FC<HTMLProps<HTMLDetailsElement>>

const Summary = Details.Summary
const Text = Details.Text

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
