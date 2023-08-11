
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Framework/StartScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43b0f4vgalEfbPwFDwK4L1k', 'StartScene');
// scripts/Framework/StartScene.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StartScene = /** @class */ (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelBtn = null;
        _this.reinBtn = null;
        return _this;
    }
    StartScene.prototype.start = function () {
        cc.director.loadScene("Load");
        // this.levelBtn = this.node.getChildByName("levelButton");
        // this.reinBtn = this.node.getChildByName('reinButton');
        // this.levelBtn.on('touchend',function(){
        //     cc.director.loadScene("Load");
        // });
        // this.reinBtn.on('touchend',function(){
        //     cc.director.loadScene("Load");
        // });
    };
    StartScene = __decorate([
        ccclass
    ], StartScene);
    return StartScene;
}(cc.Component));
exports.default = StartScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRnJhbWV3b3JrXFxTdGFydFNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBZUM7UUFkRyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBQzFCLGFBQU8sR0FBYSxJQUFJLENBQUM7O0lBYTdCLENBQUM7SUFYYSwwQkFBSyxHQUFmO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsMkRBQTJEO1FBQzNELHlEQUF5RDtRQUN6RCwwQ0FBMEM7UUFDMUMscUNBQXFDO1FBQ3JDLE1BQU07UUFDTix5Q0FBeUM7UUFDekMscUNBQXFDO1FBQ3JDLE1BQU07SUFDVixDQUFDO0lBZGdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FlOUI7SUFBRCxpQkFBQztDQWZELEFBZUMsQ0FmdUMsRUFBRSxDQUFDLFNBQVMsR0FlbkQ7a0JBZm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0U2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgbGV2ZWxCdG4gOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHJlaW5CdG4gOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkxvYWRcIik7XHJcbiAgICAgICAgLy8gdGhpcy5sZXZlbEJ0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxldmVsQnV0dG9uXCIpO1xyXG4gICAgICAgIC8vIHRoaXMucmVpbkJ0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgncmVpbkJ1dHRvbicpO1xyXG4gICAgICAgIC8vIHRoaXMubGV2ZWxCdG4ub24oJ3RvdWNoZW5kJyxmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJMb2FkXCIpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIHRoaXMucmVpbkJ0bi5vbigndG91Y2hlbmQnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8gICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkxvYWRcIik7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbn1cclxuIl19