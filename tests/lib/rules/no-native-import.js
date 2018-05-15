/**
 * @fileoverview Checks for importing native modules in non-native code
 * @author Andrew Jones
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-native-import"),
  RuleTester = require("eslint").RuleTester

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
})

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run("no-native-import", rule, {
  valid: [
    {
      code: 'import { Text } from "react-native"',
      filename: "index.native.js"
    },
    {
      code: 'import { Text } from "react-native"',
      filename: "index.ios.js"
    },
    {
      code: 'import { Text } from "react-native"',
      filename: "index.android.js"
    }
  ],

  invalid: [
    {
      code: 'import { Text } from "react-native"',
      filename: "index.js",
      errors: [
        {
          message: "Do not import native code in non-native files",
          type: "ImportDeclaration"
        }
      ]
    },
    {
      code: 'import * as RN from "react-native"',
      filename: "index.js",
      errors: [
        {
          message: "Do not import native code in non-native files",
          type: "ImportDeclaration"
        }
      ]
    }
  ]
})
