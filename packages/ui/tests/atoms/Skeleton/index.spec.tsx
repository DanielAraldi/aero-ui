import { render, screen } from '@testing-library/react-native';

import { Skeleton, SkeletonProps } from '../../../';
import { animatedSpy } from '../../spies';
import { borderRadius, colors, zIndexes } from '@aero-ui/tokens';
import { ViewStyle } from 'react-native';

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  const spy = jest.spyOn(RN.Animated, 'View', 'get');
  spy.mockReturnValue(RN.View);
  return RN;
});

const defaultProps: SkeletonProps = {
  useNativeDriver: false,
};

const defaultStyles: ViewStyle = {
  width: 'auto',
  height: 'auto',
  overflow: 'hidden',
  zIndex: zIndexes.full,
  backgroundColor: colors.gray[200],
  borderRadius: borderRadius.none,
};

describe('<Skeleton />', () => {
  it('Should render Skeleton component with default properties', () => {
    render(<Skeleton {...defaultProps} />);

    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toBeOnTheScreen();
    expect(skeleton).toHaveStyle(defaultStyles);
  });
});
