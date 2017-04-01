'use babel';

import { CompositeDisposable } from 'atom';
import OskObj from './osk-obj.js';

export default {

  oskView: null,
  subscriptions: null,

  initialize(state) {
    // console.log('Initialize:', JSON.parse(JSON.stringify(state)));
    // Pull in other files with their data
  },

  activate(state) {

    // TODO: Make an external way to do reset just in case people mess around with the files
    // Rewrite the defaults.js from the data.js?????
    let clear = true; // debugging to reset data to defaults

    let osk = null

    if (state && !clear) osk = this.osk = atom.deserializers.deserialize(state)
    else osk = this.osk = new OskObj(require('./config/serializable.js'))

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    // Register command that toggles this view
    // TODO: Put "keypresses" in here as well???
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'osk:toggle': () => this.toggle()
    }))
  },

  deactivate() {
    this.subscriptions.dispose()
    // this.oskView.destroy()
  },

  serialize() {
    // // NOTE: we cannot serialize because we have to work out how to deserialize osk into osk.data (or into its own thing with functions as strings, etc.), which is what is being sent to here.
    return this.osk.serialize()
    // // return this.serialize();
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
