import { useContext } from 'react';

import { RootContext } from '../Root';
import { SkeletonContextProps } from '../../../@types';

export function useSkeleton(): SkeletonContextProps {
  return useContext(RootContext);
}
