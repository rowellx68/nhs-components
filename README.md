# NHS.UK React components

![MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![CI](https://img.shields.io/github/actions/workflow/status/NHSDigital/nhsuk-react-components/build-test.yml?style=flat-square&label=Build%20and%20test)
<a href="https://www.npmjs.com/package/nhsuk-react-components">
![NPM](https://img.shields.io/npm/v/nhsuk-react-components?style=flat-square&label=Version)
</a>

A React component library for the NHS.UK frontend design system.

## Installation

```bash
pnpm add nhsuk-frontend nhsuk-react-components
```

## Polymorphic components

A few components in this library are polymorphic, allowing you to pass a different component as a prop and render as that component. This is particularly useful when you want to use a custom component, say a `Link` component from a routing library, instead of the default `a` tag.

This feature is taken from [Mantine](https://github.com/mantinedev/mantine), have a look at their [polymorphic components documentation](https://mantine.dev/guides/polymorphic/) for more information.

Here is an example of how you can use a custom `Link` component with the `Header.Logo` component:

```tsx
import {
  Header,
  HeaderContainer,
  HeaderService,
  HeaderServiceLogo,
} from 'nhsuk-frontend-react';
import Link from 'next/link';

export const AppHeader = () => (
  <Header>
    <HeaderContainer>
      <HeaderService>
        <HeaderServiceLogo as={Link} href="/" variant="logo-only" />
      </HeaderService>
    </HeaderContainer>
  </Header>
);
```

## Full list of polymorphic components

<details>
<summary>Click to expand</summary>

- `ActionLink`
- `BackLink`
- `Breadcrumb.BackLink`
- `Breadcrumb.ListItem`
- `Button`
- `Card.Image`
- `Card.Link`
- `ContentList.ListItem`
- `DoDontList.Label`
- `ErrorSummary.ListItem`
- `Fieldset.Legend`
- `Figure.Image`
- `Footer.ListItem`
- `Header.Logo`
- `Header.NavItem`
- `Header.TransactionLink`
- `Heading`
- `Link`
- `Pagination.Item`
- `SummaryList.Row.ActionLink`
- `Tabs.Title`
- `TaskList.Item.NameAndHint`
- `VisuallyHidden`
- `WarningCallout.Label`

</details>

## Testing

To run the tests, you can use the following command:

```bash
pnpm test
```

## License

The codebase is released under the MIT Licence, unless stated otherwise.
