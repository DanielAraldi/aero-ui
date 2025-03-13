import { forwardRef, memo, useEffect, ForwardedRef } from 'react';
import { Animated, View } from 'react-native';
import { spacings } from '@aero-ui/tokens';

import { SkeletonNodeProps } from '../../../@types';
import { isBoolean, isTypeBoolean, isTypeNumber } from '../../../utils';
import { useSkeleton } from '../hooks';
import { styles } from './styles';

const Node = forwardRef((props: SkeletonNodeProps, ref: ForwardedRef<View>) => {
  const {
    width = '100%',
    height = spacings[64],
    activated: nodeActivated,
    duration: nodeDuration,
    useNativeDriver: nodeUseNativeDriver,
    easing: nodeEasing,
    style,
    ...rest
  } = props;

  const { activated, duration, useNativeDriver, easing } = useSkeleton();

  const overshadow = new Animated.Value(0, {
    useNativeDriver: isTypeBoolean(nodeUseNativeDriver)
      ? nodeUseNativeDriver
      : useNativeDriver,
  });

  function handleOpacityAnimation(): Animated.CompositeAnimation {
    const commonTimingAnimationProps: Omit<
      Animated.TimingAnimationConfig,
      'toValue'
    > = {
      duration: isTypeNumber(nodeDuration) ? nodeDuration : duration,
      useNativeDriver: isTypeBoolean(nodeUseNativeDriver)
        ? nodeUseNativeDriver
        : useNativeDriver,
      easing: nodeEasing || easing,
    };

    return Animated.loop(
      Animated.sequence([
        Animated.timing(overshadow, {
          toValue: 1,
          ...commonTimingAnimationProps,
        }),
        Animated.timing(overshadow, {
          toValue: 0,
          ...commonTimingAnimationProps,
        }),
      ])
    );
  }

  const opacity = overshadow.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.5],
  });

  useEffect(() => {
    const opacityAnimation = handleOpacityAnimation();

    const isNodeActive = isBoolean(nodeActivated) && nodeActivated;

    if (isNodeActive) opacityAnimation.start();
    else if (activated) opacityAnimation.start();
    else opacityAnimation.stop();

    return () => opacityAnimation.stop();
  }, [nodeActivated, activated, opacity, useNativeDriver, duration]);

  return (
    <Animated.View
      ref={ref}
      testID='node'
      accessible
      accessibilityRole='none'
      accessibilityLabel='Loading'
      accessibilityState={{ disabled: true }}
      aria-label='Loading'
      aria-disabled
      style={[{ width, height, opacity }, styles.skeleton, style]}
      {...rest}
    />
  );
});

export default memo(Node);
