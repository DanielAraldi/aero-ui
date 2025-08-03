export default ({ config }) => ({
  ...config,
  name: 'Aero UI',
  slug: 'aero-ui',
  experiments: {
    reactCompiler: false,
  },
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
});
