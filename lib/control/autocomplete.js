"use babel"

import {CompositeDisposable} from "atom"
const _$ = require("jquery")

let contextThief;

export default class AutocompleteThief {

  constructor(osk, suggestionList) {
    // TODO figure out what to do if they have an "immediately replace with first option" setting on
    const aThief = this
    contextThief = this
    aThief.osk = osk
    osk.restoreFuncts = contextThief.restoreFuncts.bind(contextThief)
    aThief.autocompletePlusManager = atom.packages.activePackages["autocomplete-plus"].mainModule.autocompleteManager
    console.log("autoc -->", aThief.autocompletePlusManager)
    aThief.listObj = suggestionList
    // NOTE never set a reference to aThief.items!!! It gets constantly destroyed!!!
    aThief.items = suggestionList.items
    aThief.index = null
    aThief.timeoutID = null;
    aThief.marker = suggestionList.suggestionMarker
    aThief.firstHitOnThisKey = true
    aThief.confirming = false
    aThief.alreadyReleased = false

    suggestionList.onDidChangeItems(function(items){
      aThief.items = items
      aThief.setNewIndex()
    })

    suggestionList.onDidSelectBottom(aThief.setNewIndex)
    suggestionList.onDidSelectNext(aThief.setNewIndex)
    suggestionList.onDidSelectPageDown(aThief.setNewIndex)
    suggestionList.onDidSelectPageUp(aThief.setNewIndex)
    suggestionList.onDidSelectPrevious(aThief.setNewIndex)
    suggestionList.onDidSelectTop(aThief.setNewIndex)
    // If it's a mouse move we're up some creek and I don't see no paddles
    // Wait! A paddle in sight!
    // onMouseMove (on mouseenter list item or key)


    suggestionList.onDidCancel(function(e){aThief.release(e, "cancel")})
    // TODO on mouse click/keypress in editor release
    // On mouse click or enter something will be selected
    suggestionList.onDidConfirm(aThief.checkConfirm)

    aThief.functs = {
      hideSuggestionList: aThief.autocompletePlusManager.hideSuggestionList
    }
  } // constructor

  restoreFuncts() {
    const aThief = this
    const functs = aThief.functs
    for (let name in functs) {
      if (functs.hasOwnProperty(name)) {
        aThief.autocompletePlusManager[name] = aThief.functs[name]
      }
    }
  } // restoreFuncts

  destroyFuncts() {
    const aThief = contextThief
    for (let name in aThief.functs) {
      if (aThief.functs.hasOwnProperty(name)) {
        aThief.autocompletePlusManager[name] = function() {console.log("I'm destroyed! :P");}
      }
    }
  }

  setNewIndex() {
    const aThief = contextThief
    aThief.iter = 0
    aThief.wait()
  }

  wait() {
    const aThief = contextThief
    if (aThief.timeoutID) clearTimeout(aThief.timeoutID)

    if (!aThief.osk.keyActive) return

    // console.log("list object gone? -->", aThief.listObj)
    // QUESTION Is it a new list each time?
    aThief.listObj = aThief.autocompletePlusManager.suggestionList

    const listElement = document.querySelector("autocomplete-suggestion-list")
    const selectedElement = document.querySelector("autocomplete-suggestion-list .selected")
    // aThief.index = 0
    let doWait = false
    if (selectedElement) {
      // if (!selectedElement.hasOSKListener) {selectedElement.addEventListener("keypress", aThief.checkConfirm)}
      // selectedElement.hasOSKListener = true

      aThief.editor = atom.workspace.getActiveTextEditor()
      const editorElement = atom.views.getView(aThief.editor)

      // console.log("selectedElement -->", selectedElement.getAttribute("data-index"))
      let i = parseInt(selectedElement.getAttribute("data-index"))
      // console.log("new index, old index -->", i, aThief.index)
      if (aThief.index !== i) {
        aThief.index = i

        // NOTE this is a terrible idea. This whole thing is a terrible idea and completely unsustainable
        aThief.destroyFuncts()

        const buffer = aThief.buffer = aThief.editor.getBuffer()

        const undoThenConfirm = function(){
          // If this is not the first time, undo previously pasted junk fridges
          if (!aThief.firstHitOnThisKey) {
            // Press escape key??!?!
            // aThief.editor.undo()
            // Reverting destroys checkpoint
            aThief.buffer.revertToCheckpoint(aThief.osk.postInsertionCheckpoint)
            aThief.osk.postInsertionCheckpoint = buffer.createCheckpoint()
            // TODO only show board-context appropriate completions
            atom.commands.dispatch(editorElement, "autocomplete-plus:activate")
          }

          // TODO need to delete old stuff and replace with older original text first
          // PROBLEM the list is already showing so that may interfere but maybe not o.O
          // TODO Undo and then confirm? reselect the right item and confirm? trigger down arrow the right number of times...??!??!
          const elements = listElement.querySelectorAll("li")
          const toSelect = listElement.querySelectorAll("li")[ aThief.index ]
          const toClick = toSelect.querySelectorAll("span.word")[0]
          console.log("elements? -->", elements, aThief.index, toSelect);

          const handler = function(e, myData){
            console.log("clicked event -->", myData);
            toSelect.removeEventListener("click", handler)
          }
          toSelect.addEventListener("click",handler)

          // // artificial click
          // toClick.click(function(){console.log("clicked")})
          // console.log("selected clicked -->", toSelect);

          // TODO use je ques? (jQuery)
          _$(toClick).trigger("click", [this, "second try??!?!?"])

          // // Elements don't emit shtuff
          // toSelect.emit("click")

          // const worked = buffer.groupChangesSinceCheckpoint(aThief.osk.checkpoint)
          // console.log("worked -->", worked, buffer.getChangesSinceCheckpoint(aThief.osk.checkpoint));

          aThief.confirming = true // confirming manually
          atom.commands.dispatch(editorElement, "autocomplete-plus:confirm") // <-- async!!!
        }

        undoThenConfirm()
        // buffer.transact(undoThenConfirm)

        // // TODO not confirm!!! Just simulate confirmation
        // aThief.autocompletePlusManager.suggestionList.confirm()
        aThief.firstHitOnThisKey = false

      } else {doWait = true}
    } else {
      // console.log("thief no element -->", selectedElement);
      doWait = true
    }

    if (doWait && aThief.iter < 500) {setTimeout(aThief.wait, 1); aThief.iter++;}
    else {
      // console.log("not waiting. iterations? -->", aThief.iter);
      aThief.iter = 0;
    }
  } // wait

  checkConfirm(e){
    // TODO If user types into snippet then confirm it? Confirm/cancel editor input that wasn't created by osk.
    // debugger;
    console.log("checkConfirm func, snippet that was snippeted -->", e);
    const aThief = contextThief

    console.log("checking confirmation of stuff -->", aThief.confirming, aThief.alreadyReleased, aThief.osk.keyActive)
    if (!aThief.confirming && !aThief.alreadyReleased && aThief.osk.keyActive) {
      aThief.release(e, "confirm");
      console.log("releasing");
    } else if (aThief.alreadyReleased) {
      aThief.release(e, "finish confirming")
      // debugger;
      // NOTE gets called twice somehow followed by "releasing" which gets called without going through the rest of this function (see it above in the previous part of this "if" statement)
      console.log("finishing");
    } else {
      const buffer = aThief.buffer = aThief.editor.getBuffer()
      // IMPORTANT Grouping both checkpoints makes it impossible to change options
      const worked = buffer.groupChangesSinceCheckpoint(aThief.osk.postInsertionCheckpoint)
      // console.log("checkConfirm checkpoint worked? -->", worked, aThief.osk.postInsertionCheckpoint);
    }
    // Will this ALWAYS let the autocomplete hide properly????
    // If not, what to do? *shrug*
    aThief.confirming = false
    aThief.alreadyReleased = false
  }

  release(e, releaseOp) {
    const aThief = contextThief
    if (aThief.osk.keyActive) {
      // TODO release when editor clicked
      // TODO release when exit from osk/minimize
      aThief.index = null
      aThief.firstHitOnThisKey = true
      const buffer = aThief.buffer = aThief.editor.getBuffer()
      const editorView = atom.views.getView(aThief.editor)

      if (releaseOp === "cancel") {
        buffer.groupChangesSinceCheckpoint(aThief.osk.preInsertionCheckpoint)
        // Reverting destroys checkpoint
        buffer.revertToCheckpoint(aThief.osk.preInsertionCheckpoint)
        aThief.restoreFuncts()
      } else if (releaseOp === "confirm") {
        console.log("Confirmed!");
        // undo to inserted text, "confirm" the right snippet which will trigger finishing the confirmation
        // Basically, if the the snippet has been pasted in I want the user to be able to press undo and return to the clean slate that was there before
        aThief.alreadyReleased = true
        aThief.buffer.revertToCheckpoint(aThief.osk.postInsertionCheckpoint)
        atom.commands.dispatch(editorView, "autocomplete-plus:confirm")
      } else if (releaseOp === "finish confirming") {
        aThief.osk.keyActive = false
        // Make all this stuff undoable
        const worked = buffer.groupChangesSinceCheckpoint(aThief.osk.preInsertionCheckpoint)
        // console.log("finish checkpoint worked? -->", worked, aThief.osk.preInsertionCheckpoint);
        // console.log("restoring all that stuffs");
        aThief.restoreFuncts();
        // CANNOT KEEP THIS TOO MESSED UP WTF WILL HAPPEN?!!?
        atom.commands.dispatch(editorView, "autocomplete-plus:cancel")
      }
    }
  } // release

  selectOnHover (elm) {
    const aThief = contextThief
    // remove (and add to) menu and then select list item
    elm.removeEventListener("mouseenter", aThief.selectOnHover)
    const all = elm.parentNode.children
    for (let li = 0; li < all.length; li++) {
      let item = all[li]
      item.classList.remove("selected")
    }
    elm.classList.add("selected")

  }

}  // AutocompleteThief

// NOTE behavior
// user "undo" should (group and) cancel and delete all the insertions
// user keyboard input should confirm and group previous insertions
// autocomplete should only show board-context type autocompletions
// options should float next to/above/below/where? in relation to the key (add to and remove from key element?). Should this be a custom user option - show all autocompletions or just board specfic ones.
// select options on hover - when user hovers over an option it should be selected and displayed
// write down others that are already implemented
