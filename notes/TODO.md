# Project

## NAMES!!!!!!
- OSK - On Screen Keyboard
- Motherboard
- ***Otherboard (OtherBoard/OB/Ob)***
- https://www.namecheckr.com/

## Next Steps (01/30/17)
### Panels
- Values home page could be
  - a menu page
  - a bunch of common dimension/color/file extension keys (or there could be a separate board/page for all of these, but name...?!?!)

### Keys
- Find css way to center space key (3 columns, flex: 1 on outer, flex: 0 on center?)
- UFT-8 board for inserting HTML symbols into HTML as text
- User values include:
  - classes
  - ids
  - colors on the page!!!!!!!
  - other values...
  - Parse content of page to get user values/attributes/w/e (https://www.npmjs.com/package/posthtml-parser)
- shortcuts: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey
  - how is tab order determined?
- key data
  - navigation functions/types
  - snippet insertion
  - actions (before, during, after)
- undo
- info?
- style keys based on action
- Insert snippets
  - Find an npm snippet manager for atom and install/save it
  - TODO: Use user's own snippet manager
- ~~Simulate actual keypresses (for keys like 'del' and modifier keys)~~
- ~~Have dynamic names so keys can have different names in different boards or let the board assign the name (content: ["attrs.Global_Attributes_Page_1>>Page 1"] vs. content: ["attrs.Global_Attributes_Page_1>>Global"] or just default content: ["attrs.Global_Attributes_Page_1"])~~

### Snippets
#### Blank Slates
- HTML
  - <|><\|>
- CSS
  - div.className {
    width: 100%;
  }
- QUESTIONS
  - Insert HTML snippet then still go to an Attributes panel?!?!?!
  - For all elements, or just for some?!?!
  - If we're not going to switch to an Attributes panel, then should "class" and "id", etc., still be on all Elements panels?!?!

### Customization
- Add settings and settings expansion bar (addon?)
- Replace keys of row that's always there (with existing keys)

## Misc
- WARNING scoped id's won't work when being searched for
- Allow scrollable tabs on sidebar and topbar + arrow elements to let you click to scroll by the height of a tab (if there is nothing to scroll to, dim the arrow)
- Load panels only if/when they get opened
- Scrollable top two rows?!!?!?!? (maybe more if there's not a default row as the third row)
- Make sure cursor doesn't move when clicking on the board
- Is it convenient or is it confusing to have attributes on the third row of panels for html elements????!?!?
- Check if node packages are still needed
- Add `debug` to `findPathTarget()` ("getPathTarget"???) that will trigger certain console logs
- Temporary minimize, not toggle off
- Toggle disappearance with esc key maybe, but search field esc takes precedence
- Undo button
- Composables instead of inheritance
- Simple template for config, deserialization, & serialization
- Figure out how to serialize all the dataz: How to handle functions as strings (or not)
- Make sure the default for active child/panel is not the last board in every board group
- Open/close package properly (serialization)
  - Saving custom keyboard changes into file automatically???
- Publish? to npm? to atom?
- Add nested columns and rows to row structure
- History
 - Animations
- "Outdent" as well as indent key (outdent key? or add a Shift key?) <- how to simulate holding down a modifier key?
- QUESTION - Make sure each board group has an even number of tabs so no one can tell the keyboard doesn't look centered underneath... :S
  - Ooooor float tabs to the left (and maybe make them look more like tabs???)
- ~~*******WHY IS ATOM'S `state` OBJECT EMPTY ON INITIALIZATION!?!?!?!?!?!? (because the documentation wasn't clear/obvious)~~
- ~~Hide app properly~~
- ~~Initialize github repo~~
- ~~Version (beta)~~
- ~~Refactor view vs. activate objects (currently calling obj.view.show() vs. obj.show() or obj.activate())~~

## Settings
- Keep gear icon highlighted when config is open...
- Problem: settings take up precious vertical space and isn't used a lot. Solution 1: Settings as a right sidebar vs. topbar
  - Takes up less vertical space
  - There's plenty of horizontal space in this environment
  - Doesn't look as good
  - Minimizing a bit more awkward visually
- Settings icon... somewhere...?
- Open/close settings
- Close/minify/magnify osk
- Search bar...? (in the distant future)
- Can configure min/max/close to be on the left instead??? (if horizontal)

## Styling
- ~~Remove width style from left sidebar~~
- ~~Switch everything to "rem"~~

## Dataz
Each list item is made of three parts:
- most common
- less common
- rare

## HTML
- elements/tags
- attributes
- attribute values
- sub-attributes
- classes (no ids??? in-page link use?)
## CSS
- selectors
- properties
- property values
- sub-properties
- classes
- ids

# Research
- Alternative environments
 - Visual Studio Code (mobile devices?)

# Unrelated
- File issue in snippet package to use `let` in for loops instead of `var`
- File caniuse github issue for "translate" global attribute of HTML
