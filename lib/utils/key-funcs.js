'use babel';

import findPathTarget from './find-path-target.js'

export var keyFuncs = {}

keyFuncs.simulate = function() {
  const key = this

  if (!key.toSimulate) {
    console.warn("Key", key, "doesn't have anything to simulate, so don't push it, bub.")
    return key
  }

  const editor = atom.workspace.getActiveTextEditor()
  atom.views.getView(editor).focus()
  editor.insertText(key.toSimulate)

  return key
} // simulate

keyFuncs.triggerSnippet = function() {
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

  // instantiate on each key press and null when key is deactivated
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
    } else setTimeout(function(){moveWhenReady(acp, listElm)}, 1)
  }

  setTimeout(function() {
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
      moveWhenReady(acp, listElm)
    } else {
      key.options.show(false)
    }
  }, 1) // timing again!! Booo!!! Can break with lag

  key.osk.activeKey = key
  return key
} // triggerSnippet

keyFuncs.pureNavigation = function(e, keyView) {
  const key = this;

  if (e && e.type === "mouseenter") return "hover can't activate a nav, my friend"

  if (!key.path) {
    console.warn("Key", key, "doesn't go anywhere, so don't push it, bub.")
    return key
  }

  const destination = findPathTarget( key.path, key.parent );

  if (destination) {destination.show()}
  else {console.log("Something's wrong with your path, friend. Check yourself. Path is", key.path, "; Current location is", key.parent)}

  return key  // return destination???
} // pureNavigation

// DANGER!!! COMPLETELY UNTESTED
keyFuncs.simulateThenNavigate = function() {
  const key = this

  const simulate = keyFuncs.triggerSnippet.bind(key)
  simulate()
  const navigate = keyFuncs.pureNavigation.bind(key)
  navigate()

  return key
  return null;
} // simulateThenNavigate

export default keyFuncs;
