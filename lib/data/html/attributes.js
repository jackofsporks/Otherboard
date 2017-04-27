"use babel";

import keyFuncs from "../../utils/key-funcs.js";

export default class HtmlAttributes {
  constructor() {

    const k = this;  // "k" for "keyboard"


    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
    // ~~~~~~~~~~~~~ NAVIGATION ~~~~~~~~~~~~~ //

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

    k.ga_p1 = {
      id: "Global_Attributes_Page_1", displayName: "Global", toSimulate: null,
      classes: ["navigation", "html"],  // "link"???
      path: "HTML/Attributes/Global_Attributes_Page_1",
      activate: keyFuncs.pureNavigation,
      tags: ["link"]
    }

    k.ga_p2 = {
      id: "Global_Attributes_Page_2", displayName: "Page 2", toSimulate: null,
      classes: ["navigation", "html"],  // "link"???
      path: "HTML/Attributes/Global_Attributes_Page_2",
      activate: keyFuncs.pureNavigation,
      tags: ["link"]
    }

    k.ga_p3 = {
      id: "Global_Attributes_Page_3", displayName: "Page 3", toSimulate: null,
      classes: ["navigation", "html"],  // "link"???
      path: "HTML/Attributes/Global_Attributes_Page_3",
      activate: keyFuncs.pureNavigation,
      tags: ["link"]
    }



    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
    // ~~~~~~~~~~~~~ ON ALL ~~~~~~~~~~~~~ //

    // : ; = " - _ / .

    k.colon = {
      id: "colon", displayName: ":", toSimulate: ":",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.pureSimulation,
      tags: ["syntax", "assignment", "colon", "pseudo-selector",
      "state", "hover", "active", "visited", "before", "after"] // assignment???
    }

    k.semicolon = {
      id: "semicolon", displayName: ";", toSimulate: ";",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.pureSimulation,
      tags: ["syntax", "semicolon", "terminator"] // assignment???
    }

    // QUESTION should this be in a "symbols" script?
    k.equals = {
      id: "equals", displayName: "=", toSimulate: "=",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.pureSimulation,
      tags: ["syntax", "assignment", "equals", "instantiation"]
    }

    k.doubleQuote = {
      id: "doubleQuote", displayName: "\"", toSimulate: "\"",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.pureSimulation,
      tags: ["syntax", "punctuation", "double quote", "quotation marks", "air quotes"]
    }

    k.dash = {
      id: "dash", displayName: "-", toSimulate: "-",
      classes: ["snippet", "variable"],
      activate: keyFuncs.pureSimulation,
      tags: ["variable", "punctuation", "dash", "em dash", "hyphen", "minus"]
    }

    k.underscore = {
      id: "underscore", displayName: "_", toSimulate: "_",
      classes: ["snippet", "variable"],
      activate: keyFuncs.pureSimulation,
      tags: ["variable", "punctuation", "underscore"]
    }

    k.forwardSlash = {
      id: "forwardSlash", displayName: "/", toSimulate: "/",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.pureSimulation,
      tags: ["syntax", "punctuation", "forward slash", "divide", "fraction"]
    }

    k.period = {
      id: "period", displayName: ".", toSimulate: ".",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.pureSimulation,
      tags: ["period", "file type", "file extension"]
    }



    // ~~~~~~~~~~~~~ SIMULATION ~~~~~~~~~~~~~ //

    // Home Page
    k.alt = {
      id: "alt", displayName: "alt=", toSimulate: "alt=\"\"",
      classes: ["html", "attribute"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute"]
    };

    k.class = {
      id: "class", displayName: "class=", toSimulate: "class=\"\"",
      classes: ["html", "attribute"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute"]
    };

    k.id = {
      id: "id", displayName: "id=", toSimulate: "id=\"\"",
      classes: ["html", "attribute"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute"]
    };

    k.href = {
      id: "href", displayName: "href=", toSimulate: "href=\"\"",
      classes: ["html", "attribute"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute"]
    };

    k.src = {
      id: "src", displayName: "src=", toSimulate: "src=\"\"",
      classes: ["html", "attribute"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute"]
    };

    k.style = {
      id: "style", displayName: "style=", toSimulate: "style=\"\"",
      classes: ["html", "attribute"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute", "inline css", "css"]
    };

    k.title = {
      id: "title", displayName: "title=", toSimulate: "title=\"\"",
      classes: ["html", "attribute", "accessibilty"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute"]
    };


    // GLOBAL ATTRIBUTES
    // Page 1
    // xclass
    // xid
    // xtitle
    // xstyle

    k.data = {
      id: "data", displayName: "data-*=", toSimulate: "data-x=\"\"",
      classes: ["html", "attribute"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute", "javascript", "data"]
    };

    k.lang = {
      id: "lang", displayName: "lang=", toSimulate: "lang=\"\"",
      classes: ["html", "attribute"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute", "language", "localization"]
    };

    k.tabindex = {
      id: "tabindex", displayName: "tabindex=", toSimulate: "tabindex=0",
      classes: ["html", "attribute", "accessibilty"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute", "accessibilty", "interactive"]
    };

    // Page 2
    k.accesskey = {
      id: "accesskey", displayName: "accesskey=", toSimulate: "accesskey=\"g\"",
      classes: ["html", "attribute", "accessibilty"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute", "accessibilty", "interactive"]
    };
    // QUESTION default value or non-default value? If non, how to decide which one?
    k.contenteditable = {
      id: "contenteditable", displayName: "contenteditable=", toSimulate: "contenteditable=\"false\"",
      classes: ["html", "attribute"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute", "interactive"]
    };
    // TODO Nav to id's afterwards
    k.contextmenu = {
      id: "contextmenu", displayName: "contextmenu=", toSimulate: "contextmenu=\"aMenuId\"",
      classes: ["html", "attribute"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute", "interactive"]
    };

    k.dir = {
      id: "dir", displayName: "dir=", toSimulate: "dir=\"rtl\"",
      classes: ["html", "attribute", "accessibilty"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute", "localization"]
    };

    k.hidden = {
      id: "hidden", displayName: "hidden", toSimulate: "hidden",
      classes: ["html", "attribute"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute"]
    };

    k.translate = {
      id: "translate", displayName: "translate=", toSimulate: "translate=",
      classes: ["html", "attribute"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute"]
    };

    // Page 3
    k.draggable = {
      id: "draggable", displayName: "draggable=", toSimulate: "draggable=\"\"",
      classes: ["html", "attribute", "interactive", "experimental"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute", "interactive", "experimental"]
    };

    k.dropzone = {
      id: "dropzone", displayName: "dropzone=", toSimulate: "dropzone=\"\"",
      classes: ["html", "attribute", "experimental"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute", "experimental"]
    };

    k.itemid = {
      id: "itemid", displayName: "itemid=", toSimulate: "itemid=",
      classes: ["html", "attribute", "experimental"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute", "experimental"]
    };

    k.itemprop = {
      id: "itemprop", displayName: "itemprop=", toSimulate: "itemprop=",
      classes: ["html", "attribute", "experimental"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute", "experimental"]
    };

    k.itemref = {
      id: "itemref", displayName: "itemref=", toSimulate: "itemref=",
      classes: ["html", "attribute", "experimental"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute", "experimental"]
    };

    k.itemscope = {
      id: "itemscope", displayName: "itemscope=", toSimulate: "itemscope=",
      classes: ["html", "attribute", "experimental"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute", "experimental"]
    };

    k.itemtype = {
      id: "itemtype", displayName: "itemtype=", toSimulate: "itemtype=",
      classes: ["html", "attribute", "experimental"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute", "experimental"]
    };

    k.slot = {
      id: "slot", displayName: "slot=", toSimulate: "slot=",
      classes: ["html", "attribute", "experimental"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute", "shadow DOM", "experimental"]
    };

    k.spellcheck = {
      id: "spellcheck", displayName: "spellcheck=", toSimulate: "spellcheck=",
      classes: ["html", "attribute", "experimental"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "attribute", "experimental"]
    };


    // ~~~~~~~~~~~~~ IDEAS ~~~~~~~~~~~~~ //
    // Panels:
    // file types (embedded)

    // Keys:
    /* Home-Page-ish
    KEEPING
    alt
    class
    id
    href
    src
    style
    title
    (add data-* when js rolls around)

    COMMON
    class
    id
    href
    src

    LESS COMMON
    data-*
    lang
    style <- conflicted (no: 1, yes: 1, maybe: 1)

    USEFUL-ISH
    alt

    IMPORTANT/SHOULD BE VISIBLE
    title

    MAYBE
    autofocus <- conflicted
    charset
    placeholder
    tabindex <- conflicted
    */

    // input...
    // value, placeholder,

  } // constructor
} // HtmlElements
