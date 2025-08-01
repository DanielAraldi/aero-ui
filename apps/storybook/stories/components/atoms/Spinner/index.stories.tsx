import { Easing, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { Spinner, SpinnerProps } from '@aero-ui/ui';
import { colors } from '@aero-ui/tokens';

import {
  spinnerSizes,
  spinnerStartBy,
  spinnerVariants,
} from '../../../constants';
import { globalStyles } from '../../../styles';

const meta = {
  title: 'Components/Atoms/Spinner',
  args: {
    variant: 'unique',
    size: 'normal',
    startBy: 'left',
    color: colors.black[100],
    overlayColor: 'transparent',
    duration: 1000,
    useNativeDriver: true,
    animating: true,
    hidesWhenStopped: true,
    easing: Easing.linear,
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: spinnerVariants,
    },
    size: {
      control: {
        type: 'select',
      },
      options: spinnerSizes,
    },
    startBy: {
      control: {
        type: 'select',
      },
      options: spinnerStartBy,
    },
    color: {
      control: {
        type: 'color',
      },
    },
    overlayColor: {
      control: {
        type: 'color',
      },
    },
    duration: {
      control: {
        type: 'number',
        min: 1000,
        max: 10_000,
      },
    },
    useNativeDriver: {
      control: {
        type: 'boolean',
      },
    },
    animating: {
      control: {
        type: 'boolean',
      },
    },
    hidesWhenStopped: {
      control: {
        type: 'boolean',
      },
    },
  },
  component: props => <Spinner {...props} />,
  decorators: Component => (
    <View style={globalStyles.center}>
      <Component />
    </View>
  ),
} satisfies Meta<SpinnerProps>;

export default meta;

export const Unique: StoryObj<SpinnerProps> = {};

export const Double: StoryObj<SpinnerProps> = {
  args: {
    variant: 'double',
  },
};

export const Half: StoryObj<SpinnerProps> = {
  args: {
    variant: 'half',
  },
};
