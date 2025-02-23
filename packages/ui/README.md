# `@aero-ui/ui` 👨‍🎨

Fluidity and sophistication Aero UI components.

## Summary 📖

- [Installation](#installation-️)
- [Components](#components-️)
  - [Button](#button-)
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

### Button 🔘

The `Button` component is a `TouchableHighlight` component, but it also includes scale animations on the touch that you can control. The `Button` component have variants and totally customizable. By default it uses `Text` component and `Spinner` (when it's in loading state) component inside it, but it also accepts the `Text` and `Spinner` components customized. We add a `title` property to be used when you don't want to use Text component. A important detail about the `activeOpacity` property it's `1` this component. This component have accessibility attributes configured. Below we add some properties for it:

| Property          | Description                                                                             | Default   | Platform |
| ----------------- | --------------------------------------------------------------------------------------- | --------- | -------- |
| `title`           | Set the title of the button.                                                            | `Title`   | Both     |
| `variant`         | Scroll variants of the button.                                                          | `primary` | Both     |
| `scale`           | Button's scale.                                                                         | `0.98`    | Both     |
| `duration`        | Duration of the scale animation on the touch.                                           | `150`     | Both     |
| `loading`         | Button's loading.                                                                       | `false`   | Both     |
| `bordered`        | Determine if the button has border.                                                     | `false`   | Both     |
| `hugWidth`        | Fill or not all wrapper of the button.                                                  | `true`    | Both     |
| `useNativeDriver` | Determines if the button animation to be executed using native thread UI or JavaScript. | `true`    | Both     |

```tsx
import { Button, Text } from '@aero-ui/ui';

// ...

export function MyComponent() {
  // ...

  return (
    <View>
      <Button title='Foo' />

      <Button>
        <Text>Bar</Text>
      </Button>
    </View>
  );
}
```

**Note**: All properties of the button are **optional**.

### Spinner 🌀

The `Spinner` component is a simple component that can be used during the app's loading. It is a simple loading component in iOS. Still, in Android, it is an `ActivityIndicator` because we use border specific border colors to create the `Spinner` component that on Android doesn't work correctly. We also extend all properties of the `View` component to it. This component have accessibility attributes configured. Below we add some properties for it:

| Property           | Description                                                                              | Default         | Platform |
| ------------------ | ---------------------------------------------------------------------------------------- | --------------- | -------- |
| `variant`          | Scroll variants of the spinner.                                                          | `unique`        | iOS      |
| `size`             | Spinner's size.                                                                          | `normal`        | Both     |
| `startBy`          | Local where the spinner starts to rotate.                                                | `left`          | iOS      |
| `color`            | Spinner's color.                                                                         | `black`         | Both     |
| `overlayColor`     | Color of the spinner overlay.                                                            | `transparent`   | iOS      |
| `duration`         | Duration of the rotation animation.                                                      | `1000`          | iOS      |
| `useNativeDriver`  | Determines if the spinner animation to be executed using native thread UI or JavaScript. | `true`          | iOS      |
| `animating`        | Show the indicator or hide it.                                                           | `true`          | Android  |
| `hidesWhenStopped` | Whether the indicator should hide when not animating.                                    | `true`          | Android  |
| `easing`           | Easing function of the rotation animation.                                               | `Easing.linear` | iOS      |

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

Our `Text` component has the style based in the font of the [TailwindCSS](https://tailwindcss.com/), so we create a `Text` component that contains the different texts. We also preserve all properties of the `Text` component original. This component have accessibility attributes configured. Below we add unique Text property:

| Property  | Description                  | Default | Platform |
| --------- | ---------------------------- | ------- | -------- |
| `variant` | Scroll variants of the text. | `base`  | Both     |

**Note**: The `variant` property is **optional**.

```tsx
import { Text } from '@aero-ui/ui';

// ...

export function MyComponent() {
  // ...

  return (
    <View>
      <Text variant='3xl'>Foo Bar</Text>

      <View>
        <Text>Foo Bar</Text>
      </View>

      <Text variant='xs'>Foo Bar</Text>
    </View>
  );
}
```

## TypeScript Support 🏗️

Yes! Aero UI components **have support** for TypeScript, our components have interfaces for component props and internal properties it. We also create utility types for to be used for you, these types are specific properties types of the components.
