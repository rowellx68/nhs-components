import type { Transform } from 'jscodeshift'

const transform: Transform = (file, api, options) => {
  const j = api.jscodeshift
  const printOptions = options.printOptions || {}

  const root = j(file.source)

  const oldImports = root
    .find(j.ImportDeclaration, { type: 'ImportDeclaration' })
    .filter(({ value }) => {
      return (
        (value.source.type === 'Literal' ||
          value.source.type === 'StringLiteral') &&
        value.source.value === 'nhsuk-react-components'
      )
    })

  if (oldImports.length === 0) {
    return file.source
  }

  const formSpecifiers: string[] = []
  const inputSpecifiers: string[] = []

  // update old imports
  oldImports.forEach(({ node }) => {
    node.specifiers = node.specifiers?.filter((specifier) => {
      if (specifier.type !== 'ImportSpecifier') {
        return true
      }

      let shouldKeep = false

      switch (specifier.imported.name) {
        case 'Form':
          formSpecifiers.push(specifier.local?.name ?? specifier.imported.name)
          shouldKeep = false
          break
        case 'Input':
          inputSpecifiers.push(specifier.local?.name ?? specifier.imported.name)
          shouldKeep = true
          break
        default:
          shouldKeep = true
          break
      }

      return shouldKeep
    })

    node.source.value = 'nhsuk-frontend-react'
  })

  const formOpenTags = formSpecifiers.map((name) => {
    return j.jsxOpeningElement(j.jsxIdentifier(name), [])
  })

  const formAttributesToRemove = ['disabled', 'disableErrorFromComponents']

  // update form opening tags
  formOpenTags.forEach((tag) => {
    if (tag.name.type !== 'JSXIdentifier') {
      return
    }

    tag.attributes?.forEach((attribute) => {
      if (attribute.type !== 'JSXAttribute') {
        return
      }

      if (formAttributesToRemove.includes(attribute.name.name as string)) {
        j(attribute).remove()
      }
    })

    tag.name.name = 'form'
  })

  const formCloseTags = formSpecifiers.map((name) => {
    return j.jsxClosingElement(j.jsxIdentifier(name))
  })

  // update form closing tags
  formCloseTags.forEach((tag) => {
    if (tag.name.type !== 'JSXIdentifier') {
      return
    }

    tag.name.name = 'form'
  })

  const inputTags = inputSpecifiers.map((name) => {
    return j.jsxOpeningElement(j.jsxIdentifier(name), [])
  })

  // update input tags attribute
  inputTags.forEach((tag) => {
    if (tag.name.type !== 'JSXIdentifier') {
      return
    }

    tag.attributes?.forEach((attribute) => {
      if (
        attribute.type === 'JSXAttribute' &&
        attribute.name.name === 'width' &&
        attribute.value?.type === 'JSXExpressionContainer' &&
        attribute.value?.expression.type === 'NumericLiteral'
      ) {
        attribute.value = j.stringLiteral(`${attribute.value.expression.value}`)
      }
    })
  })

  return root.toSource(printOptions)
}

export default transform
