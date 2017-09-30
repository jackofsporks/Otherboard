"use babel";

// Inherit
import Parent from "./parent.js";
// Constructors
import BoardGroup from "./board-group.js"
import OSKHistory from "./history.js"
// DOM
import OskView from "./view/osk-view";


export default class OSKObj extends Parent {
/* (Object) -> OSKObj
*
* The top-most object containing everything else
*/
  constructor(data) {
    // Base: id, type, displayName, parent, node, tags, children, destroy, config
    // Parent: add, remove, get/getBy, switchToPanel

    // `config` is sort of actually `state`
    const config = data.config
    super(config, null, BoardGroup)

    const osk = this
    osk.isOpen = false
    osk.type = "app"

    osk.history = new OSKHistory(data.history, osk)
    // If 0 records (like at very first time or at reset), add this one
    if (osk.history.data.length === 0) {
      // console.log("first record!!! -->", osk.config.lastOpenPanel)
      osk.history.newRecord(osk.config.lastOpenPanel)
    }

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
    // console.log("serialized data ->", data)
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
    // NOT this.show() (no activating animations)

    // NOTE Avoid animation and history issues
    let path = osk.config.lastOpenPanel
    let parts = path.split("/")

    const bg = osk.get(parts[0])
    bg.view.materialize()
    const bd = bg.get(parts[1])
    bd.view.materialize()
    const pn = bd.get(parts[2])
    pn.view.materialize()

    osk.view.materialize()
    if (osk.history.data.length > 0) osk.handleHistory(osk.config.lastOpenPanel, true)
    if (osk.history.data.length <= 0) osk.handleHistory(osk.config.lastOpenPanel, false) // makes new record


    osk.isOpen = true
    return osk
  }

  close() {
    const osk = this
    // this.hide()
    // No animations
    osk.view.dematerialize()
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

  handleHistory(path, wasFromHistory) {
    const osk = this
    const hist = osk.history

    if (!wasFromHistory) {
      // console.log("adding a new record")
      hist.newRecord(path)
    }
    if (hist.position === 0) hist.view.disable("back")
    else hist.view.enable("back")
    if (hist.position === (hist.data.length - 1)) hist.view.disable("forward")
    else hist.view.enable("forward")
  }

  switchToPanel(path, wasFromHistory) {
    let osk = this
    // console.trace(osk.id, "-->", path)
    osk.config.lastOpenPanel = path
    // TODO Replace inheritance with composition ASAP!!!
    // Temp solution (bad)
    // console.log("+++++ history @ save -->", wasFromHistory, osk.history);
    osk.handleHistory(path, wasFromHistory)

    return osk
  }
}  // OSKObj
