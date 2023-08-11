"use strict";
cc._RF.push(module, 'eed2d9Edt1Nz4Ol90Ng/Qs5', 'GameLevel');
// scripts/Framework/GameLevel.ts

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
var GameLevel = /** @class */ (function (_super) {
    __extends(GameLevel, _super);
    function GameLevel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.returnBtn = null;
        _this.PageView = null;
        _this.pageindex = 0;
        _this.lockedNode = [];
        return _this;
    }
    GameLevel.prototype.start = function () {
        var self = this;
        this.returnBtn = this.node.getChildByName('BtnReturn');
        this.PageView = this.node.getChildByName('PageView');
        this.returnBtn.on('touchend', function () {
            cc.director.loadScene("GameStart");
        });
        for (var i = 0; i < self.PageView.getChildByName('view').getChildByName('content').children.length; i++) {
            var childnode = self.PageView.getChildByName('view').getChildByName('content').children[i];
            var lock = childnode.getChildByName('lock');
            var btn = childnode.getChildByName('button');
            // this.lockedNode.push(lock);
            var levelinfo = CocosZ_1.cocosz.dataMgr.getLevelInfo((1001 + i));
            console.log(levelinfo);
            // self.isLocked(levelinfo);
            if (levelinfo.State == 0) {
                lock.active = true;
            }
            else {
                lock.active = false;
            }
            btn.on('touchend', function () {
                self.touchevent();
            });
        }
        this.PageView.on('page-turning', function (event, target) {
            console.log(target);
            self.pageindex = self.PageView.getComponent(cc.PageView).getCurrentPageIndex();
            console.log(self.pageindex);
        });
    };
    GameLevel.prototype.touchevent = function () {
        console.log('点击按钮' + (1001 + this.pageindex));
        Constant_1.default.currentLevel = this.pageindex + 1;
        CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UIHomePage);
    };
    GameLevel.prototype.isLocked = function (levelinfo) {
        var self = this;
        console.log(levelinfo.State);
        if (levelinfo.State == 0) {
            this.lockedNode[this.pageindex].active = true;
        }
        else {
            this.lockedNode[this.pageindex].active = false;
        }
    };
    GameLevel = __decorate([
        ccclass
    ], GameLevel);
    return GameLevel;
}(cc.Component));
exports.default = GameLevel;

cc._RF.pop();