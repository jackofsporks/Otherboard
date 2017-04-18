#1:

```js
deserialize(){
  key.activate = keyfuncts[ data.functName ];
}
```

##Pros:
- Functions can execute in their own context, refer to each other, etc.
##Cons:
- Hard to reference just by strings - may have to build a way to dig down into our existing objects, all of which will have to be imported into the file.
##Options:
- One file with all functions by... keyName? keyFunctName?
###Pros:
- all in one file
 - no digging for objects
 - no importing all the right files
###Cons:
- Not with the key data/definition. Confusion ensues!

------------------------------------

#2:
- stringify!

##Pros:
- No files will have to be imported, no objects will have to be traced
##Cons:
- Each function is isolated in its context. Every piece of data will have to be passed in

------------------------------------

#3:
- Completely change what is serialized and keep everything else for runtime
##Pros:
- Wouldn't have to deal with the rest of this bs
- Much less data to serialize/deserialize
##Cons:
- Not as flexible for the user
###What do we want the user to be able to persist?
- Start a session with the panel they were last using *(obj.savedPath - pathsObj?)*
 - Including key searches (straight up serialization... path to key?) *(????)*
- Awareness of which panels were visible in various board groups and boards *(same)*
- History of navigation *(history obj)*
- History of position in the middle of a key operation that will lead to other panels *(pass callback to key func?????)*
- Settings (style and such) *(settings obj)*
- Ultimately:
 - Create custom keyboards
  - Custom keys from scratch (select and drag in text to create snippet...cursor placements?)
  - Custom arrangements for existing panels
  - Custom panels from scratch
  - Custom hierarchy placement
  - Custom key icons
 - Custom styles
 - Custom animations?

------------------------------------

#Conclusion

Option 3, serialize an object like this:

```js
  {
    paths: {}, // serialized in each object
    history: [],
    settings: {}
  }
```

#Debrief
Did not do it that way! See current files!
