export function isBoolean(value: any): boolean {
  return typeof value === 'boolean';
}

export function isTypeBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}

export function isTypeNumber(value: any): value is number {
  return typeof value === 'number' && !isNaN(value);
}
