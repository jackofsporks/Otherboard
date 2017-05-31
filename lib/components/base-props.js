"use babel"

export default baseProps = function (caller, osk, parent, contents, props) {

  const automaticProps = ["contents", "parent", "osk"];
  // Obj that can save itself??!?! <-- what did that mean?!
  if (props.includes("osk")) caller.osk = osk
  if (props.includes("parent")) caller.parent = parent
  if (props.includes("contents")) caller.contents = contents

  // calculate uid here that can be unique for each user and permanent for a board/thing

  for (let pi = 0; pi < props.length; pi++) {
    let prop = props[pi]
    // If it hasn't been assigned above already, do the deed
    if (!automaticProps.includes(prop)) caller[prop] = contents[prop]
  }

  return caller
} // baseProps
