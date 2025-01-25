import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import {
  borderRadius,
  BorderWidthsObjectType,
  colors,
  SpacingObjectType,
} from '@aero-ui/tokens';

import { SpinnerColorType, SpinnerProps } from '../../@types';

export function Spinner(props: SpinnerProps) {
  const {
    color = colors.black[100],
    overlayColor = colors.black[50],
    size = 'normal',
  } = props;

  const spinnerSizes: Record<
    SpinnerColorType,
    SpacingObjectType[keyof SpacingObjectType]
  > = {
    large: 32,
    normal: 24,
    small: 16,
  };

  const spinnerBorderWidthsSizes: Record<
    SpinnerColorType,
    BorderWidthsObjectType[keyof BorderWidthsObjectType]
  > = {
    large: 8,
    normal: 4,
    small: 4,
  };

  const commonViewProps: StyleProp<ViewStyle> = {
    width: spinnerSizes[size],
    height: spinnerSizes[size],

    backgroundColor: 'transparent',

    borderWidth: spinnerBorderWidthsSizes[size],
    borderRadius: borderRadius.full,
  };

  return (
    <View style={{ ...commonViewProps, borderColor: overlayColor }}>
      <View style={{ ...commonViewProps, borderColor: color }} />
    </View>
  );
}
