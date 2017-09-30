"use babel"

import findPathTarget from "../utils/find-path-target.js"

export default assignBoardProps = function (caller, contents, props) {

  if (props.includes("pathTo")) {
    // Accumulate path of this object
    let pathTo = caller.id,
    oldest = caller.parent
    // Can't check for id, id not added yet
    while (oldest && oldest.parent !== null) {
      pathTo = oldest.id + "/" + pathTo
      oldest = oldest.parent
    }
    caller.pathTo = pathTo
  }

  if (props.includes("requires")) {
    caller.requires = {}
    const reqs = contents.requires // TODO rename --> requirePaths
    for (let name in reqs) {

      let PossibleConstructor = require("." + reqs[name])
      // I'm not sure if this is a thing...
      try {
        caller.requires[name] = new PossibleConstructor(caller)
      } catch (err) {
        // console.log("name for requires -->", PossibleConstructor);
        // QUESTION This is broke. Why does "require" put the object inside another object containing that object and the property _esModule which = true
        // caller.requires[name] = PossibleConstructor
        console.warn("You've handed in not-a-constructor to make your requires. You can't do that right now because it is broke.")
      } // try

      // if (PossibleConstructor instanceof Function) { // class is an instance of Object
      //   caller.requires[name] = PossibleConstructor(caller)
      // } else {
      //   try {
      //     caller.requires[name] = new PossibleConstructor(caller)
      //   } catch (err) {
      //     caller.requires[name] = PossibleConstructor
      //   }
      // } // if
    }
  } // requires

  if (props.includes("switchToPanel")) {
    caller.switchToPanel = (function (path) {
      const base = this
      // console.trace(this.id, "-->", path)
      base.contents.lastOpenPanel = path
      return base
    }).bind(caller)
  }

  if (props.includes("show")) {
    caller.show = (function (goingUp) {
      // When shown with, for example, a tab, just .show() will be called, which will trigger the showing of a panel
      // !!!!: If this is called from the bottom up, then animations will happen to panels first, which may not work well with history...?!?!?!?!
      const base = this
      if (goingUp) {
        if (!base.view.isVisible) base.view.show()  // terminates
        // show parent, so that everything is revealed!
        if (base.parent) base.parent.show(true) // is goingUp
      } else {
        let target = findPathTarget(base.contents.lastOpenPanel, base)
        target.show()  // panel.show is called, now is goingUp
      }
      return base
    }).bind(caller)
  }

  if (props.includes("hide")) {
    caller.hide = (function () {
      const base = this // same caller issues
      if (base.view.isVisible) base.view.hide()
      return base
    }).bind(caller)
  }

  return caller
} // assignBoardProps
