import { StyleSheet } from 'react-native';
import {
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from '@aero-ui/tokens';

import { TextVariantType } from '../../@types';

export const makeStyle = (size: TextVariantType) =>
  StyleSheet.create({
    text: {
      fontSize: fontSizes[size],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights[size],
      letterSpacing: letterSpacings.normal,
    },
  });
