"use babel";

// Inherit
import Parent from "./parent.js";
// Constructors
import BoardGroup from "./board-group.js";
// DOM
import OskView from "./view/osk-view";


export default class OSKObj extends Parent {
/* (Object) -> OSKObj
*
* The top-most object containing everything else
*/
  constructor(data) {
    // Base: id, type, displayName, parent, node, tags, children, destroy, config
    // Parent: add, remove, get/getBy, saveOpenPanel

    // `config` is sort of actually `state`
    const config = data.config
    super(config, null, BoardGroup)

    const osk = this
    osk.isOpen = false
    osk.type = "app"

    const view = new OskView(osk);
  }  // constructor()

  // Returns an object that can be retrieved when package is activated
  serialize() {
    const osk = this;

    let data = {
      config: osk.config,
      history: [],
      settings: {}
    }
    // console.log("serialized data ->", data)
    return {deserializer: "OSK", data: data}
  } // serialize

  open() {
    this.show()
    this.isOpen = true
    return this
  }

  close() {
    this.hide()
    this.isOpen = false
    return this
  }

  toggle() {
    if (this.isOpen) {this.close()}
    else {this.open()}
    return this
  }
}  // OSKObj
