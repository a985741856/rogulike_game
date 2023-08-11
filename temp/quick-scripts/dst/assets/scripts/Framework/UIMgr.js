
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Framework/UIMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33548NTHxpPnbtMDUrsJscE', 'UIMgr');
// scripts/Framework/UIMgr.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Constant_1 = require("./Constant");
var UILoadingPage_1 = require("../UI/UILoadingPage");
var UIHomePage_1 = require("../UI/UIHomePage");
var UIGamePage_1 = require("../UI/UIGamePage");
var UIRevivePanel_1 = require("../UI/UIRevivePanel");
var UIGameLoadingPage_1 = require("../UI/UIGameLoadingPage");
var UIPausePanel_1 = require("../UI/UIPausePanel");
var UITurntablePage_1 = require("../UI/UITurntablePage");
var UITrySkinPanel_1 = require("../UI/UITrySkinPanel");
var UIWeaponLevelPanel_1 = require("../UI/UIWeaponLevelPanel");
var UIUpgradePanel_1 = require("../UI/UIUpgradePanel");
var UIOverPage_1 = require("../UI/UIOverPage");
var UISignPage_1 = require("../UI/UISignPage");
var UITimePage_1 = require("../UI/UITimePage");
var UIRankingPanel_1 = require("../UI/UIRankingPanel");
var UIBackPanel_1 = require("../UI/UIBackPanel");
/**
 * UI管理类
 * 新增页面或者弹窗需要修改
 */
var UIMgr = /** @class */ (function (_super) {
    __extends(UIMgr, _super);
    function UIMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pageDict = {};
        _this._panelDict = {};
        return _this;
    }
    Object.defineProperty(UIMgr, "inst", {
        get: function () {
            if (!UIMgr._inst) {
                UIMgr._inst = new UIMgr();
            }
            return UIMgr._inst;
        },
        enumerable: false,
        configurable: true
    });
    UIMgr.prototype.openPage = function (name) {
        console.log('点击到了按钮' + name);
        // 防止连续多次点击页面
        if (this._panelDict[name] && this._panelDict[name].isOpen())
            return;
        // 关闭所有的弹窗
        this.closeAllPanel();
        // 关闭所有的页面
        this.closeAllPage();
        // 开启界面
        if (this._pageDict[name] && this._pageDict[name].isValid()) {
            this._pageDict[name].open();
        }
        else {
            var page = this._createUI(name);
            if (page) {
                this._pageDict[name] = page;
                page.isValid() && page.open();
            }
        }
    };
    UIMgr.prototype.openPanel = function (name) {
        // 防止连续多次点击页面
        if (this._panelDict[name] && this._panelDict[name].isOpen())
            return;
        // 开启弹窗
        if (this._panelDict[name] && this._panelDict[name].isValid()) {
            this._panelDict[name].open();
        }
        else {
            var panel = this._createUI(name);
            if (panel) {
                this._panelDict[name] = panel;
                panel.isValid() && panel.open();
            }
        }
    };
    UIMgr.prototype.closeAllPage = function () {
        // 关闭所有的页面
        for (var key in this._pageDict) {
            if (key && this._pageDict[key]) {
                this._pageDict[key].close();
            }
        }
    };
    UIMgr.prototype.closeAllPanel = function () {
        for (var key in this._panelDict) {
            if (key && this._panelDict[key]) {
                this._panelDict[key].close();
            }
        }
    };
    UIMgr.prototype.closePanel = function (name) {
        if (this._panelDict[name] && this._panelDict[name].isValid()) {
            this._panelDict[name].close();
        }
    };
    UIMgr.prototype._createUI = function (name) {
        switch (name) {
            case Constant_1.PageName.UILoadingPage: {
                return new UILoadingPage_1.default();
            }
            case Constant_1.PageName.UIHomePage: {
                return new UIHomePage_1.default();
            }
            case Constant_1.PanelName.UISignPanel: {
                return new UISignPage_1.default();
            }
            case Constant_1.PanelName.UITurntablePanel: {
                return new UITurntablePage_1.default();
            }
            case Constant_1.PanelName.UITimePanel: {
                return new UITimePage_1.default();
            }
            case Constant_1.PanelName.UITrySkinPanel: {
                return new UITrySkinPanel_1.default();
            }
            case Constant_1.PanelName.UIWeaponLevelPanel: {
                return new UIWeaponLevelPanel_1.default();
            }
            case Constant_1.PageName.UIGameLoadingPage: {
                return new UIGameLoadingPage_1.default();
            }
            case Constant_1.PageName.UIGamePage: {
                return new UIGamePage_1.default();
            }
            case Constant_1.PanelName.UIPausePanel: {
                return new UIPausePanel_1.default();
            }
            case Constant_1.PanelName.UIUpgradePanel: {
                return new UIUpgradePanel_1.default();
            }
            case Constant_1.PanelName.UIRevivePanel: {
                return new UIRevivePanel_1.default();
            }
            case Constant_1.PageName.UIOverPage: {
                return new UIOverPage_1.default();
            }
            case Constant_1.PanelName.UIRankingPanel: {
                return new UIRankingPanel_1.default();
            }
            case Constant_1.PanelName.UIBackPanel: {
                return new UIBackPanel_1.default();
            }
            default: {
                cc.error("Can not found class " + name);
                return null;
            }
        }
    };
    return UIMgr;
}(cc.Component));
exports.default = UIMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRnJhbWV3b3JrXFxVSU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBaUQ7QUFFakQscURBQWdEO0FBQ2hELCtDQUEwQztBQUMxQywrQ0FBMEM7QUFDMUMscURBQWdEO0FBQ2hELDZEQUF3RDtBQUN4RCxtREFBOEM7QUFDOUMseURBQXFEO0FBQ3JELHVEQUFrRDtBQUNsRCwrREFBMEQ7QUFDMUQsdURBQWtEO0FBQ2xELCtDQUEwQztBQUMxQywrQ0FBMkM7QUFDM0MsK0NBQTJDO0FBQzNDLHVEQUFrRDtBQUNsRCxpREFBNEM7QUFJNUM7OztHQUdHO0FBRUg7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUEySEM7UUFsSFcsZUFBUyxHQUErQixFQUFFLENBQUM7UUFDM0MsZ0JBQVUsR0FBK0IsRUFBRSxDQUFDOztJQWlIeEQsQ0FBQztJQXpIRyxzQkFBa0IsYUFBSTthQUF0QjtZQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNkLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQzthQUM3QjtZQUNELE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUtNLHdCQUFRLEdBQWYsVUFBZ0IsSUFBWTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixhQUFhO1FBQ2IsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTztRQUNwRSxVQUFVO1FBQ1YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLFVBQVU7UUFDVixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsT0FBTztRQUNQLElBQUksSUFBSSxDQUFD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QUFHLElBQUksQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7SUFDTCxDQUFDO0lBQ0wsWUFBQztBQUFELENBM0hBLEFBMkhDLENBM0hrQyxFQUFFLENBQUMsU0FBUyxHQTJIOUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlTmFtZSwgUGFuZWxOYW1lIH0gZnJvbSBcIi4vQ29uc3RhbnRcIjtcclxuaW1wb3J0IFVJUGFnZSBmcm9tIFwiLi9VSVBhZ2VcIjtcclxuaW1wb3J0IFVJTG9hZGluZ1BhZ2UgZnJvbSBcIi4uL1VJL1VJTG9hZGluZ1BhZ2VcIjtcclxuaW1wb3J0IFVJSG9tZVBhZ2UgZnJvbSBcIi4uL1VJL1VJSG9tZVBhZ2VcIjtcclxuaW1wb3J0IFVJR2FtZVBhZ2UgZnJvbSBcIi4uL1VJL1VJR2FtZVBhZ2VcIjtcclxuaW1wb3J0IFVJUmV2aXZlUGFuZWwgZnJvbSBcIi4uL1VJL1VJUmV2aXZlUGFuZWxcIjtcclxuaW1wb3J0IFVJR2FtZUxvYWRpbmdQYWdlIGZyb20gXCIuLi9VSS9VSUdhbWVMb2FkaW5nUGFnZVwiO1xyXG5pbXBvcnQgVUlQYXVzZVBhbmVsIGZyb20gXCIuLi9VSS9VSVBhdXNlUGFuZWxcIjtcclxuaW1wb3J0IFVJVHVybnRhYmxlUGFuZWwgZnJvbSBcIi4uL1VJL1VJVHVybnRhYmxlUGFnZVwiO1xyXG5pbXBvcnQgVUlUcnlTa2luUGFuZWwgZnJvbSBcIi4uL1VJL1VJVHJ5U2tpblBhbmVsXCI7XHJcbmltcG9ydCBVSVdlYXBvbkxldmVsUGFuZWwgZnJvbSBcIi4uL1VJL1VJV2VhcG9uTGV2ZWxQYW5lbFwiO1xyXG5pbXBvcnQgVUlVcGdyYWRlUGFuZWwgZnJvbSBcIi4uL1VJL1VJVXBncmFkZVBhbmVsXCI7XHJcbmltcG9ydCBVSU92ZXJQYWdlIGZyb20gXCIuLi9VSS9VSU92ZXJQYWdlXCI7XHJcbmltcG9ydCBVSVNpZ25QYW5lbCBmcm9tIFwiLi4vVUkvVUlTaWduUGFnZVwiO1xyXG5pbXBvcnQgVUlUaW1lUGFuZWwgZnJvbSBcIi4uL1VJL1VJVGltZVBhZ2VcIjtcclxuaW1wb3J0IFVJUmFua2luZ1BhbmVsIGZyb20gXCIuLi9VSS9VSVJhbmtpbmdQYW5lbFwiO1xyXG5pbXBvcnQgVUlCYWNrUGFuZWwgZnJvbSBcIi4uL1VJL1VJQmFja1BhbmVsXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBVSeeuoeeQhuexu1xyXG4gKiDmlrDlop7pobXpnaLmiJbogIXlvLnnqpfpnIDopoHkv67mlLlcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1nciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdDogVUlNZ3I7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0KCk6IFVJTWdyIHtcclxuICAgICAgICBpZiAoIVVJTWdyLl9pbnN0KSB7XHJcbiAgICAgICAgICAgIFVJTWdyLl9pbnN0ID0gbmV3IFVJTWdyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBVSU1nci5faW5zdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wYWdlRGljdDogeyBbbmFtZTogc3RyaW5nXTogVUlQYWdlIH0gPSB7fTtcclxuICAgIHByaXZhdGUgX3BhbmVsRGljdDogeyBbbmFtZTogc3RyaW5nXTogVUlQYWdlIH0gPSB7fTtcclxuXHJcbiAgICBwdWJsaWMgb3BlblBhZ2UobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+eCueWHu+WIsOS6huaMiemSricrbmFtZSk7XHJcbiAgICAgICAgLy8g6Ziy5q2i6L+e57ut5aSa5qyh54K55Ye76aG16Z2iXHJcbiAgICAgICAgaWYgKHRoaXMuX3BhbmVsRGljdFtuYW1lXSAmJiB0aGlzLl9wYW5lbERpY3RbbmFtZV0uaXNPcGVuKCkpIHJldHVybjtcclxuICAgICAgICAvLyDlhbPpl63miYDmnInnmoTlvLnnqpdcclxuICAgICAgICB0aGlzLmNsb3NlQWxsUGFuZWwoKTtcclxuICAgICAgICAvLyDlhbPpl63miYDmnInnmoTpobXpnaJcclxuICAgICAgICB0aGlzLmNsb3NlQWxsUGFnZSgpO1xyXG4gICAgICAgIC8vIOW8gOWQr+eVjOmdolxyXG4gICAgICAgIGlmICh0aGlzLl9wYWdlRGljdFtuYW1lXSAmJiB0aGlzLl9wYWdlRGljdFtuYW1lXS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGFnZURpY3RbbmFtZV0ub3BlbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBwYWdlOiBVSVBhZ2UgPSB0aGlzLl9jcmVhdGVVSShuYW1lKTtcclxuICAgICAgICAgICAgaWYgKHBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhZ2VEaWN0W25hbWVdID0gcGFnZTtcclxuICAgICAgICAgICAgICAgIHBhZ2UuaXNWYWxpZCgpICYmIHBhZ2Uub3BlbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuUGFuZWwobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8g6Ziy5q2i6L+e57ut5aSa5qyh54K55Ye76aG16Z2iXHJcbiAgICAgICAgaWYgKHRoaXMuX3BhbmVsRGljdFtuYW1lXSAmJiB0aGlzLl9wYW5lbERpY3RbbmFtZV0uaXNPcGVuKCkpIHJldHVybjtcclxuICAgICAgICAvLyDlvIDlkK/lvLnnqpdcclxuICAgICAgICBpZiAodGhpcy5fcGFuZWxEaWN0W25hbWVdICYmIHRoaXMuX3BhbmVsRGljdFtuYW1lXS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGFuZWxEaWN0W25hbWVdLm9wZW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcGFuZWw6IFVJUGFnZSA9IHRoaXMuX2NyZWF0ZVVJKG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAocGFuZWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhbmVsRGljdFtuYW1lXSA9IHBhbmVsO1xyXG4gICAgICAgICAgICAgICAgcGFuZWwuaXNWYWxpZCgpICYmIHBhbmVsLm9wZW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VBbGxQYWdlKCkge1xyXG4gICAgICAgIC8vIOWFs+mXreaJgOacieeahOmhtemdolxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9wYWdlRGljdCkge1xyXG4gICAgICAgICAgICBpZiAoa2V5ICYmIHRoaXMuX3BhZ2VEaWN0W2tleV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhZ2VEaWN0W2tleV0uY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VBbGxQYW5lbCgpIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fcGFuZWxEaWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgJiYgdGhpcy5fcGFuZWxEaWN0W2tleV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhbmVsRGljdFtrZXldLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlUGFuZWwobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhbmVsRGljdFtuYW1lXSAmJiB0aGlzLl9wYW5lbERpY3RbbmFtZV0uaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhbmVsRGljdFtuYW1lXS5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX2NyZWF0ZVVJKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFBhZ2VOYW1lLlVJTG9hZGluZ1BhZ2U6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVUlMb2FkaW5nUGFnZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUGFnZU5hbWUuVUlIb21lUGFnZToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVSUhvbWVQYWdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBQYW5lbE5hbWUuVUlTaWduUGFuZWw6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVUlTaWduUGFuZWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFBhbmVsTmFtZS5VSVR1cm50YWJsZVBhbmVsOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVJVHVybnRhYmxlUGFuZWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFBhbmVsTmFtZS5VSVRpbWVQYW5lbDoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVSVRpbWVQYW5lbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUGFuZWxOYW1lLlVJVHJ5U2tpblBhbmVsOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVJVHJ5U2tpblBhbmVsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBQYW5lbE5hbWUuVUlXZWFwb25MZXZlbFBhbmVsOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVJV2VhcG9uTGV2ZWxQYW5lbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUGFnZU5hbWUuVUlHYW1lTG9hZGluZ1BhZ2U6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVUlHYW1lTG9hZGluZ1BhZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFBhZ2VOYW1lLlVJR2FtZVBhZ2U6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVUlHYW1lUGFnZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUGFuZWxOYW1lLlVJUGF1c2VQYW5lbDoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVSVBhdXNlUGFuZWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFBhbmVsTmFtZS5VSVVwZ3JhZGVQYW5lbDoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVSVVwZ3JhZGVQYW5lbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUGFuZWxOYW1lLlVJUmV2aXZlUGFuZWw6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVUlSZXZpdmVQYW5lbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUGFnZU5hbWUuVUlPdmVyUGFnZToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVSU92ZXJQYWdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBQYW5lbE5hbWUuVUlSYW5raW5nUGFuZWw6e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVSVJhbmtpbmdQYW5lbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUGFuZWxOYW1lLlVJQmFja1BhbmVsOntcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVUlCYWNrUGFuZWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIkNhbiBub3QgZm91bmQgY2xhc3MgXCIgKyBuYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19