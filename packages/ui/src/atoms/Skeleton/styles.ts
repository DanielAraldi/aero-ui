import { DimensionValue, StyleSheet } from 'react-native';
import { borderRadius, zIndexes } from '@aero-ui/tokens';

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
    container: {
      overflow: 'hidden',

      width: activated ? width : 'auto',
      height: heightValue,

      borderRadius,
    },

    skeleton: {
      zIndex: zIndexes.full,

      width: '100%',
      height: '100%',

      borderRadius,
    },
  });
};
