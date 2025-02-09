import React, {
  ForwardedRef,
  forwardRef,
  memo,
  useEffect,
  useState,
} from 'react';
import {
  Animated,
  GestureResponderEvent,
  TouchableHighlight,
  View,
} from 'react-native';

import { Spinner, Text } from '../../atoms';
import { ButtonProps } from '../../@types';
import { makeStyles } from './styles';
import { colors } from '@aero-ui/tokens';

const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<TouchableHighlight>) => {
    const {
      variant = 'primary',
      title = 'Title',
      hugWidth = true,
      useNativeDriver = true,
      loading = false,
      bordered = false,
      disabled = false,
      activeOpacity = 1,
      text,
      spinner,
      style,
      onPressIn,
      onPressOut,
      ...rest
    } = props;

    const [isPressed, setIsPressed] = useState<boolean>(false);

    const scale = new Animated.Value(1, { useNativeDriver });
    const shouldEnableActions = disabled || loading;

    function handleScaleAnimation(): Animated.CompositeAnimation {
      return Animated.timing(scale, {
        toValue: isPressed ? 0.95 : 1,
        duration: 250,
        useNativeDriver,
      });
    }

    function handlePressIn(event: GestureResponderEvent) {
      if (shouldEnableActions) return;

      setIsPressed(true);
      onPressIn?.(event);
    }

    function handlePressOut(event: GestureResponderEvent) {
      if (shouldEnableActions) return;

      setIsPressed(false);
      onPressOut?.(event);
    }

    const styles = makeStyles({
      bordered,
      disabled,
      hugWidth,
      loading,
      variant,
      pressed: isPressed,
    });

    useEffect(() => {
      const scaleAnimation = handleScaleAnimation();

      if (loading) scaleAnimation.start();

      return () => scaleAnimation.stop();
    }, [loading, isPressed]);

    return (
      <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
        <TouchableHighlight
          ref={ref}
          accessible
          accessibilityRole='button'
          accessibilityState={{
            disabled: shouldEnableActions,
            selected: isPressed,
          }}
          aria-disabled={shouldEnableActions}
          aria-selected={isPressed}
          activeOpacity={activeOpacity}
          disabled={shouldEnableActions}
          style={[styles.button, style]}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          {...rest}
        >
          <View style={styles.wrapper}>
            {loading
              ? spinner || (
                  <Spinner
                    variant='half'
                    size='small'
                    startBy='bottom'
                    color={colors.white[100]}
                    overlayColor={colors.white[25]}
                  />
                )
              : text || <Text.Base style={styles.text}>{title}</Text.Base>}
          </View>
        </TouchableHighlight>
      </Animated.View>
    );
  }
);

export default memo(Button);
