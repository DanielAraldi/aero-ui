export const lineHeights = {
  xs: 16,
  sm: 20,
  base: 24,
  lg: 28,
  xl: 28,
  '2xl': 32,
  '3xl': 36,
  '4xl': 40,
  '5xl': 56,
  '6xl': 68,
  '7xl': 80,
  '8xl': 104,
  '9xl': 136,
} as const;

export type LineHeightsObjectType = typeof lineHeights;

export type LineHeightsKeysType = keyof typeof lineHeights;
