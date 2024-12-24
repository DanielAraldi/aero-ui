import { StyleSheet } from 'react-native';
import {
  colors,
  fontFamilies,
  fontSizes,
  lineHeights,
  spacings,
} from '@zephyr/tokens';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    width: '100%',
    height: spacings[12],

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: colors.blue[200],
  },

  text: {
    fontSize: fontSizes.base,
    fontFamily: fontFamilies.clarity.regular.default,
    lineHeight: lineHeights.base,

    color: colors.blue[900],
  },
});
