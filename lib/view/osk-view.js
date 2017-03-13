'use babel';

import utils from './utils.js';
import Input from './input.js';
// children
import BoardGroupView from './board-group-view.js';

export default class OskView {
// TODO: Add ability to change displayName

  constructor(osk) {

    const view  = this;
    view.source = osk;
    osk.view = view;

    view.parentNode = atom.views.getView(atom.workspace.panelContainers.bottom);
    // view.source = osk;

    view.isVisible = false;

    // Create root node
    view.node = utils.addNode('osk', null, ['hidden'], view.parentNode);

    view.sidebar = utils.addNode('osk-sidebar', null, null, view.node);
    view.history = utils.addNode('osk-history-nav', '<-  ->', null, view.sidebar);

    view.childContainer = utils.addNode('osk-board-groups-container', null, null, view.node);

    let boardGroups = osk.children;
    for (let groupi = 0; groupi < boardGroups.length; groupi++) {
      let groupObj = boardGroups[ groupi ];
      view.addChild(groupObj);
    }

    // TODO change osk to 'source' to keep consistent
    if ( !osk.activeChild ) osk.activeChild = osk.children[0]
    osk.activeChild.show( true )
    // console.log(osk.activeChild.pathTo)

    // Create left sidebar nav
    // const leftSidebar = utils.addNode('osk-sidebar', null, null, view.node);
    // utils.addNode('osk-language-tab', '<-  ->', ['osk-tab'], leftSidebar);
    // utils.addNode('osk-language-tab', 'ABC', ['osk-tab', 'osk-active-tab'], leftSidebar);
    // utils.addNode('osk-language-tab', 'HTML', ['osk-tab'], leftSidebar);
    // utils.addNode('osk-language-tab', 'CSS', ['osk-tab'], leftSidebar);
    // utils.addNode('osk-language-tab', 'JS', ['osk-tab'], leftSidebar);

    // // =====================
    // // BOARD GROUPS
    // // =====================
    // // const boardGroups = utils.addNode('osk-board-group-container', null, null, view.node);
    // const topbar      = utils.addNode('osk-topbar', null, null, view.boardGroupsContainer);
    // utils.addNode('osk-category-tab', 'Abc', ['osk-tab', 'osk-active-tab'], topbar);
    // utils.addNode('osk-category-tab', 'Math', ['osk-tab'], topbar);
    // utils.addNode('osk-category-tab', 'Symbols', ['osk-tab'], topbar);
    //
    // // =====================
    // // TODO: ADD BOARD
    // // =====================
    //
    // // =====================
    // // PANELS
    // // =====================
    // const panelContainer  = utils.addNode('osk-panel-container', null, null, view.boardGroupsContainer);
    // const row1            = utils.addNode('osk-panel-row', null, null, panelContainer);
    // const row2            = utils.addNode('osk-panel-row', null, null, panelContainer);
    // const row3            = utils.addNode('osk-panel-row', null, null, panelContainer);
    // const row4            = utils.addNode('osk-panel-row', null, null, panelContainer);
    //
    // // =====================
    // // KEYS
    // // =====================
    // utils.addNode('osk-key', 'q', null, row1)
    // utils.addNode('osk-key', 'w', null, row1)
    // utils.addNode('osk-key', 'e', null, row1)
    // utils.addNode('osk-key', 'r', null, row1)
    // utils.addNode('osk-key', 't', null, row1)
    // utils.addNode('osk-key', 'y', null, row1)
    // utils.addNode('osk-key', 'u', null, row1)
    // utils.addNode('osk-key', 'i', null, row1)
    // utils.addNode('osk-key', 'o', null, row1)
    // utils.addNode('osk-key', 'p', null, row1)
    //
    // utils.addNode('osk-key', 'a', null, row2)
    // utils.addNode('osk-key', 's', null, row2)
    // utils.addNode('osk-key', 'd', null, row2)
    // utils.addNode('osk-key', 'f', null, row2)
    // utils.addNode('osk-key', 'g', null, row2)
    // utils.addNode('osk-key', 'h', null, row2)
    // utils.addNode('osk-key', 'j', null, row2)
    // utils.addNode('osk-key', 'k', null, row2)
    // utils.addNode('osk-key', 'l', null, row2)
    //
    // utils.addNode('osk-key', 'z', null, row3)
    // utils.addNode('osk-key', 'x', null, row3)
    // utils.addNode('osk-key', 'c', null, row3)
    // utils.addNode('osk-key', 'v', null, row3)
    // utils.addNode('osk-key', 'b', null, row3)
    // utils.addNode('osk-key', 'n', null, row3)
    // utils.addNode('osk-key', 'm', null, row3)
    // utils.addNode('osk-key', ',', null, row3)
    // utils.addNode('osk-key', '.', null, row3)
    //
    // utils.addNode('osk-key', 'space', ['osk-space-bar'], row4)

    // const input = view.input = new Input(view);
  }  // constructor()

  getElement() {
    return this.node;
  }

  show() {
    const view = this,
    source = view.source;
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
    this.node.parent.removeChild(this.node);
  }

}  // oskView
