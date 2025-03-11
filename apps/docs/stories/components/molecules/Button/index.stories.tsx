import { View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { Button, ButtonProps, Spinner, Text } from '@aero-ui/ui';
import { colors } from '@aero-ui/tokens';

import { styles } from './styles';

const meta: Meta<ButtonProps> = {
  title: 'Components/Molecules/Button',
  args: {
    variant: 'primary',
    children: 'Aero UI',
    toScale: 0.99,
    duration: 150,
    loading: false,
    bordered: false,
    disabled: false,
    hugWidth: true,
    useNativeDriver: true,
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'neutral',
        'ghost',
        'danger',
        'warning',
      ],
    },
    toScale: {
      control: {
        type: 'number',
        min: 0,
        max: 1,
      },
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
  },
  component: props => <Button {...props} />,
  decorators: Component => (
    <View style={styles.container}>
      <Component />
    </View>
  ),
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
  },
};

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

export const CustomText: StoryObj<ButtonProps> = {
  render: props => (
    <Button {...props}>
      <Text style={{ color: colors.blue[100] }}>Aero UI</Text>
    </Button>
  ),
};

export const CustomSpinner: StoryObj<ButtonProps> = {
  render: props => (
    <Button {...props} loading>
      <Spinner
        variant='unique'
        color={colors.blue[100]}
        overlayColor={colors.white[25]}
      />
    </Button>
  ),
};
