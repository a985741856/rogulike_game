
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI/PhysicalBord.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ca02ji4XVGmpUTOi1wpkdh', 'PhysicalBord');
// scripts/UI/PhysicalBord.ts

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
var Constant_1 = require("../Framework/Constant");
var CocosZ_1 = require("../Framework/CocosZ");
var Msg_1 = require("../Framework/Msg");
// @ts-ignore
var i18n = require('LanguageData');
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PhysicalBord = /** @class */ (function (_super) {
    __extends(PhysicalBord, _super);
    function PhysicalBord() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._layout = null;
        _this._icon = null;
        _this._adBtn = null;
        return _this;
    }
    PhysicalBord.prototype.onLoad = function () {
        this._layout = this.node.getChildByName("tilayout");
        this._icon = this.node.getChildByName("Icon");
        this._adBtn = this.node.getChildByName("BtnAD");
        if (this._adBtn) {
            this._adBtn.on(cc.Node.EventType.TOUCH_END, (function () {
            }));
            this._adBtn.active = CocosZ_1.cocosz.isADON;
        }
    };
    PhysicalBord.prototype.onEnable = function () {
        cc.game.on(Constant_1.default.E_GAME_LOGIC, this._onGameMessageHandler, this);
        this._updateLayout();
    };
    PhysicalBord.prototype.onDisable = function () {
        cc.game.targetOff(this);
    };
    PhysicalBord.prototype._onGameMessageHandler = function (event) {
        switch (event.type) {
            case Constant_1.default.E_Diamond_CHANGE: {
                this._updateLayout();
                break;
            }
        }
    };
    PhysicalBord.prototype._updateLayout = function () {
        for (var i = 0; i < this._layout.childrenCount; i++) {
            this._layout.children[i].active = false;
        }
        for (var i = 0; i < CocosZ_1.cocosz.dataMgr.PhysicalCount; i++) {
            this._layout.children[i].active = true;
        }
    };
    /**
     * 获取Icon的世界坐标位置(金币动画飞入使用)
     */
    PhysicalBord.prototype.getLocation = function () {
        var pos = this._icon.convertToWorldSpaceAR(cc.Vec3.ZERO);
        // let temp = cc.v2(pos.x, cc.winSize.height - 76)
        return pos;
    };
    PhysicalBord.prototype._addGold = function () {
        CocosZ_1.cocosz.dataMgr.CoinCount += 200;
        Msg_1.default.Show(i18n.t("msg.gxhdjb") + "200"); //恭喜获得金币
    };
    PhysicalBord = __decorate([
        ccclass
    ], PhysicalBord);
    return PhysicalBord;
}(cc.Component));
exports.default = PhysicalBord;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXFBoeXNpY2FsQm9yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBNkM7QUFDN0MsOENBQTZDO0FBQzdDLHdDQUFtQztBQUNuQyxhQUFhO0FBQ2IsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRS9CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBNkRDO1FBM0RXLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixZQUFNLEdBQVksSUFBSSxDQUFDOztJQXlEbkMsQ0FBQztJQXZERyw2QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7WUFFN0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFRLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVwRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU8sNENBQXFCLEdBQTdCLFVBQThCLEtBQVU7UUFDcEMsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ2hCLEtBQUssa0JBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3JCLE1BQU07YUFDVDtTQUNKO0lBQ0wsQ0FBQztJQUVPLG9DQUFhLEdBQXJCO1FBQ0ksS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDM0M7UUFFRCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUMxQztJQUVMLENBQUM7SUFFRDs7T0FFRztJQUNJLGtDQUFXLEdBQWxCO1FBQ0ksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELGtEQUFrRDtRQUNsRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFTywrQkFBUSxHQUFoQjtRQUNJLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQztRQUNoQyxhQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQSxRQUFRO0lBQ25ELENBQUM7SUE1RGdCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E2RGhDO0lBQUQsbUJBQUM7Q0E3REQsQUE2REMsQ0E3RHlDLEVBQUUsQ0FBQyxTQUFTLEdBNkRyRDtrQkE3RG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uc3RhbnQgZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5pbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgTXNnIGZyb20gXCIuLi9GcmFtZXdvcmsvTXNnXCI7XHJcbi8vIEB0cy1pZ25vcmVcclxuY29uc3QgaTE4biA9IHJlcXVpcmUoJ0xhbmd1YWdlRGF0YScpO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBoeXNpY2FsQm9yZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfbGF5b3V0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2ljb246IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYWRCdG46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLl9sYXlvdXQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aWxheW91dFwiKTtcclxuICAgICAgICB0aGlzLl9pY29uID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSWNvblwiKTtcclxuICAgICAgICB0aGlzLl9hZEJ0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ0bkFEXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLl9hZEJ0bikge1xyXG4gICAgICAgICAgICB0aGlzLl9hZEJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkQnRuLmFjdGl2ZSA9IGNvY29zei5pc0FET047XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIGNjLmdhbWUub24oQ29uc3RhbnQuRV9HQU1FX0xPR0lDLCB0aGlzLl9vbkdhbWVNZXNzYWdlSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUxheW91dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICBjYy5nYW1lLnRhcmdldE9mZih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkdhbWVNZXNzYWdlSGFuZGxlcihldmVudDogYW55KSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RhbnQuRV9EaWFtb25kX0NIQU5HRToge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlTGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVMYXlvdXQoKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuX2xheW91dC5jaGlsZHJlbkNvdW50OyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLl9sYXlvdXQuY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29jb3N6LmRhdGFNZ3IuUGh5c2ljYWxDb3VudDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5fbGF5b3V0LmNoaWxkcmVuW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlkljb27nmoTkuJbnlYzlnZDmoIfkvY3nva4o6YeR5biB5Yqo55S76aOe5YWl5L2/55SoKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0TG9jYXRpb24oKSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuX2ljb24uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzMuWkVSTyk7XHJcbiAgICAgICAgLy8gbGV0IHRlbXAgPSBjYy52Mihwb3MueCwgY2Mud2luU2l6ZS5oZWlnaHQgLSA3NilcclxuICAgICAgICByZXR1cm4gcG9zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2FkZEdvbGQoKSB7XHJcbiAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50ICs9IDIwMDtcclxuICAgICAgICBNc2cuU2hvdyhpMThuLnQoXCJtc2cuZ3hoZGpiXCIpICsgXCIyMDBcIik7Ly/mga3llpzojrflvpfph5HluIFcclxuICAgIH1cclxufVxyXG4iXX0=