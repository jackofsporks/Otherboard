'use babel';

import utils from './utils.js';
// children
import KeyView from './key-view.js';

export default class PanelView {
  constructor(sourceObj, parentView) {

    const pView = this;
    sourceObj.view = pView;

    pView.parent = parentView;
    pView.source = sourceObj;

    pView.isVisible = true;

    pView.node = utils.addNode('osk-panel', null, null, parentView.childContainer);
    // pView.addEvents();

    const addContainer = function (containerObj, parentNode) {
      // Add a container (row or column) to the panel with keys
      // if (sourceObj.id === "Dimensions") console.log("classes -->", containerObj.classes)
      const containerNode = utils.addNode("osk-panel-" + containerObj.type, null, containerObj.classes, parentNode);
      return {node: containerNode} // to match what addKey returns
    }; // addContainer

    // function addNestedContent(remainingContent, parentNode) {
    //   for ( let ii = 0; ii < remainingContent.length; ii++) {
    //     const item = remainingContent[ ii ]
    //     let node = null
    //
    //     if ( item.type === 'row' ) {
    //
    //     } else if (item.type === 'column') {
    //
    //     } else if (item.type === 'key') {
    //
    //     }
    //     if (node) parentNode.addKey(node)
    //
    //     if (item.content) addNestedContent(item.content, node)
    //   }
    // }

    const funcMap = {
      row: addContainer,
      column: addContainer,
      key: pView.addKey
    }

    // WARNING never have a panel with only a key as content (no rows or columns)
    function addNestedContent(remainingContent, parentNode) {
      for (let ii = 0; ii < remainingContent.length; ii++) {
        const item = remainingContent[ii]
        let resultObj = funcMap[item.type](item, parentNode)
        // A key doesn't have content
        if (item.content) addNestedContent(item.content, resultObj.node)
      }
    } // addNestedContent

    addNestedContent(sourceObj.content, pView.node)
    if (pView.source.id === "Dimensions") console.log("columns?? -->", pView.node);

    // const addRow = function (row, parentView) {
    // // Add a row or column to the panel with keys
    // // TODO: Allow nested rows and columns (recursive)
    //   const rowNode = utils.addNode('osk-panel-row', null, null, parentView.node);
    //
    //   // Right now, just add keys, don't worry about nested rows
    //   for (let keyi = 0; keyi < row.length; keyi++) {
    //     const key = row[keyi];
    //     pView.addKey( key, rowNode );
    //   }
    // };  // addRow

    // // THIS ONE IS DIFFERENT! (and will be even more different)
    // // TODO: Check if there a ton of items in these arrays now since they have been serialized from the start
    // // sourceObj.rows.length = 0;
    // let rows = sourceObj.rows;
    // for (let rowi = 0; rowi < rows.length; rowi++) {
    //   let rowObj = rows[ rowi ];
    //   addRow(rowObj, pView);
    // }

    pView.hide();
  }  // constructor


  // tabClicked(ev, pView) {
  //   // pView.source.activate();
  //   // pView.show();
  //   return pView;
  // } // tabClicked
  //
  // addEvents() {
  //   const pView = this;
  //   // pView.tab.addEventListener('click', function tabHandler(ev) {
  //   //   pView.tabClicked(ev, pView);
  //   // });
  //   return pView;
  // } // addEvents


  show() {
    const pView = this,
    source = pView.source;

    // If it's already visible, just pass the buck
    if (pView.isVisible) return pView

    const node = pView.node;

    // node siblings and sibling tabs
    const sibs = source.parent.children;
    for (let sibi = 0; sibi < sibs.length; sibi++) {
      let sib = sibs[sibi];
      // Only hide not yourself
      if (sib.id !== source.id) {sib.hide();}
    } // hide siblings

    node.classList.remove('hidden');
    pView.isVisible = true;

    // // show parent, so that everything is revealed!
    // source.parent.show();
    return pView;
  }

  hide() {
    const pView = this;

    // If it's already hidden, stop there
    // TODO: Hide parents needed?
    if (!pView.isVisible) { return pView; }
    pView.node.classList.add('hidden');
    pView.isVisible = false;

    return pView;
  }

  // parentNode is really containerNode
  addKey(keyObj, parentNode) {  // Really addKey atm
    const pView = this;
    const key = new KeyView(keyObj, {node: parentNode});
    return key;
  } // addKey

}  // PanelView
