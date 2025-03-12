import { createContext, memo, useContext } from 'react';

import { SkeletonProps } from '../../../@types';
import { View } from 'react-native';

const RootContext = createContext({} as SkeletonProps);

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

export function useSkeleton(): SkeletonProps {
  return useContext(RootContext);
}

export default memo(Root);
