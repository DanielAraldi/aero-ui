export const fontFamilies = {
  clarity: {
    light: {
      default: 'Mulish-Light',
      italic: 'Mulish-LightItalic',
    },
    regular: {
      default: 'Mulish-Regular',
      italic: 'Mulish-RegularItalic',
    },
    medium: {
      default: 'Mulish-Medium',
      italic: 'Mulish-MediumItalic',
    },
    semibold: {
      default: 'Mulish-SemiBold',
      italic: 'Mulish-SemiBoldItalic',
    },
    bold: {
      default: 'Mulish-Bold',
      italic: 'Mulish-BoldItalic',
    },
  },
  trust: {
    light: {
      default: 'Archivo-Light',
      italic: 'Archivo-LightItalic',
    },
    regular: {
      default: 'Archivo-Regular',
      italic: 'Archivo-RegularItalic',
    },
    medium: {
      default: 'Archivo-Medium',
      italic: 'Archivo-MediumItalic',
    },
    semibold: {
      default: 'Archivo-SemiBold',
      italic: 'Archivo-SemiBoldItalic',
    },
    bold: {
      default: 'Archivo-Bold',
      italic: 'Archivo-BoldItalic',
    },
  },
  neutral: {
    light: {
      default: 'Roboto-Light',
      italic: 'Roboto-LightItalic',
    },
    regular: {
      default: 'Roboto-Regular',
      italic: 'Roboto-RegularItalic',
    },
    medium: {
      default: 'Roboto-Medium',
      italic: 'Roboto-MediumItalic',
    },
    semibold: {
      default: 'Roboto-SemiBold',
      italic: 'Roboto-SemiBoldItalic',
    },
    bold: {
      default: 'Roboto-Bold',
      italic: 'Roboto-BoldItalic',
    },
  },
} as const;

export type FontFamiliesObjectType = typeof fontFamilies;

export type FontFamiliesKeysType = keyof typeof fontFamilies;

export type FontFamiliesWeightType =
  keyof (typeof fontFamilies)[FontFamiliesKeysType];

export type FontFamiliesStyleType =
  keyof (typeof fontFamilies)[FontFamiliesKeysType][FontFamiliesWeightType];
