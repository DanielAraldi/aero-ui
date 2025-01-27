# `@aero-ui/ui` 👨‍🎨

Fluidity and sophistication Aero UI components.

## Summary 📖

- [Installation](#installation-️)
- [Components](#components-️)
  - [Spinner](#spinner-)
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

### Spinner 🌀

The `Spinner` component is a simple component that can be used during the app's loading. It is a simple loading component, totally different of the `ActivityIndicator`. We also extend all properties of the `View` component to it. Below we add some properties for it:

| Property       | Description                                                                      | Default         |
| -------------- | -------------------------------------------------------------------------------- | --------------- |
| `variant`      | This property is used to determine the scroll variants of the spinner.           | `unique`        |
| `size`         | This property is used to determine the size of the spinner.                      | `normal`        |
| `startBy`      | This property is used to determine the local where the spinner starts to rotate. | `left`          |
| `color`        | This property is used to determine the color of the spinner.                     | `black`         |
| `overlayColor` | This property is used to control the color of the spinner overlay.               | `transparent`   |
| `duration`     | This property is used to control the duration of the rotation animation.         | `1000`          |
| `easing`       | This property is used to control the easing function of the rotation animation.  | `Easing.linear` |

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
