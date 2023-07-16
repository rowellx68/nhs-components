import { useId } from 'react'

/**
 * Generate a unique string with a prefix.
 * @param prefix {string}
 * @returns A unique string with the provided prefix
 */
const useIdWithPrefix = (prefix: string) => `${prefix}_${useId()}`

export default useIdWithPrefix
