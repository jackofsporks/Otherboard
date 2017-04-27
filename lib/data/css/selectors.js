"use babel";

import keyFuncs from "../../utils/key-funcs.js";

export default class HtmlSelectors {
  constructor() {

    const k = this;  // "k" for "keyboard"


    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
    // ~~~~~~~~~~~~~ NAVIGATION ~~~~~~~~~~~~~ //

    k.selectorsHome_nav = {
      id: "home-page_nav", displayName: "Home", toSimulate: null,
      classes: ["navigation", "css"],  // "link"???
      path: "CSS/Selectors/Home_Page",
      activate: keyFuncs.pureNavigation,
      tags: ["link"]
    }
    k.menu_nav = {
      id: "menu_nav", displayName: "Menu", toSimulate: null,
      classes: ["navigation", "css"],  // "link"???
      path: "CSS/Selectors/Menu",
      activate: keyFuncs.pureNavigation,
      tags: ["link"]
    }
    // k.generic_nav = {
    //   id: "generic_nav", displayName: "Generic", toSimulate: null,
    //   classes: ["navigation", "css", "empty"],  // "link"???
    //   path: "CSS/Selectors/Generic",
    //   activate: keyFuncs.pureNavigation,
    //   tags: ["link"]
    // }
    k.layout_nav = {  // TODO: Better name
      id: "layout_nav", displayName: "Layout", toSimulate: null,
      classes: ["navigation", "css"],  // "link"???
      path: "CSS/Selectors/Layout",
      activate: keyFuncs.pureNavigation,
      tags: ["link"]
    }
    k.headings_nav = {
      id: "headings_nav", displayName: "Headings", toSimulate: null,
      classes: ["navigation", "css"],  // "link"???
      path: "CSS/Selectors/Headings",
      activate: keyFuncs.pureNavigation,
      tags: ["link"]
    }
    // // TODO Just "Form" here???
    // // Interaction/interactive
    // k.interaction_nav = {  // TODO: Better name
    //   id: "interaction_nav", displayName: "Interaction", toSimulate: null,
    //   classes: ["navigation", "css"],  // "link"???
    //   path: "CSS/Selectors/Interaction",
    //   activate: keyFuncs.pureNavigation,
    //   tags: ["link"]
    // }
    k.form_nav = {  // TODO: Better name
      id: "form_nav", displayName: "Form", toSimulate: null,
      classes: ["navigation", "css", "empty"],  // "link"???
      path: "CSS/Selectors/Form",
      activate: keyFuncs.pureNavigation,
      tags: ["link"]
    }
    // Embedded, Files, Images
    k.embedded_nav = {  // TODO: Better name
      id: "embedded_nav", displayName: "Embedded/Files", toSimulate: null,
      classes: ["navigation", "css"],  // "link"???
      path: "CSS/Selectors/Embedded",
      activate: keyFuncs.pureNavigation,
      tags: ["link"]
    }
    k.lists_nav = {
      id: "lists_nav", displayName: "Lists", toSimulate: null,
      classes: ["navigation", "css"],  // "link"???
      path: "CSS/Selectors/Lists",
      activate: keyFuncs.pureNavigation,
      tags: ["link"]
    }
    k.tables_nav = {
      id: "tables_nav", displayName: "Tables", toSimulate: null,
      classes: ["navigation", "css"],  // "link"???
      path: "CSS/Selectors/Tables",
      activate: keyFuncs.pureNavigation,
      tags: ["link"]
    }
    k["document-structure_nav"] = {
      id: "document-structure_nav", displayName: "Document Structure", toSimulate: null,
      classes: ["navigation", "css"],  // "link"???
      path: "CSS/Selectors/Document_Structure",
      activate: keyFuncs.pureNavigation,
      tags: ["link"]
    }




    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
    // ~~~~~~~~~~~~~ ON ALL ~~~~~~~~~~~~~ //

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

    k.leftCurlyBracket = {
      id: "leftCurlyBracket", displayName: "{", toSimulate: "{",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.pureSimulation,
      tags: ["syntax", "left curly bracket"]
    }

    k.rightCurlyBracket = {
      id: "rightCurlyBracket", displayName: "}", toSimulate: "}",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.pureSimulation,
      tags: ["syntax", "right curly bracket"]
    }

    k.greaterThan = {
      id: "greaterThan", displayName: ">", toSimulate: ">",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.pureSimulation,
      tags: ["selector", "punctuation",
      "greater than", "right angle bracket"]
    }

    k.at = {
      id: "at", displayName: "@", toSimulate: "@",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.pureSimulation,
      tags: ["selector", "at", "???"]
    }

    k.singleQuote = {
      id: "singleQuote", displayName: "'", toSimulate: "'",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.pureSimulation,
      tags: ["syntax", "punctuation",
      "single quote", "quotation marks", "air quotes"]
    }

    k.doubleQuote = {
      id: "doubleQuote", displayName: "\"", toSimulate: "\"",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.pureSimulation,
      tags: ["syntax", "punctuation",
      "double quote", "quotation marks", "air quotes"]
    }

    k.forwardSlash = {
      id: "forwardSlash", displayName: "/", toSimulate: "/",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.pureSimulation,
      tags: ["punctuation", "forward slash", "divide", "fraction"]
    }

    k.backwardSlash = {
      id: "backwardSlash", displayName: "\\", toSimulate: "\\",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.pureSimulation,
      tags: ["punctuation", "backward slash", "escape"]
    }

    k.star = {
      id: "star", displayName: "*", toSimulate: "*",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.pureSimulation,
      tags: ["selector", "star", "wildcard"]
    }

    k.plus = {
      id: "plus", displayName: "+", toSimulate: "+",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.pureSimulation,
      tags: ["selector", "plus", "sibling"]
    }

    // k.carret = {
    //   id: "carret", displayName: "^", toSimulate: "^",
    //   classes: ["snippet", "syntax"],
    //   activate: keyFuncs.pureSimulation,
    //   tags: ["selector", "carret", "?"]
    // }

    // k.tilda = {
    //   id: "tilda", displayName: "~", toSimulate: "~",
    //   classes: ["snippet", "syntax"],
    //   activate: keyFuncs.pureSimulation,
    //   tags: ["selector", "tilda", "?"]
    // }

    k.period = {
      id: "period", displayName: ".", toSimulate: ".",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.pureSimulation,
      tags: ["selector", "period", "class"]
    }

    k.hashtag = {
      id: "hashtag", displayName: "#", toSimulate: "#",
      classes: ["snippet", "syntax"],
      activate: keyFuncs.pureSimulation,
      tags: ["selector", "hashtag", "id"]
    }

    k.dash = {
      id: "dash", displayName: "-", toSimulate: "-",
      classes: ["snippet", "variable"],
      activate: keyFuncs.pureSimulation,
      tags: ["variable", "punctuation",
      "dash", "em dash", "hyphen", "minus"]
    }

    k.underscore = {
      id: "underscore", displayName: "_", toSimulate: "_",
      classes: ["snippet", "variable"],
      activate: keyFuncs.pureSimulation,
      tags: ["variable", "punctuation",
      "underscore"]
    }

    k.em = {
      id: "em", displayName: "em", toSimulate: "em",
      classes: ["snippet", "variable"],
      activate: keyFuncs.pureSimulation,
      tags: ["dimension", "em"]
    }

    k.rem = {
      id: "rem", displayName: "rem", toSimulate: "rem",
      classes: ["snippet", "variable"],
      activate: keyFuncs.pureSimulation,
      tags: ["dimension", "rem"]
    }

    k.vh = {
      id: "vh", displayName: "vh", toSimulate: "vh",
      classes: ["snippet", "variable"],
      activate: keyFuncs.pureSimulation,
      tags: ["dimension", "vh"]
    }

    k.px = {
      id: "px", displayName: "px", toSimulate: "px",
      classes: ["snippet", "variable"],
      activate: keyFuncs.pureSimulation,
      tags: ["dimension", "px"]
    }

    k.percent = {
      id: "percent", displayName: "%", toSimulate: "%",
      classes: ["snippet", "variable"],
      activate: keyFuncs.pureSimulation,
      tags: ["dimension", "degree", "%"]
    }

    k.in = {
      id: "in", displayName: "in", toSimulate: "in",
      classes: ["snippet", "variable"],
      activate: keyFuncs.pureSimulation,
      tags: ["dimension", "degree", "in"]
    }


    // colors, file starts/endings, angles, calc()
    // :nth, :last-child, :first-child


    // ~~~~~~~~~~~~~ HOME ~~~~~~~~~~~~~ //
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //

    k.div = {
      id: "div", displayName: "div", toSimulate: "div",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "structural", "generic", "wrapper",
      "div"]
    }

    k.p = {
      id: "p", displayName: "p", toSimulate: "p",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "structural",
      "p", "paragraph", "block"]
    }

    k.a = {
      id: "a", displayName: "a", toSimulate: "a",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "embedded", "phrasing",
      "a", "anchor", "link"] // embedded???
    }

    k.img = {
      id: "img", displayName: "img", toSimulate: "img",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "embedded",
      "img", "image", "pic", "photograph", "file"]
    }

    k.span = {
      id: "span", displayName: "span", toSimulate: "span",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "generic", "wrapper", "span", "inline"] // structure???
    }

    k.ol = {
      id: "ol", displayName: "ol", toSimulate: "ol",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "list", "ordered list"]
    }

    k.ul = {
      id: "ul", displayName: "ul", toSimulate: "ul",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "list", "unordered list"]
    }

    k.li = {
      // No automatic new line. This tool will try to keep micromanagment to a minimum
      id: "li", displayName: "li", toSimulate: "li",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "list", "list item", "item"]
    }

    k.h1 = {
      id: "h1", displayName: "h1", toSimulate: "h1",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "heading", "structure",
      "heading 1", "heading one"]
    }

    k.h2 = {
      id: "h2", displayName: "h2", toSimulate: "h2",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "heading", "structure",
      "heading 2", "heading two"]
    }




    // ~~~~~~~~~~~~~ OUTLINE ~~~~~~~~~~~~~ //
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
    // TODO Name: Page-Structure???

    k.main = {
      id: "main", displayName: "main", toSimulate: "main",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "outline", "layout", "structure", "main"]
    }
    k.nav = {
      id: "nav", displayName: "nav", toSimulate: "nav",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "outline", "layout", "structure", "sectioning",
      "nav", "navigation bar"]
    }
    k.section = {
      id: "section", displayName: "section", toSimulate: "section",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "outline", "layout", "structure", "sectioning",
      "section"]
    }
    k.header = {
      id: "header", displayName: "header", toSimulate: "header",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "outline", "layout", "structure", "header"]
    }
    k.footer = {
      id: "footer", displayName: "footer", toSimulate: "footer",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "outline", "layout", "structure", "footer"]
    }
    k.aside = {
      id: "aside", displayName: "aside", toSimulate: "aside",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "outline", "layout", "structure", "sectioning", "aside"]
    }
    k.article = {
      id: "article", displayName: "article", toSimulate: "article",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "outline", "layout", "structure", "sectioning", "article"]
    }





    // ~~~~~~~~~~~~~ HEADINGS ~~~~~~~~~~~~~ //
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //

    k.h3 = {
      id: "h3", displayName: "h3", toSimulate: "h3",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "heading", "structure",
      "heading 3", "heading three"]
    }

    k.h4 = {
      id: "h4", displayName: "h4", toSimulate: "h4",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "heading", "structure",
      "heading 4", "heading four"]
    }

    k.h5 = {
      id: "h5", displayName: "h5", toSimulate: "h5",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "heading", "structure",
      "heading 5", "heading five"]
    }

    k.h6 = {
      id: "h6", displayName: "h6", toSimulate: "h6",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "heading", "structure",
      "heading 6", "heading six"]
    }

    k.hgroup = {
      id: "hgroup", displayName: "hgroup", toSimulate: "hgroup",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "heading", "structure",
      "hgroup", "heading group"]
    }





    // ~~~~~~~~~~~~~ FORM ~~~~~~~~~~~~~ //
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //

    // TODO when html is did
    k.form = {
      id: "form", displayName: "form", toSimulate: "form",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "interaction", "user", "ui", "ux", "form"]
    }

    k.label = {
      id: "label", displayName: "label", toSimulate: "label",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "interaction", "user", "ui", "ux", "form", "label"]
    }

    k.input = {
      id: "input", displayName: "input", toSimulate: "input",
      classes: ["snippet", "css", "tag"],
      path: "CSS/Selectors/Menu",  // Test worked
      // path: "CSS/Attributes/Input",
      activate: keyFuncs.simulateThenNavigate,
      // activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "interaction", "user", "ui", "ux", "form", "input"]
    }

    k.button = {
      id: "button", displayName: "button", toSimulate: "button",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "interaction", "user", "ui", "ux", "form", "button"]
    }

    k.textarea = {
      id: "textarea", displayName: "textarea", toSimulate: "textarea",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "interaction", "user", "ui", "ux", "form", "textarea"]
    }

    // tab fieldset optgroup option select del
    k.fieldset = {
      id: "fieldset", displayName: "fieldset", toSimulate: "fieldset",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "interaction", "user", "ui", "ux", "form", "fieldset"]
    }

    k.optgroup = {
      id: "optgroup", displayName: "optgroup", toSimulate: "optgroup",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "interaction", "user", "ui", "ux", "form", "optgroup"]
    }

    k.option = {
      id: "option", displayName: "option", toSimulate: "option",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "interaction", "user", "ui", "ux", "form", "option"]
    }

    k.select = {
      id: "select", displayName: "select", toSimulate: "select",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "interaction", "user", "ui", "ux", "form", "select"]
    }

    // fieldset legend datalist object
    // tab param meter output del
    k.legend = {
      id: "legend", displayName: "legend", toSimulate: "legend",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "interaction", "user", "ui", "ux", "form", "legend"]
    }

    k.datalist = {
      id: "datalist", displayName: "datalist", toSimulate: "datalist",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "interaction", "user", "ui", "ux", "form", "datalist"]
    }

    k.object = { // css???
      id: "object", displayName: "object", toSimulate: "object",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "interaction", "user", "ui", "ux", "form", "object"]
    }

    k.param = { // css???
      id: "param", displayName: "param", toSimulate: "param",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "interaction", "user", "ui", "ux", "form", "param"]
    }
    // Not very fully supported
    k.meter = {
      id: "meter", displayName: "meter", toSimulate: "meter",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "interaction", "user", "ui", "ux", "form", "meter"]
    }
    // Not fully supported
    k.output = { // css???
      id: "output", displayName: "output", toSimulate: "output",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "interaction", "user", "ui", "ux", "form", "output"]
    }



    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
    // ~~~~~~~~~~~~~ EMBEDDED ~~~~~~~~~~~~~ //
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //

    k.video = {
      id: "video", displayName: "video", toSimulate: "video",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "embedded", "image", "media", "file",
      "video", "clip", "film"]
    }

    k.canvas = {
      id: "canvas", displayName: "canvas", toSimulate: "canvas",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "embedded", "image", "media",
      "canvas", "drawing"]
    }

    k.svg = {
      id: "svg", displayName: "svg", toSimulate: "svg",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "embedded", "image", "media",
      "svg", "drawing", "vector", "scalable vector graphics"]
    }

    k.audio = {
      id: "audio", displayName: "audio", toSimulate: "audio",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "embedded", "media", "music", "volume", "file",
      "audio", "sound"]  // volume???
    }

    k.iframe = {
      id: "iframe", displayName: "iframe", toSimulate: "iframe",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "embedded", "document", "iframe"]
    }

    k.embed = {
      id: "embed", displayName: "embed", toSimulate: "embed",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "embedded", "embed"]
    }

    k.math = { // css???
      id: "math", displayName: "math", toSimulate: "math",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "embedded", "math"]
    }




    // ~~~~~~~~~~~~~ LISTS ~~~~~~~~~~~~~ //
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //

    // All are above
    // k.ol
    // k.ul
    // k.li





    // ~~~~~~~~~~~~~ TABLES ~~~~~~~~~~~~~ //
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //

    k.table = {
      id: "table", displayName: "table", toSimulate: "table",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "table"]
    }
    k.tr = {
      id: "tr", displayName: "tr", toSimulate: "tr",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "table", "tr", "table row"]
    }
    k.th = {
      id: "th", displayName: "th", toSimulate: "th",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "table",
      "th", "table head", "table heading", "table header"]
    }
    k.td = {
      id: "td", displayName: "td", toSimulate: "td",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "table",
      "td", "table data", "cell", "table cell"]
    }
    k.thead = {
      id: "thead", displayName: "thead", toSimulate: "thead",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "table",
      "thead", "table heading section"]
    }
    k.tfoot = {
      id: "tfoot", displayName: "tfoot", toSimulate: "tfoot",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "table", "tfoot", "table footer section"]
    }
    k.tbody = {
      id: "tbody", displayName: "tbody", toSimulate: "tbody",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "table", "tbody", "table body section"]
    }
    k.colgroup = {
      id: "colgroup", displayName: "colgroup", toSimulate: "colgroup",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "table", "colgroup", "column group attributes"]
    }
    k.col = {
      id: "col", displayName: "col", toSimulate: "col",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "table", "col", "column attributes"]
    }
    k.caption = {
      id: "caption", displayName: "caption", toSimulate: "caption",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "table", "caption"]
    }




    // ~~~~~~~~~~~~~ DOCUMENT STRUCTURE ~~~~~~~~~~~~~ //
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //

    k.html = {
      id: "html", displayName: "html", toSimulate: "html",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "document structure", "root"]
    }
    k.body = {
      id: "body", displayName: "body", toSimulate: "body",
      classes: ["snippet", "css", "tag"],
      activate: keyFuncs.pureSimulation,
      tags: ["css", "selector", "document structure",
      "body"]
    }




    // ~~~~~~~~~~~~~ META ~~~~~~~~~~~~~ //
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
    // Not in CSS

  } // constructor
} // HtmlSelectors
