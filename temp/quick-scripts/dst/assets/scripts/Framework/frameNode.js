
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Framework/frameNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37b42HKGFRPgYrcKV8tOxGk', 'frameNode');
// scripts/Framework/frameNode.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var frameNode = /** @class */ (function (_super) {
    __extends(frameNode, _super);
    function frameNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.commonSprite = [];
        _this.selectSprite = [];
        return _this;
    }
    frameNode.prototype.start = function () {
    };
    __decorate([
        property(cc.SpriteFrame)
    ], frameNode.prototype, "commonSprite", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], frameNode.prototype, "selectSprite", void 0);
    frameNode = __decorate([
        ccclass
    ], frameNode);
    return frameNode;
}(cc.Component));
exports.default = frameNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRnJhbWV3b3JrXFxmcmFtZU5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUFVQztRQVJHLGtCQUFZLEdBQXNCLEVBQUUsQ0FBQTtRQUdwQyxrQkFBWSxHQUFzQixFQUFFLENBQUE7O0lBS3hDLENBQUM7SUFIRyx5QkFBSyxHQUFMO0lBRUEsQ0FBQztJQVBEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bURBQ1c7SUFHcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFDVztJQUxuQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBVTdCO0lBQUQsZ0JBQUM7Q0FWRCxBQVVDLENBVnNDLEVBQUUsQ0FBQyxTQUFTLEdBVWxEO2tCQVZvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBmcmFtZU5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnR7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBjb21tb25TcHJpdGUgOiBjYy5TcHJpdGVGcmFtZVtdID0gW11cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBzZWxlY3RTcHJpdGUgOiBjYy5TcHJpdGVGcmFtZVtdID0gW11cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19