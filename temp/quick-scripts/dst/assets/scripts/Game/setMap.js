
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/setMap.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09313S8CXZCU4lptDwQuJIg', 'setMap');
// scripts/Game/setMap.ts

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
var CocosZ_1 = require("../Framework/CocosZ");
var gameMgr_1 = require("./gameMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var setMap = /** @class */ (function (_super) {
    __extends(setMap, _super);
    function setMap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dmmArr = [];
        _this.dikuai = null;
        _this.time = -1;
        _this.mainCameraPos = cc.Vec2.ZERO;
        _this.distanceX = 2500;
        _this.distanceY = 1500;
        return _this;
    }
    setMap.prototype.onLoad = function () {
        gameMgr_1.gameMgr.setMapTs = this;
        // 躲猫猫图片
        gameMgr_1.gameMgr.dmmArr = this.dmmArr;
        // 地块
        this.dikuai = this.node.getChildByName("dikuai");
        if (this.dikuai) {
            this.dikuai.zIndex = cc.macro.MIN_ZINDEX;
        }
        // 获取坐标
        if ([1, 2, 4].includes(CocosZ_1.cocosz.gameMode) && this.node.getChildByName("point")) {
            var point = this.node.getChildByName("point");
            for (var i = 0; i < point.childrenCount; i++) {
                gameMgr_1.gameMgr.posList[i] = i;
            }
        }
    };
    setMap.prototype.onDestroy = function () {
        gameMgr_1.gameMgr.setMapTs = null;
        ;
    };
    setMap.prototype.start = function () {
        for (var i = 0; i < this.node.children.length; i++) {
            // 初始zindex
            var child = this.node.children[i];
        }
    };
    setMap.prototype.lateUpdate = function () {
        if (CocosZ_1.cocosz.isPause || gameMgr_1.gameMgr.isWin || gameMgr_1.gameMgr.isFail)
            return;
        if (this.time++ % 30 == 0) {
            this.checkAllNode();
        }
    };
    setMap.prototype.checkAllNode = function () {
        if (gameMgr_1.gameMgr && gameMgr_1.gameMgr.mainCamereRootNode) {
            this.mainCameraPos = gameMgr_1.gameMgr.mainCamereRootNode.getPosition();
            this.distanceX = cc.winSize.width / 2 / gameMgr_1.gameMgr.mainCamera.zoomRatio + 500;
            this.distanceY = cc.winSize.height / 2 / gameMgr_1.gameMgr.mainCamera.zoomRatio + 500;
        }
        // 地图节点
        var excludeArr = ["guide", "guidePath", "player", "colllider", "dikuai", "point", "itemPoint", "tree", "tipLayer", "jingyanLayer", "posLayer", "propLayer"];
        for (var i = 0; i < this.node.childrenCount; i++) {
            var child = this.node.children[i];
            if (excludeArr.includes(child.name) == false) {
                this.checkNode(child);
            }
        }
        // 地图地块
        var dikuai = this.node.getChildByName("dikuai");
        if (dikuai) {
            for (var i = 0; i < dikuai.childrenCount; i++) {
                var child = dikuai.children[i];
                this.checkNode(child);
            }
        }
    };
    setMap.prototype.checkNode = function (n, isRefresh) {
        if (isRefresh === void 0) { isRefresh = false; }
        if (isRefresh) {
            if (gameMgr_1.gameMgr && gameMgr_1.gameMgr.mainCamereRootNode) {
                this.mainCameraPos = gameMgr_1.gameMgr.mainCamereRootNode.getPosition();
                this.distanceX = cc.winSize.width / 2 / gameMgr_1.gameMgr.mainCamera.zoomRatio + 500;
                this.distanceY = cc.winSize.height / 2 / gameMgr_1.gameMgr.mainCamera.zoomRatio + 500;
            }
        }
        if (n && n.isValid && n.activeInHierarchy) {
            if (n.parent.name == this.node.name || n.parent.name == "dikuai") {
                if (n.opacity == 0 || n.opacity == 255) {
                    if (((n.x + n.width * Math.abs(n.scaleX) / 2) < (this.mainCameraPos.x - this.distanceX)) || ((n.x - n.width * Math.abs(n.scaleX) / 2) > (this.mainCameraPos.x + this.distanceX) ||
                        (n.y + n.height * Math.abs(n.scaleY) / 2) < (this.mainCameraPos.y - this.distanceY)) || ((n.y - n.height * Math.abs(n.scaleY) / 2) > (this.mainCameraPos.y + this.distanceY))) {
                        n.opacity = 0;
                        return false;
                    }
                    else {
                        n.opacity = 255;
                        return true;
                    }
                }
            }
        }
    };
    // 释放资源节点
    setMap.prototype.release = function (call) {
        var _this = this;
        // 删除dikaui子节点
        if (this.dikuai && this.dikuai.isValid && this.dikuai.childrenCount) {
            for (var i = 0; i < 2; i++) {
                var child = this.dikuai.children[i];
                if (child && child.isValid) {
                    child.destroy();
                }
            }
            setTimeout(function () { _this.release(call); });
        }
        // 删除普通节点
        else if (this.node.childrenCount) {
            for (var i = 0; i < 10; i++) {
                var child = this.node.children[i];
                if (child && child.isValid) {
                    child.destroy();
                }
            }
            setTimeout(function () { _this.release(call); });
        }
        // 结束后回调
        else {
            call && call();
        }
    };
    __decorate([
        property([cc.SpriteFrame])
    ], setMap.prototype, "dmmArr", void 0);
    setMap = __decorate([
        ccclass
    ], setMap);
    return setMap;
}(cc.Component));
exports.default = setMap;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZVxcc2V0TWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUU3QyxxQ0FBb0M7QUFFOUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUEySEM7UUF6SEcsWUFBTSxHQUFxQixFQUFFLENBQUM7UUFFOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQWdDdkIsVUFBSSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBUWxCLG1CQUFhLEdBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEMsZUFBUyxHQUFXLElBQUksQ0FBQztRQUN6QixlQUFTLEdBQVcsSUFBSSxDQUFDOztJQTZFN0IsQ0FBQztJQXJIYSx1QkFBTSxHQUFoQjtRQUNJLGlCQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN4QixRQUFRO1FBQ1IsaUJBQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM3QixLQUFLO1FBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztTQUM1QztRQUNELE9BQU87UUFDUCxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzFFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMxQyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDMUI7U0FDSjtJQUNMLENBQUM7SUFFUywwQkFBUyxHQUFuQjtRQUNJLGlCQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUFBLENBQUM7SUFDN0IsQ0FBQztJQUVTLHNCQUFLLEdBQWY7UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hELFdBQVc7WUFDWCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7SUFJRCwyQkFBVSxHQUFWO1FBQ0ksSUFBSSxlQUFNLENBQUMsT0FBTyxJQUFJLGlCQUFPLENBQUMsS0FBSyxJQUFJLGlCQUFPLENBQUMsTUFBTTtZQUFFLE9BQU87UUFDOUQsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBS0QsNkJBQVksR0FBWjtRQUNJLElBQUksaUJBQU8sSUFBSSxpQkFBTyxDQUFDLGtCQUFrQixFQUFFO1lBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsaUJBQU8sQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM5RCxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQzNFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLGlCQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7U0FDL0U7UUFDRCxPQUFPO1FBQ1AsSUFBSSxVQUFVLEdBQUcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNKLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRTtnQkFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUN4QjtTQUNKO1FBQ0QsT0FBTztRQUNQLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELElBQUksTUFBTSxFQUFFO1lBQ1IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekI7U0FDSjtJQUNMLENBQUM7SUFFRCwwQkFBUyxHQUFULFVBQVUsQ0FBVSxFQUFFLFNBQTBCO1FBQTFCLDBCQUFBLEVBQUEsaUJBQTBCO1FBQzVDLElBQUksU0FBUyxFQUFFO1lBQ1gsSUFBSSxpQkFBTyxJQUFJLGlCQUFPLENBQUMsa0JBQWtCLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsaUJBQU8sQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDOUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsaUJBQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztnQkFDM0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsaUJBQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQzthQUMvRTtTQUNKO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsaUJBQWlCLEVBQUU7WUFDdkMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUU7Z0JBQzlELElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxHQUFHLEVBQUU7b0JBQ3BDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO3dCQUMzSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQzNLLEVBQUU7d0JBQ0gsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7d0JBQ2QsT0FBTyxLQUFLLENBQUM7cUJBQ2hCO3lCQUFNO3dCQUNILENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO3dCQUNoQixPQUFPLElBQUksQ0FBQztxQkFDZjtpQkFDSjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRUQsU0FBUztJQUNULHdCQUFPLEdBQVAsVUFBUSxJQUFjO1FBQXRCLGlCQXlCQztRQXhCRyxjQUFjO1FBQ2QsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO1lBQ2pFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO29CQUN4QixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ25CO2FBQ0o7WUFDRCxVQUFVLENBQUMsY0FBUSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0M7UUFDRCxTQUFTO2FBQ0osSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtvQkFDeEIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNuQjthQUNKO1lBQ0QsVUFBVSxDQUFDLGNBQVEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsUUFBUTthQUNIO1lBQ0QsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO1NBQ2xCO0lBQ0wsQ0FBQztJQXhIRDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzswQ0FDRztJQUZiLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0EySDFCO0lBQUQsYUFBQztDQTNIRCxBQTJIQyxDQTNIbUMsRUFBRSxDQUFDLFNBQVMsR0EySC9DO2tCQTNIb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCB7IFppbmRleExheWVyIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5pbXBvcnQgeyBnYW1lTWdyIH0gZnJvbSBcIi4vZ2FtZU1nclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNldE1hcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIGRtbUFycjogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIGRpa3VhaTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBnYW1lTWdyLnNldE1hcFRzID0gdGhpcztcclxuICAgICAgICAvLyDourLnjKvnjKvlm77niYdcclxuICAgICAgICBnYW1lTWdyLmRtbUFyciA9IHRoaXMuZG1tQXJyO1xyXG4gICAgICAgIC8vIOWcsOWdl1xyXG4gICAgICAgIHRoaXMuZGlrdWFpID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZGlrdWFpXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmRpa3VhaSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpa3VhaS56SW5kZXggPSBjYy5tYWNyby5NSU5fWklOREVYO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDojrflj5blnZDmoIdcclxuICAgICAgICBpZiAoWzEsIDIsIDRdLmluY2x1ZGVzKGNvY29zei5nYW1lTW9kZSkgJiYgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicG9pbnRcIikpIHtcclxuICAgICAgICAgICAgbGV0IHBvaW50ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicG9pbnRcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBnYW1lTWdyLnBvc0xpc3RbaV0gPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgZ2FtZU1nci5zZXRNYXBUcyA9IG51bGw7O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyDliJ3lp4t6aW5kZXhcclxuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLm5vZGUuY2hpbGRyZW5baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aW1lOiBudW1iZXIgPSAtMTtcclxuICAgIGxhdGVVcGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKGNvY29zei5pc1BhdXNlIHx8IGdhbWVNZ3IuaXNXaW4gfHwgZ2FtZU1nci5pc0ZhaWwpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy50aW1lKysgJSAzMCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tBbGxOb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1haW5DYW1lcmFQb3M6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XHJcbiAgICBkaXN0YW5jZVg6IG51bWJlciA9IDI1MDA7XHJcbiAgICBkaXN0YW5jZVk6IG51bWJlciA9IDE1MDA7XHJcbiAgICBjaGVja0FsbE5vZGUoKSB7XHJcbiAgICAgICAgaWYgKGdhbWVNZ3IgJiYgZ2FtZU1nci5tYWluQ2FtZXJlUm9vdE5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluQ2FtZXJhUG9zID0gZ2FtZU1nci5tYWluQ2FtZXJlUm9vdE5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5kaXN0YW5jZVggPSBjYy53aW5TaXplLndpZHRoIC8gMiAvIGdhbWVNZ3IubWFpbkNhbWVyYS56b29tUmF0aW8gKyA1MDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzdGFuY2VZID0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyIC8gZ2FtZU1nci5tYWluQ2FtZXJhLnpvb21SYXRpbyArIDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Zyw5Zu+6IqC54K5XHJcbiAgICAgICAgbGV0IGV4Y2x1ZGVBcnIgPSBbXCJndWlkZVwiLCBcImd1aWRlUGF0aFwiLCBcInBsYXllclwiLCBcImNvbGxsaWRlclwiLCBcImRpa3VhaVwiLCBcInBvaW50XCIsIFwiaXRlbVBvaW50XCIsIFwidHJlZVwiLCBcInRpcExheWVyXCIsIFwiamluZ3lhbkxheWVyXCIsIFwicG9zTGF5ZXJcIixcInByb3BMYXllclwiXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5ub2RlLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoZXhjbHVkZUFyci5pbmNsdWRlcyhjaGlsZC5uYW1lKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja05vZGUoY2hpbGQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Zyw5Zu+5Zyw5Z2XXHJcbiAgICAgICAgbGV0IGRpa3VhaSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImRpa3VhaVwiKTtcclxuICAgICAgICBpZiAoZGlrdWFpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlrdWFpLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gZGlrdWFpLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja05vZGUoY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrTm9kZShuOiBjYy5Ob2RlLCBpc1JlZnJlc2g6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChpc1JlZnJlc2gpIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVNZ3IgJiYgZ2FtZU1nci5tYWluQ2FtZXJlUm9vdE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkNhbWVyYVBvcyA9IGdhbWVNZ3IubWFpbkNhbWVyZVJvb3ROb2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3RhbmNlWCA9IGNjLndpblNpemUud2lkdGggLyAyIC8gZ2FtZU1nci5tYWluQ2FtZXJhLnpvb21SYXRpbyArIDUwMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzdGFuY2VZID0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyIC8gZ2FtZU1nci5tYWluQ2FtZXJhLnpvb21SYXRpbyArIDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobiAmJiBuLmlzVmFsaWQgJiYgbi5hY3RpdmVJbkhpZXJhcmNoeSkge1xyXG4gICAgICAgICAgICBpZiAobi5wYXJlbnQubmFtZSA9PSB0aGlzLm5vZGUubmFtZSB8fCBuLnBhcmVudC5uYW1lID09IFwiZGlrdWFpXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuLm9wYWNpdHkgPT0gMCB8fCBuLm9wYWNpdHkgPT0gMjU1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCgobi54ICsgbi53aWR0aCAqIE1hdGguYWJzKG4uc2NhbGVYKSAvIDIpIDwgKHRoaXMubWFpbkNhbWVyYVBvcy54IC0gdGhpcy5kaXN0YW5jZVgpKSB8fCAoKG4ueCAtIG4ud2lkdGggKiBNYXRoLmFicyhuLnNjYWxlWCkgLyAyKSA+ICh0aGlzLm1haW5DYW1lcmFQb3MueCArIHRoaXMuZGlzdGFuY2VYKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAobi55ICsgbi5oZWlnaHQgKiBNYXRoLmFicyhuLnNjYWxlWSkgLyAyKSA8ICh0aGlzLm1haW5DYW1lcmFQb3MueSAtIHRoaXMuZGlzdGFuY2VZKSkgfHwgKChuLnkgLSBuLmhlaWdodCAqIE1hdGguYWJzKG4uc2NhbGVZKSAvIDIpID4gKHRoaXMubWFpbkNhbWVyYVBvcy55ICsgdGhpcy5kaXN0YW5jZVkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbi5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4ub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOmHiuaUvui1hOa6kOiKgueCuVxyXG4gICAgcmVsZWFzZShjYWxsOiBGdW5jdGlvbikge1xyXG4gICAgICAgIC8vIOWIoOmZpGRpa2F1aeWtkOiKgueCuVxyXG4gICAgICAgIGlmICh0aGlzLmRpa3VhaSAmJiB0aGlzLmRpa3VhaS5pc1ZhbGlkICYmIHRoaXMuZGlrdWFpLmNoaWxkcmVuQ291bnQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuZGlrdWFpLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkICYmIGNoaWxkLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMucmVsZWFzZShjYWxsKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWIoOmZpOaZrumAmuiKgueCuVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMubm9kZS5jaGlsZHJlbkNvdW50KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5ub2RlLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkICYmIGNoaWxkLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMucmVsZWFzZShjYWxsKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOe7k+adn+WQjuWbnuiwg1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjYWxsICYmIGNhbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19