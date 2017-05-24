'use babel';

import utils from './utils.js'
// children
import BoardView from './board-view.js'
import UserConfigView from './config-view.js'
import UserConfigView2 from './config-view2.js'

export default class BoardGroupView {
  /* (Obj, Obj) -> BoardGroupView
  *
  */
  constructor(source, parentView, osk) {
    const gView = this
    source.view = gView

    gView.parent = parentView
    gView.source = source

    gView.isVisible = true

    gView.tab = utils.addNode('osk-language-tab', source.displayName, ['osk-tab'], parentView.sidebar)
    gView.node = utils.addNode('osk-board-group', null, null, parentView.childContainer)
    gView.addEvents() // Make own sidebar tab events work

    gView.topbar = utils.addNode('osk-topbar', null, null, gView.node)
    gView.childContainer = utils.addNode('osk-board-container', null, null, gView.node)

    let boards = source.children;
    for (let boardi = 0; boardi < boards.length; boardi++) {
      let boardObj = boards[ boardi ]
      gView.addChild(boardObj)
    }

    gView.config = utils.addNode('osk-config-triggers', null, null, gView.topbar)
    // new UserConfigView({}, gView, source)
    new UserConfigView2({}, gView.config, osk)

    gView.hide()
  } // constructor

  tabClicked(ev, gView) {
    gView.source.show();
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

  materialize() {
    const gView = this,
    source = gView.source;
    const node = gView.node;
    // node siblings and sibling tabs
    const sibs = source.parent.children;
    for (let sibi = 0; sibi < sibs.length; sibi++) {
      let sib = sibs[sibi];
      // Only hide not yourself
      if (sib.id !== source.id) { sib.hide(); }
    } // hide siblings

    gView.node.classList.remove("hidden")
    gView.tab.classList.add("osk-active-tab")

    gView.isVisible = true;
    // // show parent, so that everything is revealed!
    // source.parent.show();
    return gView;
  } // materialize

  animateShow() {
    return this
  }

  show() {
    const gView = this
    // If it's already visible, just pass the buck (<-- what does "pass the buck" mean? There is no passing of bucks here)
    if (gView.isVisible) return gView
    gView.materialize()
    gView.animateShow()
    return gView
  } // show


  dematerialize() {
    this.node.classList.add('hidden')
    this.tab.classList.remove('osk-active-tab')
    this.isVisible = false
    return this
  }

  animateHide() {
    return this
  }

  hide() {
    const gView = this;
    // If it's already hidden, stop there
    // TODO: Hide parents needed?
    if (!gView.isVisible) {return gView;}
    gView.dematerialize()
    gView.animateHide()
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
