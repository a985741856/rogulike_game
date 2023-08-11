"use strict";
cc._RF.push(module, 'f0b28oTeGVBh6BfEEtoMe8i', 'prop');
// scripts/Game/prop.ts

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
var CocosZ_1 = require("../Framework/CocosZ");
var gameMgr_1 = require("./gameMgr");
var person_1 = require("./person");
var weapon_1 = require("./weapon");
var UpgradeMgr_1 = require("./UpgradeMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Prop = /** @class */ (function (_super) {
    __extends(Prop, _super);
    function Prop() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.weaponSprite = null;
        _this.idx = 0;
        return _this;
        // update (dt) {}
    }
    Prop.prototype.start = function () {
        var _this = this;
        gameMgr_1.gameMgr && gameMgr_1.gameMgr.setMapTs.checkNode(this.node, true);
        cc.tween(this.node)
            .delay(5)
            .blink(3, 3)
            .call(function () {
            UpgradeMgr_1.upgradeMgr.createPropArr.splice(_this.idx, 1);
            _this.node.destroy();
            UpgradeMgr_1.upgradeMgr.createNum--;
        })
            .start();
        // console.log('当前idx为：'+this.idx);
        // console.log('当前武器为：'+ Weapon.WeaponName[this.idx - 1]);
        var weaponSp = this.node.getChildByName('weaponSp');
        weaponSp.getComponent(cc.Sprite).spriteFrame = CocosZ_1.cocosz.resMgr.getRes("w_" + weapon_1.default.WeaponName[this.idx - 1], cc.SpriteFrame);
    };
    Prop.prototype.onCollisionEnter = function (other, self) {
        var ts = other.getComponent(person_1.default);
        if (other.tag == 1 && ts.isPlayer) {
            UpgradeMgr_1.upgradeMgr.createPropArr.splice(this.idx, 1);
            this.node.destroy();
            UpgradeMgr_1.upgradeMgr.createNum--;
            ts.setNewWeapon(this.idx - 1);
        }
    };
    __decorate([
        property()
    ], Prop.prototype, "weaponSprite", void 0);
    Prop = __decorate([
        ccclass
    ], Prop);
    return Prop;
}(cc.Component));
exports.default = Prop;

cc._RF.pop();