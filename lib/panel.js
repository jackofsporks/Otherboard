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

    panel.config = config // <- need this?

    let scripts = panel.scripts = {}
    const reqs = panel.requires = config.requires
    for (let name in reqs) {
      let Constructor = require(reqs[name])
      scripts[name] = new Constructor()
    }

    panel.rows = []
    // panel.content = []
    // panel.NewChild = Key

    const rows = config.content
    for (let ri = 0; ri < rows.length; ri++) {
      let rowData = rows[ri]
      let keys = rowData.content

      let row = []
      for (let ki = 0; ki < keys.length; ki++) {
        let keySource = panel.getKeySource(keys[ki])
        // add panel as a parent of keys so they can trigger navigation to other panels
        let key = new Key(keySource, panel)
        row.push(key)
        // Adds `key` to panel's children. For reasons!!!!
        // panel.add(key) // doesn't work like this anymore!!!
      } // keys

      panel.rows.push(row)
    } // rows
  }  // constructor

  show() {
    const panel = this;
    panel.parent.saveOpenPanel(panel.pathTo)
    panel.parent.parent.saveOpenPanel(panel.pathTo)
    panel.parent.parent.parent.saveOpenPanel(panel.pathTo)
    panel.view.show()
    panel.parent.show(true)  // Always going up from a panel
    return panel;
  }

  getKeySource(path) {
    let parts = /^(.+)\.(.+)$/.exec(path)
    let scriptName = parts[1],
    keyName = parts[2]
    return this.scripts[scriptName][keyName]
  }
}  // Panel
