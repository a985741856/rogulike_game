
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Framework/CocosZ.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54a8bcZAI1KMJdjQ5CMJRqd', 'CocosZ');
// scripts/Framework/CocosZ.ts

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
exports.cocosz = void 0;
var GameMgr_1 = require("./GameMgr");
var DataMgr_1 = require("./DataMgr");
var UIMgr_1 = require("./UIMgr");
var ResMgr_1 = require("./ResMgr");
var Constant_1 = require("./Constant");
var SceneMgr_1 = require("./SceneMgr");
var AudioMgr_1 = require("./AudioMgr");
var Utils_1 = require("../../common-plugin/Scripts/Utils");
var Msg_1 = require("./Msg");
var PlatUtils_1 = require("../../common-plugin/Scripts/PlatUtils");
// @ts-ignore
var i18n = require('LanguageData');
/**
 * sp.Skeleton动画
 */
if (CC_EDITOR) {
    // 重写update方法 达到在编辑模式下 自动播放动画的功能
    sp.Skeleton.prototype['lateUpdate'] = function (dt) {
        if (CC_EDITOR) {
            cc['engine']._animatingInEditMode = 1;
            cc['engine'].animatingInEditMode = 1;
        }
        if (this.paused)
            return;
        dt *= this.timeScale * sp['timeScale'];
        if (this.isAnimationCached()) {
            // Cache mode and has animation queue.
            if (this._isAniComplete) {
                if (this._animationQueue.length === 0 && !this._headAniInfo) {
                    var frameCache = this._frameCache;
                    if (frameCache && frameCache.isInvalid()) {
                        frameCache.updateToFrame();
                        var frames = frameCache.frames;
                        this._curFrame = frames[frames.length - 1];
                    }
                    return;
                }
                if (!this._headAniInfo) {
                    this._headAniInfo = this._animationQueue.shift();
                }
                this._accTime += dt;
                if (this._accTime > this._headAniInfo.delay) {
                    var aniInfo = this._headAniInfo;
                    this._headAniInfo = null;
                    this.setAnimation(0, aniInfo.animationName, aniInfo.loop);
                }
                return;
            }
            this._updateCache(dt);
        }
        else {
            this._updateRealtime(dt);
        }
    };
}
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Languages;
(function (Languages) {
    Languages[Languages["zh"] = 0] = "zh";
    Languages[Languages["en"] = 1] = "en";
})(Languages || (Languages = {}));
exports.cocosz = null;
var CocosZ = /** @class */ (function (_super) {
    __extends(CocosZ, _super);
    function CocosZ() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameMgr = null;
        _this._dataMgr = null;
        _this._uiMgr = null;
        _this._resMgr = null;
        _this._audioMgr = null;
        _this._sceneMgr = null;
        _this.btnDebug = false;
        _this._languagesArr = ["zh", "en"];
        _this.curLanguage = "zh";
        _this._curLang = Languages.zh;
        _this.audioList = [];
        _this._useCJTimes = 0;
        _this._totalCJTimes = 0;
        _this.curLevel = 0;
        /** 暂停计数 */
        _this._pauseCount = 0;
        /** 最大分享数量 */
        _this.serverConfig_shareMaxNum = 0;
        /** 是否启用调试 */
        _this.isDeBug = false;
        /** 是否显示视频按钮 */
        _this.isADON = false;
        /** 游戏模式 */
        _this.gameMode = 6;
        _this._dtBack = 1 / 60;
        _this.isOk = false;
        _this.bundleConfig = {
            "ui/UILoadingPage": "bundleLoad"
        };
        _this.serverConfig = {
            ////////////////// 分享 ///////////////////
            // 分享最大次数(平台不能分享不要配置)
            "shareMaxNum": 5,
            // 分享成功的时间(秒)
            "shareTime": 2,
            ////////////////// 视频 ///////////////////
            // 视频点_游戏界面_高级武器（默认显示）
            "isVideoAd_advanced_weapon": "true",
            // 视频点_游戏界面_全屏轰炸（默认显示）
            "isVideoAd_Qpbz": "true",
            // 视频点_游戏界面_磁铁（默认显示）
            "isVideoAd_Citie": "true",
            // 视频点_游戏界面_隐藏banner（默认隐藏）
            "isVideoAd_hideBanner": "true",
            // 视频点_技能弹窗_视频解锁数量（默认0）
            "skillLockNum": 2,
            ////////////////// banner ///////////////////
            // 是否显示游戏界面banner(默认显示)
            "isBanner_game": true,
            ////////////////// 插屏 ///////////////////
            // 首页
            "isInterstitial_UIHomePage": "true",
            // 签到
            "isInterstitial_UISignPanel": "true",
            // 转盘
            "isInterstitial_UITurntablePanel": "true",
            // 在线奖励
            "isInterstitial_UITimePanel": "true",
            // 游戏
            "isInterstitial_UIGamePage": "true",
            // 复活
            "isInterstitial_UIRevivePanel": "true",
            // 暂停
            "isInterstitial_UIPausePanel": "true",
            // 技能
            "isInterstitial_UIUpgradePanel": "true",
            // 皮肤试用间隔(组件自带)
            "try_skin_level_count": 1,
            // 皮肤试用插屏间隔(组件自带)
            "try_skin_show_ad_interval": 1,
        };
        // 分享所需的时间(单位/秒)
        _this.serverConfig_shareTime = 2;
        return _this;
    }
    Object.defineProperty(CocosZ.prototype, "gameMgr", {
        get: function () {
            return this._gameMgr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CocosZ.prototype, "dataMgr", {
        get: function () {
            return this._dataMgr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CocosZ.prototype, "uiMgr", {
        get: function () {
            return this._uiMgr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CocosZ.prototype, "resMgr", {
        get: function () {
            return this._resMgr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CocosZ.prototype, "audioMgr", {
        get: function () {
            return this._audioMgr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CocosZ.prototype, "sceneMgr", {
        get: function () {
            return this._sceneMgr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CocosZ.prototype, "curLang", {
        get: function () { return this._curLang; },
        set: function (v) {
            this._curLang = v;
            this.curLanguage = this._languagesArr[v];
            cc.log("当前语言: ", this.curLanguage);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CocosZ.prototype, "useCJTimes", {
        get: function () {
            return this._useCJTimes;
        },
        set: function (num) {
            this._useCJTimes = num;
            localStorage.setItem(Constant_1.default.ST_GameData + "useCJTimes_dmm", this._useCJTimes.toString());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CocosZ.prototype, "totalCJTimes", {
        get: function () {
            return this._totalCJTimes;
        },
        set: function (num) {
            this._totalCJTimes = num;
            localStorage.setItem(Constant_1.default.ST_GameData + "totalCJTimes_dmm", this._totalCJTimes.toString());
        },
        enumerable: false,
        configurable: true
    });
    /** 事件上报的关卡id */
    CocosZ.prototype.getLevelId = function (id) {
        return exports.cocosz.dataMgr.TotoalCount_6;
    };
    Object.defineProperty(CocosZ.prototype, "pauseCount", {
        get: function () {
            return this._pauseCount;
        },
        set: function (v) {
            if (v < 0) {
                v = 0;
            }
            this._pauseCount = v;
            cc.log("pauseCount:", this._pauseCount);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CocosZ.prototype, "isPause", {
        get: function () {
            return (this.pauseCount > 0);
        },
        set: function (v) { },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CocosZ.prototype, "canShare", {
        /** 能否显示分享 */
        get: function () {
            var r = false;
            if ((CC_DEBUG && this.isDeBug) || PlatUtils_1.default.IsWechat) {
                if (exports.cocosz.dataMgr.shareNum < exports.cocosz.serverConfig_shareMaxNum) {
                    r = true;
                }
            }
            return r;
        },
        enumerable: false,
        configurable: true
    });
    CocosZ.prototype.onLoad = function () {
        var _this = this;
        exports.cocosz = this;
        this._gameMgr = GameMgr_1.default.inst;
        this._dataMgr = DataMgr_1.default.inst;
        this._resMgr = ResMgr_1.default.inst;
        this._uiMgr = UIMgr_1.default.inst;
        this._audioMgr = AudioMgr_1.default.inst;
        this._sceneMgr = SceneMgr_1.default.inst;
        // 常驻节点
        cc.game.addPersistRootNode(this.node);
        ////////////////////////////// 初始化语言 //////////////////////////////
        if (cc.sys.languageCode) {
            if (cc.sys.languageCode.toLowerCase().indexOf("zh") > -1) {
                this.curLanguage = 'zh';
            }
            else {
                this.curLanguage = 'en';
            }
        }
        i18n.init(this.curLanguage);
        ////////////////////////////// 测试模式 //////////////////////////////
        this.isDeBug = this.btnDebug;
        ////////////////////////////// 服务器配置 //////////////////////////////
        this._initConfigKey();
        ////////////////////////////// 游戏配置 //////////////////////////////
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        var manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        manager.gravity = cc.v2();
        // manager.debugDrawFlags = 1;
        // cc.game.setFrameRate(30);
        //保持微信屏幕长亮不熄屏
        if (PlatUtils_1.default.IsWechat) {
            //@ts-ignore
            wx.setKeepScreenOn({ keepScreenOn: true });
        }
        else if (PlatUtils_1.default.IsOPPO) {
            //@ts-ignore
            qg.setKeepScreenOn({
                keepScreenOn: true,
                success: function (res) { },
                fail: function (res) { },
                complete: function (res) { }
            });
        }
        else if (PlatUtils_1.default.IsVIVO) {
            //@ts-ignore
            qg.setKeepScreenOn({
                keepScreenOn: true,
                success: function () { console.log('handling success'); },
                fail: function (data, code) { console.log("handling fail, code = " + code); }
            });
        }
        ////////////////////////////// 加载bundle //////////////////////////////
        cc.assetManager.loadBundle("bundleLoad", null, function (err, bundle) {
            if (!err) {
                _this._initLoadingPage();
            }
            else {
                cc.log("加载分包bundleLoad出错");
            }
        });
    };
    CocosZ.prototype.update = function (dt) {
        var manager = cc.director.getPhysicsManager();
        manager.enabledAccumulator = true;
        // @ts-ignore
        manager.FIXED_TIME_STEP = cc.misc.lerp(this._dtBack, dt, 0.01);
        this._dtBack = dt;
    };
    CocosZ.prototype._initLoadingPage = function () {
        var _this = this;
        var url = "ui/UILoadingPage";
        this.resMgr.loadAndCacheRes(url, cc.Prefab, null, function () {
            _this._uiMgr.openPage(Constant_1.PageName.UILoadingPage);
            /** 登录认证 */
            Utils_1.utils.login(function () {
                ////////////////////////////// 缓存初始化 //////////////////////////////
                _this._initCache();
                ////////////////////////////// 加载bundleRes ///////////////////////////
                _this._loadBundleRes();
                ////////////////////////////// 华为隐私->插屏 ///////////////////////////
                if (PlatUtils_1.default.IsHuaWei) {
                    // utils.showYzRealNameAuthPanel();
                    // utils.showPrivacyPanel();
                    // this.scheduleOnce(() => {
                    //     utils.registerServerInitEvent(() => {
                    //         utils.adManager.showNativeSplashView(
                    //             () => { this.isOk = true; }
                    //         );
                    //     }, this);
                    // }, 3);
                }
                else {
                    _this.isOk = true;
                }
            });
        });
    };
    CocosZ.prototype._loadBundleRes = function () {
        var _this = this;
        cc.assetManager.loadBundle("bundleRes", function (err, bundle) {
            if (!err) {
                // 初始化bundle配置
                _this._initBundleConfig();
                // 加载资源
                _this._loadRes();
            }
            else {
                cc.log("加载分包bundleRes出错");
            }
        });
    };
    CocosZ.prototype._loadRes = function () {
        var _this = this;
        var totalCount = 0;
        var compCount = 0;
        // UI
        var mess1 = [];
        exports.cocosz.getDirWithPath("UI/", cc.Prefab, mess1);
        exports.cocosz.resMgr.loadAndCacheResArray(mess1, cc.Prefab, null, function () { compCount++; });
        // 图片_name
        var mess2 = [];
        exports.cocosz.getDirWithPath("i18n/tex_name/" + exports.cocosz.curLanguage, cc.SpriteAtlas, mess2);
        exports.cocosz.resMgr.loadAndCacheResArray(mess2, cc.SpriteAtlas, null, function () { compCount++; });
        // 图片_icon
        var mess3 = [];
        exports.cocosz.getDirWithPath("tex_common", cc.SpriteAtlas, mess3);
        exports.cocosz.resMgr.loadAndCacheResArray(mess3, cc.SpriteAtlas, null, function () { compCount++; });
        // 头像
        var mess4 = [];
        exports.cocosz.getDirWithPath("prefab_heads", cc.Prefab, mess4);
        exports.cocosz.resMgr.loadAndCacheResArray(mess4, cc.Prefab, null, function () { compCount++; });
        // 武器
        var mess5 = [];
        exports.cocosz.getDirWithPath("prefab_weapon", cc.Prefab, mess5);
        exports.cocosz.resMgr.loadAndCacheResArray(mess5, cc.Prefab, null, function () { compCount++; });
        // 皮肤
        var mess6 = [];
        exports.cocosz.getDirWithPath("prefab_skin", cc.Prefab, mess6);
        exports.cocosz.resMgr.loadAndCacheResArray(mess6, cc.Prefab, null, function () { compCount++; });
        // 音效
        var mess7 = [];
        exports.cocosz.getDirWithPath("audio_common", cc.AudioClip, mess7);
        exports.cocosz.resMgr.loadAndCacheResArray(mess7, cc.AudioClip, null, function () { compCount++; });
        // 总资源数量
        totalCount = mess1.length + mess2.length + mess3.length + mess4.length + mess5.length + mess6.length + mess7.length;
        // 挂载音效
        this.resMgr.cacheCocoszAudio();
        var percent = 0;
        this.schedule(function () {
            percent = compCount / totalCount;
            cc.game.emit(Constant_1.default.E_GAME_LOGIC, { type: Constant_1.default.E_UPDATE_PROGRESS, data: percent });
            if (compCount >= totalCount && _this.isOk) {
                _this.unscheduleAllCallbacks();
                // 计时插屏
                Utils_1.utils.registerServerInitEvent(function () {
                    var t = exports.cocosz.getConfigByKey("interval_time_show_cp");
                    if (Number.isInteger(t) && t > 0) {
                        _this.schedule(function () { Utils_1.utils.adManager.ShowInterstitial(); }, t);
                    }
                }, _this);
                // 开始在线计时
                setInterval(function () { exports.cocosz.dataMgr.OnlineToday++; }, 1000);
                // 跳转首页
                _this._sceneMgr.loadScene("Home", function () {
                    // console.log('加载完资源跳转到homepage');
                    // this._uiMgr.openPage(PageName.UIHomePage);
                    _this._sceneMgr.loadScene("GameStart", function () {
                        console.log('加载完资源跳转到homepage');
                    });
                });
            }
        }, 0);
    };
    CocosZ.prototype._initBundleConfig = function () {
        var arr = ["resources", "bundleRes", "bundleLoad"];
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var bundleKey = arr_1[_i];
            var bundle = cc.assetManager.bundles.get(bundleKey);
            if (bundle) {
                var info = bundle["_config"]["paths"]["_map"];
                if (info) {
                    for (var key in info) {
                        this.bundleConfig[key] = bundleKey;
                    }
                }
            }
        }
        // cc.log("bundleConfig:", JSON.stringify(this.bundleConfig))
    };
    CocosZ.prototype.getBundleWithPath = function (path) {
        if (this.bundleConfig[path]) {
            return cc.assetManager.bundles.get(this.bundleConfig[path]);
        }
        else {
            for (var key in this.bundleConfig) {
                if (key[0] === path[0]) {
                    if (key.includes(path, 0)) {
                        return cc.assetManager.bundles.get(this.bundleConfig[key]);
                    }
                }
            }
        }
        cc.log("查找budle失败：", path);
        return null;
    };
    CocosZ.prototype.getDirWithPath = function (path, type, out) {
        var bundle = this.getBundleWithPath(path);
        if (bundle) {
            return bundle.getDirWithPath(path, type, out);
        }
        else {
            return null;
        }
    };
    CocosZ.prototype.getConfigByKey = function (key) {
        if (CC_DEBUG && exports.cocosz.isDeBug) {
            return this.serverConfig ? this.serverConfig[key] : null;
        }
        else {
            return Utils_1.utils.getConfigByKey(key);
        }
    };
    CocosZ.prototype._initConfigKey = function () {
        var callback = function () {
            // 0 测试模式
            if (exports.cocosz.getConfigByKey("game_debug") == "true") {
                exports.cocosz.isDeBug = true;
            }
            // 1 分享最大数量
            var shareMaxNum = exports.cocosz.getConfigByKey("shareMaxNum");
            if (Number.isInteger(shareMaxNum) && shareMaxNum >= 0) {
                exports.cocosz.serverConfig_shareMaxNum = shareMaxNum;
            }
            // 2 分享所需的时间
            var shareTime = exports.cocosz.getConfigByKey("shareTime");
            if (Number.isInteger(shareTime) && shareTime >= 0) {
                exports.cocosz.serverConfig_shareTime = shareTime;
            }
        };
        if (CC_DEBUG && this.isDeBug) {
            callback && callback();
        }
        else {
            // 注册服务器回调
            Utils_1.utils.registerServerInitEvent(callback, this);
        }
    };
    CocosZ.prototype._initCache = function () {
        // 缓存
        exports.cocosz.dataMgr && exports.cocosz.dataMgr.init();
        if (exports.cocosz.dataMgr.LastLoadDate != (new Date()).toDateString()) {
            exports.cocosz.dataMgr.LastLoadDate = (new Date()).toDateString();
            exports.cocosz.dataMgr.shareNum = 0;
        }
        if (localStorage.getItem(Constant_1.default.ST_GameData + "totalCJTimes_dmm")) {
            this._totalCJTimes = Number(localStorage.getItem(Constant_1.default.ST_GameData + "totalCJTimes_dmm"));
        }
        if (localStorage.getItem(Constant_1.default.ST_GameData + "useCJTimes_dmm")) {
            this._useCJTimes = Number(localStorage.getItem(Constant_1.default.ST_GameData + "useCJTimes_dmm"));
        }
        if (new Date().toDateString() != exports.cocosz.dataMgr.LastLoadDate) {
            this.useCJTimes = 0;
            exports.cocosz.dataMgr.OnlineToday = 0;
            exports.cocosz.dataMgr.receiveToday = [0, 0, 0, 0, 0];
            exports.cocosz.dataMgr.LastLoadDate = new Date().toDateString();
        }
    };
    Object.defineProperty(CocosZ.prototype, "isShowAd", {
        /** 是否显示广告 */
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CocosZ.prototype, "isShowGameBanner", {
        /** 是否显示游戏banner */
        get: function () {
            if (exports.cocosz.getConfigByKey("gameBanner") == "false") {
                return false;
            }
            else {
                return true;
            }
        },
        enumerable: false,
        configurable: true
    });
    /** 秒转换时分秒 */
    CocosZ.prototype.StoHMS = function (s) {
        var m = 0; // 分
        var h = 0; // 小时
        if (s >= 60) {
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
        return r;
    };
    /**
     * 看视频
     * @param callFun_S 播放成功时回调
     * @param callFun_F 播放失败时回调
     */
    CocosZ.prototype.watchAD = function (callFun_S, callFun_F) {
        if (callFun_S === void 0) { callFun_S = null; }
        if (callFun_F === void 0) { callFun_F = null; }
        if (this.isDeBug) {
            if (callFun_S) {
                callFun_S();
            }
            else if (callFun_F) {
                callFun_F();
            }
            return;
        }
        if (exports.cocosz.audioMgr.videoOn)
            return;
        exports.cocosz.audioMgr.videoOn = true;
        exports.cocosz.pauseCount++;
        exports.cocosz.audioMgr.stopAll();
        Utils_1.utils.adManager.ShowVideo(function (ret, msg) {
            exports.cocosz.audioMgr.videoOn = false;
            exports.cocosz.pauseCount--;
            exports.cocosz.audioMgr.playBgm();
            if (ret) {
                callFun_S && callFun_S();
            }
            else {
                callFun_F && callFun_F();
                msg = msg ? msg : i18n.t("msg.video_load_fail"); //视频加载失败
                Msg_1.default.Show(msg);
            }
        });
    };
    /**
     *
     * @param 分享成功回调
     * @param 分享失败回调
     */
    CocosZ.prototype.share = function (callFun_S, callFun_F) {
        var _this = this;
        if (callFun_S === void 0) { callFun_S = null; }
        if (callFun_F === void 0) { callFun_F = null; }
        if (this.isDeBug) {
            callFun_S && callFun_S();
            exports.cocosz.dataMgr.shareNum++;
        }
        else {
            var startTime_1 = (new Date()).getTime();
            Utils_1.utils.share(function () {
                if ((new Date()).getTime() - startTime_1 > (_this.serverConfig_shareTime * 1000)) {
                    callFun_S && callFun_S();
                    exports.cocosz.dataMgr.shareNum++;
                }
                else {
                    callFun_F && callFun_F();
                    Msg_1.default.Show("请分享至不同好友才可获得奖励哦");
                }
            });
        }
    };
    /**
     * 屏幕震动功能
     * @param type 震动类型 传递枚举：VibrateType
     */
    CocosZ.prototype.vibrate = function (type) {
        if (type === void 0) { type = "short"; }
        if (exports.cocosz.dataMgr.ShakeOn == false)
            return;
        if (PlatUtils_1.default.IsWechat) {
            if (type == "short") {
                //@ts-ignore
                //使手机发生较短时间的振动（15 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效
                wx.vibrateShort({ success: function (res) { }, fail: function (res) { } });
            }
            else {
                //@ts-ignore
                wx.vibrateLong({ success: function (res) { }, fail: function (res) { } }); //400 ms
            }
        }
        else if (PlatUtils_1.default.IsOPPO) {
            if (type == "short") {
                //@ts-ignore
                qg.vibrateShort({ success: function (res) { }, fail: function (res) { } }); //（20 ms）
            }
            else {
                //@ts-ignore
                qg.vibrateLong({ success: function (res) { }, fail: function (res) { } }); //400 ms
            }
        }
        else if (PlatUtils_1.default.IsVIVO) {
            if (type == "short") {
                //@ts-ignore
                qg.vibrateShort(); //（15 ms）
            }
            else {
                //@ts-ignore
                qg.vibrateLong(); //400 ms
            }
        }
        else if (PlatUtils_1.default.IsQQ) {
            if (type == "short") {
                //@ts-ignore
                //（15 ms），仅在 iPhone 7/7 Plus 以上及 Android 机型生效。
                qq.vibrateShort({ success: function (res) { }, fail: function (res) { } });
            }
            else {
                //@ts-ignore
                qq.vibrateLong({ success: function (res) { }, fail: function (res) { } }); //400 ms
            }
        }
        else if (PlatUtils_1.default.IsDouyin) {
            if (type == "short") {
                //@ts-ignore
                tt.vibrateShort({ success: function (res) { }, fail: function (res) { } });
            }
            else {
                //@ts-ignore
                tt.vibrateLong({ success: function (res) { }, fail: function (res) { } }); //400 ms
            }
        }
        else if (PlatUtils_1.default.IsBaidu) {
            if (type == "short") {
                //@ts-ignore
                //（15 ms），仅在 iPhone 7/7 Plus 以上及 Android 机型生效。
                swan.vibrateShort({ success: function (res) { }, fail: function (res) { } });
            }
            else {
                //@ts-ignore
                swan.vibrateLong({ success: function (res) { }, fail: function (res) { } }); //400 ms
            }
        }
        else if (PlatUtils_1.default.IsNativeAndroid) {
            if (type == "short") {
                //@ts-ignore
                jsb.reflection.callStaticMethod(Utils_1.utils.Tool_Native.jniClassName, "vibrateShort", "()V");
            }
            else {
                //@ts-ignore
                jsb.reflection.callStaticMethod(Utils_1.utils.Tool_Native.jniClassName, "vibrateLong", "()V");
            }
        }
    };
    __decorate([
        property()
    ], CocosZ.prototype, "btnDebug", void 0);
    __decorate([
        property({ visible: false })
    ], CocosZ.prototype, "curLanguage", void 0);
    __decorate([
        property({ visible: false })
    ], CocosZ.prototype, "_curLang", void 0);
    __decorate([
        property({ type: cc.Enum(Languages), displayName: "当前语言", tooltip: "zh(中文) en(英文)" })
    ], CocosZ.prototype, "curLang", null);
    __decorate([
        property({ type: cc.AudioClip })
    ], CocosZ.prototype, "audioList", void 0);
    CocosZ = __decorate([
        ccclass
    ], CocosZ);
    return CocosZ;
}(cc.Component));
exports.default = CocosZ;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRnJhbWV3b3JrXFxDb2Nvc1oudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFnQztBQUNoQyxxQ0FBZ0M7QUFDaEMsaUNBQTRCO0FBQzVCLG1DQUE4QjtBQUM5Qix1Q0FBZ0Q7QUFDaEQsdUNBQWtDO0FBQ2xDLHVDQUFrQztBQUNsQywyREFBMEQ7QUFDMUQsNkJBQXdCO0FBQ3hCLG1FQUE4RDtBQUM5RCxhQUFhO0FBQ2IsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3JDOztHQUVHO0FBQ0gsSUFBSSxTQUFTLEVBQUU7SUFDWCxnQ0FBZ0M7SUFDaEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsVUFBVSxFQUFFO1FBQzlDLElBQUksU0FBUyxFQUFFO1lBQ1gsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQztZQUN0QyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU87UUFFeEIsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXZDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUU7WUFDMUIsc0NBQXNDO1lBQ3RDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDckIsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUN6RCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNsQyxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsU0FBUyxFQUFFLEVBQUU7d0JBQ3RDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzt3QkFDM0IsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDOUM7b0JBQ0QsT0FBTztpQkFDVjtnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNwRDtnQkFDRCxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFO29CQUN6QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztvQkFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzdEO2dCQUNELE9BQU87YUFDVjtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDekI7YUFBTTtZQUNILElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDNUI7SUFDTCxDQUFDLENBQUE7Q0FDSjtBQUVLLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQUssU0FBb0I7QUFBekIsV0FBSyxTQUFTO0lBQUcscUNBQUUsQ0FBQTtJQUFFLHFDQUFFLENBQUE7QUFBQyxDQUFDLEVBQXBCLFNBQVMsS0FBVCxTQUFTLFFBQVc7QUFFZCxRQUFBLE1BQU0sR0FBVyxJQUFJLENBQUM7QUFHakM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFrbEJDO1FBaGxCVyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsWUFBTSxHQUFVLElBQUksQ0FBQztRQUNyQixhQUFPLEdBQVcsSUFBSSxDQUFDO1FBQ3ZCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFDM0IsZUFBUyxHQUFhLElBQUksQ0FBQztRQTJCbkMsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUVsQixtQkFBYSxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXJDLGlCQUFXLEdBQVcsSUFBSSxDQUFDO1FBRW5CLGNBQVEsR0FBYyxTQUFTLENBQUMsRUFBRSxDQUFDO1FBVTNDLGVBQVMsR0FBd0IsRUFBRSxDQUFDO1FBRzVCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBU3hCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBU2xDLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFNckIsV0FBVztRQUNILGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBY2hDLGFBQWE7UUFDYiw4QkFBd0IsR0FBVyxDQUFDLENBQUM7UUFZckMsYUFBYTtRQUNiLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsZUFBZTtRQUNmLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsV0FBVztRQUNYLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFpRWIsYUFBTyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFTakIsVUFBSSxHQUFZLEtBQUssQ0FBQztRQTRHOUIsa0JBQVksR0FBUTtZQUNoQixrQkFBa0IsRUFBRSxZQUFZO1NBQ25DLENBQUE7UUF3Q0Qsa0JBQVksR0FBUTtZQUNoQix5Q0FBeUM7WUFDekMscUJBQXFCO1lBQ3JCLGFBQWEsRUFBRSxDQUFDO1lBQ2hCLGFBQWE7WUFDYixXQUFXLEVBQUUsQ0FBQztZQUVkLHlDQUF5QztZQUN6QyxzQkFBc0I7WUFDdEIsMkJBQTJCLEVBQUUsTUFBTTtZQUNuQyxzQkFBc0I7WUFDdEIsZ0JBQWdCLEVBQUUsTUFBTTtZQUN4QixvQkFBb0I7WUFDcEIsaUJBQWlCLEVBQUUsTUFBTTtZQUN6QiwwQkFBMEI7WUFDMUIsc0JBQXNCLEVBQUUsTUFBTTtZQUM5Qix1QkFBdUI7WUFDdkIsY0FBYyxFQUFFLENBQUM7WUFFakIsNkNBQTZDO1lBQzdDLHVCQUF1QjtZQUN2QixlQUFlLEVBQUUsSUFBSTtZQUVyQix5Q0FBeUM7WUFDekMsS0FBSztZQUNMLDJCQUEyQixFQUFFLE1BQU07WUFDbkMsS0FBSztZQUNMLDRCQUE0QixFQUFFLE1BQU07WUFDcEMsS0FBSztZQUNMLGlDQUFpQyxFQUFFLE1BQU07WUFDekMsT0FBTztZQUNQLDRCQUE0QixFQUFFLE1BQU07WUFDcEMsS0FBSztZQUNMLDJCQUEyQixFQUFFLE1BQU07WUFDbkMsS0FBSztZQUNMLDhCQUE4QixFQUFFLE1BQU07WUFDdEMsS0FBSztZQUNMLDZCQUE2QixFQUFFLE1BQU07WUFDckMsS0FBSztZQUNMLCtCQUErQixFQUFFLE1BQU07WUFDdkMsZUFBZTtZQUNmLHNCQUFzQixFQUFFLENBQUM7WUFDekIsaUJBQWlCO1lBQ2pCLDJCQUEyQixFQUFFLENBQUM7U0FDakMsQ0FBQTtRQTJIRCxnQkFBZ0I7UUFDaEIsNEJBQXNCLEdBQVcsQ0FBQyxDQUFDOztJQTRGdkMsQ0FBQztJQXprQkcsc0JBQVcsMkJBQU87YUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywyQkFBTzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHlCQUFLO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsMEJBQU07YUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw0QkFBUTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDRCQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBV0Qsc0JBQUksMkJBQU87YUFBWCxjQUEyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ2xELFVBQVksQ0FBWTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3RDLENBQUM7OztPQUxpRDtJQVlsRCxzQkFBSSw4QkFBVTthQUFkO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFDRCxVQUFlLEdBQVc7WUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDdkIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDL0YsQ0FBQzs7O09BSkE7SUFPRCxzQkFBSSxnQ0FBWTthQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO2FBQ0QsVUFBaUIsR0FBVztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztZQUN6QixZQUFZLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsV0FBVyxHQUFHLGtCQUFrQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNuRyxDQUFDOzs7T0FKQTtJQU9ELGdCQUFnQjtJQUNoQiwyQkFBVSxHQUFWLFVBQVcsRUFBVztRQUNsQixPQUFPLGNBQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3hDLENBQUM7SUFJRCxzQkFBVyw4QkFBVTthQUFyQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO2FBQ0QsVUFBc0IsQ0FBUztZQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUFFO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QyxDQUFDOzs7T0FMQTtJQU1ELHNCQUFXLDJCQUFPO2FBQWxCO1lBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQzthQUNELFVBQW9CLENBQVUsSUFBSSxDQUFDOzs7T0FEbEM7SUFNRCxzQkFBVyw0QkFBUTtRQURuQixhQUFhO2FBQ2I7WUFDSSxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDZCxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxtQkFBUyxDQUFDLFFBQVEsRUFBRTtnQkFDbEQsSUFBSSxjQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxjQUFNLENBQUMsd0JBQXdCLEVBQUU7b0JBQzNELENBQUMsR0FBRyxJQUFJLENBQUM7aUJBQ1o7YUFDSjtZQUNELE9BQU8sQ0FBQyxDQUFDO1FBQ2IsQ0FBQzs7O09BQUE7SUFRRCx1QkFBTSxHQUFOO1FBQUEsaUJBOERDO1FBN0RHLGNBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFPLENBQUMsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQU8sQ0FBQyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxnQkFBTSxDQUFDLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsSUFBSSxDQUFDO1FBQy9CLE9BQU87UUFDUCxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QyxtRUFBbUU7UUFDbkUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDM0I7U0FDSjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVCLGtFQUFrRTtRQUNsRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDN0IsbUVBQW1FO1FBQ25FLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixrRUFBa0U7UUFDbEUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDakQsNkRBQTZEO1FBQzdELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixPQUFPLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMxQiw4QkFBOEI7UUFDOUIsNEJBQTRCO1FBRTVCLGFBQWE7UUFDYixJQUFJLG1CQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3BCLFlBQVk7WUFDWixFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7U0FDN0M7YUFBTSxJQUFJLG1CQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3pCLFlBQVk7WUFDWixFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUNmLFlBQVksRUFBRSxJQUFJO2dCQUNsQixPQUFPLEVBQUUsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDM0IsSUFBSSxFQUFFLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLFFBQVEsRUFBRSxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQy9CLENBQUMsQ0FBQTtTQUNMO2FBQU0sSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTtZQUN6QixZQUFZO1lBQ1osRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDZixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsT0FBTyxFQUFFLGNBQWMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxFQUFFLFVBQVUsSUFBSSxFQUFFLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUF5QixJQUFNLENBQUMsQ0FBQSxDQUFDLENBQUM7YUFDL0UsQ0FBQyxDQUFBO1NBQ0w7UUFFRCxzRUFBc0U7UUFDdEUsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNO1lBQ3ZELElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ04sS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0gsRUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO2FBQzdCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBR1MsdUJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUNsQyxhQUFhO1FBQ2IsT0FBTyxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBR08saUNBQWdCLEdBQXhCO1FBQUEsaUJBMEJDO1FBekJHLElBQUksR0FBRyxHQUFXLGtCQUFrQixDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRTtZQUM5QyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxtQkFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdDLFdBQVc7WUFDWCxhQUFLLENBQUMsS0FBSyxDQUFDO2dCQUNSLG1FQUFtRTtnQkFDbkUsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixzRUFBc0U7Z0JBQ3RFLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsbUVBQW1FO2dCQUNuRSxJQUFJLG1CQUFTLENBQUMsUUFBUSxFQUFFO29CQUNwQixtQ0FBbUM7b0JBQ25DLDRCQUE0QjtvQkFDNUIsNEJBQTRCO29CQUM1Qiw0Q0FBNEM7b0JBQzVDLGdEQUFnRDtvQkFDaEQsMENBQTBDO29CQUMxQyxhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsU0FBUztpQkFDWjtxQkFBTTtvQkFDSCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztpQkFDcEI7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLCtCQUFjLEdBQXRCO1FBQUEsaUJBV0M7UUFWRyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTtZQUNoRCxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNOLGNBQWM7Z0JBQ2QsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQ3pCLE9BQU87Z0JBQ1AsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ25CO2lCQUFNO2dCQUNILEVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTthQUM1QjtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVPLHlCQUFRLEdBQWhCO1FBQUEsaUJBZ0VDO1FBL0RHLElBQUksVUFBVSxHQUFXLENBQUMsQ0FBQztRQUMzQixJQUFJLFNBQVMsR0FBVyxDQUFDLENBQUM7UUFDMUIsS0FBSztRQUNMLElBQUksS0FBSyxHQUFRLEVBQUUsQ0FBQztRQUNwQixjQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9DLGNBQU0sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLGNBQVEsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNsRixVQUFVO1FBQ1YsSUFBSSxLQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLGNBQU0sQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEdBQUcsY0FBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BGLGNBQU0sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLGNBQVEsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN2RixVQUFVO1FBQ1YsSUFBSSxLQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLGNBQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0QsY0FBTSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsY0FBUSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZGLEtBQUs7UUFDTCxJQUFJLEtBQUssR0FBUSxFQUFFLENBQUM7UUFDcEIsY0FBTSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RCxjQUFNLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxjQUFRLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbEYsS0FBSztRQUNMLElBQUksS0FBSyxHQUFRLEVBQUUsQ0FBQztRQUNwQixjQUFNLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pELGNBQU0sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLGNBQVEsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNsRixLQUFLO1FBQ0wsSUFBSSxLQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLGNBQU0sQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkQsY0FBTSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsY0FBUSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2xGLEtBQUs7UUFDTCxJQUFJLEtBQUssR0FBUSxFQUFFLENBQUM7UUFDcEIsY0FBTSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzRCxjQUFNLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxjQUFRLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFFckYsUUFBUTtRQUNSLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3BILE9BQU87UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFL0IsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixPQUFPLEdBQUcsU0FBUyxHQUFHLFVBQVUsQ0FBQztZQUNqQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxrQkFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBRXpGLElBQUksU0FBUyxJQUFJLFVBQVUsSUFBSSxLQUFJLENBQUMsSUFBSSxFQUFFO2dCQUN0QyxLQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztnQkFDOUIsT0FBTztnQkFDUCxhQUFLLENBQUMsdUJBQXVCLENBQUM7b0JBQzFCLElBQUksQ0FBQyxHQUFHLGNBQU0sQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsQ0FBQztvQkFDdkQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQzlCLEtBQUksQ0FBQyxRQUFRLENBQUMsY0FBUSxhQUFLLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ25FO2dCQUNMLENBQUMsRUFBRSxLQUFJLENBQUMsQ0FBQztnQkFDVCxTQUFTO2dCQUNULFdBQVcsQ0FBQyxjQUFRLGNBQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzNELE9BQU87Z0JBQ1AsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO29CQUM3QixtQ0FBbUM7b0JBQ25DLDZDQUE2QztvQkFDN0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFO3dCQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7b0JBQ3BDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO2FBRU47UUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBS08sa0NBQWlCLEdBQXpCO1FBQ0ksSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ25ELEtBQXdCLFVBQUcsRUFBSCxXQUFHLEVBQUgsaUJBQUcsRUFBSCxJQUFHLEVBQUU7WUFBeEIsSUFBTSxTQUFTLFlBQUE7WUFDaEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BELElBQUksTUFBTSxFQUFFO2dCQUNSLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDN0MsSUFBSSxJQUFJLEVBQUU7b0JBQ04sS0FBSyxJQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7d0JBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDO3FCQUN0QztpQkFDSjthQUNKO1NBQ0o7UUFDRCw2REFBNkQ7SUFDakUsQ0FBQztJQUNELGtDQUFpQixHQUFqQixVQUFrQixJQUFZO1FBQzFCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN6QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNILEtBQUssSUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDakMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNwQixJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFO3dCQUN2QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQzlEO2lCQUNKO2FBQ0o7U0FDSjtRQUNELEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzFCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDRCwrQkFBYyxHQUFkLFVBQWUsSUFBWSxFQUFFLElBQXFCLEVBQUUsR0FBZ0M7UUFDaEYsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksTUFBTSxFQUFFO1lBQ1IsT0FBTyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBK0NELCtCQUFjLEdBQWQsVUFBZSxHQUFXO1FBQ3RCLElBQUksUUFBUSxJQUFJLGNBQU0sQ0FBQyxPQUFPLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDNUQ7YUFBTTtZQUNILE9BQU8sYUFBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7SUFDTywrQkFBYyxHQUF0QjtRQUNJLElBQUksUUFBUSxHQUFHO1lBQ1gsU0FBUztZQUNULElBQUksY0FBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxNQUFNLEVBQUU7Z0JBQy9DLGNBQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3pCO1lBQ0QsV0FBVztZQUNYLElBQUksV0FBVyxHQUFHLGNBQU0sQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLEVBQUU7Z0JBQ25ELGNBQU0sQ0FBQyx3QkFBd0IsR0FBRyxXQUFXLENBQUM7YUFDakQ7WUFDRCxZQUFZO1lBQ1osSUFBSSxTQUFTLEdBQUcsY0FBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRTtnQkFDL0MsY0FBTSxDQUFDLHNCQUFzQixHQUFHLFNBQVMsQ0FBQzthQUM3QztRQUNMLENBQUMsQ0FBQTtRQUVELElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDMUIsUUFBUSxJQUFJLFFBQVEsRUFBRSxDQUFDO1NBQzFCO2FBQ0k7WUFDRCxVQUFVO1lBQ1YsYUFBSyxDQUFDLHVCQUF1QixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNqRDtJQUNMLENBQUM7SUFFTywyQkFBVSxHQUFsQjtRQUNJLEtBQUs7UUFDTCxjQUFNLENBQUMsT0FBTyxJQUFJLGNBQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEMsSUFBSSxjQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUM1RCxjQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUMxRCxjQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7U0FDL0I7UUFFRCxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUMsRUFBRTtZQUNqRSxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsV0FBVyxHQUFHLGtCQUFrQixDQUFDLENBQUMsQ0FBQztTQUNoRztRQUNELElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQy9ELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1NBQzVGO1FBQ0QsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLGNBQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQzFELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLGNBQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUMvQixjQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QyxjQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzNEO0lBQ0wsQ0FBQztJQUdELHNCQUFXLDRCQUFRO1FBRG5CLGFBQWE7YUFDYjtZQUNJLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7OztPQUFBO0lBR0Qsc0JBQVcsb0NBQWdCO1FBRDNCLG1CQUFtQjthQUNuQjtZQUNJLElBQUksY0FBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxPQUFPLEVBQUU7Z0JBQ2hELE9BQU8sS0FBSyxDQUFDO2FBQ2hCO2lCQUFNO2dCQUNILE9BQU8sSUFBSSxDQUFDO2FBQ2Y7UUFDTCxDQUFDOzs7T0FBQTtJQUVELGFBQWE7SUFDYix1QkFBTSxHQUFOLFVBQU8sQ0FBUztRQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLElBQUk7UUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxLQUFLO1FBQ2YsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ1QsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ1IsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDMUI7U0FDSjtRQUNELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHdCQUFPLEdBQVAsVUFBUSxTQUEwQixFQUFFLFNBQTBCO1FBQXRELDBCQUFBLEVBQUEsZ0JBQTBCO1FBQUUsMEJBQUEsRUFBQSxnQkFBMEI7UUFDMUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxTQUFTLEVBQUU7Z0JBQ1gsU0FBUyxFQUFFLENBQUM7YUFDZjtpQkFBTSxJQUFJLFNBQVMsRUFBRTtnQkFDbEIsU0FBUyxFQUFFLENBQUM7YUFDZjtZQUNELE9BQU87U0FDVjtRQUNELElBQUksY0FBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUNwQyxjQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0IsY0FBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLGNBQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsYUFBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUMvQixjQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDaEMsY0FBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLGNBQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDMUIsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsU0FBUyxJQUFJLFNBQVMsRUFBRSxDQUFDO2FBQzVCO2lCQUNJO2dCQUNELFNBQVMsSUFBSSxTQUFTLEVBQUUsQ0FBQztnQkFDekIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQSxRQUFRO2dCQUN4RCxhQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBSUQ7Ozs7T0FJRztJQUNJLHNCQUFLLEdBQVosVUFBYSxTQUEwQixFQUFFLFNBQTBCO1FBQW5FLGlCQWdCQztRQWhCWSwwQkFBQSxFQUFBLGdCQUEwQjtRQUFFLDBCQUFBLEVBQUEsZ0JBQTBCO1FBQy9ELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLFNBQVMsSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUN6QixjQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzdCO2FBQU07WUFDSCxJQUFJLFdBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2QyxhQUFLLENBQUMsS0FBSyxDQUFDO2dCQUNSLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsV0FBUyxHQUFHLENBQUMsS0FBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxFQUFFO29CQUMzRSxTQUFTLElBQUksU0FBUyxFQUFFLENBQUM7b0JBQ3pCLGNBQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQzdCO3FCQUFNO29CQUNILFNBQVMsSUFBSSxTQUFTLEVBQUUsQ0FBQztvQkFDekIsYUFBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2lCQUMvQjtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksd0JBQU8sR0FBZCxVQUFlLElBQXNCO1FBQXRCLHFCQUFBLEVBQUEsY0FBc0I7UUFDakMsSUFBSSxjQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxLQUFLO1lBQUUsT0FBTztRQUM1QyxJQUFJLG1CQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3BCLElBQUksSUFBSSxJQUFJLE9BQU8sRUFBRTtnQkFDakIsWUFBWTtnQkFDWiwyREFBMkQ7Z0JBQzNELEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxPQUFPLFlBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLFlBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDeEQ7aUJBQU07Z0JBQ0gsWUFBWTtnQkFDWixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsT0FBTyxZQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsSUFBSSxZQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUUsUUFBUTthQUNqRTtTQUNKO2FBQ0ksSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTtZQUN2QixJQUFJLElBQUksSUFBSSxPQUFPLEVBQUU7Z0JBQ2pCLFlBQVk7Z0JBQ1osRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLE9BQU8sWUFBQyxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksWUFBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBLFNBQVM7YUFDakU7aUJBQU07Z0JBQ0gsWUFBWTtnQkFDWixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsT0FBTyxZQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsSUFBSSxZQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUUsUUFBUTthQUNqRTtTQUNKO2FBQU0sSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLElBQUksSUFBSSxPQUFPLEVBQUU7Z0JBQ2pCLFlBQVk7Z0JBQ1osRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUEsU0FBUzthQUM5QjtpQkFBTTtnQkFDSCxZQUFZO2dCQUNaLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFFBQVE7YUFDN0I7U0FDSjthQUFNLElBQUksbUJBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDdkIsSUFBSSxJQUFJLElBQUksT0FBTyxFQUFFO2dCQUNqQixZQUFZO2dCQUNaLDhDQUE4QztnQkFDOUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLE9BQU8sWUFBQyxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksWUFBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN4RDtpQkFBTTtnQkFDSCxZQUFZO2dCQUNaLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxPQUFPLFlBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLFlBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRO2FBQ2hFO1NBQ0o7YUFBTSxJQUFJLG1CQUFTLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksSUFBSSxJQUFJLE9BQU8sRUFBRTtnQkFDakIsWUFBWTtnQkFDWixFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsT0FBTyxZQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsSUFBSSxZQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3hEO2lCQUFNO2dCQUNILFlBQVk7Z0JBQ1osRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE9BQU8sWUFBQyxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksWUFBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVE7YUFDaEU7U0FDSjthQUFNLElBQUksbUJBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsSUFBSSxJQUFJLElBQUksT0FBTyxFQUFFO2dCQUNqQixZQUFZO2dCQUNaLDhDQUE4QztnQkFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLE9BQU8sWUFBQyxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksWUFBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMxRDtpQkFBTTtnQkFDSCxZQUFZO2dCQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxPQUFPLFlBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLFlBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRO2FBQ2xFO1NBQ0o7YUFBTSxJQUFJLG1CQUFTLENBQUMsZUFBZSxFQUFFO1lBQ2xDLElBQUksSUFBSSxJQUFJLE9BQU8sRUFBRTtnQkFDakIsWUFBWTtnQkFDWixHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLGFBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUMxRjtpQkFBTTtnQkFDSCxZQUFZO2dCQUNaLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsYUFBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3pGO1NBQ0o7SUFDTCxDQUFDO0lBL2lCRDtRQURDLFFBQVEsRUFBRTs0Q0FDZTtJQUkxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzsrQ0FDRjtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzs0Q0FDYztJQUUzQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxDQUFDO3lDQUNwQztJQVFsRDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7NkNBQ0c7SUFsRG5CLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FrbEIxQjtJQUFELGFBQUM7Q0FsbEJELEFBa2xCQyxDQWxsQm1DLEVBQUUsQ0FBQyxTQUFTLEdBa2xCL0M7a0JBbGxCb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTWdyIGZyb20gXCIuL0dhbWVNZ3JcIjtcclxuaW1wb3J0IERhdGFNZ3IgZnJvbSBcIi4vRGF0YU1nclwiO1xyXG5pbXBvcnQgVUlNZ3IgZnJvbSBcIi4vVUlNZ3JcIjtcclxuaW1wb3J0IFJlc01nciBmcm9tIFwiLi9SZXNNZ3JcIjtcclxuaW1wb3J0IENvbnN0YW50LCB7IFBhZ2VOYW1lIH0gZnJvbSBcIi4vQ29uc3RhbnRcIjtcclxuaW1wb3J0IFNjZW5lTWdyIGZyb20gXCIuL1NjZW5lTWdyXCI7XHJcbmltcG9ydCBBdWRpb01nciBmcm9tIFwiLi9BdWRpb01nclwiO1xyXG5pbXBvcnQgeyB1dGlscyB9IGZyb20gXCIuLi8uLi9jb21tb24tcGx1Z2luL1NjcmlwdHMvVXRpbHNcIjtcclxuaW1wb3J0IE1zZyBmcm9tIFwiLi9Nc2dcIjtcclxuaW1wb3J0IFBsYXRVdGlscyBmcm9tIFwiLi4vLi4vY29tbW9uLXBsdWdpbi9TY3JpcHRzL1BsYXRVdGlsc1wiO1xyXG4vLyBAdHMtaWdub3JlXHJcbmNvbnN0IGkxOG4gPSByZXF1aXJlKCdMYW5ndWFnZURhdGEnKTtcclxuLyoqXHJcbiAqIHNwLlNrZWxldG9u5Yqo55S7XHJcbiAqL1xyXG5pZiAoQ0NfRURJVE9SKSB7XHJcbiAgICAvLyDph43lhpl1cGRhdGXmlrnms5Ug6L6+5Yiw5Zyo57yW6L6R5qih5byP5LiLIOiHquWKqOaSreaUvuWKqOeUu+eahOWKn+iDvVxyXG4gICAgc3AuU2tlbGV0b24ucHJvdG90eXBlWydsYXRlVXBkYXRlJ10gPSBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICBpZiAoQ0NfRURJVE9SKSB7XHJcbiAgICAgICAgICAgIGNjWydlbmdpbmUnXS5fYW5pbWF0aW5nSW5FZGl0TW9kZSA9IDE7XHJcbiAgICAgICAgICAgIGNjWydlbmdpbmUnXS5hbmltYXRpbmdJbkVkaXRNb2RlID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGR0ICo9IHRoaXMudGltZVNjYWxlICogc3BbJ3RpbWVTY2FsZSddO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0FuaW1hdGlvbkNhY2hlZCgpKSB7XHJcbiAgICAgICAgICAgIC8vIENhY2hlIG1vZGUgYW5kIGhhcyBhbmltYXRpb24gcXVldWUuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0FuaUNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYW5pbWF0aW9uUXVldWUubGVuZ3RoID09PSAwICYmICF0aGlzLl9oZWFkQW5pSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmcmFtZUNhY2hlID0gdGhpcy5fZnJhbWVDYWNoZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZnJhbWVDYWNoZSAmJiBmcmFtZUNhY2hlLmlzSW52YWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lQ2FjaGUudXBkYXRlVG9GcmFtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZnJhbWVzID0gZnJhbWVDYWNoZS5mcmFtZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1ckZyYW1lID0gZnJhbWVzW2ZyYW1lcy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9oZWFkQW5pSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hlYWRBbmlJbmZvID0gdGhpcy5fYW5pbWF0aW9uUXVldWUuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX2FjY1RpbWUgKz0gZHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYWNjVGltZSA+IHRoaXMuX2hlYWRBbmlJbmZvLmRlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFuaUluZm8gPSB0aGlzLl9oZWFkQW5pSW5mbztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oZWFkQW5pSW5mbyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltYXRpb24oMCwgYW5pSW5mby5hbmltYXRpb25OYW1lLCBhbmlJbmZvLmxvb3ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNhY2hlKGR0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVSZWFsdGltZShkdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZW51bSBMYW5ndWFnZXMgeyB6aCwgZW4gfVxyXG5cclxuZXhwb3J0IGxldCBjb2Nvc3o6IENvY29zWiA9IG51bGw7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2Nvc1ogZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgX2dhbWVNZ3I6IEdhbWVNZ3IgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfZGF0YU1ncjogRGF0YU1nciA9IG51bGw7XHJcbiAgICBwcml2YXRlIF91aU1ncjogVUlNZ3IgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfcmVzTWdyOiBSZXNNZ3IgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYXVkaW9NZ3I6IEF1ZGlvTWdyID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3NjZW5lTWdyOiBTY2VuZU1nciA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGdldCBnYW1lTWdyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lTWdyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZGF0YU1ncigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YU1ncjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHVpTWdyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91aU1ncjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJlc01ncigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVzTWdyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYXVkaW9NZ3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1ZGlvTWdyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc2NlbmVNZ3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NjZW5lTWdyO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBidG5EZWJ1ZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2xhbmd1YWdlc0FyciA9IFtcInpoXCIsIFwiZW5cIl07XHJcbiAgICBAcHJvcGVydHkoeyB2aXNpYmxlOiBmYWxzZSB9KVxyXG4gICAgY3VyTGFuZ3VhZ2U6IHN0cmluZyA9IFwiemhcIjtcclxuICAgIEBwcm9wZXJ0eSh7IHZpc2libGU6IGZhbHNlIH0pXHJcbiAgICBwcml2YXRlIF9jdXJMYW5nOiBMYW5ndWFnZXMgPSBMYW5ndWFnZXMuemg7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKExhbmd1YWdlcyksIGRpc3BsYXlOYW1lOiBcIuW9k+WJjeivreiogFwiLCB0b29sdGlwOiBcInpoKOS4reaWhykgZW4o6Iux5paHKVwiIH0pXHJcbiAgICBnZXQgY3VyTGFuZygpOiBMYW5ndWFnZXMgeyByZXR1cm4gdGhpcy5fY3VyTGFuZzsgfVxyXG4gICAgc2V0IGN1ckxhbmcodjogTGFuZ3VhZ2VzKSB7XHJcbiAgICAgICAgdGhpcy5fY3VyTGFuZyA9IHY7XHJcbiAgICAgICAgdGhpcy5jdXJMYW5ndWFnZSA9IHRoaXMuX2xhbmd1YWdlc0Fyclt2XTtcclxuICAgICAgICBjYy5sb2coXCLlvZPliY3or63oqIA6IFwiLCB0aGlzLmN1ckxhbmd1YWdlKVxyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxyXG4gICAgYXVkaW9MaXN0OiBBcnJheTxjYy5BdWRpb0NsaXA+ID0gW107XHJcblxyXG5cclxuICAgIHByaXZhdGUgX3VzZUNKVGltZXM6IG51bWJlciA9IDA7XHJcbiAgICBnZXQgdXNlQ0pUaW1lcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlQ0pUaW1lcztcclxuICAgIH1cclxuICAgIHNldCB1c2VDSlRpbWVzKG51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlQ0pUaW1lcyA9IG51bTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudC5TVF9HYW1lRGF0YSArIFwidXNlQ0pUaW1lc19kbW1cIiwgdGhpcy5fdXNlQ0pUaW1lcy50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF90b3RhbENKVGltZXM6IG51bWJlciA9IDA7XHJcbiAgICBnZXQgdG90YWxDSlRpbWVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b3RhbENKVGltZXM7XHJcbiAgICB9XHJcbiAgICBzZXQgdG90YWxDSlRpbWVzKG51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fdG90YWxDSlRpbWVzID0gbnVtO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50LlNUX0dhbWVEYXRhICsgXCJ0b3RhbENKVGltZXNfZG1tXCIsIHRoaXMuX3RvdGFsQ0pUaW1lcy50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBjdXJMZXZlbDogbnVtYmVyID0gMDtcclxuICAgIC8qKiDkuovku7bkuIrmiqXnmoTlhbPljaFpZCAqL1xyXG4gICAgZ2V0TGV2ZWxJZChpZD86IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIGNvY29zei5kYXRhTWdyLlRvdG9hbENvdW50XzY7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaaguWBnOiuoeaVsCAqL1xyXG4gICAgcHJpdmF0ZSBfcGF1c2VDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBnZXQgcGF1c2VDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGF1c2VDb3VudDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgcGF1c2VDb3VudCh2OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodiA8IDApIHsgdiA9IDA7IH1cclxuICAgICAgICB0aGlzLl9wYXVzZUNvdW50ID0gdjtcclxuICAgICAgICBjYy5sb2coXCJwYXVzZUNvdW50OlwiLCB0aGlzLl9wYXVzZUNvdW50KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgaXNQYXVzZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMucGF1c2VDb3VudCA+IDApO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXQgaXNQYXVzZSh2OiBib29sZWFuKSB7IH1cclxuXHJcbiAgICAvKiog5pyA5aSn5YiG5Lqr5pWw6YePICovXHJcbiAgICBzZXJ2ZXJDb25maWdfc2hhcmVNYXhOdW06IG51bWJlciA9IDA7XHJcbiAgICAvKiog6IO95ZCm5pi+56S65YiG5LqrICovXHJcbiAgICBwdWJsaWMgZ2V0IGNhblNoYXJlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCByID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKChDQ19ERUJVRyAmJiB0aGlzLmlzRGVCdWcpIHx8IFBsYXRVdGlscy5Jc1dlY2hhdCkge1xyXG4gICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3Iuc2hhcmVOdW0gPCBjb2Nvc3ouc2VydmVyQ29uZmlnX3NoYXJlTWF4TnVtKSB7XHJcbiAgICAgICAgICAgICAgICByID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5piv5ZCm5ZCv55So6LCD6K+VICovXHJcbiAgICBpc0RlQnVnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKiog5piv5ZCm5pi+56S66KeG6aKR5oyJ6ZKuICovXHJcbiAgICBpc0FET046IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKiDmuLjmiI/mqKHlvI8gKi9cclxuICAgIGdhbWVNb2RlOiBudW1iZXIgPSA2O1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvY29zeiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fZ2FtZU1nciA9IEdhbWVNZ3IuaW5zdDtcclxuICAgICAgICB0aGlzLl9kYXRhTWdyID0gRGF0YU1nci5pbnN0O1xyXG4gICAgICAgIHRoaXMuX3Jlc01nciA9IFJlc01nci5pbnN0O1xyXG4gICAgICAgIHRoaXMuX3VpTWdyID0gVUlNZ3IuaW5zdDtcclxuICAgICAgICB0aGlzLl9hdWRpb01nciA9IEF1ZGlvTWdyLmluc3Q7XHJcbiAgICAgICAgdGhpcy5fc2NlbmVNZ3IgPSBTY2VuZU1nci5pbnN0O1xyXG4gICAgICAgIC8vIOW4uOmpu+iKgueCuVxyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyDliJ3lp4vljJbor63oqIAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgaWYgKGNjLnN5cy5sYW5ndWFnZUNvZGUpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5sYW5ndWFnZUNvZGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiemhcIikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJMYW5ndWFnZSA9ICd6aCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckxhbmd1YWdlID0gJ2VuJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpMThuLmluaXQodGhpcy5jdXJMYW5ndWFnZSk7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIOa1i+ivleaooeW8jyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0aGlzLmlzRGVCdWcgPSB0aGlzLmJ0bkRlYnVnO1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyDmnI3liqHlmajphY3nva4gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgdGhpcy5faW5pdENvbmZpZ0tleSgpO1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyDmuLjmiI/phY3nva4gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcclxuICAgICAgICBsZXQgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBtYW5hZ2VyLmdyYXZpdHkgPSBjYy52MigpO1xyXG4gICAgICAgIC8vIG1hbmFnZXIuZGVidWdEcmF3RmxhZ3MgPSAxO1xyXG4gICAgICAgIC8vIGNjLmdhbWUuc2V0RnJhbWVSYXRlKDMwKTtcclxuXHJcbiAgICAgICAgLy/kv53mjIHlvq7kv6HlsY/luZXplb/kuq7kuI3nhoTlsY9cclxuICAgICAgICBpZiAoUGxhdFV0aWxzLklzV2VjaGF0KSB7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB3eC5zZXRLZWVwU2NyZWVuT24oeyBrZWVwU2NyZWVuT246IHRydWUgfSlcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc09QUE8pIHtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHFnLnNldEtlZXBTY3JlZW5Pbih7XHJcbiAgICAgICAgICAgICAgICBrZWVwU2NyZWVuT246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7IH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAocmVzKSB7IH0sXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKHJlcykgeyB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNWSVZPKSB7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBxZy5zZXRLZWVwU2NyZWVuT24oe1xyXG4gICAgICAgICAgICAgICAga2VlcFNjcmVlbk9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZygnaGFuZGxpbmcgc3VjY2VzcycpIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZGF0YSwgY29kZSkgeyBjb25zb2xlLmxvZyhgaGFuZGxpbmcgZmFpbCwgY29kZSA9ICR7Y29kZX1gKSB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8g5Yqg6L29YnVuZGxlIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKFwiYnVuZGxlTG9hZFwiLCBudWxsLCAoZXJyLCBidW5kbGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRMb2FkaW5nUGFnZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5Yqg6L295YiG5YyFYnVuZGxlTG9hZOWHuumUmVwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kdEJhY2sgPSAxIC8gNjA7XHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkQWNjdW11bGF0b3IgPSB0cnVlO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBtYW5hZ2VyLkZJWEVEX1RJTUVfU1RFUCA9IGNjLm1pc2MubGVycCh0aGlzLl9kdEJhY2ssIGR0LCAwLjAxKTtcclxuICAgICAgICB0aGlzLl9kdEJhY2sgPSBkdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzT2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2luaXRMb2FkaW5nUGFnZSgpIHtcclxuICAgICAgICBsZXQgdXJsOiBzdHJpbmcgPSBcInVpL1VJTG9hZGluZ1BhZ2VcIjtcclxuICAgICAgICB0aGlzLnJlc01nci5sb2FkQW5kQ2FjaGVSZXModXJsLCBjYy5QcmVmYWIsIG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVUlMb2FkaW5nUGFnZSk7XHJcbiAgICAgICAgICAgIC8qKiDnmbvlvZXorqTor4EgKi9cclxuICAgICAgICAgICAgdXRpbHMubG9naW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIOe8k+WtmOWIneWni+WMliAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRDYWNoZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIOWKoOi9vWJ1bmRsZVJlcyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRCdW5kbGVSZXMoKTtcclxuICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyDljY7kuLrpmpDnp4EtPuaPkuWxjyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgICAgICAgIGlmIChQbGF0VXRpbHMuSXNIdWFXZWkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB1dGlscy5zaG93WXpSZWFsTmFtZUF1dGhQYW5lbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHV0aWxzLnNob3dQcml2YWN5UGFuZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHV0aWxzLnJlZ2lzdGVyU2VydmVySW5pdEV2ZW50KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHV0aWxzLmFkTWFuYWdlci5zaG93TmF0aXZlU3BsYXNoVmlldyhcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAoKSA9PiB7IHRoaXMuaXNPayA9IHRydWU7IH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0sIDMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzT2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkQnVuZGxlUmVzKCkge1xyXG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKFwiYnVuZGxlUmVzXCIsIChlcnIsIGJ1bmRsZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWVycikge1xyXG4gICAgICAgICAgICAgICAgLy8g5Yid5aeL5YyWYnVuZGxl6YWN572uXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0QnVuZGxlQ29uZmlnKCk7XHJcbiAgICAgICAgICAgICAgICAvLyDliqDovb3otYTmupBcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRSZXMoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuWKoOi9veWIhuWMhWJ1bmRsZVJlc+WHuumUmVwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkUmVzKCkge1xyXG4gICAgICAgIGxldCB0b3RhbENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBjb21wQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgLy8gVUlcclxuICAgICAgICBsZXQgbWVzczE6IGFueSA9IFtdO1xyXG4gICAgICAgIGNvY29zei5nZXREaXJXaXRoUGF0aChcIlVJL1wiLCBjYy5QcmVmYWIsIG1lc3MxKTtcclxuICAgICAgICBjb2Nvc3oucmVzTWdyLmxvYWRBbmRDYWNoZVJlc0FycmF5KG1lc3MxLCBjYy5QcmVmYWIsIG51bGwsICgpID0+IHsgY29tcENvdW50Kys7IH0pXHJcbiAgICAgICAgLy8g5Zu+54mHX25hbWVcclxuICAgICAgICBsZXQgbWVzczI6IGFueSA9IFtdO1xyXG4gICAgICAgIGNvY29zei5nZXREaXJXaXRoUGF0aChcImkxOG4vdGV4X25hbWUvXCIgKyBjb2Nvc3ouY3VyTGFuZ3VhZ2UsIGNjLlNwcml0ZUF0bGFzLCBtZXNzMik7XHJcbiAgICAgICAgY29jb3N6LnJlc01nci5sb2FkQW5kQ2FjaGVSZXNBcnJheShtZXNzMiwgY2MuU3ByaXRlQXRsYXMsIG51bGwsICgpID0+IHsgY29tcENvdW50Kys7IH0pXHJcbiAgICAgICAgLy8g5Zu+54mHX2ljb25cclxuICAgICAgICBsZXQgbWVzczM6IGFueSA9IFtdO1xyXG4gICAgICAgIGNvY29zei5nZXREaXJXaXRoUGF0aChcInRleF9jb21tb25cIiwgY2MuU3ByaXRlQXRsYXMsIG1lc3MzKTtcclxuICAgICAgICBjb2Nvc3oucmVzTWdyLmxvYWRBbmRDYWNoZVJlc0FycmF5KG1lc3MzLCBjYy5TcHJpdGVBdGxhcywgbnVsbCwgKCkgPT4geyBjb21wQ291bnQrKzsgfSlcclxuICAgICAgICAvLyDlpLTlg49cclxuICAgICAgICBsZXQgbWVzczQ6IGFueSA9IFtdO1xyXG4gICAgICAgIGNvY29zei5nZXREaXJXaXRoUGF0aChcInByZWZhYl9oZWFkc1wiLCBjYy5QcmVmYWIsIG1lc3M0KTtcclxuICAgICAgICBjb2Nvc3oucmVzTWdyLmxvYWRBbmRDYWNoZVJlc0FycmF5KG1lc3M0LCBjYy5QcmVmYWIsIG51bGwsICgpID0+IHsgY29tcENvdW50Kys7IH0pXHJcbiAgICAgICAgLy8g5q2m5ZmoXHJcbiAgICAgICAgbGV0IG1lc3M1OiBhbnkgPSBbXTtcclxuICAgICAgICBjb2Nvc3ouZ2V0RGlyV2l0aFBhdGgoXCJwcmVmYWJfd2VhcG9uXCIsIGNjLlByZWZhYiwgbWVzczUpO1xyXG4gICAgICAgIGNvY29zei5yZXNNZ3IubG9hZEFuZENhY2hlUmVzQXJyYXkobWVzczUsIGNjLlByZWZhYiwgbnVsbCwgKCkgPT4geyBjb21wQ291bnQrKzsgfSlcclxuICAgICAgICAvLyDnmq7ogqRcclxuICAgICAgICBsZXQgbWVzczY6IGFueSA9IFtdO1xyXG4gICAgICAgIGNvY29zei5nZXREaXJXaXRoUGF0aChcInByZWZhYl9za2luXCIsIGNjLlByZWZhYiwgbWVzczYpO1xyXG4gICAgICAgIGNvY29zei5yZXNNZ3IubG9hZEFuZENhY2hlUmVzQXJyYXkobWVzczYsIGNjLlByZWZhYiwgbnVsbCwgKCkgPT4geyBjb21wQ291bnQrKzsgfSlcclxuICAgICAgICAvLyDpn7PmlYhcclxuICAgICAgICBsZXQgbWVzczc6IGFueSA9IFtdO1xyXG4gICAgICAgIGNvY29zei5nZXREaXJXaXRoUGF0aChcImF1ZGlvX2NvbW1vblwiLCBjYy5BdWRpb0NsaXAsIG1lc3M3KTtcclxuICAgICAgICBjb2Nvc3oucmVzTWdyLmxvYWRBbmRDYWNoZVJlc0FycmF5KG1lc3M3LCBjYy5BdWRpb0NsaXAsIG51bGwsICgpID0+IHsgY29tcENvdW50Kys7IH0pXHJcblxyXG4gICAgICAgIC8vIOaAu+i1hOa6kOaVsOmHj1xyXG4gICAgICAgIHRvdGFsQ291bnQgPSBtZXNzMS5sZW5ndGggKyBtZXNzMi5sZW5ndGggKyBtZXNzMy5sZW5ndGggKyBtZXNzNC5sZW5ndGggKyBtZXNzNS5sZW5ndGggKyBtZXNzNi5sZW5ndGggKyBtZXNzNy5sZW5ndGg7XHJcbiAgICAgICAgLy8g5oyC6L296Z+z5pWIXHJcbiAgICAgICAgdGhpcy5yZXNNZ3IuY2FjaGVDb2Nvc3pBdWRpbygpO1xyXG5cclxuICAgICAgICBsZXQgcGVyY2VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHBlcmNlbnQgPSBjb21wQ291bnQgLyB0b3RhbENvdW50O1xyXG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9HQU1FX0xPR0lDLCB7IHR5cGU6IENvbnN0YW50LkVfVVBEQVRFX1BST0dSRVNTLCBkYXRhOiBwZXJjZW50IH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbXBDb3VudCA+PSB0b3RhbENvdW50ICYmIHRoaXMuaXNPaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgICAgICAgICAvLyDorqHml7bmj5LlsY9cclxuICAgICAgICAgICAgICAgIHV0aWxzLnJlZ2lzdGVyU2VydmVySW5pdEV2ZW50KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdCA9IGNvY29zei5nZXRDb25maWdCeUtleShcImludGVydmFsX3RpbWVfc2hvd19jcFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcih0KSAmJiB0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHsgdXRpbHMuYWRNYW5hZ2VyLlNob3dJbnRlcnN0aXRpYWwoKTsgfSwgdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAvLyDlvIDlp4vlnKjnur/orqHml7ZcclxuICAgICAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHsgY29jb3N6LmRhdGFNZ3IuT25saW5lVG9kYXkrKzsgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAvLyDot7PovazpppbpobVcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NjZW5lTWdyLmxvYWRTY2VuZShcIkhvbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfliqDovb3lrozotYTmupDot7PovazliLBob21lcGFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuX3VpTWdyLm9wZW5QYWdlKFBhZ2VOYW1lLlVJSG9tZVBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjZW5lTWdyLmxvYWRTY2VuZShcIkdhbWVTdGFydFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfliqDovb3lrozotYTmupDot7PovazliLBob21lcGFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1bmRsZUNvbmZpZzogYW55ID0ge1xyXG4gICAgICAgIFwidWkvVUlMb2FkaW5nUGFnZVwiOiBcImJ1bmRsZUxvYWRcIlxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfaW5pdEJ1bmRsZUNvbmZpZygpIHtcclxuICAgICAgICBsZXQgYXJyID0gW1wicmVzb3VyY2VzXCIsIFwiYnVuZGxlUmVzXCIsIFwiYnVuZGxlTG9hZFwiXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGJ1bmRsZUtleSBvZiBhcnIpIHtcclxuICAgICAgICAgICAgbGV0IGJ1bmRsZSA9IGNjLmFzc2V0TWFuYWdlci5idW5kbGVzLmdldChidW5kbGVLZXkpO1xyXG4gICAgICAgICAgICBpZiAoYnVuZGxlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5mbyA9IGJ1bmRsZVtcIl9jb25maWdcIl1bXCJwYXRoc1wiXVtcIl9tYXBcIl1cclxuICAgICAgICAgICAgICAgIGlmIChpbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gaW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1bmRsZUNvbmZpZ1trZXldID0gYnVuZGxlS2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjYy5sb2coXCJidW5kbGVDb25maWc6XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuYnVuZGxlQ29uZmlnKSlcclxuICAgIH1cclxuICAgIGdldEJ1bmRsZVdpdGhQYXRoKHBhdGg6IHN0cmluZyk6IGNjLkFzc2V0TWFuYWdlci5CdW5kbGUge1xyXG4gICAgICAgIGlmICh0aGlzLmJ1bmRsZUNvbmZpZ1twYXRoXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2MuYXNzZXRNYW5hZ2VyLmJ1bmRsZXMuZ2V0KHRoaXMuYnVuZGxlQ29uZmlnW3BhdGhdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmJ1bmRsZUNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleVswXSA9PT0gcGF0aFswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuaW5jbHVkZXMocGF0aCwgMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNjLmFzc2V0TWFuYWdlci5idW5kbGVzLmdldCh0aGlzLmJ1bmRsZUNvbmZpZ1trZXldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2MubG9nKFwi5p+l5om+YnVkbGXlpLHotKXvvJpcIiwgcGF0aClcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGdldERpcldpdGhQYXRoKHBhdGg6IHN0cmluZywgdHlwZTogdHlwZW9mIGNjLkFzc2V0LCBvdXQ/OiBBcnJheTxSZWNvcmQ8c3RyaW5nLCBhbnk+Pikge1xyXG4gICAgICAgIGxldCBidW5kbGUgPSB0aGlzLmdldEJ1bmRsZVdpdGhQYXRoKHBhdGgpO1xyXG4gICAgICAgIGlmIChidW5kbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1bmRsZS5nZXREaXJXaXRoUGF0aChwYXRoLCB0eXBlLCBvdXQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXJ2ZXJDb25maWc6IGFueSA9IHtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8g5YiG5LqrIC8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDliIbkuqvmnIDlpKfmrKHmlbAo5bmz5Y+w5LiN6IO95YiG5Lqr5LiN6KaB6YWN572uKVxyXG4gICAgICAgIFwic2hhcmVNYXhOdW1cIjogNSxcclxuICAgICAgICAvLyDliIbkuqvmiJDlip/nmoTml7bpl7Qo56eSKVxyXG4gICAgICAgIFwic2hhcmVUaW1lXCI6IDIsXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLyDop4bpopEgLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vIOinhumikeeCuV/muLjmiI/nlYzpnaJf6auY57qn5q2m5Zmo77yI6buY6K6k5pi+56S677yJXHJcbiAgICAgICAgXCJpc1ZpZGVvQWRfYWR2YW5jZWRfd2VhcG9uXCI6IFwidHJ1ZVwiLFxyXG4gICAgICAgIC8vIOinhumikeeCuV/muLjmiI/nlYzpnaJf5YWo5bGP6L2w54K477yI6buY6K6k5pi+56S677yJXHJcbiAgICAgICAgXCJpc1ZpZGVvQWRfUXBielwiOiBcInRydWVcIixcclxuICAgICAgICAvLyDop4bpopHngrlf5ri45oiP55WM6Z2iX+ejgemTge+8iOm7mOiupOaYvuekuu+8iVxyXG4gICAgICAgIFwiaXNWaWRlb0FkX0NpdGllXCI6IFwidHJ1ZVwiLFxyXG4gICAgICAgIC8vIOinhumikeeCuV/muLjmiI/nlYzpnaJf6ZqQ6JePYmFubmVy77yI6buY6K6k6ZqQ6JeP77yJXHJcbiAgICAgICAgXCJpc1ZpZGVvQWRfaGlkZUJhbm5lclwiOiBcInRydWVcIixcclxuICAgICAgICAvLyDop4bpopHngrlf5oqA6IO95by556qXX+inhumikeino+mUgeaVsOmHj++8iOm7mOiupDDvvIlcclxuICAgICAgICBcInNraWxsTG9ja051bVwiOiAyLFxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8gYmFubmVyIC8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDmmK/lkKbmmL7npLrmuLjmiI/nlYzpnaJiYW5uZXIo6buY6K6k5pi+56S6KVxyXG4gICAgICAgIFwiaXNCYW5uZXJfZ2FtZVwiOiB0cnVlLFxyXG5cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8g5o+S5bGPIC8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDpppbpobVcclxuICAgICAgICBcImlzSW50ZXJzdGl0aWFsX1VJSG9tZVBhZ2VcIjogXCJ0cnVlXCIsXHJcbiAgICAgICAgLy8g562+5YiwXHJcbiAgICAgICAgXCJpc0ludGVyc3RpdGlhbF9VSVNpZ25QYW5lbFwiOiBcInRydWVcIixcclxuICAgICAgICAvLyDovaznm5hcclxuICAgICAgICBcImlzSW50ZXJzdGl0aWFsX1VJVHVybnRhYmxlUGFuZWxcIjogXCJ0cnVlXCIsXHJcbiAgICAgICAgLy8g5Zyo57q/5aWW5YqxXHJcbiAgICAgICAgXCJpc0ludGVyc3RpdGlhbF9VSVRpbWVQYW5lbFwiOiBcInRydWVcIixcclxuICAgICAgICAvLyDmuLjmiI9cclxuICAgICAgICBcImlzSW50ZXJzdGl0aWFsX1VJR2FtZVBhZ2VcIjogXCJ0cnVlXCIsXHJcbiAgICAgICAgLy8g5aSN5rS7XHJcbiAgICAgICAgXCJpc0ludGVyc3RpdGlhbF9VSVJldml2ZVBhbmVsXCI6IFwidHJ1ZVwiLFxyXG4gICAgICAgIC8vIOaaguWBnFxyXG4gICAgICAgIFwiaXNJbnRlcnN0aXRpYWxfVUlQYXVzZVBhbmVsXCI6IFwidHJ1ZVwiLFxyXG4gICAgICAgIC8vIOaKgOiDvVxyXG4gICAgICAgIFwiaXNJbnRlcnN0aXRpYWxfVUlVcGdyYWRlUGFuZWxcIjogXCJ0cnVlXCIsXHJcbiAgICAgICAgLy8g55qu6IKk6K+V55So6Ze06ZqUKOe7hOS7tuiHquW4pilcclxuICAgICAgICBcInRyeV9za2luX2xldmVsX2NvdW50XCI6IDEsXHJcbiAgICAgICAgLy8g55qu6IKk6K+V55So5o+S5bGP6Ze06ZqUKOe7hOS7tuiHquW4pilcclxuICAgICAgICBcInRyeV9za2luX3Nob3dfYWRfaW50ZXJ2YWxcIjogMSxcclxuICAgIH1cclxuICAgIGdldENvbmZpZ0J5S2V5KGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKENDX0RFQlVHICYmIGNvY29zei5pc0RlQnVnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlcnZlckNvbmZpZyA/IHRoaXMuc2VydmVyQ29uZmlnW2tleV0gOiBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1dGlscy5nZXRDb25maWdCeUtleShrZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgX2luaXRDb25maWdLZXkoKSB7XHJcbiAgICAgICAgbGV0IGNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAwIOa1i+ivleaooeW8j1xyXG4gICAgICAgICAgICBpZiAoY29jb3N6LmdldENvbmZpZ0J5S2V5KFwiZ2FtZV9kZWJ1Z1wiKSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgY29jb3N6LmlzRGVCdWcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIDEg5YiG5Lqr5pyA5aSn5pWw6YePXHJcbiAgICAgICAgICAgIGxldCBzaGFyZU1heE51bSA9IGNvY29zei5nZXRDb25maWdCeUtleShcInNoYXJlTWF4TnVtXCIpO1xyXG4gICAgICAgICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihzaGFyZU1heE51bSkgJiYgc2hhcmVNYXhOdW0gPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29jb3N6LnNlcnZlckNvbmZpZ19zaGFyZU1heE51bSA9IHNoYXJlTWF4TnVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIDIg5YiG5Lqr5omA6ZyA55qE5pe26Ze0XHJcbiAgICAgICAgICAgIGxldCBzaGFyZVRpbWUgPSBjb2Nvc3ouZ2V0Q29uZmlnQnlLZXkoXCJzaGFyZVRpbWVcIik7XHJcbiAgICAgICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHNoYXJlVGltZSkgJiYgc2hhcmVUaW1lID49IDApIHtcclxuICAgICAgICAgICAgICAgIGNvY29zei5zZXJ2ZXJDb25maWdfc2hhcmVUaW1lID0gc2hhcmVUaW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQ0NfREVCVUcgJiYgdGhpcy5pc0RlQnVnKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDms6jlhozmnI3liqHlmajlm57osINcclxuICAgICAgICAgICAgdXRpbHMucmVnaXN0ZXJTZXJ2ZXJJbml0RXZlbnQoY2FsbGJhY2ssIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pbml0Q2FjaGUoKSB7XHJcbiAgICAgICAgLy8g57yT5a2YXHJcbiAgICAgICAgY29jb3N6LmRhdGFNZ3IgJiYgY29jb3N6LmRhdGFNZ3IuaW5pdCgpO1xyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5MYXN0TG9hZERhdGUgIT0gKG5ldyBEYXRlKCkpLnRvRGF0ZVN0cmluZygpKSB7XHJcbiAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkxhc3RMb2FkRGF0ZSA9IChuZXcgRGF0ZSgpKS50b0RhdGVTdHJpbmcoKTtcclxuICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3Iuc2hhcmVOdW0gPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50LlNUX0dhbWVEYXRhICsgXCJ0b3RhbENKVGltZXNfZG1tXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RvdGFsQ0pUaW1lcyA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudC5TVF9HYW1lRGF0YSArIFwidG90YWxDSlRpbWVzX2RtbVwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudC5TVF9HYW1lRGF0YSArIFwidXNlQ0pUaW1lc19kbW1cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5fdXNlQ0pUaW1lcyA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudC5TVF9HYW1lRGF0YSArIFwidXNlQ0pUaW1lc19kbW1cIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKSAhPSBjb2Nvc3ouZGF0YU1nci5MYXN0TG9hZERhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy51c2VDSlRpbWVzID0gMDtcclxuICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuT25saW5lVG9kYXkgPSAwO1xyXG4gICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5yZWNlaXZlVG9kYXkgPSBbMCwgMCwgMCwgMCwgMF07XHJcbiAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkxhc3RMb2FkRGF0ZSA9IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmmK/lkKbmmL7npLrlub/lkYogKi9cclxuICAgIHB1YmxpYyBnZXQgaXNTaG93QWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmmK/lkKbmmL7npLrmuLjmiI9iYW5uZXIgKi9cclxuICAgIHB1YmxpYyBnZXQgaXNTaG93R2FtZUJhbm5lcigpIHtcclxuICAgICAgICBpZiAoY29jb3N6LmdldENvbmZpZ0J5S2V5KFwiZ2FtZUJhbm5lclwiKSA9PSBcImZhbHNlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog56eS6L2s5o2i5pe25YiG56eSICovXHJcbiAgICBTdG9ITVMoczogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG0gPSAwOy8vIOWIhlxyXG4gICAgICAgIGxldCBoID0gMDsvLyDlsI/ml7ZcclxuICAgICAgICBpZiAocyA+PSA2MCkge1xyXG4gICAgICAgICAgICBtID0gTWF0aC5mbG9vcihzIC8gNjApO1xyXG4gICAgICAgICAgICBzID0gTWF0aC5mbG9vcihzICUgNjApO1xyXG4gICAgICAgICAgICBpZiAobSA+IDYwKSB7XHJcbiAgICAgICAgICAgICAgICBoID0gTWF0aC5mbG9vcihtIC8gNjApO1xyXG4gICAgICAgICAgICAgICAgbSA9IE1hdGguZmxvb3IobSAlIDYwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgciA9IFwiXCI7XHJcbiAgICAgICAgciArPSAoaCA9PSAwID8gXCJcIiA6IGggKyBcIjpcIik7XHJcbiAgICAgICAgciArPSAobSA+PSAxMCA/IFwiXCIgKyBtIDogXCIwXCIgKyBtKTtcclxuICAgICAgICByICs9IChzID49IDEwID8gXCI6XCIgKyBzIDogXCI6MFwiICsgcyk7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnnIvop4bpopFcclxuICAgICAqIEBwYXJhbSBjYWxsRnVuX1Mg5pKt5pS+5oiQ5Yqf5pe25Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gY2FsbEZ1bl9GIOaSreaUvuWksei0peaXtuWbnuiwg1xyXG4gICAgICovXHJcbiAgICB3YXRjaEFEKGNhbGxGdW5fUzogRnVuY3Rpb24gPSBudWxsLCBjYWxsRnVuX0Y6IEZ1bmN0aW9uID0gbnVsbCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVCdWcpIHtcclxuICAgICAgICAgICAgaWYgKGNhbGxGdW5fUykge1xyXG4gICAgICAgICAgICAgICAgY2FsbEZ1bl9TKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FsbEZ1bl9GKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsRnVuX0YoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2Nvc3ouYXVkaW9NZ3IudmlkZW9PbikgcmV0dXJuO1xyXG4gICAgICAgIGNvY29zei5hdWRpb01nci52aWRlb09uID0gdHJ1ZTtcclxuICAgICAgICBjb2Nvc3oucGF1c2VDb3VudCsrO1xyXG4gICAgICAgIGNvY29zei5hdWRpb01nci5zdG9wQWxsKCk7XHJcbiAgICAgICAgdXRpbHMuYWRNYW5hZ2VyLlNob3dWaWRlbygocmV0LCBtc2cpID0+IHtcclxuICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnZpZGVvT24gPSBmYWxzZTtcclxuICAgICAgICAgICAgY29jb3N6LnBhdXNlQ291bnQtLTtcclxuICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlCZ20oKTtcclxuICAgICAgICAgICAgaWYgKHJldCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbEZ1bl9TICYmIGNhbGxGdW5fUygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FsbEZ1bl9GICYmIGNhbGxGdW5fRigpO1xyXG4gICAgICAgICAgICAgICAgbXNnID0gbXNnID8gbXNnIDogaTE4bi50KFwibXNnLnZpZGVvX2xvYWRfZmFpbFwiKTsvL+inhumikeWKoOi9veWksei0pVxyXG4gICAgICAgICAgICAgICAgTXNnLlNob3cobXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5YiG5Lqr5omA6ZyA55qE5pe26Ze0KOWNleS9jS/np5IpXHJcbiAgICBzZXJ2ZXJDb25maWdfc2hhcmVUaW1lOiBudW1iZXIgPSAyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSDliIbkuqvmiJDlip/lm57osINcclxuICAgICAqIEBwYXJhbSDliIbkuqvlpLHotKXlm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNoYXJlKGNhbGxGdW5fUzogRnVuY3Rpb24gPSBudWxsLCBjYWxsRnVuX0Y6IEZ1bmN0aW9uID0gbnVsbCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVCdWcpIHtcclxuICAgICAgICAgICAgY2FsbEZ1bl9TICYmIGNhbGxGdW5fUygpO1xyXG4gICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5zaGFyZU51bSsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydFRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICB1dGlscy5zaGFyZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIHN0YXJ0VGltZSA+ICh0aGlzLnNlcnZlckNvbmZpZ19zaGFyZVRpbWUgKiAxMDAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxGdW5fUyAmJiBjYWxsRnVuX1MoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5zaGFyZU51bSsrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsRnVuX0YgJiYgY2FsbEZ1bl9GKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgTXNnLlNob3coXCLor7fliIbkuqvoh7PkuI3lkIzlpb3lj4vmiY3lj6/ojrflvpflpZblirHlk6ZcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWxj+W5lemch+WKqOWKn+iDvVxyXG4gICAgICogQHBhcmFtIHR5cGUg6ZyH5Yqo57G75Z6LIOS8oOmAkuaemuS4vu+8mlZpYnJhdGVUeXBlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2aWJyYXRlKHR5cGU6IHN0cmluZyA9IFwic2hvcnRcIikge1xyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5TaGFrZU9uID09IGZhbHNlKSByZXR1cm47XHJcbiAgICAgICAgaWYgKFBsYXRVdGlscy5Jc1dlY2hhdCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PSBcInNob3J0XCIpIHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgLy/kvb/miYvmnLrlj5HnlJ/ovoPnn63ml7bpl7TnmoTmjK/liqjvvIgxNSBtc++8ieOAguS7heWcqCBpUGhvbmUgNyAvIDcgUGx1cyDku6XkuIrlj4ogQW5kcm9pZCDmnLrlnovnlJ/mlYhcclxuICAgICAgICAgICAgICAgIHd4LnZpYnJhdGVTaG9ydCh7IHN1Y2Nlc3MocmVzKSB7IH0sIGZhaWwocmVzKSB7IH0gfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIHd4LnZpYnJhdGVMb25nKHsgc3VjY2VzcyhyZXMpIHsgfSwgZmFpbChyZXMpIHsgfSB9KTsgIC8vNDAwIG1zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoUGxhdFV0aWxzLklzT1BQTykge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PSBcInNob3J0XCIpIHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgcWcudmlicmF0ZVNob3J0KHsgc3VjY2VzcyhyZXMpIHsgfSwgZmFpbChyZXMpIHsgfSB9KTsvL++8iDIwIG1z77yJXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIHFnLnZpYnJhdGVMb25nKHsgc3VjY2VzcyhyZXMpIHsgfSwgZmFpbChyZXMpIHsgfSB9KTsgIC8vNDAwIG1zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc1ZJVk8pIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJzaG9ydFwiKSB7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIHFnLnZpYnJhdGVTaG9ydCgpOy8v77yIMTUgbXPvvIlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgcWcudmlicmF0ZUxvbmcoKTsgLy80MDAgbXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzUVEpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJzaG9ydFwiKSB7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIC8v77yIMTUgbXPvvInvvIzku4XlnKggaVBob25lIDcvNyBQbHVzIOS7peS4iuWPiiBBbmRyb2lkIOacuuWei+eUn+aViOOAglxyXG4gICAgICAgICAgICAgICAgcXEudmlicmF0ZVNob3J0KHsgc3VjY2VzcyhyZXMpIHsgfSwgZmFpbChyZXMpIHsgfSB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgcXEudmlicmF0ZUxvbmcoeyBzdWNjZXNzKHJlcykgeyB9LCBmYWlsKHJlcykgeyB9IH0pOyAvLzQwMCBtc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNEb3V5aW4pIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJzaG9ydFwiKSB7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIHR0LnZpYnJhdGVTaG9ydCh7IHN1Y2Nlc3MocmVzKSB7IH0sIGZhaWwocmVzKSB7IH0gfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIHR0LnZpYnJhdGVMb25nKHsgc3VjY2VzcyhyZXMpIHsgfSwgZmFpbChyZXMpIHsgfSB9KTsgLy80MDAgbXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzQmFpZHUpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJzaG9ydFwiKSB7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIC8v77yIMTUgbXPvvInvvIzku4XlnKggaVBob25lIDcvNyBQbHVzIOS7peS4iuWPiiBBbmRyb2lkIOacuuWei+eUn+aViOOAglxyXG4gICAgICAgICAgICAgICAgc3dhbi52aWJyYXRlU2hvcnQoeyBzdWNjZXNzKHJlcykgeyB9LCBmYWlsKHJlcykgeyB9IH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBzd2FuLnZpYnJhdGVMb25nKHsgc3VjY2VzcyhyZXMpIHsgfSwgZmFpbChyZXMpIHsgfSB9KTsgLy80MDAgbXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzTmF0aXZlQW5kcm9pZCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PSBcInNob3J0XCIpIHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh1dGlscy5Ub29sX05hdGl2ZS5qbmlDbGFzc05hbWUsIFwidmlicmF0ZVNob3J0XCIsIFwiKClWXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHV0aWxzLlRvb2xfTmF0aXZlLmpuaUNsYXNzTmFtZSwgXCJ2aWJyYXRlTG9uZ1wiLCBcIigpVlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19