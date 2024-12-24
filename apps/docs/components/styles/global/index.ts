import { StyleSheet } from 'react-native';
import {
  colors,
  fontFamilies,
  fontSizes,
  letterSpacings,
  lineHeights,
  spacings,
} from '@zephyr/tokens';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.white[100],
  },

  spaceBetweenContent: {
    gap: spacings[1],
  },

  text: {
    fontSize: fontSizes.base,
    fontFamily: fontFamilies.clarity.regular.default,
    lineHeight: lineHeights.base,
    letterSpacing: letterSpacings.normal,

    color: colors.blue[900],
  },
});