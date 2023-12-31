"use strict";

require('adapter.js');

__globalAdapter.init();

require('cocos/cocos2d-js.js');

__globalAdapter.adaptEngine();

require('./ccRequire');

require('./src/settings'); // Introduce Cocos Service here


require('./main'); // TODO: move to common
// Adjust devicePixelRatio


cc.view._maxPixelRatio = 4;

if (cc.sys.platform !== cc.sys.WECHAT_GAME_SUB) {
  // Release Image objects after uploaded gl texture
  cc.macro.CLEANUP_IMAGE_CACHE = true;
} // sub context need to boot after SubContextView component enabled in main context


if (!__globalAdapter.isSubContext) {
  window.boot();
}