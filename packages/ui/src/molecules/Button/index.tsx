import { memo, useCallback, useMemo, useRef, useState } from 'react';
import { Animated, GestureResponderEvent, View, Pressable } from 'react-native';
import { colors } from '@aero-ui/tokens';

import { Spinner, Text } from '../../atoms';
import { ButtonProps } from '../../@types';
import { makeStyles } from './styles';

function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    title = 'Title',
    toScale = 0.94,
    hugWidth = true,
    useNativeDriver = false,
    loading = false,
    bordered = false,
    disabled = false,
    style,
    ref,
    spinnerProps,
    textProps,
    pressInAnimateProps,
    pressOutAnimateProps,
    onPressIn,
    onPressOut,
    ...rest
  } = props;

  const [isPressed, setIsPressed] = useState<boolean>(false);

  const scale = useRef(new Animated.Value(1, { useNativeDriver })).current;
  const spinnerColorKey =
    variant === 'ghost' || variant === 'secondary' ? 'black' : 'white';
  const shouldDisableActions = disabled || loading;

  const handlePressIn = useCallback(
    (event: GestureResponderEvent) => {
      if (shouldDisableActions) return;

      setIsPressed(true);
      onPressIn?.(event);

      const animation = Animated.spring(scale, {
        useNativeDriver,
        toValue: toScale,
        ...pressInAnimateProps,
      });

      animation.start(isFinished => {
        if (isFinished) animation.stop();
      });
    },
    [toScale, pressInAnimateProps, useNativeDriver, shouldDisableActions, scale]
  );

  const handlePressOut = useCallback(
    (event: GestureResponderEvent) => {
      if (shouldDisableActions) return;

      setIsPressed(false);
      onPressOut?.(event);

      const animation = Animated.spring(scale, {
        useNativeDriver,
        toValue: 1,
        ...pressOutAnimateProps,
      });

      animation.start(isFinished => {
        if (isFinished) animation.stop();
      });
    },
    [
      toScale,
      pressOutAnimateProps,
      useNativeDriver,
      shouldDisableActions,
      scale,
    ]
  );

  const styles = useMemo(
    () =>
      makeStyles({
        bordered,
        disabled,
        hugWidth,
        loading,
        variant,
        pressed: isPressed,
      }),
    [variant, disabled, loading, hugWidth, isPressed, bordered]
  );

  return (
    <Animated.View
      testID='wrapper'
      style={[styles.container, { transform: [{ scale }] }]}
    >
      <Pressable
        ref={ref}
        testID='pressable'
        accessible
        accessibilityRole='button'
        accessibilityState={{
          disabled: shouldDisableActions,
          selected: isPressed,
          busy: loading,
        }}
        aria-disabled={shouldDisableActions}
        aria-selected={isPressed}
        disabled={shouldDisableActions}
        style={[styles.button, style]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        {...rest}
      >
        <View testID='content' style={styles.wrapper}>
          {loading ? (
            <Spinner
              testID='spinner'
              variant='half'
              size='small'
              startBy='bottom'
              color={colors[spinnerColorKey][100]}
              overlayColor={colors[spinnerColorKey][25]}
              useNativeDriver={useNativeDriver}
              {...spinnerProps}
            />
          ) : (
            <Text testID='text' style={styles.text} {...textProps}>
              {title}
            </Text>
          )}
        </View>
      </Pressable>
    </Animated.View>
  );
}

export default memo(Button);
