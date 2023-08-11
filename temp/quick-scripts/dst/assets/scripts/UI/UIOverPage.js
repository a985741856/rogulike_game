
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI/UIOverPage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9632KbIPtPCovZ1PzJnE6R', 'UIOverPage');
// scripts/UI/UIOverPage.ts

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
var UpgradeMgr_1 = require("../Game/UpgradeMgr");
// @ts-ignore
var i18n = require('LanguageData');
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIOverPage = /** @class */ (function (_super) {
    __extends(UIOverPage, _super);
    function UIOverPage() {
        var _this = _super.call(this, Constant_1.PageName.UIOverPage) || this;
        _this._panel = null;
        _this._mask = null;
        _this._btnContinue = null;
        _this._btnHome = null;
        _this._btnNext = null;
        _this._btnLay = null;
        _this._isToHome = false;
        _this.isValid() && _this.onLoad();
        return _this;
    }
    UIOverPage.prototype.onLoad = function () {
        this._mask = cc.find("Mask", this._page);
        this._panel = cc.find("Panel", this._page);
        this._btnLay = cc.find("btnLay", this._panel);
        this._btnContinue = cc.find("BtnContinue", this._btnLay);
        if (CocosZ_1.cocosz.gameMode == 6) {
            if (CocosZ_1.cocosz.dataMgr.PhysicalCount > 0) {
                this._btnContinue.getComponent(cc.Button).interactable = true;
            }
            else {
                this._btnContinue.getComponent(cc.Button).interactable = false;
            }
        }
        this._btnContinue.on(cc.Node.EventType.TOUCH_END, this._onBtnClickHandler, this);
        this._btnHome = cc.find("BtnHome", this._btnLay);
        this._btnHome.on(cc.Node.EventType.TOUCH_END, this._onBtnClickHandler, this);
        this._btnNext = cc.find("BtnNext", this._btnLay);
        this._btnNext.on(cc.Node.EventType.TOUCH_END, this._onBtnClickHandler, this);
        if (CocosZ_1.cocosz.gameMode == 8 && Constant_1.default.currentLevel < 13) {
            this._btnNext.active = gameMgr_1.gameMgr.isWin;
        }
    };
    UIOverPage.prototype.onOpen = function () {
        Utils_1.utils.SendEvent("页面-结算-" + (gameMgr_1.gameMgr.isWin ? "胜利" : "失败"));
        this.showAd();
        this._initPanel();
        CocosZ_1.cocosz.dataMgr.TotoalCount_6++;
    };
    UIOverPage.prototype.onClose = function () {
        cc.game.targetOff(this);
        Utils_1.utils.hideVivoGamePortalWidget();
        Utils_1.utils.hideOppoGameDrawerAdWidget();
        Utils_1.utils.adManager.hideBlockAd();
        Utils_1.utils.adManager.hideNativeTryGameWidget();
        Utils_1.utils.adManager.HideSingleNativeAd();
        if (PlatUtils_1.default.IsWechat) {
            Utils_1.utils.adManager.HideBanner(YZ_Constant_1.BannerLocation.Over);
            Utils_1.utils.adManager.hideCustomAd({ location: 5 });
            Utils_1.utils.adManager.hideCustomAd({ location: 6 });
            Utils_1.utils.adManager.hideCustomAd({ location: 7 });
        }
        else if (PlatUtils_1.default.IsVIVO) {
            Utils_1.utils.adManager.hideCustomAd({ location: YZ_Constant_1.BannerLocation.Over });
        }
    };
    UIOverPage.prototype.showAd = function () {
        Utils_1.utils.adManager.ShowBanner(YZ_Constant_1.BannerLocation.Over, { width: 0.1, bottom: 1 });
        // 显示积木广告
        Utils_1.utils.adManager.showBlockAd({ top: 500 });
        // 悬浮icon
        Utils_1.utils.adManager.showNativeTryGameWidget({ right: 95, top: 500, scale: 1, parent: this._page });
        // 原生广告
        if (PlatUtils_1.default.IsWechat) {
            Utils_1.utils.adManager.showCustomAd({ location: 5 });
            Utils_1.utils.adManager.showCustomAd({ location: 6 });
            Utils_1.utils.adManager.showCustomAd({ location: 7 });
        }
        else if (PlatUtils_1.default.IsVIVO) {
            Utils_1.utils.adManager.showCustomAd({ location: YZ_Constant_1.BannerLocation.Over });
        }
        // 互推
        Utils_1.utils.showTryGamesWidget({ group: 'default', scale: 1, top: 180, right: 25, parent: this._page, location: YZ_Constant_1.BannerLocation.Over });
        Utils_1.utils.showMoreGamesWidget({ group: 'default', scale: 1, top: 300, left: 25, parent: this._page, location: YZ_Constant_1.BannerLocation.Over });
        Utils_1.utils.showRecommendGamesList({ group: 'default', scale: 1, parent: this._page, bottom: 1000 });
        Utils_1.utils.showVivoGamePortalWidget({ top: 500, location: YZ_Constant_1.BannerLocation.Over });
        Utils_1.utils.showOppoGameDrawerAdWidget({ bottom: 500, location: YZ_Constant_1.BannerLocation.Over });
        Utils_1.utils.showOppoRecBanner({ bottom: 500, left: 0, location: YZ_Constant_1.BannerLocation.Over });
        var result = null;
        if (gameMgr_1.gameMgr && gameMgr_1.gameMgr.isWin) {
            Utils_1.utils.GameWin(CocosZ_1.cocosz.getLevelId().toString());
        }
        else if (gameMgr_1.gameMgr && gameMgr_1.gameMgr.isFail) {
            Utils_1.utils.GameFail(CocosZ_1.cocosz.getLevelId().toString());
        }
        // //当返回值不为空，并且返回值的node不为空，会返回6个互推节点
        if (result && result.node) {
            //获取到节点后，将返回值的node节点添加到指定节点上。
            result.node.position = cc.v2(0, 0);
            this._page.addChild(result.node, 0);
        }
    };
    UIOverPage.prototype.getSkillIDName = function (id) {
        return id + (UpgradeMgr_1.upgradeMgr.upgradeSkillMaxLevelArr[id] > 1 ? "_" + (UpgradeMgr_1.upgradeMgr.upgradeSkillArr[id] + 1) : "");
    };
    UIOverPage.prototype._initPanel = function () {
        // 弹窗效果
        this._mask.opacity = 0;
        cc.tween(this._mask).to(0.2, { opacity: 120 }).start();
        this._panel.scale = 0;
        cc.tween(this._panel).to(0.3, { scale: 1 }, { easing: "backOut" }).start();
        if (UpgradeMgr_1.upgradeMgr && UpgradeMgr_1.upgradeMgr.isValid) {
            // boss
            var kuang_boss = this._panel.getChildByName("kuang_boss");
            if (UpgradeMgr_1.upgradeMgr.bossKillId.length) {
                var kuang_boss_layout = kuang_boss.getChildByName("layout");
                if (kuang_boss_layout) {
                    kuang_boss_layout.active = true;
                    kuang_boss_layout.children.forEach(function (v, i) {
                        if (UpgradeMgr_1.upgradeMgr.bossKillId.includes(parseInt(v.name))) {
                            v.active = true;
                        }
                        else {
                            v.active = false;
                        }
                    });
                }
            }
            else {
                var kuang_boss_no = kuang_boss.getChildByName("no");
                if (kuang_boss_no) {
                    kuang_boss_no.active = true;
                }
            }
            // 技能
            var kuang_skill = this._panel.getChildByName("kuang_skill");
            if (UpgradeMgr_1.upgradeMgr.upgradeSkillArr.includes(1) || UpgradeMgr_1.upgradeMgr.upgradeSkillArr.includes(2) || UpgradeMgr_1.upgradeMgr.upgradeSkillArr.includes(3)) {
                var skill_scrollView = kuang_skill.getChildByName("skillScrollView");
                if (skill_scrollView) {
                    skill_scrollView.active = true;
                    var skill_content_1 = cc.find("view/content", skill_scrollView);
                    if (skill_content_1) {
                        UpgradeMgr_1.upgradeMgr.upgradeSkillArr.forEach(function (level, id) {
                            if (UpgradeMgr_1.upgradeMgr.upgradeSkillMaxLevelArr[id] == 3) {
                                // for (let i = 1; i <= level; i++) {
                                var icon = CocosZ_1.cocosz.resMgr.getRes("zombieSkill_icon_" + id + "_" + level, cc.SpriteFrame);
                                if (icon) {
                                    var node = new cc.Node();
                                    var sprit = node.addComponent(cc.Sprite);
                                    sprit.spriteFrame = icon;
                                    sprit.sizeMode = cc.Sprite.SizeMode.CUSTOM;
                                    node.setContentSize(70, 70);
                                    skill_content_1.addChild(node);
                                }
                                // }
                            }
                            else if (level > 0) {
                                var icon = CocosZ_1.cocosz.resMgr.getRes("zombieSkill_icon_" + id, cc.SpriteFrame);
                                if (icon) {
                                    var node = new cc.Node();
                                    var sprit = node.addComponent(cc.Sprite);
                                    sprit.spriteFrame = icon;
                                    sprit.sizeMode = cc.Sprite.SizeMode.CUSTOM;
                                    node.setContentSize(70, 70);
                                    skill_content_1.addChild(node);
                                }
                            }
                        });
                    }
                }
            }
            else {
                var kuang_skill_no = kuang_skill.getChildByName("no");
                if (kuang_skill_no) {
                    kuang_skill_no.active = true;
                }
            }
            // 结算信息
            var info = cc.find("info", this._panel);
            if (info) {
                // 标题
                cc.log("iswin:", gameMgr_1.gameMgr.isWin, " isFail:", gameMgr_1.gameMgr.isFail);
                info.getChildByName('tittle').children[0].active = gameMgr_1.gameMgr.isWin;
                info.getChildByName('tittle').children[1].active = gameMgr_1.gameMgr.isFail;
                // 历史最佳
                // 游戏时间
                info.getChildByName('time2').getComponent(cc.Label).string = CocosZ_1.cocosz.StoHMS(CocosZ_1.cocosz.dataMgr.best_time);
                // 击杀数
                info.getChildByName('kill2').getComponent(cc.Label).string = CocosZ_1.cocosz.dataMgr.best_kill.toString();
                // 等级
                info.getChildByName('level2').getComponent(cc.Label).string = CocosZ_1.cocosz.dataMgr.best_level.toString();
                // 金币
                info.getChildByName('coin2').getComponent(cc.Label).string = CocosZ_1.cocosz.dataMgr.best_coin.toString();
                // 本局详情
                var newRecard1 = info.getChildByName('newRecard1');
                var newRecard2 = info.getChildByName('newRecard2');
                var newRecard3 = info.getChildByName('newRecard3');
                var newRecard4 = info.getChildByName('newRecard4');
                // 游戏时间
                info.getChildByName('time1').getComponent(cc.Label).string = CocosZ_1.cocosz.StoHMS(gameMgr_1.gameMgr.GameTime);
                if (gameMgr_1.gameMgr.GameTime > CocosZ_1.cocosz.dataMgr.best_time) {
                    info.getChildByName('time1').color = cc.Color.RED;
                    CocosZ_1.cocosz.dataMgr.best_time = gameMgr_1.gameMgr.GameTime;
                    newRecard1.active = true;
                }
                // 击杀数
                info.getChildByName('kill1').getComponent(cc.Label).string = UpgradeMgr_1.upgradeMgr.zombieKillNum.toString();
                if (UpgradeMgr_1.upgradeMgr.zombieKillNum > CocosZ_1.cocosz.dataMgr.best_kill) {
                    info.getChildByName('kill1').color = cc.Color.RED;
                    CocosZ_1.cocosz.dataMgr.best_kill = UpgradeMgr_1.upgradeMgr.zombieKillNum;
                    newRecard2.active = true;
                }
                // 等级
                info.getChildByName('level1').getComponent(cc.Label).string = UpgradeMgr_1.upgradeMgr.curLevel.toString();
                if (UpgradeMgr_1.upgradeMgr.curLevel > CocosZ_1.cocosz.dataMgr.best_level) {
                    info.getChildByName('level1').color = cc.Color.RED;
                    CocosZ_1.cocosz.dataMgr.best_level = UpgradeMgr_1.upgradeMgr.curLevel;
                    newRecard3.active = true;
                }
                // 金币
                var count = UpgradeMgr_1.upgradeMgr.zombieKillNum + UpgradeMgr_1.upgradeMgr.curLevel * 10 + Math.min(500, Math.ceil(gameMgr_1.gameMgr.GameTime / 10));
                CocosZ_1.cocosz.dataMgr.CoinCount += count;
                info.getChildByName('coin1').getComponent(cc.Label).string = count.toString();
                if (count > CocosZ_1.cocosz.dataMgr.best_coin) {
                    info.getChildByName('coin1').color = cc.Color.RED;
                    CocosZ_1.cocosz.dataMgr.best_coin = count;
                    newRecard4.active = true;
                }
                var url = Constant_1.default.WEB_LINE_TITLE + '/qwk/assets/updateAssetsByGame/' + Constant_1.default.PERSON_TPKKEN + "/" + Constant_1.default.GAME_ID + "/3/"; //用户id与游戏id目前为1和1
                Utils_1.utils.showLog("上报数据, url=", url);
                url += count;
                Utils_1.utils.commomHttpRequest(url, function (ret, jsdata) {
                    if (ret) {
                        Utils_1.utils.showLog("数据上报成功！");
                    }
                    else {
                        Utils_1.utils.showLog("数据上报失败！");
                    }
                });
            }
        }
    };
    UIOverPage.prototype._onBtnClickHandler = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, CocosZ_1.cocosz.audioMgr.playBtnEffect().catch()];
                    case 1:
                        _a.sent();
                        if (this._isToHome)
                            return [2 /*return*/];
                        switch (event.target.name) {
                            case "BtnContinue": {
                                // 上报 继续游戏
                                if (CocosZ_1.cocosz.gameMode == 6) {
                                    if (CocosZ_1.cocosz.dataMgr.PhysicalCount > 0) {
                                        Utils_1.utils.umaEvent("gamecontinue");
                                        if (CocosZ_1.cocosz.gameMode == 6) {
                                            CocosZ_1.cocosz.dataMgr.PhysicalCount -= 1;
                                            CocosZ_1.cocosz.gameMgr.gameStart(CocosZ_1.cocosz.dataMgr.TotoalCount_6);
                                        }
                                    }
                                }
                                else {
                                    Utils_1.utils.umaEvent("gamecontinue");
                                    CocosZ_1.cocosz.gameMgr.gameStart(CocosZ_1.cocosz.dataMgr.TotoalCount_6);
                                }
                                break;
                            }
                            case "BtnHome": {
                                // 上报 返回首页
                                Utils_1.utils.umaEvent("gamereturn");
                                CocosZ_1.cocosz.sceneMgr.loadScene("Home", function () {
                                    CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UIHomePage);
                                });
                                break;
                            }
                            case "BtnNext": {
                                Utils_1.utils.umaEvent("gamenext");
                                Constant_1.default.currentLevel++;
                                CocosZ_1.cocosz.gameMgr.gameStart(CocosZ_1.cocosz.dataMgr.TotoalCount_6);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UIOverPage = __decorate([
        ccclass
    ], UIOverPage);
    return UIOverPage;
}(UIPage_1.default));
exports.default = UIOverPage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXFVJT3ZlclBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXlDO0FBQ3pDLGtEQUEyRDtBQUMzRCw4Q0FBNkM7QUFDN0MsbUVBQThEO0FBQzlELDJEQUEwRDtBQUMxRCx1RUFBeUU7QUFDekUsMkNBQTBDO0FBQzFDLGlEQUFnRDtBQUNoRCxhQUFhO0FBQ2IsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRS9CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFNO0lBUzFDO1FBQUEsWUFDSSxrQkFBTSxtQkFBUSxDQUFDLFVBQVUsQ0FBQyxTQUU3QjtRQVhPLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsYUFBTyxHQUFhLElBQUksQ0FBQztRQXNPekIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQWxPL0IsS0FBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7SUFDcEMsQ0FBQztJQUNTLDJCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekQsSUFBRyxlQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBQztZQUNwQixJQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBQztnQkFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7YUFDakU7aUJBQUk7Z0JBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFDbEU7U0FDSjtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdFLElBQUcsZUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksa0JBQVEsQ0FBQyxZQUFZLEdBQUcsRUFBRSxFQUFDO1lBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLGlCQUFPLENBQUMsS0FBSyxDQUFDO1NBQ3hDO0lBRUwsQ0FBQztJQUVTLDJCQUFNLEdBQWhCO1FBQ0ksYUFBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixlQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFUyw0QkFBTyxHQUFqQjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLGFBQUssQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2pDLGFBQUssQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ25DLGFBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUIsYUFBSyxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQzFDLGFBQUssQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNyQyxJQUFJLG1CQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3BCLGFBQUssQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLDRCQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEQsYUFBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QyxhQUFLLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLGFBQUssQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakQ7YUFBTSxJQUFJLG1CQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3pCLGFBQUssQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsUUFBUSxFQUFFLDRCQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNuRTtJQUNMLENBQUM7SUFFUywyQkFBTSxHQUFoQjtRQUNJLGFBQUssQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLDRCQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzRSxTQUFTO1FBQ1QsYUFBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMxQyxTQUFTO1FBQ1QsYUFBSyxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMvRixPQUFPO1FBQ1AsSUFBSSxtQkFBUyxDQUFDLFFBQVEsRUFBRTtZQUNwQixhQUFLLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLGFBQUssQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUMsYUFBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNqRDthQUFNLElBQUksbUJBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDekIsYUFBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxRQUFRLEVBQUUsNEJBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ25FO1FBQ0QsS0FBSztRQUNMLGFBQUssQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLDRCQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNqSSxhQUFLLENBQUMsbUJBQW1CLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSw0QkFBYyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDakksYUFBSyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9GLGFBQUssQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLDRCQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM1RSxhQUFLLENBQUMsMEJBQTBCLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSw0QkFBYyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDakYsYUFBSyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSw0QkFBYyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFakYsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksaUJBQU8sSUFBSSxpQkFBTyxDQUFDLEtBQUssRUFBRTtZQUMxQixhQUFLLENBQUMsT0FBTyxDQUFDLGVBQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ2pEO2FBQU0sSUFBSSxpQkFBTyxJQUFJLGlCQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xDLGFBQUssQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDbEQ7UUFDRCxvQ0FBb0M7UUFDcEMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtZQUN2Qiw2QkFBNkI7WUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7SUFFRCxtQ0FBYyxHQUFkLFVBQWUsRUFBVTtRQUNyQixPQUFPLEVBQUUsR0FBRyxDQUFDLHVCQUFVLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyx1QkFBVSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDOUcsQ0FBQztJQUNELCtCQUFVLEdBQVY7UUFDSSxPQUFPO1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDdEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTNFLElBQUksdUJBQVUsSUFBSSx1QkFBVSxDQUFDLE9BQU8sRUFBRTtZQUNsQyxPQUFPO1lBQ1AsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUQsSUFBSSx1QkFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7Z0JBQzlCLElBQUksaUJBQWlCLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDNUQsSUFBSSxpQkFBaUIsRUFBRTtvQkFDbkIsaUJBQWlCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDaEMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO3dCQUNwQyxJQUFJLHVCQUFVLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7NEJBQ2xELENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3lCQUNuQjs2QkFBTTs0QkFDSCxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt5QkFDcEI7b0JBQ0wsQ0FBQyxDQUFDLENBQUE7aUJBQ0w7YUFDSjtpQkFBTTtnQkFDSCxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLGFBQWEsRUFBRTtvQkFDZixhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDL0I7YUFDSjtZQUNELEtBQUs7WUFDTCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM1RCxJQUFJLHVCQUFVLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSx1QkFBVSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksdUJBQVUsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM1SCxJQUFJLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDckUsSUFBSSxnQkFBZ0IsRUFBRTtvQkFDbEIsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDL0IsSUFBSSxlQUFhLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztvQkFDOUQsSUFBSSxlQUFhLEVBQUU7d0JBQ2YsdUJBQVUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLEVBQUU7NEJBQ3pDLElBQUksdUJBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0NBQzdDLHFDQUFxQztnQ0FDakMsSUFBSSxJQUFJLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxLQUFLLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dDQUN4RixJQUFJLElBQUksRUFBRTtvQ0FDTixJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQ0FDekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7b0NBQ3pDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29DQUN6QixLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQ0FDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7b0NBQzVCLGVBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7aUNBQ2hDO2dDQUNMLElBQUk7NkJBQ1A7aUNBQU0sSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dDQUNsQixJQUFJLElBQUksR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dDQUMxRSxJQUFJLElBQUksRUFBRTtvQ0FDTixJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQ0FDekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7b0NBQ3pDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29DQUN6QixLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQ0FDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7b0NBQzVCLGVBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7aUNBQ2hDOzZCQUNKO3dCQUNMLENBQUMsQ0FBQyxDQUFBO3FCQUNMO2lCQUNKO2FBQ0o7aUJBQU07Z0JBQ0gsSUFBSSxjQUFjLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxjQUFjLEVBQUU7b0JBQ2hCLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUNoQzthQUNKO1lBQ0QsT0FBTztZQUNQLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxJQUFJLElBQUksRUFBRTtnQkFDTixLQUFLO2dCQUNMLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGlCQUFPLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBQyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUMxRCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ2pFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxpQkFBTyxDQUFDLE1BQU0sQ0FBQztnQkFDbEUsT0FBTztnQkFDUCxPQUFPO2dCQUNQLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNyRyxNQUFNO2dCQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2pHLEtBQUs7Z0JBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDbkcsS0FBSztnQkFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqRyxPQUFPO2dCQUNQLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ25ELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ25ELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ25ELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ25ELE9BQU87Z0JBQ1AsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDLGlCQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzdGLElBQUksaUJBQU8sQ0FBQyxRQUFRLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7b0JBQzdDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO29CQUNsRCxlQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQztvQkFDNUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7aUJBQzVCO2dCQUNELE1BQU07Z0JBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyx1QkFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDakcsSUFBSSx1QkFBVSxDQUFDLGFBQWEsR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtvQkFDckQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7b0JBQ2xELGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLHVCQUFVLENBQUMsYUFBYSxDQUFDO29CQUNwRCxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDNUI7Z0JBQ0QsS0FBSztnQkFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLHVCQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM3RixJQUFJLHVCQUFVLENBQUMsUUFBUSxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO29CQUNqRCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztvQkFDbkQsZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsdUJBQVUsQ0FBQyxRQUFRLENBQUM7b0JBQ2hELFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUM1QjtnQkFDRCxLQUFLO2dCQUNMLElBQUksS0FBSyxHQUFHLHVCQUFVLENBQUMsYUFBYSxHQUFHLHVCQUFVLENBQUMsUUFBUSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFPLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xILGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQztnQkFDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzlFLElBQUksS0FBSyxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFO29CQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztvQkFDbEQsZUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUNqQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDNUI7Z0JBRUQsSUFBSSxHQUFHLEdBQVcsa0JBQVEsQ0FBQyxjQUFjLEdBQUcsaUNBQWlDLEdBQUcsa0JBQVEsQ0FBQyxhQUFhLEdBQUcsR0FBRyxHQUFHLGtCQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFHLGlCQUFpQjtnQkFDNUosYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLEdBQUcsSUFBSSxLQUFLLENBQUM7Z0JBQ2IsYUFBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNO29CQUNyQyxJQUFJLEdBQUcsRUFBRTt3QkFDTCxhQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3FCQUM1Qjt5QkFBTTt3QkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3FCQUM1QjtnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNOO1NBQ0o7SUFDTCxDQUFDO0lBR2EsdUNBQWtCLEdBQWhDLFVBQWlDLEtBQVU7Ozs7NEJBQ3ZDLHFCQUFNLGVBQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUE3QyxTQUE2QyxDQUFDO3dCQUM5QyxJQUFJLElBQUksQ0FBQyxTQUFTOzRCQUFFLHNCQUFPO3dCQUMzQixRQUFRLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFOzRCQUN2QixLQUFLLGFBQWEsQ0FBQyxDQUFDO2dDQUNoQixVQUFVO2dDQUNWLElBQUcsZUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUM7b0NBQ3BCLElBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFDO3dDQUNoQyxhQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dDQUMvQixJQUFJLGVBQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFOzRDQUN0QixlQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUM7NENBQ2xDLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGVBQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7eUNBQzFEO3FDQUNKO2lDQUNKO3FDQUFJO29DQUNELGFBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7b0NBQy9CLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGVBQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7aUNBRTFEO2dDQUVELE1BQU07NkJBQ1Q7NEJBQ0QsS0FBSyxTQUFTLENBQUMsQ0FBQztnQ0FDWixVQUFVO2dDQUNWLGFBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7Z0NBQzdCLGVBQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtvQ0FDOUIsZUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQ0FDL0MsQ0FBQyxDQUFDLENBQUE7Z0NBQ0YsTUFBTTs2QkFDVDs0QkFDRCxLQUFLLFNBQVMsQ0FBQyxDQUFDO2dDQUNaLGFBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7Z0NBQzNCLGtCQUFRLENBQUMsWUFBWSxFQUFHLENBQUM7Z0NBQ3pCLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGVBQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7NkJBQzFEO3lCQUNKOzs7OztLQUNKO0lBbFJnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBbVI5QjtJQUFELGlCQUFDO0NBblJELEFBbVJDLENBblJ1QyxnQkFBTSxHQW1SN0M7a0JBblJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJUGFnZSBmcm9tIFwiLi4vRnJhbWV3b3JrL1VJUGFnZVwiO1xyXG5pbXBvcnQgQ29uc3RhbnQsIHsgUGFnZU5hbWUgfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcbmltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCBQbGF0VXRpbHMgZnJvbSBcIi4uLy4uL2NvbW1vbi1wbHVnaW4vU2NyaXB0cy9QbGF0VXRpbHNcIjtcclxuaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwiLi4vLi4vY29tbW9uLXBsdWdpbi9TY3JpcHRzL1V0aWxzXCI7XHJcbmltcG9ydCB7IEJhbm5lckxvY2F0aW9uIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi1wbHVnaW4vU2NyaXB0cy9ZWl9Db25zdGFudFwiO1xyXG5pbXBvcnQgeyBnYW1lTWdyIH0gZnJvbSBcIi4uL0dhbWUvZ2FtZU1nclwiO1xyXG5pbXBvcnQgeyB1cGdyYWRlTWdyIH0gZnJvbSBcIi4uL0dhbWUvVXBncmFkZU1nclwiO1xyXG4vLyBAdHMtaWdub3JlXHJcbmNvbnN0IGkxOG4gPSByZXF1aXJlKCdMYW5ndWFnZURhdGEnKTtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU92ZXJQYWdlIGV4dGVuZHMgVUlQYWdlIHtcclxuICAgIHByaXZhdGUgX3BhbmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX21hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX2J0bkNvbnRpbnVlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2J0bkhvbWU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYnRuTmV4dDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9idG5MYXkgOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihQYWdlTmFtZS5VSU92ZXJQYWdlKTtcclxuICAgICAgICB0aGlzLmlzVmFsaWQoKSAmJiB0aGlzLm9uTG9hZCgpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLl9tYXNrID0gY2MuZmluZChcIk1hc2tcIiwgdGhpcy5fcGFnZSk7XHJcbiAgICAgICAgdGhpcy5fcGFuZWwgPSBjYy5maW5kKFwiUGFuZWxcIiwgdGhpcy5fcGFnZSlcclxuICAgICAgICB0aGlzLl9idG5MYXkgPSBjYy5maW5kKFwiYnRuTGF5XCIsIHRoaXMuX3BhbmVsKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYnRuQ29udGludWUgPSBjYy5maW5kKFwiQnRuQ29udGludWVcIiwgdGhpcy5fYnRuTGF5KTtcclxuICAgICAgICBpZihjb2Nvc3ouZ2FtZU1vZGUgPT0gNil7XHJcbiAgICAgICAgICAgIGlmKGNvY29zei5kYXRhTWdyLlBoeXNpY2FsQ291bnQgPiAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2J0bkNvbnRpbnVlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnRuQ29udGludWUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fYnRuQ29udGludWUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl9vbkJ0bkNsaWNrSGFuZGxlciwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fYnRuSG9tZSA9IGNjLmZpbmQoXCJCdG5Ib21lXCIsIHRoaXMuX2J0bkxheSk7XHJcbiAgICAgICAgdGhpcy5fYnRuSG9tZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uQnRuQ2xpY2tIYW5kbGVyLCB0aGlzKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9idG5OZXh0ID0gY2MuZmluZChcIkJ0bk5leHRcIiwgdGhpcy5fYnRuTGF5KTtcclxuICAgICAgICB0aGlzLl9idG5OZXh0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25CdG5DbGlja0hhbmRsZXIsIHRoaXMpO1xyXG4gICAgICAgIGlmKGNvY29zei5nYW1lTW9kZSA9PSA4ICYmIENvbnN0YW50LmN1cnJlbnRMZXZlbCA8IDEzKXtcclxuICAgICAgICAgICAgdGhpcy5fYnRuTmV4dC5hY3RpdmUgPSBnYW1lTWdyLmlzV2luO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbk9wZW4oKSB7XHJcbiAgICAgICAgdXRpbHMuU2VuZEV2ZW50KFwi6aG16Z2iLee7k+euly1cIiArIChnYW1lTWdyLmlzV2luID8gXCLog5zliKlcIiA6IFwi5aSx6LSlXCIpKTtcclxuICAgICAgICB0aGlzLnNob3dBZCgpO1xyXG4gICAgICAgIHRoaXMuX2luaXRQYW5lbCgpO1xyXG4gICAgICAgIGNvY29zei5kYXRhTWdyLlRvdG9hbENvdW50XzYrKztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DbG9zZSgpIHtcclxuICAgICAgICBjYy5nYW1lLnRhcmdldE9mZih0aGlzKTtcclxuICAgICAgICB1dGlscy5oaWRlVml2b0dhbWVQb3J0YWxXaWRnZXQoKTtcclxuICAgICAgICB1dGlscy5oaWRlT3Bwb0dhbWVEcmF3ZXJBZFdpZGdldCgpO1xyXG4gICAgICAgIHV0aWxzLmFkTWFuYWdlci5oaWRlQmxvY2tBZCgpO1xyXG4gICAgICAgIHV0aWxzLmFkTWFuYWdlci5oaWRlTmF0aXZlVHJ5R2FtZVdpZGdldCgpO1xyXG4gICAgICAgIHV0aWxzLmFkTWFuYWdlci5IaWRlU2luZ2xlTmF0aXZlQWQoKTtcclxuICAgICAgICBpZiAoUGxhdFV0aWxzLklzV2VjaGF0KSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmFkTWFuYWdlci5IaWRlQmFubmVyKEJhbm5lckxvY2F0aW9uLk92ZXIpO1xyXG4gICAgICAgICAgICB1dGlscy5hZE1hbmFnZXIuaGlkZUN1c3RvbUFkKHsgbG9jYXRpb246IDUgfSk7XHJcbiAgICAgICAgICAgIHV0aWxzLmFkTWFuYWdlci5oaWRlQ3VzdG9tQWQoeyBsb2NhdGlvbjogNiB9KTtcclxuICAgICAgICAgICAgdXRpbHMuYWRNYW5hZ2VyLmhpZGVDdXN0b21BZCh7IGxvY2F0aW9uOiA3IH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzVklWTykge1xyXG4gICAgICAgICAgICB1dGlscy5hZE1hbmFnZXIuaGlkZUN1c3RvbUFkKHsgbG9jYXRpb246IEJhbm5lckxvY2F0aW9uLk92ZXIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzaG93QWQoKSB7XHJcbiAgICAgICAgdXRpbHMuYWRNYW5hZ2VyLlNob3dCYW5uZXIoQmFubmVyTG9jYXRpb24uT3ZlciwgeyB3aWR0aDogMC4xLCBib3R0b206IDEgfSk7XHJcbiAgICAgICAgLy8g5pi+56S656ev5pyo5bm/5ZGKXHJcbiAgICAgICAgdXRpbHMuYWRNYW5hZ2VyLnNob3dCbG9ja0FkKHsgdG9wOiA1MDAgfSk7XHJcbiAgICAgICAgLy8g5oKs5rWuaWNvblxyXG4gICAgICAgIHV0aWxzLmFkTWFuYWdlci5zaG93TmF0aXZlVHJ5R2FtZVdpZGdldCh7IHJpZ2h0OiA5NSwgdG9wOiA1MDAsIHNjYWxlOiAxLCBwYXJlbnQ6IHRoaXMuX3BhZ2UgfSk7XHJcbiAgICAgICAgLy8g5Y6f55Sf5bm/5ZGKXHJcbiAgICAgICAgaWYgKFBsYXRVdGlscy5Jc1dlY2hhdCkge1xyXG4gICAgICAgICAgICB1dGlscy5hZE1hbmFnZXIuc2hvd0N1c3RvbUFkKHsgbG9jYXRpb246IDUgfSk7XHJcbiAgICAgICAgICAgIHV0aWxzLmFkTWFuYWdlci5zaG93Q3VzdG9tQWQoeyBsb2NhdGlvbjogNiB9KTtcclxuICAgICAgICAgICAgdXRpbHMuYWRNYW5hZ2VyLnNob3dDdXN0b21BZCh7IGxvY2F0aW9uOiA3IH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzVklWTykge1xyXG4gICAgICAgICAgICB1dGlscy5hZE1hbmFnZXIuc2hvd0N1c3RvbUFkKHsgbG9jYXRpb246IEJhbm5lckxvY2F0aW9uLk92ZXIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOS6kuaOqFxyXG4gICAgICAgIHV0aWxzLnNob3dUcnlHYW1lc1dpZGdldCh7IGdyb3VwOiAnZGVmYXVsdCcsIHNjYWxlOiAxLCB0b3A6IDE4MCwgcmlnaHQ6IDI1LCBwYXJlbnQ6IHRoaXMuX3BhZ2UsIGxvY2F0aW9uOiBCYW5uZXJMb2NhdGlvbi5PdmVyIH0pO1xyXG4gICAgICAgIHV0aWxzLnNob3dNb3JlR2FtZXNXaWRnZXQoeyBncm91cDogJ2RlZmF1bHQnLCBzY2FsZTogMSwgdG9wOiAzMDAsIGxlZnQ6IDI1LCBwYXJlbnQ6IHRoaXMuX3BhZ2UsIGxvY2F0aW9uOiBCYW5uZXJMb2NhdGlvbi5PdmVyIH0pO1xyXG4gICAgICAgIHV0aWxzLnNob3dSZWNvbW1lbmRHYW1lc0xpc3QoeyBncm91cDogJ2RlZmF1bHQnLCBzY2FsZTogMSwgcGFyZW50OiB0aGlzLl9wYWdlLCBib3R0b206IDEwMDAgfSk7XHJcbiAgICAgICAgdXRpbHMuc2hvd1Zpdm9HYW1lUG9ydGFsV2lkZ2V0KHsgdG9wOiA1MDAsIGxvY2F0aW9uOiBCYW5uZXJMb2NhdGlvbi5PdmVyIH0pO1xyXG4gICAgICAgIHV0aWxzLnNob3dPcHBvR2FtZURyYXdlckFkV2lkZ2V0KHsgYm90dG9tOiA1MDAsIGxvY2F0aW9uOiBCYW5uZXJMb2NhdGlvbi5PdmVyIH0pO1xyXG4gICAgICAgIHV0aWxzLnNob3dPcHBvUmVjQmFubmVyKHsgYm90dG9tOiA1MDAsIGxlZnQ6IDAsIGxvY2F0aW9uOiBCYW5uZXJMb2NhdGlvbi5PdmVyIH0pO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICBpZiAoZ2FtZU1nciAmJiBnYW1lTWdyLmlzV2luKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLkdhbWVXaW4oY29jb3N6LmdldExldmVsSWQoKS50b1N0cmluZygpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGdhbWVNZ3IgJiYgZ2FtZU1nci5pc0ZhaWwpIHtcclxuICAgICAgICAgICAgdXRpbHMuR2FtZUZhaWwoY29jb3N6LmdldExldmVsSWQoKS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gLy/lvZPov5Tlm57lgLzkuI3kuLrnqbrvvIzlubbkuJTov5Tlm57lgLznmoRub2Rl5LiN5Li656m677yM5Lya6L+U5ZueNuS4quS6kuaOqOiKgueCuVxyXG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0Lm5vZGUpIHtcclxuICAgICAgICAgICAgLy/ojrflj5bliLDoioLngrnlkI7vvIzlsIbov5Tlm57lgLznmoRub2Rl6IqC54K55re75Yqg5Yiw5oyH5a6a6IqC54K55LiK44CCXHJcbiAgICAgICAgICAgIHJlc3VsdC5ub2RlLnBvc2l0aW9uID0gY2MudjIoMCwgMClcclxuICAgICAgICAgICAgdGhpcy5fcGFnZS5hZGRDaGlsZChyZXN1bHQubm9kZSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFNraWxsSUROYW1lKGlkOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gaWQgKyAodXBncmFkZU1nci51cGdyYWRlU2tpbGxNYXhMZXZlbEFycltpZF0gPiAxID8gXCJfXCIgKyAodXBncmFkZU1nci51cGdyYWRlU2tpbGxBcnJbaWRdICsgMSkgOiBcIlwiKVxyXG4gICAgfVxyXG4gICAgX2luaXRQYW5lbCgpIHtcclxuICAgICAgICAvLyDlvLnnqpfmlYjmnpxcclxuICAgICAgICB0aGlzLl9tYXNrLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuX21hc2spLnRvKDAuMiwgeyBvcGFjaXR5OiAxMjAgfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLl9wYW5lbC5zY2FsZSA9IDA7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5fcGFuZWwpLnRvKDAuMywgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJiYWNrT3V0XCIgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgaWYgKHVwZ3JhZGVNZ3IgJiYgdXBncmFkZU1nci5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIC8vIGJvc3NcclxuICAgICAgICAgICAgbGV0IGt1YW5nX2Jvc3MgPSB0aGlzLl9wYW5lbC5nZXRDaGlsZEJ5TmFtZShcImt1YW5nX2Jvc3NcIik7XHJcbiAgICAgICAgICAgIGlmICh1cGdyYWRlTWdyLmJvc3NLaWxsSWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQga3VhbmdfYm9zc19sYXlvdXQgPSBrdWFuZ19ib3NzLmdldENoaWxkQnlOYW1lKFwibGF5b3V0XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGt1YW5nX2Jvc3NfbGF5b3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAga3VhbmdfYm9zc19sYXlvdXQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBrdWFuZ19ib3NzX2xheW91dC5jaGlsZHJlbi5mb3JFYWNoKCh2LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cGdyYWRlTWdyLmJvc3NLaWxsSWQuaW5jbHVkZXMocGFyc2VJbnQodi5uYW1lKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGt1YW5nX2Jvc3Nfbm8gPSBrdWFuZ19ib3NzLmdldENoaWxkQnlOYW1lKFwibm9cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoa3VhbmdfYm9zc19ubykge1xyXG4gICAgICAgICAgICAgICAgICAgIGt1YW5nX2Jvc3Nfbm8uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDmioDog71cclxuICAgICAgICAgICAgbGV0IGt1YW5nX3NraWxsID0gdGhpcy5fcGFuZWwuZ2V0Q2hpbGRCeU5hbWUoXCJrdWFuZ19za2lsbFwiKTtcclxuICAgICAgICAgICAgaWYgKHVwZ3JhZGVNZ3IudXBncmFkZVNraWxsQXJyLmluY2x1ZGVzKDEpIHx8IHVwZ3JhZGVNZ3IudXBncmFkZVNraWxsQXJyLmluY2x1ZGVzKDIpIHx8IHVwZ3JhZGVNZ3IudXBncmFkZVNraWxsQXJyLmluY2x1ZGVzKDMpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2tpbGxfc2Nyb2xsVmlldyA9IGt1YW5nX3NraWxsLmdldENoaWxkQnlOYW1lKFwic2tpbGxTY3JvbGxWaWV3XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNraWxsX3Njcm9sbFZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICBza2lsbF9zY3JvbGxWaWV3LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNraWxsX2NvbnRlbnQgPSBjYy5maW5kKFwidmlldy9jb250ZW50XCIsIHNraWxsX3Njcm9sbFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChza2lsbF9jb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZ3JhZGVNZ3IudXBncmFkZVNraWxsQXJyLmZvckVhY2goKGxldmVsLCBpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZ3JhZGVNZ3IudXBncmFkZVNraWxsTWF4TGV2ZWxBcnJbaWRdID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMTsgaSA8PSBsZXZlbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpY29uID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJ6b21iaWVTa2lsbF9pY29uX1wiICsgaWQgKyBcIl9cIiArIGxldmVsLCBjYy5TcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpY29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXQgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXQuc3ByaXRlRnJhbWUgPSBpY29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXQuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRDb250ZW50U2l6ZSg3MCwgNzApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpbGxfY29udGVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGljb24gPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInpvbWJpZVNraWxsX2ljb25fXCIgKyBpZCwgY2MuU3ByaXRlRnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpY29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNwcml0ID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXQuc3ByaXRlRnJhbWUgPSBpY29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdC5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0Q29udGVudFNpemUoNzAsIDcwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpbGxfY29udGVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGt1YW5nX3NraWxsX25vID0ga3Vhbmdfc2tpbGwuZ2V0Q2hpbGRCeU5hbWUoXCJub1wiKTtcclxuICAgICAgICAgICAgICAgIGlmIChrdWFuZ19za2lsbF9ubykge1xyXG4gICAgICAgICAgICAgICAgICAgIGt1YW5nX3NraWxsX25vLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g57uT566X5L+h5oGvXHJcbiAgICAgICAgICAgIGxldCBpbmZvID0gY2MuZmluZChcImluZm9cIiwgdGhpcy5fcGFuZWwpO1xyXG4gICAgICAgICAgICBpZiAoaW5mbykge1xyXG4gICAgICAgICAgICAgICAgLy8g5qCH6aKYXHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJpc3dpbjpcIiwgZ2FtZU1nci5pc1dpbiwgXCIgaXNGYWlsOlwiLGdhbWVNZ3IuaXNGYWlsKVxyXG4gICAgICAgICAgICAgICAgaW5mby5nZXRDaGlsZEJ5TmFtZSgndGl0dGxlJykuY2hpbGRyZW5bMF0uYWN0aXZlID0gZ2FtZU1nci5pc1dpbjtcclxuICAgICAgICAgICAgICAgIGluZm8uZ2V0Q2hpbGRCeU5hbWUoJ3RpdHRsZScpLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGdhbWVNZ3IuaXNGYWlsO1xyXG4gICAgICAgICAgICAgICAgLy8g5Y6G5Y+y5pyA5L2zXHJcbiAgICAgICAgICAgICAgICAvLyDmuLjmiI/ml7bpl7RcclxuICAgICAgICAgICAgICAgIGluZm8uZ2V0Q2hpbGRCeU5hbWUoJ3RpbWUyJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjb2Nvc3ouU3RvSE1TKGNvY29zei5kYXRhTWdyLmJlc3RfdGltZSk7XHJcbiAgICAgICAgICAgICAgICAvLyDlh7vmnYDmlbBcclxuICAgICAgICAgICAgICAgIGluZm8uZ2V0Q2hpbGRCeU5hbWUoJ2tpbGwyJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjb2Nvc3ouZGF0YU1nci5iZXN0X2tpbGwudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIC8vIOetiee6p1xyXG4gICAgICAgICAgICAgICAgaW5mby5nZXRDaGlsZEJ5TmFtZSgnbGV2ZWwyJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjb2Nvc3ouZGF0YU1nci5iZXN0X2xldmVsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAvLyDph5HluIFcclxuICAgICAgICAgICAgICAgIGluZm8uZ2V0Q2hpbGRCeU5hbWUoJ2NvaW4yJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjb2Nvc3ouZGF0YU1nci5iZXN0X2NvaW4udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIC8vIOacrOWxgOivpuaDhVxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1JlY2FyZDEgPSBpbmZvLmdldENoaWxkQnlOYW1lKCduZXdSZWNhcmQxJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3UmVjYXJkMiA9IGluZm8uZ2V0Q2hpbGRCeU5hbWUoJ25ld1JlY2FyZDInKTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdSZWNhcmQzID0gaW5mby5nZXRDaGlsZEJ5TmFtZSgnbmV3UmVjYXJkMycpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1JlY2FyZDQgPSBpbmZvLmdldENoaWxkQnlOYW1lKCduZXdSZWNhcmQ0Jyk7XHJcbiAgICAgICAgICAgICAgICAvLyDmuLjmiI/ml7bpl7RcclxuICAgICAgICAgICAgICAgIGluZm8uZ2V0Q2hpbGRCeU5hbWUoJ3RpbWUxJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjb2Nvc3ouU3RvSE1TKGdhbWVNZ3IuR2FtZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVNZ3IuR2FtZVRpbWUgPiBjb2Nvc3ouZGF0YU1nci5iZXN0X3RpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmZvLmdldENoaWxkQnlOYW1lKCd0aW1lMScpLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLmJlc3RfdGltZSA9IGdhbWVNZ3IuR2FtZVRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3UmVjYXJkMS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g5Ye75p2A5pWwXHJcbiAgICAgICAgICAgICAgICBpbmZvLmdldENoaWxkQnlOYW1lKCdraWxsMScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdXBncmFkZU1nci56b21iaWVLaWxsTnVtLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodXBncmFkZU1nci56b21iaWVLaWxsTnVtID4gY29jb3N6LmRhdGFNZ3IuYmVzdF9raWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5mby5nZXRDaGlsZEJ5TmFtZSgna2lsbDEnKS5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5iZXN0X2tpbGwgPSB1cGdyYWRlTWdyLnpvbWJpZUtpbGxOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3UmVjYXJkMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g562J57qnXHJcbiAgICAgICAgICAgICAgICBpbmZvLmdldENoaWxkQnlOYW1lKCdsZXZlbDEnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHVwZ3JhZGVNZ3IuY3VyTGV2ZWwudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGlmICh1cGdyYWRlTWdyLmN1ckxldmVsID4gY29jb3N6LmRhdGFNZ3IuYmVzdF9sZXZlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZm8uZ2V0Q2hpbGRCeU5hbWUoJ2xldmVsMScpLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLmJlc3RfbGV2ZWwgPSB1cGdyYWRlTWdyLmN1ckxldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1JlY2FyZDMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIOmHkeW4gVxyXG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gdXBncmFkZU1nci56b21iaWVLaWxsTnVtICsgdXBncmFkZU1nci5jdXJMZXZlbCAqIDEwICsgTWF0aC5taW4oNTAwLCBNYXRoLmNlaWwoZ2FtZU1nci5HYW1lVGltZSAvIDEwKSk7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5Db2luQ291bnQgKz0gY291bnQ7XHJcbiAgICAgICAgICAgICAgICBpbmZvLmdldENoaWxkQnlOYW1lKCdjb2luMScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY291bnQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA+IGNvY29zei5kYXRhTWdyLmJlc3RfY29pbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZm8uZ2V0Q2hpbGRCeU5hbWUoJ2NvaW4xJykuY29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuYmVzdF9jb2luID0gY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3UmVjYXJkNC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB1cmw6IHN0cmluZyA9IENvbnN0YW50LldFQl9MSU5FX1RJVExFICsgJy9xd2svYXNzZXRzL3VwZGF0ZUFzc2V0c0J5R2FtZS8nICsgQ29uc3RhbnQuUEVSU09OX1RQS0tFTiArIFwiL1wiICsgQ29uc3RhbnQuR0FNRV9JRCArIFwiLzMvXCI7ICAgLy/nlKjmiLdpZOS4jua4uOaIj2lk55uu5YmN5Li6MeWSjDFcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLkuIrmiqXmlbDmja4sIHVybD1cIiwgdXJsKTtcclxuICAgICAgICAgICAgICAgIHVybCArPSBjb3VudDtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmNvbW1vbUh0dHBSZXF1ZXN0KHVybCwgKHJldCwganNkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi5pWw5o2u5LiK5oql5oiQ5Yqf77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLmlbDmja7kuIrmiqXlpLHotKXvvIFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNUb0hvbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgYXN5bmMgX29uQnRuQ2xpY2tIYW5kbGVyKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBhd2FpdCBjb2Nvc3ouYXVkaW9NZ3IucGxheUJ0bkVmZmVjdCgpLmNhdGNoKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzVG9Ib21lKSByZXR1cm47XHJcbiAgICAgICAgc3dpdGNoIChldmVudC50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQnRuQ29udGludWVcIjoge1xyXG4gICAgICAgICAgICAgICAgLy8g5LiK5oqlIOe7p+e7rea4uOaIj1xyXG4gICAgICAgICAgICAgICAgaWYoY29jb3N6LmdhbWVNb2RlID09IDYpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvY29zei5kYXRhTWdyLlBoeXNpY2FsQ291bnQgPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMudW1hRXZlbnQoXCJnYW1lY29udGludWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouZ2FtZU1vZGUgPT0gNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuUGh5c2ljYWxDb3VudCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuZ2FtZVN0YXJ0KGNvY29zei5kYXRhTWdyLlRvdG9hbENvdW50XzYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMudW1hRXZlbnQoXCJnYW1lY29udGludWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuZ2FtZVN0YXJ0KGNvY29zei5kYXRhTWdyLlRvdG9hbENvdW50XzYpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiQnRuSG9tZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAvLyDkuIrmiqUg6L+U5Zue6aaW6aG1XHJcbiAgICAgICAgICAgICAgICB1dGlscy51bWFFdmVudChcImdhbWVyZXR1cm5cIik7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouc2NlbmVNZ3IubG9hZFNjZW5lKFwiSG9tZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYWdlKFBhZ2VOYW1lLlVJSG9tZVBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJCdG5OZXh0XCI6IHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnVtYUV2ZW50KFwiZ2FtZW5leHRcIik7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudC5jdXJyZW50TGV2ZWwgKys7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5nYW1lU3RhcnQoY29jb3N6LmRhdGFNZ3IuVG90b2FsQ291bnRfNik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19