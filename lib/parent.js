"use babel";

import Base from "./base.js";
import findPathTarget from "./utils/find-path-target.js";

export default class Parent extends Base {
/* (Str, Obj) -> Parent
*
* Terrible name, but "NotAKey" was not an option
* All parents have:
* addChild/add, removeChild/remove, get/getBy, setActivePanel
*/
  constructor(config, parent, NewChild) {
    // Base: id, type, displayName, parent, node, tags, children, destroy, config
    super(config, parent)
    const par = this

    par.saveOpenPanel(config.lastOpenPanel)

    let scripts = par.scripts = {}
    let reqs = par.requires = config.requires
    for (let name in reqs) {
      scripts[name] = require(reqs[name])
    }

    par.children = []
    par.NewChild = NewChild;

    if (config.children) {
      let configChildren = config.children
      for (let name in configChildren) {
        // this = group, child = board
        if (configChildren.hasOwnProperty(name)) {
          // build child using the config data and add it to yourself
          par.add(configChildren[name])
        }
      }
    } // config children
  }  // constructor()

  // Different `add` for each object? Different child constructor?
  add(childConfig) {
  // TODO: Set off event when child added so that view can add it to the DOM?
    const par = this
    const child = new par.NewChild(childConfig, par)
    par.children.push(child)
    return par
  }

  remove(childID) {
    // ?????? - allow childConfig instead/also?
    const par = this
    console.log("remove, wip")
    return par
  }

  get(id) {
  // Gets a child with a matching id
    const par = this

    let child = null
    const children = par.children  // parent of panel of key

    let childi = 0
    while (!child && childi < children.length) {
        let currChild = children[childi]
        if (currChild.id === id) {child = currChild}
        childi += 1
    }
    return child;
  }

  getBy(prop, val) {
    const par = this
    console.log("getBy called, but nothing's in here!")
    return par
  }

  saveOpenPanel(path) {
    // console.trace(this.id, "-->", path)
    this.config.lastOpenPanel = path
    return this
  }
}  // Parent
