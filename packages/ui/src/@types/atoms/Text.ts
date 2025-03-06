import { TextProps as RNTextProps } from 'react-native';
import { FontSizesKeysType } from '@aero-ui/tokens';

export type TextVariantType = FontSizesKeysType;

export interface TextProps extends RNTextProps {
  /**
   * @description This property is used to determine the variants of the text.
   *
   * @default 'base'
   *
   * @since 1.2.0
   */
  variant?: TextVariantType;
}
