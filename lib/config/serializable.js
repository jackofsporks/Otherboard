'use babel';

export default {
  config: {
    displayName: 'osk',
    id: 'osk', // TODO: add a count to this when created? (in case of multiple instances - when would that even happen?)
    requires: {},
    lastOpenPanel: 'HTML/Elements/Home_Page', // default active path if no serialized state exists
    children: [
        // BoardGroups/LanguageGroups
      {
        displayName: 'ABC',
        id: 'ABC',
        lastOpenPanel: "ABC/Abc/Lowercase",
        requires: {},
        children: [
          // Boards/Categories
          {
            displayName: 'Abc',
            id: 'Abc',
            lastOpenPanel: "ABC/Abc/Lowercase",
            requires: {},
            children: [
            // Panels
              {
                displayName: 'Lowercase',
                id: 'Lowercase',
                requires: {
                  "abc": "./data/english/english.js",
                  "def": "./data/default-keys.js"
                },
                content: [
              // Rows
                  {
                    // direction: 'horizontal',
                    type: "row",
                    content: [
                        "abc >> uppercase",
                        "def >> space",
                        "def >> blank"
                      ]
                    } // type/row
                  ]
                }, // Lowercase
              {
                displayName: 'Uppercase',
                id: 'Uppercase',
                requires: {
                  "abc": "./data/english/english.js",
                  "def": "./data/default-keys.js"
                },
                content: [
              // Structures
                  {
                    // direction: 'horizontal',
                    type: "row",
                    content: [
                        "abc >> lowercase",
                        "def >> space",
                        "def >> blank"
                    ]
                  } // type/row
                ]
              } // Uppercase
            ] // Abc children
          } // Abc
        ] // ABC chilren
      }, // ABC
      {
        displayName: 'HTML',
        id: 'HTML',
        requires: {},
        lastOpenPanel: 'HTML/Elements/Home_Page',
        children: [
          {
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
                  {
                    // direction: 'horizontal',
                    type: "row",
                    content: [
                        "html >> newHTMLDoc"
                      ]
                    },
                  {
                    // direction: 'horizontal',
                    type: "row",
                    content: [
                        "def >> blank", "def >> space", "html >> menu_nav"
                      ]
                    }
                  ]
                } // Home_Page
              ]
            } // Elements
          ]
        } // HTML
      ] // osk children
  }
} // constructor
