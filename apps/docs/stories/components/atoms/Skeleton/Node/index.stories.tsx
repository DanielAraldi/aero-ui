import { Easing } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { Skeleton, SkeletonNodeProps, Text } from '@aero-ui/ui';
import { spacings } from '@aero-ui/tokens';

import { dimensions } from '../../../../constants';
import { globalStyles } from '../../../../styles';
import { styles } from './styles';
import { useEffect, useState } from 'react';

const meta: Meta<SkeletonNodeProps> = {
  title: 'Components/Atoms/Skeleton',
  args: {
    width: '100%',
    height: spacings[64],
    activated: true,
    duration: 2000,
    useNativeDriver: true,
    easing: Easing.bezier(0.4, 0, 0.6, 1),
  },
  argTypes: {
    width: {
      control: 'select',
      options: dimensions,
    },
    height: {
      control: 'select',
      options: dimensions,
    },
    activated: {
      control: {
        type: 'boolean',
      },
    },
    duration: {
      control: {
        type: 'number',
        min: 100,
        max: 10_000,
      },
    },
    useNativeDriver: {
      control: {
        type: 'boolean',
      },
    },
    easing: {
      type: 'function',
      control: null,
    },
  },
  component: props => <Skeleton.Node {...props} />,
  decorators: Component => (
    <Skeleton.Root style={[globalStyles.center, styles.container]}>
      <Component />
    </Skeleton.Root>
  ),
};

export default meta;

export const Node: StoryObj<SkeletonNodeProps> = {};

export const WithChildren: StoryObj<SkeletonNodeProps> = {
  render: ({ activated, ...rest }) => {
    const [isActivated, setIsActivated] = useState<boolean>(activated);

    useEffect(() => {
      const interval = setInterval(() => setIsActivated(!isActivated), 3000);

      return () => clearInterval(interval);
    }, []);

    return (
      <Skeleton.Node activated={isActivated} {...rest}>
        <Text>Aero UI</Text>
      </Skeleton.Node>
    );
  },
};
