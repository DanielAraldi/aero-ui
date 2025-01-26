import { ColorValue, EasingFunction } from 'react-native';

export type SpinnerVariantType = 'unique' | 'double' | 'half';

export type SpinnerSizeType = 'small' | 'normal' | 'large';

export type SpinnerStartByType = 'bottom' | 'left' | 'right' | 'top';

export interface SpinnerProps {
  size?: SpinnerSizeType;
  color?: ColorValue;

  /**
   * @description This property is used to determine the scroll variants of the
   * spinner.
   *
   * @default 'unique'
   */
  variant?: SpinnerVariantType;

  /**
   * @description This property is used to control the color of the spinner
   * overlay.
   *
   * @default 'transparent'
   */
  overlayColor?: ColorValue;

  /**
   * @description This property is used to determine the local where the
   * spinner starts to rotate.
   *
   * @default 'left'
   */
  startBy?: SpinnerStartByType;

  /**
   * @description This property is used to control the duration of the
   * rotation animation.
   *
   * @default 1000
   */
  duration?: number;

  /**
   * @description This property is used to control the easing function of the
   * rotation animation.
   *
   * @default Easing.linear
   */
  easing?: EasingFunction;
}
