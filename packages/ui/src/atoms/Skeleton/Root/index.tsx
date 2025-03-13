import { createContext, memo } from 'react';
import { View } from 'react-native';

import { SkeletonContextProps, SkeletonProps } from '../../../@types';

export const RootContext = createContext({} as SkeletonContextProps);

function Root(props: SkeletonProps) {
  const {
    children,
    activated = true,
    duration = 1500,
    useNativeDriver = true,
    ...rest
  } = props;

  return (
    <RootContext.Provider
      value={{
        activated,
        duration,
        useNativeDriver,
      }}
    >
      <View testID='root' {...rest}>
        {children}
      </View>
    </RootContext.Provider>
  );
}

export default memo(Root);
