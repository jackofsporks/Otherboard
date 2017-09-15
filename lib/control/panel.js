"use babel"

// Compose
import buildBase from "../components/base-props"
import buildBoardishProps from "../components/board-props"
import buildParentProps from "../components/parent-props"
// Children
import Key from "./key.js"

export default class Panel {
  constructor(osk, parent, contents) {
      const pn = this
      osk.active.panel = this
      pn.type = "panel"

      let props = ["id", "uid", "contents", "parent", "osk", "displayName"]
      // caller, osk, parent, contents, props
      buildBase(pn, osk, parent, contents, props)
      props = ["requires", "hide", "pathTo"]
      // caller, contents, props
      buildBoardishProps(pn, contents, props)
      props = ["content", "get", "children"]
      // caller, osk, contents, props, ChildConstructor
      buildParentProps(pn, osk, contents, props, Key)
      // props = ["children", "get"]
      // props = ["ChildConstructor", "children", "addChildren", "add", "get"]

      // WARNING never have a panel with only a key as content (no rows or columns)
      function addNestedContent(remainingContent, parentObject) {

        // If there are no items this will finish up
        for (let ii = 0; ii < remainingContent.length; ii++) {
          const item = remainingContent[ ii ]
          let newObj = null

          if (item.type === 'row' || item.type === 'column') {
            newObj = {type: item.type, content: [], classes: item.classes}
          } else {
            let keySource = pn.getKeySource(item)
            newObj = new Key(osk, pn, keySource)
            pn.children[ newObj.id ] = newObj
          }

          if (newObj !== null) parentObject.content.push(newObj)

          // A key doesn't have content
          if (item.content) addNestedContent(item.content, newObj)
        }
      } // addNestedContent

      pn.content = [];
      addNestedContent(contents.content, pn)
      // console.log('final content -->', pn.content)

  }  // constructor()

  show(wasHistory) {
    const pn = this;
    const osk = pn.osk

    // if not the same panel as before
    if (pn.pathTo !== osk.contents.lastOpenPanel) {
      // QUESTION Add some osk property to hold order of navigati... isn't that just history!?!?!?!?!?!
      pn.parent.saveOpenPanel(pn.pathTo)
      pn.parent.parent.saveOpenPanel(pn.pathTo)
      osk.saveOpenPanel(pn.pathTo, wasHistory)
      pn.view.show()
      pn.parent.show(true)  // Always going up from a panel
    }
    return pn
  }

  // QUESTION do all this in key!?!?!
  getKeySource(path) {
    let parts = /^(.+)\.(.+)>{2}(.+)$/.exec(path)
    if (!parts) parts = /^(.+)\.(.+)$/.exec(path)
    // console.log("path parts -->", parts, this.id);
    let scriptName = parts[1],
    keyId = parts[2],
    altName = parts[3],
    obj = this.requires[scriptName][keyId]
    obj.altName = parts[3]
    return obj
  }
} // Panel
