"use babel";

// Inherit
import Parent from "./parent.js";
// Constructors
import BoardGroup from "./board-group.js"
import OSKHistory from "./history.js"
// DOM
import OskView from "./view/osk-view";

let globalData


export default class OSKObj extends Parent {
/* (Object) -> OSKObj
*
* The top-most object containing everything else
*/
  constructor(data) {
    // Base: id, type, displayName, parent, node, tags, children, destroy, config
    // Parent: add, remove, get/getBy, saveOpenPanel

    globalData = data
    console.log("position at start -->", globalData.history.position)

    // `config` is sort of actually `state`
    const config = data.config
    super(config, null, BoardGroup)

    const osk = this
    osk.isOpen = false
    osk.type = "app"

    new OskView(osk)
  }  // constructor()

  // Returns an object that can be retrieved when package is activated
  serialize() {
    const osk = this;

    let data = {
      config: osk.config,
      // history: osk.history,
      history: {
        data: osk.history.data,
        position: osk.history.position
      },
      settings: {}
    }
    console.log("serialized data ->", data)
    return {deserializer: "OSK", data: data}
  } // serialize

  minimize() {
    this.view.app.classList.add("minimized")
    this.isMinimized = true;
  }

  maximize() {
    this.view.app.classList.remove("minimized")
    this.isMinimized = false;
  }

  open() {
    const osk = this

    // NOT this.show()
    // NOTE Avoid animation and history issues
    let path = osk.config.lastOpenPanel
    let parts = path.split("/")

    console.log("++++++++++ parts -->", path, parts)

    let bg = osk.get(parts[0])
    console.log("++++++++++ bg -->", parts[0], bg)
    bg.node.classList.remove("hidden")
    let bd = bg.get(parts[1])
    console.log("++++++++++ bd -->", parts[1], bd)
    bd.node.classList.remove("hidden")
    console.log("++++++++++ panel -->", parts[2], bd.get(parts[2]))
    bd.get(parts[2]).node.classList.remove("hidden")

    osk.node.classList.remove("hidden")

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

  saveReset(bool) {
    this.config.reset = bool;
  }

  saveOpenPanel(path, wasFromHistory) {
    let osk = this
    // console.trace(osk.id, "-->", path)
    osk.config.lastOpenPanel = path

    // TODO Replace inheritance with composition first!!!
    // Temp solution (bad)
    console.log("+++++ history @ start -->", osk.history);
    if (osk.history) {
      console.trace("have history, was from it??? -->", wasFromHistory)
      if (!wasFromHistory) {
        console.log("adding a new record")
        osk.history.newRecord(path)
      }
    } else {
      console.log("Making history!!!", globalData)
      // Make history!!!
      let origHist = globalData.history
      osk.history = new OSKHistory(origHist, osk)
    }
    return osk
  }
}  // OSKObj
