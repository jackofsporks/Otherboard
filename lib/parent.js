'use babel';

import Base from './base.js';
import findPathTarget from './utils/find-path-target.js';

export default class Parent extends Base {
/* (Str, Obj) -> Parent
*
* Terrible name, but "NotAKey" was not an option
* All parents have:
* addChild/add, removeChild/remove, get/getBy, setActivePanel
*/
  constructor(source, parent) {
    // Base: id, type, displayName, parent, node, tags, children,
    // destroy
    super(source, parent)
    const par    = this
    par.children = []
    par.activeChild = null
  }  // constructor()

  add(child) {
  // TODO: Set off event when child added so that view can add it to the DOM?
    const par = this
    par.children.push(child)
    return par
  }

  remove() {
    const par = this
    console.log('remove')
    return par
  }

  get(id) {
  // Gets a child with a matching id
    const par = this

    let child = null
    const children = par.children  // parent of panel of key

    let childi = 0
    while (!child && childi < children.length) {
        let currChild = children[childi]
        if (currChild.id === id) {child = currChild}
        childi += 1
    }

    return child;
  }

  getBy(prop, val) {
    const par = this
    console.log("getBy called, but nothing's in here!")
    return par
  }

  setActivePanel( path ) {
    this.activePath = path
    this.activeChild = findPathTarget(path, this)
    return this
  }

}  // Parent
