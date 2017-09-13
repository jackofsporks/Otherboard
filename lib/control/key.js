"use babel"

// Compose
import buildBase from "../components/base-props"
// Snippets/Autocomplete
import AutoThief from "./autocomplete"
import keyFuncs from "../utils/key-funcs.js";
// import buildBoardishProps from "../components/board-props"
// import buildParentProps from "../components/parent-props"
// Children??!!?

export default class Key {
  constructor(osk, parent, source) {
    const key = this
    key.type = "key"
    key.optionsConstructor = AutoThief // TODO change to snippeterConstructor... or something...

    let props = ["id", "uid", "parent", "osk", "displayName", "classes", "tags"]
    // caller, osk, parent, config, props
    buildBase(key, osk, parent, source, props)

    key.toSimulate = source.toSimulate
    key.path = source.path
    key.activate = source.activate
    // QUESTION how does this not change the name of all location of this key?!?!?!
    if (source.altName) key.displayName = source.altName
  }  // constructor

  release() {
    const key = this
    if (key.options) key.options.release(...arguments)
  }

  deactivate(canceled) {
    const key = this
    key.osk.activeKey = null
    // restore previous settings
    // QUESTION restore settings in here or in autocomplete thief
    const prevSettings = key.osk.autocompleteSettings
    for (let variable in prevSettings) {
      if (prevSettings.hasOwnProperty(variable)) {
        atom.config.set("autocomplete-plus." + variable, prevSettings[variable])
      }
    }
    key.options = null

    // if key has a path to navigate to, go there
    if (!canceled && key.path) {
      const nav = keyFuncs.pureNavigation.bind(this)
      nav()
    }

    return key
  } // deactivate
} // Board
