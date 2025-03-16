import { DimensionValue, StyleSheet } from 'react-native';
import { borderRadius, colors, zIndexes } from '@aero-ui/tokens';

interface MakeStyleProps {
  width: DimensionValue;
  height: DimensionValue;
  activated: boolean;
}

export const makeStyles = (props: MakeStyleProps) => {
  const { activated, height, width } = props;

  return StyleSheet.create({
    skeleton: {
      width: activated ? width : 'auto',
      height: activated ? height : 'auto',

      zIndex: zIndexes.full,

      overflow: 'hidden',

      backgroundColor: activated ? colors.gray[200] : 'transparent',

      borderRadius: borderRadius.base,
    },
  });
};
