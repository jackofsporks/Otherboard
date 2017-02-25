#OSK

##Basic Objects
- OSK
- Board
- Panel Group
- Panel
- Key

Each a node module?

##Prototype Objects
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

##Specific Objects
Key needs:
- snippet func  // insert
- nav func  // goTo
- cursor func  // for insert

##Keys from Strings
###Individual Panels
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

###Global All Keys Obj
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
