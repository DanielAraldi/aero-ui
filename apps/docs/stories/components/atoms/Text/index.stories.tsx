import { View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@aero-ui/ui';

import { globalStyles } from '../../../styles';

const meta: Meta<TextProps> = {
  title: 'Components/Atoms/Text',
  args: {
    variant: 'base',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: [
        'xs',
        'sm',
        'base',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
    },
  },
  component: props => <Text {...props}>Aero UI</Text>,
  decorators: Component => (
    <View style={globalStyles.center}>
      <Component />
    </View>
  ),
};

export default meta;

export const Base: StoryObj<TextProps> = {};

export const Xs: StoryObj<TextProps> = {
  args: {
    variant: 'xs',
  },
};

export const Sm: StoryObj<TextProps> = {
  args: {
    variant: 'sm',
  },
};

export const Lg: StoryObj<TextProps> = {
  args: {
    variant: 'lg',
  },
};

export const Xl: StoryObj<TextProps> = {
  args: {
    variant: 'xl',
  },
};

export const X2l: StoryObj<TextProps> = {
  args: {
    variant: '2xl',
  },
  storyName: '2Xl',
};

export const X3l: StoryObj<TextProps> = {
  args: {
    variant: '3xl',
  },
  storyName: '3Xl',
};

export const X4l: StoryObj<TextProps> = {
  args: {
    variant: '4xl',
  },
  storyName: '4Xl',
};

export const X5l: StoryObj<TextProps> = {
  args: {
    variant: '5xl',
  },
  storyName: '5Xl',
};

export const X6l: StoryObj<TextProps> = {
  args: {
    variant: '6xl',
  },
  storyName: '6Xl',
};

export const X7l: StoryObj<TextProps> = {
  args: {
    variant: '7xl',
  },
  storyName: 'X7l',
};

export const X8l: StoryObj<TextProps> = {
  args: {
    variant: '8xl',
  },
  storyName: '8Xl',
};

export const X9l: StoryObj<TextProps> = {
  args: {
    variant: '9xl',
  },
  storyName: '9Xl',
};
