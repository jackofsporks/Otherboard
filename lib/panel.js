'use babel';

import Parent from './parent.js';

export default class Panel extends Parent {
/* (Str, Board) -> Panel
*
* An object that contains keys and has a more
* specific purpose within that category.
*
* TODO: Sanitize display name for ID name
*/
  constructor(source, parent) {
  // `parent` should be a Board object
    // Base: id, type, displayName, parent, node, tags, children,
    // destroy
    // Parent: add, remove, get/getBy, setActivePanel
    super(source, parent);

    const panel = this;
    panel.type = 'panel'

    panel.rows = [];
  }  // constructor

  activate() {
    const panel = this;
    if (!supressActivePanel) {
      // if (panel.parent) panel.parent.setActiveChild(panel.pathTo);
      panel.parent.setActivePanel(panel.pathTo);
      panel.parent.parent.setActivePanel(panel.pathTo);
      panel.parent.parent.parent.setActivePanel(panel.pathTo);
    }
    panel.view.show();
    return panel;
  }

  show(supressActivePanel) {
    const panel = this;
    if (!supressActivePanel) {
      // if (panel.parent) panel.parent.setActiveChild(panel.pathTo)
      panel.parent.setActivePanel(panel.pathTo)
      panel.parent.parent.setActivePanel(panel.pathTo)
      panel.parent.parent.parent.setActivePanel(panel.pathTo)
    }
    panel.view.show()
    return panel;
  }
  // Which one of the above?

}  // Panel
