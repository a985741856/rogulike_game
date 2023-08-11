
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/prop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f0b28oTeGVBh6BfEEtoMe8i', 'prop');
// scripts/Game/prop.ts

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
var gameMgr_1 = require("./gameMgr");
var person_1 = require("./person");
var weapon_1 = require("./weapon");
var UpgradeMgr_1 = require("./UpgradeMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Prop = /** @class */ (function (_super) {
    __extends(Prop, _super);
    function Prop() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.weaponSprite = null;
        _this.idx = 0;
        return _this;
        // update (dt) {}
    }
    Prop.prototype.start = function () {
        var _this = this;
        gameMgr_1.gameMgr && gameMgr_1.gameMgr.setMapTs.checkNode(this.node, true);
        cc.tween(this.node)
            .delay(5)
            .blink(3, 3)
            .call(function () {
            UpgradeMgr_1.upgradeMgr.createPropArr.splice(_this.idx, 1);
            _this.node.destroy();
            UpgradeMgr_1.upgradeMgr.createNum--;
        })
            .start();
        // console.log('当前idx为：'+this.idx);
        // console.log('当前武器为：'+ Weapon.WeaponName[this.idx - 1]);
        var weaponSp = this.node.getChildByName('weaponSp');
        weaponSp.getComponent(cc.Sprite).spriteFrame = CocosZ_1.cocosz.resMgr.getRes("w_" + weapon_1.default.WeaponName[this.idx - 1], cc.SpriteFrame);
    };
    Prop.prototype.onCollisionEnter = function (other, self) {
        var ts = other.getComponent(person_1.default);
        if (other.tag == 1 && ts.isPlayer) {
            UpgradeMgr_1.upgradeMgr.createPropArr.splice(this.idx, 1);
            this.node.destroy();
            UpgradeMgr_1.upgradeMgr.createNum--;
            ts.setNewWeapon(this.idx - 1);
        }
    };
    __decorate([
        property()
    ], Prop.prototype, "weaponSprite", void 0);
    Prop = __decorate([
        ccclass
    ], Prop);
    return Prop;
}(cc.Component));
exports.default = Prop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZVxccHJvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw4Q0FBNkM7QUFDN0MscUNBQW9DO0FBQ3BDLG1DQUE4QjtBQUM5QixtQ0FBOEI7QUFDOUIsMkNBQTBDO0FBRXBDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWtDLHdCQUFZO0lBQTlDO1FBRUksd0JBQXdCO1FBRjVCLHFFQXNDQztRQWxDRyxlQUFlO1FBRWYsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFFOUIsU0FBRyxHQUFZLENBQUMsQ0FBQzs7UUE2QmpCLGlCQUFpQjtJQUNyQixDQUFDO0lBNUJHLG9CQUFLLEdBQUw7UUFBQSxpQkFnQkM7UUFmRyxpQkFBTyxJQUFJLGlCQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNsQixLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ1IsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDWCxJQUFJLENBQUM7WUFDRix1QkFBVSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BCLHVCQUFVLENBQUMsU0FBUyxFQUFHLENBQUM7UUFDNUIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7UUFFVCxtQ0FBbUM7UUFDbkMsMERBQTBEO1FBQzFELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEksQ0FBQztJQUVELCtCQUFnQixHQUFoQixVQUFpQixLQUFVLEVBQUUsSUFBUztRQUNsQyxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQTtRQUNuQyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDL0IsdUJBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQix1QkFBVSxDQUFDLFNBQVMsRUFBRyxDQUFDO1lBQ3hCLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNqQztJQUNMLENBQUM7SUE5QkQ7UUFEQyxRQUFRLEVBQUc7OENBQ2tCO0lBTmIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXNDeEI7SUFBRCxXQUFDO0NBdENELEFBc0NDLENBdENpQyxFQUFFLENBQUMsU0FBUyxHQXNDN0M7a0JBdENvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IHsgZ2FtZU1nciB9IGZyb20gXCIuL2dhbWVNZ3JcIjtcclxuaW1wb3J0IFBlcnNvbiBmcm9tIFwiLi9wZXJzb25cIjtcclxuaW1wb3J0IFdlYXBvbiBmcm9tIFwiLi93ZWFwb25cIjtcclxuaW1wb3J0IHsgdXBncmFkZU1nciB9IGZyb20gXCIuL1VwZ3JhZGVNZ3JcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcbiAgICBAcHJvcGVydHkgKCkgXHJcbiAgICB3ZWFwb25TcHJpdGUgOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBpZHggOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBnYW1lTWdyICYmIGdhbWVNZ3Iuc2V0TWFwVHMuY2hlY2tOb2RlKHRoaXMubm9kZSwgdHJ1ZSk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgIC5kZWxheSg1KVxyXG4gICAgICAgIC5ibGluaygzLCAzKVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdXBncmFkZU1nci5jcmVhdGVQcm9wQXJyLnNwbGljZSh0aGlzLmlkeCwxKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdXBncmFkZU1nci5jcmVhdGVOdW0gLS07XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn5b2T5YmNaWR45Li677yaJyt0aGlzLmlkeCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+W9k+WJjeatpuWZqOS4uu+8micrIFdlYXBvbi5XZWFwb25OYW1lW3RoaXMuaWR4IC0gMV0pO1xyXG4gICAgICAgIGxldCB3ZWFwb25TcCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnd2VhcG9uU3AnKTtcclxuICAgICAgICB3ZWFwb25TcC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwid19cIiArIFdlYXBvbi5XZWFwb25OYW1lW3RoaXMuaWR4IC0gMV0sIGNjLlNwcml0ZUZyYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBhbnksIHNlbGY6IGFueSkge1xyXG4gICAgICAgIGxldCB0cyA9IG90aGVyLmdldENvbXBvbmVudChQZXJzb24pXHJcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSAxICYmIHRzLmlzUGxheWVyKSB7XHJcbiAgICAgICAgICAgIHVwZ3JhZGVNZ3IuY3JlYXRlUHJvcEFyci5zcGxpY2UodGhpcy5pZHgsMSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHVwZ3JhZGVNZ3IuY3JlYXRlTnVtIC0tO1xyXG4gICAgICAgICAgICB0cy5zZXROZXdXZWFwb24odGhpcy5pZHggLSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==