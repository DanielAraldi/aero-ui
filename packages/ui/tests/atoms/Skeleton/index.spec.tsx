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
    render(<Skeleton />);

    const skeleton = screen.getByTestId('skeleton');
    const animation = screen.getByTestId('animation');

    expect(skeleton).toBeOnTheScreen();
    expect(skeleton).toHaveStyle(defaultStyles.skeleton);
    expect(animation).toBeOnTheScreen();
    expect(animation).toHaveStyle(defaultStyles.animation);
  });

  it('Should render Skeleton component with accessible properties', () => {
    render(<Skeleton />);

    const skeleton = screen.getByTestId('skeleton');

    expect(skeleton).toHaveProp('accessible', true);
    expect(skeleton).toHaveProp('accessibilityRole', 'none');
    expect(skeleton).toHaveProp('accessibilityLabel', 'Loading');
    expect(skeleton).toHaveProp('accessibilityState', { disabled: true });
    expect(skeleton).toHaveProp('aria-label', 'Loading');
    expect(skeleton).toHaveProp('aria-disabled', true);
  });

  it('Should render Skeleton component with custom size', () => {
    const sizeProps: SkeletonProps = {
      width: 64,
      height: 64,
    };

    render(<Skeleton {...sizeProps} />);

    expect(screen.getByTestId('skeleton')).toHaveStyle(sizeProps);
  });

  it('Should render Skeleton component with custom round', () => {
    render(<Skeleton round='full' />);

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

    render(<Skeleton style={styleProps} />);

    expect(screen.getByTestId('skeleton')).toHaveStyle({
      ...defaultStyles.skeleton,
      ...styleProps,
    });
  });

  it('Should render Skeleton component with pointer events none when activated is true', () => {
    animatedSpy('timing');

    render(
      <Skeleton onMagicTap={onTap}>
        <Button />
      </Skeleton>
    );

    const skeleton = screen.getByTestId('skeleton');

    expect(skeleton).toHaveStyle(defaultStyles.skeleton);
    expect(skeleton).toHaveProp('pointerEvents', 'none');
    expect(screen.getByTestId('animation')).toHaveProp('pointerEvents', 'none');
    expect(onTap).not.toHaveBeenCalled();
  });

  it('Should render Skeleton component with pointer events enable when activated is false', () => {
    animatedSpy('timing');

    render(
      <Skeleton activated={false}>
        <Button testID='button' onPress={onTap} />
      </Skeleton>
    );

    const button = screen.getByTestId('button');

    fireEvent.press(button);

    expect(screen.queryByTestId('skeleton')).not.toBeOnTheScreen();
    expect(screen.queryByTestId('animation')).not.toBeOnTheScreen();
    expect(button).toBeOnTheScreen();
    expect(onTap).toHaveBeenCalledTimes(1);
  });

  it('Should take a snapshot of the Skeleton component', () => {
    const component = render(<Skeleton />);
    expect(component).toMatchSnapshot();
  });
});
