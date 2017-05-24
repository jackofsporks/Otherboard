"use babel";

// Compose
import buildBase from "../components/base-props";
import buildBoardishProps from "../components/board-props";
import buildParentProps from "../components/parent-props";
// Constructors
import BoardGroup from "./board-group"
import OSKHistory from "../history"
// import OSKSettings from "./settings.js"
// DOM
import OskView from "../view/osk-view";


/**
* (Object) -> OSKObj
*
* The top-most object containing everything else
*/
export default class OSK {
  constructor(data) {
    const osk = this
    osk.isOpen = false
    osk.type = "app"

    // `config` is sort of actually `state`
    const config = data.config
    let props = ["id", "uid", "config", "parent", "displayName", "reset"]
    // caller, osk, parent, config, props
    buildBase(osk, osk, null, config, props)
    props = ["requires", "show", "hide"]
    // caller, config, props
    buildBoardishProps(osk, config, props)
    props = ["ChildConstructor", "children", "addChildren", "add", "get"]
    // caller, osk, config, props, ChildConstructor
    buildParentProps(osk, osk, config, props, BoardGroup)

    osk.addChildren()

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
    // NOTE THESE SHOULD NOT BE HERE!!!!
    this.view.app.classList.add("minimized")
    this.isMinimized = true;
  }

  maximize() {
    // NOTE THESE SHOULD NOT BE HERE!!!!
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
    if (osk.history.data.length > 0) osk.history.handlePanelOpened(osk.config.lastOpenPanel, true)
    if (osk.history.data.length <= 0) osk.history.handlePanelOpened(osk.config.lastOpenPanel, false) // makes new record

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
    else {
      this.open()
      // NOTE THESE SHOULD NOT BE HERE!!!!
      // TODO this.view.maximize()
      // TODO this.view.config.hide() or something like it
      // this.view.app.classList.remove("minimized")
    }
    return this
  }

  saveReset(bool) {
    this.config.reset = bool;
  }

  saveOpenPanel(path, wasFromHistory) {
    let osk = this
    // console.trace(osk.id, "-->", path)
    osk.config.lastOpenPanel = path
    // console.log("+++++ history @ save -->", wasFromHistory, osk.history);
    osk.history.handlePanelOpened(path, wasFromHistory)
    return osk
  }
}  // OSK
