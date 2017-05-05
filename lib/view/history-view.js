"use babel";

import utils from "./utils.js"

export default class History {

  constructor(sourceObj, container, osk) {

    const hView = this
    sourceObj.view = hView

    hView.source = sourceObj
    hView.osk = osk

    hView.node = container
    hView.nodes = {} // What is the point of this?

    hView.nodes.back = utils.addNode("div", null, ["icon", "icon-triangle-left", "history-arrow"], hView.node)
    hView.nodes.back.id = "historyBack"

    hView.nodes.forward = utils.addNode("div", null, ["icon", "icon-triangle-right", "history-arrow"], hView.node)
    hView.nodes.forward.id = "historyForward"

    hView.addEvents()

  } // constructor

  addEvents() {
    let hView = this

    hView.nodes.back.addEventListener("click", function (ev) {
      let panel = hView.osk.history.back()
      if (panel) { console.log(panel.node) }
    })

    hView.nodes.forward.addEventListener("click", function (ev) {
      let panel = hView.osk.history.forward()
      if (panel) { console.log(panel.node) }
    })

  } // addEvents

}  // History
