import { StyleSheet } from 'react-native';
import { colors, fontFamilies, fontSizes, lineHeights } from '@zephyr/tokens';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.white[100],
  },

  text: {
    fontSize: fontSizes.base,
    fontFamily: fontFamilies.clarity.regular.default,
    lineHeight: lineHeights.base,

    color: colors.blue[900],
  },
});
