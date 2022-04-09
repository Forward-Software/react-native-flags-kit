# react-native-flags-kit

> React Native Flag component with all the flags in the world

## Installation

```sh
yarn add @forward-software/react-native-flags-kit
```

## Usage

```js
import { Flag } from '@forward-software/react-native-flags-kit';

<Flag code="DE" size={32} />
```

## Props

| Props | Type                                     | Required | Default | Description                                                                                                                |
| :---- | :--------------------------------------- | :------: | :------ | :------------------------------------------------------------------------------------------------------------------------- |
| code  | string                                   | **YES**  |         | [The ISO code of a flag](https://www.translatorscafe.com/cafe/ISO-3166-Country-Codes.htm), for example "KH", "US" or "GB". |
| type  | `flat` or `shiny`                        |    No    | `shiny` | Display the flags with a shiny or flat effect.                                                                             |
| size  | `16`, `24`, `32`, `48`, `64` or `number` |    No    | `64`    | The size of a flag in points (Note: Setting a different size will render the closest one - e.g. `17 -> 16`, `29 -> 32`).   |
| style |                                          |    No    |         | Allows additional RN `Image` styles to be passed through.                                                                  |

## Full Example

```ts
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { Flag } from '@forward-software/react-native-flags-kit';

export const App: React.FC = () => (
  <View style={styles.container}>
    <Flag code="US" size={64} />
    <Flag code="JP" size={64} />
    <Flag code="CN" size={64} />
    <Flag code="RU" size={64} />
    <Flag code="KH" size={64} />
    <Flag code="VN" size={64} />
    <Flag code="SG" size={64} />
    <Flag code="MY" size={64} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    fontSize: 30,
  },
});
```

For a more complete example check the `example` folder.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## Credits

This library is an update of [react-native-flags-kit](https://github.com/themodernjavascript/react-native-flags-kit) to make it work with latest React Native versions and fix old reported issues (e.g. [#1](https://github.com/themodernjavascript/react-native-flags-kit/issues/1))

## License

MIT

---

Made with ✨ & ❤️ by [ForWarD Software](https://github.com/Forward-Software) and [contributors](https://github.com/Forward-Software/react-native-flags-kit/graphs/contributors)

If you found this project to be helpful, please consider contacting us to develop your React and React Native projects.
