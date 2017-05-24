"use babel"

import findPathTarget from "./utils/find-path-target.js"

export default class OSKHistory {
/* (Object) -> History
*
* The top-most object containing everything else
*/
  constructor(source, osk) {
    let hist = this
    hist.data = source.data.slice(0)
    hist.position = source.position
    hist.osk = osk
    // console.log("making history -->", hist.position, hist.data, source)
    return hist
  }

  back() {
    let hist = this

    let oldPos = hist.position
    let tempPos = oldPos - 1
    hist.position = Math.max(0, tempPos)

    // console.log("postition (2) -->", hist.position, oldPos === hist.position)
    // console.log("hist at back -->", hist)

    // get newest panel and show it
    // Panel will take care of not showing the same panel twice
    hist.show(hist.data[hist.position])

    // QUESTION animate differently if history change?
    return hist
  }

  forward() {
    let hist = this

    let oldPos = hist.position
    let tempPos = oldPos + 1
    hist.position = Math.min((hist.data.length - 1), tempPos)

    // console.log("postition (2) -->", hist.position, oldPos === hist.position)
    // console.log("hist at forward -->", hist)

    // get newest panel and show it
    // Panel will take care of not showing the same panel twice
    hist.show(hist.data[hist.position])

    // QUESTION animate differently if history change?
    return hist
  }

  newRecord(newPanelPath) {
    // console.log("record forward -->", newPanelPath)
    let hist = this
    // console.log("hist at newRecord -->", hist)

    let old = hist.data[hist.position + 1]

    // Get rid of everything in front of this history position
    hist.data.splice(hist.position + 1)
    // console.log("hist after newRecord splice -->", hist.position, hist.data.slice(0))
    hist.data.push(newPanelPath)
    // console.log("hist after newRecord push -->", hist.position, hist.data.slice(0))

    hist.position = Math.min((hist.data.length - 1), (hist.position + 1))

    return hist
  }

  // QUESTION is this where we should keep the lastOpenPanel for everything, though not the individual ones? Does that actually make sense? Keep them in separate places?!?!
  show(path) {
    const hist = this
    const target = findPathTarget(path, hist.osk.children[0])
    target.show(true)
    return target
  }

  handlePanelOpened(path, wasFromHistory) {
    const hist = this
    if (!wasFromHistory) hist.newRecord(path)
    if (hist.position === 0) hist.view.disable("back")
    else hist.view.enable("back")
    if (hist.position === (hist.data.length - 1)) hist.view.disable("forward")
    else hist.view.enable("forward")
  }

}  // History
