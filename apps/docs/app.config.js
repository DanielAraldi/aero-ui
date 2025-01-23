export default ({ config }) => ({
  ...config,
  name: 'Aero UI',
  slug: 'aero-ui',
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});
