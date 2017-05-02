"use babel";

import findPathTarget from "./utils/find-path-target.js"

export default class Base {
/* (Str, Obj) -> Base
*
* The class that all the objects are based off of.
* All objects have:
* id, config, type, displayName, parent, node, tags, show, hide, destroy
* .set()?
*/
  constructor(config, parent) {

    const base = this
    // TODO: create a unique id in non-base object? <- what was that about?
    base.config = config
    console.log(config.id)
    // TODO: Make sure no two objects have the same id (as siblings or as any?) (ex: same tag and selector showing up on search panel)
    base.id           = config.id  // for now
    base.displayName  = config.displayName
    base.parent       = parent;
    base.node         = null;
    base.tags         = config.tags || [] // Searchable
    base.classes      = config.classes || [] // For DOM node
    base.children     = null;  // terminates at youngest generation

    // Accumulate path of this object
    let pathTo = base.id,
    oldest = parent
    // Can't check for id, id not added yet
    while (oldest && oldest.parent !== null) {
      pathTo = oldest.id + "/" + pathTo
      oldest = oldest.parent
    }

    base.pathTo = pathTo
  }  // constructor()

  show(goingUp) {
  // When shown with, for example, a tab, just .show() will be called, which will trigger the showing of a panel
  // !!!!: If this is called from the bottom up, then animations will happen to panels first, which may not work well with history...?!?!?!?!
    const base = this
    if (goingUp) {
      if (!base.view.isVisible) base.view.show()  // terminates
      // show parent, so that everything is revealed!
      if (base.parent) base.parent.show(true) // is goingUp
    } else {
      let target = findPathTarget(base.config.lastOpenPanel, base)
      target.show(true)  // panel.show is called, now is goingUp
    }
    return base
  }

  hide() {
    const base = this
    if (base.view.isVisible) base.view.hide()
    return base
  }

  destroy() {
    const base = this
    console.log('destroy, wip')
    return base
  }

  set(propName, val) {
    // For changing tab names if desired, etc.
    const base = this
    console.log('set, wip')
    return base
  }

}  // Base
