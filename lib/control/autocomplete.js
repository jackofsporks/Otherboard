"use babel"

import {CompositeDisposable, Disposable} from "atom"

let contextThief;

// This "works" \o/
export default class AutocompleteThief {
  constructor(osk, key) {
    // ~~BUG URGENT!!! some keys, like "<></>" aren't ever going to autocomplete. They need provisions.~~
    // ~~BUG URGENT!!! Cursor moves around all over the screen when hover on lots of stuff (file issue with github??!)~~ I did it to myself!!! by setting cursor position at cancel
    // ~~TODO figure out what to do if they have an "immediately replace with first option" setting on~~
    // ~~IMPORTANT BUG what if a key is pressed but autocomplete doesn't appear?!?!? Like when in quotes~~
    // ~~QUESTION If no autocomplete, like between quotes, choose no activation?!? (instead of error)~~
    // ~~IMPOSSIBLE/TODO If the cursor scope doesn't match the panel scope don't do autocomplete stuffs~~
    // NOTE/TODO Use our own version of autocomplete plus with node modules so it doesn't break unexpectedly. Then make this autocompleter the dominator!!!
    // QUESTION How to limit the tag to just the one we want (a also shows abbr, etc)
    // ANSWER/TODO COOL!!!!! make scope by giving classes to inserted text?!?!?! (or to something. look at how to make scope in atom)
    // TODO/ANSWER hide all elements of suggestion list that don't exactly match key string
    // TODO Why doesn't autocomplete show the snippet for "!"?!? Doesn't do symbols?!?!
    // TODO set "use strict matching for built in provider" to true or disable built in provider
    // TODO control "consume suggestion text following the cursor" autocomplete-plus option to not consume?!?!
    // TODO Turn on text autocomplete (built-in provider) for the alphabetical keyboard?!!? (and off the rest of the time)
    // TODO Confirm on horizontal arrow keys/cursor movement?!?!

    const aThief = this
    contextThief = this
    osk.activeAutocomplete = this

    aThief.osk = osk
    aThief.key = key
    osk.restoreFuncts = contextThief.restoreFuncts.bind(contextThief)
    aThief.autocompletePlusManager = atom.packages.activePackages["autocomplete-plus"].mainModule.autocompleteManager
    const listObj = aThief.listObj = aThief.autocompletePlusManager.suggestionList
    aThief.index = null
    aThief.timeoutID = null;
    aThief.firstHitOnThisKey = true
    aThief.confirming = false
    aThief.alreadyReleased = false
    aThief.activeElement = false
    aThief.subscriptions = null

    // ## Keys
    // Doesn't account for all possible key that could be on a keyboard, like wake/sleep/email/etc
    // Based on atom.keymaps.keystrokeForKeyboardEvent(e)

    // ### Non-inserters
    // undo (contains "cmd" or "ctrl" or w/e), capslock, shift, ctrl, alt, cmd, right, left, up, down, meta, (altgr, right-alt, alt-gr, alt-graph?!?), (option?!? windows?!?), (page-up/down/home/end?!), numlock, scrolllock, escape, menu?!?
    // ### ignored inserters
    // return, enter, tab? (maybe depending on autocomplete setting? or maybe use it to switch between autocomplete options in osk so that this never comes up)
    aThief.ignoredKeys = ["capslock", "shift", "ctrl", "alt", "cmd", "right", "left", "up", "down", "meta", "altgr", "right-alt", "alt-gr", "alt-graph", "altgraph", "rightalt", "option", "windows", "page-up", "page-down", "pageup", "pagedown", "home", "end", "numlock", "scrolllock", "escape", "menu", "return", "enter"] // Maybe tab
    // "Inserters"
    // backspace, delete
    aThief.observedKeys = ["backspace", "delete"]

    // ## NOT AUTOCOMPLETE TRIGGERS
    // command keys like "delete" and "return/enter"

    aThief.functs = {
      hideSuggestionList: aThief.autocompletePlusManager.hideSuggestionList
    }

    aThief.subscribe()
    // "subscribeToLIs" runs when elements exist
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

  show(usingAutocomplete) {
    if (!usingAutocomplete) {
      // leave inserted text/do nuthin'
      // listen for click
      const aThief = contextThief
      if (!aThief.listeningForClicks) {
        // TODO test moving this to subscriptions once key creates autocomplete thief
        document.body.addEventListener("click", aThief.clickCancelWithoutAutocomplete)
        aThief.subscriptions.add(new Disposable(() => {document.body.removeEventListener("click", aThief.clickCancelWithoutAutocomplete)}))
        aThief.listeningForClicks = true
      }
    }
  }

  wait(clickSelected) {
    const aThief = contextThief
    aThief.osk.activeAutocomplete = aThief
    if (aThief.timeoutID) clearTimeout(aThief.timeoutID)
    if (!aThief.osk.activeKey) return

    // QUESTION Is it a new list each time?
    aThief.listObj = aThief.autocompletePlusManager.suggestionList

    const listElement = document.querySelector("autocomplete-suggestion-list")
    const selectedElement = document.querySelector("autocomplete-suggestion-list .selected")

    let doWait = false
    if (selectedElement) {
      if (aThief.firstHitOnThisKey) aThief.subscribeToLIs(listElement)
      aThief.editor = atom.workspace.getActiveTextEditor()
      const editorElement = atom.views.getView(aThief.editor)

      let i = parseInt(selectedElement.getAttribute("data-index"))
      if (aThief.index !== i) {
        aThief.index = i

        // NOTE this is a terrible idea. This whole thing is a terrible idea and completely unsustainable
        // TODO do this only once
        aThief.destroyFuncts()

        const buffer = aThief.buffer = aThief.editor.getBuffer()

        // After we run in the first time then don't do first time stuff again
        aThief.firstHitOnThisKey = false
        if (!aThief.listeningForClicks) {
          // TODO test moving this to subscriptions once key creates autocomplete thief
          document.body.addEventListener("click", aThief.clickCancel)
          aThief.subscriptions.add(new Disposable(() => {document.body.removeEventListener("click", aThief.clickCancel)}))
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

        aThief.confirming = true // confirming manually, so don't actually release key
        if (clickSelected) {
          // Can't just do a click for no known reason
          let mouse = document.createEvent('MouseEvents')
          mouse.initMouseEvent('mousedown', true, true, window)
          selectedElement.dispatchEvent(mouse)
          mouse = document.createEvent('MouseEvents')
          mouse.initMouseEvent('mouseup', true, true, window)
          selectedElement.dispatchEvent(mouse)
        } else {
          // NOTE Without the confirm event "activate" triggers this whole "wait" thing again
          atom.commands.dispatch(editorElement, "autocomplete-plus:confirm") // <-- async?!?!
        }

      } else doWait = true
    } else doWait = true
    // TODO consider setInterval
    if (doWait && aThief.iter < 500) {setTimeout(aThief.wait, 1); aThief.iter++;}
    else aThief.iter = 0;
  } // wait

  clickCancelWithoutAutocomplete(e) {
    contextThief.clickCancel(e, true)
  }

  clickCancel(e, bypassAutocomplete) {
    const aThief = contextThief
    if (!aThief.osk.activeKey) return

    let listElm = null
    if (aThief.listObj._suggestionListElement) listElm = aThief.listObj._suggestionListElement.element
    const fromList = e.path.includes(listElm)
    if (!fromList && aThief.osk.activeKey.view.node !== e.target) aThief.release("cancel-click", e)
    else aThief.clickConfirm(e, bypassAutocomplete)
    // BUG doesn't insert new text because this key is already active. Boo.
    // NOTE for now cancel even when osk-key is pressed, but not when active key is pressed
    // TODO bring this functionality back
    // const targetClasses = e.target.classList
    // if (!fromList && !/osk-key/.test(targetClasses)) aThief.release("cancel-click", e)
  }

  subscribe() {
    const aThief = contextThief
    const subs = aThief.subscriptions = new CompositeDisposable()
    const listObj = aThief.listObj

    // # Initiating

    // ## Show list
    // TODO clicking a key?!? (got that one goin' on, oh yeah) hovering over a key instead?!?!
    // TODO tapping on a key

    // ## √ Show preview
    // √ Any time text is changed/autocomplete is possibly triggered
    subs.add(listObj.onDidChangeItems(aThief.setNewIndex))
    // √ arrow key navigation to different list items
    subs.add(listObj.onDidSelectBottom(aThief.setNewIndex))
    subs.add(listObj.onDidSelectNext(aThief.setNewIndex))
    subs.add(listObj.onDidSelectPageDown(aThief.setNewIndex))
    subs.add(listObj.onDidSelectPageUp(aThief.setNewIndex))
    subs.add(listObj.onDidSelectPrevious(aThief.setNewIndex))
    subs.add(listObj.onDidSelectTop(aThief.setNewIndex))
    // √ hovering navigation over a list item (also select it then) (subscriptions added when element first appears in wait loop)
    // QUESTION if user stops hovering over key or list does the list disappear/cancel?!?
    // ANSWER w/e we have a way to escape we'll figure out other details later

    // ## NOT CONFIRMERS
    // √ only one option available on a key should not confirm, just show.

    // QUESTION & BUG what if key gets pasted but there's no autocomplete (like when the text is pasted between quotes)

    // # Releasing situations

    // ## Confirm
    // √ typing inside a snippet, including deleting (has to happen before the buffer changes so that the snippet can be re-entered and then used properly. Do it through ignoredKeys list)
    // vvv the problem is when the undo history (or buffer?!) is affected by something other than osk vvv
    // When new autocomplete suggestions come up or something else changes the editor...??!? How do I detect other things happening/being activated while a key is active?!?! (this will only happen when user types into editor on their own, so that will be a confirmation, but the general question still stands about other plugins/behaviors)
    document.body.addEventListener("keydown", aThief.testKeydown)
    subs.add(new Disposable(() => {document.body.removeEventListener("keydown", aThief.testKeydown)}))
    // √ When autocomplete thinks something's been selected by user, do that. Like with "enter" (maybe "tab") or clicking/tapping on a snippet suggestion list item
    subs.add(listObj.onDidConfirm(aThief.clickConfirm))
    // √ clicking a key when list is open

    // ## Canceling
    // NOTE Keypresses that don't change the editor (even/esp when they interact with osk) shouldn't cancel
    // √ hitting "esc" uses autocomplete's own cancel
    subs.add(listObj.onDidCancel(function(e){aThief.release("cancel-autocomplete-plus", e)}))
    // √ minimizing osk
    subs.add(aThief.osk.emitter.on("minimized", function minimizeRelease(caller){aThief.release("cancel-"+caller.id, null)}))
    // Mouseout/mouseleave
    const keyElm = aThief.key.view.node
    keyElm.addEventListener("mouseenter", aThief.recordValidElement)
    subs.add(new Disposable(() => {keyElm.removeEventListener("mouseenter", aThief.recordValidElement)}))
    keyElm.addEventListener("mouseleave", aThief.mouseLeaveHandler)
    subs.add(new Disposable(() => {keyElm.removeEventListener("mouseleave", aThief.mouseLeaveHandler)}))
    // √(kinda) clicking elsewhere on the editor (any click anywhere other than suggestionList or the key, which confirm, TODO or on another osk key (that would be a confirmation, NOTE but for now for simplicity will cancel)). Assigned in dom event listener anytime list appears from an osk click. TODO don't cancel when user clicks in the snippet?!?!? NOTE forget this for now. NOTE Listener set after first click because somehow this thing gets in line to hear the first click and confirms with it
    // √ "undo" event handled on the main script or w/e where subscriptions are made and disposed
    // √ moving to another editor event handled on the main script or w/e where subscriptions are made and disposed ~~(make a new autocomplete instance?!?! and suspend old autocomplete)~~ autocomplete doesn't have instances so this would be a little useless but consider adding it in the future anyway because that's the awesome way to do things
    // √ tab destroyed (think it's already happening because editor is switched)
    // √ osk is deactivated/toggled closed or deactivated done in control/osk.js (in deactivate and toggle)


    // # Suspend
    // QUESTION Should make different osk for each editor?!!? or should make different instances of autocomplete theif for each editor!?! or suspend other ways??? No point. Autocomplete doesn't do it and we are but dust in the wind of that great module.

    return true
  } // subscribe

  subscribeToLIs(parentElm) {
    const aThief = contextThief
    const all = parentElm.querySelectorAll("li")
    for (let li = 0; li < all.length; li++) {
      let elm, disposable
      elm = all[li]
      elm.addEventListener("mouseenter", aThief.mouseEnterLIHandler)
      disposable = new Disposable(() => {elm.removeEventListener("mouseenter", aThief.mouseEnterLIHandler)})
      aThief.subscriptions.add(disposable)
    }
    // Possibly release when leaving element
    let disposable = null
    parentElm.addEventListener("mouseenter", aThief.recordValidElement)
    disposable = new Disposable(() => {parentElm.removeEventListener("mouseenter", aThief.recordValidElement)})
    aThief.subscriptions.add(disposable)
    parentElm.addEventListener("mouseleave", aThief.mouseLeaveHandler)
    disposable = new Disposable(() => {parentElm.removeEventListener("mouseleave", aThief.mouseLeaveHandler)})
    aThief.subscriptions.add(disposable)
  } // subscribeTo

  maybeRelease(e){
    const aThief = contextThief
    // This relys on timing! Boooo!! What if lag happens?! T_T
    if (!aThief.activeElement) aThief.release("cancel-dom", e)
  }

  mouseLeaveHandler(e){
    const aThief = contextThief
    aThief.activeElement = null
    // what element is the mouse in now? :(
    setTimeout(function(){aThief.maybeRelease(e)}, 5)
  }

  recordValidElement(e) {
    const aThief = contextThief
    // TODO clean this up somehow so that list elm is never listened for
    let listElm = null
    if (aThief.listObj._suggestionListElement) listElm = aThief.listObj._suggestionListElement.element
    const keyElm = aThief.key.view.node
    if (e.path.includes(listElm)) aThief.activeElement = listElm
    if (e.path.includes(keyElm)) aThief.activeElement = keyElm
  }

  mouseEnterLIHandler(e) {
    const aThief = contextThief

    const i = parseInt(this.getAttribute("data-index"))
    const all = this.parentNode.querySelectorAll("li")
    for (let li = 0; li < all.length; li++) {
      all[li].classList.remove("selected")
    }
    this.classList.add("selected")

    aThief.wait(true)
  }  // li handler

  testKeydown(e){
    const aThief = contextThief
    if (!aThief.osk.activeKey) return null

    const keyAtomName = atom.keymaps.keystrokeForKeyboardEvent(e)
    const keys = aThief.ignoredKeys
    let doesContain = false
    for (var i = 0; i < keys.length; i++) {
      const regex = new RegExp(keys[i])
      if (regex.test(keyAtomName)) doesContain = true
    }

    if (doesContain) return false
    else return aThief.release("confirm", e)
  }

  clickConfirm(e, bypassAutocomplete){
    // TODO If user types into snippet then confirm it? Confirm/cancel editor input that wasn't created by osk.
    const aThief = contextThief
    if (!aThief.osk.activeKey) return
    if (!aThief.confirming && !aThief.alreadyReleased) {
      if (bypassAutocomplete) aThief.release("confirm-no-autocomplete", e)
      else aThief.release("confirm", e)
    } else if (aThief.alreadyReleased) { // Terrible name for a variable!!! confirmingPart1?
      aThief.release("complete", e)
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
    // TODO add in when/if a new autocomplete thief is created/destroyed with a osk key click
    aThief.subscriptions.dispose()
    aThief.index = null
    aThief.confirming = false
    aThief.alreadyReleased = false
    aThief.firstHitOnThisKey = false
  }

  destroy(canceled) {
    const aThief = contextThief
    aThief.osk.activeKey.deactivate(canceled) // Destroy this autocomplete
  }

  cancel(releaseOp, editorView, e) {
    const aThief = contextThief
    // Get the current cursors' positions in case the user clicked on some editor text elsewhere
    const editor = aThief.editor
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

    aThief.destroy(true)
  } // cancel

  release(releaseOp, e) {
    // BUG if text is pasted and there's no autcomplete options (like when the cursor is in the middle of quotes), key can't properly release and we get errors.
    const aThief = contextThief
    if (aThief.osk.activeKey && (!aThief.releasing || releaseOp === "complete")) {
      aThief.releasing = true
      if (aThief.listeningForClicks) { // disposes with subscriptions
        aThief.listeningForClicks = false
      }
      aThief.index = null
      aThief.editor = atom.workspace.getActiveTextEditor()
      const buffer = aThief.buffer = aThief.editor.getBuffer()
      const editorView = atom.views.getView(aThief.editor)

      if (/cancel/.test(releaseOp)) {
        aThief.cancel(releaseOp, editorView, e)
        aThief.releasing = false

      } else if (/confirm/.test(releaseOp)) {
        // undo to inserted text, "confirm" the right snippet which will trigger finishing the confirmation
        // Basically, if the the snippet has been pasted in I want the user to be able to press undo and return to the clean slate that was there before
        aThief.alreadyReleased = true
        aThief.buffer.revertToCheckpoint(aThief.osk.postInsertionCheckpoint)
        if (releaseOp === "confirm-no-autocomplete") aThief.clickConfirm(e)
        else if (releaseOp === "confirm") atom.commands.dispatch(editorView, "autocomplete-plus:confirm")

      } else if (releaseOp === "complete") {
        // Make all this stuff undoable
        const worked = buffer.groupChangesSinceCheckpoint(aThief.osk.preInsertionCheckpoint)
        aThief.preFinishReset()
        // CANNOT KEEP THIS TOO MESSED UP WTF WILL HAPPEN?!!?
        atom.commands.dispatch(editorView, "autocomplete-plus:cancel")
        aThief.releasing = false
        aThief.destroy()
      } // releaseOp
    }
  } // release
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
