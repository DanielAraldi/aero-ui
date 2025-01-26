import { Easing, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { Spinner as AeroSpinner, SpinnerProps } from '@aero-ui/ui';

import { globalStyles } from '../../../styles';
import { colors } from '@aero-ui/tokens';

const meta: Meta<SpinnerProps> = {
  title: 'Components/Atoms/Spinner',
  args: {
    variant: 'unique',
    size: 'normal',
    startBy: 'left',
    color: colors.black[100],
    overlayColor: 'transparent',
    duration: 1000,
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
    easing: {
      type: 'function',
      control: null,
    },
  },
  component: props => (
    <View style={globalStyles.center}>
      <AeroSpinner {...props} />
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
