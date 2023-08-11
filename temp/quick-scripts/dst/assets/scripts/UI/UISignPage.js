
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI/UISignPage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '602c3qoDuBPu43NXRhxJ3PJ', 'UISignPage');
// scripts/UI/UISignPage.ts

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
var Msg_1 = require("../Framework/Msg");
var Utils_1 = require("../../common-plugin/Scripts/Utils");
var TweenEffect_1 = require("../Framework/TweenEffect");
// @ts-ignore
var i18n = require('LanguageData');
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var REWARD_SIGN = [500, 1000, 1500, 50, 2000, 2500, 100];
var DayItem = /** @class */ (function () {
    function DayItem(index, node) {
        this._index = -1;
        this._node = null;
        this._normal = null;
        this._current = null;
        this._got = null;
        this._label = null;
        this._index = index;
        this._node = node;
        this._normal = this._node.getChildByName("st1");
        this._current = this._node.getChildByName("st2");
        this._got = this._node.getChildByName("st3");
        if (this._node.getChildByName("rewardLabel")) {
            this._label = this._node.getChildByName("rewardLabel").getComponent(cc.Label);
            this._label.node.scale = 0.7;
            this._label.node.setPosition(this._node.x, this._node.y - 60);
            this._label.node.setParent(this._node.parent);
            this._label.string = "+" + REWARD_SIGN[this._index];
        }
    }
    DayItem.prototype.setStatus = function (status) {
        if (status == 0) {
            this._normal.active = true;
            this._current.active = false;
            this._got.active = false;
            this._label.node.active = true;
        }
        else if (status == 1) {
            this._normal.active = false;
            this._current.active = true;
            this._got.active = false;
            this._label.node.active = true;
        }
        else if (status == 2) {
            this._normal.active = true;
            this._current.active = false;
            this._got.active = true;
            this._label.node.active = false;
        }
    };
    DayItem.prototype.update = function () {
        // 上一次领取的是第几天,从0开始
        var lastDayIndex = CocosZ_1.cocosz.dataMgr.LastDailyBonusIndex;
        // 超过一天, 重置一下天数
        if (lastDayIndex == 6) {
            lastDayIndex = -1;
        }
        // 上次领取的时间
        var lastDayTime = CocosZ_1.cocosz.dataMgr.LastDailyBonusTime;
        var canGet = false;
        if (new Date().toDateString() != lastDayTime && this._index == lastDayIndex + 1) {
            canGet = true;
        }
        // cc.log(`lastDayIndex: ${lastDayIndex} --- lastDayTime: ${lastDayTime}`);
        // this._got.active = false;
        // this._normal.active = false;
        // this._current.active = false;
        if (this._index <= lastDayIndex) {
            // 已经领取过了
            // this._got.active = true;
            this.setStatus(2);
        }
        else {
            if (canGet) {
                this.setStatus(1);
                // this._current.active = true;
            }
            else {
                this.setStatus(0);
                // this._normal.active = true;
            }
        }
    };
    return DayItem;
}());
var UISignPanel = /** @class */ (function (_super) {
    __extends(UISignPanel, _super);
    function UISignPanel() {
        var _this = _super.call(this, Constant_1.PanelName.UISignPanel) || this;
        _this._mask = null;
        _this._panel = null;
        _this._btnGet = null;
        _this._btnDouble = null;
        _this._btnClose = null;
        _this._day = [];
        _this.isValid() && _this.onLoad();
        return _this;
    }
    UISignPanel.prototype.onLoad = function () {
        this._panel = this._page.getChildByName("Panel");
        this._mask = this._page.getChildByName("mask");
        var btnNames = ["BtnClose", "BtnDouble", "BtnGet"];
        for (var i = 0; i < btnNames.length; i++) {
            var btn = cc.find(btnNames[i], this._panel);
            if (!btn)
                continue;
            btn.on(cc.Node.EventType.TOUCH_END, this._onBtnClickedHandler, this);
            if (btn.name == "BtnGet") {
                this._btnGet = btn;
            }
            else if (btn.name == "BtnDouble") {
                this._btnDouble = btn;
                this._btnDouble.active = CocosZ_1.cocosz.isADON;
            }
            else {
                this._btnClose = btn;
            }
        }
        for (var i = 0; i < 6; i++) {
            var dayItem = new DayItem(i, this._panel.getChildByName("Day_" + (i + 1)));
            this._day.push(dayItem);
        }
    };
    UISignPanel.prototype.onOpen = function () {
        // 上报 首页签到
        Utils_1.utils.umaEvent("gamegamesign");
        Utils_1.utils.SendEvent("页面-签到");
        this._initPanel();
    };
    UISignPanel.prototype._initPanel = function () {
        TweenEffect_1.default.panel_open_scale(this._panel);
        // 缩放
        this._updateDayItem();
    };
    UISignPanel.prototype._updateDayItem = function () {
        for (var i = 0; i < 6; i++) {
            this._day[i].update();
        }
    };
    UISignPanel.prototype._onBtnClickedHandler = function (event, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                CocosZ_1.cocosz.audioMgr.playBtnEffect();
                switch (event.target.name) {
                    case "BtnGet": {
                        if (!this._canGetBonus()) {
                            Msg_1.default.Show(i18n.t("msg.jryqd")); //今日已领取奖励
                            return [2 /*return*/];
                        }
                        this._getReward(false);
                        break;
                    }
                    case "BtnDouble": {
                        if (!this._canGetBonus()) {
                            Msg_1.default.Show(i18n.t("msg.jryqd")); //今日已领取奖励
                            return [2 /*return*/];
                        }
                        // utils.SendEvent("视频-双倍签到-播放")
                        // cocosz.watchAD(() => {
                        //     utils.SendEvent("视频-双倍签到-成功")
                        //     this._getReward(true);
                        // }, () => {
                        //     utils.SendEvent("视频-双倍签到-失败")
                        // });
                        this._getReward(true);
                        Utils_1.utils.SendEvent("视频-双倍签到-成功");
                        break;
                    }
                    case "BtnClose": {
                        CocosZ_1.cocosz.uiMgr.closePanel(Constant_1.PanelName.UISignPanel);
                        break;
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    UISignPanel.prototype._getReward = function (double) {
        if (double == false) {
            // 上报 普通签到
            Utils_1.utils.umaEvent("gamesignordinary");
            Utils_1.utils.SendEvent("签到-普通");
        }
        else {
            // 上报 双倍签到
            Utils_1.utils.umaEvent("gamedoublesign");
            Utils_1.utils.SendEvent("签到-双倍");
        }
        // 签到索引
        var lastDayIndex = CocosZ_1.cocosz.dataMgr.LastDailyBonusIndex;
        if (lastDayIndex == 6) {
            lastDayIndex = -1;
        }
        var curDayIndex = lastDayIndex + 1;
        // 奖励数量
        var count = REWARD_SIGN[curDayIndex];
        if (double) {
            count *= 2;
        }
        if (curDayIndex == 3 || curDayIndex == 6) {
            // 钻石
            Msg_1.default.Show(i18n.t("msg.gxhdzs") + count);
            CocosZ_1.cocosz.dataMgr.DiamondCount += count;
            // 飞金币事件
            setTimeout(function () {
                cc.game.emit(Constant_1.default.E_GAME_LOGIC, { type: Constant_1.default.E_Fly_Coin, iconName: 'diamond', frameNodeName: 'CoinLabel2' });
            }, 500);
        }
        else {
            // 金币
            Msg_1.default.Show(i18n.t("msg.gxhdjb") + count);
            CocosZ_1.cocosz.dataMgr.CoinCount += count;
            // 飞金币事件
            setTimeout(function () {
                cc.game.emit(Constant_1.default.E_GAME_LOGIC, { type: Constant_1.default.E_Fly_Coin, iconName: 'coin', frameNodeName: 'CoinLabel' });
            }, 500);
        }
        // 本地信息
        CocosZ_1.cocosz.dataMgr.LastDailyBonusIndex = curDayIndex;
        CocosZ_1.cocosz.dataMgr.LastDailyBonusTime = new Date().toDateString();
        // 刷新UI
        // this._updateDayItem();
        // 关闭弹窗
        CocosZ_1.cocosz.uiMgr.closePanel(Constant_1.PanelName.UISignPanel);
    };
    UISignPanel.prototype._canGetBonus = function () {
        return (new Date().toDateString() != CocosZ_1.cocosz.dataMgr.LastDailyBonusTime);
    };
    UISignPanel = __decorate([
        ccclass
    ], UISignPanel);
    return UISignPanel;
}(UIPage_1.default));
exports.default = UISignPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXFVJU2lnblBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXlDO0FBQ3pDLGtEQUFzRTtBQUN0RSw4Q0FBNkM7QUFDN0Msd0NBQW1DO0FBRW5DLDJEQUEwRDtBQUMxRCx3REFBbUQ7QUFDbkQsYUFBYTtBQUNiLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUcvQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QyxJQUFNLFdBQVcsR0FBYSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRXJFO0lBU0ksaUJBQVksS0FBYSxFQUFFLElBQWE7UUFSaEMsV0FBTSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLFVBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLFNBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsV0FBTSxHQUFhLElBQUksQ0FBQztRQUc1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUVsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENB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RCxrQkFBQztDQWxKRCxBQWtKQyxDQWxKd0MsZ0JBQU0sR0FrSjlDO2tCQWxKb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVBhZ2UgZnJvbSBcIi4uL0ZyYW1ld29yay9VSVBhZ2VcIjtcclxuaW1wb3J0IENvbnN0YW50LCB7IFBhZ2VOYW1lLCBQYW5lbE5hbWUgfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcbmltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCBNc2cgZnJvbSBcIi4uL0ZyYW1ld29yay9Nc2dcIjtcclxuaW1wb3J0IEZseUNvaW4gZnJvbSBcIi4uL0ZyYW1ld29yay9GbHlDb2luXCI7XHJcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi1wbHVnaW4vU2NyaXB0cy9VdGlsc1wiO1xyXG5pbXBvcnQgVHdlZW5FZmZlY3QgZnJvbSBcIi4uL0ZyYW1ld29yay9Ud2VlbkVmZmVjdFwiO1xyXG4vLyBAdHMtaWdub3JlXHJcbmNvbnN0IGkxOG4gPSByZXF1aXJlKCdMYW5ndWFnZURhdGEnKTtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcbmNvbnN0IFJFV0FSRF9TSUdOOiBudW1iZXJbXSA9IFs1MDAsIDEwMDAsIDE1MDAsIDUwLCAyMDAwLCAyNTAwLCAxMDBdO1xyXG5cclxuY2xhc3MgRGF5SXRlbSB7XHJcbiAgICBwcml2YXRlIF9pbmRleDogbnVtYmVyID0gLTE7XHJcbiAgICBwcml2YXRlIF9ub2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9ub3JtYWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfY3VycmVudDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9nb3Q6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpbmRleDogbnVtYmVyLCBub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5faW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLl9ub2RlID0gbm9kZTtcclxuXHJcbiAgICAgICAgdGhpcy5fbm9ybWFsID0gdGhpcy5fbm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0MVwiKTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50ID0gdGhpcy5fbm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0MlwiKTtcclxuICAgICAgICB0aGlzLl9nb3QgPSB0aGlzLl9ub2RlLmdldENoaWxkQnlOYW1lKFwic3QzXCIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fbm9kZS5nZXRDaGlsZEJ5TmFtZShcInJld2FyZExhYmVsXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsID0gdGhpcy5fbm9kZS5nZXRDaGlsZEJ5TmFtZShcInJld2FyZExhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsLm5vZGUuc2NhbGUgPSAwLjc7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsLm5vZGUuc2V0UG9zaXRpb24odGhpcy5fbm9kZS54LCB0aGlzLl9ub2RlLnkgLSA2MCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsLm5vZGUuc2V0UGFyZW50KHRoaXMuX25vZGUucGFyZW50KTtcclxuICAgICAgICAgICAgdGhpcy5fbGFiZWwuc3RyaW5nID0gXCIrXCIgKyBSRVdBUkRfU0lHTlt0aGlzLl9pbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTdGF0dXMoc3RhdHVzOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoc3RhdHVzID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbm9ybWFsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2dvdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fbGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzdGF0dXMgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ub3JtYWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fZ290LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9sYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXR1cyA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25vcm1hbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9nb3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fbGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcclxuICAgICAgICAvLyDkuIrkuIDmrKHpooblj5bnmoTmmK/nrKzlh6DlpKks5LuOMOW8gOWni1xyXG4gICAgICAgIGxldCBsYXN0RGF5SW5kZXg6IG51bWJlciA9IGNvY29zei5kYXRhTWdyLkxhc3REYWlseUJvbnVzSW5kZXg7XHJcbiAgICAgICAgLy8g6LaF6L+H5LiA5aSpLCDph43nva7kuIDkuIvlpKnmlbBcclxuICAgICAgICBpZiAobGFzdERheUluZGV4ID09IDYpIHtcclxuICAgICAgICAgICAgbGFzdERheUluZGV4ID0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOS4iuasoemihuWPlueahOaXtumXtFxyXG4gICAgICAgIGNvbnN0IGxhc3REYXlUaW1lOiBzdHJpbmcgPSBjb2Nvc3ouZGF0YU1nci5MYXN0RGFpbHlCb251c1RpbWU7XHJcbiAgICAgICAgbGV0IGNhbkdldDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpICE9IGxhc3REYXlUaW1lICYmIHRoaXMuX2luZGV4ID09IGxhc3REYXlJbmRleCArIDEpIHtcclxuICAgICAgICAgICAgY2FuR2V0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2MubG9nKGBsYXN0RGF5SW5kZXg6ICR7bGFzdERheUluZGV4fSAtLS0gbGFzdERheVRpbWU6ICR7bGFzdERheVRpbWV9YCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuX2dvdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLl9ub3JtYWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5fY3VycmVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5faW5kZXggPD0gbGFzdERheUluZGV4KSB7XHJcbiAgICAgICAgICAgIC8vIOW3sue7j+mihuWPlui/h+S6hlxyXG4gICAgICAgICAgICAvLyB0aGlzLl9nb3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoMilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoY2FuR2V0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cygxKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5fY3VycmVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoMClcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuX25vcm1hbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVNpZ25QYW5lbCBleHRlbmRzIFVJUGFnZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfbWFzazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9wYW5lbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9idG5HZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYnRuRG91YmxlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2J0bkNsb3NlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2RheTogRGF5SXRlbVtdID0gW107XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFBhbmVsTmFtZS5VSVNpZ25QYW5lbCk7XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkKCkgJiYgdGhpcy5vbkxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX3BhbmVsID0gdGhpcy5fcGFnZS5nZXRDaGlsZEJ5TmFtZShcIlBhbmVsXCIpO1xyXG4gICAgICAgIHRoaXMuX21hc2sgPSB0aGlzLl9wYWdlLmdldENoaWxkQnlOYW1lKFwibWFza1wiKTtcclxuICAgICAgICBsZXQgYnRuTmFtZXM6IHN0cmluZ1tdID0gW1wiQnRuQ2xvc2VcIiwgXCJCdG5Eb3VibGVcIiwgXCJCdG5HZXRcIl07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidG5OYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYnRuOiBjYy5Ob2RlID0gY2MuZmluZChidG5OYW1lc1tpXSwgdGhpcy5fcGFuZWwpO1xyXG4gICAgICAgICAgICBpZiAoIWJ0bikgY29udGludWVcclxuICAgICAgICAgICAgYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25CdG5DbGlja2VkSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYnRuLm5hbWUgPT0gXCJCdG5HZXRcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnRuR2V0ID0gYnRuO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJ0bi5uYW1lID09IFwiQnRuRG91YmxlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2J0bkRvdWJsZSA9IGJ0bjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2J0bkRvdWJsZS5hY3RpdmUgPSBjb2Nvc3ouaXNBRE9OO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnRuQ2xvc2UgPSBidG47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXlJdGVtOiBEYXlJdGVtID0gbmV3IERheUl0ZW0oaSwgdGhpcy5fcGFuZWwuZ2V0Q2hpbGRCeU5hbWUoXCJEYXlfXCIgKyAoaSArIDEpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RheS5wdXNoKGRheUl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uT3BlbigpIHtcclxuICAgICAgICAvLyDkuIrmiqUg6aaW6aG1562+5YiwXHJcbiAgICAgICAgdXRpbHMudW1hRXZlbnQoXCJnYW1lZ2FtZXNpZ25cIik7XHJcbiAgICAgICAgdXRpbHMuU2VuZEV2ZW50KFwi6aG16Z2iLeetvuWIsFwiKTtcclxuICAgICAgICB0aGlzLl9pbml0UGFuZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pbml0UGFuZWwoKSB7XHJcbiAgICAgICAgVHdlZW5FZmZlY3QucGFuZWxfb3Blbl9zY2FsZSh0aGlzLl9wYW5lbCk7XHJcbiAgICAgICAgLy8g57yp5pS+XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlRGF5SXRlbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZURheUl0ZW0oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fZGF5W2ldLnVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9vbkJ0bkNsaWNrZWRIYW5kbGVyKGV2ZW50OiBjYy5FdmVudCwgZGF0YTogYW55KSB7XHJcbiAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlCdG5FZmZlY3QoKTtcclxuICAgICAgICBcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCdG5HZXRcIjoge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jYW5HZXRCb251cygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTXNnLlNob3coaTE4bi50KFwibXNnLmpyeXFkXCIpKTsvL+S7iuaXpeW3sumihuWPluWlluWKsVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX2dldFJld2FyZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiQnRuRG91YmxlXCI6IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fY2FuR2V0Qm9udXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIE1zZy5TaG93KGkxOG4udChcIm1zZy5qcnlxZFwiKSk7Ly/ku4rml6Xlt7Lpooblj5blpZblirFcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB1dGlscy5TZW5kRXZlbnQoXCLop4bpopEt5Y+M5YCN562+5YiwLeaSreaUvlwiKVxyXG4gICAgICAgICAgICAgICAgLy8gY29jb3N6LndhdGNoQUQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHV0aWxzLlNlbmRFdmVudChcIuinhumikS3lj4zlgI3nrb7liLAt5oiQ5YqfXCIpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5fZ2V0UmV3YXJkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHV0aWxzLlNlbmRFdmVudChcIuinhumikS3lj4zlgI3nrb7liLAt5aSx6LSlXCIpXHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRSZXdhcmQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuU2VuZEV2ZW50KFwi6KeG6aKRLeWPjOWAjeetvuWIsC3miJDlip9cIilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJCdG5DbG9zZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3oudWlNZ3IuY2xvc2VQYW5lbChQYW5lbE5hbWUuVUlTaWduUGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0UmV3YXJkKGRvdWJsZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChkb3VibGUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgLy8g5LiK5oqlIOaZrumAmuetvuWIsFxyXG4gICAgICAgICAgICB1dGlscy51bWFFdmVudChcImdhbWVzaWdub3JkaW5hcnlcIik7XHJcbiAgICAgICAgICAgIHV0aWxzLlNlbmRFdmVudChcIuetvuWIsC3mma7pgJpcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g5LiK5oqlIOWPjOWAjeetvuWIsFxyXG4gICAgICAgICAgICB1dGlscy51bWFFdmVudChcImdhbWVkb3VibGVzaWduXCIpO1xyXG4gICAgICAgICAgICB1dGlscy5TZW5kRXZlbnQoXCLnrb7liLAt5Y+M5YCNXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g562+5Yiw57Si5byVXHJcbiAgICAgICAgbGV0IGxhc3REYXlJbmRleDogbnVtYmVyID0gY29jb3N6LmRhdGFNZ3IuTGFzdERhaWx5Qm9udXNJbmRleDtcclxuICAgICAgICBpZiAobGFzdERheUluZGV4ID09IDYpIHtcclxuICAgICAgICAgICAgbGFzdERheUluZGV4ID0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjdXJEYXlJbmRleCA9IGxhc3REYXlJbmRleCArIDE7XHJcbiAgICAgICAgLy8g5aWW5Yqx5pWw6YePXHJcbiAgICAgICAgbGV0IGNvdW50OiBudW1iZXIgPSBSRVdBUkRfU0lHTltjdXJEYXlJbmRleF07XHJcbiAgICAgICAgaWYgKGRvdWJsZSkgeyBjb3VudCAqPSAyOyB9XHJcbiAgICAgICAgaWYgKGN1ckRheUluZGV4ID09IDMgfHwgY3VyRGF5SW5kZXggPT0gNikge1xyXG4gICAgICAgICAgICAvLyDpkrvnn7NcclxuICAgICAgICAgICAgTXNnLlNob3coaTE4bi50KFwibXNnLmd4aGR6c1wiKSArIGNvdW50KTtcclxuICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuRGlhbW9uZENvdW50ICs9IGNvdW50O1xyXG4gICAgICAgICAgICAvLyDpo57ph5HluIHkuovku7ZcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9HQU1FX0xPR0lDLCB7IHR5cGU6IENvbnN0YW50LkVfRmx5X0NvaW4sIGljb25OYW1lOiAnZGlhbW9uZCcsIGZyYW1lTm9kZU5hbWU6ICdDb2luTGFiZWwyJyB9KVxyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOmHkeW4gVxyXG4gICAgICAgICAgICBNc2cuU2hvdyhpMThuLnQoXCJtc2cuZ3hoZGpiXCIpICsgY291bnQpO1xyXG4gICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5Db2luQ291bnQgKz0gY291bnQ7XHJcbiAgICAgICAgICAgIC8vIOmjnumHkeW4geS6i+S7tlxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX0dBTUVfTE9HSUMsIHsgdHlwZTogQ29uc3RhbnQuRV9GbHlfQ29pbiwgaWNvbk5hbWU6ICdjb2luJywgZnJhbWVOb2RlTmFtZTogJ0NvaW5MYWJlbCcgfSlcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5pys5Zyw5L+h5oGvXHJcbiAgICAgICAgY29jb3N6LmRhdGFNZ3IuTGFzdERhaWx5Qm9udXNJbmRleCA9IGN1ckRheUluZGV4O1xyXG4gICAgICAgIGNvY29zei5kYXRhTWdyLkxhc3REYWlseUJvbnVzVGltZSA9IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCk7XHJcbiAgICAgICAgLy8g5Yi35pawVUlcclxuICAgICAgICAvLyB0aGlzLl91cGRhdGVEYXlJdGVtKCk7XHJcbiAgICAgICAgLy8g5YWz6Zet5by556qXXHJcbiAgICAgICAgY29jb3N6LnVpTWdyLmNsb3NlUGFuZWwoUGFuZWxOYW1lLlVJU2lnblBhbmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jYW5HZXRCb251cygpIHtcclxuICAgICAgICByZXR1cm4gKG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCkgIT0gY29jb3N6LmRhdGFNZ3IuTGFzdERhaWx5Qm9udXNUaW1lKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19