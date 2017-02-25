"use babel"

const findAbsolute = function findAbsolute(path, currentObj) {
/* (Str, Obj) -> Obj
*
* `remainingPath` takes the form of:
*     string id of board group (language) + "/" +
*     string id of board (category) + "/" +
*     string id of panel (specific)
* Q: Does the incoming string need to specify all the way
* down to a panel, or just to whatever level it wants?
* That would just go to a random panel. Is there a use for that?
*/
  let final = currentObj;
  const directions = path.split('/');

  if (directions.length < 3 ) {
    console.warn("You haven't specified your path all the way down. The user will be navigated to whatever panel was last shown in this board or board group. Your path: \"" + path + "\".")
  } else if (directions.length > 3) {
    console.error("You've included too many items in your path. You can only name a board group, a board, and then a panel. You don't need to include `osk` itself if that's the confusing factor. Your path: \"" + path + "\".")
    return final  // Q: What would be apropriate to return here?
  }

  // Temporary till...? Pass in osk?
  // Need osk to find children for absolute path
  let osk = currentObj,
  parent = currentObj;
  while (parent.parent !== null) {
    parent = parent.parent
    osk = parent
  }

  let child = osk, found = false;
  for (let parti = 0; parti < directions.length; parti++) {
    let pathPart = directions[parti]
    // Just in case pathPart is an empty string or something crazy like that
    if (pathPart !== '') {
      child = child.get(pathPart)
      found = true
    }
  }

  // Don't return osk, that would be silly... or would it?
  if (!found) child = currentObj

  return child;
}; // findAbsolute


export var findPathTarget = function findTarget(remainingPath, currentObj) {
/* (Str, Obj) -> Obj
*
* Recursive??!!?! (only for relative path)
* TODO: Relative pahts work by reduction. Remove and then
* retrieve one part of path at a time, working out from the inside.
* Absolute path goes to top level and works its way down. No
* recursion necessary
*/
  // Q: Show current obj too?
  if (remainingPath === '' || remainingPath === '/') {
    currentObj.view.show()
    return currentObj
  }

  let final = currentObj,
  type = 'absolute';

  // TODO: Always add period to relative path before passing it on
  if (remainingPath[0] === '.') type = 'relative'

  if (type === 'absolute') {
    final = findAbsolute(remainingPath, currentObj)
  } else {
    console.warn("Finding targets through relative paths is not yet implemented, so you'll have to suck it up and go with an absolute path for now. Your path was \"" + remainingPath + "\".")
    final = null
    // final = findRelative(remainingPath, currentObj)
  }

  if (final && final.view.show ) final.view.show() // TODO: Change to x.show() instead
  else console.error("Your path was funky. Maybe that child doesn't exist in this parent or that parent doesn't exist for that child. Your path: \"" + remainingPath + "\".")

  return final;
};  // findPathTarget

export default findPathTarget;
