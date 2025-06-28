import { StyleSheet } from 'react-native';
import { borderRadius, spacings } from '@aero-ui/tokens';

export const styles = StyleSheet.create({
  container: {
    padding: spacings[4],
  },

  paragraph: {
    marginBottom: spacings[1],
  },

  image: {
    width: spacings[48],
    height: spacings[48],

    borderRadius: borderRadius.full,
  },
});
