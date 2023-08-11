
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '50404UIfWNMdr6ERRkIVC1x', 'bullet');
// scripts/Game/bullet.ts

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
var Constant_1 = require("../Framework/Constant");
var gameMgr_1 = require("./gameMgr");
var person_1 = require("./person");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bulletId = 0;
        _this.id = 1;
        _this.atk = 10;
        _this.atker = null;
        _this.canMove = true;
        _this.canBreak = true;
        _this.canPenetrate = false;
        _this.canWall = false;
        _this.boomEffect = null;
        _this.hitEffect = null;
        _this.hitAudio = "";
        _this.isHartMusic = true;
        _this.hitEffectType = 0;
        // LIFE-CYCLE CALLBACKS:
        _this.hartInterval = 0;
        _this.isHitEffectAngle = false;
        _this.isAngle = false;
        _this.isBoom = false;
        _this.isRecord = true;
        // 方向
        _this.dir = null;
        _this._lastPos = null;
        // 已攻击对象
        _this.atkedArr = [];
        return _this;
    }
    Bullet_1 = Bullet;
    Bullet.prototype.start = function () {
        gameMgr_1.gameMgr && gameMgr_1.gameMgr.setMapTs.checkNode(this.node, true);
        if (this.node.zIndex == 0) {
            if (this.isBoom) {
                this.node.zIndex = Constant_1.ZindexLayer.zindex_bomb;
            }
            else if ("liewen" === this.node.name) {
                this.node.zIndex = Constant_1.ZindexLayer.zinedx_floorLiewen;
            }
            else {
                this.node.zIndex = Constant_1.ZindexLayer.zindex_bullet + this.bulletId;
            }
        }
        // gameMgr
        if (this.node.name == "bullet_sd" || this.node.name == "bullet_hdl") {
            var box = this.node.getComponent(cc.BoxCollider);
            if (box) {
                cc.tween(box.size).to(0.3, { height: 550 }).start();
                cc.tween(box.offset).to(0.3, { x: 700 }).start();
            }
        }
    };
    Bullet.prototype.onDisable = function () {
        this._lastPos = null;
    };
    Bullet.prototype.lateUpdate = function (dt) {
        // 每帧设置角度
        if (this.isAngle) {
            if (this._lastPos) {
                var div = this.node.getPosition().subSelf(this._lastPos);
                if (false == div.equals(cc.Vec2.ZERO)) {
                    this.node.angle = -cc.v2(div).signAngle(cc.v2(1, 0)) / Math.PI * 180;
                    this._lastPos = this.node.getPosition();
                }
            }
            else {
                this._lastPos = this.node.getPosition();
            }
        }
        else {
        }
    };
    Bullet.prototype.onCollisionEnter = function (other, self) {
        var _this = this;
        if (other.tag == 1) {
            // console.log(other);
            var ts_1 = other.getComponent(person_1.default);
            if (ts_1.id == this.id) {
                return;
            }
            // 能倍阻断并且不能穿透玩家
            if (this.canBreak && !this.canPenetrate) {
                this.node.destroy();
            }
            else {
                if (this.atkedArr.includes(other.node)) {
                    return;
                }
                else if (this.isRecord) {
                    this.atkedArr.push(other.node);
                }
            }
            // 击中效果
            if (this.hitEffect && !CocosZ_1.cocosz.isPause) {
                var node = cc.instantiate(this.hitEffect);
                node.zIndex = Constant_1.ZindexLayer.zindex_effect_hit;
                if (this.hitEffectType == 1) {
                    node.parent = other.node;
                    // 击中特效方向
                    if (this.isHitEffectAngle) {
                        node.angle = -cc.v2(this.dir).signAngle(cc.v2(1, 0)) / Math.PI * 180;
                    }
                }
                else {
                    var pos = this.node.getPosition();
                    var dt = this.node.width;
                    if (dt < 5) {
                        var box = this.node.getComponent(cc.BoxCollider);
                        if (box) {
                            dt += box.offset.x;
                        }
                    }
                    pos = pos.add(cc.v2(dt, 0).rotate(this.node.angle / 180 * Math.PI));
                    node.parent = this.node.parent;
                    node.setPosition(pos);
                }
                if (this.hitAudio) {
                    gameMgr_1.gameMgr.playEffect(this.hitAudio, this.node);
                }
            }
            // 爆炸效果
            if (this.boomEffect) {
                var boom = cc.instantiate(this.boomEffect);
                boom.parent = this.node.parent;
                boom.setPosition(this.node.getPosition());
                boom.zIndex = Constant_1.ZindexLayer.zindex_bomb;
                gameMgr_1.gameMgr.playEffect("explo", boom);
                var bullet = boom.getComponent(Bullet_1);
                bullet.atk = this.atk;
                bullet.atker = this.atker;
                bullet.id = this.id;
                bullet.dir = this.dir;
                return;
            }
            // 血液效果
            if (gameMgr_1.gameMgr.blood && self.world && self.world.points && self.world.points[0]) {
                var blood = null;
                blood = cc.instantiate(gameMgr_1.gameMgr.blood);
                blood.parent = gameMgr_1.gameMgr.map;
                blood.zIndex = Constant_1.ZindexLayer.zindex_blood;
                ;
                var pos = blood.parent.convertToNodeSpaceAR(cc.v2(self.world.points[0].x, self.world.points[0].y));
                if (this.dir) {
                    var angle = -cc.v2(this.dir).signAngle(cc.v2(0, 1)) / Math.PI * 180;
                    blood.angle = angle;
                }
                blood.setPosition(pos);
            }
            // 击退
            if (this.isBoom) {
                var dir = other.node.getPosition().subSelf(this.node.getPosition()).normalizeSelf();
                // 方向为0，随机方向
                if (dir.equals(cc.Vec2.ZERO)) {
                    dir = cc.v2(1, 0).rotateSelf(2 * Math.PI * Math.random());
                }
                this.dir = dir.mulSelf(3);
            }
            else if (!this.canMove && this.dir && this.dir.mag() < 2) {
                this.dir.normalizeSelf().mulSelf(2);
            }
            // 敌人受伤
            ts_1.hart(this.atk, this.atker, this.dir, this.isHartMusic);
            if (this.hartInterval) {
                this.schedule(function () {
                    if (ts_1 && ts_1.isValid && _this.atkedArr.includes(ts_1.node)) {
                        ts_1.hart(_this.atk, _this.atker, _this.dir, _this.isHartMusic);
                    }
                }, this.hartInterval);
            }
        }
        // 障碍物
        else if (other.tag == 5) {
            // 爆炸效果
            if (this.boomEffect) {
                var boom = cc.instantiate(this.boomEffect);
                boom.parent = this.node.parent;
                boom.setPosition(this.node.getPosition());
                var bullet = boom.getComponent(Bullet_1);
                bullet.atk = this.atk;
                bullet.atker = this.atker;
                bullet.id = this.id;
                gameMgr_1.gameMgr.playEffect("explo", boom);
            }
            // 销毁子弹
            if (this.canBreak && !this.canWall) {
                var pos = this.node.getPosition();
                var dt = this.node.width;
                if (dt < 5) {
                    var box = this.node.getComponent(cc.BoxCollider);
                    if (box) {
                        dt += box.offset.x;
                    }
                }
                pos = pos.add(cc.v2(dt, 0).rotate(this.node.angle / 180 * Math.PI));
                if (this.hitEffect && this.hitEffectType != 1) {
                    var node = cc.instantiate(this.hitEffect);
                    node.parent = this.node.parent;
                    node.setPosition(pos);
                    node.zIndex = Constant_1.ZindexLayer.zindex_effect_hit;
                }
                else {
                    var node = cc.instantiate(gameMgr_1.gameMgr.spark);
                    node.parent = this.node.parent;
                    node.setPosition(pos);
                    node.zIndex = Constant_1.ZindexLayer.zindex_effect_spark;
                }
                this.node.destroy();
            }
        }
    };
    var Bullet_1;
    __decorate([
        property()
    ], Bullet.prototype, "bulletId", void 0);
    __decorate([
        property()
    ], Bullet.prototype, "canMove", void 0);
    __decorate([
        property({ tooltip: "能否阻断" })
    ], Bullet.prototype, "canBreak", void 0);
    __decorate([
        property({ tooltip: "能否穿透敌人" })
    ], Bullet.prototype, "canPenetrate", void 0);
    __decorate([
        property({ tooltip: "能否穿透墙壁" })
    ], Bullet.prototype, "canWall", void 0);
    __decorate([
        property(cc.Prefab)
    ], Bullet.prototype, "boomEffect", void 0);
    __decorate([
        property(cc.Prefab)
    ], Bullet.prototype, "hitEffect", void 0);
    __decorate([
        property({ type: cc.String, tooltip: "子弹音效" })
    ], Bullet.prototype, "hitAudio", void 0);
    __decorate([
        property({ tooltip: "敌人受伤是否发出音效" })
    ], Bullet.prototype, "isHartMusic", void 0);
    __decorate([
        property()
    ], Bullet.prototype, "hitEffectType", void 0);
    __decorate([
        property()
    ], Bullet.prototype, "hartInterval", void 0);
    __decorate([
        property({ tooltip: "击中效果设置角度" })
    ], Bullet.prototype, "isHitEffectAngle", void 0);
    __decorate([
        property({ tooltip: "每帧设置角度" })
    ], Bullet.prototype, "isAngle", void 0);
    __decorate([
        property({ tooltip: "是否爆炸子弹" })
    ], Bullet.prototype, "isBoom", void 0);
    __decorate([
        property({ tooltip: "是否记录受伤者" })
    ], Bullet.prototype, "isRecord", void 0);
    Bullet = Bullet_1 = __decorate([
        ccclass
    ], Bullet);
    return Bullet;
}(cc.Component));
exports.default = Bullet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZVxcYnVsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDhDQUE2QztBQUM3QyxrREFBb0Q7QUFDcEQscUNBQW9DO0FBQ3BDLG1DQUE4QjtBQUd4QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQTRPQztRQXpPRyxjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLFFBQUUsR0FBVyxDQUFDLENBQUM7UUFFZixTQUFHLEdBQVcsRUFBRSxDQUFDO1FBRWpCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFHckIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBRzlCLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFHekIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0IsZUFBUyxHQUFjLElBQUksQ0FBQztRQUc1QixjQUFRLEdBQVcsRUFBRSxDQUFDO1FBR3RCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLHdCQUF3QjtRQUd4QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUd6QixzQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFHbEMsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUd6QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBR3hCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsS0FBSztRQUNMLFNBQUcsR0FBWSxJQUFJLENBQUM7UUE0QlosY0FBUSxHQUFZLElBQUksQ0FBQztRQWtCakMsUUFBUTtRQUNSLGNBQVEsR0FBYyxFQUFFLENBQUM7O0lBc0k3QixDQUFDO2VBNU9vQixNQUFNO0lBeUR2QixzQkFBSyxH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O1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDOzRDQUNSO0lBcERSLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0E0TzFCO0lBQUQsYUFBQztDQTVPRCxBQTRPQyxDQTVPbUMsRUFBRSxDQUFDLFNBQVMsR0E0Ty9DO2tCQTVPb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBOT0RBVEEgfSBmcm9tIFwiZG5zXCI7XHJcbmltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCB7IFppbmRleExheWVyIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5pbXBvcnQgeyBnYW1lTWdyIH0gZnJvbSBcIi4vZ2FtZU1nclwiO1xyXG5pbXBvcnQgUGVyc29uIGZyb20gXCIuL3BlcnNvblwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBidWxsZXRJZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBpZDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBhdGs6IG51bWJlciA9IDEwO1xyXG5cclxuICAgIGF0a2VyOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBjYW5Nb3ZlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIuiDveWQpumYu+aWrVwiIH0pXHJcbiAgICBjYW5CcmVhazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCLog73lkKbnqb/pgI/mlYzkurpcIiB9KVxyXG4gICAgY2FuUGVuZXRyYXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCLog73lkKbnqb/pgI/lopnlo4FcIiB9KVxyXG4gICAgY2FuV2FsbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBib29tRWZmZWN0OiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBoaXRFZmZlY3Q6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3RyaW5nLCB0b29sdGlwOiBcIuWtkOW8uemfs+aViFwiIH0pXHJcbiAgICBoaXRBdWRpbzogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIuaVjOS6uuWPl+S8pOaYr+WQpuWPkeWHuumfs+aViFwiIH0pXHJcbiAgICBpc0hhcnRNdXNpYzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIGhpdEVmZmVjdFR5cGU6IG51bWJlciA9IDA7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgaGFydEludGVydmFsOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwi5Ye75Lit5pWI5p6c6K6+572u6KeS5bqmXCIgfSlcclxuICAgIGlzSGl0RWZmZWN0QW5nbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIuavj+W4p+iuvue9ruinkuW6plwiIH0pXHJcbiAgICBpc0FuZ2xlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCLmmK/lkKbniIbngrjlrZDlvLlcIiB9KVxyXG4gICAgaXNCb29tOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdG9vbHRpcDogXCLmmK/lkKborrDlvZXlj5fkvKTogIVcIiB9KVxyXG4gICAgaXNSZWNvcmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8vIOaWueWQkVxyXG4gICAgZGlyOiBjYy5WZWMyID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBnYW1lTWdyICYmIGdhbWVNZ3Iuc2V0TWFwVHMuY2hlY2tOb2RlKHRoaXMubm9kZSwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS56SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0Jvb20pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSBaaW5kZXhMYXllci56aW5kZXhfYm9tYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChcImxpZXdlblwiID09PSB0aGlzLm5vZGUubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IFppbmRleExheWVyLnppbmVkeF9mbG9vckxpZXdlbjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSBaaW5kZXhMYXllci56aW5kZXhfYnVsbGV0ICsgdGhpcy5idWxsZXRJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBnYW1lTWdyXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09IFwiYnVsbGV0X3NkXCIgfHwgdGhpcy5ub2RlLm5hbWUgPT0gXCJidWxsZXRfaGRsXCIpIHtcclxuICAgICAgICAgICAgbGV0IGJveCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpXHJcbiAgICAgICAgICAgIGlmIChib3gpIHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGJveC5zaXplKS50bygwLjMsIHsgaGVpZ2h0OiA1NTAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGJveC5vZmZzZXQpLnRvKDAuMywgeyB4OiA3MDAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2xhc3RQb3MgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xhc3RQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIGxhdGVVcGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIOavj+W4p+iuvue9ruinkuW6plxyXG4gICAgICAgIGlmICh0aGlzLmlzQW5nbGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2xhc3RQb3MpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkaXYgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS5zdWJTZWxmKHRoaXMuX2xhc3RQb3MpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZhbHNlID09IGRpdi5lcXVhbHMoY2MuVmVjMi5aRVJPKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IC1jYy52MihkaXYpLnNpZ25BbmdsZShjYy52MigxLCAwKSkgLyBNYXRoLlBJICogMTgwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RQb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RQb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5bey5pS75Ye75a+56LGhXHJcbiAgICBhdGtlZEFycjogY2MuTm9kZVtdID0gW107XHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBhbnksIHNlbGY6IGFueSkge1xyXG4gICAgICAgIGlmIChvdGhlci50YWcgPT0gMSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvdGhlcik7XHJcbiAgICAgICAgICAgIGxldCB0cyA9IG90aGVyLmdldENvbXBvbmVudChQZXJzb24pXHJcbiAgICAgICAgICAgIGlmICh0cy5pZCA9PSB0aGlzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g6IO95YCN6Zi75pat5bm25LiU5LiN6IO956m/6YCP546p5a62XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbkJyZWFrICYmICF0aGlzLmNhblBlbmV0cmF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0a2VkQXJyLmluY2x1ZGVzKG90aGVyLm5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUmVjb3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGtlZEFyci5wdXNoKG90aGVyLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOWHu+S4reaViOaenFxyXG4gICAgICAgICAgICBpZiAodGhpcy5oaXRFZmZlY3QgJiYgIWNvY29zei5pc1BhdXNlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaGl0RWZmZWN0KTtcclxuICAgICAgICAgICAgICAgIG5vZGUuekluZGV4ID0gWmluZGV4TGF5ZXIuemluZGV4X2VmZmVjdF9oaXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oaXRFZmZlY3RUeXBlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IG90aGVyLm5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Ye75Lit54m55pWI5pa55ZCRXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNIaXRFZmZlY3RBbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFuZ2xlID0gLWNjLnYyKHRoaXMuZGlyKS5zaWduQW5nbGUoY2MudjIoMSwgMCkpIC8gTWF0aC5QSSAqIDE4MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGR0ID0gdGhpcy5ub2RlLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkdCA8IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJveCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm94KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdCArPSBib3gub2Zmc2V0Lng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zID0gcG9zLmFkZChjYy52MihkdCwgMCkucm90YXRlKHRoaXMubm9kZS5hbmdsZSAvIDE4MCAqIE1hdGguUEkpKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGl0QXVkaW8pIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnBsYXlFZmZlY3QodGhpcy5oaXRBdWRpbywgdGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g54iG54K45pWI5p6cXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvb21FZmZlY3QpIHtcclxuICAgICAgICAgICAgICAgIGxldCBib29tID0gY2MuaW5zdGFudGlhdGUodGhpcy5ib29tRWZmZWN0KVxyXG4gICAgICAgICAgICAgICAgYm9vbS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgYm9vbS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICBib29tLnpJbmRleCA9IFppbmRleExheWVyLnppbmRleF9ib21iO1xyXG4gICAgICAgICAgICAgICAgZ2FtZU1nci5wbGF5RWZmZWN0KFwiZXhwbG9cIiwgYm9vbSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnVsbGV0ID0gYm9vbS5nZXRDb21wb25lbnQoQnVsbGV0KTtcclxuICAgICAgICAgICAgICAgIGJ1bGxldC5hdGsgPSB0aGlzLmF0aztcclxuICAgICAgICAgICAgICAgIGJ1bGxldC5hdGtlciA9IHRoaXMuYXRrZXI7XHJcbiAgICAgICAgICAgICAgICBidWxsZXQuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0LmRpciA9IHRoaXMuZGlyO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOihgOa2suaViOaenFxyXG4gICAgICAgICAgICBpZiAoZ2FtZU1nci5ibG9vZCAmJiBzZWxmLndvcmxkICYmIHNlbGYud29ybGQucG9pbnRzICYmIHNlbGYud29ybGQucG9pbnRzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmxvb2Q6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYmxvb2QgPSBjYy5pbnN0YW50aWF0ZShnYW1lTWdyLmJsb29kKTtcclxuICAgICAgICAgICAgICAgIGJsb29kLnBhcmVudCA9IGdhbWVNZ3IubWFwO1xyXG4gICAgICAgICAgICAgICAgYmxvb2QuekluZGV4ID0gWmluZGV4TGF5ZXIuemluZGV4X2Jsb29kOztcclxuICAgICAgICAgICAgICAgIGxldCBwb3M6IGNjLlZlYzIgPSBibG9vZC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIoc2VsZi53b3JsZC5wb2ludHNbMF0ueCwgc2VsZi53b3JsZC5wb2ludHNbMF0ueSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gLWNjLnYyKHRoaXMuZGlyKS5zaWduQW5nbGUoY2MudjIoMCwgMSkpIC8gTWF0aC5QSSAqIDE4MDtcclxuICAgICAgICAgICAgICAgICAgICBibG9vZC5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYmxvb2Quc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlh7vpgIBcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNCb29tKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlyID0gb3RoZXIubm9kZS5nZXRQb3NpdGlvbigpLnN1YlNlbGYodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpLm5vcm1hbGl6ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgIC8vIOaWueWQkeS4ujDvvIzpmo/mnLrmlrnlkJFcclxuICAgICAgICAgICAgICAgIGlmIChkaXIuZXF1YWxzKGNjLlZlYzIuWkVSTykpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXIgPSBjYy52MigxLCAwKS5yb3RhdGVTZWxmKDIgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpciA9IGRpci5tdWxTZWxmKDMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmNhbk1vdmUgJiYgdGhpcy5kaXIgJiYgdGhpcy5kaXIubWFnKCkgPCAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpci5ub3JtYWxpemVTZWxmKCkubXVsU2VsZigyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDmlYzkurrlj5fkvKRcclxuICAgICAgICAgICAgdHMuaGFydCh0aGlzLmF0aywgdGhpcy5hdGtlciwgdGhpcy5kaXIsIHRoaXMuaXNIYXJ0TXVzaWMpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXJ0SW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cyAmJiB0cy5pc1ZhbGlkICYmIHRoaXMuYXRrZWRBcnIuaW5jbHVkZXModHMubm9kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHMuaGFydCh0aGlzLmF0aywgdGhpcy5hdGtlciwgdGhpcy5kaXIsIHRoaXMuaXNIYXJ0TXVzaWMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHRoaXMuaGFydEludGVydmFsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOmanOeijeeJqVxyXG4gICAgICAgIGVsc2UgaWYgKG90aGVyLnRhZyA9PSA1KSB7XHJcbiAgICAgICAgICAgIC8vIOeIhueCuOaViOaenFxyXG4gICAgICAgICAgICBpZiAodGhpcy5ib29tRWZmZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm9vbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYm9vbUVmZmVjdClcclxuICAgICAgICAgICAgICAgIGJvb20ucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgICAgIGJvb20uc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ1bGxldCA9IGJvb20uZ2V0Q29tcG9uZW50KEJ1bGxldCk7XHJcbiAgICAgICAgICAgICAgICBidWxsZXQuYXRrID0gdGhpcy5hdGs7XHJcbiAgICAgICAgICAgICAgICBidWxsZXQuYXRrZXIgPSB0aGlzLmF0a2VyO1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0LmlkID0gdGhpcy5pZDtcclxuICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheUVmZmVjdChcImV4cGxvXCIsIGJvb20pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOmUgOavgeWtkOW8uVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jYW5CcmVhayAmJiAhdGhpcy5jYW5XYWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZHQgPSB0aGlzLm5vZGUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBpZiAoZHQgPCA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJveCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChib3gpIHsgZHQgKz0gYm94Lm9mZnNldC54OyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwb3MgPSBwb3MuYWRkKGNjLnYyKGR0LCAwKS5yb3RhdGUodGhpcy5ub2RlLmFuZ2xlIC8gMTgwICogTWF0aC5QSSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhpdEVmZmVjdCAmJiB0aGlzLmhpdEVmZmVjdFR5cGUgIT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5oaXRFZmZlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS56SW5kZXggPSBaaW5kZXhMYXllci56aW5kZXhfZWZmZWN0X2hpdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUoZ2FtZU1nci5zcGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnpJbmRleCA9IFppbmRleExheWVyLnppbmRleF9lZmZlY3Rfc3Bhcms7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19