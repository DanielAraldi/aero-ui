import { StyleSheet } from 'react-native';
import { colors, spacings } from '@zephyr/tokens';

export const styles = StyleSheet.create({
  content: {
    width: '100%',

    gap: spacings[1],
  },

  fontFamilyContainer: {
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',

    padding: spacings[2],

    gap: spacings[1],

    backgroundColor: colors.blue[200],
  },
});
