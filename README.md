# NHS.UK Components React

![main branch](https://github.com/rowellx68/nhs-components/actions/workflows/ci.yml/badge.svg?branch=main)

This is an unofficial React implementation of the [NHS.UK Frontend](https://github.com/nhsuk/nhsuk-frontend) library. It is heavily inspired by [nhsuk-react-components](https://github.com/NHSDigital/nhsuk-react-components), originally written by [Thomas Judd-Cooper](https://github.com/Tomdangov) and [other contributors](https://github.com/NHSDigital/nhsuk-react-components/graphs/contributors).

## Requirements

- [nhsuk-frontend v7+](https://github.com/nhsuk/nhsuk-frontend)
- [React v16.8+](https://reactjs.org/)

## Installation

⚠️ You will need to install `nhsuk-frontend` separately ⚠️

```bash
# Using pnpm
pnpm add nhs-components-react

# Using npm
npm install nhs-components-react

# Using yarn
yarn add nhs-components-react
```

## Example Usage

```tsx
import { Button, Fieldset, Input } from 'nhs-components-react'

const Component = () => (
  <>
    <Fieldset>
        <Fieldset.Legend isPageHeading>
          What is your NHS number?
        </Fieldset.Legend>
        <Input
          width='10'
          hint={
            <>
              Your NHS number is a 10 digit number that you find on any letter
              the NHS has sent you. For example,{" "}
              <span className="nhsuk-u-nowrap">485 777 3456</span>.
            </>
          }
        />
      </Fieldset>
      <Button>Continue</Button>
  </>
)
```

## Contributing

## Testing

## License

The codebase is released under the MIT Licence, unless stated otherwise.
