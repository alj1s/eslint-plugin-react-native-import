/**
 * @fileoverview Checks cross-platform code for react-native import in non-native executing code
 * @author Andrew Jones
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex")

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules")
module.exports.configs = {
  recommended: {
    rules: {
      "react-native-import/no-native-import": 2
    }
  }
}
