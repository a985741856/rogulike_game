
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI/UIPausePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '45557zGvJFMOq7sodhqFlFw', 'UIPausePanel');
// scripts/UI/UIPausePanel.ts

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
var PlatUtils_1 = require("../../common-plugin/Scripts/PlatUtils");
var Utils_1 = require("../../common-plugin/Scripts/Utils");
var YZ_Constant_1 = require("../../common-plugin/Scripts/YZ_Constant");
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var UIPage_1 = require("../Framework/UIPage");
var gameMgr_1 = require("../Game/gameMgr");
var UpgradeMgr_1 = require("../Game/UpgradeMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIPausePanel = /** @class */ (function (_super) {
    __extends(UIPausePanel, _super);
    function UIPausePanel() {
        var _this = _super.call(this, Constant_1.PanelName.UIPausePanel) || this;
        _this._mask = null;
        _this._panel = null;
        _this.isValid() && _this.onLoad();
        return _this;
    }
    UIPausePanel.prototype.onLoad = function () {
        this._mask = this._page.getChildByName("mask");
        this._panel = this._page.getChildByName("Panel");
        var restartBtn = cc.find("BtnRestart", this._panel);
        if (CocosZ_1.cocosz.gameMode == 6) {
            if (CocosZ_1.cocosz.dataMgr.PhysicalCount > 0) {
                restartBtn.getComponent(cc.Button).interactable = true;
            }
            else {
                restartBtn.getComponent(cc.Button).interactable = false;
            }
        }
        var btnNames = ["BtnRestart", "BtnResume", "BtnHome"];
        for (var i = 0; i < btnNames.length; i++) {
            var btn = cc.find(btnNames[i], this._panel);
            btn.on(cc.Node.EventType.TOUCH_END, this._onBtnClickedHandler, this);
        }
    };
    UIPausePanel.prototype.onOpen = function () {
        Utils_1.utils.SendEvent("页面-暂停");
        this.showAd();
        // TweenEffect.panel_mask_opacity(this._mask);
        // TweenEffect.panel_open_moveY(this._panel);
        CocosZ_1.cocosz.pauseCount++;
    };
    UIPausePanel.prototype.onClose = function () {
        if (PlatUtils_1.default.IsVIVO) {
            Utils_1.utils.adManager.hideCustomAd({ location: YZ_Constant_1.BannerLocation.Pause });
        }
        CocosZ_1.cocosz.pauseCount--;
    };
    UIPausePanel.prototype.showAd = function () {
        if (CocosZ_1.cocosz.isShowAd) {
            if (PlatUtils_1.default.IsVIVO) {
                Utils_1.utils.adManager.showCustomAd({ location: YZ_Constant_1.BannerLocation.Pause });
            }
        }
    };
    /**
     * 所有按钮点击事件
     * @param event
     * @param data
     */
    UIPausePanel.prototype._onBtnClickedHandler = function (event, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //播放按钮点击音效
                    return [4 /*yield*/, CocosZ_1.cocosz.audioMgr.playBtnEffect().catch()];
                    case 1:
                        //播放按钮点击音效
                        _a.sent();
                        switch (event.target.name) {
                            case "BtnRestart": {
                                if (CocosZ_1.cocosz.gameMode == 6) {
                                    if (CocosZ_1.cocosz.dataMgr.PhysicalCount > 0) {
                                        gameMgr_1.gameMgr.isFail = true;
                                        gameMgr_1.gameMgr.unscheduleAllCallbacks();
                                        UpgradeMgr_1.upgradeMgr && UpgradeMgr_1.upgradeMgr.unscheduleAllCallbacks();
                                        CocosZ_1.cocosz.uiMgr.closePanel(Constant_1.PanelName.UIPausePanel);
                                        if (CocosZ_1.cocosz.gameMode == 6) {
                                            CocosZ_1.cocosz.dataMgr.PhysicalCount -= 1;
                                            CocosZ_1.cocosz.gameMgr.gameStart(CocosZ_1.cocosz.dataMgr.TotoalCount_6);
                                        }
                                    }
                                }
                                else {
                                    gameMgr_1.gameMgr.isFail = true;
                                    gameMgr_1.gameMgr.unscheduleAllCallbacks();
                                    UpgradeMgr_1.upgradeMgr && UpgradeMgr_1.upgradeMgr.unscheduleAllCallbacks();
                                    CocosZ_1.cocosz.uiMgr.closePanel(Constant_1.PanelName.UIPausePanel);
                                    CocosZ_1.cocosz.gameMgr.gameStart(CocosZ_1.cocosz.dataMgr.TotoalCount_6);
                                }
                                break;
                            }
                            case "BtnResume": {
                                cc.tween(this._panel)
                                    .to(0.5, { y: this._panel.y + 1000 }, { easing: "sineOut" })
                                    .call(function () {
                                    CocosZ_1.cocosz.uiMgr.closePanel(Constant_1.PanelName.UIPausePanel);
                                })
                                    .start();
                                break;
                            }
                            case "BtnHome": {
                                gameMgr_1.gameMgr.isFail = true;
                                gameMgr_1.gameMgr.unscheduleAllCallbacks();
                                UpgradeMgr_1.upgradeMgr && UpgradeMgr_1.upgradeMgr.unscheduleAllCallbacks();
                                CocosZ_1.cocosz.uiMgr.closePanel(Constant_1.PanelName.UIPausePanel);
                                CocosZ_1.cocosz.sceneMgr.loadScene("Home", (function () {
                                    CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UIHomePage);
                                }));
                                break;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UIPausePanel = __decorate([
        ccclass
    ], UIPausePanel);
    return UIPausePanel;
}(UIPage_1.default));
exports.default = UIPausePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXFVJUGF1c2VQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBOEQ7QUFDOUQsMkRBQTBEO0FBQzFELHVFQUF5RTtBQUN6RSw4Q0FBNkM7QUFDN0Msa0RBQXNFO0FBRXRFLDhDQUF5QztBQUN6QywyQ0FBMEM7QUFDMUMsaURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFNO0lBRTVDO1FBQUEsWUFDSSxrQkFBTSxvQkFBUyxDQUFDLFlBQVksQ0FBQyxTQUVoQztRQUVPLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUozQixLQUFJLENBQUMsT0FBTyxFQUFFLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztJQUNwQyxDQUFDO0lBSUQsNkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVqRCxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsSUFBRyxlQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBQztZQUNwQixJQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBQztnQkFDaEMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzthQUMxRDtpQkFBSTtnQkFDRCxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzNEO1NBQ0o7UUFFRCxJQUFJLFFBQVEsR0FBYSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDaEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxHQUFHLEdBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JELEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN4RTtJQUNMLENBQUM7SUFFUyw2QkFBTSxHQUFoQjtRQUNJLGFBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsOENBQThDO1FBQzlDLDZDQUE2QztRQUM3QyxlQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNTLDhCQUFPLEdBQWpCO1FBQ0ksSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTtZQUNsQixhQUFLLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLFFBQVEsRUFBRSw0QkFBYyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDcEU7UUFDRCxlQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDZCQUFNLEdBQU47UUFDSSxJQUFJLGVBQU0sQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTtnQkFDbEIsYUFBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxRQUFRLEVBQUUsNEJBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ3BFO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNXLDJDQUFvQixHQUFsQyxVQUFtQyxLQUFlLEVBQUUsSUFBUzs7Ozs7b0JBQ3pELFVBQVU7b0JBQ1YscUJBQU0sZUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBQTs7d0JBRDdDLFVBQVU7d0JBQ1YsU0FBNkMsQ0FBQzt3QkFDOUMsUUFBUSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTs0QkFDdkIsS0FBSyxZQUFZLENBQUMsQ0FBQztnQ0FDZixJQUFHLGVBQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFDO29DQUNwQixJQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBQzt3Q0FDaEMsaUJBQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dDQUN0QixpQkFBTyxDQUFDLHNCQUFzQixFQUFFLENBQUM7d0NBQ2pDLHVCQUFVLElBQUksdUJBQVUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO3dDQUNsRCxlQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxvQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO3dDQUVoRCxJQUFJLGVBQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFOzRDQUN0QixlQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUM7NENBQ2xDLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGVBQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7eUNBQzFEO3FDQUNKO2lDQUNKO3FDQUFJO29DQUNELGlCQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQ0FDdEIsaUJBQU8sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO29DQUNqQyx1QkFBVSxJQUFJLHVCQUFVLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztvQ0FDbEQsZUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsb0JBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQ0FDaEQsZUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsZUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztpQ0FDMUQ7Z0NBQ0QsTUFBTTs2QkFDVDs0QkFDRCxLQUFLLFdBQVcsQ0FBQyxDQUFDO2dDQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztxQ0FDaEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQztxQ0FDM0QsSUFBSSxDQUFDO29DQUNGLGVBQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLG9CQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7Z0NBQ3BELENBQUMsQ0FBQztxQ0FDRCxLQUFLLEVBQUUsQ0FBQztnQ0FDYixNQUFNOzZCQUNUOzRCQUNELEtBQUssU0FBUyxDQUFDLENBQUM7Z0NBQ1osaUJBQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dDQUN0QixpQkFBTyxDQUFDLHNCQUFzQixFQUFFLENBQUM7Z0NBQ2pDLHVCQUFVLElBQUksdUJBQVUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2dDQUNsRCxlQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxvQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dDQUNoRCxlQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQ0FDL0IsZUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQ0FDL0MsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQ0FDSCxNQUFNOzZCQUNUO3lCQUNKOzs7OztLQUNKO0lBdEdnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBd0doQztJQUFELG1CQUFDO0NBeEdELEFBd0dDLENBeEd5QyxnQkFBTSxHQXdHL0M7a0JBeEdvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXRVdGlscyBmcm9tIFwiLi4vLi4vY29tbW9uLXBsdWdpbi9TY3JpcHRzL1BsYXRVdGlsc1wiO1xyXG5pbXBvcnQgeyB1dGlscyB9IGZyb20gXCIuLi8uLi9jb21tb24tcGx1Z2luL1NjcmlwdHMvVXRpbHNcIjtcclxuaW1wb3J0IHsgQmFubmVyTG9jYXRpb24gfSBmcm9tIFwiLi4vLi4vY29tbW9uLXBsdWdpbi9TY3JpcHRzL1laX0NvbnN0YW50XCI7XHJcbmltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCBDb25zdGFudCwgeyBQYWdlTmFtZSwgUGFuZWxOYW1lIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5pbXBvcnQgVHdlZW5FZmZlY3QgZnJvbSBcIi4uL0ZyYW1ld29yay9Ud2VlbkVmZmVjdFwiO1xyXG5pbXBvcnQgVUlQYWdlIGZyb20gXCIuLi9GcmFtZXdvcmsvVUlQYWdlXCI7XHJcbmltcG9ydCB7IGdhbWVNZ3IgfSBmcm9tIFwiLi4vR2FtZS9nYW1lTWdyXCI7XHJcbmltcG9ydCB7IHVwZ3JhZGVNZ3IgfSBmcm9tIFwiLi4vR2FtZS9VcGdyYWRlTWdyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlQYXVzZVBhbmVsIGV4dGVuZHMgVUlQYWdlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihQYW5lbE5hbWUuVUlQYXVzZVBhbmVsKTtcclxuICAgICAgICB0aGlzLmlzVmFsaWQoKSAmJiB0aGlzLm9uTG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX21hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfcGFuZWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX21hc2sgPSB0aGlzLl9wYWdlLmdldENoaWxkQnlOYW1lKFwibWFza1wiKTtcclxuICAgICAgICB0aGlzLl9wYW5lbCA9IHRoaXMuX3BhZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJQYW5lbFwiKTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3RhcnRCdG4gPSBjYy5maW5kKFwiQnRuUmVzdGFydFwiLCB0aGlzLl9wYW5lbCk7XHJcbiAgICAgICAgaWYoY29jb3N6LmdhbWVNb2RlID09IDYpe1xyXG4gICAgICAgICAgICBpZihjb2Nvc3ouZGF0YU1nci5QaHlzaWNhbENvdW50ID4gMCl7XHJcbiAgICAgICAgICAgICAgICByZXN0YXJ0QnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcmVzdGFydEJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJ0bk5hbWVzOiBzdHJpbmdbXSA9IFtcIkJ0blJlc3RhcnRcIiwgXCJCdG5SZXN1bWVcIiwgXCJCdG5Ib21lXCJdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnRuTmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJ0bjogY2MuTm9kZSA9IGNjLmZpbmQoYnRuTmFtZXNbaV0sIHRoaXMuX3BhbmVsKTtcclxuICAgICAgICAgICAgYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25CdG5DbGlja2VkSGFuZGxlciwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbk9wZW4oKTogdm9pZCB7XHJcbiAgICAgICAgdXRpbHMuU2VuZEV2ZW50KFwi6aG16Z2iLeaaguWBnFwiKTtcclxuICAgICAgICB0aGlzLnNob3dBZCgpO1xyXG4gICAgICAgIC8vIFR3ZWVuRWZmZWN0LnBhbmVsX21hc2tfb3BhY2l0eSh0aGlzLl9tYXNrKTtcclxuICAgICAgICAvLyBUd2VlbkVmZmVjdC5wYW5lbF9vcGVuX21vdmVZKHRoaXMuX3BhbmVsKTtcclxuICAgICAgICBjb2Nvc3oucGF1c2VDb3VudCsrO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uQ2xvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKFBsYXRVdGlscy5Jc1ZJVk8pIHtcclxuICAgICAgICAgICAgdXRpbHMuYWRNYW5hZ2VyLmhpZGVDdXN0b21BZCh7IGxvY2F0aW9uOiBCYW5uZXJMb2NhdGlvbi5QYXVzZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29jb3N6LnBhdXNlQ291bnQtLTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93QWQoKSB7XHJcbiAgICAgICAgaWYgKGNvY29zei5pc1Nob3dBZCkge1xyXG4gICAgICAgICAgICBpZiAoUGxhdFV0aWxzLklzVklWTykge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuYWRNYW5hZ2VyLnNob3dDdXN0b21BZCh7IGxvY2F0aW9uOiBCYW5uZXJMb2NhdGlvbi5QYXVzZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJgOacieaMiemSrueCueWHu+S6i+S7tlxyXG4gICAgICogQHBhcmFtIGV2ZW50IFxyXG4gICAgICogQHBhcmFtIGRhdGEgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgX29uQnRuQ2xpY2tlZEhhbmRsZXIoZXZlbnQ6IGNjLkV2ZW50LCBkYXRhOiBhbnkpIHtcclxuICAgICAgICAvL+aSreaUvuaMiemSrueCueWHu+mfs+aViFxyXG4gICAgICAgIGF3YWl0IGNvY29zei5hdWRpb01nci5wbGF5QnRuRWZmZWN0KCkuY2F0Y2goKTtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCdG5SZXN0YXJ0XCI6IHtcclxuICAgICAgICAgICAgICAgIGlmKGNvY29zei5nYW1lTW9kZSA9PSA2KXtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb2Nvc3ouZGF0YU1nci5QaHlzaWNhbENvdW50ID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IuaXNGYWlsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1nci51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZ3JhZGVNZ3IgJiYgdXBncmFkZU1nci51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei51aU1nci5jbG9zZVBhbmVsKFBhbmVsTmFtZS5VSVBhdXNlUGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmdhbWVNb2RlID09IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLlBoeXNpY2FsQ291bnQgLT0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5nYW1lTWdyLmdhbWVTdGFydChjb2Nvc3ouZGF0YU1nci5Ub3RvYWxDb3VudF82KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IuaXNGYWlsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICAgICAgICAgICAgICB1cGdyYWRlTWdyICYmIHVwZ3JhZGVNZ3IudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvY29zei51aU1nci5jbG9zZVBhbmVsKFBhbmVsTmFtZS5VSVBhdXNlUGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvY29zei5nYW1lTWdyLmdhbWVTdGFydChjb2Nvc3ouZGF0YU1nci5Ub3RvYWxDb3VudF82KTsgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIkJ0blJlc3VtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLl9wYW5lbClcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHk6IHRoaXMuX3BhbmVsLnkgKyAxMDAwIH0sIHsgZWFzaW5nOiBcInNpbmVPdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LnVpTWdyLmNsb3NlUGFuZWwoUGFuZWxOYW1lLlVJUGF1c2VQYW5lbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJCdG5Ib21lXCI6IHtcclxuICAgICAgICAgICAgICAgIGdhbWVNZ3IuaXNGYWlsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGdhbWVNZ3IudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgICAgICAgICAgdXBncmFkZU1nciAmJiB1cGdyYWRlTWdyLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICAgICAgICAgIGNvY29zei51aU1nci5jbG9zZVBhbmVsKFBhbmVsTmFtZS5VSVBhdXNlUGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgY29jb3N6LnNjZW5lTWdyLmxvYWRTY2VuZShcIkhvbWVcIiwgKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVUlIb21lUGFnZSk7XHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=