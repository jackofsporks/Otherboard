'use babel';

import utils from './utils.js';

export default class BoardGroupsView {
  constructor(boardGroups, parentView) {
  /* ([Obj], Obj) -> BoardGroupView
  *
  */
    let gView = this;

    gView.parent  = parentView;
    gView.node    = utils.addNode('osk-board-groups-container', null, null, parentView.node);
    // gView.topbar  = utils.addNode('osk-topbar', null, null, gView.node);
    // gView.panelContainer  = utils.addNode('osk-board-group-container', null, null, gView.node);

    gView.children = [];
    for (let groupi = 0; groupi < boardGroups.length; groupi++) {
      let groupObj = boardGroups[ groupi ];
      let childObj = gView.addChild(groupObj);
      childObj.child.classList.add('hidden');
    }

    // Default for now is first child shown
    const first = gView.children[0];
    first.child.classList.remove('hidden');
    first.tab.classList.add('osk-active-tab');

  }  // constructor


  addEvents(childObj) {
    let gView = this;
    childObj.tab.addEventListener('click', function clickedGroupTab(evnt){
      gView.showChild(evnt, childObj);
    })
    return this;
  } // addEvents


  addChild(groupObj) {
    let gView = this;

    let tab = utils.addNode('osk-language-tab', groupObj.displayName, ['osk-tab'], gView.parent.sidebar);
    let group = utils.addNode('osk-board-group', null, null, gView.node);

    let childObj = { tab: tab, child: group };
    gView.children.push(childObj);

    gView.addEvents(childObj);

    return childObj;
  } // addChild


  showChild(evnt, childObj) {
    const gView = this;

    const children = gView.children;
    for (let childi = 0; childi < children.length; childi++) {
      children[ childi ].child.classList.add('hidden');
      children[ childi ].tab.classList.remove('osk-active-tab');
    }

    childObj.child.classList.remove('hidden');
    childObj.tab.classList.add('osk-active-tab');

    return childObj;
  }  // showChild

}  // BoardGroupsView
