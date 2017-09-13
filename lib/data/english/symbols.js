"use babel";

// vars must be named the same thing in the import
// as they are in the export (unless it's the default)
import keyFuncs from "../../utils/key-funcs.js";

export default class Symbols {
  constructor() {

    const k = this;  // "k" for "keyboard"

    // NAVIGATION


    // SIMULATION

    k.colon = {
      id: "colon", displayName: ":", toSimulate: ":",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.triggerSnippet,
      tags: ["symbol", "syntax", "assignment", "colon", "pseudo-selector",
      "state", "hover", "active", "visited", "before", "after", "css", "js", "javascript"] // assignment???
    }

    k.semicolon = {
      id: "semicolon", displayName: ";", toSimulate: ";",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.triggerSnippet,
      tags: ["symbol", "syntax", "semicolon", "terminator", "css", "js", "javascript"]
    }

    k.comma = {
      id: "comma", displayName: ",", toSimulate: ",",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.triggerSnippet,
      tags: ["symbol", "syntax", "comma", "separator", "css", "js", "javascript"]
    }

    k.leftCurlyBracket = {
      id: "leftCurlyBracket", displayName: "{", toSimulate: "{",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.triggerSnippet,
      tags: ["symbol", "syntax", "left curly bracket", "bracket", "closure", "css", "js", "javascript"]
    }

    k.rightCurlyBracket = {
      id: "rightCurlyBracket", displayName: "}", toSimulate: "}",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.triggerSnippet,
      tags: ["symbol", "syntax", "right curly bracket", "bracket", "closure", , "css", "js", "javascript"]
    }

    k.lessThan = {
      id: "lessThan", displayName: "<", toSimulate: "<",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.triggerSnippet,
      tags: ["syntax", "punctuation", "less than", "left angle bracket", "math", "html"]
    }

    k.greaterThan = {
      id: "greaterThan", displayName: ">", toSimulate: ">",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.triggerSnippet,
      tags: ["symbol", "selector", "punctuation",
      "greater than", "right angle bracket", "math", "equality", "html", "css"]
    }

    k.at = {
      id: "at", displayName: "@", toSimulate: "@",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.triggerSnippet,
      tags: ["symbol", "selector", "at", "media", "???", "css"]
    }

    k.singleQuote = {
      id: "singleQuote", displayName: "'", toSimulate: "'",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.triggerSnippet,
      tags: ["symbol", "syntax", "punctuation",
      "single quote", "quotation marks", "air quotes", "string", "apostrophe"]
    }

    k.doubleQuote = {
      id: "doubleQuote", displayName: "\"", toSimulate: "\"",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.triggerSnippet,
      tags: ["symbol", "syntax", "punctuation",
      "double quote", "quotation marks", "air quotes", "string"]
    }

    k.forwardSlash = {
      id: "forwardSlash", displayName: "/", toSimulate: "/",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.triggerSnippet,
      tags: ["symbol", "punctuation", "forward slash", "divide", "fraction", "file directory", "math", "regexp", "regular expression"]
    }

    k.backwardSlash = {
      id: "backwardSlash", displayName: "\\", toSimulate: "\\",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.triggerSnippet,
      tags: ["symbol", "punctuation", "backward slash", "escape"]
    }

    k.star = {
      id: "star", displayName: "*", toSimulate: "*",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.triggerSnippet,
      tags: ["symbol", "selector", "star", "wildcard", "multiply", "math", "power"]
    }

    k.plus = {
      id: "plus", displayName: "+", toSimulate: "+",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.triggerSnippet,
      tags: ["symbol", "selector", "plus", "sibling", "math"]
    }

    k.carret = {
      id: "carret", displayName: "^", toSimulate: "^",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.triggerSnippet,
      tags: ["symbol", "selector", "carret", "power", "css", "math"]
    }

    k.tilda = {
      id: "tilda", displayName: "~", toSimulate: "~",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.triggerSnippet,
      tags: ["symbol", "selector", "tilda", "css"]
    }

    k.period = {
      id: "period", displayName: ".", toSimulate: ".",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.triggerSnippet,
      tags: ["symbol", "selector", "period", "class", "property", "method", "css", "js", "javascript"]
    }

    k.hashtag = {
      id: "hashtag", displayName: "#", toSimulate: "#",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.triggerSnippet,
      tags: ["symbol", "selector", "hashtag", "id", "pound sign"]
    }

    k.dash = {
      id: "dash", displayName: "-", toSimulate: "-",
      classes: ["snippet", "variable"],
      activate: keyFuncs.triggerSnippet,
      tags: ["symbol", "variable", "punctuation",
      "dash", "em dash", "hyphen", "minus"]
    }

    k.underscore = {
      id: "underscore", displayName: "_", toSimulate: "_",
      classes: ["snippet", "variable"],
      activate: keyFuncs.triggerSnippet,
      tags: ["symbol", "variable", "punctuation",
      "underscore"]
    }

    k.percent = {
      id: "percent", displayName: "%", toSimulate: "%",
      classes: ["snippet", "variable"],
      activate: keyFuncs.triggerSnippet,
      tags: ["symbol", "dimension", "degree", "%"]
    }

    k.equals = {
      id: "equals", displayName: "=", toSimulate: "=",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.triggerSnippet,
      tags: ["syntax", "assignment", "equals", "instantiation"]
    }
  } // constructor
} // Symbols
