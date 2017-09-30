"use babel"

// Compose
import buildBase from "../components/base-props"
import buildBoardishProps from "../components/board-props"
import buildParentProps from "../components/parent-props"
// Children
import Panel from "./panel.js"

export default class Board {
  constructor(osk, parent, contents) {
    const bd = this
    bd.type = "board-group"

    let props = ["id", "uid", "contents", "parent", "osk", "displayName"]
    // caller, osk, parent, contents, props
    buildBase(bd, osk, parent, contents, props)
    props = ["requires", "show", "hide", "pathTo", "switchToPanel"]
    // caller, contents, props
    buildBoardishProps(bd, contents, props)
    props = ["ChildConstructor", "children", "addChildren", "add", "get"]
    // caller, osk, contents, props, ChildConstructor
    buildParentProps(bd, osk, contents, props, Panel)

    bd.addChildren()
  }  // constructor()
} // Board
