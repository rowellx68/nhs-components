# `nhsuk-frontend-react-extension`

![MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![CI](https://img.shields.io/github/actions/workflow/status/rowellx68/nhs-components/publish.yml?style=flat-square&label=Build%20and%20Publish)
<a href="https://www.npmjs.com/package/nhsuk-frontend-react-extension">
![NPM](https://img.shields.io/npm/v/nhsuk-frontend-react-extension?style=flat-square&label=Version)
</a>

This is a collection of components not found in the NHS.UK Frontend library but exist in GOV.UK Frontend or are components that are commonly used in NHS.UK projects.

## Version compatibility

| nhsuk-frontend | nhsuk-frontend-react-extension |
| -------------- | ------------------------------ |
| `8.x.x`        | `0.x.x`                        |
| `9.x.x`        | `1.x.x`                        |

## Requirements

- [nhsuk-frontend v8+](https://github.com/nhsuk/nhsuk-frontend)
- [React v18.\*](https://reactjs.org/)

## Installation

```bash
pnpm add nhsuk-frontend nhsuk-frontend-react-extension
```

## Usage

```tsx
import { LoginButton } from 'nhsuk-frontend-react-extension';
import 'nhsuk-frontend-react-extension/nhsuk-extension.css';

export const LoginPage = () => (
  <div>
    <h1>Login</h1>
    <LoginButton variant="cis2" />
  </div>
);
```

## Testing

To run the tests, you can use the following command:

```bash
pnpm test
```

## License

The codebase is released under the MIT Licence, unless stated otherwise.
