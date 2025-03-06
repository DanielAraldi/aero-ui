import { Platform } from 'react-native';

export function mockPlatform(OS: typeof Platform.OS): void {
  Platform.OS = OS;
}
