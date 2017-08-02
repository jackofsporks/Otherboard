# Actually autocomplete

## Resources
- ~~ https://github.com/atom/snippets/blob/master/lib/snippets.coffee ~~
- https://atom.io/packages/autocomplete-plus
- https://github.com/atom/autocomplete-plus/blob/master/lib/autocomplete-manager.js#L194
- *also look at this lib for testing spec ideas*

## Issues with Autocomplete
- When select text backwards then insert with editor.insertText then manually activate autocomplete list appears but then disappears right away.

## 3
- Paste completeable text (done)
- Make suggestions appear (done)
- ~~(save the parent element?!?!)~~
- ~~Find suggestions (done)~~
- Select the inserted text?!? (TODO)
- Snatch element and put it next to key and somehow keep it there (add an id or class or something? clone??? Or maybe just steal its juicy goodness)
  - Position not off screen and yet somehow next to key
  - DO NOT APPEND TO KEY ELEMENT (so text stays big and no need to move element when done with it)
  Autocomplete the first suggestion (get the snippet from the element somehow without triggering closing it)
  - PROBLEM as soon as you paste any autocomplete text there won't be text to use to keep the other options on screen. Keep it up there against its will?!???
  If user moves mouse out of key text is erased
  If user moves mouse over other completion options text is replaced by new snippet
  Click or enter makes text not disappear anymore
  Return list back to where it belongs
  - intercept input sooo it can't get clicked and doesn't disappears
- Steal juicy goodness
  - on confirm swallow event so it doesn't hit actual list
  - on change items, get all items list
  - on change selection recalculate index
  - get item at index
  - show its freaking stuff somehow
- Make element disappear on mouseout of key or element


## 2
- either simulate individual key presses or make textChange property `true` when text is pasted
  - file issue and/or find stackoverflow wisdoms

## 1
- Behavior on hover or touch
  - "activatedManually: Whether the autocomplete request was initiated by the user (e.g. with ctrl+space)" on https://github.com/atom/autocomplete-plus/wiki/Provider-API
  - show snippet on insertion/paste
  - intercept "populate" or w/e and stick it with the panel key instead of the... text? Cursor? ~~(https://github.com/atom/snippets/blob/master/lib/snippets.coffee#L302)~~
- on click/lift in the same key/key's snippet choices
  - insert snippet
- Options for insertion:
  - User clicks on key, autocomplete shows up in editor, user clicks on autocomplete
    - Super awkward
  - User hovers over (holds for touch device), autocomplete shows up in panel, user clicks (releases for touch device) while on autocomplete to select a specific one or user clicks on the key to select first item on autocomplete
    - Smoother, but no idea how to do it
- Pseudo
  - get scope where cursor is at

# Pseudo (06/26/17)
(pretty sure emmet is stealing tab and piggy-backing on autocomplete-plus so what we want to do is replicate user behavior, not use any one particular package)
- insert snippet (confirm) without hiding/canceling
- on selection change delete old snippet, put prefix back in, insert new snippet (confirm) without hiding/canceling
- on esc/enter/click (anywhere like in editor or on key)/touch restore functions, let all things go, be at peace

# Pseudo (07/05/17)
- when new selection is made/thing starts
  - store new index
  - deactivate autocomplete
  - undo previously pasted snippet !!!if there was one!!!
    - if not then ~paste key text~ nothing because the key pasted it already
  - activate autocomplete
  - go to index that was stored
  - press enter with no hiding
