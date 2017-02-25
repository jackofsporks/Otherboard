'use babel';

// vars must be named the same thing in the import
// as they are in the export (unless it's the default)
import keyFuncs from '../../utils/key-funcs.js';

export default class EnglishKeys {
  constructor() {

    const k = this;  // "k" for "keyboard"

    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // ~~~ Navigation Keys ~~~
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    k.uppercase = { type: 'key',
      id: 'uppercase_nav', displayName: 'ABC', toSimulate: null,
      classes: ['navigation', 'alphanumeric', 'shift'],  // 'link'???
      path: 'ABC/Abc/uppercase',
      activate: keyFuncs.pureNavigation,
      tags: ['link', 'alphabetical', 'uppercase']
    }

    k.lowercase = { type: 'key',
      id: 'lowercase_nav', displayName: 'abc', toSimulate: null,
      classes: ['navigation', 'alphanumeric', 'shift'],  // 'link'???
      path: 'ABC/Abc/lowercase',
      activate: keyFuncs.pureNavigation,
      tags: ['link', 'alphabetical', 'lowercase']
    }


    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // ~~~ Simulation Keys ~~~
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ~~~ LOWERCASE ~~~
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    k.q = { type: 'key',
      id: 'q', displayName: 'q', toSimulate: 'q',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.w = { type: 'key',
      id: 'w', displayName: 'w', toSimulate: 'w',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.e = { type: 'key',
      id: 'e', displayName: 'e', toSimulate: 'e',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.r = { type: 'key',
      id: 'r', displayName: 'r', toSimulate: 'r',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.t = { type: 'key',
      id: 't', displayName: 't', toSimulate: 't',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.y = { type: 'key',
      id: 'y', displayName: 'y', toSimulate: 'y',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.u = { type: 'key',
      id: 'u', displayName: 'u', toSimulate: 'u',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.i = { type: 'key',
      id: 'i', displayName: 'i', toSimulate: 'i',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.o = { type: 'key',
      id: 'o', displayName: 'o', toSimulate: 'o',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.p = { type: 'key',
      id: 'p', displayName: 'p', toSimulate: 'p',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.a = { type: 'key',
      id: 'a', displayName: 'a', toSimulate: 'a',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.s = { type: 'key',
      id: 's', displayName: 's', toSimulate: 's',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.d = { type: 'key',
      id: 'd', displayName: 'd', toSimulate: 'd',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.f = { type: 'key',
      id: 'f', displayName: 'f', toSimulate: 'f',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.g = { type: 'key',
      id: 'g', displayName: 'g', toSimulate: 'g',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.h = { type: 'key',
      id: 'h', displayName: 'h', toSimulate: 'h',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.j = { type: 'key',
      id: 'j', displayName: 'j', toSimulate: 'j',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.k = { type: 'key',
      id: 'k', displayName: 'k', toSimulate: 'k',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.l = { type: 'key',
      id: 'l', displayName: 'l', toSimulate: 'l',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.z = { type: 'key',
      id: 'z', displayName: 'z', toSimulate: 'z',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.x = { type: 'key',
      id: 'x', displayName: 'x', toSimulate: 'x',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.c = { type: 'key',
      id: 'c', displayName: 'c', toSimulate: 'c',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.v = { type: 'key',
      id: 'v', displayName: 'v', toSimulate: 'v',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.b = { type: 'key',
      id: 'b', displayName: 'b', toSimulate: 'b',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.n = { type: 'key',
      id: 'n', displayName: 'n', toSimulate: 'n',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.m = { type: 'key',
      id: 'm', displayName: 'm', toSimulate: 'm',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ~~~ UPPERCASE ~~~
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    k.Q = { type: 'key',
      id: 'Q', displayName: 'Q', toSimulate: 'Q',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.W = { type: 'key',
      id: 'W', displayName: 'W', toSimulate: 'W',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.E = { type: 'key',
      id: 'E', displayName: 'E', toSimulate: 'E',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.R = { type: 'key',
      id: 'R', displayName: 'R', toSimulate: 'R',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.T = { type: 'key',
      id: 'T', displayName: 'T', toSimulate: 'T',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.Y = { type: 'key',
      id: 'Y', displayName: 'Y', toSimulate: 'Y',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.U = { type: 'key',
      id: 'U', displayName: 'U', toSimulate: 'U',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.I = { type: 'key',
      id: 'I', displayName: 'I', toSimulate: 'I',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.O = { type: 'key',
      id: 'O', displayName: 'O', toSimulate: 'O',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.P = { type: 'key',
      id: 'P', displayName: 'P', toSimulate: 'P',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.A = { type: 'key',
      id: 'A', displayName: 'A', toSimulate: 'A',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.S = { type: 'key',
      id: 'S', displayName: 'S', toSimulate: 'S',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.D = { type: 'key',
      id: 'D', displayName: 'D', toSimulate: 'D',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.F = { type: 'key',
      id: 'F', displayName: 'F', toSimulate: 'F',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.G = { type: 'key',
      id: 'G', displayName: 'G', toSimulate: 'G',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.H = { type: 'key',
      id: 'H', displayName: 'H', toSimulate: 'H',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.J = { type: 'key',
      id: 'J', displayName: 'J', toSimulate: 'J',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.K = { type: 'key',
      id: 'K', displayName: 'K', toSimulate: 'K',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.L = { type: 'key',
      id: 'L', displayName: 'L', toSimulate: 'L',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.Z = { type: 'key',
      id: 'Z', displayName: 'Z', toSimulate: 'Z',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.X = { type: 'key',
      id: 'X', displayName: 'X', toSimulate: 'X',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.C = { type: 'key',
      id: 'C', displayName: 'C', toSimulate: 'C',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.V = { type: 'key',
      id: 'V', displayName: 'V', toSimulate: 'V',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.B = { type: 'key',
      id: 'B', displayName: 'B', toSimulate: 'B',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.N = { type: 'key',
      id: 'N', displayName: 'N', toSimulate: 'N',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.M = { type: 'key',
      id: 'M', displayName: 'M', toSimulate: 'M',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

  } // constructor
} // EnglishKeys
