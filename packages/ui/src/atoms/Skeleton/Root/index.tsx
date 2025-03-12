import { createContext, memo, useContext } from 'react';
import { View } from 'react-native';

import { SkeletonContextProps, SkeletonProps } from '../../../@types';

const RootContext = createContext({} as SkeletonContextProps);

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

export function useSkeleton(): SkeletonContextProps {
  return useContext(RootContext);
}

export default memo(Root);
