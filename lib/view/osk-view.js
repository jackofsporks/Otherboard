'use babel'

import utils from './utils.js'
import Input from './input.js'
// children
import BoardGroupView from './board-group-view.js'
import ConfigToggles from './config-view2.js' // TODO rename to config-toggles-view
import HistoryView from "./history-view.js"

export default class OskView {
// TODO: Add ability to change displayName

  constructor(source) {

    const view  = this
    view.source = source
    source.view = view
    view.isVisible = false

    view.parentNode = atom.views.getView(atom.workspace.panelContainers.bottom)

    // Create root node for boards
    view.node = utils.addNode('osk', null, ['hidden'], view.parentNode)

    // Tied to boardView.config
    let minibar = utils.addNode('osk-minibar', null, ["closed"], view.node)
    view.config = new UserSettings(osk, view, view.node)
    view.minibar = new ConfigToggles({}, minibar, source) // after config is defined

    view.app = utils.addNode('osk-app', null, null, view.node)

    view.sidebar = utils.addNode('osk-sidebar', null, null, view.app)
    view.history = utils.addNode('osk-history-nav', null, null, view.sidebar)
    new HistoryView(source.history, view.history, source) // after config is defined

    view.childContainer = utils.addNode('osk-board-groups-container', null, null, view.app)

    let boardGroups = source.children
    for (let groupi = 0; groupi < boardGroups.length; groupi++) {
      let groupObj = boardGroups[ groupi ]
      view.addChild(groupObj)
    }

    // // TODO change osk to 'source' to keep consistent
  }  // constructor()

  getElement() {
    return this.node;
  }

  materialize() {
    const view = this
    view.node.classList.remove("hidden")
    view.isVisible = true;
    return view
  }

  animateShow() {
    const view = this
    return this
  }

  show() {
    const view = this
    view.materialize()
    view.animateShow()
    return view
  }

  dematerialize() {
    const view = this
    view.node.classList.add("hidden")
    view.isVisible = false
    return view
  }

  animateHide() {
    const view = this
    return view
  }

  hide() {
    const view = this;
    view.dematerialize()
    view.animateHide()
    return view;
  }

  toggle() {
    const view = this,
        node = view.node;

    if (view.isVisible) {view.hide();}
    else {view.show();}

    return node;
  }

  addChild(childObj) {
    const view = this;
    const child = new BoardGroupView(childObj, view, view.source);
    return child;
  }

  activate(OSKState) {
      // console.log(this.content);
      // console.log(OSKState);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.parentNode.removeChild(this.node);
  }

}  // oskView
