# `@aero-ui/tokens` 🖋️

Sample, elegant and beautiful UI tokens of the Aero UI library based in the [TailwindCSS](https://tailwindcss.com/).

## Summary 📖

- [Installation ☁️](#installation-️)
- [API 🏭](#api-)
  - [Colors 🎨](#colors-)
    - [White ⚪️](#white-️)
    - [Black ⚫️](#black-️)
    - [Gray 🔘](#gray-)
    - [Neutral 🔘](#neutral-)
    - [Red 🔴](#red-)
    - [Yellow 🟡](#yellow-)
    - [Green 🟢](#green-)
    - [Blue 🔵](#blue-)
  - [Opacities 🔍](#opacities-)
  - [Spacings 📐](#spacings-)
  - [Z Indexes 📚](#z-indexes-)
  - [Borders 🔳](#borders-)
    - [Radius ⭕️](#radius-️)
    - [Widths 📏](#widths-)
  - [Fonts 🖌️](#fonts-️)
    - [Sizes 📏](#sizes-)
    - [Weights ⚖️](#weights-️)
    - [Line Heights 📐](#line-heights-)
    - [Letter Spacings 📏](#letter-spacings-)
  - [TypeScript Support 👨‍🎨](#typescript-support-)

## Installation ☁️

npm:

```sh
npm install @aero-ui/tokens
```

Yarn:

```sh
yarn add @aero-ui/tokens
```

pnpm:

```sh
pnpm install @aero-ui/tokens
```

## API 🏭

### Colors 🎨

A small example of how to use colors below:

```ts
import { StyleSheet } from 'react-native';
import { colors } from '@aero-ui/tokens';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black[100], // #000000
  },

  card: {
    backgroundColor: colors.gray[200], // #E5E7EB
    borderColor: colors.blue[300], // #93C5FD
  },

  text: {
    color: colors.white[100], // #FFFFFF
  },

  highlightText: {
    color: colors.blue[500], // #3B82F6
  },
});
```

#### White ⚪️

| Key   | Color                                                                                                      |
| ----- | ---------------------------------------------------------------------------------------------------------- |
| `25`  | <span style="opacity: 0.25;">![#ffffff40](https://placehold.co/16x16/ffffff/ffffff.png)</span> `#ffffff40` |
| `50`  | <span style="opacity: 0.5;">![#ffffff80](https://placehold.co/16x16/ffffff/ffffff.png)</span> `#ffffff80`  |
| `60`  | <span style="opacity: 0.6;">![#ffffff99](https://placehold.co/16x16/ffffff/ffffff.png)</span> `#ffffff99`  |
| `75`  | <span style="opacity: 0.75;">![#ffffffbf](https://placehold.co/16x16/ffffff/ffffff.png)</span> `#ffffffbf` |
| `85`  | <span style="opacity: 0.85;">![#ffffffd9](https://placehold.co/16x16/ffffff/ffffff.png)</span> `#ffffffd9` |
| `100` | ![#ffffff](https://placehold.co/16x16/ffffff/ffffff.png) `#ffffff`                                         |

#### Black ⚫️

| Key   | Color                                                                                                      |
| ----- | ---------------------------------------------------------------------------------------------------------- |
| `25`  | <span style="opacity: 0.25;">![#00000040](https://placehold.co/16x16/000000/000000.png)</span> `#00000040` |
| `50`  | <span style="opacity: 0.5;">![#00000080](https://placehold.co/16x16/000000/000000.png)</span> `#00000080`  |
| `60`  | <span style="opacity: 0.6;">![#00000099](https://placehold.co/16x16/000000/000000.png)</span> `#00000099`  |
| `75`  | <span style="opacity: 0.75;">![#000000bf](https://placehold.co/16x16/000000/000000.png)</span> `#000000bf` |
| `85`  | <span style="opacity: 0.85;">![#000000d9](https://placehold.co/16x16/000000/000000.png)</span> `#000000d9` |
| `100` | ![#000000](https://placehold.co/16x16/000000/000000.png) `#000000`                                         |

#### Gray 🔘

| Key   | Color                                                              |
| ----- | ------------------------------------------------------------------ |
| `50`  | ![#f9fafb](https://placehold.co/16x16/f9fafb/f9fafb.png) `#f9fafb` |
| `100` | ![#f3f4f6](https://placehold.co/16x16/f3f4f6/f3f4f6.png) `#f3f4f6` |
| `200` | ![#e5e7eb](https://placehold.co/16x16/e5e7eb/e5e7eb.png) `#e5e7eb` |
| `300` | ![#d1d5db](https://placehold.co/16x16/d1d5db/d1d5db.png) `#d1d5db` |
| `400` | ![#9ca3af](https://placehold.co/16x16/9ca3af/9ca3af.png) `#9ca3af` |
| `500` | ![#6b7280](https://placehold.co/16x16/6b7280/6b7280.png) `#6b7280` |
| `600` | ![#4b5563](https://placehold.co/16x16/4b5563/4b5563.png) `#4b5563` |
| `700` | ![#374151](https://placehold.co/16x16/374151/374151.png) `#374151` |
| `800` | ![#1f2937](https://placehold.co/16x16/1f2937/1f2937.png) `#1f2937` |
| `900` | ![#111827](https://placehold.co/16x16/111827/111827.png) `#111827` |
| `950` | ![#030712](https://placehold.co/16x16/030712/030712.png) `#030712` |

#### Neutral 🔘

| Key   | Color                                                              |
| ----- | ------------------------------------------------------------------ |
| `50`  | ![#fafafa](https://placehold.co/16x16/fafafa/fafafa.png) `#fafafa` |
| `100` | ![#f5f5f5](https://placehold.co/16x16/f5f5f5/f5f5f5.png) `#f5f5f5` |
| `200` | ![#e5e5e5](https://placehold.co/16x16/e5e5e5/e5e5e5.png) `#e5e5e5` |
| `300` | ![#d4d4d4](https://placehold.co/16x16/d4d4d4/d4d4d4.png) `#d4d4d4` |
| `400` | ![#a3a3a3](https://placehold.co/16x16/a3a3a3/a3a3a3.png) `#a3a3a3` |
| `500` | ![#737373](https://placehold.co/16x16/737373/737373.png) `#737373` |
| `600` | ![#525252](https://placehold.co/16x16/525252/525252.png) `#525252` |
| `700` | ![#404040](https://placehold.co/16x16/404040/404040.png) `#404040` |
| `800` | ![#262626](https://placehold.co/16x16/262626/262626.png) `#262626` |
| `900` | ![#171717](https://placehold.co/16x16/171717/171717.png) `#171717` |
| `950` | ![#0a0a0a](https://placehold.co/16x16/0a0a0a/0a0a0a.png) `#0a0a0a` |

#### Red 🔴

| Key   | Color                                                              |
| ----- | ------------------------------------------------------------------ |
| `50`  | ![#fef2f2](https://placehold.co/16x16/fef2f2/fef2f2.png) `#fef2f2` |
| `100` | ![#fee2e2](https://placehold.co/16x16/fee2e2/fee2e2.png) `#fee2e2` |
| `200` | ![#fecaca](https://placehold.co/16x16/fecaca/fecaca.png) `#fecaca` |
| `300` | ![#fca5a5](https://placehold.co/16x16/fca5a5/fca5a5.png) `#fca5a5` |
| `400` | ![#f87171](https://placehold.co/16x16/f87171/f87171.png) `#f87171` |
| `500` | ![#ef4444](https://placehold.co/16x16/ef4444/ef4444.png) `#ef4444` |
| `600` | ![#dc2626](https://placehold.co/16x16/dc2626/dc2626.png) `#dc2626` |
| `700` | ![#b91c1c](https://placehold.co/16x16/b91c1c/b91c1c.png) `#b91c1c` |
| `800` | ![#991b1b](https://placehold.co/16x16/991b1b/991b1b.png) `#991b1b` |
| `900` | ![#7f1d1d](https://placehold.co/16x16/7f1d1d/7f1d1d.png) `#7f1d1d` |
| `950` | ![#450a0a](https://placehold.co/16x16/450a0a/450a0a.png) `#450a0a` |

#### Yellow 🟡

| Key   | Color                                                              |
| ----- | ------------------------------------------------------------------ |
| `50`  | ![#fefce8](https://placehold.co/16x16/fefce8/fefce8.png) `#fefce8` |
| `100` | ![#fef9c3](https://placehold.co/16x16/fef9c3/fef9c3.png) `#fef9c3` |
| `200` | ![#fef08a](https://placehold.co/16x16/fef08a/fef08a.png) `#fef08a` |
| `300` | ![#fde047](https://placehold.co/16x16/fde047/fde047.png) `#fde047` |
| `400` | ![#facc15](https://placehold.co/16x16/facc15/facc15.png) `#facc15` |
| `500` | ![#eab308](https://placehold.co/16x16/eab308/eab308.png) `#eab308` |
| `600` | ![#ca8a04](https://placehold.co/16x16/ca8a04/ca8a04.png) `#ca8a04` |
| `700` | ![#a16207](https://placehold.co/16x16/a16207/a16207.png) `#a16207` |
| `800` | ![#854d0e](https://placehold.co/16x16/854d0e/854d0e.png) `#854d0e` |
| `900` | ![#713f12](https://placehold.co/16x16/713f12/713f12.png) `#713f12` |
| `950` | ![#422006](https://placehold.co/16x16/422006/422006.png) `#422006` |

#### Green 🟢

| Key   | Color                                                              |
| ----- | ------------------------------------------------------------------ |
| `50`  | ![#f0fdf4](https://placehold.co/16x16/f0fdf4/f0fdf4.png) `#f0fdf4` |
| `100` | ![#dcfce7](https://placehold.co/16x16/dcfce7/dcfce7.png) `#dcfce7` |
| `200` | ![#bbf7d0](https://placehold.co/16x16/bbf7d0/bbf7d0.png) `#bbf7d0` |
| `300` | ![#86efac](https://placehold.co/16x16/86efac/86efac.png) `#86efac` |
| `400` | ![#4ade80](https://placehold.co/16x16/4ade80/4ade80.png) `#4ade80` |
| `500` | ![#22c55e](https://placehold.co/16x16/22c55e/22c55e.png) `#22c55e` |
| `600` | ![#16a34a](https://placehold.co/16x16/16a34a/16a34a.png) `#16a34a` |
| `700` | ![#15803d](https://placehold.co/16x16/15803d/15803d.png) `#15803d` |
| `800` | ![#166534](https://placehold.co/16x16/166534/166534.png) `#166534` |
| `900` | ![#14532d](https://placehold.co/16x16/14532d/14532d.png) `#14532d` |
| `950` | ![#052e16](https://placehold.co/16x16/052e16/052e16.png) `#052e16` |

#### Blue 🔵

| Key   | Color                                                              |
| ----- | ------------------------------------------------------------------ |
| `50`  | ![#eff6ff](https://placehold.co/16x16/eff6ff/eff6ff.png) `#eff6ff` |
| `100` | ![#dbeafe](https://placehold.co/16x16/dbeafe/dbeafe.png) `#dbeafe` |
| `200` | ![#bfdbfe](https://placehold.co/16x16/bfdbfe/bfdbfe.png) `#bfdbfe` |
| `300` | ![#93c5fd](https://placehold.co/16x16/93c5fd/93c5fd.png) `#93c5fd` |
| `400` | ![#60a5fa](https://placehold.co/16x16/60a5fa/60a5fa.png) `#60a5fa` |
| `500` | ![#3b82f6](https://placehold.co/16x16/3b82f6/3b82f6.png) `#3b82f6` |
| `600` | ![#2563eb](https://placehold.co/16x16/2563eb/2563eb.png) `#2563eb` |
| `700` | ![#1d4ed8](https://placehold.co/16x16/1d4ed8/1d4ed8.png) `#1d4ed8` |
| `800` | ![#1e40af](https://placehold.co/16x16/1e40af/1e40af.png) `#1e40af` |
| `900` | ![#1e3a8a](https://placehold.co/16x16/1e3a8a/1e3a8a.png) `#1e3a8a` |
| `950` | ![#172554](https://placehold.co/16x16/172554/172554.png) `#172554` |

---

### Opacities 🔍

A small example of how to use opacities below:

```ts
import { StyleSheet } from 'react-native';
import { opacities } from '@aero-ui/tokens';

const styles = StyleSheet.create({
  visible: {
    opacity: opacities[100], // 1
  },

  hidden: {
    opacity: opacities[0], // 0
  },

  disabled: {
    opacity: opacities[70], // 0.7
  },
});
```

| Key   | Value  |
| ----- | ------ |
| `0`   | `0`    |
| `5`   | `0.05` |
| `10`  | `0.1`  |
| `15`  | `0.15` |
| `20`  | `0.2`  |
| `25`  | `0.25` |
| `30`  | `0.3`  |
| `35`  | `0.35` |
| `40`  | `0.4`  |
| `45`  | `0.45` |
| `50`  | `0.5`  |
| `55`  | `0.55` |
| `60`  | `0.6`  |
| `65`  | `0.65` |
| `70`  | `0.7`  |
| `75`  | `0.75` |
| `80`  | `0.8`  |
| `85`  | `0.85` |
| `90`  | `0.9`  |
| `95`  | `0.95` |
| `100` | `1`    |

---

### Spacings 📐

A small example of how to use spacings below:

```ts
import { StyleSheet } from 'react-native';
import { spacings } from '@aero-ui/tokens';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: spacings[5], // 20
  },

  card: {
    width: '100%',
    height: 'auto',
    minHeight: spacings[24], // 96,

    padding: spacings[2], // 8,
    gap: spacings[1], // 4,
  },
});
```

| Key   | Value |
| ----- | ----- |
| `0`   | `0`   |
| `px`  | `1`   |
| `0.5` | `2`   |
| `1`   | `4`   |
| `1.5` | `6`   |
| `2`   | `8`   |
| `2.5` | `10`  |
| `3`   | `12`  |
| `3.5` | `14`  |
| `4`   | `16`  |
| `5`   | `20`  |
| `6`   | `24`  |
| `7`   | `28`  |
| `8`   | `32`  |
| `9`   | `36`  |
| `10`  | `40`  |
| `11`  | `44`  |
| `12`  | `48`  |
| `14`  | `56`  |
| `16`  | `64`  |
| `20`  | `80`  |
| `24`  | `96`  |
| `28`  | `112` |
| `32`  | `128` |
| `36`  | `144` |
| `40`  | `160` |
| `44`  | `176` |
| `48`  | `192` |
| `52`  | `208` |
| `56`  | `224` |
| `60`  | `240` |
| `64`  | `256` |
| `72`  | `288` |
| `80`  | `320` |
| `96`  | `384` |

---

### Z Indexes 📚

A small example of how to use z-indexes below:

```ts
import { StyleSheet } from 'react-native';
import { zIndexes } from '@aero-ui/tokens';

const styles = StyleSheet.create({
  card: {
    zIndex: zIndexes[50], // 50

    width: '100%',
    height: 'auto',
  },

  tooltip: {
    zIndex: zIndexes.full, // 9999

    width: 'auto',
    height: 'auto',
  },
});
```

| Key    | Value  |
| ------ | ------ |
| `0`    | `0`    |
| `10`   | `10`   |
| `20`   | `20`   |
| `30`   | `30`   |
| `40`   | `40`   |
| `50`   | `50`   |
| `100`  | `100`  |
| `full` | `9999` |

### Borders 🔳

A small example of how to use border radius and widths below:

```ts
import { StyleSheet } from 'react-native';
import { borderRadius, borderWidths, spacings } from '@aero-ui/tokens';

const styles = StyleSheet.create({
  card: {
    width: spacings[4], // 16
    height: spacings[4], // 16

    borderRadius: borderRadius.lg, // 8
    borderWidth: borderWidths[2], // 2
  },

  button: {
    width: spacings[4], // 16
    height: spacings[4], // 16

    borderRadius: borderRadius.base, // 4
    borderWidth: borderWidths.px, // 1
  },
});
```

#### Radius ⭕️

| Key    | Value  |
| ------ | ------ |
| `none` | `0`    |
| `sm`   | `2`    |
| `base` | `4`    |
| `md`   | `6`    |
| `lg`   | `8`    |
| `xl`   | `12`   |
| `2xl`  | `16`   |
| `3xl`  | `24`   |
| `full` | `9999` |

#### Widths 📏

| Key  | Value |
| ---- | ----- |
| `0`  | `0`   |
| `px` | `1`   |
| `2`  | `2`   |
| `4`  | `4`   |
| `8`  | `8`   |

---

### Fonts 🖌️

A small example of how to use border font sizes, font weights, line heights and letter spacings below:

```ts
import { StyleSheet } from 'react-native';
import {
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
} from '@aero-ui/tokens';

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes['6xl'], // 60
    fontWeight: fontWeights.medium, // 500
    lineHeight: lineHeights['6xl'], // 68
    letterSpacing: letterSpacings.wide, // 0.4
  },

  text: {
    fontSize: fontSizes.base, // 16
    fontWeight: fontWeights.regular, // 400
    lineHeight: lineHeights.base, // 24
    letterSpacing: letterSpacings.normal, // 0
  },
});
```

#### Sizes 📏

| Key    | Value |
| ------ | ----- |
| `xs`   | `12`  |
| `sm`   | `14`  |
| `base` | `16`  |
| `lg`   | `18`  |
| `xl`   | `20`  |
| `2xl`  | `24`  |
| `3xl`  | `30`  |
| `4xl`  | `36`  |
| `5xl`  | `48`  |
| `6xl`  | `60`  |
| `7xl`  | `72`  |
| `8xl`  | `96`  |
| `9xl`  | `128` |

#### Weights ⚖️

| Key          | Value |
| ------------ | ----- |
| `thin`       | `100` |
| `extralight` | `200` |
| `light`      | `300` |
| `normal`     | `400` |
| `medium`     | `500` |
| `semibold`   | `600` |
| `bold`       | `700` |
| `extrabold`  | `800` |
| `black`      | `900` |

#### Line Heights 📐

| Key    | Value |
| ------ | ----- |
| `xs`   | `16`  |
| `sm`   | `20`  |
| `base` | `24`  |
| `lg`   | `28`  |
| `xl`   | `28`  |
| `2xl`  | `32`  |
| `3xl`  | `36`  |
| `4xl`  | `40`  |
| `5xl`  | `56`  |
| `6xl`  | `68`  |
| `7xl`  | `80`  |
| `8xl`  | `104` |
| `9xl`  | `136` |

#### Letter Spacings 📏

| Key       | Value  |
| --------- | ------ |
| `tighter` | `-0.8` |
| `tight`   | `-0.4` |
| `normal`  | `0`    |
| `wide`    | `0.4`  |
| `wider`   | `0.8`  |
| `widest`  | `1.6`  |

---

## TypeScript Support 👨‍🎨

Yes! Aero UI **has support** for TypeScript, we divide the types of each token **two parts**:

- Object: It's original object `typeof` of the token, it object typing.
- Keys: It's original object `keyof typeof` of the token, it all keys of the object.

---

<sub>All tokens are based in [TailwindCSS](https://tailwindcss.com/) and adapted for [React Native](https://reactnative.dev/).</sub>
