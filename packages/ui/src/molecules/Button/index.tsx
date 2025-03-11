import {
  Children,
  ForwardedRef,
  forwardRef,
  isValidElement,
  memo,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  Text as RNText,
  ActivityIndicator,
  Animated,
  GestureResponderEvent,
  View,
  Pressable,
} from 'react-native';
import { colors } from '@aero-ui/tokens';

import { Spinner, Text } from '../../atoms';
import { ButtonProps } from '../../@types';
import { makeStyles } from './styles';

const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<View>) => {
  const {
    variant = 'primary',
    toScale = 0.98,
    duration = 150,
    hugWidth = true,
    useNativeDriver = true,
    loading = false,
    bordered = false,
    disabled = false,
    children,
    style,
    onPressIn,
    onPressOut,
    ...rest
  } = props;

  const [isPressed, setIsPressed] = useState<boolean>(false);

  const measurement = new Animated.Value(0, { useNativeDriver });
  const spinnerColorKey =
    variant === 'ghost' || variant === 'secondary' ? 'black' : 'white';
  const shouldDisableActions = disabled || loading;
  let customSpinner: ReactNode = null;
  let customText: ReactNode = null;

  Children.toArray(children).forEach(child => {
    if (isValidElement(child)) {
      switch (child.type) {
        case ActivityIndicator:
        case Spinner: {
          customSpinner = child;
          break;
        }
        case RNText:
        case Text: {
          customText = child;
          break;
        }
        default:
          break;
      }
    }
  });

  function handleScaleAnimation(): Animated.CompositeAnimation {
    return Animated.timing(measurement, {
      toValue: isPressed ? 1 : 0,
      duration,
      useNativeDriver,
    });
  }

  const handlePressIn = useCallback(
    (event: GestureResponderEvent) => {
      if (shouldDisableActions) return;

      setIsPressed(true);
      onPressIn?.(event);
    },
    [shouldDisableActions]
  );

  const handlePressOut = useCallback(
    (event: GestureResponderEvent) => {
      if (shouldDisableActions) return;

      setIsPressed(false);
      onPressOut?.(event);
    },
    [shouldDisableActions]
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

  const size = measurement.interpolate({
    inputRange: [0, 1],
    outputRange: [1, toScale],
  });

  useEffect(() => {
    const scaleAnimation = handleScaleAnimation();

    if (!shouldDisableActions) scaleAnimation.start();

    return () => scaleAnimation.stop();
  }, [shouldDisableActions, isPressed]);

  return (
    <Animated.View
      testID='wrapper'
      style={[styles.container, { transform: [{ scale: size }] }]}
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
          {loading
            ? customSpinner || (
                <Spinner
                  testID='spinner'
                  variant='half'
                  size='small'
                  startBy='bottom'
                  color={colors[spinnerColorKey][100]}
                  overlayColor={colors[spinnerColorKey][25]}
                  useNativeDriver={useNativeDriver}
                />
              )
            : customText || (
                <Text testID='text' style={styles.text}>
                  {children}
                </Text>
              )}
        </View>
      </Pressable>
    </Animated.View>
  );
});

export default memo(Button);
