# `@aero-ui/ui` 👨‍🎨

Fluidity and sophistication Aero UI components.

![Version](https://img.shields.io/npm/v/%40aero-ui%2Fui?style=flat&color=brightgreen&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40aero-ui%2Fui)

## Summary 📖

- [Installation](#installation-️)
- [Components](#components-️)
  - [Button](#button-)
  - [Skeleton](#skeleton-)
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

The `Button` component is a `Pressable` component, but it also includes scale animations on the touch that you can control. The `Button` component have variants and totally customizable. By default it uses `Text` component and `Spinner` (when it's in loading state) component inside it, but it also accepts the `Text` and `Spinner` customized by properties available it. This component have accessibility attributes configured by default. It's possible customize the spring animation using `animateProps` property, default it's in react-native documentation about [spring animation](https://reactnative.dev/docs/animated#spring). A important details about this component, we modified the `style` and `disabled` properties, only these properties not equal with native `Pressable` properties. Below we add some properties for it:

| Property               | Description                                                                             | Default     | Platform |
| ---------------------- | --------------------------------------------------------------------------------------- | ----------- | -------- |
| `variant`              | Scroll variants of the button.                                                          | `primary`   | Both     |
| `title`                | Title of the button.                                                                    | `Title`     | Both     |
| `toScale`              | Button's scale when it's pressed.                                                       | `0.94`      | Both     |
| `disabled`             | Whether the press behavior is disabled.                                                 | `false`     | Both     |
| `loading`              | Button's loading.                                                                       | `false`     | Both     |
| `bordered`             | Determine if the button has border.                                                     | `false`     | Both     |
| `hugWidth`             | Fill or not all wrapper of the button.                                                  | `true`      | Both     |
| `useNativeDriver`      | Determines if the button animation to be executed using native thread UI or JavaScript. | `false`     | Both     |
| `style`                | Either view styles.                                                                     | `undefined` | Both     |
| `spinnerProps`         | This property is used to customize the spinner.                                         | `undefined` | Both     |
| `textProps`            | This property is used to customize the text.                                            | `undefined` | Both     |
| `pressInAnimateProps`  | This property is used to customize the spring animation on `onPressIn` event.           | `undefined` | Both     |
| `pressOutAnimateProps` | This property is used to customize the spring animation on `onPressOut` event.          | `undefined` | Both     |

**Note**: All properties of the button are **optional**.

```tsx
import { Button, Text } from '@aero-ui/ui';

// ...

export function MyComponent() {
  // ...

  return (
    <View>
      <Button title='Foo' />

      <Button title='Bar' />
    </View>
  );
}
```

### Skeleton 🩻

The `Skeleton` component is a parent component that camouflages through the activated property of its children. It adapts to the size of your children. This component have accessibility attributes configured. By default it uses the [TailwindCSS](https://tailwindcss.com/) skeleton [animation](https://tailwindcss.com/docs/animation#adding-a-pulse-animation), changing between gray colors. Below we add some properties for it:

| Property          | Description                                                                               | Default                         | Platform |
| ----------------- | ----------------------------------------------------------------------------------------- | ------------------------------- | -------- |
| `width`           | Skeleton's width.                                                                         | `auto`                          | Both     |
| `height`          | Skeleton's height.                                                                        | `auto`                          | Both     |
| `round`           | Border radius of the skeleton.                                                            | `none`                          | Both     |
| `activated`       | Active skeleton shimmer.                                                                  | `true`                          | Both     |
| `duration`        | Duration of the bezier animation.                                                         | `2000`                          | Both     |
| `useNativeDriver` | Determines if the skeleton animation to be executed using native thread UI or JavaScript. | `false`                         | Both     |
| `easing`          | Easing function of the bezier animation.                                                  | `Easing.bezier(0.4, 0, 0.6, 1)` | Both     |

**Note**: All properties of the spinner are **optional**.

```tsx
import { useState } from 'react';
import { Skeleton, Button } from '@aero-ui/ui';

// ...

export function MyComponent() {
  // ...
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Skeleton activated={isLoading}>
      <Button title='Foo' />
    </Skeleton>
  );
}
```

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
| `useNativeDriver`  | Determines if the spinner animation to be executed using native thread UI or JavaScript. | `false`         | iOS      |
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
