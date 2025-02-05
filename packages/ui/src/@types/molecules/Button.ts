import { StyleProp, TouchableHighlightProps, ViewProps } from 'react-native';

export type ButtonVariantType =
  | 'primary'
  | 'success'
  | 'ghost'
  | 'danger'
  | 'warning'
  | 'neutral';

export interface ButtonProps extends TouchableHighlightProps {
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
}
