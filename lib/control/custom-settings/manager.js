"use babel"

// NOTE Is this just re-doing the logic atom already does?!??! Is that worth it?!?!?

// Compose
import buildBase from "../../components/base-props"

/**
* (Str, OskObj, Object) -> ConfigManager
*
*/
export default class ConfigManager {
  constructor(osk, parent, config) {
    // this.config = config
    this.osk = osk
    // parent should just be osk...?
    // this.view = osk.view.config

    // atom.config.get("osk")
    this.debug = new DebugSettings(osk, parent, config.debug)
    // this.styles = new StylesSettings(osk, parent, config.styles)
    // this.snippets = new SnippetsSettings(osk, parent, config.snippets)
  }

  saveSetting(path, value) {
    let parts = /^(.+)\.(.+)$/.exec(path)
    if (!parts) {}
    // this[type].save(name, value)
    // somehow send to view? or does view take care of that businesssss....??
    // no we gotta do it in here in case it gets changed somewhere else...maybe
  }
}
