"use babel";

import utils from "./utils.js"

export default class UserConfigView {

  constructor(sourceObj, parentView, osk) {

      const cView = this
      sourceObj.view = cView

      cView.parent = parentView
      cView.source = sourceObj
      cView.osk = osk

      cView.isVisible = false;

      cView.node = parentView.config
      cView.node.classList.add('closed')
      cView.nodes = {} // What is the point of this?

      cView.nodes.top = utils.addNode("div", null, ["osk-topper"], cView.node)
      cView.nodes.bottom = utils.addNode("div", null, null, cView.node)
      cView.nodes.bottom.id = "osk-config-bottom"

      cView.nodes.topLeft = utils.addNode("div", null, ["osk-topper-child", "osk-left"], cView.nodes.top)
      cView.nodes.topCenter = utils.addNode("div", null, ["osk-topper-child", "osk-center"], cView.nodes.top)
      cView.nodes.topRight = utils.addNode("div", null, ["osk-topper-child", "osk-right"], cView.nodes.top)

      cView.nodes.toggleArrow = utils.addNode("div", null, ["icon", "icon-triangle-up"], cView.nodes.topCenter)
      cView.nodes.toggleArrow.id = "osk-config-toggle"

      cView.nodes.oskClose = utils.addNode("div", null, ["icon", "icon-x"], cView.nodes.topRight)
      cView.nodes.oskClose.id = "osk-close"

      let resetLabel = "<label id='reset' class='input-label osk-setting'><input id='reset-input' class='input-checkbox' type='checkbox'> Reset to defaults on next load</label>"
      cView.nodes.bottom.innerHTML = resetLabel

      cView.addEvents()
  }  // constructor()

  addEvents() {
    const cView = this
    // TODO research 'tap' event

    // Open/close settings
    cView.nodes.top.addEventListener("click", function(){
      cView.toggleConfig()
    });

    // Reset to default boards/saved open panel
    var reset = document.body.querySelector("osk").querySelector("#reset-input");
    console.log(reset)
    reset.addEventListener("click", function(e){
      if (this.checked) {
        cView.osk.saveReset(true)
      } else {
        cView.osk.saveReset(false)
      }
    })

    // Close osk
    cView.nodes.oskClose.addEventListener("click", function(e){
      cView.osk.close()
      e.stopPropagation()
    })
  }

  show() {
    const cView = this
    cView.node.classList.remove('closed')
    cView.nodes.toggleArrow.classList.remove("icon-triangle-up")
    cView.nodes.toggleArrow.classList.add("icon-triangle-down")
    cView.isVisible = true
  }

  hide() {
    const cView = this
    cView.node.classList.add('closed')
    cView.nodes.toggleArrow.classList.remove("icon-triangle-down")
    cView.nodes.toggleArrow.classList.add("icon-triangle-up")
    cView.isVisible = false
  }

  toggleConfig() {
    const cView = this
    if ( cView.isVisible ) {
      cView.hide()
    } else {
      cView.show()
    }
  }
}  // BoardGroup
