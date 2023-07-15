const prod = process.env.NODE_ENV === 'production'

export const experimentalWarning = (
  component: 'tabs' | 'character-count',
): void => {
  if (prod) {
    return
  }

  console.warn(`ATTENTION
  This component is tagged as experimental and therefore could change without notice. See more details about this component at https://service-manual.nhs.uk/design-system/components/${component}
  `)
}
