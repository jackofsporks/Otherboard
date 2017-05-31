"use babel";

// QUESTION horizontal/vertical scrolling in a row/column???
// QUESTION link to symbols/numbers on every page??? Maybe tab at the top
// QUESTION give rows/columns classes??!?!?!

// ~~~~~~~~~~~~~~~~~~~~~~~~~~
// HTML
// ELEMENTS
// </> div span a < / > enter
const elemts3rdRow = [
  "elemts.blankNode", "elemts.div", "elemts.span", "elemts.a", "elemts.lessThan", "elemts.forwardSlash", "elemts.greaterThan",
  "def.enter"
]

// ATTRIBUTES
// : ; = " - _ / . enter
const attrs3rdRow = [
  "attrs.colon", "attrs.semicolon", "attrs.equals", "attrs.doubleQuote", "attrs.dash", "attrs.underscore", "attrs.forwardSlash", "attrs.period",
  "def.enter"
]

// VALUES

// ~~~~~~~~~~~~~~~~~~~~~~~~~~
// CSS
// SELECTORS
// QUESTION consistency or context/message? Open quote doesn't really belong in that position for css, but it's more consistent with the html layout
// : ; = " - _ / . enter
// . # > " - _ , { } enter
// * ~ ^ @ / ' ???
const css3rdRow = [
  "css.period", "css.hashtag", "css.greaterThan", "css.doubleQuote", "css.dash", "css.underscore", "symb.comma", "css.leftCurlyBracket", "css.rightCurlyBracket",
  "def.enter"
]

// PROPERTIES

// VALUES


// ~~~~~~~~~~~~~~~~~~~~~~~~~~
export default {
  history: {
    data: [],
    position: 0
  },
  config: {
    debug: {
      type: "object",
      properties: {
        reset: {
          type: "boolean", default: false
        },
        test:{
          type: "boolean", default: true
        }
      }
    }
    // styles: {}, //?
    // snippets: {}, //?
  },
  // QUESTION should keys contain their tags or should custom settings contain those...?
  contents: { // QUESTION name? core sturcture data contents board-data config rig
    displayName: "osk",
    id: "osk", // TODO: add a count to this when created? (in case of multiple instances - when would that even happen?)
    reset: false, // Reset back to these defaults
    requires: {},
    lastOpenPanel: "HTML/Elements/Home_Page", // default active path if no serialized state exists,
    children: [
        // BoardGroups/LanguageGroups
      {
        displayName: "ABC",
        id: "ABC",
        lastOpenPanel: "ABC/Abc/Lowercase",
        requires: {},
        children: [
          // Boards/Categories
          {
            displayName: "Abc",
            id: "Abc",
            lastOpenPanel: "ABC/Abc/Lowercase",
            requires: {},
            children: [
            // Panels
              {
                displayName: "Lowercase",
                id: "Lowercase",
                requires: {
                  "abc": "./data/english/english.js",
                  "def": "./data/default-keys.js"
                },
                content: [
              // Rows
                  {
                    type: "row",
                    content: [
                      "abc.q", "abc.w", "abc.e", "abc.r", "abc.t", "abc.y", "abc.u", "abc.i", "abc.o", "abc.p"
                    ]
                  }, // type/row
                  {
                    type: "row",
                    content: [
                      "def.tab", "abc.a", "abc.s", "abc.d", "abc.f", "abc.g", "abc.h", "abc.j", "abc.k", "abc.l",
                      "def.delete"
                    ]
                  }, // type/row
                  {
                    type: "row",
                    content: [
                      "abc.z", "abc.x", "abc.c", "abc.v", "abc.b", "abc.n", "abc.m",
                      "def.enter"
                    ]
                  }, // type/row
                  {
                    type: "row",
                    content: [
                      "abc.uppercase", "def.space", "def.blank"
                    ]
                  }, // type/row
                ]
              }, // Lowercase
              {
                displayName: "Uppercase",
                id: "Uppercase",
                requires: {
                  "abc": "./data/english/english.js",
                  "def": "./data/default-keys.js"
                },
                content: [
                  // Structures
                  {
                    type: "row",
                    // Keys (TODO: nested structures)
                    content: [
                      "abc.Q", "abc.W", "abc.E", "abc.R", "abc.T", "abc.Y", "abc.U", "abc.I", "abc.O", "abc.P"
                    ]
                  }, // type/row
                  {
                    type: "row",
                    content: [
                      "def.tab", "abc.A", "abc.S", "abc.D", "abc.F", "abc.G", "abc.H", "abc.J", "abc.K", "abc.L",
                      "def.delete"
                    ]
                  }, // type/row
                  {
                    type: "row",
                    content: [
                      "abc.Z", "abc.X", "abc.C", "abc.V", "abc.B", "abc.N", "abc.M",
                      "def.enter"
                    ]
                  }, // type/row
                  {
                    type: "row",
                    content: [
                      "abc.lowercase", "def.space", "def.blank"
                    ]
                  } // type/row
                ] // Uppercase children
              } // Uppercase
            ] // Abc children
          }, // Abc
          { // board
            displayName: "Math",
            id: "Math",
            lastOpenPanel: "ABC/Math/Home_Page",
            requires: {},
            children: [
              { // panel
                // A keypad-type look thing
                displayName: "Home Page",
                id: "Home_Page",
                requires: {
                  "abc": "./data/english/english.js",
                  "def": "./data/default-keys.js"
                },
                content: [
                ]
              } // Phone
            ]
          }, // Math
          { // board
            displayName: "CSS Math",
            id: "CSS_Math",
            lastOpenPanel: "ABC/CSS_Math/Home_Page",
            requires: {},
            children: [
              { // panel
                // NOTE really a menu page
                displayName: "Home Page",
                id: "Home_Page",
                requires: {
                  "abc": "./data/english/english.js",
                  "def": "./data/default-keys.js",
                  "cssM": "./data/css/math.js"
                },
                content: [
                  {type: "row", content: ["def.blank"]},
                  {type: "row", content: ["cssM.dimensionsNav"]},
                  {type: "row", content: ["def.blank"]},
                  {type: "row", content: ["def.blank"]}
                ]
              }, // Home Page
              { // panel
                displayName: "Dimensions",
                id: "Dimensions",
                requires: {
                  "abc": "./data/english/english.js",
                  "def": "./data/default-keys.js",
                  "math": "./data/english/math.js",
                  "sym": "./data/english/symbols.js",
                  "cssM": "./data/css/math.js"
                },
                // TODO parenthesis,
                content: [
                  {type: "row", content: [ // NOTE a panel is basically one big column to contain rows properly, so we need to add a row to contain columns properly
                    {type: "column", classes: ["right-aligned"], content: [
                      {type: "row", content: ["cssM.em", "cssM.rem"]},
                      {type: "row", content: ["cssM.in", "cssM.cm"]},
                      {type: "row", content: ["cssM.vh", "cssM.vw"]},
                      {type: "row", content: ["sym.period"]}
                    ]},
                    {type: "column", content: [
                      {type: "row", content: ["math.1", "math.2", "math.3"]},
                      {type: "row", content: ["math.4", "math.5", "math.6"]},
                      {type: "row", content: ["math.7", "math.8", "math.9"]},
                      {type: "row", content: ["math.0"]}
                    ]},
                    {type: "column", classes: ["left-aligned"], content: [
                      {type: "row", content: ["sym.percent"]},
                      {type: "row", content: ["sym.forwardSlash", "sym.star"]},
                      {type: "row", content: ["sym.plus", "sym.dash"]},
                      {type: "row", content: ["sym.period"]}
                    ]}
                  ]}
                ]
              }, // Dimensions
              { // panel
                displayName: "Colors",
                id: "Colors",
                requires: {
                  "abc": "./data/english/english.js",
                  "def": "./data/default-keys.js"
                },
                content: [
                ]
              } // Colors
            ]
          } // CSS Math
        ] // ABC chilren
      }, // ABC
      {
        displayName: 'HTML',
        id: 'HTML',
        requires: {},
        lastOpenPanel: 'HTML/Elements/Home_Page',
        children: [
          { // board
            displayName: 'Elements',
            id: 'Elements',
            requires: {},
            lastOpenPanel: 'HTML/Elements/Home_Page',
            children: [ // TODO: Tags? More or less useful to beginners?
              {
                displayName: 'Home Page',
                id: 'Home_Page',
                requires: {
                  "def": "./data/default-keys.js",
                  "elemts": "./data/html/elements.js"
                },
                content: [
                  // New Page p img h1 h2
                  // tab ol ul li link script del
                  // </> div span a < / > enter
                  // pg2? space menu
                  {type: "row", content: [
                    "elemts.newHTMLDoc", "elemts.p", "elemts.img", "elemts.h1", "elemts.h2"
                  ]},
                  {type: "row", content: [
                    "def.tab", "elemts.ol", "elemts.ul", "elemts.li", "elemts.link", "elemts.script",
                    "def.delete"
                  ]},
                  {type: "row", content: elemts3rdRow.slice(0)},
                  {type: "row", classes: ["bottom-row"], content: [
                    {type: "column", classes: ["left", "right-aligned"], content: []},
                    {type: "column", classes: ["center"], content: ["def.space"]},
                    {type: "column", classes: ["right", "left-aligned"], content: ["elemts.menu_nav"]}

                    // "def.space", "elemts.menu_nav"
                  ]}
                ]}, // Home-Page2
                {
                  displayName: 'Home Page2',
                  id: 'Home_Page2',
                  requires: {
                    "def": "./data/default-keys.js",
                    "elemts": "./data/html/elements.js"
                  },
                  content: [
                    // New Page div p a img span link
                    // tab ol ul li h1 h2 script del
                    // </> div span a < / > enter
                    // pg2? space menu
                    {type: "row", content: [
                      "elemts.newHTMLDoc", "elemts.div", "elemts.p", "elemts.a", "elemts.img", "elemts.span", "elemts.link"
                    ]},
                    {type: "row", content: [
                      "def.tab",
                      "elemts.ol", "elemts.ul", "elemts.li", "elemts.h1", "elemts.h2", "elemts.script",
                      "def.delete"
                    ]},
                    {type: "row", content: elemts3rdRow.slice(0)},
                    {type: "row", content: [
                      "def.blank", "def.space", "elemts.menu_nav"
                    ]}
                  ]}, // Home-Page2
                {
                  displayName: "Menu",
                  id: "Menu",
                  requires: {
                    "def": "./data/default-keys.js",
                    "elemts": "./data/html/elements.js"
                  },
                  content: [
                    // Layout Headings Embedded
                    // tab Lists Tables Document Structure Meta del
                    // </> div span a < / > enter
                    // - space Home
                    {type: "row", content: [
                      // TODO: file bug about multi-selection, then 'tab' doesn't tab on the first selection
                      "elemts.layout_nav", "elemts.headings_nav",// "elemts.generic_nav",
                      "elemts.form_nav", "elemts.embedded_nav"
                    ]},
                    {type: "row", content: [
                      "def.tab",
                      "elemts.lists_nav", "elemts.tables_nav",
                      "elemts.document-structure_nav", "elemts.meta_nav",
                      "def.delete"
                    ]},
                    {type: "row", content: elemts3rdRow.slice(0)},
                    {type: "row", content: [
                      "def.blank", "def.space", "elemts.elementsHome_nav"
                    ]}
                  ]
                }, // Menu
                /*
                Sectioning/Layout (sectioning)
                Header/Headings (headings)
                Generic/Containers/Wrappers (generic)
                Embedded/Files (Embedded)
                Lists
                Tables
                Document Structure (document-structure)
                Meta (meta)

                Interactive
                Text Stories/ Text Meta
                */
                {
                  displayName: "Layout",
                  id: "Layout",
                  requires: {
                    "def": "./data/default-keys.js",
                    "elemts": "./data/html/elements.js"
                  },
                  content: [
                    // main header nav section footer
                    // tab aside article Headings del
                    // </> div span a < / > enter
                    // Home space Menu
                    {type: "row", content: [
                      "elemts.main", "elemts.header", "elemts.nav", "elemts.section", "elemts.footer"
                    ]},
                    {type: "row", content: [
                      "def.tab", "elemts.aside", "elemts.article", "elemts.headings_nav", "def.delete"
                    ]},
                    {type: "row", content: elemts3rdRow.slice(0)},
                    {type: "row", content: [
                      "elemts.elementsHome_nav", "def.space", "elemts.menu_nav"
                    ]}
                  ]
                }, // Layout
                {
                  displayName: "Headings",
                  id: "Headings",
                  requires: {
                    "def": "./data/default-keys.js",
                    "elemts": "./data/html/elements.js"
                  },
                  content: [
                    // h1 h2 h3 h4
                    // tab h5 h6 hgroup del
                    // </> div span a < / > enter
                    // Home space Menu
                    {type: "row", content: [
                      "elemts.h1", "elemts.h2", "elemts.h3", "elemts.h4"
                    ]},
                    {type: "row", content: [
                      "def.tab", "elemts.h5", "elemts.h6", "elemts.hgroup", "def.delete"
                    ]},
                    {type: "row", content: elemts3rdRow.slice(0)},
                    {type: "row", content: [
                      "elemts.elementsHome_nav", "def.space", "elemts.menu_nav"
                    ]}
                  ]
                }, // Headings
                {
                  displayName: "Form",
                  id: "Form",
                  requires: {
                    "def": "./data/default-keys.js",
                    "elemts": "./data/html/elements.js"
                  },
                  content: [
                    // form label input button textarea
                    // |> fieldset optgroup option select <
                    // </> div span a < / > enter
                    // Menu space Page 2
                    {type: "row", content: [
                      "elemts.form", "elemts.label", "elemts.input"
                    ]},
                    {type: "row", content: [
                      "def.tab",
                      "def.delete"
                    ]},
                    {type: "row", content: elemts3rdRow.slice(0)},
                    {type: "row", content: [
                      "elemts.elementsHome_nav", "def.space", "elemts.menu_nav"
                    ]}
                  ]
                }, // Form
                {
                  displayName: "Embedded",
                  id: "Embedded",
                  requires: {
                    "def": "./data/default-keys.js",
                    "elemts": "./data/html/elements.js"
                  },
                  content: [
                    // img video canvas svg audio
                    // tab iframe embed math object del
                    // </> div span a < / > enter
                    // Home space Menu
                    {type: "row", content: [
                      "elemts.img", "elemts.video", "elemts.canvas", "elemts.svg", "elemts.audio"
                    ]},
                    {type: "row", content: [
                      "def.tab",
                      "elemts.iframe", "elemts.embed", "elemts.math", "elemts.object",
                      "def.delete"
                    ]},
                    {type: "row", content: elemts3rdRow.slice(0)},
                    {type: "row", content: [
                      "elemts.elementsHome_nav", "def.space", "elemts.menu_nav"
                    ]}
                  ]
                }, // Embedded
                {
                  displayName: "Lists",
                  id: "Lists",
                  requires: {
                    "def": "./data/default-keys.js",
                    "elemts": "./data/html/elements.js"
                  },
                  content: [
                    // li
                    // tab ol ul del
                    // </> div span a < / > enter
                    // Home space Menu
                    {type: "row", content: [
                      "elemts.li"
                    ]},
                    {type: "row", content: [
                      "def.tab", "elemts.ol", "elemts.ul", "def.delete"
                    ]},
                    {type: "row", content: elemts3rdRow.slice(0)},
                    {type: "row", content: [
                      "elemts.elementsHome_nav", "def.space", "elemts.menu_nav"
                    ]}
                  ]
                }, // Lists
                {
                  displayName: "Tables",
                  id: "Tables",
                  requires: {
                    "def": "./data/default-keys.js",
                    "elemts": "./data/html/elements.js"
                  },
                  content: [
                    // table tr th td
                    // tab thead tfoot tbody del
                    // </> div span a < / > enter
                    // Home space Menu

                    // TODO pros and cons of:
                    // table tr th td thead tfoot tbody
                    // tab colgroup col caption del
                    // </> div span a < / > enter
                    // Home space Menu
                    {type: "row", content: [
                      "elemts.table", "elemts.tr", "elemts.th", "elemts.td"
                      // , "elemts.thead", "elemts.tfoot", "elemts.tbody"
                    ]},
                    {type: "row", content: [
                      "def.tab", //"elemts.colgroup", "elemts.col", "elemts.caption",
                      "elemts.thead", "elemts.tfoot", "elemts.tbody",
                      "def.delete"
                    ]},
                    {type: "row", content: elemts3rdRow.slice(0)},
                    {type: "row", content: [
                      "elemts.elementsHome_nav", "def.space", "elemts.menu_nav"
                    ]}
                  ]
                }, // Tables
                {
                  displayName: "Document Structure",
                  id: "Document_Structure",
                  requires: {
                    "def": "./data/default-keys.js",
                    "elemts": "./data/html/elements.js"
                  },
                  content: [
                    // DOCTYPE html
                    // tab head body del
                    // </> div span a < / > enter
                    // Home space Menu
                    {type: "row", content: [
                      "elemts.DOCTYPE", "elemts.html"
                    ]},
                    {type: "row", content: [
                      "def.tab", "elemts.head", "elemts.body",
                      "def.delete"
                    ]},
                    {type: "row", content: elemts3rdRow.slice(0)},
                    {type: "row", content: [
                      "elemts.elementsHome_nav", "def.space", "elemts.menu_nav"
                    ]}
                  ]
                }, // Document-Structure
                {
                  displayName: 'Meta',
                  id: 'Meta',
                  requires: {
                    "def": "./data/default-keys.js",
                    "elemts": "./data/html/elements.js"
                  },
                  content: [
                    // meta title link script style
                    // tab noscript base del
                    // </> div span a < / > enter
                    // Home space Menu
                    {type: "row", content: [
                      "elemts.meta", "elemts.title", "elemts.link", "elemts.script", "elemts.style"
                    ]},
                    {type: "row", content: [
                      "def.tab", "elemts.noscript", "elemts.base",
                      "def.delete"
                    ]},
                    {type: "row", content: elemts3rdRow.slice(0)},
                    {type: "row", content: [
                      "elemts.elementsHome_nav", "def.space", "elemts.menu_nav"
                    ]}
                  ]
                } // Meta
              ]
            }, // Elements
            { // board
              displayName: "Attributes",
              id: "Attributes",
              lastOpenPanel: "HTML/Attributes/Home_Page",
              requires: {},
              children: [
                { // panel
                  displayName: "Home Page",
                  id: "Home_Page",
                  requires: {
                    "def": "./data/default-keys.js",
                    "attrs": "./data/html/attributes.js"
                  },
                  // class id href src title
                  // tab alt style del
                  // : ; = " - _ / . enter
                  // ___ space Menu
                  content: [
                    {type: "row", content: [
                      "attrs.class", "attrs.id", "attrs.href", "attrs.src", "attrs.title"
                    ]},
                    {type: "row", content: [
                      "def.tab", "attrs.style", "attrs.alt",
                      "def.delete"
                    ]},
                    {type: "row", content: attrs3rdRow.slice(0)},
                    {type: "row", content: [
                      "def.blank", "def.space", "attrs.menu_nav"
                    ]}
                  ]
                }, // Home Page
                { // panel
                  displayName: "Menu",
                  id: "Menu",
                  requires: {
                    "def": "./data/default-keys.js",
                    "attrs": "./data/html/attributes.js"
                  },
                  //
                  // tab  del
                  // : ; = " - _ / . enter
                  // Home space ___
                  content: [
                    {type: "row", content: [
                      "attrs.ga_p1"
                    ]},
                    {type: "row", content: [
                      "def.tab",
                      "def.delete"
                    ]},
                    {type: "row", content: attrs3rdRow.slice(0)},
                    {type: "row", content: [
                      "attrs.attributesHome_nav", "def.space", "def.blank"
                    ]}
                  ]
                }, // Menu
                { // panel
                  displayName: "Global Attributes, Page 1",
                  id: "Global_Attributes_Page_1",
                  requires: {
                    "def": "./data/default-keys.js",
                    "attrs": "./data/html/attributes.js"
                  },
                  // class id title lang
                  // tab style data del
                  // : ; = " - _ / . enter
                  // Menu space Page 2
                  content: [
                    {type: "row", content: [
                      "attrs.class", "attrs.id", "attrs.title", "attrs.lang"
                    ]},
                    {type: "row", content: [
                      "def.tab", "attrs.style", "attrs.data",
                      "def.delete"
                    ]},
                    {type: "row", content: attrs3rdRow.slice(0)},
                    {type: "row", content: [
                      "attrs.menu_nav", "def.space", "attrs.ga_p2"
                    ]}
                  ]
                }, // Global Attributes, Page 1
                { // panel
                  displayName: "Global Attributes, Page 2",
                  id: "Global_Attributes_Page_2",
                  requires: {
                    "def": "./data/default-keys.js",
                    "attrs": "./data/html/attributes.js"
                  },
                  // accesskey contenteditable contextmenu dir
                  // tab hidden tabindex translate del
                  // : ; = " - _ / . enter
                  // Page 1 space Page 3
                  content: [
                    {type: "row", content: [
                      "attrs.accesskey", "attrs.contenteditable", "attrs.contextmenu", "attrs.dir"
                    ]},
                    {type: "row", content: [
                      "def.tab", "attrs.hidden", "attrs.tabindex", "attrs.translate",
                      "def.delete"
                    ]},
                    {type: "row", content: attrs3rdRow.slice(0)},
                    {type: "row", content: [
                      "attrs.ga_p1>>Page 1", "def.space", "attrs.ga_p3"
                      // "attrs.ga_p1:@Page 1", "def.space", "attrs.ga_p3"
                    ]}
                  ]
                }, // Global Attributes, Page 2
                { // panel
                  displayName: "Global Attributes, Page 3",
                  id: "Global_Attributes_Page_3",
                  requires: {
                    "def": "./data/default-keys.js",
                    "attrs": "./data/html/attributes.js"
                  },
                  // draggable dropzone itemid itemprop itemref
                  // tab itemscope itemtype slot spellcheck del
                  // : ; = " - _ / . enter
                  // Page 2 space ___
                  content: [
                    {type: "row", content: [
                      "attrs.draggable", "attrs.dropzone", "attrs.itemid", "attrs.itemprop", "attrs.itemref"
                    ]},
                    {type: "row", content: [
                      "def.tab", "attrs.itemscope", "attrs.itemtype", "attrs.slot", "attrs.spellcheck",
                      "def.delete"
                    ]},
                    {type: "row", content: attrs3rdRow.slice(0)},
                    {type: "row", content: [
                      "attrs.ga_p2", "def.space", "def.blank"
                    ]}
                  ]
                }, // Global Attributes, Page 3
              ]
            }, // Attributes
            { // board
              displayName: "Attribute Values",
              id: "Attribute_Values",
              lastOpenPanel: "HTML/Attribute_Values/Home_Page",
              requires: {},
              children: [
                { // panel
                  displayName: "Home Page",
                  id: "Home_Page",
                  requires: {
                    "def": "./data/default-keys.js",
                    "attrs": "./data/html/attributes.js"
                  },
                  // meta title link script style
                  // tab noscript base del
                  // </> div span a < / > enter
                  // ___ space Menu
                  content: [
                    // {type: "row", content: [
                    //   // "elemts.meta", "elemts.title", "elemts.link", "elemts.script", "elemts.style"
                    // ]},
                    // {type: "row", content: [
                    //   // "def.tab", "elemts.noscript", "elemts.base",
                    //   // "def.delete"
                    // ]},
                    // {type: "row", content: attrVal3rdRow.slice(0)},
                    // {type: "row", content: [
                    //   "def.blank", "def.space", "attrs.menu_nav"
                    // ]}
                  ]
                }, // Home Page
                { // panel
                  displayName: "Menu",
                  id: "Menu",
                  requires: {
                    "def": "./data/default-keys.js",
                    "attrs": "./data/html/attributes.js"
                  },
                  // meta title link script style
                  // tab noscript base del
                  // </> div span a < / > enter
                  // Menu space Menu
                  content: [
                    // {type: "row", content: [
                    //   // "elemts.meta", "elemts.title", "elemts.link", "elemts.script", "elemts.style"
                    // ]},
                    // {type: "row", content: [
                    //   // "def.tab", "elemts.noscript", "elemts.base",
                    //   // "def.delete"
                    // ]},
                    // {type: "row", content: attrVal3rdRow.slice(0)},
                    // {type: "row", content: [
                    //   "def.blank", "def.space", "attrs.menu_nav"
                    // ]}
                  ]
                }, // Menu
              ]
            }, // Attribute Values
            { // board
              displayName: "User Created",
              id: "User_Created",
              lastOpenPanel: "HTML/User_Created/Home_Page",
              requires: {},
              children: [
                { // panel
                  displayName: "Home Page",
                  id: "Home_Page",
                  requires: {
                    "def": "./data/default-keys.js"
                  },
                  // meta title link script style
                  // tab noscript base del
                  // </> div span a < / > enter
                  // Home space Menu
                  content: [
                    // {type: "row", content: [
                    //   // "elemts.meta", "elemts.title", "elemts.link", "elemts.script", "elemts.style"
                    // ]},
                    // {type: "row", content: [
                    //   // "def.tab", "elemts.noscript", "elemts.base",
                    //   // "def.delete"
                    // ]},
                    // {type: "row", content: attrVal3rdRow.slice(0)},
                    // {type: "row", content: [
                    //   "def.blank", "def.space", "attrs.menu_nav"
                    // ]}
                  ]
                } // Home Page
              ]
            } // User Created
          ]
        }, // HTML
        { // group
          displayName: "CSS",
          id: "CSS",
          requires: {"symb": "./data/english/symbols.js"}, //???How to use in child???
          lastOpenPanel: "CSS/Selectors/Home_Page",
          children: [
            { // board
              displayName: "Selectors",
              id: "Selectors",
              lastOpenPanel: "CSS/Selectors/Home_Page",
              requires: {},
              children: [
                { // panel
                  displayName: 'Home Page',
                  id: 'Home_Page',
                  requires: {
                    "def": "./data/default-keys.js",
                    "css": "./data/css/selectors.js",
                    "symb": "./data/english/symbols.js"
                  },
                  content: [
                    // body div p a img span link
                    // tab ol ul li h1 h2 script del
                    // . # > " - _ { } enter
                    // pg2? space menu
                    {type: "row", content: [
                      "css.body", "css.div", "css.p", "css.a", "css.img", "css.span"
                    ]},
                    {type: "row", content: [
                      "def.tab",
                      "css.ol", "css.ul", "css.li", "css.h1", "css.h2",
                      "def.delete"
                    ]},
                    {type: "row", content: css3rdRow.slice(0)},
                    {type: "row", content: [
                      "def.blank", "def.space", "css.menu_nav"
                    ]}
                  ]}, // Home-Page
                  {
                    displayName: "Menu",
                    id: "Menu",
                    requires: {
                      "def": "./data/default-keys.js",
                      "css": "./data/css/selectors.js",
                      "symb": "./data/english/symbols.js"
                    },
                    content: [
                      // Layout Headings Embedded
                      // tab Lists Tables Document Structure del
                      // 3rd row
                      // - space Home
                      {type: "row", content: [
                        "css.layout_nav", "css.headings_nav", "css.form_nav", "css.embedded_nav"
                      ]},
                      {type: "row", content: [
                        "def.tab",
                        "css.lists_nav", "css.tables_nav", "css.document-structure_nav",
                        "def.delete"
                      ]},
                      {type: "row", content: css3rdRow.slice(0)},
                      {type: "row", content: [
                        "def.blank", "def.space", "css.selectorsHome_nav"  // DO IN EVERY SINGLE HTML TO CSS CONVERSION
                      ]}
                    ]
                  }, // Menu
                  {
                    displayName: "Layout",
                    id: "Layout",
                    requires: {
                      "def": "./data/default-keys.js",
                      "css": "./data/css/selectors.js",
                      "symb": "./data/english/symbols.js"
                    },
                    content: [
                      // main header nav section footer
                      // tab aside article Headings del
                      // . # > " - _ { } enter
                      // Home space Menu
                      {type: "row", content: [
                        "css.main", "css.header", "css.nav", "css.section", "css.footer"
                      ]},
                      {type: "row", content: [
                        "def.tab", "css.aside", "css.article", "css.headings_nav", "def.delete"
                      ]},
                      {type: "row", content: css3rdRow.slice(0)},
                      {type: "row", content: [
                        "css.selectorsHome_nav", "def.space", "css.menu_nav"
                      ]}
                    ]
                  }, // Layout
                  {
                    displayName: "Headings",
                    id: "Headings",
                    requires: {
                      "def": "./data/default-keys.js",
                      "css": "./data/css/selectors.js",
                      "symb": "./data/english/symbols.js"
                    },
                    content: [
                      // h1 h2 h3 h4
                      // tab h5 h6 hgroup del
                      // . # > " - _ { } enter
                      // Home space Menu
                      {type: "row", content: [
                        "css.h1", "css.h2", "css.h3", "css.h4"
                      ]},
                      {type: "row", content: [
                        "def.tab", "css.h5", "css.h6", "css.hgroup", "def.delete"
                      ]},
                      {type: "row", content: css3rdRow.slice(0)},
                      {type: "row", content: [
                        "css.selectorsHome_nav", "def.space", "css.menu_nav"
                      ]}
                    ]
                  }, // Headings
                  {
                    displayName: "Form",
                    id: "Form",
                    requires: {
                      "def": "./data/default-keys.js",
                      "css": "./data/css/selectors.js",
                      "symb": "./data/english/symbols.js"
                    },
                    content: [
                      // form label input button textarea
                      // |> fieldset optgroup option select <
                      // . # > " - _ { } enter
                      // Menu space Page 2
                      {type: "row", content: [
                        "css.form", "css.label", "css.input"
                      ]},
                      {type: "row", content: [
                        "def.tab",
                        "def.delete"
                      ]},
                      {type: "row", content: css3rdRow.slice(0)},
                      {type: "row", content: [
                        "css.selectorsHome_nav", "def.space", "css.menu_nav"
                      ]}
                    ]
                  }, // Form
                  {
                    displayName: "Embedded",
                    id: "Embedded",
                    requires: {
                      "def": "./data/default-keys.js",
                      "css": "./data/css/selectors.js",
                      "symb": "./data/english/symbols.js"
                    },
                    content: [
                      // img video canvas svg audio
                      // tab iframe embed math object del
                      // . # > " - _ { } enter
                      // Home space Menu
                      {type: "row", content: [
                        "css.img", "css.video", "css.canvas", "css.svg", "css.audio"
                      ]},
                      {type: "row", content: [
                        "def.tab",
                        "css.iframe", "css.embed", "css.math", "css.object",
                        "def.delete"
                      ]},
                      {type: "row", content: css3rdRow.slice(0)},
                      {type: "row", content: [
                        "css.selectorsHome_nav", "def.space", "css.menu_nav"
                      ]}
                    ]
                  }, // Embedded
                  {
                    displayName: "Lists",
                    id: "Lists",
                    requires: {
                      "def": "./data/default-keys.js",
                      "css": "./data/css/selectors.js",
                      "symb": "./data/english/symbols.js"
                    },
                    content: [
                      // li
                      // tab ol ul del
                      // . # > " - _ { } enter
                      // Home space Menu
                      {type: "row", content: [
                        "css.li"
                      ]},
                      {type: "row", content: [
                        "def.tab", "css.ol", "css.ul", "def.delete"
                      ]},
                      {type: "row", content: css3rdRow.slice(0)},
                      {type: "row", content: [
                        "css.selectorsHome_nav", "def.space", "css.menu_nav"
                      ]}
                    ]
                  }, // Lists
                  {
                    displayName: "Tables",
                    id: "Tables",
                    requires: {
                      "def": "./data/default-keys.js",
                      "css": "./data/css/selectors.js",
                      "symb": "./data/english/symbols.js"
                    },
                    content: [
                      // table tr th td
                      // tab thead tfoot tbody del
                      // . # > " - _ { } enter
                      // Home space Menu
                      {type: "row", content: [
                        "css.table", "css.tr", "css.th", "css.td"
                        // , "css.thead", "css.tfoot", "css.tbody"
                      ]},
                      {type: "row", content: [
                        "def.tab", //"css.colgroup", "css.col", "css.caption",
                        "css.thead", "css.tfoot", "css.tbody",
                        "def.delete"
                      ]},
                      {type: "row", content: css3rdRow.slice(0)},
                      {type: "row", content: [
                        "css.selectorsHome_nav", "def.space", "css.menu_nav"
                      ]}
                    ]
                  }, // Tables
                  {
                    displayName: "Document Structure",
                    id: "Document_Structure",
                    requires: {
                      "def": "./data/default-keys.js",
                      "css": "./data/css/selectors.js",
                      "symb": "./data/english/symbols.js"
                    },
                    content: [
                      // html
                      // tab body del
                      // . # > " - _ { } enter
                      // Home space Menu
                      {type: "row", content: [
                        "css.html"
                      ]},
                      {type: "row", content: [
                        "def.tab", "css.body",
                        "def.delete"
                      ]},
                      {type: "row", content: css3rdRow.slice(0)},
                      {type: "row", content: [
                        "css.selectorsHome_nav", "def.space", "css.menu_nav"
                      ]}
                    ]
                  } // Document-Structure
              ]
            }, // Selectors
            { // board
              displayName: "Properties",
              id: "Properties",
              lastOpenPanel: "CSS/Properties/Home_Page",
              requires: {},
              children: [
                { // panel
                  displayName: "Home Page",
                  id: "Home_Page",
                  requires: {
                    "def": "./data/default-keys.js"
                  },
                  content: [
                  ]
                } // Home Page
              ]
            }, // Properties
            { // board
              displayName: "Property Values",
              id: "Property_Values",
              lastOpenPanel: "CSS/Property_Values/Home_Page",
              requires: {"symb": "./data/english/symbols.js"},
              children: [
                { // panel
                  displayName: "Home Page",
                  id: "Home_Page",
                  requires: {
                    "def": "./data/default-keys.js"
                  },
                  content: [
                  ]
                } // Home Page
              ]
            } // Property Values
          ]
        } // CSS
      ]
  } // osk
} // export
