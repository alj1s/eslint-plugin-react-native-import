/**
 * @fileoverview Checks for importing native modules in non-native code
 * @author Andrew Jones
 */
"use strict"

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Checks for importing native modules in non-native code",
      category: "",
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      {
        type: "array",
        items: {
          type: "string",
          minLength: 1
        },
        uniqueItems: true
      }
    ]
  },

  create: function(context) {
    const whitelist = context.options[0] || [
      "native.js",
      "ios.js",
      "android.js",
      "native.spec.js",
      "ios.spec.js",
      "android.spec.js"
    ]

    const isWhitelisted = filename => {
      return whitelist.some(file => filename.toLowerCase().includes(file))
    }

    return {
      ImportDeclaration: function(node) {
        if (
          node.source.type === "Literal" &&
          node.source.value.toLowerCase().includes("native") &&
          !isWhitelisted(context.getFilename())
        ) {
          context.report(node, "Do not import native code in non-native files")
        }
      }
    }
  }
}
