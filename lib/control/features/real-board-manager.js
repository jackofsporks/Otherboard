"use babel";

import {CompositeDisposable, Disposable} from "atom"

let prbm = null // persistent real board manager
export default class RealBoardManager {
  // I KEEP TRACK OF YOUR KEYBOARD!! :D
  // Created every time board gets pinned
  // TODO view -> config -> options.js shows setting Settings values
  //////////////
  // TODO Style option list items same as keys and get them to trigger on that key press
  // TODO ignore some osk command keys and commands (ignore typing)
    // Ignore: tab, delete, enter, space, outdent, arrow keys
  // TODO ignore key presses when they are paired with physical command keys unless special
    // Keep listening for releasing sticky keys, toggling osk, etc. Not going to be a problem? Atom takes care of it?!!?
  // BUG non-autocompleted letter pastes osk key's code, but also leaves letter from keyboard press
  // ~~TODO switch listening if we switch panels~~
  // ~~TODO Make it VERY visible when osk sticky key is on~~
  // ~~TODO Prevent sticky keys when osk is closed~~
  // ~~TODO cancel current key on unsticky/destroy~~
  // ~~TODO exit if close osk~~
  // ~~TODO what to do about completing instantly on keypress?! Pros and cons. 2) got no idea what other behavior it could do...~~
    // NOT TODO What to do is zip. It getz pazted is what. Then user can undo
  constructor(osk, type) {
    const rbm = this
    prbm = this

    // Don't make another one
    if (!osk.isOpen) rbm.destroy()
    else if (osk.realBoard) {
      console.log("real board already exists");
      rbm.handleType(osk, type)
      return
    }

    rbm.osk = osk

    let subs = rbm.ownSubscripts = new CompositeDisposable()
    rbm.triggerSubscripts = new CompositeDisposable()
    rbm.optsSubscripts = new CompositeDisposable()

    rbm.loadKeys(osk.active.panel.children)

    // QUESTION in here??!?
    // Except not save...? and other stuff
    document.body.addEventListener("keypress", rbm.handleKeypress)
    subs.add(new Disposable(() => {document.body.removeEventListener("keypress", rbm.handleKeypress)}))
    const panel = osk.active.panel.view.node // wut? wut's this about?!? panel keypresses?? that could happen when naving

    osk.view.node.classList.add("real-board")

    // QUESTION assign this to osk in here?!?!
    osk.realBoard = {manager: rbm}
    rbm.handleType(osk, type)
  } // constructor


  unloadTriggers(subsName){
    // Kill race conditions
    const subs = prbm[subsName]
    subs.dispose() // Let atom do the most efficient dispose loop
  }

  loadKeys(allChillins){prbm.loadTriggers(allChillins, "triggerSubscripts")}
  loadOpts(allChillins){
    // TODO how to keep track of the keys that we're destroying herez???
    // props: displayName val & realBoard funct
    prbm.loadTriggers(allChillins, "triggerSubscripts")
  }

  loadTriggers(allChillins, subsName, getDisposable){
    prbm.unloadTriggers(subsName)
    prbm[subsName] = new CompositeDisposable()
    let letterHolders = [] // displayName, key
    for (let i = 0; i < allChillins.length; i++) {
      let child = allChillins[i]
      if (!child.realBoardIgnore) {
        // WARNING Changing the child!!!! Not sure if this is a great idea or what
        child.position = i
        letterHolders.push(child)
      }
    }
    // Sort by length
    letterHolders.sort(function(a, b){
      let alen = a.displayName.length, blen = b.displayName.length
      if (alen === blen) return a.position - b.position
      else return alen - blen
    })

    let usedLetters = [" ", "\n"]
    let finalLetters = ""
    // Assign the letters and positions to the keys
    for (var i = 0; i < letterHolders.length; i++) {
      let currKey = letterHolders[i]
      let name = currKey.displayName
      let letterFound = false
      // Find the unique letters
      for (let li = 0; li < name.length; li++) {
        let letter = name[li].toLowerCase()
        if (!letterFound && !usedLetters.includes(letter)) {
          // TODO return a subscription
          let disp = currKey.realBoard({owner: currKey, letter: letter, position: li, displayName: name})
          // QUESTION is it a bad idea to keep some key subscriptions in here?!?
          // Maybe just tell every key when to stop listening...
          prbm[subsName].add(disp)
          usedLetters.push(letter)
          finalLetters += letter
          letterFound = true
        }
      } // for 2
    } // for 1
    console.log(finalLetters)
  } // loadTriggers

  handleType(osk, type){
    console.log("handling type real board -->", type, prbm.osk.realBoard.sticky);
    if (type === "sticky") {
      if (prbm.osk.realBoard.sticky) {
        prbm.osk.realBoard.sticky = false
        prbm.destroy()
      } else prbm.osk.realBoard.sticky = true
    }
  }

  handleKeypress(e){
    // TODO only after autocomplete is released/destroyed
    // QUESTIONS How do we make sure? Where does this fall in the order of all things?!?!
    if (!prbm.osk.realBoard.sticky || !prbm.osk.isOpen) prbm.destroy()
    // if (!rbm.osk.activeKey && !rbm.osk.realBoard.sticky) rbm.destroy()
  }

  destroy(){
    console.log("destroying real board manager!!!");
    const osk = prbm.osk
    // QUESTION cancel active key!?!?!
    if (osk.activeKey) osk.activeKey.cancel()
    osk.view.node.classList.remove("real-board")
    prbm.ownSubscripts.dispose()
    prbm.unloadTriggers("triggerSubscripts")
    osk.realBoard = null
    prbm = null
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
