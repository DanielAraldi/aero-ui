import { View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { Button as AeroButton, ButtonProps } from '@aero-ui/ui';

import { styles } from './styles';

const meta: Meta<ButtonProps> = {
  title: 'Components/Molecules/Button',
  args: {
    title: 'Aero UI',
    variant: 'primary',
    duration: 150,
    loading: false,
    bordered: true,
    disabled: false,
    hugWidth: true,
    useNativeDriver: true,
    activeOpacity: undefined,
    text: undefined,
    spinner: undefined,
  },
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['primary', 'success', 'neutral', 'ghost', 'danger', 'warning'],
    },
    duration: {
      control: {
        type: 'number',
        min: 0,
        max: 10_000,
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
    bordered: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    hugWidth: {
      control: {
        type: 'boolean',
      },
    },
    useNativeDriver: {
      control: {
        type: 'boolean',
      },
    },
    activeOpacity: {
      control: {
        type: 'number',
        min: 0,
        max: 1,
      },
    },
    text: {
      type: 'function',
      control: null,
    },
    spinner: {
      type: 'function',
      control: null,
    },
  },
  component: props => (
    <View style={styles.container}>
      <AeroButton {...props} />
    </View>
  ),
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {};

export const Success: StoryObj<ButtonProps> = {
  args: {
    variant: 'success',
  },
};

export const Neutral: StoryObj<ButtonProps> = {
  args: {
    variant: 'neutral',
  },
};

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: 'ghost',
  },
};

export const Danger: StoryObj<ButtonProps> = {
  args: {
    variant: 'danger',
  },
};

export const Warning: StoryObj<ButtonProps> = {
  args: {
    variant: 'warning',
  },
};
