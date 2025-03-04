import React, { memo, forwardRef, ForwardedRef } from 'react';
import { Text as RNText } from 'react-native';

import { TextProps } from '../../@types';
import { makeStyle } from './styles';

const Text = forwardRef((props: TextProps, ref: ForwardedRef<RNText>) => {
  const { variant = 'base', style, ...rest } = props;

  const { text } = makeStyle(variant);

  return (
    <RNText
      ref={ref}
      testID='text'
      accessible
      accessibilityRole='text'
      style={[text, style]}
      {...rest}
    />
  );
});

export default memo(Text);
