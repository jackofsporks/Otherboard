'use babel';

import { CompositeDisposable } from 'atom';
import OskObj from "./control/osk"

export default {

  subscriptions: null,

  config: { // TODO do config: require("./data/whatever/config")
    debug: {
      type: "object",
      properties: {
        resetOnStartup: {
          type: "boolean", default: false,
          description: "Reset OSK settings to defaults the next time atom is re-opened/reloaded"
        }
      }
    },
    tester: {
      type: "object",
      properties: {
        test1: {
          type: "boolean", default: false
        },
        test2: {
          type: "boolean", default: false
        }
      }
    }
  },

  initialize(state) {
    // Pull in other files with their data
  },

  activate(state) {

    // TODO: Make an external way to do reset just in case people mess around with the files
    let reset = false; // debugging to reset data to defaults

    let osk = null
    console.log("state on activate -->", state)
    if (state && !reset && !atom.config.get("osk.debug.resetToDefaultsOnStartup")) osk = this.osk = atom.deserializers.deserialize(state)
    else osk = this.osk = new OskObj(require("./config/serializable.js"))

    // atom.packages.activePackages["autocomplete-plus"].mainModule.autocompleteManager
    // .suggestionsList
    // .displaySuggestions
    // .findSuggestions
    // .hideSuggestionList
    // .getSuggestionsFromProviders({editor: this.editor, bufferPosition, scopeDescriptor, prefix, activatedManually})

    function test(e) {
      console.log("testing!", osk.keyActive, e)
      // e.abortKeyBinding()
      if (osk.keyActive) {
        osk.emitter.emit("undo", [e, osk])
        osk.activeAutocomplete.release(e, "cancel-osk")
      }
    }

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'osk:toggle': () => this.toggle(),
    }))
    this.subscriptions.add(atom.commands.add('atom-text-editor', {
      'core:undo': (e) => test(e)
    }))
  },

  deactivate() {
    this.subscriptions.dispose()
    this.osk.view.destroy() // TODO - test
    this.osk.deactivate()
  },

  serialize() {
    return this.osk.serialize()
  },

  deserializeOSK(deserializationObject) {
    return new OskObj(deserializationObject.data)
  },

  toggle() {
    this.osk.toggle();
    return this;
  }
}
