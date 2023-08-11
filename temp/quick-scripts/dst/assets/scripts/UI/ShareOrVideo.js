
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI/ShareOrVideo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af730WeuddAYrpP8Nt749SI', 'ShareOrVideo');
// scripts/UI/ShareOrVideo.ts

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
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShareOrVideo = /** @class */ (function (_super) {
    __extends(ShareOrVideo, _super);
    function ShareOrVideo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._btn = false;
        _this.isGuideSKill = false;
        _this.shareNode = null;
        _this.videoNode = null;
        return _this;
    }
    Object.defineProperty(ShareOrVideo.prototype, "btn", {
        get: function () {
            return this._btn;
        },
        set: function (v) {
            this._btn = false;
            if (this.node.getChildByName("share")) {
                this.shareNode = this.node.getChildByName("share");
            }
            if (this.node.getChildByName("video")) {
                this.videoNode = this.node.getChildByName("video");
            }
        },
        enumerable: false,
        configurable: true
    });
    ShareOrVideo.prototype.onLoad = function () {
        // 监听点击
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            // cc.game.emit(Constant.E_ShareOrVideo);
        });
        // 监听事件
        cc.game.on(Constant_1.default.E_ShareOrVideo, this.show, this);
    };
    ShareOrVideo.prototype.onDestroy = function () {
        // 注销事件
        cc.game.targetOff(this);
    };
    ShareOrVideo.prototype.start = function () {
        this.show();
    };
    ShareOrVideo.prototype.show = function () {
        if (this.isGuideSKill && CocosZ_1.cocosz.dataMgr.guide_skill) {
            // 隐藏分享图标
            if (this.shareNode && this.shareNode.isValid) {
                this.shareNode.active = false;
            }
            // 隐藏视频图标
            if (this.videoNode && this.videoNode.isValid) {
                this.videoNode.active = false;
            }
        }
        else {
            // 显示分享图标
            if (this.shareNode && this.shareNode.isValid) {
                this.shareNode.active = CocosZ_1.cocosz.canShare;
            }
            // 显示视频图标
            if (this.videoNode && this.videoNode.isValid) {
                this.videoNode.active = !CocosZ_1.cocosz.canShare;
            }
        }
    };
    __decorate([
        property()
    ], ShareOrVideo.prototype, "btn", null);
    __decorate([
        property({ type: cc.Boolean, tooltip: "是否新手指引免费使用" })
    ], ShareOrVideo.prototype, "isGuideSKill", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "分享图标" })
    ], ShareOrVideo.prototype, "shareNode", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: "视频图标" })
    ], ShareOrVideo.prototype, "videoNode", void 0);
    ShareOrVideo = __decorate([
        ccclass
    ], ShareOrVideo);
    return ShareOrVideo;
}(cc.Component));
exports.default = ShareOrVideo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXFNoYXJlT3JWaWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw4Q0FBNkM7QUFDN0Msa0RBQTZDO0FBRXZDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBZ0VDO1FBL0RHLFVBQUksR0FBWSxLQUFLLENBQUM7UUFnQnRCLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBRzlCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsZUFBUyxHQUFZLElBQUksQ0FBQzs7SUF5QzlCLENBQUM7SUE3REcsc0JBQUksNkJBQUc7YUFBUDtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDO2FBQ0QsVUFBUSxDQUFVO1lBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0RDtZQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdEQ7UUFDTCxDQUFDOzs7T0FUQTtJQW9CUyw2QkFBTSxHQUFoQjtRQUNJLE9BQU87UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDdEMseUNBQXlDO1FBQzdDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTztRQUNQLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFRLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVTLGdDQUFTLEdBQW5CO1FBQ0ksT0FBTztRQUNQLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFUyw0QkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwyQkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ2pELFNBQVM7WUFDVCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNqQztZQUNELFNBQVM7WUFDVCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNqQztTQUNKO2FBQU07WUFDSCxTQUFTO1lBQ1QsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO2dCQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxlQUFNLENBQUMsUUFBUSxDQUFDO2FBQzNDO1lBQ0QsU0FBUztZQUNULElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTtnQkFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxlQUFNLENBQUMsUUFBUSxDQUFDO2FBQzVDO1NBQ0o7SUFDTCxDQUFDO0lBNUREO1FBREMsUUFBUSxFQUFFOzJDQUdWO0lBWUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLENBQUM7c0RBQ3hCO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO21EQUNuQjtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzttREFDbkI7SUF2QlQsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQWdFaEM7SUFBRCxtQkFBQztDQWhFRCxBQWdFQyxDQWhFeUMsRUFBRSxDQUFDLFNBQVMsR0FnRXJEO2tCQWhFb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCBDb25zdGFudCBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcmVPclZpZGVvIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIF9idG46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBnZXQgYnRuKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9idG47XHJcbiAgICB9XHJcbiAgICBzZXQgYnRuKHY6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9idG4gPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic2hhcmVcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGFyZU5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzaGFyZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInZpZGVvXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Ob2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidmlkZW9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkJvb2xlYW4sIHRvb2x0aXA6IFwi5piv5ZCm5paw5omL5oyH5byV5YWN6LS55L2/55SoXCIgfSlcclxuICAgIGlzR3VpZGVTS2lsbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IFwi5YiG5Lqr5Zu+5qCHXCIgfSlcclxuICAgIHNoYXJlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogXCLop4bpopHlm77moIdcIiB9KVxyXG4gICAgdmlkZW9Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOebkeWQrOeCueWHu1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfU2hhcmVPclZpZGVvKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIOebkeWQrOS6i+S7tlxyXG4gICAgICAgIGNjLmdhbWUub24oQ29uc3RhbnQuRV9TaGFyZU9yVmlkZW8sIHRoaXMuc2hvdywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICAvLyDms6jplIDkuovku7ZcclxuICAgICAgICBjYy5nYW1lLnRhcmdldE9mZih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0d1aWRlU0tpbGwgJiYgY29jb3N6LmRhdGFNZ3IuZ3VpZGVfc2tpbGwpIHtcclxuICAgICAgICAgICAgLy8g6ZqQ6JeP5YiG5Lqr5Zu+5qCHXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNoYXJlTm9kZSAmJiB0aGlzLnNoYXJlTm9kZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDpmpDol4/op4bpopHlm77moIdcclxuICAgICAgICAgICAgaWYgKHRoaXMudmlkZW9Ob2RlICYmIHRoaXMudmlkZW9Ob2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g5pi+56S65YiG5Lqr5Zu+5qCHXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNoYXJlTm9kZSAmJiB0aGlzLnNoYXJlTm9kZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTm9kZS5hY3RpdmUgPSBjb2Nvc3ouY2FuU2hhcmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5pi+56S66KeG6aKR5Zu+5qCHXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZGVvTm9kZSAmJiB0aGlzLnZpZGVvTm9kZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvTm9kZS5hY3RpdmUgPSAhY29jb3N6LmNhblNoYXJlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==