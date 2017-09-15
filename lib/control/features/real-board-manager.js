"use babel";

import {CompositeDisposable, Disposable} from "atom"

export default class RealBoardManager {
  // I KEEP TRACK OF YOUR KEYBOARD!! :D
  // Created every time board gets pinned
  constructor(osk) {
    const rbm = this
    rbm.osk = osk

    rbm.subscriptions = new CompositeDisposable()

    const allChillins = osk.active.panel.children
    let letterHolders = [] // displayName, key
    for (let i = 0; i < allChillins.length; i++) {
      let child = allChillins[i]
      letterHolders.push({name: child.displayName, position: i, source: child})
    }

    // Sort by length
    letterHolders.sort(function(a, b){
      let alen = a.name.length, blen = b.name.length
      if (alen === blen) return a.position - b.position
      else return alen - blen
    })

    let usedLetters = []
    let withLetters = []
    for (var i = 0; i < letterHolders.length; i++) {
      let currKey = letterHolders[i]
      let name = currKey.displayName
      // Find the unique letters
      for (var i = 0; i < currKey.displayName.length; i++) {
        currKey.displayName[i]
      }
      withLetters.push({})
      // Assign the letters to the keys
    }

  }
}


// -1- √ key detect its own letter depending on the letter assigned
// -2- something keep track of all current keys and their trigger and activate them on the right input

// focus on board

// set up key stuff
// assign a letter to each key

// possibly do listening actions (do keys listen????!)
// listen for combo or non combo keys or sticky
// insert first option (TODO add that option in autocomplete/thief) or (if other sticky or key combo)
// show multiple options (usual autocomplete stuff)
  // assign them each a letter as well
  // make sure they get triggered on that letter

// item list[entry{ chars, associated thing (index of list item or key) }]
// get back --> [{ one character, associated thing }]
// find it and style it yourself
// Is a key gonna get told what letter to highlight?!? and then just do it?

// -1- each key styles its own letter
// -2- big thing styles all the letters

// if sticky, always come back to osk
