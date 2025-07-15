export function getKeyObjectByValue<T = unknown, K = unknown>(
  object: T,
  value: number | string | boolean
): K | null {
  for (let property in object) {
    if (object.hasOwnProperty(property)) {
      if (object[property] === value) return property as K;
    }
  }

  return null;
}

export function getValuesSortedOfObject<T = any>(object: unknown): T[] {
  return Object.values(object).sort(
    (previousValue, value) => previousValue - value
  );
}
