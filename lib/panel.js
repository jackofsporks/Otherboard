"use babel";

// ::: NOT A PARENT :::

import Base from "./base.js";
import Key from "./key.js";

export default class Panel extends Base {
/* (Str, Board) -> Panel
*
* An object that contains keys and has a more
* specific purpose within that category.
*
* TODO: Sanitize display name for ID name
*/
  constructor(config, parent) {
    // `parent` should be a Board object
    // Base: id, type, displayName, parent, node, tags, children, destroy, config
    super(config, parent)

    const panel = this
    panel.type = "panel"

    panel.config = config // <- need this? (Base does this)

    let scripts = panel.helpers = {} // rename --> requires
    const reqs = panel.requires = config.requires // rename --> requirePaths
    for (let name in reqs) {
      let Constructor = require(reqs[name])
      scripts[name] = new Constructor()
    }

    // WARNING never have a panel with only a key as content (no rows or columns)
    function addNestedContent(remainingContent, parentObject) {

      for ( let ii = 0; ii < remainingContent.length; ii++) {
        const item = remainingContent[ ii ]
        let newObj = null

        if ( item.type === 'row' || item.type === 'column' ) {
          newObj = { type: item.type, content: [], classes: item.classes }
        } else {
          // QUESTION add key to panel directly?!!?!
          // if (panel.id === 'Dimensions') {console.trace(item);}
          let keySource = panel.getKeySource( item )
          newObj = new Key(keySource, panel)
        }

        if (newObj !== null) parentObject.content.push(newObj)

        // A key doesn't have content
        if (item.content) addNestedContent(item.content, newObj)
      }
    } // addNestedContent

    panel.content = [];
    addNestedContent(config.content, panel)
    // console.log('final content -->', panel.content)

  }  // constructor

  show(wasHistory) {
    const panel = this;
    const osk = panel.parent.parent.parent

    // (if not the same panel as before)
    if (panel.pathTo !== osk.config.lastOpenPanel) {
      panel.parent.saveOpenPanel(panel.pathTo)
      panel.parent.parent.saveOpenPanel(panel.pathTo)
      osk.saveOpenPanel(panel.pathTo, wasHistory)
      panel.view.show()
      panel.parent.show(true)  // Always going up from a panel
    }
    return panel;
  }

  // QUESTION do all this in key!?!?!
  getKeySource(path) {
    let parts = /^(.+)\.(.+)>{2}(.+)$/.exec(path)
    if (!parts) parts = /^(.+)\.(.+)$/.exec(path)
    // console.log("path parts -->", parts, this.id);
    let scriptName = parts[1],
    keyId = parts[2],
    altName = parts[3],
    obj = this.helpers[scriptName][keyId]
    obj.altName = parts[3]
    return obj
  }
}  // Panel
