"use babel";

import utils from "./utils.js"

export default class UserConfigView {

  constructor(sourceObj, container, osk) {

      const cView = this
      sourceObj.view = cView

      cView.source = sourceObj
      cView.osk = osk

      cView.isVisible = false
      cView.isMinimized = false // really, osk is minimized

      cView.node = container
      cView.nodes = {} // What is the point of this?
      cView.nodes.options = osk.view.config.node

      cView.nodes.toggleConfig = utils.addNode("div", null, ["icon", "icon-gear"], cView.node)
      cView.nodes.toggleConfig.id = "osk-config-toggle"

      // Ugly way to show "maximize" when appropriate
      if ( cView.node.tagName === "OSK-MINIBAR" ) {
        cView.nodes.oskMini = utils.addNode("div", null, ["icon", "icon-plus"], cView.node)
        cView.nodes.oskMini.id = "osk-minimize"
      } else {
        cView.nodes.oskMini = utils.addNode("div", null, ["icon", "icon-dash"], cView.node)
        cView.nodes.oskMini.id = "osk-minimize"
      }

      cView.nodes.oskClose = utils.addNode("div", null, ["icon", "icon-remove-close"], cView.node)
      cView.nodes.oskClose.id = "osk-close"

      let resetLabel = "<label id='reset' class='input-label osk-setting'><input id='reset-input' class='input-checkbox' type='checkbox'> Reset to defaults on next load</label>"
      cView.nodes.options.innerHTML = resetLabel
      cView.nodes.resetOsk = cView.nodes.options.querySelector("#reset-input")
      // Cannot re-checkify #reset-input because the osk.config.reset val will be false if it was checked on close

      cView.nodes.options.classList.add("closed")

      cView.addEvents()
  }  // constructor()

  addEvents() {
    const cView = this
    // TODO research 'tap' event

    // Open/close settings
    cView.nodes.toggleConfig.addEventListener("click", function(){
      cView.toggleConfig()
    });

    // Reset to default boards/saved open panel
    // console.log('nodes -->', cView.nodes)
    cView.nodes.resetOsk.addEventListener("click", function(e){
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

    // Minimize osk
    cView.nodes.oskMini.addEventListener("click", function(e){
      cView.toggleMinimize()
      e.stopPropagation()
    })
  }

  show() {
    const cView = this
    cView.nodes.options.classList.remove('closed')
    cView.isVisible = true
  }

  hide() {
    const cView = this
    cView.nodes.options.classList.add('closed')
    cView.isVisible = false
  }

  toggleConfig() {
    const cView = this
    if (cView.isVisible) {
      cView.hide()
    } else {
      cView.show()
    }
  }

  minimize() {
    let cView = this;
    cView.osk.minimize()
    cView.hide()
    cView.osk.view.minibar.node.classList.remove("closed")
  }

  maximize() {
    let cView = this;
    cView.osk.maximize()
    cView.osk.view.minibar.node.classList.add("closed")
  }

  toggleMinimize() {
    let cView = this
    if (cView.osk.isMinimized) {
      cView.maximize()
    } else {
      cView.minimize();
    }
  }
}  // ConvigView
