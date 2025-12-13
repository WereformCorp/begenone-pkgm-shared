# @begenone/pkgm-shared

Shared UI components and utilities for the BEGENONE / WeReform ecosystem.

This package contains reusable, design-system–level building blocks used across mobile and web experiences. It includes buttons, inputs, dropdowns, headers, menus, metadata components, and small utilities that standardize interaction and presentation across the platform.

---

## Install

```bash
npm install @begenone/pkgm-shared
# or
yarn add @begenone/pkgm-shared
# or
pnpm add @begenone/pkgm-shared
```

---

## What this package gives you

- Core UI components:

  - Customizable buttons
  - Input fields and comment inputs
  - Dropdown selector
  - Global header
  - Navigation menus
  - Interaction menus
  - Channel metadata blocks
  - Title and date/views helpers

- Utilities:

  - URL normalization helper

- Built for:

  - React Native / Expo
  - Mobile-first layouts
  - Reuse across multiple packages (`pkgm-channel`, `pkgm-settings`, etc.)

---

## Exports

From `@begenone/pkgm-shared` you can import:

```ts
import {
  CustomizedButton,
  DropDown,
  InputField,
  InputComment,
  HeaderGlobal,
  MenuNav,
  MenuInteraction,
  MenuChannelMeta,
  CustomizedTitle,
  DateViews,
  normalizeUrl,
} from "@begenone/pkgm-shared";
```

---

## Core components

## CustomizedButton

Highly flexible button component with press feedback and optional icons.

### Props

```ts
CustomizedButton({
  label,
  onPress,
  onPressStyle,
  textColor,
  fontSize,
  fontFamily,
  fontWeight,
  customIcon,
  style,
  isDisabled,
});
```

- Supports press-in visual feedback
- Allows custom icons and typography
- Gracefully warns if required props are missing

---

## InputField

Reusable text input component with icon support and multiline handling.

### Props

```ts
InputField({
  placeholder,
  error,
  iconLeft,
  iconRight,
  onIconPress,
  iconRightColor,
  inputStyle,
  inputWrapper,
  multiline,
  onChangeText,
  isEditable,
  secureTextEntry,
});
```

- Uses Inter font via Expo
- Supports left and right icons
- Handles single-line and multi-line inputs

---

## DropDown

Modal-based dropdown selector built on `react-native-modal-selector`.

### Props

```ts
DropDown({
  selectText,
  data,
  styles,
  iconStyles,
});
```

- Displays label-based selections
- Fully stylable container and icon

---

## HeaderGlobal

Top-level header with brand logo and action icons.

```ts
HeaderGlobal({
  aiIcon,
  notificationIcon,
  searchIcon,
});
```

---

## MenuNav

Bottom or primary navigation bar component.

```ts
MenuNav({
  homeIcon,
  wireIcon,
  uploadIcon,
  channelIcon,
  profileIcon,
  onPressHome,
  onPressWire,
  onPressUpload,
  onPressChannel,
  onPressProfile,
});
```

---

## MenuInteraction

Interaction menu for content actions such as share, comment, repost, like, and dislike.

```ts
MenuInteraction({
  containerStyles,
  columnMainIconStyles,
  pressed,
});
```

---

## MenuChannelMeta

Displays channel metadata including logo, username, subscriber count, and subscribe action.

```ts
MenuChannelMeta({
  timeAgo,
  viewsText,
  channelLogo,
  userName,
  subscribersCount,
  containerStyles,
  channelContainerStyles,
});
```

---

## CustomizedTitle

Title renderer with automatic truncation and typography control.

```ts
CustomizedTitle({
  title,
  fontSize,
  fontFamily,
  textColor,
  style,
  textStyle,
});
```

---

## Utilities

## DateViews

Displays publish date and view count metadata.

```ts
DateViews({
  timeAgo,
  viewsText,
  containerStyles,
  dateTextStyles,
  viewsTextStyles,
  dateContainerStyles,
});
```

---

## normalizeUrl

Normalizes user-provided URLs into safe, clickable links.

```ts
normalizeUrl(url): string | null
```

- Adds `https://` when missing
- Returns `null` for invalid inputs

---

## Design philosophy

- Single source of truth for shared UI
- No API calls or business logic
- Consistent visual language across packages
- Mobile-first, composable components
- Designed to scale with the BEGENONE ecosystem

---

## License

MIT License

Copyright (c) 2025 BEGENONE / WeReform

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
