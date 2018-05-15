# eslint-plugin-react-native-import

Checks cross-platform code for react-native import in non-native executing code

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-react-native-import`:

```
$ npm install eslint-plugin-react-native-import --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-react-native-import` globally.

## Usage

Add `react-native-import` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "react-native-import"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "react-native-import/no-native-import": 2
    }
}
```

## Supported Rules

* react-native-import/no-native-import





