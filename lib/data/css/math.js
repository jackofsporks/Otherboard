"use babel";

// vars must be named the same thing in the import
// as they are in the export (unless it's the default)
import keyFuncs from "../../utils/key-funcs.js";

export default class CSSMathKeys {
  constructor() {

    const k = this;  // "k" for "keyboard"

    // NAVIGATION

    // QUESTION allow keys to lead to currently open panel in a board instead of a specific panel?!?!
    k.cssMathNav = {
      id: "home-page_nav", displayName: "abc", toSimulate: null,
      classes: ["navigation", "css", "shift"],  // "link"???
      path: "ABC/CSS_Math/Home_Page",
      activate: keyFuncs.pureNavigation,
      tags: ["link", "numerical", "numbers"]
    }

    k.dimensionsNav = {
      id: "dimensions_nav", displayName: "Dimensions", toSimulate: null,
      classes: ["navigation", "css", "shift"],  // "link"???
      path: "ABC/CSS_Math/Dimensions",
      activate: keyFuncs.pureNavigation,
      tags: ["link", "alphabetical", "lowercase"]
    }

    // TODO nav to symbols board instead?!?!


    // SIMULATION

    // Dimensions
    // px, %, in, cm, rem, em, vh, vw, pt
    // em ex ch ic rem lh rlh vh vw vi vb vmin vmax pm mm q cm in pt pc
    // . : { } "

    k.em = {
      id: "em", displayName: "em", toSimulate: "em",
      classes: ["snippet"],
      activate: keyFuncs.triggerSnippet,
      tags: ["dimension", "em"]
    }

    k.rem = {
      id: "rem", displayName: "rem", toSimulate: "rem",
      classes: ["snippet"],
      activate: keyFuncs.triggerSnippet,
      tags: ["dimension", "rem"]
    }

    k.vh = {
      id: "vh", displayName: "vh", toSimulate: "vh",
      classes: ["snippet"],
      activate: keyFuncs.triggerSnippet,
      tags: ["dimension", "vh", "view height"]
    }

    k.vw = {
      id: "vw", displayName: "vw", toSimulate: "vw",
      classes: ["snippet"],
      activate: keyFuncs.triggerSnippet,
      tags: ["dimension", "vw", "view width"]
    }

    k.px = {
      id: "px", displayName: "px", toSimulate: "px",
      classes: ["snippet"],
      activate: keyFuncs.triggerSnippet,
      tags: ["dimension", "px", "pixel"]
    }

    k.in = {
      id: "in", displayName: "in", toSimulate: "in",
      classes: ["snippet"],
      activate: keyFuncs.triggerSnippet,
      tags: ["dimension", "in", "inch"]
    }

    k.cm = {
      id: "cm", displayName: "cm", toSimulate: "cm",
      classes: ["snippet"],
      activate: keyFuncs.triggerSnippet,
      tags: ["dimension", "cm", "centimeter"]
    }

    k.calc = {
      id: "calc", displayName: "calc", toSimulate: "calc",
      classes: ["snippet"],
      activate: keyFuncs.triggerSnippet,
      tags: ["dimension", "calc", "css", "calculate", "operation"]
    }
  } // constructor
} // CSSMathKeys
