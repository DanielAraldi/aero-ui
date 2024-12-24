import { StyleSheet } from 'react-native';
import { colors, spacings } from '@zephyr/tokens';

export const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',

    width: '100%',
    height: spacings[20],

    justifyContent: 'space-between',
    alignItems: 'center',

    padding: spacings[2],

    backgroundColor: colors.blue[200],
  },

  rectangle: {
    width: spacings[16],
    height: spacings[16],

    justifyContent: 'center',
    alignItems: 'center',

    padding: spacings[2],

    backgroundColor: colors.blue[400],
  },
});
