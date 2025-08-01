# @aero-ui/ui

## 1.5.0

### Minor Changes

- - Upgrade `react` (19.0.0), `react-native` (0.79.2) and `node` (22.x) version in the `ui` library.
    - All `useNativeDriver` properties are `false` by default.
    - All components receive `ref` via props; we removed `forwardRef` from them.
    - The `Button` component doesn't receive `children` now. Swap it for the `title` property.
    - To customize the `title` property and `spinner`, use `textProps` and `spinnerProps`.
    - Add two new properties to handle animation in `pressIn` and `pressOut` of the `Button` component. Now, you can use `pressInAnimateProps` and `pressOutAnimateProps` to customize the spring animation.
    - Change opacity on press action `Button` component of 85% to 95%.
    - Change opacity when `Button` component is disabled of 75% to 90%.
    - Removed the `duration` property of the animation on the `Button` component.
    - Update UI documentation to support new properties and add more details.
  - Bump form-data from 3.0.2 to 3.0.4 via dependabot.
  - Bump @babel/helpers from 7.26.0 to 7.28.2 in the npm_and_yarn group across 1 directories via dependabot.
  - Bump brace-expansion from 1.1.11 to 1.1.12 in the npm_and_yarn group across 1 directory via dependabot.
  - Bump the npm_and_yarn group across 2 directories with 3 updates via dependabot.

## 1.4.0

### Minor Changes

- - Add `Skeleton` component.
  - Swap `TouchableHighlight` by `Pressable` in the `Button` component.
    - Remove property `title`.
    - Change `toScale` default value of `0.98` from `0.99`.
  - Improve performance in `Spinner` and `Button` component.
  - Fix `Button` component to allow it to receive more than one child.

## 1.3.0

### Minor Changes

- Updated `node` engine to >= `20`.
- Upgraded `react-native` version to `0.74.5`.
- Add unit tests for testing all components.
- Add `testID` property as default in the all components to be used in tests.
- Add `secondary` and `tertiary` new variants to the `Button` component.
- Add `TextVariantType` type to the `Button` component types.
- Swap `scale` property name by `toScale` name in the `Button` component.
- Fix `useNativeDriver` to the `Spinner` to be provided for `Button` component as default.

## 1.2.0

### Minor Changes

- Add `Button` component.
- Swap composition pattern by `variant` property in the `Text` component.
- Improve accessibility in the `Spinner` component.

## 1.1.5

### Patch Changes

- Fix type not found exported module.

## 1.1.4

### Patch Changes

- Remove `SpacingsObjectType` not found in the `@aero-ui/tokens`.

## 1.1.3

### Patch Changes

- Fix the issue for the missing member export the fact of intermediary index file which TypeScript doesn't seem to be able to use when exporting types

## 1.1.2

### Patch Changes

- Fix incorrect import during TypeScript build.

## 1.1.1

### Patch Changes

- Add correct import path of the `@aero-ui/tokens` in the `aero-ui/ui`

## 1.1.0

### Minor Changes

- Add `Spinner` component.

## 1.0.2

### Patch Changes

- Add keyboards for `package.json` of the UI components

## 1.0.1

### Patch Changes

- Adjust in the publish permissions in the NPM

## 1.0.0

### Major Changes

- Add `Text` component for UI and new font weights tokens. Swap the font weights of `string` type for `number` type.

### Patch Changes

- Updated dependencies
  - @aero-ui/tokens@1.2.0
