import { View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@aero-ui/ui';

import { buttonVariants } from '../../../constants';
import { styles } from './styles';

const meta = {
  title: 'Components/Molecules/Button',
  args: {
    variant: 'primary',
    title: 'Aero UI',
    toScale: 0.94,
    loading: false,
    bordered: false,
    disabled: false,
    hugWidth: true,
    useNativeDriver: false,
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: buttonVariants,
    },
    title: {
      control: {
        type: 'text',
      },
    },
    toScale: {
      control: {
        type: 'number',
        min: 0,
        max: 1,
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
    pressInAnimateProps: {
      control: {
        type: 'object',
      },
    },
    pressOutAnimateProps: {
      control: {
        type: 'object',
      },
    },
  },
  component: props => <Button {...props} />,
  decorators: Component => (
    <View style={styles.container}>
      <Component />
    </View>
  ),
} satisfies Meta<ButtonProps>;

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
