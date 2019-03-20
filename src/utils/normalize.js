export const normalizeBy = (array, key) =>
  array.reduce((acc, item) => ({ ...acc, [item[key]]: item }), {})
