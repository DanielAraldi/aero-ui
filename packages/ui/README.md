# `@aero-ui/ui` 👨‍🎨

Fluidity and sophistication Aero UI components.

## Summary 📖

- [Installation](#installation-️)
- [Components](#components-️)
  - [Text](#text-)

## Installation ☁️

npm:

```sh
npm install @aero-ui/ui @aero-ui/tokens
```

Yarn:

```sh
yarn add @aero-ui/ui @aero-ui/tokens
```

pnpm:

```sh
pnpm install @aero-ui/ui @aero-ui/tokens
```

## Components ⚛️

### Text 🪶

Our `Text` component has the style based in the font of the [TailwindCSS](https://tailwindcss.com/), so we create a `Text` component that contains the different texts inside it. We also preserve all properties of the `Text` component original.

```tsx
import { Text } from '@aero-ui/ui';

// ...

export function MyComponent() {
  // ...

  return (
    <View>
      <Text.Lg>Foo Baa</Text.Lg>

      <View>
        <Text.Base>Foo Baa</Text.Base>
      </View>

      <Text.Sm>Foo Baa</Text.Sm>
    </View>
  );
}
```
