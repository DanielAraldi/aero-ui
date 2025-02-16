import { TextProps as ReactNativeTextProps } from 'react-native';
import { FontSizesKeysType } from '@aero-ui/tokens';

export interface TextProps extends ReactNativeTextProps {
  variant?: FontSizesKeysType;
}
