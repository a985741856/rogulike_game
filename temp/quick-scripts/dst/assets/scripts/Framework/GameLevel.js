
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Framework/GameLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eed2d9Edt1Nz4Ol90Ng/Qs5', 'GameLevel');
// scripts/Framework/GameLevel.ts

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
var CocosZ_1 = require("./CocosZ");
var Constant_1 = require("./Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLevel = /** @class */ (function (_super) {
    __extends(GameLevel, _super);
    function GameLevel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.returnBtn = null;
        _this.PageView = null;
        _this.pageindex = 0;
        _this.lockedNode = [];
        return _this;
    }
    GameLevel.prototype.start = function () {
        var self = this;
        this.returnBtn = this.node.getChildByName('BtnReturn');
        this.PageView = this.node.getChildByName('PageView');
        this.returnBtn.on('touchend', function () {
            cc.director.loadScene("GameStart");
        });
        for (var i = 0; i < self.PageView.getChildByName('view').getChildByName('content').children.length; i++) {
            var childnode = self.PageView.getChildByName('view').getChildByName('content').children[i];
            var lock = childnode.getChildByName('lock');
            var btn = childnode.getChildByName('button');
            // this.lockedNode.push(lock);
            var levelinfo = CocosZ_1.cocosz.dataMgr.getLevelInfo((1001 + i));
            console.log(levelinfo);
            // self.isLocked(levelinfo);
            if (levelinfo.State == 0) {
                lock.active = true;
            }
            else {
                lock.active = false;
            }
            btn.on('touchend', function () {
                self.touchevent();
            });
        }
        this.PageView.on('page-turning', function (event, target) {
            console.log(target);
            self.pageindex = self.PageView.getComponent(cc.PageView).getCurrentPageIndex();
            console.log(self.pageindex);
        });
    };
    GameLevel.prototype.touchevent = function () {
        console.log('点击按钮' + (1001 + this.pageindex));
        Constant_1.default.currentLevel = this.pageindex + 1;
        CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UIHomePage);
    };
    GameLevel.prototype.isLocked = function (levelinfo) {
        var self = this;
        console.log(levelinfo.State);
        if (levelinfo.State == 0) {
            this.lockedNode[this.pageindex].active = true;
        }
        else {
            this.lockedNode[this.pageindex].active = false;
        }
    };
    GameLevel = __decorate([
        ccclass
    ], GameLevel);
    return GameLevel;
}(cc.Component));
exports.default = GameLevel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRnJhbWV3b3JrXFxHYW1lTGV2ZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsbUNBQWtDO0FBQ2xDLHVDQUFpRDtBQUUzQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQStEQztRQTlERyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFZLENBQUMsQ0FBQztRQUV2QixnQkFBVSxHQUFnQixFQUFFLENBQUM7O0lBd0RqQyxDQUFDO0lBdERhLHlCQUFLLEdBQWY7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBQztZQUN6QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN0QyxDQUFDLENBQUMsQ0FBQztRQUVILEtBQUssSUFBSSxDQUFDLEdBQVksQ0FBQyxFQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvRyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNGLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3Qyw4QkFBOEI7WUFFOUIsSUFBSSxTQUFTLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZCLDRCQUE0QjtZQUM1QixJQUFHLFNBQVMsQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFDO2dCQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUN0QjtpQkFBSTtnQkFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUN2QjtZQUdELEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFDO2dCQUNkLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN0QixDQUFDLENBQUMsQ0FBQztTQUNOO1FBR0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFDLFVBQVMsS0FBSyxFQUFDLE1BQU07WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQy9FLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBR2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDhCQUFVLEdBQVY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUM3QyxrQkFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMzQyxlQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCw0QkFBUSxHQUFSLFVBQVUsU0FBUztRQUNmLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFHLFNBQVMsQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFDO1lBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDakQ7YUFBSTtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDbEQ7SUFDTCxDQUFDO0lBOURnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBK0Q3QjtJQUFELGdCQUFDO0NBL0RELEFBK0RDLENBL0RzQyxFQUFFLENBQUMsU0FBUyxHQStEbEQ7a0JBL0RvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4vQ29jb3NaXCI7XHJcbmltcG9ydCBDb25zdGFudCAsIHsgUGFnZU5hbWUgfSBmcm9tIFwiLi9Db25zdGFudFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTGV2ZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcmV0dXJuQnRuIDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgUGFnZVZpZXcgOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwYWdlaW5kZXggOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGxvY2tlZE5vZGUgOiBjYy5Ob2RlIFtdID0gW107XHJcbiAgICBcclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yZXR1cm5CdG4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ0J0blJldHVybicpO1xyXG4gICAgICAgIHRoaXMuUGFnZVZpZXcgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1BhZ2VWaWV3Jyk7XHJcbiAgICAgICAgdGhpcy5yZXR1cm5CdG4ub24oJ3RvdWNoZW5kJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lU3RhcnRcIilcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA6IG51bWJlciA9IDAgOyBpIDwgc2VsZi5QYWdlVmlldy5nZXRDaGlsZEJ5TmFtZSgndmlldycpLmdldENoaWxkQnlOYW1lKCdjb250ZW50JykuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkbm9kZSA9IHNlbGYuUGFnZVZpZXcuZ2V0Q2hpbGRCeU5hbWUoJ3ZpZXcnKS5nZXRDaGlsZEJ5TmFtZSgnY29udGVudCcpLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBsZXQgbG9jayA9IGNoaWxkbm9kZS5nZXRDaGlsZEJ5TmFtZSgnbG9jaycpO1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gY2hpbGRub2RlLmdldENoaWxkQnlOYW1lKCdidXR0b24nKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5sb2NrZWROb2RlLnB1c2gobG9jayk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGV2ZWxpbmZvID0gY29jb3N6LmRhdGFNZ3IuZ2V0TGV2ZWxJbmZvKCgxMDAxICsgaSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsZXZlbGluZm8pO1xyXG4gICAgICAgICAgICAvLyBzZWxmLmlzTG9ja2VkKGxldmVsaW5mbyk7XHJcbiAgICAgICAgICAgIGlmKGxldmVsaW5mby5TdGF0ZSA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGxvY2suYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsb2NrLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgYnRuLm9uKCd0b3VjaGVuZCcsZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnRvdWNoZXZlbnQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLlBhZ2VWaWV3Lm9uKCdwYWdlLXR1cm5pbmcnLGZ1bmN0aW9uKGV2ZW50LHRhcmdldCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgICAgICAgIHNlbGYucGFnZWluZGV4ID0gc2VsZi5QYWdlVmlldy5nZXRDb21wb25lbnQoY2MuUGFnZVZpZXcpLmdldEN1cnJlbnRQYWdlSW5kZXgoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZi5wYWdlaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG91Y2hldmVudCAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+eCueWHu+aMiemSricrICgxMDAxICsgdGhpcy5wYWdlaW5kZXgpKTtcclxuICAgICAgICBDb25zdGFudC5jdXJyZW50TGV2ZWwgPSB0aGlzLnBhZ2VpbmRleCArIDE7XHJcbiAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYWdlKFBhZ2VOYW1lLlVJSG9tZVBhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTG9ja2VkIChsZXZlbGluZm8pIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5sb2cobGV2ZWxpbmZvLlN0YXRlKTtcclxuICAgICAgICBpZihsZXZlbGluZm8uU3RhdGUgPT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMubG9ja2VkTm9kZVt0aGlzLnBhZ2VpbmRleF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5sb2NrZWROb2RlW3RoaXMucGFnZWluZGV4XS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19