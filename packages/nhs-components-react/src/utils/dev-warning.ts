const prod = process.env.NODE_ENV === 'production'

/**
 * Print a warning when using experimental components when not in production mode.
 *
 * @param component name of the experimental component.
 */
export const useExperimentalWarning = (
  component: 'tabs' | 'character-count',
): void => {
  useDevWarning(`This component is tagged as experimental and therefore could change without notice.

  See more details about this component at https://service-manual.nhs.uk/design-system/components/${component}
  `)
}

/**
 * Print a warning message when not in production mode.
 *
 * @param message message to print when not it production.
 */
export const useDevWarning = (message: string): void => {
  if (prod) {
    return
  }

  console.warn(message)
}
