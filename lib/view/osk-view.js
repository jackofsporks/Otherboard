'use babel';

import utils from './utils.js';
import Input from './input.js';
// children
import BoardGroupView from './board-group-view.js';
import UserConfigView from './config-view.js'

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

    view.config = utils.addNode('osk-config', null, null, view.node)
    new UserConfigView({}, view, source)
    view.app = utils.addNode('osk-app', null, null, view.node)

    view.sidebar = utils.addNode('osk-sidebar', null, null, view.app)
    view.history = utils.addNode('osk-history-nav', '<-  ->', null, view.sidebar)

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

  show() {
    const view = this
    view.node.classList.remove('hidden');
    view.isVisible = true;
    return view;
  }

  hide() {
    const view = this;
    view.node.classList.add('hidden');
    view.isVisible = false;
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
    const child = new BoardGroupView(childObj, view);
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
