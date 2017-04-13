"use babel";

import keyFuncs from "../../utils/key-funcs.js";

export default class HtmlAttributes {
  constructor() {

    const k = this;  // "k" for "keyboard"


    // ~~~~~~~~~~~~~ NAVIGATION ~~~~~~~~~~~~~ //
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //


    // id, class, style?, src, href, data-*, tabindex, title, 
    // input...
    // value, placeholder,


    k.attributesHome_nav = {
      id: "home-page_nav", displayName: "Home", toSimulate: null,
      classes: ["navigation", "html"],  // "link"???
      path: "HTML/Attributes/Home_Page",
      activate: keyFuncs.pureNavigation,
      tags: ["link"]
    }
    k.menu_nav = {
      id: "menu_nav", displayName: "Menu", toSimulate: null,
      classes: ["navigation", "html"],  // "link"???
      path: "HTML/Attributes/Menu",
      activate: keyFuncs.pureNavigation,
      tags: ["link"]
    }

  } // constructor
} // HtmlElements
