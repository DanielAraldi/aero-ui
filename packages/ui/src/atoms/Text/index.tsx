import React, { memo, forwardRef, ForwardedRef } from 'react';
import { Text as ReactNativeText } from 'react-native';

import { TextProps } from '../../@types';
import { styles } from './styles';

const TextXs = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    return (
      <ReactNativeText ref={ref} style={[styles['text-xs'], style]} {...rest} />
    );
  }
);

const TextSm = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    return (
      <ReactNativeText ref={ref} style={[styles['text-sm'], style]} {...rest} />
    );
  }
);

const TextBase = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    return (
      <ReactNativeText
        ref={ref}
        style={[styles['text-base'], style]}
        {...rest}
      />
    );
  }
);

const TextLg = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    return (
      <ReactNativeText ref={ref} style={[styles['text-lg'], style]} {...rest} />
    );
  }
);

const TextXl = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    return (
      <ReactNativeText ref={ref} style={[styles['text-xl'], style]} {...rest} />
    );
  }
);

const Text2xl = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    return (
      <ReactNativeText
        ref={ref}
        style={[styles['text-2xl'], style]}
        {...rest}
      />
    );
  }
);

const Text3xl = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    return (
      <ReactNativeText
        ref={ref}
        style={[styles['text-3xl'], style]}
        {...rest}
      />
    );
  }
);

const Text4xl = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    return (
      <ReactNativeText
        ref={ref}
        style={[styles['text-4xl'], style]}
        {...rest}
      />
    );
  }
);

const Text5xl = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    return (
      <ReactNativeText
        ref={ref}
        style={[styles['text-5xl'], style]}
        {...rest}
      />
    );
  }
);

const Text6xl = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    return (
      <ReactNativeText
        ref={ref}
        style={[styles['text-6xl'], style]}
        {...rest}
      />
    );
  }
);

const Text7xl = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    return (
      <ReactNativeText
        ref={ref}
        style={[styles['text-7xl'], style]}
        {...rest}
      />
    );
  }
);

const Text8xl = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    return (
      <ReactNativeText
        ref={ref}
        style={[styles['text-8xl'], style]}
        {...rest}
      />
    );
  }
);

const Text9xl = forwardRef(
  (props: TextProps, ref: ForwardedRef<ReactNativeText>) => {
    const { style, ...rest } = props;

    return (
      <ReactNativeText
        ref={ref}
        style={[styles['text-9xl'], style]}
        {...rest}
      />
    );
  }
);

export const Text = {
  Xs: memo(TextXs),
  Sm: memo(TextSm),
  Base: memo(TextBase),
  Lg: memo(TextLg),
  Xl: memo(TextXl),
  '2xl': memo(Text2xl),
  '3xl': memo(Text3xl),
  '4xl': memo(Text4xl),
  '5xl': memo(Text5xl),
  '6xl': memo(Text6xl),
  '7xl': memo(Text7xl),
  '8xl': memo(Text8xl),
  '9xl': memo(Text9xl),
};
