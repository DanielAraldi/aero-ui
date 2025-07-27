import { memo, useEffect, useMemo } from 'react';
import { Animated, Easing, View, StyleSheet } from 'react-native';

import { SkeletonProps } from '../../@types';
import { makeStyles } from './styles';
import { borderWidths, colors } from '@aero-ui/tokens';

function Skeleton(props: SkeletonProps) {
  const {
    width = 'auto',
    height = 'auto',
    round = 'none',
    duration = 2000,
    activated = true,
    useNativeDriver = false,
    easing = Easing.bezier(0.4, 0, 0.6, 1),
    style,
    children,
    ref,
    ...rest
  } = props;

  const pointerEvents = activated ? 'none' : 'auto';

  const overshadow = new Animated.Value(0, {
    useNativeDriver,
  });

  function handleOverColorAnimation(): Animated.CompositeAnimation {
    const commonTimingAnimationProps: Omit<
      Animated.TimingAnimationConfig,
      'toValue'
    > = {
      duration,
      useNativeDriver,
      easing,
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

  const overColor = overshadow.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.gray[200], colors.gray[300]],
  });

  const styles = useMemo(
    () =>
      makeStyles({
        width,
        height,
        activated,
        round,
      }),
    [width, height, activated, round]
  );

  useEffect(() => {
    const overColorAnimation = handleOverColorAnimation();

    if (activated) overColorAnimation.start();
    else overColorAnimation.stop();

    return () => overColorAnimation.stop();
  }, [activated, duration, useNativeDriver, easing]);

  return activated ? (
    <View
      ref={ref}
      testID='skeleton'
      accessible
      accessibilityRole='none'
      accessibilityLabel='Loading'
      accessibilityState={{ disabled: true }}
      aria-label='Loading'
      aria-disabled
      pointerEvents={pointerEvents}
      style={[styles.container, style]}
      {...rest}
    >
      <Animated.View
        testID='animation'
        pointerEvents='none'
        style={[
          {
            backgroundColor: overColor,
            borderColor: overColor,
            borderWidth: borderWidths.px,
          },
          StyleSheet.absoluteFill,
          styles.skeleton,
        ]}
      />

      {children}
    </View>
  ) : (
    children
  );
}

export default memo(Skeleton);
