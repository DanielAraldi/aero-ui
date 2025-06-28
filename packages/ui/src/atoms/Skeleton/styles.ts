import { DimensionValue, StyleSheet } from 'react-native';
import { borderRadius, colors, zIndexes } from '@aero-ui/tokens';

import { SkeletonRoundType } from '../../@types';
import { isNumber } from '../../utils';

interface MakeStyleProps {
  width: DimensionValue;
  height: DimensionValue;
  round: SkeletonRoundType;
  activated: boolean;
}

type BorderRadiusStyleProps = Pick<MakeStyleProps, 'round'>;
type HeightStyleProps = Pick<MakeStyleProps, 'activated' | 'height'>;

function getBorderRadius(props: BorderRadiusStyleProps): number {
  const { round } = props;

  if (isNumber(round)) return round;
  return borderRadius[round || 'none'];
}

function getHeight(props: HeightStyleProps): DimensionValue {
  const { activated, height } = props;

  if (activated) return height;
  return 'auto';
}

export const makeStyles = (props: MakeStyleProps) => {
  const { activated, height, width, round } = props;

  const heightValue = getHeight({
    activated,
    height,
  });

  const borderRadius = getBorderRadius({
    round,
  });

  return StyleSheet.create({
    skeleton: {
      overflow: 'hidden',

      width: activated ? width : 'auto',
      height: heightValue,

      backgroundColor: activated ? colors.gray[200] : 'transparent',

      borderRadius,

      ...(activated && { zIndex: zIndexes.full }),
    },
  });
};
