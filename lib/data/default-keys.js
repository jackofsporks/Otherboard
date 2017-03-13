'use babel';

// vars must be named the same thing in the import
// as they are in the export
import keyFuncs from '../utils/key-funcs.js';
// let vm = require('vm')

const keyConstructor = atom.keymaps.constructor;

export default class DefaultKeys {
  constructor() {

    const k = this;  // "k" for "keyboard"

    k.space = {
      id: 'space', displayName: 'space', toSimulate: ' ',
      classes: ['snippet', 'alphanumeric', 'space'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'space', 'whitespace']
    }

    k.delete = {
      // TODO: How is a key's name being inserted into key, and is it flexible enough for inserting icons
      id: 'delete', displayName: '<', toSimulate: null,
      classes: ['action', 'all', 'delete'],
      activate: function(key) {
        // 'delete' event actually does backspace o.O
        const keyConstructor = atom.keymaps.constructor;
        const evt = keyConstructor.buildKeydownEvent('backspace', {target: document.activeElement});
        return atom.keymaps.handleKeyboardEvent(evt);
      },
      tags: ['action', 'delete']
    }

    k.delete.activate = k.delete.activate.toString()


    // TODO: Shift tab???
    k.tab = {
      id: 'delete', displayName: '|>', toSimulate: null,
      classes: ['action', 'all', 'tab'],
      activate: function(key) {
        const keyConstructor = atom.keymaps.constructor;
        const evt = keyConstructor.buildKeydownEvent('tab', {target: document.activeElement});
        return atom.keymaps.handleKeyboardEvent(evt);
      },
      tags: ['action', 'tab']
    }

    k.tab.activate = k.tab.activate.toString()



    k.enter = {
      id: 'enter', displayName: 'enter', toSimulate: null,
      // id: 'enter', displayName: '|->', toSimulate: null,
      classes: ['action', 'all', 'return', 'enter'],
      activate: function(key) {
        const keyConstructor = atom.keymaps.constructor;
        const evt = keyConstructor.buildKeydownEvent('enter', {target: document.activeElement});
        return atom.keymaps.handleKeyboardEvent(evt);
      },
      tags: ['action', 'return', 'enter', 'whitespace']
    }

    k.enter.activate = k.enter.activate.toString()


    // Basically a clone of k.enter
    k.return = {
      id: 'return', displayName: 'return', toSimulate: null,
      // id: 'return', displayName: '|->', toSimulate: null,
      classes: ['action', 'all', 'return', 'enter'],
      activate: function(key) {
        const keyConstructor = atom.keymaps.constructor;
        const evt = keyConstructor.buildKeydownEvent('enter', {target: document.activeElement});
        return atom.keymaps.handleKeyboardEvent(evt);
      },
      tags: ['action', 'return', 'enter', 'whitespace']
    }

    k.return.activate = k.return.activate.toString()


    // TODO: How to do id's? there may be multiples of these on a page
    k.blank = {
      id: 'blank', displayName: ' ', toSimulate: '',
      classes: ['blank'],
      activate: function(key){},
      tags: ['blank']
    }

    k.blank.activate = k.blank.activate.toString()

  } // constructor
} // EnglishKeys
