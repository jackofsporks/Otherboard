#Project

##NAMES!!!!!!
- OSK - On Screen Keyboard
- Motherboard
- ***Otherboard (OtherBoard/OB/Ob)***
- https://www.namecheckr.com/

##Next Steps (01/30/17)
###Keys
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

###Customization
- Add settings and settings expansion bar (addon?)

##Misc
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
- ~~*******WHY IS ATOM'S `state` OBJECT EMPTY ON INITIALIZATION!?!?!?!?!?!? (because the documentation wasn't clear/obvious)~~
- ~~Hide app properly~~
- ~~Initialize github repo~~
- ~~Version (beta)~~
- ~~Refactor view vs. activate objects (currently calling obj.view.show() vs. obj.show() or obj.activate())~~

##Settings
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

##Styling
- ~~Remove width style from left sidebar~~
- ~~Switch everything to "rem"~~

##Dataz
Each list item is made of three parts:
- most common
- less common
- rare

##HTML
- elements/tags
- attributes
- attribute values
- sub-attributes
- classes (no ids??? in-page link use?)
##CSS
- selectors
- properties
- property values
- sub-properties
- classes
- ids

#Research
- Alternative environments
 - Visual Studio Code (mobile devices?)

#Unrelated
- File issue in snippet package to use `let` in for loops instead of `var`
