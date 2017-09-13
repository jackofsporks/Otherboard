"use babel";

// vars must be named the same thing in the import
// as they are in the export (unless it's the default)
import keyFuncs from "../../utils/key-funcs.js";

export default class MathKeys {
  constructor() {

    const k = this;  // "k" for "keyboard"

    // NAVIGATION

    k.lowercase = {
      id: "lowercase_nav", displayName: "abc", toSimulate: null,
      classes: ["navigation", "alphanumeric", "shift"],  // "link"???
      path: "ABC/Abc/Lowercase",
      activate: keyFuncs.pureNavigation,
      tags: ["link", "alphabetical", "lowercase"]
    }

    // QUESTION allow keys to lead to currently open panel in a board instead of a specific panel?!?!
    // k.cssMathNav is in css/math.js

    // TODO nav to symbols board instead?!?!


    // SIMULATION

    k[1] = {
      id: "1", displayName: "1", toSimulate: "1",
      classes: ["snippet", "alphanumeric", "numerical"],
      activate: keyFuncs.triggerSnippet,
      tags: ["numerical", "number"]
    }

    k[2] = {
      id: "2", displayName: "2", toSimulate: "2",
      classes: ["snippet", "alphanumeric", "numerical"],
      activate: keyFuncs.triggerSnippet,
      tags: ["numerical", "number"]
    }

    k[3] = {
      id: "3", displayName: "3", toSimulate: "3",
      classes: ["snippet", "alphanumeric", "numerical"],
      activate: keyFuncs.triggerSnippet,
      tags: ["numerical", "number"]
    }

    k[4] = {
      id: "4", displayName: "4", toSimulate: "4",
      classes: ["snippet", "alphanumeric", "numerical"],
      activate: keyFuncs.triggerSnippet,
      tags: ["numerical", "number"]
    }

    k[5] = {
      id: "5", displayName: "5", toSimulate: "5",
      classes: ["snippet", "alphanumeric", "numerical"],
      activate: keyFuncs.triggerSnippet,
      tags: ["numerical", "number"]
    }

    k[6] = {
      id: "6", displayName: "6", toSimulate: "6",
      classes: ["snippet", "alphanumeric", "numerical"],
      activate: keyFuncs.triggerSnippet,
      tags: ["numerical", "number"]
    }

    k[7] = {
      id: "7", displayName: "7", toSimulate: "7",
      classes: ["snippet", "alphanumeric", "numerical"],
      activate: keyFuncs.triggerSnippet,
      tags: ["numerical", "number"]
    }

    k[8] = {
      id: "8", displayName: "8", toSimulate: "8",
      classes: ["snippet", "alphanumeric", "numerical"],
      activate: keyFuncs.triggerSnippet,
      tags: ["numerical", "number"]
    }

    k[9] = {
      id: "9", displayName: "9", toSimulate: "9",
      classes: ["snippet", "alphanumeric", "numerical"],
      activate: keyFuncs.triggerSnippet,
      tags: ["numerical", "number"]
    }

    k[0] = {
      id: "0", displayName: "0", toSimulate: "0",
      classes: ["snippet", "alphanumeric", "numerical"],
      activate: keyFuncs.triggerSnippet,
      tags: ["numerical", "number"]
    }
  } // constructor
} // MathKeys
