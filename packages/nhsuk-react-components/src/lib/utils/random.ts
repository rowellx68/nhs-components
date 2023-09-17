export const generateRandomString = (length = 8): string => {
  return [...Array<string>(length)]
    .map(() => Math.random().toString(36)[2])
    .join('')
}
