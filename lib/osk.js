'use babel';

import { CompositeDisposable } from 'atom';
import OskObj from './osk-obj.js';

export default {

  subscriptions: null,

  initialize(state) {
    // Pull in other files with their data
  },

  activate(state) {

    // TODO: Make an external way to do reset just in case people mess around with the files
    let clear = true; // debugging to reset data to defaults

    let osk = null

    if (state && !clear) osk = this.osk = atom.deserializers.deserialize(state)
    else osk = this.osk = new OskObj(require('./config/serializable.js'))

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'osk:toggle': () => this.toggle()
    }))
  },

  deactivate() {
    this.subscriptions.dispose()
    this.osk.view.destroy() // TODO - test
  },

  serialize() {
    return this.osk.serialize()
  },

  deserializeOSK(deserializationObject) {
    // console.log("deserialize -->", deserializationObject.data)
    return new OskObj(deserializationObject.data)
  },

  toggle() {
    this.osk.toggle();
    return this;
  }
}
