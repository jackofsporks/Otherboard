'use babel';

export default utils = {};

utils.addNode = function (tagName, textContent, classNames, parent) {
/* (Str, Str, [Str], DOM) -> DOM
*
* Shorthand for creating and adding a node to the
* given parent node.
* Returns the created node.
*/
  let node = document.createElement(tagName);
  if (textContent) { node.textContent = textContent; }

  if (classNames) {
    for (let classi = 0; classi < classNames.length; classi++) {
      node.classList.add(classNames[classi]);
    }
  }
  parent.appendChild(node);
  return node;
}  // addNode
