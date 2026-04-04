# Upgrading from v4 to v5

## Prerequisites

v5 requires **nhsuk-frontend v10**. Update your dependency before upgrading this package:

```bash
pnpm install nhsuk-frontend@^10.4.1
```

The CSS import path changed in nhsuk-frontend v10:

```diff
- import 'nhsuk-frontend/dist/nhsuk.css'
+ import 'nhsuk-frontend/dist/nhsuk/nhsuk-frontend.min.css'
```

---

## New components

Three components are new in v5:

- `NotificationBanner` — `nhsuk-frontend-react/components/content-presentation/notification-banner`
- `FileUpload` — `nhsuk-frontend-react/components/form-elements/file-upload`
- `PasswordInput` — `nhsuk-frontend-react/components/form-elements/password-input`

---

## Breaking changes

### [Header](https://rowellx68.github.io/nhs-components/?path=/docs/components-navigation-header--docs)

The Header component has been significantly redesigned. The context-based architecture is gone; composition is now done entirely via props and explicit sub-components.

**Removed sub-components:**

| v4                       | v5                   |
| ------------------------ | -------------------- |
| `Header.Logo`            | `Header.ServiceLogo` |
| `Header.TransactionLink` | Removed              |
| `Header.MobileMenu`      | Removed              |
| `Header.Content`         | Removed              |

**New sub-components:** `Header.Service`, `Header.Account`, `Header.AccountItem`

**`Header` props:**

```diff
- serviceName?: string
- transactional?: boolean
- organisationName?: string
- organisationSplit?: string
- organisationDescriptor?: string
+ variant?: 'organisation' | 'inline'
+ colour?: 'white'
```

**`Header.ServiceLogo` (was `Header.Logo`):**

```diff
- <Header.Logo href="/" />
+ <Header.ServiceLogo href="/" serviceName="My service" logo={<NhsLogo />} />
```

**`Header.NavItem` props:**

```diff
- variant?: 'home-link'
+ active?: boolean
```

**`Header.Search`** now renders a `<search>` element. The search input `name` changed from `search-field` to `q`, and the `visuallyHiddenText` prop on the button was removed.

---

### [Footer](https://rowellx68.github.io/nhs-components/?path=/docs/components-navigation-footer--docs)

**Removed/renamed sub-components:**

| v4               | v5            |
| ---------------- | ------------- |
| `Footer.Content` | `Footer.Meta` |

**New sub-components:** `Footer.Navigation`, `Footer.NavigationColumn`

`Footer.List` no longer accepts a `variant` prop. `Footer.ListItem` props are simplified — the `variant` prop is removed.

The `visuallyHiddenText` prop on the root `Footer` component has been removed.

---

### [Do and Don't List](https://rowellx68.github.io/nhs-components/?path=/docs/components-content-presentation-do-don-t-list--docs)

The shared context between `DoDontList` and its children is removed. The `variant` prop has moved from the root component down to `DoDontListList` and `DoDontListItem`, where it is now required.

`DoDontList.Label` has been renamed to `DoDontList.Title`.

```diff
- <DoDontList variant="do">
-   <DoDontList.Label>Do</DoDontList.Label>
-   <DoDontList.List>
-     <DoDontList.Item>...</DoDontList.Item>
-   </DoDontList.List>
- </DoDontList>
+ <DoDontList>
+   <DoDontList.Title>Do</DoDontList.Title>
+   <DoDontList.List variant="do">
+     <DoDontList.Item variant="do">...</DoDontList.Item>
+   </DoDontList.List>
+ </DoDontList>
```

The component now renders with a card-based layout (`nhsuk-card nhsuk-card--feature`).

---

### [Hero](https://rowellx68.github.io/nhs-components/?path=/docs/components-content-presentation-hero--docs)

`HeroHeading` now accepts a `size` prop (`'s' | 'm' | 'l' | 'xl'`). The heading renders a direct `<h1>` rather than going through the `Heading` component. The `nhsuk-u-margin-bottom-3` class is no longer applied.

---

### [Main](https://rowellx68.github.io/nhs-components/?path=/docs/styles-layout-main--docs)

`Main` now accepts a `size` prop (`'s' | 'l'`) that applies the `nhsuk-main-wrapper--s` or `nhsuk-main-wrapper--l` padding modifier:

```diff
+ <Main size="s">
```

Use `size="s"` on transactional pages to reduced spacing.

---

### [Details](https://rowellx68.github.io/nhs-components/?path=/docs/components-content-presentation-details--docs)

The `Details` component is now a pure component.

---

### [Button](https://rowellx68.github.io/nhs-components/?path=/docs/components-form-elements-button--docs)

```diff
- type defaults to 'button'
+ type defaults to 'submit'
+ small?: boolean  (new prop)
```

The `nhsuk-button--disabled` CSS class is no longer applied. Initialization now uses `new NhsButton()` from nhsuk-frontend v10 rather than `initButton()`.

---

### Icons

Four icons have been **removed**:

| Removed export                             | Suggested alternative                           |
| ------------------------------------------ | ----------------------------------------------- |
| `nhsuk-frontend-react/icons/chevron-down`  | Use an inline SVG or a third-party icon library |
| `nhsuk-frontend-react/icons/chevron-left`  | Use an inline SVG or a third-party icon library |
| `nhsuk-frontend-react/icons/chevron-right` | Use an inline SVG or a third-party icon library |
| `nhsuk-frontend-react/icons/close`         | Use an inline SVG or a third-party icon library |

One icon has been **added:** `nhsuk-frontend-react/icons/user` (`UserIcon`)

All icon CSS classes have been renamed to use double-dash BEM modifier syntax:

| v4 class                           | v5 class                           |
| ---------------------------------- | ---------------------------------- |
| `nhsuk-icon__arrow-left`           | `nhsuk-icon--arrow-left`           |
| `nhsuk-icon__arrow-right`          | `nhsuk-icon--arrow-right`          |
| `nhsuk-icon__arrow-right-circle`   | `nhsuk-icon--arrow-right-circle`   |
| `nhsuk-icon__chevron-right-circle` | `nhsuk-icon--chevron-right-circle` |
| `nhsuk-icon__cross`                | `nhsuk-icon--cross`                |
| `nhsuk-icon__search`               | `nhsuk-icon--search`               |
| `nhsuk-icon__tick`                 | `nhsuk-icon--tick`                 |

Icon SVG dimensions have also changed (most now use `16×16` viewboxes). If you have custom styles that target specific pixel dimensions, review them.

---

### [Tag](https://rowellx68.github.io/nhs-components/?path=/docs/components-content-presentation-tag--docs)

The `variant` prop has been renamed to `colour`. A new `noBorder` boolean prop has been added.

```diff
- <Tag variant="blue">Blue</Tag>
+ <Tag colour="blue">Blue</Tag>
+ <Tag colour="blue" noBorder>Blue (no border)</Tag>
```

---

### [ErrorMessage](https://rowellx68.github.io/nhs-components/?path=/docs/components-form-elements-error-message--docs)

The rendered element has changed from `<p>` to `<span>`. Update any CSS selectors targeting `p.nhsuk-error-message`.

---

### [SummaryList](https://rowellx68.github.io/nhs-components/?path=/docs/components-content-presentation-summary-list--docs)

`variant="default"` has been removed from `SummaryList` — omit the prop to get the default appearance.

`SummaryList.Row` gains a new `variant="no-actions"` option:

```diff
- <SummaryList variant="default">
+ <SummaryList>
    <SummaryList.Row>...</SummaryList.Row>
+   <SummaryList.Row variant="no-actions">...</SummaryList.Row>
  </SummaryList>
```

---

### [Table](https://rowellx68.github.io/nhs-components/?path=/docs/components-content-presentation-table--docs)

`variant` now only accepts `'responsive'`. Any previous `variant="default"` usage should be removed.

---

### [Tabs](https://rowellx68.github.io/nhs-components/?path=/docs/components-content-presentation-tabs--docs)

`Tabs.Panel` now requires an `id` prop. A `hidden` boolean prop has been added. `Tabs.ListItem` gains a `selected` boolean prop.

```diff
- <Tabs.Panel>...</Tabs.Panel>
+ <Tabs.Panel id="tab-example">...</Tabs.Panel>
+ <Tabs.Panel id="tab-example-2" hidden>...</Tabs.Panel>

- <Tabs.ListItem href="#tab-example">Tab</Tabs.ListItem>
+ <Tabs.ListItem href="#tab-example" selected>Tab</Tabs.ListItem>
```

---

### [Panel](https://rowellx68.github.io/nhs-components/?path=/docs/components-content-presentation-panel--docs)

`Panel` gains a `variant="interruption"` option. `Panel.Title` is now polymorphic and accepts a `size` prop (`'m' | 'l' | 'xl'`).

---

### [WarningCallout](https://rowellx68.github.io/nhs-components/?path=/docs/components-content-presentation-warning-callout--docs)

A new `WarningCallout.Description` sub-component has been added for the body text. The component now renders with `nhsuk-card nhsuk-card--warning` classes.

---

### [Expander](https://rowellx68.github.io/nhs-components/?path=/docs/components-content-presentation-expander--docs)

`Expander` is now a standalone component (previously an alias for `Details` with `variant="expander"`). It exposes explicit sub-components:

```diff
- <Details variant="expander">
-   <Details.Summary>Title</Details.Summary>
-   <Details.Text>Content</Details.Text>
- </Details>
+ <Expander>
+   <Expander.Summary>Title</Expander.Summary>
+   <Expander.Text>Content</Expander.Text>
+ </Expander>
```

`Expander.Group` is a new sub-component for grouping multiple expanders.

---

### [ContentsList](https://rowellx68.github.io/nhs-components/?path=/docs/components-navigation-contents-list--docs)

`ContentsList` has been restructured with explicit sub-components. Items now use `ContentsList.Item` and `ContentsList.Link`, both accepting an `active` prop:

```diff
- <ContentsList>
-   <ContentsList.Item href="/page-1" current>Page 1</ContentsList.Item>
-   <ContentsList.Item href="/page-2">Page 2</ContentsList.Item>
- </ContentsList>
+ <ContentsList aria-label="Pages in this section">
+   <ContentsList.Item active>
+     <ContentsList.Link href="/page-1" active>Page 1</ContentsList.Link>
+   </ContentsList.Item>
+   <ContentsList.Item>
+     <ContentsList.Link href="/page-2">Page 2</ContentsList.Link>
+   </ContentsList.Item>
+ </ContentsList>
```

`ContentsList` now requires an `aria-label` prop.

---

### [Pagination](https://rowellx68.github.io/nhs-components/?path=/docs/components-navigation-pagination--docs)

`Pagination` gains a `numbered` boolean prop for numbered pagination. New sub-components `Pagination.List`, `Pagination.Item`, and `Pagination.Ellipsis` support numbered pagination layouts.

---

### [Input](https://rowellx68.github.io/nhs-components/?path=/docs/components-form-elements-input--docs)

New props: `variant="code"` for code-formatted inputs, and `prefix`/`suffix` for inline prefix and suffix content.

---

### [ActionLink](https://rowellx68.github.io/nhs-components/?path=/docs/components-navigation-action-link--docs)

New `variant="reverse"` prop for use on dark backgrounds.

---

### [Breadcrumb](https://rowellx68.github.io/nhs-components/?path=/docs/components-navigation-breadcrumb--docs)

New `variant="reverse"` prop on the root component for use on dark backgrounds.

---

### New exports

A new `./assets` entry point exports `NhsLogo`, the NHS logo as an SVG component:

```tsx
import { NhsLogo } from 'nhsuk-frontend-react/assets';
```
