import { TextProps as ReactNativeTextProps } from 'react-native';
import { FontSizesKeysType } from '@aero-ui/tokens';

export interface TextProps extends ReactNativeTextProps {
  /**
   * @description This property is used to determine the variants of the text.
   *
   * @default 'base'
   *
   * @since 1.2.0
   */
  variant?: FontSizesKeysType;
}
