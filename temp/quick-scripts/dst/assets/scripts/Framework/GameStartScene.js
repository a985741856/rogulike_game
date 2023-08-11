
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Framework/GameStartScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f044qxiaZAka5qRNWm0cDi', 'GameStartScene');
// scripts/Framework/GameStartScene.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("./CocosZ");
var Constant_1 = require("./Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameStartScene = /** @class */ (function (_super) {
    __extends(GameStartScene, _super);
    function GameStartScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelBtn = null;
        _this.reinBtn = null;
        return _this;
    }
    GameStartScene.prototype.start = function () {
        this.levelBtn = this.node.getChildByName("levelButton");
        this.reinBtn = this.node.getChildByName('reinButton');
        this.levelBtn.on('touchend', function () {
            CocosZ_1.cocosz.gameMode = 8;
            cc.director.loadScene("GameLevel");
        });
        this.reinBtn.on('touchend', function () {
            CocosZ_1.cocosz.gameMode = 6;
            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UIHomePage);
        });
    };
    GameStartScene = __decorate([
        ccclass
    ], GameStartScene);
    return GameStartScene;
}(cc.Component));
exports.default = GameStartScene;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRnJhbWV3b3JrXFxHYW1lU3RhcnRTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixtQ0FBa0M7QUFDbEMsdUNBQXNDO0FBRWhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBZ0JDO1FBZkcsY0FBUSxHQUFhLElBQUksQ0FBQztRQUMxQixhQUFPLEdBQWEsSUFBSSxDQUFDOztJQWM3QixDQUFDO0lBWmEsOEJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUM7WUFDeEIsZUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDcEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUM7WUFDdkIsZUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDcEIsZUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFmZ0IsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQWdCbEM7SUFBRCxxQkFBQztDQWhCRCxBQWdCQyxDQWhCMkMsRUFBRSxDQUFDLFNBQVMsR0FnQnZEO2tCQWhCb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuL0NvY29zWlwiO1xyXG5pbXBvcnQgeyBQYWdlTmFtZSB9IGZyb20gXCIuL0NvbnN0YW50XCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTdGFydFNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIGxldmVsQnRuIDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICByZWluQnRuIDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBcclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxldmVsQnRuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibGV2ZWxCdXR0b25cIik7XHJcbiAgICAgICAgdGhpcy5yZWluQnRuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdyZWluQnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5sZXZlbEJ0bi5vbigndG91Y2hlbmQnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvY29zei5nYW1lTW9kZSA9IDg7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVMZXZlbFwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlaW5CdG4ub24oJ3RvdWNoZW5kJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb2Nvc3ouZ2FtZU1vZGUgPSA2O1xyXG4gICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVUlIb21lUGFnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19