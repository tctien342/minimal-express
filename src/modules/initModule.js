const PACKAGE = require("../../package.json");
class InitModule {
  constructor() {
    console.log("<> Server name: ", PACKAGE.name);
    console.log("<> Server version: ", PACKAGE.version);
  }
}
module.exports = InitModule;
