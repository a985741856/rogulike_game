
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/ZombieBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f9b3rBNdNPy6WqLrNu03ZA', 'ZombieBase');
// scripts/Game/ZombieBase.ts

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
var PlatUtils_1 = require("../../common-plugin/Scripts/PlatUtils");
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var gameDate_1 = require("../Game/gameDate");
var gameMgr_1 = require("../Game/gameMgr");
var person_1 = require("../Game/person");
var UpgradeMgr_1 = require("../Game/UpgradeMgr");
var bullet_1 = require("./bullet");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AtkType;
(function (AtkType) {
    AtkType[AtkType["front"] = 0] = "front";
    AtkType[AtkType["area"] = 1] = "area";
    AtkType[AtkType["charge"] = 2] = "charge";
    AtkType[AtkType["range"] = 3] = "range";
    AtkType[AtkType["shot"] = 4] = "shot";
    AtkType[AtkType["shoot"] = 5] = "shoot";
    AtkType[AtkType["sector"] = 6] = "sector";
})(AtkType || (AtkType = {}));
var ZombieBase = /** @class */ (function (_super) {
    __extends(ZombieBase, _super);
    function ZombieBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.zombieId = 0;
        _this.bullet_prefab = null;
        _this.sp_hongzhaquan = null;
        _this.audio_attack1 = null;
        _this.audio_attack2 = null;
        _this.audio_hart = null;
        _this.audio_die = null;
        _this.isBoss = false;
        _this.isElite = false;
        _this.createShotNum = 3;
        _this.reinNum = 1;
        _this._aniLayer = null;
        _this._spAni = null;
        _this._divToPlayer = cc.Vec2.ZERO;
        _this._time = -1;
        _this._canColor = true;
        _this._canAtk = true;
        return _this;
    }
    ZombieBase.prototype.onLoad = function () {
        var _this = this;
        this.id = 94;
        // 初始化配置表属性
        if (gameDate_1.default.ZombieMess[this.zombieId]) {
            this.totleHp = gameDate_1.default.ZombieMess[this.zombieId].hp;
            this.atkNum = gameDate_1.default.ZombieMess[this.zombieId].atk;
            this.atkRange = gameDate_1.default.ZombieMess[this.zombieId].atkRange;
            this.MoveSpeed = gameDate_1.default.ZombieMess[this.zombieId].speed;
            if (PlatUtils_1.default.IsOPPO) {
                this.MoveSpeed /= 2;
            }
        }
        // 大小缩放
        if (this.isBoss) {
            this.node.scale = 1;
        }
        else {
            this.node.scale = 0.8;
            if (this.isElite) {
                this.totleHp = this.node.scale * this.totleHp;
            }
        }
        // 刚体
        this.rig = this.node.getComponent(cc.RigidBody);
        if (this.rig) {
            this.rig.linearDamping = 0.2;
        }
        // spine动画
        this._aniLayer = this.node.getChildByName("aniLayer");
        if (this._aniLayer) {
            this._spAni = this._aniLayer.getChildByName("ani").getComponent(sp.Skeleton);
        }
        // 监听动画
        if (this._spAni) {
            this._spAni.setStartListener(function () { _this.startListenerCall(); });
            this._spAni.setCompleteListener(function () { _this.endListenerCall(); });
        }
    };
    ZombieBase.prototype.onDestroy = function () {
        // 取消监听
        cc.game.targetOff(this);
    };
    ZombieBase.prototype.start = function () { };
    ZombieBase.prototype.initNode = function () {
        var _this = this;
        gameMgr_1.gameMgr && gameMgr_1.gameMgr.setMapTs.checkNode(this.node, true);
        // 消息监听
        cc.game.on(Constant_1.default.E_GAME_LOGIC, this._onGameMessageHandler, this);
        gameMgr_1.gameMgr.zombieCurNum++;
        this.node.stopAllActions();
        this.node.zIndex = Constant_1.ZindexLayer.zindex_zombie + this.zombieId;
        this.node.opacity = 255;
        this.atkDir = cc.Vec2.ZERO;
        this.curHp = this.totleHp;
        this.isDeath = false;
        this.isAtk = false;
        this._canAtk = true;
        this.canMoveDir = true;
        this.canMove = true;
        // 播放出场动画
        if (this._spAni && this._spAni.isValid) {
            this._spAni.node.scaleX = Math.abs(this._spAni.node.scaleX);
            this._spAni.node.opacity = 255;
            this._spAni.node.color = cc.Color.WHITE;
            if (this.isBoss) {
                this._spAni.setAnimation(0, "spawn", false);
                this.scheduleOnce(function () {
                    // 碰撞体
                    var boxCollider = _this.node.getComponent(cc.BoxCollider);
                    if (boxCollider)
                        boxCollider.enabled = true;
                }, 2);
            }
            else {
                this._spAni.setAnimation(0, "idle", true);
                // 碰撞体
                var boxCollider = this.node.getComponent(cc.BoxCollider);
                if (boxCollider)
                    boxCollider.enabled = true;
            }
        }
        // 轰炸圈
        if (this.sp_hongzhaquan) {
            this.sp_hongzhaquan.node.setParent(this.node.parent);
            this.sp_hongzhaquan.node.zIndex = Constant_1.ZindexLayer.zinedx_floorTip;
            this.sp_hongzhaquan.setCompleteListener(function () {
                if (_this.sp_hongzhaquan && _this.sp_hongzhaquan.isValid) {
                    _this.sp_hongzhaquan.node.active = false;
                }
            });
        }
        // boss
        if (this.isBoss) {
            cc.game.emit(Constant_1.default.E_GAME_LOGIC, { type: Constant_1.default.E_Commonzombie_Destory });
            gameMgr_1.gameMgr && gameMgr_1.gameMgr.showBossHp(1);
            if (this.node.getChildByName("boos"))
                this.node.getChildByName("boos").active = true;
        }
        if (CocosZ_1.cocosz.gameMode == 6) {
            this.totleHp = this.reinNum * 0.2 * gameDate_1.default.ZombieMess[this.zombieId].hp + gameDate_1.default.ZombieMess[this.zombieId].hp;
            this.atkRange = this.reinNum * 0.02 * gameDate_1.default.ZombieMess[this.zombieId].atkRange + gameDate_1.default.ZombieMess[this.zombieId].atkRange;
            this.MoveSpeed = this.reinNum * 0.08 * gameDate_1.default.ZombieMess[this.zombieId].speed + gameDate_1.default.ZombieMess[this.zombieId].speed;
        }
        else {
        }
    };
    ZombieBase.prototype.putNodePool = function () {
        // 取消监听
        cc.game.targetOff(this);
        cc.Tween.stopAllByTarget(this.node);
        // boss
        if (this.isBoss) {
            // boss光影
            if (this.node.getChildByName("boos"))
                this.node.getChildByName("boos").active = false;
            // boss边界
            if (gameMgr_1.gameMgr) {
                gameMgr_1.gameMgr && gameMgr_1.gameMgr.showBossHp(0);
                if (gameMgr_1.gameMgr.boss_border && cc.isValid(gameMgr_1.gameMgr.boss_border)) {
                    gameMgr_1.gameMgr.boss_border.destroy();
                    gameMgr_1.gameMgr.boss_border = null;
                }
            }
            this.isBoss = false;
        }
        // 轰炸圈
        if (this.sp_hongzhaquan && this.sp_hongzhaquan.isValid) {
            this.sp_hongzhaquan.node.setParent(this.node);
            this.sp_hongzhaquan.node.active = false;
        }
        gameMgr_1.gameMgr.zombieCurNum--;
        gameMgr_1.gameMgr && gameMgr_1.gameMgr.isValid && gameMgr_1.gameMgr.nodePut(this.node.name, this.node);
    };
    ZombieBase.prototype.startListenerCall = function () {
        var _this = this;
        if (this._spAni.animation.includes("spawn")) {
            this._spAni.timeScale = 0.4;
            this.scheduleOnce(function () { _this._spAni.timeScale = 1; }, 1);
            this.canMoveDir = false;
            // 出场方向
            var fromPos = this.node.getPosition();
            var toPos = gameMgr_1.gameMgr.playerTs.node.getPosition();
            var div = toPos.subSelf(fromPos);
            this._spAni.node.scaleX = (div.x > 0 ? 1 : -1) * Math.abs(this._spAni.node.scaleX);
        }
        else if (this._spAni.animation.includes("attack")) {
            this.isAtk = true;
            this.canMoveDir = false;
            if ([8, 9, 18].includes(this.zombieId) && this._spAni.animation == "attack2") {
                this.speedRate *= 2.5;
                this.udpateRBody(this.moveDir);
                this.scheduleOnce(function () {
                    _this.speedRate /= 2.5;
                    _this.moveDir = cc.Vec2.ZERO;
                    _this.udpateRBody(_this.moveDir);
                }, 0.2);
            }
            else if ([10, 11, 12, 13].includes(this.zombieId) && this._spAni.animation == "attack2") {
                this.speedRate *= 3;
                this.udpateRBody(this.moveDir);
                this.scheduleOnce(function () {
                    _this.speedRate /= 3;
                    _this.moveDir = cc.Vec2.ZERO;
                    _this.udpateRBody(_this.moveDir);
                }, 0.2);
            }
            else if ([14, 19].includes(this.zombieId) && this._spAni.animation.includes("attack")) {
                this.speedRate *= 3;
                this.udpateRBody(this.moveDir);
                this.scheduleOnce(function () {
                    _this.speedRate /= 3;
                    _this.moveDir = cc.Vec2.ZERO;
                    _this.udpateRBody(_this.moveDir);
                }, 0.2);
            }
            else if (this.zombieId == 15 && this._spAni.animation == "attack") {
                this.speedRate *= 3;
                this.udpateRBody(this.moveDir);
                this.scheduleOnce(function () {
                    _this.speedRate /= 3;
                    _this.moveDir = cc.Vec2.ZERO;
                    _this.udpateRBody(_this.moveDir);
                }, 0.4);
            }
            else if (this.zombieId == 16 && this._spAni.animation == "attack") {
                this.speedRate *= 2;
                this.udpateRBody(this.moveDir);
                this.scheduleOnce(function () {
                    _this.speedRate /= 2;
                    _this.moveDir = cc.Vec2.ZERO;
                    _this.udpateRBody(_this.moveDir);
                }, 0.3);
            }
            else if (this.zombieId == 17 && this._spAni.animation.includes("attack")) {
                this.speedRate *= 2;
                this.udpateRBody(this.moveDir);
                this.scheduleOnce(function () {
                    _this.speedRate /= 2;
                    _this.moveDir = cc.Vec2.ZERO;
                    _this.udpateRBody(_this.moveDir);
                }, 0.3);
            }
            else {
                this.moveDir = cc.Vec2.ZERO;
                this.udpateRBody(this.moveDir);
            }
        }
        else if (this._spAni.animation.includes("jump_up")) {
            this.canMoveDir = false;
        }
    };
    ZombieBase.prototype.endListenerCall = function () {
        if (this._spAni.animation.includes("spawn")) {
            this._spAni.setAnimation(0, "idle", true);
            this.canMoveDir = true;
            this.updateMove();
            this.updatePerson();
            this.udpateRBody(this.moveDir);
        }
        else if (this._spAni.animation.includes("attack")) {
            this._spAni.setAnimation(0, "idle", true);
            this.isAtk = false;
            this.canMoveDir = true;
            this.updateMove();
            this.updatePerson();
            this.udpateRBody(this.moveDir);
            this.atkDir = cc.Vec2.ZERO;
        }
        else if (this._spAni.animation.includes("jump_down")) {
            this._spAni.setAnimation(0, "idle", true);
            this.canMoveDir = true;
            this.moveDir = cc.Vec2.ZERO;
            this.udpateRBody(this.moveDir);
        }
    };
    /** 消息 */
    ZombieBase.prototype._onGameMessageHandler = function (event) {
        var _this = this;
        switch (event.type) {
            // 清除所有僵尸
            case Constant_1.default.E_Allzombie_Destory: {
                this.hart(250, null, null, true, true, cc.Color.WHITE, true, true);
                break;
            }
            // boss出现清除普通僵尸
            case Constant_1.default.E_Commonzombie_Destory: {
                if (!this.isBoss) {
                    cc.tween(this.node).to(0.3, { opacity: 1 }, { easing: "fade" }).call(function () { _this.putNodePool(); }).start();
                }
                break;
            }
        }
    };
    ZombieBase.prototype.lateUpdate = function (dt) {
        if (this.isDeath || CocosZ_1.cocosz.isPause || !gameMgr_1.gameMgr.isGameStart || gameMgr_1.gameMgr.isWin || gameMgr_1.gameMgr.isFail) {
            this.udpateRBody(cc.Vec2.ZERO);
            return;
        }
        this._time++;
        if (this._time % 15 == 0) {
            if (this._time % 30 == 0) {
                this.updateDiv();
                this.updateMove();
            }
            this.updateAtk();
            this.updateAni();
            this.updatePerson();
            this.udpateRBody(this.moveDir);
        }
    };
    ZombieBase.prototype.updateDiv = function () {
        var fromPos = this.node.getPosition();
        var toPos = gameMgr_1.gameMgr.playerTs.node.getPosition();
        this._divToPlayer = toPos.subSelf(fromPos);
        // 超出屏幕距离删除
        if (!this.isBoss && !this.isElite && CocosZ_1.cocosz.gameMode == 6 && this._divToPlayer.mag() > cc.winSize.height / 2 / gameMgr_1.gameMgr.mainCamera.zoomRatio) {
            this.putNodePool();
        }
    };
    /** 更新移动 */
    ZombieBase.prototype.updateMove = function () {
        if (this.rig.type == cc.RigidBodyType.Dynamic) {
            if (this.canMove && this.canMoveDir) {
                // 有目标
                if (gameMgr_1.gameMgr.playerTs) {
                    // 玩家存活
                    if (!gameMgr_1.gameMgr.playerTs.isDeath) {
                        // 跳跃
                        if (this.zombieId == 3 && Math.random() < 0.2) {
                            if (!this._spAni.animation.includes("jump")) {
                                this._spAni.setAnimation(0, "jump_up", false);
                                this._spAni.addAnimation(0, "jump_down", false);
                                this.moveDir = this._divToPlayer.normalize();
                            }
                        }
                        // 朝着玩家移动
                        else if (this._divToPlayer.mag() >= this.atkRange * 0.8) {
                            this.moveDir = cc.v2(this._divToPlayer.normalize()).rotateSelf(Math.PI / 2 * (0.5 - Math.random()));
                        }
                        // 距离玩家很近，停止移动 
                        else {
                            this.moveDir = cc.Vec2.ZERO;
                        }
                    }
                    // 玩家死亡
                    else {
                        // 距离很近则远离玩家
                        if (this._divToPlayer.mag() < (this.isBoss ? 800 : 1500)) {
                            this.moveDir = this._divToPlayer.normalize().negSelf();
                        }
                        // 随机移动 
                        else {
                            this.moveDir = cc.v2(this._divToPlayer.normalize()).rotateSelf(2 * Math.PI * Math.random());
                        }
                    }
                }
            }
        }
    };
    /** 更新攻击 */
    ZombieBase.prototype.updateAtk = function () {
        // 能否攻击攻击
        if (!this.canAtk()) {
            // ...
        }
        // 新的攻击
        else if (gameMgr_1.gameMgr.playerTs && !gameMgr_1.gameMgr.playerTs.isDeath) {
            // 普通距离攻击
            if (this._divToPlayer.mag() < this.atkRange) {
                this.atkDir = this._divToPlayer.normalize();
                this.atk();
            }
            // 远距离攻击
            else {
                switch (this.zombieId) {
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 18: {
                        if (this._divToPlayer.mag() < 600 && Math.random() < 0.1 * (this.isBoss ? 2 : 1)) {
                            this.atkDir = this._divToPlayer.normalize();
                            this.moveDir = this._divToPlayer.normalize();
                            this.atk("attack2");
                        }
                        else if (this._divToPlayer.mag() > 800) {
                            this.atkDir = this._divToPlayer.normalize();
                            this.moveDir = this._divToPlayer.normalize();
                            if (this.HP <= this.totleHp / 2) {
                                this.atk("shoot", true);
                            }
                            else {
                                this.atk("shoot");
                            }
                        }
                        break;
                    }
                    case 14:
                    case 16:
                    case 19: {
                        if (this._divToPlayer.mag() < 800 && Math.random() < 0.1 * (this.isBoss ? 2 : 1)) {
                            this.atkDir = this._divToPlayer.normalize();
                            this.moveDir = this._divToPlayer.normalize();
                            this.atk("attack");
                        }
                        break;
                    }
                    case 15: {
                        if (this._divToPlayer.mag() < 800 && Math.random() < 0.1 * (this.isBoss ? 2 : 1)) {
                            this.atkDir = this._divToPlayer.normalize();
                            this.moveDir = this._divToPlayer.normalize();
                            this.atk("attack");
                        }
                        break;
                    }
                    case 16: {
                        if (this._divToPlayer.mag() < 600 && Math.random() < 0.1 * (this.isBoss ? 2 : 1)) {
                            this.atkDir = this._divToPlayer.normalize();
                            this.moveDir = this._divToPlayer.normalize();
                            this.atk("attack");
                        }
                        break;
                    }
                    case 17: {
                        if (this._divToPlayer.mag() < 600 && Math.random() < 0.15 * (this.isBoss ? 2 : 1)) {
                            this.atkDir = this._divToPlayer.normalize();
                            this.moveDir = this._divToPlayer.normalize();
                            this.atk();
                        }
                        else if (this._divToPlayer.mag() > 800) {
                            this.atkDir = this._divToPlayer.normalize();
                            this.moveDir = this._divToPlayer.normalize();
                            if (this.HP <= this.totleHp / 2) {
                                this.atk("shot", true);
                            }
                            else {
                                this.atk("shot");
                            }
                        }
                        break;
                    }
                    case 20: {
                        if (this._divToPlayer.mag() < 600) {
                            if (Math.random() < 0.15 * (this.isBoss ? 2 : 1)) {
                                this.atkDir = this._divToPlayer.normalize();
                                this.moveDir = this._divToPlayer.normalize();
                                this.atk("attack");
                            }
                        }
                        else if (this.sp_hongzhaquan.isValid && !this.sp_hongzhaquan.node.active && this._divToPlayer.mag() > 800) {
                            this.atk("bullet_chui");
                        }
                        break;
                    }
                }
            }
        }
        else {
            this.atkDir = cc.Vec2.ZERO;
        }
    };
    /** 更新动画 */
    ZombieBase.prototype.updateAni = function () {
        if (this.isDeath == false) {
            // 暂停
            if (this._spAni.timeScale == 0) {
                // ...a
            }
            // 出场
            else if (this._spAni.animation.includes("spawn")) { }
            // 攻击
            else if (this._spAni.animation.includes("attack")) { }
            // 跳跃
            else if (this._spAni.animation.includes("jump")) { }
            // 其它
            else {
                // 移动
                if (this.moveDir && this.moveDir.mag()) {
                    if (this.zombieId == 17) {
                        !this._spAni.animation.includes("wing") && this._spAni.setAnimation(0, "wing", true);
                    }
                    else {
                        !this._spAni.animation.includes("run") && this._spAni.setAnimation(0, "run", true);
                    }
                }
                // 待机
                else {
                    !this._spAni.animation.includes("idle") && this._spAni.setAnimation(0, "idle", true);
                }
            }
        }
        // 死亡
        else if (this._spAni && this._spAni.skeletonData && this._spAni.skeletonData.skeletonJson.animations["die"]) {
            !this._spAni.animation.includes("die") && this._spAni.setAnimation(0, "die", false);
        }
    };
    ZombieBase.prototype.updatePerson = function () {
        var dir = null;
        if (this.atkDir && this.atkDir.mag()) {
            dir = this.atkDir;
        }
        else if (this.moveDir && this.moveDir.mag()) {
            dir = this.moveDir;
        }
        // 动画方向
        if (dir) {
            this._spAni.node.scaleX = Math.abs(this._spAni.node.scaleX) * (dir.x > 0 ? 1 : -1);
        }
    };
    /** 刚体移动 */
    ZombieBase.prototype.udpateRBody = function (dir, isMust) {
        if (isMust === void 0) { isMust = false; }
        if (this.rig.type == cc.RigidBodyType.Dynamic) {
            if (this.canMove || isMust) {
                if (dir && !dir.equals(cc.Vec2.ZERO)) {
                    this.rig.linearVelocity = dir.mul(Math.floor(this.MoveSpeed * this.speedRate * (1 - 0.2 * Math.random())));
                }
                else {
                    this.rig.linearVelocity = cc.Vec2.ZERO;
                }
            }
        }
    };
    /** 攻击 */
    ZombieBase.prototype.atk = function (aniName, isRage) {
        var _this = this;
        if (aniName === void 0) { aniName = ""; }
        if (isRage === void 0) { isRage = false; }
        var atkType = AtkType.front;
        var atkRange = this.atkRange;
        var atkTime = 0;
        var bulletTime = 2;
        var clip = this.audio_attack1;
        var bulletFlySpeed = 0;
        var bulletNum = 0;
        var timeNum = 1;
        var self = this;
        var shootSetFunc = function () {
            aniName = "attack";
            atkType = AtkType.shoot;
            bulletFlySpeed = 1200;
            if (isRage) {
                timeNum = 3;
                bulletNum = ((self.zombieId - 7) / 2) + 1;
            }
            else {
                timeNum = 1;
                bulletNum = ((self.zombieId - 7) / 2) + 1;
            }
            self._canAtk = false;
            atkTime = 3;
        };
        switch (this.zombieId) {
            case 0:
            case 1: {
                if (Math.random() < 0.5) {
                    aniName = "attack";
                }
                else {
                    aniName = "attack2";
                    clip = this.audio_attack2;
                }
                atkTime = 0.3;
                break;
            }
            case 2:
            case 3: {
                aniName = "attack1";
                atkTime = 0.3;
                break;
            }
            case 4: {
                aniName = "attack";
                atkTime = 0.3;
                break;
            }
            case 5: {
                aniName = "attack";
                atkTime = 4;
                atkType = AtkType.range;
                bulletTime = 1.3;
                this._canAtk = false;
                break;
            }
            case 6: {
                aniName = "attack";
                atkTime = 4;
                atkType = AtkType.range;
                bulletTime = 0.95;
                this._canAtk = false;
                break;
            }
            case 7: {
                break;
            }
            case 8:
            case 18: {
                if (aniName == "attack2") {
                    aniName = "attack2";
                    atkRange = 300;
                    atkTime = 0.3;
                    atkType = AtkType.area;
                    clip = this.audio_attack2;
                }
                else if (aniName == 'shoot') {
                    shootSetFunc();
                }
                else {
                    aniName = "attack";
                    atkRange = 350;
                    atkTime = 0.3;
                }
                break;
            }
            case 9: {
                if (aniName == "attack2") {
                    aniName = "attack2";
                    atkRange = 450;
                    atkTime = 0.3;
                    clip = this.audio_attack2;
                }
                else if (aniName == 'shoot') {
                    shootSetFunc();
                }
                else {
                    aniName = "attack";
                    atkRange = 350;
                    atkTime = 0.3;
                }
                break;
            }
            case 10: {
                if (aniName == "attack2") {
                    aniName = "attack2";
                    atkRange = 200;
                    atkTime = 0.3;
                    clip = this.audio_attack2;
                }
                else if (aniName == 'shoot') {
                    shootSetFunc();
                }
                else {
                    aniName = "attack";
                    atkRange = 200;
                    atkTime = 0.3;
                }
                break;
            }
            case 11:
            case 12:
            case 13: {
                if (aniName == "attack2") {
                    aniName = "attack2";
                    atkRange = 250;
                    atkTime = 0.3;
                    clip = this.audio_attack2;
                }
                else if (aniName == 'shoot') {
                    shootSetFunc();
                }
                else {
                    aniName = "attack";
                    atkRange = 250;
                    atkTime = 0.3;
                }
                break;
            }
            case 14:
            case 19: {
                if (Math.random() < 0.6) { //冲盾
                    aniName = "attack";
                    atkRange = 350;
                    atkTime = 0.3;
                    atkType = AtkType.charge;
                    clip = this.audio_attack1;
                }
                else {
                    aniName = "attack2"; //挥棍
                    atkRange = 350;
                    atkTime = 0.3;
                    clip = this.audio_attack2;
                }
                break;
            }
            case 15: {
                if (aniName == "attack") { //冲锋
                    aniName = "attack";
                    atkRange = 250;
                    atkTime = 0.3;
                    atkType = AtkType.charge;
                }
                else {
                    aniName = "attack2"; //喷火
                    atkRange = 400;
                    atkTime = 0.3;
                }
                break;
            }
            case 16: {
                if (aniName == "attack" || Math.random() < 0.4) {
                    aniName = "attack";
                    atkRange = 450;
                    atkTime = 0.3;
                    atkType = AtkType.area;
                }
                else {
                    aniName = "attack2";
                    atkRange = 300;
                    atkTime = 0.3;
                }
                break;
            }
            case 17: {
                if (aniName == 'shot') {
                    aniName = "wing2";
                    atkType = AtkType.shot;
                    bulletFlySpeed = 700;
                    if (isRage) {
                        timeNum = 3;
                        bulletNum = 15;
                    }
                    else {
                        timeNum = 1;
                        bulletNum = 10;
                    }
                    this._canAtk = false;
                    atkTime = 3;
                }
                else {
                    if (Math.random() < 0.5) {
                        aniName = "attack";
                        atkRange = 200;
                        atkTime = 0.3;
                    }
                    else {
                        aniName = "attack2";
                        atkRange = 200;
                        atkTime = 0.3;
                        atkType = AtkType.charge;
                    }
                }
                break;
            }
            case 20: {
                if (aniName == "bullet_chui") {
                    atkType = AtkType.range;
                    aniName = "attack2";
                    bulletTime = 1.5;
                }
                else if (aniName == "attack") {
                    aniName = "attack";
                    atkRange = 500;
                    atkTime = 0.3;
                }
                else {
                    aniName = "attack2";
                    atkRange = 300;
                    atkTime = 0.3;
                }
                break;
            }
        }
        // 执行动画
        if (aniName)
            this._spAni.setAnimation(0, aniName, false);
        if (clip && clip.isValid)
            gameMgr_1.gameMgr.playClip(clip, this.node, 0.5);
        // 攻击伤害
        var call = function () {
            if (gameMgr_1.gameMgr.playerTs && !gameMgr_1.gameMgr.playerTs.isDeath) {
                var fromPos = _this.node.getPosition();
                var toPos = gameMgr_1.gameMgr.playerTs.node.getPosition();
                var div = toPos.subSelf(fromPos);
                // 判断是否在攻击范围和攻击方向
                if (div.mag() < atkRange) {
                    if (atkType == AtkType.front) {
                        if (div.mag() < 200 || (div.x * _this._spAni.node.scale > 0 && Math.abs(div.y / div.x) < 1.4)) {
                            gameMgr_1.gameMgr.playerTs.hart(1, _this.node, div.normalizeSelf(), true);
                        }
                    }
                    else if (atkType === AtkType.charge) {
                        gameMgr_1.gameMgr.playerTs.hart(1, _this.node, div.normalizeSelf(), true);
                        _this.unschedule(call);
                    }
                    else {
                        gameMgr_1.gameMgr.playerTs.hart(1, _this.node, div.normalizeSelf(), true);
                    }
                }
            }
            ;
        };
        if (atkType == AtkType.front || atkType == AtkType.area) {
            this.scheduleOnce(call, atkTime);
        }
        else if (atkType == AtkType.charge) {
            this.schedule(call, 0, 15);
        }
        else if (atkType == AtkType.range) {
            var pos_from = this.node.getPosition();
            var pos_to_1 = gameMgr_1.gameMgr.playerTs.node.getPosition();
            var p2 = cc.v2((pos_from.x + pos_to_1.x) / 2, pos_from.y + 1500);
            // 生成子弹
            if (this.bullet_prefab) {
                var bullet_2 = cc.instantiate(this.bullet_prefab);
                // 子弹脚本
                var ts_1 = bullet_2.getComponent(bullet_1.default);
                ts_1.id = this.id;
                ts_1.atker = this.node;
                ts_1.atk = this.atkNum;
                ts_1.isAngle = true;
                // 子弹属性
                bullet_2.setPosition(pos_from);
                bullet_2.zIndex = Constant_1.ZindexLayer.zindex_bullet_sky;
                bullet_2.parent = this.node.parent;
                // 子弹移动
                cc.tween(bullet_2)
                    .call(function () {
                    // 轰炸预警
                    if (_this.sp_hongzhaquan && _this.sp_hongzhaquan.isValid) {
                        _this.sp_hongzhaquan.node.active = true;
                        _this.sp_hongzhaquan.node.setPosition(pos_to_1);
                        _this.sp_hongzhaquan.setAnimation(0, "animation", false);
                    }
                })
                    .bezierTo(bulletTime, pos_from, p2, pos_to_1)
                    .call(function () {
                    // 生成爆炸子弹
                    if (ts_1.boomEffect) {
                        var boom = cc.instantiate(ts_1.boomEffect);
                        boom.parent = ts_1.node.parent;
                        boom.setPosition(ts_1.node.getPosition());
                        var curBullet = boom.getComponent(bullet_1.default);
                        curBullet.atk = ts_1.atk;
                        curBullet.atker = ts_1.atker;
                        curBullet.id = ts_1.id;
                        gameMgr_1.gameMgr.playEffect("explo", boom);
                        if (ts_1.hitEffect) {
                            var pos = bullet_2.getPosition();
                            var node = cc.instantiate(ts_1.hitEffect);
                            node.parent = bullet_2.parent;
                            node.setPosition(pos);
                            node.zIndex = Constant_1.ZindexLayer.zindex_effect_hit;
                        }
                    }
                    bullet_2.destroy();
                })
                    .start();
                this.scheduleOnce(function () { _this._canAtk = true; }, atkTime);
            }
        }
        else if (atkType == AtkType.shot) {
            // console.log('进入散弹射击模式!!!!');
            if (this.bullet_prefab) {
                var times_1 = 0;
                var createFunc_1 = function () {
                    times_1++;
                    if (times_1 >= 10) {
                        // console.log('暂停计时器');
                        self.unschedule(createFunc_1);
                        self._canAtk = true;
                    }
                    else if (times_1 <= timeNum) {
                        self.createShotBullet(bulletNum, bulletFlySpeed, times_1 * 15);
                    }
                };
                this.schedule(createFunc_1, 0.3, 10, 0);
            }
        }
        else if (atkType == AtkType.shoot) {
            // console.log('进入单发射击模式!!!!');
            if (this.bullet_prefab) {
                var fromPos = this.node.getPosition();
                var toPos = gameMgr_1.gameMgr.playerTs.node.getPosition();
                var dir_1 = cc.v2(toPos.sub(fromPos).normalize());
                var times_2 = 0;
                var createShootFunc_1 = function () {
                    times_2++;
                    if (times_2 >= 10) {
                        // console.log('暂停计时器');
                        self.unschedule(createShootFunc_1);
                        self._canAtk = true;
                    }
                    else if (times_2 <= timeNum) {
                        if (bulletNum > 1) {
                            for (var i = 0; i < bulletNum; i++) {
                                var dirNum = Math.pow((times_2 - 2), 2) + (parseInt(((times_2 - 1) / 2).toString()) - 1);
                                var angle = ((bulletNum - 1) / 2 - i) * 15 + dirNum * 30;
                                var new_dir = dir_1.rotate(cc.misc.degreesToRadians(angle));
                                self.createBullet(new_dir, bulletFlySpeed);
                            }
                        }
                        else {
                            self.createBullet(dir_1, bulletFlySpeed);
                        }
                    }
                };
                this.schedule(createShootFunc_1, 0.3, 10, 0);
            }
        }
    };
    ZombieBase.prototype.createBullet = function (dir, bulletFlySpeed) {
        var bullet = cc.instantiate(this.bullet_prefab);
        var ts = bullet.getComponent(bullet_1.default);
        ts.id = this.id;
        ts.atker = this.node;
        ts.atk = 1;
        var strikNode = bullet.getChildByName('New Node');
        strikNode.width = 150;
        bullet.parent = gameMgr_1.gameMgr.map;
        var fromPos = gameMgr_1.gameMgr.map.convertToNodeSpaceAR(this.node.getChildByName("boos").convertToWorldSpaceAR(cc.Vec2.ZERO));
        // // 子弹属性
        bullet.setPosition(fromPos);
        bullet.zIndex = Constant_1.ZindexLayer.zindex_bullet_sky;
        bullet.angle = -cc.v2(dir).signAngle(cc.v2(1, 0)) / Math.PI * 180;
        var pos1 = bullet.getPosition();
        var pos2 = pos1.add(dir.mul(2000));
        cc.tween(bullet)
            .to(pos2.sub(pos1).mag() / bulletFlySpeed, { position: cc.v3(pos2) })
            .call(function () {
            bullet.destroy();
        })
            .start();
    };
    ZombieBase.prototype.createShotBullet = function (bulletNum, bulletFlySpeed, offset) {
        var _loop_1 = function (i) {
            var angle = (360 / bulletNum) * i + offset;
            var dir = cc.v2(1, 0).rotate(cc.misc.degreesToRadians(angle));
            var bullet = cc.instantiate(this_1.bullet_prefab);
            var ts = bullet.getComponent(bullet_1.default);
            ts.id = this_1.id;
            ts.atker = this_1.node;
            ts.atk = 1;
            var strikNode = bullet.getChildByName('New Node');
            strikNode.width = 150;
            bullet.parent = gameMgr_1.gameMgr.map;
            var fromPos = gameMgr_1.gameMgr.map.convertToNodeSpaceAR(this_1.node.getChildByName("boos").convertToWorldSpaceAR(cc.Vec2.ZERO));
            // 子弹属性
            bullet.setPosition(fromPos);
            bullet.zIndex = Constant_1.ZindexLayer.zindex_bullet_sky;
            var pos1 = bullet.getPosition();
            var pos2 = pos1.add(dir.mul(2000));
            bullet.angle = angle;
            cc.tween(bullet)
                .to(pos2.sub(pos1).mag() / bulletFlySpeed, { position: cc.v3(pos2) })
                .call(function () {
                bullet.destroy();
            })
                .start();
        };
        var this_1 = this;
        for (var i = 1; i <= bulletNum; i++) {
            _loop_1(i);
        }
    };
    /** 受伤 */
    ZombieBase.prototype.hart = function (atkNum, from, dir, isAudio, isEmit, labelColor, isMust, isBoom) {
        var _this = this;
        if (isAudio === void 0) { isAudio = true; }
        if (isEmit === void 0) { isEmit = true; }
        if (isMust === void 0) { isMust = false; }
        if (isBoom === void 0) { isBoom = false; }
        if (this.isDeath)
            return;
        if (isMust == false && CocosZ_1.cocosz.isPause)
            return;
        // 防止dir过大
        if (dir && dir.mag() > 3)
            dir.normalizeSelf().mulSelf(3);
        // 减伤
        atkNum = (1 - this.damageReduction) * atkNum;
        // 数字
        gameMgr_1.gameMgr.showRoleTip(this.node, Math.min(this.HP, atkNum).toFixed(0), labelColor);
        // 设置血量
        this.HP -= atkNum;
        if (this.isBoss) {
            gameMgr_1.gameMgr && gameMgr_1.gameMgr.showBossHp(this.HP / this.totleHp);
        }
        // 受伤效果
        if (!this.isAttackedEffect && this._spAni && this._spAni.node && this._spAni.node.isValid) {
            this.isAttackedEffect = true;
            // 受伤音效
            if (isAudio) {
                // 受伤音效
                if (this.audio_hart) {
                    gameMgr_1.gameMgr.playClip(this.audio_hart, this.node, 0.5);
                }
            }
            // 缩放
            cc.tween(this._aniLayer)
                .to(0.1, { scale: 0.7 }, { easing: "sineIn" })
                .to(0.1, { scale: 1 }, { easing: "sineOut" })
                .call(function () { _this.isAttackedEffect = false; })
                .start();
            // 变色
            if (this._canColor) {
                cc.tween(this._spAni.node)
                    .to(0.1, { color: new cc.Color(0, 0, 0, 255) })
                    .to(0.1, { color: cc.Color.WHITE })
                    .start();
            }
            // 后退
            if (this.rig.type == cc.RigidBodyType.Dynamic && dir && this.canMove && this.canMoveDir) {
                // 控制
                this.canMove = false;
                this.scheduleOnce(function () { _this.canMove = true; }, 0.1);
                // 后退
                var div = dir.mulSelf(400 * dir.mag()).addSelf(this.rig.linearVelocity);
                var maxDiv = this.isBoss ? 100 : 300;
                if (div.mag() > maxDiv) {
                    div.normalizeSelf().mulSelf(maxDiv);
                }
                this.rig.linearVelocity = div;
            }
        }
        if (this.HP <= 0) {
            this.death();
            // 死亡事件
            cc.game.emit(Constant_1.default.E_GAME_LOGIC, { type: Constant_1.default.E_Zombie_Death, node: this.node, from: from, isBoom: isBoom });
        }
        else {
            // 受伤事件
            if (from && isEmit) {
                cc.game.emit(Constant_1.default.E_GAME_LOGIC, { type: Constant_1.default.E_Zombie_Hart, node: this.node });
            }
        }
    };
    /** 死亡 */
    ZombieBase.prototype.death = function () {
        var _this = this;
        if (this.isBoss && gameMgr_1.gameMgr.bossArr.length == 0 && gameMgr_1.gameMgr.Rein < 2 && CocosZ_1.cocosz.gameMode == 6) {
            console.log('--------boss创建完了并且击毙--------巡回变成2');
            gameMgr_1.gameMgr.Rein = 2;
            gameMgr_1.gameMgr.boss2Arr = [];
        }
        this.isAtk = false;
        this.isDeath = true;
        this._spAni.timeScale = 1;
        // 碰撞体
        this.node.getComponents(cc.Collider).forEach(function (v) { return v.enabled = false; });
        // 隐藏销毁
        cc.tween(this._spAni.node).to(0.6, { opacity: 0 }).start();
        // 死亡音效
        if (this.audio_die)
            gameMgr_1.gameMgr.playClip(this.audio_die, null, 0.2);
        // 死亡效果
        this.updateAni();
        if (this.zombieId < 8) {
            var pre = CocosZ_1.cocosz.resMgr.getRes("effect_death", cc.Prefab);
            if (pre) {
                var effect_death = cc.instantiate(pre);
                effect_death.zIndex = Constant_1.ZindexLayer.zinedx_floorSkill;
                effect_death.setPosition(this.node.position);
                effect_death.setParent(this.node.parent);
            }
        }
        // 死亡掉落道具
        this.creatItem();
        this.scheduleOnce(function () { _this.putNodePool(); }, 2);
    };
    ZombieBase.prototype.creatItem = function () {
        if (gameMgr_1.gameMgr.isWin || gameMgr_1.gameMgr.isFail)
            return;
        if (UpgradeMgr_1.upgradeMgr && UpgradeMgr_1.upgradeMgr.isValid) {
            var count = (this.zombieId < 8 ? 1 : 10);
            for (var i = 0; i < count; i++) {
                var pos = this.node.getPosition();
                if (i > 0) {
                    pos.addSelf(cc.v2(20 * i, 0).rotateSelf(2 * Math.PI * Math.random()));
                }
                UpgradeMgr_1.upgradeMgr.createJingyan(pos);
            }
            if (CocosZ_1.cocosz.gameMode == 6) {
                var randNum = Math.random();
                if (randNum < 0.2) {
                    var wppos = this.node.getPosition();
                    wppos.x = wppos.x + (parseInt((Math.random() * 2).toString()) - 1) * 200;
                    wppos.y = wppos.y + (parseInt((Math.random() * 2).toString()) - 1) * 300;
                    UpgradeMgr_1.upgradeMgr.createWeapon(this.node.getPosition());
                }
            }
        }
    };
    ZombieBase.prototype.frozenStart = function () {
        this._canColor = false;
        // 停止受伤变色
        this._spAni.node.stopAllActions();
        // 启动变色
        this._spAni.node.color = cc.Color.BLUE;
        if (this._spAni) {
            this._spAni.timeScale = 0;
        }
        // 移动暂停
        this.isAtk = false;
        this.canMoveDir = false;
        this.moveDir = cc.Vec2.ZERO;
        this.udpateRBody(this.moveDir, true);
    };
    ZombieBase.prototype.frozenEnd = function () {
        if (!this.isDeath) {
            this._canColor = true;
            // 恢复颜色
            this._spAni.node.color = cc.Color.WHITE;
            if (this._spAni) {
                this._spAni.timeScale = 1;
                this._spAni.setAnimation(0, "idle", true);
            }
            // 移动恢复
            this.canMoveDir = true;
            this.isAtk = false;
            this.atkDir = cc.Vec2.ZERO;
            this.updateMove();
            this.updatePerson();
            this.udpateRBody(this.moveDir);
        }
    };
    ZombieBase.prototype.fire_start = function () {
        this._canColor = false;
        // 停止受伤变色
        this._spAni.node.stopAllActions();
        // 启动变色
        this._spAni.node.color = cc.Color.RED;
    };
    ZombieBase.prototype.fire_end = function () {
        this._canColor = true;
        // 恢复颜色
        this._spAni.node.color = cc.Color.WHITE;
    };
    ZombieBase.prototype.canAtk = function () {
        if (!this._canAtk || this.isAtk || this._spAni.timeScale == 0 || this._spAni.animation.includes("spawn") || this._spAni.animation.includes("jump")) {
            return false;
        }
        return true;
    };
    __decorate([
        property({ tooltip: "僵尸id" })
    ], ZombieBase.prototype, "zombieId", void 0);
    __decorate([
        property({ type: cc.Prefab, tooltip: "子弹预制体", visible: function () { return [5, 6, 8, 9, 10, 11, 12, 13, 17, 18, 20].includes(this.zombieId); } })
    ], ZombieBase.prototype, "bullet_prefab", void 0);
    __decorate([
        property({ type: sp.Skeleton, tooltip: "警告圈", visible: function () { return [5, 6, 20].includes(this.zombieId); } })
    ], ZombieBase.prototype, "sp_hongzhaquan", void 0);
    __decorate([
        property({ type: cc.AudioClip, tooltip: "攻击音效1" })
    ], ZombieBase.prototype, "audio_attack1", void 0);
    __decorate([
        property({ type: cc.AudioClip, tooltip: "攻击音效2" })
    ], ZombieBase.prototype, "audio_attack2", void 0);
    __decorate([
        property({ type: cc.AudioClip, tooltip: "受伤音效" })
    ], ZombieBase.prototype, "audio_hart", void 0);
    __decorate([
        property({ type: cc.AudioClip, tooltip: "死亡音效" })
    ], ZombieBase.prototype, "audio_die", void 0);
    ZombieBase = __decorate([
        ccclass
    ], ZombieBase);
    return ZombieBase;
}(person_1.default));
exports.default = ZombieBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZVxcWm9tYmllQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBOEQ7QUFDOUQsOENBQTZDO0FBQzdDLGtEQUE4RDtBQUM5RCw2Q0FBd0M7QUFDeEMsMkNBQTBDO0FBQzFDLHlDQUFvQztBQUNwQyxpREFBZ0Q7QUFDaEQsbUNBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQUssT0FRSjtBQVJELFdBQUssT0FBTztJQUNSLHVDQUFTLENBQUE7SUFDVCxxQ0FBSSxDQUFBO0lBQ0oseUNBQU0sQ0FBQTtJQUNOLHVDQUFLLENBQUE7SUFDTCxxQ0FBSSxDQUFBO0lBQ0osdUNBQUssQ0FBQTtJQUNMLHlDQUFNLENBQUE7QUFDVixDQUFDLEVBUkksT0FBTyxLQUFQLE9BQU8sUUFRWDtBQUdEO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBdWxDQztRQXJsQ0csY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixtQkFBYSxHQUFjLElBQUksQ0FBQztRQUVoQyxvQkFBYyxHQUFnQixJQUFJLENBQUM7UUFHbkMsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBRW5DLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixhQUFPLEdBQWEsS0FBSyxDQUFDO1FBRTFCLG1CQUFhLEdBQVksQ0FBQyxDQUFDO1FBRTNCLGFBQU8sR0FBWSxDQUFDLENBQUM7UUFFWCxlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLFlBQU0sR0FBZ0IsSUFBSSxDQUFDO1FBb1A3QixrQkFBWSxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFB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LFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztpREFDbkI7SUFoQmQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXVsQzlCO0lBQUQsaUJBQUM7Q0F2bENELEFBdWxDQyxDQXZsQ3VDLGdCQUFNLEdBdWxDN0M7a0JBdmxDb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF0VXRpbHMgZnJvbSBcIi4uLy4uL2NvbW1vbi1wbHVnaW4vU2NyaXB0cy9QbGF0VXRpbHNcIjtcclxuaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IENvbnN0YW50LCB7IFppbmRleExheWVyIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5pbXBvcnQgR2FtZURhdGUgZnJvbSBcIi4uL0dhbWUvZ2FtZURhdGVcIjtcclxuaW1wb3J0IHsgZ2FtZU1nciB9IGZyb20gXCIuLi9HYW1lL2dhbWVNZ3JcIjtcclxuaW1wb3J0IFBlcnNvbiBmcm9tIFwiLi4vR2FtZS9wZXJzb25cIjtcclxuaW1wb3J0IHsgdXBncmFkZU1nciB9IGZyb20gXCIuLi9HYW1lL1VwZ3JhZGVNZ3JcIjtcclxuaW1wb3J0IEJ1bGxldCBmcm9tIFwiLi9idWxsZXRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5lbnVtIEF0a1R5cGUge1xyXG4gICAgZnJvbnQgPSAwLC8vIOWJjeaWuVxyXG4gICAgYXJlYSwvLyDljLrln59cclxuICAgIGNoYXJnZSwvLyDlhrLplItcclxuICAgIHJhbmdlLC8vIOi/nOeoi1xyXG4gICAgc2hvdCwgLy/mlaPlvLlcclxuICAgIHNob290LCAvL+WNleWPkeWtkOW8uVxyXG4gICAgc2VjdG9yLCAvL+aJh+W9ouWtkOW8uVxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab21iaWVCYXNlIGV4dGVuZHMgUGVyc29uIHtcclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwi5YO15bC4aWRcIiB9KVxyXG4gICAgem9tYmllSWQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuUHJlZmFiLCB0b29sdGlwOiBcIuWtkOW8uemihOWItuS9k1wiLCB2aXNpYmxlKCkgeyByZXR1cm4gWzUsIDYsIDgsOSwxMCwxMSwxMiwxMywxNywxOCwgMjBdLmluY2x1ZGVzKHRoaXMuem9tYmllSWQpIH0gfSlcclxuICAgIGJ1bGxldF9wcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBzcC5Ta2VsZXRvbiwgdG9vbHRpcDogXCLorablkYrlnIhcIiwgdmlzaWJsZSgpIHsgcmV0dXJuIFs1LCA2LCAyMF0uaW5jbHVkZXModGhpcy56b21iaWVJZCkgfSB9KVxyXG4gICAgc3BfaG9uZ3poYXF1YW46IHNwLlNrZWxldG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAsIHRvb2x0aXA6IFwi5pS75Ye76Z+z5pWIMVwiIH0pXHJcbiAgICBhdWRpb19hdHRhY2sxOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwLCB0b29sdGlwOiBcIuaUu+WHu+mfs+aViDJcIiB9KVxyXG4gICAgYXVkaW9fYXR0YWNrMjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCwgdG9vbHRpcDogXCLlj5fkvKTpn7PmlYhcIiB9KVxyXG4gICAgYXVkaW9faGFydDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCwgdG9vbHRpcDogXCLmrbvkuqHpn7PmlYhcIiB9KVxyXG4gICAgYXVkaW9fZGllOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIGlzQm9zczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGlzRWxpdGUgOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY3JlYXRlU2hvdE51bSA6IG51bWJlciA9IDM7XHJcblxyXG4gICAgcmVpbk51bSA6IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9hbmlMYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgX3NwQW5pOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlkID0gOTQ7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW6YWN572u6KGo5bGe5oCnXHJcbiAgICAgICAgaWYgKEdhbWVEYXRlLlpvbWJpZU1lc3NbdGhpcy56b21iaWVJZF0pIHtcclxuICAgICAgICAgICAgdGhpcy50b3RsZUhwID0gR2FtZURhdGUuWm9tYmllTWVzc1t0aGlzLnpvbWJpZUlkXS5ocDtcclxuICAgICAgICAgICAgdGhpcy5hdGtOdW0gPSBHYW1lRGF0ZS5ab21iaWVNZXNzW3RoaXMuem9tYmllSWRdLmF0aztcclxuICAgICAgICAgICAgdGhpcy5hdGtSYW5nZSA9IEdhbWVEYXRlLlpvbWJpZU1lc3NbdGhpcy56b21iaWVJZF0uYXRrUmFuZ2U7XHJcbiAgICAgICAgICAgIHRoaXMuTW92ZVNwZWVkID0gR2FtZURhdGUuWm9tYmllTWVzc1t0aGlzLnpvbWJpZUlkXS5zcGVlZDtcclxuICAgICAgICAgICAgaWYgKFBsYXRVdGlscy5Jc09QUE8pIHsgdGhpcy5Nb3ZlU3BlZWQgLz0gMjsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlpKflsI/nvKnmlL5cclxuICAgICAgICBpZiAodGhpcy5pc0Jvc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAwLjg7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNFbGl0ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGxlSHAgPSB0aGlzLm5vZGUuc2NhbGUgKiB0aGlzLnRvdGxlSHA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Yia5L2TXHJcbiAgICAgICAgdGhpcy5yaWcgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgaWYgKHRoaXMucmlnKSB7IHRoaXMucmlnLmxpbmVhckRhbXBpbmcgPSAwLjI7IH1cclxuICAgICAgICAvLyBzcGluZeWKqOeUu1xyXG4gICAgICAgIHRoaXMuX2FuaUxheWVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYW5pTGF5ZXJcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FuaUxheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NwQW5pID0gdGhpcy5fYW5pTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhbmlcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g55uR5ZCs5Yqo55S7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NwQW5pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NwQW5pLnNldFN0YXJ0TGlzdGVuZXIoKCkgPT4geyB0aGlzLnN0YXJ0TGlzdGVuZXJDYWxsKCkgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NwQW5pLnNldENvbXBsZXRlTGlzdGVuZXIoKCkgPT4geyB0aGlzLmVuZExpc3RlbmVyQ2FsbCgpIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIOWPlua2iOebkeWQrFxyXG4gICAgICAgIGNjLmdhbWUudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHsgfVxyXG5cclxuICAgIGluaXROb2RlKCkge1xyXG4gICAgICAgIGdhbWVNZ3IgJiYgZ2FtZU1nci5zZXRNYXBUcy5jaGVja05vZGUodGhpcy5ub2RlLCB0cnVlKTtcclxuICAgICAgICAvLyDmtojmga/nm5HlkKxcclxuICAgICAgICBjYy5nYW1lLm9uKENvbnN0YW50LkVfR0FNRV9MT0dJQywgdGhpcy5fb25HYW1lTWVzc2FnZUhhbmRsZXIsIHRoaXMpO1xyXG4gICAgICAgIGdhbWVNZ3Iuem9tYmllQ3VyTnVtKys7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IFppbmRleExheWVyLnppbmRleF96b21iaWUgKyB0aGlzLnpvbWJpZUlkO1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMuYXRrRGlyID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgIHRoaXMuY3VySHAgPSB0aGlzLnRvdGxlSHA7XHJcbiAgICAgICAgdGhpcy5pc0RlYXRoID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0F0ayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2NhbkF0ayA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jYW5Nb3ZlRGlyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhbk1vdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyDmkq3mlL7lh7rlnLrliqjnlLtcclxuICAgICAgICBpZiAodGhpcy5fc3BBbmkgJiYgdGhpcy5fc3BBbmkuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zcEFuaS5ub2RlLnNjYWxlWCA9IE1hdGguYWJzKHRoaXMuX3NwQW5pLm5vZGUuc2NhbGVYKTtcclxuICAgICAgICAgICAgdGhpcy5fc3BBbmkubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLl9zcEFuaS5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQm9zcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3BBbmkuc2V0QW5pbWF0aW9uKDAsIFwic3Bhd25cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOeisOaSnuS9k1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib3hDb2xsaWRlciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChib3hDb2xsaWRlcikgYm94Q29sbGlkZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9LCAyKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3BBbmkuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vIOeisOaSnuS9k1xyXG4gICAgICAgICAgICAgICAgbGV0IGJveENvbGxpZGVyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm94Q29sbGlkZXIpIGJveENvbGxpZGVyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOi9sOeCuOWciFxyXG4gICAgICAgIGlmICh0aGlzLnNwX2hvbmd6aGFxdWFuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BfaG9uZ3poYXF1YW4ubm9kZS5zZXRQYXJlbnQodGhpcy5ub2RlLnBhcmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3BfaG9uZ3poYXF1YW4ubm9kZS56SW5kZXggPSBaaW5kZXhMYXllci56aW5lZHhfZmxvb3JUaXA7XHJcbiAgICAgICAgICAgIHRoaXMuc3BfaG9uZ3poYXF1YW4uc2V0Q29tcGxldGVMaXN0ZW5lcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zcF9ob25nemhhcXVhbiAmJiB0aGlzLnNwX2hvbmd6aGFxdWFuLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwX2hvbmd6aGFxdWFuLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGJvc3NcclxuICAgICAgICBpZiAodGhpcy5pc0Jvc3MpIHtcclxuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfR0FNRV9MT0dJQywgeyB0eXBlOiBDb25zdGFudC5FX0NvbW1vbnpvbWJpZV9EZXN0b3J5IH0pO1xyXG4gICAgICAgICAgICBnYW1lTWdyICYmIGdhbWVNZ3Iuc2hvd0Jvc3NIcCgxKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJvb3NcIikpIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJvb3NcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGNvY29zei5nYW1lTW9kZSA9PSA2KXtcclxuICAgICAgICAgICAgdGhpcy50b3RsZUhwID0gdGhpcy5yZWluTnVtICogMC4yICogR2FtZURhdGUuWm9tYmllTWVzc1t0aGlzLnpvbWJpZUlkXS5ocCArIEdhbWVEYXRlLlpvbWJpZU1lc3NbdGhpcy56b21iaWVJZF0uaHA7XHJcbiAgICAgICAgICAgIHRoaXMuYXRrUmFuZ2UgPSB0aGlzLnJlaW5OdW0gKiAwLjAyICogR2FtZURhdGUuWm9tYmllTWVzc1t0aGlzLnpvbWJpZUlkXS5hdGtSYW5nZSArIEdhbWVEYXRlLlpvbWJpZU1lc3NbdGhpcy56b21iaWVJZF0uYXRrUmFuZ2U7XHJcbiAgICAgICAgICAgIHRoaXMuTW92ZVNwZWVkID0gdGhpcy5yZWluTnVtICogMC4wOCAqIEdhbWVEYXRlLlpvbWJpZU1lc3NbdGhpcy56b21iaWVJZF0uc3BlZWQgKyBHYW1lRGF0ZS5ab21iaWVNZXNzW3RoaXMuem9tYmllSWRdLnNwZWVkO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHV0Tm9kZVBvb2wgKCkge1xyXG4gICAgICAgIC8vIOWPlua2iOebkeWQrFxyXG4gICAgICAgIGNjLmdhbWUudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIC8vIGJvc3NcclxuICAgICAgICBpZiAodGhpcy5pc0Jvc3MpIHtcclxuICAgICAgICAgICAgLy8gYm9zc+WFieW9sVxyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm9vc1wiKSkgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm9vc1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gYm9zc+i+ueeVjFxyXG4gICAgICAgICAgICBpZiAoZ2FtZU1ncikge1xyXG4gICAgICAgICAgICAgICAgZ2FtZU1nciAmJiBnYW1lTWdyLnNob3dCb3NzSHAoMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZU1nci5ib3NzX2JvcmRlciAmJiBjYy5pc1ZhbGlkKGdhbWVNZ3IuYm9zc19ib3JkZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1nci5ib3NzX2JvcmRlci5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1nci5ib3NzX2JvcmRlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc0Jvc3MgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6L2w54K45ZyIXHJcbiAgICAgICAgaWYgKHRoaXMuc3BfaG9uZ3poYXF1YW4gJiYgdGhpcy5zcF9ob25nemhhcXVhbi5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BfaG9uZ3poYXF1YW4ubm9kZS5zZXRQYXJlbnQodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5zcF9ob25nemhhcXVhbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnYW1lTWdyLnpvbWJpZUN1ck51bS0tO1xyXG4gICAgICAgIGdhbWVNZ3IgJiYgZ2FtZU1nci5pc1ZhbGlkICYmIGdhbWVNZ3Iubm9kZVB1dCh0aGlzLm5vZGUubmFtZSwgdGhpcy5ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydExpc3RlbmVyQ2FsbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3BBbmkuYW5pbWF0aW9uLmluY2x1ZGVzKFwic3Bhd25cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3BBbmkudGltZVNjYWxlID0gMC40O1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuX3NwQW5pLnRpbWVTY2FsZSA9IDE7IH0sIDEpXHJcbiAgICAgICAgICAgIHRoaXMuY2FuTW92ZURpciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyDlh7rlnLrmlrnlkJFcclxuICAgICAgICAgICAgbGV0IGZyb21Qb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgbGV0IHRvUG9zID0gZ2FtZU1nci5wbGF5ZXJUcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIGxldCBkaXYgPSB0b1Bvcy5zdWJTZWxmKGZyb21Qb3MpO1xyXG4gICAgICAgICAgICB0aGlzLl9zcEFuaS5ub2RlLnNjYWxlWCA9IChkaXYueCA+IDAgPyAxIDogLTEpICogTWF0aC5hYnModGhpcy5fc3BBbmkubm9kZS5zY2FsZVgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zcEFuaS5hbmltYXRpb24uaW5jbHVkZXMoXCJhdHRhY2tcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0F0ayA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuTW92ZURpciA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoWzgsIDksIDE4XS5pbmNsdWRlcyh0aGlzLnpvbWJpZUlkKSAmJiB0aGlzLl9zcEFuaS5hbmltYXRpb24gPT0gXCJhdHRhY2syXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRSYXRlICo9IDIuNTtcclxuICAgICAgICAgICAgICAgIHRoaXMudWRwYXRlUkJvZHkodGhpcy5tb3ZlRGlyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkUmF0ZSAvPSAyLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWRwYXRlUkJvZHkodGhpcy5tb3ZlRGlyKTtcclxuICAgICAgICAgICAgICAgIH0sIDAuMilcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChbMTAsIDExLCAxMiwgMTNdLmluY2x1ZGVzKHRoaXMuem9tYmllSWQpICYmIHRoaXMuX3NwQW5pLmFuaW1hdGlvbiA9PSBcImF0dGFjazJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFJhdGUgKj0gMztcclxuICAgICAgICAgICAgICAgIHRoaXMudWRwYXRlUkJvZHkodGhpcy5tb3ZlRGlyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkUmF0ZSAvPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURpciA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVkcGF0ZVJCb2R5KHRoaXMubW92ZURpcik7XHJcbiAgICAgICAgICAgICAgICB9LCAwLjIpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoWzE0LCAxOV0uaW5jbHVkZXModGhpcy56b21iaWVJZCkgJiYgdGhpcy5fc3BBbmkuYW5pbWF0aW9uLmluY2x1ZGVzKFwiYXR0YWNrXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkUmF0ZSAqPSAzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51ZHBhdGVSQm9keSh0aGlzLm1vdmVEaXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRSYXRlIC89IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWRwYXRlUkJvZHkodGhpcy5tb3ZlRGlyKTtcclxuICAgICAgICAgICAgICAgIH0sIDAuMilcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnpvbWJpZUlkID09IDE1ICYmIHRoaXMuX3NwQW5pLmFuaW1hdGlvbiA9PSBcImF0dGFja1wiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkUmF0ZSAqPSAzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51ZHBhdGVSQm9keSh0aGlzLm1vdmVEaXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRSYXRlIC89IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWRwYXRlUkJvZHkodGhpcy5tb3ZlRGlyKTtcclxuICAgICAgICAgICAgICAgIH0sIDAuNClcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnpvbWJpZUlkID09IDE2ICYmIHRoaXMuX3NwQW5pLmFuaW1hdGlvbiA9PSBcImF0dGFja1wiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkUmF0ZSAqPSAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51ZHBhdGVSQm9keSh0aGlzLm1vdmVEaXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRSYXRlIC89IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWRwYXRlUkJvZHkodGhpcy5tb3ZlRGlyKTtcclxuICAgICAgICAgICAgICAgIH0sIDAuMylcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnpvbWJpZUlkID09IDE3ICYmIHRoaXMuX3NwQW5pLmFuaW1hdGlvbi5pbmNsdWRlcyhcImF0dGFja1wiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFJhdGUgKj0gMjtcclxuICAgICAgICAgICAgICAgIHRoaXMudWRwYXRlUkJvZHkodGhpcy5tb3ZlRGlyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkUmF0ZSAvPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURpciA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVkcGF0ZVJCb2R5KHRoaXMubW92ZURpcik7XHJcbiAgICAgICAgICAgICAgICB9LCAwLjMpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIgPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVkcGF0ZVJCb2R5KHRoaXMubW92ZURpcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc3BBbmkuYW5pbWF0aW9uLmluY2x1ZGVzKFwianVtcF91cFwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbk1vdmVEaXIgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW5kTGlzdGVuZXJDYWxsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zcEFuaS5hbmltYXRpb24uaW5jbHVkZXMoXCJzcGF3blwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zcEFuaS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbk1vdmVEaXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQZXJzb24oKTtcclxuICAgICAgICAgICAgdGhpcy51ZHBhdGVSQm9keSh0aGlzLm1vdmVEaXIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3BBbmkuYW5pbWF0aW9uLmluY2x1ZGVzKFwiYXR0YWNrXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NwQW5pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNBdGsgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jYW5Nb3ZlRGlyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVNb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGVyc29uKCk7XHJcbiAgICAgICAgICAgIHRoaXMudWRwYXRlUkJvZHkodGhpcy5tb3ZlRGlyKTtcclxuICAgICAgICAgICAgdGhpcy5hdGtEaXIgPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zcEFuaS5hbmltYXRpb24uaW5jbHVkZXMoXCJqdW1wX2Rvd25cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3BBbmkuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5jYW5Nb3ZlRGlyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRGlyID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICB0aGlzLnVkcGF0ZVJCb2R5KHRoaXMubW92ZURpcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmtojmga8gKi9cclxuICAgIHByaXZhdGUgX29uR2FtZU1lc3NhZ2VIYW5kbGVyKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcclxuICAgICAgICAgICAgLy8g5riF6Zmk5omA5pyJ5YO15bC4XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RhbnQuRV9BbGx6b21iaWVfRGVzdG9yeToge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXJ0KDI1MCwgbnVsbCwgbnVsbCwgdHJ1ZSwgdHJ1ZSwgY2MuQ29sb3IuV0hJVEUsIHRydWUsdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBib3Nz5Ye6546w5riF6Zmk5pmu6YCa5YO15bC4XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RhbnQuRV9Db21tb256b21iaWVfRGVzdG9yeToge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzQm9zcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC4zLCB7IG9wYWNpdHk6IDEgfSwgeyBlYXNpbmc6IFwiZmFkZVwiIH0pLmNhbGwoKCkgPT4geyB0aGlzLnB1dE5vZGVQb29sKCk7IH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kaXZUb1BsYXllcjogY2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcclxuICAgIHByb3RlY3RlZCBfdGltZTogbnVtYmVyID0gLTE7XHJcbiAgICBsYXRlVXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlYXRoIHx8IGNvY29zei5pc1BhdXNlIHx8ICFnYW1lTWdyLmlzR2FtZVN0YXJ0IHx8IGdhbWVNZ3IuaXNXaW4gfHwgZ2FtZU1nci5pc0ZhaWwpIHtcclxuICAgICAgICAgICAgdGhpcy51ZHBhdGVSQm9keShjYy5WZWMyLlpFUk8pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3RpbWUrKztcclxuICAgICAgICBpZiAodGhpcy5fdGltZSAlIDE1ID09IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3RpbWUgJSAzMCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURpdigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBdGsoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBbmkoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQZXJzb24oKTtcclxuICAgICAgICAgICAgdGhpcy51ZHBhdGVSQm9keSh0aGlzLm1vdmVEaXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEaXYoKSB7XHJcbiAgICAgICAgbGV0IGZyb21Qb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBsZXQgdG9Qb3MgPSBnYW1lTWdyLnBsYXllclRzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLl9kaXZUb1BsYXllciA9IHRvUG9zLnN1YlNlbGYoZnJvbVBvcyk7XHJcbiAgICAgICAgLy8g6LaF5Ye65bGP5bmV6Led56a75Yig6ZmkXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQm9zcyAmJiAhdGhpcy5pc0VsaXRlICYmIGNvY29zei5nYW1lTW9kZSA9PSA2ICYmIHRoaXMuX2RpdlRvUGxheWVyLm1hZygpID4gY2Mud2luU2l6ZS5oZWlnaHQgLyAyIC8gZ2FtZU1nci5tYWluQ2FtZXJhLnpvb21SYXRpbykge1xyXG4gICAgICAgICAgICB0aGlzLnB1dE5vZGVQb29sKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmm7TmlrDnp7vliqggKi9cclxuICAgIHVwZGF0ZU1vdmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmlnLnR5cGUgPT0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbk1vdmUgJiYgdGhpcy5jYW5Nb3ZlRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmnInnm67moIdcclxuICAgICAgICAgICAgICAgIGlmIChnYW1lTWdyLnBsYXllclRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g546p5a625a2Y5rS7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnYW1lTWdyLnBsYXllclRzLmlzRGVhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6Lez6LeDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnpvbWJpZUlkID09IDMgJiYgTWF0aC5yYW5kb20oKSA8IDAuMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9zcEFuaS5hbmltYXRpb24uaW5jbHVkZXMoXCJqdW1wXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3BBbmkuc2V0QW5pbWF0aW9uKDAsIFwianVtcF91cFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3BBbmkuYWRkQW5pbWF0aW9uKDAsIFwianVtcF9kb3duXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIgPSB0aGlzLl9kaXZUb1BsYXllci5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmnJ3nnYDnjqnlrrbnp7vliqhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fZGl2VG9QbGF5ZXIubWFnKCkgPj0gdGhpcy5hdGtSYW5nZSAqIDAuOCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyID0gY2MudjIodGhpcy5fZGl2VG9QbGF5ZXIubm9ybWFsaXplKCkpLnJvdGF0ZVNlbGYoTWF0aC5QSSAvIDIgKiAoMC41IC0gTWF0aC5yYW5kb20oKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi3neemu+eOqeWutuW+iOi/ke+8jOWBnOatouenu+WKqCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIgPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g546p5a625q275LqhXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi3neemu+W+iOi/keWImei/nOemu+eOqeWutlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGl2VG9QbGF5ZXIubWFnKCkgPCAodGhpcy5pc0Jvc3MgPyA4MDAgOiAxNTAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyID0gdGhpcy5fZGl2VG9QbGF5ZXIubm9ybWFsaXplKCkubmVnU2VsZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmaj+acuuenu+WKqCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIgPSBjYy52Mih0aGlzLl9kaXZUb1BsYXllci5ub3JtYWxpemUoKSkucm90YXRlU2VsZigyICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmm7TmlrDmlLvlh7sgKi9cclxuICAgIHVwZGF0ZUF0aygpIHtcclxuICAgICAgICAvLyDog73lkKbmlLvlh7vmlLvlh7tcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQXRrKCkpIHtcclxuICAgICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOaWsOeahOaUu+WHu1xyXG4gICAgICAgIGVsc2UgaWYgKGdhbWVNZ3IucGxheWVyVHMgJiYgIWdhbWVNZ3IucGxheWVyVHMuaXNEZWF0aCkge1xyXG4gICAgICAgICAgICAvLyDmma7pgJrot53nprvmlLvlh7tcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RpdlRvUGxheWVyLm1hZygpIDwgdGhpcy5hdGtSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdGtEaXIgPSB0aGlzLl9kaXZUb1BsYXllci5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXRrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g6L+c6Led56a75pS75Ye7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnpvbWJpZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTg6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RpdlRvUGxheWVyLm1hZygpIDwgNjAwICYmIE1hdGgucmFuZG9tKCkgPCAwLjEgKiAodGhpcy5pc0Jvc3MgPyAyIDogMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXRrRGlyID0gdGhpcy5fZGl2VG9QbGF5ZXIubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIgPSB0aGlzLl9kaXZUb1BsYXllci5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXRrKFwiYXR0YWNrMlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMuX2RpdlRvUGxheWVyLm1hZygpID4gODAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0a0RpciA9IHRoaXMuX2RpdlRvUGxheWVyLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyID0gdGhpcy5fZGl2VG9QbGF5ZXIubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLkhQIDw9IHRoaXMudG90bGVIcCAvIDIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXRrKFwic2hvb3RcIix0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXRrKFwic2hvb3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE2OlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RpdlRvUGxheWVyLm1hZygpIDwgODAwICYmIE1hdGgucmFuZG9tKCkgPCAwLjEgKiAodGhpcy5pc0Jvc3MgPyAyIDogMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXRrRGlyID0gdGhpcy5fZGl2VG9QbGF5ZXIubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIgPSB0aGlzLl9kaXZUb1BsYXllci5ub3JtYWxpemUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGsoXCJhdHRhY2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RpdlRvUGxheWVyLm1hZygpIDwgODAwICYmIE1hdGgucmFuZG9tKCkgPCAwLjEgKiAodGhpcy5pc0Jvc3MgPyAyIDogMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXRrRGlyID0gdGhpcy5fZGl2VG9QbGF5ZXIubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIgPSB0aGlzLl9kaXZUb1BsYXllci5ub3JtYWxpemUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGsoXCJhdHRhY2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTY6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RpdlRvUGxheWVyLm1hZygpIDwgNjAwICYmIE1hdGgucmFuZG9tKCkgPCAwLjEgKiAodGhpcy5pc0Jvc3MgPyAyIDogMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXRrRGlyID0gdGhpcy5fZGl2VG9QbGF5ZXIubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIgPSB0aGlzLl9kaXZUb1BsYXllci5ub3JtYWxpemUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGsoXCJhdHRhY2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RpdlRvUGxheWVyLm1hZygpIDwgNjAwICYmIE1hdGgucmFuZG9tKCkgPCAwLjE1ICogKHRoaXMuaXNCb3NzID8gMiA6IDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0a0RpciA9IHRoaXMuX2RpdlRvUGxheWVyLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyID0gdGhpcy5fZGl2VG9QbGF5ZXIubm9ybWFsaXplKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXRrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuX2RpdlRvUGxheWVyLm1hZygpID4gODAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0a0RpciA9IHRoaXMuX2RpdlRvUGxheWVyLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyID0gdGhpcy5fZGl2VG9QbGF5ZXIubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLkhQIDw9IHRoaXMudG90bGVIcCAvIDIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXRrKFwic2hvdFwiLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGsoXCJzaG90XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RpdlRvUGxheWVyLm1hZygpIDwgNjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuMTUgKiAodGhpcy5pc0Jvc3MgPyAyIDogMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0a0RpciA9IHRoaXMuX2RpdlRvUGxheWVyLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURpciA9IHRoaXMuX2RpdlRvUGxheWVyLm5vcm1hbGl6ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGsoXCJhdHRhY2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zcF9ob25nemhhcXVhbi5pc1ZhbGlkICYmICF0aGlzLnNwX2hvbmd6aGFxdWFuLm5vZGUuYWN0aXZlICYmIHRoaXMuX2RpdlRvUGxheWVyLm1hZygpID4gODAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0ayhcImJ1bGxldF9jaHVpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hdGtEaXIgPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmm7TmlrDliqjnlLsgKi9cclxuICAgIHVwZGF0ZUFuaSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlYXRoID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIC8vIOaaguWBnFxyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3BBbmkudGltZVNjYWxlID09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIC4uLmFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlh7rlnLpcclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3BBbmkuYW5pbWF0aW9uLmluY2x1ZGVzKFwic3Bhd25cIikpIHsgfVxyXG4gICAgICAgICAgICAvLyDmlLvlh7tcclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3BBbmkuYW5pbWF0aW9uLmluY2x1ZGVzKFwiYXR0YWNrXCIpKSB7IH1cclxuICAgICAgICAgICAgLy8g6Lez6LeDXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3NwQW5pLmFuaW1hdGlvbi5pbmNsdWRlcyhcImp1bXBcIikpIHsgfVxyXG4gICAgICAgICAgICAvLyDlhbblroNcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDnp7vliqhcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdmVEaXIgJiYgdGhpcy5tb3ZlRGlyLm1hZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuem9tYmllSWQgPT0gMTcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX3NwQW5pLmFuaW1hdGlvbi5pbmNsdWRlcyhcIndpbmdcIikgJiYgdGhpcy5fc3BBbmkuc2V0QW5pbWF0aW9uKDAsIFwid2luZ1wiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fc3BBbmkuYW5pbWF0aW9uLmluY2x1ZGVzKFwicnVuXCIpICYmIHRoaXMuX3NwQW5pLnNldEFuaW1hdGlvbigwLCBcInJ1blwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDlvoXmnLpcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLl9zcEFuaS5hbmltYXRpb24uaW5jbHVkZXMoXCJpZGxlXCIpICYmIHRoaXMuX3NwQW5pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5q275LqhXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc3BBbmkgJiYgdGhpcy5fc3BBbmkuc2tlbGV0b25EYXRhICYmIHRoaXMuX3NwQW5pLnNrZWxldG9uRGF0YS5za2VsZXRvbkpzb24uYW5pbWF0aW9uc1tcImRpZVwiXSkge1xyXG4gICAgICAgICAgICAhdGhpcy5fc3BBbmkuYW5pbWF0aW9uLmluY2x1ZGVzKFwiZGllXCIpICYmIHRoaXMuX3NwQW5pLnNldEFuaW1hdGlvbigwLCBcImRpZVwiLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQZXJzb24oKSB7XHJcbiAgICAgICAgbGV0IGRpciA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuYXRrRGlyICYmIHRoaXMuYXRrRGlyLm1hZygpKSB7XHJcbiAgICAgICAgICAgIGRpciA9IHRoaXMuYXRrRGlyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZlRGlyICYmIHRoaXMubW92ZURpci5tYWcoKSkge1xyXG4gICAgICAgICAgICBkaXIgPSB0aGlzLm1vdmVEaXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWKqOeUu+aWueWQkVxyXG4gICAgICAgIGlmIChkaXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3BBbmkubm9kZS5zY2FsZVggPSBNYXRoLmFicyh0aGlzLl9zcEFuaS5ub2RlLnNjYWxlWCkgKiAoZGlyLnggPiAwID8gMSA6IC0xKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWImuS9k+enu+WKqCAqL1xyXG4gICAgdWRwYXRlUkJvZHkoZGlyOiBjYy5WZWMyLCBpc011c3Q6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnJpZy50eXBlID09IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYW5Nb3ZlIHx8IGlzTXVzdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpciAmJiAhZGlyLmVxdWFscyhjYy5WZWMyLlpFUk8pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWcubGluZWFyVmVsb2NpdHkgPSBkaXIubXVsKE1hdGguZmxvb3IodGhpcy5Nb3ZlU3BlZWQgKiB0aGlzLnNwZWVkUmF0ZSAqICgxIC0gMC4yICogTWF0aC5yYW5kb20oKSkpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWcubGluZWFyVmVsb2NpdHkgPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaUu+WHuyAqL1xyXG4gICAgYXRrKGFuaU5hbWU6IHN0cmluZyA9IFwiXCIsaXNSYWdlOmJvb2xlYW49ZmFsc2UpIHtcclxuICAgICAgICBsZXQgYXRrVHlwZTogQXRrVHlwZSA9IEF0a1R5cGUuZnJvbnQ7XHJcbiAgICAgICAgbGV0IGF0a1JhbmdlOiBudW1iZXIgPSB0aGlzLmF0a1JhbmdlO1xyXG4gICAgICAgIGxldCBhdGtUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBidWxsZXRUaW1lOiBudW1iZXIgPSAyO1xyXG4gICAgICAgIGxldCBjbGlwOiBjYy5BdWRpb0NsaXAgPSB0aGlzLmF1ZGlvX2F0dGFjazE7XHJcbiAgICAgICAgbGV0IGJ1bGxldEZseVNwZWVkIDogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgYnVsbGV0TnVtIDogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgdGltZU51bSA6IG51bWJlciA9IDE7XHJcblxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgbGV0IHNob290U2V0RnVuYyA6IEZ1bmN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhbmlOYW1lID0gXCJhdHRhY2tcIjtcclxuICAgICAgICAgICAgYXRrVHlwZSA9IEF0a1R5cGUuc2hvb3Q7XHJcbiAgICAgICAgICAgIGJ1bGxldEZseVNwZWVkID0gMTIwMDtcclxuICAgICAgICAgICAgaWYoaXNSYWdlKXtcclxuICAgICAgICAgICAgICAgIHRpbWVOdW0gPSAzO1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0TnVtID0gKChzZWxmLnpvbWJpZUlkIC0gNykgLyAyKSArIDE7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGltZU51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICBidWxsZXROdW0gPSAoKHNlbGYuem9tYmllSWQgLSA3KSAvIDIpICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2VsZi5fY2FuQXRrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGF0a1RpbWUgPSAzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnpvbWJpZUlkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgY2FzZSAxOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaU5hbWUgPSBcImF0dGFja1wiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmlOYW1lID0gXCJhdHRhY2syXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcCA9IHRoaXMuYXVkaW9fYXR0YWNrMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGF0a1RpbWUgPSAwLjM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIGNhc2UgMzoge1xyXG4gICAgICAgICAgICAgICAgYW5pTmFtZSA9IFwiYXR0YWNrMVwiO1xyXG4gICAgICAgICAgICAgICAgYXRrVGltZSA9IDAuMztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgNDoge1xyXG4gICAgICAgICAgICAgICAgYW5pTmFtZSA9IFwiYXR0YWNrXCI7XHJcbiAgICAgICAgICAgICAgICBhdGtUaW1lID0gMC4zO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSA1OiB7XHJcbiAgICAgICAgICAgICAgICBhbmlOYW1lID0gXCJhdHRhY2tcIjtcclxuICAgICAgICAgICAgICAgIGF0a1RpbWUgPSA0O1xyXG4gICAgICAgICAgICAgICAgYXRrVHlwZSA9IEF0a1R5cGUucmFuZ2U7XHJcbiAgICAgICAgICAgICAgICBidWxsZXRUaW1lID0gMS4zO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FuQXRrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDY6IHtcclxuICAgICAgICAgICAgICAgIGFuaU5hbWUgPSBcImF0dGFja1wiO1xyXG4gICAgICAgICAgICAgICAgYXRrVGltZSA9IDQ7XHJcbiAgICAgICAgICAgICAgICBhdGtUeXBlID0gQXRrVHlwZS5yYW5nZTtcclxuICAgICAgICAgICAgICAgIGJ1bGxldFRpbWUgPSAwLjk1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FuQXRrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDc6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgY2FzZSAxODoge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFuaU5hbWUgPT0gXCJhdHRhY2syXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmlOYW1lID0gXCJhdHRhY2syXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrUmFuZ2UgPSAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrVGltZSA9IDAuMztcclxuICAgICAgICAgICAgICAgICAgICBhdGtUeXBlID0gQXRrVHlwZS5hcmVhO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaXAgPSB0aGlzLmF1ZGlvX2F0dGFjazI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGFuaU5hbWUgPT0gJ3Nob290Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvb3RTZXRGdW5jKCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBhbmlOYW1lID0gXCJhdHRhY2tcIjtcclxuICAgICAgICAgICAgICAgICAgICBhdGtSYW5nZSA9IDM1MDtcclxuICAgICAgICAgICAgICAgICAgICBhdGtUaW1lID0gMC4zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSA5OiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYW5pTmFtZSA9PSBcImF0dGFjazJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaU5hbWUgPSBcImF0dGFjazJcIjtcclxuICAgICAgICAgICAgICAgICAgICBhdGtSYW5nZSA9IDQ1MDtcclxuICAgICAgICAgICAgICAgICAgICBhdGtUaW1lID0gMC4zO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaXAgPSB0aGlzLmF1ZGlvX2F0dGFjazI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGFuaU5hbWUgPT0gJ3Nob290Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvb3RTZXRGdW5jKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmlOYW1lID0gXCJhdHRhY2tcIjtcclxuICAgICAgICAgICAgICAgICAgICBhdGtSYW5nZSA9IDM1MDtcclxuICAgICAgICAgICAgICAgICAgICBhdGtUaW1lID0gMC4zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAxMDoge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFuaU5hbWUgPT0gXCJhdHRhY2syXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmlOYW1lID0gXCJhdHRhY2syXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrUmFuZ2UgPSAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrVGltZSA9IDAuMztcclxuICAgICAgICAgICAgICAgICAgICBjbGlwID0gdGhpcy5hdWRpb19hdHRhY2syO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihhbmlOYW1lID09ICdzaG9vdCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNob290U2V0RnVuYygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pTmFtZSA9IFwiYXR0YWNrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrUmFuZ2UgPSAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrVGltZSA9IDAuMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgIGNhc2UgMTM6IHtcclxuICAgICAgICAgICAgICAgIGlmIChhbmlOYW1lID09IFwiYXR0YWNrMlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pTmFtZSA9IFwiYXR0YWNrMlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1JhbmdlID0gMjUwO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1RpbWUgPSAwLjM7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcCA9IHRoaXMuYXVkaW9fYXR0YWNrMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoYW5pTmFtZSA9PSAnc2hvb3QnKXtcclxuICAgICAgICAgICAgICAgICAgICBzaG9vdFNldEZ1bmMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaU5hbWUgPSBcImF0dGFja1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1JhbmdlID0gMjUwO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1RpbWUgPSAwLjM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDE0OlxyXG4gICAgICAgICAgICBjYXNlIDE5OiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNikgey8v5Yay55u+XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pTmFtZSA9IFwiYXR0YWNrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrUmFuZ2UgPSAzNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrVGltZSA9IDAuMztcclxuICAgICAgICAgICAgICAgICAgICBhdGtUeXBlID0gQXRrVHlwZS5jaGFyZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcCA9IHRoaXMuYXVkaW9fYXR0YWNrMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaU5hbWUgPSBcImF0dGFjazJcIjsvL+aMpeajjVxyXG4gICAgICAgICAgICAgICAgICAgIGF0a1JhbmdlID0gMzUwO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1RpbWUgPSAwLjM7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcCA9IHRoaXMuYXVkaW9fYXR0YWNrMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMTU6IHtcclxuICAgICAgICAgICAgICAgIGlmIChhbmlOYW1lID09IFwiYXR0YWNrXCIpIHsvL+WGsumUi1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaU5hbWUgPSBcImF0dGFja1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1JhbmdlID0gMjUwO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1RpbWUgPSAwLjM7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrVHlwZSA9IEF0a1R5cGUuY2hhcmdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pTmFtZSA9IFwiYXR0YWNrMlwiOy8v5Za354GrXHJcbiAgICAgICAgICAgICAgICAgICAgYXRrUmFuZ2UgPSA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrVGltZSA9IDAuMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMTY6IHtcclxuICAgICAgICAgICAgICAgIGlmIChhbmlOYW1lID09IFwiYXR0YWNrXCIgfHwgTWF0aC5yYW5kb20oKSA8IDAuNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaU5hbWUgPSBcImF0dGFja1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1JhbmdlID0gNDUwO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1RpbWUgPSAwLjM7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrVHlwZSA9IEF0a1R5cGUuYXJlYTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaU5hbWUgPSBcImF0dGFjazJcIjtcclxuICAgICAgICAgICAgICAgICAgICBhdGtSYW5nZSA9IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICBhdGtUaW1lID0gMC4zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAxNzoge1xyXG4gICAgICAgICAgICAgICAgaWYoYW5pTmFtZSA9PSAnc2hvdCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaU5hbWUgPSBcIndpbmcyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrVHlwZSA9IEF0a1R5cGUuc2hvdDtcclxuICAgICAgICAgICAgICAgICAgICBidWxsZXRGbHlTcGVlZCA9IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBpZihpc1JhZ2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lTnVtID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVsbGV0TnVtID0gMTU7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVOdW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWxsZXROdW0gPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FuQXRrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrVGltZSA9IDM7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmlOYW1lID0gXCJhdHRhY2tcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXRrUmFuZ2UgPSAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0a1RpbWUgPSAwLjM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmlOYW1lID0gXCJhdHRhY2syXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0a1JhbmdlID0gMjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdGtUaW1lID0gMC4zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdGtUeXBlID0gQXRrVHlwZS5jaGFyZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMjA6IHtcclxuICAgICAgICAgICAgICAgIGlmIChhbmlOYW1lID09IFwiYnVsbGV0X2NodWlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1R5cGUgPSBBdGtUeXBlLnJhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaU5hbWUgPSBcImF0dGFjazJcIjtcclxuICAgICAgICAgICAgICAgICAgICBidWxsZXRUaW1lID0gMS41O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYW5pTmFtZSA9PSBcImF0dGFja1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pTmFtZSA9IFwiYXR0YWNrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrUmFuZ2UgPSA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrVGltZSA9IDAuMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaU5hbWUgPSBcImF0dGFjazJcIjtcclxuICAgICAgICAgICAgICAgICAgICBhdGtSYW5nZSA9IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICBhdGtUaW1lID0gMC4zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5omn6KGM5Yqo55S7XHJcbiAgICAgICAgaWYgKGFuaU5hbWUpIHRoaXMuX3NwQW5pLnNldEFuaW1hdGlvbigwLCBhbmlOYW1lLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKGNsaXAgJiYgY2xpcC5pc1ZhbGlkKSBnYW1lTWdyLnBsYXlDbGlwKGNsaXAsIHRoaXMubm9kZSwgMC41KTtcclxuICAgICAgICAvLyDmlLvlh7vkvKTlrrNcclxuICAgICAgICBsZXQgY2FsbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGdhbWVNZ3IucGxheWVyVHMgJiYgIWdhbWVNZ3IucGxheWVyVHMuaXNEZWF0aCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZyb21Qb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGxldCB0b1BvcyA9IGdhbWVNZ3IucGxheWVyVHMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpdiA9IHRvUG9zLnN1YlNlbGYoZnJvbVBvcyk7XHJcbiAgICAgICAgICAgICAgICAvLyDliKTmlq3mmK/lkKblnKjmlLvlh7vojIPlm7TlkozmlLvlh7vmlrnlkJFcclxuICAgICAgICAgICAgICAgIGlmIChkaXYubWFnKCkgPCBhdGtSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdGtUeXBlID09IEF0a1R5cGUuZnJvbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpdi5tYWcoKSA8IDIwMCB8fCAoZGl2LnggKiB0aGlzLl9zcEFuaS5ub2RlLnNjYWxlID4gMCAmJiBNYXRoLmFicyhkaXYueSAvIGRpdi54KSA8IDEuNCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheWVyVHMuaGFydCgxLCB0aGlzLm5vZGUsIGRpdi5ub3JtYWxpemVTZWxmKCksIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhdGtUeXBlID09PSBBdGtUeXBlLmNoYXJnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnBsYXllclRzLmhhcnQoMSwgdGhpcy5ub2RlLCBkaXYubm9ybWFsaXplU2VsZigpLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKGNhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheWVyVHMuaGFydCgxLCB0aGlzLm5vZGUsIGRpdi5ub3JtYWxpemVTZWxmKCksIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGF0a1R5cGUgPT0gQXRrVHlwZS5mcm9udCB8fCBhdGtUeXBlID09IEF0a1R5cGUuYXJlYSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShjYWxsLCBhdGtUaW1lKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGF0a1R5cGUgPT0gQXRrVHlwZS5jaGFyZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShjYWxsLCAwLCAxNSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhdGtUeXBlID09IEF0a1R5cGUucmFuZ2UpIHtcclxuICAgICAgICAgICAgbGV0IHBvc19mcm9tID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIGxldCBwb3NfdG8gPSBnYW1lTWdyLnBsYXllclRzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgbGV0IHAyID0gY2MudjIoKHBvc19mcm9tLnggKyBwb3NfdG8ueCkgLyAyLCBwb3NfZnJvbS55ICsgMTUwMCk7XHJcbiAgICAgICAgICAgIC8vIOeUn+aIkOWtkOW8uVxyXG4gICAgICAgICAgICBpZiAodGhpcy5idWxsZXRfcHJlZmFiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXRfcHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIC8vIOWtkOW8ueiEmuacrFxyXG4gICAgICAgICAgICAgICAgbGV0IHRzID0gYnVsbGV0LmdldENvbXBvbmVudChCdWxsZXQpO1xyXG4gICAgICAgICAgICAgICAgdHMuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgICAgICAgICAgdHMuYXRrZXIgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICB0cy5hdGsgPSB0aGlzLmF0a051bTtcclxuICAgICAgICAgICAgICAgIHRzLmlzQW5nbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8g5a2Q5by55bGe5oCnXHJcbiAgICAgICAgICAgICAgICBidWxsZXQuc2V0UG9zaXRpb24ocG9zX2Zyb20pO1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0LnpJbmRleCA9IFppbmRleExheWVyLnppbmRleF9idWxsZXRfc2t5O1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0LnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAvLyDlrZDlvLnnp7vliqhcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGJ1bGxldClcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi9sOeCuOmihOitplxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zcF9ob25nemhhcXVhbiAmJiB0aGlzLnNwX2hvbmd6aGFxdWFuLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BfaG9uZ3poYXF1YW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcF9ob25nemhhcXVhbi5ub2RlLnNldFBvc2l0aW9uKHBvc190byk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwX2hvbmd6aGFxdWFuLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5iZXppZXJUbyhidWxsZXRUaW1lLCBwb3NfZnJvbSwgcDIsIHBvc190bylcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOeUn+aIkOeIhueCuOWtkOW8uVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHMuYm9vbUVmZmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvb20gPSBjYy5pbnN0YW50aWF0ZSh0cy5ib29tRWZmZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9vbS5wYXJlbnQgPSB0cy5ub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvb20uc2V0UG9zaXRpb24odHMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJCdWxsZXQgPSBib29tLmdldENvbXBvbmVudChCdWxsZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyQnVsbGV0LmF0ayA9IHRzLmF0aztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ckJ1bGxldC5hdGtlciA9IHRzLmF0a2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyQnVsbGV0LmlkID0gdHMuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnBsYXlFZmZlY3QoXCJleHBsb1wiLCBib29tKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cy5oaXRFZmZlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gYnVsbGV0LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0cy5oaXRFZmZlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gYnVsbGV0LnBhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS56SW5kZXggPSBaaW5kZXhMYXllci56aW5kZXhfZWZmZWN0X2hpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWxsZXQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuX2NhbkF0ayA9IHRydWU7IH0sIGF0a1RpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhdGtUeXBlID09IEF0a1R5cGUuc2hvdCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn6L+b5YWl5pWj5by55bCE5Ye75qih5byPISEhIScpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5idWxsZXRfcHJlZmFiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZXMgPSAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNyZWF0ZUZ1bmMgOiBGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lcysrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRpbWVzID49IDEwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+aaguWBnOiuoeaXtuWZqCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVuc2NoZWR1bGUoY3JlYXRlRnVuYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2NhbkF0ayA9IHRydWU7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRpbWVzIDw9IHRpbWVOdW0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNyZWF0ZVNob3RCdWxsZXQoYnVsbGV0TnVtLGJ1bGxldEZseVNwZWVkLHRpbWVzICogMTUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoY3JlYXRlRnVuYywgMC4zICwgMTAgLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXRrVHlwZSA9PSBBdGtUeXBlLnNob290KSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfov5vlhaXljZXlj5HlsITlh7vmqKHlvI8hISEhJyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1bGxldF9wcmVmYWIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBmcm9tUG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9Qb3MgPSBnYW1lTWdyLnBsYXllclRzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGxldCBkaXIgOiBjYy5WZWMyID0gY2MudjIodG9Qb3Muc3ViKGZyb21Qb3MpLm5vcm1hbGl6ZSgpKTtcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lcyA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3JlYXRlU2hvb3RGdW5jIDogRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXMrKztcclxuICAgICAgICAgICAgICAgICAgICBpZih0aW1lcyA+PSAxMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmmoLlgZzorqHml7blmagnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51bnNjaGVkdWxlKGNyZWF0ZVNob290RnVuYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2NhbkF0ayA9IHRydWU7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRpbWVzIDw9IHRpbWVOdW0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnVsbGV0TnVtID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWxsZXROdW07IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXJOdW0gPSBNYXRoLnBvdygodGltZXMgLSAyKSwyKSArIChwYXJzZUludCgoKHRpbWVzIC0gMSkgLyAyKS50b1N0cmluZygpKSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbmdsZSA9ICgoYnVsbGV0TnVtIC0gMSkgLyAyIC0gaSkgKiAxNSArIGRpck51bSAqIDMwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdfZGlyOiBjYy5WZWMyID0gZGlyLnJvdGF0ZShjYy5taXNjLmRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNyZWF0ZUJ1bGxldChuZXdfZGlyLGJ1bGxldEZseVNwZWVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY3JlYXRlQnVsbGV0KGRpcixidWxsZXRGbHlTcGVlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKGNyZWF0ZVNob290RnVuYywgMC4zICwgMTAgLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVCdWxsZXQgKGRpcjogY2MuVmVjMixidWxsZXRGbHlTcGVlZCkge1xyXG4gICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldF9wcmVmYWIpO1xyXG4gICAgICAgIGxldCB0cyA9IGJ1bGxldC5nZXRDb21wb25lbnQoQnVsbGV0KTtcclxuICAgICAgICB0cy5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgdHMuYXRrZXIgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdHMuYXRrID0gMTtcclxuXHJcbiAgICAgICAgbGV0IHN0cmlrTm9kZSA9IGJ1bGxldC5nZXRDaGlsZEJ5TmFtZSgnTmV3IE5vZGUnKTtcclxuICAgICAgICBzdHJpa05vZGUud2lkdGggPSAxNTA7XHJcbiAgICAgICAgYnVsbGV0LnBhcmVudCA9IGdhbWVNZ3IubWFwO1xyXG5cclxuICAgICAgICBsZXQgZnJvbVBvcyA9IGdhbWVNZ3IubWFwLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJvb3NcIikuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTykpO1xyXG4gICAgICAgIC8vIC8vIOWtkOW8ueWxnuaAp1xyXG4gICAgICAgIGJ1bGxldC5zZXRQb3NpdGlvbihmcm9tUG9zKVxyXG4gICAgICAgIGJ1bGxldC56SW5kZXggPSBaaW5kZXhMYXllci56aW5kZXhfYnVsbGV0X3NreTtcclxuXHJcbiAgICAgICAgYnVsbGV0LmFuZ2xlID0gLWNjLnYyKGRpcikuc2lnbkFuZ2xlKGNjLnYyKDEsIDApKSAvIE1hdGguUEkgKiAxODA7XHJcbiAgICAgICAgbGV0IHBvczEgPSBidWxsZXQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBsZXQgcG9zMiA9IHBvczEuYWRkKGRpci5tdWwoMjAwMCkpO1xyXG5cclxuICAgICAgICBjYy50d2VlbihidWxsZXQpXHJcbiAgICAgICAgICAgIC50byhwb3MyLnN1Yihwb3MxKS5tYWcoKSAvIGJ1bGxldEZseVNwZWVkLCB7IHBvc2l0aW9uOiBjYy52Myhwb3MyKSB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBidWxsZXQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVTaG90QnVsbGV0IChidWxsZXROdW0sYnVsbGV0Rmx5U3BlZWQsb2Zmc2V0KSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8PSBidWxsZXROdW0gOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSAoMzYwIC8gYnVsbGV0TnVtKSAqIGkgKyBvZmZzZXQ7XHJcbiAgICAgICAgICAgIGxldCBkaXIgPSBjYy52MigxLCAwKS5yb3RhdGUoY2MubWlzYy5kZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKSk7XHJcbiAgICAgICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldF9wcmVmYWIpO1xyXG4gICAgICAgICAgICBsZXQgdHMgPSBidWxsZXQuZ2V0Q29tcG9uZW50KEJ1bGxldCk7XHJcbiAgICAgICAgICAgIHRzLmlkID0gdGhpcy5pZDtcclxuICAgICAgICAgICAgdHMuYXRrZXIgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIHRzLmF0ayA9IDE7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3RyaWtOb2RlID0gYnVsbGV0LmdldENoaWxkQnlOYW1lKCdOZXcgTm9kZScpO1xyXG4gICAgICAgICAgICBzdHJpa05vZGUud2lkdGggPSAxNTA7XHJcbiAgICAgICAgICAgIGJ1bGxldC5wYXJlbnQgPSBnYW1lTWdyLm1hcDtcclxuICAgICAgICAgICAgbGV0IGZyb21Qb3MgPSBnYW1lTWdyLm1hcC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib29zXCIpLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pKTtcclxuICAgICAgICAgICAgLy8g5a2Q5by55bGe5oCnXHJcbiAgICAgICAgICAgIGJ1bGxldC5zZXRQb3NpdGlvbihmcm9tUG9zKVxyXG4gICAgICAgICAgICBidWxsZXQuekluZGV4ID0gWmluZGV4TGF5ZXIuemluZGV4X2J1bGxldF9za3k7XHJcbiAgICAgICAgICAgIGxldCBwb3MxID0gYnVsbGV0LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIGxldCBwb3MyID0gcG9zMS5hZGQoZGlyLm11bCgyMDAwKSk7XHJcbiAgICAgICAgICAgIGJ1bGxldC5hbmdsZSA9IGFuZ2xlO1xyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4oYnVsbGV0KVxyXG4gICAgICAgICAgICAgICAgLnRvKHBvczIuc3ViKHBvczEpLm1hZygpIC8gYnVsbGV0Rmx5U3BlZWQsIHsgcG9zaXRpb246IGNjLnYzKHBvczIpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVsbGV0LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDlj5fkvKQgKi9cclxuICAgIGhhcnQoYXRrTnVtOiBudW1iZXIsIGZyb206IGNjLk5vZGUsIGRpcj86IGNjLlZlYzIsIGlzQXVkaW86IGJvb2xlYW4gPSB0cnVlLCBpc0VtaXQ6IGJvb2xlYW4gPSB0cnVlLCBsYWJlbENvbG9yPzogY2MuQ29sb3IsIGlzTXVzdDogYm9vbGVhbiA9IGZhbHNlLGlzQm9vbTpib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlYXRoKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGlzTXVzdCA9PSBmYWxzZSAmJiBjb2Nvc3ouaXNQYXVzZSkgcmV0dXJuO1xyXG4gICAgICAgIC8vIOmYsuatomRpcui/h+Wkp1xyXG4gICAgICAgIGlmIChkaXIgJiYgZGlyLm1hZygpID4gMykgZGlyLm5vcm1hbGl6ZVNlbGYoKS5tdWxTZWxmKDMpO1xyXG4gICAgICAgIC8vIOWHj+S8pFxyXG4gICAgICAgIGF0a051bSA9ICgxIC0gdGhpcy5kYW1hZ2VSZWR1Y3Rpb24pICogYXRrTnVtO1xyXG4gICAgICAgIC8vIOaVsOWtl1xyXG4gICAgICAgIGdhbWVNZ3Iuc2hvd1JvbGVUaXAodGhpcy5ub2RlLCBNYXRoLm1pbih0aGlzLkhQLCBhdGtOdW0pLnRvRml4ZWQoMCksIGxhYmVsQ29sb3IpO1xyXG4gICAgICAgIC8vIOiuvue9ruihgOmHj1xyXG4gICAgICAgIHRoaXMuSFAgLT0gYXRrTnVtO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQm9zcykge1xyXG4gICAgICAgICAgICBnYW1lTWdyICYmIGdhbWVNZ3Iuc2hvd0Jvc3NIcCh0aGlzLkhQIC8gdGhpcy50b3RsZUhwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Y+X5Lyk5pWI5p6cXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQXR0YWNrZWRFZmZlY3QgJiYgdGhpcy5fc3BBbmkgJiYgdGhpcy5fc3BBbmkubm9kZSAmJiB0aGlzLl9zcEFuaS5ub2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0F0dGFja2VkRWZmZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8g5Y+X5Lyk6Z+z5pWIXHJcbiAgICAgICAgICAgIGlmIChpc0F1ZGlvKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlj5fkvKTpn7PmlYhcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1ZGlvX2hhcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnBsYXlDbGlwKHRoaXMuYXVkaW9faGFydCwgdGhpcy5ub2RlLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOe8qeaUvlxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLl9hbmlMYXllcilcclxuICAgICAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IDAuNyB9LCB7IGVhc2luZzogXCJzaW5lSW5cIiB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJzaW5lT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHsgdGhpcy5pc0F0dGFja2VkRWZmZWN0ID0gZmFsc2U7IH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgLy8g5Y+Y6ImyXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW5Db2xvcikge1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5fc3BBbmkubm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IGNvbG9yOiBuZXcgY2MuQ29sb3IoMCwgMCwgMCwgMjU1KSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgY29sb3I6IGNjLkNvbG9yLldISVRFIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5ZCO6YCAXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJpZy50eXBlID09IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYyAmJiBkaXIgJiYgdGhpcy5jYW5Nb3ZlICYmIHRoaXMuY2FuTW92ZURpcikge1xyXG4gICAgICAgICAgICAgICAgLy8g5o6n5Yi2XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbk1vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5jYW5Nb3ZlID0gdHJ1ZTsgfSwgMC4xKTtcclxuICAgICAgICAgICAgICAgIC8vIOWQjumAgFxyXG4gICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRpci5tdWxTZWxmKDQwMCAqIGRpci5tYWcoKSkuYWRkU2VsZih0aGlzLnJpZy5saW5lYXJWZWxvY2l0eSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWF4RGl2OiBudW1iZXIgPSB0aGlzLmlzQm9zcyA/IDEwMCA6IDMwMDtcclxuICAgICAgICAgICAgICAgIGlmIChkaXYubWFnKCkgPiBtYXhEaXYpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXYubm9ybWFsaXplU2VsZigpLm11bFNlbGYobWF4RGl2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmlnLmxpbmVhclZlbG9jaXR5ID0gZGl2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLkhQIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kZWF0aCgpO1xyXG4gICAgICAgICAgICAvLyDmrbvkuqHkuovku7ZcclxuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfR0FNRV9MT0dJQywgeyB0eXBlOiBDb25zdGFudC5FX1pvbWJpZV9EZWF0aCwgbm9kZTogdGhpcy5ub2RlLCBmcm9tOiBmcm9tICwgaXNCb29tIDogaXNCb29tfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDlj5fkvKTkuovku7ZcclxuICAgICAgICAgICAgaWYgKGZyb20gJiYgaXNFbWl0KSB7XHJcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9HQU1FX0xPR0lDLCB7IHR5cGU6IENvbnN0YW50LkVfWm9tYmllX0hhcnQsIG5vZGU6IHRoaXMubm9kZSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiog5q275LqhICovXHJcbiAgICBkZWF0aCgpIHtcclxuICAgICAgICBpZih0aGlzLmlzQm9zcyAmJiBnYW1lTWdyLmJvc3NBcnIubGVuZ3RoID09IDAgJiYgZ2FtZU1nci5SZWluIDwgMiAmJiBjb2Nvc3ouZ2FtZU1vZGUgPT0gNil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLWJvc3PliJvlu7rlrozkuoblubbkuJTlh7vmr5ktLS0tLS0tLeW3oeWbnuWPmOaIkDInKTtcclxuICAgICAgICAgICAgZ2FtZU1nci5SZWluID0gMjtcclxuICAgICAgICAgICAgZ2FtZU1nci5ib3NzMkFyciA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzQXRrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0RlYXRoID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9zcEFuaS50aW1lU2NhbGUgPSAxO1xyXG4gICAgICAgIC8vIOeisOaSnuS9k1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnRzKGNjLkNvbGxpZGVyKS5mb3JFYWNoKHYgPT4gdi5lbmFibGVkID0gZmFsc2UpO1xyXG4gICAgICAgIC8vIOmakOiXj+mUgOavgVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuX3NwQW5pLm5vZGUpLnRvKDAuNiwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgLy8g5q275Lqh6Z+z5pWIXHJcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9fZGllKSBnYW1lTWdyLnBsYXlDbGlwKHRoaXMuYXVkaW9fZGllLCBudWxsLCAwLjIpO1xyXG4gICAgICAgIC8vIOatu+S6oeaViOaenFxyXG4gICAgICAgIHRoaXMudXBkYXRlQW5pKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuem9tYmllSWQgPCA4KSB7XHJcbiAgICAgICAgICAgIGxldCBwcmUgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcImVmZmVjdF9kZWF0aFwiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICBpZiAocHJlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZmZWN0X2RlYXRoOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUocHJlKTtcclxuICAgICAgICAgICAgICAgIGVmZmVjdF9kZWF0aC56SW5kZXggPSBaaW5kZXhMYXllci56aW5lZHhfZmxvb3JTa2lsbDtcclxuICAgICAgICAgICAgICAgIGVmZmVjdF9kZWF0aC5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0X2RlYXRoLnNldFBhcmVudCh0aGlzLm5vZGUucGFyZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIC8vIOatu+S6oeaOieiQvemBk+WFt1xyXG4gICAgICAgIHRoaXMuY3JlYXRJdGVtKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLnB1dE5vZGVQb29sKCk7IH0sIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0SXRlbSgpIHtcclxuICAgICAgICBpZiAoZ2FtZU1nci5pc1dpbiB8fCBnYW1lTWdyLmlzRmFpbCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh1cGdyYWRlTWdyICYmIHVwZ3JhZGVNZ3IuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICBsZXQgY291bnQgPSAodGhpcy56b21iaWVJZCA8IDggPyAxIDogMTApO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGlmIChpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcy5hZGRTZWxmKGNjLnYyKDIwICogaSwgMCkucm90YXRlU2VsZigyICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVwZ3JhZGVNZ3IuY3JlYXRlSmluZ3lhbihwb3MpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihjb2Nvc3ouZ2FtZU1vZGUgPT0gNil7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZE51bSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICBpZihyYW5kTnVtIDwgMC4yKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgd3Bwb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB3cHBvcy54ID0gd3Bwb3MueCArIChwYXJzZUludCgoTWF0aC5yYW5kb20oKSAqIDIpLnRvU3RyaW5nKCkpIC0gMSkgKiAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd3Bwb3MueSA9IHdwcG9zLnkgKyAocGFyc2VJbnQoKE1hdGgucmFuZG9tKCkgKiAyKS50b1N0cmluZygpKSAtIDEpICogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZ3JhZGVNZ3IuY3JlYXRlV2VhcG9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jYW5Db2xvcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBmcm96ZW5TdGFydCgpIHtcclxuICAgICAgICB0aGlzLl9jYW5Db2xvciA9IGZhbHNlO1xyXG4gICAgICAgIC8vIOWBnOatouWPl+S8pOWPmOiJslxyXG4gICAgICAgIHRoaXMuX3NwQW5pLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAvLyDlkK/liqjlj5joibJcclxuICAgICAgICB0aGlzLl9zcEFuaS5ub2RlLmNvbG9yID0gY2MuQ29sb3IuQkxVRTtcclxuICAgICAgICBpZiAodGhpcy5fc3BBbmkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3BBbmkudGltZVNjYWxlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g56e75Yqo5pqC5YGcXHJcbiAgICAgICAgdGhpcy5pc0F0ayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FuTW92ZURpciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubW92ZURpciA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICB0aGlzLnVkcGF0ZVJCb2R5KHRoaXMubW92ZURpciwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBmcm96ZW5FbmQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRGVhdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FuQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyDmgaLlpI3popzoibJcclxuICAgICAgICAgICAgdGhpcy5fc3BBbmkubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3BBbmkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NwQW5pLnRpbWVTY2FsZSA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zcEFuaS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOenu+WKqOaBouWkjVxyXG4gICAgICAgICAgICB0aGlzLmNhbk1vdmVEaXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzQXRrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYXRrRGlyID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQZXJzb24oKTtcclxuICAgICAgICAgICAgdGhpcy51ZHBhdGVSQm9keSh0aGlzLm1vdmVEaXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZpcmVfc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5fY2FuQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICAvLyDlgZzmraLlj5fkvKTlj5joibJcclxuICAgICAgICB0aGlzLl9zcEFuaS5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgLy8g5ZCv5Yqo5Y+Y6ImyXHJcbiAgICAgICAgdGhpcy5fc3BBbmkubm9kZS5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgIH1cclxuXHJcbiAgICBmaXJlX2VuZCgpIHtcclxuICAgICAgICB0aGlzLl9jYW5Db2xvciA9IHRydWU7XHJcbiAgICAgICAgLy8g5oGi5aSN6aKc6ImyXHJcbiAgICAgICAgdGhpcy5fc3BBbmkubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NhbkF0azogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBjYW5BdGsoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jYW5BdGsgfHwgdGhpcy5pc0F0ayB8fCB0aGlzLl9zcEFuaS50aW1lU2NhbGUgPT0gMCB8fCB0aGlzLl9zcEFuaS5hbmltYXRpb24uaW5jbHVkZXMoXCJzcGF3blwiKSB8fCB0aGlzLl9zcEFuaS5hbmltYXRpb24uaW5jbHVkZXMoXCJqdW1wXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==