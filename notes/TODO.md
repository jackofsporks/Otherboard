# Project

## NAMES!!!!!!
- OSK - On Screen Keyboard
- Motherboard
- ***Otherboard (OtherBoard/OB/Ob)***
- https://www.namecheckr.com/

## Next Actual Step (05/??/17)
- keyboard integration
  - keys cannot have hardcoded keyboard shortcuts (same shortcut may end up on same panel together)
  - Keys will be assigned shortcuts one at a time when the panel appears
  - ~~single letter keys will go first, then from l to r, t to b pick the first letter that is unique.~~
  - Words by order of length and then l to r, t to b, pick the first unique letter.
  - QUESTION What happens when all the key's letters are taken by other keys?
   - ANSWER 1 show an alternative (a number? or something?!?!) in the corner of the key or on top of they key or...????
  - Underlines/bold/some style is applied to triggering letter when the alt key is pressed (or whatever key combo is set)
  - have to have a way to focus on keyboard
    - QUESTION do you have to refocus on keyboard every time, or after insertion does the focus come back to the board?
      - ANSWER 1 like sticky keys - combo to enter and exit keyboard sticky mode.
  - UI key (top right?!?) to trigger keyboard/sticky mode?!?
  - QUESTION when a key is triggered does it show the snippet options and then user confirms!?!? That sounds annoying as all get out!!
    - ANSWER 1 there could be a different key combo (ctrl instead of alt...? cmd? both alts?) for automatically entering the first snoption (snippet option) (soption?) available.
    - ~~ANSWER 2 a key combo to press to toggle a mode where the first snoption is automatically inserted. Annoying to switch between that and regular mode constantly (as I imagine myself doing)~~
  - snippets should have a shortcut each too?!?! That's crazy talk!!!
  - when in keyboard mode, show keyboard mode instructions (like keyboard sticky mode)
  - when not in keyboard mode, show shortcut for keyboard mode
  - allow user to turn those hints off. Also put those instructions elsewhere incase there's not enough room for them.
  - keys:
    - To focus/unfocus on keyboard: ctrl+alt+k+o (KO!) or o+k (OK!) or maybe just "k"
    - Sticky/unsticky mode: cmd+alt+k
    - Then no modifying key needed for regular functionality
    - alt for automatically using first snippet or alt for showing all snippet options
      - UI for switching those? (changing the key from alt would be somewhere else)
  - UI to change shortcuts
  - QUESTION should user be able to move cursor in the text when in keyboard mode?!?! (no...)
  - QUESTION how to navigate between boards, panels, and history?!!?
  - QUESTION do command keys like delete and tab just do their usual thing?!?
- ~~Snippets~~ (todone!! for now!!)
- ~~multi-action/simulation + navigation keys~~

## Next Steps
### Part I
- ~~Config as actual useful object~~ (mostly)
- Clean up where visual stuffs is happening (example: osk minimizing)
- Compose `View` objects
- ~~Inserting snippets~~
- ~~Info boxes for keys (use library of awesome snippet manager I have yet to identify) (maybe Part III)~~
- Find a great snippet library with great descriptions
- TESTING (TDM - Test Driven Maintenance)
  - Jest? (from wowsoclutch) (snapshots!)
    - https://facebook.github.io/jest/
    - https://facebook.github.io/jest/docs/snapshot-testing.html

#### Part I Research
- keyboard integration
- ~~snippets (see notes/snippets.md)~~
- (abandoned because of cowardice) diagram test/spec ideas
- ~~package configs in atom and how those look~~

### Part D(ata)
- User created variables/words
  - parsing available vars --> https://github.com/atom/snippets/blob/master/lib/snippets-available.js
- UTF-8 symbols panel
- color names panel (with real colors!)
- All the other things

### Part II
- Oh, the mystery
- Multi-action/navigation
- Shorthand/obj for navigation sequences

#### Part II Research
- bockly

## Meta Research
- VSTS for task management (visual studio team services)
- Put config on todo list

## Architecture
- Move custom-settings folder etc to config folder because it's data not logic

### Panels
- Part D(ata) --> Values home page could be
  - a menu page
  - a bunch of common dimension/color/file extension keys (or there could be a separate board/page for all of these, but name...?!?!)

### Keys
- Give artificial scope temporarily to inserted text
- Fix all keys to work with snippets
- backward navigation?? (like from abc after having gotten there from element -> class... or something?!?!)
- cursor keys (arrow keys?? What did I mean!??!!) (If I meant arrow keys I should save it for mobile devices?!?!)
- Gestures to stand for keys?!?! like double swipe right for indent, left for unindent
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
- comment
- info?
- style keys based on action
- Insert snippets
  - Find an npm snippet manager for atom and install/save it
  - TODO: Use user's own snippet manager
  - add navigation sequences
- Style highlighting for keys using the user's chosen themes!!!! (but how.....???)
- Style css color names and colors as their color (calculate contrast from background to switch background color when needed)
- ~~Simulate actual keypresses (for keys like 'del' and modifier keys)~~
- ~~Have dynamic names so keys can have different names in different boards or let the board assign the name (content: ["attrs.Global_Attributes_Page_1>>Page 1"] vs. content: ["attrs.Global_Attributes_Page_1>>Global"] or just default content: ["attrs.Global_Attributes_Page_1"])~~
- ~~Try keys as button elements~~

## Tabs
- And for other items as well - allow replacement of text with icons

## Atom bugs
- Putting a keymapped command in the keymaps/osk.json makes osk take over the command even when it hasn't been activated. wtfiuwt?!?!

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
- When input through keyboard keep focus on osk?!?!
- Change tabs to nav element and class/id and maybe history to buttons (nav too?). Tabs to buttons?!?!?!
- --> on hover show code that will appear in that spot - no click to see what happens!
- "05/31/17" commit on 06/02/17 --> comment that synched up app config with atom config storage
- Make sure cursor doesn't move when clicking on the board (if insert text, cursor loses place. WHY!?)
  - Way to keep place in doc --> https://github.com/atom/snippets/blob/master/lib/snippets-available.js
  - ~~When keydown, unless chosen meta-key is down, focus on previously focused element~~ (mostly) `pane = atom.workspace.getActivePane(); pane.activate()`
- Nested requires so they don't have to be repeated for each panel
- Composable View objects
- --> Board navigation animations
- History
  - ~~Functionality~~
  - Animations
- Find somewhere to name a function "motivate"! DO IT!!
- Also use a "laserfocus" property on something!!!
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
- ~Research disposing of event listeners~~ (done. maybe. doesn't need to be done it seems)
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
- ~~Is it convenient or is it confusing to have attributes on the third row of panels for html elements????!?!?
  - Target audience indicated it was confusing~~
- ~~"dimmed" class for dimmed... stuff...~~ ("disabled")
- ~~Temporary minimize, not toggle off~~
- ~~Minimize --> Toggle (gone) --> Toggle (back) = still minimized?!? Expected behavior?!?! (probably expecting to be open)~~

##Stylin'
- ~~Tabs to blend into panel when active, everything else has a bottom border. Switch colors.~~
- Minimize better (stuffing is showing)
- Top line on every tab to close everything in

## Settings
- Search bar...? (in the distant future)
- User can custom configure min/max/close to be on the left instead??? (if horizontal)
- ~~Keep gear icon highlighted when config is open~~
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

## DOM
- top bar to contain tab section and config section separately

## Styling
- Inactive history nave (or anything) to have no pointer-events
- When currently open board group or board is hovered over, it should not change color
- Way to install different themes for boardz
- ~~Remove width style from left sidebar~~
- ~~Switch everything to "rem"~~

### Icons
- https://www.flaticon.com/free-icon/delete_159805#term=delete&page=1&position=31
no: |->
maybe: ->|
√ yes: >|
no: |>

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

# Bugs
- Fix tab and delete and command buttons in general

# Research
- Alternative environments
 - Visual Studio Code (mobile devices?)
- https://arstechnica.com/apple/2012/05/25-years-of-hypercard-the-missing-link-to-the-web/ (wowsoclutch)
- Voice chat mumble|discord|ventrilo|teamspeak, then build up a responsive site with psilent p pstrawberrie
- pstrawberrie photoshop vid for slicing https://www.youtube.com/watch?v=8jOitBO9e94

# Upkeep
- Edit todo.cson (highlight styling) to make "IMPORTANT" a fancy color

# Slightly Related
- July 1st wowsoclutch b-day!! \o/
- ~~File atom issue to be able to search atom Settings page and Styles etc.~~ someone already filed it https://github.com/atom/settings-view/issues/284
- File issue in snippet package to use `let` in for loops instead of `var`
- File caniuse github issue for "translate" global attribute of HTML
- File atom issue checkpoint function descriptions do not include that you need to pass an argument to revert and all those other folks
- File atom issue atom.keymaps.keystrokeForKeyboardEvent(e) returns lowercase when capslock is on
- Typescriptenspeil
  ~~1) You have a tab open. Don't close that tab!!!! (https://channel9.msdn.com/events/Build/2017/C9L25)~~
  2)  https://channel9.msdn.com/events/Build/2017/B8088
- CHECK IT OUT!!!  https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web
- ~~funfunfunction on compositional inheritance~~
- Simple template for config, deserialization, & serialization
- Find utubs vid: "On The Turing Completeness of PowerPoint" (from xartuo)
- https://arstechnica.com/apple/2012/05/25-years-of-hypercard-the-missing-link-to-the-web/ (wowsoclutch)
- File Atom issue to clarify "object / Grouping other types" in https://atom.io/docs/api/v1.17.2/Config <-- how to access nested object values with getting and setting
- https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a (wowsoclutch)
- https://softwareengineering.stackexchange.com/questions/110936/what-are-the-advantages-of-prototype-based-oop-over-class-based-oop (wowsoclutch)
- https://vimeo.com/69255635 (wowsoclutch)
- Get those ears on 'hey young world' by slick rick (wowsoclutch)
- Also hear 'Lemon Jelly - Nice weather for Ducks' (wowsoclutch)
- "its gonna be a pain in the closing bracket" "may the semicolon be with you" - userman2
- Listen to stream 06/12/17 @ 1 1/3 - 5 min with SomaFM on the DefCon station http://somafm.com/player/#/now-playing/defcon
- Get ice cream into atom.fridge (userman2)
- Check out frequencies - https://www.youtube.com/watch?v=cbDn1qvU81c - EkoJR
- Enjoy exercise - wowsoclutch (Kappa)
- "halt and catch fire" tv show that's so-so/ambivalence - wowsoclutch
- "Look up wavenet to see where we're with sound recognition and generation" - Xartuo
- "Make autocomplete minus plugin for beginners" - Xartuo
- "shrug" autocomplete to "¯\_(ツ)_/¯"_ in OSX
- Implement:
```js
let fridge = {}
    fridge.freeziepop = "tasty mmmmm"
    userman2.give(fridge.freeziepop)
```
- Vid on coding while blind with speech2text https://www.youtube.com/watch?v=8SkdfdXWYaI (awesomeness!!) - wowsoclutch
- Check out streamer Kata (shaders?) - Xartuo
- ralph wiggum is one of the greatest minds of our time - bagnalla
- aqua team/teen hunger force -bagnalla, DarrnyH
- "Just Enough Software Architecture", "Clean Architecture" - Xartuo
- warframe (space ninjas awesomeness!!!) - Deathpax
- diff tween ssd & hdd youtube Techquickie - FuzzyButtGaming
- stream bots nightbot & muxybot - pstrawberrie
- does streamlabs window capture for chat put its own bot on irc? or does it piggyback off of twitch's bot?!????

# Technical Questions
QUESTION (2)
Does atom really know what editor is active? Because autocomplete keeps confirming in the wrong editor which osk says is the same as the active editor which it gets from atom with getActiveTextEditor()

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
    caller.someFunct() // returns false? (what we want)
    // return caller
// }
```
ANSWER (1)
Returns what we hoped for!!!!
(can try in fiddle or something)
