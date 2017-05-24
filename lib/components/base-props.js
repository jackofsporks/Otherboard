"use babel"

export default buildBase = function (caller, osk, parent, config, props) {

  const automaticProps = ["config", "parent", "osk"];
  // Obj that can save itself??!?! <-- what did that mean?!
  if (props.includes("osk")) caller.osk = osk
  if (props.includes("parent")) caller.parent = parent
  if (props.includes("config")) caller.config = config

  // calculate uid here that can be unique for each user and permanent for a board/thing

  for (let pi = 0; pi < props.length; pi++) {
    let prop = props[pi]
    // If it hasn't been assigned above already, do the deed
    if (!automaticProps.includes(prop)) caller[prop] = config[prop]
  }

  return caller
} // buildBase
