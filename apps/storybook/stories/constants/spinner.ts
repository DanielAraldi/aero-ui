import {
  SpinnerSizeType,
  SpinnerStartByType,
  SpinnerVariantType,
} from '@aero-ui/ui';

export const spinnerVariants: SpinnerVariantType[] = [
  'unique',
  'double',
  'half',
] as const;

export const spinnerSizes: SpinnerSizeType[] = [
  'small',
  'normal',
  'large',
] as const;

export const spinnerStartBy: SpinnerStartByType[] = [
  'left',
  'right',
  'top',
  'bottom',
];
