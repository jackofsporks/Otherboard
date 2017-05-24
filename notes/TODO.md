# Project

## NAMES!!!!!!
- OSK - On Screen Keyboard
- Motherboard
- ***Otherboard (OtherBoard/OB/Ob)***
- https://www.namecheckr.com/

## Next Actual Step (05/??/17)
- Snippets and multi-action/navigation/cursor keys

## Next Steps (01/30/17)
### Panels
- Part II --> Values home page could be
  - a menu page
  - a bunch of common dimension/color/file extension keys (or there could be a separate board/page for all of these, but name...?!?!)

### Keys
- Add key dynamically based on history (if came from <img src=""> and went to "abc", show link to "File Exts" panel)
  - The only idea I have of where to add keys dynamically is the lowest row where the spacebar is. This means:
    - ~~Work out how to center the frigging space bar properly~~
    - pre/ap-pend to left or right depending on what has less stuff in it already
- ~~Find css way to center space key (3 columns, flex: 1 on outer, flex: 0 on center?)~~
- Separate tab and indent keys??!?
- UFT-8 board for inserting HTML symbols into HTML as text
- User values include:
  - classes
  - ids
  - colors on the page!!!!!!!
  - other values...
  - Parse content of page to get user values/attributes/w/e (https://www.npmjs.com/package/posthtml-parser)
- shortcuts: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey
  - how is tab order determined? (tab order being when you press the dang tab key)
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
  - add navigation sequences
- --> Shorthand/obj for navigation sequences
- Style highlighting for keys using the user's chosen themes!!!! (but how.....???)
- Style css color names and colors as their color (calculate contrast from background to switch background color when needed)
- ~~Simulate actual keypresses (for keys like 'del' and modifier keys)~~
- ~~Have dynamic names so keys can have different names in different boards or let the board assign the name (content: ["attrs.Global_Attributes_Page_1>>Page 1"] vs. content: ["attrs.Global_Attributes_Page_1>>Global"] or just default content: ["attrs.Global_Attributes_Page_1"])~~
- ~~Try keys as button elements~~

## Tabs
- And for other items as well - allow replacement of text with icons

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
- Minimize --> Toggle (gone) --> Toggle (back) = still minimized?!? Expected behavior?!?! (probably expecting to be open)
- Nested requires so they don't have to be repeated for each panel
- Composable View objects
- --> Board navigation animations
- History
  - ~~Functionality~~
  - Animations
- Find somewhere to name a function "motivate"! DO IT!!
- WARNING scoped id's won't work when being searched for (when appearing on the search page)
  - for keys use ancestor in id name
  - for everything else, don't use id's, use pathTo's
- Allow scrollable tabs on sidebar and topbar + arrow elements to let you click to scroll by the height of a tab (if there is nothing to scroll to, dim the arrow)
- Load panels only if/when they get opened
- Scrollable top two rows?!!?!?!? (maybe more if there's not a default row as the third row)
- ~~Check if node packages are still needed~~
  - They're not, get rid of them. Others may help, though.
- Add `debug` to `findPathTarget()` ("getPathTarget"???) that will trigger certain console logs
- Toggle disappearance with esc key maybe, but search field esc takes precedence. How?
- Undo button
- Publish? to npm? to atom?
- "Outdent" as well as indent key (outdent key? or add a Shift key?) <- how to simulate holding down a modifier key?
- QUESTION - Make sure each board group has an even number of tabs so no one can tell the keyboard doesn't look centered underneath... :S
  - --> Ooooor float tabs to the left (and maybe make them look more like tabs???)
- ~~*******WHY IS ATOM'S `state` OBJECT EMPTY ON INITIALIZATION!?!?!?!?!?!? (because the documentation wasn't clear/obvious)~~
- ~~Hide app properly~~
- ~~Initialize github repo~~
- ~~Version (beta)~~
- ~~Refactor view vs. activate objects (currently calling obj.view.show() vs. obj.show() or obj.activate())~~
- ~~Composables instead of inheritance~~
- ~~Figure out how to serialize all the dataz: How to handle functions as strings (or not)~~
- ~~Make sure the default for active child/panel is not the last board in every board group~~
- ~~Add nested columns and rows to row structure~~
- ~~Open/close package properly (serialization)~~
  - Saving custom keyboard changes into file automatically???
- ~~Make sure cursor doesn't move when clicking on the board (it don't)~~
- ~~Is it convenient or is it confusing to have attributes on the third row of panels for html elements????!?!?
  - Target audience indicated it was confusing~~
- ~~"dimmed" class for dimmed... stuff...~~ ("disabled")
- ~~Temporary minimize, not toggle off~~

##Stylin'
- ~~Tabs to blend into panel when active, everything else has a bottom border. Switch colors.~~
- Minimize better (stuffing is showing)
- Top line on every tab to close everything in

## Settings
- --> Keep gear icon highlighted when config is open...
- Search bar...? (in the distant future)
- User can custom configure min/max/close to be on the left instead??? (if horizontal)
- ~~Problem: settings take up precious vertical space and isn't used a lot. Solution 1: Settings as a right sidebar vs. topbar
  - Takes up less vertical space
  - There's plenty of horizontal space in this environment
  - Doesn't look as good
  - Minimizing a bit more awkward visually~~
- ~~Settings icon... somewhere...?~~
- ~~Open/close settings~~
- ~~Close/minify/magnify osk~~

## Var Names
- ~~Set a panel/whatever/element's "isVisible" to true and (if needed) activate tabs:
  - xxx activateTabs
  - register (not quite, not being added to a list or record)
  - substantiate (a bit hard to parse and good for dynamically generating elements)
  - materialize (easier to parse and good for dynamically generating elements, but clunkier - what about "dematerialize" as the opposite?!?!?!)
    - opposite: breakDown, dematerialize
  - realize (alternate meanings)
  - actualize (suuuuuper fancy)~~

## Styling
- ~~Remove width style from left sidebar~~
- ~~Switch everything to "rem"~~

## Dataz
Each list item is made of three parts:
- most common
- less common
- rare

### HTML
- elements/tags
- attributes
- attribute values
- sub-attributes
- classes (no ids??? in-page link use?)
### CSS
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
- Typescriptenspeil
  ~~1) You have a tab open. Don't close that tab!!!! (https://channel9.msdn.com/events/Build/2017/C9L25)~~
  2)  https://channel9.msdn.com/events/Build/2017/B8088
- CHECK IT OUT!!!  https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web
- ~~funfunfunction on compositional inheritance~~
- Simple template for config, deserialization, & serialization

# Technical Questions

QUESTION (1)
How does this behave?
``` js
caller = {}
// function x (caller) {
    caller.someProp = "prop"
    caller.someFunct = function () {
      if (caller.someProp === "prop") return true
      else return false
    }
    caller.someFunct() // returns true?
    caller.someProp = "something else"
    caller.someFunct() // returns false?
    // return caller
// }
```
ANSWER (1)
Returns what we hoped for!!!!
(can try in fiddle or something)
