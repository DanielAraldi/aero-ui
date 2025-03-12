import { DimensionValue, ViewProps } from 'react-native';
import {
  BorderRadiusKeysType,
  FontSizesKeysType,
  LineHeightsKeysType,
} from '@aero-ui/tokens';

export type SkeletonRoundType = DimensionValue | BorderRadiusKeysType;

export type SkeletonFontSizeType = number | FontSizesKeysType;

export type SkeletonLineHeightType = number | LineHeightsKeysType;

export type SkeletonContextProps = Pick<
  SkeletonProps,
  'activated' | 'duration' | 'useNativeDriver'
>;

export interface SkeletonProps extends ViewProps {
  /**
   * @description Whether to show the skeleton or hide it.
   *
   * @default true
   *
   * @since 1.4.0
   */
  activated?: boolean;

  /**
   * @description This property is used to control the duration of the
   * skeleton animation.
   *
   * @default 1500
   *
   * @since 1.4.0
   */
  duration?: number;

  /**
   * @description This property determines if the spinner animation to be
   * executed using native thread UI or JavaScript.
   *
   * @default true
   *
   * @since 1.4.0
   */
  useNativeDriver?: boolean;
}

export interface SkeletonNodeProps extends SkeletonProps {
  /**
   * @description This property set width of the skeleton.
   *
   * @default '100%'
   *
   * @since 1.4.0
   */
  width?: DimensionValue;

  /**
   * @description This property set height of the skeleton.
   *
   * @default 256
   *
   * @since 1.4.0
   */
  height?: DimensionValue;
}

export interface SkeletonImageProps extends SkeletonProps {
  /**
   * @description This property set width of the skeleton.
   *
   * @default 256
   *
   * @since 1.4.0
   */
  width?: DimensionValue;

  /**
   * @description This property set height of the skeleton.
   *
   * @default 256
   *
   * @since 1.4.0
   */
  height?: DimensionValue;

  /**
   * @description This property set radius of the skeleton. You can set border
   * radius via `style` property.
   *
   * @default 'full'
   *
   * @since 1.4.0
   */
  round?: SkeletonRoundType;
}

export interface SkeletonTextProps extends SkeletonProps {
  /**
   * @description This property set width of the skeleton.
   *
   * @default '100%'
   *
   * @since 1.4.0
   */
  width?: DimensionValue;

  /**
   * @description This property set height of the skeleton.
   *
   * @default 64
   *
   * @since 1.4.0
   */
  height?: DimensionValue;

  /**
   * @description This property set font size of the skeleton. Whether font
   * size to be `number` the line height **will not be applied**.
   *
   * @default 'base'
   *
   * @since 1.4.0
   */
  fontSize?: SkeletonFontSizeType;

  /**
   * @description This property set line height of the skeleton. Whether font
   * size to be `number` the line height **will not be applied**.
   *
   * @default 'base'
   *
   * @since 1.4.0
   */
  lineHeight?: SkeletonLineHeightType;

  /**
   * @description This property set rows quantity of the skeleton text.
   *
   * @default 1
   *
   * @since 1.4.0
   */
  rows?: number;

  /**
   * @description This property represents how much space will be filled in
   * the last line.
   *
   * @default '100%'
   *
   * @since 1.4.0
   */
  fillInTheEnd?: DimensionValue;
}
