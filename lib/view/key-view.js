'use babel';

import utils from './utils.js';

export default class KeyView {
  constructor(sourceObj, parentView) {
    const kView = this
    sourceObj.view = kView

    kView.parent = parentView // really parent node, but let's let this slide for now
    kView.source = sourceObj

    kView.isVisible = true
    kView.node = utils.addNode('osk-key', sourceObj.displayName, sourceObj.classes, parentView.node)  // No child container :(
    kView.addEvents()

  }  // constructor


  keyClicked(ev, kView) {
    // kView.show();
    kView.source.activate();
    return kView;
  } // tabClicked

  addEvents() {
    const kView = this;
    kView.node.addEventListener('click', function clickHandler(ev) {
      kView.keyClicked(ev, kView);
    });
    kView.node.addEventListener('touchup', function clickHandler(ev) {
      kView.keyClicked(ev, kView);
    });
    return kView;
  } // addEvents


  show() {
    const kView = this;
    // If it's already visible, just pass the buck
    if (kView.isVisible) {return kView;}

    node.classList.remove('hidden');
    kView.isVisible = true;

    return kView;
  }

  hide() {
    const kView = this;

    // If it's already hidden, stop there
    // TODO: Hide parents needed?
    if (!kView.isVisible) {return kView;}
    kView.node.classList.add('hidden');
    kView.isVisible = false;

    return kView;
  }

}  // KeyView
