import React, { memo, useEffect } from 'react';
import { Easing, Animated } from 'react-native';
import { colors, SpacingObjectType } from '@aero-ui/tokens';

import { SpinnerSizeType, SpinnerProps } from '../../@types';
import { makeStyle } from './styles';

function Spinner(props: SpinnerProps) {
  const {
    variant = 'unique',
    color = colors.black[100],
    overlayColor = 'transparent',
    size = 'normal',
    startBy = 'left',
    duration = 1000,
    easing = Easing.linear,
  } = props;

  const rotation = new Animated.Value(0, { useNativeDriver: true });

  function handleRotateAnimation(): Animated.CompositeAnimation {
    return Animated.loop(
      Animated.timing(rotation, {
        toValue: 360,
        useNativeDriver: true,
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

  useEffect(() => {
    handleRotateAnimation().start();

    return () => {
      handleRotateAnimation().stop();
      rotation.stopAnimation();
    };
  }, [props]);

  return (
    <Animated.View
      accessible
      accessibilityRole='none'
      accessibilityLabel='Loading...'
      aria-label='Loading...'
      style={[
        {
          width: spinnerSizes[size],
          height: spinnerSizes[size],

          ...startByStyles,
        },
        { transform: [{ rotate }] },
      ]}
    />
  );
}

export default memo(Spinner);
