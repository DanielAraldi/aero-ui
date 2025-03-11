import { ReactNode } from 'react';
import { PressableProps, StyleProp, ViewStyle } from 'react-native';

export type ButtonVariantType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'ghost'
  | 'danger'
  | 'warning'
  | 'neutral';

export interface ButtonProps extends PressableProps {
  /**
   * @description This property is used to determine the button theme.
   *
   * @default 'primary'
   *
   * @since 1.2.0
   */
  variant?: ButtonVariantType;

  /**
   * @description This property is used to control the size of the button when
   * it's pressed.
   *
   * @default 0.99
   *
   * @since 1.2.0
   */
  toScale?: number;

  /**
   * @description This property is used to control the duration of the
   * scale animation when button is pressed.
   *
   * @default 150
   *
   * @since 1.2.0
   */
  duration?: number;

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
   * @default true
   *
   * @platform ios
   *
   * @since 1.2.0
   */
  useNativeDriver?: boolean;

  /**
   * @description Either children to render in button.
   *
   * @default undefined
   *
   * @since 1.4.0
   */
  children?: ReactNode;

  /**
   * @description Either view styles.
   *
   * @default undefined
   *
   * @since 1.4.0
   */
  style?: StyleProp<ViewStyle>;
}
