import React, {
  Children,
  ForwardedRef,
  forwardRef,
  isValidElement,
  memo,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import {
  Text as RNText,
  ActivityIndicator,
  Animated,
  ColorValue,
  GestureResponderEvent,
  TouchableHighlight,
  View,
} from 'react-native';
import { colors } from '@aero-ui/tokens';

import { Spinner, Text } from '../../atoms';
import { ButtonProps, ButtonVariantType } from '../../@types';
import { makeStyles } from './styles';

const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<TouchableHighlight>) => {
    const {
      variant = 'primary',
      title = 'Title',
      scale = 0.98,
      duration = 150,
      hugWidth = true,
      useNativeDriver = true,
      loading = false,
      bordered = false,
      disabled = false,
      activeOpacity = 1,
      underlayColor,
      children,
      style,
      onPressIn,
      onPressOut,
      ...rest
    } = props;

    const [isPressed, setIsPressed] = useState<boolean>(false);

    const measurement = new Animated.Value(0, { useNativeDriver });
    const spinnerColorKey = variant === 'ghost' ? 'black' : 'white';
    const shouldDisableActions = disabled || loading;
    let customSpinner: ReactNode = null;
    let customText: ReactNode = null;

    function handleScaleAnimation(): Animated.CompositeAnimation {
      return Animated.timing(measurement, {
        toValue: isPressed ? 1 : 0,
        duration,
        useNativeDriver,
      });
    }

    function handlePressIn(event: GestureResponderEvent) {
      if (shouldDisableActions) return;

      setIsPressed(true);
      onPressIn?.(event);
    }

    function handlePressOut(event: GestureResponderEvent) {
      if (shouldDisableActions) return;

      setIsPressed(false);
      onPressOut?.(event);
    }

    const underlayColors: Record<ButtonVariantType, ColorValue> = {
      danger: colors.red[400],
      ghost: 'transparent',
      neutral: colors.neutral[400],
      primary: colors.blue[400],
      success: colors.green[400],
      warning: colors.yellow[400],
    };

    const styles = makeStyles({
      bordered,
      disabled,
      hugWidth,
      loading,
      variant,
      pressed: isPressed,
    });

    const size = measurement.interpolate({
      inputRange: [0, 1],
      outputRange: [1, scale],
    });

    Children.forEach(children, child => {
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

    useEffect(() => {
      const scaleAnimation = handleScaleAnimation();

      if (!shouldDisableActions) scaleAnimation.start();

      return () => scaleAnimation.stop();
    }, [shouldDisableActions, isPressed]);

    return (
      <Animated.View
        style={[styles.container, { transform: [{ scale: size }] }]}
      >
        <TouchableHighlight
          ref={ref}
          accessible
          accessibilityRole='button'
          accessibilityState={{
            disabled: shouldDisableActions,
            selected: isPressed,
          }}
          aria-disabled={shouldDisableActions}
          aria-selected={isPressed}
          activeOpacity={activeOpacity}
          underlayColor={underlayColor || underlayColors[variant]}
          disabled={shouldDisableActions}
          style={[styles.button, style]}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          {...rest}
        >
          <View style={styles.wrapper}>
            {loading
              ? customSpinner || (
                  <Spinner
                    variant='half'
                    size='small'
                    startBy='bottom'
                    color={colors[spinnerColorKey][100]}
                    overlayColor={colors[spinnerColorKey][25]}
                  />
                )
              : customText || <Text style={styles.text}>{title}</Text>}
          </View>
        </TouchableHighlight>
      </Animated.View>
    );
  }
);

export default memo(Button);
