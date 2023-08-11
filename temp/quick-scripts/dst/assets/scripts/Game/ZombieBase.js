
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
        _this.reinLabel = null;
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
        this.reinLabel = this.node.getChildByName("reinSp").getChildByName("reinLabel");
        if (CocosZ_1.cocosz.gameMode == 6) {
            this.node.getChildByName("reinSp").active = false;
            this.reinLabel.getComponent(cc.Label).string = this.reinNum.toString();
        }
        else {
            this.node.getChildByName("reinSp").active = false;
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
            this.reinLabel.getComponent(cc.Label).string = this.reinNum.toString();
            this.node.getChildByName("reinSp").active = false;
        }
        else {
            this.node.getChildByName("reinSp").active = false;
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
        if (this.isBoss && gameMgr_1.gameMgr.bossArr.length == 0 && gameMgr_1.gameMgr.Rein < 2 && CocosZ_1.cocosz.gameMode == 8) {
            console.log('--------boss创建完了并且击毙--------巡回变成2');
            gameMgr_1.gameMgr.Rein = 2;
            gameMgr_1.gameMgr.boss2Arr = [];
        }
        this.isAtk = false;
        this.isDeath = true;
        this._spAni.timeScale = 1;
        this.node.getChildByName("reinSp").active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZVxcWm9tYmllQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBOEQ7QUFDOUQsOENBQTZDO0FBQzdDLGtEQUE4RDtBQUM5RCw2Q0FBd0M7QUFDeEMsMkNBQTBDO0FBQzFDLHlDQUFvQztBQUNwQyxpREFBZ0Q7QUFDaEQsbUNBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQUssT0FRSjtBQVJELFdBQUssT0FBTztJQUNSLHVDQUFTLENBQUE7SUFDVCxxQ0FBSSxDQUFBO0lBQ0oseUNBQU0sQ0FBQTtJQUNOLHVDQUFLLENBQUE7SUFDTCxxQ0FBSSxDQUFBO0lBQ0osdUNBQUssQ0FBQTtJQUNMLHlDQUFNLENBQUE7QUFDVixDQUFDLEVBUkksT0FBTyxLQUFQLE9BQU8sUUFRWDtBQUdEO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBZ21DQztRQTlsQ0csY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixtQkFBYSxHQUFjLElBQUksQ0FBQztRQUVoQyxvQkFBYyxHQUFnQixJQUFJLENBQUM7UUFHbkMsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBRW5DLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixhQUFPLEdBQWEsS0FBSyxDQUFDO1FBRTFCLG1CQUFhLEdBQVksQ0FBQyxDQUFDO1FBRTNCLGFBQU8sR0FBWSxDQUFDLENBQUM7UUFFWCxlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFDM0IsWUFBTSxHQUFnQixJQUFJLENBQUM7UUEyUDdCLGtCQUFZLEdB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QUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztxREFDaEc7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sZ0JBQUssT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO3NEQUN0RTtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQztxREFDaEI7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7cURBQ2hCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO2tEQUNsQjtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztpREFDbkI7SUFoQmQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWdtQzlCO0lBQUQsaUJBQUM7Q0FobUNELEFBZ21DQyxDQWhtQ3VDLGdCQUFNLEdBZ21DN0M7a0JBaG1Db0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF0VXRpbHMgZnJvbSBcIi4uLy4uL2NvbW1vbi1wbHVnaW4vU2NyaXB0cy9QbGF0VXRpbHNcIjtcclxuaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IENvbnN0YW50LCB7IFppbmRleExheWVyIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5pbXBvcnQgR2FtZURhdGUgZnJvbSBcIi4uL0dhbWUvZ2FtZURhdGVcIjtcclxuaW1wb3J0IHsgZ2FtZU1nciB9IGZyb20gXCIuLi9HYW1lL2dhbWVNZ3JcIjtcclxuaW1wb3J0IFBlcnNvbiBmcm9tIFwiLi4vR2FtZS9wZXJzb25cIjtcclxuaW1wb3J0IHsgdXBncmFkZU1nciB9IGZyb20gXCIuLi9HYW1lL1VwZ3JhZGVNZ3JcIjtcclxuaW1wb3J0IEJ1bGxldCBmcm9tIFwiLi9idWxsZXRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5lbnVtIEF0a1R5cGUge1xyXG4gICAgZnJvbnQgPSAwLC8vIOWJjeaWuVxyXG4gICAgYXJlYSwvLyDljLrln59cclxuICAgIGNoYXJnZSwvLyDlhrLplItcclxuICAgIHJhbmdlLC8vIOi/nOeoi1xyXG4gICAgc2hvdCwgLy/mlaPlvLlcclxuICAgIHNob290LCAvL+WNleWPkeWtkOW8uVxyXG4gICAgc2VjdG9yLCAvL+aJh+W9ouWtkOW8uVxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab21iaWVCYXNlIGV4dGVuZHMgUGVyc29uIHtcclxuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwi5YO15bC4aWRcIiB9KVxyXG4gICAgem9tYmllSWQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuUHJlZmFiLCB0b29sdGlwOiBcIuWtkOW8uemihOWItuS9k1wiLCB2aXNpYmxlKCkgeyByZXR1cm4gWzUsIDYsIDgsOSwxMCwxMSwxMiwxMywxNywxOCwgMjBdLmluY2x1ZGVzKHRoaXMuem9tYmllSWQpIH0gfSlcclxuICAgIGJ1bGxldF9wcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBzcC5Ta2VsZXRvbiwgdG9vbHRpcDogXCLorablkYrlnIhcIiwgdmlzaWJsZSgpIHsgcmV0dXJuIFs1LCA2LCAyMF0uaW5jbHVkZXModGhpcy56b21iaWVJZCkgfSB9KVxyXG4gICAgc3BfaG9uZ3poYXF1YW46IHNwLlNrZWxldG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAsIHRvb2x0aXA6IFwi5pS75Ye76Z+z5pWIMVwiIH0pXHJcbiAgICBhdWRpb19hdHRhY2sxOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwLCB0b29sdGlwOiBcIuaUu+WHu+mfs+aViDJcIiB9KVxyXG4gICAgYXVkaW9fYXR0YWNrMjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCwgdG9vbHRpcDogXCLlj5fkvKTpn7PmlYhcIiB9KVxyXG4gICAgYXVkaW9faGFydDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCwgdG9vbHRpcDogXCLmrbvkuqHpn7PmlYhcIiB9KVxyXG4gICAgYXVkaW9fZGllOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIGlzQm9zczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGlzRWxpdGUgOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY3JlYXRlU2hvdE51bSA6IG51bWJlciA9IDM7XHJcblxyXG4gICAgcmVpbk51bSA6IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9hbmlMYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgcmVpbkxhYmVsIDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgX3NwQW5pOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlkID0gOTQ7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW6YWN572u6KGo5bGe5oCnXHJcbiAgICAgICAgaWYgKEdhbWVEYXRlLlpvbWJpZU1lc3NbdGhpcy56b21iaWVJZF0pIHtcclxuICAgICAgICAgICAgdGhpcy50b3RsZUhwID0gR2FtZURhdGUuWm9tYmllTWVzc1t0aGlzLnpvbWJpZUlkXS5ocDtcclxuICAgICAgICAgICAgdGhpcy5hdGtOdW0gPSBHYW1lRGF0ZS5ab21iaWVNZXNzW3RoaXMuem9tYmllSWRdLmF0aztcclxuICAgICAgICAgICAgdGhpcy5hdGtSYW5nZSA9IEdhbWVEYXRlLlpvbWJpZU1lc3NbdGhpcy56b21iaWVJZF0uYXRrUmFuZ2U7XHJcbiAgICAgICAgICAgIHRoaXMuTW92ZVNwZWVkID0gR2FtZURhdGUuWm9tYmllTWVzc1t0aGlzLnpvbWJpZUlkXS5zcGVlZDtcclxuICAgICAgICAgICAgaWYgKFBsYXRVdGlscy5Jc09QUE8pIHsgdGhpcy5Nb3ZlU3BlZWQgLz0gMjsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlpKflsI/nvKnmlL5cclxuICAgICAgICBpZiAodGhpcy5pc0Jvc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAwLjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWImuS9k1xyXG4gICAgICAgIHRoaXMucmlnID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICh0aGlzLnJpZykgeyB0aGlzLnJpZy5saW5lYXJEYW1waW5nID0gMC4yOyB9XHJcbiAgICAgICAgLy8gc3BpbmXliqjnlLtcclxuICAgICAgICB0aGlzLl9hbmlMYXllciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImFuaUxheWVyXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLl9hbmlMYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLl9zcEFuaSA9IHRoaXMuX2FuaUxheWVyLmdldENoaWxkQnlOYW1lKFwiYW5pXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOebkeWQrOWKqOeUu1xyXG4gICAgICAgIGlmICh0aGlzLl9zcEFuaSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zcEFuaS5zZXRTdGFydExpc3RlbmVyKCgpID0+IHsgdGhpcy5zdGFydExpc3RlbmVyQ2FsbCgpIH0pO1xyXG4gICAgICAgICAgICB0aGlzLl9zcEFuaS5zZXRDb21wbGV0ZUxpc3RlbmVyKCgpID0+IHsgdGhpcy5lbmRMaXN0ZW5lckNhbGwoKSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVpbkxhYmVsID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicmVpblNwXCIpLmdldENoaWxkQnlOYW1lKFwicmVpbkxhYmVsXCIpO1xyXG4gICAgICAgIGlmKGNvY29zei5nYW1lTW9kZSA9PSA2KXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicmVpblNwXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnJlaW5MYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMucmVpbk51bS50b1N0cmluZygpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyZWluU3BcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8g5Y+W5raI55uR5ZCsXHJcbiAgICAgICAgY2MuZ2FtZS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQgeyB9XHJcblxyXG4gICAgaW5pdE5vZGUoKSB7XHJcbiAgICAgICAgZ2FtZU1nciAmJiBnYW1lTWdyLnNldE1hcFRzLmNoZWNrTm9kZSh0aGlzLm5vZGUsIHRydWUpO1xyXG4gICAgICAgIC8vIOa2iOaBr+ebkeWQrFxyXG4gICAgICAgIGNjLmdhbWUub24oQ29uc3RhbnQuRV9HQU1FX0xPR0lDLCB0aGlzLl9vbkdhbWVNZXNzYWdlSGFuZGxlciwgdGhpcyk7XHJcbiAgICAgICAgZ2FtZU1nci56b21iaWVDdXJOdW0rKztcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gWmluZGV4TGF5ZXIuemluZGV4X3pvbWJpZSArIHRoaXMuem9tYmllSWQ7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgdGhpcy5hdGtEaXIgPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgdGhpcy5jdXJIcCA9IHRoaXMudG90bGVIcDtcclxuICAgICAgICB0aGlzLmlzRGVhdGggPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzQXRrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fY2FuQXRrID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhbk1vdmVEaXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2FuTW92ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIOaSreaUvuWHuuWcuuWKqOeUu1xyXG4gICAgICAgIGlmICh0aGlzLl9zcEFuaSAmJiB0aGlzLl9zcEFuaS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NwQW5pLm5vZGUuc2NhbGVYID0gTWF0aC5hYnModGhpcy5fc3BBbmkubm9kZS5zY2FsZVgpO1xyXG4gICAgICAgICAgICB0aGlzLl9zcEFuaS5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuX3NwQW5pLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNCb3NzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zcEFuaS5zZXRBbmltYXRpb24oMCwgXCJzcGF3blwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g56Kw5pKe5L2TXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJveENvbGxpZGVyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJveENvbGxpZGVyKSBib3hDb2xsaWRlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zcEFuaS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy8g56Kw5pKe5L2TXHJcbiAgICAgICAgICAgICAgICBsZXQgYm94Q29sbGlkZXIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKTtcclxuICAgICAgICAgICAgICAgIGlmIChib3hDb2xsaWRlcikgYm94Q29sbGlkZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6L2w54K45ZyIXHJcbiAgICAgICAgaWYgKHRoaXMuc3BfaG9uZ3poYXF1YW4pIHtcclxuICAgICAgICAgICAgdGhpcy5zcF9ob25nemhhcXVhbi5ub2RlLnNldFBhcmVudCh0aGlzLm5vZGUucGFyZW50KTtcclxuICAgICAgICAgICAgdGhpcy5zcF9ob25nemhhcXVhbi5ub2RlLnpJbmRleCA9IFppbmRleExheWVyLnppbmVkeF9mbG9vclRpcDtcclxuICAgICAgICAgICAgdGhpcy5zcF9ob25nemhhcXVhbi5zZXRDb21wbGV0ZUxpc3RlbmVyKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwX2hvbmd6aGFxdWFuICYmIHRoaXMuc3BfaG9uZ3poYXF1YW4uaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BfaG9uZ3poYXF1YW4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYm9zc1xyXG4gICAgICAgIGlmICh0aGlzLmlzQm9zcykge1xyXG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9HQU1FX0xPR0lDLCB7IHR5cGU6IENvbnN0YW50LkVfQ29tbW9uem9tYmllX0Rlc3RvcnkgfSk7XHJcbiAgICAgICAgICAgIGdhbWVNZ3IgJiYgZ2FtZU1nci5zaG93Qm9zc0hwKDEpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm9vc1wiKSkgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm9vc1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoY29jb3N6LmdhbWVNb2RlID09IDYpe1xyXG4gICAgICAgICAgICB0aGlzLnRvdGxlSHAgPSB0aGlzLnJlaW5OdW0gKiAwLjIgKiBHYW1lRGF0ZS5ab21iaWVNZXNzW3RoaXMuem9tYmllSWRdLmhwICsgR2FtZURhdGUuWm9tYmllTWVzc1t0aGlzLnpvbWJpZUlkXS5ocDtcclxuICAgICAgICAgICAgdGhpcy5hdGtSYW5nZSA9IHRoaXMucmVpbk51bSAqIDAuMDIgKiBHYW1lRGF0ZS5ab21iaWVNZXNzW3RoaXMuem9tYmllSWRdLmF0a1JhbmdlICsgR2FtZURhdGUuWm9tYmllTWVzc1t0aGlzLnpvbWJpZUlkXS5hdGtSYW5nZTtcclxuICAgICAgICAgICAgdGhpcy5Nb3ZlU3BlZWQgPSB0aGlzLnJlaW5OdW0gKiAwLjA4ICogR2FtZURhdGUuWm9tYmllTWVzc1t0aGlzLnpvbWJpZUlkXS5zcGVlZCArIEdhbWVEYXRlLlpvbWJpZU1lc3NbdGhpcy56b21iaWVJZF0uc3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMucmVpbkxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5yZWluTnVtLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJlaW5TcFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicmVpblNwXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdXROb2RlUG9vbCAoKSB7XHJcbiAgICAgICAgLy8g5Y+W5raI55uR5ZCsXHJcbiAgICAgICAgY2MuZ2FtZS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgLy8gYm9zc1xyXG4gICAgICAgIGlmICh0aGlzLmlzQm9zcykge1xyXG4gICAgICAgICAgICAvLyBib3Nz5YWJ5b2xXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib29zXCIpKSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib29zXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBib3Nz6L6555WMXHJcbiAgICAgICAgICAgIGlmIChnYW1lTWdyKSB7XHJcbiAgICAgICAgICAgICAgICBnYW1lTWdyICYmIGdhbWVNZ3Iuc2hvd0Jvc3NIcCgwKTtcclxuICAgICAgICAgICAgICAgIGlmIChnYW1lTWdyLmJvc3NfYm9yZGVyICYmIGNjLmlzVmFsaWQoZ2FtZU1nci5ib3NzX2JvcmRlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLmJvc3NfYm9yZGVyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLmJvc3NfYm9yZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzQm9zcyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDovbDngrjlnIhcclxuICAgICAgICBpZiAodGhpcy5zcF9ob25nemhhcXVhbiAmJiB0aGlzLnNwX2hvbmd6aGFxdWFuLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zcF9ob25nemhhcXVhbi5ub2RlLnNldFBhcmVudCh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNwX2hvbmd6aGFxdWFuLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdhbWVNZ3Iuem9tYmllQ3VyTnVtLS07XHJcbiAgICAgICAgZ2FtZU1nciAmJiBnYW1lTWdyLmlzVmFsaWQgJiYgZ2FtZU1nci5ub2RlUHV0KHRoaXMubm9kZS5uYW1lLCB0aGlzLm5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0TGlzdGVuZXJDYWxsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zcEFuaS5hbmltYXRpb24uaW5jbHVkZXMoXCJzcGF3blwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zcEFuaS50aW1lU2NhbGUgPSAwLjQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5fc3BBbmkudGltZVNjYWxlID0gMTsgfSwgMSlcclxuICAgICAgICAgICAgdGhpcy5jYW5Nb3ZlRGlyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIOWHuuWcuuaWueWQkVxyXG4gICAgICAgICAgICBsZXQgZnJvbVBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBsZXQgdG9Qb3MgPSBnYW1lTWdyLnBsYXllclRzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgbGV0IGRpdiA9IHRvUG9zLnN1YlNlbGYoZnJvbVBvcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NwQW5pLm5vZGUuc2NhbGVYID0gKGRpdi54ID4gMCA/IDEgOiAtMSkgKiBNYXRoLmFicyh0aGlzLl9zcEFuaS5ub2RlLnNjYWxlWCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3NwQW5pLmFuaW1hdGlvbi5pbmNsdWRlcyhcImF0dGFja1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQXRrID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jYW5Nb3ZlRGlyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChbOCwgOSwgMThdLmluY2x1ZGVzKHRoaXMuem9tYmllSWQpICYmIHRoaXMuX3NwQW5pLmFuaW1hdGlvbiA9PSBcImF0dGFjazJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFJhdGUgKj0gMi41O1xyXG4gICAgICAgICAgICAgICAgdGhpcy51ZHBhdGVSQm9keSh0aGlzLm1vdmVEaXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRSYXRlIC89IDIuNTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIgPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51ZHBhdGVSQm9keSh0aGlzLm1vdmVEaXIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMC4yKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFsxMCwgMTEsIDEyLCAxM10uaW5jbHVkZXModGhpcy56b21iaWVJZCkgJiYgdGhpcy5fc3BBbmkuYW5pbWF0aW9uID09IFwiYXR0YWNrMlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkUmF0ZSAqPSAzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51ZHBhdGVSQm9keSh0aGlzLm1vdmVEaXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRSYXRlIC89IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWRwYXRlUkJvZHkodGhpcy5tb3ZlRGlyKTtcclxuICAgICAgICAgICAgICAgIH0sIDAuMilcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChbMTQsIDE5XS5pbmNsdWRlcyh0aGlzLnpvbWJpZUlkKSAmJiB0aGlzLl9zcEFuaS5hbmltYXRpb24uaW5jbHVkZXMoXCJhdHRhY2tcIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRSYXRlICo9IDM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVkcGF0ZVJCb2R5KHRoaXMubW92ZURpcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFJhdGUgLz0gMztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIgPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51ZHBhdGVSQm9keSh0aGlzLm1vdmVEaXIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMC4yKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuem9tYmllSWQgPT0gMTUgJiYgdGhpcy5fc3BBbmkuYW5pbWF0aW9uID09IFwiYXR0YWNrXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRSYXRlICo9IDM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVkcGF0ZVJCb2R5KHRoaXMubW92ZURpcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFJhdGUgLz0gMztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIgPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51ZHBhdGVSQm9keSh0aGlzLm1vdmVEaXIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMC40KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuem9tYmllSWQgPT0gMTYgJiYgdGhpcy5fc3BBbmkuYW5pbWF0aW9uID09IFwiYXR0YWNrXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRSYXRlICo9IDI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVkcGF0ZVJCb2R5KHRoaXMubW92ZURpcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZFJhdGUgLz0gMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIgPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51ZHBhdGVSQm9keSh0aGlzLm1vdmVEaXIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMC4zKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuem9tYmllSWQgPT0gMTcgJiYgdGhpcy5fc3BBbmkuYW5pbWF0aW9uLmluY2x1ZGVzKFwiYXR0YWNrXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkUmF0ZSAqPSAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51ZHBhdGVSQm9keSh0aGlzLm1vdmVEaXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRSYXRlIC89IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWRwYXRlUkJvZHkodGhpcy5tb3ZlRGlyKTtcclxuICAgICAgICAgICAgICAgIH0sIDAuMylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZURpciA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICAgICAgICAgIHRoaXMudWRwYXRlUkJvZHkodGhpcy5tb3ZlRGlyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zcEFuaS5hbmltYXRpb24uaW5jbHVkZXMoXCJqdW1wX3VwXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuTW92ZURpciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbmRMaXN0ZW5lckNhbGwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NwQW5pLmFuaW1hdGlvbi5pbmNsdWRlcyhcInNwYXduXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NwQW5pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuTW92ZURpciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBlcnNvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnVkcGF0ZVJCb2R5KHRoaXMubW92ZURpcik7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zcEFuaS5hbmltYXRpb24uaW5jbHVkZXMoXCJhdHRhY2tcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3BBbmkuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5pc0F0ayA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNhbk1vdmVEaXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQZXJzb24oKTtcclxuICAgICAgICAgICAgdGhpcy51ZHBhdGVSQm9keSh0aGlzLm1vdmVEaXIpO1xyXG4gICAgICAgICAgICB0aGlzLmF0a0RpciA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3NwQW5pLmFuaW1hdGlvbi5pbmNsdWRlcyhcImp1bXBfZG93blwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zcEFuaS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbk1vdmVEaXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVEaXIgPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgICAgIHRoaXMudWRwYXRlUkJvZHkodGhpcy5tb3ZlRGlyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOa2iOaBryAqL1xyXG4gICAgcHJpdmF0ZSBfb25HYW1lTWVzc2FnZUhhbmRsZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xyXG4gICAgICAgICAgICAvLyDmuIXpmaTmiYDmnInlg7XlsLhcclxuICAgICAgICAgICAgY2FzZSBDb25zdGFudC5FX0FsbHpvbWJpZV9EZXN0b3J5OiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhcnQoMjUwLCBudWxsLCBudWxsLCB0cnVlLCB0cnVlLCBjYy5Db2xvci5XSElURSwgdHJ1ZSx0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGJvc3Plh7rnjrDmuIXpmaTmma7pgJrlg7XlsLhcclxuICAgICAgICAgICAgY2FzZSBDb25zdGFudC5FX0NvbW1vbnpvbWJpZV9EZXN0b3J5OiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNCb3NzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjMsIHsgb3BhY2l0eTogMSB9LCB7IGVhc2luZzogXCJmYWRlXCIgfSkuY2FsbCgoKSA9PiB7IHRoaXMucHV0Tm9kZVBvb2woKTsgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2RpdlRvUGxheWVyOiBjYy5WZWMyID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgcHJvdGVjdGVkIF90aW1lOiBudW1iZXIgPSAtMTtcclxuICAgIGxhdGVVcGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVhdGggfHwgY29jb3N6LmlzUGF1c2UgfHwgIWdhbWVNZ3IuaXNHYW1lU3RhcnQgfHwgZ2FtZU1nci5pc1dpbiB8fCBnYW1lTWdyLmlzRmFpbCkge1xyXG4gICAgICAgICAgICB0aGlzLnVkcGF0ZVJCb2R5KGNjLlZlYzIuWkVSTyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdGltZSsrO1xyXG4gICAgICAgIGlmICh0aGlzLl90aW1lICUgMTUgPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdGltZSAlIDMwID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGl2KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUF0aygpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFuaSgpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBlcnNvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnVkcGF0ZVJCb2R5KHRoaXMubW92ZURpcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZURpdigpIHtcclxuICAgICAgICBsZXQgZnJvbVBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGxldCB0b1BvcyA9IGdhbWVNZ3IucGxheWVyVHMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuX2RpdlRvUGxheWVyID0gdG9Qb3Muc3ViU2VsZihmcm9tUG9zKTtcclxuICAgICAgICAvLyDotoXlh7rlsY/luZXot53nprvliKDpmaRcclxuICAgICAgICBpZiAoIXRoaXMuaXNCb3NzICYmICF0aGlzLmlzRWxpdGUgJiYgY29jb3N6LmdhbWVNb2RlID09IDYgJiYgdGhpcy5fZGl2VG9QbGF5ZXIubWFnKCkgPiBjYy53aW5TaXplLmhlaWdodCAvIDIgLyBnYW1lTWdyLm1haW5DYW1lcmEuem9vbVJhdGlvKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHV0Tm9kZVBvb2woKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOabtOaWsOenu+WKqCAqL1xyXG4gICAgdXBkYXRlTW92ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5yaWcudHlwZSA9PSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FuTW92ZSAmJiB0aGlzLmNhbk1vdmVEaXIpIHtcclxuICAgICAgICAgICAgICAgIC8vIOacieebruagh1xyXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVNZ3IucGxheWVyVHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDnjqnlrrblrZjmtLtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdhbWVNZ3IucGxheWVyVHMuaXNEZWF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDot7Pot4NcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuem9tYmllSWQgPT0gMyAmJiBNYXRoLnJhbmRvbSgpIDwgMC4yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3NwQW5pLmFuaW1hdGlvbi5pbmNsdWRlcyhcImp1bXBcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcEFuaS5zZXRBbmltYXRpb24oMCwgXCJqdW1wX3VwXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcEFuaS5hZGRBbmltYXRpb24oMCwgXCJqdW1wX2Rvd25cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURpciA9IHRoaXMuX2RpdlRvUGxheWVyLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOacneedgOeOqeWutuenu+WKqFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9kaXZUb1BsYXllci5tYWcoKSA+PSB0aGlzLmF0a1JhbmdlICogMC44KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIgPSBjYy52Mih0aGlzLl9kaXZUb1BsYXllci5ub3JtYWxpemUoKSkucm90YXRlU2VsZihNYXRoLlBJIC8gMiAqICgwLjUgLSBNYXRoLnJhbmRvbSgpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6Led56a7546p5a625b6I6L+R77yM5YGc5q2i56e75YqoIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURpciA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyDnjqnlrrbmrbvkuqFcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6Led56a75b6I6L+R5YiZ6L+c56a7546p5a62XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kaXZUb1BsYXllci5tYWcoKSA8ICh0aGlzLmlzQm9zcyA/IDgwMCA6IDE1MDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIgPSB0aGlzLl9kaXZUb1BsYXllci5ub3JtYWxpemUoKS5uZWdTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6ZqP5py656e75YqoIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURpciA9IGNjLnYyKHRoaXMuX2RpdlRvUGxheWVyLm5vcm1hbGl6ZSgpKS5yb3RhdGVTZWxmKDIgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOabtOaWsOaUu+WHuyAqL1xyXG4gICAgdXBkYXRlQXRrKCkge1xyXG4gICAgICAgIC8vIOiDveWQpuaUu+WHu+aUu+WHu1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5BdGsoKSkge1xyXG4gICAgICAgICAgICAvLyAuLi5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5paw55qE5pS75Ye7XHJcbiAgICAgICAgZWxzZSBpZiAoZ2FtZU1nci5wbGF5ZXJUcyAmJiAhZ2FtZU1nci5wbGF5ZXJUcy5pc0RlYXRoKSB7XHJcbiAgICAgICAgICAgIC8vIOaZrumAmui3neemu+aUu+WHu1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZGl2VG9QbGF5ZXIubWFnKCkgPCB0aGlzLmF0a1JhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0a0RpciA9IHRoaXMuX2RpdlRvUGxheWVyLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdGsoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDov5zot53nprvmlLvlh7tcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuem9tYmllSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxODoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGl2VG9QbGF5ZXIubWFnKCkgPCA2MDAgJiYgTWF0aC5yYW5kb20oKSA8IDAuMSAqICh0aGlzLmlzQm9zcyA/IDIgOiAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGtEaXIgPSB0aGlzLl9kaXZUb1BsYXllci5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURpciA9IHRoaXMuX2RpdlRvUGxheWVyLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGsoXCJhdHRhY2syXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5fZGl2VG9QbGF5ZXIubWFnKCkgPiA4MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXRrRGlyID0gdGhpcy5fZGl2VG9QbGF5ZXIubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIgPSB0aGlzLl9kaXZUb1BsYXllci5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuSFAgPD0gdGhpcy50b3RsZUhwIC8gMil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGsoXCJzaG9vdFwiLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGsoXCJzaG9vdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTY6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGl2VG9QbGF5ZXIubWFnKCkgPCA4MDAgJiYgTWF0aC5yYW5kb20oKSA8IDAuMSAqICh0aGlzLmlzQm9zcyA/IDIgOiAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGtEaXIgPSB0aGlzLl9kaXZUb1BsYXllci5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURpciA9IHRoaXMuX2RpdlRvUGxheWVyLm5vcm1hbGl6ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0ayhcImF0dGFja1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGl2VG9QbGF5ZXIubWFnKCkgPCA4MDAgJiYgTWF0aC5yYW5kb20oKSA8IDAuMSAqICh0aGlzLmlzQm9zcyA/IDIgOiAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGtEaXIgPSB0aGlzLl9kaXZUb1BsYXllci5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURpciA9IHRoaXMuX2RpdlRvUGxheWVyLm5vcm1hbGl6ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0ayhcImF0dGFja1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGl2VG9QbGF5ZXIubWFnKCkgPCA2MDAgJiYgTWF0aC5yYW5kb20oKSA8IDAuMSAqICh0aGlzLmlzQm9zcyA/IDIgOiAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGtEaXIgPSB0aGlzLl9kaXZUb1BsYXllci5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURpciA9IHRoaXMuX2RpdlRvUGxheWVyLm5vcm1hbGl6ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0ayhcImF0dGFja1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGl2VG9QbGF5ZXIubWFnKCkgPCA2MDAgJiYgTWF0aC5yYW5kb20oKSA8IDAuMTUgKiAodGhpcy5pc0Jvc3MgPyAyIDogMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXRrRGlyID0gdGhpcy5fZGl2VG9QbGF5ZXIubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIgPSB0aGlzLl9kaXZUb1BsYXllci5ub3JtYWxpemUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGsoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5fZGl2VG9QbGF5ZXIubWFnKCkgPiA4MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXRrRGlyID0gdGhpcy5fZGl2VG9QbGF5ZXIubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIgPSB0aGlzLl9kaXZUb1BsYXllci5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuSFAgPD0gdGhpcy50b3RsZUhwIC8gMil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGsoXCJzaG90XCIsdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0ayhcInNob3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGl2VG9QbGF5ZXIubWFnKCkgPCA2MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC4xNSAqICh0aGlzLmlzQm9zcyA/IDIgOiAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXRrRGlyID0gdGhpcy5fZGl2VG9QbGF5ZXIubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyID0gdGhpcy5fZGl2VG9QbGF5ZXIubm9ybWFsaXplKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0ayhcImF0dGFja1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNwX2hvbmd6aGFxdWFuLmlzVmFsaWQgJiYgIXRoaXMuc3BfaG9uZ3poYXF1YW4ubm9kZS5hY3RpdmUgJiYgdGhpcy5fZGl2VG9QbGF5ZXIubWFnKCkgPiA4MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXRrKFwiYnVsbGV0X2NodWlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmF0a0RpciA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOabtOaWsOWKqOeUuyAqL1xyXG4gICAgdXBkYXRlQW5pKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVhdGggPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgLy8g5pqC5YGcXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zcEFuaS50aW1lU2NhbGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gLi4uYVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOWHuuWculxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zcEFuaS5hbmltYXRpb24uaW5jbHVkZXMoXCJzcGF3blwiKSkgeyB9XHJcbiAgICAgICAgICAgIC8vIOaUu+WHu1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zcEFuaS5hbmltYXRpb24uaW5jbHVkZXMoXCJhdHRhY2tcIikpIHsgfVxyXG4gICAgICAgICAgICAvLyDot7Pot4NcclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3BBbmkuYW5pbWF0aW9uLmluY2x1ZGVzKFwianVtcFwiKSkgeyB9XHJcbiAgICAgICAgICAgIC8vIOWFtuWug1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOenu+WKqFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW92ZURpciAmJiB0aGlzLm1vdmVEaXIubWFnKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy56b21iaWVJZCA9PSAxNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5fc3BBbmkuYW5pbWF0aW9uLmluY2x1ZGVzKFwid2luZ1wiKSAmJiB0aGlzLl9zcEFuaS5zZXRBbmltYXRpb24oMCwgXCJ3aW5nXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9zcEFuaS5hbmltYXRpb24uaW5jbHVkZXMoXCJydW5cIikgJiYgdGhpcy5fc3BBbmkuc2V0QW5pbWF0aW9uKDAsIFwicnVuXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIOW+heaculxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuX3NwQW5pLmFuaW1hdGlvbi5pbmNsdWRlcyhcImlkbGVcIikgJiYgdGhpcy5fc3BBbmkuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmrbvkuqFcclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zcEFuaSAmJiB0aGlzLl9zcEFuaS5za2VsZXRvbkRhdGEgJiYgdGhpcy5fc3BBbmkuc2tlbGV0b25EYXRhLnNrZWxldG9uSnNvbi5hbmltYXRpb25zW1wiZGllXCJdKSB7XHJcbiAgICAgICAgICAgICF0aGlzLl9zcEFuaS5hbmltYXRpb24uaW5jbHVkZXMoXCJkaWVcIikgJiYgdGhpcy5fc3BBbmkuc2V0QW5pbWF0aW9uKDAsIFwiZGllXCIsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBlcnNvbigpIHtcclxuICAgICAgICBsZXQgZGlyID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5hdGtEaXIgJiYgdGhpcy5hdGtEaXIubWFnKCkpIHtcclxuICAgICAgICAgICAgZGlyID0gdGhpcy5hdGtEaXI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmVEaXIgJiYgdGhpcy5tb3ZlRGlyLm1hZygpKSB7XHJcbiAgICAgICAgICAgIGRpciA9IHRoaXMubW92ZURpcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Yqo55S75pa55ZCRXHJcbiAgICAgICAgaWYgKGRpcikge1xyXG4gICAgICAgICAgICB0aGlzLl9zcEFuaS5ub2RlLnNjYWxlWCA9IE1hdGguYWJzKHRoaXMuX3NwQW5pLm5vZGUuc2NhbGVYKSAqIChkaXIueCA+IDAgPyAxIDogLTEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yia5L2T56e75YqoICovXHJcbiAgICB1ZHBhdGVSQm9keShkaXI6IGNjLlZlYzIsIGlzTXVzdDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmlnLnR5cGUgPT0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbk1vdmUgfHwgaXNNdXN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlyICYmICFkaXIuZXF1YWxzKGNjLlZlYzIuWkVSTykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZy5saW5lYXJWZWxvY2l0eSA9IGRpci5tdWwoTWF0aC5mbG9vcih0aGlzLk1vdmVTcGVlZCAqIHRoaXMuc3BlZWRSYXRlICogKDEgLSAwLjIgKiBNYXRoLnJhbmRvbSgpKSkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZy5saW5lYXJWZWxvY2l0eSA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5pS75Ye7ICovXHJcbiAgICBhdGsoYW5pTmFtZTogc3RyaW5nID0gXCJcIixpc1JhZ2U6Ym9vbGVhbj1mYWxzZSkge1xyXG4gICAgICAgIGxldCBhdGtUeXBlOiBBdGtUeXBlID0gQXRrVHlwZS5mcm9udDtcclxuICAgICAgICBsZXQgYXRrUmFuZ2U6IG51bWJlciA9IHRoaXMuYXRrUmFuZ2U7XHJcbiAgICAgICAgbGV0IGF0a1RpbWU6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGJ1bGxldFRpbWU6IG51bWJlciA9IDI7XHJcbiAgICAgICAgbGV0IGNsaXA6IGNjLkF1ZGlvQ2xpcCA9IHRoaXMuYXVkaW9fYXR0YWNrMTtcclxuICAgICAgICBsZXQgYnVsbGV0Rmx5U3BlZWQgOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBidWxsZXROdW0gOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCB0aW1lTnVtIDogbnVtYmVyID0gMTtcclxuXHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBsZXQgc2hvb3RTZXRGdW5jIDogRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGFuaU5hbWUgPSBcImF0dGFja1wiO1xyXG4gICAgICAgICAgICBhdGtUeXBlID0gQXRrVHlwZS5zaG9vdDtcclxuICAgICAgICAgICAgYnVsbGV0Rmx5U3BlZWQgPSAxMjAwO1xyXG4gICAgICAgICAgICBpZihpc1JhZ2Upe1xyXG4gICAgICAgICAgICAgICAgdGltZU51bSA9IDM7XHJcbiAgICAgICAgICAgICAgICBidWxsZXROdW0gPSAoKHNlbGYuem9tYmllSWQgLSA3KSAvIDIpICsgMTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aW1lTnVtID0gMTtcclxuICAgICAgICAgICAgICAgIGJ1bGxldE51bSA9ICgoc2VsZi56b21iaWVJZCAtIDcpIC8gMikgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZWxmLl9jYW5BdGsgPSBmYWxzZTtcclxuICAgICAgICAgICAgYXRrVGltZSA9IDM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuem9tYmllSWQpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICBjYXNlIDE6IHtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pTmFtZSA9IFwiYXR0YWNrXCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaU5hbWUgPSBcImF0dGFjazJcIjtcclxuICAgICAgICAgICAgICAgICAgICBjbGlwID0gdGhpcy5hdWRpb19hdHRhY2syO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXRrVGltZSA9IDAuMztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgY2FzZSAzOiB7XHJcbiAgICAgICAgICAgICAgICBhbmlOYW1lID0gXCJhdHRhY2sxXCI7XHJcbiAgICAgICAgICAgICAgICBhdGtUaW1lID0gMC4zO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSA0OiB7XHJcbiAgICAgICAgICAgICAgICBhbmlOYW1lID0gXCJhdHRhY2tcIjtcclxuICAgICAgICAgICAgICAgIGF0a1RpbWUgPSAwLjM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDU6IHtcclxuICAgICAgICAgICAgICAgIGFuaU5hbWUgPSBcImF0dGFja1wiO1xyXG4gICAgICAgICAgICAgICAgYXRrVGltZSA9IDQ7XHJcbiAgICAgICAgICAgICAgICBhdGtUeXBlID0gQXRrVHlwZS5yYW5nZTtcclxuICAgICAgICAgICAgICAgIGJ1bGxldFRpbWUgPSAxLjM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW5BdGsgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgNjoge1xyXG4gICAgICAgICAgICAgICAgYW5pTmFtZSA9IFwiYXR0YWNrXCI7XHJcbiAgICAgICAgICAgICAgICBhdGtUaW1lID0gNDtcclxuICAgICAgICAgICAgICAgIGF0a1R5cGUgPSBBdGtUeXBlLnJhbmdlO1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0VGltZSA9IDAuOTU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW5BdGsgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgNzoge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICBjYXNlIDE4OiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYW5pTmFtZSA9PSBcImF0dGFjazJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaU5hbWUgPSBcImF0dGFjazJcIjtcclxuICAgICAgICAgICAgICAgICAgICBhdGtSYW5nZSA9IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICBhdGtUaW1lID0gMC4zO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1R5cGUgPSBBdGtUeXBlLmFyZWE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcCA9IHRoaXMuYXVkaW9fYXR0YWNrMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoYW5pTmFtZSA9PSAnc2hvb3QnKXtcclxuICAgICAgICAgICAgICAgICAgICBzaG9vdFNldEZ1bmMoKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaU5hbWUgPSBcImF0dGFja1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1JhbmdlID0gMzUwO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1RpbWUgPSAwLjM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDk6IHtcclxuICAgICAgICAgICAgICAgIGlmIChhbmlOYW1lID09IFwiYXR0YWNrMlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pTmFtZSA9IFwiYXR0YWNrMlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1JhbmdlID0gNDUwO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1RpbWUgPSAwLjM7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcCA9IHRoaXMuYXVkaW9fYXR0YWNrMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoYW5pTmFtZSA9PSAnc2hvb3QnKXtcclxuICAgICAgICAgICAgICAgICAgICBzaG9vdFNldEZ1bmMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaU5hbWUgPSBcImF0dGFja1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1JhbmdlID0gMzUwO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1RpbWUgPSAwLjM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDEwOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYW5pTmFtZSA9PSBcImF0dGFjazJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaU5hbWUgPSBcImF0dGFjazJcIjtcclxuICAgICAgICAgICAgICAgICAgICBhdGtSYW5nZSA9IDIwMDtcclxuICAgICAgICAgICAgICAgICAgICBhdGtUaW1lID0gMC4zO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaXAgPSB0aGlzLmF1ZGlvX2F0dGFjazI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGFuaU5hbWUgPT0gJ3Nob290Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvb3RTZXRGdW5jKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmlOYW1lID0gXCJhdHRhY2tcIjtcclxuICAgICAgICAgICAgICAgICAgICBhdGtSYW5nZSA9IDIwMDtcclxuICAgICAgICAgICAgICAgICAgICBhdGtUaW1lID0gMC4zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgY2FzZSAxMzoge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFuaU5hbWUgPT0gXCJhdHRhY2syXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmlOYW1lID0gXCJhdHRhY2syXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrUmFuZ2UgPSAyNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrVGltZSA9IDAuMztcclxuICAgICAgICAgICAgICAgICAgICBjbGlwID0gdGhpcy5hdWRpb19hdHRhY2syO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihhbmlOYW1lID09ICdzaG9vdCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNob290U2V0RnVuYygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pTmFtZSA9IFwiYXR0YWNrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrUmFuZ2UgPSAyNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrVGltZSA9IDAuMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMTQ6XHJcbiAgICAgICAgICAgIGNhc2UgMTk6IHtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC42KSB7Ly/lhrLnm75cclxuICAgICAgICAgICAgICAgICAgICBhbmlOYW1lID0gXCJhdHRhY2tcIjtcclxuICAgICAgICAgICAgICAgICAgICBhdGtSYW5nZSA9IDM1MDtcclxuICAgICAgICAgICAgICAgICAgICBhdGtUaW1lID0gMC4zO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1R5cGUgPSBBdGtUeXBlLmNoYXJnZTtcclxuICAgICAgICAgICAgICAgICAgICBjbGlwID0gdGhpcy5hdWRpb19hdHRhY2sxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pTmFtZSA9IFwiYXR0YWNrMlwiOy8v5oyl5qONXHJcbiAgICAgICAgICAgICAgICAgICAgYXRrUmFuZ2UgPSAzNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrVGltZSA9IDAuMztcclxuICAgICAgICAgICAgICAgICAgICBjbGlwID0gdGhpcy5hdWRpb19hdHRhY2syO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAxNToge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFuaU5hbWUgPT0gXCJhdHRhY2tcIikgey8v5Yay6ZSLXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pTmFtZSA9IFwiYXR0YWNrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrUmFuZ2UgPSAyNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrVGltZSA9IDAuMztcclxuICAgICAgICAgICAgICAgICAgICBhdGtUeXBlID0gQXRrVHlwZS5jaGFyZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmlOYW1lID0gXCJhdHRhY2syXCI7Ly/llrfngatcclxuICAgICAgICAgICAgICAgICAgICBhdGtSYW5nZSA9IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICBhdGtUaW1lID0gMC4zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAxNjoge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFuaU5hbWUgPT0gXCJhdHRhY2tcIiB8fCBNYXRoLnJhbmRvbSgpIDwgMC40KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pTmFtZSA9IFwiYXR0YWNrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrUmFuZ2UgPSA0NTA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrVGltZSA9IDAuMztcclxuICAgICAgICAgICAgICAgICAgICBhdGtUeXBlID0gQXRrVHlwZS5hcmVhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pTmFtZSA9IFwiYXR0YWNrMlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1JhbmdlID0gMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1RpbWUgPSAwLjM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDE3OiB7XHJcbiAgICAgICAgICAgICAgICBpZihhbmlOYW1lID09ICdzaG90Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pTmFtZSA9IFwid2luZzJcIjtcclxuICAgICAgICAgICAgICAgICAgICBhdGtUeXBlID0gQXRrVHlwZS5zaG90O1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldEZseVNwZWVkID0gNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlzUmFnZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVOdW0gPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWxsZXROdW0gPSAxNTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZU51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldE51bSA9IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW5BdGsgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBhdGtUaW1lID0gMztcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaU5hbWUgPSBcImF0dGFja1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdGtSYW5nZSA9IDIwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXRrVGltZSA9IDAuMztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaU5hbWUgPSBcImF0dGFjazJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXRrUmFuZ2UgPSAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0a1RpbWUgPSAwLjM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0a1R5cGUgPSBBdGtUeXBlLmNoYXJnZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAyMDoge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFuaU5hbWUgPT0gXCJidWxsZXRfY2h1aVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRrVHlwZSA9IEF0a1R5cGUucmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pTmFtZSA9IFwiYXR0YWNrMlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldFRpbWUgPSAxLjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhbmlOYW1lID09IFwiYXR0YWNrXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmlOYW1lID0gXCJhdHRhY2tcIjtcclxuICAgICAgICAgICAgICAgICAgICBhdGtSYW5nZSA9IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBhdGtUaW1lID0gMC4zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pTmFtZSA9IFwiYXR0YWNrMlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1JhbmdlID0gMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0a1RpbWUgPSAwLjM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmiafooYzliqjnlLtcclxuICAgICAgICBpZiAoYW5pTmFtZSkgdGhpcy5fc3BBbmkuc2V0QW5pbWF0aW9uKDAsIGFuaU5hbWUsIGZhbHNlKTtcclxuICAgICAgICBpZiAoY2xpcCAmJiBjbGlwLmlzVmFsaWQpIGdhbWVNZ3IucGxheUNsaXAoY2xpcCwgdGhpcy5ub2RlLCAwLjUpO1xyXG4gICAgICAgIC8vIOaUu+WHu+S8pOWus1xyXG4gICAgICAgIGxldCBjYWxsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZU1nci5wbGF5ZXJUcyAmJiAhZ2FtZU1nci5wbGF5ZXJUcy5pc0RlYXRoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZnJvbVBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvUG9zID0gZ2FtZU1nci5wbGF5ZXJUcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGl2ID0gdG9Qb3Muc3ViU2VsZihmcm9tUG9zKTtcclxuICAgICAgICAgICAgICAgIC8vIOWIpOaWreaYr+WQpuWcqOaUu+WHu+iMg+WbtOWSjOaUu+WHu+aWueWQkVxyXG4gICAgICAgICAgICAgICAgaWYgKGRpdi5tYWcoKSA8IGF0a1JhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0a1R5cGUgPT0gQXRrVHlwZS5mcm9udCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGl2Lm1hZygpIDwgMjAwIHx8IChkaXYueCAqIHRoaXMuX3NwQW5pLm5vZGUuc2NhbGUgPiAwICYmIE1hdGguYWJzKGRpdi55IC8gZGl2LngpIDwgMS40KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1nci5wbGF5ZXJUcy5oYXJ0KDEsIHRoaXMubm9kZSwgZGl2Lm5vcm1hbGl6ZVNlbGYoKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGF0a1R5cGUgPT09IEF0a1R5cGUuY2hhcmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheWVyVHMuaGFydCgxLCB0aGlzLm5vZGUsIGRpdi5ub3JtYWxpemVTZWxmKCksIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUoY2FsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1nci5wbGF5ZXJUcy5oYXJ0KDEsIHRoaXMubm9kZSwgZGl2Lm5vcm1hbGl6ZVNlbGYoKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXRrVHlwZSA9PSBBdGtUeXBlLmZyb250IHx8IGF0a1R5cGUgPT0gQXRrVHlwZS5hcmVhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGNhbGwsIGF0a1RpbWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXRrVHlwZSA9PSBBdGtUeXBlLmNoYXJnZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKGNhbGwsIDAsIDE1KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGF0a1R5cGUgPT0gQXRrVHlwZS5yYW5nZSkge1xyXG4gICAgICAgICAgICBsZXQgcG9zX2Zyb20gPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgbGV0IHBvc190byA9IGdhbWVNZ3IucGxheWVyVHMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBsZXQgcDIgPSBjYy52MigocG9zX2Zyb20ueCArIHBvc190by54KSAvIDIsIHBvc19mcm9tLnkgKyAxNTAwKTtcclxuICAgICAgICAgICAgLy8g55Sf5oiQ5a2Q5by5XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1bGxldF9wcmVmYWIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldF9wcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgLy8g5a2Q5by56ISa5pysXHJcbiAgICAgICAgICAgICAgICBsZXQgdHMgPSBidWxsZXQuZ2V0Q29tcG9uZW50KEJ1bGxldCk7XHJcbiAgICAgICAgICAgICAgICB0cy5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgICAgICAgICB0cy5hdGtlciA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIHRzLmF0ayA9IHRoaXMuYXRrTnVtO1xyXG4gICAgICAgICAgICAgICAgdHMuaXNBbmdsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyDlrZDlvLnlsZ7mgKdcclxuICAgICAgICAgICAgICAgIGJ1bGxldC5zZXRQb3NpdGlvbihwb3NfZnJvbSk7XHJcbiAgICAgICAgICAgICAgICBidWxsZXQuekluZGV4ID0gWmluZGV4TGF5ZXIuemluZGV4X2J1bGxldF9za3k7XHJcbiAgICAgICAgICAgICAgICBidWxsZXQucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgICAgIC8vIOWtkOW8ueenu+WKqFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oYnVsbGV0KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6L2w54K46aKE6K2mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwX2hvbmd6aGFxdWFuICYmIHRoaXMuc3BfaG9uZ3poYXF1YW4uaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcF9ob25nemhhcXVhbi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwX2hvbmd6aGFxdWFuLm5vZGUuc2V0UG9zaXRpb24ocG9zX3RvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BfaG9uZ3poYXF1YW4uc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmJlemllclRvKGJ1bGxldFRpbWUsIHBvc19mcm9tLCBwMiwgcG9zX3RvKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g55Sf5oiQ54iG54K45a2Q5by5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cy5ib29tRWZmZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYm9vbSA9IGNjLmluc3RhbnRpYXRlKHRzLmJvb21FZmZlY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib29tLnBhcmVudCA9IHRzLm5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9vbS5zZXRQb3NpdGlvbih0cy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1ckJ1bGxldCA9IGJvb20uZ2V0Q29tcG9uZW50KEJ1bGxldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJCdWxsZXQuYXRrID0gdHMuYXRrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyQnVsbGV0LmF0a2VyID0gdHMuYXRrZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJCdWxsZXQuaWQgPSB0cy5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheUVmZmVjdChcImV4cGxvXCIsIGJvb20pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRzLmhpdEVmZmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSBidWxsZXQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRzLmhpdEVmZmVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBidWxsZXQucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnpJbmRleCA9IFppbmRleExheWVyLnppbmRleF9lZmZlY3RfaGl0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5fY2FuQXRrID0gdHJ1ZTsgfSwgYXRrVGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGF0a1R5cGUgPT0gQXRrVHlwZS5zaG90KSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfov5vlhaXmlaPlvLnlsITlh7vmqKHlvI8hISEhJyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1bGxldF9wcmVmYWIpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lcyA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3JlYXRlRnVuYyA6IEZ1bmN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGltZXMgPj0gMTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5pqC5YGc6K6h5pe25ZmoJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudW5zY2hlZHVsZShjcmVhdGVGdW5jKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fY2FuQXRrID0gdHJ1ZTsgXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGltZXMgPD0gdGltZU51bSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY3JlYXRlU2hvdEJ1bGxldChidWxsZXROdW0sYnVsbGV0Rmx5U3BlZWQsdGltZXMgKiAxNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShjcmVhdGVGdW5jLCAwLjMgLCAxMCAsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhdGtUeXBlID09IEF0a1R5cGUuc2hvb3QpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+i/m+WFpeWNleWPkeWwhOWHu+aooeW8jyEhISEnKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYnVsbGV0X3ByZWZhYikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZyb21Qb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGxldCB0b1BvcyA9IGdhbWVNZ3IucGxheWVyVHMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpciA6IGNjLlZlYzIgPSBjYy52Mih0b1Bvcy5zdWIoZnJvbVBvcykubm9ybWFsaXplKCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVzID0gMDtcclxuICAgICAgICAgICAgICAgIGxldCBjcmVhdGVTaG9vdEZ1bmMgOiBGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lcysrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRpbWVzID49IDEwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+aaguWBnOiuoeaXtuWZqCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVuc2NoZWR1bGUoY3JlYXRlU2hvb3RGdW5jKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fY2FuQXRrID0gdHJ1ZTsgXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGltZXMgPD0gdGltZU51bSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidWxsZXROdW0gPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1bGxldE51bTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpck51bSA9IE1hdGgucG93KCh0aW1lcyAtIDIpLDIpICsgKHBhcnNlSW50KCgodGltZXMgLSAxKSAvIDIpLnRvU3RyaW5nKCkpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gKChidWxsZXROdW0gLSAxKSAvIDIgLSBpKSAqIDE1ICsgZGlyTnVtICogMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld19kaXI6IGNjLlZlYzIgPSBkaXIucm90YXRlKGNjLm1pc2MuZGVncmVlc1RvUmFkaWFucyhhbmdsZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY3JlYXRlQnVsbGV0KG5ld19kaXIsYnVsbGV0Rmx5U3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jcmVhdGVCdWxsZXQoZGlyLGJ1bGxldEZseVNwZWVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoY3JlYXRlU2hvb3RGdW5jLCAwLjMgLCAxMCAsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJ1bGxldCAoZGlyOiBjYy5WZWMyLGJ1bGxldEZseVNwZWVkKSB7XHJcbiAgICAgICAgbGV0IGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0X3ByZWZhYik7XHJcbiAgICAgICAgbGV0IHRzID0gYnVsbGV0LmdldENvbXBvbmVudChCdWxsZXQpO1xyXG4gICAgICAgIHRzLmlkID0gdGhpcy5pZDtcclxuICAgICAgICB0cy5hdGtlciA9IHRoaXMubm9kZTtcclxuICAgICAgICB0cy5hdGsgPSAxO1xyXG5cclxuICAgICAgICBsZXQgc3RyaWtOb2RlID0gYnVsbGV0LmdldENoaWxkQnlOYW1lKCdOZXcgTm9kZScpO1xyXG4gICAgICAgIHN0cmlrTm9kZS53aWR0aCA9IDE1MDtcclxuICAgICAgICBidWxsZXQucGFyZW50ID0gZ2FtZU1nci5tYXA7XHJcblxyXG4gICAgICAgIGxldCBmcm9tUG9zID0gZ2FtZU1nci5tYXAuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm9vc1wiKS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKSk7XHJcbiAgICAgICAgLy8gLy8g5a2Q5by55bGe5oCnXHJcbiAgICAgICAgYnVsbGV0LnNldFBvc2l0aW9uKGZyb21Qb3MpXHJcbiAgICAgICAgYnVsbGV0LnpJbmRleCA9IFppbmRleExheWVyLnppbmRleF9idWxsZXRfc2t5O1xyXG5cclxuICAgICAgICBidWxsZXQuYW5nbGUgPSAtY2MudjIoZGlyKS5zaWduQW5nbGUoY2MudjIoMSwgMCkpIC8gTWF0aC5QSSAqIDE4MDtcclxuICAgICAgICBsZXQgcG9zMSA9IGJ1bGxldC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGxldCBwb3MyID0gcG9zMS5hZGQoZGlyLm11bCgyMDAwKSk7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKGJ1bGxldClcclxuICAgICAgICAgICAgLnRvKHBvczIuc3ViKHBvczEpLm1hZygpIC8gYnVsbGV0Rmx5U3BlZWQsIHsgcG9zaXRpb246IGNjLnYzKHBvczIpIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGJ1bGxldC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVNob3RCdWxsZXQgKGJ1bGxldE51bSxidWxsZXRGbHlTcGVlZCxvZmZzZXQpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDw9IGJ1bGxldE51bSA7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9ICgzNjAgLyBidWxsZXROdW0pICogaSArIG9mZnNldDtcclxuICAgICAgICAgICAgbGV0IGRpciA9IGNjLnYyKDEsIDApLnJvdGF0ZShjYy5taXNjLmRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpKTtcclxuICAgICAgICAgICAgbGV0IGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0X3ByZWZhYik7XHJcbiAgICAgICAgICAgIGxldCB0cyA9IGJ1bGxldC5nZXRDb21wb25lbnQoQnVsbGV0KTtcclxuICAgICAgICAgICAgdHMuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgICAgICB0cy5hdGtlciA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgdHMuYXRrID0gMTtcclxuXHJcbiAgICAgICAgICAgIGxldCBzdHJpa05vZGUgPSBidWxsZXQuZ2V0Q2hpbGRCeU5hbWUoJ05ldyBOb2RlJyk7XHJcbiAgICAgICAgICAgIHN0cmlrTm9kZS53aWR0aCA9IDE1MDtcclxuICAgICAgICAgICAgYnVsbGV0LnBhcmVudCA9IGdhbWVNZ3IubWFwO1xyXG4gICAgICAgICAgICBsZXQgZnJvbVBvcyA9IGdhbWVNZ3IubWFwLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJvb3NcIikuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTykpO1xyXG4gICAgICAgICAgICAvLyDlrZDlvLnlsZ7mgKdcclxuICAgICAgICAgICAgYnVsbGV0LnNldFBvc2l0aW9uKGZyb21Qb3MpXHJcbiAgICAgICAgICAgIGJ1bGxldC56SW5kZXggPSBaaW5kZXhMYXllci56aW5kZXhfYnVsbGV0X3NreTtcclxuICAgICAgICAgICAgbGV0IHBvczEgPSBidWxsZXQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgbGV0IHBvczIgPSBwb3MxLmFkZChkaXIubXVsKDIwMDApKTtcclxuICAgICAgICAgICAgYnVsbGV0LmFuZ2xlID0gYW5nbGU7XHJcblxyXG4gICAgICAgICAgICBjYy50d2VlbihidWxsZXQpXHJcbiAgICAgICAgICAgICAgICAudG8ocG9zMi5zdWIocG9zMSkubWFnKCkgLyBidWxsZXRGbHlTcGVlZCwgeyBwb3NpdGlvbjogY2MudjMocG9zMikgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBidWxsZXQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWPl+S8pCAqL1xyXG4gICAgaGFydChhdGtOdW06IG51bWJlciwgZnJvbTogY2MuTm9kZSwgZGlyPzogY2MuVmVjMiwgaXNBdWRpbzogYm9vbGVhbiA9IHRydWUsIGlzRW1pdDogYm9vbGVhbiA9IHRydWUsIGxhYmVsQ29sb3I/OiBjYy5Db2xvciwgaXNNdXN0OiBib29sZWFuID0gZmFsc2UsaXNCb29tOmJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVhdGgpIHJldHVybjtcclxuICAgICAgICBpZiAoaXNNdXN0ID09IGZhbHNlICYmIGNvY29zei5pc1BhdXNlKSByZXR1cm47XHJcbiAgICAgICAgLy8g6Ziy5q2iZGly6L+H5aSnXHJcbiAgICAgICAgaWYgKGRpciAmJiBkaXIubWFnKCkgPiAzKSBkaXIubm9ybWFsaXplU2VsZigpLm11bFNlbGYoMyk7XHJcbiAgICAgICAgLy8g5YeP5LykXHJcbiAgICAgICAgYXRrTnVtID0gKDEgLSB0aGlzLmRhbWFnZVJlZHVjdGlvbikgKiBhdGtOdW07XHJcbiAgICAgICAgLy8g5pWw5a2XXHJcbiAgICAgICAgZ2FtZU1nci5zaG93Um9sZVRpcCh0aGlzLm5vZGUsIE1hdGgubWluKHRoaXMuSFAsIGF0a051bSkudG9GaXhlZCgwKSwgbGFiZWxDb2xvcik7XHJcbiAgICAgICAgLy8g6K6+572u6KGA6YePXHJcbiAgICAgICAgdGhpcy5IUCAtPSBhdGtOdW07XHJcbiAgICAgICAgaWYgKHRoaXMuaXNCb3NzKSB7XHJcbiAgICAgICAgICAgIGdhbWVNZ3IgJiYgZ2FtZU1nci5zaG93Qm9zc0hwKHRoaXMuSFAgLyB0aGlzLnRvdGxlSHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlj5fkvKTmlYjmnpxcclxuICAgICAgICBpZiAoIXRoaXMuaXNBdHRhY2tlZEVmZmVjdCAmJiB0aGlzLl9zcEFuaSAmJiB0aGlzLl9zcEFuaS5ub2RlICYmIHRoaXMuX3NwQW5pLm5vZGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQXR0YWNrZWRFZmZlY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyDlj5fkvKTpn7PmlYhcclxuICAgICAgICAgICAgaWYgKGlzQXVkaW8pIHtcclxuICAgICAgICAgICAgICAgIC8vIOWPl+S8pOmfs+aViFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXVkaW9faGFydCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheUNsaXAodGhpcy5hdWRpb19oYXJ0LCB0aGlzLm5vZGUsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g57yp5pS+XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuX2FuaUxheWVyKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBzY2FsZTogMC43IH0sIHsgZWFzaW5nOiBcInNpbmVJblwiIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcInNpbmVPdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4geyB0aGlzLmlzQXR0YWNrZWRFZmZlY3QgPSBmYWxzZTsgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAvLyDlj5joibJcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbkNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLl9zcEFuaS5ub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgY29sb3I6IG5ldyBjYy5Db2xvcigwLCAwLCAwLCAyNTUpIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBjb2xvcjogY2MuQ29sb3IuV0hJVEUgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlkI7pgIBcclxuICAgICAgICAgICAgaWYgKHRoaXMucmlnLnR5cGUgPT0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljICYmIGRpciAmJiB0aGlzLmNhbk1vdmUgJiYgdGhpcy5jYW5Nb3ZlRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmjqfliLZcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLmNhbk1vdmUgPSB0cnVlOyB9LCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgLy8g5ZCO6YCAXHJcbiAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZGlyLm11bFNlbGYoNDAwICogZGlyLm1hZygpKS5hZGRTZWxmKHRoaXMucmlnLmxpbmVhclZlbG9jaXR5KTtcclxuICAgICAgICAgICAgICAgIGxldCBtYXhEaXY6IG51bWJlciA9IHRoaXMuaXNCb3NzID8gMTAwIDogMzAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpdi5tYWcoKSA+IG1heERpdikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdi5ub3JtYWxpemVTZWxmKCkubXVsU2VsZihtYXhEaXYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWcubGluZWFyVmVsb2NpdHkgPSBkaXY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuSFAgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlYXRoKCk7XHJcbiAgICAgICAgICAgIC8vIOatu+S6oeS6i+S7tlxyXG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9HQU1FX0xPR0lDLCB7IHR5cGU6IENvbnN0YW50LkVfWm9tYmllX0RlYXRoLCBub2RlOiB0aGlzLm5vZGUsIGZyb206IGZyb20gLCBpc0Jvb20gOiBpc0Jvb219KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOWPl+S8pOS6i+S7tlxyXG4gICAgICAgICAgICBpZiAoZnJvbSAmJiBpc0VtaXQpIHtcclxuICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX0dBTUVfTE9HSUMsIHsgdHlwZTogQ29uc3RhbnQuRV9ab21iaWVfSGFydCwgbm9kZTogdGhpcy5ub2RlIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKiDmrbvkuqEgKi9cclxuICAgIGRlYXRoKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNCb3NzICYmIGdhbWVNZ3IuYm9zc0Fyci5sZW5ndGggPT0gMCAmJiBnYW1lTWdyLlJlaW4gPCAyICYmIGNvY29zei5nYW1lTW9kZSA9PSA4KXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tYm9zc+WIm+W7uuWujOS6huW5tuS4lOWHu+avmS0tLS0tLS0t5beh5Zue5Y+Y5oiQMicpO1xyXG4gICAgICAgICAgICBnYW1lTWdyLlJlaW4gPSAyO1xyXG4gICAgICAgICAgICBnYW1lTWdyLmJvc3MyQXJyID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNBdGsgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRGVhdGggPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3NwQW5pLnRpbWVTY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicmVpblNwXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIOeisOaSnuS9k1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnRzKGNjLkNvbGxpZGVyKS5mb3JFYWNoKHYgPT4gdi5lbmFibGVkID0gZmFsc2UpO1xyXG4gICAgICAgIC8vIOmakOiXj+mUgOavgVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuX3NwQW5pLm5vZGUpLnRvKDAuNiwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgLy8g5q275Lqh6Z+z5pWIXHJcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9fZGllKSBnYW1lTWdyLnBsYXlDbGlwKHRoaXMuYXVkaW9fZGllLCBudWxsLCAwLjIpO1xyXG4gICAgICAgIC8vIOatu+S6oeaViOaenFxyXG4gICAgICAgIHRoaXMudXBkYXRlQW5pKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuem9tYmllSWQgPCA4KSB7XHJcbiAgICAgICAgICAgIGxldCBwcmUgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcImVmZmVjdF9kZWF0aFwiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICBpZiAocHJlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZmZWN0X2RlYXRoOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUocHJlKTtcclxuICAgICAgICAgICAgICAgIGVmZmVjdF9kZWF0aC56SW5kZXggPSBaaW5kZXhMYXllci56aW5lZHhfZmxvb3JTa2lsbDtcclxuICAgICAgICAgICAgICAgIGVmZmVjdF9kZWF0aC5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0X2RlYXRoLnNldFBhcmVudCh0aGlzLm5vZGUucGFyZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIC8vIOatu+S6oeaOieiQvemBk+WFt1xyXG4gICAgICAgIHRoaXMuY3JlYXRJdGVtKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLnB1dE5vZGVQb29sKCk7IH0sIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0SXRlbSgpIHtcclxuICAgICAgICBpZiAoZ2FtZU1nci5pc1dpbiB8fCBnYW1lTWdyLmlzRmFpbCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh1cGdyYWRlTWdyICYmIHVwZ3JhZGVNZ3IuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICBsZXQgY291bnQgPSAodGhpcy56b21iaWVJZCA8IDggPyAxIDogMTApO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGlmIChpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcy5hZGRTZWxmKGNjLnYyKDIwICogaSwgMCkucm90YXRlU2VsZigyICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVwZ3JhZGVNZ3IuY3JlYXRlSmluZ3lhbihwb3MpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihjb2Nvc3ouZ2FtZU1vZGUgPT0gNil7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZE51bSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICBpZihyYW5kTnVtIDwgMC4yKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgd3Bwb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB3cHBvcy54ID0gd3Bwb3MueCArIChwYXJzZUludCgoTWF0aC5yYW5kb20oKSAqIDIpLnRvU3RyaW5nKCkpIC0gMSkgKiAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd3Bwb3MueSA9IHdwcG9zLnkgKyAocGFyc2VJbnQoKE1hdGgucmFuZG9tKCkgKiAyKS50b1N0cmluZygpKSAtIDEpICogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZ3JhZGVNZ3IuY3JlYXRlV2VhcG9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jYW5Db2xvcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBmcm96ZW5TdGFydCgpIHtcclxuICAgICAgICB0aGlzLl9jYW5Db2xvciA9IGZhbHNlO1xyXG4gICAgICAgIC8vIOWBnOatouWPl+S8pOWPmOiJslxyXG4gICAgICAgIHRoaXMuX3NwQW5pLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAvLyDlkK/liqjlj5joibJcclxuICAgICAgICB0aGlzLl9zcEFuaS5ub2RlLmNvbG9yID0gY2MuQ29sb3IuQkxVRTtcclxuICAgICAgICBpZiAodGhpcy5fc3BBbmkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3BBbmkudGltZVNjYWxlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g56e75Yqo5pqC5YGcXHJcbiAgICAgICAgdGhpcy5pc0F0ayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FuTW92ZURpciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubW92ZURpciA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICB0aGlzLnVkcGF0ZVJCb2R5KHRoaXMubW92ZURpciwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBmcm96ZW5FbmQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRGVhdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FuQ29sb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyDmgaLlpI3popzoibJcclxuICAgICAgICAgICAgdGhpcy5fc3BBbmkubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3BBbmkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NwQW5pLnRpbWVTY2FsZSA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zcEFuaS5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOenu+WKqOaBouWkjVxyXG4gICAgICAgICAgICB0aGlzLmNhbk1vdmVEaXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzQXRrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYXRrRGlyID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQZXJzb24oKTtcclxuICAgICAgICAgICAgdGhpcy51ZHBhdGVSQm9keSh0aGlzLm1vdmVEaXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZpcmVfc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5fY2FuQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICAvLyDlgZzmraLlj5fkvKTlj5joibJcclxuICAgICAgICB0aGlzLl9zcEFuaS5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgLy8g5ZCv5Yqo5Y+Y6ImyXHJcbiAgICAgICAgdGhpcy5fc3BBbmkubm9kZS5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgIH1cclxuXHJcbiAgICBmaXJlX2VuZCgpIHtcclxuICAgICAgICB0aGlzLl9jYW5Db2xvciA9IHRydWU7XHJcbiAgICAgICAgLy8g5oGi5aSN6aKc6ImyXHJcbiAgICAgICAgdGhpcy5fc3BBbmkubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NhbkF0azogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBjYW5BdGsoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jYW5BdGsgfHwgdGhpcy5pc0F0ayB8fCB0aGlzLl9zcEFuaS50aW1lU2NhbGUgPT0gMCB8fCB0aGlzLl9zcEFuaS5hbmltYXRpb24uaW5jbHVkZXMoXCJzcGF3blwiKSB8fCB0aGlzLl9zcEFuaS5hbmltYXRpb24uaW5jbHVkZXMoXCJqdW1wXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==