"use babel";

import utils from "./utils.js"

export default class UserConfigView {

  constructor(sourceObj, parentView, osk) {

      const cView = this
      sourceObj.view = cView

      cView.parent = parentView
      cView.source = sourceObj
      cView.osk = osk

      cView.isVisible = false
      cView.isMinimized = false // really, osk is minimized

      cView.node = parentView.config
      cView.node.classList.add('closed')
      cView.nodes = {} // What is the point of this?

      cView.nodes.top = utils.addNode("div", null, ["osk-topper"], cView.node)
      // cView.nodes.bottom = utils.addNode("div", null, null, cView.node)
      // cView.nodes.bottom.id = "osk-config-bottom"

      cView.nodes.topLeft = utils.addNode("div", null, ["osk-topper-child", "osk-left"], cView.nodes.top)
      cView.nodes.topCenter = utils.addNode("div", null, ["osk-topper-child", "osk-center"], cView.nodes.top)
      cView.nodes.topRight = utils.addNode("div", null, ["osk-topper-child", "osk-right"], cView.nodes.top)

      cView.nodes.toggleConfig = utils.addNode("div", null, ["icon", "icon-gear"], cView.nodes.topCenter)
      cView.nodes.toggleConfig.id = "osk-config-toggle"

      cView.nodes.oskMini = utils.addNode("div", null, ["icon", "icon-dash"], cView.nodes.topRight)
      cView.nodes.oskMini.id = "osk-minimize"

      cView.nodes.oskClose = utils.addNode("div", null, ["icon", "icon-remove-close"], cView.nodes.topRight)
      cView.nodes.oskClose.id = "osk-close"

      cView.addEvents()
  }  // constructor()

  addEvents() {
    const cView = this
    // TODO research 'tap' event
    console.log(cView.nodes.top)
    // Open/close settings
    cView.nodes.top.addEventListener("click", function(){
      // cView.toggleConfig()
    });

    // // Reset to default boards/saved open panel
    // console.log(reset)
    // cView.nodes.resetOsk.addEventListener("click", function(e){
    //   if (this.checked) {
    //     cView.osk.saveReset(true)
    //   } else {
    //     cView.osk.saveReset(false)
    //   }
    // })

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
    cView.node.classList.remove('closed')
    // cView.nodes.toggleConfig.classList.remove("icon-gear")
    // cView.nodes.toggleConfig.classList.add("icon-triangle-down")
    cView.isVisible = true
  }

  hide() {
    const cView = this
    cView.node.classList.add('closed')
    // cView.nodes.toggleConfig.classList.remove("icon-triangle-down")
    // cView.nodes.toggleConfig.classList.add("icon-gear")
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

  toggleMinimize() {
    let cView = this
    if (cView.isMinimized) {
      cView.osk.maximize()
      cView.nodes.oskMini.classList.remove("icon-plus")
      cView.nodes.oskMini.classList.add("icon-dash")
      cView.isMinimized = false
    } else {
      cView.osk.minimize()
      cView.hide()
      cView.nodes.oskMini.classList.remove("icon-dash")
      cView.nodes.oskMini.classList.add("icon-plus")
      cView.isMinimized = true
    }
  }
}  // BoardGroup
