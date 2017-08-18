"use babel"

import {CompositeDisposable} from "atom"

let contextThief;

export default class AutocompleteThief {

  constructor(osk) {
    // TODO figure out what to do if they have an "immediately replace with first option" setting on
    // TODO set "use strict matching for built in provider" to true or disable built in provider
    // IMPORTANT BUG what if a key is pressed but autocomplete doesn't appear?!?!?
    const aThief = this
    contextThief = this
    osk.activeAutocomplete = this

    aThief.osk = osk
    osk.restoreFuncts = contextThief.restoreFuncts.bind(contextThief)
    aThief.autocompletePlusManager = atom.packages.activePackages["autocomplete-plus"].mainModule.autocompleteManager
    console.log("autoc -->", aThief.autocompletePlusManager)
    const listObj = aThief.listObj = aThief.autocompletePlusManager.suggestionList
    aThief.index = null
    aThief.timeoutID = null;
    aThief.firstHitOnThisKey = true
    aThief.confirming = false
    aThief.alreadyReleased = false

    // ## NOT TRIGGERS
    // command keys like "delete" and "return/enter"

    // ## Show list
    // clicking a key?!? (got that one goin' on, oh yeah) hovering over a key?!?!
    // tapping on a key (paste the option if only one option?!?!)

    // ## TODO Show preview
    // Any time text is changed/autocomplete is possibly triggered
    listObj.onDidChangeItems(aThief.setNewIndex)
    // arrow key navigation to different list items
    listObj.onDidSelectBottom(aThief.setNewIndex)
    listObj.onDidSelectNext(aThief.setNewIndex)
    listObj.onDidSelectPageDown(aThief.setNewIndex)
    listObj.onDidSelectPageUp(aThief.setNewIndex)
    listObj.onDidSelectPrevious(aThief.setNewIndex)
    listObj.onDidSelectTop(aThief.setNewIndex)
    // hovering over a list item
    // If it's a mouse move we're up some creek and I don't see no paddles
    // Wait! A paddle in sight!
    // onMouseMove (on mouseenter list item or key)

    // ## TODO NOT CONFIRMERS
    // only one option available on a key should not confirm, just show. BUG This isn't actually working. It doesn't hide the autocomplete list, but it does release the cursor to go running around everywhere. ~~This might be done already because as soon as the key is clicked/hovered over/w/e the autocomplete stuff gets overidden so we don't have to worry about whatever autocomplete thinks is going on. Wait a sec. If a confirmation is sent by not osk, isn't it supposed to take effect? Maybe not till after the first round? w/e it's working fine, so don't break it.~~

    // QUESTION what if key gets pasted but there's no autocomplete (like when the text is pasted between quotes)

    // # Releasing situations

    // ## Confirm
    // √ When autocomplete thinks something's been selected by user, do that. Like with "enter" (maybe "tab") or clicking/tapping on a snippet suggestion list item
    listObj.onDidConfirm(aThief.checkConfirm)
    // typing inside a snippet
    // QUESTION hitting "delete"?!?! Maybe the user wants the output of osk, but wants to delete some of it

    // ## Canceling
    // √ hitting "esc" uses autocomplete's own cancel
    listObj.onDidCancel(function(e){aThief.release(e, "cancel-autocomplete-plus")})
    // √ minimizing osk
    aThief.osk.emitter.on("minimized", function minimizeRelease(caller){aThief.release(null, "cancel-"+caller.id)})
    // √ clicking elsewhere on the editor (any click anywhere other than suggestionList or the key, which confirm). Assigned in dom event listener anytime list appears from an osk click
    aThief.setClickListener = false
    // √ "undo" event handled on the main script or w/e where subscriptions are made and disposed
    // √ moving to another editor event handled on the main script or w/e where subscriptions are made and disposed ~~(make a new autocomplete instance?!?! and suspend old autocomplete)~~ autocomplete doesn't have instances so this would be a little useless but consider adding it in the future anyway because that's the awesome way to do things
    // √ tab destroyed (think it's already happening because editor is switched)
    // √ osk is deactivated/toggled closed or deactivated done in control/osk.js (in deactivate and toggle)

    // # Suspend
    // QUESTION Should make different osk for each editor?!!? or should make different instances of autocomplete theif for each editor!?! or suspend other ways??? No point. Autocomplete doesn't do it and we are but dust in the wind of that great module.

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
        aThief.autocompletePlusManager[name] = function(){}
      }
    }
  }

  setNewIndex() {
    const aThief = contextThief
    if (aThief.osk.activeKey) {
      aThief.iter = 0
      aThief.wait()
    }
  }

  wait() {
    const aThief = contextThief
    aThief.osk.activeAutocomplete = aThief
    if (aThief.timeoutID) clearTimeout(aThief.timeoutID)
    if (!aThief.osk.activeKey) return

    // console.log("list object gone? -->", aThief.listObj)
    // QUESTION Is it a new list each time?
    aThief.listObj = aThief.autocompletePlusManager.suggestionList

    const listElement = document.querySelector("autocomplete-suggestion-list")
    const selectedElement = document.querySelector("autocomplete-suggestion-list .selected")
    // aThief.index = 0
    let doWait = false
    if (selectedElement) {

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

        const elements = listElement.querySelectorAll("li")
        const toSelect = listElement.querySelectorAll("li")[ aThief.index ]
        const toClick = toSelect.querySelectorAll("span.word")[0]
        console.log("elements? -->", elements, aThief.index, toSelect);

        aThief.confirming = true // confirming manually, so don't actually release key
        toClick.click() // artificial click
        aThief.confirming = true // confirming manually, so don't actually release key
        atom.commands.dispatch(editorElement, "autocomplete-plus:confirm") // <-- async!!!
        // QUESTION Is autocomplete confirming on the wrong editor when multiple editors are getting autocompleted?
        // QUESTION How is autocomplete switching?

        // After we run in the first time then don't do first time stuff again
        aThief.firstHitOnThisKey = false
        if (!aThief.listeningForClicks) {
          document.body.addEventListener("click", aThief.clickCancel)
          aThief.listeningForClicks = true
        }

      } else doWait = true
    } else doWait = true

    if (doWait && aThief.iter < 500) {setTimeout(aThief.wait, 1); aThief.iter++;}
    else aThief.iter = 0;
  } // wait

  clickCancel(e) {
    const aThief = contextThief
    if (!aThief.osk.activeKey) return
    const listElm = aThief.listObj._suggestionListElement.element
    const fromList = e.path.includes(listElm)
    const keyElm = aThief.osk.activeKey.view.node
    if (!fromList && e.target !== keyElm) aThief.release(e, "cancel-click")
    else aThief.checkConfirm(e)
  }

  checkConfirm(e){
    // TODO If user types into snippet then confirm it? Confirm/cancel editor input that wasn't created by osk.
    const aThief = contextThief

    if (!aThief.osk.activeKey) return
    if (!aThief.confirming && !aThief.alreadyReleased) {
      aThief.release(e, "confirm");
    } else if (aThief.alreadyReleased) {
      aThief.release(e, "finish confirming")
    } else {
      const buffer = aThief.buffer = aThief.editor.getBuffer()
      // IMPORTANT Grouping both checkpoints makes it impossible to change options
      const worked = buffer.groupChangesSinceCheckpoint(aThief.osk.postInsertionCheckpoint)
    }
    // Will this ALWAYS let the autocomplete hide properly????
    // If not, what to do? *shrug*
    aThief.confirming = false
    aThief.alreadyReleased = false
  }

  preFinishReset() {
    const aThief = contextThief
    aThief.restoreFuncts()
    aThief.osk.activeKey = null
    aThief.confirming = false
    aThief.alreadyReleased = false
    aThief.firstHitOnThisKey = false
  }

  cancel(e, releaseOp, editorView) {
    console.log("canceling -->", releaseOp);
    const aThief = contextThief
    // Get the current cursors' positions in case the user clicked on some editor text elsewhere
    const editor = aThief.editor
    const cursorPositions = editor.getCursorBufferPositions()
    if (/undo/.test(releaseOp)) {
      // Undo, moving the cursor to a new position
      aThief.editor.undo()
    } else {
    const buffer = aThief.buffer // if this goes wrong we know we done messed up keeping track of the environment
      // Undo, moving the cursor to a new position
      buffer.groupChangesSinceCheckpoint(aThief.osk.preInsertionCheckpoint)
      buffer.revertToCheckpoint(aThief.osk.preInsertionCheckpoint) // Reverting destroys checkpoint
    }
    aThief.preFinishReset()
    // esc doesn't need to trigger escape again? Is that why we're doing this??!?
    // This happens all the time. This needs to be the default
    if (!/autocomplete-plus/.test(releaseOp)) atom.commands.dispatch(editorView, "autocomplete-plus:cancel")
    // Finally move the cursor to wherever the user last had it
    for (let posNum = 0; posNum < cursorPositions.length; posNum++) {
      const position = cursorPositions[posNum]
      editor.setCursorBufferPosition(position, {autoscroll:false})
    }
  }

  release(e, releaseOp) {
    const aThief = contextThief
    console.log("releasing -->", releaseOp);
    if (aThief.osk.activeKey) {
      if (aThief.listeningForClicks) {
        // QUESTION move to the finishing function? I kinda like knowing that it's here right at the top
        document.body.removeEventListener("click", aThief.clickCancel)
        aThief.listeningForClicks = false
      }
      console.log("releasing -->", releaseOp);
      aThief.index = null
      const buffer = aThief.buffer = aThief.editor.getBuffer()
      const editorView = atom.views.getView(aThief.editor)

      if (/cancel/.test(releaseOp)) {
        aThief.cancel(e, releaseOp, editorView)

      } else if (releaseOp === "confirm") {
        // undo to inserted text, "confirm" the right snippet which will trigger finishing the confirmation
        // Basically, if the the snippet has been pasted in I want the user to be able to press undo and return to the clean slate that was there before
        aThief.alreadyReleased = true
        aThief.buffer.revertToCheckpoint(aThief.osk.postInsertionCheckpoint)
        atom.commands.dispatch(editorView, "autocomplete-plus:confirm")
      } else if (releaseOp === "finish confirming") {
        aThief.osk.activeKey = null
        // Make all this stuff undoable
        const worked = buffer.groupChangesSinceCheckpoint(aThief.osk.preInsertionCheckpoint)
        aThief.restoreFuncts();
        aThief.firstHitOnThisKey = false
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
// (feedback)
// Impossible --> autocomplete should only show board-context type autocompletions
// (input reactions)
// user keyboard input should confirm and group previous insertions
// select options on hover - when user hovers over an option it should be selected and displayed
// (styles)
// options should float next to/above/below/where? in relation to the key (add to and remove from key element?). Should this be a custom user option - show all autocompletions or just board specfic ones.
// (questions)
// hover shows snippet and click confirms? or click shows snippets and second click/other things confirms?!?!
// (useless)
// write down others that are already implemented

// NOTE Bugs
// On reload of atom, checkpoint is not retained and undo has to pass through the inserted text. What to do oh what?!?
