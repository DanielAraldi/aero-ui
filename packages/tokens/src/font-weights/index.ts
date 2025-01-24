export const fontWeights = {
  thin: '100',
  extralight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const;

export type FontWeightsObjectType = typeof fontWeights;

export type FontWeightsKeysType = keyof typeof fontWeights;
