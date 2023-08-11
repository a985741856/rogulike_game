
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/gameMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba7855a2NtE/b6oGliHwfNV', 'gameMgr');
// scripts/Game/gameMgr.ts

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
exports.gameMgr = void 0;
var CocosZ_1 = require("../Framework/CocosZ");
var Utils_1 = require("../../common-plugin/Scripts/Utils");
var Constant_1 = require("../Framework/Constant");
var UpgradeMgr_1 = require("./UpgradeMgr");
var YZ_Constant_1 = require("../../common-plugin/Scripts/YZ_Constant");
var ZombieBase_1 = require("./ZombieBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
//tag:{0:攻击范围，1:玩家身体，2:玩家腿部 6,减速，7,毒区 11:墙，12:道具，13:武器，14:草，15:房子,16:物资箱, 17:海水, 18:升级仓, 19:旗台}
exports.gameMgr = null;
var GameMgr = /** @class */ (function (_super) {
    __extends(GameMgr, _super);
    function GameMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodePoolObj = {};
        _this.canSHowGameBanner = true;
        _this.tipLayer = null;
        _this.setMapTs = null;
        _this.playerTs = null;
        _this.uiGamePage = null;
        _this.moveArea = null;
        _this.yaogan = null;
        _this.BtnBullet = null;
        _this.posObj = {};
        // 躲猫猫模式
        _this.dmmArr = [];
        _this.red = null;
        _this.hpTip = null;
        _this.effect_fire = null;
        _this.effect_hit = null;
        _this.itemList = [];
        _this.itemEffect = [];
        _this.spark = null;
        _this.blood = null;
        _this.testPoint = null;
        _this.player = null;
        _this.jiaoyin = null;
        _this.fj = null;
        _this.fjTip = null;
        _this.mainCamereRootNode = null;
        _this.mainCamera = null;
        // LIFE-CYCLE CALLBACKS:
        _this.atk = null;
        _this.safeCenter = cc.v2(0, 0);
        _this.redCircle = null;
        _this.redCircle2 = null;
        // mask: cc.Node = null;
        // maskMtl: cc.Material = null;
        _this.mapSize = cc.winSize;
        _this.miniMapSize = null;
        _this.btnSkill = null;
        _this.btnSkillAd = null;
        _this.rangedWeaponMess = null;
        _this.rangedWeaponAdMess = null;
        _this.ammo = null;
        _this.ammoAd = null;
        _this.kt = null;
        _this.model6_touxiang = null;
        _this.model6_btnShuxing = null;
        _this.model6_shuxing = null;
        _this.model6_jingyanBar = null;
        _this.model6_levelLabel = null;
        _this.model6_skillScrollView = null;
        _this.model6_skillScrollView_content = null;
        _this.model6_skillScrollView_item = null;
        _this.model6_timeLabel = null;
        _this.model6_ts = null;
        _this.model6_bossBar = null;
        _this.timeStr = "";
        _this.totalNum = 0;
        _this.deathNum = 0;
        _this.playerRank = 1;
        //通关条件： 1击败所有敌人 2击败boss 3抵达撤离点
        _this.passCondition = 1;
        _this.bossName = "";
        _this.map = null;
        _this.startPoint = null;
        _this.atkRange = null;
        _this.curTime = 0;
        _this.timeLabel = null;
        _this.snow = null;
        _this.qlzc = null;
        _this.bossShow = false;
        _this.GameTime = 0;
        _this.isGameStart = false;
        _this.posList = [];
        _this.boss_border = null;
        _this.zombieTime = 0;
        _this.zombieCurNum = 0;
        _this.zombieMaxNum = 0;
        _this.zombieLength = 2;
        _this.zombieArr = ["zombie_basic", "zombie_run", "zombie_drum", "zombie_jump", "zombie_bomb", "zombie_tank", "zombie_poison"];
        _this.bossArr = ["boss1", "boss2", "boss3", "boss4", "boss5", "boss6", "boss7", "boss8", "boss9", "boss10", "boss11", "boss12", "boss13"]; //, "boss4", "boss5", "boss6", "boss7", "boss8", "boss9", "boss10", "boss11", "boss12", "boss13"
        _this.boss2Arr = [];
        _this.reinBossArr = ["boss1", "boss2", "boss3", "boss4", "boss5", "boss6", "boss7", "boss8", "boss9", "boss10", "boss11", "boss12", "boss13"];
        _this.reinBoss = 0;
        _this.Rein = 1;
        /** 获取僵尸生成坐标 */
        _this._recursionCount = 0;
        _this.lastTime = 0;
        _this.safeTime = 40;
        _this.startPos = null;
        _this.isUp = false;
        _this.isDown = false;
        _this.isLeft = false;
        _this.isRight = false;
        _this.isPre = true;
        _this.clipNameArr = {};
        _this.isFail = false;
        _this.isWin = false;
        _this.isRevive = false;
        /**
        * 震屏
        * @param dis 范围
        * @param times 次数
        * @param isVibrate 是否震动
        * @returns
        */
        _this._timeArr = [0, 0.04, 0.05, 0.06, 0.07];
        _this._disArr = [0, 3, 10, 20, 30];
        _this._vibrateTime = 0; // 震动时间
        return _this;
    }
    GameMgr.prototype.nodeGet = function (name, prefab) {
        var node = null;
        // 创建新的节点池
        if (!this.nodePoolObj[name]) {
            this.nodePoolObj[name] = new cc.NodePool();
        }
        // 从节点池中获取节点
        if (this.nodePoolObj[name].size()) {
            node = this.nodePoolObj[name].get();
        }
        else if (prefab && prefab.isValid) {
            node = cc.instantiate(prefab);
        }
        // 防止预制体和节点名字不同
        if (node) {
            node.name = name;
        }
        return node;
    };
    GameMgr.prototype.nodePut = function (name, node) {
        if (this.nodePoolObj[name] && node && node.isValid) {
            this.nodePoolObj[name].put(node);
        }
        else {
            cc.log("回收出错: ", name);
        }
    };
    ;
    GameMgr.prototype.onLoad = function () {
        exports.gameMgr = this;
        exports.gameMgr.mainCamera.zoomRatio = 0.65;
        CocosZ_1.cocosz.pauseCount = 0;
    };
    GameMgr.prototype.start = function () {
        this.mainCamereRootNode.setContentSize(cc.winSize);
        this.mainCamereRootNode.width += 500;
        this.mainCamereRootNode.height += 500;
        // 飞机任务提示
        if (this.fjTip) {
            if ([5, 7].includes(CocosZ_1.cocosz.gameMode)) {
                this.fjTip.active = false;
            }
            else {
                this.fjTip.active = true;
                this.fjTip.zIndex = Constant_1.ZindexLayer.zindex_max;
            }
        }
    };
    GameMgr.prototype.lateUpdate = function () {
        if (CocosZ_1.cocosz.isPause || exports.gameMgr.isWin || exports.gameMgr.isFail)
            return;
        this.cameraFollow();
    };
    GameMgr.prototype.initPos = function () {
        var _this = this;
        if (CocosZ_1.cocosz.gameMode == 7) {
            // 坐标
            // rolePos0
            var bluePos = cc.find('posLayer/bluePos', exports.gameMgr.map);
            if (bluePos)
                this.posObj["bluePos"] = bluePos.getPosition();
            // rolePos1
            var redPos = cc.find('posLayer/redPos', exports.gameMgr.map);
            if (redPos)
                this.posObj["redPos"] = redPos.getPosition();
            // path0
            this.posObj["pathPos0"] = [];
            var pathPos0 = cc.find('posLayer/pathPos0', exports.gameMgr.map);
            pathPos0 && pathPos0.children.forEach(function (node) { _this.posObj["pathPos0"].push(node.getPosition()); });
            // path1
            this.posObj["pathPos1"] = [];
            var pathPos1 = cc.find('posLayer/pathPos1', exports.gameMgr.map);
            pathPos1 && pathPos1.children.forEach(function (node) { _this.posObj["pathPos1"].push(node.getPosition()); });
            // path2
            this.posObj["pathPos2"] = [];
            var pathPos2 = cc.find('posLayer/pathPos2', exports.gameMgr.map);
            pathPos2 && pathPos2.children.forEach(function (node) { _this.posObj["pathPos2"].push(node.getPosition()); });
        }
    };
    GameMgr.prototype.startGame = function () {
        var _this = this;
        // 添加提示层
        this.tipLayer = new cc.Node();
        this.tipLayer.name = "tipLayer";
        this.tipLayer.zIndex = Constant_1.ZindexLayer.zindex_roleLabel;
        this.tipLayer.setPosition(cc.Vec2.ZERO);
        this.tipLayer.setParent(exports.gameMgr.map);
        // 小地图
        if (CocosZ_1.cocosz.gameMode == 6 || CocosZ_1.cocosz.gameMode == 8) {
            this.schedule(function () { _this.update_model6_shuxing(); }, 1);
        }
        this.initPlayer();
    };
    GameMgr.prototype.initPlayer = function () {
        // 僵尸模式
        if (CocosZ_1.cocosz.gameMode == 6 || CocosZ_1.cocosz.gameMode == 8) {
            var player1 = cc.instantiate(this.player);
            player1.scale = 0.6;
            player1.setPosition(cc.v2(2000, 0).rotateSelf(2 * Math.PI * Math.random()));
            player1.setParent(this.map);
            this.totalNum++;
            // 飞机运输玩家
            this.fjEffect();
        }
    };
    GameMgr.prototype.fjEffect = function () {
        var _this = this;
        if (this.fj && this.playerTs) {
            this.uiGamePage.active = false;
            // 玩家
            this.scheduleOnce(function () {
                _this.playerTs.node.opacity = 0;
                _this.playerTs.playerMess.opacity = 1;
                _this.playerTs.ghAniNode.opacity = 1;
            });
            // 相机
            this.followNode = this.fj;
            // 飞机
            this.fj.active = true;
            this.fj.setParent(exports.gameMgr.map);
            this.scheduleOnce(function () { _this.fj.zIndex = Constant_1.ZindexLayer.zindex_max; });
            var targetPos = cc.v2(this.playerTs.node.x, this.playerTs.node.y + 500);
            var dis = targetPos.sub(this.fj.getPosition());
            this.fj.scaleX = dis.x < 0 ? -1 : 1;
            // 动画
            var fjAni_1 = this.fj.getComponent(sp.Skeleton);
            fjAni_1.addAnimation(0, "animation0", true);
            // 音效
            CocosZ_1.cocosz.audioMgr.playEffect("fj", true, 1);
            // 移动
            var t = dis.mag() / 800;
            cc.tween(this.fj)
                .to(t, { x: targetPos.x, y: targetPos.y })
                .call(function () {
                fjAni_1.setAnimation(0, "animation1", false);
                fjAni_1.addAnimation(0, "animation2", false);
                fjAni_1.addAnimation(0, "animation4", false);
                fjAni_1.addAnimation(0, "animation5", true);
            })
                .delay(2)
                .call(function () {
                // 隐藏提示
                if (_this.fjTip) {
                    _this.fjTip.active = false;
                }
                _this.fj.zIndex = Constant_1.ZindexLayer.zindex_max - 1;
                _this.playerTs.node.zIndex = Constant_1.ZindexLayer.zindex_max;
                // 玩家下降
                _this.playerTs.node.opacity = 255;
                _this.playerTs.rig.active = false;
                _this.followNode = _this.playerTs.node;
                _this.playerTs.node.y += 600;
                cc.tween(_this.playerTs.node)
                    .delay(0.5)
                    .to(1, { y: _this.playerTs.node.y - 600 })
                    .call(function () {
                    _this.uiGamePage.active = true;
                    _this.playerTs.node.zIndex = Constant_1.ZindexLayer.zindex_player;
                    _this.playerTs.rig.active = true;
                    _this.playerTs.playerMess.opacity = 255;
                    _this.playerTs.ghAniNode.opacity = 255;
                    _this.playerTs.updateAni("daiji_body", true);
                    // 初始化游戏
                    _this.initGame();
                    if (CocosZ_1.cocosz.gameMode == 6 || CocosZ_1.cocosz.gameMode == 8) {
                        // 生成僵尸计时
                        _this.schedule(_this.createZombieCount, 1);
                    }
                    else {
                        cc.log("模式有问题");
                    }
                })
                    .start();
            })
                .delay(2)
                .call(function () {
                _this.fj.zIndex = Constant_1.ZindexLayer.zindex_max;
                fjAni_1.setAnimation(0, "animation6", false);
                fjAni_1.addAnimation(0, "animation7", false);
                fjAni_1.addAnimation(0, "animation9", false);
                fjAni_1.addAnimation(0, "animation0", true);
            })
                .delay(2)
                .to(2, { position: cc.v3(dis.normalize().mulSelf(2000).add(dis)) })
                .call(function () {
                CocosZ_1.cocosz.audioMgr.stopEffect("fj");
                _this.fj.destroy();
            })
                .start();
        }
    };
    GameMgr.prototype.showGameTime = function () {
        if (this.model6_timeLabel && this.model6_timeLabel.isValid) {
            var s = this.GameTime; // 秒
            var m = 0; // 分
            var h = 0; // 小时
            if (s > 60) {
                m = Math.floor(s / 60);
                s = Math.floor(s % 60);
                if (m > 60) {
                    h = Math.floor(m / 60);
                    m = Math.floor(m % 60);
                }
            }
            var r = "";
            r += (h == 0 ? "" : h + ":");
            r += (m >= 10 ? "" + m : "0" + m);
            r += (s >= 10 ? ":" + s : ":0" + s);
            this.timeStr = r;
            this.model6_timeLabel.string = r;
        }
    };
    // 刷新血滴
    GameMgr.prototype.update_model6_xuedi = function () {
        if (exports.gameMgr.playerTs && exports.gameMgr.playerTs.hpNumNode && exports.gameMgr.playerTs.hpNumNode.isValid) {
            exports.gameMgr.playerTs.hpNumNode.active = true;
            exports.gameMgr.playerTs.hpNumNode.width = Math.min(250, exports.gameMgr.playerTs.totleHp * 50);
            exports.gameMgr.playerTs.hpNumNode.children.forEach(function (n, i) {
                if (i < exports.gameMgr.playerTs.totleHp) {
                    n.active = true;
                    if (i < exports.gameMgr.playerTs.HP) {
                        n.children[1].opacity = 255;
                    }
                    else {
                        n.children[1].opacity = 0;
                    }
                }
                else {
                    n.active = false;
                }
            });
        }
    };
    // 刷新属性
    GameMgr.prototype.update_model6_shuxing = function () {
        if (UpgradeMgr_1.upgradeMgr && exports.gameMgr && exports.gameMgr.model6_shuxing && exports.gameMgr.model6_shuxing.isValid && exports.gameMgr.model6_shuxing.active) {
            // 等级
            this.model6_shuxing.children[0].getComponent(cc.Label).string = UpgradeMgr_1.upgradeMgr.curLevel.toString();
            // 伤害
            this.model6_shuxing.children[1].getComponent(cc.Label).string = (exports.gameMgr.playerTs.atkNum * exports.gameMgr.playerTs.atkRate).toFixed(0);
            // 射速
            this.model6_shuxing.children[2].getComponent(cc.Label).string = (exports.gameMgr.playerTs.atkSpeed * exports.gameMgr.playerTs.atkSpeedRate).toFixed(1);
            // 换弹
            this.model6_shuxing.children[3].getComponent(cc.Label).string = (exports.gameMgr.playerTs.reloadSpeed * exports.gameMgr.playerTs.reloadRate).toFixed(1);
            // 弹夹容量
            this.model6_shuxing.children[4].getComponent(cc.Label).string = exports.gameMgr.playerTs.curWeapon.bulletNum.toString();
            // 移动速度
            this.model6_shuxing.children[5].getComponent(cc.Label).string = (exports.gameMgr.playerTs.MoveSpeed * exports.gameMgr.playerTs.speedRate).toFixed(0);
            // 拾取范围
            this.model6_shuxing.children[6].getComponent(cc.Label).string = UpgradeMgr_1.upgradeMgr.jingyanRange.toString();
        }
    };
    GameMgr.prototype.showBossHp = function (rate) {
        if (rate > 0) {
            if (this.model6_bossBar && cc.isValid(this.model6_bossBar)) {
                this.model6_bossBar.node.active = true;
                this.model6_bossBar.progress = rate;
            }
            if (this.model6_jingyanBar && cc.isValid(this.model6_jingyanBar)) {
                this.model6_jingyanBar.node.active = false;
            }
            if (this.model6_levelLabel && cc.isValid(this.model6_levelLabel)) {
                this.model6_levelLabel.node.active = false;
            }
        }
        else {
            if (this.model6_bossBar && cc.isValid(this.model6_bossBar)) {
                this.model6_bossBar.node.active = false;
                this.model6_bossBar.progress = rate;
            }
            if (this.model6_jingyanBar && cc.isValid(this.model6_jingyanBar)) {
                this.model6_jingyanBar.node.active = true;
            }
            if (this.model6_levelLabel && cc.isValid(this.model6_levelLabel)) {
                this.model6_levelLabel.node.active = true;
            }
        }
    };
    /** 创建僵尸计时 */
    GameMgr.prototype.createZombieCount = function () {
        var _this = this;
        if (CocosZ_1.cocosz.isPause || exports.gameMgr.isWin || exports.gameMgr.isFail)
            return;
        // 游戏计时
        this.GameTime++;
        this.showGameTime();
        // 生成逻辑
        if (this.boss_border)
            return;
        // 僵尸生成时间计时
        this.zombieTime++;
        var count = 1;
        var createBossTime = 300;
        var zombie_groupTime = 30;
        var zombie_groipMaxNum = 100;
        var zombie_groupMinNum = 50;
        if (CocosZ_1.cocosz.gameMode == 8) {
            createBossTime = 480;
            zombie_groupTime = 60;
            zombie_groipMaxNum = Math.ceil(Constant_1.default.currentLevel / 3) * 20 + 20;
            zombie_groupMinNum = Math.ceil(Constant_1.default.currentLevel / 3) * 8 + 10;
            this.zombieLength = Math.floor(Constant_1.default.currentLevel / 2) + 2;
            if (this.zombieLength >= this.zombieArr.length) {
                this.zombieLength = this.zombieArr.length;
            }
        }
        console.log(zombie_groupTime);
        /** 创建Boss */
        if (0 === this.zombieTime % createBossTime) { //300
            // this.unscheduleAllCallbacks();
            this.createBossZombie();
            // 更新普通僵尸
            if (CocosZ_1.cocosz.gameMode == 6) {
                if (this.zombieLength < this.zombieArr.length)
                    this.zombieLength++;
            }
        }
        // 大波僵尸
        else if (0 === this.zombieTime % zombie_groupTime) { //30
            // console.log('--------创建大量怪物-----------');
            // 提示
            if (this.model6_ts) {
                this.model6_ts.active = true;
                this.scheduleOnce(function () { _this.model6_ts.active = false; }, 3);
                var spAni = this.model6_ts.getComponent(sp.Skeleton);
                spAni.setSkin("sclx_" + CocosZ_1.cocosz.curLanguage);
                spAni.setAnimation(0, "animation", true);
            }
            // 僵尸数量
            this.zombieMaxNum = zombie_groupMinNum + Math.floor(this.zombieTime / 30) * 20; //20,40,10
            if (this.zombieMaxNum > zombie_groipMaxNum)
                this.zombieMaxNum = zombie_groipMaxNum; //40
            // 小于最大数量继续生成
            if (this.zombieCurNum < this.zombieMaxNum) {
                count = this.zombieMaxNum - this.zombieCurNum;
                // 分成k份生成，每份10
                var k = Math.ceil(count / 25);
                // 分帧创建
                var angle_1 = 0;
                var inter_1 = 36;
                for (var i = 0; i < k; i++) {
                    this.schedule(function () {
                        angle_1 += inter_1;
                        _this.createCommonZombie(cc.winSize.height / 2.5 / _this.mainCamera.zoomRatio, angle_1);
                    }, 0.1, Math.ceil(count / k), i);
                }
            }
            // 生成击败boss
            for (var i = this.boss2Arr.length - 1; i >= 0 && i >= this.boss2Arr.length - 2; i--) {
                var resName = this.boss2Arr[i];
                cc.log("创建尸潮boss: ", resName);
                if (resName) {
                    this.createZombie(resName, exports.gameMgr.playerTs.node.getPosition(), cc.winSize.width / 2 / this.mainCamera.zoomRatio, null, false, true);
                }
            }
        }
        // 僵尸继续
        else if (0 === this.zombieTime % 51 || 0 === this.zombieTime % 52 || 0 === this.zombieTime % 53 || 0 === this.zombieTime % 54 || 0 === this.zombieTime % 55) {
        }
        // 随机少量僵尸
        else {
            // console.log('--------创建少量怪物-----------');
            // 僵尸数量
            this.zombieMaxNum = 5 + Math.floor(this.zombieTime / 20) * 5; //5,20,5
            if (this.zombieMaxNum > 40)
                this.zombieMaxNum = 40; //20
            // 小于最大数量继续生成
            if (this.zombieCurNum < this.zombieMaxNum) {
                // 随机数量
                count = Math.ceil(Math.random() * 8);
                this.schedule(function () { _this.createCommonZombie(cc.winSize.height / 2.5 / _this.mainCamera.zoomRatio); }, 0.1, count);
            }
        }
    };
    /** 创建普通僵尸 */
    GameMgr.prototype.createCommonZombie = function (dis, angle) {
        if (this.bossShow) {
            return;
        }
        var index = Math.floor(Math.random() * this.zombieLength);
        var resName = this.zombieArr[index];
        if (resName) {
            this.createZombie(resName, exports.gameMgr.playerTs.node.getPosition(), dis, angle);
        }
    };
    /** 创建Boss僵尸 */
    GameMgr.prototype.createBossZombie = function () {
        var _this = this;
        if (CocosZ_1.cocosz.gameMode == 6) {
            if (this.bossArr.length > 0) {
                this.createBossBorder();
                // 提示
                if (this.model6_ts) {
                    this.model6_ts.active = true;
                    this.scheduleOnce(function () { _this.model6_ts.active = false; }, 3);
                    var spAni = this.model6_ts.getComponent(sp.Skeleton);
                    spAni.setSkin("bosslx_" + CocosZ_1.cocosz.curLanguage);
                    spAni.setAnimation(0, "animation", true);
                }
                // boss
                var resName = this.bossArr.shift();
                var centerPos = exports.gameMgr.playerTs.node.getPosition();
                if (this.boss_border) {
                    centerPos = this.boss_border.getPosition();
                }
                if (resName) {
                    this.boss2Arr.push(resName);
                    this.createZombie(resName, centerPos, 300, null, true);
                }
            }
            else {
                this.reinBoss++;
                this.createBossBorder();
                // 提示
                if (this.model6_ts) {
                    this.model6_ts.active = true;
                    this.scheduleOnce(function () { _this.model6_ts.active = false; }, 3);
                    var spAni = this.model6_ts.getComponent(sp.Skeleton);
                    spAni.setSkin("bosslx_" + CocosZ_1.cocosz.curLanguage);
                    spAni.setAnimation(0, "animation", true);
                }
                // boss
                var resName = this.reinBossArr.shift();
                console.log('--------newboss删除-------' + this.reinBossArr.length);
                if (this.reinBossArr.length == 0) {
                    this.reinBossArr = ["boss1", "boss2", "boss3", "boss4", "boss5", "boss6", "boss7", "boss8", "boss9", "boss10", "boss11", "boss12", "boss13"];
                    this.Rein++;
                    this.boss2Arr = [];
                }
                var centerPos = exports.gameMgr.playerTs.node.getPosition();
                if (this.boss_border) {
                    centerPos = this.boss_border.getPosition();
                }
                if (resName) {
                    this.boss2Arr.push(resName);
                    this.createZombie(resName, centerPos, 300, null, true);
                }
            }
        }
        else if (CocosZ_1.cocosz.gameMode == 8) { //关卡模式boss
            this.createBossBorder();
            // 提示
            if (this.model6_ts) {
                this.model6_ts.active = true;
                this.scheduleOnce(function () { _this.model6_ts.active = false; }, 3);
                var spAni = this.model6_ts.getComponent(sp.Skeleton);
                spAni.setSkin("bosslx_" + CocosZ_1.cocosz.curLanguage);
                spAni.setAnimation(0, "animation", true);
            }
            // boss
            var resName = this.bossArr[Constant_1.default.currentLevel - 1];
            var centerPos = exports.gameMgr.playerTs.node.getPosition();
            if (this.boss_border) {
                centerPos = this.boss_border.getPosition();
            }
            if (resName) {
                this.boss2Arr.push(resName);
                this.createZombie(resName, centerPos, 300, null, true);
            }
        }
    };
    /** 创建boss边界 */
    GameMgr.prototype.createBossBorder = function () {
        // 边界
        var pre = CocosZ_1.cocosz.resMgr.getRes("boss_border", cc.Prefab);
        if (pre) {
            this.boss_border = cc.instantiate(pre);
            this.boss_border.setPosition(exports.gameMgr.playerTs.node.getPosition());
            if (this.boss_border.x - this.boss_border.width / 2 < -exports.gameMgr.mapSize.width / 2) {
                this.boss_border.x = -exports.gameMgr.mapSize.width / 2 + this.boss_border.width / 2 + 100;
            }
            else if (this.boss_border.x + this.boss_border.width / 2 > exports.gameMgr.mapSize.width / 2) {
                this.boss_border.x = exports.gameMgr.mapSize.width / 2 - this.boss_border.width / 2 - 100;
            }
            if (this.boss_border.y - this.boss_border.height / 2 < -exports.gameMgr.mapSize.height / 2) {
                this.boss_border.y = -exports.gameMgr.mapSize.height / 2 + this.boss_border.height / 2 + 100;
            }
            else if (this.boss_border.y + this.boss_border.height / 2 > exports.gameMgr.mapSize.height / 2) {
                this.boss_border.y = exports.gameMgr.mapSize.height / 2 - this.boss_border.height / 2 - 300;
            }
            this.boss_border.setParent(this.map);
        }
    };
    /** 创建僵尸 */
    GameMgr.prototype.createZombie = function (resName, center, dis, angle, isBoss, isElite) {
        var _this = this;
        if (isBoss === void 0) { isBoss = false; }
        if (isElite === void 0) { isElite = false; }
        // 预制体
        var prefab = CocosZ_1.cocosz.resMgr.getRes(resName, cc.Prefab);
        if (prefab) {
            // 坐标
            this._recursionCount = 0;
            var pos = this.getZombieBirthPos(center, dis, angle);
            if (pos) {
                // 僵尸
                var newZombie = this.nodeGet(resName, prefab);
                if (newZombie) {
                    var ts = newZombie.getComponent(ZombieBase_1.default);
                    if (ts && isBoss) {
                        // ts.totleHp += this.Rein * 0.2 * ts.totleHp;
                        // ts.atkRange += this.Rein * 0.05 * ts.atkRange;
                        // ts.MoveSpeed += this.Rein * 0.08 * ts.MoveSpeed;
                        ts.isBoss = true;
                        this.bossShow = true;
                    }
                    ts.isElite = isElite;
                    ts.reinNum = this.Rein;
                    newZombie.setPosition(pos);
                    newZombie.setParent(exports.gameMgr.map);
                    if (ts)
                        ts.initNode();
                }
            }
        }
        else {
            CocosZ_1.cocosz.resMgr.loadAndCacheRes("prefab_zombie/" + resName, cc.Prefab, null, function (err, res) {
                console.log(err);
                if (!err) {
                    _this.createZombie(resName, center, dis, angle, isBoss);
                }
            });
        }
    };
    GameMgr.prototype.getZombieBirthPos = function (center, dis, angle) {
        if (++this._recursionCount > 100) {
            return null;
        }
        var radians = 0;
        if (angle == null || angle == undefined) {
            radians = 2 * Math.PI * Math.random();
        }
        else {
            radians = cc.misc.degreesToRadians(angle);
        }
        var dif = cc.v2(dis + Math.floor(200 * Math.random()), 0).rotateSelf(radians);
        var pos = center.add(dif);
        if (pos.x > -exports.gameMgr.mapSize.width / 2 + 400 && pos.x < exports.gameMgr.mapSize.width / 2 - 400 &&
            pos.y < exports.gameMgr.mapSize.height / 2 - 400 && pos.y > -exports.gameMgr.mapSize.height / 2 + 400) {
            return pos;
        }
        else {
            return this.getZombieBirthPos(center, dis);
        }
    };
    GameMgr.prototype.initGame = function () {
        var _this = this;
        this.startPos = this.yaogan.getPosition();
        this.isGameStart = true;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyUp, this);
        this.moveArea.on(cc.Node.EventType.TOUCH_START, (function (event) {
            var pos = event.getLocation();
            pos = _this.node.convertToNodeSpaceAR(pos);
            _this.yaogan.setPosition(pos);
        }), this);
        this.moveArea.on(cc.Node.EventType.TOUCH_MOVE, (function (event) {
            var div = event.getLocation().sub(event.getStartLocation());
            if (div.mag() > 160) {
                div = div.mul(160 / div.mag());
            }
            _this.yaogan.children[0].setPosition(div);
            exports.gameMgr.playerTs.moveDir = div.normalize();
        }), this);
        this.moveArea.on(cc.Node.EventType.TOUCH_END, (function (event) {
            _this.yaogan.setPosition(_this.startPos);
            _this.yaogan.children[0].setPosition(cc.v2(0, 0));
            exports.gameMgr.playerTs.moveDir = cc.v2(0, 0);
        }), this);
        this.moveArea.on(cc.Node.EventType.TOUCH_CANCEL, (function (event) {
            _this.yaogan.setPosition(_this.startPos);
            _this.yaogan.children[0].setPosition(cc.v2(0, 0));
            exports.gameMgr.playerTs.moveDir = cc.v2(0, 0);
        }), this);
    };
    GameMgr.prototype.keyDown = function (event) {
        switch (event.keyCode) {
            case 87: {
                if (!this.isUp) {
                    this.isUp = true;
                    this.setDir();
                }
                break;
            }
            case 83: {
                if (!this.isDown) {
                    this.isDown = true;
                    this.setDir();
                }
                break;
            }
            case 65: {
                if (!this.isLeft) {
                    this.isLeft = true;
                    this.setDir();
                }
                break;
            }
            case 68: {
                if (!this.isRight) {
                    this.isRight = true;
                    this.setDir();
                }
                break;
            }
        }
    };
    GameMgr.prototype.keyUp = function (event) {
        switch (event.keyCode) {
            case 87: {
                this.isUp = false;
                this.setDir();
                break;
            }
            case 83: {
                this.isDown = false;
                this.setDir();
                break;
            }
            case 65: {
                this.isLeft = false;
                this.setDir();
                break;
            }
            case 68: {
                this.isRight = false;
                this.setDir();
                break;
            }
        }
    };
    GameMgr.prototype.cameraFollow = function () {
        var pos_to = null;
        var t = 0.1;
        if (this.followNode && this.followNode.isValid) {
            pos_to = this.followNode.getPosition();
            t = 0.1;
        }
        if (pos_to) {
            var pos_from = this.mainCamereRootNode.getPosition();
            var pos_out = cc.Vec2.ZERO;
            var ratio = this.mainCamera.zoomRatio;
            var winSize = new cc.Size(cc.winSize.width / ratio, cc.winSize.height / ratio);
            if (CocosZ_1.cocosz.gameMode == 7) {
                // 无边界
            }
            else {
                // 相机边界
                if ((pos_to.x + winSize.width / 2) > exports.gameMgr.mapSize.width / 2) {
                    pos_to.x = exports.gameMgr.mapSize.width / 2 - winSize.width / 2;
                }
                else if ((pos_to.x - winSize.width / 2) < -exports.gameMgr.mapSize.width / 2) {
                    pos_to.x = -exports.gameMgr.mapSize.width / 2 + winSize.width / 2;
                }
                if ((pos_to.y + winSize.height / 2) > exports.gameMgr.mapSize.height / 2) {
                    pos_to.y = exports.gameMgr.mapSize.height / 2 - winSize.height / 2;
                }
                else if ((pos_to.y - winSize.height / 2) < -exports.gameMgr.mapSize.height / 2) {
                    pos_to.y = -exports.gameMgr.mapSize.height / 2 + winSize.height / 2;
                }
            }
            if (pos_to.sub(pos_from).mag() < 1000) {
                cc.Vec2.lerp(pos_out, pos_from, pos_to, t);
                this.mainCamereRootNode.setPosition(pos_out);
            }
            else {
                this.mainCamereRootNode.setPosition(pos_to);
                // 更新节点透明度
                exports.gameMgr.setMapTs && exports.gameMgr.setMapTs.checkAllNode();
            }
        }
    };
    GameMgr.prototype.setDir = function () {
        var moveDir = cc.v2(0, 0);
        if (this.isUp) {
            moveDir.y++;
        }
        if (this.isLeft) {
            moveDir.x--;
        }
        if (this.isRight) {
            moveDir.x++;
        }
        if (this.isDown) {
            moveDir.y--;
        }
        this.playerTs.moveDir = moveDir.normalize();
    };
    GameMgr.prototype.restart = function () { };
    GameMgr.prototype.useMeleeWeapon = function () { };
    GameMgr.prototype.useRangedWeapon = function () {
        this.playerTs.changeCurWeapon(this.playerTs.rangedWeapon);
    };
    GameMgr.prototype.useRangedWeaponAd = function () {
        this.playerTs.changeCurWeapon(this.playerTs.rangedWeaponAd);
    };
    GameMgr.prototype.getNewWeapon = function () {
        CocosZ_1.cocosz.audioMgr.playEffect("changeWeapon");
        this.playerTs.setNewWeapon();
    };
    GameMgr.prototype.playEffect = function (name, node, interval) {
        var _this = this;
        if (interval === void 0) { interval = 0.2; }
        if (exports.gameMgr.isWin || exports.gameMgr.isFail || CocosZ_1.cocosz.isPause)
            return;
        if (this.clipNameArr[name]) {
            return;
        }
        var voice = 1;
        if (node && node.isValid && node.parent && node.parent.isValid) {
            var pos = node.getPosition();
            pos = node.parent.convertToWorldSpaceAR(pos);
            var pos2 = this.playerTs.node.getPosition();
            pos2 = this.playerTs.node.parent.convertToWorldSpaceAR(pos2);
            var dt = pos.sub(pos2).mag();
            if (dt > 2000) {
                return;
            }
        }
        CocosZ_1.cocosz.audioMgr.playEffect(name, false, voice);
        if (interval > 0) {
            this.clipNameArr[name] = 1;
            this.scheduleOnce(function () { _this.clipNameArr[name] = 0; }, interval);
        }
    };
    GameMgr.prototype.playClip = function (clip, node, interval) {
        var _this = this;
        if (interval === void 0) { interval = 0.2; }
        if (exports.gameMgr.isWin || exports.gameMgr.isFail || CocosZ_1.cocosz.isPause)
            return;
        if (this.clipNameArr[clip.name]) {
            return;
        }
        var voice = 1;
        if (node && node.isValid && node.parent && node.parent.isValid) {
            var pos = node.getPosition();
            pos = node.parent.convertToWorldSpaceAR(pos);
            var pos2 = this.playerTs.node.getPosition();
            pos2 = this.playerTs.node.parent.convertToWorldSpaceAR(pos2);
            var dt = pos.sub(pos2).mag();
            if (dt > 2000) {
                return;
            }
        }
        CocosZ_1.cocosz.audioMgr.playClip(clip, false, voice);
        // 记录
        if (interval > 0) {
            this.clipNameArr[clip.name] = 1;
            this.scheduleOnce(function () { _this.clipNameArr[clip.name] = 0; }, interval);
        }
    };
    /** 文字提示效果 */
    GameMgr.prototype.showRoleTip = function (node, str, labelColor) {
        var _this = this;
        if (labelColor === void 0) { labelColor = cc.Color.WHITE; }
        if (node && node.isValid && this.hpTip && this.hpTip.isValid && exports.gameMgr.tipLayer) {
            var tipNode_1 = this.nodeGet("hpTip", this.hpTip);
            if (tipNode_1) {
                tipNode_1.setParent(exports.gameMgr.tipLayer);
                // 初始化
                tipNode_1.setPosition(node.x + 200 * (Math.random() - 0.5), node.y + node.height / 2);
                tipNode_1.opacity = 255;
                tipNode_1.color = labelColor;
                tipNode_1.scale = (labelColor == cc.Color.WHITE ? 1 : 1.2);
                // 字体内容
                var tipLabel = tipNode_1.getComponent(cc.Label);
                if (tipLabel) {
                    tipLabel.string = str;
                }
                // 动效
                tipNode_1.stopAllActions();
                cc.tween(tipNode_1)
                    .by(0.5, { y: 20, scale: 1, })
                    .by(0.3, { y: 10, scale: -1, opacity: -255 })
                    .call(function () { _this.nodePut("hpTip", tipNode_1); })
                    .start();
            }
        }
    };
    GameMgr.prototype.fail = function () {
        var _this = this;
        if (this.isWin || this.isFail)
            return;
        CocosZ_1.cocosz.pauseCount++;
        this.isFail = true;
        this.unscheduleAllCallbacks();
        UpgradeMgr_1.upgradeMgr && UpgradeMgr_1.upgradeMgr.unscheduleAllCallbacks();
        this.scheduleOnce(function () {
            _this.qlzc.active = true;
            cc.tween(_this.qlzc)
                .delay(0.3)
                .call(function () { _this.qlzc.getChildByName("dian").children[0].active = true; })
                .delay(0.3)
                .call(function () { _this.qlzc.getChildByName("dian").children[1].active = true; })
                .delay(0.3)
                .call(function () { _this.qlzc.getChildByName("dian").children[2].active = true; })
                .delay(0.3)
                .call(function () {
                _this.qlzc.getChildByName("dian").children[0].active = false;
                _this.qlzc.getChildByName("dian").children[1].active = false;
                _this.qlzc.getChildByName("dian").children[2].active = false;
            })
                .union()
                .repeatForever()
                .start();
        }, 2);
        this.scheduleOnce(function () {
            CocosZ_1.cocosz.gameMgr.gameFailed();
        }, 4);
    };
    GameMgr.prototype.win = function () {
        var _this = this;
        if (this.isWin || this.isFail)
            return;
        CocosZ_1.cocosz.pauseCount++;
        this.isWin = true;
        this.unscheduleAllCallbacks();
        UpgradeMgr_1.upgradeMgr && UpgradeMgr_1.upgradeMgr.unscheduleAllCallbacks();
        this.scheduleOnce(function () {
            _this.qlzc.active = true;
            cc.tween(_this.qlzc)
                .delay(0.3)
                .call(function () { _this.qlzc.getChildByName("dian").children[0].active = true; })
                .delay(0.3)
                .call(function () { _this.qlzc.getChildByName("dian").children[1].active = true; })
                .delay(0.3)
                .call(function () { _this.qlzc.getChildByName("dian").children[2].active = true; })
                .delay(0.3)
                .call(function () {
                _this.qlzc.getChildByName("dian").children[0].active = false;
                _this.qlzc.getChildByName("dian").children[1].active = false;
                _this.qlzc.getChildByName("dian").children[2].active = false;
            })
                .union()
                .repeatForever()
                .start();
        }, 2);
        this.scheduleOnce(function () {
            CocosZ_1.cocosz.gameMgr.gameSuccess();
        }, 4);
    };
    GameMgr.prototype.revive = function () {
        this.isRevive = true;
        this.playerTs.revive();
    };
    GameMgr.prototype.shakeEffect = function (extent, times, isVibrate, vibrateType) {
        if (extent === void 0) { extent = 1; }
        if (times === void 0) { times = 1; }
        if (isVibrate === void 0) { isVibrate = true; }
        if (vibrateType === void 0) { vibrateType = YZ_Constant_1.VibrateType.Short; }
        // 镜头晃动
        var t = this._timeArr[extent];
        var dis = this._disArr[extent];
        if (extent > 0 && times > 0) {
            this.mainCamera.node.stopAllActions();
            this.mainCamera.node.setPosition(0, 0, 0);
            cc.tween(this.mainCamera.node)
                .to(t, { position: cc.v3(dis, dis) })
                .to(t, { position: cc.v3(0, -dis) })
                .to(t, { position: cc.v3(-dis, dis) })
                .to(t, { position: cc.v3(-dis, -dis) })
                .to(t, { position: cc.v3(0, dis) })
                .to(t, { position: cc.v3(0, 0) })
                .union()
                .repeat(times)
                .start();
        }
        // 震动,间隔1秒
        if (CocosZ_1.cocosz.dataMgr.ShakeOn) {
            var t_1 = new Date().getTime();
            if (t_1 - this._vibrateTime > 500) {
                this._vibrateTime = t_1;
                isVibrate && Utils_1.utils.vibrate(vibrateType);
            }
        }
    };
    GameMgr.prototype.guideSkip = function () {
        // 新手指引跳过
    };
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "red", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameMgr.prototype, "hpTip", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameMgr.prototype, "effect_fire", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameMgr.prototype, "effect_hit", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameMgr.prototype, "itemList", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameMgr.prototype, "itemEffect", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameMgr.prototype, "spark", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameMgr.prototype, "blood", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameMgr.prototype, "testPoint", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameMgr.prototype, "player", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameMgr.prototype, "jiaoyin", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "fj", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "fjTip", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "mainCamereRootNode", void 0);
    __decorate([
        property(cc.Camera)
    ], GameMgr.prototype, "mainCamera", void 0);
    GameMgr = __decorate([
        ccclass
    ], GameMgr);
    return GameMgr;
}(cc.Component));
exports.default = GameMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZVxcZ2FtZU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsOENBQTZDO0FBQzdDLDJEQUEwRDtBQUMxRCxrREFBOEQ7QUFDOUQsMkNBQTBDO0FBRTFDLHVFQUFzRTtBQUV0RSwyQ0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsK0ZBQStGO0FBRXBGLFFBQUEsT0FBTyxHQUFZLElBQUksQ0FBQztBQUduQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQWkrQkM7UUFoK0JHLGlCQUFXLEdBQW9DLEVBQUUsQ0FBQTtRQTBCakQsdUJBQWlCLEdBQVksSUFBSSxDQUFDO1FBRWxDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsY0FBUSxHQUFXLElBQUksQ0FBQztRQUN4QixjQUFRLEdBQVcsSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFlBQU0sR0FBVyxFQUFFLENBQUE7UUFFbkIsUUFBUTtRQUNSLFlBQU0sR0FBcUIsRUFBRSxDQUFBO1FBRzdCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFHcEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixjQUFRLEdBQWdCLEVBQUUsQ0FBQztRQUUzQixnQkFBVSxHQUFnQixFQUFFLENBQUM7UUFHN0IsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsWUFB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REMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDTztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNRO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkNBQ0s7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs0Q0FDTTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VDQUNDO0lBRW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0k7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDaUI7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDUztJQS9FWixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBaStCM0I7SUFBRCxjQUFDO0NBaitCRCxBQWkrQkMsQ0FqK0JvQyxFQUFFLENBQUMsU0FBUyxHQWkrQmhEO2tCQWorQm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwiLi4vLi4vY29tbW9uLXBsdWdpbi9TY3JpcHRzL1V0aWxzXCI7XHJcbmltcG9ydCBDb25zdGFudCwgeyBaaW5kZXhMYXllciB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuaW1wb3J0IHsgdXBncmFkZU1nciB9IGZyb20gXCIuL1VwZ3JhZGVNZ3JcIjtcclxuaW1wb3J0IHNldE1hcCBmcm9tIFwiLi9zZXRNYXBcIjtcclxuaW1wb3J0IHsgVmlicmF0ZVR5cGUgfSBmcm9tIFwiLi4vLi4vY29tbW9uLXBsdWdpbi9TY3JpcHRzL1laX0NvbnN0YW50XCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCBab21iaWVCYXNlIGZyb20gXCIuL1pvbWJpZUJhc2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vL3RhZzp7MDrmlLvlh7vojIPlm7TvvIwxOueOqeWutui6q+S9k++8jDI6546p5a626IW/6YOoIDYs5YeP6YCf77yMNyzmr5LljLogMTE65aKZ77yMMTI66YGT5YW377yMMTM65q2m5Zmo77yMMTQ66I2J77yMMTU65oi/5a2QLDE2OueJqei1hOeusSwgMTc65rW35rC0LCAxODrljYfnuqfku5MsIDE5OuaXl+WPsH1cclxuXHJcbmV4cG9ydCBsZXQgZ2FtZU1ncjogR2FtZU1nciA9IG51bGw7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWdyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIG5vZGVQb29sT2JqOiB7IFtuYW1lOiBzdHJpbmddOiBjYy5Ob2RlUG9vbCB9ID0ge31cclxuXHJcbiAgICBub2RlR2V0KG5hbWU6IHN0cmluZywgcHJlZmFiOiBjYy5QcmVmYWIpOiBjYy5Ob2RlIHtcclxuICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAgICAgLy8g5Yib5bu65paw55qE6IqC54K55rGgXHJcbiAgICAgICAgaWYgKCF0aGlzLm5vZGVQb29sT2JqW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZVBvb2xPYmpbbmFtZV0gPSBuZXcgY2MuTm9kZVBvb2woKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5LuO6IqC54K55rGg5Lit6I635Y+W6IqC54K5XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZVBvb2xPYmpbbmFtZV0uc2l6ZSgpKSB7XHJcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLm5vZGVQb29sT2JqW25hbWVdLmdldCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJlZmFiICYmIHByZWZhYi5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDpmLLmraLpooTliLbkvZPlkozoioLngrnlkI3lrZfkuI3lkIxcclxuICAgICAgICBpZiAobm9kZSkgeyBub2RlLm5hbWUgPSBuYW1lOyB9XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcbiAgICBub2RlUHV0KG5hbWU6IHN0cmluZywgbm9kZTogY2MuTm9kZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGVQb29sT2JqW25hbWVdICYmIG5vZGUgJiYgbm9kZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZVBvb2xPYmpbbmFtZV0ucHV0KG5vZGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuWbnuaUtuWHuumUmTogXCIsIG5hbWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhblNIb3dHYW1lQmFubmVyOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICB0aXBMYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBzZXRNYXBUczogc2V0TWFwID0gbnVsbDtcclxuICAgIHBsYXllclRzOiBQbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIHVpR2FtZVBhZ2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgbW92ZUFyZWE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgeWFvZ2FuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEJ0bkJ1bGxldDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcG9zT2JqOiBvYmplY3QgPSB7fVxyXG5cclxuICAgIC8vIOi6sueMq+eMq+aooeW8j1xyXG4gICAgZG1tQXJyOiBjYy5TcHJpdGVGcmFtZVtdID0gW11cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJlZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGhwVGlwOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGVmZmVjdF9maXJlOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGVmZmVjdF9oaXQ6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGl0ZW1MaXN0OiBjYy5QcmVmYWJbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGl0ZW1FZmZlY3Q6IGNjLlByZWZhYltdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNwYXJrOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJsb29kOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHRlc3RQb2ludDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcGxheWVyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGppYW95aW46IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZqOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZmpUaXA6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWFpbkNhbWVyZVJvb3ROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBtYWluQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBhdGs6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgc2FmZUNlbnRlcjogY2MuVmVjMiA9IGNjLnYyKDAsIDApO1xyXG4gICAgcmVkQ2lyY2xlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHJlZENpcmNsZTI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gbWFzazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyBtYXNrTXRsOiBjYy5NYXRlcmlhbCA9IG51bGw7XHJcblxyXG4gICAgbWFwU2l6ZTogY2MuU2l6ZSA9IGNjLndpblNpemU7XHJcbiAgICBtaW5pTWFwU2l6ZTogY2MuU2l6ZSA9IG51bGw7O1xyXG5cclxuICAgIGJ0blNraWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGJ0blNraWxsQWQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcmFuZ2VkV2VhcG9uTWVzczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICByYW5nZWRXZWFwb25BZE1lc3M6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgYW1tbzogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgYW1tb0FkOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAga3Q6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgbW9kZWw2X3RvdXhpYW5nOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIG1vZGVsNl9idG5TaHV4aW5nOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIG1vZGVsNl9zaHV4aW5nOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIG1vZGVsNl9qaW5neWFuQmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XHJcbiAgICBtb2RlbDZfbGV2ZWxMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgbW9kZWw2X3NraWxsU2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlldyA9IG51bGw7XHJcbiAgICBtb2RlbDZfc2tpbGxTY3JvbGxWaWV3X2NvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgbW9kZWw2X3NraWxsU2Nyb2xsVmlld19pdGVtOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIG1vZGVsNl90aW1lTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIG1vZGVsNl90czogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBtb2RlbDZfYm9zc0JhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG4gICAgdGltZVN0cjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICB0b3RhbE51bTogbnVtYmVyID0gMDtcclxuICAgIGRlYXRoTnVtOiBudW1iZXIgPSAwO1xyXG4gICAgcGxheWVyUmFuazogbnVtYmVyID0gMTtcclxuICAgIC8v6YCa5YWz5p2h5Lu277yaIDHlh7votKXmiYDmnInmlYzkurogMuWHu+i0pWJvc3MgM+aKtei+vuaSpOemu+eCuVxyXG4gICAgcGFzc0NvbmRpdGlvbjogbnVtYmVyID0gMTtcclxuICAgIGJvc3NOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIG1hcDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBzdGFydFBvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGF0a1JhbmdlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBjdXJUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgdGltZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBzbm93OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHFsemM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGJvc3NTaG93IDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBnYW1lTWdyID0gdGhpcztcclxuICAgICAgICBnYW1lTWdyLm1haW5DYW1lcmEuem9vbVJhdGlvID0gMC42NTtcclxuICAgICAgICBjb2Nvc3oucGF1c2VDb3VudCA9IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubWFpbkNhbWVyZVJvb3ROb2RlLnNldENvbnRlbnRTaXplKGNjLndpblNpemUpO1xyXG4gICAgICAgIHRoaXMubWFpbkNhbWVyZVJvb3ROb2RlLndpZHRoICs9IDUwMDtcclxuICAgICAgICB0aGlzLm1haW5DYW1lcmVSb290Tm9kZS5oZWlnaHQgKz0gNTAwO1xyXG5cclxuICAgICAgICAvLyDpo57mnLrku7vliqHmj5DnpLpcclxuICAgICAgICBpZiAodGhpcy5malRpcCkge1xyXG4gICAgICAgICAgICBpZiAoWzUsIDddLmluY2x1ZGVzKGNvY29zei5nYW1lTW9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmpUaXAuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZqVGlwLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZqVGlwLnpJbmRleCA9IFppbmRleExheWVyLnppbmRleF9tYXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGxhdGVVcGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNvY29zei5pc1BhdXNlIHx8IGdhbWVNZ3IuaXNXaW4gfHwgZ2FtZU1nci5pc0ZhaWwpIHJldHVybjtcclxuICAgICAgICB0aGlzLmNhbWVyYUZvbGxvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRQb3MoKSB7XHJcbiAgICAgICAgaWYgKGNvY29zei5nYW1lTW9kZSA9PSA3KSB7XHJcbiAgICAgICAgICAgIC8vIOWdkOagh1xyXG4gICAgICAgICAgICAvLyByb2xlUG9zMFxyXG4gICAgICAgICAgICBsZXQgYmx1ZVBvcyA9IGNjLmZpbmQoJ3Bvc0xheWVyL2JsdWVQb3MnLCBnYW1lTWdyLm1hcCk7XHJcbiAgICAgICAgICAgIGlmIChibHVlUG9zKSB0aGlzLnBvc09ialtcImJsdWVQb3NcIl0gPSBibHVlUG9zLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIC8vIHJvbGVQb3MxXHJcbiAgICAgICAgICAgIGxldCByZWRQb3MgPSBjYy5maW5kKCdwb3NMYXllci9yZWRQb3MnLCBnYW1lTWdyLm1hcCk7XHJcbiAgICAgICAgICAgIGlmIChyZWRQb3MpIHRoaXMucG9zT2JqW1wicmVkUG9zXCJdID0gcmVkUG9zLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIC8vIHBhdGgwXHJcbiAgICAgICAgICAgIHRoaXMucG9zT2JqW1wicGF0aFBvczBcIl0gPSBbXTtcclxuICAgICAgICAgICAgbGV0IHBhdGhQb3MwID0gY2MuZmluZCgncG9zTGF5ZXIvcGF0aFBvczAnLCBnYW1lTWdyLm1hcCk7XHJcbiAgICAgICAgICAgIHBhdGhQb3MwICYmIHBhdGhQb3MwLmNoaWxkcmVuLmZvckVhY2gobm9kZSA9PiB7IHRoaXMucG9zT2JqW1wicGF0aFBvczBcIl0ucHVzaChub2RlLmdldFBvc2l0aW9uKCkpOyB9KTtcclxuICAgICAgICAgICAgLy8gcGF0aDFcclxuICAgICAgICAgICAgdGhpcy5wb3NPYmpbXCJwYXRoUG9zMVwiXSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgcGF0aFBvczEgPSBjYy5maW5kKCdwb3NMYXllci9wYXRoUG9zMScsIGdhbWVNZ3IubWFwKTtcclxuICAgICAgICAgICAgcGF0aFBvczEgJiYgcGF0aFBvczEuY2hpbGRyZW4uZm9yRWFjaChub2RlID0+IHsgdGhpcy5wb3NPYmpbXCJwYXRoUG9zMVwiXS5wdXNoKG5vZGUuZ2V0UG9zaXRpb24oKSk7IH0pO1xyXG4gICAgICAgICAgICAvLyBwYXRoMlxyXG4gICAgICAgICAgICB0aGlzLnBvc09ialtcInBhdGhQb3MyXCJdID0gW107XHJcbiAgICAgICAgICAgIGxldCBwYXRoUG9zMiA9IGNjLmZpbmQoJ3Bvc0xheWVyL3BhdGhQb3MyJywgZ2FtZU1nci5tYXApO1xyXG4gICAgICAgICAgICBwYXRoUG9zMiAmJiBwYXRoUG9zMi5jaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4geyB0aGlzLnBvc09ialtcInBhdGhQb3MyXCJdLnB1c2gobm9kZS5nZXRQb3NpdGlvbigpKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICAvLyDmt7vliqDmj5DnpLrlsYJcclxuICAgICAgICB0aGlzLnRpcExheWVyID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICB0aGlzLnRpcExheWVyLm5hbWUgPSBcInRpcExheWVyXCI7XHJcbiAgICAgICAgdGhpcy50aXBMYXllci56SW5kZXggPSBaaW5kZXhMYXllci56aW5kZXhfcm9sZUxhYmVsO1xyXG4gICAgICAgIHRoaXMudGlwTGF5ZXIuc2V0UG9zaXRpb24oY2MuVmVjMi5aRVJPKTtcclxuICAgICAgICB0aGlzLnRpcExheWVyLnNldFBhcmVudChnYW1lTWdyLm1hcCk7XHJcbiAgICAgICAgLy8g5bCP5Zyw5Zu+XHJcbiAgICAgICAgaWYgKGNvY29zei5nYW1lTW9kZSA9PSA2IHx8IGNvY29zei5nYW1lTW9kZSA9PSA4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4geyB0aGlzLnVwZGF0ZV9tb2RlbDZfc2h1eGluZygpOyB9LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0UGxheWVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgR2FtZVRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBpc0dhbWVTdGFydDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcG9zTGlzdCA9IFtdO1xyXG4gICAgaW5pdFBsYXllcigpIHtcclxuICAgICAgICAvLyDlg7XlsLjmqKHlvI9cclxuICAgICAgICBpZiAoY29jb3N6LmdhbWVNb2RlID09IDYgfHwgY29jb3N6LmdhbWVNb2RlID09IDgpIHtcclxuICAgICAgICAgICAgbGV0IHBsYXllcjEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBsYXllcik7XHJcbiAgICAgICAgICAgIHBsYXllcjEuc2NhbGUgPSAwLjY7XHJcbiAgICAgICAgICAgIHBsYXllcjEuc2V0UG9zaXRpb24oY2MudjIoMjAwMCwgMCkucm90YXRlU2VsZigyICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCkpKTtcclxuICAgICAgICAgICAgcGxheWVyMS5zZXRQYXJlbnQodGhpcy5tYXApO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsTnVtKys7XHJcbiAgICAgICAgICAgIC8vIOmjnuacuui/kOi+k+eOqeWutlxyXG4gICAgICAgICAgICB0aGlzLmZqRWZmZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmpFZmZlY3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmogJiYgdGhpcy5wbGF5ZXJUcykge1xyXG4gICAgICAgICAgICB0aGlzLnVpR2FtZVBhZ2UuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIOeOqeWutlxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclRzLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclRzLnBsYXllck1lc3Mub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclRzLmdoQW5pTm9kZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8g55u45py6XHJcbiAgICAgICAgICAgIHRoaXMuZm9sbG93Tm9kZSA9IHRoaXMuZmo7XHJcbiAgICAgICAgICAgIC8vIOmjnuaculxyXG4gICAgICAgICAgICB0aGlzLmZqLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZmouc2V0UGFyZW50KGdhbWVNZ3IubWFwKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLmZqLnpJbmRleCA9IFppbmRleExheWVyLnppbmRleF9tYXg7IH0pXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRQb3MgPSBjYy52Mih0aGlzLnBsYXllclRzLm5vZGUueCwgdGhpcy5wbGF5ZXJUcy5ub2RlLnkgKyA1MDApO1xyXG4gICAgICAgICAgICBsZXQgZGlzID0gdGFyZ2V0UG9zLnN1Yih0aGlzLmZqLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmZqLnNjYWxlWCA9IGRpcy54IDwgMCA/IC0xIDogMTtcclxuICAgICAgICAgICAgLy8g5Yqo55S7XHJcbiAgICAgICAgICAgIGxldCBmakFuaSA9IHRoaXMuZmouZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICAgICAgZmpBbmkuYWRkQW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uMFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgLy8g6Z+z5pWIXHJcbiAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5RWZmZWN0KFwiZmpcIiwgdHJ1ZSwgMSk7XHJcbiAgICAgICAgICAgIC8vIOenu+WKqFxyXG4gICAgICAgICAgICBsZXQgdCA9IGRpcy5tYWcoKSAvIDgwMDtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5mailcclxuICAgICAgICAgICAgICAgIC50byh0LCB7IHg6IHRhcmdldFBvcy54LCB5OiB0YXJnZXRQb3MueSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZqQW5pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvbjFcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZqQW5pLmFkZEFuaW1hdGlvbigwLCBcImFuaW1hdGlvbjJcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZqQW5pLmFkZEFuaW1hdGlvbigwLCBcImFuaW1hdGlvbjRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZqQW5pLmFkZEFuaW1hdGlvbigwLCBcImFuaW1hdGlvbjVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KDIpXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6ZqQ6JeP5o+Q56S6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmpUaXApIHsgdGhpcy5malRpcC5hY3RpdmUgPSBmYWxzZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmouekluZGV4ID0gWmluZGV4TGF5ZXIuemluZGV4X21heCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJUcy5ub2RlLnpJbmRleCA9IFppbmRleExheWVyLnppbmRleF9tYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g546p5a625LiL6ZmNXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJUcy5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJUcy5yaWcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2xsb3dOb2RlID0gdGhpcy5wbGF5ZXJUcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyVHMubm9kZS55ICs9IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLnBsYXllclRzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHk6IHRoaXMucGxheWVyVHMubm9kZS55IC0gNjAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWlHYW1lUGFnZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJUcy5ub2RlLnpJbmRleCA9IFppbmRleExheWVyLnppbmRleF9wbGF5ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclRzLnJpZy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJUcy5wbGF5ZXJNZXNzLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclRzLmdoQW5pTm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJUcy51cGRhdGVBbmkoXCJkYWlqaV9ib2R5XCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yid5aeL5YyW5ri45oiPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmdhbWVNb2RlID09IDYgfHwgY29jb3N6LmdhbWVNb2RlID09IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDnlJ/miJDlg7XlsLjorqHml7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuY3JlYXRlWm9tYmllQ291bnQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLmqKHlvI/mnInpl67pophcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KDIpXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mai56SW5kZXggPSBaaW5kZXhMYXllci56aW5kZXhfbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZqQW5pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvbjZcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZqQW5pLmFkZEFuaW1hdGlvbigwLCBcImFuaW1hdGlvbjdcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZqQW5pLmFkZEFuaW1hdGlvbigwLCBcImFuaW1hdGlvbjlcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZqQW5pLmFkZEFuaW1hdGlvbigwLCBcImFuaW1hdGlvbjBcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KDIpXHJcbiAgICAgICAgICAgICAgICAudG8oMiwgeyBwb3NpdGlvbjogY2MudjMoZGlzLm5vcm1hbGl6ZSgpLm11bFNlbGYoMjAwMCkuYWRkKGRpcykpIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnN0b3BFZmZlY3QoXCJmalwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZqLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93R2FtZVRpbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWw2X3RpbWVMYWJlbCAmJiB0aGlzLm1vZGVsNl90aW1lTGFiZWwuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICBsZXQgcyA9IHRoaXMuR2FtZVRpbWU7Ly8g56eSXHJcbiAgICAgICAgICAgIGxldCBtID0gMDsvLyDliIZcclxuICAgICAgICAgICAgbGV0IGggPSAwOy8vIOWwj+aXtlxyXG4gICAgICAgICAgICBpZiAocyA+IDYwKSB7XHJcbiAgICAgICAgICAgICAgICBtID0gTWF0aC5mbG9vcihzIC8gNjApO1xyXG4gICAgICAgICAgICAgICAgcyA9IE1hdGguZmxvb3IocyAlIDYwKTtcclxuICAgICAgICAgICAgICAgIGlmIChtID4gNjApIHtcclxuICAgICAgICAgICAgICAgICAgICBoID0gTWF0aC5mbG9vcihtIC8gNjApO1xyXG4gICAgICAgICAgICAgICAgICAgIG0gPSBNYXRoLmZsb29yKG0gJSA2MCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHIgPSBcIlwiO1xyXG4gICAgICAgICAgICByICs9IChoID09IDAgPyBcIlwiIDogaCArIFwiOlwiKTtcclxuICAgICAgICAgICAgciArPSAobSA+PSAxMCA/IFwiXCIgKyBtIDogXCIwXCIgKyBtKTtcclxuICAgICAgICAgICAgciArPSAocyA+PSAxMCA/IFwiOlwiICsgcyA6IFwiOjBcIiArIHMpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVTdHIgPSByO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsNl90aW1lTGFiZWwuc3RyaW5nID0gcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDliLfmlrDooYDmu7RcclxuICAgIHVwZGF0ZV9tb2RlbDZfeHVlZGkoKSB7XHJcbiAgICAgICAgaWYgKGdhbWVNZ3IucGxheWVyVHMgJiYgZ2FtZU1nci5wbGF5ZXJUcy5ocE51bU5vZGUgJiYgZ2FtZU1nci5wbGF5ZXJUcy5ocE51bU5vZGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICBnYW1lTWdyLnBsYXllclRzLmhwTnVtTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBnYW1lTWdyLnBsYXllclRzLmhwTnVtTm9kZS53aWR0aCA9IE1hdGgubWluKDI1MCwgZ2FtZU1nci5wbGF5ZXJUcy50b3RsZUhwICogNTApO1xyXG4gICAgICAgICAgICBnYW1lTWdyLnBsYXllclRzLmhwTnVtTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChuLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8IGdhbWVNZ3IucGxheWVyVHMudG90bGVIcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IGdhbWVNZ3IucGxheWVyVHMuSFApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbi5jaGlsZHJlblsxXS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uY2hpbGRyZW5bMV0ub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOWIt+aWsOWxnuaAp1xyXG4gICAgdXBkYXRlX21vZGVsNl9zaHV4aW5nKCkge1xyXG4gICAgICAgIGlmICh1cGdyYWRlTWdyICYmIGdhbWVNZ3IgJiYgZ2FtZU1nci5tb2RlbDZfc2h1eGluZyAmJiBnYW1lTWdyLm1vZGVsNl9zaHV4aW5nLmlzVmFsaWQgJiYgZ2FtZU1nci5tb2RlbDZfc2h1eGluZy5hY3RpdmUpIHtcclxuICAgICAgICAgICAgLy8g562J57qnXHJcbiAgICAgICAgICAgIHRoaXMubW9kZWw2X3NodXhpbmcuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB1cGdyYWRlTWdyLmN1ckxldmVsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIC8vIOS8pOWus1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsNl9zaHV4aW5nLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKGdhbWVNZ3IucGxheWVyVHMuYXRrTnVtICogZ2FtZU1nci5wbGF5ZXJUcy5hdGtSYXRlKS50b0ZpeGVkKDApO1xyXG4gICAgICAgICAgICAvLyDlsITpgJ9cclxuICAgICAgICAgICAgdGhpcy5tb2RlbDZfc2h1eGluZy5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IChnYW1lTWdyLnBsYXllclRzLmF0a1NwZWVkICogZ2FtZU1nci5wbGF5ZXJUcy5hdGtTcGVlZFJhdGUpLnRvRml4ZWQoMSk7XHJcbiAgICAgICAgICAgIC8vIOaNouW8uVxyXG4gICAgICAgICAgICB0aGlzLm1vZGVsNl9zaHV4aW5nLmNoaWxkcmVuWzNdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKGdhbWVNZ3IucGxheWVyVHMucmVsb2FkU3BlZWQgKiBnYW1lTWdyLnBsYXllclRzLnJlbG9hZFJhdGUpLnRvRml4ZWQoMSk7XHJcbiAgICAgICAgICAgIC8vIOW8ueWkueWuuemHj1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsNl9zaHV4aW5nLmNoaWxkcmVuWzRdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZ2FtZU1nci5wbGF5ZXJUcy5jdXJXZWFwb24uYnVsbGV0TnVtLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIC8vIOenu+WKqOmAn+W6plxyXG4gICAgICAgICAgICB0aGlzLm1vZGVsNl9zaHV4aW5nLmNoaWxkcmVuWzVdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKGdhbWVNZ3IucGxheWVyVHMuTW92ZVNwZWVkICogZ2FtZU1nci5wbGF5ZXJUcy5zcGVlZFJhdGUpLnRvRml4ZWQoMCk7XHJcbiAgICAgICAgICAgIC8vIOaLvuWPluiMg+WbtFxyXG4gICAgICAgICAgICB0aGlzLm1vZGVsNl9zaHV4aW5nLmNoaWxkcmVuWzZdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdXBncmFkZU1nci5qaW5neWFuUmFuZ2UudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0Jvc3NIcChyYXRlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAocmF0ZSA+IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWw2X2Jvc3NCYXIgJiYgY2MuaXNWYWxpZCh0aGlzLm1vZGVsNl9ib3NzQmFyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbDZfYm9zc0Jhci5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsNl9ib3NzQmFyLnByb2dyZXNzID0gcmF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbDZfamluZ3lhbkJhciAmJiBjYy5pc1ZhbGlkKHRoaXMubW9kZWw2X2ppbmd5YW5CYXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsNl9qaW5neWFuQmFyLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWw2X2xldmVsTGFiZWwgJiYgY2MuaXNWYWxpZCh0aGlzLm1vZGVsNl9sZXZlbExhYmVsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbDZfbGV2ZWxMYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWw2X2Jvc3NCYXIgJiYgY2MuaXNWYWxpZCh0aGlzLm1vZGVsNl9ib3NzQmFyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbDZfYm9zc0Jhci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbDZfYm9zc0Jhci5wcm9ncmVzcyA9IHJhdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWw2X2ppbmd5YW5CYXIgJiYgY2MuaXNWYWxpZCh0aGlzLm1vZGVsNl9qaW5neWFuQmFyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbDZfamluZ3lhbkJhci5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWw2X2xldmVsTGFiZWwgJiYgY2MuaXNWYWxpZCh0aGlzLm1vZGVsNl9sZXZlbExhYmVsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbDZfbGV2ZWxMYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYm9zc19ib3JkZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgem9tYmllVGltZTogbnVtYmVyID0gMDtcclxuICAgIHpvbWJpZUN1ck51bTogbnVtYmVyID0gMDtcclxuICAgIHpvbWJpZU1heE51bTogbnVtYmVyID0gMDtcclxuICAgIHpvbWJpZUxlbmd0aDogbnVtYmVyID0gMjtcclxuICAgIHpvbWJpZUFyciA9IFtcInpvbWJpZV9iYXNpY1wiLCBcInpvbWJpZV9ydW5cIiwgXCJ6b21iaWVfZHJ1bVwiLCBcInpvbWJpZV9qdW1wXCIsIFwiem9tYmllX2JvbWJcIiwgXCJ6b21iaWVfdGFua1wiLCBcInpvbWJpZV9wb2lzb25cIl1cclxuICAgIGJvc3NBcnIgPSBbXCJib3NzMVwiLCBcImJvc3MyXCIsIFwiYm9zczNcIiwgXCJib3NzNFwiLCBcImJvc3M1XCIsIFwiYm9zczZcIiwgXCJib3NzN1wiLCBcImJvc3M4XCIsIFwiYm9zczlcIiwgXCJib3NzMTBcIiwgXCJib3NzMTFcIiwgXCJib3NzMTJcIiwgXCJib3NzMTNcIl0gICAvLywgXCJib3NzNFwiLCBcImJvc3M1XCIsIFwiYm9zczZcIiwgXCJib3NzN1wiLCBcImJvc3M4XCIsIFwiYm9zczlcIiwgXCJib3NzMTBcIiwgXCJib3NzMTFcIiwgXCJib3NzMTJcIiwgXCJib3NzMTNcIlxyXG4gICAgYm9zczJBcnIgPSBbXTtcclxuICAgIHJlaW5Cb3NzQXJyID0gW1wiYm9zczFcIiwgXCJib3NzMlwiLCBcImJvc3MzXCIsIFwiYm9zczRcIiwgXCJib3NzNVwiLCBcImJvc3M2XCIsIFwiYm9zczdcIiwgXCJib3NzOFwiLCBcImJvc3M5XCIsIFwiYm9zczEwXCIsIFwiYm9zczExXCIsIFwiYm9zczEyXCIsIFwiYm9zczEzXCJdO1xyXG4gICAgLyoqIOWIm+W7uuWDteWwuOiuoeaXtiAqL1xyXG4gICAgY3JlYXRlWm9tYmllQ291bnQoKSB7XHJcbiAgICAgICAgaWYgKGNvY29zei5pc1BhdXNlIHx8IGdhbWVNZ3IuaXNXaW4gfHwgZ2FtZU1nci5pc0ZhaWwpIHJldHVybjtcclxuICAgICAgICAvLyDmuLjmiI/orqHml7ZcclxuICAgICAgICB0aGlzLkdhbWVUaW1lKys7XHJcbiAgICAgICAgdGhpcy5zaG93R2FtZVRpbWUoKTtcclxuICAgICAgICAvLyDnlJ/miJDpgLvovpFcclxuICAgICAgICBpZiAodGhpcy5ib3NzX2JvcmRlcikgcmV0dXJuO1xyXG4gICAgICAgIC8vIOWDteWwuOeUn+aIkOaXtumXtOiuoeaXtlxyXG4gICAgICAgIHRoaXMuem9tYmllVGltZSsrO1xyXG4gICAgICAgIGxldCBjb3VudCA9IDE7XHJcbiAgICAgICAgbGV0IGNyZWF0ZUJvc3NUaW1lID0gMzAwO1xyXG4gICAgICAgIGxldCB6b21iaWVfZ3JvdXBUaW1lID0gMzA7XHJcbiAgICAgICAgbGV0IHpvbWJpZV9ncm9pcE1heE51bSA9IDEwMDtcclxuICAgICAgICBsZXQgem9tYmllX2dyb3VwTWluTnVtID0gNTA7XHJcbiAgICAgICAgaWYoY29jb3N6LmdhbWVNb2RlID09IDgpe1xyXG4gICAgICAgICAgICBjcmVhdGVCb3NzVGltZSA9IDQ4MDtcclxuICAgICAgICAgICAgem9tYmllX2dyb3VwVGltZSA9IDYwO1xyXG4gICAgICAgICAgICB6b21iaWVfZ3JvaXBNYXhOdW0gPSBNYXRoLmNlaWwoQ29uc3RhbnQuY3VycmVudExldmVsIC8gMykgKiAyMCArIDIwO1xyXG4gICAgICAgICAgICB6b21iaWVfZ3JvdXBNaW5OdW0gPSBNYXRoLmNlaWwoQ29uc3RhbnQuY3VycmVudExldmVsIC8gMykgKiA4ICsgMTA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnpvbWJpZUxlbmd0aCA9IE1hdGguZmxvb3IoQ29uc3RhbnQuY3VycmVudExldmVsIC8gMikgKyAyO1xyXG4gICAgICAgICAgICBpZiAodGhpcy56b21iaWVMZW5ndGggPj0gdGhpcy56b21iaWVBcnIubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuem9tYmllTGVuZ3RoID0gdGhpcy56b21iaWVBcnIubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHpvbWJpZV9ncm91cFRpbWUpO1xyXG4gICAgICAgIC8qKiDliJvlu7pCb3NzICovXHJcbiAgICAgICAgaWYgKDAgPT09IHRoaXMuem9tYmllVGltZSAlIGNyZWF0ZUJvc3NUaW1lKSB7ICAgLy8zMDBcclxuICAgICAgICAgICAgLy8gdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQm9zc1pvbWJpZSgpO1xyXG4gICAgICAgICAgICAvLyDmm7TmlrDmma7pgJrlg7XlsLhcclxuICAgICAgICAgICAgaWYoY29jb3N6LmdhbWVNb2RlID09IDYpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuem9tYmllTGVuZ3RoIDwgdGhpcy56b21iaWVBcnIubGVuZ3RoKSB0aGlzLnpvbWJpZUxlbmd0aCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlpKfms6Llg7XlsLhcclxuICAgICAgICBlbHNlIGlmICgwID09PSB0aGlzLnpvbWJpZVRpbWUgJSB6b21iaWVfZ3JvdXBUaW1lKSB7ICAgLy8zMFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnLS0tLS0tLS3liJvlu7rlpKfph4/mgKrniaktLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAvLyDmj5DnpLpcclxuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWw2X3RzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsNl90cy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLm1vZGVsNl90cy5hY3RpdmUgPSBmYWxzZTsgfSwgMylcclxuICAgICAgICAgICAgICAgIGxldCBzcEFuaSA9IHRoaXMubW9kZWw2X3RzLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgICAgICAgICBzcEFuaS5zZXRTa2luKFwic2NseF9cIiArIGNvY29zei5jdXJMYW5ndWFnZSk7XHJcbiAgICAgICAgICAgICAgICBzcEFuaS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5YO15bC45pWw6YePXHJcbiAgICAgICAgICAgIHRoaXMuem9tYmllTWF4TnVtID0gem9tYmllX2dyb3VwTWluTnVtICsgTWF0aC5mbG9vcih0aGlzLnpvbWJpZVRpbWUgLyAzMCkgKiAyMDsgICAgLy8yMCw0MCwxMFxyXG4gICAgICAgICAgICBpZiAodGhpcy56b21iaWVNYXhOdW0gPiB6b21iaWVfZ3JvaXBNYXhOdW0pIHRoaXMuem9tYmllTWF4TnVtID0gem9tYmllX2dyb2lwTWF4TnVtOyAgICAgLy80MFxyXG4gICAgICAgICAgICAvLyDlsI/kuo7mnIDlpKfmlbDph4/nu6fnu63nlJ/miJBcclxuICAgICAgICAgICAgaWYgKHRoaXMuem9tYmllQ3VyTnVtIDwgdGhpcy56b21iaWVNYXhOdW0pIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gdGhpcy56b21iaWVNYXhOdW0gLSB0aGlzLnpvbWJpZUN1ck51bTtcclxuICAgICAgICAgICAgICAgIC8vIOWIhuaIkGvku73nlJ/miJDvvIzmr4/ku70xMFxyXG4gICAgICAgICAgICAgICAgbGV0IGsgPSBNYXRoLmNlaWwoY291bnQgLyAyNSk7XHJcbiAgICAgICAgICAgICAgICAvLyDliIbluKfliJvlu7pcclxuICAgICAgICAgICAgICAgIGxldCBhbmdsZTogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgICAgIGxldCBpbnRlcjogbnVtYmVyID0gMzY7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGs7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmdsZSArPSBpbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVDb21tb25ab21iaWUoY2Mud2luU2l6ZS5oZWlnaHQgLyAyLjUgLyB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvLCBhbmdsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC4xLCBNYXRoLmNlaWwoY291bnQgLyBrKSwgaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g55Sf5oiQ5Ye76LSlYm9zc1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5ib3NzMkFyci5sZW5ndGggLSAxOyBpID49IDAgJiYgaSA+PSB0aGlzLmJvc3MyQXJyLmxlbmd0aCAtIDI7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc05hbWUgPSB0aGlzLmJvc3MyQXJyW2ldO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5Yib5bu65bC45r2uYm9zczogXCIsIHJlc05hbWUpXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzTmFtZSkgeyB0aGlzLmNyZWF0ZVpvbWJpZShyZXNOYW1lLCBnYW1lTWdyLnBsYXllclRzLm5vZGUuZ2V0UG9zaXRpb24oKSwgY2Mud2luU2l6ZS53aWR0aCAvIDIgLyB0aGlzLm1haW5DYW1lcmEuem9vbVJhdGlvLG51bGwsIGZhbHNlLHRydWUpOyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5YO15bC457un57utXHJcbiAgICAgICAgZWxzZSBpZiAoMCA9PT0gdGhpcy56b21iaWVUaW1lICUgNTEgfHwgMCA9PT0gdGhpcy56b21iaWVUaW1lICUgNTIgfHwgMCA9PT0gdGhpcy56b21iaWVUaW1lICUgNTMgfHwgMCA9PT0gdGhpcy56b21iaWVUaW1lICUgNTQgfHwgMCA9PT0gdGhpcy56b21iaWVUaW1lICUgNTUpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOmaj+acuuWwkemHj+WDteWwuFxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnLS0tLS0tLS3liJvlu7rlsJHph4/mgKrniaktLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAvLyDlg7XlsLjmlbDph49cclxuICAgICAgICAgICAgdGhpcy56b21iaWVNYXhOdW0gPSA1ICsgTWF0aC5mbG9vcih0aGlzLnpvbWJpZVRpbWUgLyAyMCkgKiA1OyAgLy81LDIwLDVcclxuICAgICAgICAgICAgaWYgKHRoaXMuem9tYmllTWF4TnVtID4gNDApIHRoaXMuem9tYmllTWF4TnVtID0gNDA7ICAgICAgIC8vMjBcclxuICAgICAgICAgICAgLy8g5bCP5LqO5pyA5aSn5pWw6YeP57un57ut55Sf5oiQXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnpvbWJpZUN1ck51bSA8IHRoaXMuem9tYmllTWF4TnVtKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDpmo/mnLrmlbDph49cclxuICAgICAgICAgICAgICAgIGNvdW50ID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4geyB0aGlzLmNyZWF0ZUNvbW1vblpvbWJpZShjYy53aW5TaXplLmhlaWdodCAvIDIuNSAvIHRoaXMubWFpbkNhbWVyYS56b29tUmF0aW8pOyB9LCAwLjEsIGNvdW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKiDliJvlu7rmma7pgJrlg7XlsLggKi9cclxuICAgIGNyZWF0ZUNvbW1vblpvbWJpZShkaXM6IG51bWJlciwgYW5nbGU/OiBudW1iZXIpIHtcclxuICAgICAgICBpZih0aGlzLmJvc3NTaG93KXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnpvbWJpZUxlbmd0aCk7XHJcbiAgICAgICAgbGV0IHJlc05hbWUgPSB0aGlzLnpvbWJpZUFycltpbmRleF07XHJcbiAgICAgICAgaWYgKHJlc05hbWUpIHsgdGhpcy5jcmVhdGVab21iaWUocmVzTmFtZSwgZ2FtZU1nci5wbGF5ZXJUcy5ub2RlLmdldFBvc2l0aW9uKCksIGRpcywgYW5nbGUpOyB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVpbkJvc3MgOiBudW1iZXIgPSAwO1xyXG4gICAgUmVpbiA6IG51bWJlciA9IDE7XHJcbiAgICAvKiog5Yib5bu6Qm9zc+WDteWwuCAqL1xyXG4gICAgY3JlYXRlQm9zc1pvbWJpZSgpIHtcclxuICAgICAgICBpZihjb2Nvc3ouZ2FtZU1vZGUgPT0gNil7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvc3NBcnIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCb3NzQm9yZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAvLyDmj5DnpLpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsNl90cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWw2X3RzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLm1vZGVsNl90cy5hY3RpdmUgPSBmYWxzZTsgfSwgMylcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BBbmkgPSB0aGlzLm1vZGVsNl90cy5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwQW5pLnNldFNraW4oXCJib3NzbHhfXCIgKyBjb2Nvc3ouY3VyTGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwQW5pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGJvc3NcclxuICAgICAgICAgICAgICAgIGxldCByZXNOYW1lID0gdGhpcy5ib3NzQXJyLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VudGVyUG9zID0gZ2FtZU1nci5wbGF5ZXJUcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib3NzX2JvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlclBvcyA9IHRoaXMuYm9zc19ib3JkZXIuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyZXNOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3NzMkFyci5wdXNoKHJlc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlWm9tYmllKHJlc05hbWUsIGNlbnRlclBvcywgMzAwLCBudWxsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlaW5Cb3NzICsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCb3NzQm9yZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAvLyDmj5DnpLpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsNl90cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWw2X3RzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLm1vZGVsNl90cy5hY3RpdmUgPSBmYWxzZTsgfSwgMylcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BBbmkgPSB0aGlzLm1vZGVsNl90cy5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwQW5pLnNldFNraW4oXCJib3NzbHhfXCIgKyBjb2Nvc3ouY3VyTGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwQW5pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGJvc3NcclxuICAgICAgICAgICAgICAgIGxldCByZXNOYW1lID0gdGhpcy5yZWluQm9zc0Fyci5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tbmV3Ym9zc+WIoOmZpC0tLS0tLS0nK3RoaXMucmVpbkJvc3NBcnIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMucmVpbkJvc3NBcnIubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVpbkJvc3NBcnIgPSBbXCJib3NzMVwiLCBcImJvc3MyXCIsIFwiYm9zczNcIiwgXCJib3NzNFwiLCBcImJvc3M1XCIsIFwiYm9zczZcIiwgXCJib3NzN1wiLCBcImJvc3M4XCIsIFwiYm9zczlcIiwgXCJib3NzMTBcIiwgXCJib3NzMTFcIiwgXCJib3NzMTJcIiwgXCJib3NzMTNcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWluICsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9zczJBcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBjZW50ZXJQb3MgPSBnYW1lTWdyLnBsYXllclRzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvc3NfYm9yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyUG9zID0gdGhpcy5ib3NzX2JvcmRlci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc05hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvc3MyQXJyLnB1c2gocmVzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVab21iaWUocmVzTmFtZSwgY2VudGVyUG9zLCAzMDAsIG51bGwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYoY29jb3N6LmdhbWVNb2RlID09IDgpeyAgIC8v5YWz5Y2h5qih5byPYm9zc1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUJvc3NCb3JkZXIoKTtcclxuICAgICAgICAgICAgLy8g5o+Q56S6XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsNl90cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbDZfdHMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5tb2RlbDZfdHMuYWN0aXZlID0gZmFsc2U7IH0sIDMpXHJcbiAgICAgICAgICAgICAgICBsZXQgc3BBbmkgPSB0aGlzLm1vZGVsNl90cy5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgICAgICAgICAgc3BBbmkuc2V0U2tpbihcImJvc3NseF9cIiArIGNvY29zei5jdXJMYW5ndWFnZSk7XHJcbiAgICAgICAgICAgICAgICBzcEFuaS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gYm9zc1xyXG4gICAgICAgICAgICBsZXQgcmVzTmFtZSA9IHRoaXMuYm9zc0FycltDb25zdGFudC5jdXJyZW50TGV2ZWwgLSAxXTtcclxuICAgICAgICAgICAgbGV0IGNlbnRlclBvcyA9IGdhbWVNZ3IucGxheWVyVHMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib3NzX2JvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgY2VudGVyUG9zID0gdGhpcy5ib3NzX2JvcmRlci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXNOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvc3MyQXJyLnB1c2gocmVzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVpvbWJpZShyZXNOYW1lLCBjZW50ZXJQb3MsIDMwMCwgbnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIC8qKiDliJvlu7pib3Nz6L6555WMICovXHJcbiAgICBjcmVhdGVCb3NzQm9yZGVyKCkge1xyXG4gICAgICAgIC8vIOi+ueeVjFxyXG4gICAgICAgIGxldCBwcmUgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcImJvc3NfYm9yZGVyXCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgaWYgKHByZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvc3NfYm9yZGVyID0gY2MuaW5zdGFudGlhdGUocHJlKTtcclxuICAgICAgICAgICAgdGhpcy5ib3NzX2JvcmRlci5zZXRQb3NpdGlvbihnYW1lTWdyLnBsYXllclRzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvc3NfYm9yZGVyLnggLSB0aGlzLmJvc3NfYm9yZGVyLndpZHRoIC8gMiA8IC1nYW1lTWdyLm1hcFNpemUud2lkdGggLyAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvc3NfYm9yZGVyLnggPSAtZ2FtZU1nci5tYXBTaXplLndpZHRoIC8gMiArIHRoaXMuYm9zc19ib3JkZXIud2lkdGggLyAyICsgMTAwO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYm9zc19ib3JkZXIueCArIHRoaXMuYm9zc19ib3JkZXIud2lkdGggLyAyID4gZ2FtZU1nci5tYXBTaXplLndpZHRoIC8gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib3NzX2JvcmRlci54ID0gZ2FtZU1nci5tYXBTaXplLndpZHRoIC8gMiAtIHRoaXMuYm9zc19ib3JkZXIud2lkdGggLyAyIC0gMTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvc3NfYm9yZGVyLnkgLSB0aGlzLmJvc3NfYm9yZGVyLmhlaWdodCAvIDIgPCAtZ2FtZU1nci5tYXBTaXplLmhlaWdodCAvIDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9zc19ib3JkZXIueSA9IC1nYW1lTWdyLm1hcFNpemUuaGVpZ2h0IC8gMiArIHRoaXMuYm9zc19ib3JkZXIuaGVpZ2h0IC8gMiArIDEwMDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJvc3NfYm9yZGVyLnkgKyB0aGlzLmJvc3NfYm9yZGVyLmhlaWdodCAvIDIgPiBnYW1lTWdyLm1hcFNpemUuaGVpZ2h0IC8gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib3NzX2JvcmRlci55ID0gZ2FtZU1nci5tYXBTaXplLmhlaWdodCAvIDIgLSB0aGlzLmJvc3NfYm9yZGVyLmhlaWdodCAvIDIgLSAzMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ib3NzX2JvcmRlci5zZXRQYXJlbnQodGhpcy5tYXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKiDliJvlu7rlg7XlsLggKi9cclxuICAgIGNyZWF0ZVpvbWJpZShyZXNOYW1lOiBzdHJpbmcsIGNlbnRlcjogY2MuVmVjMiwgZGlzOiBudW1iZXIsIGFuZ2xlPzogbnVtYmVyLCBpc0Jvc3M6IGJvb2xlYW4gPSBmYWxzZSwgaXNFbGl0ZTpib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICAvLyDpooTliLbkvZNcclxuICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMocmVzTmFtZSwgY2MuUHJlZmFiKTtcclxuICAgICAgICBpZiAocHJlZmFiKSB7XHJcbiAgICAgICAgICAgIC8vIOWdkOagh1xyXG4gICAgICAgICAgICB0aGlzLl9yZWN1cnNpb25Db3VudCA9IDA7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLmdldFpvbWJpZUJpcnRoUG9zKGNlbnRlciwgZGlzLCBhbmdsZSk7XHJcbiAgICAgICAgICAgIGlmIChwb3MpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWDteWwuFxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1pvbWJpZTogY2MuTm9kZSA9IHRoaXMubm9kZUdldChyZXNOYW1lLCBwcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1pvbWJpZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cyA9IG5ld1pvbWJpZS5nZXRDb21wb25lbnQoWm9tYmllQmFzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRzICYmIGlzQm9zcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0cy50b3RsZUhwICs9IHRoaXMuUmVpbiAqIDAuMiAqIHRzLnRvdGxlSHA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRzLmF0a1JhbmdlICs9IHRoaXMuUmVpbiAqIDAuMDUgKiB0cy5hdGtSYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHMuTW92ZVNwZWVkICs9IHRoaXMuUmVpbiAqIDAuMDggKiB0cy5Nb3ZlU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzLmlzQm9zcyA9IHRydWU7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvc3NTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHMuaXNFbGl0ZSA9IGlzRWxpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHMucmVpbk51bSA9IHRoaXMuUmVpbjtcclxuICAgICAgICAgICAgICAgICAgICBuZXdab21iaWUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdab21iaWUuc2V0UGFyZW50KGdhbWVNZ3IubWFwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHMpIHRzLmluaXROb2RlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2Nvc3oucmVzTWdyLmxvYWRBbmRDYWNoZVJlcyhcInByZWZhYl96b21iaWUvXCIgKyByZXNOYW1lLCBjYy5QcmVmYWIsIG51bGwsIChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVab21iaWUocmVzTmFtZSwgY2VudGVyLCBkaXMsIGFuZ2xlLCBpc0Jvc3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKiDojrflj5blg7XlsLjnlJ/miJDlnZDmoIcgKi9cclxuICAgIHByaXZhdGUgX3JlY3Vyc2lvbkNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgZ2V0Wm9tYmllQmlydGhQb3MoY2VudGVyOiBjYy5WZWMyLCBkaXMsIGFuZ2xlPzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCsrdGhpcy5fcmVjdXJzaW9uQ291bnQgPiAxMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByYWRpYW5zID0gMDtcclxuICAgICAgICBpZiAoYW5nbGUgPT0gbnVsbCB8fCBhbmdsZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmFkaWFucyA9IDIgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByYWRpYW5zID0gY2MubWlzYy5kZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRpZiA9IGNjLnYyKGRpcyArIE1hdGguZmxvb3IoMjAwICogTWF0aC5yYW5kb20oKSksIDApLnJvdGF0ZVNlbGYocmFkaWFucyk7XHJcbiAgICAgICAgbGV0IHBvcyA9IGNlbnRlci5hZGQoZGlmKTtcclxuICAgICAgICBpZiAocG9zLnggPiAtZ2FtZU1nci5tYXBTaXplLndpZHRoIC8gMiArIDQwMCAmJiBwb3MueCA8IGdhbWVNZ3IubWFwU2l6ZS53aWR0aCAvIDIgLSA0MDAgJiZcclxuICAgICAgICAgICAgcG9zLnkgPCBnYW1lTWdyLm1hcFNpemUuaGVpZ2h0IC8gMiAtIDQwMCAmJiBwb3MueSA+IC1nYW1lTWdyLm1hcFNpemUuaGVpZ2h0IC8gMiArIDQwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFpvbWJpZUJpcnRoUG9zKGNlbnRlciwgZGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGFzdFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBzYWZlVGltZTogbnVtYmVyID0gNDA7XHJcbiAgICBzdGFydFBvczogY2MuVmVjMiA9IG51bGw7XHJcbiAgICBpbml0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0UG9zID0gdGhpcy55YW9nYW4uZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLmlzR2FtZVN0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMua2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5rZXlVcCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5tb3ZlQXJlYS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKChldmVudDogY2MuVG91Y2gpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgICAgICAgICB0aGlzLnlhb2dhbi5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIH0pLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm1vdmVBcmVhLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsICgoZXZlbnQ6IGNjLlRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXYgPSBldmVudC5nZXRMb2NhdGlvbigpLnN1YihldmVudC5nZXRTdGFydExvY2F0aW9uKCkpO1xyXG4gICAgICAgICAgICBpZiAoZGl2Lm1hZygpID4gMTYwKSB7XHJcbiAgICAgICAgICAgICAgICBkaXYgPSBkaXYubXVsKDE2MCAvIGRpdi5tYWcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy55YW9nYW4uY2hpbGRyZW5bMF0uc2V0UG9zaXRpb24oZGl2KTtcclxuICAgICAgICAgICAgZ2FtZU1nci5wbGF5ZXJUcy5tb3ZlRGlyID0gZGl2Lm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIH0pLCB0aGlzKVxyXG4gICAgICAgIHRoaXMubW92ZUFyZWEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKGV2ZW50OiBjYy5Ub3VjaCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnlhb2dhbi5zZXRQb3NpdGlvbih0aGlzLnN0YXJ0UG9zKTtcclxuICAgICAgICAgICAgdGhpcy55YW9nYW4uY2hpbGRyZW5bMF0uc2V0UG9zaXRpb24oY2MudjIoMCwgMCkpO1xyXG4gICAgICAgICAgICBnYW1lTWdyLnBsYXllclRzLm1vdmVEaXIgPSBjYy52MigwLCAwKTtcclxuICAgICAgICB9KSwgdGhpcylcclxuICAgICAgICB0aGlzLm1vdmVBcmVhLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgKChldmVudDogY2MuVG91Y2gpID0+IHtcclxuICAgICAgICAgICAgdGhpcy55YW9nYW4uc2V0UG9zaXRpb24odGhpcy5zdGFydFBvcyk7XHJcbiAgICAgICAgICAgIHRoaXMueWFvZ2FuLmNoaWxkcmVuWzBdLnNldFBvc2l0aW9uKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgZ2FtZU1nci5wbGF5ZXJUcy5tb3ZlRGlyID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgfSksIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgaXNVcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNEb3duOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc0xlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzUmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGtleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSA4Nzoge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzVXApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDgzOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNEb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0Rvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDY1OiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xlZnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDY4OiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREaXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGtleVVwKGV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgODc6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNVcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREaXIoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgODM6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERpcigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSA2NToge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlyKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDY4OiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlyKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb2xsb3dOb2RlOiBjYy5Ob2RlO1xyXG4gICAgaXNQcmU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgY2FtZXJhRm9sbG93KCkge1xyXG4gICAgICAgIGxldCBwb3NfdG8gPSBudWxsO1xyXG4gICAgICAgIGxldCB0ID0gMC4xO1xyXG4gICAgICAgIGlmICh0aGlzLmZvbGxvd05vZGUgJiYgdGhpcy5mb2xsb3dOb2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgcG9zX3RvID0gdGhpcy5mb2xsb3dOb2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHQgPSAwLjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwb3NfdG8pIHtcclxuICAgICAgICAgICAgbGV0IHBvc19mcm9tID0gdGhpcy5tYWluQ2FtZXJlUm9vdE5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgbGV0IHBvc19vdXQgPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgICAgIGxldCByYXRpbyA9IHRoaXMubWFpbkNhbWVyYS56b29tUmF0aW87XHJcbiAgICAgICAgICAgIGxldCB3aW5TaXplID0gbmV3IGNjLlNpemUoY2Mud2luU2l6ZS53aWR0aCAvIHJhdGlvLCBjYy53aW5TaXplLmhlaWdodCAvIHJhdGlvKTtcclxuICAgICAgICAgICAgaWYgKGNvY29zei5nYW1lTW9kZSA9PSA3KSB7XHJcbiAgICAgICAgICAgICAgICAvLyDml6DovrnnlYxcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOebuOacuui+ueeVjFxyXG4gICAgICAgICAgICAgICAgaWYgKChwb3NfdG8ueCArIHdpblNpemUud2lkdGggLyAyKSA+IGdhbWVNZ3IubWFwU2l6ZS53aWR0aCAvIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NfdG8ueCA9IGdhbWVNZ3IubWFwU2l6ZS53aWR0aCAvIDIgLSB3aW5TaXplLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHBvc190by54IC0gd2luU2l6ZS53aWR0aCAvIDIpIDwgLWdhbWVNZ3IubWFwU2l6ZS53aWR0aCAvIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NfdG8ueCA9IC1nYW1lTWdyLm1hcFNpemUud2lkdGggLyAyICsgd2luU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoKHBvc190by55ICsgd2luU2l6ZS5oZWlnaHQgLyAyKSA+IGdhbWVNZ3IubWFwU2l6ZS5oZWlnaHQgLyAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zX3RvLnkgPSBnYW1lTWdyLm1hcFNpemUuaGVpZ2h0IC8gMiAtIHdpblNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHBvc190by55IC0gd2luU2l6ZS5oZWlnaHQgLyAyKSA8IC1nYW1lTWdyLm1hcFNpemUuaGVpZ2h0IC8gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc190by55ID0gLWdhbWVNZ3IubWFwU2l6ZS5oZWlnaHQgLyAyICsgd2luU2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwb3NfdG8uc3ViKHBvc19mcm9tKS5tYWcoKSA8IDEwMDApIHtcclxuICAgICAgICAgICAgICAgIGNjLlZlYzIubGVycChwb3Nfb3V0LCBwb3NfZnJvbSwgcG9zX3RvLCB0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkNhbWVyZVJvb3ROb2RlLnNldFBvc2l0aW9uKHBvc19vdXQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ2FtZXJlUm9vdE5vZGUuc2V0UG9zaXRpb24ocG9zX3RvKTtcclxuICAgICAgICAgICAgICAgIC8vIOabtOaWsOiKgueCuemAj+aYjuW6plxyXG4gICAgICAgICAgICAgICAgZ2FtZU1nci5zZXRNYXBUcyAmJiBnYW1lTWdyLnNldE1hcFRzLmNoZWNrQWxsTm9kZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldERpcigpIHtcclxuICAgICAgICBsZXQgbW92ZURpciA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVXApIHtcclxuICAgICAgICAgICAgbW92ZURpci55Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzTGVmdCkge1xyXG4gICAgICAgICAgICBtb3ZlRGlyLngtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSaWdodCkge1xyXG4gICAgICAgICAgICBtb3ZlRGlyLngrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEb3duKSB7XHJcbiAgICAgICAgICAgIG1vdmVEaXIueS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXllclRzLm1vdmVEaXIgPSBtb3ZlRGlyLm5vcm1hbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3RhcnQoKSB7IH1cclxuXHJcbiAgICB1c2VNZWxlZVdlYXBvbigpIHsgfVxyXG5cclxuICAgIHVzZVJhbmdlZFdlYXBvbigpIHtcclxuICAgICAgICB0aGlzLnBsYXllclRzLmNoYW5nZUN1cldlYXBvbih0aGlzLnBsYXllclRzLnJhbmdlZFdlYXBvbik7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlUmFuZ2VkV2VhcG9uQWQoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJUcy5jaGFuZ2VDdXJXZWFwb24odGhpcy5wbGF5ZXJUcy5yYW5nZWRXZWFwb25BZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmV3V2VhcG9uKCkge1xyXG4gICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5RWZmZWN0KFwiY2hhbmdlV2VhcG9uXCIpO1xyXG4gICAgICAgIHRoaXMucGxheWVyVHMuc2V0TmV3V2VhcG9uKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNsaXBOYW1lQXJyOiBhbnkgPSB7fTtcclxuICAgIHBsYXlFZmZlY3QobmFtZTogc3RyaW5nLCBub2RlPzogY2MuTm9kZSwgaW50ZXJ2YWw6IG51bWJlciA9IDAuMikge1xyXG4gICAgICAgIGlmIChnYW1lTWdyLmlzV2luIHx8IGdhbWVNZ3IuaXNGYWlsIHx8IGNvY29zei5pc1BhdXNlKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuY2xpcE5hbWVBcnJbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdm9pY2UgPSAxO1xyXG4gICAgICAgIGlmIChub2RlICYmIG5vZGUuaXNWYWxpZCAmJiBub2RlLnBhcmVudCAmJiBub2RlLnBhcmVudC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHBvcyA9IG5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MpO1xyXG4gICAgICAgICAgICBsZXQgcG9zMiA9IHRoaXMucGxheWVyVHMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBwb3MyID0gdGhpcy5wbGF5ZXJUcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zMik7XHJcbiAgICAgICAgICAgIGxldCBkdCA9IHBvcy5zdWIocG9zMikubWFnKCk7XHJcbiAgICAgICAgICAgIGlmIChkdCA+IDIwMDApIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5RWZmZWN0KG5hbWUsIGZhbHNlLCB2b2ljZSk7XHJcbiAgICAgICAgaWYgKGludGVydmFsID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsaXBOYW1lQXJyW25hbWVdID0gMTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLmNsaXBOYW1lQXJyW25hbWVdID0gMDsgfSwgaW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBsYXlDbGlwKGNsaXA6IGNjLkF1ZGlvQ2xpcCwgbm9kZTogY2MuTm9kZSwgaW50ZXJ2YWw6IG51bWJlciA9IDAuMikge1xyXG4gICAgICAgIGlmIChnYW1lTWdyLmlzV2luIHx8IGdhbWVNZ3IuaXNGYWlsIHx8IGNvY29zei5pc1BhdXNlKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuY2xpcE5hbWVBcnJbY2xpcC5uYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2b2ljZSA9IDE7XHJcbiAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5pc1ZhbGlkICYmIG5vZGUucGFyZW50ICYmIG5vZGUucGFyZW50LmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IG5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgcG9zID0gbm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgICAgIGxldCBwb3MyID0gdGhpcy5wbGF5ZXJUcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHBvczIgPSB0aGlzLnBsYXllclRzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb3MyKTtcclxuICAgICAgICAgICAgbGV0IGR0ID0gcG9zLnN1Yihwb3MyKS5tYWcoKTtcclxuICAgICAgICAgICAgaWYgKGR0ID4gMjAwMCkgeyByZXR1cm47IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlDbGlwKGNsaXAsIGZhbHNlLCB2b2ljZSk7XHJcbiAgICAgICAgLy8g6K6w5b2VXHJcbiAgICAgICAgaWYgKGludGVydmFsID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsaXBOYW1lQXJyW2NsaXAubmFtZV0gPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuY2xpcE5hbWVBcnJbY2xpcC5uYW1lXSA9IDA7IH0sIGludGVydmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaWh+Wtl+aPkOekuuaViOaenCAqL1xyXG4gICAgc2hvd1JvbGVUaXAobm9kZTogY2MuTm9kZSwgc3RyOiBzdHJpbmcsIGxhYmVsQ29sb3I6IGNjLkNvbG9yID0gY2MuQ29sb3IuV0hJVEUpIHtcclxuICAgICAgICBpZiAobm9kZSAmJiBub2RlLmlzVmFsaWQgJiYgdGhpcy5ocFRpcCAmJiB0aGlzLmhwVGlwLmlzVmFsaWQgJiYgZ2FtZU1nci50aXBMYXllcikge1xyXG4gICAgICAgICAgICBsZXQgdGlwTm9kZSA9IHRoaXMubm9kZUdldChcImhwVGlwXCIsIHRoaXMuaHBUaXApO1xyXG4gICAgICAgICAgICBpZiAodGlwTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgdGlwTm9kZS5zZXRQYXJlbnQoZ2FtZU1nci50aXBMYXllcik7XHJcbiAgICAgICAgICAgICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgICAgICAgICAgIHRpcE5vZGUuc2V0UG9zaXRpb24obm9kZS54ICsgMjAwICogKE1hdGgucmFuZG9tKCkgLSAwLjUpLCBub2RlLnkgKyBub2RlLmhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdGlwTm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgdGlwTm9kZS5jb2xvciA9IGxhYmVsQ29sb3I7XHJcbiAgICAgICAgICAgICAgICB0aXBOb2RlLnNjYWxlID0gKGxhYmVsQ29sb3IgPT0gY2MuQ29sb3IuV0hJVEUgPyAxIDogMS4yKTtcclxuICAgICAgICAgICAgICAgIC8vIOWtl+S9k+WGheWuuVxyXG4gICAgICAgICAgICAgICAgbGV0IHRpcExhYmVsID0gdGlwTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRpcExhYmVsKSB7IHRpcExhYmVsLnN0cmluZyA9IHN0cjsgfVxyXG4gICAgICAgICAgICAgICAgLy8g5Yqo5pWIXHJcbiAgICAgICAgICAgICAgICB0aXBOb2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aXBOb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5ieSgwLjUsIHsgeTogMjAsIHNjYWxlOiAxLCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5ieSgwLjMsIHsgeTogMTAsIHNjYWxlOiAtMSwgb3BhY2l0eTogLTI1NSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHsgdGhpcy5ub2RlUHV0KFwiaHBUaXBcIiwgdGlwTm9kZSk7IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNGYWlsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBmYWlsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzV2luIHx8IHRoaXMuaXNGYWlsKSByZXR1cm47XHJcbiAgICAgICAgY29jb3N6LnBhdXNlQ291bnQrKztcclxuICAgICAgICB0aGlzLmlzRmFpbCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgdXBncmFkZU1nciAmJiB1cGdyYWRlTWdyLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucWx6Yy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnFsemMpXHJcbiAgICAgICAgICAgICAgICAuZGVsYXkoMC4zKVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4geyB0aGlzLnFsemMuZ2V0Q2hpbGRCeU5hbWUoXCJkaWFuXCIpLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWUgfSlcclxuICAgICAgICAgICAgICAgIC5kZWxheSgwLjMpXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7IHRoaXMucWx6Yy5nZXRDaGlsZEJ5TmFtZShcImRpYW5cIikuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KDAuMylcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHsgdGhpcy5xbHpjLmdldENoaWxkQnlOYW1lKFwiZGlhblwiKS5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAuZGVsYXkoMC4zKVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucWx6Yy5nZXRDaGlsZEJ5TmFtZShcImRpYW5cIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xbHpjLmdldENoaWxkQnlOYW1lKFwiZGlhblwiKS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnFsemMuZ2V0Q2hpbGRCeU5hbWUoXCJkaWFuXCIpLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC51bmlvbigpXHJcbiAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcigpXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9LCAyKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuZ2FtZUZhaWxlZCgpO1xyXG4gICAgICAgIH0sIDQpXHJcbiAgICB9XHJcblxyXG4gICAgaXNXaW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHdpbigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1dpbiB8fCB0aGlzLmlzRmFpbCkgcmV0dXJuO1xyXG4gICAgICAgIGNvY29zei5wYXVzZUNvdW50Kys7XHJcbiAgICAgICAgdGhpcy5pc1dpbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgdXBncmFkZU1nciAmJiB1cGdyYWRlTWdyLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucWx6Yy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnFsemMpXHJcbiAgICAgICAgICAgICAgICAuZGVsYXkoMC4zKVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4geyB0aGlzLnFsemMuZ2V0Q2hpbGRCeU5hbWUoXCJkaWFuXCIpLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWUgfSlcclxuICAgICAgICAgICAgICAgIC5kZWxheSgwLjMpXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7IHRoaXMucWx6Yy5nZXRDaGlsZEJ5TmFtZShcImRpYW5cIikuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KDAuMylcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHsgdGhpcy5xbHpjLmdldENoaWxkQnlOYW1lKFwiZGlhblwiKS5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAuZGVsYXkoMC4zKVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucWx6Yy5nZXRDaGlsZEJ5TmFtZShcImRpYW5cIikuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xbHpjLmdldENoaWxkQnlOYW1lKFwiZGlhblwiKS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnFsemMuZ2V0Q2hpbGRCeU5hbWUoXCJkaWFuXCIpLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC51bmlvbigpXHJcbiAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcigpXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9LCAyKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuZ2FtZVN1Y2Nlc3MoKTtcclxuICAgICAgICB9LCA0KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpc1Jldml2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcmV2aXZlKCkge1xyXG4gICAgICAgIHRoaXMuaXNSZXZpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGxheWVyVHMucmV2aXZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOmch+Wxj1xyXG4gICAgKiBAcGFyYW0gZGlzIOiMg+WbtFxyXG4gICAgKiBAcGFyYW0gdGltZXMg5qyh5pWwXHJcbiAgICAqIEBwYXJhbSBpc1ZpYnJhdGUg5piv5ZCm6ZyH5YqoXHJcbiAgICAqIEByZXR1cm5zIFxyXG4gICAgKi9cclxuICAgIHByaXZhdGUgX3RpbWVBcnIgPSBbMCwgMC4wNCwgMC4wNSwgMC4wNiwgMC4wN107XHJcbiAgICBwcml2YXRlIF9kaXNBcnIgPSBbMCwgMywgMTAsIDIwLCAzMF07XHJcbiAgICBwcml2YXRlIF92aWJyYXRlVGltZTogbnVtYmVyID0gMDsvLyDpnIfliqjml7bpl7RcclxuICAgIHB1YmxpYyBzaGFrZUVmZmVjdChleHRlbnQ6IDAgfCAxIHwgMiB8IDMgfCA0ID0gMSwgdGltZXM6IG51bWJlciA9IDEsIGlzVmlicmF0ZTogYm9vbGVhbiA9IHRydWUsIHZpYnJhdGVUeXBlOiBWaWJyYXRlVHlwZSA9IFZpYnJhdGVUeXBlLlNob3J0KSB7XHJcbiAgICAgICAgLy8g6ZWc5aS05pmD5YqoXHJcbiAgICAgICAgbGV0IHQgPSB0aGlzLl90aW1lQXJyW2V4dGVudF07XHJcbiAgICAgICAgbGV0IGRpcyA9IHRoaXMuX2Rpc0FycltleHRlbnRdO1xyXG4gICAgICAgIGlmIChleHRlbnQgPiAwICYmIHRpbWVzID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1haW5DYW1lcmEubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICB0aGlzLm1haW5DYW1lcmEubm9kZS5zZXRQb3NpdGlvbigwLCAwLCAwKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5tYWluQ2FtZXJhLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8odCwgeyBwb3NpdGlvbjogY2MudjMoZGlzLCBkaXMpIH0pXHJcbiAgICAgICAgICAgICAgICAudG8odCwgeyBwb3NpdGlvbjogY2MudjMoMCwgLWRpcykgfSlcclxuICAgICAgICAgICAgICAgIC50byh0LCB7IHBvc2l0aW9uOiBjYy52MygtZGlzLCBkaXMpIH0pXHJcbiAgICAgICAgICAgICAgICAudG8odCwgeyBwb3NpdGlvbjogY2MudjMoLWRpcywgLWRpcykgfSlcclxuICAgICAgICAgICAgICAgIC50byh0LCB7IHBvc2l0aW9uOiBjYy52MygwLCBkaXMpIH0pXHJcbiAgICAgICAgICAgICAgICAudG8odCwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCkgfSlcclxuICAgICAgICAgICAgICAgIC51bmlvbigpXHJcbiAgICAgICAgICAgICAgICAucmVwZWF0KHRpbWVzKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOmch+WKqCzpl7TpmpQx56eSXHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLlNoYWtlT24pIHtcclxuICAgICAgICAgICAgbGV0IHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgaWYgKHQgLSB0aGlzLl92aWJyYXRlVGltZSA+IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmlicmF0ZVRpbWUgPSB0O1xyXG4gICAgICAgICAgICAgICAgaXNWaWJyYXRlICYmIHV0aWxzLnZpYnJhdGUodmlicmF0ZVR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGd1aWRlU2tpcCgpIHtcclxuICAgICAgICAvLyDmlrDmiYvmjIflvJXot7Pov4dcclxuICAgIH1cclxuXHJcbn1cclxuIl19