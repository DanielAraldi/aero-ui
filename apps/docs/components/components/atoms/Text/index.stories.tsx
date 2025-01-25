import { View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { Text } from '@aero-ui/ui';

import { styles } from './styles';

const meta: Meta = {
  title: 'Components/Atoms/Text',
  decorators: Component => (
    <View style={styles.container}>
      <Component />
    </View>
  ),
};

export default meta;

export const Xs: StoryObj = {
  render: () => <Text.Xs>Aero UI</Text.Xs>,
};

export const Sm: StoryObj = {
  render: () => <Text.Sm>Aero UI</Text.Sm>,
};

export const Base: StoryObj = {
  render: () => <Text.Base>Aero UI</Text.Base>,
};

export const Lg: StoryObj = {
  render: () => <Text.Lg>Aero UI</Text.Lg>,
};

export const Xl: StoryObj = {
  render: () => <Text.Xl>Aero UI</Text.Xl>,
};

export const X2l: StoryObj = {
  render: () => <Text.X2l>Aero UI</Text.X2l>,
  storyName: 'X2l',
};

export const X3l: StoryObj = {
  render: () => <Text.X3l>Aero UI</Text.X3l>,
  storyName: 'X3l',
};

export const X4l: StoryObj = {
  render: () => <Text.X4l>Aero UI</Text.X4l>,
  storyName: 'X4l',
};

export const X5l: StoryObj = {
  render: () => <Text.X5l>Aero UI</Text.X5l>,
  storyName: 'X5l',
};

export const X6l: StoryObj = {
  render: () => <Text.X6l>Aero UI</Text.X6l>,
  storyName: 'X6l',
};

export const X7l: StoryObj = {
  render: () => <Text.X7l>Aero UI</Text.X7l>,
  storyName: 'X7l',
};

export const X8l: StoryObj = {
  render: () => <Text.X8l>Aero UI</Text.X8l>,
  storyName: 'X8l',
};

export const X9l: StoryObj = {
  render: () => <Text.X9l>Aero UI</Text.X9l>,
  storyName: 'X9l',
};
