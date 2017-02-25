'use babel';

// // Try building objects up here to place in multiple locations
// let row = [];
// row.type = 'row';
// let column = [];
// column.type = 'column';

// TODO indent and outdent keys at the top of each panel???

import DefaultKeys from './default-keys.js';
import EnglishKeys from './english/english.js';
import HTMLKeys from './html/elements.js';

export default class Data {
  constructor() {

    let abc = new EnglishKeys();
    let def = new DefaultKeys();
    let html = new HTMLKeys();

    this.children = [
      // BoardGroups/LanguageGroups
      {displayName: 'ABC', children: [
        // Boards/Categories
        {displayName: 'Abc', children: [
          // Panels
          // {displayName: 'lowercase',
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
          // ]}, // lowercase
          {displayName: 'lowercase', children: [
            // Rows
            {
              type: 'row',
              // Keys (TODO: nested structures)
              content: [
                abc.q, abc.w, abc.e, abc.r, abc.t,
                abc.y, abc.u, abc.i, abc.o, abc.p
              ]
            }, // type/row
            {
              type: 'row',
              content: [
                def.tab, abc.a, abc.s, abc.d, abc.f,
                abc.g, abc.h, abc.j, abc.k, abc.l,
                def.delete
              ]
            }, // type/row
            {
              type: 'row',
              content: [
                abc.z, abc.x, abc.c, abc.v, abc.b,
                abc.n, abc.m, def.enter
              ]
            }, // type/row
            {
              type: 'row',
              content: [
                abc.uppercase,
                def.space,
                def.blank
              ]
            } // type/row
          ]}, // lowercase
          {displayName: 'uppercase', children: [
            // Structures
            {
              type: 'row',
              // Keys (TODO: nested structures)
              content: [
                abc.Q, abc.W, abc.E, abc.R, abc.T,
                abc.Y, abc.U, abc.I, abc.O, abc.P
              ]
            }, // type/row
            {
              type: 'row',
              content: [
                def.tab, abc.A, abc.S, abc.D, abc.F,
                abc.G, abc.H, abc.J, abc.K, abc.L,
                def.delete
              ]
            }, // type/row
            {
              type: 'row',
              content: [
                abc.Z, abc.X, abc.C, abc.V, abc.B,
                abc.N, abc.M, def.enter
              ]
            }, // type/row
            {
              type: 'row',
              content: [
                abc.lowercase,
                def.space,
                def.blank
              ]
            } // type/row
          ]}, // uppercase
          {displayName: 'symbols', children: [
          ]}, // symbols
        ]}, // Abc
        {displayName: 'Math', children: [
          {displayName: 'all', children: [
          ]} // all
        ]}, // Math
        {displayName: 'CSS Math', children: [
          {displayName: 'colors', children: [
          ]}, // colors
          {displayName: 'dimensions', children: [
          ]} // dimensions
        ]} // CSS Math
      ]}, // ABC
      {displayName: 'HTML', children: [
        {displayName: 'Elements', children: [  // TODO: Tags? More or less useful to beginners?
          {displayName: 'Home-Page', children: [
            // New Page div p a img span link
            // tab ol ul li h1 h2 script del
            // class id = < / > ' " - _ enter
            // pg2? space menu
            {type: 'row', content: [
              html.newHTMLDoc, html.div, html.p, html.a, html.img,
              html.span, html.link
            ]},
            {type: 'row', content: [
              def.tab,
              html.ol, html.ul, html.li, html.h1,
              html.h2, html.script,
              def.delete
            ]},
            {type: 'row', content: [
              html.class, html.id, html.equals, html.lessThan,
              html.forwardSlash, html.greaterThan, html.singleQuote,
              html.doubleQuote, html.dash, html.underscore,
              def.enter
            ]},
            {type: 'row', content: [
              def.blank, def.space, html.menu_nav
            ]}
          ]}, // Home-Page
          {displayName: 'Menu', children: [
            // Outline Headings Embedded
            // tab Lists Tables Document Structure Meta del
            // class id = < / > ' " - _ enter
            // - space Home
            {type: 'row', content: [
              // TODO: file bug about multi-selection, then 'tab' doesn't tab on the first selection
              html.outline_nav, html.headings_nav,// html.generic_nav,
              html.form_nav, html.embedded_nav
            ]},
            {type: 'row', content: [
              def.tab,
              html.lists_nav, html.tables_nav,
              html['document-structure_nav'], html.meta_nav,
              def.delete
            ]},
            {type: 'row', content: [
              html.class, html.id, html.equals, html.lessThan,
              html.forwardSlash, html.greaterThan, html.singleQuote,
              html.doubleQuote, html.dash, html.underscore,
              def.enter
            ]},
            {type: 'row', content: [
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
          {displayName: 'Outline', children: [
            // main header nav section footer
            // tab aside article Headings del
            // class id = < / > ' " - _ enter
            // Home space Menu
            {type: 'row', content: [
              html.main, html.header, html.nav, html.section, html.footer
            ]},
            {type: 'row', content: [
              def.tab, html.aside, html.article, html.headings_nav, def.delete
            ]},
            {type: 'row', content: [
              html.class, html.id, html.equals, html.lessThan,
              html.forwardSlash, html.greaterThan, html.singleQuote,
              html.doubleQuote, html.dash, html.underscore,
              def.enter
            ]},
            {type: 'row', content: [
              html.elementsHome_nav, def.space, html.menu_nav
            ]}
          ]}, // Outline
          {displayName: 'Headings', children: [
            // h1 h2 h3 h4
            // tab h5 h6 hgroup del
            // class id = < / > ' " - _ enter
            // Home space Menu
            {type: 'row', content: [
              html.h1, html.h2, html.h3, html.h4
            ]},
            {type: 'row', content: [
              def.tab, html.h5, html.h6, html.hgroup, def.delete
            ]},
            {type: 'row', content: [
              html.class, html.id, html.equals, html.lessThan,
              html.forwardSlash, html.greaterThan, html.singleQuote,
              html.doubleQuote, html.dash, html.underscore,
              def.enter
            ]},
            {type: 'row', content: [
              html.elementsHome_nav, def.space, html.menu_nav
            ]}
          ]}, // Headings
          // {displayName: 'Generic', children: [
          //   // div
          //   // tab span del
          //   // class id = < / > ' " - _ enter
          //   // Home space Menu
          //   {type: 'row', content: [
          //     html.div
          //   ]},
          //   {type: 'row', content: [
          //     def.tab,
          //     html.span,
          //     def.delete
          //   ]},
          //   {type: 'row', content: [
          //     html.class, html.id, html.equals, html.lessThan,
          //     html.forwardSlash, html.greaterThan, html.singleQuote,
          //     html.doubleQuote, html.dash, html.underscore,
          //     def.enter
          //   ]},
          //   {type: 'row', content: [
          //     html.elementsHome_nav, def.space, html.menu_nav
          //   ]}
          // ]},  // Generic
          {displayName: 'Form', children: [
            // form label input button textarea
            // |> fieldset optgroup option select <
            // class id = < / > ' " - _ enter
            // Menu space Page 2
            {type: 'row', content: [
              html.form, html.label, html.input
            ]},
            {type: 'row', content: [
              def.tab,
              def.delete
            ]},
            {type: 'row', content: [
              html.class, html.id, html.equals, html.lessThan,
              html.forwardSlash, html.greaterThan, html.singleQuote,
              html.doubleQuote, html.dash, html.underscore,
              def.enter
            ]},
            {type: 'row', content: [
              html.menu_nav, def.space, def.blank
            ]}
          ]}, // Form
          {displayName: 'Embedded', children: [
            // img video canvas svg audio
            // tab iframe embed math object del
            // class id = < / > ' " - _ enter
            // Home space Menu
            {type: 'row', content: [
              html.img, html.video, html.canvas, html.svg, html.audio
            ]},
            {type: 'row', content: [
              def.tab,
              html.iframe, html.embed, html.math, html.object,
              def.delete
            ]},
            {type: 'row', content: [
              html.class, html.id, html.equals, html.lessThan,
              html.forwardSlash, html.greaterThan, html.singleQuote,
              html.doubleQuote, html.dash, html.underscore,
              def.enter
            ]},
            {type: 'row', content: [
              html.elementsHome_nav, def.space, html.menu_nav
            ]}
          ]}, // Embedded
          {displayName: 'Lists', children: [
            // li
            // tab ol ul del
            // class id = < / > ' " - _ enter
            // Home space Menu
            {type: 'row', content: [
              html.li
            ]},
            {type: 'row', content: [
              def.tab, html.ol, html.ul, def.delete
            ]},
            {type: 'row', content: [
              html.class, html.id, html.equals, html.lessThan,
              html.forwardSlash, html.greaterThan, html.singleQuote,
              html.doubleQuote, html.dash, html.underscore,
              def.enter
            ]},
            {type: 'row', content: [
              html.elementsHome_nav, def.space, html.menu_nav
            ]}
          ]}, // Lists
          {displayName: 'Tables', children: [
            // table tr th td
            // tab thead tfoot tbody del
            // class id = < / > ' " - _ enter
            // Home space Menu

            // TODO pros and cons of:
            // table tr th td thead tfoot tbody
            // tab colgroup col caption del
            // class id = < / > ' " - _ enter
            // Home space Menu
            {type: 'row', content: [
              html.table, html.tr, html.th, html.td
              // , html.thead, html.tfoot, html.tbody
            ]},
            {type: 'row', content: [
              def.tab, //html.colgroup, html.col, html.caption,
              html.thead, html.tfoot, html.tbody,
              def.delete
            ]},
            {type: 'row', content: [
              html.class, html.id, html.equals, html.lessThan,
              html.forwardSlash, html.greaterThan, html.singleQuote,
              html.doubleQuote, html.dash, html.underscore,
              def.enter
            ]},
            {type: 'row', content: [
              html.elementsHome_nav, def.space, html.menu_nav
            ]}
          ]}, // Tables
          {displayName: 'Document-Structure', children: [
            // DOCTYPE html
            // tab head body del
            // class id = < / > ' " - _ enter
            // Home space Menu
            {type: 'row', content: [
              html.DOCTYPE, html.html
            ]},
            {type: 'row', content: [
              def.tab, html.head, html.body,
              def.delete
            ]},
            {type: 'row', content: [
              html.class, html.id, html.equals, html.lessThan,
              html.forwardSlash, html.greaterThan, html.singleQuote,
              html.doubleQuote, html.dash, html.underscore,
              def.enter
            ]},
            {type: 'row', content: [
              html.elementsHome_nav, def.space, html.menu_nav
            ]}
          ]}, // Document-Structure
          {displayName: 'Meta', children: [
            // meta title link script style
            // tab noscript base del
            // class id = < / > ' " - _ enter
            // Home space Menu
            {type: 'row', content: [
              html.meta, html.title, html.link, html.script, html.style
            ]},
            {type: 'row', content: [
              def.tab, html.noscript, html.base,
              def.delete
            ]},
            {type: 'row', content: [
              html.class, html.id, html.equals, html.lessThan,
              html.forwardSlash, html.greaterThan, html.singleQuote,
              html.doubleQuote, html.dash, html.underscore,
              def.enter
            ]},
            {type: 'row', content: [
              html.elementsHome_nav, def.space, html.menu_nav
            ]},
          ]} // Meta
        ]}, // Elements
        {displayName: 'Attributes', children: [
          {displayName: 'home-page', children: [
          ]}
        ]},
        {displayName: 'Attribute Values', children: [
          {displayName: 'home-page', children: [
          ]}
        ]}
      ]},
      {displayName: 'CSS', children: [
        {displayName: 'Selectors', children: [
          {displayName: 'home-page', children: [
          ]}
        ]},
        {displayName: 'Properties', children: [
          {displayName: 'home-page', children: [
          ]}
        ]},
        {displayName: 'Property Values', children: [
          {displayName: 'home-page', children: [
          ]}
        ]}
      ]}
    ]
  }  // constructor
}  // Data
