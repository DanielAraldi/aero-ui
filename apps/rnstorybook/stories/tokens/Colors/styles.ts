import { StyleSheet } from 'react-native';
import { fontSizes, fontWeights, spacings } from '@aero-ui/tokens';

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

  header: {
    padding: spacings[5],

    fontSize: fontSizes['2xl'],
    fontWeight: fontWeights.semibold,

    textTransform: 'capitalize',
  },

  text: {
    fontSize: fontSizes.base,
  },
});
