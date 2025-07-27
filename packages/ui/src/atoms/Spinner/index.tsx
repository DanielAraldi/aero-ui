import { memo, useEffect, useMemo } from 'react';
import {
  Easing,
  Animated,
  Platform,
  ActivityIndicator,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { colors, spacings, SpacingsObjectType } from '@aero-ui/tokens';

import { SpinnerSizeType, SpinnerProps } from '../../@types';
import { makeStyle } from './styles';

function Spinner(props: SpinnerProps) {
  const {
    variant = 'unique',
    size = 'normal',
    startBy = 'left',
    color = colors.black[100],
    overlayColor = 'transparent',
    duration = 1000,
    useNativeDriver = false,
    animating = true,
    hidesWhenStopped = true,
    easing = Easing.linear,
    style,
    ref,
    ...rest
  } = props;

  const isAndroid = Platform.OS === 'android';
  const spinnerSizes: Record<
    SpinnerSizeType,
    SpacingsObjectType[keyof SpacingsObjectType]
  > = {
    large: spacings[10],
    normal: spacings[8],
    small: spacings[6],
  };

  const rotation = new Animated.Value(0, { useNativeDriver });

  function handleSpinAnimation(): Animated.CompositeAnimation {
    return Animated.loop(
      Animated.timing(rotation, {
        toValue: 360,
        useNativeDriver,
        duration,
        easing,
      })
    );
  }

  const startByStyles: ViewStyle = useMemo(
    () => makeStyle({ variant, color, overlayColor })[startBy],
    [variant, startBy, color, overlayColor]
  );

  const rotate = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const commonViewProps: ViewProps = useMemo(
    () => ({
      accessible: true,
      accessibilityRole: 'none',
      accessibilityLabel: 'Loading',
      accessibilityState: { disabled: true },
      'aria-label': 'Loading',
      'aria-disabled': true,
      style: isAndroid
        ? style
        : [
            {
              width: spinnerSizes[size],
              height: spinnerSizes[size],
            },
            { transform: [{ rotate }] },
            startByStyles,
            style,
          ],
    }),
    [isAndroid, spinnerSizes, startByStyles, style, rotate]
  );

  useEffect(() => {
    if (!isAndroid) {
      const spinAnimation = handleSpinAnimation();
      spinAnimation.start();

      return () => spinAnimation.stop();
    }
  }, [isAndroid, rotation, useNativeDriver, duration, easing]);

  return isAndroid ? (
    <ActivityIndicator
      ref={ref}
      testID='spinner'
      color={color}
      size={spinnerSizes[size]}
      animating={animating}
      hidesWhenStopped={hidesWhenStopped}
      {...commonViewProps}
      {...rest}
    />
  ) : (
    <Animated.View ref={ref} testID='spinner' {...commonViewProps} {...rest} />
  );
}

export default memo(Spinner);
