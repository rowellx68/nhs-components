---
"nhsuk-frontend-react": patch
---

fix(nhsuk-frontend-react): update useEffect to trigger when NavList children update

This moves the invocation of the header script into NavList so it can react to the changes to the children. Useful for when the links are dynamically rendred.
