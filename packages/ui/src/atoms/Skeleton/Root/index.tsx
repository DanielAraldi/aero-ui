import { createContext, memo } from 'react';
import { Easing, View } from 'react-native';

import { SkeletonContextProps, SkeletonProps } from '../../../@types';

export const RootContext = createContext({} as Required<SkeletonContextProps>);

function Root(props: SkeletonProps) {
  const {
    children,
    activated = true,
    duration = 2000,
    useNativeDriver = true,
    easing = Easing.bezier(0.4, 0, 0.6, 1),
    ...rest
  } = props;

  return (
    <RootContext.Provider
      value={{
        activated,
        duration,
        useNativeDriver,
        easing,
      }}
    >
      <View testID='root' {...rest}>
        {children}
      </View>
    </RootContext.Provider>
  );
}

export default memo(Root);
