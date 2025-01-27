# `@aero-ui/ui` 👨‍🎨

Fluidity and sophistication Aero UI components.

## Summary 📖

- [Installation](#installation-️)
- [Components](#components-️)
  - [Spinner](#spinner-)
  - [Text](#text-)
- [TypeScript Support](#typescript-support-️)

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

### Spinner 🌀

The `Spinner` component is a simple component that can be used during the app's loading. It is a simple loading component, totally different of the `ActivityIndicator`. We also extend all properties of the `View` component to it. This component have accessibility attributes configured. Below we add some properties for it:

| Property       | Description                                | Default         |
| -------------- | ------------------------------------------ | --------------- |
| `variant`      | Scroll variants of the spinner.            | `unique`        |
| `size`         | Spinner's size.                            | `normal`        |
| `startBy`      | Local where the spinner starts to rotate.  | `left`          |
| `color`        | Spinner's color.                           | `black`         |
| `overlayColor` | Color of the spinner overlay.              | `transparent`   |
| `duration`     | Duration of the rotation animation.        | `1000`          |
| `easing`       | Easing function of the rotation animation. | `Easing.linear` |

**Note**: All properties of the spinner are **optional**.

```tsx
import { Spinner } from '@aero-ui/ui';

// ...

export function MyComponent() {
  // ...

  if (isLoading) return <Spinner />;

  return <View>{/* ... */}</View>;
}
```

### Text 🪶

Our `Text` component has the style based in the font of the [TailwindCSS](https://tailwindcss.com/), so we create a `Text` component that contains the different texts inside it. We also preserve all properties of the `Text` component original. This component have accessibility attributes configured.

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

## TypeScript Support 🏗️

Yes! Aero UI components **have support** for TypeScript, our components have interfaces for component props and internal properties it. We also create utility types for to be used for you, these types are specific properties types of the components.
