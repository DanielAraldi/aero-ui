import { StyleSheet } from 'react-native';
import { colors, spacings } from '@zephyr/tokens';

export const styles = StyleSheet.create({
  content: {
    flexWrap: 'wrap',
    flexDirection: 'row',

    width: '100%',
    minHeight: 'auto',

    justifyContent: 'space-between',
    alignItems: 'center',

    padding: spacings[2],

    gap: spacings[1],

    backgroundColor: colors.blue[200],
  },
});
