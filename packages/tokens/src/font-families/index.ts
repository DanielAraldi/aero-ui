export const fontFamilies = {
  clarity: {
    light: {
      default: 'Mulish_300Light',
      italic: 'Mulish_300Light_Italic',
    },
    regular: {
      default: 'Mulish_400Regular',
      italic: 'Mulish_400Regular_Italic',
    },
    medium: {
      default: 'Mulish_500Medium',
      italic: 'Mulish_500Medium_Italic',
    },
    semibold: {
      default: 'Mulish_600SemiBold',
      italic: 'Mulish_600SemiBold_Italic',
    },
    bold: {
      default: 'Mulish_700Bold',
      italic: 'Mulish_700Bold_Italic',
    },
  },
  trust: {
    light: {
      default: 'Archivo_300Light',
      italic: 'Archivo_300Light_Italic',
    },
    regular: {
      default: 'Archivo_400Regular',
      italic: 'Archivo_400Regular_Italic',
    },
    medium: {
      default: 'Archivo_500Medium',
      italic: 'Archivo_500Medium_Italic',
    },
    semibold: {
      default: 'Archivo_600SemiBold',
      italic: 'Archivo_600SemiBold_Italic',
    },
    bold: {
      default: 'Archivo_700Bold',
      italic: 'Archivo_700Bold_Italic',
    },
  },
  neutral: {
    light: {
      default: 'Roboto_300Light',
      italic: 'Roboto_300Light_Italic',
    },
    regular: {
      default: 'Roboto_400Regular',
      italic: 'Roboto_400Regular_Italic',
    },
    medium: {
      default: 'Roboto_500Medium',
      italic: 'Roboto_500Medium_Italic',
    },
    semibold: {
      default: 'Roboto_500Medium',
      italic: 'Roboto_500Medium_Italic',
    },
    bold: {
      default: 'Roboto_700Bold',
      italic: 'Roboto_700Bold_Italic',
    },
  },
} as const;

export type FontFamiliesObjectType = typeof fontFamilies;

export type FontFamiliesKeysType = keyof typeof fontFamilies;

export type FontFamiliesWeightType =
  keyof (typeof fontFamilies)[FontFamiliesKeysType];

export type FontFamiliesStyleType =
  keyof (typeof fontFamilies)[FontFamiliesKeysType][FontFamiliesWeightType];
