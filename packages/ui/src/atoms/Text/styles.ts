import { StyleSheet } from 'react-native';
import {
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from '@aero-ui/tokens';

const immutableStyles = {
  fontWeight: fontWeights.regular,
  letterSpacing: letterSpacings.normal,
};

export const styles = StyleSheet.create({
  'text-xs': {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    ...immutableStyles,
  },

  'text-sm': {
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
    ...immutableStyles,
  },

  'text-base': {
    fontSize: fontSizes.base,
    lineHeight: lineHeights.base,
    ...immutableStyles,
  },

  'text-lg': {
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.lg,
    ...immutableStyles,
  },

  'text-xl': {
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
    ...immutableStyles,
  },

  'text-2xl': {
    fontSize: fontSizes['2xl'],
    lineHeight: lineHeights['2xl'],
    ...immutableStyles,
  },

  'text-3xl': {
    fontSize: fontSizes['3xl'],
    lineHeight: lineHeights['3xl'],
    ...immutableStyles,
  },

  'text-4xl': {
    fontSize: fontSizes['4xl'],
    lineHeight: lineHeights['4xl'],
    ...immutableStyles,
  },

  'text-5xl': {
    fontSize: fontSizes['5xl'],
    lineHeight: lineHeights['5xl'],
    ...immutableStyles,
  },

  'text-6xl': {
    fontSize: fontSizes['6xl'],
    lineHeight: lineHeights['6xl'],
    ...immutableStyles,
  },

  'text-7xl': {
    fontSize: fontSizes['7xl'],
    lineHeight: lineHeights['7xl'],
    ...immutableStyles,
  },

  'text-8xl': {
    fontSize: fontSizes['8xl'],
    lineHeight: lineHeights['8xl'],
    ...immutableStyles,
  },

  'text-9xl': {
    fontSize: fontSizes['9xl'],
    lineHeight: lineHeights['9xl'],
    ...immutableStyles,
  },
});
