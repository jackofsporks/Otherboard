'use babel';

import Parent from './parent.js';
import Board from './board.js';

export default class BoardGroup extends Parent {
/* (Str, OskObj) -> BoardGroup
*
* An object that contains a list of boards
* TODO: XXX Sanitize display name for ID name
* TODO: pass in object into constructor instead and assign an id to the object originally
*/
  constructor(source, parent) {
  // `parent` should be OSK
    // Base: id, type, displayName, parent, node, tags, children, destroy, config
    // Parent: add, remove, get/getBy, saveOpenPanel
    super(source, parent, Board);

    const group = this;
    group.type = 'board-group'
    // group.NewChild = Board;
  }  // constructor()
}  // BoardGroup
