'use babel';

import { CompositeDisposable } from 'atom';

// DATA
import Data from './data/data.js';
import OskObj from './osk-obj.js';
import BoardGroup from './board-group.js';
import Board from './board.js';
import Panel from './panel.js';
import Key from './key.js';
// DOM
import OskView from './view/osk-view';

// For realz
import findPathTarget from './utils/find-path-target.js';

export default {

  oskView: null,
  subscriptions: null,

  initialize(state) {
    // console.log('Initialize:', JSON.parse(JSON.stringify(state)));
    // Pull in other files with their data
  },

  activate(state) {
    // console.log('state:', state);

    let clear = true; // debugging

    const data = new Data();
    console.log('original data:', data);

    // // TODO: pass in state, but with data as backup, and do
    // // all the building there
    // let osk = this.osk = state.osk || new OskObj(data);

    if (state.osk && clear !== true) {
      this.osk = atom.deserializers.deserialize(state);
    } else {
      this.osk = new OskObj(data);
    }

    let osk = this.osk;


    const groups = data.children;
    for (let groupi = 0; groupi < groups.length; groupi++) {
      let groupData = groups[groupi];
      let group = new BoardGroup(groupData, osk);
      osk.add(group);

      const boards = groupData.children;
      for (let boardi = 0; boardi < boards.length; boardi++) {
        let boardData = boards[boardi];
        let board = new Board(boardData, group);
        group.add(board);

        // for panels, when that's ready
        const panels = boardData.children;
        for (let paneli = 0; paneli < panels.length; paneli++) {
          let panelData = panels[paneli];
          let panel = new Panel(panelData, board);
          board.add(panel);

          const rows = panelData.children;
          for (let rowi = 0; rowi < rows.length; rowi++) {
            let rowData = rows[rowi],
                keys    = rowData.content;

            let row = [];
            for (let keyi = 0; keyi < keys.length; keyi++) {
              let keyData = keys[keyi];
              let key = new Key(keyData, panel);
              row.push(key);
              // Adds `key` to panel's children so that it's easier for
              // navigation keys to find their target
              panel.add(key);
            } // keys

            panel.rows.push(row);
          } // rows

        } // panels

      } // boards

    } // groups

    console.log('osk:', osk);

    const view = new OskView(state.oskViewState, osk);

    // // // FOR TESTING PURPOSES
    // if (osk.activeChild) {osk.activeChild.show()}
    if (osk.activePath) {
      console.log('something is active!', osk.activePath)
        osk.setActivePanel(osk.activePath);
    }
    else {
      console.log('nothing is active :(', osk.activePath)
      osk.setActivePanel('HTML/Elements/Home_Page')
    }

    osk.activeChild.show();
    // // TESTING OVER

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'osk:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.subscriptions.dispose()
    // this.oskView.destroy()
  },

  serialize() {
    // console.log('serializing:', this.oskView)
    // console.log('serialize:', this.osk.serialize());
    // console.log('serialize:', JSON.parse(JSON.stringify(this.osk)));
    return this.osk.serialize()
    // return this.serialize();
  },

  deserializeOSK(oldData) {
    // console.log('des:', oldData);
    return new OskObj(oldData)
  },

  toggle() {
    this.osk.toggle();
    return this;
  }

};
