"use babel";

// Compose
import buildBase from "../components/base-props";
import buildBoardishProps from "../components/board-props";
import buildParentProps from "../components/parent-props";
// Constructors
import BoardGroup from "./board-group"
import OSKHistory from "../history"
// import OSKSConfig from "./custom-settings/manager"
// import OSKSConfig from "./settings.js"
// DOM
import OskView from "../view/osk-view";


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
    if (this.isOpen) this.close()
    else this.open()
    return this
  }

  saveReset(bool) {
    this.contents.reset = bool;
  }

  saveOpenPanel(path, wasFromHistory) {
    let osk = this
    // console.trace(osk.id, "-->", path)
    osk.contents.lastOpenPanel = path
    // console.log("+++++ history @ save -->", wasFromHistory, osk.history);
    osk.history.handlePanelOpened(path, wasFromHistory)
    return osk
  }
}  // OSK
