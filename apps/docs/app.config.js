export default ({ config }) => ({
  ...config,
  name: 'Zephyr UI',
  slug: 'zephyr-ui',
  plugins: ['expo-font'],
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});
