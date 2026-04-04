import { useId } from 'react';

/**
 * Generates a unique id with the given prefix.
 *
 * @param prefix - The prefix to use for the id.
 * @returns A unique id with the given prefix.
 */
export const useIdWithPrefix = (prefix: string) => {
  const id = useId();
  return `${prefix}_${id}`;
};
