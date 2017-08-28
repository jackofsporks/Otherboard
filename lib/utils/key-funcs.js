'use babel';

import findPathTarget from './find-path-target.js'

// // TODO: Compose in a way that doesn't need `this`
// // ...Create functions that return the functions you want, but that
// // are called with the value that you would want as the `this` value.
// // (NOT `.bind()`)
// const keyConstructor = atom.keymaps.constructor;

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
  key.options = new key.optionsConstructor(key.osk)

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

  key.osk.preInsertionCheckpoint = buffer.createCheckpoint()
  editor.insertText(key.toSimulate)
  key.osk.postInsertionCheckpoint = buffer.createCheckpoint()
  // revert to the right places, don't undo

  // put cursor back inside the editor
  pane.activate()
  // NOTE shows autocomplete list at cursor! But too awkward as an interface :(
  atom.commands.dispatch(editorElement, "autocomplete-plus:activate")
  // Move autocomplete list to next to key
  setTimeout(function() {
    let acp = document.querySelector("atom-overlay.autocomplete-plus")
    if (acp) {
      let parent = acp.parentNode
      console.log("autocomplete element:", acp)
      atom.acp = acp
      // key.view.node.appendChild(acp)
      key.view.node.style.position = "relative" // TODO: add this in CSS laterz
      // console.log(key.view.node);
      atom.acp.style.top = "320px"
      atom.acp.style.left = "900px"

      // console.log("suggestion-list-thing -->", atom.packages.activePackages["autocomplete-plus"].mainModule.autocompleteManager.suggestionList)
      // console.log("suggestions-list-thing -->", atom.packages.activePackages["autocomplete-plus"].mainModule.autocompleteManager)
    }
  }, 300)
  // const autocomp = atom.packages.activePackages["autocomplete-plus"].mainModule.autocompleteManager
  // // NOTE Maybe didn't work
  // const highSchoolProm = autocomp.findSuggestions(false)


  // NOTE Not working too many properties need to be true. It's a mess.
  // const highSchoolProm = autocomp.requestNewSuggestions()

  // NOTE attempt to get data from the promise. FAILURE!!!!
  // // .getSuggestionsFromProviders({editor: this.editor, bufferPosition, scopeDescriptor, prefix, activatedManually})
  // const cursor = editor.getLastCursor()
  // const options = {
  //   editor: editor,
  //   bufferPosition: cursor.getBufferPosition(),
  //   scopeDescriptor: cursor.getScopeDescriptor(),
  //   prefix: key.toSimulate,
  //   activatedManually: false
  // }
  // const highSchoolProm = autocomp.getSuggestionsFromProviders(options)
  // highSchoolProm.then(function() {
  //   console.log(arguments)
  //   console.log("autocomplete suggestionList -->", autocomp.suggestionList)
  // })
  // console.log("autocomplete suggestionList -->", autocomp.suggestionList)

  // NOTE Didn't do anything?
  // atom.commands.dispatch(editorElement, "snippets:toggle")
  // NOTE This also just pastes the first available snippet
  // atom.commands.dispatch(editorElement, "snippets:expand")
  // atom.commands.dispatch(editorElement, "snippets:available") NOTE shows the full list of all available snippets
  // NOTE this just inserts the first snippet
  // event = atom.keymaps.constructor.buildKeydownEvent("tab", {shift: false, target: editorElement})
  // atom.keymaps.handleKeyboardEvent(event)

  // const evt = keyConstructor.buildKeydownEvent("U+0046", {target: document.activeElement, keyCode: 68  });
  // console.log(atom.keymaps.handleKeyboardEvent);
  // return atom.keymaps.handleKeyboardEvent(evt);

  key.osk.activeKey = key
  return key
} // keyFuncs.pureSimulation

// keyFuncs.pureSimulation = sim.toString()




keyFuncs.pureNavigation = function() {

  const key = this;

  if (!key.path) {
    console.warn("Key", key, "doesn't go anywhere, so don't push it, bub.")
    return key
  }

  const destination = findPathTarget( key.path, key.parent );

  if (destination) {destination.show()}  // TODO: Maybe switch responsibilities??? So activate knows what `view.show()` is
  else {console.log("Something's wrong with your path, friend. Check yourself. Path", key.path, "; Current location:", key.parent)}

  return key  // return destination???
} // keyFuncs.pureNavigation

// keyFuncs.pureNavigation = nav.toString()



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

// keyFuncs.simulateThenNavigate = simNnav.toString()


export default keyFuncs;
