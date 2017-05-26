"use babel"

// Compose
import buildBase from "../components/base-props"

/**
* (Str, OskObj, Object) -> UserSettings
*
*/
export default class UserSettings {
  constructor(osk, parent, config) {
    this.config = config
    this.osk = osk
    // parent should just be osk...?
    this.view = osk.view.config

    this.debug = new DebugSettings(osk, parent, config.debug)
    // this.styles = new StylesSettings(osk, parent, config.styles)
    // this.snippets = new SnippetsSettings(osk, parent, config.snippets)
  }

  saveSetting(type, name, value) {
    this[type].save(name, value)
    // somehow send to view? or does view take care of that businesssss....??
    // no we gotta do it in here in case it gets changed somewhere else...maybe
  }
}
