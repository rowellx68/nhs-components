import{j as n}from"./jsx-runtime-94f6e698.js";import{u as s}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";function t(r){const e=Object.assign({h1:"h1",p:"p",a:"a",img:"img",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre"},s(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"nhsuk-components-react",children:"NHS.UK Components React"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://github.com/rowellx68/nhs-components/actions?query=branch%3Amain",target:"_blank",rel:"nofollow noopener noreferrer",children:n.jsx(e.img,{src:"https://github.com/rowellx68/nhs-components/actions/workflows/ci.yml/badge.svg?branch=main",alt:"main branch"})})}),`
`,n.jsxs(e.p,{children:["This is an unofficial React implementation of the ",n.jsx(e.a,{href:"https://github.com/nhsuk/nhsuk-frontend",target:"_blank",rel:"nofollow noopener noreferrer",children:"NHS.UK Frontend"})," library. It is heavily inspired by ",n.jsx(e.a,{href:"https://github.com/NHSDigital/nhsuk-react-components",target:"_blank",rel:"nofollow noopener noreferrer",children:"nhsuk-react-components"}),", originally written by ",n.jsx(e.a,{href:"https://github.com/Tomdangov",target:"_blank",rel:"nofollow noopener noreferrer",children:"Thomas Judd-Cooper"})," and ",n.jsx(e.a,{href:"https://github.com/NHSDigital/nhsuk-react-components/graphs/contributors",target:"_blank",rel:"nofollow noopener noreferrer",children:"other contributors"}),"."]}),`
`,n.jsx(e.h2,{id:"requirements",children:"Requirements"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/nhsuk/nhsuk-frontend",target:"_blank",rel:"nofollow noopener noreferrer",children:"nhsuk-frontend v7+"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://reactjs.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"React v18+"})}),`
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
`,n.jsx(e.p,{children:"The codebase is released under the MIT Licence, unless stated otherwise."})]})}function h(r={}){const{wrapper:e}=Object.assign({},s(),r.components);return e?n.jsx(e,Object.assign({},r,{children:n.jsx(t,r)})):t(r)}export{h as default};
//# sourceMappingURL=README-80325c07.js.map
