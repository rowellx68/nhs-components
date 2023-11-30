# CharacterCount

More details about this component can be found [here](https://service-manual.nhs.uk/design-system/components/character-count).

## Basic Usage

```tsx
import { CharacterCount } from 'nhsuk-frontend-react'

const Component = () => {
  return (
    <CharacterCount
      id='character-count-example'
      name='character-count-example'
      label='Example label'
      hint='Example hint'
      mode='word'
      limit={100}
      countHint={(limit) => `You can enter up to ${limit} words`}
      countRemaining={(remaining) => `You have ${remaining} words remaining`}
      countError={(excess) => `You have ${excess} words too many`}
    />
  )
}
```
