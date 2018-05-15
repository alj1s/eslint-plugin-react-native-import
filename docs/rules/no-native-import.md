# Checks for importing native modules in non-native code (no-native-import)

This is used to check cross-platform repos for native imports in non-native code.

## Rule Details

This rule identifies native imports in code not identified as native (e.g. filename.native.js, filename.ios.js or filename.android.js)

Examples of **incorrect** code for this rule:

```js

// index.js

import { Text } from "react-native"

```

Examples of **correct** code for this rule:

```js

// index,native.js

import { Text } from "react-native"

```

### Options

None
