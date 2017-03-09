'use babel';

import Parent from './parent.js';

// export default class OSKObj {
export default class OSKObj extends Parent {
/* (None) -> OSKObj
*
* The top-most object containing everything else
*/

  constructor(configData) {
    // // Base: id, type, displayName, parent, node, tags, children,
    // // destroy
    // // Parent: add, remove, get/getBy
    super('OSK', null);

    const osk = this;
    osk.isOpen = false;
    osk.id = '0';
    const data = osk.data = configData;

    // const groups = data.children;
    // for (let groupi = 0; groupi < groups.length; groupi++) {
    //   let groupData = groups[groupi];
    //   let group = new BoardGroup(groupData.displayName, osk);
    //   osk.add(group);
    //
    //   const boards = groupData.children;
    //   for (let boardi = 0; boardi < boards.length; boardi++) {
    //     let boardData = boards[boardi];
    //     let board = new Board(boardData.displayName, group);
    //     group.add(board);
    //
    //     // for panels, when that's ready
    //     const panels = boardData.children;
    //     for (let paneli = 0; paneli < panels.length; paneli++) {
    //       let panelData = panels[paneli];
    //       let panel = new Panel(panelData.displayName, board);
    //       board.add(panel);
    //
    //       // const keys = panelData.children;
    //       // for (let keyi = 0; keyi < keys.length; keyi++) {
    //       //   let keyData = keys[keyi];
    //       //   let key = new Key(keyData.displayName, panel);
    //       //   panel.add(key);
    //       // } // keys
    //
    //       const rows = panelData.children;
    //       for (let rowi = 0; rowi < rows.length; rowi++) {
    //         let rowData = rows[rowi],
    //             keys    = rowData.content;
    //
    //         let row = [];
    //         for (let keyi = 0; keyi < keys.length; keyi++) {
    //           let keyData = keys[keyi];
    //           let key = new Key(keyData, panel);
    //           row.push(key);
    //           // Adds `key` to panel's children so that it's easier for
    //           // navigation keys to find their target
    //           panel.add(key);
    //         } // keys
    //
    //         panel.rows.push(row);
    //       } // rows
    //
    //     } // panels
    //
    //   } // boards
    //
    // } // groups

  }  // constructor()

  // Returns an object that can be retrieved when package is activated
  serialize() {
    return {
      deserializer: 'OSK',
      data: this.data
    };
  }

  // This method will be called when the class
  // is restored by Atom.
  deserialize (data) {
    return new OSKObj(data);
  }

  open() {
    if ( !this.isOpen ) {
      this.view.show();
      this.isOpen = true;
    }
    return this;
  }

  close() {
    if ( this.isOpen ) {
      this.view.hide();
      this.isOpen = false;
    }
    return this;
  }

  toggle() {
    if (this.isOpen) {this.close();}
    else {this.open();}
  }

}  // OSKObj
