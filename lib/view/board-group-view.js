'use babel';

import utils from './utils.js';
// children
import BoardView from './board-view.js';

export default class BoardGroupView {
  constructor(sourceObj, parentView) {
  /* (Obj, Obj) -> BoardGroupView
  *
  */
    const gView = this;
    sourceObj.view = gView;

    gView.parent = parentView;
    gView.source = sourceObj;

    gView.isVisible = true;

    gView.tab = utils.addNode('osk-language-tab', sourceObj.displayName, ['osk-tab'], parentView.sidebar);
    gView.node = utils.addNode('osk-board-group', null, null, parentView.childContainer);
    gView.addEvents(); // Make own sidebar tab events work

    gView.topbar = utils.addNode('osk-topbar', null, null, gView.node);
    gView.childContainer = utils.addNode('osk-board-container', null, null, gView.node);

    let boards = sourceObj.children;
    for (let boardi = 0; boardi < boards.length; boardi++) {
      let boardObj = boards[ boardi ];
      gView.addChild(boardObj);
    }
    sourceObj.children[0].view.show();

    gView.hide();
  } // constructor


  tabClicked(ev, gView) {
    gView.show();
    return gView;
  } // tabClicked

  addEvents() {
    const gView = this;
    gView.tab.addEventListener('click', function tabHandler(ev) {
      gView.tabClicked(ev, gView);
    });
    gView.tab.addEventListener('touchup', function tabHandler(ev) {
      gView.tabClicked(ev, gView);
    });
    return gView;
  } // addEvents


  show() {
    const gView = this,
    source = gView.source;

    // Not visual/view, but this still seems the best place to put it
    source.activate();

    // If it's already visible, just pass the buck
    if (gView.isVisible) {
      // TODO: show parent, so that everything is revealed!
      source.parent.view.show();
      return gView;
    }

    const node = gView.node;

    // node siblings and sibling tabs
    const sibs = source.parent.children;
    for (let sibi = 0; sibi < sibs.length; sibi++) {
      let sib = sibs[sibi];
      // Only hide not yourself
      if (sib.id !== source.id) {sib.view.hide();}
    } // hide siblings

    node.classList.remove('hidden');
    gView.tab.classList.add('osk-active-tab')

    gView.isVisible = true;

    // show parent, so that everything is revealed!
    source.parent.view.show();
    return gView;
  } // show

  hide() {
    const gView = this;

    // If it's already hidden, stop there
    // TODO: Hide parents needed?
    if (!gView.isVisible) {return gView;}

    gView.tab.classList.remove('osk-active-tab')
    gView.node.classList.add('hidden');

    gView.isVisible = false;
    return gView;
  } // hide

  //
  // toggle() {  // needed?
  //   const gView = this,
  //       node = gView.node;
  //
  //   if (gView.isVisible) {gView.hide();}
  //   else {gView.show();}
  //
  //   return node;
  // } // toggle


  addChild(childObj) {
    const gView = this;
    const child = new BoardView( childObj, gView );
    return child;
  } // addChild


}  // BoardGroupView
