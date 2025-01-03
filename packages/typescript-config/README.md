# `@aero-ui/typescript-config` 👨‍🎨

A sample TypeScript configuration of the Aero UI.

## Summary 📖

- [Installation ☁️](#installation-️)
- [API 🏭](#api-)
  - [Base 🏗️](#base-️)
  - [Next.js ▲](#nextjs-)
  - [React Native ⚛️](#react-native-️)

---

## Installation ☁️

npm:

```sh
npm install @aero-ui/typescript-config --save-dev
```

Yarn:

```sh
yarn add @aero-ui/typescript-config -D
```

pnpm:

```sh
pnpm install @aero-ui/typescript-config -D
```

---

## API 🏭

Currently there are available TypeScript configurations that support [Next.js](https://nextjs.org/) and [React Native](https://reactnative.dev/). But, there is a base configuration that you can use in your project, this same configuration **are extended** by [nextjs](#nextjs-) and [react-native](#react-native-️).

Below, a small example of the configuration in your project:

```json
{
  "extends": "@aero-ui/typescript-config/react-native", // <-- Add this line
  "include": ["."],
  "exclude": ["dist", "build", "node_modules"],
  "compilerOptions": {
    "strict": true
  }
}
```

### Base 🏗️

A generic TypeScript configuration can be used in your project. [Click here](./base.json) to see the configuration.

### Next.js ▲

A TypeScript configuration for Next.js is available [here](./nextjs.json). This configuration extends the base configuration and adds support for Next.js specific features like server-side rendering, automatic static optimization, and more.

### React Native ⚛️

A TypeScript configuration for React Native is available [here](./react-native.json). This configuration extends the base configuration and adds support for React Native specific features like bundle splitting, code splitting, and more.

---
