'use babel';

// TODO Include MDN labels in tags???
// TODO "structure" vs. "structural"
// TODO hashtag (anchors)

// vars must be named the same thing in the import
// as they are in the export (unless it's the default)
import keyFuncs from '../../utils/key-funcs.js';

export default class HtmlElements {
  constructor() {
    // TODO: Hook up with native snippet manager

    const k = this;  // "k" for "keyboard"



    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
    // ~~~~~~~~~~~~~ NAVIGATION ~~~~~~~~~~~~~ //
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //

    /*
    Sectioning/Outline/Layout (sectioning)
    Header/Headings (headings)
    Generic/Containers/Wrappers (generic)
    Embedded/Files (embedded)
    Lists
    Tables
    Document Structure (document-structure)
    Meta (meta)

    Interactive
    Text Stories
    */

    k.elementsHome_nav = {
      id: 'home-page_nav', displayName: 'Home', toSimulate: null,
      classes: ['navigation', 'html'],  // 'link'???
      path: 'HTML/Elements/Home_Page',
      activate: keyFuncs.pureNavigation,
      tags: ['link']
    }
    k.menu_nav = {
      id: 'menu_nav', displayName: 'Menu', toSimulate: null,
      classes: ['navigation', 'html'],  // 'link'???
      path: 'HTML/Elements/Menu',
      activate: keyFuncs.pureNavigation,
      tags: ['link']
    }
    // k.generic_nav = {
    //   id: 'generic_nav', displayName: 'Generic', toSimulate: null,
    //   classes: ['navigation', 'html', 'empty'],  // 'link'???
    //   path: 'HTML/Elements/Generic',
    //   activate: keyFuncs.pureNavigation,
    //   tags: ['link']
    // }
    k.layout_nav = {  // TODO: Better name
      id: 'layout_nav', displayName: 'Layout', toSimulate: null,
      classes: ['navigation', 'html'],  // 'link'???
      path: 'HTML/Elements/Layout',
      activate: keyFuncs.pureNavigation,
      tags: ['link']
    }
    k.headings_nav = {
      id: 'headings_nav', displayName: 'Headings', toSimulate: null,
      classes: ['navigation', 'html'],  // 'link'???
      path: 'HTML/Elements/Headings',
      activate: keyFuncs.pureNavigation,
      tags: ['link']
    }
    // // TODO Just "Form" here???
    // // Interaction/interactive
    // k.interaction_nav = {  // TODO: Better name
    //   id: 'interaction_nav', displayName: 'Interaction', toSimulate: null,
    //   classes: ['navigation', 'html'],  // 'link'???
    //   path: 'HTML/Elements/Interaction',
    //   activate: keyFuncs.pureNavigation,
    //   tags: ['link']
    // }
    k.form_nav = {  // TODO: Better name
      id: 'form_nav', displayName: 'Form', toSimulate: null,
      classes: ['navigation', 'html', 'empty'],  // 'link'???
      path: 'HTML/Elements/Form',
      activate: keyFuncs.pureNavigation,
      tags: ['link']
    }
    // Embedded, Files, Images
    k.embedded_nav = {  // TODO: Better name
      id: 'embedded_nav', displayName: 'Embedded/Files', toSimulate: null,
      classes: ['navigation', 'html'],  // 'link'???
      path: 'HTML/Elements/Embedded',
      activate: keyFuncs.pureNavigation,
      tags: ['link']
    }
    k.lists_nav = {
      id: 'lists_nav', displayName: 'Lists', toSimulate: null,
      classes: ['navigation', 'html'],  // 'link'???
      path: 'HTML/Elements/Lists',
      activate: keyFuncs.pureNavigation,
      tags: ['link']
    }
    k.tables_nav = {
      id: 'tables_nav', displayName: 'Tables', toSimulate: null,
      classes: ['navigation', 'html'],  // 'link'???
      path: 'HTML/Elements/Tables',
      activate: keyFuncs.pureNavigation,
      tags: ['link']
    }
    k['document-structure_nav'] = {
      id: 'document-structure_nav', displayName: 'Document Structure', toSimulate: null,
      classes: ['navigation', 'html'],  // 'link'???
      path: 'HTML/Elements/Document_Structure',
      activate: keyFuncs.pureNavigation,
      tags: ['link']
    }
    k.meta_nav = {
      id: 'meta_nav', displayName: 'Meta', toSimulate: null,
      classes: ['navigation', 'html'],  // 'link'???
      path: 'HTML/Elements/Meta',
      activate: keyFuncs.pureNavigation,
      tags: ['link']
    }



    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
    // ~~~~~~~~~~~~~ ON ALL ~~~~~~~~~~~~~ //
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //

    // // TODO: Navigate to classes??? abc???
    // k.class = {
    //   id: 'class', displayName: 'class', toSimulate: 'class=""',
    //   classes: ['snippet', 'html', 'attribute'],
    //   activate: keyFuncs.pureSimulation,
    //   tags: ['html', 'attribute', 'class']
    // }
    // // TODO: Do NOT navigate to ids. Go to abc???
    // k.id = {
    //   id: 'id', displayName: 'id', toSimulate: 'id=""',
    //   classes: ['snippet', 'html', 'attribute'],
    //   activate: keyFuncs.pureSimulation,
    //   tags: ['html', 'attribute', 'id']
    // }
    //
    // k.equals = {
    //   id: 'equals', displayName: '=', toSimulate: '=',
    //   classes: ['snippet', 'syntax'],
    //   activate: keyFuncs.pureSimulation,
    //   tags: ['syntax', 'assignment', 'equals', 'instantiation']
    // }

    k.lessThan = {
      id: 'lessThan', displayName: '<', toSimulate: '<',
      classes: ['snippet', 'syntax'],
      activate: keyFuncs.pureSimulation,
      tags: ['syntax', 'punctuation',
      'less than', 'left angle bracket']
    }

    k.forwardSlash = {
      id: 'forwardSlash', displayName: '/', toSimulate: '/',
      classes: ['snippet', 'syntax'],
      activate: keyFuncs.pureSimulation,
      tags: ['syntax', 'punctuation', 'forward slash', 'divide', 'fraction']
    }

    k.greaterThan = {
      id: 'greaterThan', displayName: '>', toSimulate: '>',
      classes: ['snippet', 'syntax'],
      activate: keyFuncs.pureSimulation,
      tags: ['syntax', 'punctuation',
      'greater than', 'right angle bracket']
    }

    k.blankNode = {
      id: "blankNode", displayName: "</>", toSimulate: "<></>",
      classes: ["html", "snippet", "syntax", "fill-in"],
      activate: keyFuncs.pureSimulation,
      tags: ["html", "syntax", "fill-in", "choose your own"]
    }

    k.singleQuote = {
      id: 'singleQuote', displayName: '\'', toSimulate: '\'',
      classes: ['snippet', 'syntax'],
      activate: keyFuncs.pureSimulation,
      tags: ['syntax', 'punctuation',
      'single quote', 'quotation marks', 'air quotes']
    }

    k.doubleQuote = {
      id: 'doubleQuote', displayName: '"', toSimulate: '"',
      classes: ['snippet', 'syntax'],
      activate: keyFuncs.pureSimulation,
      tags: ['syntax', 'punctuation',
      'double quote', 'quotation marks', 'air quotes']
    }

    // k.dash = {
    //   id: 'dash', displayName: '-', toSimulate: '-',
    //   classes: ['snippet', 'variable'],
    //   activate: keyFuncs.pureSimulation,
    //   tags: ['variable', 'punctuation',
    //   'dash', 'em dash', 'hyphen', 'minus']
    // }
    //
    // k.underscore = {
    //   id: 'underscore', displayName: '_', toSimulate: '_',
    //   classes: ['snippet', 'variable'],
    //   activate: keyFuncs.pureSimulation,
    //   tags: ['variable', 'punctuation',
    //   'underscore']
    // }



    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
    // ~~~~~~~~~~~~~ HOME ~~~~~~~~~~~~~ //
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //

    // TODO: Try showing all these with angle brackets

    k.newHTMLDoc = {
      id: 'newHTMLDoc', displayName: 'New Page', toSimulate: '<!DOCTYPE html>\n\
<html lang="en">\n\
<head>\n\
  <meta charset="UTF-8">\n\
  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n\
  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n\
  <title>My Page</title>\n\
</head>\n\
<body>\n\
  \n\
</body>\n\
</html>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'structural', 'structure',
      'new document', 'new page', 'head', 'body']
    }

    k.div = {
      id: 'div', displayName: 'div', toSimulate: '<div></div>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'structural', 'generic', 'wrapper',
      'div']
    }

    k.p = {
      id: 'p', displayName: 'p', toSimulate: '<p></p>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'structural',
      'p', 'paragraph', 'block']
    }

    k.a = {
      id: 'a', displayName: 'a', toSimulate: '<a href=""></a>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'embedded', 'phrasing',
      'a', 'anchor', 'link'] // embedded???
    }

    k.img = {
      id: 'img', displayName: 'img', toSimulate: '<img src=""></img>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'embedded',
      'img', 'image', 'pic', 'photograph', 'file']
    }

    k.span = {
      id: 'span', displayName: 'span', toSimulate: '<span></span>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'generic', 'wrapper', 'span', 'inline'] // structure???
    }

    k.ol = {
      id: 'ol', displayName: 'ol', toSimulate: '<ol>\n\t<li></li>\n</ol>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'list', 'ordered list']
    }

    k.ul = {
      id: 'ul', displayName: 'ul', toSimulate: '<ul>\n\t<li></li>\n</ul>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'list', 'unordered list']
    }

    k.li = {
      // No automatic new line. This tool will try to keep micromanagment to a minimum
      id: 'li', displayName: 'li', toSimulate: '<li></li>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'list', 'list item', 'item']
    }

    k.h1 = {
      id: 'h1', displayName: 'h1', toSimulate: '<h1></h1>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'heading', 'structure',
      'heading 1', 'heading one']
    }

    k.h2 = {
      id: 'h2', displayName: 'h2', toSimulate: '<h2></h2>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'heading', 'structure',
      'heading 2', 'heading two']
    }




    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
    // ~~~~~~~~~~~~~ OUTLINE ~~~~~~~~~~~~~ //
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
    // TODO Name: Page-Structure???

    k.main = {
      id: 'main', displayName: 'main', toSimulate: '<main></main>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'outline', 'layout', 'structure', 'main']
    }
    k.nav = {
      id: 'nav', displayName: 'nav', toSimulate: '<nav></nav>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'outline', 'layout', 'structure', 'sectioning',
      'nav', 'navigation bar']
    }
    k.section = {
      id: 'section', displayName: 'section', toSimulate: '<section></section>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'outline', 'layout', 'structure', 'sectioning',
      'section']
    }
    k.header = {
      id: 'header', displayName: 'header', toSimulate: '<header></header>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'outline', 'layout', 'structure', 'header']
    }
    k.footer = {
      id: 'footer', displayName: 'footer', toSimulate: '<footer></footer>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'outline', 'layout', 'structure', 'footer']
    }
    k.aside = {
      id: 'aside', displayName: 'aside', toSimulate: '<aside></aside>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'outline', 'layout', 'structure', 'sectioning', 'aside']
    }
    k.article = {
      id: 'article', displayName: 'article', toSimulate: '<article></article>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'outline', 'layout', 'structure', 'sectioning', 'article']
    }
    // k.headings_nav





    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
    // ~~~~~~~~~~~~~ HEADINGS ~~~~~~~~~~~~~ //
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //

    // k.h1
    // k.h2

    k.h3 = {
      id: 'h3', displayName: 'h3', toSimulate: '<h3></h3>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'heading', 'structure',
      'heading 3', 'heading three']
    }

    k.h4 = {
      id: 'h4', displayName: 'h4', toSimulate: '<h4></h4>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'heading', 'structure',
      'heading 4', 'heading four']
    }

    k.h5 = {
      id: 'h5', displayName: 'h5', toSimulate: '<h5></h5>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'heading', 'structure',
      'heading 5', 'heading five']
    }

    k.h6 = {
      id: 'h6', displayName: 'h6', toSimulate: '<h6></h6>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'heading', 'structure',
      'heading 6', 'heading six']
    }

    k.hgroup = {
      id: 'hgroup', displayName: 'hgroup', toSimulate: '<hgroup></hgroup>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'heading', 'structure',
      'hgroup', 'heading group']
    }





    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
    // ~~~~~~~~~~~~~ FORM ~~~~~~~~~~~~~ //
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //

    // common: <button>, <form>, <input>, <label>, <textarea>
    // less common: <fieldset>, <optgroup>, <option>, <select>
    // rare: <datalist>, <meter>, <object>, <output>

    // form label input button textarea
    // tab fieldset optgroup option select del
    // Home space Menu

    // Page 2
    // fieldset legend datalist object
    // tab param meter output del


    // form label input button textarea
    k.form = {
      id: 'form', displayName: 'form', toSimulate: '<form action=""></form>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'interaction', 'user', 'ui', 'ux', 'form']
    }

    k.label = {
      id: 'label', displayName: 'label', toSimulate: '<label for=""><label>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'interaction', 'user', 'ui', 'ux', 'form', 'label']
    }

    k.input = {
      id: 'input', displayName: 'input', toSimulate: '<input type="text">',
      classes: ['snippet', 'html', 'tag'],
      path: 'HTML/Elements/Menu',  // Test worked
      // path: 'HTML/Attributes/Input',
      activate: keyFuncs.simulateThenNavigate,
      // activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'interaction', 'user', 'ui', 'ux', 'form', 'input']
    }

    k.button = {
      id: 'button', displayName: 'button', toSimulate: '<button value=""></button>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'interaction', 'user', 'ui', 'ux', 'form', 'button']
    }

    k.textarea = {
      id: 'textarea', displayName: 'textarea', toSimulate: '<textarea placeholder=""></textarea>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'interaction', 'user', 'ui', 'ux', 'form', 'textarea']
    }

    // tab fieldset optgroup option select del
    k.fieldset = {
      id: 'fieldset', displayName: 'fieldset', toSimulate: '<fieldset></fieldset>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'interaction', 'user', 'ui', 'ux', 'form', 'fieldset']
    }

    k.optgroup = {
      id: 'optgroup', displayName: 'optgroup', toSimulate: '<optgroup></optgroup>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'interaction', 'user', 'ui', 'ux', 'form', 'optgroup']
    }

    k.option = {
      id: 'option', displayName: 'option', toSimulate: '<option></option>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'interaction', 'user', 'ui', 'ux', 'form', 'option']
    }

    k.select = {
      id: 'select', displayName: 'select', toSimulate: '<select></select>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'interaction', 'user', 'ui', 'ux', 'form', 'select']
    }

    // fieldset legend datalist object
    // tab param meter output del
    k.legend = {
      id: 'legend', displayName: 'legend', toSimulate: '<legend></legend>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'interaction', 'user', 'ui', 'ux', 'form', 'legend']
    }

    k.datalist = {
      id: 'datalist', displayName: 'datalist', toSimulate: '<datalist></datalist>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'interaction', 'user', 'ui', 'ux', 'form', 'datalist']
    }

    k.object = {
      id: 'object', displayName: 'object', toSimulate: '<object></object>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'interaction', 'user', 'ui', 'ux', 'form', 'object']
    }

    k.param = {
      id: 'param', displayName: 'param', toSimulate: '<param name="" value="">',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'interaction', 'user', 'ui', 'ux', 'form', 'param']
    }
    // Not very fully supported
    k.meter = {
      id: 'meter', displayName: 'meter', toSimulate: '<meter></meter>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'interaction', 'user', 'ui', 'ux', 'form', 'meter']
    }
    // Not fully supported
    k.output = {
      id: 'output', displayName: 'output', toSimulate: '<output></output>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'interaction', 'user', 'ui', 'ux', 'form', 'output']
    }



    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
    // ~~~~~~~~~~~~~ EMBEDDED ~~~~~~~~~~~~~ //
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //

    // k.img

    k.video = {
      id: 'video', displayName: 'video', toSimulate: '<video src=""></video>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'embedded', 'image', 'media', 'file',
      'video', 'clip', 'film']
    }

    k.canvas = {
      id: 'canvas', displayName: 'canvas', toSimulate: '<canvas></canvas>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'embedded', 'image', 'media',
      'canvas', 'drawing']
    }
    // TODO: Find svg attribute needs
    k.svg = {
      id: 'svg', displayName: 'svg', toSimulate: '<svg></svg>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'embedded', 'image', 'media',
      'svg', 'drawing', 'vector', 'scalable vector graphics']
    }

    k.audio = {
      id: 'audio', displayName: 'audio', toSimulate: '<audio src=""></audio>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'embedded', 'media', 'music', 'volume', 'file',
      'audio', 'sound']  // volume???
    }

    k.iframe = {
      id: 'iframe', displayName: 'iframe', toSimulate: '<iframe></iframe>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'embedded', 'document', 'iframe']
    }

    k.embed = {
      id: 'embed', displayName: 'embed', toSimulate: '<embed></embed>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'embedded', 'embed']
    }

    k.math = {
      id: 'math', displayName: 'math', toSimulate: '<math></math>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'embedded', 'math']
    }




    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
    // ~~~~~~~~~~~~~ LISTS ~~~~~~~~~~~~~ //
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //

    // k.ol
    // k.ul
    // k.li





    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
    // ~~~~~~~~~~~~~ TABLES ~~~~~~~~~~~~~ //
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //

    k.table = {
      id: 'table', displayName: 'table', toSimulate: '<table></table>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'table']
    }
    k.tr = {
      id: 'tr', displayName: 'tr', toSimulate: '<tr></tr>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'table', 'tr', 'table row']
    }
    k.th = {
      id: 'th', displayName: 'th', toSimulate: '<th></th>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'table',
      'th', 'table head', 'table heading', 'table header']
    }
    k.td = {
      id: 'td', displayName: 'td', toSimulate: '<td></td>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'table',
      'td', 'table data', 'cell', 'table cell']
    }
    k.thead = {
      id: 'thead', displayName: 'thead', toSimulate: '<thead></thead>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'table',
      'thead', 'table heading section']
    }
    k.tfoot = {
      id: 'tfoot', displayName: 'tfoot', toSimulate: '<tfoot></tfoot>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'table', 'tfoot', 'table footer section']
    }
    k.tbody = {
      id: 'tbody', displayName: 'tbody', toSimulate: '<tbody></tbody>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'table', 'tbody', 'table body section']
    }
    k.colgroup = {
      id: 'colgroup', displayName: 'colgroup', toSimulate: '<colgroup></colgroup>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'table', 'colgroup', 'column group attributes']
    }
    k.col = {
      id: 'col', displayName: 'col', toSimulate: '<col>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'table', 'col', 'column attributes']
    }
    k.caption = {
      id: 'caption', displayName: 'caption', toSimulate: '<caption></caption>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'table', 'caption']
    }




    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
    // ~~~~~~~~~~~~~ DOCUMENT STRUCTURE ~~~~~~~~~~~~~ //
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //

    k.DOCTYPE = {
      id: 'DOCTYPE', displayName: 'DOCTYPE', toSimulate: '<!DOCTYPE html>',
      classes: ['snippet', 'html'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'DOCTYPE', 'document structure']
    }
    k.html = {
      id: 'html', displayName: 'html', toSimulate: '<html></html>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'document structure', 'root']
    }
    k.head = {
      id: 'head', displayName: 'head', toSimulate: '<head lang="en"></head>',
      classes: ['snippet', 'html', 'tag', 'invisible-in-dom', 'meta'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'document structure', 'metadata', 'invisible',
      'head']
    }
    k.body = {
      id: 'body', displayName: 'body', toSimulate: '<body></body>',
      classes: ['snippet', 'html', 'tag'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'document structure',
      'body']
    }




    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
    // ~~~~~~~~~~~~~ META ~~~~~~~~~~~~~ //
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //

    k.script = {
      id: 'script', displayName: 'script', toSimulate: '<script src=""></script>',
      classes: ['snippet', 'html', 'tag', 'invisible-in-dom', 'meta'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'meta', 'invisible',
      'script', 'file', 'code']
    }

    k.link = {
      id: 'link', displayName: 'link', toSimulate: '<link href="">',
      classes: ['snippet', 'html', 'tag', 'invisible-in-dom', 'meta'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'meta', 'invisible',
      'link', 'file', 'css', 'stylesheet']
    }

    // TODO: navigate to css
    k.style = {
      id: 'style', displayName: 'style', toSimulate: '<style></style>',
      classes: ['snippet', 'html', 'tag', 'invisible-in-dom', 'meta'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'meta', 'invisible',
      'style', 'css']
    }

    // TODO: Navigate to attributes
    k.meta = {
      id: 'meta', displayName: 'meta', toSimulate: '<meta>',
      classes: ['snippet', 'html', 'tag', 'invisible-in-dom', 'meta'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'meta', 'invisible']
    }

    k.title = {
      id: 'title', displayName: 'title', toSimulate: '<title></title>',
      classes: ['snippet', 'html', 'tag', 'invisible-in-dom', 'meta'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'meta', 'invisible',
      'title', 'tab']
    }
    // TODO: look up proper use of <noscript>
    k.noscript = {
      id: 'noscript', displayName: 'noscript', toSimulate: '<noscript></noscript>',
      classes: ['snippet', 'html', 'tag', 'invisible-in-dom', 'meta'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'meta', 'invisible',
      'noscript', 'code']
    }
    // TODO: look up proper use of <base>
    k.base = {
      id: 'base', displayName: 'base', toSimulate: '<base href="">',
      classes: ['snippet', 'html', 'tag', 'invisible-in-dom', 'meta'],
      activate: keyFuncs.pureSimulation,
      tags: ['html', 'element', 'meta', 'invisible',
      'base']
    }

    /*
    Structure
    Meta
    List
    Header/Headings
    Table
    Generic/Containers/Wrappers
    Sectioning/Structure/Outline/Layout
      DONE Change to "Layout"
    Embedded
    Interactive
    Text Stories/Text Meta (Mikeysfriendvinny)
    */

    /*
    // Outilne, HTML5, sectioning?
        sectioning: section, nav, aside, article
        outline: main, nav, section, header, footer, headdings, aside, article
    // Header/Headings
        h1, h2, h3, h4, h5, h6, hgroup
    // ??? Common? Basic? Generic? Home?
        div, span
    // Embedded
        mdn: audio, canvas, embed, iframe, img, math, object, svg, video
    // Structure? XMeta?
        html, header, body, DOCTYPE (New Doc?)
    // Meta
        meta, title, link, script, style
        noscript, base
    // List
        ol, ul, li
    // Table
        table, th, tr, td, tfooter?, theader?


    // Interactive/Interaction
      a audio video menu??? nav??? More Form-Free/Independent (Interactive Elements)
      tab form label button textarea del
      input select optgroup option More Form enter
      Home space Menu

        // Non-form
          all: <a>, <area>, <button>, <details>, <embed>, <iframe>, <label>, <select>, <textarea>, <audio>, <img>, <input>, <map>, <menu>, <menuitem>, <nav>, <object>, <video>
          not available elsewhere: <area>, <details>, <map>, <menu>, <menuitem>
          common: <a>, <button>, <label>, <textarea>, <audio>, <img>, <input>, <video>, <nav>???
          less common: <select>
          rare: <details>, <embed>, <iframe>, <map>, <menu>, <menuitem>, <object>
          ---
          Always:
            <a>, (<button>), <details>, <embed>, <iframe>, (<label>, <select>, <textarea>)
          Conditional:
            <audio>, <img>, (<input>), <menu>, <object>, <video>
          Not listed: <map>, <area>, <nav>, <menuitem>
        // Form
          common: <button>, <form>, <input>, <label>, <textarea>
          less common: <fieldset>, <optgroup>, <option>, <select>
          rare: <datalist>, <meter>, <object>, <output>
          ---
          Listed:
            <button>, <fieldset>, <form>, <input>, <label>, <meter>, <object>, <output>, <progress>, <select>, <textarea>
          Not listed:
            <datalist>, <optgroup>, <option>
        // Other

    //- Text Stories... sounds like "Tech Stories", Text Meta
        b, i, s?
        strong, em, ins, del, small, sub, sup
        <b>, <del>, <em>, <i>, <ins>, <s>, <small>, <strong>, <sub>, <sup>,
    // Outside and self-contained
        br, hr
    // ...custom image manipulation...?
        svg, canvas
        ...path, circle, elipse...


    <a>, <article>, <aside>, <audio>, <canvas>, <div>, <embed>, <footer>, <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, <header>, <hgroup>, <iframe>, <img>, <main>, <math>, <nav>, <noscript>, <object>, <ol>, <p>, <script>, <section>, <span>, <svg>, <table>, <ul>, <video>,

    <abbr>, <address>, <b>, <bdo>, <bdi>, <blockquote>, <br>, <button>, <cite>, <code>, <command>, <data>, <datalist>, <del>, <details>, <dfn>, <dl>, <em>, <fieldset>, <figure>, <form>, <hr>, <i>, <input>, <ins>, <kbd>, <label>, <map>, <mark>, <menu>, <meter>, <output>, <pre>, <progress>, <q>, <ruby>, <s>, <samp>, <select>, <small>, <strong>, <sub>, <sup>, <template>, <textarea>, <time>, <var>, <wbr>

    Depricated:
    <keygen>

    // Most used
    div, a, img, p, span
    new doc
    ol, ul, li
    h1, h2
    script, link, style
    */

  } // constructor
} // HtmlElements
