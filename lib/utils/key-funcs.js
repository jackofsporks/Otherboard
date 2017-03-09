'use babel';

import findPathTarget from './find-path-target.js'
// let vm = require('vm')

// // TODO: Compose in a way that doesn't need `this`
// // ...Create functions that return the functions you want, but that
// // are called with the value that you would want as the `this` value.
// // (NOT `.bind()`)
// const keyConstructor = atom.keymaps.constructor;

export var keyFuncs = {}


let sim = function( key ) {

  if (!key.toSimulate) {
    console.warn("Key", key, "doesn't have anything to simulate, so don't push it, bub.")
    return key
  }

  const editor = atom.workspace.getActiveTextEditor()
  editor.insertText(key.toSimulate)

  // const evt = keyConstructor.buildKeydownEvent('U+0046', {target: document.activeElement, keyCode: 68  });
  // console.log(atom.keymaps.handleKeyboardEvent);
  // return atom.keymaps.handleKeyboardEvent(evt);
  return key
} // keyFuncs.pureSimulation

keyFuncs.pureSimulation = sim.toString()




let nav = function( key ) {

  if (!key.path) {
    console.warn("Key", key, "doesn't go anywhere, so don't push it, bub.")
    return key
  }

  const destination = key.find( key.path, key.parent );

  if (destination) {destination.show()}  // TODO: Maybe switch responsibilities??? So activate knows what `view.show()` is
  else {console.log("Something's wrong with your path, friend. Check yourself. Path", key.path, "; Current location:", key.parent)}

  return key  // return destination???
} // keyFuncs.pureNavigation

keyFuncs.pureNavigation = nav.toString()



// DANGER!!! COMPLETELY UNTESTED
// DANGER!!! CANNOT BE UNSTRINGIFIED EFFECTIVELY
let simNnav = function( key ) {
  // const key = this
  //
  // const simulate = keyFuncs.pureSimulation.bind(key)
  // simulate()
  // const navigate = keyFuncs.pureNavigation.bind(key)
  // navigate()
  //
  // return key
  return null;
} // keyFuncs.simulateThenNavigate

keyFuncs.simulateThenNavigate = simNnav.toString()


export default keyFuncs;
