
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/person.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9c57aW3ydVKJ6Xst8KQr8d9', 'person');
// scripts/Game/person.ts

"use strict";
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
var PlatUtils_1 = require("../../common-plugin/Scripts/PlatUtils");
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var gameDate_1 = require("./gameDate");
var gameMgr_1 = require("./gameMgr");
var weapon_1 = require("./weapon");
// @ts-ignore
var i18n = require('LanguageData');
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 光环特效
        _this.ghAniNode = null;
        // 烟尘动画节点
        _this.ycAniNode = null;
        _this.personAtk = 0;
        _this.playerName = "";
        _this.personLevel = 0;
        _this.atkNum = 40;
        _this.atkRange = 800;
        _this.atkSpeed = 4;
        _this.reloadSpeed = 2;
        _this.totleHp = 300;
        _this.curHp = 300;
        _this.atkRate = 1;
        _this.speedRate = 1;
        _this.atkSpeedRate = 1;
        _this.reloadRate = 1;
        _this.bulletRate = 1;
        _this.meleeAtkRate = 1;
        _this.damageReduction = 0;
        _this.recoverItemNum = 0;
        _this.killNum = 0;
        _this.curKillNum = 0;
        _this.MoveSpeed = 600;
        _this.moveDir = cc.v2(0, 0);
        _this.atkDir = cc.v2(0, 0);
        _this.footNum = 0;
        _this.lastPos = cc.v2(0, 0);
        // 开关
        _this.canMove = true; //能否移动
        _this.canMoveDir = true; //能否改变移动方向
        // 检测范围
        _this.detectRange = 1000;
        _this.mat_common = null;
        _this.mat_attacked = null;
        // onLoad () {}
        _this.body = null;
        _this.leg = null;
        _this.leg_back = null;
        _this.head = null;
        _this.hpBar = null;
        _this.hpSpr = null;
        _this.shieldBar = null;
        _this.atkBar = null;
        _this.head_atk = null;
        _this.head_hart = null;
        _this.head_death = null;
        _this.playerMess = null;
        _this.ani = null;
        _this.id = 0; //1玩家
        _this.isPlayer = false;
        _this.atkTarget = null;
        _this.weapon = null;
        _this.weapon_dao = null;
        _this.hpNumNode = null;
        _this._shield = 0;
        _this.maxShield = 100;
        _this.rig = null;
        _this.curTime = 0;
        _this._playerMessY = 200;
        _this.isReady = false;
        _this.curSkin = 0;
        /** 视频武器 */
        _this.weaponAdArr = [9, 10, 14, 17, 18];
        _this.weaponAdIndex = Math.floor(Math.random() * _this.weaponAdArr.length);
        _this.meleeWeaponNum = 3;
        _this.rangedWeaponNum = 1;
        _this.rangedWeaponAdNum = 1;
        _this.meleeWeapon = null;
        _this.rangedWeapon = null;
        _this.rangedWeaponAd = null;
        _this.curWeapon = null;
        _this.startPosNode = null;
        _this.lastTime = 0;
        _this._aniName = "";
        _this.isAtk = false;
        _this.atkList = [];
        _this.curItem = 0;
        _this.curItemEffect = null;
        _this.itemTarget = null;
        _this.grassID = 0;
        _this.houseID = 0;
        _this.isInHouse = false;
        _this.newWeapon = -1;
        _this.newWeaponItem = null;
        _this.poisonCount = 0;
        _this.isDeath = false;
        _this.isAttackedEffect = false;
        _this.maxNum = 0;
        _this.isAvoidInjury = 0;
        _this.killer = null;
        // findTime: number = 0;
        _this.revivePos = cc.v2(0, 0);
        return _this;
    }
    Person_1 = Person;
    Object.defineProperty(Person.prototype, "HP", {
        get: function () {
            return this.curHp;
        },
        set: function (num) {
            num = Math.floor(num);
            if (num < 0)
                num = 0;
            else if (num > this.totleHp)
                num = this.totleHp;
            this.curHp = num;
            // 血条
            if (this.hpBar && this.hpBar.isValid) {
                this.hpBar.progress = this.curHp / this.totleHp;
            }
            // 主动使用道具
            if (this.isPlayer) {
                if (CocosZ_1.cocosz.gameMode == 6 || CocosZ_1.cocosz.gameMode == 8) {
                    gameMgr_1.gameMgr.update_model6_xuedi();
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "Shiled", {
        get: function () {
            return this._shield;
        },
        set: function (num) {
            cc.Tween.stopAllByTarget(this.shieldBar);
            this._shield = num;
            if (this._shield < 0) {
                this._shield = 0;
                this.shieldBar.node.opacity = 0;
                this.body.getChildByName("body").children[0].active = false;
            }
            else {
                this.shieldBar.node.opacity = 255;
            }
            cc.tween(this.shieldBar).to(0.3, { progress: this._shield / this.maxShield }).start();
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.onLoad = function () { };
    Person.prototype.start = function () {
        // 人物信息
        if (this.playerMess && this.playerMess.isValid) {
            this._playerMessY = this.playerMess.y;
            this.playerMess.setParent(this.node.parent);
            this.playerMess.zIndex = Constant_1.ZindexLayer.zindex_hp;
            this.updateMess();
        }
        else if (this.hpBar && this.hpBar.isValid) {
            this._playerMessY = this.hpBar.node.y;
            this.hpBar.node.setParent(this.node.parent);
            this.hpBar.node.zIndex = Constant_1.ZindexLayer.zindex_hp;
            this.updateMess();
        }
    };
    Person.prototype.update = function (dt) { };
    Person.prototype.lateUpdate = function (dt) { };
    /** 人物信息 */
    Person.prototype.updateMess = function () {
        if (this.playerMess && this.playerMess.isValid) {
            if (this.node && this.node.isValid && this.node.active && this.node.opacity && this.HP) {
                this.playerMess.active = true;
                this.playerMess.setPosition(this.node.x, this.node.y + this._playerMessY);
            }
            else {
                this.playerMess.active = false;
            }
        }
        else if (this.hpBar && this.hpBar.isValid && this.hpBar.node && this.hpBar.node.isValid) {
            if (this.node && this.node.isValid && this.node.active && this.node.opacity && this.HP) {
                this.hpBar.node.active = true;
                this.hpBar.node.setPosition(this.node.x, this.node.y + this._playerMessY);
            }
            else {
                this.hpBar.node.active = false;
            }
        }
    };
    /** 光环 */
    Person.prototype.updateGhAni = function () {
        if (this.ghAniNode && this.ghAniNode.isValid) {
            if (this.node && this.node.isValid && this.node.active && this.node.opacity && this.HP) {
                this.ghAniNode.active = true;
                this.ghAniNode.angle = this.node.angle;
                this.ghAniNode.setPosition(this.node.x, this.node.y - 90);
            }
            else {
                this.ghAniNode.active = false;
            }
        }
    };
    /** 烟尘 */
    Person.prototype.updateYcAni = function () {
        if (this.ycAniNode && this.ycAniNode.isValid) {
            if (this.node && this.node.isValid && this.node.active && this.node.opacity && this.HP && !this.moveDir.equals(cc.Vec2.ZERO)) {
                this.ycAniNode.active = true;
                this.ycAniNode.setPosition(this.node.x, this.node.y - 50);
                this.ycAniNode.scaleX = this.moveDir.x > 0 ? 1 : -1;
            }
            else {
                this.ycAniNode.active = false;
            }
        }
    };
    Person.prototype.setProperty = function () {
        var _this = this;
        this.ani = this.body.getComponent(cc.Animation);
        this.node.getComponent(cc.CircleCollider).radius = this.detectRange;
        if (this.isPlayer)
            this.atkRange = 1000;
        this.personLevel = Math.floor(Math.random() * 6);
        var num1 = weapon_1.default.meleeWaapon[Math.floor(Math.random() * weapon_1.default.meleeWaapon.length)];
        var num2 = weapon_1.default.rangeWeapon[Math.floor(Math.random() * 13 /* Weapon.rangedWeapon.length */)];
        if (this.isPlayer) {
            num1 = CocosZ_1.cocosz.dataMgr.CurMelee + 1;
            num2 = CocosZ_1.cocosz.dataMgr.CurRange + 1;
            if (CocosZ_1.cocosz.gameMgr.gameCtr.curUseSkinId < 0) {
                this.curSkin = CocosZ_1.cocosz.dataMgr.CurSkinId;
            }
            else {
                this.curSkin = CocosZ_1.cocosz.gameMgr.gameCtr.curUseSkinId;
            }
            this.head.children[0].children[this.curSkin].active = true;
            var head1 = this.head.children[0].children[this.curSkin];
            this.head.children[1].children[this.curSkin].active = true;
            var head2 = this.head.children[1].children[this.curSkin];
            for (var i = this.head.children[0].childrenCount - 1; i >= 0; i--) {
                if (this.head.children[0].children[i].uuid != head1.uuid) {
                    this.head.children[0].children[i].destroy();
                }
            }
            for (var i = this.head.children[1].childrenCount - 1; i >= 0; i--) {
                if (this.head.children[1].children[i].uuid != head2.uuid) {
                    this.head.children[1].children[i].destroy();
                }
            }
            // 表情(父节点设置为正脸)
            this.head_atk = this.head.children[2].children[this.curSkin];
            this.head_atk.active = true;
            this.head_atk.opacity = 0;
            this.head_hart = this.head.children[3].children[this.curSkin];
            this.head_hart.active = true;
            this.head_hart.opacity = 0;
            this.head_death = this.head.children[4].children[this.curSkin];
            this.head_death.active = true;
            this.head_death.opacity = 0;
            this.head_atk.setParent(this.head.children[0]);
            this.head_hart.setParent(this.head.children[0]);
            this.head_death.setParent(this.head.children[0]);
            this.head_atk.zIndex = 1;
            this.head_hart.zIndex = 2;
            this.head_death.zIndex = 3;
            // 删除多余表情
            this.head.children[2].destroy();
            this.head.children[3].destroy();
            this.head.children[4].destroy();
            this.personLevel = CocosZ_1.cocosz.dataMgr.getSkinInfo(this.curSkin).Level;
            this.personAtk = gameDate_1.default.SkinMess["" + (this.curSkin + 1)].atk[this.personLevel];
            if (CocosZ_1.cocosz.gameMode == 6 || CocosZ_1.cocosz.gameMode == 8) {
                this.totleHp = gameDate_1.default.SkinMess["" + (this.curSkin + 1)].xuedi;
            }
            else {
                this.totleHp = gameDate_1.default.SkinMess["" + (this.curSkin + 1)].hp[this.personLevel];
            }
            // 玩家血量增加
            if ([1, 2, 4].includes(CocosZ_1.cocosz.gameMode)) {
                this.totleHp *= 4;
            }
            else if (3 == CocosZ_1.cocosz.gameMode) {
                if (CocosZ_1.cocosz.curLevel >= 15) {
                    this.totleHp *= 9;
                }
                else if (CocosZ_1.cocosz.curLevel >= 10) {
                    this.totleHp *= 8;
                }
                else if (CocosZ_1.cocosz.curLevel >= 5) {
                    this.totleHp *= 6;
                }
                else {
                    this.totleHp *= 4;
                }
            }
            else if (5 == CocosZ_1.cocosz.gameMode) {
                this.totleHp *= 6;
            }
            else if (7 == CocosZ_1.cocosz.gameMode) {
                this.totleHp *= 3;
            }
            this.HP = this.totleHp;
        }
        else { }
        // 初始武器
        if (CocosZ_1.cocosz.gameMode == 4) {
            if (this.isPlayer) {
                this.setNewWeapon(14 - 1); // 玩家固定木棒
            }
            else {
                this.setNewWeapon(num1 - 1); // 敌人随机近战武器
            }
            this.changeCurWeapon(this.meleeWeapon, false);
        }
        else {
            if (CocosZ_1.cocosz.gameMode === 7) {
                this.setNewWeapon(num2 - 1);
            }
            else {
                this.setNewWeapon(num1 - 1);
                this.setNewWeapon(num2 - 1);
            }
            this.changeCurWeapon(this.rangedWeapon, false);
            // 广告远程武器
            if (this.isPlayer /* && cocosz.isShowAd */) {
                cc.tween(gameMgr_1.gameMgr.rangedWeaponAdMess)
                    .call(function () {
                    _this.refreshWeaponAd();
                })
                    .delay(10)
                    .union()
                    .repeatForever()
                    .start();
            }
        }
        // 血条
        if (CocosZ_1.cocosz.gameMode == 6 || CocosZ_1.cocosz.gameMode == 8) {
            this.hpBar.node.active = false;
            this.atkBar.node.active = false;
        }
        // 角色速度
        this.MoveSpeed = 200 + gameDate_1.default.SkinMess["" + (this.curSkin + 1)].speed[this.personLevel];
        if (PlatUtils_1.default.IsOPPO) {
            this.MoveSpeed /= 2;
        }
        // 光环
        if (this.personLevel > 0) {
            this.ghAniNode.color = cc.Color.WHITE;
            var arr = ["", "y", "p", "r"];
            var ghAni = this.ghAniNode.getComponent(sp.Skeleton);
            if (ghAni) {
                ghAni.setSkin(arr[Math.ceil(this.personLevel / 2)]);
            }
        }
        else {
            this.ghAniNode.color = cc.Color.BLACK;
            var ghAni = this.ghAniNode.getComponent(sp.Skeleton);
            ghAni.setSkin("r");
            ghAni.setAnimation(0, "animation", true);
        }
        if (!this.playerName) {
            this.playerName = i18n.t("game.player") + this.id;
        }
        var name = this.playerMess.getChildByName("nameLabel");
        if (name)
            name.active = false;
        this.lastPos = this.node.getPosition();
        this.isReady = true;
    };
    Person.prototype.refreshWeaponAd = function () {
        if (CocosZ_1.cocosz.isPause || !this.isPlayer) {
            return;
        }
        if (++this.weaponAdIndex >= this.weaponAdArr.length) {
            this.weaponAdIndex = 0;
        }
        var weaponNum = this.weaponAdArr[this.weaponAdIndex];
        var str = weapon_1.default.WeaponName[weaponNum];
        var prefab = CocosZ_1.cocosz.resMgr.getRes("weapon_" + str, cc.Prefab);
        var new_weapon = cc.instantiate(prefab);
        var new_weaponTs = new_weapon.getComponent(weapon_1.default);
        // 初始化
        new_weaponTs.person = this;
        this.body.addChild(new_weapon);
        new_weapon.active = false;
        new_weaponTs.weaponType = weapon_1.WeaponType.weapon_rangeAd;
        this.rangedWeaponAd && this.rangedWeaponAd.destroy();
        this.rangedWeaponAd = new_weapon;
        this.rangedWeaponAdNum = new_weaponTs.weaponNum;
        var str2 = "w_" + weapon_1.default.WeaponName[this.rangedWeaponAdNum - 1];
        var spr2 = CocosZ_1.cocosz.resMgr.getRes(str2, cc.SpriteFrame);
        gameMgr_1.gameMgr.rangedWeaponAdMess.children[3].getComponent(cc.Sprite).spriteFrame = spr2;
        gameMgr_1.gameMgr.rangedWeaponAdMess.children[4].getComponent(cc.Sprite).spriteFrame = CocosZ_1.cocosz.resMgr.getRes("w_" + (weaponNum + 1), cc.SpriteFrame);
        gameMgr_1.gameMgr.rangedWeaponAdMess.children[5].getComponent(cc.Label).string = new_weaponTs.atkNum.toString();
        new_weaponTs.setBulletUI();
    };
    Person.prototype.setNewWeapon = function (weaponNum) {
        if (weaponNum === void 0) { weaponNum = this.newWeapon; }
        if (weaponNum < 0)
            return;
        var str = weapon_1.default.WeaponName[weaponNum];
        var prefab = CocosZ_1.cocosz.resMgr.getRes("weapon_" + str, cc.Prefab);
        var new_weapon = cc.instantiate(prefab);
        var new_weaponTs = new_weapon.getComponent(weapon_1.default);
        new_weaponTs.person = this;
        this.body.addChild(new_weapon);
        new_weapon.active = false;
        if (new_weaponTs.isRangeWeapon) {
            if (this.curWeapon && this.curWeapon.weaponType == weapon_1.WeaponType.weapon_rangeAd) {
                // 设置广告远程
                new_weaponTs.weaponType = weapon_1.WeaponType.weapon_rangeAd;
                this.rangedWeaponAd && this.rangedWeaponAd.destroy();
                this.rangedWeaponAd = new_weapon;
                this.rangedWeaponAdNum = new_weaponTs.weaponNum;
                if (this.isPlayer) {
                    var str2 = "w_" + weapon_1.default.WeaponName[this.rangedWeaponAdNum - 1];
                    var spr2 = CocosZ_1.cocosz.resMgr.getRes(str2, cc.SpriteFrame);
                    gameMgr_1.gameMgr.rangedWeaponAdMess.children[3].getComponent(cc.Sprite).spriteFrame = spr2;
                    gameMgr_1.gameMgr.rangedWeaponAdMess.children[4].getComponent(cc.Sprite).spriteFrame = CocosZ_1.cocosz.resMgr.getRes("w_" + (weaponNum + 1), cc.SpriteFrame);
                    gameMgr_1.gameMgr.rangedWeaponAdMess.children[5].getComponent(cc.Label).string = new_weaponTs.atkNum.toString();
                    new_weaponTs.setBulletUI();
                }
            }
            else {
                // 设置远程
                new_weaponTs.weaponType = weapon_1.WeaponType.weapon_range;
                this.rangedWeapon && this.rangedWeapon.destroy();
                this.rangedWeapon = new_weapon;
                this.rangedWeaponNum = new_weaponTs.weaponNum;
                if (this.isPlayer) {
                    var str2 = "w_" + weapon_1.default.WeaponName[this.rangedWeaponNum - 1];
                    var spr2 = CocosZ_1.cocosz.resMgr.getRes(str2, cc.SpriteFrame);
                    gameMgr_1.gameMgr.rangedWeaponMess.children[3].getComponent(cc.Sprite).spriteFrame = spr2;
                    gameMgr_1.gameMgr.rangedWeaponMess.children[4].getComponent(cc.Sprite).spriteFrame = CocosZ_1.cocosz.resMgr.getRes("w_" + (weaponNum + 1), cc.SpriteFrame);
                    gameMgr_1.gameMgr.rangedWeaponMess.children[5].getComponent(cc.Label).string = new_weaponTs.atkNum.toString();
                    new_weaponTs.setBulletUI();
                }
            }
        }
        else {
            // 设置近战
            new_weaponTs.weaponType = weapon_1.WeaponType.weapon_melee;
            this.meleeWeapon && this.meleeWeapon.destroy();
            this.meleeWeapon = new_weapon;
            this.meleeWeaponNum = new_weaponTs.weaponNum;
        }
        // 替换当前武器
        if (this.curWeapon && this.curWeapon.isRangeWeapon === new_weaponTs.isRangeWeapon) {
            this.changeCurWeapon(new_weapon, false);
        }
        // 销毁武器道具
        this.newWeapon = -1;
        if (this.newWeaponItem && this.newWeaponItem.isValid)
            this.newWeaponItem.destroy();
        this.newWeaponItem = null;
    };
    Person.prototype.changeCurWeapon = function (newWeaponNode, isCheck) {
        if (isCheck === void 0) { isCheck = true; }
        if (!newWeaponNode || !newWeaponNode.isValid)
            return;
        if (this.curWeapon && this.curWeapon.isValid && newWeaponNode == this.curWeapon.node)
            return;
        var curTime = Number(new Date());
        if (isCheck && (curTime - this.lastTime < 1000))
            return;
        this.lastTime = curTime;
        // 切换武器显示
        if (this.curWeapon && cc.isValid(this.curWeapon))
            this.curWeapon.node.active = false;
        newWeaponNode.active = true;
        // 切换当前武器
        var newWeapinTs = newWeaponNode.getComponent(weapon_1.default);
        if (newWeapinTs) {
            // UI效果
            if (this.isPlayer) {
                var newWeapinMess = null;
                if (newWeapinTs.weaponType == weapon_1.WeaponType.weapon_melee) {
                    gameMgr_1.gameMgr.BtnBullet.active = false;
                }
                else if (newWeapinTs.weaponType == weapon_1.WeaponType.weapon_range) {
                    newWeapinMess = gameMgr_1.gameMgr.rangedWeaponMess;
                }
                else if (newWeapinTs.weaponType == weapon_1.WeaponType.weapon_rangeAd) {
                    newWeapinMess = gameMgr_1.gameMgr.rangedWeaponAdMess;
                }
                newWeapinMess.children[0].active = true;
                if (this.curWeapon && this.curWeapon.isValid) {
                    CocosZ_1.cocosz.audioMgr.playEffect("changeWeapon");
                    var oldWeapinMess_1 = null;
                    if (this.curWeapon.weaponType == weapon_1.WeaponType.weapon_melee) {
                    }
                    else if (this.curWeapon.weaponType == weapon_1.WeaponType.weapon_range) {
                        oldWeapinMess_1 = gameMgr_1.gameMgr.rangedWeaponMess;
                    }
                    else if (this.curWeapon.weaponType == weapon_1.WeaponType.weapon_rangeAd) {
                        oldWeapinMess_1 = gameMgr_1.gameMgr.rangedWeaponAdMess;
                    }
                    if (oldWeapinMess_1 !== newWeapinMess) {
                        oldWeapinMess_1.children[0].active = false;
                        oldWeapinMess_1.children[1].active = true;
                        cc.tween(oldWeapinMess_1.children[1].getComponent(cc.Sprite))
                            .set({ fillRange: -1 })
                            .to(1, { fillRange: 0 })
                            .call(function () {
                            if (oldWeapinMess_1.isValid) {
                                oldWeapinMess_1.children[1].active = false;
                            }
                        })
                            .start();
                    }
                }
            }
            // 开火点
            if (newWeapinTs.isRangeWeapon) {
                this.startPosNode = newWeaponNode.getChildByName("startPos");
            }
            this.curWeapon = newWeapinTs;
            this.atkNum = this.curWeapon.atkNum * (this.curWeapon.isRangeWeapon ? 1 : this.meleeAtkRate);
            this.atkSpeed = this.curWeapon.atkSpeed;
            this.reloadSpeed = this.curWeapon.reload;
        }
    };
    Person.prototype.atkStart = function () { };
    Person.prototype.atkEnemy = function () { };
    Person.prototype.atkComplete = function () { };
    Person.prototype.setWeaponAngle = function (dir) {
        if (this.curWeapon && this.curWeapon.isValid && this.curWeapon.isRangeWeapon) {
            if (dir.equals(cc.Vec2.ZERO)) {
                this.curWeapon.node.angle = 0;
            }
            else {
                if (dir.x < 0) {
                    this.curWeapon.node.angle = cc.v2(dir).signAngle(cc.v2(-1, 0)) / Math.PI * 180;
                }
                else {
                    this.curWeapon.node.angle = -cc.v2(dir).signAngle(cc.v2(1, 0)) / Math.PI * 180;
                }
                if (dir.y > 0) {
                    if (this.curWeapon.node)
                        this.rangedWeapon.zIndex = -1;
                }
                else {
                    if (this.curWeapon.node)
                        this.rangedWeapon.zIndex = 1;
                }
            }
        }
    };
    /**
     * 设置动画
     * @param name 动画名字
     * @param enforce 强制播放
     */
    Person.prototype.updateAni = function (name, enforce) {
        if (enforce === void 0) { enforce = false; }
        if (enforce) {
            this._playAni(name);
        }
        else if (gameMgr_1.gameMgr.isGameStart) {
            if (this.isDeath) {
                name = "die";
            }
            else if (this.moveDir.equals(cc.Vec2.ZERO)) {
                name = "daiji_body";
            }
            else {
                name = "run_body";
            }
            this._playAni(name);
        }
    };
    Person.prototype._playAni = function (name) {
        if (name && name != this._aniName) {
            this.ani.play(name);
            this._aniName = name;
        }
    };
    Person.prototype.getCurSpeed = function () {
        var speed = this.MoveSpeed * this.speedRate * (this.curWeapon && this.curWeapon.isRangeWeapon ? 1 : 1.2);
        if (speed > 1000)
            speed = 1000;
        return speed;
    };
    Person.prototype.udpateRBody = function (dir) {
        if (this.rig.type == cc.RigidBodyType.Dynamic) {
            if (this.canMove) {
                if (!dir.equals(cc.Vec2.ZERO)) {
                    this.rig.linearVelocity = dir.mul(this.getCurSpeed());
                }
                else {
                    this.rig.linearVelocity = cc.Vec2.ZERO;
                }
            }
        }
    };
    Person.prototype.updatePerson = function () {
        var dir = null;
        if (this.atkDir && !this.atkDir.equals(cc.Vec2.ZERO)) {
            dir = this.atkDir;
        }
        else if (this.moveDir && !this.moveDir.equals(cc.Vec2.ZERO)) {
            dir = this.moveDir;
        }
        else {
            return;
        }
        if (dir.x < 0)
            this.body.scaleX = -Math.abs(this.body.scaleX);
        else
            this.body.scaleX = Math.abs(this.body.scaleX);
        if (dir.y > 0) {
            this.leg_back.opacity = 255;
            this.leg.opacity = 0;
            this.head.children[1].opacity = 255;
            this.head.children[0].opacity = 0;
        }
        else {
            this.leg_back.opacity = 0;
            this.leg.opacity = 255;
            this.head.children[0].opacity = 255;
            this.head.children[1].opacity = 0;
        }
        // 远程武器
        this.setWeaponAngle(dir);
    };
    Person.prototype.updateAtk = function () {
        if (this.atkList.length > 0) {
            var dt = 1000;
            var n = -1;
            for (var i = 0; i < this.atkList.length; i++) {
                var ts = this.atkList[i].getComponent(Person_1);
                var dt2 = this.atkList[i].getPosition().sub(this.node.getPosition()).mag();
                if (dt2 < dt) {
                    dt = dt2;
                    n = i;
                }
            }
            if (n >= 0) {
                this.atkDir = cc.v2(this.atkList[n].getPosition().sub(this.node.getPosition()).normalize());
                this.atkTarget = this.atkList[n];
            }
            else {
                this.atkDir = this.moveDir.mag() == 0 ? this.atkDir : cc.v2(this.moveDir);
            }
        }
        else {
            this.atkDir = this.moveDir.mag() == 0 ? this.atkDir : cc.v2(this.moveDir);
        }
    };
    // 0:检测碰撞；1:检测子弹；2:检测在层级下，3:检测在层级上
    Person.prototype.onCollisionEnter = function (other, self) { };
    Person.prototype.onCollisionExit = function (other, self) { };
    /** 受伤 */
    Person.prototype.hart = function (atkNum, from, dir, isAudio, isEmit, labelColor) {
        if (dir === void 0) { dir = null; }
        if (isAudio === void 0) { isAudio = true; }
        if (isEmit === void 0) { isEmit = true; }
    };
    /** 免伤 */
    Person.prototype.avoidInjury = function (time) {
        var _this = this;
        this.isAvoidInjury++;
        this.scheduleOnce(function () {
            _this.isAvoidInjury--;
        }, time);
    };
    Person.prototype.death = function () {
        this.isDeath = true;
        // 隐藏光环
        if (this.ghAniNode && this.ghAniNode.isValid) {
            this.ghAniNode.active = false;
        }
        if (this.playerMess && this.playerMess.isValid) {
            this.playerMess.active = false;
        }
        this.head_death.opacity = 255;
        // 死亡音效
        gameMgr_1.gameMgr.playEffect("death", this.node);
        this.unscheduleAllCallbacks();
        // this.ani.stop();
        // this.ani.play("die");
        this.updateAni("die");
        if (this.meleeWeapon) {
            var ani = this.meleeWeapon.getComponent(cc.Animation);
            ani && ani.stop();
        }
        this.leg.opacity = 255;
        this.leg_back.opacity = 0;
        this.head.children[0].opacity = 255;
        this.head.children[1].opacity = 0;
        if (this.curWeapon && this.curWeapon.isValid)
            this.curWeapon.node.active = false;
        if (this.rig)
            this.rig.active = false;
        this.node.getComponent(cc.BoxCollider).enabled = false;
        this.node.getComponent(cc.CircleCollider).enabled = false;
        gameMgr_1.gameMgr.deathNum++;
        if (this.isPlayer) {
            var rate = 0.3;
            cc.director.getScheduler().setTimeScale(rate);
            setTimeout(function () {
                cc.director.getScheduler().setTimeScale(1);
            }, rate * 3000);
        }
        // if(!Constant.isEndless){
        //     if (this.isPlayer) {
        //         if (!gameMgr.isWin && !gameMgr.isFail) {
        //             this.revivePos = this.node.getPosition();
        //             this.scheduleOnce(() => {
        //                 cocosz.uiMgr.openPanel(PanelName.UIRevivePanel);
        //             }, 2)
        //         }
        //     }
        // }else{
        // if (this.isPlayer) {
        //     if (!gameMgr.isWin && !gameMgr.isFail) {
        //         this.revivePos = this.node.getPosition();
        //         gameMgr.fail();
        //     }
        // }
        // }
        if (this.isPlayer) {
            if (!gameMgr_1.gameMgr.isWin && !gameMgr_1.gameMgr.isFail) {
                this.revivePos = this.node.getPosition();
                gameMgr_1.gameMgr.fail();
            }
        }
    };
    Person.prototype.revive = function () {
        if (gameMgr_1.gameMgr && !gameMgr_1.gameMgr.isWin && !gameMgr_1.gameMgr.isFail) {
            gameMgr_1.gameMgr.deathNum--;
            // 恢复光环
            if (this.ghAniNode && this.ghAniNode.isValid) {
                this.ghAniNode.active = true;
            }
            if (this.playerMess && this.playerMess.isValid) {
                this.playerMess.active = true;
            }
            if (this.rangedWeapon)
                this.rangedWeapon.getComponent(weapon_1.default).reset();
            if (this.rangedWeaponAd)
                this.rangedWeaponAd.getComponent(weapon_1.default).reset();
            // if (this.rangedWeapon) this.rangedWeapon.zIndex = 1;
            // if (this.rangedWeapon) this.rangedWeapon.angle = 0;
            if (this.meleeWeapon) {
                var ani = this.meleeWeapon.getComponent(cc.Animation);
                ani && ani.play();
            }
            if (this.curWeapon && this.curWeapon.isValid)
                this.curWeapon.node.active = true;
            this.head_death.opacity = 0;
            var pos = this.revivePos;
            this.node.setPosition(pos);
            this.HP = this.totleHp;
            this.body.setPosition(cc.v2(0, 0));
            this.body.angle = 0;
            this.leg.opacity = 255;
            this.leg_back.opacity = 0;
            this.head.children[0].opacity = 255;
            this.head.children[1].opacity = 0;
            if (this.node.scaleX < 0)
                this.node.scaleX *= -1;
            if (this.rig)
                this.rig.active = true;
            // this.node.getComponent(cc.RigidBody).enabled = true;
            this.node.getComponent(cc.BoxCollider).enabled = true;
            this.node.getComponent(cc.CircleCollider).enabled = true;
            this.isDeath = false;
            this.canMove = true;
        }
    };
    Person.prototype.creatItem = function () { };
    var Person_1;
    __decorate([
        property(cc.Material)
    ], Person.prototype, "mat_common", void 0);
    __decorate([
        property(cc.Material)
    ], Person.prototype, "mat_attacked", void 0);
    __decorate([
        property(cc.Node)
    ], Person.prototype, "body", void 0);
    __decorate([
        property(cc.Node)
    ], Person.prototype, "leg", void 0);
    __decorate([
        property(cc.Node)
    ], Person.prototype, "leg_back", void 0);
    __decorate([
        property(cc.Node)
    ], Person.prototype, "head", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], Person.prototype, "hpBar", void 0);
    __decorate([
        property(cc.Node)
    ], Person.prototype, "hpSpr", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], Person.prototype, "shieldBar", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], Person.prototype, "atkBar", void 0);
    Person = Person_1 = __decorate([
        ccclass
    ], Person);
    return Person;
}(cc.Component));
exports.default = Person;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZVxccGVyc29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUE4RDtBQUM5RCw4Q0FBcUQ7QUFDckQsa0RBQXlFO0FBQ3pFLHVDQUFrQztBQUNsQyxxQ0FBb0M7QUFDcEMsbUNBQThDO0FBQzlDLGFBQWE7QUFDYixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFL0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUEydkJDO1FBMXZCRyxPQUFPO1FBQ1AsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixTQUFTO1FBQ1QsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsY0FBUSxHQUFXLEdBQUcsQ0FBQztRQUN2QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGFBQU8sR0FBVyxHQUFHLENBQUM7UUFDdEIsV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUVwQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIscUJBQWUsR0FBVyxDQUFDLENBQUM7UUFFNUIsb0JBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0IsYUFBTyxHQUFXLENB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QVMsR0FBVCxjQUFjLENBQUM7O0lBL3NCZjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzhDQUNTO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0RBQ1c7SUFLakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VDQUNFO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3lDQUNJO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FDUTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzBDQUNLO0lBaEViLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0EydkIxQjtJQUFELGFBQUM7Q0EzdkJELEFBMnZCQyxDQTN2Qm1DLEVBQUUsQ0FBQyxTQUFTLEdBMnZCL0M7a0JBM3ZCb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF0VXRpbHMgZnJvbSBcIi4uLy4uL2NvbW1vbi1wbHVnaW4vU2NyaXB0cy9QbGF0VXRpbHNcIjtcclxuaW1wb3J0IENvY29zWiwgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgQ29uc3RhbnQsIHsgUGFuZWxOYW1lLCBaaW5kZXhMYXllciB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuaW1wb3J0IEdhbWVEYXRlIGZyb20gXCIuL2dhbWVEYXRlXCI7XHJcbmltcG9ydCB7IGdhbWVNZ3IgfSBmcm9tIFwiLi9nYW1lTWdyXCI7XHJcbmltcG9ydCBXZWFwb24sIHsgV2VhcG9uVHlwZSB9IGZyb20gXCIuL3dlYXBvblwiO1xyXG4vLyBAdHMtaWdub3JlXHJcbmNvbnN0IGkxOG4gPSByZXF1aXJlKCdMYW5ndWFnZURhdGEnKTtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzb24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLy8g5YWJ546v54m55pWIXHJcbiAgICBnaEFuaU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8g54Of5bCY5Yqo55S76IqC54K5XHJcbiAgICB5Y0FuaU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHBlcnNvbkF0azogbnVtYmVyID0gMDtcclxuICAgIHBsYXllck5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwZXJzb25MZXZlbDogbnVtYmVyID0gMDtcclxuICAgIGF0a051bTogbnVtYmVyID0gNDA7XHJcbiAgICBhdGtSYW5nZTogbnVtYmVyID0gODAwO1xyXG4gICAgYXRrU3BlZWQ6IG51bWJlciA9IDQ7XHJcbiAgICByZWxvYWRTcGVlZDogbnVtYmVyID0gMjtcclxuICAgIHRvdGxlSHA6IG51bWJlciA9IDMwMDtcclxuICAgIGN1ckhwOiBudW1iZXIgPSAzMDA7XHJcblxyXG4gICAgYXRrUmF0ZTogbnVtYmVyID0gMTtcclxuICAgIHNwZWVkUmF0ZTogbnVtYmVyID0gMTtcclxuICAgIGF0a1NwZWVkUmF0ZTogbnVtYmVyID0gMTtcclxuICAgIHJlbG9hZFJhdGU6IG51bWJlciA9IDE7XHJcbiAgICBidWxsZXRSYXRlOiBudW1iZXIgPSAxO1xyXG4gICAgbWVsZWVBdGtSYXRlOiBudW1iZXIgPSAxO1xyXG4gICAgZGFtYWdlUmVkdWN0aW9uOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHJlY292ZXJJdGVtTnVtOiBudW1iZXIgPSAwO1xyXG4gICAga2lsbE51bTogbnVtYmVyID0gMDtcclxuICAgIGN1cktpbGxOdW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgTW92ZVNwZWVkOiBudW1iZXIgPSA2MDA7XHJcbiAgICBtb3ZlRGlyOiBjYy5WZWMyID0gY2MudjIoMCwgMCk7XHJcbiAgICBhdGtEaXI6IGNjLlZlYzIgPSBjYy52MigwLCAwKTtcclxuXHJcbiAgICBmb290TnVtOiBudW1iZXIgPSAwO1xyXG4gICAgbGFzdFBvczogY2MuVmVjMiA9IGNjLnYyKDAsIDApO1xyXG5cclxuICAgIC8vIOW8gOWFs1xyXG4gICAgcHVibGljIGNhbk1vdmU6IGJvb2xlYW4gPSB0cnVlOy8v6IO95ZCm56e75YqoXHJcbiAgICBwdWJsaWMgY2FuTW92ZURpcjogYm9vbGVhbiA9IHRydWU7Ly/og73lkKbmlLnlj5jnp7vliqjmlrnlkJFcclxuXHJcbiAgICAvLyDmo4DmtYvojIPlm7RcclxuICAgIGRldGVjdFJhbmdlOiBudW1iZXIgPSAxMDAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5NYXRlcmlhbClcclxuICAgIG1hdF9jb21tb246IGNjLk1hdGVyaWFsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5NYXRlcmlhbClcclxuICAgIG1hdF9hdHRhY2tlZDogY2MuTWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm9keTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxlZzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxlZ19iYWNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGVhZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBocEJhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBocFNwcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBzaGllbGRCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIGF0a0JhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICAgIGhlYWRfYXRrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGhlYWRfaGFydDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBoZWFkX2RlYXRoOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwbGF5ZXJNZXNzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGFuaTogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICBpZDogbnVtYmVyID0gMDsvLzHnjqnlrrZcclxuICAgIGlzUGxheWVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBhdGtUYXJnZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHdlYXBvbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICB3ZWFwb25fZGFvOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBocE51bU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGdldCBIUCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJIcDtcclxuICAgIH1cclxuICAgIHNldCBIUChudW0pIHtcclxuICAgICAgICBudW0gPSBNYXRoLmZsb29yKG51bSk7XHJcbiAgICAgICAgaWYgKG51bSA8IDApIG51bSA9IDA7XHJcbiAgICAgICAgZWxzZSBpZiAobnVtID4gdGhpcy50b3RsZUhwKSBudW0gPSB0aGlzLnRvdGxlSHA7XHJcbiAgICAgICAgdGhpcy5jdXJIcCA9IG51bTtcclxuXHJcbiAgICAgICAgLy8g6KGA5p2hXHJcbiAgICAgICAgaWYgKHRoaXMuaHBCYXIgJiYgdGhpcy5ocEJhci5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHBCYXIucHJvZ3Jlc3MgPSB0aGlzLmN1ckhwIC8gdGhpcy50b3RsZUhwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDkuLvliqjkvb/nlKjpgZPlhbdcclxuICAgICAgICBpZiAodGhpcy5pc1BsYXllcikge1xyXG4gICAgICAgICAgICBpZiAoY29jb3N6LmdhbWVNb2RlID09IDYgfHwgY29jb3N6LmdhbWVNb2RlID09IDgpIHtcclxuICAgICAgICAgICAgICAgIGdhbWVNZ3IudXBkYXRlX21vZGVsNl94dWVkaSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3NoaWVsZDogbnVtYmVyID0gMDtcclxuICAgIG1heFNoaWVsZDogbnVtYmVyID0gMTAwO1xyXG4gICAgZ2V0IFNoaWxlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2hpZWxkO1xyXG4gICAgfVxyXG4gICAgc2V0IFNoaWxlZChudW0pIHtcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5zaGllbGRCYXIpO1xyXG4gICAgICAgIHRoaXMuX3NoaWVsZCA9IG51bTtcclxuICAgICAgICBpZiAodGhpcy5fc2hpZWxkIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zaGllbGQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnNoaWVsZEJhci5ub2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkuZ2V0Q2hpbGRCeU5hbWUoXCJib2R5XCIpLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaGllbGRCYXIubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy50d2Vlbih0aGlzLnNoaWVsZEJhcikudG8oMC4zLCB7IHByb2dyZXNzOiB0aGlzLl9zaGllbGQgLyB0aGlzLm1heFNoaWVsZCB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJpZzogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQgeyB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOS6uueJqeS/oeaBr1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllck1lc3MgJiYgdGhpcy5wbGF5ZXJNZXNzLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyTWVzc1kgPSB0aGlzLnBsYXllck1lc3MueTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJNZXNzLnNldFBhcmVudCh0aGlzLm5vZGUucGFyZW50KTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJNZXNzLnpJbmRleCA9IFppbmRleExheWVyLnppbmRleF9ocDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVNZXNzKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmhwQmFyICYmIHRoaXMuaHBCYXIuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJNZXNzWSA9IHRoaXMuaHBCYXIubm9kZS55O1xyXG4gICAgICAgICAgICB0aGlzLmhwQmFyLm5vZGUuc2V0UGFyZW50KHRoaXMubm9kZS5wYXJlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmhwQmFyLm5vZGUuekluZGV4ID0gWmluZGV4TGF5ZXIuemluZGV4X2hwO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1lc3MoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3VyVGltZTogbnVtYmVyID0gMDtcclxuICAgIHVwZGF0ZShkdCkgeyB9XHJcbiAgICBsYXRlVXBkYXRlKGR0KSB7IH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX3BsYXllck1lc3NZOiBudW1iZXIgPSAyMDA7XHJcbiAgICAvKiog5Lq654mp5L+h5oGvICovXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlTWVzcygpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJNZXNzICYmIHRoaXMucGxheWVyTWVzcy5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUgJiYgdGhpcy5ub2RlLmlzVmFsaWQgJiYgdGhpcy5ub2RlLmFjdGl2ZSAmJiB0aGlzLm5vZGUub3BhY2l0eSAmJiB0aGlzLkhQKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllck1lc3MuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyTWVzcy5zZXRQb3NpdGlvbih0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkgKyB0aGlzLl9wbGF5ZXJNZXNzWSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllck1lc3MuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaHBCYXIgJiYgdGhpcy5ocEJhci5pc1ZhbGlkICYmIHRoaXMuaHBCYXIubm9kZSAmJiB0aGlzLmhwQmFyLm5vZGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlICYmIHRoaXMubm9kZS5pc1ZhbGlkICYmIHRoaXMubm9kZS5hY3RpdmUgJiYgdGhpcy5ub2RlLm9wYWNpdHkgJiYgdGhpcy5IUCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ocEJhci5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhwQmFyLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLngsIHRoaXMubm9kZS55ICsgdGhpcy5fcGxheWVyTWVzc1kpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ocEJhci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDlhYnnjq8gKi9cclxuICAgIHByb3RlY3RlZCB1cGRhdGVHaEFuaSgpIHtcclxuICAgICAgICBpZiAodGhpcy5naEFuaU5vZGUgJiYgdGhpcy5naEFuaU5vZGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlICYmIHRoaXMubm9kZS5pc1ZhbGlkICYmIHRoaXMubm9kZS5hY3RpdmUgJiYgdGhpcy5ub2RlLm9wYWNpdHkgJiYgdGhpcy5IUCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5naEFuaU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2hBbmlOb2RlLmFuZ2xlID0gdGhpcy5ub2RlLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5naEFuaU5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLngsIHRoaXMubm9kZS55IC0gOTApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5naEFuaU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOeDn+WwmCAqL1xyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVljQW5pKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnljQW5pTm9kZSAmJiB0aGlzLnljQW5pTm9kZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUgJiYgdGhpcy5ub2RlLmlzVmFsaWQgJiYgdGhpcy5ub2RlLmFjdGl2ZSAmJiB0aGlzLm5vZGUub3BhY2l0eSAmJiB0aGlzLkhQICYmICF0aGlzLm1vdmVEaXIuZXF1YWxzKGNjLlZlYzIuWkVSTykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMueWNBbmlOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnljQW5pTm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkgLSA1MCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnljQW5pTm9kZS5zY2FsZVggPSB0aGlzLm1vdmVEaXIueCA+IDAgPyAxIDogLTE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnljQW5pTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc1JlYWR5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBjdXJTa2luOiBudW1iZXIgPSAwO1xyXG4gICAgc2V0UHJvcGVydHkoKSB7XHJcbiAgICAgICAgdGhpcy5hbmkgPSB0aGlzLmJvZHkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikucmFkaXVzID0gdGhpcy5kZXRlY3RSYW5nZTtcclxuICAgICAgICBpZiAodGhpcy5pc1BsYXllcikgdGhpcy5hdGtSYW5nZSA9IDEwMDA7XHJcblxyXG4gICAgICAgIHRoaXMucGVyc29uTGV2ZWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTtcclxuICAgICAgICBsZXQgbnVtMSA9IFdlYXBvbi5tZWxlZVdhYXBvbltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBXZWFwb24ubWVsZWVXYWFwb24ubGVuZ3RoKV07XHJcbiAgICAgICAgbGV0IG51bTIgPSBXZWFwb24ucmFuZ2VXZWFwb25bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTMvKiBXZWFwb24ucmFuZ2VkV2VhcG9uLmxlbmd0aCAqLyldO1xyXG4gICAgICAgIGlmICh0aGlzLmlzUGxheWVyKSB7XHJcbiAgICAgICAgICAgIG51bTEgPSBjb2Nvc3ouZGF0YU1nci5DdXJNZWxlZSArIDE7XHJcbiAgICAgICAgICAgIG51bTIgPSBjb2Nvc3ouZGF0YU1nci5DdXJSYW5nZSArIDE7XHJcbiAgICAgICAgICAgIGlmIChjb2Nvc3ouZ2FtZU1nci5nYW1lQ3RyLmN1clVzZVNraW5JZCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyU2tpbiA9IGNvY29zei5kYXRhTWdyLkN1clNraW5JZDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyU2tpbiA9IGNvY29zei5nYW1lTWdyLmdhbWVDdHIuY3VyVXNlU2tpbklkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZC5jaGlsZHJlblswXS5jaGlsZHJlblt0aGlzLmN1clNraW5dLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBoZWFkMSA9IHRoaXMuaGVhZC5jaGlsZHJlblswXS5jaGlsZHJlblt0aGlzLmN1clNraW5dO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWQuY2hpbGRyZW5bMV0uY2hpbGRyZW5bdGhpcy5jdXJTa2luXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgaGVhZDIgPSB0aGlzLmhlYWQuY2hpbGRyZW5bMV0uY2hpbGRyZW5bdGhpcy5jdXJTa2luXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaGVhZC5jaGlsZHJlblswXS5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhlYWQuY2hpbGRyZW5bMF0uY2hpbGRyZW5baV0udXVpZCAhPSBoZWFkMS51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5oZWFkLmNoaWxkcmVuWzFdLmNoaWxkcmVuQ291bnQgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhZC5jaGlsZHJlblsxXS5jaGlsZHJlbltpXS51dWlkICE9IGhlYWQyLnV1aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWQuY2hpbGRyZW5bMV0uY2hpbGRyZW5baV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOihqOaDhSjniLboioLngrnorr7nva7kuLrmraPohLgpXHJcbiAgICAgICAgICAgIHRoaXMuaGVhZF9hdGsgPSB0aGlzLmhlYWQuY2hpbGRyZW5bMl0uY2hpbGRyZW5bdGhpcy5jdXJTa2luXTtcclxuICAgICAgICAgICAgdGhpcy5oZWFkX2F0ay5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRfYXRrLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRfaGFydCA9IHRoaXMuaGVhZC5jaGlsZHJlblszXS5jaGlsZHJlblt0aGlzLmN1clNraW5dO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRfaGFydC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRfaGFydC5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5oZWFkX2RlYXRoID0gdGhpcy5oZWFkLmNoaWxkcmVuWzRdLmNoaWxkcmVuW3RoaXMuY3VyU2tpbl07XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZF9kZWF0aC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRfZGVhdGgub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmhlYWRfYXRrLnNldFBhcmVudCh0aGlzLmhlYWQuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRfaGFydC5zZXRQYXJlbnQodGhpcy5oZWFkLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICAgICAgdGhpcy5oZWFkX2RlYXRoLnNldFBhcmVudCh0aGlzLmhlYWQuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRfYXRrLnpJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZF9oYXJ0LnpJbmRleCA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZF9kZWF0aC56SW5kZXggPSAzO1xyXG4gICAgICAgICAgICAvLyDliKDpmaTlpJrkvZnooajmg4VcclxuICAgICAgICAgICAgdGhpcy5oZWFkLmNoaWxkcmVuWzJdLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5oZWFkLmNoaWxkcmVuWzNdLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5oZWFkLmNoaWxkcmVuWzRdLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVyc29uTGV2ZWwgPSBjb2Nvc3ouZGF0YU1nci5nZXRTa2luSW5mbyh0aGlzLmN1clNraW4pLkxldmVsO1xyXG4gICAgICAgICAgICB0aGlzLnBlcnNvbkF0ayA9IEdhbWVEYXRlLlNraW5NZXNzW2Ake3RoaXMuY3VyU2tpbiArIDF9YF0uYXRrW3RoaXMucGVyc29uTGV2ZWxdO1xyXG4gICAgICAgICAgICBpZiAoY29jb3N6LmdhbWVNb2RlID09IDYgfHwgY29jb3N6LmdhbWVNb2RlID09IDgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG90bGVIcCA9IEdhbWVEYXRlLlNraW5NZXNzW2Ake3RoaXMuY3VyU2tpbiArIDF9YF0ueHVlZGk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGxlSHAgPSBHYW1lRGF0ZS5Ta2luTWVzc1tgJHt0aGlzLmN1clNraW4gKyAxfWBdLmhwW3RoaXMucGVyc29uTGV2ZWxdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOeOqeWutuihgOmHj+WinuWKoFxyXG4gICAgICAgICAgICBpZiAoWzEsIDIsIDRdLmluY2x1ZGVzKGNvY29zei5nYW1lTW9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG90bGVIcCAqPSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKDMgPT0gY29jb3N6LmdhbWVNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmN1ckxldmVsID49IDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RsZUhwICo9IDk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvY29zei5jdXJMZXZlbCA+PSAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90bGVIcCAqPSA4O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2Nvc3ouY3VyTGV2ZWwgPj0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90bGVIcCAqPSA2O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGxlSHAgKj0gNDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICg1ID09IGNvY29zei5nYW1lTW9kZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3RsZUhwICo9IDY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoNyA9PSBjb2Nvc3ouZ2FtZU1vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG90bGVIcCAqPSAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuSFAgPSB0aGlzLnRvdGxlSHA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyB9XHJcbiAgICAgICAgLy8g5Yid5aeL5q2m5ZmoXHJcbiAgICAgICAgaWYgKGNvY29zei5nYW1lTW9kZSA9PSA0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldE5ld1dlYXBvbigxNCAtIDEpOy8vIOeOqeWutuWbuuWumuacqOajklxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXROZXdXZWFwb24obnVtMSAtIDEpOy8vIOaVjOS6uumaj+acuui/keaImOatpuWZqFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VyV2VhcG9uKHRoaXMubWVsZWVXZWFwb24sIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoY29jb3N6LmdhbWVNb2RlID09PSA3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldE5ld1dlYXBvbihudW0yIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldE5ld1dlYXBvbihudW0xIC0gMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldE5ld1dlYXBvbihudW0yIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VDdXJXZWFwb24odGhpcy5yYW5nZWRXZWFwb24sIGZhbHNlKTtcclxuICAgICAgICAgICAgLy8g5bm/5ZGK6L+c56iL5q2m5ZmoXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUGxheWVyIC8qICYmIGNvY29zei5pc1Nob3dBZCAqLykge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oZ2FtZU1nci5yYW5nZWRXZWFwb25BZE1lc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hXZWFwb25BZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDEwKVxyXG4gICAgICAgICAgICAgICAgICAgIC51bmlvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOihgOadoVxyXG4gICAgICAgIGlmIChjb2Nvc3ouZ2FtZU1vZGUgPT0gNiB8fCBjb2Nvc3ouZ2FtZU1vZGUgPT0gOCkge1xyXG4gICAgICAgICAgICB0aGlzLmhwQmFyLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYXRrQmFyLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOinkuiJsumAn+W6plxyXG4gICAgICAgIHRoaXMuTW92ZVNwZWVkID0gMjAwICsgR2FtZURhdGUuU2tpbk1lc3NbYCR7dGhpcy5jdXJTa2luICsgMX1gXS5zcGVlZFt0aGlzLnBlcnNvbkxldmVsXTtcclxuICAgICAgICBpZiAoUGxhdFV0aWxzLklzT1BQTykgeyB0aGlzLk1vdmVTcGVlZCAvPSAyOyB9XHJcbiAgICAgICAgLy8g5YWJ546vXHJcbiAgICAgICAgaWYgKHRoaXMucGVyc29uTGV2ZWwgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2hBbmlOb2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSBbXCJcIiwgXCJ5XCIsIFwicFwiLCBcInJcIl07XHJcbiAgICAgICAgICAgIGxldCBnaEFuaSA9IHRoaXMuZ2hBbmlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgICAgIGlmIChnaEFuaSkge1xyXG4gICAgICAgICAgICAgICAgZ2hBbmkuc2V0U2tpbihhcnJbTWF0aC5jZWlsKHRoaXMucGVyc29uTGV2ZWwgLyAyKV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5naEFuaU5vZGUuY29sb3IgPSBjYy5Db2xvci5CTEFDSztcclxuICAgICAgICAgICAgbGV0IGdoQW5pID0gdGhpcy5naEFuaU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICAgICAgZ2hBbmkuc2V0U2tpbihcInJcIik7XHJcbiAgICAgICAgICAgIGdoQW5pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5wbGF5ZXJOYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyTmFtZSA9IGkxOG4udChcImdhbWUucGxheWVyXCIpICsgdGhpcy5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLnBsYXllck1lc3MuZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lTGFiZWxcIik7XHJcbiAgICAgICAgaWYgKG5hbWUpIG5hbWUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMubGFzdFBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOinhumikeatpuWZqCAqL1xyXG4gICAgd2VhcG9uQWRBcnIgPSBbOSwgMTAsIDE0LCAxNywgMThdO1xyXG4gICAgd2VhcG9uQWRJbmRleDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy53ZWFwb25BZEFyci5sZW5ndGgpO1xyXG4gICAgcmVmcmVzaFdlYXBvbkFkKCkge1xyXG4gICAgICAgIGlmIChjb2Nvc3ouaXNQYXVzZSB8fCAhdGhpcy5pc1BsYXllcikgeyByZXR1cm47IH1cclxuICAgICAgICBpZiAoKyt0aGlzLndlYXBvbkFkSW5kZXggPj0gdGhpcy53ZWFwb25BZEFyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy53ZWFwb25BZEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHdlYXBvbk51bSA9IHRoaXMud2VhcG9uQWRBcnJbdGhpcy53ZWFwb25BZEluZGV4XTtcclxuICAgICAgICBsZXQgc3RyID0gV2VhcG9uLldlYXBvbk5hbWVbd2VhcG9uTnVtXTtcclxuICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJ3ZWFwb25fXCIgKyBzdHIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgbGV0IG5ld193ZWFwb24gPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgIGxldCBuZXdfd2VhcG9uVHM6IFdlYXBvbiA9IG5ld193ZWFwb24uZ2V0Q29tcG9uZW50KFdlYXBvbik7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgbmV3X3dlYXBvblRzLnBlcnNvbiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib2R5LmFkZENoaWxkKG5ld193ZWFwb24pO1xyXG4gICAgICAgIG5ld193ZWFwb24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgbmV3X3dlYXBvblRzLndlYXBvblR5cGUgPSBXZWFwb25UeXBlLndlYXBvbl9yYW5nZUFkO1xyXG4gICAgICAgIHRoaXMucmFuZ2VkV2VhcG9uQWQgJiYgdGhpcy5yYW5nZWRXZWFwb25BZC5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5yYW5nZWRXZWFwb25BZCA9IG5ld193ZWFwb247XHJcbiAgICAgICAgdGhpcy5yYW5nZWRXZWFwb25BZE51bSA9IG5ld193ZWFwb25Ucy53ZWFwb25OdW07XHJcblxyXG4gICAgICAgIGxldCBzdHIyID0gXCJ3X1wiICsgV2VhcG9uLldlYXBvbk5hbWVbdGhpcy5yYW5nZWRXZWFwb25BZE51bSAtIDFdO1xyXG4gICAgICAgIGxldCBzcHIyID0gY29jb3N6LnJlc01nci5nZXRSZXMoc3RyMiwgY2MuU3ByaXRlRnJhbWUpO1xyXG4gICAgICAgIGdhbWVNZ3IucmFuZ2VkV2VhcG9uQWRNZXNzLmNoaWxkcmVuWzNdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByMjtcclxuICAgICAgICBnYW1lTWdyLnJhbmdlZFdlYXBvbkFkTWVzcy5jaGlsZHJlbls0XS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwid19cIiArICh3ZWFwb25OdW0gKyAxKSwgY2MuU3ByaXRlRnJhbWUpO1xyXG4gICAgICAgIGdhbWVNZ3IucmFuZ2VkV2VhcG9uQWRNZXNzLmNoaWxkcmVuWzVdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gbmV3X3dlYXBvblRzLmF0a051bS50b1N0cmluZygpO1xyXG4gICAgICAgIG5ld193ZWFwb25Ucy5zZXRCdWxsZXRVSSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1lbGVlV2VhcG9uTnVtOiBudW1iZXIgPSAzO1xyXG4gICAgcmFuZ2VkV2VhcG9uTnVtOiBudW1iZXIgPSAxO1xyXG4gICAgcmFuZ2VkV2VhcG9uQWROdW06IG51bWJlciA9IDE7XHJcbiAgICBtZWxlZVdlYXBvbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICByYW5nZWRXZWFwb246IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcmFuZ2VkV2VhcG9uQWQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgY3VyV2VhcG9uOiBXZWFwb24gPSBudWxsO1xyXG4gICAgc3RhcnRQb3NOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHNldE5ld1dlYXBvbih3ZWFwb25OdW06IG51bWJlciA9IHRoaXMubmV3V2VhcG9uKSB7XHJcbiAgICAgICAgaWYgKHdlYXBvbk51bSA8IDApIHJldHVybjtcclxuICAgICAgICBsZXQgc3RyID0gV2VhcG9uLldlYXBvbk5hbWVbd2VhcG9uTnVtXTtcclxuICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJ3ZWFwb25fXCIgKyBzdHIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgbGV0IG5ld193ZWFwb24gPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgIGxldCBuZXdfd2VhcG9uVHM6IFdlYXBvbiA9IG5ld193ZWFwb24uZ2V0Q29tcG9uZW50KFdlYXBvbik7XHJcbiAgICAgICAgbmV3X3dlYXBvblRzLnBlcnNvbiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5ib2R5LmFkZENoaWxkKG5ld193ZWFwb24pO1xyXG4gICAgICAgIG5ld193ZWFwb24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKG5ld193ZWFwb25Ucy5pc1JhbmdlV2VhcG9uKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cldlYXBvbiAmJiB0aGlzLmN1cldlYXBvbi53ZWFwb25UeXBlID09IFdlYXBvblR5cGUud2VhcG9uX3JhbmdlQWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIOiuvue9ruW5v+WRiui/nOeoi1xyXG4gICAgICAgICAgICAgICAgbmV3X3dlYXBvblRzLndlYXBvblR5cGUgPSBXZWFwb25UeXBlLndlYXBvbl9yYW5nZUFkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5nZWRXZWFwb25BZCAmJiB0aGlzLnJhbmdlZFdlYXBvbkFkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmFuZ2VkV2VhcG9uQWQgPSBuZXdfd2VhcG9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5nZWRXZWFwb25BZE51bSA9IG5ld193ZWFwb25Ucy53ZWFwb25OdW07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1BsYXllcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHIyID0gXCJ3X1wiICsgV2VhcG9uLldlYXBvbk5hbWVbdGhpcy5yYW5nZWRXZWFwb25BZE51bSAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcHIyID0gY29jb3N6LnJlc01nci5nZXRSZXMoc3RyMiwgY2MuU3ByaXRlRnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucmFuZ2VkV2VhcG9uQWRNZXNzLmNoaWxkcmVuWzNdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByMjtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnJhbmdlZFdlYXBvbkFkTWVzcy5jaGlsZHJlbls0XS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwid19cIiArICh3ZWFwb25OdW0gKyAxKSwgY2MuU3ByaXRlRnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucmFuZ2VkV2VhcG9uQWRNZXNzLmNoaWxkcmVuWzVdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gbmV3X3dlYXBvblRzLmF0a051bS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld193ZWFwb25Ucy5zZXRCdWxsZXRVSSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8g6K6+572u6L+c56iLXHJcbiAgICAgICAgICAgICAgICBuZXdfd2VhcG9uVHMud2VhcG9uVHlwZSA9IFdlYXBvblR5cGUud2VhcG9uX3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5nZWRXZWFwb24gJiYgdGhpcy5yYW5nZWRXZWFwb24uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5nZWRXZWFwb24gPSBuZXdfd2VhcG9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5nZWRXZWFwb25OdW0gPSBuZXdfd2VhcG9uVHMud2VhcG9uTnVtO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RyMiA9IFwid19cIiArIFdlYXBvbi5XZWFwb25OYW1lW3RoaXMucmFuZ2VkV2VhcG9uTnVtIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwcjIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhzdHIyLCBjYy5TcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1nci5yYW5nZWRXZWFwb25NZXNzLmNoaWxkcmVuWzNdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByMjtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnJhbmdlZFdlYXBvbk1lc3MuY2hpbGRyZW5bNF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcIndfXCIgKyAod2VhcG9uTnVtICsgMSksIGNjLlNwcml0ZUZyYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnJhbmdlZFdlYXBvbk1lc3MuY2hpbGRyZW5bNV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBuZXdfd2VhcG9uVHMuYXRrTnVtLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3X3dlYXBvblRzLnNldEJ1bGxldFVJKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOiuvue9rui/keaImFxyXG4gICAgICAgICAgICBuZXdfd2VhcG9uVHMud2VhcG9uVHlwZSA9IFdlYXBvblR5cGUud2VhcG9uX21lbGVlO1xyXG4gICAgICAgICAgICB0aGlzLm1lbGVlV2VhcG9uICYmIHRoaXMubWVsZWVXZWFwb24uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1lbGVlV2VhcG9uID0gbmV3X3dlYXBvbjtcclxuICAgICAgICAgICAgdGhpcy5tZWxlZVdlYXBvbk51bSA9IG5ld193ZWFwb25Ucy53ZWFwb25OdW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOabv+aNouW9k+WJjeatpuWZqFxyXG4gICAgICAgIGlmICh0aGlzLmN1cldlYXBvbiAmJiB0aGlzLmN1cldlYXBvbi5pc1JhbmdlV2VhcG9uID09PSBuZXdfd2VhcG9uVHMuaXNSYW5nZVdlYXBvbikge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUN1cldlYXBvbihuZXdfd2VhcG9uLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOmUgOavgeatpuWZqOmBk+WFt1xyXG4gICAgICAgIHRoaXMubmV3V2VhcG9uID0gLTE7XHJcbiAgICAgICAgaWYgKHRoaXMubmV3V2VhcG9uSXRlbSAmJiB0aGlzLm5ld1dlYXBvbkl0ZW0uaXNWYWxpZCkgdGhpcy5uZXdXZWFwb25JdGVtLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLm5ld1dlYXBvbkl0ZW0gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGxhc3RUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgY2hhbmdlQ3VyV2VhcG9uKG5ld1dlYXBvbk5vZGU6IGNjLk5vZGUsIGlzQ2hlY2s6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKCFuZXdXZWFwb25Ob2RlIHx8ICFuZXdXZWFwb25Ob2RlLmlzVmFsaWQpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5jdXJXZWFwb24gJiYgdGhpcy5jdXJXZWFwb24uaXNWYWxpZCAmJiBuZXdXZWFwb25Ob2RlID09IHRoaXMuY3VyV2VhcG9uLm5vZGUpIHJldHVybjtcclxuICAgICAgICBsZXQgY3VyVGltZSA9IE51bWJlcihuZXcgRGF0ZSgpKTtcclxuICAgICAgICBpZiAoaXNDaGVjayAmJiAoY3VyVGltZSAtIHRoaXMubGFzdFRpbWUgPCAxMDAwKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSBjdXJUaW1lO1xyXG4gICAgICAgIC8vIOWIh+aNouatpuWZqOaYvuekulxyXG4gICAgICAgIGlmICh0aGlzLmN1cldlYXBvbiAmJiBjYy5pc1ZhbGlkKHRoaXMuY3VyV2VhcG9uKSkgdGhpcy5jdXJXZWFwb24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBuZXdXZWFwb25Ob2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8g5YiH5o2i5b2T5YmN5q2m5ZmoXHJcbiAgICAgICAgbGV0IG5ld1dlYXBpblRzID0gbmV3V2VhcG9uTm9kZS5nZXRDb21wb25lbnQoV2VhcG9uKTtcclxuICAgICAgICBpZiAobmV3V2VhcGluVHMpIHtcclxuICAgICAgICAgICAgLy8gVUnmlYjmnpxcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdXZWFwaW5NZXNzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdXZWFwaW5Ucy53ZWFwb25UeXBlID09IFdlYXBvblR5cGUud2VhcG9uX21lbGVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1nci5CdG5CdWxsZXQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1dlYXBpblRzLndlYXBvblR5cGUgPT0gV2VhcG9uVHlwZS53ZWFwb25fcmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdXZWFwaW5NZXNzID0gZ2FtZU1nci5yYW5nZWRXZWFwb25NZXNzO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdXZWFwaW5Ucy53ZWFwb25UeXBlID09IFdlYXBvblR5cGUud2VhcG9uX3JhbmdlQWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdXZWFwaW5NZXNzID0gZ2FtZU1nci5yYW5nZWRXZWFwb25BZE1lc3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXdXZWFwaW5NZXNzLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VyV2VhcG9uICYmIHRoaXMuY3VyV2VhcG9uLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheUVmZmVjdChcImNoYW5nZVdlYXBvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb2xkV2VhcGluTWVzczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VyV2VhcG9uLndlYXBvblR5cGUgPT0gV2VhcG9uVHlwZS53ZWFwb25fbWVsZWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VyV2VhcG9uLndlYXBvblR5cGUgPT0gV2VhcG9uVHlwZS53ZWFwb25fcmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkV2VhcGluTWVzcyA9IGdhbWVNZ3IucmFuZ2VkV2VhcG9uTWVzcztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VyV2VhcG9uLndlYXBvblR5cGUgPT0gV2VhcG9uVHlwZS53ZWFwb25fcmFuZ2VBZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRXZWFwaW5NZXNzID0gZ2FtZU1nci5yYW5nZWRXZWFwb25BZE1lc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRXZWFwaW5NZXNzICE9PSBuZXdXZWFwaW5NZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFdlYXBpbk1lc3MuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFdlYXBpbk1lc3MuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ob2xkV2VhcGluTWVzcy5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXQoeyBmaWxsUmFuZ2U6IC0xIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBmaWxsUmFuZ2U6IDAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkV2VhcGluTWVzcy5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFdlYXBpbk1lc3MuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlvIDngavngrlcclxuICAgICAgICAgICAgaWYgKG5ld1dlYXBpblRzLmlzUmFuZ2VXZWFwb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRQb3NOb2RlID0gbmV3V2VhcG9uTm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJ0UG9zXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY3VyV2VhcG9uID0gbmV3V2VhcGluVHM7XHJcbiAgICAgICAgICAgIHRoaXMuYXRrTnVtID0gdGhpcy5jdXJXZWFwb24uYXRrTnVtICogKHRoaXMuY3VyV2VhcG9uLmlzUmFuZ2VXZWFwb24gPyAxIDogdGhpcy5tZWxlZUF0a1JhdGUpO1xyXG4gICAgICAgICAgICB0aGlzLmF0a1NwZWVkID0gdGhpcy5jdXJXZWFwb24uYXRrU3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMucmVsb2FkU3BlZWQgPSB0aGlzLmN1cldlYXBvbi5yZWxvYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXRrU3RhcnQoKSB7IH1cclxuXHJcbiAgICBhdGtFbmVteSgpIHsgfVxyXG5cclxuICAgIGF0a0NvbXBsZXRlKCkgeyB9XHJcblxyXG4gICAgc2V0V2VhcG9uQW5nbGUoZGlyOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyV2VhcG9uICYmIHRoaXMuY3VyV2VhcG9uLmlzVmFsaWQgJiYgdGhpcy5jdXJXZWFwb24uaXNSYW5nZVdlYXBvbikge1xyXG4gICAgICAgICAgICBpZiAoZGlyLmVxdWFscyhjYy5WZWMyLlpFUk8pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cldlYXBvbi5ub2RlLmFuZ2xlID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaXIueCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cldlYXBvbi5ub2RlLmFuZ2xlID0gY2MudjIoZGlyKS5zaWduQW5nbGUoY2MudjIoLTEsIDApKSAvIE1hdGguUEkgKiAxODA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyV2VhcG9uLm5vZGUuYW5nbGUgPSAtY2MudjIoZGlyKS5zaWduQW5nbGUoY2MudjIoMSwgMCkpIC8gTWF0aC5QSSAqIDE4MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkaXIueSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJXZWFwb24ubm9kZSkgdGhpcy5yYW5nZWRXZWFwb24uekluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cldlYXBvbi5ub2RlKSB0aGlzLnJhbmdlZFdlYXBvbi56SW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9hbmlOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7liqjnlLtcclxuICAgICAqIEBwYXJhbSBuYW1lIOWKqOeUu+WQjeWtlyBcclxuICAgICAqIEBwYXJhbSBlbmZvcmNlIOW8uuWItuaSreaUvlxyXG4gICAgICovXHJcbiAgICB1cGRhdGVBbmkobmFtZT86IHN0cmluZywgZW5mb3JjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKGVuZm9yY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGxheUFuaShuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ2FtZU1nci5pc0dhbWVTdGFydCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0RlYXRoKSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJkaWVcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmVEaXIuZXF1YWxzKGNjLlZlYzIuWkVSTykpIHtcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBcImRhaWppX2JvZHlcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBcInJ1bl9ib2R5XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcGxheUFuaShuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcGxheUFuaShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAobmFtZSAmJiBuYW1lICE9IHRoaXMuX2FuaU5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmkucGxheShuYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fYW5pTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEN1clNwZWVkKCkge1xyXG4gICAgICAgIGxldCBzcGVlZDogbnVtYmVyID0gdGhpcy5Nb3ZlU3BlZWQgKiB0aGlzLnNwZWVkUmF0ZSAqICh0aGlzLmN1cldlYXBvbiAmJiB0aGlzLmN1cldlYXBvbi5pc1JhbmdlV2VhcG9uID8gMSA6IDEuMik7XHJcbiAgICAgICAgaWYgKHNwZWVkID4gMTAwMCkgc3BlZWQgPSAxMDAwO1xyXG4gICAgICAgIHJldHVybiBzcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBpc0F0azogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdWRwYXRlUkJvZHkoZGlyOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmlnLnR5cGUgPT0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbk1vdmUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghZGlyLmVxdWFscyhjYy5WZWMyLlpFUk8pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWcubGluZWFyVmVsb2NpdHkgPSBkaXIubXVsKHRoaXMuZ2V0Q3VyU3BlZWQoKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnLmxpbmVhclZlbG9jaXR5ID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBlcnNvbigpIHtcclxuICAgICAgICBsZXQgZGlyID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5hdGtEaXIgJiYgIXRoaXMuYXRrRGlyLmVxdWFscyhjYy5WZWMyLlpFUk8pKSB7XHJcbiAgICAgICAgICAgIGRpciA9IHRoaXMuYXRrRGlyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZlRGlyICYmICF0aGlzLm1vdmVEaXIuZXF1YWxzKGNjLlZlYzIuWkVSTykpIHtcclxuICAgICAgICAgICAgZGlyID0gdGhpcy5tb3ZlRGlyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkaXIueCA8IDApIHRoaXMuYm9keS5zY2FsZVggPSAtTWF0aC5hYnModGhpcy5ib2R5LnNjYWxlWCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmJvZHkuc2NhbGVYID0gTWF0aC5hYnModGhpcy5ib2R5LnNjYWxlWCk7XHJcblxyXG4gICAgICAgIGlmIChkaXIueSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sZWdfYmFjay5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmxlZy5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5oZWFkLmNoaWxkcmVuWzFdLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZC5jaGlsZHJlblswXS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVnX2JhY2sub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGVnLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZC5jaGlsZHJlblswXS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmhlYWQuY2hpbGRyZW5bMV0ub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOi/nOeoi+atpuWZqFxyXG4gICAgICAgIHRoaXMuc2V0V2VhcG9uQW5nbGUoZGlyKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVBdGsoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXRrTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBkdCA9IDEwMDA7XHJcbiAgICAgICAgICAgIGxldCBuID0gLTE7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdGtMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHMgPSB0aGlzLmF0a0xpc3RbaV0uZ2V0Q29tcG9uZW50KFBlcnNvbik7XHJcbiAgICAgICAgICAgICAgICBsZXQgZHQyID0gdGhpcy5hdGtMaXN0W2ldLmdldFBvc2l0aW9uKCkuc3ViKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKS5tYWcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChkdDIgPCBkdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGR0ID0gZHQyO1xyXG4gICAgICAgICAgICAgICAgICAgIG4gPSBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuID49IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXRrRGlyID0gY2MudjIodGhpcy5hdGtMaXN0W25dLmdldFBvc2l0aW9uKCkuc3ViKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKS5ub3JtYWxpemUoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0a1RhcmdldCA9IHRoaXMuYXRrTGlzdFtuXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXRrRGlyID0gdGhpcy5tb3ZlRGlyLm1hZygpID09IDAgPyB0aGlzLmF0a0RpciA6IGNjLnYyKHRoaXMubW92ZURpcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXRrRGlyID0gdGhpcy5tb3ZlRGlyLm1hZygpID09IDAgPyB0aGlzLmF0a0RpciA6IGNjLnYyKHRoaXMubW92ZURpcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGF0a0xpc3Q6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgY3VySXRlbTogbnVtYmVyID0gMDtcclxuICAgIGN1ckl0ZW1FZmZlY3Q6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgaXRlbVRhcmdldDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgZ3Jhc3NJRDogbnVtYmVyID0gMDtcclxuICAgIGhvdXNlSUQ6IG51bWJlciA9IDA7XHJcbiAgICBpc0luSG91c2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8vIDA65qOA5rWL56Kw5pKe77ybMTrmo4DmtYvlrZDlvLnvvJsyOuajgOa1i+WcqOWxgue6p+S4i++8jDM65qOA5rWL5Zyo5bGC57qn5LiKXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHsgfVxyXG4gICAgbmV3V2VhcG9uOiBudW1iZXIgPSAtMTtcclxuICAgIG5ld1dlYXBvbkl0ZW06IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcG9pc29uQ291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25Db2xsaXNpb25FeGl0KG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHsgfVxyXG5cclxuICAgIGlzRGVhdGg6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzQXR0YWNrZWRFZmZlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG1heE51bTogbnVtYmVyID0gMDtcclxuICAgIC8qKiDlj5fkvKQgKi9cclxuICAgIGhhcnQoYXRrTnVtOiBudW1iZXIsIGZyb206IGNjLk5vZGUsIGRpcjogY2MuVmVjMiA9IG51bGwsIGlzQXVkaW86IGJvb2xlYW4gPSB0cnVlLCBpc0VtaXQ6IGJvb2xlYW4gPSB0cnVlLCBsYWJlbENvbG9yPzogY2MuQ29sb3IpIHsgfVxyXG5cclxuICAgIGlzQXZvaWRJbmp1cnk6IG51bWJlciA9IDA7XHJcbiAgICAvKiog5YWN5LykICovXHJcbiAgICBhdm9pZEluanVyeSh0aW1lOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmlzQXZvaWRJbmp1cnkrKztcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNBdm9pZEluanVyeS0tO1xyXG4gICAgICAgIH0sIHRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGtpbGxlcjogYW55ID0gbnVsbDtcclxuICAgIGRlYXRoKCkge1xyXG4gICAgICAgIHRoaXMuaXNEZWF0aCA9IHRydWU7XHJcbiAgICAgICAgLy8g6ZqQ6JeP5YWJ546vXHJcbiAgICAgICAgaWYgKHRoaXMuZ2hBbmlOb2RlICYmIHRoaXMuZ2hBbmlOb2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5naEFuaU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBsYXllck1lc3MgJiYgdGhpcy5wbGF5ZXJNZXNzLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJNZXNzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhlYWRfZGVhdGgub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAvLyDmrbvkuqHpn7PmlYhcclxuICAgICAgICBnYW1lTWdyLnBsYXlFZmZlY3QoXCJkZWF0aFwiLCB0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICAvLyB0aGlzLmFuaS5zdG9wKCk7XHJcbiAgICAgICAgLy8gdGhpcy5hbmkucGxheShcImRpZVwiKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFuaShcImRpZVwiKTtcclxuICAgICAgICBpZiAodGhpcy5tZWxlZVdlYXBvbikge1xyXG4gICAgICAgICAgICBsZXQgYW5pID0gdGhpcy5tZWxlZVdlYXBvbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgYW5pICYmIGFuaS5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGVnLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgdGhpcy5sZWdfYmFjay5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLmhlYWQuY2hpbGRyZW5bMF0ub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLmhlYWQuY2hpbGRyZW5bMV0ub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cldlYXBvbiAmJiB0aGlzLmN1cldlYXBvbi5pc1ZhbGlkKSB0aGlzLmN1cldlYXBvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnJpZykgdGhpcy5yaWcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2lyY2xlQ29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZ2FtZU1nci5kZWF0aE51bSsrO1xyXG4gICAgICAgIGlmICh0aGlzLmlzUGxheWVyKSB7XHJcbiAgICAgICAgICAgIGxldCByYXRlID0gMC4zO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS5zZXRUaW1lU2NhbGUocmF0ZSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkuc2V0VGltZVNjYWxlKDEpO1xyXG4gICAgICAgICAgICB9LCByYXRlICogMzAwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZighQ29uc3RhbnQuaXNFbmRsZXNzKXtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuaXNQbGF5ZXIpIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmICghZ2FtZU1nci5pc1dpbiAmJiAhZ2FtZU1nci5pc0ZhaWwpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnJldml2ZVBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYW5lbChQYW5lbE5hbWUuVUlSZXZpdmVQYW5lbCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSwgMilcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuaXNQbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoIWdhbWVNZ3IuaXNXaW4gJiYgIWdhbWVNZ3IuaXNGYWlsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMucmV2aXZlUG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGdhbWVNZ3IuZmFpbCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQbGF5ZXIpIHtcclxuICAgICAgICAgICAgaWYgKCFnYW1lTWdyLmlzV2luICYmICFnYW1lTWdyLmlzRmFpbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXZpdmVQb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGdhbWVNZ3IuZmFpbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldml2ZSgpIHtcclxuICAgICAgICBpZiAoZ2FtZU1nciAmJiAhZ2FtZU1nci5pc1dpbiAmJiAhZ2FtZU1nci5pc0ZhaWwpIHtcclxuICAgICAgICAgICAgZ2FtZU1nci5kZWF0aE51bS0tO1xyXG4gICAgICAgICAgICAvLyDmgaLlpI3lhYnnjq9cclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2hBbmlOb2RlICYmIHRoaXMuZ2hBbmlOb2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2hBbmlOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyTWVzcyAmJiB0aGlzLnBsYXllck1lc3MuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJNZXNzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucmFuZ2VkV2VhcG9uKSB0aGlzLnJhbmdlZFdlYXBvbi5nZXRDb21wb25lbnQoV2VhcG9uKS5yZXNldCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yYW5nZWRXZWFwb25BZCkgdGhpcy5yYW5nZWRXZWFwb25BZC5nZXRDb21wb25lbnQoV2VhcG9uKS5yZXNldCgpO1xyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5yYW5nZWRXZWFwb24pIHRoaXMucmFuZ2VkV2VhcG9uLnpJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnJhbmdlZFdlYXBvbikgdGhpcy5yYW5nZWRXZWFwb24uYW5nbGUgPSAwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tZWxlZVdlYXBvbikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuaSA9IHRoaXMubWVsZWVXZWFwb24uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICBhbmkgJiYgYW5pLnBsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJXZWFwb24gJiYgdGhpcy5jdXJXZWFwb24uaXNWYWxpZCkgdGhpcy5jdXJXZWFwb24ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRfZGVhdGgub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLnJldml2ZVBvcztcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgICAgIHRoaXMuSFAgPSB0aGlzLnRvdGxlSHA7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5ib2R5LnNldFBvc2l0aW9uKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LmFuZ2xlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5sZWcub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgdGhpcy5sZWdfYmFjay5vcGFjaXR5ID0gMDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaGVhZC5jaGlsZHJlblswXS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmhlYWQuY2hpbGRyZW5bMV0ub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuc2NhbGVYIDwgMCkgdGhpcy5ub2RlLnNjYWxlWCAqPSAtMTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJpZykgdGhpcy5yaWcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DaXJjbGVDb2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzRGVhdGggPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jYW5Nb3ZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmluZFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICByZXZpdmVQb3M6IGNjLlZlYzIgPSBjYy52MigwLCAwKTtcclxuXHJcbiAgICBjcmVhdEl0ZW0oKSB7IH1cclxufVxyXG4iXX0=