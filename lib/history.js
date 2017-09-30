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
    return hist
  }

  back() {
    let hist = this

    let oldPos = hist.position
    let tempPos = oldPos - 1
    hist.position = Math.max(0, tempPos)
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
    // get newest panel and show it
    // Panel will take care of not showing the same panel twice
    hist.show(hist.data[hist.position])

    // QUESTION animate differently if history change?
    return hist
  }

  newRecord(newPanelPath) {
    let hist = this

    let old = hist.data[hist.position + 1]
    // Get rid of everything in front of this history position
    // NOTE doesn't get rid of history at start because of how osk is calling it
    hist.data.splice(hist.position + 1)
    hist.data.push(newPanelPath)
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
    // I get we'll assume this is a valid path...
    const target = findPathTarget(path, hist.osk.children[0])
    hist.osk.active.panel = target // Target may not always be a panel in the future... right???

    if (!wasFromHistory) hist.newRecord(path)
    if (hist.position === 0) hist.view.disable("back")
    else hist.view.enable("back")
    if (hist.position === (hist.data.length - 1)) hist.view.disable("forward")
    else hist.view.enable("forward")

    return !wasFromHistory
  }

}  // History
