"use babel";

// Compose
import buildBase from "../components/base-props";
import buildBoardishProps from "../components/board-props";
import buildParentProps from "../components/parent-props";
// Children
import Board from "./board.js"

/**
* (Str, OskObj) -> BoardGroup
*
* An object that contains a list of boards
* TODO: pass object into constructor instead and assign an id to the object originally
*/
export default class BoardGroup {
  constructor(osk, parent, config) {
    const bg = this
    bg.type = "board-group"

    let props = ["id", "uid", "config", "parent", "osk", "displayName"]
    // caller, osk, parent, config, props
    buildBase(bg, osk, parent, config, props)
    props = ["requires", "show", "hide", "pathTo", "saveOpenPanel"]
    // caller, config, props
    buildBoardishProps(bg, config, props)
    props = ["ChildConstructor", "children", "addChildren", "add", "get"]
    // caller, osk, config, props, ChildConstructor
    buildParentProps(bg, osk, config, props, Board)

    bg.addChildren()
  }  // constructor()
}  // BoardGroup
