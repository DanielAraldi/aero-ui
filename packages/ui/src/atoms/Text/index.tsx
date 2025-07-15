import { memo } from 'react';
import { Text as RNText } from 'react-native';

import { TextProps } from '../../@types';
import { makeStyle } from './styles';

function Text(props: TextProps) {
  const { variant = 'base', style, ref, ...rest } = props;

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
}

export default memo(Text);
