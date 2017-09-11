'use babel';

// vars must be named the same thing in the import
// as they are in the export
import keyFuncs from '../utils/key-funcs.js';

const keyConstructor = atom.keymaps.constructor;

export default class DefaultKeys {
// export let defaultKeys = {}
  constructor() {

    const k = this;  // "k" for "keyboard"
    const acceptableEvents = ["click", "touchup"]

    const revUp = function(ev){
      // TODO check osk.activeKey !== null as well
      if (ev && !acceptableEvents.includes(ev.type)) {console.log("type0 -->", ev.type); return false;}
      const editor = atom.workspace.getActiveTextEditor()
      atom.views.getView(editor).focus()
      console.log("type3 -->", ev.type);
      return true
    }

    k.space = {
      id: 'space', displayName: 'space', toSimulate: ' ',
      classes: ['snippet', 'alphanumeric', 'space'],
      activate: function(ev, kView) {
        console.log("spaced 1", ev);
        if (!revUp(ev)) return
        // tab works fine in here!!!! just not spaces!!!!
        // NEXT pls make spc wrk now /\ T_T

        const keyConstructor = atom.keymaps.constructor;
        const evt = keyConstructor.buildKeydownEvent('tab', {target: document.activeElement});
        return atom.keymaps.handleKeyboardEvent(evt);

        // let evt = null
        // let evt = new KeyboardEvent("keypress", {key: "space", code: 32, keyCode: 32, which: 32})
        // document.activeElement.dispatchEvent(evt)
        // evt = new KeyboardEvent("keydown", {key: "space", code: 32, keyCode: 32, which: 32})
        // document.activeElement.dispatchEvent(evt)
        // evt = new KeyboardEvent("keyup", {key: "space", code: 32, keyCode: 32, which: 32})
        // document.activeElement.dispatchEvent(evt)
        // evt = new KeyboardEvent("keydown", {key: " ", code: 32, keyCode: 32, which: 32})
        // document.activeElement.dispatchEvent(evt)
        // evt = new KeyboardEvent("keyup", {key: " ", code: 32, keyCode: 32, which: 32})
        // document.activeElement.dispatchEvent(evt)
        // evt = new KeyboardEvent("keydown", {key: 32, code: 32, keyCode: 32, which: 32})
        // document.activeElement.dispatchEvent(evt)
        // evt = new KeyboardEvent("keyup", {key: 32, code: 32, keyCode: 32, which: 32})
        // document.activeElement.dispatchEvent(evt)
        console.log("spaced II -->", evt);

        // let evt = document.createEvent("KeyboardEvents")
        // evt.initKeyboardEvent("keypress", {key: " "})
        // selectedElement.dispatchEvent(evt)
        // evt = document.createEvent("KeyboardEvents")
        // evt.initKeyboardEvent("evtup", true, true, window)
        // selectedElement.dispatchEvent(evt)

        // const keyConstructor = atom.keymaps.constructor;
        // const evt1 = keyConstructor.buildKeypressEvent("space", {target: document.activeElement});
        // console.log("spaced III -->", evt1);
        // return atom.keymaps.handleKeyboardEvent(evt1);
        // const evt2 = keyConstructor.buildKeyupEvent("space", {target: document.activeElement});
        // console.log("spaced III -->", evt2);
        // return atom.keymaps.handleKeyboardEvent(evt2);
      },

      // activate: function(ev, kView){
      //   if (!revUp(ev)) return
      //   const func = keyFuncs.pureSimulation.bind(kView.source)
      //   func(ev, kView)
      // },
      tags: ['alphabetical', 'space', 'whitespace']
    }

    k.delete = {
      // TODO: How is a key's name being inserted into key, and is it flexible enough for inserting icons
      id: 'delete', displayName: '<', toSimulate: null,
      classes: ['action', 'all', 'delete'],
      activate: function(ev, kView) {
        if (!revUp(ev)) return
        // 'delete' event actually does backspace o.O
        const keyConstructor = atom.keymaps.constructor;
        const evt = keyConstructor.buildKeydownEvent('backspace', {target: document.activeElement});
        return atom.keymaps.handleKeyboardEvent(evt);
      },
      tags: ['action', 'delete']
    }

    // TODO: Shift tab???
    k.tab = {
      id: 'delete', displayName: '>|', toSimulate: null,
      classes: ['action', 'all', 'tab'],
      activate: function(ev, kView) {
        if (!revUp(ev)) return
        const keyConstructor = atom.keymaps.constructor;
        const evt = keyConstructor.buildKeydownEvent('tab', {target: document.activeElement});
        return atom.keymaps.handleKeyboardEvent(evt);
      },
      tags: ['action', 'tab']
    }

    k.enter = {
      id: 'enter', displayName: 'enter', toSimulate: null,
      classes: ['action', 'all', 'return', 'enter'],
      activate: function(ev, kView) {
        if (!revUp(ev)) return
        const keyConstructor = atom.keymaps.constructor;
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
      activate: function(ev, kView) {
        if (!revUp(ev)) return
        const keyConstructor = atom.keymaps.constructor;
        const evt = keyConstructor.buildKeydownEvent('enter', {target: document.activeElement});
        return atom.keymaps.handleKeyboardEvent(evt);
      },
      tags: ['action', 'return', 'enter', 'whitespace']
    }

    // TODO: How to do id's? there may be multiples of these on a page
    k.blank = {
      id: 'blank', displayName: ' ', toSimulate: '',
      classes: ['blank'],
      activate: function(ev, kView){if (!revUp(ev)) return},
      tags: ['blank']
    }

    return k
  } // constructor
} // DefaultKeys
