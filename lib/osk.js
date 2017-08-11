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
    let triggerAutocompleteRelease = function(e, eStr, extraStr=""){
      if (osk.keyActive) {
        osk.emitter.emit(eStr, [e, osk])
        osk.activeAutocomplete.release(e, "cancel-osk" + extraStr)
      }
    }

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    // https://gist.github.com/ardcore/9262498 vvv
    // 'container:active-pane-item-changed' or 'pane:active-item-changed'?
    this.subscriptions.add(atom.workspace.onDidChangeActiveTextEditor(
      function changeEditorRelease(e){triggerAutocompleteRelease(e, "changedEditor")}
    ))
    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {'osk:toggle': () => this.toggle()}))
    this.subscriptions.add(atom.commands.add('atom-text-editor', {
      'core:undo': function undoRelease(e) {triggerAutocompleteRelease(e, "changedEditor", "-undo")}
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
