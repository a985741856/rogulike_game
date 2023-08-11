
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI/UIUpgradePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b4ebcCT0lEhoZZWJGVc0YS', 'UIUpgradePanel');
// scripts/UI/UIUpgradePanel.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIPage_1 = require("../Framework/UIPage");
var Constant_1 = require("../Framework/Constant");
var CocosZ_1 = require("../Framework/CocosZ");
var Utils_1 = require("../../common-plugin/Scripts/Utils");
var TweenEffect_1 = require("../Framework/TweenEffect");
var UpgradeMgr_1 = require("../Game/UpgradeMgr");
var PlatUtils_1 = require("../../common-plugin/Scripts/PlatUtils");
var gameMgr_1 = require("../Game/gameMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 皮肤试用面板
 */
var UIUpgradePanel = /** @class */ (function (_super) {
    __extends(UIUpgradePanel, _super);
    function UIUpgradePanel() {
        var _this = _super.call(this, Constant_1.PanelName.UIUpgradePanel) || this;
        _this._mask = null;
        _this._panel = null;
        _this._skill0 = null;
        _this._skill1 = null;
        _this._skill2 = null;
        _this._skill3 = null;
        _this._skill4 = null;
        _this._btnRefresh = null;
        _this._betterArr = [];
        _this._otherArr = []; // 可以获取的技能数组
        _this._uiSkillIdArr = []; // 随机4个技能
        _this._curIndex = -1; // 当前选中下标
        _this._canClick = true; // 能否点击
        _this._lockArr = [false, false, false, false, false];
        _this.isValid() && _this.onLoad();
        return _this;
    }
    UIUpgradePanel.prototype.onLoad = function () {
        this._mask = this._page.getChildByName("Mask");
        this._panel = this._page.getChildByName("Panel");
        var btnNames = ["skill0", "skill1", "skill2", "skill3", "skill4", "btnRefresh"];
        for (var i = 0; i < btnNames.length; i++) {
            var btn = cc.find(btnNames[i], this._panel);
            if (btn) {
                btn.on(cc.Node.EventType.TOUCH_END, this._onBtnClickedHandler, this);
                if (btn.name == "skill0") {
                    this._skill0 = btn;
                }
                else if (btn.name == "skill1") {
                    this._skill1 = btn;
                }
                else if (btn.name == "skill2") {
                    this._skill2 = btn;
                }
                else if (btn.name == "skill3") {
                    this._skill3 = btn;
                }
                else if (btn.name == "skill4") {
                    this._skill4 = btn;
                }
                else if (btn.name == "btnRefresh") {
                    this._btnRefresh = btn;
                    btn.active = CocosZ_1.cocosz.isADON;
                }
            }
        }
        // 服务器锁的数量
        var serverValue = CocosZ_1.cocosz.getConfigByKey("skillLockNum");
        if (Number.isInteger(serverValue)) {
            for (var i = 0; i < 5; i++) {
                if (i + serverValue >= 5) {
                    this._lockArr[i] = true;
                }
                else {
                    this._lockArr[i] = false;
                }
            }
        }
    };
    UIUpgradePanel.prototype.onOpen = function () {
        Utils_1.utils.SendEvent("页面-技能");
        // 优先技能数组
        var better = [
            UpgradeMgr_1.SkillType.双发, UpgradeMgr_1.SkillType.子弹碎片, UpgradeMgr_1.SkillType.枪林弹雨, UpgradeMgr_1.SkillType.谢幕,
            UpgradeMgr_1.SkillType.瞬斩, UpgradeMgr_1.SkillType.冰霜精通, UpgradeMgr_1.SkillType.火焰精通, UpgradeMgr_1.SkillType.萃取,
            UpgradeMgr_1.SkillType.再生, UpgradeMgr_1.SkillType.护甲靴子, UpgradeMgr_1.SkillType.疾走, UpgradeMgr_1.SkillType.神圣守护,
            UpgradeMgr_1.SkillType.通灵匕首, UpgradeMgr_1.SkillType.飞轮, UpgradeMgr_1.SkillType.闪电, UpgradeMgr_1.SkillType.燃烧瓶
        ];
        // 可以获取的技能数组
        for (var i = 0; i <= 34; i++) {
            if ([UpgradeMgr_1.SkillType.雷电精通, UpgradeMgr_1.SkillType.龙卵, UpgradeMgr_1.SkillType.通灵镰刀].includes(i)) {
                // 剔除的技能
            }
            else if (UpgradeMgr_1.upgradeMgr && UpgradeMgr_1.upgradeMgr.isValid && UpgradeMgr_1.upgradeMgr.upgradeSkillArr[i] >= UpgradeMgr_1.upgradeMgr.upgradeSkillMaxLevelArr[i]) {
                // 达到最大级
            }
            else if (better.includes(i)) {
                // 优先数组
                this._betterArr.push(i);
            }
            else {
                // 其它数组
                this._otherArr.push(i);
            }
        }
        this._initPanel();
        if (PlatUtils_1.default.IsWechat) {
            Utils_1.utils.adManager.hideCustomAd({ location: 3 });
            Utils_1.utils.adManager.hideCustomAd({ location: 4 });
        }
    };
    UIUpgradePanel.prototype.onClose = function () {
        CocosZ_1.cocosz.pauseCount--;
        if (PlatUtils_1.default.IsWechat) {
            Utils_1.utils.adManager.showCustomAd({ location: 3 });
            Utils_1.utils.adManager.showCustomAd({ location: 4 });
        }
    };
    UIUpgradePanel.prototype._initPanel = function () {
        TweenEffect_1.default.panel_mask_opacity(this._mask);
        TweenEffect_1.default.panel_open_moveY(this._panel);
        this._curIndex = -1;
        // 刷新技能
        this._skill_refresh();
    };
    /**
     * 所有按钮点击事件
     * @param event
     * @param data
     */
    UIUpgradePanel.prototype._onBtnClickedHandler = function (event, data) {
        return __awaiter(this, void 0, void 0, function () {
            var callback_1, lockNode;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //播放按钮点击音效
                    return [4 /*yield*/, CocosZ_1.cocosz.audioMgr.playBtnEffect().catch()];
                    case 1:
                        //播放按钮点击音效
                        _a.sent();
                        if (!this._canClick)
                            return [2 /*return*/];
                        switch (event.target.name) {
                            case "btnRefresh": {
                                this._canClick = false;
                                // 分享
                                if (event.target.getChildByName("share") && event.target.getChildByName("share").active) {
                                    Utils_1.utils.SendEvent("分享-刷新技能");
                                    CocosZ_1.cocosz.share(function () {
                                        Utils_1.utils.SendEvent("分享-刷新技能-成功");
                                        _this._skill_refresh();
                                        _this._canClick = true;
                                    }, function () {
                                        Utils_1.utils.SendEvent("分享-刷新技能-失败");
                                        _this._canClick = true;
                                    });
                                }
                                // 视频
                                else if (event.target.getChildByName("video") && event.target.getChildByName("video").active) {
                                    Utils_1.utils.SendEvent("视频-技能刷新(地下城僵尸)-播放");
                                    CocosZ_1.cocosz.watchAD(function () {
                                        Utils_1.utils.SendEvent("视频-技能刷新(地下城僵尸)-成功");
                                        _this._skill_refresh();
                                        _this._canClick = true;
                                    }, function () {
                                        Utils_1.utils.SendEvent("视频-技能刷新(地下城僵尸)-失败");
                                        _this._canClick = true;
                                    });
                                }
                                break;
                            }
                            case "skill0":
                            case "skill1":
                            case "skill2":
                            case "skill3":
                            case "skill4": {
                                this._canClick = false;
                                callback_1 = function () {
                                    if ("skill0" == event.target.name)
                                        _this._curIndex = 0;
                                    else if ("skill1" == event.target.name)
                                        _this._curIndex = 1;
                                    else if ("skill2" == event.target.name)
                                        _this._curIndex = 2;
                                    else if ("skill3" == event.target.name)
                                        _this._curIndex = 3;
                                    else if ("skill4" == event.target.name)
                                        _this._curIndex = 4;
                                    // 刷新
                                    _this.updateFrame();
                                    // 选中技能
                                    _this._selectSkill();
                                };
                                lockNode = event.target.getChildByName("lock");
                                if (lockNode && lockNode.active) {
                                    // 分享
                                    if (lockNode.getChildByName("share") && lockNode.getChildByName("share").active) {
                                        Utils_1.utils.SendEvent("分享-技能解锁");
                                        CocosZ_1.cocosz.share(function () {
                                            Utils_1.utils.SendEvent("分享-技能解锁-成功");
                                            callback_1 && callback_1();
                                        }, function () {
                                            Utils_1.utils.SendEvent("分享-技能解锁-失败");
                                            _this._canClick = true;
                                        });
                                    }
                                    // 视频
                                    else if (lockNode.getChildByName("video") && lockNode.getChildByName("video").active) {
                                        Utils_1.utils.SendEvent("视频-技能解锁-播放");
                                        CocosZ_1.cocosz.watchAD(function () {
                                            Utils_1.utils.SendEvent("视频-技能解锁-成功");
                                            callback_1 && callback_1();
                                        }, function () {
                                            Utils_1.utils.SendEvent("视频-技能解锁-失败");
                                            _this._canClick = true;
                                        });
                                    }
                                    else {
                                        callback_1 && callback_1();
                                    }
                                }
                                else {
                                    callback_1 && callback_1();
                                }
                                break;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UIUpgradePanel.prototype._selectSkill = function () {
        var _this = this;
        this._canClick = false;
        // 获取技能
        if (this._uiSkillIdArr[this._curIndex]) {
            UpgradeMgr_1.upgradeMgr && UpgradeMgr_1.upgradeMgr.isValid && UpgradeMgr_1.upgradeMgr.getSkill(this._uiSkillIdArr[this._curIndex]);
        }
        // 卡片效果
        var arr = [this._skill0, this._skill1, this._skill2, this._skill3, this._skill4];
        arr.forEach(function (v, i) {
            if (i == _this._curIndex) {
                _this.card_click(v);
            }
            else {
                _this.card_recycle(v);
            }
        });
        // 关闭弹窗
        CocosZ_1.cocosz.scheduleOnce(function () {
            CocosZ_1.cocosz.uiMgr.closePanel(Constant_1.PanelName.UIUpgradePanel);
            if (gameMgr_1.gameMgr && gameMgr_1.gameMgr.playerTs && gameMgr_1.gameMgr.playerTs.isValid) {
                gameMgr_1.gameMgr.playerTs.avoidInjury(2);
            }
        }, 1.5);
    };
    UIUpgradePanel.prototype._getSkillIDName = function (id) {
        return id + (UpgradeMgr_1.upgradeMgr.upgradeSkillMaxLevelArr[id] > 1 ? "_" + (UpgradeMgr_1.upgradeMgr.upgradeSkillArr[id] + 1) : "");
    };
    UIUpgradePanel.prototype._skill_load = function (card, id) {
        var redArr = ["8", "20", "21", "22", "23", "31"];
        var blueArr = ["24", "26", "27", "29", "33_1", "33_2", "34_1", "34_2"];
        var yellowArr = ["9", "10", "11"];
        var greenArr = ["2", "4", "5", "6", "7"];
        var pinkArr = ["12", "13", "14", "15", "16", "20", "32_3"];
        var purpleArr = ["17", "18", "19", "32_1", "32_2", "33_3", "34_3"];
        var moreblueArr = ["0", "1", "3"];
        var node_kuang_select = card.getChildByName("kuang_select");
        var node_kuang_common = card.getChildByName("kuang_common");
        // 名字
        var node_name = card.getChildByName("name");
        if (node_name) {
            var spr_name_1 = node_name.getComponent(cc.Sprite);
            if (spr_name_1) {
                CocosZ_1.cocosz.resMgr.loadAndCacheRes("i18n/tex_zombie/" + CocosZ_1.cocosz.curLanguage + "/zombieSkill_name_" + this._getSkillIDName(id), cc.SpriteFrame, null, function (err, res) {
                    if (spr_name_1 && spr_name_1.isValid) {
                        spr_name_1.spriteFrame = res;
                    }
                });
            }
        }
        // 图标
        var node_icon = card.getChildByName("icon");
        if (node_icon) {
            if (this._getSkillIDName(id) == "0" || this._getSkillIDName(id) == "5") {
                node_icon.x = 12;
                node_icon.y = 28;
                node_kuang_select.scale = 0.88;
                node_kuang_common.scale = 0.88;
            }
            else if (this._getSkillIDName(id) == "2") {
                node_icon.x = -2;
                node_icon.y = 30.5;
                node_kuang_select.scaleX = 0.95;
                node_kuang_select.scaleY = 0.9;
                node_kuang_common.scaleX = 0.95;
                node_kuang_common.scaleY = 0.9;
            }
            else if (this._getSkillIDName(id) == "6") {
                node_kuang_select.scaleX = 0.94;
                node_kuang_common.scaleX = 0.94;
            }
            var spr_icon_1 = node_icon.getComponent(cc.Sprite);
            if (spr_icon_1) {
                CocosZ_1.cocosz.resMgr.loadAndCacheRes("tex_zombie/zombieSkill_icon_" + this._getSkillIDName(id), cc.SpriteFrame, null, function (err, res) {
                    if (spr_icon_1 && spr_icon_1.isValid) {
                        spr_icon_1.spriteFrame = res;
                    }
                });
            }
        }
        // 介绍
        var node_introduce = card.getChildByName("introduce");
        if (node_introduce) {
            var spr_introduce_1 = node_introduce.getComponent(cc.Sprite);
            if (spr_introduce_1) {
                CocosZ_1.cocosz.resMgr.loadAndCacheRes("i18n/tex_zombie/" + CocosZ_1.cocosz.curLanguage + "/zombieSkill_introduce_" + this._getSkillIDName(id), cc.SpriteFrame, null, function (err, res) {
                    if (spr_introduce_1 && spr_introduce_1.isValid) {
                        spr_introduce_1.spriteFrame = res;
                    }
                });
            }
        }
        //选择框的颜色
        if (node_kuang_select) {
            var spr_kuang_select = node_kuang_select.getComponent(cc.Sprite);
            if (spr_kuang_select && spr_kuang_select.isValid) {
                if (redArr.includes(this._getSkillIDName(id))) {
                    spr_kuang_select.spriteFrame = cc.find("framNode", this._panel).getComponent("frameNode").selectSprite[2];
                }
                else if (blueArr.includes(this._getSkillIDName(id))) {
                    spr_kuang_select.spriteFrame = cc.find("framNode", this._panel).getComponent("frameNode").selectSprite[0];
                }
                else if (yellowArr.includes(this._getSkillIDName(id))) {
                    spr_kuang_select.spriteFrame = cc.find("framNode", this._panel).getComponent("frameNode").selectSprite[1];
                }
                else if (greenArr.includes(this._getSkillIDName(id))) {
                    spr_kuang_select.spriteFrame = cc.find("framNode", this._panel).getComponent("frameNode").selectSprite[5];
                }
                else if (pinkArr.includes(this._getSkillIDName(id))) {
                    spr_kuang_select.spriteFrame = cc.find("framNode", this._panel).getComponent("frameNode").selectSprite[3];
                }
                else if (purpleArr.includes(this._getSkillIDName(id))) {
                    spr_kuang_select.spriteFrame = cc.find("framNode", this._panel).getComponent("frameNode").selectSprite[4];
                }
                else if (moreblueArr.includes(this._getSkillIDName(id))) {
                    spr_kuang_select.spriteFrame = cc.find("framNode", this._panel).getComponent("frameNode").selectSprite[6];
                }
            }
        }
        //框的颜色
        if (node_kuang_common) {
            var spr_kuang_common = node_kuang_common.getComponent(cc.Sprite);
            if (spr_kuang_common && spr_kuang_common.isValid) {
                if (redArr.includes(this._getSkillIDName(id))) {
                    spr_kuang_common.spriteFrame = cc.find("framNode", this._panel).getComponent("frameNode").commonSprite[2];
                }
                else if (blueArr.includes(this._getSkillIDName(id))) {
                    spr_kuang_common.spriteFrame = cc.find("framNode", this._panel).getComponent("frameNode").commonSprite[0];
                }
                else if (yellowArr.includes(this._getSkillIDName(id))) {
                    spr_kuang_common.spriteFrame = cc.find("framNode", this._panel).getComponent("frameNode").commonSprite[1];
                }
                else if (greenArr.includes(this._getSkillIDName(id))) {
                    spr_kuang_common.spriteFrame = cc.find("framNode", this._panel).getComponent("frameNode").commonSprite[5];
                }
                else if (pinkArr.includes(this._getSkillIDName(id))) {
                    spr_kuang_common.spriteFrame = cc.find("framNode", this._panel).getComponent("frameNode").commonSprite[3];
                }
                else if (purpleArr.includes(this._getSkillIDName(id))) {
                    spr_kuang_common.spriteFrame = cc.find("framNode", this._panel).getComponent("frameNode").commonSprite[4];
                }
                else if (moreblueArr.includes(this._getSkillIDName(id))) {
                    spr_kuang_common.spriteFrame = cc.find("framNode", this._panel).getComponent("frameNode").commonSprite[6];
                }
            }
        }
    };
    /** 技能刷新 */
    UIUpgradePanel.prototype._skill_refresh = function () {
        var _a;
        this._uiSkillIdArr.length = 0;
        // 从技能数组中获取5个技能
        if (this._betterArr.length) {
            for (var i = Math.min(5 - this._uiSkillIdArr.length, this._betterArr.length); i > 0; i--) {
                var index = Math.floor(Math.random() * this._betterArr.length);
                if (this._betterArr[index] >= 0) {
                    this._uiSkillIdArr.push(this._betterArr[index]);
                    this._betterArr.splice(index, 1);
                }
            }
        }
        if (this._otherArr.length) {
            for (var i = Math.min(5 - this._uiSkillIdArr.length, this._otherArr.length); i > 0; i--) {
                var index = Math.floor(Math.random() * this._otherArr.length);
                if (this._otherArr[index] >= 0) {
                    this._uiSkillIdArr.push(this._otherArr[index]);
                    this._otherArr.splice(index, 1);
                }
            }
        }
        // 排序
        for (var i = 0; i < this._uiSkillIdArr.length; i++) {
            // 3级技能(非视频位置)
            if (UpgradeMgr_1.upgradeMgr.upgradeSkillArr[this._uiSkillIdArr[i]] == 2 && !this._lockArr[i]) {
                // 与视频位置交换
                for (var j = this._uiSkillIdArr.length - 1; j > i; j--) {
                    if (this._lockArr[j] && UpgradeMgr_1.upgradeMgr.upgradeSkillArr[this._uiSkillIdArr[j]] != 2) {
                        // 交换
                        _a = [this._uiSkillIdArr[j], this._uiSkillIdArr[i]], this._uiSkillIdArr[i] = _a[0], this._uiSkillIdArr[j] = _a[1];
                    }
                }
            }
        }
        // 技能0 ///////////////////////////////////////////////////////////////////////////////////////////////
        if (this._uiSkillIdArr[0] >= 0) {
            this._skill0.active = true;
            var id = this._uiSkillIdArr[0];
            this._skill_load(this._skill0, id);
        }
        else {
            this._skill0.active = false;
        }
        // 技能1 ///////////////////////////////////////////////////////////////////////////////////////////////
        if (this._uiSkillIdArr[1] >= 0) {
            this._skill1.active = true;
            var id = this._uiSkillIdArr[1];
            this._skill_load(this._skill1, id);
        }
        else {
            this._skill1.active = false;
        }
        // 技能2 ///////////////////////////////////////////////////////////////////////////////////////////////
        if (this._uiSkillIdArr[2] >= 0) {
            this._skill2.active = true;
            var id = this._uiSkillIdArr[2];
            this._skill_load(this._skill2, id);
        }
        else {
            this._skill2.active = false;
        }
        // 技能3 ///////////////////////////////////////////////////////////////////////////////////////////////
        if (this._uiSkillIdArr[3] >= 0) {
            this._skill3.active = true;
            var id = this._uiSkillIdArr[3];
            this._skill_load(this._skill3, id);
        }
        else {
            this._skill3.active = false;
        }
        // 技能4 ///////////////////////////////////////////////////////////////////////////////////////////////
        if (this._uiSkillIdArr[4] >= 0) {
            this._skill4.active = true;
            var id = this._uiSkillIdArr[4];
            this._skill_load(this._skill4, id);
        }
        else {
            this._skill4.active = false;
        }
        // 视频按钮隐藏
        if (this._otherArr.length == 0 && this._btnRefresh && this._btnRefresh.active) {
            this._btnRefresh.active = false;
        }
        this.updateFrame();
    };
    // 更新外发光
    UIUpgradePanel.prototype.updateFrame = function () {
        // 选中框
        this._skill0.children[0].active = (this._curIndex == 0);
        this._skill1.children[0].active = (this._curIndex == 1);
        this._skill2.children[0].active = (this._curIndex == 2);
        this._skill3.children[0].active = (this._curIndex == 3);
        this._skill4.children[0].active = (this._curIndex == 4);
        // 解锁框
        this._skill0.children[5].active = this._lockArr[0] && this._curIndex != 0;
        this._skill1.children[5].active = this._lockArr[1] && this._curIndex != 1;
        this._skill2.children[5].active = this._lockArr[2] && this._curIndex != 2;
        this._skill3.children[5].active = this._lockArr[3] && this._curIndex != 3;
        this._skill4.children[5].active = this._lockArr[4] && this._curIndex != 4;
    };
    /** 卡牌选中特效 */
    UIUpgradePanel.prototype.card_click = function (card) {
        card.zIndex = cc.macro.MAX_ZINDEX;
        cc.tween(card)
            .to(0.5, { x: 0, y: 200 }, { easing: "sineIn" })
            .to(1, { scale: 2, opacity: 0 }, { easing: "fade" })
            .start();
    };
    /** 卡牌回收 */
    UIUpgradePanel.prototype.card_recycle = function (card) {
        var btnUnLock = card.getChildByName("btnUnLock");
        if (btnUnLock)
            btnUnLock.active = false;
        cc.tween(card)
            .to(0.5, { opacity: 0 }, { easing: "sineIn" })
            .start();
    };
    UIUpgradePanel = __decorate([
        ccclass
    ], UIUpgradePanel);
    return UIUpgradePanel;
}(UIPage_1.default));
exports.default = UIUpgradePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXFVJVXBncmFkZVBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUF5QztBQUN6QyxrREFBa0Q7QUFDbEQsOENBQTZDO0FBQzdDLDJEQUEwRDtBQUMxRCx3REFBbUQ7QUFDbkQsaURBQTJEO0FBQzNELG1FQUE4RDtBQUM5RCwyQ0FBMEM7QUFFcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7O0dBRUc7QUFFSDtJQUE0QyxrQ0FBTTtJQW9COUM7UUFBQSxZQUNJLGtCQUFNLG9CQUFTLENBQUMsY0FBYyxDQUFDLFNBRWxDO1FBckJPLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBYSxFQUFFLENBQUM7UUFDMUIsZUFBUyxHQUFhLEVBQUUsQ0FBQyxDQUFBLFlBQVk7UUFDckMsbUJBQWEsR0FBYSxFQUFFLENBQUMsQ0FBQSxTQUFTO1FBQ3RDLGVBQVMsR0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFBLFNBQVM7UUFFaEMsZUFBUyxHQUFZLElBQUksQ0FBQyxDQUFBLE9BQU87UUFFakMsY0FBUSxHQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBSTlELEtBQUksQ0FBQyxPQUFPLEVBQUUs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Q0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3hELE1BQU07UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsYUFBYTtJQUNiLG1DQUFVLEdBQVYsVUFBVyxJQUFhO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDVCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDL0MsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQ25ELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxXQUFXO0lBQ1gscUNBQVksR0FBWixVQUFhLElBQWE7UUFDdEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUNoRCxJQUFJLFNBQVM7WUFBRSxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzthQUNULEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDN0MsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQTNjZ0IsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQTZjbEM7SUFBRCxxQkFBQztDQTdjRCxBQTZjQyxDQTdjMkMsZ0JBQU0sR0E2Y2pEO2tCQTdjb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVBhZ2UgZnJvbSBcIi4uL0ZyYW1ld29yay9VSVBhZ2VcIjtcclxuaW1wb3J0IHsgUGFuZWxOYW1lIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5pbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgeyB1dGlscyB9IGZyb20gXCIuLi8uLi9jb21tb24tcGx1Z2luL1NjcmlwdHMvVXRpbHNcIjtcclxuaW1wb3J0IFR3ZWVuRWZmZWN0IGZyb20gXCIuLi9GcmFtZXdvcmsvVHdlZW5FZmZlY3RcIjtcclxuaW1wb3J0IHsgU2tpbGxUeXBlLCB1cGdyYWRlTWdyIH0gZnJvbSBcIi4uL0dhbWUvVXBncmFkZU1nclwiO1xyXG5pbXBvcnQgUGxhdFV0aWxzIGZyb20gXCIuLi8uLi9jb21tb24tcGx1Z2luL1NjcmlwdHMvUGxhdFV0aWxzXCI7XHJcbmltcG9ydCB7IGdhbWVNZ3IgfSBmcm9tIFwiLi4vR2FtZS9nYW1lTWdyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAqIOearuiCpOivleeUqOmdouadv1xyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlVcGdyYWRlUGFuZWwgZXh0ZW5kcyBVSVBhZ2Uge1xyXG5cclxuICAgIHByaXZhdGUgX21hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfcGFuZWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfc2tpbGwwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3NraWxsMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9za2lsbDI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfc2tpbGwzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3NraWxsNDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9idG5SZWZyZXNoOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9iZXR0ZXJBcnI6IG51bWJlcltdID0gW107XHJcbiAgICBwcml2YXRlIF9vdGhlckFycjogbnVtYmVyW10gPSBbXTsvLyDlj6/ku6Xojrflj5bnmoTmioDog73mlbDnu4RcclxuICAgIHByaXZhdGUgX3VpU2tpbGxJZEFycjogbnVtYmVyW10gPSBbXTsvLyDpmo/mnLo05Liq5oqA6IO9XHJcbiAgICBwcml2YXRlIF9jdXJJbmRleDogbnVtYmVyID0gLTE7Ly8g5b2T5YmN6YCJ5Lit5LiL5qCHXHJcblxyXG4gICAgcHJpdmF0ZSBfY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlOy8vIOiDveWQpueCueWHu1xyXG5cclxuICAgIHByaXZhdGUgX2xvY2tBcnI6IGJvb2xlYW5bXSA9IFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFBhbmVsTmFtZS5VSVVwZ3JhZGVQYW5lbCk7XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkKCkgJiYgdGhpcy5vbkxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX21hc2sgPSB0aGlzLl9wYWdlLmdldENoaWxkQnlOYW1lKFwiTWFza1wiKTtcclxuICAgICAgICB0aGlzLl9wYW5lbCA9IHRoaXMuX3BhZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJQYW5lbFwiKTtcclxuICAgICAgICBsZXQgYnRuTmFtZXM6IHN0cmluZ1tdID0gW1wic2tpbGwwXCIsIFwic2tpbGwxXCIsIFwic2tpbGwyXCIsIFwic2tpbGwzXCIsIFwic2tpbGw0XCIsIFwiYnRuUmVmcmVzaFwiXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ0bk5hbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBidG46IGNjLk5vZGUgPSBjYy5maW5kKGJ0bk5hbWVzW2ldLCB0aGlzLl9wYW5lbCk7XHJcbiAgICAgICAgICAgIGlmIChidG4pIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uQnRuQ2xpY2tlZEhhbmRsZXIsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ0bi5uYW1lID09IFwic2tpbGwwXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9za2lsbDAgPSBidG47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJ0bi5uYW1lID09IFwic2tpbGwxXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9za2lsbDEgPSBidG47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJ0bi5uYW1lID09IFwic2tpbGwyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9za2lsbDIgPSBidG47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJ0bi5uYW1lID09IFwic2tpbGwzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9za2lsbDMgPSBidG47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJ0bi5uYW1lID09IFwic2tpbGw0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9za2lsbDQgPSBidG47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJ0bi5uYW1lID09IFwiYnRuUmVmcmVzaFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnRuUmVmcmVzaCA9IGJ0bjtcclxuICAgICAgICAgICAgICAgICAgICBidG4uYWN0aXZlID0gY29jb3N6LmlzQURPTjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmnI3liqHlmajplIHnmoTmlbDph49cclxuICAgICAgICBsZXQgc2VydmVyVmFsdWUgPSBjb2Nvc3ouZ2V0Q29uZmlnQnlLZXkoXCJza2lsbExvY2tOdW1cIik7XHJcbiAgICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIoc2VydmVyVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSArIHNlcnZlclZhbHVlID49IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2NrQXJyW2ldID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9ja0FycltpXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbk9wZW4oKSB7XHJcbiAgICAgICAgdXRpbHMuU2VuZEV2ZW50KFwi6aG16Z2iLeaKgOiDvVwiKTtcclxuICAgICAgICAvLyDkvJjlhYjmioDog73mlbDnu4RcclxuICAgICAgICBsZXQgYmV0dGVyID0gW1xyXG4gICAgICAgICAgICBTa2lsbFR5cGUu5Y+M5Y+RLCBTa2lsbFR5cGUu5a2Q5by556KO54mHLCBTa2lsbFR5cGUu5p6q5p6X5by56ZuoLCBTa2lsbFR5cGUu6LCi5bmVLFxyXG4gICAgICAgICAgICBTa2lsbFR5cGUu556s5papLCBTa2lsbFR5cGUu5Yaw6Zyc57K+6YCaLCBTa2lsbFR5cGUu54Gr54Sw57K+6YCaLCBTa2lsbFR5cGUu6JCD5Y+WLFxyXG4gICAgICAgICAgICBTa2lsbFR5cGUu5YaN55SfLCBTa2lsbFR5cGUu5oqk55Sy6Z205a2QLCBTa2lsbFR5cGUu55a+6LWwLCBTa2lsbFR5cGUu56We5Zyj5a6I5oqkLFxyXG4gICAgICAgICAgICBTa2lsbFR5cGUu6YCa54G15YyV6aaWLCBTa2lsbFR5cGUu6aOe6L2uLCBTa2lsbFR5cGUu6Zeq55S1LCBTa2lsbFR5cGUu54eD54On55O2XHJcbiAgICAgICAgXTtcclxuICAgICAgICAvLyDlj6/ku6Xojrflj5bnmoTmioDog73mlbDnu4RcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAzNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChbU2tpbGxUeXBlLumbt+eUteeyvumAmiwgU2tpbGxUeXBlLum+meWNtSwgU2tpbGxUeXBlLumAmueBtemVsOWIgF0uaW5jbHVkZXMoaSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWJlOmZpOeahOaKgOiDvVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHVwZ3JhZGVNZ3IgJiYgdXBncmFkZU1nci5pc1ZhbGlkICYmIHVwZ3JhZGVNZ3IudXBncmFkZVNraWxsQXJyW2ldID49IHVwZ3JhZGVNZ3IudXBncmFkZVNraWxsTWF4TGV2ZWxBcnJbaV0pIHtcclxuICAgICAgICAgICAgICAgIC8vIOi+vuWIsOacgOWkp+e6p1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJldHRlci5pbmNsdWRlcyhpKSkge1xyXG4gICAgICAgICAgICAgICAgLy8g5LyY5YWI5pWw57uEXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iZXR0ZXJBcnIucHVzaChpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOWFtuWug+aVsOe7hFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3RoZXJBcnIucHVzaChpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9pbml0UGFuZWwoKTtcclxuXHJcbiAgICAgICAgaWYgKFBsYXRVdGlscy5Jc1dlY2hhdCkge1xyXG4gICAgICAgICAgICB1dGlscy5hZE1hbmFnZXIuaGlkZUN1c3RvbUFkKHsgbG9jYXRpb246IDMgfSk7XHJcbiAgICAgICAgICAgIHV0aWxzLmFkTWFuYWdlci5oaWRlQ3VzdG9tQWQoeyBsb2NhdGlvbjogNCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQ2xvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgY29jb3N6LnBhdXNlQ291bnQtLTtcclxuICAgICAgICBpZiAoUGxhdFV0aWxzLklzV2VjaGF0KSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmFkTWFuYWdlci5zaG93Q3VzdG9tQWQoeyBsb2NhdGlvbjogMyB9KTtcclxuICAgICAgICAgICAgdXRpbHMuYWRNYW5hZ2VyLnNob3dDdXN0b21BZCh7IGxvY2F0aW9uOiA0IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pbml0UGFuZWwoKSB7XHJcbiAgICAgICAgVHdlZW5FZmZlY3QucGFuZWxfbWFza19vcGFjaXR5KHRoaXMuX21hc2spXHJcbiAgICAgICAgVHdlZW5FZmZlY3QucGFuZWxfb3Blbl9tb3ZlWSh0aGlzLl9wYW5lbCk7XHJcbiAgICAgICAgdGhpcy5fY3VySW5kZXggPSAtMTtcclxuICAgICAgICAvLyDliLfmlrDmioDog71cclxuICAgICAgICB0aGlzLl9za2lsbF9yZWZyZXNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiYDmnInmjInpkq7ngrnlh7vkuovku7ZcclxuICAgICAqIEBwYXJhbSBldmVudCBcclxuICAgICAqIEBwYXJhbSBkYXRhIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIF9vbkJ0bkNsaWNrZWRIYW5kbGVyKGV2ZW50OiBjYy5FdmVudCwgZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy/mkq3mlL7mjInpkq7ngrnlh7vpn7PmlYhcclxuICAgICAgICBhd2FpdCBjb2Nvc3ouYXVkaW9NZ3IucGxheUJ0bkVmZmVjdCgpLmNhdGNoKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jYW5DbGljaykgcmV0dXJuO1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJ0blJlZnJlc2hcIjoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIOWIhuS6q1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5nZXRDaGlsZEJ5TmFtZShcInNoYXJlXCIpICYmIGV2ZW50LnRhcmdldC5nZXRDaGlsZEJ5TmFtZShcInNoYXJlXCIpLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLlNlbmRFdmVudChcIuWIhuS6qy3liLfmlrDmioDog71cIilcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouc2hhcmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5TZW5kRXZlbnQoXCLliIbkuqst5Yi35paw5oqA6IO9LeaIkOWKn1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9za2lsbF9yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLlNlbmRFdmVudChcIuWIhuS6qy3liLfmlrDmioDog70t5aSx6LSlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g6KeG6aKRXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChldmVudC50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb1wiKSAmJiBldmVudC50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb1wiKS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5TZW5kRXZlbnQoXCLop4bpopEt5oqA6IO95Yi35pawKOWcsOS4i+WfjuWDteWwuCkt5pKt5pS+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LndhdGNoQUQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5TZW5kRXZlbnQoXCLop4bpopEt5oqA6IO95Yi35pawKOWcsOS4i+WfjuWDteWwuCkt5oiQ5YqfXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NraWxsX3JlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuU2VuZEV2ZW50KFwi6KeG6aKRLeaKgOiDveWIt+aWsCjlnLDkuIvln47lg7XlsLgpLeWksei0pVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwic2tpbGwwXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJza2lsbDFcIjpcclxuICAgICAgICAgICAgY2FzZSBcInNraWxsMlwiOlxyXG4gICAgICAgICAgICBjYXNlIFwic2tpbGwzXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJza2lsbDRcIjoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FuQ2xpY2sgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwic2tpbGwwXCIgPT0gZXZlbnQudGFyZ2V0Lm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1ckluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcInNraWxsMVwiID09IGV2ZW50LnRhcmdldC5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJJbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXCJza2lsbDJcIiA9PSBldmVudC50YXJnZXQubmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VySW5kZXggPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFwic2tpbGwzXCIgPT0gZXZlbnQudGFyZ2V0Lm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1ckluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcInNraWxsNFwiID09IGV2ZW50LnRhcmdldC5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJJbmRleCA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Yi35pawXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGcmFtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOmAieS4reaKgOiDvVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdFNraWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9ja05vZGUgPSBldmVudC50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJsb2NrXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2tOb2RlICYmIGxvY2tOb2RlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWIhuS6q1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NrTm9kZS5nZXRDaGlsZEJ5TmFtZShcInNoYXJlXCIpICYmIGxvY2tOb2RlLmdldENoaWxkQnlOYW1lKFwic2hhcmVcIikuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLlNlbmRFdmVudChcIuWIhuS6qy3mioDog73op6PplIFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LnNoYXJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLlNlbmRFdmVudChcIuWIhuS6qy3mioDog73op6PplIEt5oiQ5YqfXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5TZW5kRXZlbnQoXCLliIbkuqst5oqA6IO96Kej6ZSBLeWksei0pVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyDop4bpopFcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChsb2NrTm9kZS5nZXRDaGlsZEJ5TmFtZShcInZpZGVvXCIpICYmIGxvY2tOb2RlLmdldENoaWxkQnlOYW1lKFwidmlkZW9cIikuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLlNlbmRFdmVudChcIuinhumikS3mioDog73op6PplIEt5pKt5pS+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei53YXRjaEFEKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLlNlbmRFdmVudChcIuinhumikS3mioDog73op6PplIEt5oiQ5YqfXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5TZW5kRXZlbnQoXCLop4bpopEt5oqA6IO96Kej6ZSBLeWksei0pVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NlbGVjdFNraWxsKCkge1xyXG4gICAgICAgIHRoaXMuX2NhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgLy8g6I635Y+W5oqA6IO9XHJcbiAgICAgICAgaWYgKHRoaXMuX3VpU2tpbGxJZEFyclt0aGlzLl9jdXJJbmRleF0pIHtcclxuICAgICAgICAgICAgdXBncmFkZU1nciAmJiB1cGdyYWRlTWdyLmlzVmFsaWQgJiYgdXBncmFkZU1nci5nZXRTa2lsbCh0aGlzLl91aVNraWxsSWRBcnJbdGhpcy5fY3VySW5kZXhdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Y2h54mH5pWI5p6cXHJcbiAgICAgICAgbGV0IGFycjogY2MuTm9kZVtdID0gW3RoaXMuX3NraWxsMCwgdGhpcy5fc2tpbGwxLCB0aGlzLl9za2lsbDIsIHRoaXMuX3NraWxsMywgdGhpcy5fc2tpbGw0XTtcclxuICAgICAgICBhcnIuZm9yRWFjaCgodiwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSB0aGlzLl9jdXJJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkX2NsaWNrKHYpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkX3JlY3ljbGUodik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIOWFs+mXreW8ueeql1xyXG4gICAgICAgIGNvY29zei5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb2Nvc3oudWlNZ3IuY2xvc2VQYW5lbChQYW5lbE5hbWUuVUlVcGdyYWRlUGFuZWwpO1xyXG4gICAgICAgICAgICBpZiAoZ2FtZU1nciAmJiBnYW1lTWdyLnBsYXllclRzICYmIGdhbWVNZ3IucGxheWVyVHMuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgZ2FtZU1nci5wbGF5ZXJUcy5hdm9pZEluanVyeSgyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0U2tpbGxJRE5hbWUoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBpZCArICh1cGdyYWRlTWdyLnVwZ3JhZGVTa2lsbE1heExldmVsQXJyW2lkXSA+IDEgPyBcIl9cIiArICh1cGdyYWRlTWdyLnVwZ3JhZGVTa2lsbEFycltpZF0gKyAxKSA6IFwiXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2tpbGxfbG9hZChjYXJkOiBjYy5Ob2RlLCBpZCkge1xyXG4gICAgICAgIGxldCByZWRBcnIgPSBbXCI4XCIsXCIyMFwiLFwiMjFcIixcIjIyXCIsXCIyM1wiLFwiMzFcIl07XHJcbiAgICAgICAgbGV0IGJsdWVBcnIgPSBbXCIyNFwiLFwiMjZcIixcIjI3XCIsXCIyOVwiLFwiMzNfMVwiLFwiMzNfMlwiLFwiMzRfMVwiLFwiMzRfMlwiXTtcclxuICAgICAgICBsZXQgeWVsbG93QXJyID0gW1wiOVwiLFwiMTBcIixcIjExXCJdO1xyXG4gICAgICAgIGxldCBncmVlbkFyciA9IFtcIjJcIixcIjRcIixcIjVcIixcIjZcIixcIjdcIl07XHJcbiAgICAgICAgbGV0IHBpbmtBcnIgPSBbXCIxMlwiLFwiMTNcIixcIjE0XCIsXCIxNVwiLFwiMTZcIixcIjIwXCIsXCIzMl8zXCJdO1xyXG4gICAgICAgIGxldCBwdXJwbGVBcnIgPSBbXCIxN1wiLFwiMThcIixcIjE5XCIsXCIzMl8xXCIsXCIzMl8yXCIsXCIzM18zXCIsXCIzNF8zXCJdO1xyXG4gICAgICAgIGxldCBtb3JlYmx1ZUFyciA9IFtcIjBcIixcIjFcIixcIjNcIl07XHJcblxyXG4gICAgICAgIGxldCBub2RlX2t1YW5nX3NlbGVjdCA9IGNhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJrdWFuZ19zZWxlY3RcIik7XHJcbiAgICAgICAgbGV0IG5vZGVfa3VhbmdfY29tbW9uID0gY2FyZC5nZXRDaGlsZEJ5TmFtZShcImt1YW5nX2NvbW1vblwiKTtcclxuICAgICAgICAvLyDlkI3lrZdcclxuICAgICAgICBsZXQgbm9kZV9uYW1lID0gY2FyZC5nZXRDaGlsZEJ5TmFtZShcIm5hbWVcIik7XHJcbiAgICAgICAgaWYgKG5vZGVfbmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgc3ByX25hbWUgPSBub2RlX25hbWUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgIGlmIChzcHJfbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY29jb3N6LnJlc01nci5sb2FkQW5kQ2FjaGVSZXMoXCJpMThuL3RleF96b21iaWUvXCIgKyBjb2Nvc3ouY3VyTGFuZ3VhZ2UgKyBcIi96b21iaWVTa2lsbF9uYW1lX1wiICsgdGhpcy5fZ2V0U2tpbGxJRE5hbWUoaWQpLCBjYy5TcHJpdGVGcmFtZSwgbnVsbCwgKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwcl9uYW1lICYmIHNwcl9uYW1lLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByX25hbWUuc3ByaXRlRnJhbWUgPSByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Zu+5qCHXHJcbiAgICAgICAgbGV0IG5vZGVfaWNvbiA9IGNhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpO1xyXG4gICAgICAgIGlmIChub2RlX2ljb24pIHtcclxuICAgICAgICAgICAgaWYodGhpcy5fZ2V0U2tpbGxJRE5hbWUoaWQpID09IFwiMFwiIHx8IHRoaXMuX2dldFNraWxsSUROYW1lKGlkKSA9PSBcIjVcIil7XHJcbiAgICAgICAgICAgICAgICBub2RlX2ljb24ueCA9IDEyO1xyXG4gICAgICAgICAgICAgICAgbm9kZV9pY29uLnkgPSAyODtcclxuICAgICAgICAgICAgICAgIG5vZGVfa3Vhbmdfc2VsZWN0LnNjYWxlID0gMC44ODtcclxuICAgICAgICAgICAgICAgIG5vZGVfa3VhbmdfY29tbW9uLnNjYWxlID0gMC44ODtcclxuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5fZ2V0U2tpbGxJRE5hbWUoaWQpID09IFwiMlwiKXtcclxuICAgICAgICAgICAgICAgIG5vZGVfaWNvbi54ID0gLTI7XHJcbiAgICAgICAgICAgICAgICBub2RlX2ljb24ueSA9IDMwLjU7XHJcbiAgICAgICAgICAgICAgICBub2RlX2t1YW5nX3NlbGVjdC5zY2FsZVggPSAwLjk1O1xyXG4gICAgICAgICAgICAgICAgbm9kZV9rdWFuZ19zZWxlY3Quc2NhbGVZID0gMC45O1xyXG4gICAgICAgICAgICAgICAgbm9kZV9rdWFuZ19jb21tb24uc2NhbGVYID0gMC45NTtcclxuICAgICAgICAgICAgICAgIG5vZGVfa3VhbmdfY29tbW9uLnNjYWxlWSA9IDAuOTtcclxuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5fZ2V0U2tpbGxJRE5hbWUoaWQpID09IFwiNlwiKXtcclxuICAgICAgICAgICAgICAgIG5vZGVfa3Vhbmdfc2VsZWN0LnNjYWxlWCA9IDAuOTQ7XHJcbiAgICAgICAgICAgICAgICBub2RlX2t1YW5nX2NvbW1vbi5zY2FsZVggPSAwLjk0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBzcHJfaWNvbiA9IG5vZGVfaWNvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgaWYgKHNwcl9pY29uKSB7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3oucmVzTWdyLmxvYWRBbmRDYWNoZVJlcyhcInRleF96b21iaWUvem9tYmllU2tpbGxfaWNvbl9cIiArIHRoaXMuX2dldFNraWxsSUROYW1lKGlkKSwgY2MuU3ByaXRlRnJhbWUsIG51bGwsIChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzcHJfaWNvbiAmJiBzcHJfaWNvbi5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcl9pY29uLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOS7i+e7jVxyXG4gICAgICAgIGxldCBub2RlX2ludHJvZHVjZSA9IGNhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJpbnRyb2R1Y2VcIik7XHJcbiAgICAgICAgaWYgKG5vZGVfaW50cm9kdWNlKSB7XHJcbiAgICAgICAgICAgIGxldCBzcHJfaW50cm9kdWNlID0gbm9kZV9pbnRyb2R1Y2UuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgIGlmIChzcHJfaW50cm9kdWNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3oucmVzTWdyLmxvYWRBbmRDYWNoZVJlcyhcImkxOG4vdGV4X3pvbWJpZS9cIiArIGNvY29zei5jdXJMYW5ndWFnZSArIFwiL3pvbWJpZVNraWxsX2ludHJvZHVjZV9cIiArIHRoaXMuX2dldFNraWxsSUROYW1lKGlkKSwgY2MuU3ByaXRlRnJhbWUsIG51bGwsIChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzcHJfaW50cm9kdWNlICYmIHNwcl9pbnRyb2R1Y2UuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJfaW50cm9kdWNlLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6YCJ5oup5qGG55qE6aKc6ImyXHJcbiAgICAgICAgaWYgKG5vZGVfa3Vhbmdfc2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGxldCBzcHJfa3Vhbmdfc2VsZWN0ID0gbm9kZV9rdWFuZ19zZWxlY3QuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgIGlmIChzcHJfa3Vhbmdfc2VsZWN0ICYmIHNwcl9rdWFuZ19zZWxlY3QuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgaWYocmVkQXJyLmluY2x1ZGVzKHRoaXMuX2dldFNraWxsSUROYW1lKGlkKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcl9rdWFuZ19zZWxlY3Quc3ByaXRlRnJhbWUgPSBjYy5maW5kKFwiZnJhbU5vZGVcIiwgdGhpcy5fcGFuZWwpLmdldENvbXBvbmVudChcImZyYW1lTm9kZVwiKS5zZWxlY3RTcHJpdGVbMl07XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihibHVlQXJyLmluY2x1ZGVzKHRoaXMuX2dldFNraWxsSUROYW1lKGlkKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcl9rdWFuZ19zZWxlY3Quc3ByaXRlRnJhbWUgPSBjYy5maW5kKFwiZnJhbU5vZGVcIiwgdGhpcy5fcGFuZWwpLmdldENvbXBvbmVudChcImZyYW1lTm9kZVwiKS5zZWxlY3RTcHJpdGVbMF07XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZih5ZWxsb3dBcnIuaW5jbHVkZXModGhpcy5fZ2V0U2tpbGxJRE5hbWUoaWQpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByX2t1YW5nX3NlbGVjdC5zcHJpdGVGcmFtZSA9IGNjLmZpbmQoXCJmcmFtTm9kZVwiLCB0aGlzLl9wYW5lbCkuZ2V0Q29tcG9uZW50KFwiZnJhbWVOb2RlXCIpLnNlbGVjdFNwcml0ZVsxXTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGdyZWVuQXJyLmluY2x1ZGVzKHRoaXMuX2dldFNraWxsSUROYW1lKGlkKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcl9rdWFuZ19zZWxlY3Quc3ByaXRlRnJhbWUgPSBjYy5maW5kKFwiZnJhbU5vZGVcIiwgdGhpcy5fcGFuZWwpLmdldENvbXBvbmVudChcImZyYW1lTm9kZVwiKS5zZWxlY3RTcHJpdGVbNV07XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihwaW5rQXJyLmluY2x1ZGVzKHRoaXMuX2dldFNraWxsSUROYW1lKGlkKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcl9rdWFuZ19zZWxlY3Quc3ByaXRlRnJhbWUgPSBjYy5maW5kKFwiZnJhbU5vZGVcIiwgdGhpcy5fcGFuZWwpLmdldENvbXBvbmVudChcImZyYW1lTm9kZVwiKS5zZWxlY3RTcHJpdGVbM107XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihwdXJwbGVBcnIuaW5jbHVkZXModGhpcy5fZ2V0U2tpbGxJRE5hbWUoaWQpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByX2t1YW5nX3NlbGVjdC5zcHJpdGVGcmFtZSA9IGNjLmZpbmQoXCJmcmFtTm9kZVwiLCB0aGlzLl9wYW5lbCkuZ2V0Q29tcG9uZW50KFwiZnJhbWVOb2RlXCIpLnNlbGVjdFNwcml0ZVs0XTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKG1vcmVibHVlQXJyLmluY2x1ZGVzKHRoaXMuX2dldFNraWxsSUROYW1lKGlkKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcl9rdWFuZ19zZWxlY3Quc3ByaXRlRnJhbWUgPSBjYy5maW5kKFwiZnJhbU5vZGVcIiwgdGhpcy5fcGFuZWwpLmdldENvbXBvbmVudChcImZyYW1lTm9kZVwiKS5zZWxlY3RTcHJpdGVbNl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/moYbnmoTpopzoibJcclxuICAgICAgICBpZiAobm9kZV9rdWFuZ19jb21tb24pIHtcclxuICAgICAgICAgICAgbGV0IHNwcl9rdWFuZ19jb21tb24gPSBub2RlX2t1YW5nX2NvbW1vbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgaWYgKHNwcl9rdWFuZ19jb21tb24gJiYgc3ByX2t1YW5nX2NvbW1vbi5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZihyZWRBcnIuaW5jbHVkZXModGhpcy5fZ2V0U2tpbGxJRE5hbWUoaWQpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByX2t1YW5nX2NvbW1vbi5zcHJpdGVGcmFtZSA9IGNjLmZpbmQoXCJmcmFtTm9kZVwiLCB0aGlzLl9wYW5lbCkuZ2V0Q29tcG9uZW50KFwiZnJhbWVOb2RlXCIpLmNvbW1vblNwcml0ZVsyXTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGJsdWVBcnIuaW5jbHVkZXModGhpcy5fZ2V0U2tpbGxJRE5hbWUoaWQpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByX2t1YW5nX2NvbW1vbi5zcHJpdGVGcmFtZSA9IGNjLmZpbmQoXCJmcmFtTm9kZVwiLCB0aGlzLl9wYW5lbCkuZ2V0Q29tcG9uZW50KFwiZnJhbWVOb2RlXCIpLmNvbW1vblNwcml0ZVswXTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHllbGxvd0Fyci5pbmNsdWRlcyh0aGlzLl9nZXRTa2lsbElETmFtZShpZCkpKXtcclxuICAgICAgICAgICAgICAgICAgICBzcHJfa3VhbmdfY29tbW9uLnNwcml0ZUZyYW1lID0gY2MuZmluZChcImZyYW1Ob2RlXCIsIHRoaXMuX3BhbmVsKS5nZXRDb21wb25lbnQoXCJmcmFtZU5vZGVcIikuY29tbW9uU3ByaXRlWzFdO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZ3JlZW5BcnIuaW5jbHVkZXModGhpcy5fZ2V0U2tpbGxJRE5hbWUoaWQpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByX2t1YW5nX2NvbW1vbi5zcHJpdGVGcmFtZSA9IGNjLmZpbmQoXCJmcmFtTm9kZVwiLCB0aGlzLl9wYW5lbCkuZ2V0Q29tcG9uZW50KFwiZnJhbWVOb2RlXCIpLmNvbW1vblNwcml0ZVs1XTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHBpbmtBcnIuaW5jbHVkZXModGhpcy5fZ2V0U2tpbGxJRE5hbWUoaWQpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByX2t1YW5nX2NvbW1vbi5zcHJpdGVGcmFtZSA9IGNjLmZpbmQoXCJmcmFtTm9kZVwiLCB0aGlzLl9wYW5lbCkuZ2V0Q29tcG9uZW50KFwiZnJhbWVOb2RlXCIpLmNvbW1vblNwcml0ZVszXTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHB1cnBsZUFyci5pbmNsdWRlcyh0aGlzLl9nZXRTa2lsbElETmFtZShpZCkpKXtcclxuICAgICAgICAgICAgICAgICAgICBzcHJfa3VhbmdfY29tbW9uLnNwcml0ZUZyYW1lID0gY2MuZmluZChcImZyYW1Ob2RlXCIsIHRoaXMuX3BhbmVsKS5nZXRDb21wb25lbnQoXCJmcmFtZU5vZGVcIikuY29tbW9uU3ByaXRlWzRdO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYobW9yZWJsdWVBcnIuaW5jbHVkZXModGhpcy5fZ2V0U2tpbGxJRE5hbWUoaWQpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByX2t1YW5nX2NvbW1vbi5zcHJpdGVGcmFtZSA9IGNjLmZpbmQoXCJmcmFtTm9kZVwiLCB0aGlzLl9wYW5lbCkuZ2V0Q29tcG9uZW50KFwiZnJhbWVOb2RlXCIpLmNvbW1vblNwcml0ZVs2XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmioDog73liLfmlrAgKi9cclxuICAgIHByaXZhdGUgX3NraWxsX3JlZnJlc2goKSB7XHJcbiAgICAgICAgdGhpcy5fdWlTa2lsbElkQXJyLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgLy8g5LuO5oqA6IO95pWw57uE5Lit6I635Y+WNeS4quaKgOiDvVxyXG4gICAgICAgIGlmICh0aGlzLl9iZXR0ZXJBcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBNYXRoLm1pbig1IC0gdGhpcy5fdWlTa2lsbElkQXJyLmxlbmd0aCwgdGhpcy5fYmV0dGVyQXJyLmxlbmd0aCk7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuX2JldHRlckFyci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2JldHRlckFycltpbmRleF0gPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VpU2tpbGxJZEFyci5wdXNoKHRoaXMuX2JldHRlckFycltpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2JldHRlckFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9vdGhlckFyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IE1hdGgubWluKDUgLSB0aGlzLl91aVNraWxsSWRBcnIubGVuZ3RoLCB0aGlzLl9vdGhlckFyci5sZW5ndGgpOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLl9vdGhlckFyci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX290aGVyQXJyW2luZGV4XSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdWlTa2lsbElkQXJyLnB1c2godGhpcy5fb3RoZXJBcnJbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vdGhlckFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOaOkuW6j1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdWlTa2lsbElkQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIDPnuqfmioDog70o6Z2e6KeG6aKR5L2N572uKVxyXG4gICAgICAgICAgICBpZiAodXBncmFkZU1nci51cGdyYWRlU2tpbGxBcnJbdGhpcy5fdWlTa2lsbElkQXJyW2ldXSA9PSAyICYmICF0aGlzLl9sb2NrQXJyW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDkuI7op4bpopHkvY3nva7kuqTmjaJcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSB0aGlzLl91aVNraWxsSWRBcnIubGVuZ3RoIC0gMTsgaiA+IGk7IGotLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9sb2NrQXJyW2pdICYmIHVwZ3JhZGVNZ3IudXBncmFkZVNraWxsQXJyW3RoaXMuX3VpU2tpbGxJZEFycltqXV0gIT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDkuqTmjaJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3RoaXMuX3VpU2tpbGxJZEFycltpXSwgdGhpcy5fdWlTa2lsbElkQXJyW2pdXSA9IFt0aGlzLl91aVNraWxsSWRBcnJbal0sIHRoaXMuX3VpU2tpbGxJZEFycltpXV1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOaKgOiDvTAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICBpZiAodGhpcy5fdWlTa2lsbElkQXJyWzBdID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fc2tpbGwwLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IHRoaXMuX3VpU2tpbGxJZEFyclswXTtcclxuICAgICAgICAgICAgdGhpcy5fc2tpbGxfbG9hZCh0aGlzLl9za2lsbDAsIGlkKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc2tpbGwwLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmioDog70xIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgaWYgKHRoaXMuX3VpU2tpbGxJZEFyclsxXSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NraWxsMS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSB0aGlzLl91aVNraWxsSWRBcnJbMV07XHJcbiAgICAgICAgICAgIHRoaXMuX3NraWxsX2xvYWQodGhpcy5fc2tpbGwxLCBpZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc2tpbGwxLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmioDog70yIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgaWYgKHRoaXMuX3VpU2tpbGxJZEFyclsyXSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NraWxsMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSB0aGlzLl91aVNraWxsSWRBcnJbMl07XHJcbiAgICAgICAgICAgIHRoaXMuX3NraWxsX2xvYWQodGhpcy5fc2tpbGwyLCBpZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc2tpbGwyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmioDog70zIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgaWYgKHRoaXMuX3VpU2tpbGxJZEFyclszXSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NraWxsMy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSB0aGlzLl91aVNraWxsSWRBcnJbM107XHJcbiAgICAgICAgICAgIHRoaXMuX3NraWxsX2xvYWQodGhpcy5fc2tpbGwzLCBpZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc2tpbGwzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmioDog700IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgaWYgKHRoaXMuX3VpU2tpbGxJZEFycls0XSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NraWxsNC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSB0aGlzLl91aVNraWxsSWRBcnJbNF07XHJcbiAgICAgICAgICAgIHRoaXMuX3NraWxsX2xvYWQodGhpcy5fc2tpbGw0LCBpZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc2tpbGw0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6KeG6aKR5oyJ6ZKu6ZqQ6JePXHJcbiAgICAgICAgaWYgKHRoaXMuX290aGVyQXJyLmxlbmd0aCA9PSAwICYmIHRoaXMuX2J0blJlZnJlc2ggJiYgdGhpcy5fYnRuUmVmcmVzaC5hY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5fYnRuUmVmcmVzaC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVGcmFtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsOWkluWPkeWFiVxyXG4gICAgdXBkYXRlRnJhbWUoKSB7XHJcbiAgICAgICAgLy8g6YCJ5Lit5qGGXHJcbiAgICAgICAgdGhpcy5fc2tpbGwwLmNoaWxkcmVuWzBdLmFjdGl2ZSA9ICh0aGlzLl9jdXJJbmRleCA9PSAwKTtcclxuICAgICAgICB0aGlzLl9za2lsbDEuY2hpbGRyZW5bMF0uYWN0aXZlID0gKHRoaXMuX2N1ckluZGV4ID09IDEpO1xyXG4gICAgICAgIHRoaXMuX3NraWxsMi5jaGlsZHJlblswXS5hY3RpdmUgPSAodGhpcy5fY3VySW5kZXggPT0gMik7XHJcbiAgICAgICAgdGhpcy5fc2tpbGwzLmNoaWxkcmVuWzBdLmFjdGl2ZSA9ICh0aGlzLl9jdXJJbmRleCA9PSAzKTtcclxuICAgICAgICB0aGlzLl9za2lsbDQuY2hpbGRyZW5bMF0uYWN0aXZlID0gKHRoaXMuX2N1ckluZGV4ID09IDQpO1xyXG4gICAgICAgIC8vIOino+mUgeahhlxyXG4gICAgICAgIHRoaXMuX3NraWxsMC5jaGlsZHJlbls1XS5hY3RpdmUgPSB0aGlzLl9sb2NrQXJyWzBdICYmIHRoaXMuX2N1ckluZGV4ICE9IDA7XHJcbiAgICAgICAgdGhpcy5fc2tpbGwxLmNoaWxkcmVuWzVdLmFjdGl2ZSA9IHRoaXMuX2xvY2tBcnJbMV0gJiYgdGhpcy5fY3VySW5kZXggIT0gMTtcclxuICAgICAgICB0aGlzLl9za2lsbDIuY2hpbGRyZW5bNV0uYWN0aXZlID0gdGhpcy5fbG9ja0FyclsyXSAmJiB0aGlzLl9jdXJJbmRleCAhPSAyO1xyXG4gICAgICAgIHRoaXMuX3NraWxsMy5jaGlsZHJlbls1XS5hY3RpdmUgPSB0aGlzLl9sb2NrQXJyWzNdICYmIHRoaXMuX2N1ckluZGV4ICE9IDM7XHJcbiAgICAgICAgdGhpcy5fc2tpbGw0LmNoaWxkcmVuWzVdLmFjdGl2ZSA9IHRoaXMuX2xvY2tBcnJbNF0gJiYgdGhpcy5fY3VySW5kZXggIT0gNDtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Y2h54mM6YCJ5Lit54m55pWIICovXHJcbiAgICBjYXJkX2NsaWNrKGNhcmQ6IGNjLk5vZGUpIHtcclxuICAgICAgICBjYXJkLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XHJcbiAgICAgICAgY2MudHdlZW4oY2FyZClcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyB4OiAwLCB5OiAyMDAgfSwgeyBlYXNpbmc6IFwic2luZUluXCIgfSlcclxuICAgICAgICAgICAgLnRvKDEsIHsgc2NhbGU6IDIsIG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6IFwiZmFkZVwiIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDljaHniYzlm57mlLYgKi9cclxuICAgIGNhcmRfcmVjeWNsZShjYXJkOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IGJ0blVuTG9jayA9IGNhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJidG5VbkxvY2tcIilcclxuICAgICAgICBpZiAoYnRuVW5Mb2NrKSBidG5VbkxvY2suYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY2MudHdlZW4oY2FyZClcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiBcInNpbmVJblwiIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=