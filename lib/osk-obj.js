'use babel';

import Parent from './parent.js';

export default class OSKObj extends Parent {
/* (None) -> OSKObj
*
* The top-most object containing everything else
*/
  constructor() {
    // Base: id, type, displayName, parent, node, tags, children,
    // destroy
    // Parent: add, remove, get/getBy
    super('OSK', null);

    const osk = this;
    osk.isOpen = false;
    osk.id    = '0';
  }  // constructor()

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  open() {
    if ( !this.isOpen ) {
      this.view.show();
      this.isOpen = true;
    }
    return this;
  }

  close() {
    if ( this.isOpen ) {
      this.view.hide();
      this.isOpen = false;
    }
    return this;
  }

  toggle() {
    if (this.isOpen) {this.close();}
    else {this.open();}
  }

}  // OSKObj
