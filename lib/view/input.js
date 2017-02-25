'use babel';

export default class Input {
  constructor(osk) {

    let input = this;

    let node = osk.getElement();

    node.addEventListener('click', function insert(evnt) {
      let target = evnt.target,
          editor = atom.workspace.getActiveTextEditor();

      if (target.tagName === 'OSK-KEY') {
        editor.insertText(target.textContent)
      }
    });

  }  // constructor()
}  // Input
