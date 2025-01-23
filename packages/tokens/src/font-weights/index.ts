export const fontWeights = {
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

export type FontWeightsObjectType = typeof fontWeights;

export type FontWeightsKeysType = keyof typeof fontWeights;
