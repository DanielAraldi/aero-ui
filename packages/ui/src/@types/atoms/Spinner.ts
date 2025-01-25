import { ColorValue } from 'react-native';

export type SpinnerColorType = 'small' | 'normal' | 'large';

export interface SpinnerProps {
  size?: SpinnerColorType;
  color?: ColorValue | string;
}
