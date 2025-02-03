import { StorybookConfig } from '@storybook/react-native';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
  ],
};

export default config;
