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
    k.uppercase = {
      id: 'uppercase_nav', displayName: 'ABC', toSimulate: null,
      classes: ['navigation', 'alphanumeric', "alphabetical", 'shift'],  // 'link'???
      path: 'ABC/Abc/Uppercase',
      activate: keyFuncs.pureNavigation,
      tags: ['link', 'alphabetical', "letter", 'uppercase']
    }

    k.lowercase = {
      id: 'lowercase_nav', displayName: 'abc', toSimulate: null,
      classes: ['navigation', 'alphanumeric', "alphabetical", 'shift'],  // 'link'???
      path: 'ABC/Abc/Lowercase',
      activate: keyFuncs.pureNavigation,
      tags: ['link', 'alphabetical', "letter", 'lowercase']
    }


    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // ~~~ Simulation Keys ~~~
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ~~~ LOWERCASE ~~~
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    k.q = {
      id: 'q', displayName: 'q', toSimulate: 'q',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.w = {
      id: 'w', displayName: 'w', toSimulate: 'w',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.e = {
      id: 'e', displayName: 'e', toSimulate: 'e',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.r = {
      id: 'r', displayName: 'r', toSimulate: 'r',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.t = {
      id: 't', displayName: 't', toSimulate: 't',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.y = {
      id: 'y', displayName: 'y', toSimulate: 'y',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.u = {
      id: 'u', displayName: 'u', toSimulate: 'u',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.i = {
      id: 'i', displayName: 'i', toSimulate: 'i',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.o = {
      id: 'o', displayName: 'o', toSimulate: 'o',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.p = {
      id: 'p', displayName: 'p', toSimulate: 'p',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.a = {
      id: 'a', displayName: 'a', toSimulate: 'a',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.s = {
      id: 's', displayName: 's', toSimulate: 's',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.d = {
      id: 'd', displayName: 'd', toSimulate: 'd',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.f = {
      id: 'f', displayName: 'f', toSimulate: 'f',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.g = {
      id: 'g', displayName: 'g', toSimulate: 'g',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.h = {
      id: 'h', displayName: 'h', toSimulate: 'h',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.j = {
      id: 'j', displayName: 'j', toSimulate: 'j',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.k = {
      id: 'k', displayName: 'k', toSimulate: 'k',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.l = {
      id: 'l', displayName: 'l', toSimulate: 'l',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.z = {
      id: 'z', displayName: 'z', toSimulate: 'z',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.x = {
      id: 'x', displayName: 'x', toSimulate: 'x',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.c = {
      id: 'c', displayName: 'c', toSimulate: 'c',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.v = {
      id: 'v', displayName: 'v', toSimulate: 'v',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.b = {
      id: 'b', displayName: 'b', toSimulate: 'b',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.n = {
      id: 'n', displayName: 'n', toSimulate: 'n',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    k.m = {
      id: 'm', displayName: 'm', toSimulate: 'm',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", 'lowercase']
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ~~~ UPPERCASE ~~~
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    k.Q = {
      id: 'Q', displayName: 'Q', toSimulate: 'Q',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.W = {
      id: 'W', displayName: 'W', toSimulate: 'W',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.E = {
      id: 'E', displayName: 'E', toSimulate: 'E',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.R = {
      id: 'R', displayName: 'R', toSimulate: 'R',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.T = {
      id: 'T', displayName: 'T', toSimulate: 'T',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.Y = {
      id: 'Y', displayName: 'Y', toSimulate: 'Y',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.U = {
      id: 'U', displayName: 'U', toSimulate: 'U',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.I = {
      id: 'I', displayName: 'I', toSimulate: 'I',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.O = {
      id: 'O', displayName: 'O', toSimulate: 'O',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.P = {
      id: 'P', displayName: 'P', toSimulate: 'P',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.A = {
      id: 'A', displayName: 'A', toSimulate: 'A',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.S = {
      id: 'S', displayName: 'S', toSimulate: 'S',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.D = {
      id: 'D', displayName: 'D', toSimulate: 'D',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.F = {
      id: 'F', displayName: 'F', toSimulate: 'F',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.G = {
      id: 'G', displayName: 'G', toSimulate: 'G',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.H = {
      id: 'H', displayName: 'H', toSimulate: 'H',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.J = {
      id: 'J', displayName: 'J', toSimulate: 'J',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.K = {
      id: 'K', displayName: 'K', toSimulate: 'K',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.L = {
      id: 'L', displayName: 'L', toSimulate: 'L',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.Z = {
      id: 'Z', displayName: 'Z', toSimulate: 'Z',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.X = {
      id: 'X', displayName: 'X', toSimulate: 'X',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.C = {
      id: 'C', displayName: 'C', toSimulate: 'C',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.V = {
      id: 'V', displayName: 'V', toSimulate: 'V',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.B = {
      id: 'B', displayName: 'B', toSimulate: 'B',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.N = {
      id: 'N', displayName: 'N', toSimulate: 'N',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

    k.M = {
      id: 'M', displayName: 'M', toSimulate: 'M',
      classes: ['snippet', 'alphanumeric', "alphabetical"],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', "letter", "uppercase"]
    }

  } // constructor
} // EnglishKeys
