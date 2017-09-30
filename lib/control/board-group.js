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
  constructor(osk, parent, contents) {
    const bg = this
    bg.type = "board-group"

    let props = ["id", "uid", "contents", "parent", "osk", "displayName"]
    // caller, osk, parent, contents, props
    buildBase(bg, osk, parent, contents, props)
    props = ["requires", "show", "hide", "pathTo", "switchToPanel"]
    // caller, contents, props
    buildBoardishProps(bg, contents, props)
    props = ["ChildConstructor", "children", "addChildren", "add", "get"]
    // caller, osk, contents, props, ChildConstructor
    buildParentProps(bg, osk, contents, props, Board)

    bg.addChildren()
  }  // constructor()
}  // BoardGroup
