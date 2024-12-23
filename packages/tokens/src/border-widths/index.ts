export const borderWidths = {
  0: 0,
  px: 1,
  2: 2,
  4: 4,
  8: 8,
} as const;

export type BorderWidthsObjectType = typeof borderWidths;

export type BorderWidthsKeysType = keyof typeof borderWidths;
