import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
  entry: {
    index: 'index.ts',
  },
  banner: {
    js: "'use client'",
  },
  clean: true,
  format: ['cjs', 'esm'],
  external: ['react', 'react-native', '@aero-ui/tokens'],
  dts: true,
  tsconfig: 'tsconfig.json',
  ...options,
}));
