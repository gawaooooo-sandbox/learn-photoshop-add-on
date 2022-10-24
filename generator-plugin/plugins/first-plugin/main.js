(function() {
  "use strict";

  var PLUGIN_ID = require("./package.json").name;
  var MENU_ID = "fp";

  var _generator;

  function init(generator) {
      _generator = generator;
      console.log("はじめてのPhotoshop Generatorプラグイン");

      _generator.addMenuItem(MENU_ID, "はじめてのプラグイン", true, false);
  }

  exports.init = init;
}());