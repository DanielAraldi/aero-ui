import { fireEvent, render, screen } from '@testing-library/react-native';

import { Skeleton, SkeletonProps, Button } from '../../../';
import { borderRadius, colors, zIndexes } from '@aero-ui/tokens';
import { ViewStyle } from 'react-native';
import { animatedSpy } from '../../spies';

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  const spy = jest.spyOn(RN.Animated, 'View', 'get');
  spy.mockReturnValue(RN.View);
  return RN;
});

const defaultProps: SkeletonProps = {
  useNativeDriver: false,
};

const defaultStyles: Record<string, ViewStyle> = {
  skeleton: {
    width: 'auto',
    height: 'auto',
    overflow: 'hidden',
    borderRadius: borderRadius.none,
  },

  animation: {
    zIndex: zIndexes.full,
    width: '100%',
    height: '100%',
    borderRadius: borderRadius.none,
  },
};

const onTap = jest.fn();

describe('<Skeleton />', () => {
  it('Should render Skeleton component with default properties', () => {
    render(<Skeleton {...defaultProps} />);

    const skeleton = screen.getByTestId('skeleton');
    const animation = screen.getByTestId('animation');

    expect(skeleton).toBeOnTheScreen();
    expect(skeleton).toHaveStyle(defaultStyles.skeleton);

    expect(animation).toBeOnTheScreen();
    expect(animation).toHaveStyle(defaultStyles.animation);
  });

  it('Should render Skeleton component with custom size', () => {
    const sizeProps: SkeletonProps = {
      width: 64,
      height: 64,
    };
    const customProps: SkeletonProps = {
      ...defaultProps,
      ...sizeProps,
    };

    render(<Skeleton {...customProps} />);

    expect(screen.getByTestId('skeleton')).toHaveStyle(sizeProps);
  });

  it('Should render Skeleton component with custom round', () => {
    const roundProps: SkeletonProps = {
      round: 'full',
    };
    const customProps: SkeletonProps = {
      ...defaultProps,
      ...roundProps,
    };

    render(<Skeleton {...customProps} />);

    expect(screen.getByTestId('skeleton')).toHaveStyle({
      borderRadius: borderRadius.full,
    });
    expect(screen.getByTestId('animation')).toHaveStyle({
      borderRadius: borderRadius.full,
    });
  });

  it('Should render Skeleton component with custom style', () => {
    const styleProps: SkeletonProps['style'] = {
      borderColor: colors.gray[400],
      borderWidth: 1,
    };
    const customProps: SkeletonProps = {
      ...defaultProps,
      style: styleProps,
    };

    render(<Skeleton {...customProps} />);

    expect(screen.getByTestId('skeleton')).toHaveStyle({
      ...defaultStyles.skeleton,
      ...styleProps,
    });
  });

  it('Should render Skeleton component with pointer event none when activated is true', () => {
    animatedSpy('timing');

    render(
      <Skeleton {...defaultProps} onMagicTap={onTap}>
        <Button />
      </Skeleton>
    );

    expect(screen.getByTestId('skeleton')).toHaveStyle(defaultStyles.skeleton);
    expect(onTap).not.toHaveBeenCalled();
  });

  it('Should render Skeleton component with pointer event enable when activated is false', () => {
    animatedSpy('timing');

    render(
      <Skeleton {...defaultProps} activated={false}>
        <Button testID='button' onPress={onTap} />
      </Skeleton>
    );

    const skeleton = screen.queryByTestId('skeleton');
    const animation = screen.queryByTestId('animation');
    const button = screen.getByTestId('button');

    fireEvent.press(button);

    expect(skeleton).not.toBeOnTheScreen();
    expect(animation).not.toBeOnTheScreen();
    expect(button).toBeOnTheScreen();
    expect(onTap).toHaveBeenCalledTimes(1);
  });

  it('Should take a snapshot of the Skeleton component', () => {
    const component = render(<Skeleton {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
