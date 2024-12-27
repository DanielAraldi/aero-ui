import { StyleSheet } from 'react-native';
import { colors, spacings } from '@aero/tokens';

export const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',

    width: '100%',
    height: spacings[24],

    justifyContent: 'space-between',
    alignItems: 'center',

    padding: spacings[2],

    backgroundColor: colors.blue[200],
  },

  rectangle: {
    width: spacings[20],
    height: spacings[20],

    justifyContent: 'center',
    alignItems: 'center',

    padding: spacings[2],

    backgroundColor: colors.blue[400],
  },
});
