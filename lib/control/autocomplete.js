"use babel"

import {CompositeDisposable} from "atom"

let contextThief;

export default class AutocompleteThief {

  constructor(osk) {
    // TODO figure out what to do if they have an "immediately replace with first option" setting on
    // TODO set "use strict matching for built in provider" to true or disable built in provider
    // IMPORTANT BUG what if a key is pressed but autocomplete doesn't appear?!?!? Like when in quotes
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
    aThief.subscriptions = new CompositeDisposable()

    // ## NOT TRIGGERS
    // command keys like "delete" and "return/enter"

    // ## Show list
    // clicking a key?!? (got that one goin' on, oh yeah) hovering over a key?!?!
    // tapping on a key

    // NOTE don't add these subscriptions here do it with the rest of the permanent subscriptions and dispose of them there

    // ## TODO Show preview
    // √ Any time text is changed/autocomplete is possibly triggered
    listObj.onDidChangeItems(aThief.setNewIndex)
    // √ arrow key navigation to different list items
    listObj.onDidSelectBottom(aThief.setNewIndex)
    listObj.onDidSelectNext(aThief.setNewIndex)
    listObj.onDidSelectPageDown(aThief.setNewIndex)
    listObj.onDidSelectPageUp(aThief.setNewIndex)
    listObj.onDidSelectPrevious(aThief.setNewIndex)
    listObj.onDidSelectTop(aThief.setNewIndex)
    // hovering over a list item (also select it then)
    // If it's a mouse move we're up some creek and I don't see no paddles
    // Wait! A paddle in sight!
    // onMouseMove (on mouseenter list item or key)

    // ## NOT CONFIRMERS
    // √ only one option available on a key should not confirm, just show.

    // QUESTION what if key gets pasted but there's no autocomplete (like when the text is pasted between quotes)

    // # Releasing situations

    // ## TODO Confirm
    // typing inside a snippet, including deleting (~~change in buffer??!?~~ Nope it has to happen before the buffer changes so that the snippet can be re-entered and then used properly. Detect character-inserting or delete keypresses before the character is inserted)
    // vvv the problem is when the undo history (or buffer?!) is affected by something other than osk vvv
    // When new autocomplete suggestions come up or something else changes the editor...??!? How do I detect other things happening/being activated while a key is active?!?! (this will only happen when user types into editor on their own, so that will be a confirmation, but the general question still stands about other plugins/behaviors)
    // √ When autocomplete thinks something's been selected by user, do that. Like with "enter" (maybe "tab") or clicking/tapping on a snippet suggestion list item
    listObj.onDidConfirm(aThief.clickConfirm)
    // √ clicking a key when list is open

    // ## TODO Canceling
    // QUESTION Keypresses that don't change the editor?!? (even/esp when they interact with osk?!)
    // √ hitting "esc" uses autocomplete's own cancel
    listObj.onDidCancel(function(e){aThief.release(e, "cancel-autocomplete-plus")})
    // √ minimizing osk
    aThief.osk.emitter.on("minimized", function minimizeRelease(caller){aThief.release(null, "cancel-"+caller.id)})
    // √ clicking elsewhere on the editor (any click anywhere other than suggestionList or the key, which confirm, TODO or inside the snippet!!!!). Assigned in dom event listener anytime list appears from an osk click
    // TODO don't cancel when user clicks in the snippet?!?!?
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

    aThief.updateEditor(atom.workspace.getActiveTextEditor())
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

  setNewIndex(e) {
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

        // After we run in the first time then don't do first time stuff again
        aThief.firstHitOnThisKey = false
        if (!aThief.listeningForClicks) {
          document.body.addEventListener("click", aThief.clickCancel)
          // Taken out of autocomplete-plus manager
          // if (typeof buffer.onDidChangeText === 'function') {
          //   aThief.subscriptions.add(buffer.onDidChange(aThief.clickConfirm))
          //   aThief.subscriptions.add(buffer.onDidChangeText(aThief.clickConfirm))
          // } else {
            // TODO: Remove this after `TextBuffer.prototype.onDidChangeText` lands on Atom stable.
            // aThief.subscriptions.add(buffer.onDidChange(aThief.textChange))
          // }
          aThief.listeningForClicks = true
        }

        // If this is not the first time, undo previously pasted junk fridges
        if (!aThief.firstHitOnThisKey) {
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

        // Two confirmations in a row
        aThief.confirming = true // confirming manually, so don't actually release key
        toClick.click() // artificial click
        aThief.confirming = true // confirming manually, so don't actually release key
        atom.commands.dispatch(editorElement, "autocomplete-plus:confirm") // <-- async?!?!

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
    else aThief.clickConfirm(e)
  }

  updateEditor(newEditor) {
    const aThief = contextThief
    if (!newEditor || newEditor === aThief.editor) return false
    if (aThief.subscriptions) { // First time there won't be any subscriptions
      aThief.subscriptions.dispose()
      aThief.subscriptions = null
    }

    // Track the new editor and buffer
    aThief.editor = newEditor
    aThief.buffer = aThief.editor.getBuffer()

    aThief.subscriptions = new CompositeDisposable()
    aThief.subscriptions.add(atom.keymaps.keystrokeForKeyboardEvent(aThief.textChange))
    // BUG Checking the buffer won't work because if the buffer has already changed, confirming is weird
    // // QUESTION does clicking on the editor change the buffer? Only when it moves the cursor maybe...?!?
    // aThief.subscriptions.add(aThief.buffer.onDidChange(aThief.textChange))
    // // QUESTION does this happen when a new position on screen is clicked? If so does it interfere with the clickConfirm click handler?!?
    // aThief.subscriptions.add(aThief.editor.onDidChangeCursorPosition(aThief.cursorMoved))

    return true
  }

  textChange(e) {
    const aThief = contextThief
    if (!aThief.osk.activeKey) return null
    console.log("text changed arguments -->", aThief.confirming, arguments);
    // if (!aThief.confirming) aThief.release(e, "confirm")
  }

  cursorMoved(e) {
    const aThief = contextThief
    if (!aThief.osk.activeKey) return null
    console.log("cursor changed arguments -->", aThief.confirming, arguments);
    if (!aThief.confirming) aThief.release(e, "confirm")
  }

  clickConfirm(e){
    // TODO If user types into snippet then confirm it? Confirm/cancel editor input that wasn't created by osk.
    const aThief = contextThief

    if (!aThief.osk.activeKey) return
    if (!aThief.confirming && !aThief.alreadyReleased) {
      aThief.release(e, "confirm")
    } else if (aThief.alreadyReleased) { // Terrible name for a variable!!! confirmingPart1?
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
    aThief.osk.activeKey.deactivate()
    // TODO add in when/if a new autocomplete thief is created/destroyed with a osk key click
    // aThief.subscriptions.dispose()
    aThief.index = null
    aThief.confirming = false
    aThief.alreadyReleased = false
    aThief.firstHitOnThisKey = false
  }

  cancel(e, releaseOp, editorView) {
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
    if (aThief.osk.activeKey && (!aThief.releasing || releaseOp === "finish confirming")) {
      aThief.releasing = true
      console.log("releasing -->", releaseOp, e);
      if (aThief.listeningForClicks) {
        // QUESTION move to the finishing function? I kinda like knowing that it's here right at the top
        document.body.removeEventListener("click", aThief.clickCancel)
        aThief.listeningForClicks = false
      }
      aThief.index = null
      const buffer = aThief.buffer = aThief.editor.getBuffer()
      const editorView = atom.views.getView(aThief.editor)

      if (/cancel/.test(releaseOp)) {
        aThief.cancel(e, releaseOp, editorView)
        aThief.releasing = false
      } else if (releaseOp === "confirm") {
        // undo to inserted text, "confirm" the right snippet which will trigger finishing the confirmation
        // Basically, if the the snippet has been pasted in I want the user to be able to press undo and return to the clean slate that was there before
        aThief.alreadyReleased = true
        aThief.buffer.revertToCheckpoint(aThief.osk.postInsertionCheckpoint)
        atom.commands.dispatch(editorView, "autocomplete-plus:confirm")
      } else if (releaseOp === "finish confirming") {
        // Make all this stuff undoable
        const worked = buffer.groupChangesSinceCheckpoint(aThief.osk.preInsertionCheckpoint)
        aThief.preFinishReset()
        // CANNOT KEEP THIS TOO MESSED UP WTF WILL HAPPEN?!!?
        atom.commands.dispatch(editorView, "autocomplete-plus:cancel")
        aThief.releasing = false
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
