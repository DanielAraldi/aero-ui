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

const defaultStyles: ViewStyle = {
  width: 'auto',
  height: 'auto',
  overflow: 'hidden',
  zIndex: zIndexes.full,
  backgroundColor: colors.gray[200],
  borderRadius: borderRadius.none,
};

const onPressSpy = jest.fn();

describe('<Skeleton />', () => {
  it('Should render Skeleton component with default properties', () => {
    render(<Skeleton {...defaultProps} />);

    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toBeOnTheScreen();
    expect(skeleton).toHaveStyle(defaultStyles);
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
      ...defaultStyles,
      ...styleProps,
    });
  });

  it('Should render Skeleton component with children and activated as true', () => {
    animatedSpy('timing');

    render(
      <Skeleton {...defaultProps}>
        <Button onPress={onPressSpy} />
      </Skeleton>
    );

    const button = screen.queryByTestId('wrapper');
    if (button) fireEvent.press(button);

    expect(screen.getByTestId('skeleton')).toHaveStyle(defaultStyles);
    expect(button).not.toBeOnTheScreen();
    expect(onPressSpy).not.toHaveBeenCalled();
  });

  it('Should render Skeleton component with children and activated as false', () => {
    animatedSpy('timing');

    render(
      <Skeleton {...defaultProps} activated={false}>
        <Button onPress={onPressSpy} />
      </Skeleton>
    );

    const skeleton = screen.getByTestId('skeleton');
    const button = screen.getByTestId('wrapper');
    fireEvent.press(button);

    expect(skeleton).toHaveStyle({
      backgroundColor: 'transparent',
    });
    expect(skeleton).not.toHaveStyle({
      zIndex: zIndexes.full,
    });
    expect(button).toBeOnTheScreen();
    expect(onPressSpy).toHaveBeenCalledTimes(1);
  });

  it('Should take a snapshot of the Skeleton component', () => {
    const component = render(<Skeleton {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
