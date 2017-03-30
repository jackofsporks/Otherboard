'use babel';

import Base from './base.js';

export default class Key extends Base {
/* (Str, Panel) -> Key
*
* An object that contains keys and has a more
* specific purpose within that category.
*
* TODO: Sanitize display name for ID name
*/
  constructor(source, parent) {
  // constructor(keyData, parent) {  // For the future! Huzzah!
  // `parent` should be a Panel object
    // Base: id, type, displayName, parent, node, tags, children, destroy, config
    super(source, parent)

    const key = this

    // TODO: Make sure no two keys have the same id (ex: same tag and selector showing up on search panel)
    key.id = source.id
    key.toSimulate = source.toSimulate

    key.type = 'key'
    key.tags = source.tags // Searchable
    key.classes = source.classes // For DOM node
    // TODO: Add classes to Key node creation (key view)

    key.path = source.path
    // key._goTo = source._goTo || key._goTo
    key.activate = source.activate
  }
} // Key
