import { useContext } from 'react';

import { RootContext } from '../Root';
import { SkeletonContextProps } from '../../../@types';

export function useSkeleton(): Required<SkeletonContextProps> {
  return useContext(RootContext);
}
