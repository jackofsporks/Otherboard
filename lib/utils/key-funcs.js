'use babel';

import findPathTarget from './find-path-target.js'

// // TODO: Compose in a way that doesn't need `this`
// // ...Create functions that return the functions you want, but that
// // are called with the value that you would want as the `this` value.
// // (NOT `.bind()`)

export var keyFuncs = {}

keyFuncs.pureSimulation = function() {
  const key = this;

  if (key.osk.activeKey) {
    const editor = atom.workspace.getActiveTextEditor()
    atom.views.getView(editor).focus()
    return "A key is already active"
  }

  if (!key.toSimulate) {
    console.warn("Key", key, "doesn't have anything to simulate, so don't push it, bub.")
    return key
  }

  // instantiate on each key press and destroy when key is deactivated!??!?!
  key.options = new key.optionsConstructor(key.osk, key)

  // store user settings for autocomplete auto-insertion with single option
  const ac = atom.config.get("autocomplete-plus")
  key.osk.autocompleteSettings = {
    enableAutoConfirmSingleSuggestion: ac.enableAutoConfirmSingleSuggestion
  }
  // change setting to not autocomplete on a single option
  atom.config.set("autocomplete-plus.enableAutoConfirmSingleSuggestion", false)
  // afterwards, restore previous setting

  const pane = atom.workspace.getActivePane()
  const editor = atom.workspace.getActiveTextEditor()
  const editorElement = atom.views.getView(editor)

  let buffer = editor.getBuffer()
  key.osk.buffer = buffer

  // QUESTION If this all goes in the autocomplete object maybe it'll be possible to check if autocomplete ever doesn't get triggered, which would lead to canceling
  key.osk.preInsertionCheckpoint = buffer.createCheckpoint()
  editor.insertText(key.toSimulate)
  key.osk.postInsertionCheckpoint = buffer.createCheckpoint()
  // revert to the right places, don't undo

  // put cursor back inside the editor
  pane.activate()
  // NOTE shows autocomplete list at cursor! But too awkward as an interface :(
  atom.commands.dispatch(editorElement, "autocomplete-plus:activate")
  // Move autocomplete list to next to key
  let numTries = 0
  const moveWhenReady = function(acp, listElm){
    numTries++
    if (numTries > 200) return
    const marginLeft = parseInt(window.getComputedStyle(listElm)["margin-left"])
    if (marginLeft !== 0) {
      let left = acp.getBoundingClientRect().left
      left += -1 * marginLeft
      acp.style.left = left + "px"
      console.log("list element:", marginLeft, left, acp)
    } else setTimeout(function(){moveWhenReady(acp, listElm)}, 1)
  }

  setTimeout(function() {
    //.autocomplete-suggestion-list
    const acp = document.querySelector("atom-overlay.autocomplete-plus")
    if (acp) {
      const listElm = acp.querySelector(".autocomplete-suggestion-list")
      const computed = window.getComputedStyle(listElm)
      const marginLeft = parseInt(computed["margin-left"])
      const keyElm = key.view.node
      const bounder = keyElm.getBoundingClientRect()
      const top = bounder.top
      const right = bounder.left + bounder.width
      acp.style.top = top + "px"
      acp.style.left = right + "px"
      console.log("list element:", marginLeft, acp)
      moveWhenReady(acp, listElm)
    } else {
      console.log("no autocompleting available"); // this is getting called, but error still shows up because it's trying to manipulate the bufferrrrrr... and? And thief never set its buffer. Have buffer on osk instead?!?!
      // key.release("cancel-osk", null)
      key.options.show(false)
    }
  }, 1) // timing again!! Booo!!! Can break with lag

  key.osk.activeKey = key
  return key
} // keyFuncs.pureSimulation

keyFuncs.pureNavigation = function(e, keyView) {
  const key = this;

  if (e.type === "mouseenter") return "hover can't activate a nav, my friend"

  if (!key.path) {
    console.warn("Key", key, "doesn't go anywhere, so don't push it, bub.")
    return key
  }

  const destination = findPathTarget( key.path, key.parent );

  if (destination) {destination.show()}  // TODO: Maybe switch responsibilities??? So activate knows what `view.show()` is
  else {console.log("Something's wrong with your path, friend. Check yourself. Path", key.path, "; Current location:", key.parent)}

  return key  // return destination???
} // keyFuncs.pureNavigation

// DANGER!!! COMPLETELY UNTESTED
// DANGER!!! CANNOT BE UNSTRINGIFIED EFFECTIVELY
keyFuncs.simulateThenNavigate = function() {
  const key = this

  const simulate = keyFuncs.pureSimulation.bind(key)
  simulate()
  const navigate = keyFuncs.pureNavigation.bind(key)
  navigate()

  return key
  return null;
} // keyFuncs.simulateThenNavigate

export default keyFuncs;
