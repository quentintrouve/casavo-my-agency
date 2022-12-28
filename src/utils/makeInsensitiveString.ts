export const makeInsensitiveString = (param: string): string => {
  return param
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
};