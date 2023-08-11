
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be2012PJ+xL2Y4UzVB0obJ4', 'player');
// scripts/Game/player.ts

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
var bullet_1 = require("./bullet");
var gameDate_1 = require("./gameDate");
var gameMgr_1 = require("./gameMgr");
var person_1 = require("./person");
var UpgradeMgr_1 = require("./UpgradeMgr");
var weapon_1 = require("./weapon");
// @ts-ignore
var i18n = require('LanguageData');
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lucky = 0;
        _this.lastTime = 0;
        _this.lastAtkTime = 0;
        _this.atkBulletNum = 1;
        return _this;
    }
    Player.prototype.onLoad = function () {
        this.isPlayer = true;
        this.id = 1;
        this.lucky = 0;
        gameMgr_1.gameMgr.playerTs = this;
        if (this.hpSpr) {
            this.hpSpr.color = cc.Color.GREEN;
        }
        if (this.atkBar) {
            this.atkBar.node.children[1].color = cc.Color.YELLOW;
        }
        this.rig = this.node.getComponent(cc.RigidBody);
        if (this.rig) {
            this.rig.linearDamping = 0.2;
        }
        this.playerMess = this.node.getChildByName("playerMess");
        this.hpNumNode = this.playerMess.getChildByName("hpNum");
        // 光环
        this.ghAniNode = this.node.getChildByName("gh");
        // 烟尘
        this.ycAniNode = this.node.getChildByName("yc");
        // 相机跟随
        gameMgr_1.gameMgr.followNode = this.node;
        // 防止玩家和僵尸碰撞
        if (CocosZ_1.cocosz.gameMode == 6) {
            if (this.rig && this.rig.isValid) {
                this.rig.enabledContactListener = true;
            }
        }
    };
    Player.prototype.start = function () {
        _super.prototype.start.call(this);
        this.setProperty();
        this.node.zIndex = Constant_1.ZindexLayer.zindex_player;
        if (this.ghAniNode && this.ghAniNode.isValid) {
            this.ghAniNode.setParent(this.node.parent);
            this.ghAniNode.zIndex = Constant_1.ZindexLayer.zinedx_gh;
            this.updateGhAni();
        }
        if (this.ycAniNode && this.ycAniNode.isValid) {
            this.ycAniNode.setParent(this.node.parent);
            this.ycAniNode.zIndex = Constant_1.ZindexLayer.zinedx_footYc;
            this.updateYcAni();
        }
        // 血条
        if (this.hpSpr) {
            this.hpSpr.color = cc.Color.GREEN;
        }
    };
    Player.prototype.lateUpdate = function (dt) {
        this.curTime++;
        if (CocosZ_1.cocosz.isPause || this.isDeath || gameMgr_1.gameMgr.isWin || gameMgr_1.gameMgr.isFail) {
            this.rig.linearVelocity = cc.v2(0, 0);
            return;
        }
        ;
        if (this.curTime % 15 == 0) {
            this.updateAni();
            this.creatFootPrint();
        }
        this.updateAtk();
        this.updatePerson();
        this.udpateRBody(this.moveDir);
        this.updateMess();
        this.updateGhAni();
        this.updateYcAni();
        if (this.atkTarget && this.atkTarget.isValid) {
            this.atkEnemy();
        }
    };
    Player.prototype.recoverEffect = function () {
        var node = cc.instantiate(gameMgr_1.gameMgr.itemEffect[0]);
        node.parent = this.node;
    };
    Player.prototype.checkTarget = function () {
        if (Number(new Date()) - this.lastTime < 500)
            return;
        this.lastTime = Number(new Date());
        var num = this.atkList.indexOf(this.atkTarget);
        if (num >= 0) {
            if (num == this.atkList.length - 1) {
                num = 0;
            }
            else {
                num += 1;
            }
            this.atkTarget = this.atkList[num];
        }
        else {
            this.atkTarget = this.atkList[0];
        }
    };
    Player.prototype.atkEnemy = function () {
        var _this = this;
        if (!this.curWeapon || !this.curWeapon.isValid || this.isAtk)
            return;
        if (this.curWeapon && this.curWeapon.isRangeWeapon) {
            // 是否有子弹
            if (this.curWeapon._isReload || this.curWeapon.curBullet <= 0) {
                return;
            }
            else {
                if ((CocosZ_1.cocosz.gameMode == 6 || CocosZ_1.cocosz.gameMode == 8) && this.curWeapon.curBullet == 1) {
                    cc.game.emit(Constant_1.default.E_GAME_LOGIC, { type: Constant_1.default.E_Bullet_Last, node: this.node });
                }
                this.curWeapon.curBullet--;
            }
            // 抖动效果
            var t_1 = (this.atkSpeed > 0.1 ? 0.1 : this.atkSpeed) / 3;
            cc.tween(this.rangedWeapon.children[0])
                .by(t_1, { x: -20, angle: 20 })
                .by(t_1, { x: 20, angle: -20 })
                .start();
            // 攻击效果
            var pos = this.startPosNode.getPosition();
            if (this.curWeapon.atkEffect) {
                var effect = cc.instantiate(this.curWeapon.atkEffect);
                if (this.curWeapon.weaponNum == 9 || this.curWeapon.weaponNum == 15) {
                    this.node.parent.addChild(effect, Constant_1.ZindexLayer.zindex_effect_fire, "effect");
                    effect.setPosition(this.startPosNode.parent.convertToWorldSpaceAR(pos).sub(cc.v2(cc.winSize.width / 2, cc.winSize.height / 2)));
                    if (this.body.scaleX > 0) {
                        effect.angle = this.rangedWeapon.angle;
                    }
                    else {
                        effect.angle = 180 - this.rangedWeapon.angle;
                    }
                }
                else {
                    this.curWeapon.node.addChild(effect, 1, "effect");
                    effect.setPosition(pos);
                }
                // 升级开火特效
                // if (this.curWeapon.can_effect_hit && this.curWeapon && this.curWeapon.weaponLevel > 0) {
                //     let effect_fire = cc.instantiate(gameMgr.effect_fire);
                //     effect_fire.parent = effect.parent;
                //     effect_fire.setPosition(effect.position);
                //     effect_fire.angle = effect.angle;
                //     // 颜色
                //     let arr = ["", "y", "p", "r"];
                //     let spAni = effect_fire.children[0].getComponent(sp.Skeleton);
                //     spAni && spAni.setSkin(arr[this.curWeapon.weaponLevel]);
                // }
            }
        }
        else {
            gameMgr_1.gameMgr.shakeEffect(2, 1, false); //屏幕晃动
            var ani_1 = this.meleeWeapon.getComponent(cc.Animation);
            ani_1 && ani_1.isValid && ani_1.play("atk_dao");
            this.scheduleOnce(function () {
                ani_1 && ani_1.isValid && ani_1.play("daiji_dao");
            }, 0.18);
        }
        // 生成子弹
        var dir;
        if (this.atkDir && !this.atkDir.equals(cc.Vec2.ZERO)) {
            dir = this.atkDir;
        }
        else if (this.moveDir && !this.moveDir.equals(cc.Vec2.ZERO)) {
            dir = this.moveDir;
        }
        else {
            dir = this.body.scaleX > 0 ? cc.Vec2.RIGHT : cc.Vec2.RIGHT.negSelf();
        }
        if (this.atkBulletNum > 1) {
            for (var i = 0; i < this.atkBulletNum; i++) {
                var angle = ((this.atkBulletNum - 1) / 2 - i) * 15;
                var new_dir = dir.rotate(cc.misc.degreesToRadians(angle));
                this.createBullet(new_dir);
            }
        }
        else {
            this.createBullet(dir);
        }
        // 攻击表情
        var t = this.atkSpeed > 0.1 ? 0.1 : this.atkSpeed;
        cc.tween(this.head_atk)
            .set({ opacity: 255 })
            .delay(t)
            .set({ opacity: 0 })
            .start();
        this.isAtk = true;
        if (this.curWeapon.isRangeWeapon && this.curWeapon.curBullet <= 0) {
            cc.tween(this.node)
                .delay(this.curWeapon.reload)
                .call(function () {
                _this.isAtk = false;
            })
                .start();
        }
        else {
            cc.tween(this.node)
                .delay(this.atkSpeed)
                .call(function () {
                _this.isAtk = false;
            })
                .start();
        }
        // 攻击音效
        var name = weapon_1.default.WeaponName[this.curWeapon.weaponNum - 1];
        if (gameDate_1.default.Weapon[name] && gameDate_1.default.Weapon[name].music) {
            gameMgr_1.gameMgr.playEffect("shot_" + gameDate_1.default.Weapon[name].music, this.node);
        }
        else {
            gameMgr_1.gameMgr.playEffect("shot_" + weapon_1.default.WeaponName[this.curWeapon.weaponNum - 1], this.node);
        }
    };
    Player.prototype.createBullet = function (dir) {
        var bullet = cc.instantiate(this.curWeapon.bullet);
        if (this.curWeapon.isRangeWeapon) {
            bullet.parent = this.node.parent;
            var fromPos = bullet.parent.convertToNodeSpaceAR(this.startPosNode.convertToWorldSpaceAR(cc.Vec2.ZERO));
            bullet.setPosition(fromPos);
            bullet.angle = -cc.v2(dir).signAngle(cc.v2(1, 0)) / Math.PI * 180;
            if (this.curWeapon.weaponNum == 2) {
                bullet.angle += (5 - Math.random() * 10);
            }
            if (this.curWeapon.flySpeed > 0) {
                var pos1 = bullet.getPosition();
                var pos2 = pos1.add(dir.mul(this.curWeapon.atkRangeNum));
                cc.tween(bullet)
                    .to(pos2.sub(pos1).mag() / this.curWeapon.flySpeed, { position: cc.v3(pos2) })
                    .call(function () {
                    var ts = bullet.getComponent(bullet_1.default);
                    if (ts.boomEffect) {
                        var boom = cc.instantiate(ts.boomEffect);
                        boom.parent = ts.node.parent;
                        boom.setPosition(ts.node.getPosition());
                        var curBullet = boom.getComponent(bullet_1.default);
                        curBullet.atk = ts.atk;
                        curBullet.atker = ts.atker;
                        curBullet.id = ts.id;
                        gameMgr_1.gameMgr.playEffect("explo", boom);
                        if (ts.hitEffect) {
                            var pos = bullet.getPosition();
                            var node = cc.instantiate(ts.hitEffect);
                            node.parent = bullet.parent;
                            node.setPosition(pos);
                            node.zIndex = Constant_1.ZindexLayer.zindex_effect_hit;
                        }
                    }
                    bullet.destroy();
                })
                    .start();
                // 弹壳
                if (this.curWeapon.shellCall) {
                    var shellCase = cc.instantiate(this.curWeapon.shellCall);
                    shellCase.setParent(gameMgr_1.gameMgr.map);
                    shellCase.setPosition(this.node.position);
                    shellCase.scaleX = this.body.scale;
                }
            }
            else {
                cc.tween(bullet).delay(0.4).call(function () {
                    bullet.destroy();
                }).start();
            }
            var ts = bullet.getComponent(bullet_1.default);
            ts.id = this.id;
            ts.atker = this.node;
            ts.atk = (this.atkNum + this.personAtk) * this.atkRate;
            ts.dir = dir;
        }
        else {
            this.node.addChild(bullet, -1);
            bullet.color = this.curWeapon.bulletCollor;
            if (this.atkDir.x < 0) {
                bullet.scaleX *= -1 / this.node.scaleX;
            }
            else {
                bullet.scaleX /= this.node.scaleX;
            }
            bullet.scaleY /= this.node.scaleY;
            cc.tween(bullet).delay(0.2).call(function () { bullet.destroy(); }).start();
            var ts = bullet.getComponent(bullet_1.default);
            ts.id = this.id;
            ts.atker = this.node;
            ts.atk = (this.atkNum + this.personAtk) * this.atkRate;
            ts.dir = dir;
        }
    };
    Player.prototype.hart = function (atkNum, from, dir, isAudio) {
        var _this = this;
        if (dir === void 0) { dir = null; }
        if (isAudio === void 0) { isAudio = true; }
        if (CocosZ_1.cocosz.isPause || this.isDeath || this.isAvoidInjury)
            return;
        if ((CocosZ_1.cocosz.gameMode == 6 || CocosZ_1.cocosz.gameMode == 8) && UpgradeMgr_1.upgradeMgr) {
            // 移动过程中15%的概率免伤
            if (UpgradeMgr_1.upgradeMgr.isHaveSkill(UpgradeMgr_1.SkillType.护甲靴子) && this.moveDir.mag() > 0 && Math.random() < 0.4) {
                // gameMgr.showRoleTip(this.node, "闪避", cc.Color.YELLOW);
                return;
            }
            else if (UpgradeMgr_1.upgradeMgr.isHaveSkill(UpgradeMgr_1.SkillType.神圣守护) && UpgradeMgr_1.upgradeMgr.hudun && UpgradeMgr_1.upgradeMgr.hudun.active) {
                UpgradeMgr_1.upgradeMgr.updateHudun();
                // gameMgr.showRoleTip(this.node, "免伤", cc.Color.YELLOW);
                return;
            }
        }
        // 防止dir过大
        if (dir && dir.mag() > 3)
            dir.normalizeSelf().mulSelf(3);
        // 减伤
        atkNum = (1 - this.damageReduction) * atkNum;
        // 护盾
        if (this.Shiled > 0) {
            this.Shiled -= atkNum;
            if (this.Shiled < 0) {
                atkNum = -this.Shiled;
                this.Shiled = 0;
            }
            else {
                return;
            }
        }
        // 数字
        if (CocosZ_1.cocosz.gameMode != 6 && CocosZ_1.cocosz.gameMode != 8) {
            gameMgr_1.gameMgr.showRoleTip(this.node, Math.min(this.HP, atkNum).toFixed(0));
        }
        this.HP -= atkNum;
        // 受伤音效
        if (isAudio) {
            if (from) {
                var ts = from.getComponent(person_1.default);
                if (ts && ts.curWeapon && ts.curWeapon.isRangeWeapon) {
                    gameMgr_1.gameMgr.playEffect("hurt_range", this.node);
                }
                else {
                    gameMgr_1.gameMgr.playEffect("hurt_melee", this.node);
                }
            }
            else {
                gameMgr_1.gameMgr.playEffect("hurt", this.node);
            }
        }
        // 屏幕闪红
        if (CocosZ_1.cocosz.gameMode == 6 || CocosZ_1.cocosz.gameMode == 8) {
            cc.tween(gameMgr_1.gameMgr.red)
                .to(0.5, { opacity: 255 }, { easing: "sineOut" })
                .to(0.5, { opacity: 0 }, { easing: "sineIn" })
                .start();
        }
        // 震动
        CocosZ_1.cocosz.vibrate("long");
        if (this.HP <= 0) {
            if (CocosZ_1.cocosz.gameMode == 6 || CocosZ_1.cocosz.gameMode == 8)
                CocosZ_1.cocosz.audioMgr.playEffect("GameOver");
            this.death();
            if (from) {
                var ts = from.getComponent(person_1.default);
                ts.killNum++;
                ts.curKillNum++;
                // 更新最佳成绩
                if (ts.curKillNum > ts.maxNum) {
                    ts.maxNum = ts.curKillNum;
                }
                this.killer = ts;
                this.curKillNum = 0;
            }
            // 倒飞
            if (dir) {
                var p1 = this.node.getPosition();
                var pTo = p1.add(dir.normalizeSelf().mulSelf(200));
                var p2 = cc.v2((p1.x + pTo.x) / 2, p1.y + 200);
                cc.tween(this.node)
                    .bezierTo(0.3, p1, p2, pTo)
                    .start();
            }
            // 死亡事件
            if (CocosZ_1.cocosz.gameMode == 6 || CocosZ_1.cocosz.gameMode == 8) {
                cc.game.emit(Constant_1.default.E_GAME_LOGIC, { type: Constant_1.default.E_Player_Death });
            }
        }
        else {
            // 受伤事件
            if (CocosZ_1.cocosz.gameMode == 6 || CocosZ_1.cocosz.gameMode == 8) {
                this.avoidInjury(2);
                cc.game.emit(Constant_1.default.E_GAME_LOGIC, { type: Constant_1.default.E_Player_Hart });
            }
            // 效果
            if (!this.isAttackedEffect) {
                this.isAttackedEffect = true;
                // 后退
                if (this.rig.type == cc.RigidBodyType.Dynamic && dir) {
                    // 控制
                    this.canMove = false;
                    this.scheduleOnce(function () { _this.canMove = true; }, 0.1);
                    // 后退
                    var div = dir.mulSelf(400 * dir.mag()).addSelf(this.rig.linearVelocity);
                    if (div.mag() > 500) {
                        div.normalizeSelf().mulSelf(500);
                    }
                    this.rig.linearVelocity = div;
                }
                // 晃头
                cc.tween(this.head)
                    .call(function () { _this.head_hart.opacity = 255; })
                    .to(0.05, { angle: 15 })
                    .to(0.05, { angle: -15 })
                    .to(0.05, { angle: 15 })
                    .to(0.05, { angle: 0 })
                    .call(function () { _this.head_hart.opacity = 0; })
                    .start();
                // 人物变色
                var spArr_1 = this.body.getComponentsInChildren(cc.Sprite);
                cc.tween(this.body)
                    .call(function () { spArr_1.forEach(function (v, i) { v.isValid && v.setMaterial(0, _this.mat_attacked); }); })
                    .delay(0.1)
                    .call(function () { spArr_1.forEach(function (v, i) { v.isValid && v.setMaterial(0, _this.mat_common); }); })
                    .delay(0.1)
                    .union()
                    .repeat(CocosZ_1.cocosz.gameMode == 6 ? 5 : 2)
                    .call(function () { _this.isAttackedEffect = false; })
                    .start();
            }
        }
    };
    Player.prototype.creatFootPrint = function () {
        if (this.node.opacity == 0)
            return;
        var pos = this.node.getPosition();
        if (pos.sub(this.lastPos).mag() < 5)
            return;
        this.lastPos = cc.v2(pos);
        this.footNum++;
        // 脚步音效
        if (this.isPlayer && this.footNum % 3 == 0) {
            gameMgr_1.gameMgr.playEffect("footsteps", this.node);
        }
        // 脚印(雪地)
        if (gameMgr_1.gameMgr.map.name == "map2") {
            var node_1 = new cc.Node();
            node_1.addComponent(cc.Sprite).spriteFrame = gameMgr_1.gameMgr.jiaoyin;
            cc.tween(node_1).delay(0.5).to(0.5, { opacity: 0 }).call(function () { node_1.destroy(); }).start();
            node_1.parent = this.node.parent;
            node_1.zIndex = Constant_1.ZindexLayer.zinedx_footPrint;
            if (this.moveDir.mag() > 0)
                node_1.angle = 360 - cc.v2(this.moveDir).signAngle(cc.v2(1, 0)) / Math.PI * 180;
            pos.y -= 100 * this.node.scale;
            var pos2 = cc.v2(20, 0).rotate(node_1.angle / 180 * Math.PI).rotate(this.footNum % 2 == 0 ? Math.PI / 2 : -Math.PI / 2);
            pos.addSelf(pos2);
            node_1.setPosition(pos);
        }
    };
    // 0:检测碰撞；1:检测子弹；2:检测在层级下，3:检测在层级上
    Player.prototype.onCollisionEnter = function (other, self) {
        if (self.tag == 0) {
            // 敌人
            if (other.tag == 1) {
                var ts = other.node.getComponent(person_1.default);
                if (ts && ts.id != this.id) {
                    this.atkList.push(other.node);
                    if (!cc.isValid(this.atkTarget) && other.node.isValid) {
                        this.atkTarget = other.node;
                    }
                }
            }
        }
    };
    Player.prototype.onCollisionExit = function (other, self) {
        if (self.tag == 0) {
            var num = this.atkList.indexOf(other.node);
            if (other.tag == 1 && num >= 0) {
                this.atkList.splice(num, 1);
                if (this.atkList.length == 0) {
                    this.atkTarget = null;
                }
                else {
                    if (!cc.isValid(this.atkTarget) || other.node.uuid == this.atkTarget.uuid) {
                        this.atkTarget = this.atkList[0];
                    }
                }
            }
        }
    };
    // 每次将要处理碰撞体接触逻辑时被调用
    Player.prototype.onPreSolve = function (contact, selfCollider, otherCollider) {
        if (otherCollider.node.group == "zombie") {
            contact.disabled = true;
        }
    };
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(person_1.default));
exports.default = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZVxccGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDhDQUE2QztBQUM3QyxrREFBeUU7QUFDekUsbUNBQThCO0FBQzlCLHVDQUFrQztBQUNsQyxxQ0FBb0M7QUFDcEMsbUNBQThCO0FBQzlCLDJDQUFxRDtBQUNyRCxtQ0FBOEI7QUFDOUIsYUFBYTtBQUNiLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUUvQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBTTtJQUExQztRQUFBLHFFQStkQztRQTlkVSxXQUFLLEdBQVksQ0FBQyxDQUFDO1FBK0UxQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBbUJyQixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixrQkFBWSxHQUFXLENBQUMsQ0FBQzs7SUEyWDdCLENBQUM7SUE1ZEcsdUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixpQkFBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDckM7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ3hE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LENBQUM7cUJBQ3BDO2lCQUNKO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFFRCxvQkFBb0I7SUFDcEIsMkJBQVUsR0FBVixVQUFXLE9BQTBCLEVBQUUsWUFBZ0MsRUFBRSxhQUFpQztRQUN0RyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFFBQVEsRUFBRTtZQUN0QyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUMzQjtJQUNMLENBQUM7SUE5ZGdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0ErZDFCO0lBQUQsYUFBQztDQS9kRCxBQStkQyxDQS9kbUMsZ0JBQU0sR0ErZHpDO2tCQS9kb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi1wbHVnaW4vU2NyaXB0cy9VdGlsc1wiO1xyXG5pbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgQ29uc3RhbnQsIHsgUGFuZWxOYW1lLCBaaW5kZXhMYXllciB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuaW1wb3J0IEJ1bGxldCBmcm9tIFwiLi9idWxsZXRcIjtcclxuaW1wb3J0IEdhbWVEYXRlIGZyb20gXCIuL2dhbWVEYXRlXCI7XHJcbmltcG9ydCB7IGdhbWVNZ3IgfSBmcm9tIFwiLi9nYW1lTWdyXCI7XHJcbmltcG9ydCBQZXJzb24gZnJvbSBcIi4vcGVyc29uXCI7XHJcbmltcG9ydCB7IFNraWxsVHlwZSwgdXBncmFkZU1nciB9IGZyb20gXCIuL1VwZ3JhZGVNZ3JcIjtcclxuaW1wb3J0IFdlYXBvbiBmcm9tIFwiLi93ZWFwb25cIjtcclxuLy8gQHRzLWlnbm9yZVxyXG5jb25zdCBpMThuID0gcmVxdWlyZSgnTGFuZ3VhZ2VEYXRhJyk7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgUGVyc29uIHtcclxuICAgIHB1YmxpYyBsdWNreSA6IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuaXNQbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaWQgPSAxO1xyXG4gICAgICAgIHRoaXMubHVja3kgPSAwO1xyXG4gICAgICAgIGdhbWVNZ3IucGxheWVyVHMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLmhwU3ByKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHBTcHIuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYXRrQmFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXRrQmFyLm5vZGUuY2hpbGRyZW5bMV0uY29sb3IgPSBjYy5Db2xvci5ZRUxMT1c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmlnID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICh0aGlzLnJpZykgeyB0aGlzLnJpZy5saW5lYXJEYW1waW5nID0gMC4yOyB9XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJNZXNzID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGxheWVyTWVzc1wiKTtcclxuICAgICAgICB0aGlzLmhwTnVtTm9kZSA9IHRoaXMucGxheWVyTWVzcy5nZXRDaGlsZEJ5TmFtZShcImhwTnVtXCIpO1xyXG4gICAgICAgIC8vIOWFieeOr1xyXG4gICAgICAgIHRoaXMuZ2hBbmlOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZ2hcIik7XHJcbiAgICAgICAgLy8g54Of5bCYXHJcbiAgICAgICAgdGhpcy55Y0FuaU5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ5Y1wiKTtcclxuICAgICAgICAvLyDnm7jmnLrot5/pmo9cclxuICAgICAgICBnYW1lTWdyLmZvbGxvd05vZGUgPSB0aGlzLm5vZGU7XHJcblxyXG4gICAgICAgIC8vIOmYsuatoueOqeWutuWSjOWDteWwuOeisOaSnlxyXG4gICAgICAgIGlmIChjb2Nvc3ouZ2FtZU1vZGUgPT0gNikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yaWcgJiYgdGhpcy5yaWcuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWcuZW5hYmxlZENvbnRhY3RMaXN0ZW5lciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLnNldFByb3BlcnR5KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IFppbmRleExheWVyLnppbmRleF9wbGF5ZXI7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2hBbmlOb2RlICYmIHRoaXMuZ2hBbmlOb2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5naEFuaU5vZGUuc2V0UGFyZW50KHRoaXMubm9kZS5wYXJlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmdoQW5pTm9kZS56SW5kZXggPSBaaW5kZXhMYXllci56aW5lZHhfZ2g7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlR2hBbmkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMueWNBbmlOb2RlICYmIHRoaXMueWNBbmlOb2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy55Y0FuaU5vZGUuc2V0UGFyZW50KHRoaXMubm9kZS5wYXJlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLnljQW5pTm9kZS56SW5kZXggPSBaaW5kZXhMYXllci56aW5lZHhfZm9vdFljO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVljQW5pKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOihgOadoVxyXG4gICAgICAgIGlmICh0aGlzLmhwU3ByKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHBTcHIuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxhdGVVcGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmN1clRpbWUrKztcclxuICAgICAgICBpZiAoY29jb3N6LmlzUGF1c2UgfHwgdGhpcy5pc0RlYXRoIHx8IGdhbWVNZ3IuaXNXaW4gfHwgZ2FtZU1nci5pc0ZhaWwpIHtcclxuICAgICAgICAgICAgdGhpcy5yaWcubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyVGltZSAlIDE1ID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBbmkoKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdEZvb3RQcmludCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUF0aygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGVyc29uKCk7XHJcbiAgICAgICAgdGhpcy51ZHBhdGVSQm9keSh0aGlzLm1vdmVEaXIpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTWVzcygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlR2hBbmkoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVljQW5pKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXRrVGFyZ2V0ICYmIHRoaXMuYXRrVGFyZ2V0LmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hdGtFbmVteSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWNvdmVyRWZmZWN0KCkge1xyXG4gICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUoZ2FtZU1nci5pdGVtRWZmZWN0WzBdKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBsYXN0VGltZTogbnVtYmVyID0gMDtcclxuICAgIGNoZWNrVGFyZ2V0KCkge1xyXG4gICAgICAgIGlmIChOdW1iZXIobmV3IERhdGUoKSkgLSB0aGlzLmxhc3RUaW1lIDwgNTAwKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IE51bWJlcihuZXcgRGF0ZSgpKTtcclxuICAgICAgICBsZXQgbnVtID0gdGhpcy5hdGtMaXN0LmluZGV4T2YodGhpcy5hdGtUYXJnZXQpO1xyXG4gICAgICAgIGlmIChudW0gPj0gMCkge1xyXG4gICAgICAgICAgICBpZiAobnVtID09IHRoaXMuYXRrTGlzdC5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBudW0gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbnVtICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hdGtUYXJnZXQgPSB0aGlzLmF0a0xpc3RbbnVtXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXRrVGFyZ2V0ID0gdGhpcy5hdGtMaXN0WzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsYXN0QXRrVGltZTogbnVtYmVyID0gMDtcclxuICAgIGF0a0J1bGxldE51bTogbnVtYmVyID0gMTtcclxuICAgIGF0a0VuZW15KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jdXJXZWFwb24gfHwgIXRoaXMuY3VyV2VhcG9uLmlzVmFsaWQgfHwgdGhpcy5pc0F0aykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJXZWFwb24gJiYgdGhpcy5jdXJXZWFwb24uaXNSYW5nZVdlYXBvbikge1xyXG4gICAgICAgICAgICAvLyDmmK/lkKbmnInlrZDlvLlcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyV2VhcG9uLl9pc1JlbG9hZCB8fCB0aGlzLmN1cldlYXBvbi5jdXJCdWxsZXQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKChjb2Nvc3ouZ2FtZU1vZGUgPT0gNiB8fCBjb2Nvc3ouZ2FtZU1vZGUgPT0gOCkgJiYgdGhpcy5jdXJXZWFwb24uY3VyQnVsbGV0ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9HQU1FX0xPR0lDLCB7IHR5cGU6IENvbnN0YW50LkVfQnVsbGV0X0xhc3QsIG5vZGU6IHRoaXMubm9kZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyV2VhcG9uLmN1ckJ1bGxldC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOaKluWKqOaViOaenFxyXG4gICAgICAgICAgICBsZXQgdCA9ICh0aGlzLmF0a1NwZWVkID4gMC4xID8gMC4xIDogdGhpcy5hdGtTcGVlZCkgLyAzO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnJhbmdlZFdlYXBvbi5jaGlsZHJlblswXSlcclxuICAgICAgICAgICAgICAgIC5ieSh0LCB7IHg6IC0yMCwgYW5nbGU6IDIwIH0pXHJcbiAgICAgICAgICAgICAgICAuYnkodCwgeyB4OiAyMCwgYW5nbGU6IC0yMCB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIC8vIOaUu+WHu+aViOaenFxyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5zdGFydFBvc05vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyV2VhcG9uLmF0a0VmZmVjdCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmZmVjdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY3VyV2VhcG9uLmF0a0VmZmVjdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJXZWFwb24ud2VhcG9uTnVtID09IDkgfHwgdGhpcy5jdXJXZWFwb24ud2VhcG9uTnVtID09IDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChlZmZlY3QsIFppbmRleExheWVyLnppbmRleF9lZmZlY3RfZmlyZSwgXCJlZmZlY3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0LnNldFBvc2l0aW9uKHRoaXMuc3RhcnRQb3NOb2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zKS5zdWIoY2MudjIoY2Mud2luU2l6ZS53aWR0aCAvIDIsIGNjLndpblNpemUuaGVpZ2h0IC8gMikpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2R5LnNjYWxlWCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0LmFuZ2xlID0gdGhpcy5yYW5nZWRXZWFwb24uYW5nbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3QuYW5nbGUgPSAxODAgLSB0aGlzLnJhbmdlZFdlYXBvbi5hbmdsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cldlYXBvbi5ub2RlLmFkZENoaWxkKGVmZmVjdCwgMSwgXCJlZmZlY3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0LnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDljYfnuqflvIDngavnibnmlYhcclxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmN1cldlYXBvbi5jYW5fZWZmZWN0X2hpdCAmJiB0aGlzLmN1cldlYXBvbiAmJiB0aGlzLmN1cldlYXBvbi53ZWFwb25MZXZlbCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgZWZmZWN0X2ZpcmUgPSBjYy5pbnN0YW50aWF0ZShnYW1lTWdyLmVmZmVjdF9maXJlKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBlZmZlY3RfZmlyZS5wYXJlbnQgPSBlZmZlY3QucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGVmZmVjdF9maXJlLnNldFBvc2l0aW9uKGVmZmVjdC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZWZmZWN0X2ZpcmUuYW5nbGUgPSBlZmZlY3QuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8g6aKc6ImyXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGFyciA9IFtcIlwiLCBcInlcIiwgXCJwXCIsIFwiclwiXTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgc3BBbmkgPSBlZmZlY3RfZmlyZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHNwQW5pICYmIHNwQW5pLnNldFNraW4oYXJyW3RoaXMuY3VyV2VhcG9uLndlYXBvbkxldmVsXSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGdhbWVNZ3Iuc2hha2VFZmZlY3QoMiwgMSwgZmFsc2UpOy8v5bGP5bmV5pmD5YqoXHJcbiAgICAgICAgICAgIGxldCBhbmkgPSB0aGlzLm1lbGVlV2VhcG9uLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICBhbmkgJiYgYW5pLmlzVmFsaWQgJiYgYW5pLnBsYXkoXCJhdGtfZGFvXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbmkgJiYgYW5pLmlzVmFsaWQgJiYgYW5pLnBsYXkoXCJkYWlqaV9kYW9cIik7XHJcbiAgICAgICAgICAgIH0sIDAuMTgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOeUn+aIkOWtkOW8uVxyXG4gICAgICAgIGxldCBkaXI7XHJcbiAgICAgICAgaWYgKHRoaXMuYXRrRGlyICYmICF0aGlzLmF0a0Rpci5lcXVhbHMoY2MuVmVjMi5aRVJPKSkge1xyXG4gICAgICAgICAgICBkaXIgPSB0aGlzLmF0a0RpcjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubW92ZURpciAmJiAhdGhpcy5tb3ZlRGlyLmVxdWFscyhjYy5WZWMyLlpFUk8pKSB7XHJcbiAgICAgICAgICAgIGRpciA9IHRoaXMubW92ZURpcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXIgPSB0aGlzLmJvZHkuc2NhbGVYID4gMCA/IGNjLlZlYzIuUklHSFQgOiBjYy5WZWMyLlJJR0hULm5lZ1NlbGYoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYXRrQnVsbGV0TnVtID4gMSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXRrQnVsbGV0TnVtOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBhbmdsZSA9ICgodGhpcy5hdGtCdWxsZXROdW0gLSAxKSAvIDIgLSBpKSAqIDE1O1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld19kaXI6IGNjLlZlYzIgPSBkaXIucm90YXRlKGNjLm1pc2MuZGVncmVlc1RvUmFkaWFucyhhbmdsZSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCdWxsZXQobmV3X2Rpcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUJ1bGxldChkaXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmlLvlh7vooajmg4VcclxuICAgICAgICBsZXQgdCA9IHRoaXMuYXRrU3BlZWQgPiAwLjEgPyAwLjEgOiB0aGlzLmF0a1NwZWVkO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuaGVhZF9hdGspXHJcbiAgICAgICAgICAgIC5zZXQoeyBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgICAgICAgLmRlbGF5KHQpXHJcbiAgICAgICAgICAgIC5zZXQoeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5pc0F0ayA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyV2VhcG9uLmlzUmFuZ2VXZWFwb24gJiYgdGhpcy5jdXJXZWFwb24uY3VyQnVsbGV0IDw9IDApIHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KHRoaXMuY3VyV2VhcG9uLnJlbG9hZClcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQXRrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KHRoaXMuYXRrU3BlZWQpXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0F0ayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmlLvlh7vpn7PmlYhcclxuICAgICAgICBsZXQgbmFtZSA9IFdlYXBvbi5XZWFwb25OYW1lW3RoaXMuY3VyV2VhcG9uLndlYXBvbk51bSAtIDFdO1xyXG4gICAgICAgIGlmIChHYW1lRGF0ZS5XZWFwb25bbmFtZV0gJiYgR2FtZURhdGUuV2VhcG9uW25hbWVdLm11c2ljKSB7XHJcbiAgICAgICAgICAgIGdhbWVNZ3IucGxheUVmZmVjdChcInNob3RfXCIgKyBHYW1lRGF0ZS5XZWFwb25bbmFtZV0ubXVzaWMsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ2FtZU1nci5wbGF5RWZmZWN0KGBzaG90XyR7V2VhcG9uLldlYXBvbk5hbWVbdGhpcy5jdXJXZWFwb24ud2VhcG9uTnVtIC0gMV19YCwgdGhpcy5ub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQnVsbGV0KGRpcjogY2MuVmVjMikge1xyXG4gICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmN1cldlYXBvbi5idWxsZXQpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cldlYXBvbi5pc1JhbmdlV2VhcG9uKSB7XHJcbiAgICAgICAgICAgIGJ1bGxldC5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICBsZXQgZnJvbVBvcyA9IGJ1bGxldC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5zdGFydFBvc05vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTykpO1xyXG4gICAgICAgICAgICBidWxsZXQuc2V0UG9zaXRpb24oZnJvbVBvcyk7XHJcbiAgICAgICAgICAgIGJ1bGxldC5hbmdsZSA9IC1jYy52MihkaXIpLnNpZ25BbmdsZShjYy52MigxLCAwKSkgLyBNYXRoLlBJICogMTgwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJXZWFwb24ud2VhcG9uTnVtID09IDIpIHtcclxuICAgICAgICAgICAgICAgIGJ1bGxldC5hbmdsZSArPSAoNSAtIE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyV2VhcG9uLmZseVNwZWVkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvczEgPSBidWxsZXQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGxldCBwb3MyID0gcG9zMS5hZGQoZGlyLm11bCh0aGlzLmN1cldlYXBvbi5hdGtSYW5nZU51bSkpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oYnVsbGV0KVxyXG4gICAgICAgICAgICAgICAgICAgIC50byhwb3MyLnN1Yihwb3MxKS5tYWcoKSAvIHRoaXMuY3VyV2VhcG9uLmZseVNwZWVkLCB7IHBvc2l0aW9uOiBjYy52Myhwb3MyKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRzID0gYnVsbGV0LmdldENvbXBvbmVudChCdWxsZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHMuYm9vbUVmZmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvb20gPSBjYy5pbnN0YW50aWF0ZSh0cy5ib29tRWZmZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9vbS5wYXJlbnQgPSB0cy5ub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvb20uc2V0UG9zaXRpb24odHMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJCdWxsZXQgPSBib29tLmdldENvbXBvbmVudChCdWxsZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyQnVsbGV0LmF0ayA9IHRzLmF0aztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ckJ1bGxldC5hdGtlciA9IHRzLmF0a2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyQnVsbGV0LmlkID0gdHMuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnBsYXlFZmZlY3QoXCJleHBsb1wiLCBib29tKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cy5oaXRFZmZlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gYnVsbGV0LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0cy5oaXRFZmZlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gYnVsbGV0LnBhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS56SW5kZXggPSBaaW5kZXhMYXllci56aW5kZXhfZWZmZWN0X2hpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWxsZXQuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIC8vIOW8ueWjs1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VyV2VhcG9uLnNoZWxsQ2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzaGVsbENhc2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmN1cldlYXBvbi5zaGVsbENhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoZWxsQ2FzZS5zZXRQYXJlbnQoZ2FtZU1nci5tYXApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoZWxsQ2FzZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoZWxsQ2FzZS5zY2FsZVggPSB0aGlzLmJvZHkuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihidWxsZXQpLmRlbGF5KDAuNCkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVsbGV0LmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHRzID0gYnVsbGV0LmdldENvbXBvbmVudChCdWxsZXQpO1xyXG4gICAgICAgICAgICB0cy5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgICAgIHRzLmF0a2VyID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICB0cy5hdGsgPSAodGhpcy5hdGtOdW0gKyB0aGlzLnBlcnNvbkF0aykgKiB0aGlzLmF0a1JhdGU7XHJcbiAgICAgICAgICAgIHRzLmRpciA9IGRpcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChidWxsZXQsIC0xKTtcclxuICAgICAgICAgICAgYnVsbGV0LmNvbG9yID0gdGhpcy5jdXJXZWFwb24uYnVsbGV0Q29sbG9yO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hdGtEaXIueCA8IDApIHtcclxuICAgICAgICAgICAgICAgIGJ1bGxldC5zY2FsZVggKj0gLTEgLyB0aGlzLm5vZGUuc2NhbGVYO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0LnNjYWxlWCAvPSB0aGlzLm5vZGUuc2NhbGVYO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1bGxldC5zY2FsZVkgLz0gdGhpcy5ub2RlLnNjYWxlWTtcclxuICAgICAgICAgICAgY2MudHdlZW4oYnVsbGV0KS5kZWxheSgwLjIpLmNhbGwoKCkgPT4geyBidWxsZXQuZGVzdHJveSgpIH0pLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdHMgPSBidWxsZXQuZ2V0Q29tcG9uZW50KEJ1bGxldCk7XHJcbiAgICAgICAgICAgIHRzLmlkID0gdGhpcy5pZDtcclxuICAgICAgICAgICAgdHMuYXRrZXIgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIHRzLmF0ayA9ICh0aGlzLmF0a051bSArIHRoaXMucGVyc29uQXRrKSAqIHRoaXMuYXRrUmF0ZTtcclxuICAgICAgICAgICAgdHMuZGlyID0gZGlyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYXJ0KGF0a051bTogbnVtYmVyLCBmcm9tOiBjYy5Ob2RlLCBkaXI6IGNjLlZlYzIgPSBudWxsLCBpc0F1ZGlvOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmIChjb2Nvc3ouaXNQYXVzZSB8fCB0aGlzLmlzRGVhdGggfHwgdGhpcy5pc0F2b2lkSW5qdXJ5KSByZXR1cm47XHJcbiAgICAgICAgaWYgKChjb2Nvc3ouZ2FtZU1vZGUgPT0gNiB8fCBjb2Nvc3ouZ2FtZU1vZGUgPT0gOCkgJiYgdXBncmFkZU1ncikge1xyXG4gICAgICAgICAgICAvLyDnp7vliqjov4fnqIvkuK0xNSXnmoTmpoLnjoflhY3kvKRcclxuICAgICAgICAgICAgaWYgKHVwZ3JhZGVNZ3IuaXNIYXZlU2tpbGwoU2tpbGxUeXBlLuaKpOeUsumdtOWtkCkgJiYgdGhpcy5tb3ZlRGlyLm1hZygpID4gMCAmJiBNYXRoLnJhbmRvbSgpIDwgMC40KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBnYW1lTWdyLnNob3dSb2xlVGlwKHRoaXMubm9kZSwgXCLpl6rpgb9cIiwgY2MuQ29sb3IuWUVMTE9XKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1cGdyYWRlTWdyLmlzSGF2ZVNraWxsKFNraWxsVHlwZS7npZ7lnKPlrojmiqQpICYmIHVwZ3JhZGVNZ3IuaHVkdW4gJiYgdXBncmFkZU1nci5odWR1bi5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHVwZ3JhZGVNZ3IudXBkYXRlSHVkdW4oKTtcclxuICAgICAgICAgICAgICAgIC8vIGdhbWVNZ3Iuc2hvd1JvbGVUaXAodGhpcy5ub2RlLCBcIuWFjeS8pFwiLCBjYy5Db2xvci5ZRUxMT1cpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOmYsuatomRpcui/h+Wkp1xyXG4gICAgICAgIGlmIChkaXIgJiYgZGlyLm1hZygpID4gMykgZGlyLm5vcm1hbGl6ZVNlbGYoKS5tdWxTZWxmKDMpO1xyXG4gICAgICAgIC8vIOWHj+S8pFxyXG4gICAgICAgIGF0a051bSA9ICgxIC0gdGhpcy5kYW1hZ2VSZWR1Y3Rpb24pICogYXRrTnVtO1xyXG4gICAgICAgIC8vIOaKpOebvlxyXG4gICAgICAgIGlmICh0aGlzLlNoaWxlZCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5TaGlsZWQgLT0gYXRrTnVtO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5TaGlsZWQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBhdGtOdW0gPSAtdGhpcy5TaGlsZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNoaWxlZCA9IDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5pWw5a2XXHJcbiAgICAgICAgaWYgKGNvY29zei5nYW1lTW9kZSAhPSA2ICYmIGNvY29zei5nYW1lTW9kZSAhPSA4KSB7XHJcbiAgICAgICAgICAgIGdhbWVNZ3Iuc2hvd1JvbGVUaXAodGhpcy5ub2RlLCBNYXRoLm1pbih0aGlzLkhQLCBhdGtOdW0pLnRvRml4ZWQoMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkhQIC09IGF0a051bTtcclxuICAgICAgICAvLyDlj5fkvKTpn7PmlYhcclxuICAgICAgICBpZiAoaXNBdWRpbykge1xyXG4gICAgICAgICAgICBpZiAoZnJvbSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRzID0gZnJvbS5nZXRDb21wb25lbnQoUGVyc29uKTtcclxuICAgICAgICAgICAgICAgIGlmICh0cyAmJiB0cy5jdXJXZWFwb24gJiYgdHMuY3VyV2VhcG9uLmlzUmFuZ2VXZWFwb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTWdyLnBsYXlFZmZlY3QoXCJodXJ0X3JhbmdlXCIsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheUVmZmVjdChcImh1cnRfbWVsZWVcIiwgdGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGdhbWVNZ3IucGxheUVmZmVjdChcImh1cnRcIiwgdGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlsY/luZXpl6rnuqJcclxuICAgICAgICBpZiAoY29jb3N6LmdhbWVNb2RlID09IDYgfHwgY29jb3N6LmdhbWVNb2RlID09IDgpIHtcclxuICAgICAgICAgICAgY2MudHdlZW4oZ2FtZU1nci5yZWQpXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJzaW5lT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogXCJzaW5lSW5cIiB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOmch+WKqFxyXG4gICAgICAgIGNvY29zei52aWJyYXRlKFwibG9uZ1wiKTtcclxuICAgICAgICBpZiAodGhpcy5IUCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2Nvc3ouZ2FtZU1vZGUgPT0gNiB8fCBjb2Nvc3ouZ2FtZU1vZGUgPT0gOCkgY29jb3N6LmF1ZGlvTWdyLnBsYXlFZmZlY3QoXCJHYW1lT3ZlclwiKTtcclxuICAgICAgICAgICAgdGhpcy5kZWF0aCgpO1xyXG4gICAgICAgICAgICBpZiAoZnJvbSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRzID0gZnJvbS5nZXRDb21wb25lbnQoUGVyc29uKTtcclxuICAgICAgICAgICAgICAgIHRzLmtpbGxOdW0rKztcclxuICAgICAgICAgICAgICAgIHRzLmN1cktpbGxOdW0rKztcclxuICAgICAgICAgICAgICAgIC8vIOabtOaWsOacgOS9s+aIkOe7qVxyXG4gICAgICAgICAgICAgICAgaWYgKHRzLmN1cktpbGxOdW0gPiB0cy5tYXhOdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0cy5tYXhOdW0gPSB0cy5jdXJLaWxsTnVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5raWxsZXIgPSB0cztcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyS2lsbE51bSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5YCS6aOeXHJcbiAgICAgICAgICAgIGlmIChkaXIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwMSA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBUbyA9IHAxLmFkZChkaXIubm9ybWFsaXplU2VsZigpLm11bFNlbGYoMjAwKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcDIgPSBjYy52MigocDEueCArIHBUby54KSAvIDIsIHAxLnkgKyAyMDApO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5iZXppZXJUbygwLjMsIHAxLCBwMiwgcFRvKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOatu+S6oeS6i+S7tlxyXG4gICAgICAgICAgICBpZiAoY29jb3N6LmdhbWVNb2RlID09IDYgfHwgY29jb3N6LmdhbWVNb2RlID09IDgpIHtcclxuICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX0dBTUVfTE9HSUMsIHsgdHlwZTogQ29uc3RhbnQuRV9QbGF5ZXJfRGVhdGggfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOWPl+S8pOS6i+S7tlxyXG4gICAgICAgICAgICBpZiAoY29jb3N6LmdhbWVNb2RlID09IDYgfHwgY29jb3N6LmdhbWVNb2RlID09IDgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXZvaWRJbmp1cnkoMik7XHJcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9HQU1FX0xPR0lDLCB7IHR5cGU6IENvbnN0YW50LkVfUGxheWVyX0hhcnQgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDmlYjmnpxcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQXR0YWNrZWRFZmZlY3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNBdHRhY2tlZEVmZmVjdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyDlkI7pgIBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJpZy50eXBlID09IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYyAmJiBkaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmjqfliLZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbk1vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuY2FuTW92ZSA9IHRydWU7IH0sIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5ZCO6YCAXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRpci5tdWxTZWxmKDQwMCAqIGRpci5tYWcoKSkuYWRkU2VsZih0aGlzLnJpZy5saW5lYXJWZWxvY2l0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpdi5tYWcoKSA+IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYubm9ybWFsaXplU2VsZigpLm11bFNlbGYoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWcubGluZWFyVmVsb2NpdHkgPSBkaXY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDmmYPlpLRcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuaGVhZClcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7IHRoaXMuaGVhZF9oYXJ0Lm9wYWNpdHkgPSAyNTU7IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMDUsIHsgYW5nbGU6IDE1IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMDUsIHsgYW5nbGU6IC0xNSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjA1LCB7IGFuZ2xlOiAxNSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjA1LCB7IGFuZ2xlOiAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4geyB0aGlzLmhlYWRfaGFydC5vcGFjaXR5ID0gMDsgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIC8vIOS6uueJqeWPmOiJslxyXG4gICAgICAgICAgICAgICAgbGV0IHNwQXJyID0gdGhpcy5ib2R5LmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmJvZHkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4geyBzcEFyci5mb3JFYWNoKCh2LCBpKSA9PiB7IHYuaXNWYWxpZCAmJiB2LnNldE1hdGVyaWFsKDAsIHRoaXMubWF0X2F0dGFja2VkKSB9KSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjEpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4geyBzcEFyci5mb3JFYWNoKCh2LCBpKSA9PiB7IHYuaXNWYWxpZCAmJiB2LnNldE1hdGVyaWFsKDAsIHRoaXMubWF0X2NvbW1vbikgfSkgfSlcclxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC4xKVxyXG4gICAgICAgICAgICAgICAgICAgIC51bmlvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGVhdChjb2Nvc3ouZ2FtZU1vZGUgPT0gNiA/IDUgOiAyKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHsgdGhpcy5pc0F0dGFja2VkRWZmZWN0ID0gZmFsc2U7IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRGb290UHJpbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5vcGFjaXR5ID09IDApIHJldHVybjtcclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgaWYgKHBvcy5zdWIodGhpcy5sYXN0UG9zKS5tYWcoKSA8IDUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5sYXN0UG9zID0gY2MudjIocG9zKTtcclxuICAgICAgICB0aGlzLmZvb3ROdW0rKztcclxuICAgICAgICAvLyDohJrmraXpn7PmlYhcclxuICAgICAgICBpZiAodGhpcy5pc1BsYXllciAmJiB0aGlzLmZvb3ROdW0gJSAzID09IDApIHtcclxuICAgICAgICAgICAgZ2FtZU1nci5wbGF5RWZmZWN0KFwiZm9vdHN0ZXBzXCIsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOiEmuWNsCjpm6rlnLApXHJcbiAgICAgICAgaWYgKGdhbWVNZ3IubWFwLm5hbWUgPT0gXCJtYXAyXCIpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgICAgICBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gZ2FtZU1nci5qaWFveWluO1xyXG4gICAgICAgICAgICBjYy50d2Vlbihub2RlKS5kZWxheSgwLjUpLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pLmNhbGwoKCkgPT4geyBub2RlLmRlc3Ryb3koKSB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIG5vZGUuekluZGV4ID0gWmluZGV4TGF5ZXIuemluZWR4X2Zvb3RQcmludDtcclxuICAgICAgICAgICAgaWYgKHRoaXMubW92ZURpci5tYWcoKSA+IDApIG5vZGUuYW5nbGUgPSAzNjAgLSBjYy52Mih0aGlzLm1vdmVEaXIpLnNpZ25BbmdsZShjYy52MigxLCAwKSkgLyBNYXRoLlBJICogMTgwO1xyXG4gICAgICAgICAgICBwb3MueSAtPSAxMDAgKiB0aGlzLm5vZGUuc2NhbGU7XHJcbiAgICAgICAgICAgIGxldCBwb3MyID0gY2MudjIoMjAsIDApLnJvdGF0ZShub2RlLmFuZ2xlIC8gMTgwICogTWF0aC5QSSkucm90YXRlKHRoaXMuZm9vdE51bSAlIDIgPT0gMCA/IE1hdGguUEkgLyAyIDogLU1hdGguUEkgLyAyKVxyXG4gICAgICAgICAgICBwb3MuYWRkU2VsZihwb3MyKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAwOuajgOa1i+eisOaSnu+8mzE65qOA5rWL5a2Q5by577ybMjrmo4DmtYvlnKjlsYLnuqfkuIvvvIwzOuajgOa1i+WcqOWxgue6p+S4ilxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKHNlbGYudGFnID09IDApIHtcclxuICAgICAgICAgICAgLy8g5pWM5Lq6XHJcbiAgICAgICAgICAgIGlmIChvdGhlci50YWcgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRzID0gb3RoZXIubm9kZS5nZXRDb21wb25lbnQoUGVyc29uKTtcclxuICAgICAgICAgICAgICAgIGlmICh0cyAmJiB0cy5pZCAhPSB0aGlzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGtMaXN0LnB1c2gob3RoZXIubm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKHRoaXMuYXRrVGFyZ2V0KSAmJiBvdGhlci5ub2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGtUYXJnZXQgPSBvdGhlci5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpc2lvbkV4aXQob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcikge1xyXG4gICAgICAgIGlmIChzZWxmLnRhZyA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBudW0gPSB0aGlzLmF0a0xpc3QuaW5kZXhPZihvdGhlci5ub2RlKVxyXG4gICAgICAgICAgICBpZiAob3RoZXIudGFnID09IDEgJiYgbnVtID49IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXRrTGlzdC5zcGxpY2UobnVtLCAxKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0a0xpc3QubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0a1RhcmdldCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNjLmlzVmFsaWQodGhpcy5hdGtUYXJnZXQpIHx8IG90aGVyLm5vZGUudXVpZCA9PSB0aGlzLmF0a1RhcmdldC51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXRrVGFyZ2V0ID0gdGhpcy5hdGtMaXN0WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmr4/mrKHlsIbopoHlpITnkIbnorDmkp7kvZPmjqXop6bpgLvovpHml7booqvosIPnlKhcclxuICAgIG9uUHJlU29sdmUoY29udGFjdDogY2MuUGh5c2ljc0NvbnRhY3QsIHNlbGZDb2xsaWRlcjogY2MuUGh5c2ljc0NvbGxpZGVyLCBvdGhlckNvbGxpZGVyOiBjYy5QaHlzaWNzQ29sbGlkZXIpIHtcclxuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci5ub2RlLmdyb3VwID09IFwiem9tYmllXCIpIHtcclxuICAgICAgICAgICAgY29udGFjdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==