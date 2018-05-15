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
      // fill in your schema
    ]
  },

  create: function(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    const isNativeFile = filename => {
      return (
        filename.toLowerCase().includes("native.js") ||
        filename.toLowerCase().includes("ios.js") ||
        filename.toLowerCase().includes("android.js")
      )
    }

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

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
