'use babel';

import utils from './utils.js';

export default class KeyView {
  constructor(sourceObj, parentView) {
    const kView = this
    sourceObj.view = kView

    kView.parent = parentView // really parent node, but let's let this slide for now
    kView.source = sourceObj

    kView.isVisible = true

    sourceObj.classes.push("osk-key")
    kView.node = utils.addNode("button", sourceObj.displayName, sourceObj.classes, parentView.node)  // No child container :(
    kView.addEvents()

  }  // constructor

  keyClicked(ev, kView) {
    kView.source.activate(ev, kView);
    return kView;
  } // tabClicked

  addEvents() {
    const kView = this;
    kView.node.addEventListener('click', function clickHandler(ev) {kView.keyClicked(ev, kView);});
    kView.node.addEventListener('mouseenter', function clickHandler(ev) {kView.keyClicked(ev, kView);});
    kView.node.addEventListener('touchup', function clickHandler(ev) {kView.keyClicked(ev, kView);});
    return kView;
  } // addEvents

  styleTrigger(triggerData){
    const kView = this
    // Style the letter in three parts
    const str = triggerData.owner.displayName
    const pos = triggerData.position
    console.log("element of key -->", kView.node);
    const start = str.substr(0, pos)
    const styled = "<span class='trigger-letter'>" + (str.substr(pos, 1)) + "</span>"
    const end = str.substr(pos + 1, str.length)
    const newStr = start + styled + end
    kView.node.innerHTML = newStr
    return kView
  }

  deStyleTrigger(){
    this.node.innerHTML = this.source.displayName
  }

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
