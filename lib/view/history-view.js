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
    const hView = this
    const hist = hView.osk.history

    hView.nodes.back.addEventListener("click", function (ev) {
      hist.back()
      // if (hist.position === 0) hView.disable("back")
      // else hView.enable("back")
    })

    hView.nodes.forward.addEventListener("click", function (ev) {
      hist.forward()
      // if (hist.position === (hist.data.length - 1)) hView.disable("forward")
      // else hView.enable("forward")
    })

  } // addEvents

  disable(which) {
    this.nodes[which].classList.add("disabled")
  }

  enable(which) {
    this.nodes[which].classList.remove("disabled")
  }

}  // History
