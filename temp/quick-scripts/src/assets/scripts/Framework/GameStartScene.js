"use strict";
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