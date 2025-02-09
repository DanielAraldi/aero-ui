import { ColorValue, StyleSheet } from 'react-native';
import { borderWidths, colors, spacings } from '@aero-ui/tokens';

import { ButtonVariantType } from '../../@types';

interface MakeStyleProps {
  variant: ButtonVariantType;
  hugWidth: boolean;
  disabled: boolean;
  loading: boolean;
  pressed: boolean;
  bordered: boolean;
}

const backgroundColors: Record<ButtonVariantType, ColorValue> = {
  primary: colors.blue[500],
  success: colors.green[500],
  ghost: 'transparent',
  danger: colors.red[500],
  warning: colors.yellow[500],
  neutral: colors.neutral[500],
};

const pressedBackgroundColors: Record<ButtonVariantType, ColorValue> = {
  danger: colors.red[400],
  ghost: 'transparent',
  neutral: colors.neutral[400],
  primary: colors.blue[400],
  success: colors.green[400],
  warning: colors.yellow[400],
};

const disabledBackgroundColors: Record<ButtonVariantType, ColorValue> = {
  danger: colors.red[300],
  ghost: 'transparent',
  neutral: colors.neutral[300],
  primary: colors.blue[300],
  success: colors.green[300],
  warning: colors.yellow[300],
};

const pressedBorderColors: Record<ButtonVariantType, ColorValue> = {
  primary: colors.blue[100],
  success: colors.green[100],
  ghost: colors.white[85],
  danger: colors.red[100],
  warning: colors.yellow[100],
  neutral: colors.neutral[100],
};

const disabledBorderColors: Record<ButtonVariantType, ColorValue> = {
  primary: colors.blue[50],
  success: colors.green[50],
  ghost: colors.white[60],
  danger: colors.red[50],
  warning: colors.yellow[50],
  neutral: colors.neutral[50],
};

function getBackgroundColor(
  props: Omit<MakeStyleProps, 'hugWidth' | 'bordered'>
): ColorValue {
  const { variant, disabled, pressed, loading } = props;

  if (loading) return backgroundColors[variant];
  else if (disabled) return disabledBackgroundColors[variant];
  else if (pressed) return pressedBackgroundColors[variant];
  else return backgroundColors[variant];
}

function getBorderColor(
  props: Omit<MakeStyleProps, 'hugWidth' | 'bordered'>
): ColorValue {
  const { variant, disabled, pressed, loading } = props;

  if (loading) return colors.white[100];
  else if (disabled) return disabledBorderColors[variant];
  else if (pressed) return pressedBorderColors[variant];
  else return colors.white[100];
}

function getWrapperOpacity(
  props: Pick<MakeStyleProps, 'disabled' | 'pressed'>
): number {
  const { disabled, pressed } = props;

  if (disabled) return 0.7;
  else if (pressed) return 0.8;
  else return 1;
}

export const makeStyles = (props: MakeStyleProps) => {
  const { variant, hugWidth, bordered, disabled, loading, pressed } = props;

  return StyleSheet.create({
    container: {
      width: hugWidth ? '100%' : 'auto',
      height: spacings[16],
    },

    button: {
      width: 'auto',
      height: '100%',

      justifyContent: 'center',
      alignItems: 'center',

      padding: spacings[2],

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
    },

    wrapper: {
      opacity: getWrapperOpacity({ disabled, pressed }),
    },

    text: {
      color: colors.white[100],
    },
  });
};
