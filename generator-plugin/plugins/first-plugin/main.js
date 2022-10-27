(function() {
  "use strict";

  var PLUGIN_ID = require("./package.json").name;
  var MENU_ID = "fp";

  var _generator;

  function init(generator) {
      _generator = generator;
      console.log("はじめてのPhotoshop Generatorプラグイン");

      _generator.addMenuItem(MENU_ID, "はじめてのプラグイン", true, false);

      // メニューのクリックを捕捉する
      _generator.onPhotoshopEvent('generatorMenuChanged', onGeneratorMenuChanged);
  }

  function onGeneratorMenuChanged(event) {
    const changedMenu = event.generatorMenuChanged;
    if (changedMenu.name === MENU_ID) {
      console.log('はじめてのプラグインが実行されました。')
      
      const menuState = _generator.getMenuState(changedMenu.name);
      console.log('menuState: %o', menuState);
      _generator.toggleMenu(MENU_ID, menuState.enabled, !menuState.checked);
    }
  }


  exports.init = init;
}());