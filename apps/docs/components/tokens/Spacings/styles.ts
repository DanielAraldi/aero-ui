import { StyleSheet } from 'react-native';
import { colors, spacings } from '@aero/tokens';

export const styles = StyleSheet.create({
  content: {
    width: 'auto',
    height: spacings[12],

    justifyContent: 'center',
    alignItems: 'flex-start',

    padding: spacings[2],

    backgroundColor: colors.blue[200],
  },

  progress: {
    position: 'absolute',

    height: '100%',

    backgroundColor: colors.blue[400],
  },

  textContainer: {
    flexDirection: 'row',

    width: '100%',
    height: '100%',

    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
