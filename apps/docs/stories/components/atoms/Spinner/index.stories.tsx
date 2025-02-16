import { Easing, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { Spinner, SpinnerProps } from '@aero-ui/ui';
import { colors } from '@aero-ui/tokens';

import { globalStyles } from '../../../styles';

const meta: Meta<SpinnerProps> = {
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
      options: ['unique', 'double', 'half'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'normal', 'large'],
    },
    startBy: {
      control: {
        type: 'select',
      },
      options: ['left', 'right', 'top', 'bottom'],
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
    easing: {
      type: 'function',
      control: null,
    },
  },
  component: props => <Spinner {...props} />,
  decorators: Component => (
    <View style={globalStyles.center}>
      <Component />
    </View>
  ),
};

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
