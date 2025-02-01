import React, { ForwardedRef, forwardRef, memo, useEffect } from 'react';
import { Easing, Animated, View, Platform } from 'react-native';
import { borderRadius, colors, SpacingObjectType } from '@aero-ui/tokens';

import { SpinnerSizeType, SpinnerProps } from '../../@types';
import { makeStyle } from './styles';

const Spinner = forwardRef((props: SpinnerProps, ref: ForwardedRef<View>) => {
  const {
    variant = 'unique',
    size = 'normal',
    startBy = 'left',
    color = colors.black[100],
    overlayColor = 'transparent',
    duration = 1000,
    useNativeDriver = true,
    easing = Easing.linear,
    style,
    ...rest
  } = props;

  const rotation = new Animated.Value(0, { useNativeDriver });

  function handleRotateAnimation(): Animated.CompositeAnimation {
    return Animated.loop(
      Animated.timing(rotation, {
        toValue: 360,
        useNativeDriver,
        duration,
        easing,
      })
    );
  }

  const rotate = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const startByStyles = makeStyle({ variant, color, overlayColor })[startBy];

  const spinnerSizes: Record<
    SpinnerSizeType,
    SpacingObjectType[keyof SpacingObjectType]
  > = {
    large: 40,
    normal: 32,
    small: 24,
  };

  const spinnerBorderRadius =
    Platform.OS === 'android' ? spinnerSizes[size] / 2 : borderRadius.full;

  useEffect(() => {
    handleRotateAnimation().start();

    return () => {
      handleRotateAnimation().stop();
      rotation.stopAnimation();
    };
  }, [props]);

  return (
    <Animated.View
      ref={ref}
      accessible
      accessibilityRole='none'
      accessibilityLabel='Loading'
      aria-label='Loading'
      style={[
        {
          width: spinnerSizes[size],
          height: spinnerSizes[size],

          borderRadius: spinnerBorderRadius,
        },
        { transform: [{ rotate }] },
        startByStyles,
        style,
      ]}
      {...rest}
    />
  );
});

export default memo(Spinner);
