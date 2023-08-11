
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI/UIHomePage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b644snyrFBGKi85JS90G3O', 'UIHomePage');
// scripts/UI/UIHomePage.ts

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
var YZ_Constant_1 = require("../../common-plugin/Scripts/YZ_Constant");
var ani_1 = require("../Game/ani");
var PlatUtils_1 = require("../../common-plugin/Scripts/PlatUtils");
var FlyCoin_1 = require("../Framework/FlyCoin");
var gameDate_1 = require("../Game/gameDate");
var weapon_1 = require("../Game/weapon");
var Msg_1 = require("../Framework/Msg");
// @ts-ignore
var i18n = require('LanguageData');
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIHomePage = /** @class */ (function (_super) {
    __extends(UIHomePage, _super);
    function UIHomePage() {
        var _this = _super.call(this, Constant_1.PageName.UIHomePage) || this;
        _this._icon_set = null;
        _this._frame_set = null;
        _this._btnAudio = null;
        _this._btnShake = null;
        _this._btnSkin = null;
        _this._btnSkinAd = null;
        _this._btnWeapon = null;
        _this._btnWeaponAd = null;
        _this._playerAni = null;
        _this._aniUpgrade = null;
        _this._aniCaidai = null;
        _this._weaponScroll = null;
        _this._weaponList = [];
        _this._ani_arrow = null;
        _this._skinInfo_name = null;
        _this._skinInfo_xuedi = null;
        _this._skinInfo_value1 = null;
        _this._skinInfo_value2 = null;
        _this._skinInfo_change1 = null;
        _this._skinInfo_change2 = null;
        _this._skinInfo_level_pro = null;
        _this._weaponInfo_name = null;
        _this._weaponInfo_value0 = null;
        _this._weaponInfo_value1 = null;
        _this._weaponInfo_value2 = null;
        _this._weaponInfo_value3 = null;
        _this._weaponInfo_change0 = null;
        _this._weaponInfo_change1 = null;
        _this._weaponInfo_change2 = null;
        _this._weaponInfo_change3 = null;
        _this._weaponInfo_level_pro = null;
        _this._showSkinId = CocosZ_1.cocosz.dataMgr.CurSkinId;
        _this._showWeaponId = CocosZ_1.cocosz.dataMgr.CurRange;
        _this.isValid() && _this.onLoad();
        return _this;
    }
    UIHomePage.prototype.onLoad = function () {
        var _this = this;
        console.log("UIHOMEPAGE ONLOAD");
        if (CocosZ_1.cocosz.gameMode == 6) {
            Constant_1.default.isEndless = true;
        }
        if (CocosZ_1.cocosz.gameMode == 8) {
            Constant_1.default.isEndless = false;
        }
        // 按钮
        var btnNames = ["BtnSet", "BtnSet/frame_set/BtnAudio", "BtnSet/frame_set/BtnShake", "ditai/BtnLeft", "ditai/BtnRight", "BtnSkin", "BtnWeapon", "BtnSkinAd", "BtnWeaponAd", "BtnCJ", "BtnRanking", "BtnBack", "BtnSign", "BtnTime", "BtnGameStart", "BtnReturn"];
        btnNames.forEach(function (name) {
            var btn = cc.find(name, _this._page);
            if (btn) {
                btn.on(cc.Node.EventType.TOUCH_END, _this._onBtnClickHandler, _this);
                if (btn.name == "BtnSet") {
                    _this._icon_set = cc.find("Background/icon_set", btn);
                    _this._frame_set = cc.find("frame_set", btn);
                }
                else if (btn.name == "BtnAudio") {
                    _this._btnAudio = btn;
                    _this._updateAudioBtn(false);
                }
                else if (btn.name == "BtnShake") {
                    _this._btnShake = btn;
                    _this._updatShakeBtn();
                }
                else if (btn.name == "BtnSkin") {
                    _this._btnSkin = btn;
                }
                else if (btn.name == "BtnWeapon") {
                    _this._btnWeapon = btn;
                }
                else if (btn.name == "BtnSkinAd") {
                    _this._btnSkinAd = btn;
                    // btn.active = cocosz.isADON;
                }
                else if (btn.name == "BtnWeaponAd") {
                    _this._btnWeaponAd = btn;
                    // btn.active = cocosz.isADON;
                }
            }
        });
        // 角色动画
        this._playerAni = cc.find("ditai/skin_all/ani", this._page).getComponent(ani_1.default);
        // 彩带动画
        this._aniCaidai = cc.find("ditai/aniCaidai", this._page).getComponent(sp.Skeleton);
        this._aniCaidai.setCompleteListener(function () { _this._aniCaidai.node.active = false; });
        // 升级动画
        this._aniUpgrade = cc.find("ditai/aniUpgrade", this._page).getComponent(sp.Skeleton);
        this._aniUpgrade.setCompleteListener(function () { _this._aniUpgrade.node.active = false; });
        // 武器
        this._weaponScroll = cc.find("weaponScroll", this._page);
        var content = cc.find("view/content", this._weaponScroll);
        for (var i = 0; i < content.children.length; i++) {
            this._weaponList.push(content.children[i]);
            this._weaponList[i].on(cc.Node.EventType.TOUCH_END, function (e) {
                CocosZ_1.cocosz.audioMgr.playBtnEffect();
                var id = gameDate_1.default.Weapon[e.target.name].id;
                _this._showWeaponId = id;
                _this._updateWeapon();
                _this._updateWeaponFrame();
                var weaponInfo = CocosZ_1.cocosz.dataMgr.getGunInfo(id);
                if (weaponInfo && weaponInfo.State == 1) {
                    CocosZ_1.cocosz.dataMgr.curWeapon = id;
                }
            }, this);
        }
        var iconLayer = cc.find("view/iconLayer", this._weaponScroll);
        if (iconLayer)
            iconLayer.setParent(content);
        this._ani_arrow = cc.find("view/ani_arrow", this._weaponScroll);
        if (this._ani_arrow)
            this._ani_arrow.setParent(content);
        // 属性
        this._skinInfo_name = cc.find("ditai/skinName", this._page).getComponent(cc.Sprite);
        this._skinInfo_xuedi = cc.find("jueseshuxing/xuedi", this._page);
        this._skinInfo_value1 = cc.find("jueseshuxing/value1", this._page).getComponent(cc.Label);
        this._skinInfo_value2 = cc.find("jueseshuxing/value2", this._page).getComponent(cc.Label);
        this._skinInfo_change1 = cc.find("jueseshuxing/change1", this._page).getComponent(cc.Label);
        this._skinInfo_change2 = cc.find("jueseshuxing/change2", this._page).getComponent(cc.Label);
        this._skinInfo_level_pro = cc.find("jueseshuxing/levelProgressBar", this._page).getComponent(cc.ProgressBar);
        this._weaponInfo_name = cc.find("wuqishuxing/weaponName", this._page).getComponent(cc.Sprite);
        this._weaponInfo_value0 = cc.find("wuqishuxing/value0", this._page).getComponent(cc.Label);
        this._weaponInfo_value1 = cc.find("wuqishuxing/value1", this._page).getComponent(cc.Label);
        this._weaponInfo_value2 = cc.find("wuqishuxing/value2", this._page).getComponent(cc.Label);
        this._weaponInfo_value3 = cc.find("wuqishuxing/value3", this._page).getComponent(cc.Label);
        this._weaponInfo_change0 = cc.find("wuqishuxing/change0", this._page).getComponent(cc.Label);
        this._weaponInfo_change1 = cc.find("wuqishuxing/change1", this._page).getComponent(cc.Label);
        this._weaponInfo_change2 = cc.find("wuqishuxing/change2", this._page).getComponent(cc.Label);
        this._weaponInfo_change3 = cc.find("wuqishuxing/change3", this._page).getComponent(cc.Label);
        this._weaponInfo_level_pro = cc.find("wuqishuxing/levelProgressBar", this._page).getComponent(cc.ProgressBar);
        var coinLabel = cc.find("CoinLabel", this._page);
        var jstxt_rank = cc.find("jueseshuxing/txt_rank", this._page);
        var jslevelProgressBar = cc.find("jueseshuxing/levelProgressBar", this._page);
        var wptxt_rank = cc.find("wuqishuxing/txt_rank", this._page);
        var wplevelProgressBar = cc.find("wuqishuxing/levelProgressBar", this._page);
        var tiliNode = cc.find("CoinLabel3", this._page);
        if (Constant_1.default.isEndless) { //判断是否为无尽模式
            coinLabel.active = false;
            jstxt_rank.active = false;
            jslevelProgressBar.active = false;
            wptxt_rank.active = false;
            wplevelProgressBar.active = false;
            tiliNode.active = true;
        }
        else {
            coinLabel.active = true;
            jstxt_rank.active = true;
            jslevelProgressBar.active = true;
            wptxt_rank.active = true;
            wplevelProgressBar.active = true;
            tiliNode.active = false;
        }
        if (Constant_1.default.isEndless) {
            var lastPhycicalTime = CocosZ_1.cocosz.dataMgr.LastPhycicalTime;
            if (new Date().toDateString() != lastPhycicalTime) {
                CocosZ_1.cocosz.dataMgr.PhysicalCount = 5;
            }
        }
    };
    UIHomePage.prototype._canGetBonus = function () {
        return (new Date().toDateString() != CocosZ_1.cocosz.dataMgr.LastDailyBonusTime);
    };
    UIHomePage.prototype._aniEffect = function (type) {
        switch (type) {
            case 1: {
                if (this._aniUpgrade) {
                    this._aniUpgrade.node.active = true;
                    this._aniUpgrade.setAnimation(0, "animation", false);
                    CocosZ_1.cocosz.audioMgr.playEffect("ui_upgrade");
                }
                break;
            }
            case 2: {
                if (this._aniCaidai) {
                    this._aniCaidai.node.active = true;
                    this._aniCaidai.setAnimation(0, "animation", false);
                    CocosZ_1.cocosz.audioMgr.playEffect("ui_caidai");
                }
                break;
            }
        }
    };
    UIHomePage.prototype.onOpen = function () {
        var _this = this;
        cc.log("home open !");
        // 上报游戏首页
        Utils_1.utils.umaEvent("gamehome");
        Utils_1.utils.SendEvent("页面-首页");
        this._updatePlayer();
        this._updateWeapon();
        this._updateWeaponFrame();
        // 广告
        Utils_1.utils.showYzRealNameAuthPanel();
        Utils_1.utils.showPrivacyPanel({ group: "default", parent: this._page });
        Utils_1.utils.registerServerInitEvent(function () {
            // 验证服务器配置为自动弹签到，并且当前可以签到
            if (Utils_1.utils.checkAutoSign() && _this._canGetBonus()) {
                CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UISignPanel);
            }
            _this.showAd();
        }, this);
        cc.game.on(Constant_1.default.E_GAME_LOGIC, this._onGameMessageHandler, this);
    };
    UIHomePage.prototype.onClose = function () {
        cc.game.targetOff(this);
        Utils_1.utils.hideVivoGamePortalWidget();
        Utils_1.utils.hideOppoGameDrawerAdWidget();
        Utils_1.utils.adManager.hideBlockAd();
        Utils_1.utils.adManager.hideNativeTryGameWidget();
        Utils_1.utils.adManager.HideSingleNativeAd();
        if (PlatUtils_1.default.IsWechat) {
            Utils_1.utils.adManager.hideCustomAd({ location: 1 });
            Utils_1.utils.adManager.hideCustomAd({ location: 2 });
        }
        else if (PlatUtils_1.default.IsVIVO) {
            Utils_1.utils.adManager.hideCustomAd({ location: YZ_Constant_1.BannerLocation.Home });
        }
    };
    UIHomePage.prototype.showAd = function () {
        if (CocosZ_1.cocosz.isShowAd) {
            if (PlatUtils_1.default.IsWechat) {
                Utils_1.utils.adManager.HideBanner(YZ_Constant_1.BannerLocation.Home);
            }
            else {
                Utils_1.utils.adManager.ShowBanner(YZ_Constant_1.BannerLocation.Home, { width: 0.1, bottom: 1 });
            }
            // 原生广告
            if (PlatUtils_1.default.IsWechat) {
                Utils_1.utils.adManager.showCustomAd({ location: 1 });
                Utils_1.utils.adManager.showCustomAd({ location: 2 });
            }
            else if (PlatUtils_1.default.IsVIVO) {
                Utils_1.utils.adManager.showCustomAd({ location: YZ_Constant_1.BannerLocation.Home });
            }
            Utils_1.utils.adManager.showNativeTryGameWidget({ right: 50, top: 800, scale: 1, parent: this._page });
            Utils_1.utils.adManager.ShowSingleNativeAd({});
            Utils_1.utils.adManager.showBlockAd({ right: 50, top: 500, showNum: 1 });
            Utils_1.utils.showMoreGamesWidget({ group: 'default', scale: 1, bottom: 300, left: 50, parent: this._page, location: YZ_Constant_1.BannerLocation.Home });
            Utils_1.utils.showTryGamesWidget({ group: 'default', scale: 1, bottom: 350, right: 50, parent: this._page, location: YZ_Constant_1.BannerLocation.Home });
            Utils_1.utils.showVivoGamePortalWidget({ top: 500, location: YZ_Constant_1.BannerLocation.Home });
            Utils_1.utils.showOppoGameDrawerAdWidget({ top: 500, location: YZ_Constant_1.BannerLocation.Home });
            Utils_1.utils.showCreateShortcutWidget(null, { group: 'default', scale: 1, left: 0, top: 500, parent: this._page });
            Utils_1.utils.showPrivacyWidget({ group: "default", top: 0, left: 0, parent: this._page.getChildByName("PrivacyWidget"), color: cc.Color.BLACK });
        }
    };
    UIHomePage.prototype._onGameMessageHandler = function (event) {
        switch (event.type) {
            case Constant_1.default.E_Fly_Coin: {
                this._flyCoins(event.iconName, event.frameNodeName);
                break;
            }
            case Constant_1.default.E_CJ_SKIN: {
                this._showSkinId = CocosZ_1.cocosz.dataMgr.CurSkinId;
                this._updatePlayer();
                break;
            }
            case Constant_1.default.E_CJ_Weapon: {
                this._showWeaponId = CocosZ_1.cocosz.dataMgr.curWeapon;
                this._updateWeapon();
                this._updateWeaponFrame();
                break;
            }
        }
    };
    UIHomePage.prototype._onBtnClickHandler = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var tiliNode, meshNode_1, copytili, fromPos, destPos, bezier1, bezier2, meshNode, skinInfo, skinInfo, showSkinInfo, showSKinKey, showWeaponInfo, showWeaponKey, t;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, CocosZ_1.cocosz.audioMgr.playBtnEffect().catch()];
                    case 1:
                        _a.sent();
                        switch (event.target.name) {
                            case "BtnGameStart": {
                                console.log('click BtnGameStart');
                                if (Constant_1.default.isEndless) {
                                    if (CocosZ_1.cocosz.dataMgr.PhysicalCount > 0) {
                                        CocosZ_1.cocosz.dataMgr.PhysicalCount -= 1;
                                        CocosZ_1.cocosz.dataMgr.LastPhycicalTime = new Date().toDateString();
                                        tiliNode = cc.find("CoinLabel3", this._page).getChildByName('icon_jinbi');
                                        meshNode_1 = cc.find("mesh", this._page);
                                        meshNode_1.active = true;
                                        copytili = cc.instantiate(tiliNode);
                                        copytili.parent = this._page;
                                        fromPos = this._page.convertToNodeSpaceAR(tiliNode.convertToWorldSpaceAR(cc.Vec2.ZERO));
                                        copytili.setPosition(fromPos);
                                        destPos = new cc.Vec2(event.target.getPosition().x, event.target.getPosition().y);
                                        bezier1 = new cc.Vec2(copytili.position.x + 350, copytili.position.y + 100);
                                        bezier2 = new cc.Vec2(copytili.position.x + 550, copytili.position.y + 50);
                                        cc.tween(copytili)
                                            .bezierTo(0.98, bezier1, bezier2, destPos)
                                            .call(function () {
                                            // cocosz.gameMode = 6;
                                            CocosZ_1.cocosz.gameMgr.gameStart(CocosZ_1.cocosz.getLevelId());
                                            meshNode_1.active = true;
                                        })
                                            .start();
                                    }
                                    else {
                                        Msg_1.default.Show(i18n.t("当前体力不足")); //恭喜获得新角色
                                    }
                                }
                                else {
                                    meshNode = cc.find("mesh", this._page);
                                    meshNode.active = true;
                                    CocosZ_1.cocosz.gameMgr.gameStart(CocosZ_1.cocosz.getLevelId());
                                    meshNode.active = true;
                                }
                                break;
                            }
                            case "BtnLeft": {
                                this._showSkinId--;
                                if (this._showSkinId < 0)
                                    this._showSkinId = 11;
                                this._updatePlayer();
                                skinInfo = CocosZ_1.cocosz.dataMgr.getSkinInfo(this._showSkinId);
                                if (skinInfo && skinInfo.State == 1) {
                                    CocosZ_1.cocosz.dataMgr.CurSkinId = this._showSkinId;
                                }
                                break;
                            }
                            case "BtnRight": {
                                this._showSkinId++;
                                if (this._showSkinId > 11)
                                    this._showSkinId = 0;
                                this._updatePlayer();
                                skinInfo = CocosZ_1.cocosz.dataMgr.getSkinInfo(this._showSkinId);
                                if (skinInfo && skinInfo.State == 1) {
                                    CocosZ_1.cocosz.dataMgr.CurSkinId = this._showSkinId;
                                }
                                break;
                            }
                            case "BtnSkin": {
                                showSkinInfo = CocosZ_1.cocosz.dataMgr.getSkinInfo(this._showSkinId);
                                showSKinKey = "" + (this._showSkinId + 1);
                                console.log(showSkinInfo);
                                if (showSkinInfo.State == 0) {
                                    // 金币
                                    if (gameDate_1.default.SkinMess[showSKinKey].priceType == gameDate_1.PriceType.Gold) {
                                        if (CocosZ_1.cocosz.dataMgr.CoinCount >= gameDate_1.default.SkinMess[showSKinKey].price) {
                                            CocosZ_1.cocosz.dataMgr.CoinCount -= gameDate_1.default.SkinMess[showSKinKey].price;
                                            Msg_1.default.Show(i18n.t("msg.gxhdxjs")); //恭喜获得新角色
                                            CocosZ_1.cocosz.dataMgr.CurSkinId = this._showSkinId;
                                            this._updatePlayer();
                                            this._aniEffect(2);
                                        }
                                        else {
                                            this.showCoinPanel(false);
                                        }
                                    }
                                    // 钻石
                                    else if (gameDate_1.default.SkinMess[showSKinKey].priceType == gameDate_1.PriceType.Diamond) {
                                        if (CocosZ_1.cocosz.dataMgr.DiamondCount >= gameDate_1.default.SkinMess[showSKinKey].price) {
                                            CocosZ_1.cocosz.dataMgr.DiamondCount -= gameDate_1.default.SkinMess[showSKinKey].price;
                                            Msg_1.default.Show(i18n.t("msg.gxhdxjs")); //恭喜获得新角色
                                            CocosZ_1.cocosz.dataMgr.CurSkinId = this._showSkinId;
                                            this._updatePlayer();
                                            this._aniEffect(2);
                                        }
                                        else {
                                            this.showCoinPanel(true);
                                        }
                                    }
                                    // 转盘奖励
                                    else if (gameDate_1.default.SkinMess[showSKinKey].priceType == gameDate_1.PriceType.ZhuanPanReward) {
                                        CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UITurntablePanel);
                                    }
                                }
                                else {
                                    if (!Constant_1.default.isEndless) {
                                        // 升级
                                        if (showSkinInfo.Level < 6) {
                                            if (CocosZ_1.cocosz.dataMgr.CoinCount >= Constant_1.default.skinLevelPriceArr[showSkinInfo.Level]) {
                                                CocosZ_1.cocosz.dataMgr.CoinCount -= Constant_1.default.skinLevelPriceArr[showSkinInfo.Level];
                                                showSkinInfo.Level++;
                                                CocosZ_1.cocosz.dataMgr.setSkinInfo(showSkinInfo.Id, showSkinInfo);
                                                this._updatePlayer();
                                                this._aniEffect(1);
                                            }
                                            else {
                                                this.showCoinPanel(false);
                                            }
                                        }
                                    }
                                }
                                break;
                            }
                            case "BtnWeapon": {
                                showWeaponInfo = CocosZ_1.cocosz.dataMgr.getGunInfo(this._showWeaponId);
                                showWeaponKey = weapon_1.default.WeaponName[this._showWeaponId];
                                if (showWeaponInfo.State == 0) {
                                    // 金币
                                    if (gameDate_1.default.Weapon[showWeaponKey].priceType == gameDate_1.PriceType.Gold) {
                                        if (CocosZ_1.cocosz.dataMgr.CoinCount >= gameDate_1.default.Weapon[showWeaponKey].price) {
                                            CocosZ_1.cocosz.dataMgr.CoinCount -= gameDate_1.default.Weapon[showWeaponKey].price;
                                            Msg_1.default.Show(i18n.t("msg.gxhdxwq"));
                                            CocosZ_1.cocosz.dataMgr.curWeapon = this._showWeaponId;
                                            this._updateWeapon();
                                            this._updateWeaponFrame();
                                            this._aniEffect(2);
                                        }
                                        else {
                                            this.showCoinPanel(false);
                                        }
                                    }
                                    // 钻石
                                    else if (gameDate_1.default.Weapon[showWeaponKey].priceType == gameDate_1.PriceType.Diamond) {
                                        if (CocosZ_1.cocosz.dataMgr.DiamondCount >= gameDate_1.default.Weapon[showWeaponKey].price) {
                                            CocosZ_1.cocosz.dataMgr.DiamondCount -= gameDate_1.default.Weapon[showWeaponKey].price;
                                            Msg_1.default.Show(i18n.t("msg.gxhdxwq"));
                                            CocosZ_1.cocosz.dataMgr.curWeapon = this._showWeaponId;
                                            this._updateWeapon();
                                            this._updateWeaponFrame();
                                            this._aniEffect(2);
                                        }
                                        else {
                                            this.showCoinPanel(true);
                                        }
                                    }
                                    // 转盘奖励
                                    else if (gameDate_1.default.Weapon[showWeaponKey].priceType == gameDate_1.PriceType.ZhuanPanReward) {
                                        CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UITurntablePanel);
                                    }
                                }
                                else {
                                    if (!Constant_1.default.isEndless) {
                                        // 升级
                                        if (showWeaponInfo.Level < 3) {
                                            if (CocosZ_1.cocosz.dataMgr.CoinCount >= Constant_1.default.weaponLevelPriceArr[showWeaponInfo.Level]) {
                                                CocosZ_1.cocosz.dataMgr.CoinCount -= Constant_1.default.weaponLevelPriceArr[showWeaponInfo.Level];
                                                showWeaponInfo.Level++;
                                                CocosZ_1.cocosz.dataMgr.setGunInfo(showWeaponInfo.Id, showWeaponInfo);
                                                this._updateWeapon();
                                                this._updateWeaponFrame();
                                                this._aniEffect(1);
                                            }
                                            else {
                                                this.showCoinPanel(false);
                                            }
                                        }
                                    }
                                }
                                break;
                            }
                            case "BtnSkinAd": {
                                Utils_1.utils.SendEvent("视频-皮肤解锁-播放");
                                CocosZ_1.cocosz.watchAD(function () {
                                    // 视频成功 
                                    Utils_1.utils.SendEvent("视频-皮肤解锁-成功");
                                    var showSkinInfo = CocosZ_1.cocosz.dataMgr.getSkinInfo(_this._showSkinId);
                                    var showSkinKey = "" + (_this._showSkinId + 1);
                                    if (!!showSkinInfo && !!gameDate_1.default.SkinMess[showSkinKey] && !!gameDate_1.default.SkinMess[showSkinKey].videoCount) {
                                        showSkinInfo.VideoCount++;
                                        CocosZ_1.cocosz.dataMgr.setSkinInfo(_this._showSkinId, showSkinInfo);
                                        if (showSkinInfo.VideoCount >= gameDate_1.default.SkinMess[showSkinKey].videoCount) {
                                            Msg_1.default.Show(i18n.t("msg.gxhdxjs")); //恭喜获得新角色
                                            CocosZ_1.cocosz.dataMgr.CurSkinId = _this._showSkinId;
                                            _this._aniEffect(2);
                                        }
                                        else {
                                            Msg_1.default.Show(i18n.t("msg.jswc") + showSkinInfo.VideoCount + "/" + gameDate_1.default.SkinMess[showSkinKey].videoCount);
                                        }
                                        // 更新玩家信息
                                        _this._updatePlayer();
                                    }
                                }, function () {
                                    // 视频失败
                                    Utils_1.utils.SendEvent("视频-皮肤解锁-失败");
                                });
                                break;
                            }
                            case "BtnWeaponAd": {
                                Utils_1.utils.SendEvent("视频-武器解锁-播放");
                                CocosZ_1.cocosz.watchAD(function () {
                                    // 视频成功 
                                    Utils_1.utils.SendEvent("视频-武器解锁-成功");
                                    var showWeaponInfo = CocosZ_1.cocosz.dataMgr.getGunInfo(_this._showWeaponId);
                                    var showWeaponKey = weapon_1.default.WeaponName[_this._showWeaponId];
                                    if (!!showWeaponInfo && !!gameDate_1.default.Weapon[showWeaponKey] && !!gameDate_1.default.Weapon[showWeaponKey].videoCount) {
                                        showWeaponInfo.VideoCount++;
                                        CocosZ_1.cocosz.dataMgr.setGunInfo(_this._showWeaponId, showWeaponInfo);
                                        if (showWeaponInfo.VideoCount >= gameDate_1.default.Weapon[showWeaponKey].videoCount) {
                                            Msg_1.default.Show(i18n.t("msg.gxhdxwq"));
                                            CocosZ_1.cocosz.dataMgr.curWeapon = _this._showWeaponId;
                                            _this._aniEffect(2);
                                        }
                                        else {
                                            Msg_1.default.Show(i18n.t("msg.jswc") + showWeaponInfo.VideoCount + "/" + gameDate_1.default.Weapon[showWeaponKey].videoCount);
                                        }
                                        // 更新武器信息
                                        _this._updateWeapon();
                                        _this._updateWeaponFrame();
                                    }
                                }, function () {
                                    // 视频失败
                                    Utils_1.utils.SendEvent("视频-武器解锁-失败");
                                });
                                break;
                            }
                            case "BtnCJ": {
                                CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UITurntablePanel);
                                break;
                            }
                            case "BtnSign": {
                                CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UISignPanel);
                                break;
                            }
                            //新增排行榜入口
                            case "BtnRanking": {
                                CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UIRankingPanel);
                                break;
                            }
                            case "BtnBack": {
                                CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UIBackPanel);
                                break;
                            }
                            case "BtnTime": {
                                CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UITimePanel);
                                break;
                            }
                            case "BtnSet": {
                                this._icon_set.stopAllActions();
                                this._frame_set.stopAllActions();
                                t = (this._frame_set.scaleY ? this._frame_set.scaleY : 1) / 2;
                                cc.tween(this._icon_set)
                                    .to(t, { angle: (this._frame_set.scaleY ? 90 : -90) }, { easing: "sineInOut" })
                                    .start();
                                cc.tween(this._frame_set)
                                    .to(t, { scaleY: this._frame_set.scaleY ? 0 : 1 }, { easing: "sineInOut" })
                                    .start();
                                break;
                            }
                            case "BtnAudio": {
                                CocosZ_1.cocosz.dataMgr.AudioOn = !CocosZ_1.cocosz.dataMgr.AudioOn;
                                this._updateAudioBtn();
                                break;
                            }
                            case "BtnShake": {
                                CocosZ_1.cocosz.dataMgr.ShakeOn = !CocosZ_1.cocosz.dataMgr.ShakeOn;
                                this._updatShakeBtn();
                                break;
                            }
                            case "BtnReturn": {
                                CocosZ_1.cocosz.sceneMgr.loadScene("GameStart", function () {
                                    // cocosz.uiMgr.openPage(PageName.UIGamePage);
                                });
                                break;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UIHomePage.prototype._updatePlayer = function () {
        var _this = this;
        cc.log("showSkinID: ", this._showSkinId);
        this._playerAni.setSkinById(this._showSkinId);
        // 属性
        // 角色名字
        this._skinInfo_name.spriteFrame = CocosZ_1.cocosz.resMgr.getRes("p_" + (this._showSkinId + 1), cc.SpriteFrame);
        // 角色属性
        var curSkinInfo = CocosZ_1.cocosz.dataMgr.getSkinInfo(CocosZ_1.cocosz.dataMgr.CurSkinId);
        var showSkinInfo = CocosZ_1.cocosz.dataMgr.getSkinInfo(this._showSkinId);
        var curLevel = curSkinInfo.Level;
        var showLevel = showSkinInfo.Level;
        var curSkinKey = "" + (CocosZ_1.cocosz.dataMgr.CurSkinId + 1);
        var showSKinKey = "" + (this._showSkinId + 1);
        // 血滴
        this._skinInfo_xuedi.children.forEach(function (v, i) {
            if (i < gameDate_1.default.SkinMess[showSKinKey].xuedi) {
                _this._skinInfo_xuedi.children[i].opacity = 255;
            }
            else {
                _this._skinInfo_xuedi.children[i].opacity = 0;
            }
        });
        // 攻击力
        this._skinInfo_value1.string = "" + gameDate_1.default.SkinMess[showSKinKey].atk[showLevel];
        // 移动
        this._skinInfo_value2.string = "" + gameDate_1.default.SkinMess[showSKinKey].speed[showLevel];
        // 攻击变化
        var num1 = gameDate_1.default.SkinMess[showSKinKey].atk[showLevel] - gameDate_1.default.SkinMess[curSkinKey].atk[curLevel];
        if (num1 < 0) {
            this._skinInfo_change1.string = "" + num1;
            this._skinInfo_change1.node.children[0].active = false;
            this._skinInfo_change1.node.children[1].active = true;
            this._skinInfo_change1.node.color = cc.Color.RED;
            this._skinInfo_change1.node.opacity = 255;
        }
        else if (num1 == 0) {
            this._skinInfo_change1.node.opacity = 0;
        }
        else {
            this._skinInfo_change1.string = "+" + num1;
            this._skinInfo_change1.node.children[0].active = true;
            this._skinInfo_change1.node.children[1].active = false;
            this._skinInfo_change1.node.color = cc.Color.GREEN;
            this._skinInfo_change1.node.opacity = 255;
        }
        // 移动变化 
        var num2 = gameDate_1.default.SkinMess[showSKinKey].speed[showLevel] - gameDate_1.default.SkinMess[curSkinKey].speed[curLevel];
        if (num2 < 0) {
            this._skinInfo_change2.string = "" + num2;
            this._skinInfo_change2.node.children[0].active = false;
            this._skinInfo_change2.node.children[1].active = true;
            this._skinInfo_change2.node.color = cc.Color.RED;
            this._skinInfo_change2.node.opacity = 255;
        }
        else if (num2 == 0) {
            this._skinInfo_change2.node.opacity = 0;
        }
        else {
            this._skinInfo_change2.string = "+" + num2;
            this._skinInfo_change2.node.children[0].active = true;
            this._skinInfo_change2.node.children[1].active = false;
            this._skinInfo_change2.node.color = cc.Color.GREEN;
            this._skinInfo_change2.node.opacity = 255;
        }
        // 等级
        this._skinInfo_level_pro.progress = showLevel / 6;
        // 按钮变化
        if (showSkinInfo) {
            this._btnSkin.children.forEach(function (v) { return v.active = false; });
            var btn_huang = this._btnSkin.getChildByName("btn_huang");
            var btn_huang_small = this._btnSkin.getChildByName("btn_huang_small");
            var btn_hong = this._btnSkin.getChildByName("btn_hong");
            var txt_buy = this._btnSkin.getChildByName("txt_buy");
            var txt_sjwc = this._btnSkin.getChildByName("txt_sjwc");
            var txt_upgrade = this._btnSkin.getChildByName("txt_upgrade");
            var txt_zpjl = this._btnSkin.getChildByName("txt_zpjl");
            var icon_jinbi = this._btnSkin.getChildByName("icon_jinbi");
            var icon_zuanshi = this._btnSkin.getChildByName("icon_zuanshi");
            var price = this._btnSkin.getChildByName("price");
            if (Constant_1.default.isEndless && gameDate_1.default.SkinMess[showSKinKey].priceType == gameDate_1.PriceType.Gold) {
                gameDate_1.default.SkinMess[showSKinKey].priceType = gameDate_1.PriceType.Diamond;
            }
            // 购买
            if (showSkinInfo.State == 0) {
                if (gameDate_1.default.SkinMess[showSKinKey] && gameDate_1.default.SkinMess[showSKinKey].videoCount) {
                    this._btnSkin.x = -350;
                    this._btnSkin.width = 169;
                    if (btn_huang_small)
                        btn_huang_small.active = true;
                    // 金币
                    if (gameDate_1.default.SkinMess[showSKinKey].priceType == gameDate_1.PriceType.Gold) {
                        if (icon_jinbi) {
                            icon_jinbi.active = true;
                            icon_jinbi.x = -50;
                        }
                        if (price) {
                            price.active = true;
                            price.x = -10;
                            price.getComponent(cc.Label).string = '' + gameDate_1.default.SkinMess[showSKinKey].price;
                        }
                    }
                    // 钻石
                    else if (gameDate_1.default.SkinMess[showSKinKey].priceType == gameDate_1.PriceType.Diamond) {
                        if (icon_zuanshi) {
                            icon_zuanshi.active = true;
                            icon_zuanshi.x = -50;
                        }
                        if (price) {
                            price.active = true;
                            price.x = -10;
                            price.getComponent(cc.Label).string = '' + gameDate_1.default.SkinMess[showSKinKey].price;
                        }
                    }
                    // 转盘奖励
                    else if (gameDate_1.default.SkinMess[showSKinKey].priceType == gameDate_1.PriceType.ZhuanPanReward) {
                        if (txt_zpjl)
                            txt_zpjl.active = true;
                    }
                    // 视频解锁
                    // this._btnSkinAd.active = true;
                    var videoCount = this._btnSkinAd.getChildByName("videoCount");
                    if (videoCount)
                        videoCount.getComponent(cc.Label).string = showSkinInfo.VideoCount + "/" + gameDate_1.default.SkinMess[showSKinKey].videoCount;
                }
                else {
                    // this._btnSkinAd.active = false;
                    this._btnSkin.x = -250;
                    this._btnSkin.width = 252;
                    if (btn_huang)
                        btn_huang.active = true;
                    // 金币
                    if (gameDate_1.default.SkinMess[showSKinKey].priceType == gameDate_1.PriceType.Gold) {
                        if (txt_buy)
                            txt_buy.active = true;
                        if (icon_jinbi) {
                            icon_jinbi.active = true;
                            icon_jinbi.x = 0;
                        }
                        if (price) {
                            price.active = true;
                            price.x = 30;
                            price.getComponent(cc.Label).string = '' + gameDate_1.default.SkinMess[showSKinKey].price;
                        }
                    }
                    // 钻石
                    else if (gameDate_1.default.SkinMess[showSKinKey].priceType == gameDate_1.PriceType.Diamond) {
                        if (txt_buy)
                            txt_buy.active = true;
                        if (icon_zuanshi) {
                            icon_zuanshi.active = true;
                            icon_zuanshi.x = 0;
                        }
                        if (price) {
                            price.active = true;
                            price.x = 30;
                            price.getComponent(cc.Label).string = '' + gameDate_1.default.SkinMess[showSKinKey].price;
                        }
                    }
                    // 转盘奖励
                    else if (gameDate_1.default.SkinMess[showSKinKey].priceType == gameDate_1.PriceType.ZhuanPanReward) {
                        if (txt_zpjl)
                            txt_zpjl.active = true;
                    }
                }
            }
            else {
                if (Constant_1.default.isEndless) { //判断是否为无尽模式
                    if (btn_huang)
                        btn_huang.active = false;
                }
                else {
                    //升级
                    if (showSkinInfo.Level < 6) {
                        // this._btnSkinAd.active = false;
                        this._btnSkin.x = -250;
                        this._btnSkin.width = 252;
                        if (btn_hong)
                            btn_hong.active = true;
                        if (txt_upgrade)
                            txt_upgrade.active = true;
                        if (icon_jinbi) {
                            icon_jinbi.active = true;
                            icon_jinbi.x = 0;
                        }
                        if (price) {
                            price.active = true;
                            price.x = 30;
                            price.getComponent(cc.Label).string = '' + Constant_1.default.skinLevelPriceArr[showSkinInfo.Level];
                        }
                    }
                    //最大等级
                    else {
                        // this._btnSkinAd.active = false;
                        this._btnSkin.x = -250;
                        this._btnSkin.width = 252;
                        if (txt_sjwc)
                            txt_sjwc.active = true;
                    }
                }
            }
        }
    };
    UIHomePage.prototype._updateWeapon = function () {
        cc.log("showWeaponID: ", this._showWeaponId);
        this._playerAni.setWeaponById(this._showWeaponId);
        // 武器名字
        this._weaponInfo_name.spriteFrame = CocosZ_1.cocosz.resMgr.getRes("w_" + (this._showWeaponId + 1), cc.SpriteFrame);
        // 武器属性
        var curWeaponInfo = CocosZ_1.cocosz.dataMgr.getGunInfo(CocosZ_1.cocosz.dataMgr.CurRange);
        var showWeaponInfo = CocosZ_1.cocosz.dataMgr.getGunInfo(this._showWeaponId);
        var curLevel = curWeaponInfo.Level;
        var showLevel = showWeaponInfo.Level;
        var curWeaponKey = weapon_1.default.WeaponName[CocosZ_1.cocosz.dataMgr.CurRange];
        var showWeaponKey = weapon_1.default.WeaponName[this._showWeaponId];
        // 攻击力
        this._weaponInfo_value0.string = "" + gameDate_1.default.Weapon[showWeaponKey].atk[showLevel];
        // 攻击频率
        this._weaponInfo_value1.string = (1 / gameDate_1.default.Weapon[showWeaponKey].atkSpeed[showLevel]).toFixed(1);
        // 攻击范围
        this._weaponInfo_value2.string = "" + gameDate_1.default.Weapon[showWeaponKey].atkRange;
        // 弹药量
        this._weaponInfo_value3.string = "" + gameDate_1.default.Weapon[showWeaponKey].bulletTotal[showLevel];
        // 变化
        var num0 = gameDate_1.default.Weapon[showWeaponKey].atk[showLevel] - gameDate_1.default.Weapon[curWeaponKey].atk[curLevel];
        var num1 = 1 / gameDate_1.default.Weapon[showWeaponKey].atkSpeed[showLevel] - 1 / gameDate_1.default.Weapon[curWeaponKey].atkSpeed[curLevel];
        var num2 = gameDate_1.default.Weapon[showWeaponKey].atkRange - gameDate_1.default.Weapon[curWeaponKey].atkRange;
        var num3 = gameDate_1.default.Weapon[showWeaponKey].bulletTotal[showLevel] - gameDate_1.default.Weapon[curWeaponKey].bulletTotal[curLevel];
        // 攻击力变化
        if (num0 < 0) {
            this._weaponInfo_change0.string = "" + num0;
            this._weaponInfo_change0.node.children[0].active = false;
            this._weaponInfo_change0.node.children[1].active = true;
            this._weaponInfo_change0.node.color = cc.Color.RED;
            this._weaponInfo_change0.node.opacity = 255;
        }
        else if (num0 == 0) {
            this._weaponInfo_change0.node.opacity = 0;
        }
        else {
            this._weaponInfo_change0.string = "+" + num0;
            this._weaponInfo_change0.node.children[0].active = true;
            this._weaponInfo_change0.node.children[1].active = false;
            this._weaponInfo_change0.node.color = cc.Color.GREEN;
            this._weaponInfo_change0.node.opacity = 255;
        }
        // 攻击频率变化
        if (num1 < 0) {
            this._weaponInfo_change1.string = "" + num1;
            this._weaponInfo_change1.node.children[0].active = false;
            this._weaponInfo_change1.node.children[1].active = true;
            this._weaponInfo_change1.node.color = cc.Color.RED;
            this._weaponInfo_change1.node.opacity = 255;
        }
        else if (num1 == 0) {
            this._weaponInfo_change1.node.opacity = 0;
        }
        else {
            this._weaponInfo_change1.string = "+" + num1;
            this._weaponInfo_change1.node.children[0].active = true;
            this._weaponInfo_change1.node.children[1].active = false;
            this._weaponInfo_change1.node.color = cc.Color.GREEN;
            this._weaponInfo_change1.node.opacity = 255;
        }
        // 攻击范围变化
        if (num2 < 0) {
            this._weaponInfo_change2.string = "" + num2;
            this._weaponInfo_change2.node.children[0].active = false;
            this._weaponInfo_change2.node.children[1].active = true;
            this._weaponInfo_change2.node.color = cc.Color.RED;
            this._weaponInfo_change2.node.opacity = 255;
        }
        else if (num2 == 0) {
            this._weaponInfo_change2.node.opacity = 0;
        }
        else {
            this._weaponInfo_change2.string = "+" + num2;
            this._weaponInfo_change2.node.children[0].active = true;
            this._weaponInfo_change2.node.children[1].active = false;
            this._weaponInfo_change2.node.color = cc.Color.GREEN;
            this._weaponInfo_change2.node.opacity = 255;
        }
        // 弹药量变化
        if (num3 < 0) {
            this._weaponInfo_change3.string = "" + num3;
            this._weaponInfo_change3.node.children[0].active = false;
            this._weaponInfo_change3.node.children[1].active = true;
            this._weaponInfo_change3.node.color = cc.Color.RED;
            this._weaponInfo_change3.node.opacity = 255;
        }
        else if (num3 == 0) {
            this._weaponInfo_change3.node.opacity = 0;
        }
        else {
            this._weaponInfo_change3.string = "+" + num3;
            this._weaponInfo_change3.node.children[0].active = true;
            this._weaponInfo_change3.node.children[1].active = false;
            this._weaponInfo_change3.node.color = cc.Color.GREEN;
            this._weaponInfo_change3.node.opacity = 255;
        }
        // 等级
        this._weaponInfo_level_pro.progress = showLevel / 3;
        // 按钮变化
        if (showWeaponInfo) {
            this._btnWeapon.children.forEach(function (v) { return v.active = false; });
            var btn_huang = this._btnWeapon.getChildByName("btn_huang");
            var btn_huang_small = this._btnWeapon.getChildByName("btn_huang_small");
            var btn_hong = this._btnWeapon.getChildByName("btn_hong");
            var txt_buy = this._btnWeapon.getChildByName("txt_buy");
            var txt_sjwc = this._btnWeapon.getChildByName("txt_sjwc");
            var txt_upgrade = this._btnWeapon.getChildByName("txt_upgrade");
            var txt_zpjl = this._btnWeapon.getChildByName("txt_zpjl");
            var icon_jinbi = this._btnWeapon.getChildByName("icon_jinbi");
            var icon_zuanshi = this._btnWeapon.getChildByName("icon_zuanshi");
            var price = this._btnWeapon.getChildByName("price");
            if (!Constant_1.default.isEndless) {
                if (showWeaponInfo.State == 0) {
                    // 视频解锁
                    if (gameDate_1.default.Weapon[showWeaponKey] && gameDate_1.default.Weapon[showWeaponKey].videoCount) {
                        this._btnWeapon.x = 150;
                        this._btnWeapon.width = 169;
                        if (btn_huang_small)
                            btn_huang_small.active = true;
                        // 金币
                        if (gameDate_1.default.Weapon[showWeaponKey].priceType == gameDate_1.PriceType.Gold) {
                            if (icon_jinbi) {
                                icon_jinbi.active = true;
                                icon_jinbi.x = -50;
                            }
                            if (price) {
                                price.active = true;
                                price.x = -10;
                                price.getComponent(cc.Label).string = '' + gameDate_1.default.Weapon[showWeaponKey].price;
                            }
                        }
                        // 钻石
                        else if (gameDate_1.default.Weapon[showWeaponKey].priceType == gameDate_1.PriceType.Diamond) {
                            if (icon_zuanshi) {
                                icon_zuanshi.active = true;
                                icon_zuanshi.x = -50;
                            }
                            if (price) {
                                price.active = true;
                                price.x = -10;
                                price.getComponent(cc.Label).string = '' + gameDate_1.default.Weapon[showWeaponKey].price;
                            }
                        }
                        // 转盘奖励
                        else if (gameDate_1.default.Weapon[showWeaponKey].priceType == gameDate_1.PriceType.ZhuanPanReward) {
                            if (txt_zpjl)
                                txt_zpjl.active = true;
                        }
                        // 视频解锁
                        // this._btnWeaponAd.active = true;
                        var videoCount = this._btnWeaponAd.getChildByName("videoCount");
                        if (videoCount)
                            videoCount.getComponent(cc.Label).string = showWeaponInfo.VideoCount + "/" + gameDate_1.default.Weapon[showWeaponKey].videoCount;
                    }
                    // 购买
                    else {
                        // this._btnWeaponAd.active = false;
                        this._btnWeapon.x = 250;
                        this._btnWeapon.width = 252;
                        if (btn_huang)
                            btn_huang.active = true;
                        // 金币
                        if (gameDate_1.default.Weapon[showWeaponKey].priceType == gameDate_1.PriceType.Gold) {
                            if (txt_buy)
                                txt_buy.active = true;
                            if (icon_jinbi) {
                                icon_jinbi.active = true;
                                icon_jinbi.x = 0;
                            }
                            if (price) {
                                price.active = true;
                                price.x = 30;
                                price.getComponent(cc.Label).string = '' + gameDate_1.default.Weapon[showWeaponKey].price;
                            }
                        }
                        // 钻石
                        else if (gameDate_1.default.Weapon[showWeaponKey].priceType == gameDate_1.PriceType.Diamond) {
                            if (txt_buy)
                                txt_buy.active = true;
                            if (icon_zuanshi) {
                                icon_zuanshi.active = true;
                                icon_zuanshi.x = 0;
                            }
                            if (price) {
                                price.active = true;
                                price.x = 30;
                                price.getComponent(cc.Label).string = '' + gameDate_1.default.Weapon[showWeaponKey].price;
                            }
                        }
                        // 转盘奖励
                        else if (gameDate_1.default.Weapon[showWeaponKey].priceType == gameDate_1.PriceType.ZhuanPanReward) {
                            if (txt_zpjl)
                                txt_zpjl.active = true;
                        }
                    }
                }
                //升级
                else if (showWeaponInfo.Level < 3) {
                    // this._btnWeaponAd.active = false;
                    this._btnWeapon.x = 250;
                    this._btnWeapon.width = 252;
                    if (btn_hong)
                        btn_hong.active = true;
                    if (txt_upgrade)
                        txt_upgrade.active = true;
                    if (icon_jinbi) {
                        icon_jinbi.active = true;
                        icon_jinbi.x = 0;
                    }
                    if (price) {
                        price.active = true;
                        price.x = 30;
                        price.getComponent(cc.Label).string = '' + Constant_1.default.weaponLevelPriceArr[showWeaponInfo.Level];
                    }
                }
                // 最大等级
                else {
                    // this._btnWeaponAd.active = false;
                    this._btnWeapon.x = 250;
                    this._btnWeapon.width = 252;
                    if (txt_sjwc)
                        txt_sjwc.active = true;
                }
            }
        }
        this._updateWeaponFrame();
    };
    UIHomePage.prototype._updateWeaponFrame = function () {
        var gunInfos = CocosZ_1.cocosz.dataMgr.getItem(Constant_1.default.ST_GunInfo, "");
        if (gunInfos) {
            var gunInfoArr = JSON.parse(gunInfos);
            if (gunInfoArr) {
                for (var i = 0; i < this._weaponList.length; i++) {
                    var node = this._weaponList[i];
                    if (gameDate_1.default.Weapon[node.name] && gameDate_1.default.Weapon[node.name].id >= 0) {
                        var id = gameDate_1.default.Weapon[node.name].id;
                        if (gunInfoArr[id]) {
                            var state = gunInfoArr[id].State;
                            if (state >= 1) {
                                node.getChildByName("kuang_hui").active = false;
                            }
                            else {
                                node.getChildByName("kuang_hui").active = true;
                            }
                            // 选中
                            if (node.name == weapon_1.default.WeaponName[this._showWeaponId]) {
                                node.getChildByName("kuang_huang").active = true;
                                if (this._ani_arrow) {
                                    if (gunInfoArr[id].State > 0 && gunInfoArr[id].Level < 3) {
                                        this._ani_arrow.x = node.x + 30;
                                        this._ani_arrow.active = true;
                                    }
                                    else {
                                        this._ani_arrow.active = false;
                                    }
                                }
                            }
                            else {
                                node.getChildByName("kuang_huang").active = false;
                            }
                        }
                        else {
                            node.getChildByName("kuang_hui").active = false;
                            node.getChildByName("kuang_huang").active = false;
                        }
                    }
                    else {
                        node.getChildByName("kuang_hui").active = false;
                        node.getChildByName("kuang_huang").active = false;
                    }
                }
            }
        }
    };
    /** 金币/钻石弹窗 */
    UIHomePage.prototype.showCoinPanel = function (isDiamond) {
        var node = cc.instantiate(CocosZ_1.cocosz.resMgr.getRes("UIADPanel", cc.Prefab));
        cc.find("Canvas").addChild(node);
        if (isDiamond) {
            node.getComponent("UIADPanel").setDiamond();
        }
    };
    /** 飞金币/钻石 */
    UIHomePage.prototype._flyCoins = function (iconName, frameNodeName) {
        var posNode = cc.find(frameNodeName, this._page);
        if (!posNode)
            return;
        var pos = posNode.parent.convertToWorldSpaceAR(posNode.position);
        FlyCoin_1.default.Show(iconName, pos);
    };
    /** 更新音频开关 */
    UIHomePage.prototype._updateAudioBtn = function (isPlay) {
        if (isPlay === void 0) { isPlay = true; }
        var offImg = cc.find("Background/off", this._btnAudio);
        offImg.active = CocosZ_1.cocosz.dataMgr.AudioOn == false;
        if (isPlay) {
            //判断开关，重新播放背景音乐
            if (CocosZ_1.cocosz.dataMgr.AudioOn) {
                CocosZ_1.cocosz.audioMgr.playBgm();
            }
            else {
                CocosZ_1.cocosz.audioMgr.stopAll();
            }
        }
    };
    /** 更新震动开关 */
    UIHomePage.prototype._updatShakeBtn = function () {
        var offImg = cc.find("Background/off", this._btnShake);
        offImg.active = CocosZ_1.cocosz.dataMgr.ShakeOn == false;
    };
    UIHomePage = __decorate([
        ccclass
    ], UIHomePage);
    return UIHomePage;
}(UIPage_1.default));
exports.default = UIHomePage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXFVJSG9tZVBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXlDO0FBQ3pDLGtEQUEwRjtBQUMxRiw4Q0FBNkM7QUFDN0MsMkRBQTBEO0FBQzFELHVFQUF5RTtBQUN6RSxtQ0FBOEI7QUFDOUIsbUVBQThEO0FBQzlELGdEQUEyQztBQUMzQyw2Q0FBdUQ7QUFDdkQseUNBQW9DO0FBQ3BDLHdDQUFtQztBQUNuQyxhQUFhO0FBQ2IsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRS9CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFNO0lBRTFDO1FBQUEsWUFDSSxrQkFBTSxtQkFBUSxDQUFDLFVBQVUsQ0FBQyxTQUU3QjtRQUVPLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsZ0JBQVUsR0FBUSxJQUFJLENBQUM7UUFDdkIsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBQ2hDLGdCQUFVLEdBQWdCLElBQUksQ0FBQztRQUMvQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixpQkFBVyxHQUFjLEVBQUUsQ0FBQztRQUM1QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixvQkFBYyxHQUFjLElBQUksQ0FBQztRQUNqQyxx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QUksQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMscUJBQXFCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU5RyxJQUFJLFNBQVMsR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUQsSUFBSSxVQUFVLEdBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEUsSUFBSSxrQkFBa0IsR0FBYSxFQUFFLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RixJQUFJLFVBQVUsR0FBYSxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RSxJQUFJLGtCQUFrQixHQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZGLElBQUksUUFBUSxHQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxJQUFHLGtCQUFRLENBQUMsU0FBUyxFQUFDLEVBQUssV0FBVztZQUNsQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN6QixVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUMxQixrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2xDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzFCLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbEMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDMUI7YUFBSTtZQUNELFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDakMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDekIsa0JBQWtCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNqQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUMzQjtRQUVELElBQUcsa0JBQVEsQ0FBQyxTQUFTLEVBQUM7WUFDbEIsSUFBSSxnQkFBZ0IsR0FBVyxlQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1lBQy9ELElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDL0MsZUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2FBQ3BDO1NBQ0o7SUFDTCxDQUFDO0lBRU8saUNBQVksR0FBcEI7UUFDSSxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVPLCtCQUFVLEdBQWxCLFVBQW1CLElBQVc7UUFDMUIsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNKLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDckQsZUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzVDO2dCQUNELE1BQU07YUFDVDtZQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ0osSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNwRCxlQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDM0M7Z0JBQ0QsTUFBTTthQUNUO1NBQ0o7SUFDTCxDQUFDO0lBRVMsMkJBQU0sR0FBaEI7UUFBQSxpQkFvQkM7UUFuQkcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0QixTQUFTO1FBQ1QsYUFBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQixhQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsS0FBSztRQUNMLGFBQUssQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQ2hDLGFBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO1FBQ2hFLGFBQUssQ0FBQyx1QkFBdUIsQ0FBQztZQUMxQix5QkFBeUI7WUFDekIsSUFBSSxhQUFLLENBQUMsYUFBYSxFQUFFLElBQUksS0FBSSxDQUFDLFlBQVksRUFBRSxFQUFFO2dCQUM5QyxlQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxvQkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2pEO1lBQ0QsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUVSLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFRLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRVMsNEJBQU8sR0FBakI7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixhQUFLLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNqQyxhQUFLLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUNuQyxhQUFLLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLGFBQUssQ0FBQyxTQUFTLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMxQyxhQUFLLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDckMsSUFBSSxtQkFBUyxDQUFDLFFBQVEsRUFBRTtZQUNwQixhQUFLLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLGFBQUssQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakQ7YUFBTSxJQUFJLG1CQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3pCLGFBQUssQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsUUFBUSxFQUFFLDRCQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNuRTtJQUNMLENBQUM7SUFFUywyQkFBTSxHQUFoQjtRQUNJLElBQUksZUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLG1CQUFTLENBQUMsUUFBUSxFQUFFO2dCQUNwQixhQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyw0QkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25EO2lCQUFNO2dCQUNILGFBQUssQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLDRCQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM5RTtZQUNELE9BQU87WUFDUCxJQUFJLG1CQUFTLENBQUMsUUFBUSxFQUFFO2dCQUNwQixhQUFLLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QyxhQUFLLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2pEO2lCQUFNLElBQUksbUJBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLGFBQUssQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsUUFBUSxFQUFFLDRCQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUNuRTtZQUNELGFBQUssQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDL0YsYUFBSyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN2QyxhQUFLLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVqRSxhQUFLLENBQUMsbUJBQW1CLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSw0QkFBYyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDcEksYUFBSyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsNEJBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3BJLGFBQUssQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLDRCQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM1RSxhQUFLLENBQUMsMEJBQTBCLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSw0QkFBYyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDOUUsYUFBSyxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO1lBQzNHLGFBQUssQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO1NBQzVJO0lBQ0wsQ0FBQztJQUVPLDBDQUFxQixHQUE3QixVQUE4QixLQUFVO1FBQ3BDLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNoQixLQUFLLGtCQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3BELE1BQU07YUFDVDtZQUNELEtBQUssa0JBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixNQUFNO2FBQ1Q7WUFDRCxLQUFLLGtCQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQzFCLE1BQU07YUFDVDtTQUNKO0lBQ0wsQ0FBQztJQUVhLHVDQUFrQixHQUFoQyxVQUFpQyxLQUEwQjs7Ozs7OzRCQUN2RCxxQkFBTSxlQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFBOzt3QkFBN0MsU0FBNkMsQ0FBQzt3QkFFOUMsUUFBUSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTs0QkFDdkIsS0FBSyxjQUFjLENBQUMsQ0FBQztnQ0FDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dDQUNsQyxJQUFHLGtCQUFRLENBQUMsU0FBUyxFQUFDO29DQUNsQixJQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBQzt3Q0FDaEMsZUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDO3dDQUNsQyxlQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7d0NBQ3hELFFBQVEsR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO3dDQUNuRixhQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0NBQ3JELFVBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dDQUNuQixRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3Q0FDeEMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO3dDQUN6QixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dDQUM1RixRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dDQUMxQixPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0NBQ2pGLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO3dDQUM3RSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzt3Q0FDaEYsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7NkNBQ2IsUUFBUSxDQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQzs2Q0FDdEMsSUFBSSxDQUFDOzRDQUNGLHVCQUF1Qjs0Q0FDdkIsZUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsZUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7NENBQzlDLFVBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dDQUMzQixDQUFDLENBQUM7NkNBQ0QsS0FBSyxFQUFFLENBQUM7cUNBQ2hCO3lDQUFJO3dDQUNELGFBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUEsU0FBUztxQ0FDdkM7aUNBQ0o7cUNBQUk7b0NBQ0csUUFBUSxHQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQ0FDckQsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0NBQ3ZCLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGVBQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO29DQUM5QyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztpQ0FDMUI7Z0NBQ0QsTUFBTTs2QkFDVDs0QkFDRCxLQUFLLFNBQVMsQ0FBQyxDQUFDO2dDQUNaLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQ0FDbkIsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUM7b0NBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0NBQ2hELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQ0FDakIsUUFBUSxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQ0FDNUQsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7b0NBQ2pDLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7aUNBQy9DO2dDQUNELE1BQU07NkJBQ1Q7NEJBQ0QsS0FBSyxVQUFVLENBQUMsQ0FBQztnQ0FDYixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0NBQ25CLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFO29DQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO2dDQUNoRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0NBQ2pCLFFBQVEsR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0NBQzVELElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFO29DQUNqQyxlQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2lDQUMvQztnQ0FDRCxNQUFNOzZCQUNUOzRCQUNELEtBQUssU0FBUyxDQUFDLENBQUM7Z0NBRVIsWUFBWSxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQ0FDNUQsV0FBVyxHQUFHLE1BQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUUsQ0FBQztnQ0FDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQ0FDMUIsSUFBSSxZQUFZLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTtvQ0FDekIsS0FBSztvQ0FDTCxJQUFJLGtCQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsSUFBSSxvQkFBUyxDQUFDLElBQUksRUFBRTt3Q0FDNUQsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEVBQUU7NENBQ2xFLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLGtCQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQzs0Q0FDakUsYUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxTQUFTOzRDQUN6QyxlQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDOzRDQUM1QyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7NENBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7eUNBQ3RCOzZDQUFNOzRDQUNILElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7eUNBQzdCO3FDQUNKO29DQUNELEtBQUs7eUNBQ0EsSUFBSSxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLElBQUksb0JBQVMsQ0FBQyxPQUFPLEVBQUU7d0NBQ3BFLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUksa0JBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxFQUFFOzRDQUNyRSxlQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUM7NENBQ3BFLGFBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUEsU0FBUzs0Q0FDekMsZUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzs0Q0FDNUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDOzRDQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO3lDQUN0Qjs2Q0FBTTs0Q0FDSCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO3lDQUM1QjtxQ0FDSjtvQ0FDRCxPQUFPO3lDQUNGLElBQUksa0JBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxJQUFJLG9CQUFTLENBQUMsY0FBYyxFQUFFO3dDQUMzRSxlQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxvQkFBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7cUNBQ3REO2lDQUNKO3FDQUNHO29DQUNBLElBQUcsQ0FBQyxrQkFBUSxDQUFDLFNBQVMsRUFBQzt3Q0FDbkIsS0FBSzt3Q0FDTCxJQUFJLFlBQVksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFOzRDQUN4QixJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLGtCQUFRLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dEQUM1RSxlQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxrQkFBUSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnREFDM0UsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO2dEQUNyQixlQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO2dEQUMxRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0RBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7NkNBQ3RCO2lEQUFNO2dEQUNILElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7NkNBQzdCO3lDQUNKO3FDQUNKO2lDQUNKO2dDQUVELE1BQU07NkJBQ1Q7NEJBQ0QsS0FBSyxXQUFXLENBQUMsQ0FBQztnQ0FFVixjQUFjLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dDQUMvRCxhQUFhLEdBQUcsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dDQUMxRCxJQUFJLGNBQWMsQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFO29DQUMzQixLQUFLO29DQUNMLElBQUksa0JBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxJQUFJLG9CQUFTLENBQUMsSUFBSSxFQUFFO3dDQUM1RCxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLGtCQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRTs0Q0FDbEUsZUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksa0JBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDOzRDQUNqRSxhQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzs0Q0FDaEMsZUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzs0Q0FDOUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDOzRDQUNyQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzs0Q0FDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5Q0FDdEI7NkNBQU07NENBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzt5Q0FDN0I7cUNBQ0o7b0NBQ0QsS0FBSzt5Q0FDQSxJQUFJLGtCQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsSUFBSSxvQkFBUyxDQUFDLE9BQU8sRUFBRTt3Q0FDcEUsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLEVBQUU7NENBQ3JFLGVBQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFJLGtCQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQzs0Q0FDcEUsYUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7NENBQ2hDLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7NENBQzlDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzs0Q0FDckIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7NENBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7eUNBQ3RCOzZDQUFNOzRDQUNILElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7eUNBQzVCO3FDQUNKO29DQUNELE9BQU87eUNBQ0YsSUFBSSxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLElBQUksb0JBQVMsQ0FBQyxjQUFjLEVBQUU7d0NBQzNFLGVBQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLG9CQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztxQ0FDdEQ7aUNBQ0o7cUNBQ0c7b0NBQ0EsSUFBRyxDQUFDLGtCQUFRLENBQUMsU0FBUyxFQUFDO3dDQUNuQixLQUFLO3dDQUNMLElBQUksY0FBYyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7NENBQzFCLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksa0JBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0RBQ2hGLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLGtCQUFRLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dEQUMvRSxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7Z0RBQ3ZCLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0RBQzdELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnREFDckIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0RBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7NkNBQ3RCO2lEQUFNO2dEQUNILElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7NkNBQzdCO3lDQUNKO3FDQUNKO2lDQUNKO2dDQUVELE1BQU07NkJBQ1Q7NEJBQ0QsS0FBSyxXQUFXLENBQUMsQ0FBQztnQ0FDZCxhQUFLLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFBO2dDQUM3QixlQUFNLENBQUMsT0FBTyxDQUFDO29DQUNYLFFBQVE7b0NBQ1IsYUFBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtvQ0FDN0IsSUFBSSxZQUFZLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29DQUNoRSxJQUFJLFdBQVcsR0FBVyxNQUFHLEtBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFFLENBQUM7b0NBQ3BELElBQUksQ0FBQyxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLGtCQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFVBQVUsRUFBRTt3Q0FDbkcsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO3dDQUMxQixlQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO3dDQUMzRCxJQUFJLFlBQVksQ0FBQyxVQUFVLElBQUksa0JBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsVUFBVSxFQUFFOzRDQUN0RSxhQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFBLFNBQVM7NENBQ3pDLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7NENBQzVDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7eUNBQ3RCOzZDQUFNOzRDQUNILGFBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxZQUFZLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQzt5Q0FDNUc7d0NBQ0QsU0FBUzt3Q0FDVCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7cUNBQ3hCO2dDQUNMLENBQUMsRUFBRTtvQ0FDQyxPQUFPO29DQUNQLGFBQUssQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUE7Z0NBQ2pDLENBQUMsQ0FBQyxDQUFDO2dDQUNILE1BQU07NkJBQ1Q7NEJBQ0QsS0FBSyxhQUFhLENBQUMsQ0FBQztnQ0FDaEIsYUFBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtnQ0FDN0IsZUFBTSxDQUFDLE9BQU8sQ0FBQztvQ0FDWCxRQUFRO29DQUNSLGFBQUssQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUE7b0NBQzdCLElBQUksY0FBYyxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQ0FDbkUsSUFBSSxhQUFhLEdBQVcsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29DQUNsRSxJQUFJLENBQUMsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDLGtCQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxVQUFVLEVBQUU7d0NBQ3JHLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3Q0FDNUIsZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQzt3Q0FDOUQsSUFBSSxjQUFjLENBQUMsVUFBVSxJQUFJLGtCQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsRUFBRTs0Q0FDeEUsYUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7NENBQ2hDLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUM7NENBQzlDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7eUNBQ3RCOzZDQUFNOzRDQUNILGFBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxjQUFjLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQzt5Q0FDOUc7d0NBQ0QsU0FBUzt3Q0FDVCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7d0NBQ3JCLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO3FDQUM3QjtnQ0FDTCxDQUFDLEVBQUU7b0NBQ0MsT0FBTztvQ0FDUCxhQUFLLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFBO2dDQUNqQyxDQUFDLENBQUMsQ0FBQztnQ0FDSCxNQUFNOzZCQUNUOzRCQUNELEtBQUssT0FBTyxDQUFDLENBQUM7Z0NBQ1YsZUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsb0JBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dDQUNuRCxNQUFNOzZCQUNUOzRCQUNELEtBQUssU0FBUyxDQUFDLENBQUM7Z0NBQ1osZUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsb0JBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQ0FDOUMsTUFBTTs2QkFDVDs0QkFDRCxTQUFTOzRCQUNULEtBQUssWUFBWSxDQUFDLENBQUM7Z0NBQ2YsZUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsb0JBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQ0FDakQsTUFBTTs2QkFDVDs0QkFDRCxLQUFLLFNBQVMsQ0FBQyxDQUFDO2dDQUNaLGVBQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLG9CQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7Z0NBQzlDLE1BQU07NkJBQ1Q7NEJBQ0QsS0FBSyxTQUFTLENBQUMsQ0FBQztnQ0FDWixlQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxvQkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dDQUM5QyxNQUFNOzZCQUNUOzRCQUNELEtBQUssUUFBUSxDQUFDLENBQUM7Z0NBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQ0FDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQ0FDN0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0NBQ2xFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztxQ0FDbkIsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQztxQ0FDOUUsS0FBSyxFQUFFLENBQUM7Z0NBQ2IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO3FDQUNwQixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO3FDQUMxRSxLQUFLLEVBQUUsQ0FBQztnQ0FDYixNQUFNOzZCQUNUOzRCQUNELEtBQUssVUFBVSxDQUFDLENBQUM7Z0NBQ2IsZUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxlQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQ0FDakQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dDQUN2QixNQUFNOzZCQUNUOzRCQUNELEtBQUssVUFBVSxDQUFDLENBQUM7Z0NBQ2IsZUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxlQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQ0FDakQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dDQUN0QixNQUFNOzZCQUNUOzRCQUNELEtBQUssV0FBVyxDQUFDLENBQUM7Z0NBQ2QsZUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFO29DQUNuQyw4Q0FBOEM7Z0NBQ2xELENBQUMsQ0FBQyxDQUFBO2dDQUNGLE1BQU07NkJBQ1Q7eUJBQ0o7Ozs7O0tBQ0o7SUFHTyxrQ0FBYSxHQUFyQjtRQUFBLGlCQTZMQztRQTVMRyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzdDLEtBQUs7UUFDTCxPQUFPO1FBQ1AsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEcsT0FBTztRQUNQLElBQUksV0FBVyxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkUsSUFBSSxZQUFZLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hFLElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDakMsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNuQyxJQUFJLFVBQVUsR0FBRyxNQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBRSxDQUFDO1FBQ25ELElBQUksV0FBVyxHQUFHLE1BQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUUsQ0FBQztRQUM1QyxLQUFLO1FBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLEdBQUcsa0JBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUMxQyxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2FBQ2xEO2lCQUFNO2dCQUNILEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7YUFDaEQ7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU07UUFDTixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLEtBQUcsa0JBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBRyxDQUFDO1FBQ2xGLEtBQUs7UUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLEtBQUcsa0JBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBRyxDQUFDO1FBQ3BGLE9BQU87UUFDUCxJQUFJLElBQUksR0FBRyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsa0JBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZHLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztZQUMxQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDdEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDakQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQzdDO2FBQ0ksSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUMzQzthQUNJO1lBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQzNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDdEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN2RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNuRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7U0FDN0M7UUFDRCxRQUFRO1FBQ1IsSUFBSSxJQUFJLEdBQUcsa0JBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLGtCQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN2RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3RELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ2pELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztTQUM3QzthQUNJLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDM0M7YUFDSTtZQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztZQUMzQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3RELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDdkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDbkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQzdDO1FBQ0QsS0FBSztRQUNMLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNsRCxPQUFPO1FBQ1AsSUFBSSxZQUFZLEVBQUU7WUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1lBQ3RELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzFELElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDdEUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdEQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEQsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDOUQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDNUQsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDaEUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEQsSUFBRyxrQkFBUSxDQUFDLFNBQVMsSUFBSSxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLElBQUksb0JBQVMsQ0FBQyxJQUFJLEVBQUM7Z0JBQ2hGLGtCQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxvQkFBUyxDQUFDLE9BQU8sQ0FBQzthQUNoRTtZQUNELEtBQUs7WUFDTCxJQUFJLFlBQVksQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFO2dCQUN6QixJQUFJLGtCQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLGtCQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFVBQVUsRUFBRTtvQkFDN0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztvQkFDMUIsSUFBSSxlQUFlO3dCQUFFLGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNuRCxLQUFLO29CQUNMLElBQUksa0JBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxJQUFJLG9CQUFTLENBQUMsSUFBSSxFQUFFO3dCQUM1RCxJQUFJLFVBQVUsRUFBRTs0QkFDWixVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs0QkFDekIsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQzt5QkFDdEI7d0JBQ0QsSUFBSSxLQUFLLEVBQUU7NEJBQ1AsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7NEJBQ3BCLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7NEJBQ2QsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUM7eUJBQ25GO3FCQUNKO29CQUNELEtBQUs7eUJBQ0EsSUFBSSxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLElBQUksb0JBQVMsQ0FBQyxPQUFPLEVBQUU7d0JBQ3BFLElBQUksWUFBWSxFQUFFOzRCQUNkLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzRCQUMzQixZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO3lCQUN4Qjt3QkFDRCxJQUFJLEtBQUssRUFBRTs0QkFDUCxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs0QkFDcEIsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQzs0QkFDZCxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLGtCQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQzt5QkFDbkY7cUJBQ0o7b0JBQ0QsT0FBTzt5QkFDRixJQUFJLGtCQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsSUFBSSxvQkFBUyxDQUFDLGNBQWMsRUFBRTt3QkFDM0UsSUFBSSxRQUFROzRCQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3FCQUN4QztvQkFDRCxPQUFPO29CQUNQLGlDQUFpQztvQkFDakMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQzlELElBQUksVUFBVTt3QkFBRSxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsa0JBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsVUFBVSxDQUFDO2lCQUN4STtxQkFBTTtvQkFDSCxrQ0FBa0M7b0JBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO29CQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7b0JBQzFCLElBQUksU0FBUzt3QkFBRSxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDdkMsS0FBSztvQkFDTCxJQUFJLGtCQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsSUFBSSxvQkFBUyxDQUFDLElBQUksRUFBRTt3QkFDNUQsSUFBSSxPQUFPOzRCQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUNuQyxJQUFJLFVBQVUsRUFBRTs0QkFDWixVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs0QkFDekIsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ3BCO3dCQUNELElBQUksS0FBSyxFQUFFOzRCQUNQLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzRCQUNwQixLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs0QkFDYixLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLGtCQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQzt5QkFDbkY7cUJBQ0o7b0JBQ0QsS0FBSzt5QkFDQSxJQUFJLGtCQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsSUFBSSxvQkFBUyxDQUFDLE9BQU8sRUFBRTt3QkFDcEUsSUFBSSxPQUFPOzRCQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUNuQyxJQUFJLFlBQVksRUFBRTs0QkFDZCxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs0QkFDM0IsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ3RCO3dCQUNELElBQUksS0FBSyxFQUFFOzRCQUNQLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzRCQUNwQixLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs0QkFDYixLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLGtCQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQzt5QkFDbkY7cUJBQ0o7b0JBQ0QsT0FBTzt5QkFDRixJQUFJLGtCQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsSUFBSSxvQkFBUyxDQUFDLGNBQWMsRUFBRTt3QkFDM0UsSUFBSSxRQUFROzRCQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3FCQUN4QztpQkFDSjthQUNKO2lCQUNJO2dCQUNELElBQUcsa0JBQVEsQ0FBQyxTQUFTLEVBQUMsRUFBSyxXQUFXO29CQUNsQyxJQUFJLFNBQVM7d0JBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7aUJBQzNDO3FCQUFJO29CQUNELElBQUk7b0JBQ0osSUFBSSxZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTt3QkFDeEIsa0NBQWtDO3dCQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzt3QkFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO3dCQUMxQixJQUFJLFFBQVE7NEJBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ3JDLElBQUksV0FBVzs0QkFBRSxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDM0MsSUFBSSxVQUFVLEVBQUU7NEJBQ1osVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7NEJBQ3pCLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUNwQjt3QkFDRCxJQUFJLEtBQUssRUFBRTs0QkFDUCxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs0QkFDcEIsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7NEJBQ2IsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxrQkFBUSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDN0Y7cUJBQ0o7b0JBQ0QsTUFBTTt5QkFDRDt3QkFDRCxrQ0FBa0M7d0JBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO3dCQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7d0JBQzFCLElBQUksUUFBUTs0QkFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztxQkFDeEM7aUJBQ0o7YUFFSjtTQUVKO0lBQ0wsQ0FBQztJQUdPLGtDQUFhLEdBQXJCO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xELE9BQU87UUFDUCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFHLE9BQU87UUFDUCxJQUFJLGFBQWEsR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxlQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksY0FBYyxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuRSxJQUFJLFFBQVEsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ25DLElBQUksU0FBUyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBSSxZQUFZLEdBQUcsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsZUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5RCxJQUFJLGFBQWEsR0FBRyxnQkFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUQsTUFBTTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsS0FBRyxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFHLENBQUM7UUFDcEYsT0FBTztRQUNQLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsa0JBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JHLE9BQU87UUFDUCxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFHLEtBQUcsa0JBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBVSxDQUFDO1FBQzlFLE1BQU07UUFDTixJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFHLEtBQUcsa0JBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBRyxDQUFDO1FBQzVGLEtBQUs7UUFDTCxJQUFJLElBQUksR0FBRyxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsa0JBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZHLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGtCQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6SCxJQUFJLElBQUksR0FBRyxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLEdBQUcsa0JBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQzVGLElBQUksSUFBSSxHQUFHLGtCQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkgsUUFBUTtRQUNSLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztZQUM1QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3pELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDbkQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQy9DO2FBQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0gsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQzdDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN6RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNyRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7U0FDL0M7UUFDRCxTQUFTO1FBQ1QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQzVDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDekQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN4RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNuRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7U0FDL0M7YUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDSCxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7WUFDN0MsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN4RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3pELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3JELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztTQUMvQztRQUNELFNBQVM7UUFDVCxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDNUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN6RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3hELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ25ELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztTQUMvQzthQUFNLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztZQUM3QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3hELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDekQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDckQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQy9DO1FBQ0QsUUFBUTtRQUNSLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztZQUM1QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3pELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDbkQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQy9DO2FBQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0gsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQzdDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN6RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNyRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7U0FDL0M7UUFDRCxLQUFLO1FBQ0wsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELE9BQU87UUFDUCxJQUFJLGNBQWMsRUFBRTtZQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1lBQ3hELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzVELElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDeEUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDMUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDeEQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDMUQsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDaEUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDMUQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUQsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbEUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEQsSUFBRyxDQUFDLGtCQUFRLENBQUMsU0FBUyxFQUFDO2dCQUNuQixJQUFJLGNBQWMsQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFO29CQUMzQixPQUFPO29CQUNQLElBQUksa0JBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksa0JBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxFQUFFO3dCQUM3RSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzt3QkFDNUIsSUFBSSxlQUFlOzRCQUFFLGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUNuRCxLQUFLO3dCQUNMLElBQUksa0JBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxJQUFJLG9CQUFTLENBQUMsSUFBSSxFQUFFOzRCQUM1RCxJQUFJLFVBQVUsRUFBRTtnQ0FDWixVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQ0FDekIsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQzs2QkFDdEI7NEJBQ0QsSUFBSSxLQUFLLEVBQUU7Z0NBQ1AsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0NBQ3BCLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0NBQ2QsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUM7NkJBQ25GO3lCQUNKO3dCQUNELEtBQUs7NkJBQ0EsSUFBSSxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLElBQUksb0JBQVMsQ0FBQyxPQUFPLEVBQUU7NEJBQ3BFLElBQUksWUFBWSxFQUFFO2dDQUNkLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dDQUMzQixZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDOzZCQUN4Qjs0QkFDRCxJQUFJLEtBQUssRUFBRTtnQ0FDUCxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQ0FDcEIsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQ0FDZCxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLGtCQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQzs2QkFDbkY7eUJBQ0o7d0JBQ0QsT0FBTzs2QkFDRixJQUFJLGtCQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsSUFBSSxvQkFBUyxDQUFDLGNBQWMsRUFBRTs0QkFDM0UsSUFBSSxRQUFRO2dDQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3lCQUN4Qzt3QkFDRCxPQUFPO3dCQUNQLG1DQUFtQzt3QkFDbkMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQ2hFLElBQUksVUFBVTs0QkFBRSxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsa0JBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDO3FCQUMxSTtvQkFDRCxLQUFLO3lCQUNBO3dCQUNELG9DQUFvQzt3QkFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO3dCQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7d0JBQzVCLElBQUksU0FBUzs0QkFBRSxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDdkMsS0FBSzt3QkFDTCxJQUFJLGtCQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsSUFBSSxvQkFBUyxDQUFDLElBQUksRUFBRTs0QkFDNUQsSUFBSSxPQUFPO2dDQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzRCQUNuQyxJQUFJLFVBQVUsRUFBRTtnQ0FDWixVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQ0FDekIsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7NkJBQ3BCOzRCQUNELElBQUksS0FBSyxFQUFFO2dDQUNQLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dDQUNwQixLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQ0FDYixLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLGtCQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQzs2QkFDbkY7eUJBQ0o7d0JBQ0QsS0FBSzs2QkFDQSxJQUFJLGtCQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsSUFBSSxvQkFBUyxDQUFDLE9BQU8sRUFBRTs0QkFDcEUsSUFBSSxPQUFPO2dDQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzRCQUNuQyxJQUFJLFlBQVksRUFBRTtnQ0FDZCxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQ0FDM0IsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7NkJBQ3RCOzRCQUNELElBQUksS0FBSyxFQUFFO2dDQUNQLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dDQUNwQixLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQ0FDYixLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLGtCQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQzs2QkFDbkY7eUJBQ0o7d0JBQ0QsT0FBTzs2QkFDRixJQUFJLGtCQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsSUFBSSxvQkFBUyxDQUFDLGNBQWMsRUFBRTs0QkFDM0UsSUFBSSxRQUFRO2dDQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3lCQUN4QztxQkFDSjtpQkFDSjtnQkFDRCxJQUFJO3FCQUNDLElBQUksY0FBYyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7b0JBQy9CLG9DQUFvQztvQkFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7b0JBQzVCLElBQUksUUFBUTt3QkFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDckMsSUFBSSxXQUFXO3dCQUFFLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUMzQyxJQUFJLFVBQVUsRUFBRTt3QkFDWixVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDekIsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3BCO29CQUNELElBQUksS0FBSyxFQUFFO3dCQUNQLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUNwQixLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDYixLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLGtCQUFRLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNqRztpQkFDSjtnQkFDRCxPQUFPO3FCQUNGO29CQUNELG9DQUFvQztvQkFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7b0JBQzVCLElBQUksUUFBUTt3QkFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDeEM7YUFDSjtTQUNKO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFFOUIsQ0FBQztJQUVELHVDQUFrQixHQUFsQjtRQUNJLElBQUksUUFBUSxHQUFXLGVBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBSSxVQUFVLEdBQWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRCxJQUFJLFVBQVUsRUFBRTtnQkFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzlDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQy9CLElBQUksa0JBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGtCQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFO3dCQUNsRSxJQUFJLEVBQUUsR0FBRyxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO3dCQUN2QyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTs0QkFDaEIsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQzs0QkFDakMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO2dDQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs2QkFDbkQ7aUNBQU07Z0NBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzZCQUNsRDs0QkFDRCxLQUFLOzRCQUNMLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxnQkFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0NBQ3BELElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQ0FDakQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29DQUNqQixJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO3dDQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3Q0FDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3FDQUNqQzt5Q0FBTTt3Q0FDSCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7cUNBQ2xDO2lDQUNKOzZCQUNKO2lDQUFNO2dDQUNILElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs2QkFDckQ7eUJBQ0o7NkJBQU07NEJBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzRCQUNoRCxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7eUJBQ3JEO3FCQUNKO3lCQUFNO3dCQUNILElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDaEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO3FCQUNyRDtpQkFFSjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRUQsY0FBYztJQUNkLGtDQUFhLEdBQWIsVUFBYyxTQUFrQjtRQUM1QixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLGVBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN4RSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLFNBQVMsRUFBRTtZQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDL0M7SUFDTCxDQUFDO0lBRUQsYUFBYTtJQUNMLDhCQUFTLEdBQWpCLFVBQWtCLFFBQWdCLEVBQUUsYUFBcUI7UUFDckQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUNyQixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRSxpQkFBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGFBQWE7SUFDTCxvQ0FBZSxHQUF2QixVQUF3QixNQUFzQjtRQUF0Qix1QkFBQSxFQUFBLGFBQXNCO1FBQzFDLElBQUksTUFBTSxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDO1FBQ2hELElBQUksTUFBTSxFQUFFO1lBQ1IsZUFBZTtZQUNmLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQ3hCLGVBQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDN0I7aUJBQU07Z0JBQ0gsZUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUM3QjtTQUNKO0lBQ0wsQ0FBQztJQUVELGFBQWE7SUFDTCxtQ0FBYyxHQUF0QjtRQUNJLElBQUksTUFBTSxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDO0lBQ3BELENBQUM7SUFwZ0NnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBc2dDOUI7SUFBRCxpQkFBQztDQXRnQ0QsQUFzZ0NDLENBdGdDdUMsZ0JBQU0sR0FzZ0M3QztrQkF0Z0NvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJUGFnZSBmcm9tIFwiLi4vRnJhbWV3b3JrL1VJUGFnZVwiO1xyXG5pbXBvcnQgQ29uc3RhbnQsIHsgR3VuSW5mbywgUGFnZU5hbWUsIFBhbmVsTmFtZSwgU2tpbGxJbmZvIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5pbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgeyB1dGlscyB9IGZyb20gXCIuLi8uLi9jb21tb24tcGx1Z2luL1NjcmlwdHMvVXRpbHNcIjtcclxuaW1wb3J0IHsgQmFubmVyTG9jYXRpb24gfSBmcm9tIFwiLi4vLi4vY29tbW9uLXBsdWdpbi9TY3JpcHRzL1laX0NvbnN0YW50XCI7XHJcbmltcG9ydCBBbmkgZnJvbSBcIi4uL0dhbWUvYW5pXCI7XHJcbmltcG9ydCBQbGF0VXRpbHMgZnJvbSBcIi4uLy4uL2NvbW1vbi1wbHVnaW4vU2NyaXB0cy9QbGF0VXRpbHNcIjtcclxuaW1wb3J0IEZseUNvaW4gZnJvbSBcIi4uL0ZyYW1ld29yay9GbHlDb2luXCI7XHJcbmltcG9ydCBHYW1lRGF0ZSwgeyBQcmljZVR5cGUgfSBmcm9tIFwiLi4vR2FtZS9nYW1lRGF0ZVwiO1xyXG5pbXBvcnQgV2VhcG9uIGZyb20gXCIuLi9HYW1lL3dlYXBvblwiO1xyXG5pbXBvcnQgTXNnIGZyb20gXCIuLi9GcmFtZXdvcmsvTXNnXCI7XHJcbi8vIEB0cy1pZ25vcmVcclxuY29uc3QgaTE4biA9IHJlcXVpcmUoJ0xhbmd1YWdlRGF0YScpO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJSG9tZVBhZ2UgZXh0ZW5kcyBVSVBhZ2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFBhZ2VOYW1lLlVJSG9tZVBhZ2UpO1xyXG4gICAgICAgIHRoaXMuaXNWYWxpZCgpICYmIHRoaXMub25Mb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaWNvbl9zZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfZnJhbWVfc2V0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2J0bkF1ZGlvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2J0blNoYWtlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2J0blNraW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYnRuU2tpbkFkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2J0bldlYXBvbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9idG5XZWFwb25BZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfcGxheWVyQW5pOiBBbmkgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYW5pVXBncmFkZTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYW5pQ2FpZGFpOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF93ZWFwb25TY3JvbGw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfd2VhcG9uTGlzdDogY2MuTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIF9hbmlfYXJyb3c6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX3NraW5JbmZvX25hbWU6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9za2luSW5mb194dWVkaTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9za2luSW5mb192YWx1ZTE6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3NraW5JbmZvX3ZhbHVlMjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfc2tpbkluZm9fY2hhbmdlMTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfc2tpbkluZm9fY2hhbmdlMjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfc2tpbkluZm9fbGV2ZWxfcHJvOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2VhcG9uSW5mb19uYW1lOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfd2VhcG9uSW5mb192YWx1ZTA6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3dlYXBvbkluZm9fdmFsdWUxOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIF93ZWFwb25JbmZvX3ZhbHVlMjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfd2VhcG9uSW5mb192YWx1ZTM6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3dlYXBvbkluZm9fY2hhbmdlMDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfd2VhcG9uSW5mb19jaGFuZ2UxOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIF93ZWFwb25JbmZvX2NoYW5nZTI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3dlYXBvbkluZm9fY2hhbmdlMzogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfd2VhcG9uSW5mb19sZXZlbF9wcm86IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVUlIT01FUEFHRSBPTkxPQURcIilcclxuXHJcbiAgICAgICAgaWYoY29jb3N6LmdhbWVNb2RlID09IDYpeyAgIFxyXG4gICAgICAgICAgICBDb25zdGFudC5pc0VuZGxlc3MgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoY29jb3N6LmdhbWVNb2RlID09IDgpeyAgIFxyXG4gICAgICAgICAgICBDb25zdGFudC5pc0VuZGxlc3MgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOaMiemSrlxyXG4gICAgICAgIGxldCBidG5OYW1lczogc3RyaW5nW10gPSBbXCJCdG5TZXRcIiwgXCJCdG5TZXQvZnJhbWVfc2V0L0J0bkF1ZGlvXCIsIFwiQnRuU2V0L2ZyYW1lX3NldC9CdG5TaGFrZVwiLCBcImRpdGFpL0J0bkxlZnRcIiwgXCJkaXRhaS9CdG5SaWdodFwiLCBcIkJ0blNraW5cIiwgXCJCdG5XZWFwb25cIiwgXCJCdG5Ta2luQWRcIiwgXCJCdG5XZWFwb25BZFwiLCBcIkJ0bkNKXCIsIFwiQnRuUmFua2luZ1wiLFwiQnRuQmFja1wiLCBcIkJ0blNpZ25cIiwgXCJCdG5UaW1lXCIsIFwiQnRuR2FtZVN0YXJ0XCIsXCJCdG5SZXR1cm5cIl07XHJcbiAgICAgICAgYnRuTmFtZXMuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgbGV0IGJ0bjogY2MuTm9kZSA9IGNjLmZpbmQobmFtZSwgdGhpcy5fcGFnZSk7XHJcbiAgICAgICAgICAgIGlmIChidG4pIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uQnRuQ2xpY2tIYW5kbGVyLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIGlmIChidG4ubmFtZSA9PSBcIkJ0blNldFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faWNvbl9zZXQgPSBjYy5maW5kKFwiQmFja2dyb3VuZC9pY29uX3NldFwiLCBidG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lX3NldCA9IGNjLmZpbmQoXCJmcmFtZV9zZXRcIiwgYnRuKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYnRuLm5hbWUgPT0gXCJCdG5BdWRpb1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnRuQXVkaW8gPSBidG47XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQXVkaW9CdG4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChidG4ubmFtZSA9PSBcIkJ0blNoYWtlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9idG5TaGFrZSA9IGJ0bjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdFNoYWtlQnRuKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJ0bi5uYW1lID09IFwiQnRuU2tpblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnRuU2tpbiA9IGJ0bjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYnRuLm5hbWUgPT0gXCJCdG5XZWFwb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2J0bldlYXBvbiA9IGJ0bjtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChidG4ubmFtZSA9PSBcIkJ0blNraW5BZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnRuU2tpbkFkID0gYnRuO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ0bi5hY3RpdmUgPSBjb2Nvc3ouaXNBRE9OO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChidG4ubmFtZSA9PSBcIkJ0bldlYXBvbkFkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9idG5XZWFwb25BZCA9IGJ0bjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBidG4uYWN0aXZlID0gY29jb3N6LmlzQURPTjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIOinkuiJsuWKqOeUu1xyXG4gICAgICAgIHRoaXMuX3BsYXllckFuaSA9IGNjLmZpbmQoXCJkaXRhaS9za2luX2FsbC9hbmlcIiwgdGhpcy5fcGFnZSkuZ2V0Q29tcG9uZW50KEFuaSk7XHJcbiAgICAgICAgLy8g5b2p5bim5Yqo55S7XHJcbiAgICAgICAgdGhpcy5fYW5pQ2FpZGFpID0gY2MuZmluZChcImRpdGFpL2FuaUNhaWRhaVwiLCB0aGlzLl9wYWdlKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIHRoaXMuX2FuaUNhaWRhaS5zZXRDb21wbGV0ZUxpc3RlbmVyKCgpID0+IHsgdGhpcy5fYW5pQ2FpZGFpLm5vZGUuYWN0aXZlID0gZmFsc2U7IH0pXHJcbiAgICAgICAgLy8g5Y2H57qn5Yqo55S7XHJcbiAgICAgICAgdGhpcy5fYW5pVXBncmFkZSA9IGNjLmZpbmQoXCJkaXRhaS9hbmlVcGdyYWRlXCIsIHRoaXMuX3BhZ2UpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgdGhpcy5fYW5pVXBncmFkZS5zZXRDb21wbGV0ZUxpc3RlbmVyKCgpID0+IHsgdGhpcy5fYW5pVXBncmFkZS5ub2RlLmFjdGl2ZSA9IGZhbHNlOyB9KVxyXG4gICAgICAgIC8vIOatpuWZqFxyXG4gICAgICAgIHRoaXMuX3dlYXBvblNjcm9sbCA9IGNjLmZpbmQoXCJ3ZWFwb25TY3JvbGxcIiwgdGhpcy5fcGFnZSk7XHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBjYy5maW5kKFwidmlldy9jb250ZW50XCIsIHRoaXMuX3dlYXBvblNjcm9sbCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXBvbkxpc3QucHVzaChjb250ZW50LmNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uTGlzdFtpXS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheUJ0bkVmZmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkID0gR2FtZURhdGUuV2VhcG9uW2UudGFyZ2V0Lm5hbWVdLmlkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd1dlYXBvbklkID0gaWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVXZWFwb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVdlYXBvbkZyYW1lKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2VhcG9uSW5mbyA9IGNvY29zei5kYXRhTWdyLmdldEd1bkluZm8oaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdlYXBvbkluZm8gJiYgd2VhcG9uSW5mby5TdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuY3VyV2VhcG9uID0gaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaWNvbkxheWVyID0gY2MuZmluZChcInZpZXcvaWNvbkxheWVyXCIsIHRoaXMuX3dlYXBvblNjcm9sbCk7XHJcbiAgICAgICAgaWYgKGljb25MYXllcikgaWNvbkxheWVyLnNldFBhcmVudChjb250ZW50KTtcclxuICAgICAgICB0aGlzLl9hbmlfYXJyb3cgPSBjYy5maW5kKFwidmlldy9hbmlfYXJyb3dcIiwgdGhpcy5fd2VhcG9uU2Nyb2xsKTtcclxuICAgICAgICBpZiAodGhpcy5fYW5pX2Fycm93KSB0aGlzLl9hbmlfYXJyb3cuc2V0UGFyZW50KGNvbnRlbnQpO1xyXG4gICAgICAgIC8vIOWxnuaAp1xyXG4gICAgICAgIHRoaXMuX3NraW5JbmZvX25hbWUgPSBjYy5maW5kKFwiZGl0YWkvc2tpbk5hbWVcIiwgdGhpcy5fcGFnZSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgdGhpcy5fc2tpbkluZm9feHVlZGkgPSBjYy5maW5kKFwianVlc2VzaHV4aW5nL3h1ZWRpXCIsIHRoaXMuX3BhZ2UpO1xyXG4gICAgICAgIHRoaXMuX3NraW5JbmZvX3ZhbHVlMSA9IGNjLmZpbmQoXCJqdWVzZXNodXhpbmcvdmFsdWUxXCIsIHRoaXMuX3BhZ2UpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5fc2tpbkluZm9fdmFsdWUyID0gY2MuZmluZChcImp1ZXNlc2h1eGluZy92YWx1ZTJcIiwgdGhpcy5fcGFnZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLl9za2luSW5mb19jaGFuZ2UxID0gY2MuZmluZChcImp1ZXNlc2h1eGluZy9jaGFuZ2UxXCIsIHRoaXMuX3BhZ2UpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5fc2tpbkluZm9fY2hhbmdlMiA9IGNjLmZpbmQoXCJqdWVzZXNodXhpbmcvY2hhbmdlMlwiLCB0aGlzLl9wYWdlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuX3NraW5JbmZvX2xldmVsX3BybyA9IGNjLmZpbmQoXCJqdWVzZXNodXhpbmcvbGV2ZWxQcm9ncmVzc0JhclwiLCB0aGlzLl9wYWdlKS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xyXG4gICAgICAgIHRoaXMuX3dlYXBvbkluZm9fbmFtZSA9IGNjLmZpbmQoXCJ3dXFpc2h1eGluZy93ZWFwb25OYW1lXCIsIHRoaXMuX3BhZ2UpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHRoaXMuX3dlYXBvbkluZm9fdmFsdWUwID0gY2MuZmluZChcInd1cWlzaHV4aW5nL3ZhbHVlMFwiLCB0aGlzLl9wYWdlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuX3dlYXBvbkluZm9fdmFsdWUxID0gY2MuZmluZChcInd1cWlzaHV4aW5nL3ZhbHVlMVwiLCB0aGlzLl9wYWdlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuX3dlYXBvbkluZm9fdmFsdWUyID0gY2MuZmluZChcInd1cWlzaHV4aW5nL3ZhbHVlMlwiLCB0aGlzLl9wYWdlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuX3dlYXBvbkluZm9fdmFsdWUzID0gY2MuZmluZChcInd1cWlzaHV4aW5nL3ZhbHVlM1wiLCB0aGlzLl9wYWdlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuX3dlYXBvbkluZm9fY2hhbmdlMCA9IGNjLmZpbmQoXCJ3dXFpc2h1eGluZy9jaGFuZ2UwXCIsIHRoaXMuX3BhZ2UpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5fd2VhcG9uSW5mb19jaGFuZ2UxID0gY2MuZmluZChcInd1cWlzaHV4aW5nL2NoYW5nZTFcIiwgdGhpcy5fcGFnZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLl93ZWFwb25JbmZvX2NoYW5nZTIgPSBjYy5maW5kKFwid3VxaXNodXhpbmcvY2hhbmdlMlwiLCB0aGlzLl9wYWdlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuX3dlYXBvbkluZm9fY2hhbmdlMyA9IGNjLmZpbmQoXCJ3dXFpc2h1eGluZy9jaGFuZ2UzXCIsIHRoaXMuX3BhZ2UpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5fd2VhcG9uSW5mb19sZXZlbF9wcm8gPSBjYy5maW5kKFwid3VxaXNodXhpbmcvbGV2ZWxQcm9ncmVzc0JhclwiLCB0aGlzLl9wYWdlKS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xyXG5cclxuICAgICAgICBsZXQgY29pbkxhYmVsOiBjYy5Ob2RlID0gY2MuZmluZChcIkNvaW5MYWJlbFwiLCB0aGlzLl9wYWdlKTtcclxuICAgICAgICBsZXQganN0eHRfcmFuayA6IGNjLk5vZGUgPSBjYy5maW5kKFwianVlc2VzaHV4aW5nL3R4dF9yYW5rXCIsIHRoaXMuX3BhZ2UpO1xyXG4gICAgICAgIGxldCBqc2xldmVsUHJvZ3Jlc3NCYXIgOiBjYy5Ob2RlID0gY2MuZmluZChcImp1ZXNlc2h1eGluZy9sZXZlbFByb2dyZXNzQmFyXCIsIHRoaXMuX3BhZ2UpO1xyXG4gICAgICAgIGxldCB3cHR4dF9yYW5rIDogY2MuTm9kZSA9IGNjLmZpbmQoXCJ3dXFpc2h1eGluZy90eHRfcmFua1wiLCB0aGlzLl9wYWdlKTtcclxuICAgICAgICBsZXQgd3BsZXZlbFByb2dyZXNzQmFyIDogY2MuTm9kZSA9IGNjLmZpbmQoXCJ3dXFpc2h1eGluZy9sZXZlbFByb2dyZXNzQmFyXCIsIHRoaXMuX3BhZ2UpO1xyXG4gICAgICAgIGxldCB0aWxpTm9kZSA6IGNjLk5vZGUgPSBjYy5maW5kKFwiQ29pbkxhYmVsM1wiLHRoaXMuX3BhZ2UpO1xyXG4gICAgICAgIGlmKENvbnN0YW50LmlzRW5kbGVzcyl7ICAgIC8v5Yik5pat5piv5ZCm5Li65peg5bC95qih5byPXHJcbiAgICAgICAgICAgIGNvaW5MYWJlbC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAganN0eHRfcmFuay5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAganNsZXZlbFByb2dyZXNzQmFyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB3cHR4dF9yYW5rLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB3cGxldmVsUHJvZ3Jlc3NCYXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRpbGlOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvaW5MYWJlbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBqc3R4dF9yYW5rLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGpzbGV2ZWxQcm9ncmVzc0Jhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB3cHR4dF9yYW5rLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHdwbGV2ZWxQcm9ncmVzc0Jhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aWxpTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKENvbnN0YW50LmlzRW5kbGVzcyl7XHJcbiAgICAgICAgICAgIGxldCBsYXN0UGh5Y2ljYWxUaW1lOiBzdHJpbmcgPSBjb2Nvc3ouZGF0YU1nci5MYXN0UGh5Y2ljYWxUaW1lO1xyXG4gICAgICAgICAgICBpZiAobmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKSAhPSBsYXN0UGh5Y2ljYWxUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5QaHlzaWNhbENvdW50ID0gNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jYW5HZXRCb251cygpIHtcclxuICAgICAgICByZXR1cm4gKG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCkgIT0gY29jb3N6LmRhdGFNZ3IuTGFzdERhaWx5Qm9udXNUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hbmlFZmZlY3QodHlwZTogMSB8IDIpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAxOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYW5pVXBncmFkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaVVwZ3JhZGUubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaVVwZ3JhZGUuc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheUVmZmVjdChcInVpX3VwZ3JhZGVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDI6IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hbmlDYWlkYWkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmlDYWlkYWkubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaUNhaWRhaS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5RWZmZWN0KFwidWlfY2FpZGFpXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uT3BlbigpIHtcclxuICAgICAgICBjYy5sb2coXCJob21lIG9wZW4gIVwiKTtcclxuICAgICAgICAvLyDkuIrmiqXmuLjmiI/pppbpobVcclxuICAgICAgICB1dGlscy51bWFFdmVudChcImdhbWVob21lXCIpO1xyXG4gICAgICAgIHV0aWxzLlNlbmRFdmVudChcIumhtemdoi3pppbpobVcIik7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlUGxheWVyKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlV2VhcG9uKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlV2VhcG9uRnJhbWUoKTtcclxuICAgICAgICAvLyDlub/lkYpcclxuICAgICAgICB1dGlscy5zaG93WXpSZWFsTmFtZUF1dGhQYW5lbCgpO1xyXG4gICAgICAgIHV0aWxzLnNob3dQcml2YWN5UGFuZWwoeyBncm91cDogXCJkZWZhdWx0XCIsIHBhcmVudDogdGhpcy5fcGFnZSB9KVxyXG4gICAgICAgIHV0aWxzLnJlZ2lzdGVyU2VydmVySW5pdEV2ZW50KCgpID0+IHtcclxuICAgICAgICAgICAgLy8g6aqM6K+B5pyN5Yqh5Zmo6YWN572u5Li66Ieq5Yqo5by5562+5Yiw77yM5bm25LiU5b2T5YmN5Y+v5Lul562+5YiwXHJcbiAgICAgICAgICAgIGlmICh1dGlscy5jaGVja0F1dG9TaWduKCkgJiYgdGhpcy5fY2FuR2V0Qm9udXMoKSkge1xyXG4gICAgICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYW5lbChQYW5lbE5hbWUuVUlTaWduUGFuZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0FkKCk7XHJcbiAgICAgICAgfSwgdGhpcylcclxuXHJcbiAgICAgICAgY2MuZ2FtZS5vbihDb25zdGFudC5FX0dBTUVfTE9HSUMsIHRoaXMuX29uR2FtZU1lc3NhZ2VIYW5kbGVyLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DbG9zZSgpIHtcclxuICAgICAgICBjYy5nYW1lLnRhcmdldE9mZih0aGlzKTtcclxuICAgICAgICB1dGlscy5oaWRlVml2b0dhbWVQb3J0YWxXaWRnZXQoKTtcclxuICAgICAgICB1dGlscy5oaWRlT3Bwb0dhbWVEcmF3ZXJBZFdpZGdldCgpO1xyXG4gICAgICAgIHV0aWxzLmFkTWFuYWdlci5oaWRlQmxvY2tBZCgpO1xyXG4gICAgICAgIHV0aWxzLmFkTWFuYWdlci5oaWRlTmF0aXZlVHJ5R2FtZVdpZGdldCgpO1xyXG4gICAgICAgIHV0aWxzLmFkTWFuYWdlci5IaWRlU2luZ2xlTmF0aXZlQWQoKTtcclxuICAgICAgICBpZiAoUGxhdFV0aWxzLklzV2VjaGF0KSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmFkTWFuYWdlci5oaWRlQ3VzdG9tQWQoeyBsb2NhdGlvbjogMSB9KTtcclxuICAgICAgICAgICAgdXRpbHMuYWRNYW5hZ2VyLmhpZGVDdXN0b21BZCh7IGxvY2F0aW9uOiAyIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzVklWTykge1xyXG4gICAgICAgICAgICB1dGlscy5hZE1hbmFnZXIuaGlkZUN1c3RvbUFkKHsgbG9jYXRpb246IEJhbm5lckxvY2F0aW9uLkhvbWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzaG93QWQoKSB7XHJcbiAgICAgICAgaWYgKGNvY29zei5pc1Nob3dBZCkge1xyXG4gICAgICAgICAgICBpZiAoUGxhdFV0aWxzLklzV2VjaGF0KSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5hZE1hbmFnZXIuSGlkZUJhbm5lcihCYW5uZXJMb2NhdGlvbi5Ib21lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmFkTWFuYWdlci5TaG93QmFubmVyKEJhbm5lckxvY2F0aW9uLkhvbWUsIHsgd2lkdGg6IDAuMSwgYm90dG9tOiAxIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOWOn+eUn+W5v+WRilxyXG4gICAgICAgICAgICBpZiAoUGxhdFV0aWxzLklzV2VjaGF0KSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5hZE1hbmFnZXIuc2hvd0N1c3RvbUFkKHsgbG9jYXRpb246IDEgfSk7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5hZE1hbmFnZXIuc2hvd0N1c3RvbUFkKHsgbG9jYXRpb246IDIgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzVklWTykge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuYWRNYW5hZ2VyLnNob3dDdXN0b21BZCh7IGxvY2F0aW9uOiBCYW5uZXJMb2NhdGlvbi5Ib21lIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHV0aWxzLmFkTWFuYWdlci5zaG93TmF0aXZlVHJ5R2FtZVdpZGdldCh7IHJpZ2h0OiA1MCwgdG9wOiA4MDAsIHNjYWxlOiAxLCBwYXJlbnQ6IHRoaXMuX3BhZ2UgfSk7XHJcbiAgICAgICAgICAgIHV0aWxzLmFkTWFuYWdlci5TaG93U2luZ2xlTmF0aXZlQWQoe30pO1xyXG4gICAgICAgICAgICB1dGlscy5hZE1hbmFnZXIuc2hvd0Jsb2NrQWQoeyByaWdodDogNTAsIHRvcDogNTAwLCBzaG93TnVtOiAxIH0pO1xyXG5cclxuICAgICAgICAgICAgdXRpbHMuc2hvd01vcmVHYW1lc1dpZGdldCh7IGdyb3VwOiAnZGVmYXVsdCcsIHNjYWxlOiAxLCBib3R0b206IDMwMCwgbGVmdDogNTAsIHBhcmVudDogdGhpcy5fcGFnZSwgbG9jYXRpb246IEJhbm5lckxvY2F0aW9uLkhvbWUgfSk7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dUcnlHYW1lc1dpZGdldCh7IGdyb3VwOiAnZGVmYXVsdCcsIHNjYWxlOiAxLCBib3R0b206IDM1MCwgcmlnaHQ6IDUwLCBwYXJlbnQ6IHRoaXMuX3BhZ2UsIGxvY2F0aW9uOiBCYW5uZXJMb2NhdGlvbi5Ib21lIH0pO1xyXG4gICAgICAgICAgICB1dGlscy5zaG93Vml2b0dhbWVQb3J0YWxXaWRnZXQoeyB0b3A6IDUwMCwgbG9jYXRpb246IEJhbm5lckxvY2F0aW9uLkhvbWUgfSk7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dPcHBvR2FtZURyYXdlckFkV2lkZ2V0KHsgdG9wOiA1MDAsIGxvY2F0aW9uOiBCYW5uZXJMb2NhdGlvbi5Ib21lIH0pO1xyXG4gICAgICAgICAgICB1dGlscy5zaG93Q3JlYXRlU2hvcnRjdXRXaWRnZXQobnVsbCwgeyBncm91cDogJ2RlZmF1bHQnLCBzY2FsZTogMSwgbGVmdDogMCwgdG9wOiA1MDAsIHBhcmVudDogdGhpcy5fcGFnZSB9KVxyXG4gICAgICAgICAgICB1dGlscy5zaG93UHJpdmFjeVdpZGdldCh7IGdyb3VwOiBcImRlZmF1bHRcIiwgdG9wOiAwLCBsZWZ0OiAwLCBwYXJlbnQ6IHRoaXMuX3BhZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJQcml2YWN5V2lkZ2V0XCIpLCBjb2xvcjogY2MuQ29sb3IuQkxBQ0sgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25HYW1lTWVzc2FnZUhhbmRsZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0YW50LkVfRmx5X0NvaW46IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZseUNvaW5zKGV2ZW50Lmljb25OYW1lLCBldmVudC5mcmFtZU5vZGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RhbnQuRV9DSl9TS0lOOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93U2tpbklkID0gY29jb3N6LmRhdGFNZ3IuQ3VyU2tpbklkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlUGxheWVyKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIENvbnN0YW50LkVfQ0pfV2VhcG9uOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93V2VhcG9uSWQgPSBjb2Nvc3ouZGF0YU1nci5jdXJXZWFwb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVXZWFwb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVdlYXBvbkZyYW1lKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9vbkJ0bkNsaWNrSGFuZGxlcihldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGF3YWl0IGNvY29zei5hdWRpb01nci5wbGF5QnRuRWZmZWN0KCkuY2F0Y2goKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChldmVudC50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQnRuR2FtZVN0YXJ0XCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljayBCdG5HYW1lU3RhcnQnKTtcclxuICAgICAgICAgICAgICAgIGlmKENvbnN0YW50LmlzRW5kbGVzcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29jb3N6LmRhdGFNZ3IuUGh5c2ljYWxDb3VudCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5QaHlzaWNhbENvdW50IC09IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkxhc3RQaHljaWNhbFRpbWUgPSBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGlsaU5vZGU6IGNjLk5vZGUgPSBjYy5maW5kKFwiQ29pbkxhYmVsM1wiLCB0aGlzLl9wYWdlKS5nZXRDaGlsZEJ5TmFtZSgnaWNvbl9qaW5iaScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzaE5vZGUgOiBjYy5Ob2RlID0gY2MuZmluZChcIm1lc2hcIiwgdGhpcy5fcGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc2hOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3B5dGlsaSA9IGNjLmluc3RhbnRpYXRlKHRpbGlOb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29weXRpbGkucGFyZW50ID0gdGhpcy5fcGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZyb21Qb3MgPSB0aGlzLl9wYWdlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRpbGlOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29weXRpbGkuc2V0UG9zaXRpb24oZnJvbVBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZXN0UG9zID0gbmV3IGNjLlZlYzIoZXZlbnQudGFyZ2V0LmdldFBvc2l0aW9uKCkueCxldmVudC50YXJnZXQuZ2V0UG9zaXRpb24oKS55KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJlemllcjEgPSBuZXcgY2MuVmVjMihjb3B5dGlsaS5wb3NpdGlvbi54ICsgMzUwICwgY29weXRpbGkucG9zaXRpb24ueSArIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiZXppZXIyID0gbmV3IGNjLlZlYzIoY29weXRpbGkucG9zaXRpb24ueCArIDU1MCAsIGNvcHl0aWxpLnBvc2l0aW9uLnkgKyA1MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNvcHl0aWxpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJlemllclRvKDAuOTgsYmV6aWVyMSxiZXppZXIyLGRlc3RQb3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29jb3N6LmdhbWVNb2RlID0gNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5nYW1lU3RhcnQoY29jb3N6LmdldExldmVsSWQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzaE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTXNnLlNob3coaTE4bi50KFwi5b2T5YmN5L2T5Yqb5LiN6LazXCIpKTsvL+aBreWWnOiOt+W+l+aWsOinkuiJslxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtZXNoTm9kZSA6IGNjLk5vZGUgPSBjYy5maW5kKFwibWVzaFwiLCB0aGlzLl9wYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBtZXNoTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvY29zei5nYW1lTWdyLmdhbWVTdGFydChjb2Nvc3ouZ2V0TGV2ZWxJZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBtZXNoTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIkJ0bkxlZnRcIjoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd1NraW5JZC0tO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Nob3dTa2luSWQgPCAwKSB0aGlzLl9zaG93U2tpbklkID0gMTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVQbGF5ZXIoKTtcclxuICAgICAgICAgICAgICAgIGxldCBza2luSW5mbyA9IGNvY29zei5kYXRhTWdyLmdldFNraW5JbmZvKHRoaXMuX3Nob3dTa2luSWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNraW5JbmZvICYmIHNraW5JbmZvLlN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJTa2luSWQgPSB0aGlzLl9zaG93U2tpbklkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIkJ0blJpZ2h0XCI6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dTa2luSWQrKztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zaG93U2tpbklkID4gMTEpIHRoaXMuX3Nob3dTa2luSWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlUGxheWVyKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2tpbkluZm8gPSBjb2Nvc3ouZGF0YU1nci5nZXRTa2luSW5mbyh0aGlzLl9zaG93U2tpbklkKTtcclxuICAgICAgICAgICAgICAgIGlmIChza2luSW5mbyAmJiBza2luSW5mby5TdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyU2tpbklkID0gdGhpcy5fc2hvd1NraW5JZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJCdG5Ta2luXCI6IHtcclxuICAgICAgICAgICAgICAgIC8vIOi0reS5sFxyXG4gICAgICAgICAgICAgICAgbGV0IHNob3dTa2luSW5mbyA9IGNvY29zei5kYXRhTWdyLmdldFNraW5JbmZvKHRoaXMuX3Nob3dTa2luSWQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNob3dTS2luS2V5ID0gYCR7dGhpcy5fc2hvd1NraW5JZCArIDF9YDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNob3dTa2luSW5mbyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvd1NraW5JbmZvLlN0YXRlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDph5HluIFcclxuICAgICAgICAgICAgICAgICAgICBpZiAoR2FtZURhdGUuU2tpbk1lc3Nbc2hvd1NLaW5LZXldLnByaWNlVHlwZSA9PSBQcmljZVR5cGUuR29sZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50ID49IEdhbWVEYXRlLlNraW5NZXNzW3Nob3dTS2luS2V5XS5wcmljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50IC09IEdhbWVEYXRlLlNraW5NZXNzW3Nob3dTS2luS2V5XS5wcmljZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1zZy5TaG93KGkxOG4udChcIm1zZy5neGhkeGpzXCIpKTsvL+aBreWWnOiOt+W+l+aWsOinkuiJslxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyU2tpbklkID0gdGhpcy5fc2hvd1NraW5JZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVBsYXllcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYW5pRWZmZWN0KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29pblBhbmVsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyDpkrvnn7NcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChHYW1lRGF0ZS5Ta2luTWVzc1tzaG93U0tpbktleV0ucHJpY2VUeXBlID09IFByaWNlVHlwZS5EaWFtb25kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5EaWFtb25kQ291bnQgPj0gR2FtZURhdGUuU2tpbk1lc3Nbc2hvd1NLaW5LZXldLnByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5EaWFtb25kQ291bnQgLT0gR2FtZURhdGUuU2tpbk1lc3Nbc2hvd1NLaW5LZXldLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTXNnLlNob3coaTE4bi50KFwibXNnLmd4aGR4anNcIikpOy8v5oGt5Zac6I635b6X5paw6KeS6ImyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJTa2luSWQgPSB0aGlzLl9zaG93U2tpbklkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlUGxheWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmlFZmZlY3QoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2luUGFuZWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6L2s55uY5aWW5YqxXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoR2FtZURhdGUuU2tpbk1lc3Nbc2hvd1NLaW5LZXldLnByaWNlVHlwZSA9PSBQcmljZVR5cGUuWmh1YW5QYW5SZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYW5lbChQYW5lbE5hbWUuVUlUdXJudGFibGVQYW5lbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZighQ29uc3RhbnQuaXNFbmRsZXNzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Y2H57qnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG93U2tpbkluZm8uTGV2ZWwgPCA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50ID49IENvbnN0YW50LnNraW5MZXZlbFByaWNlQXJyW3Nob3dTa2luSW5mby5MZXZlbF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5Db2luQ291bnQgLT0gQ29uc3RhbnQuc2tpbkxldmVsUHJpY2VBcnJbc2hvd1NraW5JbmZvLkxldmVsXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93U2tpbkluZm8uTGV2ZWwrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5zZXRTa2luSW5mbyhzaG93U2tpbkluZm8uSWQsIHNob3dTa2luSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlUGxheWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYW5pRWZmZWN0KDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2luUGFuZWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiQnRuV2VhcG9uXCI6IHtcclxuICAgICAgICAgICAgICAgIC8vIOi0reS5sFxyXG4gICAgICAgICAgICAgICAgbGV0IHNob3dXZWFwb25JbmZvID0gY29jb3N6LmRhdGFNZ3IuZ2V0R3VuSW5mbyh0aGlzLl9zaG93V2VhcG9uSWQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNob3dXZWFwb25LZXkgPSBXZWFwb24uV2VhcG9uTmFtZVt0aGlzLl9zaG93V2VhcG9uSWRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNob3dXZWFwb25JbmZvLlN0YXRlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDph5HluIFcclxuICAgICAgICAgICAgICAgICAgICBpZiAoR2FtZURhdGUuV2VhcG9uW3Nob3dXZWFwb25LZXldLnByaWNlVHlwZSA9PSBQcmljZVR5cGUuR29sZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50ID49IEdhbWVEYXRlLldlYXBvbltzaG93V2VhcG9uS2V5XS5wcmljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50IC09IEdhbWVEYXRlLldlYXBvbltzaG93V2VhcG9uS2V5XS5wcmljZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1zZy5TaG93KGkxOG4udChcIm1zZy5neGhkeHdxXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLmN1cldlYXBvbiA9IHRoaXMuX3Nob3dXZWFwb25JZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVdlYXBvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlV2VhcG9uRnJhbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaUVmZmVjdCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvaW5QYW5lbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6ZK755+zXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoR2FtZURhdGUuV2VhcG9uW3Nob3dXZWFwb25LZXldLnByaWNlVHlwZSA9PSBQcmljZVR5cGUuRGlhbW9uZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuRGlhbW9uZENvdW50ID49IEdhbWVEYXRlLldlYXBvbltzaG93V2VhcG9uS2V5XS5wcmljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuRGlhbW9uZENvdW50IC09IEdhbWVEYXRlLldlYXBvbltzaG93V2VhcG9uS2V5XS5wcmljZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1zZy5TaG93KGkxOG4udChcIm1zZy5neGhkeHdxXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLmN1cldlYXBvbiA9IHRoaXMuX3Nob3dXZWFwb25JZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVdlYXBvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlV2VhcG9uRnJhbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaUVmZmVjdCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvaW5QYW5lbCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyDovaznm5jlpZblirFcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChHYW1lRGF0ZS5XZWFwb25bc2hvd1dlYXBvbktleV0ucHJpY2VUeXBlID09IFByaWNlVHlwZS5aaHVhblBhblJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhbmVsKFBhbmVsTmFtZS5VSVR1cm50YWJsZVBhbmVsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFDb25zdGFudC5pc0VuZGxlc3Mpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDljYfnuqdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dXZWFwb25JbmZvLkxldmVsIDwgMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkNvaW5Db3VudCA+PSBDb25zdGFudC53ZWFwb25MZXZlbFByaWNlQXJyW3Nob3dXZWFwb25JbmZvLkxldmVsXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkNvaW5Db3VudCAtPSBDb25zdGFudC53ZWFwb25MZXZlbFByaWNlQXJyW3Nob3dXZWFwb25JbmZvLkxldmVsXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93V2VhcG9uSW5mby5MZXZlbCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLnNldEd1bkluZm8oc2hvd1dlYXBvbkluZm8uSWQsIHNob3dXZWFwb25JbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVXZWFwb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVXZWFwb25GcmFtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaUVmZmVjdCgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29pblBhbmVsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIkJ0blNraW5BZFwiOiB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5TZW5kRXZlbnQoXCLop4bpopEt55qu6IKk6Kej6ZSBLeaSreaUvlwiKVxyXG4gICAgICAgICAgICAgICAgY29jb3N6LndhdGNoQUQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOinhumikeaIkOWKnyBcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5TZW5kRXZlbnQoXCLop4bpopEt55qu6IKk6Kej6ZSBLeaIkOWKn1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzaG93U2tpbkluZm8gPSBjb2Nvc3ouZGF0YU1nci5nZXRTa2luSW5mbyh0aGlzLl9zaG93U2tpbklkKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2hvd1NraW5LZXk6IHN0cmluZyA9IGAke3RoaXMuX3Nob3dTa2luSWQgKyAxfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhc2hvd1NraW5JbmZvICYmICEhR2FtZURhdGUuU2tpbk1lc3Nbc2hvd1NraW5LZXldICYmICEhR2FtZURhdGUuU2tpbk1lc3Nbc2hvd1NraW5LZXldLnZpZGVvQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NraW5JbmZvLlZpZGVvQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3Iuc2V0U2tpbkluZm8odGhpcy5fc2hvd1NraW5JZCwgc2hvd1NraW5JbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dTa2luSW5mby5WaWRlb0NvdW50ID49IEdhbWVEYXRlLlNraW5NZXNzW3Nob3dTa2luS2V5XS52aWRlb0NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNc2cuU2hvdyhpMThuLnQoXCJtc2cuZ3hoZHhqc1wiKSk7Ly/mga3llpzojrflvpfmlrDop5LoibJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkN1clNraW5JZCA9IHRoaXMuX3Nob3dTa2luSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmlFZmZlY3QoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNc2cuU2hvdyhpMThuLnQoXCJtc2cuanN3Y1wiKSArIHNob3dTa2luSW5mby5WaWRlb0NvdW50ICsgXCIvXCIgKyBHYW1lRGF0ZS5Ta2luTWVzc1tzaG93U2tpbktleV0udmlkZW9Db3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pu05paw546p5a625L+h5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVBsYXllcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDop4bpopHlpLHotKVcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5TZW5kRXZlbnQoXCLop4bpopEt55qu6IKk6Kej6ZSBLeWksei0pVwiKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiQnRuV2VhcG9uQWRcIjoge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuU2VuZEV2ZW50KFwi6KeG6aKRLeatpuWZqOino+mUgS3mkq3mlL5cIilcclxuICAgICAgICAgICAgICAgIGNvY29zei53YXRjaEFEKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDop4bpopHmiJDlip8gXHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuU2VuZEV2ZW50KFwi6KeG6aKRLeatpuWZqOino+mUgS3miJDlip9cIilcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2hvd1dlYXBvbkluZm8gPSBjb2Nvc3ouZGF0YU1nci5nZXRHdW5JbmZvKHRoaXMuX3Nob3dXZWFwb25JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNob3dXZWFwb25LZXk6IHN0cmluZyA9IFdlYXBvbi5XZWFwb25OYW1lW3RoaXMuX3Nob3dXZWFwb25JZF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhc2hvd1dlYXBvbkluZm8gJiYgISFHYW1lRGF0ZS5XZWFwb25bc2hvd1dlYXBvbktleV0gJiYgISFHYW1lRGF0ZS5XZWFwb25bc2hvd1dlYXBvbktleV0udmlkZW9Db3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93V2VhcG9uSW5mby5WaWRlb0NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLnNldEd1bkluZm8odGhpcy5fc2hvd1dlYXBvbklkLCBzaG93V2VhcG9uSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG93V2VhcG9uSW5mby5WaWRlb0NvdW50ID49IEdhbWVEYXRlLldlYXBvbltzaG93V2VhcG9uS2V5XS52aWRlb0NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNc2cuU2hvdyhpMThuLnQoXCJtc2cuZ3hoZHh3cVwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5jdXJXZWFwb24gPSB0aGlzLl9zaG93V2VhcG9uSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmlFZmZlY3QoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNc2cuU2hvdyhpMThuLnQoXCJtc2cuanN3Y1wiKSArIHNob3dXZWFwb25JbmZvLlZpZGVvQ291bnQgKyBcIi9cIiArIEdhbWVEYXRlLldlYXBvbltzaG93V2VhcG9uS2V5XS52aWRlb0NvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmm7TmlrDmrablmajkv6Hmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlV2VhcG9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVdlYXBvbkZyYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOinhumikeWksei0pVxyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLlNlbmRFdmVudChcIuinhumikS3mrablmajop6PplIEt5aSx6LSlXCIpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJCdG5DSlwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhbmVsKFBhbmVsTmFtZS5VSVR1cm50YWJsZVBhbmVsKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJCdG5TaWduXCI6IHtcclxuICAgICAgICAgICAgICAgIGNvY29zei51aU1nci5vcGVuUGFuZWwoUGFuZWxOYW1lLlVJU2lnblBhbmVsKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5paw5aKe5o6S6KGM5qac5YWl5Y+jXHJcbiAgICAgICAgICAgIGNhc2UgXCJCdG5SYW5raW5nXCI6IHtcclxuICAgICAgICAgICAgICAgIGNvY29zei51aU1nci5vcGVuUGFuZWwoUGFuZWxOYW1lLlVJUmFua2luZ1BhbmVsKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJCdG5CYWNrXCI6IHtcclxuICAgICAgICAgICAgICAgIGNvY29zei51aU1nci5vcGVuUGFuZWwoUGFuZWxOYW1lLlVJQmFja1BhbmVsKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJCdG5UaW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIGNvY29zei51aU1nci5vcGVuUGFuZWwoUGFuZWxOYW1lLlVJVGltZVBhbmVsKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJCdG5TZXRcIjoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faWNvbl9zZXQuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lX3NldC5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHQgPSAodGhpcy5fZnJhbWVfc2V0LnNjYWxlWSA/IHRoaXMuX2ZyYW1lX3NldC5zY2FsZVkgOiAxKSAvIDI7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLl9pY29uX3NldClcclxuICAgICAgICAgICAgICAgICAgICAudG8odCwgeyBhbmdsZTogKHRoaXMuX2ZyYW1lX3NldC5zY2FsZVkgPyA5MCA6IC05MCkgfSwgeyBlYXNpbmc6IFwic2luZUluT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuX2ZyYW1lX3NldClcclxuICAgICAgICAgICAgICAgICAgICAudG8odCwgeyBzY2FsZVk6IHRoaXMuX2ZyYW1lX3NldC5zY2FsZVkgPyAwIDogMSB9LCB7IGVhc2luZzogXCJzaW5lSW5PdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIkJ0bkF1ZGlvXCI6IHtcclxuICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkF1ZGlvT24gPSAhY29jb3N6LmRhdGFNZ3IuQXVkaW9PbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUF1ZGlvQnRuKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiQnRuU2hha2VcIjoge1xyXG4gICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuU2hha2VPbiA9ICFjb2Nvc3ouZGF0YU1nci5TaGFrZU9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRTaGFrZUJ0bigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIkJ0blJldHVyblwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouc2NlbmVNZ3IubG9hZFNjZW5lKFwiR2FtZVN0YXJ0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb2Nvc3oudWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVUlHYW1lUGFnZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2hvd1NraW5JZDogbnVtYmVyID0gY29jb3N6LmRhdGFNZ3IuQ3VyU2tpbklkO1xyXG4gICAgcHJpdmF0ZSBfdXBkYXRlUGxheWVyKCkge1xyXG4gICAgICAgIGNjLmxvZyhcInNob3dTa2luSUQ6IFwiLCB0aGlzLl9zaG93U2tpbklkKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJBbmkuc2V0U2tpbkJ5SWQodGhpcy5fc2hvd1NraW5JZClcclxuICAgICAgICAvLyDlsZ7mgKdcclxuICAgICAgICAvLyDop5LoibLlkI3lrZdcclxuICAgICAgICB0aGlzLl9za2luSW5mb19uYW1lLnNwcml0ZUZyYW1lID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJwX1wiICsgKHRoaXMuX3Nob3dTa2luSWQgKyAxKSwgY2MuU3ByaXRlRnJhbWUpO1xyXG4gICAgICAgIC8vIOinkuiJsuWxnuaAp1xyXG4gICAgICAgIGxldCBjdXJTa2luSW5mbyA9IGNvY29zei5kYXRhTWdyLmdldFNraW5JbmZvKGNvY29zei5kYXRhTWdyLkN1clNraW5JZCk7XHJcbiAgICAgICAgbGV0IHNob3dTa2luSW5mbyA9IGNvY29zei5kYXRhTWdyLmdldFNraW5JbmZvKHRoaXMuX3Nob3dTa2luSWQpO1xyXG4gICAgICAgIGxldCBjdXJMZXZlbCA9IGN1clNraW5JbmZvLkxldmVsO1xyXG4gICAgICAgIGxldCBzaG93TGV2ZWwgPSBzaG93U2tpbkluZm8uTGV2ZWw7XHJcbiAgICAgICAgbGV0IGN1clNraW5LZXkgPSBgJHtjb2Nvc3ouZGF0YU1nci5DdXJTa2luSWQgKyAxfWA7XHJcbiAgICAgICAgbGV0IHNob3dTS2luS2V5ID0gYCR7dGhpcy5fc2hvd1NraW5JZCArIDF9YDtcclxuICAgICAgICAvLyDooYDmu7RcclxuICAgICAgICB0aGlzLl9za2luSW5mb194dWVkaS5jaGlsZHJlbi5mb3JFYWNoKCh2LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpIDwgR2FtZURhdGUuU2tpbk1lc3Nbc2hvd1NLaW5LZXldLnh1ZWRpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9za2luSW5mb194dWVkaS5jaGlsZHJlbltpXS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2tpbkluZm9feHVlZGkuY2hpbGRyZW5baV0ub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIOaUu+WHu+WKm1xyXG4gICAgICAgIHRoaXMuX3NraW5JbmZvX3ZhbHVlMS5zdHJpbmcgPSBgJHtHYW1lRGF0ZS5Ta2luTWVzc1tzaG93U0tpbktleV0uYXRrW3Nob3dMZXZlbF19YDtcclxuICAgICAgICAvLyDnp7vliqhcclxuICAgICAgICB0aGlzLl9za2luSW5mb192YWx1ZTIuc3RyaW5nID0gYCR7R2FtZURhdGUuU2tpbk1lc3Nbc2hvd1NLaW5LZXldLnNwZWVkW3Nob3dMZXZlbF19YDtcclxuICAgICAgICAvLyDmlLvlh7vlj5jljJZcclxuICAgICAgICBsZXQgbnVtMSA9IEdhbWVEYXRlLlNraW5NZXNzW3Nob3dTS2luS2V5XS5hdGtbc2hvd0xldmVsXSAtIEdhbWVEYXRlLlNraW5NZXNzW2N1clNraW5LZXldLmF0a1tjdXJMZXZlbF07XHJcbiAgICAgICAgaWYgKG51bTEgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NraW5JbmZvX2NoYW5nZTEuc3RyaW5nID0gXCJcIiArIG51bTE7XHJcbiAgICAgICAgICAgIHRoaXMuX3NraW5JbmZvX2NoYW5nZTEubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fc2tpbkluZm9fY2hhbmdlMS5ub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3NraW5JbmZvX2NoYW5nZTEubm9kZS5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICAgICAgdGhpcy5fc2tpbkluZm9fY2hhbmdlMS5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG51bTEgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9za2luSW5mb19jaGFuZ2UxLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9za2luSW5mb19jaGFuZ2UxLnN0cmluZyA9IFwiK1wiICsgbnVtMTtcclxuICAgICAgICAgICAgdGhpcy5fc2tpbkluZm9fY2hhbmdlMS5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3NraW5JbmZvX2NoYW5nZTEubm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fc2tpbkluZm9fY2hhbmdlMS5ub2RlLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XHJcbiAgICAgICAgICAgIHRoaXMuX3NraW5JbmZvX2NoYW5nZTEubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDnp7vliqjlj5jljJYgXHJcbiAgICAgICAgbGV0IG51bTIgPSBHYW1lRGF0ZS5Ta2luTWVzc1tzaG93U0tpbktleV0uc3BlZWRbc2hvd0xldmVsXSAtIEdhbWVEYXRlLlNraW5NZXNzW2N1clNraW5LZXldLnNwZWVkW2N1ckxldmVsXTtcclxuICAgICAgICBpZiAobnVtMiA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fc2tpbkluZm9fY2hhbmdlMi5zdHJpbmcgPSBcIlwiICsgbnVtMjtcclxuICAgICAgICAgICAgdGhpcy5fc2tpbkluZm9fY2hhbmdlMi5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9za2luSW5mb19jaGFuZ2UyLm5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fc2tpbkluZm9fY2hhbmdlMi5ub2RlLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgICAgICB0aGlzLl9za2luSW5mb19jaGFuZ2UyLm5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtMiA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NraW5JbmZvX2NoYW5nZTIubm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NraW5JbmZvX2NoYW5nZTIuc3RyaW5nID0gXCIrXCIgKyBudW0yO1xyXG4gICAgICAgICAgICB0aGlzLl9za2luSW5mb19jaGFuZ2UyLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fc2tpbkluZm9fY2hhbmdlMi5ub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9za2luSW5mb19jaGFuZ2UyLm5vZGUuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcclxuICAgICAgICAgICAgdGhpcy5fc2tpbkluZm9fY2hhbmdlMi5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOetiee6p1xyXG4gICAgICAgIHRoaXMuX3NraW5JbmZvX2xldmVsX3Byby5wcm9ncmVzcyA9IHNob3dMZXZlbCAvIDY7XHJcbiAgICAgICAgLy8g5oyJ6ZKu5Y+Y5YyWXHJcbiAgICAgICAgaWYgKHNob3dTa2luSW5mbykge1xyXG4gICAgICAgICAgICB0aGlzLl9idG5Ta2luLmNoaWxkcmVuLmZvckVhY2godiA9PiB2LmFjdGl2ZSA9IGZhbHNlKTtcclxuICAgICAgICAgICAgbGV0IGJ0bl9odWFuZyA9IHRoaXMuX2J0blNraW4uZ2V0Q2hpbGRCeU5hbWUoXCJidG5faHVhbmdcIik7XHJcbiAgICAgICAgICAgIGxldCBidG5faHVhbmdfc21hbGwgPSB0aGlzLl9idG5Ta2luLmdldENoaWxkQnlOYW1lKFwiYnRuX2h1YW5nX3NtYWxsXCIpO1xyXG4gICAgICAgICAgICBsZXQgYnRuX2hvbmcgPSB0aGlzLl9idG5Ta2luLmdldENoaWxkQnlOYW1lKFwiYnRuX2hvbmdcIik7XHJcbiAgICAgICAgICAgIGxldCB0eHRfYnV5ID0gdGhpcy5fYnRuU2tpbi5nZXRDaGlsZEJ5TmFtZShcInR4dF9idXlcIik7XHJcbiAgICAgICAgICAgIGxldCB0eHRfc2p3YyA9IHRoaXMuX2J0blNraW4uZ2V0Q2hpbGRCeU5hbWUoXCJ0eHRfc2p3Y1wiKTtcclxuICAgICAgICAgICAgbGV0IHR4dF91cGdyYWRlID0gdGhpcy5fYnRuU2tpbi5nZXRDaGlsZEJ5TmFtZShcInR4dF91cGdyYWRlXCIpO1xyXG4gICAgICAgICAgICBsZXQgdHh0X3pwamwgPSB0aGlzLl9idG5Ta2luLmdldENoaWxkQnlOYW1lKFwidHh0X3pwamxcIik7XHJcbiAgICAgICAgICAgIGxldCBpY29uX2ppbmJpID0gdGhpcy5fYnRuU2tpbi5nZXRDaGlsZEJ5TmFtZShcImljb25famluYmlcIik7XHJcbiAgICAgICAgICAgIGxldCBpY29uX3p1YW5zaGkgPSB0aGlzLl9idG5Ta2luLmdldENoaWxkQnlOYW1lKFwiaWNvbl96dWFuc2hpXCIpO1xyXG4gICAgICAgICAgICBsZXQgcHJpY2UgPSB0aGlzLl9idG5Ta2luLmdldENoaWxkQnlOYW1lKFwicHJpY2VcIik7XHJcbiAgICAgICAgICAgIGlmKENvbnN0YW50LmlzRW5kbGVzcyAmJiBHYW1lRGF0ZS5Ta2luTWVzc1tzaG93U0tpbktleV0ucHJpY2VUeXBlID09IFByaWNlVHlwZS5Hb2xkKXtcclxuICAgICAgICAgICAgICAgIEdhbWVEYXRlLlNraW5NZXNzW3Nob3dTS2luS2V5XS5wcmljZVR5cGUgPSBQcmljZVR5cGUuRGlhbW9uZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDotK3kubBcclxuICAgICAgICAgICAgaWYgKHNob3dTa2luSW5mby5TdGF0ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoR2FtZURhdGUuU2tpbk1lc3Nbc2hvd1NLaW5LZXldICYmIEdhbWVEYXRlLlNraW5NZXNzW3Nob3dTS2luS2V5XS52aWRlb0NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnRuU2tpbi54ID0gLTM1MDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9idG5Ta2luLndpZHRoID0gMTY5O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChidG5faHVhbmdfc21hbGwpIGJ0bl9odWFuZ19zbWFsbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOmHkeW4gVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChHYW1lRGF0ZS5Ta2luTWVzc1tzaG93U0tpbktleV0ucHJpY2VUeXBlID09IFByaWNlVHlwZS5Hb2xkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpY29uX2ppbmJpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uX2ppbmJpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uX2ppbmJpLnggPSAtNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UueCA9IC0xMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJycgKyBHYW1lRGF0ZS5Ta2luTWVzc1tzaG93U0tpbktleV0ucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6ZK755+zXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoR2FtZURhdGUuU2tpbk1lc3Nbc2hvd1NLaW5LZXldLnByaWNlVHlwZSA9PSBQcmljZVR5cGUuRGlhbW9uZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWNvbl96dWFuc2hpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uX3p1YW5zaGkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25fenVhbnNoaS54ID0gLTUwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLnggPSAtMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICcnICsgR2FtZURhdGUuU2tpbk1lc3Nbc2hvd1NLaW5LZXldLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOi9rOebmOWlluWKsVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKEdhbWVEYXRlLlNraW5NZXNzW3Nob3dTS2luS2V5XS5wcmljZVR5cGUgPT0gUHJpY2VUeXBlLlpodWFuUGFuUmV3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eHRfenBqbCkgdHh0X3pwamwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6KeG6aKR6Kej6ZSBXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5fYnRuU2tpbkFkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZpZGVvQ291bnQgPSB0aGlzLl9idG5Ta2luQWQuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0NvdW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2aWRlb0NvdW50KSB2aWRlb0NvdW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc2hvd1NraW5JbmZvLlZpZGVvQ291bnQgKyBcIi9cIiArIEdhbWVEYXRlLlNraW5NZXNzW3Nob3dTS2luS2V5XS52aWRlb0NvdW50O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLl9idG5Ta2luQWQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnRuU2tpbi54ID0gLTI1MDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9idG5Ta2luLndpZHRoID0gMjUyO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChidG5faHVhbmcpIGJ0bl9odWFuZy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOmHkeW4gVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChHYW1lRGF0ZS5Ta2luTWVzc1tzaG93U0tpbktleV0ucHJpY2VUeXBlID09IFByaWNlVHlwZS5Hb2xkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eHRfYnV5KSB0eHRfYnV5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpY29uX2ppbmJpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uX2ppbmJpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uX2ppbmJpLnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLnggPSAzMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJycgKyBHYW1lRGF0ZS5Ta2luTWVzc1tzaG93U0tpbktleV0ucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6ZK755+zXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoR2FtZURhdGUuU2tpbk1lc3Nbc2hvd1NLaW5LZXldLnByaWNlVHlwZSA9PSBQcmljZVR5cGUuRGlhbW9uZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHh0X2J1eSkgdHh0X2J1eS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWNvbl96dWFuc2hpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uX3p1YW5zaGkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25fenVhbnNoaS54ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJpY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZS54ID0gMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICcnICsgR2FtZURhdGUuU2tpbk1lc3Nbc2hvd1NLaW5LZXldLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOi9rOebmOWlluWKsVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKEdhbWVEYXRlLlNraW5NZXNzW3Nob3dTS2luS2V5XS5wcmljZVR5cGUgPT0gUHJpY2VUeXBlLlpodWFuUGFuUmV3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eHRfenBqbCkgdHh0X3pwamwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZihDb25zdGFudC5pc0VuZGxlc3MpeyAgICAvL+WIpOaWreaYr+WQpuS4uuaXoOWwveaooeW8j1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChidG5faHVhbmcpIGJ0bl9odWFuZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Y2H57qnXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dTa2luSW5mby5MZXZlbCA8IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5fYnRuU2tpbkFkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9idG5Ta2luLnggPSAtMjUwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9idG5Ta2luLndpZHRoID0gMjUyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuX2hvbmcpIGJ0bl9ob25nLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eHRfdXBncmFkZSkgdHh0X3VwZ3JhZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGljb25famluYmkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25famluYmkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25famluYmkueCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UueCA9IDMwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAnJyArIENvbnN0YW50LnNraW5MZXZlbFByaWNlQXJyW3Nob3dTa2luSW5mby5MZXZlbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mnIDlpKfnrYnnuqdcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5fYnRuU2tpbkFkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9idG5Ta2luLnggPSAtMjUwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9idG5Ta2luLndpZHRoID0gMjUyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHh0X3Nqd2MpIHR4dF9zandjLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Nob3dXZWFwb25JZDogbnVtYmVyID0gY29jb3N6LmRhdGFNZ3IuQ3VyUmFuZ2U7XHJcbiAgICBwcml2YXRlIF91cGRhdGVXZWFwb24oKSB7XHJcbiAgICAgICAgY2MubG9nKFwic2hvd1dlYXBvbklEOiBcIiwgdGhpcy5fc2hvd1dlYXBvbklkKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJBbmkuc2V0V2VhcG9uQnlJZCh0aGlzLl9zaG93V2VhcG9uSWQpO1xyXG4gICAgICAgIC8vIOatpuWZqOWQjeWtl1xyXG4gICAgICAgIHRoaXMuX3dlYXBvbkluZm9fbmFtZS5zcHJpdGVGcmFtZSA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwid19cIiArICh0aGlzLl9zaG93V2VhcG9uSWQgKyAxKSwgY2MuU3ByaXRlRnJhbWUpO1xyXG4gICAgICAgIC8vIOatpuWZqOWxnuaAp1xyXG4gICAgICAgIGxldCBjdXJXZWFwb25JbmZvID0gY29jb3N6LmRhdGFNZ3IuZ2V0R3VuSW5mbyhjb2Nvc3ouZGF0YU1nci5DdXJSYW5nZSk7XHJcbiAgICAgICAgbGV0IHNob3dXZWFwb25JbmZvID0gY29jb3N6LmRhdGFNZ3IuZ2V0R3VuSW5mbyh0aGlzLl9zaG93V2VhcG9uSWQpO1xyXG4gICAgICAgIGxldCBjdXJMZXZlbCA9IGN1cldlYXBvbkluZm8uTGV2ZWw7XHJcbiAgICAgICAgbGV0IHNob3dMZXZlbCA9IHNob3dXZWFwb25JbmZvLkxldmVsO1xyXG4gICAgICAgIGxldCBjdXJXZWFwb25LZXkgPSBXZWFwb24uV2VhcG9uTmFtZVtjb2Nvc3ouZGF0YU1nci5DdXJSYW5nZV07XHJcbiAgICAgICAgbGV0IHNob3dXZWFwb25LZXkgPSBXZWFwb24uV2VhcG9uTmFtZVt0aGlzLl9zaG93V2VhcG9uSWRdO1xyXG4gICAgICAgIC8vIOaUu+WHu+WKm1xyXG4gICAgICAgIHRoaXMuX3dlYXBvbkluZm9fdmFsdWUwLnN0cmluZyA9IGAke0dhbWVEYXRlLldlYXBvbltzaG93V2VhcG9uS2V5XS5hdGtbc2hvd0xldmVsXX1gO1xyXG4gICAgICAgIC8vIOaUu+WHu+mikeeOh1xyXG4gICAgICAgIHRoaXMuX3dlYXBvbkluZm9fdmFsdWUxLnN0cmluZyA9ICgxIC8gR2FtZURhdGUuV2VhcG9uW3Nob3dXZWFwb25LZXldLmF0a1NwZWVkW3Nob3dMZXZlbF0pLnRvRml4ZWQoMSk7XHJcbiAgICAgICAgLy8g5pS75Ye76IyD5Zu0XHJcbiAgICAgICAgdGhpcy5fd2VhcG9uSW5mb192YWx1ZTIuc3RyaW5nID0gYCR7R2FtZURhdGUuV2VhcG9uW3Nob3dXZWFwb25LZXldLmF0a1JhbmdlfWA7XHJcbiAgICAgICAgLy8g5by56I2v6YePXHJcbiAgICAgICAgdGhpcy5fd2VhcG9uSW5mb192YWx1ZTMuc3RyaW5nID0gYCR7R2FtZURhdGUuV2VhcG9uW3Nob3dXZWFwb25LZXldLmJ1bGxldFRvdGFsW3Nob3dMZXZlbF19YDtcclxuICAgICAgICAvLyDlj5jljJZcclxuICAgICAgICBsZXQgbnVtMCA9IEdhbWVEYXRlLldlYXBvbltzaG93V2VhcG9uS2V5XS5hdGtbc2hvd0xldmVsXSAtIEdhbWVEYXRlLldlYXBvbltjdXJXZWFwb25LZXldLmF0a1tjdXJMZXZlbF07XHJcbiAgICAgICAgbGV0IG51bTEgPSAxIC8gR2FtZURhdGUuV2VhcG9uW3Nob3dXZWFwb25LZXldLmF0a1NwZWVkW3Nob3dMZXZlbF0gLSAxIC8gR2FtZURhdGUuV2VhcG9uW2N1cldlYXBvbktleV0uYXRrU3BlZWRbY3VyTGV2ZWxdO1xyXG4gICAgICAgIGxldCBudW0yID0gR2FtZURhdGUuV2VhcG9uW3Nob3dXZWFwb25LZXldLmF0a1JhbmdlIC0gR2FtZURhdGUuV2VhcG9uW2N1cldlYXBvbktleV0uYXRrUmFuZ2U7XHJcbiAgICAgICAgbGV0IG51bTMgPSBHYW1lRGF0ZS5XZWFwb25bc2hvd1dlYXBvbktleV0uYnVsbGV0VG90YWxbc2hvd0xldmVsXSAtIEdhbWVEYXRlLldlYXBvbltjdXJXZWFwb25LZXldLmJ1bGxldFRvdGFsW2N1ckxldmVsXTtcclxuICAgICAgICAvLyDmlLvlh7vlipvlj5jljJZcclxuICAgICAgICBpZiAobnVtMCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uSW5mb19jaGFuZ2UwLnN0cmluZyA9IFwiXCIgKyBudW0wO1xyXG4gICAgICAgICAgICB0aGlzLl93ZWFwb25JbmZvX2NoYW5nZTAubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uSW5mb19jaGFuZ2UwLm5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uSW5mb19jaGFuZ2UwLm5vZGUuY29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXBvbkluZm9fY2hhbmdlMC5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW0wID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uSW5mb19jaGFuZ2UwLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uSW5mb19jaGFuZ2UwLnN0cmluZyA9IFwiK1wiICsgbnVtMDtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uSW5mb19jaGFuZ2UwLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uSW5mb19jaGFuZ2UwLm5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXBvbkluZm9fY2hhbmdlMC5ub2RlLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXBvbkluZm9fY2hhbmdlMC5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOaUu+WHu+mikeeOh+WPmOWMllxyXG4gICAgICAgIGlmIChudW0xIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl93ZWFwb25JbmZvX2NoYW5nZTEuc3RyaW5nID0gXCJcIiArIG51bTE7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXBvbkluZm9fY2hhbmdlMS5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl93ZWFwb25JbmZvX2NoYW5nZTEubm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl93ZWFwb25JbmZvX2NoYW5nZTEubm9kZS5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uSW5mb19jaGFuZ2UxLm5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB9IGVsc2UgaWYgKG51bTEgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl93ZWFwb25JbmZvX2NoYW5nZTEubm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl93ZWFwb25JbmZvX2NoYW5nZTEuc3RyaW5nID0gXCIrXCIgKyBudW0xO1xyXG4gICAgICAgICAgICB0aGlzLl93ZWFwb25JbmZvX2NoYW5nZTEubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl93ZWFwb25JbmZvX2NoYW5nZTEubm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uSW5mb19jaGFuZ2UxLm5vZGUuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uSW5mb19jaGFuZ2UxLm5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5pS75Ye76IyD5Zu05Y+Y5YyWXHJcbiAgICAgICAgaWYgKG51bTIgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXBvbkluZm9fY2hhbmdlMi5zdHJpbmcgPSBcIlwiICsgbnVtMjtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uSW5mb19jaGFuZ2UyLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXBvbkluZm9fY2hhbmdlMi5ub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXBvbkluZm9fY2hhbmdlMi5ub2RlLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgICAgICB0aGlzLl93ZWFwb25JbmZvX2NoYW5nZTIubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtMiA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXBvbkluZm9fY2hhbmdlMi5ub2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXBvbkluZm9fY2hhbmdlMi5zdHJpbmcgPSBcIitcIiArIG51bTI7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXBvbkluZm9fY2hhbmdlMi5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXBvbkluZm9fY2hhbmdlMi5ub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl93ZWFwb25JbmZvX2NoYW5nZTIubm9kZS5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xyXG4gICAgICAgICAgICB0aGlzLl93ZWFwb25JbmZvX2NoYW5nZTIubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlvLnoja/ph4/lj5jljJZcclxuICAgICAgICBpZiAobnVtMyA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uSW5mb19jaGFuZ2UzLnN0cmluZyA9IFwiXCIgKyBudW0zO1xyXG4gICAgICAgICAgICB0aGlzLl93ZWFwb25JbmZvX2NoYW5nZTMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uSW5mb19jaGFuZ2UzLm5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uSW5mb19jaGFuZ2UzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXBvbkluZm9fY2hhbmdlMy5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW0zID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uSW5mb19jaGFuZ2UzLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uSW5mb19jaGFuZ2UzLnN0cmluZyA9IFwiK1wiICsgbnVtMztcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uSW5mb19jaGFuZ2UzLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uSW5mb19jaGFuZ2UzLm5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXBvbkluZm9fY2hhbmdlMy5ub2RlLmNvbG9yID0gY2MuQ29sb3IuR1JFRU47XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXBvbkluZm9fY2hhbmdlMy5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOetiee6p1xyXG4gICAgICAgIHRoaXMuX3dlYXBvbkluZm9fbGV2ZWxfcHJvLnByb2dyZXNzID0gc2hvd0xldmVsIC8gMztcclxuICAgICAgICAvLyDmjInpkq7lj5jljJZcclxuICAgICAgICBpZiAoc2hvd1dlYXBvbkluZm8pIHtcclxuICAgICAgICAgICAgdGhpcy5fYnRuV2VhcG9uLmNoaWxkcmVuLmZvckVhY2godiA9PiB2LmFjdGl2ZSA9IGZhbHNlKTtcclxuICAgICAgICAgICAgbGV0IGJ0bl9odWFuZyA9IHRoaXMuX2J0bldlYXBvbi5nZXRDaGlsZEJ5TmFtZShcImJ0bl9odWFuZ1wiKTtcclxuICAgICAgICAgICAgbGV0IGJ0bl9odWFuZ19zbWFsbCA9IHRoaXMuX2J0bldlYXBvbi5nZXRDaGlsZEJ5TmFtZShcImJ0bl9odWFuZ19zbWFsbFwiKTtcclxuICAgICAgICAgICAgbGV0IGJ0bl9ob25nID0gdGhpcy5fYnRuV2VhcG9uLmdldENoaWxkQnlOYW1lKFwiYnRuX2hvbmdcIik7XHJcbiAgICAgICAgICAgIGxldCB0eHRfYnV5ID0gdGhpcy5fYnRuV2VhcG9uLmdldENoaWxkQnlOYW1lKFwidHh0X2J1eVwiKTtcclxuICAgICAgICAgICAgbGV0IHR4dF9zandjID0gdGhpcy5fYnRuV2VhcG9uLmdldENoaWxkQnlOYW1lKFwidHh0X3Nqd2NcIik7XHJcbiAgICAgICAgICAgIGxldCB0eHRfdXBncmFkZSA9IHRoaXMuX2J0bldlYXBvbi5nZXRDaGlsZEJ5TmFtZShcInR4dF91cGdyYWRlXCIpO1xyXG4gICAgICAgICAgICBsZXQgdHh0X3pwamwgPSB0aGlzLl9idG5XZWFwb24uZ2V0Q2hpbGRCeU5hbWUoXCJ0eHRfenBqbFwiKTtcclxuICAgICAgICAgICAgbGV0IGljb25famluYmkgPSB0aGlzLl9idG5XZWFwb24uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX2ppbmJpXCIpO1xyXG4gICAgICAgICAgICBsZXQgaWNvbl96dWFuc2hpID0gdGhpcy5fYnRuV2VhcG9uLmdldENoaWxkQnlOYW1lKFwiaWNvbl96dWFuc2hpXCIpO1xyXG4gICAgICAgICAgICBsZXQgcHJpY2UgPSB0aGlzLl9idG5XZWFwb24uZ2V0Q2hpbGRCeU5hbWUoXCJwcmljZVwiKTtcclxuICAgICAgICAgICAgaWYoIUNvbnN0YW50LmlzRW5kbGVzcyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvd1dlYXBvbkluZm8uU3RhdGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOinhumikeino+mUgVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChHYW1lRGF0ZS5XZWFwb25bc2hvd1dlYXBvbktleV0gJiYgR2FtZURhdGUuV2VhcG9uW3Nob3dXZWFwb25LZXldLnZpZGVvQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnRuV2VhcG9uLnggPSAxNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2J0bldlYXBvbi53aWR0aCA9IDE2OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ0bl9odWFuZ19zbWFsbCkgYnRuX2h1YW5nX3NtYWxsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmHkeW4gVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoR2FtZURhdGUuV2VhcG9uW3Nob3dXZWFwb25LZXldLnByaWNlVHlwZSA9PSBQcmljZVR5cGUuR29sZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGljb25famluYmkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uX2ppbmJpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbl9qaW5iaS54ID0gLTUwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZS54ID0gLTEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJycgKyBHYW1lRGF0ZS5XZWFwb25bc2hvd1dlYXBvbktleV0ucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6ZK755+zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKEdhbWVEYXRlLldlYXBvbltzaG93V2VhcG9uS2V5XS5wcmljZVR5cGUgPT0gUHJpY2VUeXBlLkRpYW1vbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpY29uX3p1YW5zaGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uX3p1YW5zaGkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uX3p1YW5zaGkueCA9IC01MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UueCA9IC0xMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICcnICsgR2FtZURhdGUuV2VhcG9uW3Nob3dXZWFwb25LZXldLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi9rOebmOWlluWKsVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChHYW1lRGF0ZS5XZWFwb25bc2hvd1dlYXBvbktleV0ucHJpY2VUeXBlID09IFByaWNlVHlwZS5aaHVhblBhblJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR4dF96cGpsKSB0eHRfenBqbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOinhumikeino+mUgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLl9idG5XZWFwb25BZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmlkZW9Db3VudCA9IHRoaXMuX2J0bldlYXBvbkFkLmdldENoaWxkQnlOYW1lKFwidmlkZW9Db3VudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZpZGVvQ291bnQpIHZpZGVvQ291bnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBzaG93V2VhcG9uSW5mby5WaWRlb0NvdW50ICsgXCIvXCIgKyBHYW1lRGF0ZS5XZWFwb25bc2hvd1dlYXBvbktleV0udmlkZW9Db3VudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6LSt5LmwXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuX2J0bldlYXBvbkFkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9idG5XZWFwb24ueCA9IDI1MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnRuV2VhcG9uLndpZHRoID0gMjUyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuX2h1YW5nKSBidG5faHVhbmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6YeR5biBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChHYW1lRGF0ZS5XZWFwb25bc2hvd1dlYXBvbktleV0ucHJpY2VUeXBlID09IFByaWNlVHlwZS5Hb2xkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHh0X2J1eSkgdHh0X2J1eS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGljb25famluYmkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uX2ppbmJpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbl9qaW5iaS54ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UueCA9IDMwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJycgKyBHYW1lRGF0ZS5XZWFwb25bc2hvd1dlYXBvbktleV0ucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6ZK755+zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKEdhbWVEYXRlLldlYXBvbltzaG93V2VhcG9uS2V5XS5wcmljZVR5cGUgPT0gUHJpY2VUeXBlLkRpYW1vbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eHRfYnV5KSB0eHRfYnV5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWNvbl96dWFuc2hpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbl96dWFuc2hpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbl96dWFuc2hpLnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZS54ID0gMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAnJyArIEdhbWVEYXRlLldlYXBvbltzaG93V2VhcG9uS2V5XS5wcmljZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDovaznm5jlpZblirFcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoR2FtZURhdGUuV2VhcG9uW3Nob3dXZWFwb25LZXldLnByaWNlVHlwZSA9PSBQcmljZVR5cGUuWmh1YW5QYW5SZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eHRfenBqbCkgdHh0X3pwamwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v5Y2H57qnXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzaG93V2VhcG9uSW5mby5MZXZlbCA8IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLl9idG5XZWFwb25BZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9idG5XZWFwb24ueCA9IDI1MDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9idG5XZWFwb24ud2lkdGggPSAyNTI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ0bl9ob25nKSBidG5faG9uZy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eHRfdXBncmFkZSkgdHh0X3VwZ3JhZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWNvbl9qaW5iaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uX2ppbmJpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25famluYmkueCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZS54ID0gMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJycgKyBDb25zdGFudC53ZWFwb25MZXZlbFByaWNlQXJyW3Nob3dXZWFwb25JbmZvLkxldmVsXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDmnIDlpKfnrYnnuqdcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuX2J0bldlYXBvbkFkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2J0bldlYXBvbi54ID0gMjUwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2J0bldlYXBvbi53aWR0aCA9IDI1MjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHh0X3Nqd2MpIHR4dF9zandjLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVdlYXBvbkZyYW1lKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVXZWFwb25GcmFtZSgpIHtcclxuICAgICAgICBsZXQgZ3VuSW5mb3M6IHN0cmluZyA9IGNvY29zei5kYXRhTWdyLmdldEl0ZW0oQ29uc3RhbnQuU1RfR3VuSW5mbywgXCJcIik7XHJcbiAgICAgICAgaWYgKGd1bkluZm9zKSB7XHJcbiAgICAgICAgICAgIGxldCBndW5JbmZvQXJyOiBHdW5JbmZvW10gPSBKU09OLnBhcnNlKGd1bkluZm9zKTtcclxuICAgICAgICAgICAgaWYgKGd1bkluZm9BcnIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fd2VhcG9uTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5fd2VhcG9uTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoR2FtZURhdGUuV2VhcG9uW25vZGUubmFtZV0gJiYgR2FtZURhdGUuV2VhcG9uW25vZGUubmFtZV0uaWQgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSBHYW1lRGF0ZS5XZWFwb25bbm9kZS5uYW1lXS5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGd1bkluZm9BcnJbaWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhdGUgPSBndW5JbmZvQXJyW2lkXS5TdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImt1YW5nX2h1aVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImt1YW5nX2h1aVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6YCJ5LitXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5uYW1lID09IFdlYXBvbi5XZWFwb25OYW1lW3RoaXMuX3Nob3dXZWFwb25JZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwia3VhbmdfaHVhbmdcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fYW5pX2Fycm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChndW5JbmZvQXJyW2lkXS5TdGF0ZSA+IDAgJiYgZ3VuSW5mb0FycltpZF0uTGV2ZWwgPCAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmlfYXJyb3cueCA9IG5vZGUueCArIDMwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYW5pX2Fycm93LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmlfYXJyb3cuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJrdWFuZ19odWFuZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJrdWFuZ19odWlcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwia3VhbmdfaHVhbmdcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwia3VhbmdfaHVpXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwia3VhbmdfaHVhbmdcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog6YeR5biBL+mSu+efs+W8ueeqlyAqL1xyXG4gICAgc2hvd0NvaW5QYW5lbChpc0RpYW1vbmQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiVUlBRFBhbmVsXCIsIGNjLlByZWZhYikpO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgaWYgKGlzRGlhbW9uZCkge1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChcIlVJQURQYW5lbFwiKS5zZXREaWFtb25kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDpo57ph5HluIEv6ZK755+zICovXHJcbiAgICBwcml2YXRlIF9mbHlDb2lucyhpY29uTmFtZTogc3RyaW5nLCBmcmFtZU5vZGVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgcG9zTm9kZSA9IGNjLmZpbmQoZnJhbWVOb2RlTmFtZSwgdGhpcy5fcGFnZSk7XHJcbiAgICAgICAgaWYgKCFwb3NOb2RlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHBvcyA9IHBvc05vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3NOb2RlLnBvc2l0aW9uKTtcclxuICAgICAgICBGbHlDb2luLlNob3coaWNvbk5hbWUsIHBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOabtOaWsOmfs+mikeW8gOWFsyAqL1xyXG4gICAgcHJpdmF0ZSBfdXBkYXRlQXVkaW9CdG4oaXNQbGF5OiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCBvZmZJbWc6IGNjLk5vZGUgPSBjYy5maW5kKFwiQmFja2dyb3VuZC9vZmZcIiwgdGhpcy5fYnRuQXVkaW8pO1xyXG4gICAgICAgIG9mZkltZy5hY3RpdmUgPSBjb2Nvc3ouZGF0YU1nci5BdWRpb09uID09IGZhbHNlO1xyXG4gICAgICAgIGlmIChpc1BsYXkpIHtcclxuICAgICAgICAgICAgLy/liKTmlq3lvIDlhbPvvIzph43mlrDmkq3mlL7og4zmma/pn7PkuZBcclxuICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkF1ZGlvT24pIHtcclxuICAgICAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5QmdtKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3Iuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmm7TmlrDpnIfliqjlvIDlhbMgKi9cclxuICAgIHByaXZhdGUgX3VwZGF0U2hha2VCdG4oKSB7XHJcbiAgICAgICAgbGV0IG9mZkltZzogY2MuTm9kZSA9IGNjLmZpbmQoXCJCYWNrZ3JvdW5kL29mZlwiLCB0aGlzLl9idG5TaGFrZSk7XHJcbiAgICAgICAgb2ZmSW1nLmFjdGl2ZSA9IGNvY29zei5kYXRhTWdyLlNoYWtlT24gPT0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==