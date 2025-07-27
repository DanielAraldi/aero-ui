import { RefObject } from 'react';
import { DimensionValue, EasingFunction, View, ViewProps } from 'react-native';
import { BorderRadiusKeysType } from '@aero-ui/tokens';

export type SkeletonRoundType = number | BorderRadiusKeysType;

export interface SkeletonProps extends ViewProps {
  /**
   * @description This property set width of the skeleton.
   *
   * @default 'auto'
   *
   * @since 1.4.0
   */
  width?: DimensionValue;

  /**
   * @description This property set height of the skeleton.
   *
   * @default 'auto'
   *
   * @since 1.4.0
   */
  height?: DimensionValue;

  /**
   * @description This property set radius of the skeleton. You can set border
   * radius via `style` property.
   *
   * @default 'none'
   *
   * @since 1.4.0
   */
  round?: SkeletonRoundType;

  /**
   * @description This property is used to control the duration of the
   * skeleton animation.
   *
   * @default 2000
   *
   * @since 1.4.0
   */
  duration?: number;

  /**
   * @description Whether to show the skeleton or hide it.
   *
   * @default true
   *
   * @since 1.4.0
   */
  activated?: boolean;

  /**
   * @description This property determines if the spinner animation to be
   * executed using native thread UI or JavaScript.
   *
   * @default false
   *
   * @since 1.4.0
   */
  useNativeDriver?: boolean;

  /**
   * @description This property is used to control the easing function of the
   * opacity animation.
   *
   * @default Easing.bezier(0.4, 0, 0.6, 1)
   *
   * @since 1.4.0
   */
  easing?: EasingFunction;

  /**
   * @description This property is used as ref for the skeleton.
   *
   * @default undefined
   *
   * @since 1.5.0
   */
  ref?: RefObject<View>;
}
