export const zIndexes = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
  100: 100,
  full: 9999,
} as const;

export type ZIndexesObjectType = typeof zIndexes;

export type ZIndexesKeysType = keyof typeof zIndexes;
