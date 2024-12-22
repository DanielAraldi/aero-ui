export const letterSpacings = {
  tighter: -0.8,
  tight: -0.4,
  normal: 0,
  wide: 0.4,
  wider: 0.8,
  widest: 1.6,
} as const;

export type LetterSpacingsObjectType = typeof letterSpacings;

export type LetterSpacingsKeysType = keyof typeof letterSpacings;
