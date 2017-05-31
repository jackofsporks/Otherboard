"use babel"

import utils from "../utils.js"

export default class ConfigToggler {

  constructor(osk, parentView, container) {

      const tView = this
      tView.osk = osk

      tView.isMinimized = false // really, osk is minimized

      tView.parent = parentView // TODO standardize this for all view objects
      // TODO add actual .container
      tView.node = container // TODO Make own node in here
      tView.nodes = {} // What is the point of this?

      tView.nodes.toggleConfig = utils.addNode("div", null, ["icon", "icon-gear"], tView.node)
      tView.nodes.toggleConfig.id = "osk-config-toggle"

      // Ugly way to show "maximize" when appropriate
      if (tView.node.tagName === "OSK-MINIBAR") {
        tView.nodes.oskMini = utils.addNode("div", null, ["icon", "icon-plus"], tView.node)
        tView.nodes.oskMini.id = "osk-minimize"
      } else {
        tView.nodes.oskMini = utils.addNode("div", null, ["icon", "icon-dash"], tView.node)
        tView.nodes.oskMini.id = "osk-minimize"
      }

      tView.nodes.oskClose = utils.addNode("div", null, ["icon", "icon-remove-close"], tView.node)
      tView.nodes.oskClose.id = "osk-close"

      tView.addEvents()
  }  // constructor()

  addEvents() {
    const tView = this
    // TODO research "tap" event

    // Open/close config options
    tView.nodes.toggleConfig.addEventListener("click", function(){
      tView.osk.view.nodes.config.toggle()
    })

    // Close osk
    tView.nodes.oskClose.addEventListener("click", function(e){
      tView.osk.close()
      e.stopPropagation()
    })

    // Minimize osk
    tView.nodes.oskMini.addEventListener("click", function(e){
      tView.toggleMinimize()
      e.stopPropagation()
    })
  }

  minimize() {
    let tView = this
    tView.osk.minimize()
    // tView.hide()
    tView.osk.view.minibar.node.classList.remove("closed")
  }

  maximize() {
    let tView = this
    tView.osk.maximize()
    tView.osk.view.minibar.node.classList.add("closed")
  }

  toggleMinimize() {
    let tView = this
    if (tView.osk.isMinimized) {
      tView.maximize()
    } else {
      tView.minimize()
    }
  }
}  // ConfigToggler
