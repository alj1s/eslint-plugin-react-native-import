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
    schema: []
  },

  create: function(context) {
    const isNativeFile = filename => {
      return (
        filename.toLowerCase().includes("native.js") ||
        filename.toLowerCase().includes("native.spec.js") ||
        filename.toLowerCase().includes("ios.js") ||
        filename.toLowerCase().includes("ios.spec.js") ||
        filename.toLowerCase().includes("android.js") ||
        filename.toLowerCase().includes("android.spec.js")
      )
    }

    return {
      ImportDeclaration: function(node) {
        if (
          node.source.type === "Literal" &&
          node.source.value.toLowerCase().includes("native") &&
          !isNativeFile(context.getFilename())
        ) {
          context.report(node, "Do not import native code in non-native files")
        }
      }
    }
  }
}
