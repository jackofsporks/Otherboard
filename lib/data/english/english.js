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
      classes: ['navigation', 'alphanumeric', 'shift'],  // 'link'???
      path: 'ABC/Abc/uppercase',
      activate: keyFuncs.pureNavigation,
      tags: ['link', 'alphabetical', 'uppercase']
    }

    k.lowercase = {
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
    k.q = {
      id: 'q', displayName: 'q', toSimulate: 'q',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.w = {
      id: 'w', displayName: 'w', toSimulate: 'w',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.e = {
      id: 'e', displayName: 'e', toSimulate: 'e',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.r = {
      id: 'r', displayName: 'r', toSimulate: 'r',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.t = {
      id: 't', displayName: 't', toSimulate: 't',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.y = {
      id: 'y', displayName: 'y', toSimulate: 'y',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.u = {
      id: 'u', displayName: 'u', toSimulate: 'u',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.i = {
      id: 'i', displayName: 'i', toSimulate: 'i',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.o = {
      id: 'o', displayName: 'o', toSimulate: 'o',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.p = {
      id: 'p', displayName: 'p', toSimulate: 'p',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.a = {
      id: 'a', displayName: 'a', toSimulate: 'a',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.s = {
      id: 's', displayName: 's', toSimulate: 's',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.d = {
      id: 'd', displayName: 'd', toSimulate: 'd',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.f = {
      id: 'f', displayName: 'f', toSimulate: 'f',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.g = {
      id: 'g', displayName: 'g', toSimulate: 'g',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.h = {
      id: 'h', displayName: 'h', toSimulate: 'h',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.j = {
      id: 'j', displayName: 'j', toSimulate: 'j',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.k = {
      id: 'k', displayName: 'k', toSimulate: 'k',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.l = {
      id: 'l', displayName: 'l', toSimulate: 'l',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.z = {
      id: 'z', displayName: 'z', toSimulate: 'z',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.x = {
      id: 'x', displayName: 'x', toSimulate: 'x',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.c = {
      id: 'c', displayName: 'c', toSimulate: 'c',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.v = {
      id: 'v', displayName: 'v', toSimulate: 'v',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.b = {
      id: 'b', displayName: 'b', toSimulate: 'b',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.n = {
      id: 'n', displayName: 'n', toSimulate: 'n',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.m = {
      id: 'm', displayName: 'm', toSimulate: 'm',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ~~~ UPPERCASE ~~~
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    k.Q = {
      id: 'Q', displayName: 'Q', toSimulate: 'Q',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.W = {
      id: 'W', displayName: 'W', toSimulate: 'W',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.E = {
      id: 'E', displayName: 'E', toSimulate: 'E',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.R = {
      id: 'R', displayName: 'R', toSimulate: 'R',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.T = {
      id: 'T', displayName: 'T', toSimulate: 'T',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.Y = {
      id: 'Y', displayName: 'Y', toSimulate: 'Y',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.U = {
      id: 'U', displayName: 'U', toSimulate: 'U',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.I = {
      id: 'I', displayName: 'I', toSimulate: 'I',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.O = {
      id: 'O', displayName: 'O', toSimulate: 'O',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.P = {
      id: 'P', displayName: 'P', toSimulate: 'P',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.A = {
      id: 'A', displayName: 'A', toSimulate: 'A',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.S = {
      id: 'S', displayName: 'S', toSimulate: 'S',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.D = {
      id: 'D', displayName: 'D', toSimulate: 'D',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.F = {
      id: 'F', displayName: 'F', toSimulate: 'F',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.G = {
      id: 'G', displayName: 'G', toSimulate: 'G',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.H = {
      id: 'H', displayName: 'H', toSimulate: 'H',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.J = {
      id: 'J', displayName: 'J', toSimulate: 'J',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.K = {
      id: 'K', displayName: 'K', toSimulate: 'K',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.L = {
      id: 'L', displayName: 'L', toSimulate: 'L',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.Z = {
      id: 'Z', displayName: 'Z', toSimulate: 'Z',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.X = {
      id: 'X', displayName: 'X', toSimulate: 'X',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.C = {
      id: 'C', displayName: 'C', toSimulate: 'C',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.V = {
      id: 'V', displayName: 'V', toSimulate: 'V',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.B = {
      id: 'B', displayName: 'B', toSimulate: 'B',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.N = {
      id: 'N', displayName: 'N', toSimulate: 'N',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

    k.M = {
      id: 'M', displayName: 'M', toSimulate: 'M',
      classes: ['snippet', 'alphanumeric'],
      activate: keyFuncs.pureSimulation,
      tags: ['alphabetical', 'lowercase']
    }

  } // constructor
} // EnglishKeys
