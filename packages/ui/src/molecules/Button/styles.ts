import { ColorValue, StyleSheet } from 'react-native';
import {
  borderRadius,
  borderWidths,
  colors,
  opacities,
  spacings,
} from '@aero-ui/tokens';

import { ButtonVariantType } from '../../@types';

interface MakeStyleProps {
  variant: ButtonVariantType;
  hugWidth: boolean;
  disabled: boolean;
  loading: boolean;
  pressed: boolean;
  bordered: boolean;
}

type MakeColorProps = Omit<MakeStyleProps, 'hugWidth' | 'bordered'>;

type MakeOpacityProps = Pick<MakeStyleProps, 'disabled' | 'pressed'>;

const backgroundColors: Record<ButtonVariantType, ColorValue> = {
  primary: colors.blue[500],
  secondary: colors.white[100],
  tertiary: colors.stone[900],
  success: colors.green[500],
  ghost: 'transparent',
  danger: colors.red[500],
  warning: colors.yellow[500],
  neutral: colors.neutral[500],
};

const pressedBackgroundColors: Record<ButtonVariantType, ColorValue> = {
  primary: colors.blue[400],
  secondary: colors.white[85],
  tertiary: colors.stone[800],
  danger: colors.red[400],
  ghost: 'transparent',
  neutral: colors.neutral[400],
  success: colors.green[400],
  warning: colors.yellow[400],
};

const disabledBackgroundColors: Record<ButtonVariantType, ColorValue> = {
  primary: colors.blue[300],
  secondary: colors.white[85],
  tertiary: colors.stone[700],
  danger: colors.red[300],
  ghost: 'transparent',
  neutral: colors.neutral[300],
  success: colors.green[300],
  warning: colors.yellow[300],
};

const pressedBorderColors: Record<ButtonVariantType, ColorValue> = {
  primary: colors.blue[100],
  secondary: colors.black[85],
  tertiary: colors.stone[100],
  success: colors.green[100],
  ghost: colors.black[85],
  danger: colors.red[100],
  warning: colors.yellow[100],
  neutral: colors.neutral[100],
};

const disabledBorderColors: Record<ButtonVariantType, ColorValue> = {
  primary: colors.blue[50],
  secondary: colors.black[50],
  tertiary: colors.stone[50],
  success: colors.green[50],
  ghost: colors.black[50],
  danger: colors.red[50],
  warning: colors.yellow[50],
  neutral: colors.neutral[50],
};

function getBackgroundColor(props: MakeColorProps): ColorValue {
  const { variant, disabled, loading, pressed } = props;

  if (loading) return backgroundColors[variant];
  else if (disabled) return disabledBackgroundColors[variant];
  else if (pressed) return pressedBackgroundColors[variant];
  else return backgroundColors[variant];
}

function getBorderColor(props: MakeColorProps): ColorValue {
  const { variant, disabled, loading, pressed } = props;

  const isDark = variant === 'ghost' || variant === 'secondary';
  const borderColor = colors[isDark ? 'black' : 'white'][100];

  if (loading) return borderColor;
  else if (disabled) return disabledBorderColors[variant];
  else if (pressed) return pressedBorderColors[variant];
  else return borderColor;
}

function getWrapperOpacity(props: MakeOpacityProps): number {
  const { disabled, pressed } = props;

  if (disabled) return opacities[90];
  else if (pressed) return opacities[95];
  else return opacities[100];
}

export const makeStyles = (props: MakeStyleProps) => {
  const { variant, hugWidth, bordered, disabled, loading, pressed } = props;

  const isDark = variant === 'ghost' || variant === 'secondary';
  const shouldHug = hugWidth || loading;

  return StyleSheet.create({
    container: {
      width: shouldHug ? '100%' : 'auto',
      height: spacings[16],
    },

    button: {
      width: 'auto',
      height: '100%',

      justifyContent: 'center',
      alignItems: 'center',

      paddingVertical: spacings[2],
      paddingHorizontal: spacings[shouldHug ? 2 : 5],

      backgroundColor: getBackgroundColor({
        variant,
        disabled,
        loading,
        pressed,
      }),

      ...(bordered && {
        borderWidth: borderWidths.px,
        borderColor: getBorderColor({ variant, disabled, loading, pressed }),
      }),

      borderRadius: borderRadius.full,
    },

    wrapper: {
      opacity: getWrapperOpacity({ disabled, pressed }),
    },

    text: {
      color: colors[isDark ? 'black' : 'white'][100],
    },
  });
};
