'use babel';

// import DomUtils from './utils/dom-utils.js';

export default class Base {
/* (Str, Obj) -> Base
*
* The class that all the objects are based off of.
* All objects have:
* id, type, displayName, parent, node, tags, children,
* domUtils, show, hide, destroy
* .set()?
*/
  constructor(displayName, parent) {

    const base = this;

    // TODO: create a unique id in non-base object
    base.id           = null;
    base.type         = null;
    base.displayName  = displayName;
    base.parent       = parent;
    base.node         = null;
    base.tags         = [];
    base.children     = null;  // terminates at youngest generation
    // base.domUtils     = new DomUtils();
  }  // constructor()

  // show() {
  //   const base = this;
  //   console.log('show');
  //   return base;
  // }
  //
  // hide() {
  //   const base = this;
  //   console.log('hide');
  //   return base;
  // }

  activate() {
    const base = this;
    if (base.parent) base.parent.activeChild = base;
    return base;
  }

  destroy() {
    const base = this;
    console.log('destroy');
    return base;
  }

  set(propName, val) {
    const base = this;
    console.log('set');
    return base;
  }

}  // Base
