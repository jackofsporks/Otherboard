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

  if (!key.toSimulate) {
    console.warn("Key", key, "doesn't have anything to simulate, so don't push it, bub.")
    return key
  }

  const pane = atom.workspace.getActivePane()
  const editor = atom.workspace.getActiveTextEditor()
  const editorElement = atom.views.getView(editor)

  editor.insertText(key.toSimulate)
  pane.activate()
  // NOTE shows autocomplete list at cursor! But too awkward as an interface :(
  // atom.commands.dispatch(editorElement, "autocomplete-plus:activate")

  const autocomp = atom.packages.activePackages["autocomplete-plus"].mainModule.autocompleteManager
  // .suggestionsList
  // .displaySuggestions
  // .findSuggestions
  // .hideSuggestionList
  // .getSuggestionsFromProviders({editor: this.editor, bufferPosition, scopeDescriptor, prefix, activatedManually})
  const cursor = editor.getLastCursor()
  const options = {
    editor: editor,
    bufferPosition: cursor.getBufferPosition(),
    scopeDescriptor: cursor.getScopeDescriptor(),
    prefix: key.toSimulate,
    activatedManually: false
  }

  const highSchoolProm = autocomp.getSuggestionsFromProviders(options)
  highSchoolProm.then(function() {
    console.log(arguments)
    console.log("autocomplete suggestionsList -->", autocomp.suggestionsList)
  })

  // console.log("autocomplete suggestionsList -->", autocomp.suggestionsList)

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
