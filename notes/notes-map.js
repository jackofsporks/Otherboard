OSK: {
  id: str,
  type: str,
  parent: null,
  node: obj,
  show: func,  // show self? show children? Include showParent()??
  hide: func,  // same?
  displayName: str,
  tags: [ str ],
  (setDisplayName: func),
  addChild: func,
  removeChild: func,
  getChild: func, // ??
  children: [  // boardGroup
      {
        id: str,
        parent: OSK,
        show: func,
        hide: func,
        displayName: str,
        addChild: func,
        removeChild: func,
        getChild: func, // ??
        children: [  // board
          {
            id: str,
            parent: Obj,
            show: func,
            hide: func,
            displayName: str,
            addChild: func,
            removeChild: func,
            getChild: func, // ??
            children: [  // panel
                {
                  id: str,
                  parent: Obj,
                  show: func,
                  hide: func,
                  displayName: str,
                  addChild: func,
                  removeChild: func,
                  getChild: func, // ??
                  children: [  // key
                    { id: str,
                    parent: Obj,
                    show: func,  // needed?
                    hide: func,  // needed?
                    displayName: str,
                    children: null,

                    // Unique to keys
                    type: "snippet" || "nav" || "both",
                    insert: func,  // Inserts a snippet. Not copy and paste. Handles cursor movement.
                    goTo: func,  // nav to a different panel/group/board
                  },  // key1
                  {
                    ...
                  }  // key2
                ]
              },  // panel1
              {
                ...
              }  // panel2
            ]
          },  // panelGroup1
          {
            ...
          }  // panelGroup2
        ]
      },  // board1
      {
        ...
      }  // board2
  ]
}
