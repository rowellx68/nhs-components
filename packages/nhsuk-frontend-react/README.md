# NHS.UK Components React

This is an unofficial React implementation of the [NHS.UK Frontend](https://github.com/nhsuk/nhsuk-frontend) library. It is heavily inspired by [nhsuk-react-components](https://github.com/NHSDigital/nhsuk-react-components), originally written by [Thomas Judd-Cooper](https://github.com/Tomdangov) and [other contributors](https://github.com/NHSDigital/nhsuk-react-components/graphs/contributors).

[![npm version](https://badge.fury.io/js/nhsuk-frontend-react.svg)](https://badge.fury.io/js/nhsuk-frontend-react) [![main branch](https://github.com/rowellx68/nhs-components/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rowellx68/nhs-components/actions?query=branch%3Amain)

## Supported NHS.UK Frontend versions

| NHS.UK Frontend | NHS.UK Components React |
| --------------- | ----------------------- |
| v7              | `^1.0.0`                |
| v8              | `^2.0.0`                |

## Requirements

- [nhsuk-frontend v7+](https://github.com/nhsuk/nhsuk-frontend)
- [React v18+](https://reactjs.org/)

## Installation

⚠️ You will need to install `nhsuk-frontend` separately ⚠️

```bash
# Using pnpm
pnpm add nhsuk-frontend-react nhsuk-frontend

# Using npm
npm install nhsuk-frontend-react nhsuk-frontend

# Using yarn
yarn add nhsuk-frontend-react nhsuk-frontend
```

## Migration from `nhsuk-react-components`

To automate migration from `nhsuk-react-components`, you can run the following codemod:

```bash
npx jscodeshift -t ./node_modules/nhsuk-frontend-react/tools/from-nhsuk-react-components-migrator.ts \
  --parser=tsx \
  --extensions=tsx \
  ./src/**/**/*.tsx
```

For the most part, this will update your imports and component usages. However, there will be some cases where you will need to manually update your codebase.

## Example Usage

```tsx
import { Button, Fieldset, Input } from 'nhsuk-frontend-react'

const Component = () => (
  <>
    <Fieldset>
      <Fieldset.Legend isPageHeading>What is your NHS number?</Fieldset.Legend>
      <Input
        width="10"
        hint={
          <>
            Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example, <span className="nhsuk-u-nowrap">485 777 3456</span>.
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

To run the tests, you can use the following command:

```bash
# Using pnpm
pnpm test

# Using npm
npm test

# Using yarn
yarn test
```

## License

The codebase is released under the MIT Licence, unless stated otherwise.
