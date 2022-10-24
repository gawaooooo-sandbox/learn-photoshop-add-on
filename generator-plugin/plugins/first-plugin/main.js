(function() {
  "use strict";

  var PLUGIN_ID = require("./package.json").name;
  var MENU_ID = "fp";

  var _generator;

  function init(generator) {
      _generator = generator;
      console.log("はじめてのPhotoshop Generatorプラグイン");
  }

  exports.init = init;
}());