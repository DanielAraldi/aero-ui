import { RefObject } from 'react';
import { TextProps as RNTextProps, Text } from 'react-native';
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

  /**
   * @description This property is used as ref for the text.
   *
   * @default undefined
   *
   * @since 1.5.0
   */
  ref?: RefObject<Text>;
}
