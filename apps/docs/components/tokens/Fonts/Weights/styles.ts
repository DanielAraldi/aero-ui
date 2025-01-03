import { StyleSheet } from 'react-native';
import { colors, spacings } from '@aero-ui/tokens';

export const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',

    width: '100%',
    height: spacings[12],

    justifyContent: 'space-between',
    alignItems: 'center',

    padding: spacings[2],

    backgroundColor: colors.blue[200],
  },
});
