'use babel';

import utils from './utils.js';
// children
import PanelView from './panel-view.js';

export default class BoardView {
  constructor(sourceObj, parentView) {

    const bView = this;
    sourceObj.view = bView;

    bView.parent = parentView;
    bView.source = sourceObj;

    bView.isVisible = true;

    bView.tab = utils.addNode('osk-category-tab', sourceObj.displayName, ['osk-tab'], parentView.topbar);
    bView.node = utils.addNode('osk-board', null, null, parentView.childContainer);
    bView.addEvents(); // Make own topbar tab events work

    bView.childContainer = utils.addNode('osk-panel-container', null, null, bView.node);
    let panels = sourceObj.children;
    for (let paneli = 0; paneli < panels.length; paneli++) {
      let panelObj = panels[ paneli ];
      bView.addChild(panelObj);
    }

    bView.hide();
  }  // constructor


  tabClicked(ev, bView) {
    bView.source.show();
    return bView;
  } // tabClicked

  addEvents() {
    const bView = this;
    bView.tab.addEventListener('click', function tabHandler(ev) {
      bView.tabClicked(ev, bView);
    });
    bView.tab.addEventListener('touchup', function tabHandler(ev) {
      bView.tabClicked(ev, bView);
    });
    return bView;
  } // addEvents

  materialize() {
    const bView = this,
    source = bView.source;
    const node = bView.node;
    // node siblings and sibling tabs
    const sibs = source.parent.children;
    for (let sibi = 0; sibi < sibs.length; sibi++) {
      let sib = sibs[sibi];
      // Only hide not yourself
      if (sib.id !== source.id) {sib.hide()}
    } // hide siblings

    bView.node.classList.remove("hidden")
    bView.tab.classList.add("osk-active-tab")

    bView.isVisible = true
    // // show parent, so that everything is revealed!
    // source.parent.show();
    return bView;
  } // materialize

  animateShow() {
    return this
  }

  show() {
    const bView = this
    // If it's already visible, just pass the buck (<-- what does "pass the buck" mean? There is no passing of bucks here)
    if (bView.isVisible) return bView
    bView.materialize()
    bView.animateShow()
    return bView
  } // show

  dematerialize() {
    this.tab.classList.remove("osk-active-tab")
    this.node.classList.add("hidden")
    this.isVisible = false
    return this
  }

  animateHide() {
    return this
  }

  hide() {
    const bView = this;
    // If it's already hidden, stop there
    // TODO: Hide parents needed?
    if (!bView.isVisible) {return bView;}
    bView.dematerialize()
    bView.animateHide()
    return bView;
  } // hide

  addChild(childObj) {
    const bView = this;
    const child = new PanelView( childObj, bView );
    return child;
  } // addChild

}  // BoardView
