"use babel"

import utils from "../utils.js"

export default class ConfigOptionsView {

  constructor(osk, parentView, container) {

      const cView = this
      cView.osk = osk

      cView.isVisible = false

      cView.parent = parentView
      cView.container = container // TODO standardize for all view objects
      cView.node = utils.addNode("osk-config", null, null, container)

      cView.nodes = {} // What is the point of this?
      // cView.nodes.tabs = {}
      // cView.nodes.sections = {}
      const inputs = cView.nodes.inputs = {}

      // // TODO iterate through config to render the options section
      // // NOTE find where that gets rendered by atom and hook into that process
      // cView.nodes.topbar = utils.addNode("osk-topbar", null, null, cView.node)

      // atom.config.observe("osk", function(oskConfig) {
      //   console.log("observed -->", oskConfig)
      //   for (var inputID in oskConfig) {
      //     if (oskConfig.hasOwnProperty(inputID)) {
      //       // TODO Show/hide/etc. when tabs are clicked upon
      //       // TODO Remeber which one was last open
      //       let tab = utils.addNode("osk-option-tab", inputID, ["osk-tab"], cView.nodes.topbar)
      //       cView.nodes.section[inputID] = utils.addNode("osk-options-section", null, null, cView.node)
      //       // observe "osk." + sub-section name + "." + option name
      //       // name.replace(/([A-Z])/g, " $1")
      //       // name.toLowerCase()
      //       // name = name.replace(/([^.])/, function(first){return first.toUpperCase()})
      //     }
      //   }
      // })

      // FOR NOW! BY HAND! It's all in the wrist...
      const sec1 = cView.nodes.section1 = utils.addNode("div", null, ["config-section"], cView.node)
      sec1.id = "debug"

      // TODO make tab
      const op1 = cView.nodes.reset = utils.addNode("div", null, ["config-option"], sec1)
      const label1 = utils.addNode("label", null, ["input-label", "osk-setting"], op1)
      label1.id = "reset"
      const input1 = inputs.reset = utils.addNode("input", null, ["input-checkbox"], label1)
      input1.id = "resetInput" // TODO change to camel case
      input1.setAttribute("type", "checkbox")
      // Cannot re-checkify #reset-input because the osk.config.reset val will be false if it was checked on close
      const label1Text = document.createTextNode("Reset to defaults on next load")
      label1.appendChild(label1Text)


      // TODO!!!! do all the event stuff up here. Too much needs to be passed in!!!
      cView.addEvents("debug", "resetOnStartup", input1, function(value) {
        if (value) input1.checked = true
        else input1.checked = false
      })

      cView.node.classList.add("closed")
  }  // constructor()

  addEvents(type, name, node, observationHandler) {
    const cView = this
    // TODO research "tap" event

    atom.config.observe("osk." + type + "." + name, observationHandler)

    // Reset to default boards/saved open panel
    // console.log("nodes -->", cView.nodes)
    node.addEventListener("click", function(e) {
      if (this.checked) cView.osk.saveReset(true)
      else cView.osk.saveReset(false)
    })
  }

  show() {
    const cView = this
    cView.node.classList.remove("closed")
    cView.isVisible = true
  }

  hide() {
    const cView = this
    cView.node.classList.add("closed")
    cView.isVisible = false
  }

  toggle() {
    const cView = this
    if (cView.isVisible) {
      cView.hide()
    } else {
      cView.show()
    }
  }
}  // ConfigOptionsView
