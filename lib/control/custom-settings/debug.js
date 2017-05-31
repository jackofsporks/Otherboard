"use babel"

// Compose
import buildBase from "../../components/base-props"

/**
* (Str, OskObj, Object) -> DebugConfig
*
*/
export default class DebugConfig {
  constructor(osk, parent, config) {
    this.config = config
    this.osk = osk
    this.parent = parent
    this.view = parent.view

    for (let name in config) {
      let value = config[name]
      view.set("debug", name, value)
    }
  }

  save(name, value) {
    // TODO validation
    this["save_" + name](value)
    // somehow send to view? or does view take care of that businesssss....??
    // no we gotta do it in here in case it gets changed somewhere else...maybe
    // TODO emit event
  }

  save_reset(value) {
    if (typeof value !== "boolean") {
      throw new TypeError("Tried to assing non-boolean to \"reset osk to default values\" config property.")
    } else  this.config.reset = value
  }
}
