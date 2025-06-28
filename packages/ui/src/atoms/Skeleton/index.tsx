import { forwardRef, memo, useEffect, ForwardedRef, useMemo } from 'react';
import { Animated, Easing, View } from 'react-native';

import { SkeletonProps } from '../../@types';
import { makeStyles } from './styles';

const Skeleton = forwardRef((props: SkeletonProps, ref: ForwardedRef<View>) => {
  const {
    width = 'auto',
    height = 'auto',
    round = 'none',
    duration = 2000,
    activated = true,
    useNativeDriver = true,
    easing = Easing.bezier(0.4, 0, 0.6, 1),
    style,
    children,
    ...rest
  } = props;

  const overshadow = new Animated.Value(0, {
    useNativeDriver,
  });

  function handleOpacityAnimation(): Animated.CompositeAnimation {
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

  const opacity = overshadow.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.5],
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

  const renderChildren = useMemo(
    () => (activated ? null : children),
    [activated, children]
  );

  useEffect(() => {
    const opacityAnimation = handleOpacityAnimation();

    if (activated) opacityAnimation.start();
    else opacityAnimation.stop();

    return () => opacityAnimation.stop();
  }, [activated]);

  return (
    <Animated.View
      ref={ref}
      testID='skeleton'
      accessible
      accessibilityRole='none'
      accessibilityLabel='Loading'
      accessibilityState={{ disabled: true }}
      aria-label='Loading'
      aria-disabled
      style={[{ opacity }, styles.skeleton, style]}
      {...rest}
    >
      {renderChildren}
    </Animated.View>
  );
});

export default memo(Skeleton);
