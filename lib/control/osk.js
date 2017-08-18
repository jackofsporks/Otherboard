"use babel";

// Atom
import {Emitter} from "atom"
// Compose
import buildBase from "../components/base-props";
import buildBoardishProps from "../components/board-props";
import buildParentProps from "../components/parent-props";
// Constructors
import BoardGroup from "./board-group"
import OSKHistory from "../history"
// import OSKConfig from "./custom-settings/manager"
// import OSKConfig from "./settings.js"
// DOM
import OskView from "../view/osk-view";
// Snippets/Autocomplete
import AutoThief from "./autocomplete"


/**
* (Object) -> OSKObj
*
* The top-most object containing everything else
*/
export default class OSK {
  constructor(serialized) {
    const osk = this
    osk.isOpen = false
    osk.type = "app"
    osk.emitter = new Emitter()
    osk.activeAutocomplete = null // don need it but maybe instances in future
    osk.activeKey = null

    // `contents` is sort of actually `state`
    const contents = serialized.contents

    let props = ["id", "uid", "contents", "parent", "displayName", "reset"]
    buildBase(osk, osk, null, contents, props) // caller, osk, parent, contents, props
    props = ["requires", "show", "hide"]
    buildBoardishProps(osk, contents, props) // caller, contents, props
    props = ["ChildConstructor", "children", "addChildren", "add", "get"]
    buildParentProps(osk, osk, contents, props, BoardGroup) // caller, osk, contents, props, ChildConstructor

    osk.addChildren()

    osk.history = new OSKHistory(serialized.history, osk)
    // If 0 records (like at very first time or at reset), add this one
    if (osk.history.data.length === 0) {
      // console.log("first record!!! -->", osk.contents.lastOpenPanel)
      osk.history.newRecord(osk.contents.lastOpenPanel)
    }

    new OskView(osk)

    // instantiate on each key press and destroy when key is deactivated!??!?!
    osk.autocompleter = new AutoThief(osk)

    osk.config = serialized.config

    // osk.config = new OSKSettings(osk, osk, serialized.config)
  }  // constructor()

  // Returns an object that can be retrieved when package is activated
  serialize() {
    const osk = this;

    let data = {
      contents: osk.contents,
      // history: osk.history,
      history: {
        data: osk.history.data,
        position: osk.history.position
      },
      config: osk.config // TODO phase this out
    }
    // console.log("serialized data ->", data)
    return {deserializer: "OSK", data: data}
  } // serialize

  deactivate() {
    this.activeAutocomplete.release(null, "cancel-osk")
    this.emitter.clear()
    this.emitter.dispose()
  }

  minimize() {
    // NOTE THESE SHOULD NOT BE HERE!!!!
    this.view.app.classList.add("minimized")
    this.emitter.emit("minimized", this)
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
    let path = osk.contents.lastOpenPanel
    let parts = path.split("/")

    const bg = osk.get(parts[0])
    bg.view.materialize()
    const bd = bg.get(parts[1])
    bd.view.materialize()
    const pn = bd.get(parts[2])
    pn.view.materialize()

    osk.view.materialize()
    osk.view.minibar.maximize()
    if (osk.history.data.length > 0) osk.history.handlePanelOpened(osk.contents.lastOpenPanel, true)
    if (osk.history.data.length <= 0) osk.history.handlePanelOpened(osk.contents.lastOpenPanel, false) // makes new record

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
    if (this.isOpen) {
      this.activeAutocomplete.release(null, "cancel-osk")
      this.close()
    } else this.open()
    return this
  }

  saveReset(bool) {
    this.contents.reset = bool;
  }

  saveOpenPanel(path, wasFromHistory) {
    let osk = this
    osk.contents.lastOpenPanel = path
    osk.history.handlePanelOpened(path, wasFromHistory)
    return osk
  }
}  // OSK
