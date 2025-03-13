import { forwardRef, memo, useEffect, ForwardedRef } from 'react';
import { Animated, View } from 'react-native';
import { colors, spacings } from '@aero-ui/tokens';

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
    style,
    ...rest
  } = props;

  const { activated, duration, useNativeDriver } = useSkeleton();

  const background = new Animated.Value(0, {
    useNativeDriver: isTypeBoolean(nodeUseNativeDriver)
      ? nodeUseNativeDriver
      : useNativeDriver,
  });

  function handleBackgroundAnimation(): Animated.CompositeAnimation {
    const commonAnimationProps: Omit<
      Animated.TimingAnimationConfig,
      'toValue'
    > = {
      duration: isTypeNumber(nodeDuration) ? nodeDuration : duration,
      useNativeDriver: isTypeBoolean(nodeUseNativeDriver)
        ? nodeUseNativeDriver
        : useNativeDriver,
    };

    return Animated.loop(
      Animated.sequence([
        Animated.timing(background, {
          toValue: 1,
          ...commonAnimationProps,
        }),
        Animated.timing(background, {
          toValue: 0,
          ...commonAnimationProps,
        }),
      ])
    );
  }

  const backgroundColor = background.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.black[100], colors.white[100]],
  });

  useEffect(() => {
    const backgroundAnimation = handleBackgroundAnimation();

    const isNodeActive = isBoolean(nodeActivated) && nodeActivated;

    if (isNodeActive) backgroundAnimation.start();
    else if (activated) backgroundAnimation.start();
    else backgroundAnimation.stop();

    return () => backgroundAnimation.stop();
  }, [nodeActivated, activated, background, useNativeDriver, duration]);

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
      style={[{ width, height, backgroundColor }, styles.skeleton, style]}
      {...rest}
    />
  );
});

export default memo(Node);
