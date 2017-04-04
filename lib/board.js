"use babel";

import Parent from "./parent.js";
import Panel from "./panel.js";

export default class Board extends Parent {
/* (Str, BoardGroup) -> Board
*
* An object that contains panels and is loyal to
* a specific category of whatever language group
* it belongs to
*
* TODO: Sanitize display name for ID name
*/
  constructor(config, parent) {
    // `parent` should be BoardGroup
    // Base: id, type, displayName, parent, node, tags, children, destroy, config
    // Parent: add, remove, get/getBy, saveOpenPanel
    super(config, parent, Panel)

    const board = this
    board.type = "board"
  }  // constructor
}  // Board
