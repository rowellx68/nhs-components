import { useId } from 'react'

/**
 * Generate a unique string with a prefix.
 *
 * @param prefix {string} - The prefix to use
 * @returns A unique string with the provided prefix
 *
 * @example
 * ```tsx
 * const id = useIdWithPrefix('my-id')
 * ```
 */
const useIdWithPrefix = (prefix: string) => `${prefix}_${useId()}`

export default useIdWithPrefix
