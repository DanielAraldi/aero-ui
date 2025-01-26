import { ColorValue, StyleSheet, ViewStyle } from 'react-native';
import { borderRadius, borderWidths } from '@aero-ui/tokens';

import { SpinnerStartByType, SpinnerVariantType } from '../../@types';

interface MakeStyleProps {
  variant: SpinnerVariantType;
  color: ColorValue;
  overlayColor: ColorValue;
}

const immutableStyles: ViewStyle = {
  backgroundColor: 'transparent',
  borderWidth: borderWidths[4],
  borderRadius: borderRadius.full,
};

export const makeStyle = (props: MakeStyleProps) => {
  const { color, overlayColor, variant } = props;

  const doubleColor = variant === 'double' ? color : overlayColor;
  const halfColor = variant === 'half' ? color : overlayColor;

  return StyleSheet.create<Record<SpinnerStartByType, ViewStyle>>({
    bottom: {
      borderTopColor: doubleColor,
      borderRightColor: overlayColor,
      borderBottomColor: color,
      borderLeftColor: halfColor,
      ...immutableStyles,
    },

    left: {
      borderTopColor: halfColor,
      borderRightColor: doubleColor,
      borderBottomColor: overlayColor,
      borderLeftColor: color,
      ...immutableStyles,
    },

    right: {
      borderTopColor: overlayColor,
      borderRightColor: color,
      borderBottomColor: halfColor,
      borderLeftColor: doubleColor,
      ...immutableStyles,
    },

    top: {
      borderTopColor: color,
      borderRightColor: halfColor,
      borderBottomColor: doubleColor,
      borderLeftColor: overlayColor,
      ...immutableStyles,
    },
  });
};
