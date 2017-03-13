'use babel';

import Parent from './parent.js';

export default class BoardGroup extends Parent {
/* (Str, OskObj) -> BoardGroup
*
* An object that contains a list of boards
* TODO: XXX Sanitize display name for ID name
* TODO: pass in object into constructor instead and assign an id to the object originally
*/
  constructor(data, parent) {
  // `parent` should be OSK
    // Base: id, type, displayName, parent, node, tags, children,
    // destroy
    // Parent: add, remove, get/getBy, setActivePanel
    super(data, parent);

    const group = this;
    group.type = 'board-group'
  }  // constructor()

}  // BoardGroup
