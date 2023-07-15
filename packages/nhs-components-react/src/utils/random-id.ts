export const generateRandomString = (length = 5): string => {
  const rand = Math.random() + 1

  return rand.toString(36).substring(2, length + 2)
}

export const generateRandomName = (prefix?: string): string => {
  const randString = generateRandomString()

  return prefix ? `${prefix}_${randString}` : randString
}

export const generateRandomId = generateRandomName
