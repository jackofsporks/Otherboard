'use babel';

export default class Base {
/* (Str, Obj) -> Base
*
* The class that all the objects are based off of.
* All objects have:
* id, type, displayName, parent, node, tags, children,
* domUtils, show, hide, destroy
* .set()?
* TODO: pass in source instead of just displayName
*/
  constructor(source, parent) {

    const base = this;

    // TODO: create a unique id in non-base object
    base.id           = source.id;  // for now
    base.displayName  = source.displayName;
    base.parent       = parent;
    base.node         = null;
    base.tags         = source.tags || [];
    base.children     = null;  // terminates at youngest generation

    // Accumulate path of this object
    let pathTo = base.id,
    oldest = parent;
    while ( oldest && oldest.type !== 'osk' ) {
      pathTo = oldest.id + '/' + pathTo
      oldest = oldest.parent
    }

    base.pathTo = pathTo

  }  // constructor()

  activate() {
    const base = this;
    if (base.parent) base.parent.activeChild = base;
    base.view.show();
    return base;
  }

  show() {
    const base = this;
    if (base.parent) base.parent.activeChild = base;
    base.view.show();
    return base;
  }
  // Which one of the above?

  hide() {
    const base = this;
    base.view.hide();
    return base;
  }

  destroy() {
    const base = this;
    console.log('destroy');
    return base;
  }

  set(propName, val) {
    // For changing tab names if desired, etc.
    const base = this;
    console.log('set');
    return base;
  }

}  // Base
