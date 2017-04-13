"use babel";

// TODO horizontal/vertical scrolling in a row???
// TODO link to symbols on every page???

let html3rdRow = [
  // class id = < / > ' " - _
  "html.class", "html.id", "html.equals", "html.lessThan", "html.forwardSlash", "html.greaterThan", "html.singleQuote", "html.doubleQuote", "html.dash", "html.underscore",
  "def.enter"
]

let css3rdRow = [
  // . # { } : ; > " - _
  // * ~ ^ @ / ' ???
  "css.period", "css.hashtag", "css.leftCurlyBracket", "css.rightCurlyBracket", "css.colon", "css.semicolon", "css.greaterThan", "css.doubleQuote", "css.dash", "css.underscore",
  "def.enter"
]

export default {
  config: {
    displayName: "osk",
    id: "osk", // TODO: add a count to this when created? (in case of multiple instances - when would that even happen?)
    reset: false, // Reset back to these defaults
    requires: {},
    lastOpenPanel: "HTML/Elements/Home_Page", // default active path if no serialized state exists
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
            displayName: 'Math',
            id: 'Math',
            lastOpenPanel: "ABC/Math/Phone",
            requires: {},
            children: [
              { // panel
                displayName: 'Phone',
                id: 'Phone',
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
            displayName: 'CSS Math',
            id: 'CSS_Math',
            lastOpenPanel: "ABC/CSS_Math/Colors",
            requires: {},
            children: [
              { // panel
                displayName: 'Colors',
                id: 'Colors',
                requires: {
                  "abc": "./data/english/english.js",
                  "def": "./data/default-keys.js"
                },
                content: [
                ]
              }, // Colors
              { // panel
                displayName: 'Dimensions',
                id: 'Dimensions',
                requires: {
                  "abc": "./data/english/english.js",
                  "def": "./data/default-keys.js"
                },
                content: [
                ]
              } // Dimensions
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
                  "html": "./data/html/elements.js"
                },
                content: [
                  // New Page div p a img span link
                  // tab ol ul li h1 h2 script del
                  // class id = < / > ' " - _ enter
                  // pg2? space menu
                  {type: "row", content: [
                    "html.newHTMLDoc", "html.div", "html.p", "html.a", "html.img", "html.span", "html.link"
                  ]},
                  {type: "row", content: [
                    "def.tab",
                    "html.ol", "html.ul", "html.li", "html.h1", "html.h2", "html.script",
                    "def.delete"
                  ]},
                  {type: "row", content: html3rdRow.slice(0)},
                  {type: "row", content: [
                    "def.blank", "def.space", "html.menu_nav"
                  ]}
                ]}, // Home-Page
                {
                  displayName: "Menu",
                  id: "Menu",
                  requires: {
                    "def": "./data/default-keys.js",
                    "html": "./data/html/elements.js"
                  },
                  content: [
                    // Layout Headings Embedded
                    // tab Lists Tables Document Structure Meta del
                    // class id = < / > ' " - _ enter
                    // - space Home
                    {type: "row", content: [
                      // TODO: file bug about multi-selection, then 'tab' doesn't tab on the first selection
                      "html.layout_nav", "html.headings_nav",// "html.generic_nav",
                      "html.form_nav", "html.embedded_nav"
                    ]},
                    {type: "row", content: [
                      "def.tab",
                      "html.lists_nav", "html.tables_nav",
                      "html.document-structure_nav", "html.meta_nav",
                      "def.delete"
                    ]},
                    {type: "row", content: html3rdRow.slice(0)},
                    {type: "row", content: [
                      "def.blank", "def.space", "html.elementsHome_nav"
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
                    "html": "./data/html/elements.js"
                  },
                  content: [
                    // main header nav section footer
                    // tab aside article Headings del
                    // class id = < / > ' " - _ enter
                    // Home space Menu
                    {type: "row", content: [
                      "html.main", "html.header", "html.nav", "html.section", "html.footer"
                    ]},
                    {type: "row", content: [
                      "def.tab", "html.aside", "html.article", "html.headings_nav", "def.delete"
                    ]},
                    {type: "row", content: html3rdRow.slice(0)},
                    {type: "row", content: [
                      "html.elementsHome_nav", "def.space", "html.menu_nav"
                    ]}
                  ]
                }, // Layout
                {
                  displayName: "Headings",
                  id: "Headings",
                  requires: {
                    "def": "./data/default-keys.js",
                    "html": "./data/html/elements.js"
                  },
                  content: [
                    // h1 h2 h3 h4
                    // tab h5 h6 hgroup del
                    // class id = < / > ' " - _ enter
                    // Home space Menu
                    {type: "row", content: [
                      "html.h1", "html.h2", "html.h3", "html.h4"
                    ]},
                    {type: "row", content: [
                      "def.tab", "html.h5", "html.h6", "html.hgroup", "def.delete"
                    ]},
                    {type: "row", content: html3rdRow.slice(0)},
                    {type: "row", content: [
                      "html.elementsHome_nav", "def.space", "html.menu_nav"
                    ]}
                  ]
                }, // Headings
                {
                  displayName: "Form",
                  id: "Form",
                  requires: {
                    "def": "./data/default-keys.js",
                    "html": "./data/html/elements.js"
                  },
                  content: [
                    // form label input button textarea
                    // |> fieldset optgroup option select <
                    // class id = < / > ' " - _ enter
                    // Menu space Page 2
                    {type: "row", content: [
                      "html.form", "html.label", "html.input"
                    ]},
                    {type: "row", content: [
                      "def.tab",
                      "def.delete"
                    ]},
                    {type: "row", content: html3rdRow.slice(0)},
                    {type: "row", content: [
                      "html.elementsHome_nav", "def.space", "html.menu_nav"
                    ]}
                  ]
                }, // Form
                {
                  displayName: "Embedded",
                  id: "Embedded",
                  requires: {
                    "def": "./data/default-keys.js",
                    "html": "./data/html/elements.js"
                  },
                  content: [
                    // img video canvas svg audio
                    // tab iframe embed math object del
                    // class id = < / > ' " - _ enter
                    // Home space Menu
                    {type: "row", content: [
                      "html.img", "html.video", "html.canvas", "html.svg", "html.audio"
                    ]},
                    {type: "row", content: [
                      "def.tab",
                      "html.iframe", "html.embed", "html.math", "html.object",
                      "def.delete"
                    ]},
                    {type: "row", content: html3rdRow.slice(0)},
                    {type: "row", content: [
                      "html.elementsHome_nav", "def.space", "html.menu_nav"
                    ]}
                  ]
                }, // Embedded
                {
                  displayName: "Lists",
                  id: "Lists",
                  requires: {
                    "def": "./data/default-keys.js",
                    "html": "./data/html/elements.js"
                  },
                  content: [
                    // li
                    // tab ol ul del
                    // class id = < / > ' " - _ enter
                    // Home space Menu
                    {type: "row", content: [
                      "html.li"
                    ]},
                    {type: "row", content: [
                      "def.tab", "html.ol", "html.ul", "def.delete"
                    ]},
                    {type: "row", content: html3rdRow.slice(0)},
                    {type: "row", content: [
                      "html.elementsHome_nav", "def.space", "html.menu_nav"
                    ]}
                  ]
                }, // Lists
                {
                  displayName: "Tables",
                  id: "Tables",
                  requires: {
                    "def": "./data/default-keys.js",
                    "html": "./data/html/elements.js"
                  },
                  content: [
                    // table tr th td
                    // tab thead tfoot tbody del
                    // class id = < / > ' " - _ enter
                    // Home space Menu

                    // TODO pros and cons of:
                    // table tr th td thead tfoot tbody
                    // tab colgroup col caption del
                    // class id = < / > ' " - _ enter
                    // Home space Menu
                    {type: "row", content: [
                      "html.table", "html.tr", "html.th", "html.td"
                      // , "html.thead", "html.tfoot", "html.tbody"
                    ]},
                    {type: "row", content: [
                      "def.tab", //"html.colgroup", "html.col", "html.caption",
                      "html.thead", "html.tfoot", "html.tbody",
                      "def.delete"
                    ]},
                    {type: "row", content: html3rdRow.slice(0)},
                    {type: "row", content: [
                      "html.elementsHome_nav", "def.space", "html.menu_nav"
                    ]}
                  ]
                }, // Tables
                {
                  displayName: "Document Structure",
                  id: "Document_Structure",
                  requires: {
                    "def": "./data/default-keys.js",
                    "html": "./data/html/elements.js"
                  },
                  content: [
                    // DOCTYPE html
                    // tab head body del
                    // class id = < / > ' " - _ enter
                    // Home space Menu
                    {type: "row", content: [
                      "html.DOCTYPE", "html.html"
                    ]},
                    {type: "row", content: [
                      "def.tab", "html.head", "html.body",
                      "def.delete"
                    ]},
                    {type: "row", content: html3rdRow.slice(0)},
                    {type: "row", content: [
                      "html.elementsHome_nav", "def.space", "html.menu_nav"
                    ]}
                  ]
                }, // Document-Structure
                {
                  displayName: 'Meta',
                  id: 'Meta',
                  requires: {
                    "def": "./data/default-keys.js",
                    "html": "./data/html/elements.js"
                  },
                  content: [
                    // meta title link script style
                    // tab noscript base del
                    // class id = < / > ' " - _ enter
                    // Home space Menu
                    {type: "row", content: [
                      "html.meta", "html.title", "html.link", "html.script", "html.style"
                    ]},
                    {type: "row", content: [
                      "def.tab", "html.noscript", "html.base",
                      "def.delete"
                    ]},
                    {type: "row", content: html3rdRow.slice(0)},
                    {type: "row", content: [
                      "html.elementsHome_nav", "def.space", "html.menu_nav"
                    ]},
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
                    "def": "./data/default-keys.js"
                  },
                  content: [
                  ]
                }
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
                    "def": "./data/default-keys.js"
                  },
                  content: [
                  ]
                } // Home Page
              ]
            } // Attribute Values
          ]
        }, // HTML
        { // group
          displayName: "CSS",
          id: "CSS",
          requires: {},
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
                    "css": "./data/css/selectors.js"
                  },
                  content: [
                    // body div p a img span link
                    // tab ol ul li h1 h2 script del
                    // class id = < / > ' " - _ enter
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
                      "css": "./data/css/selectors.js"
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
                      "css": "./data/css/selectors.js"
                    },
                    content: [
                      // main header nav section footer
                      // tab aside article Headings del
                      // class id = < / > ' " - _ enter
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
                      "css": "./data/css/selectors.js"
                    },
                    content: [
                      // h1 h2 h3 h4
                      // tab h5 h6 hgroup del
                      // class id = < / > ' " - _ enter
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
                      "css": "./data/css/selectors.js"
                    },
                    content: [
                      // form label input button textarea
                      // |> fieldset optgroup option select <
                      // class id = < / > ' " - _ enter
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
                      "css": "./data/css/selectors.js"
                    },
                    content: [
                      // img video canvas svg audio
                      // tab iframe embed math object del
                      // class id = < / > ' " - _ enter
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
                      "css": "./data/css/selectors.js"
                    },
                    content: [
                      // li
                      // tab ol ul del
                      // class id = < / > ' " - _ enter
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
                      "css": "./data/css/selectors.js"
                    },
                    content: [
                      // table tr th td
                      // tab thead tfoot tbody del
                      // class id = < / > ' " - _ enter
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
                      "css": "./data/css/selectors.js"
                    },
                    content: [
                      // html
                      // tab body del
                      // class id = < / > ' " - _ enter
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
            } // Property Values
          ]
        } // CSS
      ]
  } // osk
} // export
