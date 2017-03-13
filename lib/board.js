'use babel';

import Parent from './parent.js';

export default class Board extends Parent {
/* (Str, BoardGroup) -> Board
*
* An object that contains panels and is loyal to
* a specific category of whatever language group
* it belongs to
*
* TODO: Sanitize display name for ID name
*/
  constructor(data, parent) {
  // `parent` should be BoardGroup
    // Base: id, type, displayName, parent, node, tags, children,
    // destroy
    // Parent: add, remove, get/getBy, setActivePanel
    super(data, parent);

    const board = this;
    board.type = 'board'
  }  // constructor

}  // Board
