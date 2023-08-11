
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/UpgradeMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f4901QXz85C5Y7PEKsAdvsM', 'UpgradeMgr');
// scripts/Game/UpgradeMgr.ts

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
exports.upgradeMgr = exports.SkillType = void 0;
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var bullet_1 = require("./bullet");
var gameMgr_1 = require("./gameMgr");
var jingyan_1 = require("./jingyan");
var ZombieBase_1 = require("./ZombieBase");
var weapon_1 = require("./weapon");
var prop_1 = require("./prop");
var Utils_1 = require("../../common-plugin/Scripts/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SkillType;
(function (SkillType) {
    SkillType[SkillType["\u6574\u88C5\u5F85\u53D1"] = 0] = "\u6574\u88C5\u5F85\u53D1";
    SkillType[SkillType["\u7784\u51C6"] = 1] = "\u7784\u51C6";
    SkillType[SkillType["\u5F3A\u5316"] = 2] = "\u5F3A\u5316";
    SkillType[SkillType["\u77AC\u65A9"] = 3] = "\u77AC\u65A9";
    SkillType[SkillType["\u5F3A\u529B\u5C04\u51FB"] = 4] = "\u5F3A\u529B\u5C04\u51FB";
    SkillType[SkillType["\u7A83\u9B42\u5F39\u5939"] = 5] = "\u7A83\u9B42\u5F39\u5939";
    SkillType[SkillType["\u79D1\u6280\u5B50\u5F39"] = 6] = "\u79D1\u6280\u5B50\u5F39";
    SkillType[SkillType["\u7AD9\u59FF\u5C04\u51FB"] = 7] = "\u7AD9\u59FF\u5C04\u51FB";
    SkillType[SkillType["\u5B50\u5F39\u788E\u7247"] = 8] = "\u5B50\u5F39\u788E\u7247";
    SkillType[SkillType["\u53CC\u53D1"] = 9] = "\u53CC\u53D1";
    SkillType[SkillType["\u8C22\u5E55"] = 10] = "\u8C22\u5E55";
    SkillType[SkillType["\u67AA\u6797\u5F39\u96E8"] = 11] = "\u67AA\u6797\u5F39\u96E8";
    SkillType[SkillType["\u75BE\u8D70"] = 12] = "\u75BE\u8D70";
    SkillType[SkillType["\u8DD1\u52A8\u5C04\u51FB"] = 13] = "\u8DD1\u52A8\u5C04\u51FB";
    SkillType[SkillType["\u610F\u6C14\u98CE\u53D1"] = 14] = "\u610F\u6C14\u98CE\u53D1";
    SkillType[SkillType["\u62A4\u7532\u9774\u5B50"] = 15] = "\u62A4\u7532\u9774\u5B50";
    SkillType[SkillType["\u78C1\u573A"] = 16] = "\u78C1\u573A";
    SkillType[SkillType["\u7075\u80FD\u8865\u7ED9"] = 17] = "\u7075\u80FD\u8865\u7ED9";
    SkillType[SkillType["\u5BB9\u5149\u7115\u53D1"] = 18] = "\u5BB9\u5149\u7115\u53D1";
    SkillType[SkillType["\u9E70\u773C"] = 19] = "\u9E70\u773C";
    SkillType[SkillType["\u751F\u547D\u529B"] = 20] = "\u751F\u547D\u529B";
    SkillType[SkillType["\u518D\u751F"] = 21] = "\u518D\u751F";
    SkillType[SkillType["\u8FDB\u5316"] = 22] = "\u8FDB\u5316";
    SkillType[SkillType["\u8403\u53D6"] = 23] = "\u8403\u53D6";
    SkillType[SkillType["\u706B\u7130\u7CBE\u901A"] = 24] = "\u706B\u7130\u7CBE\u901A";
    SkillType[SkillType["\u96F7\u7535\u7CBE\u901A"] = 25] = "\u96F7\u7535\u7CBE\u901A";
    SkillType[SkillType["\u51B0\u971C\u7CBE\u901A"] = 26] = "\u51B0\u971C\u7CBE\u901A";
    SkillType[SkillType["\u53CC\u91CD\u9644\u9B54"] = 27] = "\u53CC\u91CD\u9644\u9B54";
    SkillType[SkillType["\u9F99\u5375"] = 28] = "\u9F99\u5375";
    SkillType[SkillType["\u901A\u7075\u5315\u9996"] = 29] = "\u901A\u7075\u5315\u9996";
    SkillType[SkillType["\u901A\u7075\u9570\u5200"] = 30] = "\u901A\u7075\u9570\u5200";
    SkillType[SkillType["\u795E\u5723\u5B88\u62A4"] = 31] = "\u795E\u5723\u5B88\u62A4";
    SkillType[SkillType["\u98DE\u8F6E"] = 32] = "\u98DE\u8F6E";
    SkillType[SkillType["\u95EA\u7535"] = 33] = "\u95EA\u7535";
    SkillType[SkillType["\u71C3\u70E7\u74F6"] = 34] = "\u71C3\u70E7\u74F6";
})(SkillType = exports.SkillType || (exports.SkillType = {}));
exports.upgradeMgr = null;
var UpgradeMgr = /** @class */ (function (_super) {
    __extends(UpgradeMgr, _super);
    function UpgradeMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bulletPrefab = null;
        _this.zombieKillNum = 0;
        // 掉落武器预制体
        _this.weaponPre = null;
        _this.createPropArr = [];
        _this.bossKillId = [];
        // 经验层
        _this.jingyanLayer = null;
        //道具层
        _this.propLayer = null;
        // 经验预制体
        _this.jingyanPre = null;
        // 经验触碰距离
        _this.jingyanRange = 200;
        // 升级经验
        _this._jingyanArr = [25, 50, 80, 160, 200, 280, 360, 380, 470, 560, 650, 740, 840, 940, 1040, 1140, 1340, 1540, 1740, 1940, 2240, 2540, 2840, 3140, 3440, 3740, 4100]; // 经验数组
        // private _jingyanArr: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];// 经验数组
        // 已拥有技能
        _this.upgradeSkillArr = [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0
        ];
        _this.upgradeSkillMaxLevelArr = [
            1, 1, 1, 1, 1,
            1, 1, 1, 1, 1,
            1, 1, 1, 1, 1,
            1, 1, 1, 1, 1,
            1, 1, 1, 1, 1,
            1, 1, 1, 1, 1,
            1, 1, 3, 3, 3,
        ];
        // 技能属性
        _this.skill_14 = 1; //增强倍率（伤害和移动速度）
        _this.skill_18 = 0; //加速时间
        _this.skill_magic = 0; //附魔技能的数量
        _this._maxLevel = 25; // 最大等级
        _this._curLevel = 0; // 当前等级
        _this._curMaxJingyan = _this._jingyanArr[_this.curLevel];
        _this._curJingyan = 0; // 当前经验
        _this.canUpgrade = true;
        _this.skillImgArr = [];
        _this.createNum = 0;
        _this.createMaxNum = 3;
        _this._canAccelerate = true;
        _this._bishou = null;
        _this.hudun = null;
        _this._zaishengCdTime = 0;
        _this._feilun = null;
        _this._posArr = [
            [[500, 0]],
            [[500, 0], [-500, 0]],
            [[500, 0], [-300, 400], [-300, -400]],
            [[500, 0], [-500, 0], [0, 500], [0, -500]]
        ];
        _this._shandianCount = 0;
        _this._shandianNum = [1, 1, 3, 5];
        _this._shandiCdTime = 0;
        _this._fireCount = 0;
        _this._fireNum = [1, 1, 2, 3];
        _this._fireCdTime = 0;
        return _this;
    }
    Object.defineProperty(UpgradeMgr.prototype, "curLevel", {
        get: function () { return this._curLevel; },
        set: function (v) {
            if (v < 0)
                v = 0;
            else if (v > this._maxLevel)
                v = this._maxLevel;
            // 升级
            if (v >= this._curLevel) {
                this._curLevel = v;
                gameMgr_1.gameMgr.model6_levelLabel.string = "" + this._curLevel;
                // 升级效果
                this.upgradeEffect();
                // 弹窗
                CocosZ_1.cocosz.pauseCount++;
                CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UIUpgradePanel);
                this._curJingyan -= this._curMaxJingyan;
                this._curMaxJingyan = this._jingyanArr[this.curLevel];
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UpgradeMgr.prototype, "curJingyan", {
        get: function () { return this._curJingyan; },
        set: function (v) {
            if (v < 0)
                v = 0;
            this._curJingyan = v;
        },
        enumerable: false,
        configurable: true
    });
    /** 初始化监听 */
    UpgradeMgr.prototype.onLoad = function () {
        exports.upgradeMgr = this;
        cc.game.on(Constant_1.default.E_GAME_LOGIC, this._onGameMessageHandler, this);
        // 经验预制体
        this.jingyanPre = CocosZ_1.cocosz.resMgr.getRes("jingyan", cc.Prefab);
        // 添加经验层
        this.jingyanLayer = new cc.Node();
        this.jingyanLayer.name = "jingyanLayer";
        this.jingyanLayer.zIndex = Constant_1.ZindexLayer.zinedx_jingyan;
        this.jingyanLayer.setPosition(cc.Vec2.ZERO);
        this.jingyanLayer.setParent(this.node);
        this.weaponPre = CocosZ_1.cocosz.resMgr.getRes("weaponPop", cc.Prefab);
        // 添加经验层
        this.propLayer = new cc.Node();
        this.propLayer.name = "propLayer";
        this.propLayer.zIndex = Constant_1.ZindexLayer.zinedx_jingyan;
        this.propLayer.setPosition(cc.Vec2.ZERO);
        this.propLayer.setParent(this.node);
    };
    UpgradeMgr.prototype.start = function () { };
    UpgradeMgr.prototype.onDestroy = function () {
        exports.upgradeMgr = null;
        cc.game.targetOff(this);
    };
    UpgradeMgr.prototype.update = function (dt) {
        if (gameMgr_1.gameMgr && gameMgr_1.gameMgr.model6_jingyanBar) {
            var from = gameMgr_1.gameMgr.model6_jingyanBar.progress;
            var to = this.curJingyan / this._curMaxJingyan;
            if (to == 0) {
                to = 0.001;
            }
            gameMgr_1.gameMgr.model6_jingyanBar.progress = cc.misc.lerp(from, to, 0.2);
        }
        // 经验值满足,且可以升级
        if (this.canUpgrade && !CocosZ_1.cocosz.isPause && this.curLevel < this._maxLevel && this._curJingyan >= this._curMaxJingyan) {
            this.curLevel += 1;
        }
    };
    /** 是否拥有技能 */
    UpgradeMgr.prototype.isHaveSkill = function (id) {
        return this.upgradeSkillArr[id] > 0 ? true : false;
    };
    /** 设置技能UI */
    UpgradeMgr.prototype.setSkillImg = function (id) {
        var str = "zombieSkill_icon_" + id + (this.upgradeSkillMaxLevelArr[id] > 1 ? ("_" + this.upgradeSkillArr[id]) : "");
        var icon = CocosZ_1.cocosz.resMgr.getRes(str, cc.SpriteFrame);
        if (icon && gameMgr_1.gameMgr.model6_skillScrollView_content && gameMgr_1.gameMgr.model6_skillScrollView_content.isValid) {
            if (!this.skillImgArr[id] && gameMgr_1.gameMgr.model6_skillScrollView_item) {
                this.skillImgArr[id] = cc.instantiate(gameMgr_1.gameMgr.model6_skillScrollView_item);
                this.skillImgArr[id].active = true;
                this.skillImgArr[id].setParent(gameMgr_1.gameMgr.model6_skillScrollView_content);
                // 滑动到最右边
                if (gameMgr_1.gameMgr.model6_skillScrollView_content.width > gameMgr_1.gameMgr.model6_skillScrollView.node.width) {
                    gameMgr_1.gameMgr.model6_skillScrollView.scrollToRight();
                }
            }
            if (this.skillImgArr[id]) {
                var sprite = this.skillImgArr[id].getComponent(cc.Sprite);
                if (sprite)
                    sprite.spriteFrame = icon;
            }
        }
    };
    /** 设置技能cd */
    UpgradeMgr.prototype.setSkillCD = function (id, time) {
        if (this.skillImgArr[id]) {
            var skillCD_1 = this.skillImgArr[id].getChildByName("skillCD");
            if (skillCD_1) {
                skillCD_1.active = true;
                skillCD_1.opacity = 255;
                cc.tween(skillCD_1.children[0].getComponent(cc.Sprite))
                    .set({ fillRange: 1 })
                    .to(time, { fillRange: 0 })
                    .call(function () { skillCD_1.opacity = 0; })
                    .start();
                var num_1 = time;
                var timeLabel_1 = skillCD_1.children[1].getComponent(cc.Label);
                cc.tween(skillCD_1)
                    .call(function () { timeLabel_1.string = num_1.toString(); num_1--; })
                    .delay(1)
                    .union()
                    .repeat(time)
                    .start();
            }
        }
    };
    /** 获得技能 */
    UpgradeMgr.prototype.getSkill = function (id) {
        var _this = this;
        this.upgradeSkillArr[id]++;
        this.setSkillImg(id);
        switch (id) {
            case SkillType.整装待发: {
                if (gameMgr_1.gameMgr.playerTs && gameMgr_1.gameMgr.playerTs.curWeapon) {
                    gameMgr_1.gameMgr.playerTs.curWeapon.bulletNum += 4;
                }
                break;
            }
            case SkillType.瞄准: {
                if (gameMgr_1.gameMgr.playerTs) {
                    gameMgr_1.gameMgr.playerTs.atkRate *= 1.25;
                }
                break;
            }
            case SkillType.强化: {
                if (gameMgr_1.gameMgr.playerTs && gameMgr_1.gameMgr.playerTs.curWeapon) {
                    gameMgr_1.gameMgr.playerTs.curWeapon.bulletNum += 2;
                    gameMgr_1.gameMgr.playerTs.atkRate *= 1.1;
                }
                break;
            }
            case SkillType.瞬斩: {
                break;
            }
            case SkillType.强力射击: {
                if (gameMgr_1.gameMgr.playerTs) {
                    gameMgr_1.gameMgr.playerTs.atkRate *= 1.2;
                }
                break;
            }
            case SkillType.窃魂弹夹: {
                break;
            }
            case SkillType.科技子弹: {
                if (gameMgr_1.gameMgr.playerTs) {
                    gameMgr_1.gameMgr.playerTs.atkSpeedRate -= 0.1;
                }
                break;
            }
            case SkillType.站姿射击: {
                var can_1 = true;
                this.schedule(function () {
                    if (can_1 && gameMgr_1.gameMgr.playerTs.moveDir.mag() == 0) {
                        can_1 = false;
                        gameMgr_1.gameMgr.playerTs.atkRate *= 1.3;
                    }
                    else if (!can_1 && gameMgr_1.gameMgr.playerTs.moveDir.mag() > 0) {
                        can_1 = true;
                        gameMgr_1.gameMgr.playerTs.atkRate /= 1.3;
                    }
                }, 0.1);
                break;
            }
            case SkillType.子弹碎片: {
                break;
            }
            case SkillType.双发: {
                if (gameMgr_1.gameMgr.playerTs) {
                    gameMgr_1.gameMgr.playerTs.atkBulletNum += 1;
                }
                break;
            }
            case SkillType.谢幕: {
                break;
            }
            case SkillType.枪林弹雨: {
                if (gameMgr_1.gameMgr.playerTs) {
                    gameMgr_1.gameMgr.playerTs.atkBulletNum *= 2;
                }
                break;
            }
            case SkillType.疾走: {
                if (gameMgr_1.gameMgr.playerTs) {
                    gameMgr_1.gameMgr.playerTs.speedRate *= 1.1;
                }
                break;
            }
            case SkillType.跑动射击: {
                var can_2 = true;
                this.schedule(function () {
                    if (can_2 && gameMgr_1.gameMgr.playerTs.isAtk) {
                        can_2 = false;
                        gameMgr_1.gameMgr.playerTs.speedRate *= 1.2;
                    }
                    else if (!can_2 && !gameMgr_1.gameMgr.playerTs.isAtk) {
                        can_2 = true;
                        gameMgr_1.gameMgr.playerTs.speedRate /= 1.2;
                    }
                }, 0.1);
                break;
            }
            case SkillType.意气风发: {
                // 每10秒增加10%的伤害和移动速度
                this.schedule(function () {
                    if (gameMgr_1.gameMgr.playerTs) {
                        var k = _this.skill_14 + 0.1;
                        if (k > 1.4)
                            k = 1.4;
                        else if (k < 1)
                            k = 1;
                        gameMgr_1.gameMgr.playerTs.atkRate *= (k / _this.skill_14);
                        gameMgr_1.gameMgr.playerTs.speedRate *= (k / _this.skill_14);
                        _this.skill_14 = k;
                    }
                }, 10);
                break;
            }
            case SkillType.护甲靴子: {
                break;
            }
            case SkillType.磁场: {
                this.jingyanRange += 200;
                break;
            }
            case SkillType.灵能补给: {
                this.jingyanRange += 50;
                break;
            }
            case SkillType.容光焕发: {
                this.jingyanRange += 50;
                break;
            }
            case SkillType.鹰眼: {
                this.jingyanRange += 50;
                cc.tween(gameMgr_1.gameMgr.mainCamera).to(1, { zoomRatio: 0.6 }).start();
                break;
            }
            case SkillType.生命力: {
                if (gameMgr_1.gameMgr.playerTs) {
                    gameMgr_1.gameMgr.playerTs.totleHp += 1;
                    gameMgr_1.gameMgr.playerTs.HP = gameMgr_1.gameMgr.playerTs.totleHp;
                    this.scheduleOnce(function () { gameMgr_1.gameMgr.playerTs.recoverEffect(); }, 1);
                }
                break;
            }
            case SkillType.再生: {
                this.schedule(function () { _this._updateZaisheng(); }, 1);
                break;
            }
            case SkillType.进化: {
                if (gameMgr_1.gameMgr.playerTs) {
                    gameMgr_1.gameMgr.playerTs.atkRate *= 1.1;
                    gameMgr_1.gameMgr.playerTs.totleHp += 1;
                    gameMgr_1.gameMgr.playerTs.HP += 1;
                    this.scheduleOnce(function () { gameMgr_1.gameMgr.playerTs.recoverEffect(); }, 1);
                }
                break;
            }
            case SkillType.萃取: {
                break;
            }
            case SkillType.火焰精通: {
                break;
            }
            case SkillType.冰霜精通: {
                break;
            }
            case SkillType.双重附魔: {
                break;
            }
            case SkillType.通灵匕首: {
                var pre = CocosZ_1.cocosz.resMgr.getRes("zombieSkill_bishou", cc.Prefab);
                if (pre && gameMgr_1.gameMgr && gameMgr_1.gameMgr.playerTs) {
                    this._bishou = cc.instantiate(pre);
                    this._bishou.setParent(this.node);
                    this._bishou.zIndex = cc.macro.MAX_ZINDEX;
                    this._bishou.active = false;
                    this.updateBishou();
                }
                break;
            }
            case SkillType.神圣守护: {
                var pre = CocosZ_1.cocosz.resMgr.getRes("zombieSkill_hudun", cc.Prefab);
                if (pre && gameMgr_1.gameMgr && gameMgr_1.gameMgr.playerTs) {
                    this.hudun = cc.instantiate(pre);
                    this.hudun.setParent(gameMgr_1.gameMgr.playerTs.node);
                    this.hudun.setPosition(0, 0);
                    this.hudun.zIndex = cc.macro.MAX_ZINDEX - 1;
                    break;
                }
            }
            case SkillType.飞轮: {
                var pre = CocosZ_1.cocosz.resMgr.getRes("zombieSkill_feilun", cc.Prefab);
                if (pre) {
                    if (gameMgr_1.gameMgr && gameMgr_1.gameMgr.playerTs) {
                        this._feilun && this._feilun.isValid && this._feilun.destroy();
                        this._feilun = cc.instantiate(pre);
                        this._feilun.setParent(gameMgr_1.gameMgr.playerTs.node);
                        this._feilun.setPosition(cc.Vec2.ZERO);
                        this._feilun.active = true;
                        this._feilun.zIndex = cc.macro.MAX_ZINDEX;
                        this.updateFeilun(this.upgradeSkillArr[SkillType.飞轮]);
                    }
                }
                break;
            }
            case SkillType.闪电: {
                if (this.upgradeSkillArr[SkillType.闪电] == 1) {
                    this.schedule(this.updateShandian, 1);
                }
                break;
            }
            case SkillType.燃烧瓶: {
                if (this.upgradeSkillArr[SkillType.燃烧瓶] == 1) {
                    this.schedule(this.updateFire, 1);
                }
                break;
            }
        }
    };
    /** 消息 */
    UpgradeMgr.prototype._onGameMessageHandler = function (event) {
        var _this = this;
        switch (event.type) {
            case Constant_1.default.E_Jingyan_Finish: {
                if (this.isHaveSkill(SkillType.灵能补给)) {
                    if (gameMgr_1.gameMgr && gameMgr_1.gameMgr.playerTs && Math.random() < 0.01) {
                        gameMgr_1.gameMgr.playerTs.curWeapon.curBullet += 1;
                    }
                }
                else if (this.isHaveSkill(SkillType.容光焕发)) {
                    if (this.skill_18 < 3) {
                        if (this.skill_18 == 0) {
                            this.accelerate();
                        }
                        this.skill_18++;
                    }
                }
                break;
            }
            case Constant_1.default.E_Zombie_Hart: {
                if (event.node && event.node.isValid) {
                    if (this.isHaveSkill(SkillType.瞬斩) && this.canAddMagic(event.node, SkillType.瞬斩)) {
                        this.skill_effect_3(event.node);
                    }
                    else {
                        var skillArr = [];
                        if (this.isHaveSkill(SkillType.火焰精通) && this.canAddMagic(event.node, SkillType.火焰精通)) {
                            skillArr.push(SkillType.火焰精通);
                        }
                        /* if (this.isHaveSkill(SkillType.雷电精通) && this.canAddMagic(event.node, SkillType.雷电精通)) {
                            skillArr.push(SkillType.雷电精通);
                        } */
                        if (this.isHaveSkill(SkillType.冰霜精通) && this.canAddMagic(event.node, SkillType.冰霜精通)) {
                            skillArr.push(SkillType.冰霜精通);
                        }
                        // 随机技能
                        if (skillArr.length) {
                            var skillIndex = Math.floor(Math.random() * skillArr.length);
                            var skillId = skillArr[skillIndex];
                            switch (skillId) {
                                case SkillType.火焰精通: {
                                    this.skill_effect_24(event.node);
                                    break;
                                }
                                /* case SkillType.雷电精通: {
                                    this.skill_effect_25(event.node);
                                    break;
                                } */
                                case SkillType.冰霜精通: {
                                    this.skill_effect_26(event.node);
                                    break;
                                }
                            }
                        }
                    }
                }
                break;
            }
            case Constant_1.default.E_Zombie_Death: {
                if (event.node) {
                    if (this.isHaveSkill(SkillType.子弹碎片) && event.from) {
                        var angle = 30 * Math.random();
                        this.createBullet(event.node, 30 + angle, 40);
                        this.createBullet(event.node, 150 + angle, 40);
                        this.createBullet(event.node, 270 + angle, 40);
                    }
                    else if (this.isHaveSkill(SkillType.萃取)) {
                        if (gameMgr_1.gameMgr && gameMgr_1.gameMgr.playerTs && gameMgr_1.gameMgr.playerTs.HP < gameMgr_1.gameMgr.playerTs.totleHp && Math.random() < 0.05 && !event.isBoom) {
                            gameMgr_1.gameMgr.playerTs.HP += 1;
                            gameMgr_1.gameMgr.playerTs.recoverEffect();
                        }
                    }
                    // 统计击杀
                    var ts = event.node.getComponent(ZombieBase_1.default);
                    if (ts) {
                        this.zombieKillNum++;
                        if (ts.isBoss) {
                            this.bossKillId.push(ts.zombieId);
                            gameMgr_1.gameMgr.bossShow = false;
                            if (CocosZ_1.cocosz.gameMode == 8) {
                                var showLevelInfo = CocosZ_1.cocosz.dataMgr.getLevelInfo((1000 + Constant_1.default.currentLevel));
                                var nextLevelInfo = CocosZ_1.cocosz.dataMgr.getLevelInfo((1000 + Constant_1.default.currentLevel + 1));
                                if (nextLevelInfo) {
                                    nextLevelInfo.State = 1;
                                    CocosZ_1.cocosz.dataMgr.setLevelInfo((1000 + Constant_1.default.currentLevel + 1), nextLevelInfo);
                                }
                                showLevelInfo.State = 2;
                                CocosZ_1.cocosz.dataMgr.setLevelInfo((1000 + Constant_1.default.currentLevel), showLevelInfo);
                                if (!gameMgr_1.gameMgr.isWin && !gameMgr_1.gameMgr.isFail) {
                                    gameMgr_1.gameMgr.win();
                                }
                            }
                            else if (CocosZ_1.cocosz.gameMode == 6) {
                                console.log('击杀了boss');
                                var randoms = [];
                                while (true) {
                                    //定义一个变量保存是否存在
                                    var isExists = false;
                                    // 获取一个1–100之间的数
                                    var random = this.randomInteger(1, 100);
                                    // 判断当前随机数是否已经存在
                                    //通过randoms.length来确定要判断几次
                                    for (var i = 0; i < randoms.length; i++) {
                                        if (random === randoms[i]) {
                                            isExists = true;
                                            break;
                                        }
                                    }
                                    // 如果不存在，则添加进去
                                    if (!isExists)
                                        randoms.push(random);
                                    // 如果有10位随机数了，就跳出
                                    if (randoms.length === 10)
                                        break;
                                }
                                // console.log(randoms);
                                var randomNum = Math.floor(Math.random() * 100);
                                // console.log("--------随机数种子--------"+randomNum);
                                if (randoms.indexOf(randomNum) > 0) {
                                    if (gameMgr_1.gameMgr && gameMgr_1.gameMgr.playerTs) {
                                        gameMgr_1.gameMgr.playerTs.lucky = 0;
                                    }
                                    var url = Constant_1.default.WEB_LINE_TITLE + '/qwk/details/getFallen/' + Constant_1.default.PERSON_TPKKEN; //Constant.PERSON_TPKKEN;   //用户id与游戏id目前为1和1
                                    Utils_1.utils.showLog("上报数据, url=", url);
                                    Utils_1.utils.commomHttpRequest(url, function (ret, jsdata) {
                                        if (ret) {
                                            var datajson = JSON.parse(jsdata);
                                            console.log(datajson);
                                            if (datajson.code == 200) {
                                                // console.log('显示掉落动画');
                                            }
                                            Utils_1.utils.showLog("数据上报成功！");
                                        }
                                        else {
                                            Utils_1.utils.showLog("数据上报失败！");
                                        }
                                    });
                                    // console.log('---------发送消息------------');
                                }
                                else {
                                    if (gameMgr_1.gameMgr && gameMgr_1.gameMgr.playerTs) {
                                        gameMgr_1.gameMgr.playerTs.lucky += 10;
                                        if (gameMgr_1.gameMgr.playerTs.lucky >= 100) {
                                            gameMgr_1.gameMgr.playerTs.lucky = 0;
                                            console.log("---------10次都没有强制发送消息------------");
                                            var url = Constant_1.default.WEB_LINE_TITLE + '/qwk/details/getFallen/' + Constant_1.default.PERSON_TPKKEN; //Constant.PERSON_TPKKEN;   //用户id与游戏id目前为1和1
                                            Utils_1.utils.showLog("上报数据, url=", url);
                                            Utils_1.utils.commomHttpRequest(url, function (ret, jsdata) {
                                                if (ret) {
                                                    var datajson = JSON.parse(jsdata);
                                                    console.log(datajson);
                                                    if (datajson.code == 200) {
                                                        console.log('显示掉落动画');
                                                    }
                                                    Utils_1.utils.showLog("数据上报成功！");
                                                }
                                                else {
                                                    Utils_1.utils.showLog("数据上报失败！");
                                                }
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            }
            case Constant_1.default.E_Bullet_Last: {
                if (this.isHaveSkill(SkillType.谢幕)) {
                    if (gameMgr_1.gameMgr.playerTs) {
                        this.createBullet(event.node, 36 * 1, 40);
                        this.createBullet(event.node, 36 * 3, 40);
                        this.createBullet(event.node, 36 * 5, 40);
                        this.createBullet(event.node, 36 * 7, 40);
                        this.createBullet(event.node, 36 * 9, 40);
                        this.scheduleOnce(function () {
                            _this.createBullet(event.node, 36 * 2, 40);
                            _this.createBullet(event.node, 36 * 4, 40);
                            _this.createBullet(event.node, 36 * 6, 40);
                            _this.createBullet(event.node, 36 * 8, 40);
                            _this.createBullet(event.node, 36 * 10, 40);
                        }, 0);
                    }
                }
                break;
            }
            case Constant_1.default.E_Bullet_Reload: {
                if (this.isHaveSkill(SkillType.窃魂弹夹)) {
                    if (gameMgr_1.gameMgr.playerTs) {
                        gameMgr_1.gameMgr.playerTs.atkRate *= 1.3;
                        this.scheduleOnce(function () {
                            gameMgr_1.gameMgr.playerTs.atkRate /= 1.3;
                        }, 1);
                    }
                }
                break;
            }
            case Constant_1.default.E_Player_Hart: {
                if (this.isHaveSkill(SkillType.意气风发)) {
                    this.skill_14 = 1;
                }
                break;
            }
            case Constant_1.default.E_Player_Death: {
                if (this.hudun) {
                    this.hudun.opacity = 0;
                }
                break;
            }
        }
    };
    UpgradeMgr.prototype.createRandom = function (randoms) {
    };
    //随机产生mix-max之间的一个数（避免首末概率不均，采用max+1，向下取整）
    UpgradeMgr.prototype.randomInteger = function (min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    };
    /** 经验 */
    UpgradeMgr.prototype.createJingyan = function (pos) {
        if (this.jingyanPre && this.jingyanLayer) {
            var jingyan = gameMgr_1.gameMgr.nodeGet("jingyan", this.jingyanPre);
            var ts = jingyan.getComponent(jingyan_1.default);
            if (ts) {
                ts.init();
            }
            jingyan.setPosition(pos);
            jingyan.setParent(this.jingyanLayer);
        }
    };
    UpgradeMgr.prototype.createWeapon = function (pos) {
        // console.log(this.createNum,this.createMaxNum);
        if (this.createNum >= this.createMaxNum) {
            return;
        }
        var randomArr = [];
        var specialArr = [];
        var usefulWeaponArr = [1, 2, 6, 7, 8, 9, 10, 11, 20, 21];
        var specialWeaponArr = [12, 15, 16, 17, 18, 19, 22];
        var randnum = Math.floor(Math.random() * 100);
        var specialRan = Math.floor(Math.random() * 100);
        var weaponIdx = 0;
        while (true) {
            var random = this.randomInteger(1, 100);
            if (randomArr.indexOf(random) < 0) {
                randomArr.push(random);
            }
            if (randomArr.length == 40)
                break;
        }
        while (true) {
            var specialrandom = this.randomInteger(1, 100);
            if (specialArr.indexOf(specialrandom) < 0) {
                specialArr.push(specialrandom);
            }
            if (specialArr.length == 20)
                break;
        }
        if (randomArr.indexOf(randnum) > 0) {
            weaponIdx = weapon_1.default.rangeWeapon[Math.floor(Math.random() * usefulWeaponArr.length)];
            this.createWeaponPre(pos, weaponIdx);
        }
        else if (specialArr.indexOf(specialRan) > 0) {
            weaponIdx = weapon_1.default.rangeWeapon[Math.floor(Math.random() * specialWeaponArr.length)];
            this.createWeaponPre(pos, weaponIdx);
        }
        // //正常武器idx
        // let wprand = Math.floor((Math.random() * (1-100)) + 100);
        // if(usefulWeaponArr.includes(weaponIdx)){
        //     if((wprand >= 1 && wprand <= 33) || (wprand >= 44 && wprand <= 77) || (wprand >= 87 && wprand <= 100)){
        //         this.createWeaponPre(pos,weaponIdx);
        //     }   
        // }
        // //特殊武器idx
        // if(specialWeaponArr.includes(weaponIdx)){
        //     if((wprand >= 33 && wprand <= 44) || (wprand >= 77 && wprand <= 87)){
        //         this.createWeaponPre(pos,weaponIdx);
        //     }
        // }
    };
    UpgradeMgr.prototype.createWeaponPre = function (pos, weaponIdx) {
        if (this.weaponPre && this.propLayer) {
            var weapon = gameMgr_1.gameMgr.nodeGet("weaponPop", this.weaponPre);
            weapon.setPosition(pos);
            weapon.setParent(this.propLayer);
            var wp = weapon.getComponent(prop_1.default);
            wp.idx = weaponIdx;
            this.createNum++;
        }
    };
    UpgradeMgr.prototype.round = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };
    /** 升级效果 */
    UpgradeMgr.prototype.upgradeEffect = function () {
        if (gameMgr_1.gameMgr.playerTs && gameMgr_1.gameMgr.playerTs.isValid) {
            var pre = CocosZ_1.cocosz.resMgr.getRes("zombieSkill_sjgx", cc.Prefab);
            if (pre) {
                var node = cc.instantiate(pre);
                node.setPosition(cc.Vec2.ZERO);
                node.setParent(gameMgr_1.gameMgr.playerTs.node);
                // node.zIndex = -1;
                // 升级音效
                gameMgr_1.gameMgr.playEffect("LevelUp");
            }
        }
    };
    /** 子弹 */
    UpgradeMgr.prototype.createBullet = function (node, angle, atkNum) {
        if (this.bulletPrefab) {
            var dir = cc.v2(1, 0).rotateSelf(cc.misc.degreesToRadians(angle));
            var bullet_2 = cc.instantiate(this.bulletPrefab);
            bullet_2.parent = this.node;
            bullet_2.setPosition(node.getPosition());
            bullet_2.angle = angle;
            var pos1 = bullet_2.getPosition();
            var pos2 = pos1.add(dir.mul(1000));
            cc.tween(bullet_2)
                .to(pos2.sub(pos1).mag() / 2500, { position: cc.v3(pos2) })
                .call(function () {
                var ts = bullet_2.getComponent(bullet_1.default);
                if (ts.boomEffect) {
                    var boom = cc.instantiate(ts.boomEffect);
                    boom.parent = ts.node.parent;
                    boom.setPosition(ts.node.getPosition());
                    boom.zIndex = Constant_1.ZindexLayer.zindex_bomb;
                    var curBullet = boom.getComponent(bullet_1.default);
                    curBullet.atk = ts.atk;
                    curBullet.atker = ts.atker;
                    curBullet.id = ts.id;
                    gameMgr_1.gameMgr.playEffect("explo", boom);
                    if (ts.hitEffect) {
                        var pos = bullet_2.getPosition();
                        var node_1 = cc.instantiate(ts.hitEffect);
                        node_1.parent = bullet_2.parent;
                        node_1.setPosition(pos);
                        node_1.zIndex = Constant_1.ZindexLayer.zindex_effect_hit;
                    }
                }
                bullet_2.destroy();
            })
                .start();
            var ts = bullet_2.getComponent(bullet_1.default);
            ts.id = 1;
            ts.atker = null;
            ts.atk = atkNum;
            ts.dir = dir;
        }
    };
    /** 获得经验加速1秒（可累计） */
    UpgradeMgr.prototype.accelerate = function () {
        var _this = this;
        if (this.skill_18 == 0) {
            if (this._canAccelerate) {
                this._canAccelerate = false;
                // 开始加速
                if (gameMgr_1.gameMgr.playerTs)
                    gameMgr_1.gameMgr.playerTs.speedRate *= 1.5;
            }
            else {
                this._canAccelerate = true;
                // 结束加速
                if (gameMgr_1.gameMgr.playerTs)
                    gameMgr_1.gameMgr.playerTs.speedRate /= 1.5;
                return;
            }
        }
        this.scheduleOnce(function () {
            _this.skill_18--;
            _this.accelerate();
        }, 1);
    };
    /** 魔法伤害倍率 */
    UpgradeMgr.prototype.magic_hart_rate = function () {
        if (this.isHaveSkill(SkillType.双重附魔) && this.skill_magic > 1) {
            return 1.5;
        }
        else {
            return 1;
        }
    };
    /** 能否添加魔法（审判，火焰，雷电，冰冻） */
    UpgradeMgr.prototype.canAddMagic = function (enemy, id) {
        if (enemy && enemy.isValid) {
            var zombieTs = enemy.getComponent(ZombieBase_1.default);
            if (zombieTs) {
                // 血量小于0
                if (zombieTs.HP <= 0) {
                    return false;
                }
                // 已存在瞬斩
                for (var i = 0; i < enemy.childrenCount; i++) {
                    if (enemy.children[i].name == "zombieSkill_" + SkillType.瞬斩) {
                        return false;
                    }
                }
                if (id >= 0) {
                    if (id == SkillType.瞬斩) {
                        // 是否达到试用条件
                        if (zombieTs.isBoss || (zombieTs.totleHp > 0 && zombieTs.HP / zombieTs.totleHp > 0.4)) {
                            return false;
                        }
                    }
                    else {
                        // 已存在火焰和冰霜
                        for (var i = 0; i < enemy.childrenCount; i++) {
                            if (enemy.children[i].name.includes("zombieSkill"))
                                return false;
                        }
                        if (zombieTs.isBoss) {
                            if (id == SkillType.火焰精通) {
                                return Math.random() < 0.2 ? true : false;
                            }
                            else if (id == SkillType.冰霜精通) {
                                return Math.random() < 0.2 ? true : false;
                            }
                        }
                    }
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
        return true;
    };
    /** 瞬斩 */
    UpgradeMgr.prototype.skill_effect_3 = function (enemy) {
        if (enemy && enemy.isValid) {
            var zombieTs_1 = enemy.getComponent(ZombieBase_1.default);
            if (zombieTs_1) {
                // 技能效果
                var pre = CocosZ_1.cocosz.resMgr.getRes("zombieSkill_3", cc.Prefab);
                if (pre) {
                    var node_2 = cc.instantiate(pre);
                    node_2.setPosition(0, 0);
                    node_2.setParent(enemy);
                    // 销毁
                    zombieTs_1.moveDir = cc.Vec2.ZERO;
                    zombieTs_1.canMoveDir = false;
                    zombieTs_1.updateMove();
                    cc.tween(zombieTs_1)
                        .delay(0.5)
                        .call(function () {
                        if (zombieTs_1 && zombieTs_1.isValid) {
                            zombieTs_1.hart(zombieTs_1.HP, null, null, false, false, cc.Color.RED);
                        }
                    })
                        .delay(0.5)
                        .call(function () {
                        if (node_2 && node_2.isValid) {
                            node_2.destroy();
                        }
                    })
                        .start();
                }
            }
        }
    };
    /** 火焰精通 */
    UpgradeMgr.prototype.skill_effect_24 = function (enemy) {
        var _this = this;
        if (enemy && enemy.isValid) {
            var zombieTs_2 = enemy.getComponent(ZombieBase_1.default);
            if (zombieTs_2) {
                var pre = CocosZ_1.cocosz.resMgr.getRes("zombieSkill_24", cc.Prefab);
                if (pre) {
                    // 添加火焰动画
                    var node_3 = cc.instantiate(pre);
                    node_3.setPosition(0, 0 /* -enemy.height / 2 * enemy.scaleY */);
                    node_3.setParent(enemy);
                    node_3.zIndex = cc.macro.MAX_ZINDEX;
                    zombieTs_2.fire_start();
                    // 伤害
                    cc.tween(node_3)
                        .delay(0.2)
                        .call(function () {
                        if (zombieTs_2.isValid && zombieTs_2.HP > 0) {
                            zombieTs_2.hart(5 * _this.magic_hart_rate(), null, null, false, false, cc.Color.RED);
                        }
                        else {
                            node_3.destroy();
                        }
                    })
                        .union()
                        .repeat(20)
                        .call(function () {
                        zombieTs_2.fire_end();
                        node_3.destroy();
                    })
                        .start();
                    gameMgr_1.gameMgr.playEffect("ranshao", enemy, 1);
                }
            }
        }
    };
    /** 冰霜精通 */
    UpgradeMgr.prototype.skill_effect_26 = function (enemy) {
        if (enemy && enemy.isValid) {
            var zombieTs_3 = enemy.getComponent(ZombieBase_1.default);
            if (zombieTs_3 /* && !zombieTs.isBoss() */) {
                var pre = CocosZ_1.cocosz.resMgr.getRes("zombieSkill_26", cc.Prefab);
                if (pre) {
                    var node_frozen_1 = cc.instantiate(pre);
                    node_frozen_1.setPosition(0, 0);
                    node_frozen_1.setParent(enemy);
                    node_frozen_1.zIndex = cc.macro.MAX_ZINDEX;
                    if (zombieTs_3.zombieId >= 8) {
                        node_frozen_1.scale = 4;
                    }
                    else {
                        node_frozen_1.scale = 2;
                    }
                    // 冰冻
                    if (zombieTs_3.isValid) {
                        zombieTs_3.frozenStart();
                        var t = zombieTs_3.isBoss ? 0.5 : 2;
                        this.scheduleOnce(function () {
                            if (zombieTs_3 && zombieTs_3.isValid) {
                                zombieTs_3.frozenEnd();
                            }
                            // 销毁
                            if (node_frozen_1 && node_frozen_1.isValid) {
                                node_frozen_1.destroy();
                            }
                        }, t);
                    }
                    // 音效
                    gameMgr_1.gameMgr.playEffect("bingdong", enemy, 1);
                }
            }
        }
    };
    /** 通灵匕首 */
    UpgradeMgr.prototype.updateBishou = function () {
        var _this = this;
        if (this._bishou && this._bishou.isValid && gameMgr_1.gameMgr && gameMgr_1.gameMgr.playerTs) {
            if (gameMgr_1.gameMgr.playerTs.atkTarget && gameMgr_1.gameMgr.playerTs.atkTarget.isValid) {
                // 匕首属性
                var bulletTs = this._bishou.getComponent(bullet_1.default);
                bulletTs.isHartMusic = false;
                bulletTs.hitAudio = "hurt";
                bulletTs.atk = 50 * gameMgr_1.gameMgr.playerTs.atkRate;
                bulletTs.atkedArr = [];
                // 当前
                var from = gameMgr_1.gameMgr.playerTs.node.getPosition();
                // 目标
                var div = gameMgr_1.gameMgr.playerTs.atkTarget.getPosition().subSelf(from);
                var dis = div.mag();
                if (dis < 400) {
                    div.normalizeSelf().mulSelf(400);
                }
                var p2 = from.add(cc.v2(1, 0).mulSelf(400).rotateSelf(this._bishou.angle / 180 * Math.PI));
                var to = from.add(div);
                var t = div.mag() / 800;
                if (false == this._bishou.active) {
                    this._bishou.active = true;
                    this._bishou.setPosition(from);
                }
                cc.tween(this._bishou)
                    .bezierTo(t, from, p2, to)
                    .call(function () { _this.updateBishou(); })
                    .start();
            }
            else {
                this._bishou.active = false;
                this.scheduleOnce(function () { _this.updateBishou(); }, 1);
            }
        }
    };
    /** 神圣护盾 */
    UpgradeMgr.prototype.updateHudun = function () {
        var _this = this;
        if (this.hudun && this.hudun.active) {
            this.hudun.active = false;
            // 破裂音效
            gameMgr_1.gameMgr.playEffect("ShieldDestroy");
            // cd
            this.setSkillCD(SkillType.神圣守护, 60);
            this.scheduleOnce(function () {
                if (gameMgr_1.gameMgr && gameMgr_1.gameMgr.playerTs && gameMgr_1.gameMgr.playerTs.isValid) {
                    _this.hudun.active = true;
                    if (gameMgr_1.gameMgr.playerTs.HP) {
                        _this.hudun.opacity = 255;
                    }
                    else {
                        _this.hudun.opacity = 0;
                    }
                }
            }, 60);
        }
    };
    /** 再生 */
    UpgradeMgr.prototype._updateZaisheng = function () {
        if (this._zaishengCdTime > 0) {
            this._zaishengCdTime--;
            return;
        }
        if (CocosZ_1.cocosz.isPause)
            return;
        if (gameMgr_1.gameMgr.playerTs && !gameMgr_1.gameMgr.playerTs.isDeath && gameMgr_1.gameMgr.playerTs.HP < gameMgr_1.gameMgr.playerTs.totleHp) {
            gameMgr_1.gameMgr.playerTs.HP += 1;
            gameMgr_1.gameMgr.playerTs.recoverEffect();
            this._zaishengCdTime = 90;
            this.setSkillCD(SkillType.再生, this._zaishengCdTime);
        }
    };
    /** 飞轮 */
    UpgradeMgr.prototype.updateFeilun = function (level) {
        // 根据等级设置飞轮数量
        if (this._feilun && this._feilun.isValid && gameMgr_1.gameMgr && gameMgr_1.gameMgr.playerTs) {
            cc.tween(this._feilun).by(10, { angle: -360 * 5 }).repeatForever().start();
            // 飞轮
            var level2NumArr = [1, 2, 3, 4];
            var num = level2NumArr[level];
            var _loop_1 = function (i) {
                var icon = this_1._feilun.children[i];
                if (icon) {
                    if (i < num) {
                        icon.active = true;
                        if (level == 3) {
                            var sprFrame = this_1._feilun.getChildByName("back").getComponent(cc.Sprite).spriteFrame;
                            icon.getComponent(cc.Sprite).spriteFrame = sprFrame;
                        }
                        icon.setPosition(this_1._posArr[level][i][0], this_1._posArr[level][i][1]);
                        cc.tween(icon)
                            .call(function () {
                            gameMgr_1.gameMgr.playEffect("chilunStart");
                            icon.getComponent(cc.Collider).enabled = true;
                        })
                            .to(1, { scale: 2.5 })
                            .delay(8)
                            .to(1, { scale: 0 })
                            .call(function () { icon.getComponent(cc.Collider).enabled = false; })
                            .delay(2)
                            .union()
                            .repeatForever()
                            .start();
                        var bulletTs = icon.getComponent(bullet_1.default);
                        if (bulletTs) {
                            bulletTs.isHartMusic = false;
                            bulletTs.hitAudio = "chilun";
                            bulletTs.atk = 80 + 20 * level * gameMgr_1.gameMgr.playerTs.atkRate;
                        }
                    }
                    else {
                        icon.active = false;
                    }
                }
            };
            var this_1 = this;
            for (var i = 0; i < 4; i++) {
                _loop_1(i);
            }
        }
    };
    /** 闪电 */
    UpgradeMgr.prototype.updateShandian = function () {
        if (this._shandiCdTime > 0) {
            this._shandiCdTime--;
            return;
        }
        if (CocosZ_1.cocosz.isPause)
            return;
        var level = this.upgradeSkillArr[SkillType.闪电];
        if (this._shandianCount == 0) {
            this._shandianCount = this._shandianNum[level];
        }
        // 能够添加闪电的敌人
        var enemyArr = [];
        var _loop_2 = function (i) {
            var can = true;
            var node = gameMgr_1.gameMgr.playerTs.atkList[i];
            node.children.forEach(function (n) {
                if (n.name == "zombieSkill_shandian") {
                    can = false;
                }
            });
            if (can) {
                enemyArr.push(node);
            }
        };
        for (var i = gameMgr_1.gameMgr.playerTs.atkList.length - 1; i >= 0; i--) {
            _loop_2(i);
        }
        if (enemyArr.length) {
            var pre = CocosZ_1.cocosz.resMgr.getRes("zombieSkill_shandian", cc.Prefab);
            if (pre) {
                var enemy = enemyArr.shift();
                if (enemy && enemy.isValid) {
                    this._shandianCount--;
                    // 添加雷电动画
                    var node_4 = cc.instantiate(pre);
                    node_4.setPosition(0, -enemy.height / 2 * enemy.scaleY);
                    node_4.setParent(enemy);
                    node_4.zIndex = cc.macro.MAX_ZINDEX;
                    // 动画皮肤
                    if (level == 3) {
                        var spAni = node_4.getComponent(sp.Skeleton);
                        if (spAni) {
                            spAni.setSkin("y");
                        }
                    }
                    // 销毁
                    this.schedule(function () { if (node_4 && node_4.isValid) {
                        node_4.destroy();
                    } }, 1);
                    // 伤害
                    var zombieTs = enemy.getComponent(ZombieBase_1.default);
                    if (zombieTs) {
                        if (zombieTs.isValid && zombieTs.HP > 0) {
                            zombieTs.hart(200 * this.magic_hart_rate(), null, null, false, false, cc.Color.RED);
                        }
                    }
                    // 音效
                    gameMgr_1.gameMgr.playEffect("LuoLei", enemy);
                }
            }
            else {
                CocosZ_1.cocosz.resMgr.getRes("prefab_zombie_skill/zombieSkill_shandian", cc.Prefab);
            }
        }
        if (this._shandianCount == 0) {
            this._shandiCdTime = 3 + level;
            this.setSkillCD(SkillType.闪电, this._shandiCdTime);
        }
    };
    /** 燃烧瓶 */
    UpgradeMgr.prototype.updateFire = function () {
        if (this._fireCdTime > 0) {
            this._fireCdTime--;
            return;
        }
        if (CocosZ_1.cocosz.isPause)
            return;
        var level = this.upgradeSkillArr[SkillType.燃烧瓶];
        this._fireCount = this._fireNum[level];
        if (!CocosZ_1.cocosz.isPause && gameMgr_1.gameMgr && gameMgr_1.gameMgr.playerTs && gameMgr_1.gameMgr.playerTs.atkTarget && gameMgr_1.gameMgr.playerTs.atkTarget.isValid) {
            var pre = CocosZ_1.cocosz.resMgr.getRes("zombieSkill_fire", cc.Prefab);
            if (pre) {
                var div = gameMgr_1.gameMgr.playerTs.atkTarget.getPosition().subSelf(gameMgr_1.gameMgr.playerTs.node.getPosition());
                div.normalizeSelf().mulSelf(400);
                var _loop_3 = function (i) {
                    var radian = ((this_2._fireCount - 1) / 2 - i) * (Math.PI / 2);
                    var from = gameMgr_1.gameMgr.playerTs.node.getPosition();
                    var to = from.add(cc.v2(div).rotateSelf(radian));
                    var p2 = cc.v2((from.x + to.x) / 2, from.y + 900);
                    var fire = cc.instantiate(pre);
                    fire.children[1].active = (level == 3 ? false : true);
                    fire.children[2].active = (level == 3 ? true : false);
                    fire.setPosition(from);
                    fire.setParent(gameMgr_1.gameMgr.map);
                    fire.zIndex = cc.macro.MAX_ZINDEX;
                    cc.tween(fire)
                        .parallel(cc.tween().bezierTo(1, from, p2, to), cc.tween().to(1, { angle: 720 * (div.x > 0 ? 1 : -1) }))
                        .call(function () {
                        fire.zIndex = Constant_1.ZindexLayer.zinedx_floorSkill;
                        fire.children[1].active = fire.children[2].active = false;
                        fire.children[0].active = true;
                        // 子弹碰撞体
                        fire.getComponent(cc.Collider).enabled = true;
                        // 子弹属性
                        var buttleTs = fire.getComponent(bullet_1.default);
                        buttleTs.isHartMusic = false;
                        buttleTs.atk = 11;
                        buttleTs.hartInterval = 0.2;
                        // 燃烧动画
                        var spAni = fire.children[0].getComponent(sp.Skeleton);
                        spAni.setSkin(level == 3 ? "l" : "h");
                        spAni.setAnimation(0, "k", false);
                        spAni.setAnimation(0, "ranshao", true);
                        // 燃烧瓶破碎音效
                        gameMgr_1.gameMgr.playEffect("Ranshaopingposui", fire);
                        gameMgr_1.gameMgr.playEffect("ranshao", fire);
                    })
                        .delay(3)
                        .to(0.3, { opacity: 50 })
                        .call(function () { fire.destroy(); })
                        .start();
                };
                var this_2 = this;
                for (var i = 0; i < this._fireCount; i++) {
                    _loop_3(i);
                }
            }
            this._fireCdTime = 4;
            this.setSkillCD(SkillType.燃烧瓶, 4);
        }
    };
    __decorate([
        property(cc.Prefab)
    ], UpgradeMgr.prototype, "bulletPrefab", void 0);
    UpgradeMgr = __decorate([
        ccclass
    ], UpgradeMgr);
    return UpgradeMgr;
}(cc.Component));
exports.default = UpgradeMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZVxcVXBncmFkZU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQTZDO0FBQzdDLGtEQUF5RTtBQUN6RSxtQ0FBOEI7QUFDOUIscUNBQW9DO0FBQ3BDLHFDQUFnQztBQUNoQywyQ0FBc0M7QUFDdEMsbUNBQThCO0FBQzlCLCtCQUEwQjtBQUMxQiwyREFBMEQ7QUFFcEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBWSxTQW9DWDtBQXBDRCxXQUFZLFNBQVM7SUFDakIsaUZBQVEsQ0FBQTtJQUNSLHlEQUFFLENBQUE7SUFDRix5REFBRSxDQUFBO0lBQ0YseURBQUUsQ0FBQTtJQUNGLGlGQUFJLENBQUE7SUFDSixpRkFBSSxDQUFBO0lBQ0osaUZBQUksQ0FBQTtJQUNKLGlGQUFJLENBQUE7SUFDSixpRkFBSSxDQUFBO0lBQ0oseURBQUUsQ0FBQTtJQUNGLDBEQUFFLENBQUE7SUFDRixrRkFBSSxDQUFBO0lBQ0osMERBQUUsQ0FBQTtJQUNGLGtGQUFJLENBQUE7SUFDSixrRkFBSSxDQUFBO0lBQ0osa0ZBQUksQ0FBQTtJQUNKLDBEQUFFLENBQUE7SUFDRixrRkFBSSxDQUFBO0lBQ0osa0ZBQUksQ0FBQTtJQUNKLDBEQUFFLENBQUE7SUFDRixzRUFBRyxDQUFBO0lBQ0gsMERBQUUsQ0FBQTtJQUNGLDBEQUFFLENBQUE7SUFDRiwwREFBRSxDQUFBO0lBQ0Ysa0ZBQUksQ0FBQTtJQUNKLGtGQUFJLENBQUE7SUFDSixrRkFBSSxDQUFBO0lBQ0osa0ZBQUksQ0FBQTtJQUNKLDBEQUFFLENBQUE7SUFDRixrRkFBSSxDQUFBO0lBQ0osa0ZBQUksQ0FBQTtJQUNKLGtGQUFJLENBQUE7SUFDSiwwREFBRSxDQUFBO0lBQ0YsMERBQUUsQ0FBQTtJQUNGLHNFQUFHLENB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Q0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3hDLENBQUMsQ0FBQzt5QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO3lCQUNSLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7eUJBQ3hCLElBQUksQ0FBQyxjQUFRLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDL0IsS0FBSyxFQUFFLENBQUM7OztnQkF2Q2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRTs0QkFBL0IsQ0FBQztpQkF3Q1Q7YUFDSjtZQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyQztJQUNMLENBQUM7SUFucUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ1c7SUFGZCxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBdXFDOUI7SUFBRCxpQkFBQztDQXZxQ0QsQUF1cUNDLENBdnFDdUMsRUFBRSxDQUFDLFNBQVMsR0F1cUNuRDtrQkF2cUNvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IENvbnN0YW50LCB7IFBhbmVsTmFtZSwgWmluZGV4TGF5ZXIgfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcbmltcG9ydCBCdWxsZXQgZnJvbSBcIi4vYnVsbGV0XCI7XHJcbmltcG9ydCB7IGdhbWVNZ3IgfSBmcm9tIFwiLi9nYW1lTWdyXCI7XHJcbmltcG9ydCBKaW5neWFuIGZyb20gXCIuL2ppbmd5YW5cIjtcclxuaW1wb3J0IFpvbWJpZUJhc2UgZnJvbSBcIi4vWm9tYmllQmFzZVwiO1xyXG5pbXBvcnQgV2VhcG9uIGZyb20gXCIuL3dlYXBvblwiO1xyXG5pbXBvcnQgcHJvcCBmcm9tIFwiLi9wcm9wXCI7XHJcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi1wbHVnaW4vU2NyaXB0cy9VdGlsc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBlbnVtIFNraWxsVHlwZSB7XHJcbiAgICDmlbToo4XlvoXlj5EgPSAwLFxyXG4gICAg556E5YeGLFxyXG4gICAg5by65YyWLFxyXG4gICAg556s5papLFxyXG4gICAg5by65Yqb5bCE5Ye7LFxyXG4gICAg56qD6a2C5by55aS5LFxyXG4gICAg56eR5oqA5a2Q5by5LFxyXG4gICAg56uZ5ae/5bCE5Ye7LFxyXG4gICAg5a2Q5by556KO54mHLFxyXG4gICAg5Y+M5Y+RLFxyXG4gICAg6LCi5bmVLFxyXG4gICAg5p6q5p6X5by56ZuoLFxyXG4gICAg55a+6LWwLFxyXG4gICAg6LeR5Yqo5bCE5Ye7LFxyXG4gICAg5oSP5rCU6aOO5Y+RLFxyXG4gICAg5oqk55Sy6Z205a2QLFxyXG4gICAg56OB5Zy6LFxyXG4gICAg54G16IO96KGl57uZLFxyXG4gICAg5a655YWJ54SV5Y+RLFxyXG4gICAg6bmw55y8LFxyXG4gICAg55Sf5ZG95YqbLFxyXG4gICAg5YaN55SfLFxyXG4gICAg6L+b5YyWLFxyXG4gICAg6JCD5Y+WLFxyXG4gICAg54Gr54Sw57K+6YCaLFxyXG4gICAg6Zu355S157K+6YCaLFxyXG4gICAg5Yaw6Zyc57K+6YCaLFxyXG4gICAg5Y+M6YeN6ZmE6a2ULFxyXG4gICAg6b6Z5Y21LFxyXG4gICAg6YCa54G15YyV6aaWLFxyXG4gICAg6YCa54G16ZWw5YiALFxyXG4gICAg56We5Zyj5a6I5oqkLFxyXG4gICAg6aOe6L2uLFxyXG4gICAg6Zeq55S1LFxyXG4gICAg54eD54On55O2LFxyXG59XHJcblxyXG5leHBvcnQgbGV0IHVwZ3JhZGVNZ3I6IFVwZ3JhZGVNZ3IgPSBudWxsO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBncmFkZU1nciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYnVsbGV0UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHpvbWJpZUtpbGxOdW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgLy8g5o6J6JC95q2m5Zmo6aKE5Yi25L2TXHJcbiAgICB3ZWFwb25QcmU6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgY3JlYXRlUHJvcEFyciA9IFtdO1xyXG5cclxuICAgIGJvc3NLaWxsSWQ6IG51bWJlcltdID0gW107XHJcbiAgICAvLyDnu4/pqozlsYJcclxuICAgIGppbmd5YW5MYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvL+mBk+WFt+WxglxyXG4gICAgcHJvcExheWVyIDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyDnu4/pqozpooTliLbkvZNcclxuICAgIGppbmd5YW5QcmU6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICAvLyDnu4/pqozop6bnorDot53nprtcclxuICAgIGppbmd5YW5SYW5nZTogbnVtYmVyID0gMjAwO1xyXG4gICAgLy8g5Y2H57qn57uP6aqMXHJcbiAgICBwcml2YXRlIF9qaW5neWFuQXJyOiBudW1iZXJbXSA9IFsyNSwgNTAsIDgwLCAxNjAsIDIwMCwgMjgwLCAzNjAsIDM4MCwgNDcwLCA1NjAsIDY1MCwgNzQwLCA4NDAsIDk0MCwgMTA0MCwgMTE0MCwxMzQwLCAxNTQwLCAxNzQwLCAxOTQwLCAyMjQwLCAyNTQwLCAyODQwLCAzMTQwLCAzNDQwLCAzNzQwLCA0MTAwXTsvLyDnu4/pqozmlbDnu4RcclxuICAgIC8vIHByaXZhdGUgX2ppbmd5YW5BcnI6IG51bWJlcltdID0gWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdOy8vIOe7j+mqjOaVsOe7hFxyXG4gICAgLy8g5bey5oul5pyJ5oqA6IO9XHJcbiAgICB1cGdyYWRlU2tpbGxBcnI6IG51bWJlcltdID0gW1xyXG4gICAgICAgIDAsIDAsIDAsIDAsIDAsXHJcbiAgICAgICAgMCwgMCwgMCwgMCwgMCxcclxuICAgICAgICAwLCAwLCAwLCAwLCAwLFxyXG4gICAgICAgIDAsIDAsIDAsIDAsIDAsXHJcbiAgICAgICAgMCwgMCwgMCwgMCwgMCxcclxuICAgICAgICAwLCAwLCAwLCAwLCAwLFxyXG4gICAgICAgIDAsIDAsIDAsIDAsIDBcclxuICAgIF07XHJcbiAgICB1cGdyYWRlU2tpbGxNYXhMZXZlbEFycjogbnVtYmVyW10gPSBbXHJcbiAgICAgICAgMSwgMSwgMSwgMSwgMSxcclxuICAgICAgICAxLCAxLCAxLCAxLCAxLFxyXG4gICAgICAgIDEsIDEsIDEsIDEsIDEsXHJcbiAgICAgICAgMSwgMSwgMSwgMSwgMSxcclxuICAgICAgICAxLCAxLCAxLCAxLCAxLFxyXG4gICAgICAgIDEsIDEsIDEsIDEsIDEsXHJcbiAgICAgICAgMSwgMSwgMywgMywgMyxcclxuICAgIF07XHJcbiAgICAvLyDmioDog73lsZ7mgKdcclxuICAgIHNraWxsXzE0OiBudW1iZXIgPSAxOy8v5aKe5by65YCN546H77yI5Lyk5a6z5ZKM56e75Yqo6YCf5bqm77yJXHJcbiAgICBza2lsbF8xODogbnVtYmVyID0gMDsvL+WKoOmAn+aXtumXtFxyXG4gICAgc2tpbGxfbWFnaWM6IG51bWJlciA9IDA7Ly/pmYTprZTmioDog73nmoTmlbDph49cclxuXHJcbiAgICBwcml2YXRlIF9tYXhMZXZlbDogbnVtYmVyID0gMjU7Ly8g5pyA5aSn562J57qnXHJcbiAgICBwcml2YXRlIF9jdXJMZXZlbDogbnVtYmVyID0gMDsvLyDlvZPliY3nrYnnuqdcclxuICAgIHB1YmxpYyBnZXQgY3VyTGV2ZWwoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2N1ckxldmVsOyB9XHJcbiAgICBwdWJsaWMgc2V0IGN1ckxldmVsKHY6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh2IDwgMCkgdiA9IDA7XHJcbiAgICAgICAgZWxzZSBpZiAodiA+IHRoaXMuX21heExldmVsKSB2ID0gdGhpcy5fbWF4TGV2ZWw7XHJcbiAgICAgICAgLy8g5Y2H57qnXHJcbiAgICAgICAgaWYgKHYgPj0gdGhpcy5fY3VyTGV2ZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VyTGV2ZWwgPSB2O1xyXG4gICAgICAgICAgICBnYW1lTWdyLm1vZGVsNl9sZXZlbExhYmVsLnN0cmluZyA9IFwiXCIgKyB0aGlzLl9jdXJMZXZlbDtcclxuICAgICAgICAgICAgLy8g5Y2H57qn5pWI5p6cXHJcbiAgICAgICAgICAgIHRoaXMudXBncmFkZUVmZmVjdCgpO1xyXG4gICAgICAgICAgICAvLyDlvLnnqpdcclxuICAgICAgICAgICAgY29jb3N6LnBhdXNlQ291bnQrKztcclxuICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYW5lbChQYW5lbE5hbWUuVUlVcGdyYWRlUGFuZWwpO1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJKaW5neWFuIC09IHRoaXMuX2N1ck1heEppbmd5YW47XHJcbiAgICAgICAgICAgIHRoaXMuX2N1ck1heEppbmd5YW4gPSB0aGlzLl9qaW5neWFuQXJyW3RoaXMuY3VyTGV2ZWxdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jdXJNYXhKaW5neWFuOiBudW1iZXIgPSB0aGlzLl9qaW5neWFuQXJyW3RoaXMuY3VyTGV2ZWxdO1xyXG4gICAgcHJpdmF0ZSBfY3VySmluZ3lhbjogbnVtYmVyID0gMDsvLyDlvZPliY3nu4/pqoxcclxuICAgIHB1YmxpYyBnZXQgY3VySmluZ3lhbigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fY3VySmluZ3lhbjsgfVxyXG4gICAgcHVibGljIHNldCBjdXJKaW5neWFuKHY6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh2IDwgMCkgdiA9IDA7XHJcbiAgICAgICAgdGhpcy5fY3VySmluZ3lhbiA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIneWni+WMluebkeWQrCAqL1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHVwZ3JhZGVNZ3IgPSB0aGlzO1xyXG4gICAgICAgIGNjLmdhbWUub24oQ29uc3RhbnQuRV9HQU1FX0xPR0lDLCB0aGlzLl9vbkdhbWVNZXNzYWdlSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIOe7j+mqjOmihOWItuS9k1xyXG4gICAgICAgIHRoaXMuamluZ3lhblByZSA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiamluZ3lhblwiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgIC8vIOa3u+WKoOe7j+mqjOWxglxyXG4gICAgICAgIHRoaXMuamluZ3lhbkxheWVyID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICB0aGlzLmppbmd5YW5MYXllci5uYW1lID0gXCJqaW5neWFuTGF5ZXJcIjtcclxuICAgICAgICB0aGlzLmppbmd5YW5MYXllci56SW5kZXggPSBaaW5kZXhMYXllci56aW5lZHhfamluZ3lhbjtcclxuICAgICAgICB0aGlzLmppbmd5YW5MYXllci5zZXRQb3NpdGlvbihjYy5WZWMyLlpFUk8pO1xyXG4gICAgICAgIHRoaXMuamluZ3lhbkxheWVyLnNldFBhcmVudCh0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICB0aGlzLndlYXBvblByZSA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwid2VhcG9uUG9wXCIsY2MuUHJlZmFiKTtcclxuICAgICAgICAvLyDmt7vliqDnu4/pqozlsYJcclxuICAgICAgICB0aGlzLnByb3BMYXllciA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wTGF5ZXIubmFtZSA9IFwicHJvcExheWVyXCI7XHJcbiAgICAgICAgdGhpcy5wcm9wTGF5ZXIuekluZGV4ID0gWmluZGV4TGF5ZXIuemluZWR4X2ppbmd5YW47XHJcbiAgICAgICAgdGhpcy5wcm9wTGF5ZXIuc2V0UG9zaXRpb24oY2MuVmVjMi5aRVJPKTtcclxuICAgICAgICB0aGlzLnByb3BMYXllci5zZXRQYXJlbnQodGhpcy5ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7IH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHVwZ3JhZGVNZ3IgPSBudWxsO1xyXG4gICAgICAgIGNjLmdhbWUudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhblVwZ3JhZGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGdhbWVNZ3IgJiYgZ2FtZU1nci5tb2RlbDZfamluZ3lhbkJhcikge1xyXG4gICAgICAgICAgICBsZXQgZnJvbSA9IGdhbWVNZ3IubW9kZWw2X2ppbmd5YW5CYXIucHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgIGxldCB0byA9IHRoaXMuY3VySmluZ3lhbiAvIHRoaXMuX2N1ck1heEppbmd5YW47XHJcbiAgICAgICAgICAgIGlmICh0byA9PSAwKSB7IHRvID0gMC4wMDEgfVxyXG4gICAgICAgICAgICBnYW1lTWdyLm1vZGVsNl9qaW5neWFuQmFyLnByb2dyZXNzID0gY2MubWlzYy5sZXJwKGZyb20sIHRvLCAwLjIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDnu4/pqozlgLzmu6HotrMs5LiU5Y+v5Lul5Y2H57qnXHJcbiAgICAgICAgaWYgKHRoaXMuY2FuVXBncmFkZSAmJiAhY29jb3N6LmlzUGF1c2UgJiYgdGhpcy5jdXJMZXZlbCA8IHRoaXMuX21heExldmVsICYmIHRoaXMuX2N1ckppbmd5YW4gPj0gdGhpcy5fY3VyTWF4SmluZ3lhbikge1xyXG4gICAgICAgICAgICB0aGlzLmN1ckxldmVsICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmmK/lkKbmi6XmnInmioDog70gKi9cclxuICAgIGlzSGF2ZVNraWxsKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXBncmFkZVNraWxsQXJyW2lkXSA+IDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpbGxJbWdBcnI6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgLyoqIOiuvue9ruaKgOiDvVVJICovXHJcbiAgICBzZXRTa2lsbEltZyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IFwiem9tYmllU2tpbGxfaWNvbl9cIiArIGlkICsgKHRoaXMudXBncmFkZVNraWxsTWF4TGV2ZWxBcnJbaWRdID4gMSA/IChcIl9cIiArIHRoaXMudXBncmFkZVNraWxsQXJyW2lkXSkgOiBcIlwiKTtcclxuICAgICAgICBsZXQgaWNvbiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKHN0ciwgY2MuU3ByaXRlRnJhbWUpO1xyXG5cclxuICAgICAgICBpZiAoaWNvbiAmJiBnYW1lTWdyLm1vZGVsNl9za2lsbFNjcm9sbFZpZXdfY29udGVudCAmJiBnYW1lTWdyLm1vZGVsNl9za2lsbFNjcm9sbFZpZXdfY29udGVudC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5za2lsbEltZ0FycltpZF0gJiYgZ2FtZU1nci5tb2RlbDZfc2tpbGxTY3JvbGxWaWV3X2l0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2tpbGxJbWdBcnJbaWRdID0gY2MuaW5zdGFudGlhdGUoZ2FtZU1nci5tb2RlbDZfc2tpbGxTY3JvbGxWaWV3X2l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5za2lsbEltZ0FycltpZF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2tpbGxJbWdBcnJbaWRdLnNldFBhcmVudChnYW1lTWdyLm1vZGVsNl9za2lsbFNjcm9sbFZpZXdfY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAvLyDmu5HliqjliLDmnIDlj7PovrlcclxuICAgICAgICAgICAgICAgIGlmIChnYW1lTWdyLm1vZGVsNl9za2lsbFNjcm9sbFZpZXdfY29udGVudC53aWR0aCA+IGdhbWVNZ3IubW9kZWw2X3NraWxsU2Nyb2xsVmlldy5ub2RlLndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1nci5tb2RlbDZfc2tpbGxTY3JvbGxWaWV3LnNjcm9sbFRvUmlnaHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5za2lsbEltZ0FycltpZF0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBzcHJpdGUgPSB0aGlzLnNraWxsSW1nQXJyW2lkXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgICAgIGlmIChzcHJpdGUpIHNwcml0ZS5zcHJpdGVGcmFtZSA9IGljb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiuvue9ruaKgOiDvWNkICovXHJcbiAgICBzZXRTa2lsbENEKGlkOiBudW1iZXIsIHRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnNraWxsSW1nQXJyW2lkXSkge1xyXG4gICAgICAgICAgICBsZXQgc2tpbGxDRCA9IHRoaXMuc2tpbGxJbWdBcnJbaWRdLmdldENoaWxkQnlOYW1lKFwic2tpbGxDRFwiKTtcclxuICAgICAgICAgICAgaWYgKHNraWxsQ0QpIHtcclxuICAgICAgICAgICAgICAgIHNraWxsQ0QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNraWxsQ0Qub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHNraWxsQ0QuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldCh7IGZpbGxSYW5nZTogMSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50byh0aW1lLCB7IGZpbGxSYW5nZTogMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHsgc2tpbGxDRC5vcGFjaXR5ID0gMDsgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGxldCBudW0gPSB0aW1lO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVMYWJlbCA9IHNraWxsQ0QuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHNraWxsQ0QpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4geyB0aW1lTGFiZWwuc3RyaW5nID0gbnVtLnRvU3RyaW5nKCk7IG51bS0tOyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSgxKVxyXG4gICAgICAgICAgICAgICAgICAgIC51bmlvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGVhdCh0aW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDojrflvpfmioDog70gKi9cclxuICAgIGdldFNraWxsKGlkKSB7XHJcbiAgICAgICAgdGhpcy51cGdyYWRlU2tpbGxBcnJbaWRdKys7XHJcbiAgICAgICAgdGhpcy5zZXRTa2lsbEltZyhpZCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoaWQpIHtcclxuICAgICAgICAgICAgY2FzZSBTa2lsbFR5cGUu5pW06KOF5b6F5Y+ROiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZU1nci5wbGF5ZXJUcyAmJiBnYW1lTWdyLnBsYXllclRzLmN1cldlYXBvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheWVyVHMuY3VyV2VhcG9uLmJ1bGxldE51bSArPSA0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTa2lsbFR5cGUu556E5YeGOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZU1nci5wbGF5ZXJUcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheWVyVHMuYXRrUmF0ZSAqPSAxLjI1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTa2lsbFR5cGUu5by65YyWOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZU1nci5wbGF5ZXJUcyAmJiBnYW1lTWdyLnBsYXllclRzLmN1cldlYXBvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheWVyVHMuY3VyV2VhcG9uLmJ1bGxldE51bSArPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheWVyVHMuYXRrUmF0ZSAqPSAxLjE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNraWxsVHlwZS7nnqzmlqk6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2tpbGxUeXBlLuW8uuWKm+WwhOWHuzoge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVNZ3IucGxheWVyVHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnBsYXllclRzLmF0a1JhdGUgKj0gMS4yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTa2lsbFR5cGUu56qD6a2C5by55aS5OiB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNraWxsVHlwZS7np5HmioDlrZDlvLk6IHtcclxuICAgICAgICAgICAgICAgIGlmIChnYW1lTWdyLnBsYXllclRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1nci5wbGF5ZXJUcy5hdGtTcGVlZFJhdGUgLT0gMC4xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTa2lsbFR5cGUu56uZ5ae/5bCE5Ye7OiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYW4gJiYgZ2FtZU1nci5wbGF5ZXJUcy5tb3ZlRGlyLm1hZygpID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheWVyVHMuYXRrUmF0ZSAqPSAxLjM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghY2FuICYmIGdhbWVNZ3IucGxheWVyVHMubW92ZURpci5tYWcoKSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1nci5wbGF5ZXJUcy5hdGtSYXRlIC89IDEuMztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTa2lsbFR5cGUu5a2Q5by556KO54mHOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNraWxsVHlwZS7lj4zlj5E6IHtcclxuICAgICAgICAgICAgICAgIGlmIChnYW1lTWdyLnBsYXllclRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1nci5wbGF5ZXJUcy5hdGtCdWxsZXROdW0gKz0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2tpbGxUeXBlLuiwouW5lToge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTa2lsbFR5cGUu5p6q5p6X5by56ZuoOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZU1nci5wbGF5ZXJUcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheWVyVHMuYXRrQnVsbGV0TnVtICo9IDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNraWxsVHlwZS7nlr7otbA6IHtcclxuICAgICAgICAgICAgICAgIGlmIChnYW1lTWdyLnBsYXllclRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1nci5wbGF5ZXJUcy5zcGVlZFJhdGUgKj0gMS4xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTa2lsbFR5cGUu6LeR5Yqo5bCE5Ye7OiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYW4gJiYgZ2FtZU1nci5wbGF5ZXJUcy5pc0F0aykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1nci5wbGF5ZXJUcy5zcGVlZFJhdGUgKj0gMS4yO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNhbiAmJiAhZ2FtZU1nci5wbGF5ZXJUcy5pc0F0aykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnBsYXllclRzLnNwZWVkUmF0ZSAvPSAxLjI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMC4xKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2tpbGxUeXBlLuaEj+awlOmjjuWPkToge1xyXG4gICAgICAgICAgICAgICAgLy8g5q+PMTDnp5Llop7liqAxMCXnmoTkvKTlrrPlkoznp7vliqjpgJ/luqZcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lTWdyLnBsYXllclRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrID0gdGhpcy5za2lsbF8xNCArIDAuMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGsgPiAxLjQpIGsgPSAxLjQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGsgPCAxKSBrID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1nci5wbGF5ZXJUcy5hdGtSYXRlICo9IChrIC8gdGhpcy5za2lsbF8xNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheWVyVHMuc3BlZWRSYXRlICo9IChrIC8gdGhpcy5za2lsbF8xNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2tpbGxfMTQgPSBrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDEwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2tpbGxUeXBlLuaKpOeUsumdtOWtkDoge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTa2lsbFR5cGUu56OB5Zy6OiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmppbmd5YW5SYW5nZSArPSAyMDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNraWxsVHlwZS7ngbXog73ooaXnu5k6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuamluZ3lhblJhbmdlICs9IDUwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTa2lsbFR5cGUu5a655YWJ54SV5Y+ROiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmppbmd5YW5SYW5nZSArPSA1MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2tpbGxUeXBlLum5sOecvDoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qaW5neWFuUmFuZ2UgKz0gNTA7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihnYW1lTWdyLm1haW5DYW1lcmEpLnRvKDEsIHsgem9vbVJhdGlvOiAwLjYgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2tpbGxUeXBlLueUn+WRveWKmzoge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVNZ3IucGxheWVyVHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnBsYXllclRzLnRvdGxlSHAgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnBsYXllclRzLkhQID0gZ2FtZU1nci5wbGF5ZXJUcy50b3RsZUhwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgZ2FtZU1nci5wbGF5ZXJUcy5yZWNvdmVyRWZmZWN0KCk7IH0sIDEpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNraWxsVHlwZS7lho3nlJ86IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4geyB0aGlzLl91cGRhdGVaYWlzaGVuZygpOyB9LCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2tpbGxUeXBlLui/m+WMljoge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVNZ3IucGxheWVyVHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnBsYXllclRzLmF0a1JhdGUgKj0gMS4xO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheWVyVHMudG90bGVIcCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheWVyVHMuSFAgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IGdhbWVNZ3IucGxheWVyVHMucmVjb3ZlckVmZmVjdCgpOyB9LCAxKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTa2lsbFR5cGUu6JCD5Y+WOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNraWxsVHlwZS7ngavnhLDnsr7pgJo6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2tpbGxUeXBlLuWGsOmcnOeyvumAmjoge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTa2lsbFR5cGUu5Y+M6YeN6ZmE6a2UOiB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNraWxsVHlwZS7pgJrngbXljJXpppY6IHtcclxuICAgICAgICAgICAgICAgIGxldCBwcmU6IGNjLlByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiem9tYmllU2tpbGxfYmlzaG91XCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJlICYmIGdhbWVNZ3IgJiYgZ2FtZU1nci5wbGF5ZXJUcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jpc2hvdSA9IGNjLmluc3RhbnRpYXRlKHByZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmlzaG91LnNldFBhcmVudCh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jpc2hvdS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jpc2hvdS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJpc2hvdSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTa2lsbFR5cGUu56We5Zyj5a6I5oqkOiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlOiBjYy5QcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInpvbWJpZVNraWxsX2h1ZHVuXCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJlICYmIGdhbWVNZ3IgJiYgZ2FtZU1nci5wbGF5ZXJUcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHVkdW4gPSBjYy5pbnN0YW50aWF0ZShwcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHVkdW4uc2V0UGFyZW50KGdhbWVNZ3IucGxheWVyVHMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odWR1bi5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmh1ZHVuLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2tpbGxUeXBlLumjnui9rjoge1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZTogY2MuUHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJ6b21iaWVTa2lsbF9mZWlsdW5cIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGlmIChwcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU1nciAmJiBnYW1lTWdyLnBsYXllclRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZlaWx1biAmJiB0aGlzLl9mZWlsdW4uaXNWYWxpZCAmJiB0aGlzLl9mZWlsdW4uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mZWlsdW4gPSBjYy5pbnN0YW50aWF0ZShwcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mZWlsdW4uc2V0UGFyZW50KGdhbWVNZ3IucGxheWVyVHMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZlaWx1bi5zZXRQb3NpdGlvbihjYy5WZWMyLlpFUk8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mZWlsdW4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmVpbHVuLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmVpbHVuKHRoaXMudXBncmFkZVNraWxsQXJyW1NraWxsVHlwZS7po57ova5dKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNraWxsVHlwZS7pl6rnlLU6IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwZ3JhZGVTa2lsbEFycltTa2lsbFR5cGUu6Zeq55S1XSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZVNoYW5kaWFuLCAxKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTa2lsbFR5cGUu54eD54On55O2OiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51cGdyYWRlU2tpbGxBcnJbU2tpbGxUeXBlLueHg+eDp+eTtl0gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVGaXJlLCAxKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOa2iOaBryAqL1xyXG4gICAgcHJpdmF0ZSBfb25HYW1lTWVzc2FnZUhhbmRsZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0YW50LkVfSmluZ3lhbl9GaW5pc2g6IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzSGF2ZVNraWxsKFNraWxsVHlwZS7ngbXog73ooaXnu5kpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVNZ3IgJiYgZ2FtZU1nci5wbGF5ZXJUcyAmJiBNYXRoLnJhbmRvbSgpIDwgMC4wMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnBsYXllclRzLmN1cldlYXBvbi5jdXJCdWxsZXQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzSGF2ZVNraWxsKFNraWxsVHlwZS7lrrnlhYnnhJXlj5EpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2tpbGxfMTggPCAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNraWxsXzE4ID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2tpbGxfMTgrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIENvbnN0YW50LkVfWm9tYmllX0hhcnQ6IHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5ub2RlICYmIGV2ZW50Lm5vZGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzSGF2ZVNraWxsKFNraWxsVHlwZS7nnqzmlqkpICYmIHRoaXMuY2FuQWRkTWFnaWMoZXZlbnQubm9kZSwgU2tpbGxUeXBlLueerOaWqSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5za2lsbF9lZmZlY3RfMyhldmVudC5ub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2tpbGxBcnI6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzSGF2ZVNraWxsKFNraWxsVHlwZS7ngavnhLDnsr7pgJopICYmIHRoaXMuY2FuQWRkTWFnaWMoZXZlbnQubm9kZSwgU2tpbGxUeXBlLueBq+eEsOeyvumAmikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsQXJyLnB1c2goU2tpbGxUeXBlLueBq+eEsOeyvumAmik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogaWYgKHRoaXMuaXNIYXZlU2tpbGwoU2tpbGxUeXBlLumbt+eUteeyvumAmikgJiYgdGhpcy5jYW5BZGRNYWdpYyhldmVudC5ub2RlLCBTa2lsbFR5cGUu6Zu355S157K+6YCaKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpbGxBcnIucHVzaChTa2lsbFR5cGUu6Zu355S157K+6YCaKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0hhdmVTa2lsbChTa2lsbFR5cGUu5Yaw6Zyc57K+6YCaKSAmJiB0aGlzLmNhbkFkZE1hZ2ljKGV2ZW50Lm5vZGUsIFNraWxsVHlwZS7lhrDpnJznsr7pgJopKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lsbEFyci5wdXNoKFNraWxsVHlwZS7lhrDpnJznsr7pgJopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmaj+acuuaKgOiDvVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2tpbGxBcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2tpbGxJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNraWxsQXJyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2tpbGxJZCA9IHNraWxsQXJyW3NraWxsSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChza2lsbElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTa2lsbFR5cGUu54Gr54Sw57K+6YCaOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2tpbGxfZWZmZWN0XzI0KGV2ZW50Lm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogY2FzZSBTa2lsbFR5cGUu6Zu355S157K+6YCaOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2tpbGxfZWZmZWN0XzI1KGV2ZW50Lm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTa2lsbFR5cGUu5Yaw6Zyc57K+6YCaOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2tpbGxfZWZmZWN0XzI2KGV2ZW50Lm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIENvbnN0YW50LkVfWm9tYmllX0RlYXRoOiB7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50Lm5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0hhdmVTa2lsbChTa2lsbFR5cGUu5a2Q5by556KO54mHKSAmJiBldmVudC5mcm9tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbmdsZSA9IDMwICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCdWxsZXQoZXZlbnQubm9kZSwgMzAgKyBhbmdsZSwgNDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJ1bGxldChldmVudC5ub2RlLCAxNTAgKyBhbmdsZSwgNDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJ1bGxldChldmVudC5ub2RlLCAyNzAgKyBhbmdsZSwgNDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzSGF2ZVNraWxsKFNraWxsVHlwZS7okIPlj5YpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lTWdyICYmIGdhbWVNZ3IucGxheWVyVHMgJiYgZ2FtZU1nci5wbGF5ZXJUcy5IUCA8IGdhbWVNZ3IucGxheWVyVHMudG90bGVIcCAmJiBNYXRoLnJhbmRvbSgpIDwgMC4wNSAmJiAhZXZlbnQuaXNCb29tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnBsYXllclRzLkhQICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnBsYXllclRzLnJlY292ZXJFZmZlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyDnu5/orqHlh7vmnYBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHM6IFpvbWJpZUJhc2UgPSBldmVudC5ub2RlLmdldENvbXBvbmVudChab21iaWVCYXNlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy56b21iaWVLaWxsTnVtKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cy5pc0Jvc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9zc0tpbGxJZC5wdXNoKHRzLnpvbWJpZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IuYm9zc1Nob3cgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjb2Nvc3ouZ2FtZU1vZGUgPT0gOCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNob3dMZXZlbEluZm8gPSBjb2Nvc3ouZGF0YU1nci5nZXRMZXZlbEluZm8oKDEwMDArQ29uc3RhbnQuY3VycmVudExldmVsKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRMZXZlbEluZm8gPSBjb2Nvc3ouZGF0YU1nci5nZXRMZXZlbEluZm8oKDEwMDArQ29uc3RhbnQuY3VycmVudExldmVsICsgMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG5leHRMZXZlbEluZm8pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0TGV2ZWxJbmZvLlN0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3Iuc2V0TGV2ZWxJbmZvKCgxMDAwK0NvbnN0YW50LmN1cnJlbnRMZXZlbCsxKSwgbmV4dExldmVsSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMZXZlbEluZm8uU3RhdGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLnNldExldmVsSW5mbygoMTAwMCtDb25zdGFudC5jdXJyZW50TGV2ZWwpLCBzaG93TGV2ZWxJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVNZ3IuaXNXaW4gJiYgIWdhbWVNZ3IuaXNGYWlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNZ3Iud2luKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoY29jb3N6LmdhbWVNb2RlID09IDYpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflh7vmnYDkuoZib3NzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRvbXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WumuS5ieS4gOS4quWPmOmHj+S/neWtmOaYr+WQpuWtmOWcqFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNFeGlzdHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W5LiA5LiqMeKAkzEwMOS5i+mXtOeahOaVsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFuZG9tID0gdGhpcy5yYW5kb21JbnRlZ2VyKDEsMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDliKTmlq3lvZPliY3pmo/mnLrmlbDmmK/lkKblt7Lnu4/lrZjlnKhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/pgJrov4dyYW5kb21zLmxlbmd0aOadpeehruWumuimgeWIpOaWreWHoOasoVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmRvbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyYW5kb20gPT09IHJhbmRvbXNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0V4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5LiN5a2Y5Zyo77yM5YiZ5re75Yqg6L+b5Y67XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNFeGlzdHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21zLnB1c2gocmFuZG9tKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5pyJMTDkvY3pmo/mnLrmlbDkuobvvIzlsLHot7Plh7pcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmRvbXMubGVuZ3RoID09PSAxMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyYW5kb21zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0tLS0tLemaj+acuuaVsOenjeWtkC0tLS0tLS0tXCIrcmFuZG9tTnVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyYW5kb21zLmluZGV4T2YocmFuZG9tTnVtKSA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU1nciAmJiBnYW1lTWdyLnBsYXllclRzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheWVyVHMubHVja3kgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cmw6IHN0cmluZyA9IENvbnN0YW50LldFQl9MSU5FX1RJVExFICsgJy9xd2svZGV0YWlscy9nZXRGYWxsZW4vJyArIENvbnN0YW50LlBFUlNPTl9UUEtLRU4gLy9Db25zdGFudC5QRVJTT05fVFBLS0VOOyAgIC8v55So5oi3aWTkuI7muLjmiI9pZOebruWJjeS4ujHlkowxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLkuIrmiqXmlbDmja4sIHVybD1cIiwgdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuY29tbW9tSHR0cFJlcXVlc3QodXJsLCAocmV0LCBqc2RhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YWpzb24gPSBKU09OLnBhcnNlKGpzZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YWpzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGFqc29uLmNvZGUgPT0gMjAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+aYvuekuuaOieiQveWKqOeUuycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi5pWw5o2u5LiK5oql5oiQ5Yqf77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi5pWw5o2u5LiK5oql5aSx6LSl77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLeWPkemAgea2iOaBry0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU1nciAmJiBnYW1lTWdyLnBsYXllclRzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheWVyVHMubHVja3kgKz0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihnYW1lTWdyLnBsYXllclRzLmx1Y2t5ID49IDEwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1nci5wbGF5ZXJUcy5sdWNreSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0xMOasoemDveayoeacieW8uuWItuWPkemAgea2iOaBry0tLS0tLS0tLS0tLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXJsOiBzdHJpbmcgPSBDb25zdGFudC5XRUJfTElORV9USVRMRSArICcvcXdrL2RldGFpbHMvZ2V0RmFsbGVuLycgKyBDb25zdGFudC5QRVJTT05fVFBLS0VOIC8vQ29uc3RhbnQuUEVSU09OX1RQS0tFTjsgICAvL+eUqOaIt2lk5LiO5ri45oiPaWTnm67liY3kuLox5ZKMMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLkuIrmiqXmlbDmja4sIHVybD1cIiwgdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5jb21tb21IdHRwUmVxdWVzdCh1cmwsIChyZXQsIGpzZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YWpzb24gPSBKU09OLnBhcnNlKGpzZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhanNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhanNvbi5jb2RlID09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aYvuekuuaOieiQveWKqOeUuycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIuaVsOaNruS4iuaKpeaIkOWKn++8gVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLmlbDmja7kuIrmiqXlpLHotKXvvIFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RhbnQuRV9CdWxsZXRfTGFzdDoge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNIYXZlU2tpbGwoU2tpbGxUeXBlLuiwouW5lSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU1nci5wbGF5ZXJUcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJ1bGxldChldmVudC5ub2RlLCAzNiAqIDEsIDQwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCdWxsZXQoZXZlbnQubm9kZSwgMzYgKiAzLCA0MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQnVsbGV0KGV2ZW50Lm5vZGUsIDM2ICogNSwgNDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJ1bGxldChldmVudC5ub2RlLCAzNiAqIDcsIDQwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCdWxsZXQoZXZlbnQubm9kZSwgMzYgKiA5LCA0MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQnVsbGV0KGV2ZW50Lm5vZGUsIDM2ICogMiwgNDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCdWxsZXQoZXZlbnQubm9kZSwgMzYgKiA0LCA0MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJ1bGxldChldmVudC5ub2RlLCAzNiAqIDYsIDQwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQnVsbGV0KGV2ZW50Lm5vZGUsIDM2ICogOCwgNDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCdWxsZXQoZXZlbnQubm9kZSwgMzYgKiAxMCwgNDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBDb25zdGFudC5FX0J1bGxldF9SZWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzSGF2ZVNraWxsKFNraWxsVHlwZS7nqoPprYLlvLnlpLkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVNZ3IucGxheWVyVHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1nci5wbGF5ZXJUcy5hdGtSYXRlICo9IDEuMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1nci5wbGF5ZXJUcy5hdGtSYXRlIC89IDEuMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBDb25zdGFudC5FX1BsYXllcl9IYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0hhdmVTa2lsbChTa2lsbFR5cGUu5oSP5rCU6aOO5Y+RKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2tpbGxfMTQgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBDb25zdGFudC5FX1BsYXllcl9EZWF0aDoge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaHVkdW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmh1ZHVuLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUmFuZG9tIChyYW5kb21zKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgIC8v6ZqP5py65Lqn55SfbWl4LW1heOS5i+mXtOeahOS4gOS4quaVsO+8iOmBv+WFjemmluacq+amgueOh+S4jeWdh++8jOmHh+eUqG1heCsx77yM5ZCR5LiL5Y+W5pW077yJXHJcbiAgICByYW5kb21JbnRlZ2VyKG1pbiwgbWF4KSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCArIDEgLSBtaW4pO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHJhbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDnu4/pqowgKi9cclxuICAgIGNyZWF0ZUppbmd5YW4ocG9zOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuamluZ3lhblByZSAmJiB0aGlzLmppbmd5YW5MYXllcikge1xyXG4gICAgICAgICAgICBsZXQgamluZ3lhbiA9IGdhbWVNZ3Iubm9kZUdldChcImppbmd5YW5cIiwgdGhpcy5qaW5neWFuUHJlKTtcclxuICAgICAgICAgICAgbGV0IHRzID0gamluZ3lhbi5nZXRDb21wb25lbnQoSmluZ3lhbik7XHJcbiAgICAgICAgICAgIGlmICh0cykgeyB0cy5pbml0KCk7IH1cclxuICAgICAgICAgICAgamluZ3lhbi5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICBqaW5neWFuLnNldFBhcmVudCh0aGlzLmppbmd5YW5MYXllcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVOdW0gPSAwO1xyXG4gICAgcHVibGljIGNyZWF0ZU1heE51bSA9IDM7XHJcbiAgICBjcmVhdGVXZWFwb24ocG9zOiBjYy5WZWMyKXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNyZWF0ZU51bSx0aGlzLmNyZWF0ZU1heE51bSk7XHJcbiAgICAgICAgaWYodGhpcy5jcmVhdGVOdW0gPj0gdGhpcy5jcmVhdGVNYXhOdW0pe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByYW5kb21BcnIgPSBbXTtcclxuICAgICAgICBsZXQgc3BlY2lhbEFyciA9IFtdO1xyXG4gICAgICAgIGxldCB1c2VmdWxXZWFwb25BcnIgPSBbMSwyLDYsNyw4LDksMTAsMTEsMjAsMjFdO1xyXG4gICAgICAgIGxldCBzcGVjaWFsV2VhcG9uQXJyID0gWzEyLDE1LDE2LDE3LDE4LDE5LDIyXTtcclxuICAgICAgICBsZXQgcmFuZG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XHJcbiAgICAgICAgbGV0IHNwZWNpYWxSYW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xyXG4gICAgICAgIGxldCB3ZWFwb25JZHggPSAwO1xyXG5cclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICB2YXIgcmFuZG9tID0gdGhpcy5yYW5kb21JbnRlZ2VyKDEsMTAwKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHJhbmRvbUFyci5pbmRleE9mKHJhbmRvbSkgPCAwKXtcclxuICAgICAgICAgICAgICAgIHJhbmRvbUFyci5wdXNoKHJhbmRvbSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHJhbmRvbUFyci5sZW5ndGggPT0gNDApXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIHZhciBzcGVjaWFscmFuZG9tID0gdGhpcy5yYW5kb21JbnRlZ2VyKDEsMTAwKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHNwZWNpYWxBcnIuaW5kZXhPZihzcGVjaWFscmFuZG9tKSA8IDApe1xyXG4gICAgICAgICAgICAgICAgc3BlY2lhbEFyci5wdXNoKHNwZWNpYWxyYW5kb20pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihzcGVjaWFsQXJyLmxlbmd0aCA9PSAyMClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYocmFuZG9tQXJyLmluZGV4T2YocmFuZG51bSkgPiAwKXtcclxuICAgICAgICAgICAgd2VhcG9uSWR4ID0gV2VhcG9uLnJhbmdlV2VhcG9uW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHVzZWZ1bFdlYXBvbkFyci5sZW5ndGgpXTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVXZWFwb25QcmUocG9zLHdlYXBvbklkeCk7XHJcbiAgICAgICAgfWVsc2UgaWYoc3BlY2lhbEFyci5pbmRleE9mKHNwZWNpYWxSYW4pID4gMCl7XHJcbiAgICAgICAgICAgIHdlYXBvbklkeCA9IFdlYXBvbi5yYW5nZVdlYXBvbltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzcGVjaWFsV2VhcG9uQXJyLmxlbmd0aCldO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVdlYXBvblByZShwb3Msd2VhcG9uSWR4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIC8v5q2j5bi45q2m5ZmoaWR4XHJcbiAgICAgICAgLy8gbGV0IHdwcmFuZCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAoMS0xMDApKSArIDEwMCk7XHJcbiAgICAgICAgLy8gaWYodXNlZnVsV2VhcG9uQXJyLmluY2x1ZGVzKHdlYXBvbklkeCkpe1xyXG4gICAgICAgIC8vICAgICBpZigod3ByYW5kID49IDEgJiYgd3ByYW5kIDw9IDMzKSB8fCAod3ByYW5kID49IDQ0ICYmIHdwcmFuZCA8PSA3NykgfHwgKHdwcmFuZCA+PSA4NyAmJiB3cHJhbmQgPD0gMTAwKSl7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNyZWF0ZVdlYXBvblByZShwb3Msd2VhcG9uSWR4KTtcclxuICAgICAgICAvLyAgICAgfSAgIFxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyAvL+eJueauiuatpuWZqGlkeFxyXG4gICAgICAgIC8vIGlmKHNwZWNpYWxXZWFwb25BcnIuaW5jbHVkZXMod2VhcG9uSWR4KSl7XHJcbiAgICAgICAgLy8gICAgIGlmKCh3cHJhbmQgPj0gMzMgJiYgd3ByYW5kIDw9IDQ0KSB8fCAod3ByYW5kID49IDc3ICYmIHdwcmFuZCA8PSA4Nykpe1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jcmVhdGVXZWFwb25QcmUocG9zLHdlYXBvbklkeCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlV2VhcG9uUHJlIChwb3Msd2VhcG9uSWR4KSB7XHJcbiAgICAgICAgaWYodGhpcy53ZWFwb25QcmUgJiYgdGhpcy5wcm9wTGF5ZXIpe1xyXG4gICAgICAgICAgICBsZXQgd2VhcG9uID0gZ2FtZU1nci5ub2RlR2V0KFwid2VhcG9uUG9wXCIsdGhpcy53ZWFwb25QcmUpO1xyXG4gICAgICAgICAgICB3ZWFwb24uc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgd2VhcG9uLnNldFBhcmVudCh0aGlzLnByb3BMYXllcik7XHJcbiAgICAgICAgICAgIGxldCB3cCA9IHdlYXBvbi5nZXRDb21wb25lbnQocHJvcClcclxuICAgICAgICAgICAgd3AuaWR4ID0gd2VhcG9uSWR4O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVOdW0gKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJvdW5kIChtaW4sbWF4KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSoobWF4LW1pbikrbWluKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDljYfnuqfmlYjmnpwgKi9cclxuICAgIHVwZ3JhZGVFZmZlY3QoKSB7XHJcbiAgICAgICAgaWYgKGdhbWVNZ3IucGxheWVyVHMgJiYgZ2FtZU1nci5wbGF5ZXJUcy5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGxldCBwcmU6IGNjLlByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiem9tYmllU2tpbGxfc2pneFwiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICBpZiAocHJlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKGNjLlZlYzIuWkVSTyk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNldFBhcmVudChnYW1lTWdyLnBsYXllclRzLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gbm9kZS56SW5kZXggPSAtMTtcclxuICAgICAgICAgICAgICAgIC8vIOWNh+e6p+mfs+aViFxyXG4gICAgICAgICAgICAgICAgZ2FtZU1nci5wbGF5RWZmZWN0KFwiTGV2ZWxVcFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5a2Q5by5ICovXHJcbiAgICBjcmVhdGVCdWxsZXQobm9kZTogY2MuTm9kZSwgYW5nbGU6IG51bWJlciwgYXRrTnVtOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5idWxsZXRQcmVmYWIpIHtcclxuICAgICAgICAgICAgbGV0IGRpciA9IGNjLnYyKDEsIDApLnJvdGF0ZVNlbGYoY2MubWlzYy5kZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKSk7XHJcbiAgICAgICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZWZhYik7XHJcbiAgICAgICAgICAgIGJ1bGxldC5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGJ1bGxldC5zZXRQb3NpdGlvbihub2RlLmdldFBvc2l0aW9uKCkpXHJcbiAgICAgICAgICAgIGJ1bGxldC5hbmdsZSA9IGFuZ2xlO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBvczEgPSBidWxsZXQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgbGV0IHBvczIgPSBwb3MxLmFkZChkaXIubXVsKDEwMDApKTtcclxuICAgICAgICAgICAgY2MudHdlZW4oYnVsbGV0KVxyXG4gICAgICAgICAgICAgICAgLnRvKHBvczIuc3ViKHBvczEpLm1hZygpIC8gMjUwMCwgeyBwb3NpdGlvbjogY2MudjMocG9zMikgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHMgPSBidWxsZXQuZ2V0Q29tcG9uZW50KEJ1bGxldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRzLmJvb21FZmZlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvb20gPSBjYy5pbnN0YW50aWF0ZSh0cy5ib29tRWZmZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib29tLnBhcmVudCA9IHRzLm5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib29tLnNldFBvc2l0aW9uKHRzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb20uekluZGV4ID0gWmluZGV4TGF5ZXIuemluZGV4X2JvbWI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJCdWxsZXQgPSBib29tLmdldENvbXBvbmVudChCdWxsZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJCdWxsZXQuYXRrID0gdHMuYXRrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJCdWxsZXQuYXRrZXIgPSB0cy5hdGtlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyQnVsbGV0LmlkID0gdHMuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheUVmZmVjdChcImV4cGxvXCIsIGJvb20pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHMuaGl0RWZmZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gYnVsbGV0LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRzLmhpdEVmZmVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IGJ1bGxldC5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnpJbmRleCA9IFppbmRleExheWVyLnppbmRleF9lZmZlY3RfaGl0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldC5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0cyA9IGJ1bGxldC5nZXRDb21wb25lbnQoQnVsbGV0KTtcclxuICAgICAgICAgICAgdHMuaWQgPSAxO1xyXG4gICAgICAgICAgICB0cy5hdGtlciA9IG51bGw7XHJcbiAgICAgICAgICAgIHRzLmF0ayA9IGF0a051bTtcclxuICAgICAgICAgICAgdHMuZGlyID0gZGlyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jYW5BY2NlbGVyYXRlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIC8qKiDojrflvpfnu4/pqozliqDpgJ8x56eS77yI5Y+v57Sv6K6h77yJICovXHJcbiAgICBhY2NlbGVyYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNraWxsXzE4ID09IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbkFjY2VsZXJhdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbkFjY2VsZXJhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIOW8gOWni+WKoOmAn1xyXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVNZ3IucGxheWVyVHMpIGdhbWVNZ3IucGxheWVyVHMuc3BlZWRSYXRlICo9IDEuNTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbkFjY2VsZXJhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8g57uT5p2f5Yqg6YCfXHJcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZU1nci5wbGF5ZXJUcykgZ2FtZU1nci5wbGF5ZXJUcy5zcGVlZFJhdGUgLz0gMS41O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5za2lsbF8xOC0tO1xyXG4gICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGUoKTtcclxuICAgICAgICB9LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6a2U5rOV5Lyk5a6z5YCN546HICovXHJcbiAgICBtYWdpY19oYXJ0X3JhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNIYXZlU2tpbGwoU2tpbGxUeXBlLuWPjOmHjemZhOmtlCkgJiYgdGhpcy5za2lsbF9tYWdpYyA+IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDEuNTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiDveWQpua3u+WKoOmtlOazle+8iOWuoeWIpO+8jOeBq+eEsO+8jOmbt+eUte+8jOWGsOWGu++8iSAqL1xyXG4gICAgY2FuQWRkTWFnaWMoZW5lbXk6IGNjLk5vZGUsIGlkPzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGVuZW15ICYmIGVuZW15LmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgbGV0IHpvbWJpZVRzOiBab21iaWVCYXNlID0gZW5lbXkuZ2V0Q29tcG9uZW50KFpvbWJpZUJhc2UpO1xyXG4gICAgICAgICAgICBpZiAoem9tYmllVHMpIHtcclxuICAgICAgICAgICAgICAgIC8vIOihgOmHj+Wwj+S6jjBcclxuICAgICAgICAgICAgICAgIGlmICh6b21iaWVUcy5IUCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g5bey5a2Y5Zyo556s5papXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuZW15LmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbmVteS5jaGlsZHJlbltpXS5uYW1lID09IGB6b21iaWVTa2lsbF8ke1NraWxsVHlwZS7nnqzmlql9YCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlkID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPT0gU2tpbGxUeXBlLueerOaWqSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmmK/lkKbovr7liLDor5XnlKjmnaHku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHpvbWJpZVRzLmlzQm9zcyB8fCAoem9tYmllVHMudG90bGVIcCA+IDAgJiYgem9tYmllVHMuSFAgLyB6b21iaWVUcy50b3RsZUhwID4gMC40KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlt7LlrZjlnKjngavnhLDlkozlhrDpnJxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbmVteS5jaGlsZHJlbltpXS5uYW1lLmluY2x1ZGVzKFwiem9tYmllU2tpbGxcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh6b21iaWVUcy5pc0Jvc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZCA9PSBTa2lsbFR5cGUu54Gr54Sw57K+6YCaKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPCAwLjIgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlkID09IFNraWxsVHlwZS7lhrDpnJznsr7pgJopIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA8IDAuMiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgeyByZXR1cm4gZmFsc2U7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyByZXR1cm4gZmFsc2U7IH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog556s5papICovXHJcbiAgICBza2lsbF9lZmZlY3RfMyhlbmVteTogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmIChlbmVteSAmJiBlbmVteS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGxldCB6b21iaWVUczogWm9tYmllQmFzZSA9IGVuZW15LmdldENvbXBvbmVudChab21iaWVCYXNlKTtcclxuICAgICAgICAgICAgaWYgKHpvbWJpZVRzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmioDog73mlYjmnpxcclxuICAgICAgICAgICAgICAgIGxldCBwcmU6IGNjLlByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiem9tYmllU2tpbGxfM1wiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUocHJlKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UGFyZW50KGVuZW15KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyDplIDmr4FcclxuICAgICAgICAgICAgICAgICAgICB6b21iaWVUcy5tb3ZlRGlyID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICAgICAgICAgIHpvbWJpZVRzLmNhbk1vdmVEaXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB6b21iaWVUcy51cGRhdGVNb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oem9tYmllVHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh6b21iaWVUcyAmJiB6b21iaWVUcy5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgem9tYmllVHMuaGFydCh6b21iaWVUcy5IUCwgbnVsbCwgbnVsbCwgZmFsc2UsIGZhbHNlLCBjYy5Db2xvci5SRUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC41KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSAmJiBub2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOeBq+eEsOeyvumAmiAqL1xyXG4gICAgc2tpbGxfZWZmZWN0XzI0KGVuZW15OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKGVuZW15ICYmIGVuZW15LmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgbGV0IHpvbWJpZVRzOiBab21iaWVCYXNlID0gZW5lbXkuZ2V0Q29tcG9uZW50KFpvbWJpZUJhc2UpO1xyXG4gICAgICAgICAgICBpZiAoem9tYmllVHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwcmU6IGNjLlByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiem9tYmllU2tpbGxfMjRcIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGlmIChwcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmt7vliqDngavnhLDliqjnlLtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwLyogLWVuZW15LmhlaWdodCAvIDIgKiBlbmVteS5zY2FsZVkgKi8pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UGFyZW50KGVuZW15KTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XHJcbiAgICAgICAgICAgICAgICAgICAgem9tYmllVHMuZmlyZV9zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS8pOWus1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh6b21iaWVUcy5pc1ZhbGlkICYmIHpvbWJpZVRzLkhQID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvbWJpZVRzLmhhcnQoNSAqIHRoaXMubWFnaWNfaGFydF9yYXRlKCksIG51bGwsIG51bGwsIGZhbHNlLCBmYWxzZSwgY2MuQ29sb3IuUkVEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC51bmlvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBlYXQoMjApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvbWJpZVRzLmZpcmVfZW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1nci5wbGF5RWZmZWN0KFwicmFuc2hhb1wiLCBlbmVteSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiog5Yaw6Zyc57K+6YCaICovXHJcbiAgICBza2lsbF9lZmZlY3RfMjYoZW5lbXk6IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAoZW5lbXkgJiYgZW5lbXkuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICBsZXQgem9tYmllVHM6IFpvbWJpZUJhc2UgPSBlbmVteS5nZXRDb21wb25lbnQoWm9tYmllQmFzZSk7XHJcbiAgICAgICAgICAgIGlmICh6b21iaWVUcyAvKiAmJiAhem9tYmllVHMuaXNCb3NzKCkgKi8pIHtcclxuICAgICAgICAgICAgICAgIGxldCBwcmU6IGNjLlByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiem9tYmllU2tpbGxfMjZcIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGlmIChwcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZV9mcm96ZW4gPSBjYy5pbnN0YW50aWF0ZShwcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVfZnJvemVuLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVfZnJvemVuLnNldFBhcmVudChlbmVteSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZV9mcm96ZW4uekluZGV4ID0gY2MubWFjcm8uTUFYX1pJTkRFWDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoem9tYmllVHMuem9tYmllSWQgPj0gOCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlX2Zyb3plbi5zY2FsZSA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZV9mcm96ZW4uc2NhbGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyDlhrDlhrtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoem9tYmllVHMuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6b21iaWVUcy5mcm96ZW5TdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdCA9IHpvbWJpZVRzLmlzQm9zcyA/IDAuNSA6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh6b21iaWVUcyAmJiB6b21iaWVUcy5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgem9tYmllVHMuZnJvemVuRW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDplIDmr4FcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlX2Zyb3plbiAmJiBub2RlX2Zyb3plbi5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZV9mcm96ZW4uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6Z+z5pWIXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1nci5wbGF5RWZmZWN0KFwiYmluZ2RvbmdcIiwgZW5lbXksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2Jpc2hvdTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvKiog6YCa54G15YyV6aaWICovXHJcbiAgICB1cGRhdGVCaXNob3UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Jpc2hvdSAmJiB0aGlzLl9iaXNob3UuaXNWYWxpZCAmJiBnYW1lTWdyICYmIGdhbWVNZ3IucGxheWVyVHMpIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVNZ3IucGxheWVyVHMuYXRrVGFyZ2V0ICYmIGdhbWVNZ3IucGxheWVyVHMuYXRrVGFyZ2V0LmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWMlemmluWxnuaAp1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ1bGxldFRzID0gdGhpcy5fYmlzaG91LmdldENvbXBvbmVudChCdWxsZXQpO1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0VHMuaXNIYXJ0TXVzaWMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJ1bGxldFRzLmhpdEF1ZGlvID0gXCJodXJ0XCI7XHJcbiAgICAgICAgICAgICAgICBidWxsZXRUcy5hdGsgPSA1MCAqIGdhbWVNZ3IucGxheWVyVHMuYXRrUmF0ZTtcclxuICAgICAgICAgICAgICAgIGJ1bGxldFRzLmF0a2VkQXJyID0gW107XHJcbiAgICAgICAgICAgICAgICAvLyDlvZPliY1cclxuICAgICAgICAgICAgICAgIGxldCBmcm9tOiBjYy5WZWMyID0gZ2FtZU1nci5wbGF5ZXJUcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAvLyDnm67moIdcclxuICAgICAgICAgICAgICAgIGxldCBkaXY6IGNjLlZlYzIgPSBnYW1lTWdyLnBsYXllclRzLmF0a1RhcmdldC5nZXRQb3NpdGlvbigpLnN1YlNlbGYoZnJvbSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gZGl2Lm1hZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpcyA8IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdi5ub3JtYWxpemVTZWxmKCkubXVsU2VsZig0MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHAyOiBjYy5WZWMyID0gZnJvbS5hZGQoY2MudjIoMSwgMCkubXVsU2VsZig0MDApLnJvdGF0ZVNlbGYodGhpcy5fYmlzaG91LmFuZ2xlIC8gMTgwICogTWF0aC5QSSkpXHJcbiAgICAgICAgICAgICAgICBsZXQgdG86IGNjLlZlYzIgPSBmcm9tLmFkZChkaXYpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHQgPSBkaXYubWFnKCkgLyA4MDA7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGZhbHNlID09IHRoaXMuX2Jpc2hvdS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iaXNob3UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iaXNob3Uuc2V0UG9zaXRpb24oZnJvbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLl9iaXNob3UpXHJcbiAgICAgICAgICAgICAgICAgICAgLmJlemllclRvKHQsIGZyb20sIHAyLCB0bylcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7IHRoaXMudXBkYXRlQmlzaG91KCk7IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iaXNob3UuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMudXBkYXRlQmlzaG91KCk7IH0sIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBodWR1bjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvKiog56We5Zyj5oqk55u+ICovXHJcbiAgICB1cGRhdGVIdWR1bigpIHtcclxuICAgICAgICBpZiAodGhpcy5odWR1biAmJiB0aGlzLmh1ZHVuLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmh1ZHVuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyDnoLToo4Lpn7PmlYhcclxuICAgICAgICAgICAgZ2FtZU1nci5wbGF5RWZmZWN0KFwiU2hpZWxkRGVzdHJveVwiKTtcclxuICAgICAgICAgICAgLy8gY2RcclxuICAgICAgICAgICAgdGhpcy5zZXRTa2lsbENEKFNraWxsVHlwZS7npZ7lnKPlrojmiqQsIDYwKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVNZ3IgJiYgZ2FtZU1nci5wbGF5ZXJUcyAmJiBnYW1lTWdyLnBsYXllclRzLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmh1ZHVuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVNZ3IucGxheWVyVHMuSFApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odWR1bi5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHVkdW4ub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCA2MClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfemFpc2hlbmdDZFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvKiog5YaN55SfICovXHJcbiAgICBwcml2YXRlIF91cGRhdGVaYWlzaGVuZygpIHtcclxuICAgICAgICBpZiAodGhpcy5femFpc2hlbmdDZFRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3phaXNoZW5nQ2RUaW1lLS07XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvY29zei5pc1BhdXNlKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGdhbWVNZ3IucGxheWVyVHMgJiYgIWdhbWVNZ3IucGxheWVyVHMuaXNEZWF0aCAmJiBnYW1lTWdyLnBsYXllclRzLkhQIDwgZ2FtZU1nci5wbGF5ZXJUcy50b3RsZUhwKSB7XHJcbiAgICAgICAgICAgIGdhbWVNZ3IucGxheWVyVHMuSFAgKz0gMTtcclxuICAgICAgICAgICAgZ2FtZU1nci5wbGF5ZXJUcy5yZWNvdmVyRWZmZWN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3phaXNoZW5nQ2RUaW1lID0gOTA7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2tpbGxDRChTa2lsbFR5cGUu5YaN55SfLCB0aGlzLl96YWlzaGVuZ0NkVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZlaWx1bjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9wb3NBcnI6IGFueVtdID0gW1xyXG4gICAgICAgIFtbNTAwLCAwXV0sXHJcbiAgICAgICAgW1s1MDAsIDBdLCBbLTUwMCwgMF1dLFxyXG4gICAgICAgIFtbNTAwLCAwXSwgWy0zMDAsIDQwMF0sIFstMzAwLCAtNDAwXV0sXHJcbiAgICAgICAgW1s1MDAsIDBdLCBbLTUwMCwgMF0sIFswLCA1MDBdLCBbMCwgLTUwMF1dXHJcbiAgICBdXHJcbiAgICAvKiog6aOe6L2uICovXHJcbiAgICB1cGRhdGVGZWlsdW4obGV2ZWw6IG51bWJlcikge1xyXG4gICAgICAgIC8vIOagueaNruetiee6p+iuvue9rumjnui9ruaVsOmHj1xyXG4gICAgICAgIGlmICh0aGlzLl9mZWlsdW4gJiYgdGhpcy5fZmVpbHVuLmlzVmFsaWQgJiYgZ2FtZU1nciAmJiBnYW1lTWdyLnBsYXllclRzKSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuX2ZlaWx1bikuYnkoMTAsIHsgYW5nbGU6IC0zNjAgKiA1IH0pLnJlcGVhdEZvcmV2ZXIoKS5zdGFydCgpO1xyXG4gICAgICAgICAgICAvLyDpo57ova5cclxuICAgICAgICAgICAgbGV0IGxldmVsMk51bUFyciA9IFsxLCAyLCAzLCA0XTtcclxuICAgICAgICAgICAgbGV0IG51bSA9IGxldmVsMk51bUFycltsZXZlbF07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWNvbiA9IHRoaXMuX2ZlaWx1bi5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgIGlmIChpY29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBudW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNwckZyYW1lID0gdGhpcy5fZmVpbHVuLmdldENoaWxkQnlOYW1lKFwiYmFja1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uLnNldFBvc2l0aW9uKHRoaXMuX3Bvc0FycltsZXZlbF1baV1bMF0sIHRoaXMuX3Bvc0FycltsZXZlbF1baV1bMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihpY29uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheUVmZmVjdChcImNoaWx1blN0YXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24uZ2V0Q29tcG9uZW50KGNjLkNvbGxpZGVyKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBzY2FsZTogMi41IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoOClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHNjYWxlOiAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7IGljb24uZ2V0Q29tcG9uZW50KGNjLkNvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51bmlvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ1bGxldFRzID0gaWNvbi5nZXRDb21wb25lbnQoQnVsbGV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1bGxldFRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWxsZXRUcy5pc0hhcnRNdXNpYyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0VHMuaGl0QXVkaW8gPSBcImNoaWx1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0VHMuYXRrID0gODAgKyAyMCAqIGxldmVsICogZ2FtZU1nci5wbGF5ZXJUcy5hdGtSYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2hhbmRpYW5Db3VudDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX3NoYW5kaWFuTnVtOiBudW1iZXJbXSA9IFsxLCAxLCAzLCA1XTtcclxuICAgIHByaXZhdGUgX3NoYW5kaUNkVGltZTogbnVtYmVyID0gMDtcclxuICAgIC8qKiDpl6rnlLUgKi9cclxuICAgIHVwZGF0ZVNoYW5kaWFuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zaGFuZGlDZFRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoYW5kaUNkVGltZS0tO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2Nvc3ouaXNQYXVzZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBsZXZlbCA9IHRoaXMudXBncmFkZVNraWxsQXJyW1NraWxsVHlwZS7pl6rnlLVdO1xyXG4gICAgICAgIGlmICh0aGlzLl9zaGFuZGlhbkNvdW50ID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fc2hhbmRpYW5Db3VudCA9IHRoaXMuX3NoYW5kaWFuTnVtW2xldmVsXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6IO95aSf5re75Yqg6Zeq55S155qE5pWM5Lq6XHJcbiAgICAgICAgbGV0IGVuZW15QXJyID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGdhbWVNZ3IucGxheWVyVHMuYXRrTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBsZXQgY2FuOiBib29sZWFuID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGdhbWVNZ3IucGxheWVyVHMuYXRrTGlzdFtpXTtcclxuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKG4gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG4ubmFtZSA9PSBcInpvbWJpZVNraWxsX3NoYW5kaWFuXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChjYW4pIHsgZW5lbXlBcnIucHVzaChub2RlKTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW5lbXlBcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldCBwcmU6IGNjLlByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiem9tYmllU2tpbGxfc2hhbmRpYW5cIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICAgICAgaWYgKHByZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVuZW15ID0gZW5lbXlBcnIuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbmVteSAmJiBlbmVteS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2hhbmRpYW5Db3VudC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOa3u+WKoOmbt+eUteWKqOeUu1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIC1lbmVteS5oZWlnaHQgLyAyICogZW5lbXkuc2NhbGVZKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBhcmVudChlbmVteSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWKqOeUu+earuiCpFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcEFuaSA9IG5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwQW5pKSB7IHNwQW5pLnNldFNraW4oXCJ5XCIpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOmUgOavgVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4geyBpZiAobm9kZSAmJiBub2RlLmlzVmFsaWQpIHsgbm9kZS5kZXN0cm95KCk7IH0gfSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lyk5a6zXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHpvbWJpZVRzOiBab21iaWVCYXNlID0gZW5lbXkuZ2V0Q29tcG9uZW50KFpvbWJpZUJhc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh6b21iaWVUcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoem9tYmllVHMuaXNWYWxpZCAmJiB6b21iaWVUcy5IUCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvbWJpZVRzLmhhcnQoMjAwICogdGhpcy5tYWdpY19oYXJ0X3JhdGUoKSwgbnVsbCwgbnVsbCwgZmFsc2UsIGZhbHNlLCBjYy5Db2xvci5SRUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOmfs+aViFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheUVmZmVjdChcIkx1b0xlaVwiLCBlbmVteSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInByZWZhYl96b21iaWVfc2tpbGwvem9tYmllU2tpbGxfc2hhbmRpYW5cIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fc2hhbmRpYW5Db3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoYW5kaUNkVGltZSA9IDMgKyBsZXZlbDtcclxuICAgICAgICAgICAgdGhpcy5zZXRTa2lsbENEKFNraWxsVHlwZS7pl6rnlLUsIHRoaXMuX3NoYW5kaUNkVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZpcmVDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2ZpcmVOdW06IG51bWJlcltdID0gWzEsIDEsIDIsIDNdO1xyXG4gICAgcHJpdmF0ZSBfZmlyZUNkVGltZTogbnVtYmVyID0gMDtcclxuICAgIC8qKiDnh4Png6fnk7YgKi9cclxuICAgIHVwZGF0ZUZpcmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2ZpcmVDZFRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpcmVDZFRpbWUtLTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29jb3N6LmlzUGF1c2UpIHJldHVybjtcclxuICAgICAgICBsZXQgbGV2ZWwgPSB0aGlzLnVwZ3JhZGVTa2lsbEFycltTa2lsbFR5cGUu54eD54On55O2XTtcclxuICAgICAgICB0aGlzLl9maXJlQ291bnQgPSB0aGlzLl9maXJlTnVtW2xldmVsXTtcclxuICAgICAgICBpZiAoIWNvY29zei5pc1BhdXNlICYmIGdhbWVNZ3IgJiYgZ2FtZU1nci5wbGF5ZXJUcyAmJiBnYW1lTWdyLnBsYXllclRzLmF0a1RhcmdldCAmJiBnYW1lTWdyLnBsYXllclRzLmF0a1RhcmdldC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGxldCBwcmUgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInpvbWJpZVNraWxsX2ZpcmVcIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICAgICAgaWYgKHByZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpdjogY2MuVmVjMiA9IGdhbWVNZ3IucGxheWVyVHMuYXRrVGFyZ2V0LmdldFBvc2l0aW9uKCkuc3ViU2VsZihnYW1lTWdyLnBsYXllclRzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICBkaXYubm9ybWFsaXplU2VsZigpLm11bFNlbGYoNDAwKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZmlyZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmFkaWFuID0gKCh0aGlzLl9maXJlQ291bnQgLSAxKSAvIDIgLSBpKSAqIChNYXRoLlBJIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZyb20gPSBnYW1lTWdyLnBsYXllclRzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG8gPSBmcm9tLmFkZChjYy52MihkaXYpLnJvdGF0ZVNlbGYocmFkaWFuKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHAyID0gY2MudjIoKGZyb20ueCArIHRvLngpIC8gMiwgZnJvbS55ICsgOTAwKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyZS5jaGlsZHJlblsxXS5hY3RpdmUgPSAobGV2ZWwgPT0gMyA/IGZhbHNlIDogdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyZS5jaGlsZHJlblsyXS5hY3RpdmUgPSAobGV2ZWwgPT0gMyA/IHRydWUgOiBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyZS5zZXRQb3NpdGlvbihmcm9tKTtcclxuICAgICAgICAgICAgICAgICAgICBmaXJlLnNldFBhcmVudChnYW1lTWdyLm1hcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGZpcmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wYXJhbGxlbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYmV6aWVyVG8oMSwgZnJvbSwgcDIsIHRvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMSwgeyBhbmdsZTogNzIwICogKGRpdi54ID4gMCA/IDEgOiAtMSkgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJlLnpJbmRleCA9IFppbmRleExheWVyLnppbmVkeF9mbG9vclNraWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyZS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmaXJlLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyZS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5a2Q5by556Kw5pKe5L2TXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJlLmdldENvbXBvbmVudChjYy5Db2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlrZDlvLnlsZ7mgKdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBidXR0bGVUcyA9IGZpcmUuZ2V0Q29tcG9uZW50KEJ1bGxldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0bGVUcy5pc0hhcnRNdXNpYyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dGxlVHMuYXRrID0gMTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0bGVUcy5oYXJ0SW50ZXJ2YWwgPSAwLjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDnh4Png6fliqjnlLtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcEFuaSA9IGZpcmUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwQW5pLnNldFNraW4obGV2ZWwgPT0gMyA/IFwibFwiIDogXCJoXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BBbmkuc2V0QW5pbWF0aW9uKDAsIFwia1wiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcEFuaS5zZXRBbmltYXRpb24oMCwgXCJyYW5zaGFvXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g54eD54On55O256C056KO6Z+z5pWIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnBsYXlFZmZlY3QoXCJSYW5zaGFvcGluZ3Bvc3VpXCIsIGZpcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1nci5wbGF5RWZmZWN0KFwicmFuc2hhb1wiLCBmaXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgb3BhY2l0eTogNTAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4geyBmaXJlLmRlc3Ryb3koKTsgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fZmlyZUNkVGltZSA9IDQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2tpbGxDRChTa2lsbFR5cGUu54eD54On55O2LCA0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19