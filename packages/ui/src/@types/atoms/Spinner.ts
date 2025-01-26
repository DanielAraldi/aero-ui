import { ColorValue, EasingFunction, ViewProps } from 'react-native';

export type SpinnerVariantType = 'unique' | 'double' | 'half';

export type SpinnerSizeType = 'small' | 'normal' | 'large';

export type SpinnerStartByType = 'bottom' | 'left' | 'right' | 'top';

export interface SpinnerProps extends ViewProps {
  /**
   * @description This property is used to determine the scroll variants of the
   * spinner.
   *
   * @default 'unique'
   *
   * @since 1.1.0
   */
  variant?: SpinnerVariantType;

  /**
   * @description This property is used to determine the size of the spinner.
   *
   * @default 'normal'
   *
   * @since 1.1.0
   */
  size?: SpinnerSizeType;

  /**
   * @description This property is used to determine the local where the
   * spinner starts to rotate.
   *
   * @default 'left'
   *
   * @since 1.1.0
   */
  startBy?: SpinnerStartByType;

  /**
   * @description This property is used to determine the color of the spinner.
   *
   * @default 'black'
   *
   * @since 1.1.0
   */
  color?: ColorValue;

  /**
   * @description This property is used to control the color of the spinner
   * overlay.
   *
   * @default 'transparent'
   *
   * @since 1.1.0
   */
  overlayColor?: ColorValue;

  /**
   * @description This property is used to control the duration of the
   * rotation animation.
   *
   * @default 1000
   *
   * @since 1.1.0
   */
  duration?: number;

  /**
   * @description This property is used to control the easing function of the
   * rotation animation.
   *
   * @default Easing.linear
   *
   * @since 1.1.0
   */
  easing?: EasingFunction;
}