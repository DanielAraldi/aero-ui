export default ({ config }) => ({
  ...config,
  name: 'Aero UI',
  slug: 'aero-ui',
  plugins: ['expo-font'],
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});
