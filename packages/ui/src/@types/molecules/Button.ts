import { ReactElement } from 'react';
import { TouchableHighlightProps } from 'react-native';

import { SpinnerProps, TextProps } from '../atoms';

export type ButtonVariantType =
  | 'primary'
  | 'success'
  | 'ghost'
  | 'danger'
  | 'warning'
  | 'neutral';

export interface TextButtonProps extends TextProps {}

export interface SpinnerButtonProps extends SpinnerProps {}

export interface ButtonProps extends Omit<TouchableHighlightProps, 'children'> {
  /**
   * @description This property is used to display a title for the button.
   *
   * @default 'Title'
   *
   * @since 1.2.0
   */
  title?: string;

  /**
   * @description This property is used to determine the button theme.
   *
   * @default 'primary'
   *
   * @since 1.2.0
   */
  variant?: ButtonVariantType;

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
   * @description This property is used to determine if the button has a border.
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
   * @since 1.1.0
   */
  useNativeDriver: boolean;

  /**
   * @description This property is used to determine the `Text` component of the
   * button.
   *
   * @default undefined
   *
   * @since 1.2.0
   */
  text?: ReactElement<TextButtonProps>;

  /**
   * @description This property is used to determine the `Spinner` component of
   * the button.
   *
   * @default undefined
   *
   * @since 1.2.0
   */
  spinner?: ReactElement<SpinnerButtonProps>;
}
