"use babel";

import Base from "./base.js";

export default class Key extends Base {
/* (Str, Panel) -> Key
*
* An object that contains keys and has a more
* specific purpose within that category.
*/

  // NOTE never add a content property in here!!!!
  // TODO or switch to detecting "types"

  constructor(source, parent) {
    // `parent` should be a Panel object
    // Base: id, type, displayName, parent, node, tags, children, destroy, config
    super(source, parent)

    const key = this
    key.type = "key"
    key.toSimulate = source.toSimulate
    key.path = source.path
    key.activate = source.activate
    // QUESTION how does this not change the name of all location of this key?!?!?!
    if (source.altName) key.displayName = source.altName
  }
} // Key
