"use babel"

// Compose
import buildBase from "../components/base-props"
import buildBoardishProps from "../components/board-props"
import buildParentProps from "../components/parent-props"
// Children
import Panel from "./panel.js"

export default class Board {
  constructor(osk, parent, config) {
    const bd = this
    bd.type = "board-group"

    let props = ["id", "uid", "config", "parent", "osk", "displayName"]
    // caller, osk, parent, config, props
    buildBase(bd, osk, parent, config, props)
    props = ["requires", "show", "hide", "pathTo", "saveOpenPanel"]
    // caller, config, props
    buildBoardishProps(bd, config, props)
    props = ["ChildConstructor", "children", "addChildren", "add", "get"]
    // caller, osk, config, props, ChildConstructor
    buildParentProps(bd, osk, config, props, Panel)

    bd.addChildren()
  }  // constructor()
} // Board
