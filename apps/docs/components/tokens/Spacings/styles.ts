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

  internalContainer: {
    gap: spacings[1],
  },

  content: {
    width: 'auto',
    height: spacings[12],

    justifyContent: 'center',
    alignItems: 'flex-start',

    padding: spacings[2],

    backgroundColor: colors.blue[200],
  },

  progress: {
    position: 'absolute',

    height: '100%',

    backgroundColor: colors.blue[400],
  },

  textContainer: {
    flexDirection: 'row',

    width: '100%',
    height: '100%',

    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text: {
    fontSize: fontSizes.base,
    fontFamily: fontFamilies.clarity.regular.default,
    lineHeight: lineHeights.base,

    color: colors.blue[900],
  },
});
