import { StyleSheet } from 'react-native';
import { colors, spacings } from '@aero-ui/tokens';

export const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: spacings[12],

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: colors.blue[200],
  },
});
