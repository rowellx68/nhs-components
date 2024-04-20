import{j as n}from"./jsx-runtime-DRTy3Uxn.js";import{useMDXComponents as o}from"./index-z5U8iC57.js";import"./index-BBkUAzwr.js";function t(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"nhsuk-components-react",children:"NHS.UK Components React"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://github.com/rowellx68/nhs-components/actions?query=branch%3Amain",rel:"nofollow",children:n.jsx(e.img,{src:"https://github.com/rowellx68/nhs-components/actions/workflows/ci.yml/badge.svg?branch=main",alt:"main branch"})})}),`
`,n.jsxs(e.p,{children:["This is an unofficial React implementation of the ",n.jsx(e.a,{href:"https://github.com/nhsuk/nhsuk-frontend",rel:"nofollow",children:"NHS.UK Frontend"})," library. It is heavily inspired by ",n.jsx(e.a,{href:"https://github.com/NHSDigital/nhsuk-react-components",rel:"nofollow",children:"nhsuk-react-components"}),", originally written by ",n.jsx(e.a,{href:"https://github.com/Tomdangov",rel:"nofollow",children:"Thomas Judd-Cooper"})," and ",n.jsx(e.a,{href:"https://github.com/NHSDigital/nhsuk-react-components/graphs/contributors",rel:"nofollow",children:"other contributors"}),"."]}),`
`,n.jsx(e.h2,{id:"supported-nhsuk-frontend-versions",children:"Supported NHS.UK Frontend versions"}),`
`,n.jsxs(e.p,{children:[`| NHS.UK Frontend | NHS.UK Components React |
| --------------- | ----------------------- |
| v7              | `,n.jsx(e.code,{children:"^1.0.0"}),`                |
| v8              | `,n.jsx(e.code,{children:"^2.0.0"}),"                |"]}),`
`,n.jsx(e.h2,{id:"requirements",children:"Requirements"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/nhsuk/nhsuk-frontend",rel:"nofollow",children:"nhsuk-frontend v7+"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://reactjs.org/",rel:"nofollow",children:"React v18+"})}),`
`]}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsxs(e.p,{children:["⚠️ You will need to install ",n.jsx(e.code,{children:"nhsuk-frontend"})," separately ⚠️"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Using pnpm
pnpm add nhsuk-frontend-react nhsuk-frontend

# Using npm
npm install nhsuk-frontend-react nhsuk-frontend

# Using yarn
yarn add nhsuk-frontend-react nhsuk-frontend
`})}),`
`,n.jsxs(e.h2,{id:"migration-from-nhsuk-react-components",children:["Migration from ",n.jsx(e.code,{children:"nhsuk-react-components"})]}),`
`,n.jsxs(e.p,{children:["To automate migration from ",n.jsx(e.code,{children:"nhsuk-react-components"}),", you can run the following codemod:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx jscodeshift -t ./node_modules/nhsuk-frontend-react/tools/from-nhsuk-react-components-migrator.ts \\
  --parser=tsx \\
  --extensions=tsx \\
  ./src/**/**/*.tsx
`})}),`
`,n.jsx(e.p,{children:"For the most part, this will update your imports and component usages. However, there will be some cases where you will need to manually update your codebase."}),`
`,n.jsx(e.h2,{id:"example-usage",children:"Example Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button, Fieldset, Input } from 'nhsuk-frontend-react'

const Component = () => (
  <>
    <Fieldset>
      <Fieldset.Legend isPageHeading>What is your NHS number?</Fieldset.Legend>
      <Input
        width="10"
        hint={
          <>
            Your NHS number is a 10 digit number that you find on any letter the
            NHS has sent you. For example,{' '}
            <span className="nhsuk-u-nowrap">485 777 3456</span>.
          </>
        }
      />
    </Fieldset>
    <Button>Continue</Button>
  </>
)
`})}),`
`,n.jsx(e.h2,{id:"contributing",children:"Contributing"}),`
`,n.jsx(e.h2,{id:"testing",children:"Testing"}),`
`,n.jsx(e.p,{children:"To run the tests, you can use the following command:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Using pnpm
pnpm test

# Using npm
npm test

# Using yarn
yarn test
`})}),`
`,n.jsx(e.h2,{id:"license",children:"License"}),`
`,n.jsx(e.p,{children:"The codebase is released under the MIT Licence, unless stated otherwise."})]})}function l(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{l as default};
