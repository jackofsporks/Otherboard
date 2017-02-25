'use babel';

import findPathTarget from './find-path-target.js';

// TODO: Compose in a way that doesn't need `this`
// ...Create functions that return the functions you want, but that
// are called with the value that you would want as the `this` value.
// (NOT `.bind()`)
const keyConstructor = atom.keymaps.constructor;

export var keyFuncs = {}


keyFuncs.pureSimulation = function() {
  const key = this;

  if (!key.toSimulate) {
    console.warn("Key", key, "doesn't have anything to simulate, so don't push it, bub.");
    return key;
  }

  const editor = atom.workspace.getActiveTextEditor();
  editor.insertText(key.toSimulate);

  // const evt = keyConstructor.buildKeydownEvent('U+0046', {target: document.activeElement, keyCode: 68  });
  // console.log(atom.keymaps.handleKeyboardEvent);
  // return atom.keymaps.handleKeyboardEvent(evt);
  return key;
} // keyFuncs.pureSimulation


keyFuncs.pureNavigation = function() {
  const key = this;

  if (!key.path) {
    console.warn("Key", key, "doesn't go anywhere, so don't push it, bub.");
    return key;
  }

  // const destination = key.parent.get(key.path);
  const destination = findPathTarget( key.path, key.parent );
  if (destination) {destination.view.show();}  // TODO: Maybe switch responsibilities??? So activate knows what `view.show()` is
  else {console.log("Something's wrong with your path, friend. Check yourself. Path", key.path, "; Current location:", key.parent)}

  return key  // return destination???
} // keyFuncs.pureNavigation


// DANGER!!! COMPLETELY UNTESTED
keyFuncs.simulateThenNavigate = function() {
  const key = this;

  const simulate = keyFuncs.pureSimulation.bind(key)
  simulate()
  const navigate = keyFuncs.pureNavigation.bind(key)
  navigate()

  return key
} // keyFuncs.simulateThenNavigate


export default keyFuncs;
