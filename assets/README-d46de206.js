import{j as n}from"./jsx-runtime-ffb262ed.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function r(t){const e=Object.assign({h1:"h1",p:"p",a:"a",img:"img",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre"},o(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"nhsuk-components-react",children:"NHS.UK Components React"}),`
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
pnpm add nhs-components-react

# Using npm
npm install nhs-components-react

# Using yarn
yarn add nhs-components-react
`})}),`
`,n.jsx(e.h2,{id:"example-usage",children:"Example Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button, Fieldset, Input } from "nhs-components-react";

const Component = () => (
  <>
    <Fieldset>
      <Fieldset.Legend isPageHeading>What is your NHS number?</Fieldset.Legend>
      <Input
        width="10"
        hint={
          <>
            Your NHS number is a 10 digit number that you find on any letter the
            NHS has sent you. For example,{" "}
            <span className="nhsuk-u-nowrap">485 777 3456</span>.
          </>
        }
      />
    </Fieldset>
    <Button>Continue</Button>
  </>
);
`})}),`
`,n.jsx(e.h2,{id:"contributing",children:"Contributing"}),`
`,n.jsx(e.h2,{id:"testing",children:"Testing"}),`
`,n.jsx(e.h2,{id:"license",children:"License"}),`
`,n.jsx(e.p,{children:"The codebase is released under the MIT Licence, unless stated otherwise."})]})}function h(t={}){const{wrapper:e}=Object.assign({},o(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(r,t)})):r(t)}export{h as default};
//# sourceMappingURL=README-d46de206.js.map
