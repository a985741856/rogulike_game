
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI/UIGamePage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca02eHXE+9E+Yrp8V9uxTLx', 'UIGamePage');
// scripts/UI/UIGamePage.ts

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
var PlatUtils_1 = require("../../common-plugin/Scripts/PlatUtils");
var Utils_1 = require("../../common-plugin/Scripts/Utils");
var YZ_Constant_1 = require("../../common-plugin/Scripts/YZ_Constant");
var gameMgr_1 = require("../Game/gameMgr");
// @ts-ignore
var i18n = require('LanguageData');
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 游戏页面
 */
var UIGamePage = /** @class */ (function (_super) {
    __extends(UIGamePage, _super);
    function UIGamePage() {
        var _this = _super.call(this, Constant_1.PageName.UIGamePage) || this;
        _this._handAni = null;
        _this._btnCt = null;
        _this._btnQpbz = null;
        _this.ctAction = false;
        _this.qpbzAction = false;
        _this.settimeFunc = null;
        _this.ctTime = 60;
        _this.qpbzTime = 300;
        _this.isValid() && _this.onLoad();
        return _this;
    }
    UIGamePage.prototype.onLoad = function () {
        var _this = this;
        this._handAni = cc.find("handAni", this._page);
        // this.settimeFunc = this.update();
        var btnList1 = ["rangedWeapon", "rangedWeaponAd", "BtnPause", "BtnBullet", "BtnShuxing", "BtnHideBanner", "BtnCt", "BtnQpbz"];
        btnList1.forEach(function (btnName) {
            var btn = _this._page.getChildByName(btnName);
            if (btn) {
                btn.on(cc.Node.EventType.TOUCH_END, _this._onBtnClickHandler, _this);
                if (btn.name == "rangedWeaponAd") {
                    if (CocosZ_1.cocosz.isADON && CocosZ_1.cocosz.getConfigByKey("isVideoAd_advanced_weapon") != "false") {
                        btn.active = true;
                    }
                    else {
                        btn.active = false;
                    }
                }
                else if (btn.name == "BtnHideBanner") {
                    if (CocosZ_1.cocosz.isShowAd && CocosZ_1.cocosz.isADON && CocosZ_1.cocosz.getConfigByKey("isVideoAd_hideBanner") == "true") {
                        btn.active = true;
                    }
                    else {
                        btn.active = false;
                    }
                }
                else if (btn.name == "BtnCt") {
                    _this._btnCt = btn;
                    if (CocosZ_1.cocosz.isShowAd && CocosZ_1.cocosz.isADON && !CocosZ_1.cocosz.dataMgr.guide_skill && CocosZ_1.cocosz.getConfigByKey("isVideoAd_Citie") != "false") {
                        _this._btnCt.active = true;
                        if (!_this.ctAction) {
                            _this._btnCt.getChildByName('maskNode').getComponent(cc.Sprite).fillRange = 1;
                            _this._btnCt.getComponent(cc.Button).interactable = false;
                        }
                        else {
                            _this._btnCt.getChildByName('maskNode').getComponent(cc.Sprite).fillRange = 0;
                            _this._btnCt.getComponent(cc.Button).interactable = true;
                        }
                        // 隐藏图标
                        if (_this._btnCt.childrenCount) {
                            _this._btnCt.children.forEach(function (child) { child.active = false; });
                        }
                    }
                    else {
                        // this._btnCt.active = false;
                        // let widget = this._btnCt.getComponent(cc.Widget);
                        // if (widget) { widget.enabled = false; }
                    }
                }
                else if (btn.name == "BtnQpbz") {
                    _this._btnQpbz = btn;
                    if (CocosZ_1.cocosz.isShowAd && CocosZ_1.cocosz.isADON && !CocosZ_1.cocosz.dataMgr.guide_skill && CocosZ_1.cocosz.getConfigByKey("isVideoAd_Qpbz") != "false") {
                        _this._btnQpbz.active = true;
                        if (!_this.qpbzAction) {
                            _this._btnQpbz.getChildByName('maskNode').getComponent(cc.Sprite).fillRange = 1;
                            _this._btnQpbz.getComponent(cc.Button).interactable = false;
                        }
                        else {
                            _this._btnQpbz.getChildByName('maskNode').getComponent(cc.Sprite).fillRange = 0;
                            _this._btnQpbz.getComponent(cc.Button).interactable = true;
                        }
                        // 隐藏图标
                        if (_this._btnQpbz.childrenCount) {
                            _this._btnQpbz.children.forEach(function (child) { child.active = false; });
                        }
                    }
                    else {
                        // this._btnQpbz.active = false;
                        // let widget = this._btnQpbz.getComponent(cc.Widget);
                        // if (widget) { widget.enabled = false; }
                    }
                }
            }
        });
        // this.settimeFunc = setInterval(function(){
        //     console.log("setInterval");
        //     if(!this.ctAction){
        //         this.ctTime -= 0.05;
        //         let ctmask = this._btnCt.getChildByName('maskNode').getComponent(cc.Sprite);
        //         ctmask.fillRange -= 0.05;
        //         console.log(this.ctTime);
        //         if(this.ctTime <= 0){
        //             this.ctAction = true;
        //             ctmask.fillRange = 0;
        //             this._btnCt.getComponent(cc.Button).interactable = true;
        //             this.ctTime = 60;
        //         }
        //     }
        // }.bind(this),0.05)
    };
    UIGamePage.prototype.onOpen = function () {
        var _this = this;
        Utils_1.utils.SendEvent("页面-游戏");
        //监听游戏事件
        // cc.game.on(Constant.E_GAME_LOGIC, this._onGameMessageHandler, this);
        gameMgr_1.gameMgr.uiGamePage = this._page;
        gameMgr_1.gameMgr.moveArea = cc.find("moveArea", this._page);
        gameMgr_1.gameMgr.yaogan = cc.find("move", this._page);
        var widge = gameMgr_1.gameMgr.yaogan.getComponent(cc.Widget);
        if (widge) {
            gameMgr_1.gameMgr.yaogan.getComponent(cc.Widget).updateAlignment();
            widge.enabled = false;
        }
        // gameMgr.btnSkill = cc.find("BtnSkill", this._page);
        // gameMgr.btnSkillAd = cc.find("BtnSkillAd", this._page);
        gameMgr_1.gameMgr.rangedWeaponMess = this._page.getChildByName("rangedWeapon");
        gameMgr_1.gameMgr.ammo = gameMgr_1.gameMgr.rangedWeaponMess.getChildByName("ammo").getComponent(cc.Label);
        gameMgr_1.gameMgr.rangedWeaponAdMess = this._page.getChildByName("rangedWeaponAd");
        // gameMgr.ammoAd = gameMgr.rangedWeaponAdMess.getChildByName("ammo").getComponent(cc.Label);
        gameMgr_1.gameMgr.qlzc = this._page.getChildByName("qlzc");
        gameMgr_1.gameMgr.BtnBullet = this._page.getChildByName("BtnBullet");
        // 地下城
        if (CocosZ_1.cocosz.gameMode == 6 || CocosZ_1.cocosz.gameMode == 8) {
            // boss血条
            gameMgr_1.gameMgr.model6_bossBar = this._page.getChildByName("bossBar").getComponent(cc.ProgressBar);
            // 经验条
            gameMgr_1.gameMgr.model6_jingyanBar = this._page.getChildByName("jingyanBar").getComponent(cc.ProgressBar);
            // 技能条
            gameMgr_1.gameMgr.model6_skillScrollView = this._page.getChildByName("skillScrollView").getComponent(cc.ScrollView);
            gameMgr_1.gameMgr.model6_skillScrollView_content = cc.find("skillScrollView/view/content", this._page);
            gameMgr_1.gameMgr.model6_skillScrollView_item = this._page.getChildByName("item");
            // 头像
            var BtnShuxing = this._page.getChildByName("BtnShuxing");
            gameMgr_1.gameMgr.model6_touxiang = BtnShuxing.getChildByName("touxiang");
            var pre = CocosZ_1.cocosz.resMgr.getRes("head" + (CocosZ_1.cocosz.gameMgr.gameCtr.curUseSkinId + 1), cc.Prefab);
            if (pre) {
                var touxiang = cc.instantiate(pre);
                touxiang.setParent(gameMgr_1.gameMgr.model6_touxiang);
                touxiang.scale = 1;
                if (touxiang.children[0]) {
                    touxiang.children[0].active = false;
                }
            }
            // 属性按钮
            gameMgr_1.gameMgr.model6_btnShuxing = this._page.getChildByName("BtnShuxing");
            if (gameMgr_1.gameMgr.model6_btnShuxing)
                gameMgr_1.gameMgr.model6_btnShuxing.active = true;
            gameMgr_1.gameMgr.model6_shuxing = BtnShuxing.getChildByName("shuxing");
            gameMgr_1.gameMgr.model6_shuxing.active = false;
            // 等级
            gameMgr_1.gameMgr.model6_levelLabel = this._page.getChildByName("levelLabel").getComponent(cc.Label);
            // 计时
            gameMgr_1.gameMgr.model6_timeLabel = this._page.getChildByName("timeLabel").getComponent(cc.Label);
            // boss提示
            gameMgr_1.gameMgr.model6_ts = this._page.getChildByName("ts");
            if (CocosZ_1.cocosz.dataMgr.guide_skill && (CocosZ_1.cocosz.getConfigByKey("isVideoAd_Qpbz") != "false" || CocosZ_1.cocosz.getConfigByKey("isVideoAd_Citie") != "false")) {
                var count_1 = 0;
                var tw_1 = cc.tween(this._page)
                    .delay(1)
                    .call(function () {
                    if (gameMgr_1.gameMgr.isGameStart && !CocosZ_1.cocosz.isPause) {
                        count_1++;
                        cc.log("count:", count_1);
                        if (count_1 == 5) {
                            if (CocosZ_1.cocosz.getConfigByKey("isVideoAd_Qpbz") != "false") {
                                _this.showSkill(_this._btnQpbz);
                            }
                        }
                        else if (count_1 == 8) {
                            if (CocosZ_1.cocosz.getConfigByKey("isVideoAd_Citie") != "false") {
                                _this.showSkill(_this._btnCt);
                            }
                        }
                        else if (count_1 > 8) {
                            CocosZ_1.cocosz.dataMgr.guide_skill = false;
                            tw_1 && tw_1.stop();
                        }
                    }
                })
                    .union()
                    .repeatForever()
                    .start();
            }
        }
        gameMgr_1.gameMgr.startGame();
        this.showAd();
        cc.game.on(Constant_1.default.E_GAME_LOGIC, this._onGameMessageHandler, this);
        this.settimeFunc = setInterval(function () {
            if (!gameMgr_1.gameMgr.isGameStart || CocosZ_1.cocosz.isPause) {
                return;
            }
            // console.log("setInterval");
            if (!this.ctAction) {
                this.ctTime -= 0.05;
                var ctmask = this._btnCt.getChildByName('maskNode').getComponent(cc.Sprite);
                ctmask.fillRange -= Number((0.05 / 60));
                // console.log(ctmask.fillRange);
                if (this.ctTime <= 0) {
                    this.ctAction = true;
                    ctmask.fillRange = 0;
                    this._btnCt.getComponent(cc.Button).interactable = true;
                    this.ctTime = 60;
                }
            }
            if (!this.qpbzAction) {
                this.qpbzTime -= 0.05;
                var qpbzmask = this._btnQpbz.getChildByName('maskNode').getComponent(cc.Sprite);
                qpbzmask.fillRange -= Number((0.05 / 300));
                // console.log(qpbzmask.fillRange);
                if (this.qpbzTime <= 0) {
                    this.qpbzAction = true;
                    qpbzmask.fillRange = 0;
                    this._btnQpbz.getComponent(cc.Button).interactable = true;
                    this.qpbzTime = 300;
                }
            }
        }.bind(this), 50);
    };
    UIGamePage.prototype.onClose = function () {
        clearInterval(this.settimeFunc);
        cc.game.targetOff(this);
        Utils_1.utils.adManager.hideBlockAd();
        Utils_1.utils.adManager.hideNativeTryGameWidget();
        Utils_1.utils.hideVivoGamePortalWidget();
        Utils_1.utils.adManager.HideSingleNativeAd();
        if (PlatUtils_1.default.IsWechat) {
            Utils_1.utils.adManager.hideCustomAd({ location: 3 });
            Utils_1.utils.adManager.hideCustomAd({ location: 4 });
            Utils_1.utils.adManager.hideCustomAd({ location: 8 });
        }
        else if (PlatUtils_1.default.IsVIVO) {
            Utils_1.utils.adManager.hideCustomAd({ location: YZ_Constant_1.BannerLocation.Game });
        }
    };
    UIGamePage.prototype.showAd = function () {
        // 录屏
        Utils_1.utils.showRecordWidget({ group: "default", scale: 1, top: 50, left: 100, parent: this._page });
        if (CocosZ_1.cocosz.isShowAd) {
            // banner
            if (!CocosZ_1.cocosz.isShowGameBanner || PlatUtils_1.default.IsWechat || PlatUtils_1.default.IsDouyin || PlatUtils_1.default.IsAndroidDouYin) {
                Utils_1.utils.adManager.HideBanner(YZ_Constant_1.BannerLocation.Game);
            }
            else {
                Utils_1.utils.adManager.ShowBanner(YZ_Constant_1.BannerLocation.Game, { width: 0.1, bottom: 0 });
            }
            Utils_1.utils.adManager.showNativeTryGameWidget({ left: 10, top: 500, scale: 1, parent: this._page });
            // 原生广告
            if (PlatUtils_1.default.IsWechat) {
                Utils_1.utils.adManager.showCustomAd({ location: 3 });
                Utils_1.utils.adManager.showCustomAd({ location: 4 });
                Utils_1.utils.adManager.showCustomAd({ location: 8 });
            }
            else if (PlatUtils_1.default.IsVIVO) {
                Utils_1.utils.adManager.showCustomAd({ location: YZ_Constant_1.BannerLocation.Game });
            }
        }
    };
    UIGamePage.prototype.showSkill = function (n) {
        var _this = this;
        var widget = n.getComponent(cc.Widget);
        if (widget)
            widget.enabled = false;
        if (n && n.isValid) {
            CocosZ_1.cocosz.pauseCount++;
            n.setPosition(0, cc.winSize.height / 2);
            n.scale = 2;
            n.active = true;
            var call_1 = function () {
                n.stopAllActions();
                cc.tween(n)
                    .call(function () {
                    if (_this._handAni && _this._handAni.isValid) {
                        _this._handAni.active = false;
                    }
                })
                    .to(0.5, { scale: 1, x: -cc.winSize.width / 2 + widget.left + n.width / 2, y: -cc.winSize.height / 2 + widget.bottom + n.height / 2 })
                    .call(function () {
                    if (widget)
                        widget.enabled = true;
                    CocosZ_1.cocosz.pauseCount--;
                })
                    .start();
            };
            n.once(cc.Node.EventType.TOUCH_END, call_1, this);
            n.stopAllActions();
            cc.tween(n)
                .to(1, { y: 0 }, { easing: "backOut" })
                .call(function () {
                if (_this._handAni && _this._handAni.isValid) {
                    _this._handAni.setPosition(0, 0);
                    _this._handAni.active = true;
                    var spAni = _this._handAni.getComponent(sp.Skeleton);
                    if (spAni)
                        spAni.setAnimation(0, "animation", true);
                }
            })
                .delay(4)
                .call(function () {
                n.off(cc.Node.EventType.TOUCH_END, call_1, _this);
                call_1();
            })
                .start();
        }
    };
    // 全屏轰炸动画
    UIGamePage.prototype.effect_qpbz = function () {
        var pre = CocosZ_1.cocosz.resMgr.getRes("effect_qpbz", cc.Prefab);
        if (pre) {
            var node_1 = cc.instantiate(pre);
            node_1.setPosition(gameMgr_1.gameMgr.playerTs.node.position);
            cc.director.getScene().getChildByName("Canvas").addChild(node_1);
            cc.tween(node_1)
                .delay(0.3)
                .call(function () {
                gameMgr_1.gameMgr.playEffect("QuanPingBaoZha");
                cc.game.emit(Constant_1.default.E_GAME_LOGIC, { type: Constant_1.default.E_Allzombie_Destory });
            })
                .union()
                .repeat(4)
                .call(function () { node_1.destroy(); })
                .start();
        }
    };
    UIGamePage.prototype._onGameMessageHandler = function (event) {
        switch (event.type) {
        }
    };
    UIGamePage.prototype._onBtnClickHandler = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var adIcon_1, ctmask, qpbzmask;
            var _this = this;
            return __generator(this, function (_a) {
                CocosZ_1.cocosz.audioMgr.playBtnEffect();
                switch (event.target.name) {
                    case "rangedWeaponAd": {
                        if (gameMgr_1.gameMgr.rangedWeaponAdMess) {
                            adIcon_1 = gameMgr_1.gameMgr.rangedWeaponAdMess.getChildByName("adIcon");
                            if (adIcon_1 && adIcon_1.active) {
                                Utils_1.utils.SendEvent("视频-高级武器-播放");
                                CocosZ_1.cocosz.watchAD(function () {
                                    Utils_1.utils.SendEvent("视频-高级武器-成功");
                                    adIcon_1.active = false;
                                    gameMgr_1.gameMgr.useRangedWeaponAd();
                                    gameMgr_1.gameMgr.rangedWeaponAdMess.stopAllActions();
                                }, function () {
                                    Utils_1.utils.SendEvent("视频-高级武器-失败");
                                });
                            }
                            else {
                                gameMgr_1.gameMgr.useRangedWeaponAd();
                            }
                        }
                        break;
                    }
                    case "rangedWeapon": {
                        gameMgr_1.gameMgr.useRangedWeapon();
                        break;
                    }
                    case "BtnPause": {
                        CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UIPausePanel);
                        break;
                    }
                    case "BtnBullet": {
                        if (gameMgr_1.gameMgr.BtnBullet && gameMgr_1.gameMgr.playerTs && gameMgr_1.gameMgr.playerTs.curWeapon && gameMgr_1.gameMgr.playerTs.curWeapon.isRangeWeapon)
                            gameMgr_1.gameMgr.playerTs.curWeapon.reloadBullet();
                        break;
                    }
                    case "BtnShuxing": {
                        gameMgr_1.gameMgr.model6_shuxing.active = !gameMgr_1.gameMgr.model6_shuxing.active;
                        gameMgr_1.gameMgr.update_model6_shuxing();
                        break;
                    }
                    case "BtnHideBanner": {
                        Utils_1.utils.SendEvent("视频-游戏中去广告-播放");
                        CocosZ_1.cocosz.watchAD(function () {
                            Utils_1.utils.SendEvent("视频-游戏中去广告-成功");
                            event.target.active = false;
                            gameMgr_1.gameMgr.canSHowGameBanner = false;
                            Utils_1.utils.adManager.HideBanner(YZ_Constant_1.BannerLocation.Game);
                        }, function () {
                            Utils_1.utils.SendEvent("视频-游戏中去广告-失败");
                        });
                        break;
                    }
                    case "BtnCt": {
                        if (this._btnCt && this._btnCt.getChildByName("share") && this._btnCt.getChildByName("share").active) {
                            Utils_1.utils.SendEvent("分享-磁铁");
                            CocosZ_1.cocosz.share(function () {
                                Utils_1.utils.SendEvent("分享-磁铁-成功");
                                // 磁铁事件
                                cc.game.emit(Constant_1.default.E_Skill_Citie);
                            }, function () {
                                Utils_1.utils.SendEvent("分享-磁铁-失败");
                            });
                        }
                        else if (this._btnCt && this._btnCt.getChildByName("video") && this._btnCt.getChildByName("video").active) {
                            Utils_1.utils.SendEvent("视频-磁铁-播放");
                            CocosZ_1.cocosz.watchAD(function () {
                                Utils_1.utils.SendEvent("视频-磁铁-成功");
                                // 磁铁事件
                                cc.game.emit(Constant_1.default.E_Skill_Citie);
                            }, function () {
                                Utils_1.utils.SendEvent("视频-磁铁-失败");
                            });
                        }
                        else {
                            // 磁铁事件
                            if (this.ctAction) {
                                ctmask = this._btnCt.getChildByName('maskNode').getComponent(cc.Sprite);
                                ctmask.fillRange = 1;
                                this.ctAction = false;
                                this._btnCt.getComponent(cc.Button).interactable = false;
                                cc.game.emit(Constant_1.default.E_Skill_Citie);
                            }
                        }
                        break;
                    }
                    case "BtnQpbz": {
                        if (this._btnQpbz && this._btnQpbz.getChildByName("share") && this._btnQpbz.getChildByName("share").active) {
                            Utils_1.utils.SendEvent("分享-全屏轰炸");
                            CocosZ_1.cocosz.share(function () {
                                Utils_1.utils.SendEvent("分享-全屏轰炸-成功");
                                // 全屏轰炸动画
                                _this.effect_qpbz();
                            }, function () {
                                Utils_1.utils.SendEvent("分享-全屏轰炸-失败");
                            });
                        }
                        else if (this._btnQpbz && this._btnQpbz.getChildByName("video") && this._btnQpbz.getChildByName("video").active) {
                            Utils_1.utils.SendEvent("视频-全屏轰炸-播放");
                            CocosZ_1.cocosz.watchAD(function () {
                                Utils_1.utils.SendEvent("视频-全屏轰炸-成功");
                                // 全屏轰炸动画
                                _this.effect_qpbz();
                            }, function () {
                                Utils_1.utils.SendEvent("视频-全屏轰炸-失败");
                            });
                        }
                        else {
                            // 全屏轰炸动画
                            if (this.qpbzAction) {
                                qpbzmask = this._btnQpbz.getChildByName('maskNode').getComponent(cc.Sprite);
                                qpbzmask.fillRange = 1;
                                this.qpbzAction = false;
                                this._btnQpbz.getComponent(cc.Button).interactable = false;
                                this.effect_qpbz();
                            }
                        }
                        break;
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    UIGamePage = __decorate([
        ccclass
    ], UIGamePage);
    return UIGamePage;
}(UIPage_1.default));
exports.default = UIGamePage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXFVJR2FtZVBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsOENBQXlDO0FBQ3pDLGtEQUFzRTtBQUN0RSw4Q0FBNkM7QUFDN0MsbUVBQThEO0FBQzlELDJEQUEwRDtBQUMxRCx1RUFBeUU7QUFDekUsMkNBQTBDO0FBRzFDLGFBQWE7QUFDYixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFL0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7O0dBRUc7QUFFSDtJQUF3Qyw4QkFBTTtJQVcxQztRQUFBLFlBQ0ksa0JBQU0sbUJBQVEsQ0FBQyxVQUFVLENBQUMsU0FFN0I7UUFaTyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixjQUFRLEdBQWEsS0FBSyxDQUFDO1FBQzNCLGdCQUFVLEdBQWEsS0FBSyxDQUFDO1FBQzdCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixjQUFRLEdBQUcsR0FBRyxDQUFDO1FBSW5CLEtBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O0lBQ3BDLENBQUM7SUFFUywyQkFBTSxHQUFoQjtRQUFBLGlCQWlGQztRQWhGRyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxvQ0FBb0M7UUFFcEMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsVUFB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QUNhLFVBQVUsQ0EwYjlCO0lBQUQsaUJBQUM7Q0ExYkQsQUEwYkMsQ0ExYnVDLGdCQUFNLEdBMGI3QztrQkExYm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFVJUGFnZSBmcm9tIFwiLi4vRnJhbWV3b3JrL1VJUGFnZVwiO1xyXG5pbXBvcnQgQ29uc3RhbnQsIHsgUGFnZU5hbWUsIFBhbmVsTmFtZSB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IFBsYXRVdGlscyBmcm9tIFwiLi4vLi4vY29tbW9uLXBsdWdpbi9TY3JpcHRzL1BsYXRVdGlsc1wiO1xyXG5pbXBvcnQgeyB1dGlscyB9IGZyb20gXCIuLi8uLi9jb21tb24tcGx1Z2luL1NjcmlwdHMvVXRpbHNcIjtcclxuaW1wb3J0IHsgQmFubmVyTG9jYXRpb24gfSBmcm9tIFwiLi4vLi4vY29tbW9uLXBsdWdpbi9TY3JpcHRzL1laX0NvbnN0YW50XCI7XHJcbmltcG9ydCB7IGdhbWVNZ3IgfSBmcm9tIFwiLi4vR2FtZS9nYW1lTWdyXCI7XHJcbmltcG9ydCB7IGd1aWRlTGF5ZXIgfSBmcm9tIFwiLi9HdWlkZUxheWVyXCI7XHJcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSBcInJlcGxcIjtcclxuLy8gQHRzLWlnbm9yZVxyXG5jb25zdCBpMThuID0gcmVxdWlyZSgnTGFuZ3VhZ2VEYXRhJyk7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/pobXpnaJcclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJR2FtZVBhZ2UgZXh0ZW5kcyBVSVBhZ2Uge1xyXG5cclxuICAgIHByaXZhdGUgX2hhbmRBbmk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYnRuQ3Q6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYnRuUXBiejogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN0QWN0aW9uIDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBxcGJ6QWN0aW9uIDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzZXR0aW1lRnVuYyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN0VGltZSA9IDYwO1xyXG4gICAgcHJpdmF0ZSBxcGJ6VGltZSA9IDMwMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihQYWdlTmFtZS5VSUdhbWVQYWdlKTtcclxuICAgICAgICB0aGlzLmlzVmFsaWQoKSAmJiB0aGlzLm9uTG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5faGFuZEFuaSA9IGNjLmZpbmQoXCJoYW5kQW5pXCIsIHRoaXMuX3BhZ2UpO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0dGltZUZ1bmMgPSB0aGlzLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICBsZXQgYnRuTGlzdDEgPSBbXCJyYW5nZWRXZWFwb25cIiwgXCJyYW5nZWRXZWFwb25BZFwiLCBcIkJ0blBhdXNlXCIsIFwiQnRuQnVsbGV0XCIsIFwiQnRuU2h1eGluZ1wiLCBcIkJ0bkhpZGVCYW5uZXJcIiwgXCJCdG5DdFwiLCBcIkJ0blFwYnpcIl07XHJcbiAgICAgICAgYnRuTGlzdDEuZm9yRWFjaChidG5OYW1lID0+IHtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMuX3BhZ2UuZ2V0Q2hpbGRCeU5hbWUoYnRuTmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChidG4pIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uQnRuQ2xpY2tIYW5kbGVyLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIGlmIChidG4ubmFtZSA9PSBcInJhbmdlZFdlYXBvbkFkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmlzQURPTiAmJiBjb2Nvc3ouZ2V0Q29uZmlnQnlLZXkoXCJpc1ZpZGVvQWRfYWR2YW5jZWRfd2VhcG9uXCIpICE9IFwiZmFsc2VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChidG4ubmFtZSA9PSBcIkJ0bkhpZGVCYW5uZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouaXNTaG93QWQgJiYgY29jb3N6LmlzQURPTiAmJiBjb2Nvc3ouZ2V0Q29uZmlnQnlLZXkoXCJpc1ZpZGVvQWRfaGlkZUJhbm5lclwiKSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChidG4ubmFtZSA9PSBcIkJ0bkN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9idG5DdCA9IGJ0bjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmlzU2hvd0FkICYmIGNvY29zei5pc0FET04gJiYgIWNvY29zei5kYXRhTWdyLmd1aWRlX3NraWxsICYmIGNvY29zei5nZXRDb25maWdCeUtleShcImlzVmlkZW9BZF9DaXRpZVwiKSAhPSBcImZhbHNlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnRuQ3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuY3RBY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnRuQ3QuZ2V0Q2hpbGRCeU5hbWUoJ21hc2tOb2RlJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2J0bkN0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2J0bkN0LmdldENoaWxkQnlOYW1lKCdtYXNrTm9kZScpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9idG5DdC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmakOiXj+Wbvuagh1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fYnRuQ3QuY2hpbGRyZW5Db3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnRuQ3QuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHsgY2hpbGQuYWN0aXZlID0gZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLl9idG5DdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHdpZGdldCA9IHRoaXMuX2J0bkN0LmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAod2lkZ2V0KSB7IHdpZGdldC5lbmFibGVkID0gZmFsc2U7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChidG4ubmFtZSA9PSBcIkJ0blFwYnpcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2J0blFwYnogPSBidG47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvY29zei5pc1Nob3dBZCAmJiBjb2Nvc3ouaXNBRE9OICYmICFjb2Nvc3ouZGF0YU1nci5ndWlkZV9za2lsbCAmJiBjb2Nvc3ouZ2V0Q29uZmlnQnlLZXkoXCJpc1ZpZGVvQWRfUXBielwiKSAhPSBcImZhbHNlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnRuUXBiei5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5xcGJ6QWN0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2J0blFwYnouZ2V0Q2hpbGRCeU5hbWUoJ21hc2tOb2RlJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2J0blFwYnouZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnRuUXBiei5nZXRDaGlsZEJ5TmFtZSgnbWFza05vZGUnKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5maWxsUmFuZ2UgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnRuUXBiei5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmakOiXj+Wbvuagh1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fYnRuUXBiei5jaGlsZHJlbkNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9idG5RcGJ6LmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7IGNoaWxkLmFjdGl2ZSA9IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5fYnRuUXBiei5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHdpZGdldCA9IHRoaXMuX2J0blFwYnouZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh3aWRnZXQpIHsgd2lkZ2V0LmVuYWJsZWQgPSBmYWxzZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2V0dGltZUZ1bmMgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcInNldEludGVydmFsXCIpO1xyXG4gICAgICAgIC8vICAgICBpZighdGhpcy5jdEFjdGlvbil7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0VGltZSAtPSAwLjA1O1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGN0bWFzayA9IHRoaXMuX2J0bkN0LmdldENoaWxkQnlOYW1lKCdtYXNrTm9kZScpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIC8vICAgICAgICAgY3RtYXNrLmZpbGxSYW5nZSAtPSAwLjA1O1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5jdFRpbWUpO1xyXG4gICAgICAgIC8vICAgICAgICAgaWYodGhpcy5jdFRpbWUgPD0gMCl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5jdEFjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY3RtYXNrLmZpbGxSYW5nZSA9IDA7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5fYnRuQ3QuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmN0VGltZSA9IDYwO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfS5iaW5kKHRoaXMpLDAuMDUpXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uT3BlbigpIHtcclxuICAgICAgICB1dGlscy5TZW5kRXZlbnQoXCLpobXpnaIt5ri45oiPXCIpO1xyXG4gICAgICAgIC8v55uR5ZCs5ri45oiP5LqL5Lu2XHJcbiAgICAgICAgLy8gY2MuZ2FtZS5vbihDb25zdGFudC5FX0dBTUVfTE9HSUMsIHRoaXMuX29uR2FtZU1lc3NhZ2VIYW5kbGVyLCB0aGlzKTtcclxuICAgICAgICBnYW1lTWdyLnVpR2FtZVBhZ2UgPSB0aGlzLl9wYWdlO1xyXG4gICAgICAgIGdhbWVNZ3IubW92ZUFyZWEgPSBjYy5maW5kKFwibW92ZUFyZWFcIiwgdGhpcy5fcGFnZSk7XHJcbiAgICAgICAgZ2FtZU1nci55YW9nYW4gPSBjYy5maW5kKFwibW92ZVwiLCB0aGlzLl9wYWdlKTtcclxuICAgICAgICBsZXQgd2lkZ2UgPSBnYW1lTWdyLnlhb2dhbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICBpZiAod2lkZ2UpIHtcclxuICAgICAgICAgICAgZ2FtZU1nci55YW9nYW4uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudXBkYXRlQWxpZ25tZW50KCk7XHJcbiAgICAgICAgICAgIHdpZGdlLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZ2FtZU1nci5idG5Ta2lsbCA9IGNjLmZpbmQoXCJCdG5Ta2lsbFwiLCB0aGlzLl9wYWdlKTtcclxuICAgICAgICAvLyBnYW1lTWdyLmJ0blNraWxsQWQgPSBjYy5maW5kKFwiQnRuU2tpbGxBZFwiLCB0aGlzLl9wYWdlKTtcclxuICAgICAgICBnYW1lTWdyLnJhbmdlZFdlYXBvbk1lc3MgPSB0aGlzLl9wYWdlLmdldENoaWxkQnlOYW1lKFwicmFuZ2VkV2VhcG9uXCIpO1xyXG4gICAgICAgIGdhbWVNZ3IuYW1tbyA9IGdhbWVNZ3IucmFuZ2VkV2VhcG9uTWVzcy5nZXRDaGlsZEJ5TmFtZShcImFtbW9cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICBnYW1lTWdyLnJhbmdlZFdlYXBvbkFkTWVzcyA9IHRoaXMuX3BhZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJyYW5nZWRXZWFwb25BZFwiKTtcclxuICAgICAgICAvLyBnYW1lTWdyLmFtbW9BZCA9IGdhbWVNZ3IucmFuZ2VkV2VhcG9uQWRNZXNzLmdldENoaWxkQnlOYW1lKFwiYW1tb1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIGdhbWVNZ3IucWx6YyA9IHRoaXMuX3BhZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJxbHpjXCIpO1xyXG4gICAgICAgIGdhbWVNZ3IuQnRuQnVsbGV0ID0gdGhpcy5fcGFnZS5nZXRDaGlsZEJ5TmFtZShcIkJ0bkJ1bGxldFwiKTtcclxuICAgICAgICAvLyDlnLDkuIvln45cclxuICAgICAgICBpZiAoY29jb3N6LmdhbWVNb2RlID09IDYgfHwgY29jb3N6LmdhbWVNb2RlID09IDgpIHtcclxuICAgICAgICAgICAgLy8gYm9zc+ihgOadoVxyXG4gICAgICAgICAgICBnYW1lTWdyLm1vZGVsNl9ib3NzQmFyID0gdGhpcy5fcGFnZS5nZXRDaGlsZEJ5TmFtZShcImJvc3NCYXJcIikuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcclxuICAgICAgICAgICAgLy8g57uP6aqM5p2hXHJcbiAgICAgICAgICAgIGdhbWVNZ3IubW9kZWw2X2ppbmd5YW5CYXIgPSB0aGlzLl9wYWdlLmdldENoaWxkQnlOYW1lKFwiamluZ3lhbkJhclwiKS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xyXG4gICAgICAgICAgICAvLyDmioDog73mnaFcclxuICAgICAgICAgICAgZ2FtZU1nci5tb2RlbDZfc2tpbGxTY3JvbGxWaWV3ID0gdGhpcy5fcGFnZS5nZXRDaGlsZEJ5TmFtZShcInNraWxsU2Nyb2xsVmlld1wiKS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XHJcbiAgICAgICAgICAgIGdhbWVNZ3IubW9kZWw2X3NraWxsU2Nyb2xsVmlld19jb250ZW50ID0gY2MuZmluZChcInNraWxsU2Nyb2xsVmlldy92aWV3L2NvbnRlbnRcIiwgdGhpcy5fcGFnZSk7XHJcbiAgICAgICAgICAgIGdhbWVNZ3IubW9kZWw2X3NraWxsU2Nyb2xsVmlld19pdGVtID0gdGhpcy5fcGFnZS5nZXRDaGlsZEJ5TmFtZShcIml0ZW1cIik7XHJcbiAgICAgICAgICAgIC8vIOWktOWDj1xyXG4gICAgICAgICAgICBsZXQgQnRuU2h1eGluZyA9IHRoaXMuX3BhZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJCdG5TaHV4aW5nXCIpO1xyXG4gICAgICAgICAgICBnYW1lTWdyLm1vZGVsNl90b3V4aWFuZyA9IEJ0blNodXhpbmcuZ2V0Q2hpbGRCeU5hbWUoXCJ0b3V4aWFuZ1wiKTtcclxuICAgICAgICAgICAgbGV0IHByZSA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiaGVhZFwiICsgKGNvY29zei5nYW1lTWdyLmdhbWVDdHIuY3VyVXNlU2tpbklkICsgMSksIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgIGlmIChwcmUpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b3V4aWFuZyA9IGNjLmluc3RhbnRpYXRlKHByZSk7XHJcbiAgICAgICAgICAgICAgICB0b3V4aWFuZy5zZXRQYXJlbnQoZ2FtZU1nci5tb2RlbDZfdG91eGlhbmcpO1xyXG4gICAgICAgICAgICAgICAgdG91eGlhbmcuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvdXhpYW5nLmNoaWxkcmVuWzBdKSB7IHRvdXhpYW5nLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlOyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5bGe5oCn5oyJ6ZKuXHJcbiAgICAgICAgICAgIGdhbWVNZ3IubW9kZWw2X2J0blNodXhpbmcgPSB0aGlzLl9wYWdlLmdldENoaWxkQnlOYW1lKFwiQnRuU2h1eGluZ1wiKTtcclxuICAgICAgICAgICAgaWYgKGdhbWVNZ3IubW9kZWw2X2J0blNodXhpbmcpIGdhbWVNZ3IubW9kZWw2X2J0blNodXhpbmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZ2FtZU1nci5tb2RlbDZfc2h1eGluZyA9IEJ0blNodXhpbmcuZ2V0Q2hpbGRCeU5hbWUoXCJzaHV4aW5nXCIpO1xyXG4gICAgICAgICAgICBnYW1lTWdyLm1vZGVsNl9zaHV4aW5nLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyDnrYnnuqdcclxuICAgICAgICAgICAgZ2FtZU1nci5tb2RlbDZfbGV2ZWxMYWJlbCA9IHRoaXMuX3BhZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJsZXZlbExhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIC8vIOiuoeaXtlxyXG4gICAgICAgICAgICBnYW1lTWdyLm1vZGVsNl90aW1lTGFiZWwgPSB0aGlzLl9wYWdlLmdldENoaWxkQnlOYW1lKFwidGltZUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIC8vIGJvc3Pmj5DnpLpcclxuICAgICAgICAgICAgZ2FtZU1nci5tb2RlbDZfdHMgPSB0aGlzLl9wYWdlLmdldENoaWxkQnlOYW1lKFwidHNcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuZ3VpZGVfc2tpbGwgJiYgKGNvY29zei5nZXRDb25maWdCeUtleShcImlzVmlkZW9BZF9RcGJ6XCIpICE9IFwiZmFsc2VcIiB8fCBjb2Nvc3ouZ2V0Q29uZmlnQnlLZXkoXCJpc1ZpZGVvQWRfQ2l0aWVcIikgIT0gXCJmYWxzZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IHR3OiBjYy5Ud2VlbiA9IGNjLnR3ZWVuKHRoaXMuX3BhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDEpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU1nci5pc0dhbWVTdGFydCAmJiAhY29jb3N6LmlzUGF1c2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCJjb3VudDpcIiwgY291bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouZ2V0Q29uZmlnQnlLZXkoXCJpc1ZpZGVvQWRfUXBielwiKSAhPSBcImZhbHNlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U2tpbGwodGhpcy5fYnRuUXBieik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCA9PSA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvY29zei5nZXRDb25maWdCeUtleShcImlzVmlkZW9BZF9DaXRpZVwiKSAhPSBcImZhbHNlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U2tpbGwodGhpcy5fYnRuQ3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnQgPiA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuZ3VpZGVfc2tpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dyAmJiB0dy5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC51bmlvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdhbWVNZ3Iuc3RhcnRHYW1lKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd0FkKCk7XHJcbiAgICAgICAgY2MuZ2FtZS5vbihDb25zdGFudC5FX0dBTUVfTE9HSUMsIHRoaXMuX29uR2FtZU1lc3NhZ2VIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR0aW1lRnVuYyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKCFnYW1lTWdyLmlzR2FtZVN0YXJ0IHx8IGNvY29zei5pc1BhdXNlKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNldEludGVydmFsXCIpO1xyXG4gICAgICAgICAgICBpZighdGhpcy5jdEFjdGlvbil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0VGltZSAtPSAwLjA1O1xyXG4gICAgICAgICAgICAgICAgbGV0IGN0bWFzayA9IHRoaXMuX2J0bkN0LmdldENoaWxkQnlOYW1lKCdtYXNrTm9kZScpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICAgICAgY3RtYXNrLmZpbGxSYW5nZSAtPSBOdW1iZXIoKDAuMDUgLyA2MCkpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3RtYXNrLmZpbGxSYW5nZSk7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmN0VGltZSA8PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0QWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdG1hc2suZmlsbFJhbmdlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9idG5DdC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3RUaW1lID0gNjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnFwYnpBY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xcGJ6VGltZSAtPSAwLjA1O1xyXG4gICAgICAgICAgICAgICAgbGV0IHFwYnptYXNrID0gdGhpcy5fYnRuUXBiei5nZXRDaGlsZEJ5TmFtZSgnbWFza05vZGUnKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgICAgIHFwYnptYXNrLmZpbGxSYW5nZSAtPSBOdW1iZXIoKDAuMDUgLyAzMDApKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHFwYnptYXNrLmZpbGxSYW5nZSk7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnFwYnpUaW1lIDw9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXBiekFjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcXBiem1hc2suZmlsbFJhbmdlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9idG5RcGJ6LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xcGJ6VGltZSA9IDMwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0uYmluZCh0aGlzKSw1MClcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DbG9zZSgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuc2V0dGltZUZ1bmMpO1xyXG4gICAgICAgIGNjLmdhbWUudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgICAgIHV0aWxzLmFkTWFuYWdlci5oaWRlQmxvY2tBZCgpO1xyXG4gICAgICAgIHV0aWxzLmFkTWFuYWdlci5oaWRlTmF0aXZlVHJ5R2FtZVdpZGdldCgpO1xyXG4gICAgICAgIHV0aWxzLmhpZGVWaXZvR2FtZVBvcnRhbFdpZGdldCgpO1xyXG4gICAgICAgIHV0aWxzLmFkTWFuYWdlci5IaWRlU2luZ2xlTmF0aXZlQWQoKTtcclxuICAgICAgICBpZiAoUGxhdFV0aWxzLklzV2VjaGF0KSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmFkTWFuYWdlci5oaWRlQ3VzdG9tQWQoeyBsb2NhdGlvbjogMyB9KTtcclxuICAgICAgICAgICAgdXRpbHMuYWRNYW5hZ2VyLmhpZGVDdXN0b21BZCh7IGxvY2F0aW9uOiA0IH0pO1xyXG4gICAgICAgICAgICB1dGlscy5hZE1hbmFnZXIuaGlkZUN1c3RvbUFkKHsgbG9jYXRpb246IDggfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNWSVZPKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmFkTWFuYWdlci5oaWRlQ3VzdG9tQWQoeyBsb2NhdGlvbjogQmFubmVyTG9jYXRpb24uR2FtZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzaG93QWQoKSB7XHJcbiAgICAgICAgLy8g5b2V5bGPXHJcbiAgICAgICAgdXRpbHMuc2hvd1JlY29yZFdpZGdldCh7IGdyb3VwOiBcImRlZmF1bHRcIiwgc2NhbGU6IDEsIHRvcDogNTAsIGxlZnQ6IDEwMCwgcGFyZW50OiB0aGlzLl9wYWdlIH0pO1xyXG4gICAgICAgIGlmIChjb2Nvc3ouaXNTaG93QWQpIHtcclxuICAgICAgICAgICAgLy8gYmFubmVyXHJcbiAgICAgICAgICAgIGlmICghY29jb3N6LmlzU2hvd0dhbWVCYW5uZXIgfHwgUGxhdFV0aWxzLklzV2VjaGF0IHx8IFBsYXRVdGlscy5Jc0RvdXlpbiB8fCBQbGF0VXRpbHMuSXNBbmRyb2lkRG91WWluKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5hZE1hbmFnZXIuSGlkZUJhbm5lcihCYW5uZXJMb2NhdGlvbi5HYW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmFkTWFuYWdlci5TaG93QmFubmVyKEJhbm5lckxvY2F0aW9uLkdhbWUsIHsgd2lkdGg6IDAuMSwgYm90dG9tOiAwIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHV0aWxzLmFkTWFuYWdlci5zaG93TmF0aXZlVHJ5R2FtZVdpZGdldCh7IGxlZnQ6IDEwLCB0b3A6IDUwMCwgc2NhbGU6IDEsIHBhcmVudDogdGhpcy5fcGFnZSB9KTtcclxuICAgICAgICAgICAgLy8g5Y6f55Sf5bm/5ZGKXHJcbiAgICAgICAgICAgIGlmIChQbGF0VXRpbHMuSXNXZWNoYXQpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmFkTWFuYWdlci5zaG93Q3VzdG9tQWQoeyBsb2NhdGlvbjogMyB9KTtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmFkTWFuYWdlci5zaG93Q3VzdG9tQWQoeyBsb2NhdGlvbjogNCB9KTtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmFkTWFuYWdlci5zaG93Q3VzdG9tQWQoeyBsb2NhdGlvbjogOCB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNWSVZPKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5hZE1hbmFnZXIuc2hvd0N1c3RvbUFkKHsgbG9jYXRpb246IEJhbm5lckxvY2F0aW9uLkdhbWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NraWxsKG46IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQgd2lkZ2V0ID0gbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICBpZiAod2lkZ2V0KSB3aWRnZXQuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChuICYmIG4uaXNWYWxpZCkge1xyXG4gICAgICAgICAgICBjb2Nvc3oucGF1c2VDb3VudCsrO1xyXG4gICAgICAgICAgICBuLnNldFBvc2l0aW9uKDAsIGNjLndpblNpemUuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIG4uc2NhbGUgPSAyO1xyXG4gICAgICAgICAgICBuLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2FsbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG4uc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG4pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faGFuZEFuaSAmJiB0aGlzLl9oYW5kQW5pLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRBbmkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEsIHg6IC0gY2Mud2luU2l6ZS53aWR0aCAvIDIgKyB3aWRnZXQubGVmdCArIG4ud2lkdGggLyAyLCB5OiAtIGNjLndpblNpemUuaGVpZ2h0IC8gMiArIHdpZGdldC5ib3R0b20gKyBuLmhlaWdodCAvIDIgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aWRnZXQpIHdpZGdldC5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LnBhdXNlQ291bnQtLTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG4ub25jZShjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGNhbGwsIHRoaXMpO1xyXG4gICAgICAgICAgICBuLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKG4pXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyB5OiAwIH0sIHsgZWFzaW5nOiBcImJhY2tPdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9oYW5kQW5pICYmIHRoaXMuX2hhbmRBbmkuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kQW5pLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kQW5pLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcEFuaSA9IHRoaXMuX2hhbmRBbmkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwQW5pKSBzcEFuaS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5kZWxheSg0KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG4ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgY2FsbCwgdGhpcylcclxuICAgICAgICAgICAgICAgICAgICBjYWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWFqOWxj+i9sOeCuOWKqOeUu1xyXG4gICAgZWZmZWN0X3FwYnooKSB7XHJcbiAgICAgICAgbGV0IHByZSA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiZWZmZWN0X3FwYnpcIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICBpZiAocHJlKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUocHJlKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihnYW1lTWdyLnBsYXllclRzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KDAuMylcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnBsYXlFZmZlY3QoXCJRdWFuUGluZ0Jhb1poYVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9HQU1FX0xPR0lDLCB7IHR5cGU6IENvbnN0YW50LkVfQWxsem9tYmllX0Rlc3RvcnkgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnVuaW9uKClcclxuICAgICAgICAgICAgICAgIC5yZXBlYXQoNClcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHsgbm9kZS5kZXN0cm95KCk7IH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25HYW1lTWVzc2FnZUhhbmRsZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkgeyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfb25CdG5DbGlja0hhbmRsZXIoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheUJ0bkVmZmVjdCgpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyYW5nZWRXZWFwb25BZFwiOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZU1nci5yYW5nZWRXZWFwb25BZE1lc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWRJY29uID0gZ2FtZU1nci5yYW5nZWRXZWFwb25BZE1lc3MuZ2V0Q2hpbGRCeU5hbWUoXCJhZEljb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFkSWNvbiAmJiBhZEljb24uYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLlNlbmRFdmVudChcIuinhumikS3pq5jnuqfmrablmagt5pKt5pS+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei53YXRjaEFEKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLlNlbmRFdmVudChcIuinhumikS3pq5jnuqfmrablmagt5oiQ5YqfXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZEljb24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnVzZVJhbmdlZFdlYXBvbkFkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnJhbmdlZFdlYXBvbkFkTWVzcy5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5TZW5kRXZlbnQoXCLop4bpopEt6auY57qn5q2m5ZmoLeWksei0pVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnVzZVJhbmdlZFdlYXBvbkFkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcInJhbmdlZFdlYXBvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBnYW1lTWdyLnVzZVJhbmdlZFdlYXBvbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIkJ0blBhdXNlXCI6IHtcclxuICAgICAgICAgICAgICAgIGNvY29zei51aU1nci5vcGVuUGFuZWwoUGFuZWxOYW1lLlVJUGF1c2VQYW5lbCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiQnRuQnVsbGV0XCI6IHtcclxuICAgICAgICAgICAgICAgIGlmIChnYW1lTWdyLkJ0bkJ1bGxldCAmJiBnYW1lTWdyLnBsYXllclRzICYmIGdhbWVNZ3IucGxheWVyVHMuY3VyV2VhcG9uICYmIGdhbWVNZ3IucGxheWVyVHMuY3VyV2VhcG9uLmlzUmFuZ2VXZWFwb24pXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1nci5wbGF5ZXJUcy5jdXJXZWFwb24ucmVsb2FkQnVsbGV0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiQnRuU2h1eGluZ1wiOiB7XHJcbiAgICAgICAgICAgICAgICBnYW1lTWdyLm1vZGVsNl9zaHV4aW5nLmFjdGl2ZSA9ICFnYW1lTWdyLm1vZGVsNl9zaHV4aW5nLmFjdGl2ZTtcclxuICAgICAgICAgICAgICAgIGdhbWVNZ3IudXBkYXRlX21vZGVsNl9zaHV4aW5nKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiQnRuSGlkZUJhbm5lclwiOiB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5TZW5kRXZlbnQoXCLop4bpopEt5ri45oiP5Lit5Y675bm/5ZGKLeaSreaUvlwiKVxyXG4gICAgICAgICAgICAgICAgY29jb3N6LndhdGNoQUQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLlNlbmRFdmVudChcIuinhumikS3muLjmiI/kuK3ljrvlub/lkYot5oiQ5YqfXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IuY2FuU0hvd0dhbWVCYW5uZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hZE1hbmFnZXIuSGlkZUJhbm5lcihCYW5uZXJMb2NhdGlvbi5HYW1lKTtcclxuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5TZW5kRXZlbnQoXCLop4bpopEt5ri45oiP5Lit5Y675bm/5ZGKLeWksei0pVwiKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiQnRuQ3RcIjoge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2J0bkN0ICYmIHRoaXMuX2J0bkN0LmdldENoaWxkQnlOYW1lKFwic2hhcmVcIikgJiYgdGhpcy5fYnRuQ3QuZ2V0Q2hpbGRCeU5hbWUoXCJzaGFyZVwiKS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5TZW5kRXZlbnQoXCLliIbkuqst56OB6ZOBXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LnNoYXJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuU2VuZEV2ZW50KFwi5YiG5LqrLeejgemTgS3miJDlip9cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g56OB6ZOB5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX1NraWxsX0NpdGllKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLlNlbmRFdmVudChcIuWIhuS6qy3no4Hpk4Et5aSx6LSlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2J0bkN0ICYmIHRoaXMuX2J0bkN0LmdldENoaWxkQnlOYW1lKFwidmlkZW9cIikgJiYgdGhpcy5fYnRuQ3QuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb1wiKS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5TZW5kRXZlbnQoXCLop4bpopEt56OB6ZOBLeaSreaUvlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvY29zei53YXRjaEFEKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuU2VuZEV2ZW50KFwi6KeG6aKRLeejgemTgS3miJDlip9cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g56OB6ZOB5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX1NraWxsX0NpdGllKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLlNlbmRFdmVudChcIuinhumikS3no4Hpk4Et5aSx6LSlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOejgemTgeS6i+S7tlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY3RBY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3RtYXNrID0gdGhpcy5fYnRuQ3QuZ2V0Q2hpbGRCeU5hbWUoJ21hc2tOb2RlJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0bWFzay5maWxsUmFuZ2UgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0QWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2J0bkN0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9Ta2lsbF9DaXRpZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIkJ0blFwYnpcIjoge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2J0blFwYnogJiYgdGhpcy5fYnRuUXBiei5nZXRDaGlsZEJ5TmFtZShcInNoYXJlXCIpICYmIHRoaXMuX2J0blFwYnouZ2V0Q2hpbGRCeU5hbWUoXCJzaGFyZVwiKS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5TZW5kRXZlbnQoXCLliIbkuqst5YWo5bGP6L2w54K4XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LnNoYXJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuU2VuZEV2ZW50KFwi5YiG5LqrLeWFqOWxj+i9sOeCuC3miJDlip9cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5YWo5bGP6L2w54K45Yqo55S7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0X3FwYnooKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLlNlbmRFdmVudChcIuWIhuS6qy3lhajlsY/ovbDngrgt5aSx6LSlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2J0blFwYnogJiYgdGhpcy5fYnRuUXBiei5nZXRDaGlsZEJ5TmFtZShcInZpZGVvXCIpICYmIHRoaXMuX2J0blFwYnouZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb1wiKS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5TZW5kRXZlbnQoXCLop4bpopEt5YWo5bGP6L2w54K4LeaSreaUvlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvY29zei53YXRjaEFEKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuU2VuZEV2ZW50KFwi6KeG6aKRLeWFqOWxj+i9sOeCuC3miJDlip9cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5YWo5bGP6L2w54K45Yqo55S7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0X3FwYnooKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLlNlbmRFdmVudChcIuinhumikS3lhajlsY/ovbDngrgt5aSx6LSlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWFqOWxj+i9sOeCuOWKqOeUu1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucXBiekFjdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBxcGJ6bWFzayA9IHRoaXMuX2J0blFwYnouZ2V0Q2hpbGRCeU5hbWUoJ21hc2tOb2RlJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHFwYnptYXNrLmZpbGxSYW5nZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXBiekFjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9idG5RcGJ6LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdF9xcGJ6KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==