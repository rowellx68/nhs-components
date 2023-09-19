import { defineCodemod } from '@codemod/cli'

export default defineCodemod(({ t }) => {
  const formLocalNames = ['Form']

  return {
    visitor: {
      ImportDeclaration({ node }) {
        if (node.source.value !== 'nhsuk-react-components') {
          return
        }

        node.source.value = 'nhsuk-frontend-react'

        node.specifiers = node.specifiers.filter((specifier) => {
          if (specifier.type !== 'ImportSpecifier') {
            return true
          }

          if (specifier.imported.type !== 'Identifier') {
            return true
          }

          if (
            specifier.imported.name === 'Form' &&
            specifier.local.name !== 'Form'
          ) {
            formLocalNames.push(specifier.local.name)
          }

          return specifier.imported.name !== 'Form'
        })
      },
      JSXOpeningElement({ node }) {
        if (node.name.type !== 'JSXIdentifier') {
          return
        }

        if (formLocalNames.includes(node.name.name)) {
          node.name.name = 'form'
          node.attributes = node.attributes.filter((attr) => {
            return !(
              attr.type === 'JSXAttribute' && attr.name.name === 'disabled'
            )
          })
        }

        if (node.name.name === 'Input') {
          node.attributes.map((attr) => {
            if (
              attr.type === 'JSXAttribute' &&
              attr.name.name === 'width' &&
              attr.value?.type === 'JSXExpressionContainer' &&
              attr.value?.expression.type === 'NumericLiteral'
            ) {
              attr.value = t.stringLiteral(`${attr.value.expression.value}`)
            }

            return attr
          })
        }
      },
      JSXClosingElement({ node }) {
        if (node.name.type !== 'JSXIdentifier') {
          return
        }

        if (formLocalNames.includes(node.name.name)) {
          node.name.name = 'form'
        }
      },
    },
  }
})
