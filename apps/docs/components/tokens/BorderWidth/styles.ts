import { StyleSheet } from 'react-native';
import { colors, spacings } from '@zephyr/tokens';

export const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: spacings[12],

    justifyContent: 'center',
    alignItems: 'center',

    padding: spacings[1],

    backgroundColor: colors.blue[200],
    borderColor: colors.blue[900],
  },
});
