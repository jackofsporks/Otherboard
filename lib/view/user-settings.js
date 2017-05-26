"use babel"

import utils from "utils.js"

export defaults class UserSettingsView {
  constructor(osk, parentView, parentNode) {
    const cView = this
    cView.parent = parentView
    cView.osk = osk

    cView.nodes = {}
    cView.nodes.parent = parentNode

    cView.node = utils.addNode('osk-config', null, null, view.node)
  }
}
