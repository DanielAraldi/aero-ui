import { View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@aero-ui/ui';

import { globalStyles } from '../../../styles';

const meta: Meta<TextProps> = {
  title: 'Components/Atoms/Text',
  decorators: Component => (
    <View style={globalStyles.center}>
      <Component />
    </View>
  ),
};

export default meta;

export const Xs: StoryObj<TextProps> = {
  render: () => <Text.Xs>Aero UI</Text.Xs>,
};

export const Sm: StoryObj<TextProps> = {
  render: () => <Text.Sm>Aero UI</Text.Sm>,
};

export const Base: StoryObj<TextProps> = {
  render: () => <Text.Base>Aero UI</Text.Base>,
};

export const Lg: StoryObj<TextProps> = {
  render: () => <Text.Lg>Aero UI</Text.Lg>,
};

export const Xl: StoryObj<TextProps> = {
  render: () => <Text.Xl>Aero UI</Text.Xl>,
};

export const X2l: StoryObj<TextProps> = {
  render: () => <Text.X2l>Aero UI</Text.X2l>,
  storyName: 'X2l',
};

export const X3l: StoryObj<TextProps> = {
  render: () => <Text.X3l>Aero UI</Text.X3l>,
  storyName: 'X3l',
};

export const X4l: StoryObj<TextProps> = {
  render: () => <Text.X4l>Aero UI</Text.X4l>,
  storyName: 'X4l',
};

export const X5l: StoryObj<TextProps> = {
  render: () => <Text.X5l>Aero UI</Text.X5l>,
  storyName: 'X5l',
};

export const X6l: StoryObj<TextProps> = {
  render: () => <Text.X6l>Aero UI</Text.X6l>,
  storyName: 'X6l',
};

export const X7l: StoryObj<TextProps> = {
  render: () => <Text.X7l>Aero UI</Text.X7l>,
  storyName: 'X7l',
};

export const X8l: StoryObj<TextProps> = {
  render: () => <Text.X8l>Aero UI</Text.X8l>,
  storyName: 'X8l',
};

export const X9l: StoryObj<TextProps> = {
  render: () => <Text.X9l>Aero UI</Text.X9l>,
  storyName: 'X9l',
};
