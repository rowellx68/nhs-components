# Header

More details about this component can be found [here](https://service-manual.nhs.uk/design-system/components/header).

## Basic Usage

```tsx
import { Header } from 'nhsuk-react-components'

const Component = () => {
  return (
    <Header {...args}>
      <Header.Container>
        <Header.Logo />
        <Header.Content>
          <Header.MenuToggle />
        </Header.Content>
      </Header.Container>
      <Header.Nav>
        <Header.NavItem mobileOnly href="#">
          Home
        </Header.NavItem>
        <Header.NavItem href="#">Get involved</Header.NavItem>
        <Header.NavItem href="#">About us</Header.NavItem>
        <Header.NavItem href="#">About us</Header.NavItem>
      </Header.Nav>
    </Header>
  )
}
```
