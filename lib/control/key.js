"use babel"

// Compose
import buildBase from "../components/base-props"
// Snippets/Autocomplete
import AutoThief from "./autocomplete"
import keyFuncs from "../utils/key-funcs.js";
// import buildBoardishProps from "../components/board-props"
// import buildParentProps from "../components/parent-props"
// Children??!!?
// Subscriptions
import {CompositeDisposable, Disposable} from "atom"

export default class Key {
  constructor(osk, parent, source) {
    const key = this
    key.type = "key"
    key.optionsConstructor = AutoThief // TODO change to snippeterConstructor... or something...

    let props = ["id", "uid", "parent", "osk", "displayName", "classes", "tags", "realBoardIgnore", "path", "toSimulate", "activate"]
    // caller, osk, parent, config, props
    buildBase(key, osk, parent, source, props)

    // QUESTION how does this not change the name of all location of this key?!?!?!
    if (source.altName) key.displayName = source.altName

    key.subscriptions = new CompositeDisposable()
  }  // constructor

  realBoard(triggerData){
    const key = this
    key.trigger = triggerData.letter
    // Style the letter
    key.view.styleTrigger(triggerData)

    // listen for the letter press (subscriptions)
    const handleKeypress = function(e){
      // QUESTION how to not trigger action keys
      // QUESTION how to remove letter that was just typed to trigger the key
      // if (key.trigger === "i") console.log("me?", e.code, key.trigger, e.code === key.trigger, e);
      if (e.key === key.trigger) key.activate(e, key.view)
    }

    // TODO listen to editor instead of body. if people are messing around with other plugins ya' don't want to be pa
    const body = document.body
    body.addEventListener("keyup", handleKeypress)
    let disp = new Disposable(() => {
      body.removeEventListener("keyup", handleKeypress)
      key.view.deStyleTrigger()
    })
    // based on settings
      // show opitons with highlighted letters
      // or paste in first possible option
      // or do all that and then destroy the real board manager
    return disp
  }

  cancel(){
    const key = this
    if (key.options) key.options.cancel(...arguments)
  }

  release() {
    const key = this
    if (key.options) key.options.release(...arguments)
  }

  deactivate(canceled) {
    const key = this
    // restore previous settings
    // QUESTION restore settings in here or in autocomplete thief
    const prevSettings = key.osk.autocompleteSettings
    for (let variable in prevSettings) {
      if (prevSettings.hasOwnProperty(variable)) {
        atom.config.set("autocomplete-plus." + variable, prevSettings[variable])
      }
    }
    key.options = null
    key.osk.activeKey = null

    // if key has a path to navigate to, go there
    if (!canceled && key.path) {
      const nav = keyFuncs.pureNavigation.bind(this)
      nav()
    }

    return key
  } // deactivate
} // Board
