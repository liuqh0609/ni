export function exclude<T>(arr: T[], v: T) {
  const clone = [...arr]
  const index = clone.indexOf(v)
  if (index >= 0)
    clone.splice(index, 1)

  return clone
}

export function remove<T>(arr: T[], v: T) {
  const index = arr.indexOf(v)
  if (index >= 0)
    arr.splice(index, 1)

  return arr
}