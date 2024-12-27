import { StyleSheet } from 'react-native';
import { fontSizes, spacings } from '@aero/tokens';

export const styles = StyleSheet.create({
  content: {
    width: '100%',
  },

  ghostContent: {
    width: '100%',
    height: spacings[12],

    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: fontSizes.base,
  },
});
