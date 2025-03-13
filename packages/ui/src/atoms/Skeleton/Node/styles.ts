import { StyleSheet } from 'react-native';
import { borderRadius, colors, zIndexes } from '@aero-ui/tokens';

export const styles = StyleSheet.create({
  skeleton: {
    zIndex: zIndexes.full,

    overflow: 'hidden',

    backgroundColor: colors.gray[200],

    borderRadius: borderRadius.base,
  },
});
