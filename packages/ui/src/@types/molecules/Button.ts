import { RefObject } from 'react';
import {
  Animated,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import { SpinnerProps, TextProps } from '../atoms';

export type ButtonVariantType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'ghost'
  | 'danger'
  | 'warning'
  | 'neutral';

export type ButtonPressType = 'in' | 'out' | 'none';

export interface ButtonProps extends Omit<PressableProps, 'children'> {
  /**
   * @description This property is used to determine the button theme.
   *
   * @default 'primary'
   *
   * @since 1.2.0
   */
  variant?: ButtonVariantType;

  /**
   * @description Title of the button.
   *
   * @default 'Title'
   *
   * @since 1.5.0
   */
  title?: string;

  /**
   * @description This property is used to control the size of the button when
   * it's pressed.
   *
   * @default 0.94
   *
   * @since 1.2.0
   */
  toScale?: number;

  /**
   * @description Whether the press behavior is disabled.
   *
   * @default false
   *
   * @since 1.4.0
   */
  disabled?: boolean;

  /**
   * @description This property is used to determine if the button is loading.
   * When the button is loading it will be automatically disabled.
   *
   * @default false
   *
   * @since 1.2.0
   */
  loading?: boolean;

  /**
   * @description This property is used to determine if the button has border.
   *
   * @default false
   *
   * @since 1.2.0
   */
  bordered?: boolean;

  /**
   * @description This property is used to determine if the button will fill to
   * all your wrapper.
   *
   * @default true
   *
   * @since 1.2.0
   */
  hugWidth?: boolean;

  /**
   * @description This property determines if the button scale animation to be
   * executed using native thread UI or JavaScript.
   *
   * @default false
   *
   * @platform ios
   *
   * @since 1.2.0
   */
  useNativeDriver?: boolean;

  /**
   * @description Either view styles.
   *
   * @default undefined
   *
   * @since 1.4.0
   */
  style?: StyleProp<ViewStyle>;

  /**
   * @description This property is used as ref for the button.
   *
   * @default undefined
   *
   * @since 1.5.0
   */
  ref?: RefObject<View>;

  /**
   * @description This property is used to customize the spinner.
   *
   * @default undefined
   *
   * @since 1.5.0
   */
  spinnerProps?: SpinnerProps;

  /**
   * @description This property is used to customize the text.
   *
   * @default undefined
   *
   * @since 1.5.0
   */
  textProps?: TextProps;

  /**
   * @description This property is used to customize the spring animation in
   * pressIn event of the button.
   *
   * @default undefined
   *
   * @since 1.5.0
   */
  pressInAnimateProps?: Omit<
    Animated.SpringAnimationConfig,
    'toValue' | 'useNativeDriver'
  >;

  /**
   * @description This property is used to customize the spring animation in
   * pressOut event of the button.
   *
   * @default undefined
   *
   * @since 1.5.0
   */
  pressOutAnimateProps?: Omit<
    Animated.SpringAnimationConfig,
    'toValue' | 'useNativeDriver'
  >;
}
