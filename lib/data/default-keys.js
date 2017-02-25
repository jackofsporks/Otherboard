'use babel';

// vars must be named the same thing in the import
// as they are in the export
import keyFuncs from '../utils/key-funcs.js';

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
      activate: function() {
        // 'delete' event actually does backspace o.O
        const evt = keyConstructor.buildKeydownEvent('backspace', {target: document.activeElement});
        return atom.keymaps.handleKeyboardEvent(evt);
      },
      tags: ['action', 'delete']
    }

    // TODO: Shift tab???
    k.tab = {
      id: 'delete', displayName: '|>', toSimulate: null,
      classes: ['action', 'all', 'tab'],
      activate: function() {
        const evt = keyConstructor.buildKeydownEvent('tab', {target: document.activeElement});
        return atom.keymaps.handleKeyboardEvent(evt);
      },
      tags: ['action', 'tab']
    }

    k.enter = {
      id: 'enter', displayName: 'enter', toSimulate: null,
      // id: 'enter', displayName: '|->', toSimulate: null,
      classes: ['action', 'all', 'return', 'enter'],
      activate: function() {
        const evt = keyConstructor.buildKeydownEvent('enter', {target: document.activeElement});
        return atom.keymaps.handleKeyboardEvent(evt);
      },
      tags: ['action', 'return', 'enter', 'whitespace']
    }

    // Basically a clone of k.enter
    k.return = {
      id: 'return', displayName: 'return', toSimulate: null,
      // id: 'return', displayName: '|->', toSimulate: null,
      classes: ['action', 'all', 'return', 'enter'],
      activate: function() {
        const evt = keyConstructor.buildKeydownEvent('enter', {target: document.activeElement});
        return atom.keymaps.handleKeyboardEvent(evt);
      },
      tags: ['action', 'return', 'enter', 'whitespace']
    }

    // TODO: How to do id's? there may be multiples of these on a page
    k.blank = {
      id: 'blank', displayName: ' ', toSimulate: '',
      classes: ['blank'],
      activate: function(){},
      tags: ['blank']
    }

  } // constructor
} // EnglishKeys
