import { ColorValue, StyleSheet, ViewStyle } from 'react-native';
import { SpinnerStartByType, SpinnerVariantType } from '../../@types';
import { borderRadius, borderWidths } from '@aero-ui/tokens';

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

  const isDouble = variant === 'double';
  const isHalf = variant === 'half';

  return StyleSheet.create<Record<SpinnerStartByType, ViewStyle>>({
    bottom: {
      borderTopColor: isDouble ? color : overlayColor,
      borderRightColor: overlayColor,
      borderBottomColor: color,
      borderLeftColor: isHalf ? color : overlayColor,
      ...immutableStyles,
    },

    left: {
      borderTopColor: isHalf ? color : overlayColor,
      borderRightColor: isDouble ? color : overlayColor,
      borderBottomColor: overlayColor,
      borderLeftColor: color,
      ...immutableStyles,
    },

    right: {
      borderTopColor: overlayColor,
      borderRightColor: color,
      borderBottomColor: isHalf ? color : overlayColor,
      borderLeftColor: isDouble ? color : overlayColor,
      ...immutableStyles,
    },

    top: {
      borderTopColor: color,
      borderRightColor: isHalf ? color : overlayColor,
      borderBottomColor: isDouble ? color : overlayColor,
      borderLeftColor: overlayColor,
      ...immutableStyles,
    },
  });
};
