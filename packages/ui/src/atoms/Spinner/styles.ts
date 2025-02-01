import { ColorValue, StyleSheet, ViewStyle } from 'react-native';
import { borderWidths } from '@aero-ui/tokens';

import { SpinnerStartByType, SpinnerVariantType } from '../../@types';

interface MakeStyleProps {
  variant: SpinnerVariantType;
  color: ColorValue;
  overlayColor: ColorValue;
}

const immutableStyles: ViewStyle = {
  backgroundColor: 'transparent',
  borderWidth: borderWidths[4],
};

export const makeStyle = (props: MakeStyleProps) => {
  const { color, overlayColor, variant } = props;

  const doubleColor = variant === 'double' ? color : overlayColor;
  const halfColor = variant === 'half' ? color : overlayColor;

  return StyleSheet.create<Record<SpinnerStartByType, ViewStyle>>({
    bottom: {
      ...immutableStyles,
      borderTopColor: doubleColor,
      borderRightColor: overlayColor,
      borderBottomColor: color,
      borderLeftColor: halfColor,
    },

    left: {
      ...immutableStyles,
      borderTopColor: halfColor,
      borderRightColor: doubleColor,
      borderBottomColor: overlayColor,
      borderLeftColor: color,
    },

    right: {
      ...immutableStyles,
      borderTopColor: overlayColor,
      borderRightColor: color,
      borderBottomColor: halfColor,
      borderLeftColor: doubleColor,
    },

    top: {
      ...immutableStyles,
      borderTopColor: color,
      borderRightColor: halfColor,
      borderBottomColor: doubleColor,
      borderLeftColor: overlayColor,
    },
  });
};
