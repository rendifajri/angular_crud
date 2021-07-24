export function toBoolean(value): boolean {
  return value === '' || (value && value !== 'false');
}
