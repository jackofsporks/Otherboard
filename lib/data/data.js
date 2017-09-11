'use babel';

// // Try building objects up here to place in multiple locations
// let row = [];
// row.type = 'row';
// let column = [];
// column.type = 'column';

// TODO indent and outdent keys at the top of each panel???

import defaultKeys from './default-keys.js';
import EnglishKeys from './english/english.js';
import HTMLKeys from './html/elements.js';

export default class Data {
  constructor() {

    let abc = new EnglishKeys();
    let def = new defaultKeys;
    console.log("default key object -->", def);
    let html = new HTMLKeys();

    this.displayName = 'osk'
    this.id = 'osk'  // TODO: add a count to this when created? (in case of multiple instances - when would that even happen?)
    // this.lastOpenPanel = 'HTML/Elements/Home-Page'  // default active path if no serialized state exists
    this.children = [
      // BoardGroups/LanguageGroups
      {displayName: 'ABC', id: 'ABC', activePath: null, children: [
        // Boards/Categories
        {displayName: 'Abc', id: 'Abc', activePath: null, children: [
          // Panels
          // {displayName: 'Lowercase',
          //   diagram: [
          //     // ['row', ['column', 'column', 'column']],
          //     // ['row'],
          //     // ['row'],
          //     // ['row'],
          //     // ['row']
          //     // row, row, row, row
          //   ],
          //   children: [
          //   // Keys
          //   {pos: ['row', 0], displayName: 'q'},
          //   {pos: ['row', 1], displayName: 'w'},
          //   {pos: ['row', 2], displayName: 'e'},
          //   {pos: ['row', 3], displayName: 'r'}
          // ]}, // Lowercase
          {displayName: 'Lowercase', id: 'Lowercase', children: [
            // Rows
            {
              direction: 'horizontal',
              // Keys (TODO: nested structures)
              content: [
                abc.q, abc.w, abc.e, abc.r, abc.t,
                abc.y, abc.u, abc.i, abc.o, abc.p
              ]
            }, // type/row
            {
              direction: 'horizontal',
              content: [
                def.tab, abc.a, abc.s, abc.d, abc.f,
                abc.g, abc.h, abc.j, abc.k, abc.l,
                def.delete
              ]
            }, // type/row
            {
              direction: 'horizontal',
              content: [
                abc.z, abc.x, abc.c, abc.v, abc.b,
                abc.n, abc.m, def.enter
              ]
            }, // type/row
            {
              direction: 'horizontal',
              content: [
                abc.uppercase,
                def.space,
                def.blank
              ]
            } // type/row
          ]}, // Lowercase
          {displayName: 'Uppercase', id: 'Uppercase', children: [
            // Structures
            {
              direction: 'horizontal',
              // Keys (TODO: nested structures)
              content: [
                abc.Q, abc.W, abc.E, abc.R, abc.T,
                abc.Y, abc.U, abc.I, abc.O, abc.P
              ]
            }, // type/row
            {
              direction: 'horizontal',
              content: [
                def.tab, abc.A, abc.S, abc.D, abc.F,
                abc.G, abc.H, abc.J, abc.K, abc.L,
                def.delete
              ]
            }, // type/row
            {
              direction: 'horizontal',
              content: [
                abc.Z, abc.X, abc.C, abc.V, abc.B,
                abc.N, abc.M, def.enter
              ]
            }, // type/row
            {
              direction: 'horizontal',
              content: [
                abc.lowercase,
                def.space,
                def.blank
              ]
            } // type/row
          ]}, // Uppercase
          {displayName: 'Symbols', id: 'Symbols', children: [
          ]}, // Symbols
        ]}, // Abc
        {displayName: 'Math', id: 'Math', activePath: null, children: [
          {displayName: 'Phone', id: 'Phone', children: [
          ]} // Phone
        ]}, // Math
        {displayName: 'CSS Math', id: 'CSS_Math', activePath: null, children: [
          {displayName: 'Colors', id: 'Colors', children: [
          ]}, // Colors
          {displayName: 'Dimensions', id: 'Dimensions', children: [
          ]} // Dimensions
        ]} // CSS Math
      ]}, // ABC
      {displayName: 'HTML', id: 'HTML', activePath: null, children: [
        {displayName: 'Elements', id:'Elements', activePath: null, children: [  // TODO: Tags? More or less useful to beginners?
          {displayName: 'Home Page', id: 'Home_Page', children: [
            // New Page div p a img span link
            // tab ol ul li h1 h2 script del
            // class id = < / > ' " - _ enter
            // pg2? space menu
            {direction: 'horizontal', content: [
              html.newHTMLDoc, html.div, html.p, html.a, html.img,
              html.span, html.link
            ]},
            {direction: 'horizontal', content: [
              def.tab,
              html.ol, html.ul, html.li, html.h1,
              html.h2, html.script,
              def.delete
            ]},
            {direction: 'horizontal', content: [
              html.class, html.id, html.equals, html.lessThan,
              html.forwardSlash, html.greaterThan, html.singleQuote,
              html.doubleQuote, html.dash, html.underscore,
              def.enter
            ]},
            {direction: 'horizontal', content: [
              def.blank, def.space, html.menu_nav
            ]}
          ]}, // Home-Page
          {displayName: 'Menu', id: 'Menu', children: [
            // Outline Headings Embedded
            // tab Lists Tables Document Structure Meta del
            // class id = < / > ' " - _ enter
            // - space Home
            {direction: 'horizontal', content: [
              // TODO: file bug about multi-selection, then 'tab' doesn't tab on the first selection
              html.outline_nav, html.headings_nav,// html.generic_nav,
              html.form_nav, html.embedded_nav
            ]},
            {direction: 'horizontal', content: [
              def.tab,
              html.lists_nav, html.tables_nav,
              html['document-structure_nav'], html.meta_nav,
              def.delete
            ]},
            {direction: 'horizontal', content: [
              html.class, html.id, html.equals, html.lessThan,
              html.forwardSlash, html.greaterThan, html.singleQuote,
              html.doubleQuote, html.dash, html.underscore,
              def.enter
            ]},
            {direction: 'horizontal', content: [
              def.blank, def.space, html.elementsHome_nav
            ]}
          ]}, // Menu
          /*
          Sectioning/Outline (sectioning)
          Header/Headings (headings)
          Generic/Containers/Wrappers (generic)
          Embedded/Files (Embedded)
          Lists
          Tables
          Document Structure (document-structure)
          Meta (meta)

          Interactive
          Text Stories
          */
          {displayName: 'Outline', id: 'Outline', children: [
            // main header nav section footer
            // tab aside article Headings del
            // class id = < / > ' " - _ enter
            // Home space Menu
            {direction: 'horizontal', content: [
              html.main, html.header, html.nav, html.section, html.footer
            ]},
            {direction: 'horizontal', content: [
              def.tab, html.aside, html.article, html.headings_nav, def.delete
            ]},
            {direction: 'horizontal', content: [
              html.class, html.id, html.equals, html.lessThan,
              html.forwardSlash, html.greaterThan, html.singleQuote,
              html.doubleQuote, html.dash, html.underscore,
              def.enter
            ]},
            {direction: 'horizontal', content: [
              html.elementsHome_nav, def.space, html.menu_nav
            ]}
          ]}, // Outline
          {displayName: 'Headings', id: 'Headings', children: [
            // h1 h2 h3 h4
            // tab h5 h6 hgroup del
            // class id = < / > ' " - _ enter
            // Home space Menu
            {direction: 'horizontal', content: [
              html.h1, html.h2, html.h3, html.h4
            ]},
            {direction: 'horizontal', content: [
              def.tab, html.h5, html.h6, html.hgroup, def.delete
            ]},
            {direction: 'horizontal', content: [
              html.class, html.id, html.equals, html.lessThan,
              html.forwardSlash, html.greaterThan, html.singleQuote,
              html.doubleQuote, html.dash, html.underscore,
              def.enter
            ]},
            {direction: 'horizontal', content: [
              html.elementsHome_nav, def.space, html.menu_nav
            ]}
          ]}, // Headings
          // {displayName: 'Generic', children: [
          //   // div
          //   // tab span del
          //   // class id = < / > ' " - _ enter
          //   // Home space Menu
          //   {direction: 'horizontal', content: [
          //     html.div
          //   ]},
          //   {direction: 'horizontal', content: [
          //     def.tab,
          //     html.span,
          //     def.delete
          //   ]},
          //   {direction: 'horizontal', content: [
          //     html.class, html.id, html.equals, html.lessThan,
          //     html.forwardSlash, html.greaterThan, html.singleQuote,
          //     html.doubleQuote, html.dash, html.underscore,
          //     def.enter
          //   ]},
          //   {direction: 'horizontal', content: [
          //     html.elementsHome_nav, def.space, html.menu_nav
          //   ]}
          // ]},  // Generic
          {displayName: 'Form', id: 'Form', children: [
            // form label input button textarea
            // |> fieldset optgroup option select <
            // class id = < / > ' " - _ enter
            // Menu space Page 2
            {direction: 'horizontal', content: [
              html.form, html.label, html.input
            ]},
            {direction: 'horizontal', content: [
              def.tab,
              def.delete
            ]},
            {direction: 'horizontal', content: [
              html.class, html.id, html.equals, html.lessThan,
              html.forwardSlash, html.greaterThan, html.singleQuote,
              html.doubleQuote, html.dash, html.underscore,
              def.enter
            ]},
            {direction: 'horizontal', content: [
              html.menu_nav, def.space, def.blank
            ]}
          ]}, // Form
          {displayName: 'Embedded', id: 'Embedded', children: [
            // img video canvas svg audio
            // tab iframe embed math object del
            // class id = < / > ' " - _ enter
            // Home space Menu
            {direction: 'horizontal', content: [
              html.img, html.video, html.canvas, html.svg, html.audio
            ]},
            {direction: 'horizontal', content: [
              def.tab,
              html.iframe, html.embed, html.math, html.object,
              def.delete
            ]},
            {direction: 'horizontal', content: [
              html.class, html.id, html.equals, html.lessThan,
              html.forwardSlash, html.greaterThan, html.singleQuote,
              html.doubleQuote, html.dash, html.underscore,
              def.enter
            ]},
            {direction: 'horizontal', content: [
              html.elementsHome_nav, def.space, html.menu_nav
            ]}
          ]}, // Embedded
          {displayName: 'Lists', id: 'Lists', children: [
            // li
            // tab ol ul del
            // class id = < / > ' " - _ enter
            // Home space Menu
            {direction: 'horizontal', content: [
              html.li
            ]},
            {direction: 'horizontal', content: [
              def.tab, html.ol, html.ul, def.delete
            ]},
            {direction: 'horizontal', content: [
              html.class, html.id, html.equals, html.lessThan,
              html.forwardSlash, html.greaterThan, html.singleQuote,
              html.doubleQuote, html.dash, html.underscore,
              def.enter
            ]},
            {direction: 'horizontal', content: [
              html.elementsHome_nav, def.space, html.menu_nav
            ]}
          ]}, // Lists
          {displayName: 'Tables', id: 'Tables', children: [
            // table tr th td
            // tab thead tfoot tbody del
            // class id = < / > ' " - _ enter
            // Home space Menu

            // TODO pros and cons of:
            // table tr th td thead tfoot tbody
            // tab colgroup col caption del
            // class id = < / > ' " - _ enter
            // Home space Menu
            {direction: 'horizontal', content: [
              html.table, html.tr, html.th, html.td
              // , html.thead, html.tfoot, html.tbody
            ]},
            {direction: 'horizontal', content: [
              def.tab, //html.colgroup, html.col, html.caption,
              html.thead, html.tfoot, html.tbody,
              def.delete
            ]},
            {direction: 'horizontal', content: [
              html.class, html.id, html.equals, html.lessThan,
              html.forwardSlash, html.greaterThan, html.singleQuote,
              html.doubleQuote, html.dash, html.underscore,
              def.enter
            ]},
            {direction: 'horizontal', content: [
              html.elementsHome_nav, def.space, html.menu_nav
            ]}
          ]}, // Tables
          {displayName: 'Document Structure', id: 'Document_Structure', children: [
            // DOCTYPE html
            // tab head body del
            // class id = < / > ' " - _ enter
            // Home space Menu
            {direction: 'horizontal', content: [
              html.DOCTYPE, html.html
            ]},
            {direction: 'horizontal', content: [
              def.tab, html.head, html.body,
              def.delete
            ]},
            {direction: 'horizontal', content: [
              html.class, html.id, html.equals, html.lessThan,
              html.forwardSlash, html.greaterThan, html.singleQuote,
              html.doubleQuote, html.dash, html.underscore,
              def.enter
            ]},
            {direction: 'horizontal', content: [
              html.elementsHome_nav, def.space, html.menu_nav
            ]}
          ]}, // Document-Structure
          {displayName: 'Meta', id: 'Meta', children: [
            // meta title link script style
            // tab noscript base del
            // class id = < / > ' " - _ enter
            // Home space Menu
            {direction: 'horizontal', content: [
              html.meta, html.title, html.link, html.script, html.style
            ]},
            {direction: 'horizontal', content: [
              def.tab, html.noscript, html.base,
              def.delete
            ]},
            {direction: 'horizontal', content: [
              html.class, html.id, html.equals, html.lessThan,
              html.forwardSlash, html.greaterThan, html.singleQuote,
              html.doubleQuote, html.dash, html.underscore,
              def.enter
            ]},
            {direction: 'horizontal', content: [
              html.elementsHome_nav, def.space, html.menu_nav
            ]},
          ]} // Meta
        ]}, // Elements
        {displayName: 'Attributes', id: 'Attributes', activePath: null, children: [
          {displayName: 'Home Page', id: 'Home_Page', children: [
          ]}
        ]},
        {displayName: 'Attribute Values', id: 'Attribute_Values', activePath: null, children: [
          {displayName: 'Home Page', id: 'Home_Page', children: [
          ]}
        ]}
      ]}, // HTML
      {displayName: 'CSS', id: 'CSS', activePath: null, children: [
        {displayName: 'Selectors', id: 'Selectors', children: [
          {displayName: 'Home Page', id: 'Home_Page', children: [
          ]}
        ]},
        {displayName: 'Properties', id: 'Properties', activePath: null, children: [
          {displayName: 'Home Page', id: 'Home_Page', children: [
          ]}
        ]},
        {displayName: 'Property Values', id: 'Property_Values', activePath: null, children: [
          {displayName: 'Home Page', id: 'Home_Page', children: [
          ]}
        ]}
      ]}
    ]
  }  // constructor
}  // Data
