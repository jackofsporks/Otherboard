"use babel"

export default { // TODO do config: require("./data/whatever/config")
  debug: {
    type: "object",
    properties: {
      resetOnStartup: {
        type: "boolean", default: false,
        description: "Reset OSK settings to defaults the next time atom is re-opened/reloaded"
      }
    }
  },
  realBoard: {
    type: "object",
    properties: {
      interactOnceUsingYourPhysicalKeyboard: {
        type: "string", default: "ctrl-alt-k"
      },
      persistPhysicalKeyboardInteraction: {
        type: "string", default: "ctrl-alt-cmd-k"
      }
    }
  }
  // styles: {}, //?
  // snippets: {}, //?
}
