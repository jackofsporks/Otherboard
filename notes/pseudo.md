#OSK

## Basic Objects
- OSK
- Board
- Panel Group
- Panel
- Key

Each a node module?

## Prototype Objects
``` js
var Base = {
  id: str,
  parent: (terminates at null),
  show: func,  // show self? show children? Include showParent()??
  hide: func,  // same question
  displayName: str,
  (children): (terminates at null)
  addSelf: func,  // ?? addToParent
  destroy: func,  // ?? Destroy self
  set: func,  // ??
}

var DOMObj = {
  nodes: {
    tab: JS DOM,
    container: JS DOM
  },  // created by another process
}

var NotKey = {
  addChild: func,
  removeChild: func,
  get: func,  // get children
  getBy: func,  // ??
}
```

## Specific Objects
Key needs:
- snippet func  // insert
- nav func  // goTo
- cursor func  // for insert

## Keys from Strings
### Individual Panels
``` js
// Option 1
[
  'a b c d e f g'.split(' '),
  '[div](<div>$@$</div>$@$) [a](<a></a>) [span]'.split(' '),
  ['[tab](\t)', '[space]( )', '{a link}(../HTML/Attributes)']
  // tab space link
]
// Option 2
[
  [
    {name: "name", id:"id"},
    {name: "name", id:"id"}
  ]
]
```

### Global All Keys Obj
``` js
// Option 3
var allKeys = {
  divTag: {},
  aTag: {},
  classAttr: {},
}

var k = allKeys;
[
  [
    k.divTag, k.aTag
  ]
]
```

## Hierarchy

### Logic
.osk (inherit from Parent > Base)
..board groups (inherit from Parent > Base)
....boards (inherit from Parent > Base)
......panels (inherit from Base)
........keys (inherit from Base)

_Why this way?_ Panels can easily access their keys. Por example:
- Assigning shortcut keys for keyboard access to virtual keys
- There are more, but I can't remember them right now

We'll have to double up on key storage in logic. We need the structure of the rows and columns in logic as well, so /actual/ keys (with functions) can be placed in the right places.

### Data -> View
.osk
..board groups
....boards
......panels (no display name needed)
........rows (no display name needed)
..........rows/columns/keys

### Pseudo
***Data***
content[
{column}, {row}, {key}
]

***Use Data to Construct Nodes***
``` js
for item in content
  if row
    for item in row  // <- indication we need a function for infinite recursion possibilities
  if column
    for item in column
  if key
```

|
v

``` js
function iterate(remainder, parentNode) {
  if remainder has content
    for item in content
      if not key
        if row
          node = rowNode // including classes (horizontal)
        if column
          node = columnNode // including classes (vertical)
        parentNode.add( node )
        iterate( itemContent, node )

      else if key
        node = keyNode
        parenNode.add( node )
}
```

or

``` js
function iterate(remainder, parentNode) {
  // if remainder has content ( no item without content is ever handed in )
    for item in content

      if row
        node = rowNode // including classes (horizontal)
      if column
        node = columnNode // including classes (vertical)
      if key
        node = keyNode
      parenNode.add( node )

      if item has content
        iterate( itemContent, node )
}
```


# Composition
## Objects
### Base
- Properties
  - config
  - id
  - displayName
  - parent
  - node (xxx --> view)
  - tags
  - classes
  - children (xxx --> Parent)
  - pathTo
- Methods
  - show
  - hide
  - destroy
  - set
### Parent
- Properties
  - scripts
  - requires
  - children
- Methods
  - NewChild
  - add
  - remove
  - get
  - getBy
  - saveOpenPanel
### OSK
- Properties
  - isOpen
  - type (unique)
  - history
- Methods
  - serialize
  - minimize
  - maximize
  - open
  - close
  - toggle
  - saveReset
  - handleHistory
  - saveOpenPanel (unique)
### Board Groups
- Properties
  - type (unique)
### Boards
- Properties
  - type (unique)
### Panels
- Properties
  - type (unique)
  - config (xxx --> Base)
  - helpers (x? parent has stuff)
  - requires (x? parent has stuff)
  - content
- Methods
  - show (unique)
  - getKeySource
### Keys
- Properties
  - type
  - toSimulate
  - path
  - activate
### Rows/Columns
### History
- Properties
  - data
  - position
  - osk
- Methods
  - back
  - forward
  - newRecord
  - show (showPanel)
### Config?

<!-- TODO -->
## View
### OSK
### Board Groups
### Boards
### Panels
### Keys
### Rows/Columns
### History
### Config?


## Navigation Sequence Shorthand/Objects
|<input>| --> <input type="$"> -->
|button| --> <input type="button"> -->
|value| --> <input type="button" value="$"> -->
|abc|

|<img>| --> <img src=""> -->
|abc|??|file extensions|.jpg| (dynamically added link to file extensions? (depending on where navigation came from)) (Just image extensions? Gray out others? Use searching functionality which does not exist????)

Any element insertion leads directly to attributes?

Maybe leave complex navigation sequences for partII of the project... :'(
