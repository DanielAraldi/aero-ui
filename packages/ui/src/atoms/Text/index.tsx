import React, { memo, forwardRef, ForwardedRef } from 'react';
import { Text as ReactNativeText } from 'react-native';

import { TextProps } from '../../@types';
import { makeStyle } from './styles';

const TextXs = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    const { text } = makeStyle('xs');

    return (
      <ReactNativeText
        ref={ref}
        accessible
        accessibilityRole='text'
        style={[text, style]}
        {...rest}
      />
    );
  }
);

const TextSm = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    const { text } = makeStyle('sm');

    return (
      <ReactNativeText
        ref={ref}
        accessible
        accessibilityRole='text'
        style={[text, style]}
        {...rest}
      />
    );
  }
);

const TextBase = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    const { text } = makeStyle('base');

    return (
      <ReactNativeText
        ref={ref}
        accessible
        accessibilityRole='text'
        style={[text, style]}
        {...rest}
      />
    );
  }
);

const TextLg = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    const { text } = makeStyle('lg');

    return (
      <ReactNativeText
        ref={ref}
        accessible
        accessibilityRole='text'
        style={[text, style]}
        {...rest}
      />
    );
  }
);

const TextXl = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    const { text } = makeStyle('xl');

    return (
      <ReactNativeText
        ref={ref}
        accessible
        accessibilityRole='text'
        style={[text, style]}
        {...rest}
      />
    );
  }
);

const Text2xl = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    const { text } = makeStyle('2xl');

    return (
      <ReactNativeText
        ref={ref}
        accessible
        accessibilityRole='text'
        style={[text, style]}
        {...rest}
      />
    );
  }
);

const Text3xl = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    const { text } = makeStyle('3xl');

    return (
      <ReactNativeText
        ref={ref}
        accessible
        accessibilityRole='text'
        style={[text, style]}
        {...rest}
      />
    );
  }
);

const Text4xl = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    const { text } = makeStyle('4xl');

    return (
      <ReactNativeText
        ref={ref}
        accessible
        accessibilityRole='text'
        style={[text, style]}
        {...rest}
      />
    );
  }
);

const Text5xl = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    const { text } = makeStyle('5xl');

    return (
      <ReactNativeText
        ref={ref}
        accessible
        accessibilityRole='text'
        style={[text, style]}
        {...rest}
      />
    );
  }
);

const Text6xl = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    const { text } = makeStyle('6xl');

    return (
      <ReactNativeText
        ref={ref}
        accessible
        accessibilityRole='text'
        style={[text, style]}
        {...rest}
      />
    );
  }
);

const Text7xl = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    const { text } = makeStyle('7xl');

    return (
      <ReactNativeText
        ref={ref}
        accessible
        accessibilityRole='text'
        style={[text, style]}
        {...rest}
      />
    );
  }
);

const Text8xl = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    const { text } = makeStyle('8xl');

    return (
      <ReactNativeText
        ref={ref}
        accessible
        accessibilityRole='text'
        style={[text, style]}
        {...rest}
      />
    );
  }
);

const Text9xl = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    const { text } = makeStyle('9xl');

    return (
      <ReactNativeText
        ref={ref}
        accessible
        accessibilityRole='text'
        style={[text, style]}
        {...rest}
      />
    );
  }
);

export default {
  Xs: memo(TextXs),
  Sm: memo(TextSm),
  Base: memo(TextBase),
  Lg: memo(TextLg),
  Xl: memo(TextXl),
  X2l: memo(Text2xl),
  X3l: memo(Text3xl),
  X4l: memo(Text4xl),
  X5l: memo(Text5xl),
  X6l: memo(Text6xl),
  X7l: memo(Text7xl),
  X8l: memo(Text8xl),
  X9l: memo(Text9xl),
};
