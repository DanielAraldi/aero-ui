import { StyleSheet } from 'react-native';
import {
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  FontSizesKeysType,
} from '@aero-ui/tokens';

export const makeStyle = (size: FontSizesKeysType) =>
  StyleSheet.create({
    text: {
      fontSize: fontSizes[size],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights[size],
      letterSpacing: letterSpacings.normal,
    },
  });
