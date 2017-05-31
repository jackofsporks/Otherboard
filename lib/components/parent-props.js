"use babel"

export default assignParentProps = function (caller, osk, contents, props, ChildConstructor) {
  if (props.includes("children")) caller.children = []
  if (props.includes("ChildConstructor")) caller.ChildConstructor = ChildConstructor

  if (props.includes("addChildren")) {
    caller.addChildren = (function () {
      const parent = this
      const childrenData = parent.contents.children
      if (!childrenData) {return parent}
      for (let name in childrenData) {
        // this = group, child = board
        if (childrenData.hasOwnProperty(name)) {
          // build child using the contents data and add it to yourself
          parent.add(childrenData[name])
        }
      }
      return parent
    }).bind(caller)
  }

  if (props.includes("add")) {
    caller.add = (function (childContents) {
      // TODO: Set off event when child added so that view can add it to the DOM?
      const parent = this
      const child = new parent.ChildConstructor(osk, parent, childContents)
      parent.children.push(child)
      return parent
    }).bind(caller)
  }

  if (props.includes("get")) {
    caller.get = (function (id) { // add console logs in here
      // Gets a child with a matching id
      const parent = this
      const children = parent.children
      let child = null
      let cni = 0
      while (!child && cni < children.length) {
          const currChild = children[cni]
          if (currChild.id === id) {child = currChild}
          cni += 1
      }
      return child;
    }).bind(caller)
  }

  if (props.includes("getBy")) {
    caller.getBy = (function (id) { // add console logs in here
      // Gets a child with a matching id
      const parent = this
      console.log("getBy called, but this function's logic isn't written yet!")
      return parent
    }).bind(caller)
  }

  return caller
} // assignParentProps
