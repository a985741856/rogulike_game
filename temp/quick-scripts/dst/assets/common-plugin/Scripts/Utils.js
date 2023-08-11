
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/common-plugin/Scripts/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30bc3m3g/hJ/5QMVAo/j0Cz', 'Utils');
// common-plugin/Scripts/Utils.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = void 0;
var AdManager_1 = require("./AdManager");
var CommonConfig_1 = require("./CommonConfig");
var WechatTool_1 = require("./WechatTool");
var PlatUtils_1 = require("./PlatUtils");
var YZ_Tool_Oppo_1 = require("./YZ_Tool_Oppo");
var YZ_Tool_Baidu_1 = require("./YZ_Tool_Baidu");
var YZ_Tool_Native_1 = require("./YZ_Tool_Native");
var YZ_Tool_Vivo_1 = require("./YZ_Tool_Vivo");
var YZ_Tool_Douyin_1 = require("./YZ_Tool_Douyin");
var YZ_Constant_1 = require("./YZ_Constant");
var YZ_Tool_QQ_1 = require("./YZ_Tool_QQ");
var YZ_Tool_QTT_1 = require("./YZ_Tool_QTT");
var YZ_Tool_Xiaomi_1 = require("./YZ_Tool_Xiaomi");
var AldUtils_1 = require("./AldUtils");
var YZ_Tool_UC_1 = require("./YZ_Tool_UC");
var YZ_Tool_Cocosplay_1 = require("./YZ_Tool_Cocosplay");
var YZ_Tool_4399_1 = require("./YZ_Tool_4399");
var YZ_Tool_IOS_1 = require("./YZ_Tool_IOS");
var YZ_Tool_Bili_1 = require("./YZ_Tool_Bili");
var YZ_Tool_Kwai_1 = require("./YZ_Tool_Kwai");
var YZ_Tool_Broswer_1 = require("./YZ_Tool_Broswer");
var YZ_Tool_Wifi_1 = require("./YZ_Tool_Wifi");
var YZ_Tool_Hago_1 = require("./YZ_Tool_Hago");
var RedBagProgressWidget_1 = require("./RedBagProgressWidget");
var CompatibleTool_1 = require("./CompatibleTool");
var YZ_Tool_HuaWei_1 = require("./YZ_Tool_HuaWei");
var OpenRedBagPanel_1 = require("./OpenRedBagPanel");
var YZ_Tool_FaceBook_1 = require("./YZ_Tool_FaceBook");
var YzRealNameAuthPanel_1 = require("./YzRealNameAuthPanel");
var YzUserPrivacyPanel_1 = require("./YzUserPrivacyPanel");
var YZ_LocalStorage_1 = require("./YZ_LocalStorage");
var YZ_Tool_GoogleWeb_1 = require("./YZ_Tool_GoogleWeb");
//@ts-ignore
var CryptoJS = require("./Encrypt/CryptoJS");
var secretKey = "youzhixx12345678";
//@ts-ignore
// var uma = require('./UMengSDK/uma.js');
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
exports.utils = null;
var UTILSVERSION = "1.6.6";
var Utils = /** @class */ (function (_super) {
    __extends(Utils, _super);
    function Utils() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DebugLoacalConfig = false;
        _this.showLogView = false;
        _this.config = null;
        /**
         * 红包信息
         */
        _this.yzRedBagInfo = null;
        _this.adManager = null;
        _this._wechatTool = null;
        /**
         * 当前关卡
         */
        _this.currentLevel = 0;
        /**
         * 是否在录屏中
         */
        _this.isRecording = false;
        /**
         * 激励组件成功回调
         */
        _this.rewardCallFunc = null;
        /**
         * 激励组件关闭回调
         */
        _this.rewardCloseFunc = null;
        /**
         * 激励组件原始奖励
         */
        _this.rewardValue = 0;
        /**
         *
         * 幸运宝箱显示次数
         */
        _this.luckBoxShowCount = -1;
        /**
         * 原生插屏展示的次数
         */
        _this.nativeInsertShowCount = 0;
        /**
         *
         * 原生插屏满足关闭按钮设置大小条件后显示的次数，用来判断间隔多少次使用服务器大小
         */
        _this.nativeInsertResizeCloseBtnShowCount = 0;
        /**
         * 原生Banner展示的次数
         */
        _this.nativeBannerShowCount = 0;
        /**
         *
         * 原生banner满足关闭按钮设置大小条件后显示的次数，用来判断间隔多少次使用服务器大小
         */
        _this.nativeBannerResizeCloseBtnShowCount = 0;
        /**
         * 转盘抽奖关闭回调
         */
        _this.turnTablePanelCloseFunc = null;
        /**
         * 分享录屏组件关闭回调
         */
        _this.shareRecordPanelCloseFunc = null;
        /**
         *  宝箱关闭回调
         */
        _this.rewardBoxPanelCloseFunc = null;
        /**
         * 添加快捷桌面组件关闭回调
         */
        _this.rewardShortCutPanelCloseFunc = null;
        /**
        * 推荐游戏组件关闭回调
        */
        _this.rewardRecGamePanelCloseFunc = null;
        /**
         * 幸运宝箱组件关闭回调
         */
        _this.rewardLuckBoxPanelCloseFunc = null;
        //Banner广告关闭的时间
        _this._bannerCloseTime = 0;
        /**
         * 其他配置：包含分组的信息
         */
        _this._other_config = null;
        _this._oppoTool = null;
        _this._tool_Kwai = null;
        _this._tool_Wifi = null;
        _this._tool_Hago = null;
        _this._tool_Baidu = null;
        _this._tool_Native = null;
        _this._tool_Vivo = null;
        _this._tool_Douyin = null;
        _this._tool_QQ = null;
        _this._tool_XiaoMi = null;
        _this._tool_QTT = null;
        _this._tool_UC = null;
        _this._tool_Cocosplay = null;
        _this._tool_4399 = null;
        _this._tool_Ios = null;
        _this._tool_bili = null;
        _this._tool_Broswer = null;
        _this._tool_Huawei = null;
        _this._tool_Facebook = null;
        _this._tool_GoogleWeb = null;
        // 本地配置是否初始化
        _this._isConfigInit = false;
        // 服务器配置是否初始化
        _this._isServerInit = false;
        /**
         * 游戏进入时间
         */
        _this._gameEntryTime = 0;
        _this._isServerLoadSuccess = false;
        _this._recommendGamesBanner = null;
        _this._recommendGamesList = null;
        _this._tryGamesWidget = null;
        _this._moreGamesSidePanel = null;
        _this._moreGamesSidePanelBaidu = null;
        _this._recordWidget = null;
        _this._shortcutWidget = null;
        _this._gameBox = null;
        _this._nativeTryGameNode = null;
        _this.tryGameDate = [];
        _this.nativeNeedChange = true;
        _this._cur_tool = null;
        _this.serverShowLog = false;
        /**
         * 显示日志到控制台
         */
        _this.showLogToConsole = false;
        _this.overPageShowTime = 0;
        _this.overPageInsertAdIsTouch = false; // 结算页面的插屏广告是否被点击过
        /**
         * 分享成功次数
         */
        _this.recored_share_count = 0;
        _this.shareRecordPanel = null;
        _this._withdrawalWidget = null;
        _this._redBagProgressWidget = null;
        _this._withdrawalPanel = null;
        _this._openRedBagPanel = null;
        _this._rewardRedBagPanel = null;
        _this._rewardRedBagPanelShowCount = 0;
        _this._privacyWidget = null;
        _this._privacyPanel = null;
        _this.minScale = 1;
        _this.maxScale = 1.3;
        _this.runTime = 0.3;
        //原生广告最后上报时间
        _this._lastReportAdTime = 0;
        /**
         * 显示VIVO九宫格挂件
         * @param params
         * ```
         * {
         * top:number       // 距离屏幕顶部的距离
         * }
         * ```
         */
        _this._curVivoGamePortalLocation = "";
        _this._curGameDrawerAdLocation = "";
        _this._isRealNameAuth = false;
        _this._yzRealNameAuthPanel = null;
        _this._yzLoginPanel = null;
        return _this;
    }
    Object.defineProperty(Utils.prototype, "utilsVersion", {
        get: function () {
            return UTILSVERSION;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "wechatTool", {
        get: function () {
            if (!this._wechatTool) {
                exports.utils.showLog("wechat tool is null");
            }
            return this._wechatTool;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "oppoTool", {
        get: function () {
            if (!this._oppoTool) {
                exports.utils.showLog("oppo tool is null");
            }
            return this._oppoTool;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "kwaiTool", {
        get: function () {
            if (!this._tool_Kwai) {
                exports.utils.showLog("Kwai tool is null");
            }
            return this._tool_Kwai;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "wifiTool", {
        get: function () {
            if (!this._tool_Wifi) {
                exports.utils.showLog("Wifi tool is null");
            }
            return this._tool_Wifi;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "hagoTool", {
        get: function () {
            if (!this._tool_Hago) {
                exports.utils.showLog("Hago tool is null");
            }
            return this._tool_Hago;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "Tool_Baidu", {
        get: function () {
            if (!this._tool_Baidu) {
                exports.utils.showLog("tool baidu is null");
            }
            return this._tool_Baidu;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "Tool_Native", {
        get: function () {
            if (!this._tool_Native) {
                exports.utils.showLog("tool native is null");
            }
            return this._tool_Native;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "Tool_Vivo", {
        get: function () {
            if (!this._tool_Vivo) {
                exports.utils.showLog("tool vivo is null");
            }
            return this._tool_Vivo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "Tool_Douyin", {
        get: function () {
            if (!this._tool_Douyin) {
                exports.utils.showLog("tool douyin is null");
            }
            return this._tool_Douyin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "Tool_QQ", {
        get: function () {
            if (!this._tool_QQ) {
                exports.utils.showLog("tool qq is null");
            }
            return this._tool_QQ;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "Tool_XiaoMi", {
        get: function () {
            if (!this._tool_XiaoMi) {
                exports.utils.showLog("tool xiaomi is null");
            }
            return this._tool_XiaoMi;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "Tool_QTT", {
        get: function () {
            if (!this._tool_QTT) {
                exports.utils.showLog("tool qtt is null");
            }
            return this._tool_QTT;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "Tool_UC", {
        get: function () {
            if (!this._tool_UC) {
                exports.utils.showLog("tool uc is null");
            }
            return this._tool_UC;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "Tool_Cocosplay", {
        get: function () {
            if (!this._tool_Cocosplay) {
                exports.utils.showLog("tool cocos is null");
            }
            return this._tool_Cocosplay;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "Tool_4399", {
        get: function () {
            if (!this._tool_4399) {
                exports.utils.showLog("tool 4399 is null");
            }
            return this._tool_4399;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "Tool_IOS", {
        get: function () {
            if (!this._tool_Ios) {
                exports.utils.showLog("tool ios is null");
            }
            return this._tool_Ios;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "Tool_Bili", {
        get: function () {
            if (!this._tool_Ios) {
                exports.utils.showLog("tool ios is null");
            }
            return this._tool_bili;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "Tool_Broswer", {
        get: function () {
            if (!this._tool_Broswer) {
                // cc.log("tool qtt is null");
            }
            return this._tool_Broswer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "Tool_Huawei", {
        get: function () {
            if (!this._tool_Huawei) {
                exports.utils.showLog("huawei tool is null");
            }
            return this._tool_Huawei;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "Tool_Facebook", {
        get: function () {
            if (!this._tool_Facebook) {
                exports.utils.showLog("facebook tool is null");
            }
            return this._tool_Facebook;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "Tool_GoogleWeb", {
        get: function () {
            if (!this._tool_GoogleWeb) {
                exports.utils.showLog("googleWeb tool is null");
            }
            return this._tool_GoogleWeb;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 初始化配置数据
     * @param data 配置数据
     */
    Utils.prototype._initConfig = function () {
        var _this = this;
        if (this._isConfigInit) {
            exports.utils.showLog("warn:" + "配置数据已经初始化，请勿重复初始化!");
            return;
        }
        if (this.config.otherconfig.localConfig) {
            var data = JSON.stringify(this.config.otherconfig.localConfig.json);
            exports.utils.showLog("本地数据：" + data);
            if (data) {
                if (PlatUtils_1.default.IsNativeAndroid) {
                    // 安卓需要先获取JNI，再取本地数据
                    this.initTools(data);
                    this._isConfigInit = this._initLoacalConfig(data);
                    if (this._isConfigInit) {
                        exports.utils.Tool_Native.init();
                    }
                }
                else {
                    this._isConfigInit = this._initLoacalConfig(data);
                    // 这个必须在广告组件之前初始化
                    this.initTools(data);
                }
                this._other_config = this.config.otherconfig.localConfig.json.other;
                this.adManager = new AdManager_1.default();
                this.adManager.Init();
                if (this._oppoTool) {
                    this._oppoTool.hideDefaultLoadingPage();
                }
                if (PlatUtils_1.default.IsKwai) {
                    //@ts-ignore
                    kwaigame.readyGo();
                }
                exports.utils.yzRedBagInfo = new CommonConfig_1.YzRedBagInfo();
                exports.utils.registerServerInitEvent(function () {
                    if (exports.utils.ServerConfig) {
                        _this.serverShowLog = _this.getConfigByKey("is_show_log_view") == "true";
                        _this.showLogToConsole = _this.getConfigByKey("show_log_to_console") == "true";
                        if (_this.getConfigByKey("red_bag_total_progress")) {
                            exports.utils.yzRedBagInfo.totalProgress = _this.getConfigByKey("red_bag_total_progress");
                        }
                        if (_this.getConfigByKey("red_bag_progress_infos")) {
                            exports.utils.yzRedBagInfo.progressInfos = _this.getConfigByKey("red_bag_progress_infos");
                        }
                        if (_this.getConfigByKey("red_bag_moneys")) {
                            exports.utils.yzRedBagInfo.withdrawaMoneys = _this.getConfigByKey("red_bag_moneys");
                        }
                    }
                    if (PlatUtils_1.default.IsHago) {
                        //@ts-ignore
                        hg.gameLoadResult && hg.gameLoadResult({ code: 0 });
                    }
                    // if (PlatUtils.IsHuaWei) {
                    //     utils.showMsg("华为小游戏要用华为单独的组件对接！！！！！！！！！")
                    // }
                }, this);
            }
            else {
                exports.utils.showLog("warn:" + "本地配置文件不是合法的json文件！");
            }
        }
        else {
            exports.utils.showLog("warn:" + "本地配置文件未找到，请检查 CommonUtils 组件上是否存在！");
        }
    };
    Utils.prototype._initLoacalConfig = function (data) {
        if (this.config) {
            return this.config.init(data);
        }
        else {
            return false;
        }
    };
    Utils.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
        exports.utils = this;
        // utils.showLog("广告组件版本:" + this.utilsVersion);
        if (!CC_DEBUG) {
            // 正式包关闭此选项
            this.DebugLoacalConfig = false;
        }
        this._gameEntryTime = new Date().getTime();
        // 初始化本地配置
        this._initConfig();
    };
    Utils.prototype.update = function (dt) {
        if (this._isConfigInit) {
            if (this.adManager) {
                this.adManager.OnUpdate(dt);
            }
        }
    };
    Utils.prototype.initTools = function (data) {
        if (!this._isConfigInit && !PlatUtils_1.default.IsNativeAndroid) {
            exports.utils.showLog("warn:" + "本地数据未初始化!");
            return;
        }
        if (PlatUtils_1.default.IsNativeAndroid) {
            this._tool_Native = new YZ_Tool_Native_1.default();
            // this._tool_Native.init(data);
        }
        else if (PlatUtils_1.default.IsWechat) {
            this._wechatTool = new WechatTool_1.default();
            this._wechatTool.init(data);
        }
        else if (PlatUtils_1.default.IsOPPO) {
            this._oppoTool = new YZ_Tool_Oppo_1.default();
            this._oppoTool.init(data);
        }
        else if (PlatUtils_1.default.IsBaidu) {
            this._tool_Baidu = new YZ_Tool_Baidu_1.default();
            this._tool_Baidu.init(data);
        }
        else if (PlatUtils_1.default.IsVIVO) {
            this._tool_Vivo = new YZ_Tool_Vivo_1.default();
            this._tool_Vivo.init(data);
        }
        else if (PlatUtils_1.default.IsDouyin) {
            this._tool_Douyin = new YZ_Tool_Douyin_1.default();
            this._tool_Douyin.init(data);
        }
        else if (PlatUtils_1.default.IsQQ) {
            this._tool_QQ = new YZ_Tool_QQ_1.default();
            this._tool_QQ.init(data);
        }
        else if (PlatUtils_1.default.IsQTT) {
            this._tool_QTT = new YZ_Tool_QTT_1.default();
            this._tool_QTT.init(data);
        }
        else if (PlatUtils_1.default.IsXiaoMi) {
            this._tool_XiaoMi = new YZ_Tool_Xiaomi_1.default();
            this._tool_XiaoMi.init(data);
        }
        else if (PlatUtils_1.default.ISUC) {
            this._tool_UC = new YZ_Tool_UC_1.default();
            this._tool_UC.init(data);
        }
        else if (PlatUtils_1.default.ISCocos) {
            this._tool_Cocosplay = new YZ_Tool_Cocosplay_1.default();
            this._tool_Cocosplay.init(data);
        }
        else if (PlatUtils_1.default.Is4399) {
            this._tool_4399 = new YZ_Tool_4399_1.default();
            this._tool_4399.init(data);
        }
        else if (PlatUtils_1.default.IsNativeIOS) {
            this._tool_Ios = new YZ_Tool_IOS_1.default();
            this._tool_Ios.init(data);
        }
        else if (PlatUtils_1.default.IsBili) {
            this._tool_bili = new YZ_Tool_Bili_1.default();
            this._tool_bili.init(data);
        }
        else if (PlatUtils_1.default.IsKwai) {
            this._tool_Kwai = new YZ_Tool_Kwai_1.default();
            this._tool_Kwai.init(data);
        }
        else if (PlatUtils_1.default.IsWiFi) {
            this._tool_Wifi = new YZ_Tool_Wifi_1.default();
            this._tool_Wifi.init(data);
        }
        else if (PlatUtils_1.default.IsHago) {
            this._tool_Hago = new YZ_Tool_Hago_1.default();
            this._tool_Hago.init(data);
        }
        else if (PlatUtils_1.default.IsHuaWei) {
            this._tool_Huawei = new YZ_Tool_HuaWei_1.default();
            this._tool_Huawei.init(data);
        }
        else if (PlatUtils_1.default.IsFaceBook) {
            this._tool_Facebook = new YZ_Tool_FaceBook_1.default();
            this._tool_Facebook.init(data);
        }
        else if (PlatUtils_1.default.IsGoogleWeb) {
            this._tool_GoogleWeb = new YZ_Tool_GoogleWeb_1.default();
            this._tool_GoogleWeb.init(data);
        }
        else if (PlatUtils_1.default.IsTest) {
            this._tool_Broswer = new YZ_Tool_Broswer_1.default();
            this._tool_Broswer.init(data);
        }
    };
    /**
     * 延时调用函数
     * @param callback 回调函数
     * @param delay 延时时间
     */
    Utils.prototype.delayCall = function (callback, delay) {
        this.scheduleOnce(function () {
            if (callback) {
                callback();
            }
        }, delay);
    };
    /**
      *
      * @param callback Function<ret:boolean, msg:string> 分享回调
      */
    Utils.prototype.share = function (callback) {
        if (callback === void 0) { callback = null; }
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "本地数据未初始化!");
            return;
        }
        this.cur_tool && this.cur_tool.share && this.cur_tool.share(callback);
    };
    /**
     * 注销游戏退出回调
     */
    Utils.prototype.gameExitOff = function () {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "本地数据未初始化!");
            return;
        }
        if (PlatUtils_1.default.IsNativeAndroid) {
            cc.systemEvent.targetOff(this);
        }
    };
    /**
     * 开始录屏
     */
    Utils.prototype.recordStart = function () {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "本地数据未初始化!");
            return;
        }
        this.cur_tool && this.cur_tool.recordStart && this.cur_tool.recordStart();
    };
    /**
     * 结束录屏
     */
    Utils.prototype.recordEnd = function () {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "本地数据未初始化!");
            return;
        }
        this.cur_tool && this.cur_tool.recordEnd && this.cur_tool.recordEnd();
    };
    /**
     * 获取分享信息
     */
    Utils.prototype.getShareInfo = function () {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "本地数据未初始化!");
            return null;
        }
        if (this.config.otherconfig.shareTitle && this.config.otherconfig.shareImgUrl) {
            return {
                title: this.config.otherconfig.shareTitle,
                imageUrl: this.config.otherconfig.shareImgUrl
            };
        }
        else {
            exports.utils.showLog("分享配置出错！");
            return null;
        }
    };
    /**
     * 获取游戏内交叉推广信息, 游戏内跳转组件使用
     * @returns object or null
     */
    Utils.prototype.getInnerRecommendData = function () {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "本地数据未初始化!");
            return null;
        }
        if (this.ServerConfig && this.ServerConfig.jump_list && this.ServerConfig.jump_list.length > 0) {
            return {
                "jump_refresh_time": this.ServerConfig.icon_jump,
                "jump_list": this.ServerConfig.jump_list
            };
        }
        return null;
    };
    /**
     * 跳转到其他小游戏
     * @param data
     * {                                                        // 交叉推广挂件内容信息
            "icon": "http://xcx.youletd.com/img/icon/fgdxc.png",
            "name": "翻滚的香肠大冒险",
            "path": "",
            "js_jump": "true",
            "qr_code": "http://xcx.youletd.com/img/qrcode/q_fgdxc.jpg",
            "appid": "wx2c4ed4218224b042"
        }
        @param callback Function(ret) 跳转回调
     */
    Utils.prototype.navigateToMiniGame = function (data, callback) {
        if (callback === void 0) { callback = null; }
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "本地数据未初始化!");
            return;
        }
        if (PlatUtils_1.default.IsWechat) {
            if (data) {
                if (data.is_jump && data.is_jump == "true" && data.appid) {
                    this.wechatTool.navigateToMiniProgram(data.appid, callback, data.path);
                    return;
                }
                if (data.is_jump && data.is_jump == "false" && data.qr_code) {
                    this.wechatTool.previewImage(data.qr_code);
                    if (callback) {
                        callback(true);
                    }
                    return;
                }
            }
        }
        else if (PlatUtils_1.default.IsOPPO) {
            if (data && data.appid) {
                this.oppoTool.navigateToMiniGame(data.appid, callback);
            }
            else {
                exports.utils.showLog("data 或者 appid 为null!");
                if (callback) {
                    callback(false);
                }
            }
        }
        else if (PlatUtils_1.default.IsBaidu) {
            if (data && data.appid) {
                exports.utils.Tool_Baidu.navigateToMiniGame(data.appid, callback);
            }
            else {
                exports.utils.showLog("data 或者 appid 为null!");
                if (callback) {
                    callback(false);
                }
            }
        }
        else if (PlatUtils_1.default.IsNativeAndroid) {
            if (data) {
                exports.utils.Tool_Native.navigateToGame(JSON.stringify(data), callback);
            }
            else {
                exports.utils.showLog("data 或者 appid 为null!");
                if (callback) {
                    callback(false);
                }
            }
        }
        else if (PlatUtils_1.default.IsNativeIOS) {
            if (data && data.appid) {
                this.Tool_IOS.navigateToGame(data.appid, callback);
            }
            else {
                exports.utils.showLog("data 或者 appid 为null!");
                if (callback) {
                    callback(false);
                }
            }
        }
    };
    /**
     * 当前版本是否支持跳转到其他小游戏
     */
    Utils.prototype.isSupportnavigateToMiniGame = function () {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "本地数据未初始化!");
            return false;
        }
        if (PlatUtils_1.default.IsWechat || PlatUtils_1.default.IsNativeAndroid || PlatUtils_1.default.IsNativeIOS || PlatUtils_1.default.IsBaidu) {
            return true;
        }
        else if (PlatUtils_1.default.IsOPPO) {
            return this.oppoTool.isOverMiniVersion("1044");
        }
        else if (PlatUtils_1.default.IsDouyin) {
            return this.Tool_Douyin.isShowMoreGamesModal() && this.Tool_Douyin._sysInfo.appName != "live_stream";
        }
        else if (PlatUtils_1.default.IsQQ) {
            return this._tool_QQ.isOverMinVersion("1.7.1");
        }
        return false;
    };
    /**
     * 显示消息提示
     * @param msg 消息提示
     */
    Utils.prototype.showMsg = function (msg) {
        if (exports.utils.Tool_Broswer) {
            console.log(msg);
            return;
        }
        this.cur_tool && this.cur_tool.showToast && this.cur_tool.showToast(msg);
    };
    /**
     * 是否已经创建过快捷方式
     */
    Utils.prototype.hasShortcutInstalled = function () {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "本地数据未初始化!");
            return true;
        }
        if (PlatUtils_1.default.IsVIVO && this.Tool_Vivo) {
            return this.Tool_Vivo.ShortcutCreated;
        }
        else if (PlatUtils_1.default.IsOPPO && this.oppoTool) {
            return this.oppoTool.ShortcutCreated;
        }
        return false;
    };
    /**
     * 是否可以创建桌面快捷方式,平台是否支持
     */
    Utils.prototype.canCreateShortcut = function () {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "本地数据未初始化!");
            return false;
        }
        if (this.cur_tool && this.cur_tool.canCreateShortcut) {
            return this.cur_tool.canCreateShortcut();
        }
        return false;
    };
    /**
     * 创建桌面快捷方式
     */
    Utils.prototype.createShortcut = function (callback) {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "本地数据未初始化!");
            return;
        }
        this.cur_tool && this.cur_tool.createShortcut && this.cur_tool.createShortcut(callback);
    };
    /**
     * 通用http请求，只封装了GET请求
     * @param url 请求的url地址
     * @param callback Function(ret:boolean, data:string)
     * 请求结束回调，成功ret为true, data为返回的数据string。 失败为ret为false, data为空
     */
    Utils.prototype.commomHttpRequest = function (url, callback) {
        // if (!this._isConfigInit) {
        //     utils.showLog("warn:" + "本地数据未初始化!");
        //     return;
        // }
        var completeCallback = callback;
        var xhr = new XMLHttpRequest();
        xhr.timeout = 6000; // 单位毫秒
        var requestUrl = url; //this._buildServerUrl(url); // + `&time_stamp=${(new Date()).getTime()}&reqv=${YZ_Constant.SERVER_VERSION}`
        exports.utils.showLog("服务器地址:" + requestUrl);
        xhr.open('GET', requestUrl);
        xhr.send();
        xhr.onreadystatechange = function () {
            exports.utils.showLog("请求状态改变, reaedyState=", xhr.readyState, "; status=", xhr.status);
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 400) {
                    if (completeCallback) {
                        // if (requestUrl.indexOf("m=g") > -1 || requestUrl.indexOf("m=rlevelv3") > -1) {
                        //     completeCallback(true, this.aesDecrypt(xhr.responseText));
                        // } else {
                        //     completeCallback(true, xhr.responseText);
                        // }
                        completeCallback(true, xhr.responseText);
                    }
                }
                else {
                    if (completeCallback) {
                        completeCallback(false, "");
                    }
                }
            }
        };
        xhr.ontimeout = function () {
            exports.utils.showLog("请求超时!");
            if (completeCallback) {
                completeCallback(false, "");
            }
        };
        xhr.onerror = function (err) {
            exports.utils.showLog("请求出错! err=", JSON.stringify(err));
            if (completeCallback) {
                completeCallback(false, "");
            }
        };
    };
    Utils.prototype.aesEncrypt = function (content) {
        var key = CryptoJS.enc.Utf8.parse(secretKey);
        var srcs = CryptoJS.enc.Utf8.parse(content);
        var encrypted = CryptoJS.AES.encrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
        return encrypted.toString();
    };
    /**
     * 解密方法
     * @param encryptStr 密文
     * @returns {string} 明文
     */
    Utils.prototype.aesDecrypt = function (encryptStr) {
        var key = CryptoJS.enc.Utf8.parse(secretKey);
        var decrypt = CryptoJS.AES.decrypt(encryptStr, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    };
    /**
     * 增加常用字段
     */
    Utils.prototype._buildServerUrl = function (url) {
        // utils.showLog(" _buildServerUrl >>>>>.");
        if (PlatUtils_1.default.IsOPPO) {
            //@ts-ignore
            url = url + ("&kyx=true&app_id=" + exports.utils.config.oppoconfig.packageName + "&channel=oppo&device_uid=" + exports.utils.oppoTool.uid + "&uid=" + exports.utils.oppoTool.serviceId + "&source=" + this.oppoTool._source + "&game_version=" + exports.utils.config.oppoconfig.version + "&device_id=" + exports.utils.oppoTool._device_id);
        }
        else if (PlatUtils_1.default.IsXiaoMi) {
            url = url + ("&kyx=true&app_id=" + exports.utils.config.xiaomiConfig.appID + "&channel=xiaomi&device_uid=" + exports.utils._tool_XiaoMi.uid + "&uid=" + exports.utils._tool_XiaoMi.serviceId);
        }
        else if (PlatUtils_1.default.IsWechat) {
            url = url + ("&kyx=true&app_id=" + exports.utils.config.wechatconfig.appID + "&channel=wechat&device_uid=" + exports.utils.wechatTool.uid + "&uid=" + exports.utils.wechatTool.serviceId + "&source=" + this.wechatTool._source_app_id + "&soure_type=" + this.wechatTool._luanchType + "&game_version=" + exports.utils.config.wechatconfig.version);
        }
        else if (PlatUtils_1.default.IsVIVO) {
            url = url + ("&kyx=true&app_id=" + exports.utils.config.vivoconfig.appID + "&channel=vivo&device_uid=" + exports.utils._tool_Vivo.uid + "&uid=" + exports.utils._tool_Vivo.serviceId + "&source=" + this._tool_Vivo._source + "&game_version=" + exports.utils.config.vivoconfig.version);
        }
        else if (PlatUtils_1.default.IsQTT) {
            url = url + ("&kyx=true&app_id=" + exports.utils.config.qttconfig.appID + "&channel=qutoutiao&device_uid=" + exports.utils._tool_QTT.uid + "&uid=" + exports.utils._tool_QTT.serviceId);
        }
        else if (PlatUtils_1.default.IsDouyin) {
            url = url + ("&kyx=true&app_id=" + exports.utils.config.douyinconfig.appID + "&channel=toutiao&device_uid=" + exports.utils.Tool_Douyin.uid + "&uid=" + exports.utils.Tool_Douyin.serviceId + "&game_version=" + exports.utils.config.douyinconfig.version);
        }
        else if (PlatUtils_1.default.IsQQ) {
            url = url + ("&kyx=true&app_id=" + exports.utils.config.qqconfig.appID + "&channel=qq&device_uid=" + exports.utils._tool_QQ.uid + "&uid=" + exports.utils._tool_QQ.serviceId + "&game_version=" + exports.utils.config.qqconfig.version);
        }
        else if (PlatUtils_1.default.IsBaidu) {
            url = url + ("&kyx=true&app_id=" + exports.utils.config.baiduconfig.appID + "&channel=baidu&device_uid=" + exports.utils._tool_Baidu.uid + "&uid=" + exports.utils._tool_Baidu.serviceId + "&game_version=" + exports.utils.config.baiduconfig.version);
        }
        else if (PlatUtils_1.default.ISUC) {
            url = url + ("&kyx=true&app_id=" + exports.utils.config.ucConfig.appID + "&channel=uc&device_uid=" + exports.utils._tool_UC.uid + "&uid=" + exports.utils._tool_UC.serviceId + "&game_version=" + exports.utils.config.ucConfig.version);
        }
        else if (PlatUtils_1.default.ISCocos) {
            url = url + ("&kyx=true&app_id=" + exports.utils.config.cocosConfig.appID + "&channel=cocos&device_uid=" + exports.utils._tool_Cocosplay.uid + "&uid=" + exports.utils._tool_Cocosplay.serviceId);
        }
        else if (PlatUtils_1.default.IsNativeAndroid) {
            url = url + ("&kyx=false&app_id=" + exports.utils.config.nativeAndroidConfig.appID + "&channel=" + exports.utils.config.nativeAndroidConfig.channel + "&device_uid=" + exports.utils.Tool_Native.uid + "&uid=" + exports.utils.Tool_Native.serviceId + "&game_type=2&game_version=" + exports.utils.config.nativeAndroidConfig.version);
        }
        else if (PlatUtils_1.default.IsKwai) {
            url = url + ("&kyx=true&app_id=" + exports.utils.config.kwaiConfig.appID + "&channel=kuaishou&device_uid=" + exports.utils._tool_Kwai.uid + "&uid=" + exports.utils._tool_Kwai.serviceId + "&game_version=" + exports.utils.config.kwaiConfig.version);
        }
        else if (PlatUtils_1.default.IsNativeIOS) {
            url = url + ("&kyx=false&app_id=" + exports.utils.config.nativeIoSConfig.appID + "&channel=ios&device_uid=" + exports.utils.Tool_IOS.uid + "&uid=" + exports.utils.Tool_IOS.serviceId + "&game_type=2&game_version=" + exports.utils.config.nativeIoSConfig.version);
        }
        else if (PlatUtils_1.default.IsWiFi) {
            url = url + ("&kyx=true&app_id=" + exports.utils.config.wifiConfig.appID + "&channel=wifi&device_uid=" + exports.utils._tool_Wifi.uid + "&uid=" + exports.utils._tool_Wifi.serviceId + "&game_version=" + exports.utils.config.wifiConfig.version);
        }
        else if (PlatUtils_1.default.IsHago) {
            url = url + ("&kyx=true&app_id=" + exports.utils.config.hagoConfig.appID + "&channel=hago&device_uid=" + exports.utils._tool_Hago.uid + "&uid=" + exports.utils._tool_Hago.serviceId + "&game_version=" + exports.utils.config.hagoConfig.version);
        }
        else if (PlatUtils_1.default.IsHuaWei) {
            url = url + ("&kyx=true&app_id=" + exports.utils.config.huaweiConfig.appID + "&channel=huawei&device_uid=" + exports.utils.Tool_Huawei.uid + "&uid=" + exports.utils.Tool_Huawei.serviceId + "&game_version=" + exports.utils.config.huaweiConfig.version);
        }
        else if (PlatUtils_1.default.IsFaceBook) {
            url = url + ("&kyx=true&app_id=" + exports.utils.config.faceBookConfig.appID + "&channel=facebookxyx&device_uid=" + exports.utils.Tool_Facebook.uid + "&uid=" + exports.utils.Tool_Facebook.serviceId + "&game_version=" + exports.utils.config.faceBookConfig.version);
        }
        return url;
    };
    /**
     * 上报小游戏跳转点击数据
     */
    Utils.prototype.postData = function (otherGameAppId) {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "本地数据未初始化!");
            return;
        }
        this.cur_tool && this.cur_tool.postData && this.cur_tool.postData(otherGameAppId);
    };
    /**
     * 注册服务器初始化完成事件
     * @param callback
     * @param target
     */
    Utils.prototype.registerServerInitEvent = function (callback, target) {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "本地数据未初始化!");
            return;
        }
        if (this._isServerInit) {
            if (callback) {
                callback();
            }
        }
        else {
            cc.game.on(YZ_Constant_1.default.EC_ServerInit, callback, target);
        }
    };
    /**
     * 注册服务器初始化完成事件
     * @param callback
     * @param target
     */
    Utils.prototype.registerServerDataLoadSuccessEvent = function (callback, target) {
        if (this._isServerLoadSuccess) {
            if (callback) {
                callback();
            }
        }
        else {
            cc.game.on(YZ_Constant_1.default.EC_ServerDataLoadSuccess, callback, target);
        }
    };
    /**
     * 注册隐私弹窗关闭事件
     * @param callback
     * @param target
     */
    Utils.prototype.registerPrivacyCloseEvent = function (callback, target) {
        var ysxy = YZ_LocalStorage_1.default.getItem(YZ_Constant_1.default.YZ_GAME_YSXY);
        if (ysxy) {
            if (callback) {
                callback();
            }
        }
        else {
            cc.game.on(YZ_Constant_1.default.YZ_PrivacyClose, callback, target);
        }
    };
    /**
    * 上报互推组件数据
    * @param otherGameAppId 跳转的ID
    * @param location 当前位置
    * @param status 0:点击，1:跳转成功
    */
    Utils.prototype.postDataByLocation = function (otherGameAppId, location, status) {
        if (status === void 0) { status = 0; }
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "本地数据未初始化!");
            return;
        }
        if (PlatUtils_1.default.IsBaidu) {
            if (this.Tool_Baidu) {
                this.Tool_Baidu.postData(otherGameAppId);
            }
        }
        else {
            this.cur_tool && this.cur_tool.postDataByLocation && this.cur_tool.postDataByLocation(otherGameAppId, location, status);
        }
    };
    /**
  * 上报互推组件数据
  * @param otherGameAppId 跳转的ID
  * @param location 当前位置
  * @param status 0:点击，1:跳转成功
  */
    Utils.prototype.postRecommentShowData = function (location) {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "本地数据未初始化!");
            return;
        }
        this.cur_tool && this.cur_tool.postRecommentShowData && this.cur_tool.postRecommentShowData(location);
    };
    /**
     * 注销服务器初始化完成事件
     * @param target
     */
    Utils.prototype.unregisterServerInitEvent = function (target) {
        cc.game.targetOff(target);
    };
    /**
     * 发送服务器初始化完毕事件
     */
    Utils.prototype.emitServerInitEvent = function () {
        // if (PlatUtils.IsTest) {
        //     this.getConfigByKey("is_privacy_panel = "true";
        // }
        var _this = this;
        if (this.isShowPrivacyPanel()) {
            this._isServerLoadSuccess = true;
            cc.game.emit(YZ_Constant_1.default.EC_ServerDataLoadSuccess);
            exports.utils.registerPrivacyCloseEvent(function () {
                _this._isServerInit = true;
                cc.game.emit(YZ_Constant_1.default.EC_ServerInit);
                cc.game.targetOff(YZ_Constant_1.default.EC_ServerDataLoadSuccess);
                cc.game.targetOff(YZ_Constant_1.default.YZ_PrivacyClose);
            }, this);
            return;
        }
        this._isServerInit = true;
        cc.game.emit(YZ_Constant_1.default.EC_ServerInit);
    };
    /**
   * 注册实名制认证关闭事件
   * @param callback
   * @param target
   */
    Utils.prototype.registerRealNameAuthCloseEvent = function (callback, target) {
        if (this._isServerLoadSuccess) {
            if (callback) {
                callback();
            }
        }
        else {
            cc.game.on(YZ_Constant_1.default.EC_RealNameAuthPanelClose, callback, target);
        }
    };
    Utils.prototype.emitRealNameAuthCloseEvent = function () {
        cc.game.emit(YZ_Constant_1.default.EC_RealNameAuthPanelClose);
    };
    /**
     * 发送隐私确认弹窗关闭事件
     */
    Utils.prototype.emitPrivacyCloseEvent = function () {
        this._isServerInit = true;
        cc.game.emit(YZ_Constant_1.default.YZ_PrivacyClose);
    };
    /**
     * 获取交叉推广数据
     */
    Utils.prototype.getRecommondGameList = function () {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "本地数据未初始化!");
            return null;
        }
        // if (this.cur_tool && this.cur_tool.getRecommondGameList) {
        //     return this.cur_tool.getRecommondGameList();
        // }
        if (PlatUtils_1.default.IsWechat) {
            return this.wechatTool.getRecommondGameList();
        }
        else if (PlatUtils_1.default.IsOPPO) {
            return this.oppoTool.getRecommondGameList();
        }
        else if (PlatUtils_1.default.IsBaidu) {
            return this.Tool_Baidu.getRecommondGameList();
        }
        else if (PlatUtils_1.default.IsNativeAndroid) {
            return this.Tool_Native.getRecommondGameList();
        }
        else if (PlatUtils_1.default.IsDouyin) {
            return this.Tool_Douyin.getRecommondGameList();
        }
        else if (this.Tool_Broswer) {
            return this.Tool_Broswer.getRecommondGameList();
        }
        else if (PlatUtils_1.default.IsNativeIOS) {
            return this.Tool_IOS.getRecommondGameList();
        }
        return null;
    };
    /**
     * 是否显示底部更多游戏banner列表
     */
    Utils.prototype.isShowRecommondGamesBanner = function () {
        if (!this._isConfigInit) {
            exports.utils.showLog("本地数据未初始化!");
            return false;
        }
        if (this.Tool_Broswer)
            return true;
        if (exports.utils.isSupportnavigateToMiniGame()) {
            if (this.ServerConfig
                && this.ServerConfig.is_bottom_banner_list) {
                if (this.ServerConfig.is_bottom_banner_list == "true") {
                    return true;
                }
                else {
                    exports.utils.showLog("is_bottom_banner_list 参数为false，底部更多游戏横幅组件不显示！");
                }
            }
            else {
                exports.utils.showLog("配置中没有 is_bottom_banner_list 参数，底部更多游戏横幅组件不显示！");
            }
        }
        else {
            exports.utils.showLog("当前平台不支持游戏内跳转，底部更多游戏横幅组件不显示！");
        }
        return false;
    };
    /**
     * 显示底部推荐游戏Banner
     * @param params
     * 参数是一个对象.
     * {
     * group:string  //组件所在的组。
     * scale:number  //组件的缩放值。
     * }
     */
    Utils.prototype.showRecommendGamesBanner = function (params) {
        if (params === void 0) { params = null; }
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return false;
        }
        if (this.isShowRecommondGamesBanner()) {
            exports.utils.showLog("显示自定义banner!");
            if (this.config.otherconfig.recommendGamesBanner) {
                var bannerNode = cc.instantiate(this.config.otherconfig.recommendGamesBanner);
                if (bannerNode) {
                    if (this._recommendGamesBanner && cc.isValid(this._recommendGamesBanner)) {
                        this._recommendGamesBanner.destroy();
                    }
                    this._recommendGamesBanner = bannerNode;
                    this._recommendGamesBanner.zIndex = 9999;
                    if (params) {
                        if (params.group) {
                            bannerNode.group = params.group;
                        }
                        if (params.scale) {
                            bannerNode.scale = params.scale;
                        }
                    }
                    cc.director.getScene().addChild(bannerNode, 1000);
                    return true;
                }
            }
            else {
                exports.utils.showLog("warn:" + "未找到预制体 RecommendGamesBanner, 请查看CommonUtils组件上是否赋值!");
            }
        }
        return false;
    };
    /**
     * 隐藏底部推荐游戏Banner
     */
    Utils.prototype.hideRecommendGamesBanner = function () {
        var banner = cc.find("RecommendGamesBanner");
        if (banner) {
            banner.active = false;
        }
    };
    /**
     * 是否显示推荐游戏列表
     */
    Utils.prototype.isShowRecommondGamesList = function () {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return false;
        }
        if (this.Tool_Broswer)
            return true;
        if (exports.utils.isSupportnavigateToMiniGame()) {
            if (this.ServerConfig.is_banner_list
                && this.ServerConfig.is_banner_list == "true"
                && this.ServerConfig.jump_list
                && this.ServerConfig.jump_list.length > 0) {
                return true;
            }
            else {
                exports.utils.showLog("请确认字段：is_banner_list、jump_list 是否达到显示自定义banner的要求!");
                return false;
            }
        }
        else {
            exports.utils.showLog("当前平台不支持游戏内跳转，更多游戏列表组件不显示！");
        }
        return false;
    };
    /**
     * 显示互推滚动条
     * @param params
     * ```
     * {
     * group:string     // 组件所在的组
     * bottom:number    // 组件距离屏幕下边的距离
     * left:number      // 组件距离屏幕左边的距离
     * scale:number     // 组件的缩放比例
     * parent:cc.Node   // 父节点,注意：如果不传此参数，则必须接收返回值，并将其加入到父节点中，否则组件不会显示。
     * }
     * ```
     */
    Utils.prototype.showRecommendGamesList = function (params) {
        if (params === void 0) { params = null; }
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return null;
        }
        if (this.config.otherconfig.recommendGamesBar) {
            var barNode = cc.instantiate(this.config.otherconfig.recommendGamesBar);
            if (barNode) {
                if (this._recommendGamesList && cc.isValid(this._recommendGamesList)) {
                    this._recommendGamesList.destroy();
                }
                this._recommendGamesList = barNode;
                this._recommendGamesList.zIndex = 9999;
                var widget = barNode.getComponent(cc.Widget);
                if (params) {
                    if (params.group) {
                        barNode.group = params.group;
                    }
                    if (params.scale != null) {
                        barNode.scale = params.scale;
                    }
                    if (params.top != null) {
                        widget.isAlignTop = true;
                        widget.isAlignBottom = false;
                        widget.top = params.top;
                    }
                    else if (params.bottom != null) {
                        widget.isAlignTop = false;
                        widget.isAlignBottom = true;
                        widget.bottom = params.bottom;
                    }
                    if (params.left != null) {
                        widget.isAlignLeft = true;
                        widget.isAlignRight = false;
                        widget.left = params.left;
                    }
                    else if (params.right != null) {
                        widget.isAlignLeft = false;
                        widget.isAlignRight = true;
                        widget.right = params.right;
                    }
                    if (params.parent != null) {
                        barNode.parent = params.parent;
                    }
                }
                widget.updateAlignment();
                return barNode;
            }
        }
        else {
            exports.utils.showLog("warn:" + "未找到预制体 RecommendGamesBar, 请查看CommonUtils组件上是否赋值 !");
        }
        return null;
    };
    /**
    * 隐藏互推滚动条
    * @param _tryGamesWidget 更多游戏挂件
    */
    Utils.prototype.hideRecommendGamesList = function () {
        if (this._recommendGamesList && cc.isValid(this._recommendGamesList)) {
            this._recommendGamesList.destroy();
        }
    };
    /**
     * 是否显示试玩挂件
     */
    Utils.prototype.isShowTryGamesWidget = function () {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return false;
        }
        if (this.Tool_Broswer)
            return true;
        if (PlatUtils_1.default.IsWechat) {
            if (exports.utils.isSupportnavigateToMiniGame()) {
                if (exports.utils.wechatTool
                    && exports.utils.wechatTool.ServerConfig
                    && exports.utils.wechatTool.ServerConfig.icon_jump) {
                    if (exports.utils.wechatTool.ServerConfig.icon_jump > 0) {
                        return true;
                    }
                    else {
                        exports.utils.showLog("warn:" + "icon_jump参数为false，试玩游戏挂件不显示！");
                    }
                }
                else {
                    exports.utils.showLog("warn:" + "配置中没有icon_jump参数，试玩游戏挂件不显示！");
                }
            }
            else {
                exports.utils.showLog("warn:" + "当前平台不支持游戏内跳转，试玩游戏挂件不显示！");
            }
        }
        else if (PlatUtils_1.default.IsOPPO) {
            if (exports.utils.isSupportnavigateToMiniGame()) {
                if (exports.utils.oppoTool
                    && exports.utils.oppoTool.ServerConfig
                    && exports.utils.oppoTool.ServerConfig.icon_jump) {
                    if (parseInt(exports.utils.oppoTool.ServerConfig.icon_jump) > 0) {
                        return true;
                    }
                    else {
                        exports.utils.showLog("warn:" + "icon_jump参数为false，试玩戏挂件不显示！");
                    }
                }
                else {
                    exports.utils.showLog("warn:" + "配置中没有icon_jump参数，试玩游戏挂件不显示！");
                }
            }
            else {
                exports.utils.showLog("warn:" + "当前平台不支持游戏内跳转，试玩游戏挂件不显示！");
            }
        }
        else if (PlatUtils_1.default.IsBaidu) {
            if (exports.utils.isSupportnavigateToMiniGame()) {
                if (exports.utils.Tool_Baidu
                    && exports.utils.Tool_Baidu.ServerConfig
                    && exports.utils.Tool_Baidu.ServerConfig.icon_jump) {
                    if (exports.utils.Tool_Baidu.ServerConfig.icon_jump > 0) {
                        return true;
                    }
                    else {
                        exports.utils.showLog("warn:" + "icon_jump参数为false，更多游戏挂件不显示！");
                    }
                }
                else {
                    exports.utils.showLog("warn:" + "配置中没有icon_jump参数，试玩游戏挂件不显示！");
                }
            }
            else {
                exports.utils.showLog("warn:" + "当前平台不支持游戏内跳转，试玩游戏挂件不显示！");
            }
        }
        else if (PlatUtils_1.default.IsNativeAndroid) {
            if (exports.utils.Tool_Native
                && exports.utils.Tool_Native.ServerConfig
                && exports.utils.Tool_Native.ServerConfig.icon_jump) {
                if (parseInt(exports.utils.Tool_Native.ServerConfig.icon_jump) > 0) {
                    return true;
                }
            }
            else {
                exports.utils.showLog("warn:" + "配置中没有jumpList参数，试玩游戏挂件不显示！");
            }
        }
        else if (PlatUtils_1.default.IsDouyin) {
            if (exports.utils.isSupportnavigateToMiniGame()) {
                if (exports.utils.Tool_Douyin && exports.utils.Tool_Douyin.isShowMoreGamesModal()
                    && exports.utils.Tool_Douyin.ServerConfig
                    && exports.utils.Tool_Douyin.ServerConfig.icon_jump) {
                    if (exports.utils.Tool_Douyin.ServerConfig.icon_jump > 0) {
                        return true;
                    }
                    else {
                        exports.utils.showLog("warn:" + "icon_jump参数为false，试玩游戏挂件不显示！");
                    }
                }
                else {
                    exports.utils.showLog("warn:" + "配置中没有icon_jump参数，试玩游戏挂件不显示！");
                }
            }
            else {
                exports.utils.showLog("warn:" + "当前平台不支持游戏内跳转，试玩游戏挂件不显示！");
            }
        }
        else if (PlatUtils_1.default.IsQQ) {
            if (exports.utils.isSupportnavigateToMiniGame()) {
                if (exports.utils.Tool_QQ
                    && exports.utils.Tool_QQ.ServerConfig
                    && exports.utils.Tool_QQ.ServerConfig.icon_jump) {
                    if (exports.utils.Tool_QQ.ServerConfig.icon_jump > 0) {
                        return true;
                    }
                    else {
                        exports.utils.showLog("warn:" + "icon_jump参数为false，试玩游戏挂件不显示！");
                    }
                }
                else {
                    exports.utils.showLog("warn:" + "配置中没有icon_jump参数，试玩游戏挂件不显示！");
                }
            }
            else {
                exports.utils.showLog("warn:" + "当前平台不支持游戏内跳转，试玩游戏挂件不显示！");
            }
        }
        else if (PlatUtils_1.default.IsNativeIOS) {
            if (exports.utils.Tool_IOS
                && exports.utils.Tool_IOS.ServerConfig
                && exports.utils.Tool_IOS.ServerConfig.icon_jump) {
                if (exports.utils.Tool_IOS.ServerConfig.icon_jump > 0) {
                    return true;
                }
                else {
                    exports.utils.showLog("warn:" + "icon_jump参数为false，试玩游戏挂件不显示！");
                }
            }
            else {
                exports.utils.showLog("warn:" + "配置中没有icon_jump参数，试玩游戏挂件不显示！");
            }
        }
        return false;
    };
    /**
     * 显示试玩挂件
     * @param params
     * ```
     * {
     * group:string
     * left:number
     * bottom:number
     * scale:number
     * parent:cc.Node
     * }
     * ```
     * @returns 生成的组件
     */
    Utils.prototype.showTryGamesWidget = function (params) {
        if (params === void 0) { params = null; }
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return null;
        }
        if (exports.utils.isShowTryGamesWidget()) {
            if (params.location && (this.getConfigByKey("try_game_widget_locations").indexOf(params.location) < 0)) {
                exports.utils.showLog("当前位置服务器未配置显示试玩挂件！");
                if (this._tryGamesWidget && cc.isValid(this._tryGamesWidget)) {
                    this._tryGamesWidget.destroy();
                }
                return null;
            }
            if (this.config.otherconfig.tryGamesWidget) {
                var node = cc.instantiate(this.config.otherconfig.tryGamesWidget);
                if (node) {
                    if (this._tryGamesWidget && cc.isValid(this._tryGamesWidget)) {
                        this._tryGamesWidget.destroy();
                    }
                    this._tryGamesWidget = node;
                    this._tryGamesWidget.zIndex = 9999;
                    var widget = node.getComponent(cc.Widget);
                    if (params) {
                        if (params.group) {
                            node.group = params.group;
                        }
                        if (params.scale != null) {
                            node.scale = params.scale;
                        }
                        if (params.top != null) {
                            widget.isAlignTop = true;
                            widget.isAlignBottom = false;
                            widget.top = params.top;
                        }
                        else if (params.bottom != null) {
                            widget.isAlignTop = false;
                            widget.isAlignBottom = true;
                            widget.bottom = params.bottom;
                        }
                        if (params.left != null) {
                            widget.isAlignLeft = true;
                            widget.isAlignRight = false;
                            widget.left = params.left;
                        }
                        else if (params.right != null) {
                            widget.isAlignLeft = false;
                            widget.isAlignRight = true;
                            widget.right = params.right;
                        }
                        if (params.parent != null) {
                            node.parent = params.parent;
                        }
                    }
                    widget.updateAlignment();
                    return node;
                }
            }
            else {
                exports.utils.showLog("warn:" + "未找到预制体 TryGamesWidget, 请查看CommonUtils组件上是否赋值 !");
            }
        }
        else {
            exports.utils.showLog("warn:" + "不支持跳转组件");
        }
        return null;
    };
    /**
     * 隐藏更多游戏挂件
     * @param _tryGamesWidget 更多游戏挂件
     */
    Utils.prototype.hideTryGamesWidget = function () {
        if (this._tryGamesWidget && cc.isValid(this._tryGamesWidget)) {
            this._tryGamesWidget.destroy();
        }
    };
    /**
     * 是否显示更多游戏侧边栏
     */
    Utils.prototype.isShowMoreGamesWidget = function () {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return false;
        }
        if (this.Tool_Broswer || CC_DEBUG)
            return true;
        if (PlatUtils_1.default.IsWechat) {
            if (exports.utils.isSupportnavigateToMiniGame()) {
                if (this.getConfigByKey("is_more_game") == "true") {
                    return true;
                }
                else {
                    exports.utils.showLog("warn:" + "配置中没有is_more_game参数，更多游戏侧边栏组件不显示！");
                }
            }
            else {
                exports.utils.showLog("warn:" + "当前平台不支持游戏内跳转，更多游戏侧边栏组件不显示！");
            }
        }
        else if (PlatUtils_1.default.IsOPPO) {
            if (exports.utils.isSupportnavigateToMiniGame()) {
                if (this.getConfigByKey("is_more_game") == "true") {
                    if (exports.utils.oppoTool.ServerConfig.show_oppo_rec == "true") {
                        if (!exports.utils.oppoTool.canShowRecommend()) {
                            exports.utils.showLog("warn:" + "当前平台不支持官方互推，更多游戏侧边栏组件不显示！");
                            return false;
                        }
                    }
                    return true;
                }
                else {
                    exports.utils.showLog("warn:" + "配置中没有is_more_game参数，更多游戏侧边栏组件不显示！");
                }
            }
            else {
                exports.utils.showLog("warn:" + "当前平台不支持游戏内跳转，更多游戏侧边栏组件不显示！");
            }
        }
        else if (PlatUtils_1.default.IsDouyin) {
            if (PlatUtils_1.default.IsAndroid
                && exports.utils.isSupportnavigateToMiniGame()) {
                if (this.getConfigByKey("is_more_game") == "true") {
                    return true;
                }
                else {
                    exports.utils.showLog("warn:" + "配置中没有is_more_game参数，更多游戏侧边栏组件不显示！");
                }
            }
            else {
                exports.utils.showLog("warn:" + "当前平台不支持游戏内跳转，更多游戏侧边栏组件不显示！");
            }
        }
        else if (PlatUtils_1.default.IsBaidu) {
            if (exports.utils.isSupportnavigateToMiniGame()) {
                if (this.getConfigByKey("is_more_game") == "true") {
                    return true;
                }
                else {
                    exports.utils.showLog("warn:" + "配置中没有is_more_game参数，更多游戏侧边栏组件不显示！");
                }
            }
            else {
                exports.utils.showLog("warn:" + "当前平台不支持游戏内跳转，更多游戏侧边栏组件不显示！");
            }
        }
        else if (PlatUtils_1.default.IsQQ) {
            if (exports.utils.isSupportnavigateToMiniGame()) {
                if (this.getConfigByKey("is_more_game") == "true") {
                    return true;
                }
                else {
                    exports.utils.showLog("warn:" + "配置中没有is_more_game参数，更多游戏侧边栏组件不显示！");
                }
            }
            else {
                exports.utils.showLog("warn:" + "当前平台不支持游戏内跳转，更多游戏侧边栏组件不显示！");
            }
        }
        else if (PlatUtils_1.default.Is4399) {
            return true;
        }
        else if (PlatUtils_1.default.IsNativeAndroid) {
            if (this.getConfigByKey("is_more_game") == "true") {
                return true;
            }
            else {
                exports.utils.showLog("warn:" + "配置中没有is_more_game参数，更多游戏侧边栏组件不显示！");
            }
        }
        else if (PlatUtils_1.default.IsNativeIOS) {
            if (this.getConfigByKey("is_more_game") == "true") {
                return true;
            }
            else {
                exports.utils.showLog("warn:" + "配置中没有is_more_game参数，更多游戏侧边栏组件不显示！");
            }
        }
        else if (PlatUtils_1.default.IsVIVO) {
            if (this.getConfigByKey("is_more_game") == "true") {
                return true;
            }
            else {
                exports.utils.showLog("warn:" + "配置中没有is_more_game参数，更多游戏侧边栏组件不显示！");
            }
        }
        return false;
    };
    /**
     * 显示更多游戏侧边栏
     * @param params
     * ```
     * {
     * group:string    // 组件所在的组
     * left:number      // 组件距离屏幕左边的距离
     * right:number     // 组件距离屏幕右边的距离
     * top:number       // 距离屏幕顶部的距离
     * bottom:number    // 距离屏幕底部的距离
     * scale:number     // 缩放比例
     * parent:cc.Node   // 父节点
     * }
     * ```
     */
    Utils.prototype.showMoreGamesWidget = function (params) {
        if (params === void 0) { params = null; }
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return null;
        }
        if (params.location && (this.getConfigByKey("more_game_widget_locations").indexOf(params.location) < 0)) {
            exports.utils.showLog("当前位置服务器未配置显示更多游戏挂件！");
            if (this._moreGamesSidePanel && cc.isValid(this._moreGamesSidePanel)) {
                this._moreGamesSidePanel.destroy();
            }
            return null;
        }
        if (PlatUtils_1.default.IsDouyin) {
            if (exports.utils.Tool_Douyin) {
                if (exports.utils.isShowMoreGamesWidget()) {
                    if (exports.utils.Tool_Douyin.isShowMoreGamesModal()) {
                        if (this.config.otherconfig.moreGamesWidget) {
                            var node = cc.instantiate(this.config.otherconfig.moreGamesWidget);
                            if (node) {
                                if (this._moreGamesSidePanel && cc.isValid(this._moreGamesSidePanel)) {
                                    this._moreGamesSidePanel.destroy();
                                }
                                this._moreGamesSidePanel = node;
                                this._moreGamesSidePanel.zIndex = 9999;
                                var widget = node.getComponent(cc.Widget);
                                if (params) {
                                    if (params.group) {
                                        node.group = params.group;
                                    }
                                    if (params.scale != null) {
                                        node.scale = params.scale;
                                    }
                                    if (params.top != null) {
                                        widget.isAlignTop = true;
                                        widget.isAlignBottom = false;
                                        widget.top = params.top;
                                    }
                                    else if (params.bottom != null) {
                                        widget.isAlignTop = false;
                                        widget.isAlignBottom = true;
                                        widget.bottom = params.bottom;
                                    }
                                    if (params.left != null) {
                                        widget.isAlignLeft = true;
                                        widget.isAlignRight = false;
                                        widget.left = params.left;
                                    }
                                    else if (params.right != null) {
                                        widget.isAlignLeft = false;
                                        widget.isAlignRight = true;
                                        widget.right = params.right;
                                    }
                                    if (params.parent != null) {
                                        node.parent = params.parent;
                                    }
                                }
                                widget.updateAlignment();
                                return node;
                            }
                        }
                        else {
                            exports.utils.showLog("warn:" + "未找到预制体 MoreGamesWidget, 请查看CommonUtils组件上是否赋值！");
                        }
                    }
                    else {
                        var btn = exports.utils.Tool_Douyin.showMoreGamesButton(params);
                        if (btn) {
                            if (this._moreGamesSidePanel) {
                                this._moreGamesSidePanel.destroy();
                            }
                            this._moreGamesSidePanel = btn;
                            if (params) {
                                if (params.group) {
                                    btn.group = params.group;
                                }
                                if (params.parent != null) {
                                    btn.parent = params.parent;
                                }
                            }
                            return this._moreGamesSidePanel;
                        }
                        else {
                            return null;
                        }
                    }
                }
                else {
                    exports.utils.showLog("当前平台版本不支持交叉推广, 更多游戏按钮不显示!");
                    return null;
                }
            }
        }
        else {
            if (exports.utils.isShowMoreGamesWidget()) {
                if (this.config.otherconfig.moreGamesWidget) {
                    var node = cc.instantiate(this.config.otherconfig.moreGamesWidget);
                    if (node) {
                        if (this._moreGamesSidePanel && cc.isValid(this._moreGamesSidePanel)) {
                            this._moreGamesSidePanel.destroy();
                        }
                        this._moreGamesSidePanel = node;
                        this._moreGamesSidePanel.zIndex = 9999;
                        var widget = node.getComponent(cc.Widget);
                        if (params) {
                            if (params.group) {
                                node.group = params.group;
                            }
                            if (params.scale != null) {
                                node.scale = params.scale;
                            }
                            if (params.top != null) {
                                widget.isAlignTop = true;
                                widget.isAlignBottom = false;
                                widget.top = params.top;
                            }
                            else if (params.bottom != null) {
                                widget.isAlignTop = false;
                                widget.isAlignBottom = true;
                                widget.bottom = params.bottom;
                            }
                            if (params.left != null) {
                                widget.isAlignLeft = true;
                                widget.isAlignRight = false;
                                widget.left = params.left;
                            }
                            else if (params.right != null) {
                                widget.isAlignLeft = false;
                                widget.isAlignRight = true;
                                widget.right = params.right;
                            }
                            if (params.parent != null) {
                                node.parent = params.parent;
                            }
                        }
                        widget.updateAlignment();
                        return node;
                    }
                }
                else {
                    exports.utils.showLog("warn:" + "未找到预制体 MoreGamesWidget, 请查看CommonUtils组件上是否赋值！");
                }
            }
            else {
                exports.utils.showLog("warn:" + "不可显示更多游戏侧边栏");
            }
        }
        return null;
    };
    /**
     * 隐藏侧边栏按钮
     * @param moreGameBtn 更多游戏侧边栏按钮
     */
    Utils.prototype.hideMoreGamesWidget = function (moreGameBtn) {
        if (PlatUtils_1.default.IsDouyin) {
            if (moreGameBtn && cc.isValid(moreGameBtn)) {
                moreGameBtn.destroy();
            }
            if (this._moreGamesSidePanel) {
                this._moreGamesSidePanel.destroy();
            }
        }
        else {
            if (moreGameBtn && cc.isValid(moreGameBtn)) {
                moreGameBtn.destroy();
            }
            if (this._moreGamesSidePanel && cc.isValid(this._moreGamesSidePanel)) {
                this._moreGamesSidePanel.destroy();
            }
        }
        if (PlatUtils_1.default.IsVIVO) {
            this.Tool_Vivo && this.Tool_Vivo.hideGamePortal();
        }
    };
    Utils.prototype.showBaiduMoreGamesBtn = function (params) {
        if (params === void 0) { params = null; }
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return null;
        }
        var isShow = false;
        if (PlatUtils_1.default.IsBaidu) {
            if (exports.utils.Tool_Baidu
                && exports.utils.Tool_Baidu.canShowRecommendButton()) {
                isShow = true;
            }
            else {
                exports.utils.showLog("warn:" + "当前平台不支持游戏内跳转，百度更多游戏侧边栏组件不显示！");
            }
        }
        if (PlatUtils_1.default.IsBaidu) {
            if (exports.utils.Tool_Baidu) {
                if (isShow) {
                    var btn = exports.utils.Tool_Baidu.showRecommendationButton(params);
                    if (btn) {
                        if (this._moreGamesSidePanelBaidu) {
                            this._moreGamesSidePanelBaidu.destroy();
                        }
                        this._moreGamesSidePanelBaidu = btn;
                        return this._moreGamesSidePanelBaidu;
                    }
                    else {
                        return null;
                    }
                }
                else {
                    exports.utils.showLog("当前平台版本不支持交叉推广, 百度更多游戏按钮不显示!");
                    return null;
                }
            }
        }
    };
    Utils.prototype.hideBaiduMoreGamesBtn = function (moreGameBtn) {
        if (PlatUtils_1.default.IsBaidu && moreGameBtn) {
            if (moreGameBtn != null) {
                moreGameBtn.destroy();
            }
        }
    };
    /**
     * 是否显示录屏组件
     */
    Utils.prototype.isShowRecordWidget = function () {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return false;
        }
        if (this.Tool_Broswer)
            return true;
        if (PlatUtils_1.default.IsDouyin) {
            if (this.getConfigByKey("show_record") == "true") {
                return true;
            }
            exports.utils.showLog("服务器配置不显示录屏按钮！");
        }
        else if (PlatUtils_1.default.IsKwai) {
            if (exports.utils.kwaiTool && exports.utils.kwaiTool.checkCanShowRecored() && this.getConfigByKey("show_record") == "true") {
                return true;
            }
            exports.utils.showLog("服务器配置不显示录屏按钮！");
        }
        return false;
    };
    Utils.prototype.hideRecordWidget = function () {
        if (this._recordWidget && cc.isValid(this._recordWidget)) {
            this._recordWidget.destroy();
        }
    };
    /**
     * 显示录屏按钮
     * @param params
     */
    Utils.prototype.showRecordWidget = function (params) {
        if (params === void 0) { params = null; }
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return null;
        }
        if (!this.isShowRecordWidget())
            return null;
        if (this.config.otherconfig.recordWidget) {
            var node = cc.instantiate(this.config.otherconfig.recordWidget);
            if (node) {
                if (this._recordWidget && cc.isValid(this._recordWidget)) {
                    this._recordWidget.destroy();
                }
                this._recordWidget = node;
                this._recordWidget.zIndex = 9999;
                var widget = node.getComponent(cc.Widget);
                if (params) {
                    if (params.group) {
                        node.group = params.group;
                    }
                    if (params.scale != null) {
                        node.scale = params.scale;
                    }
                    if (params.top != null) {
                        widget.isAlignTop = true;
                        widget.isAlignBottom = false;
                        widget.top = params.top;
                    }
                    else if (params.bottom != null) {
                        widget.isAlignTop = false;
                        widget.isAlignBottom = true;
                        widget.bottom = params.bottom;
                    }
                    if (params.left != null) {
                        widget.isAlignLeft = true;
                        widget.isAlignRight = false;
                        widget.left = params.left;
                    }
                    else if (params.right != null) {
                        widget.isAlignLeft = false;
                        widget.isAlignRight = true;
                        widget.right = params.right;
                    }
                    if (params.parent != null) {
                        node.parent = params.parent;
                    }
                }
                widget.updateAlignment();
                return node;
            }
        }
        else {
            exports.utils.showLog("warn:" + "未找到预制体 RecordWidget, 请查看CommonUtils组件上是否赋值！");
        }
        return null;
    };
    /**
     * 是否显示创建快捷方式控件
     */
    Utils.prototype.isShowCreateShortcutWidget = function () {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "本地数据未初始化!");
            return false;
        }
        if (this.Tool_Broswer)
            return true;
        if (this.canCreateShortcut()) {
            if (this.getConfigByKey("is_desktop") == "true") {
                return true;
            }
            else {
                exports.utils.showLog("配置数据中没有 is_desktop 字段， 创建快捷方式按钮不显示!");
            }
        }
        else {
            exports.utils.showLog("当前平台版本不支持创建桌面快捷方式, 创建快捷方式按钮不显示！");
        }
        return false;
    };
    /**
     * 创建快捷方式
     * @param callback 点击创建快捷方式按钮后回调函数 Function<ret:boolean>
     * @param params
     */
    Utils.prototype.showCreateShortcutWidget = function (callback, params) {
        if (callback === void 0) { callback = null; }
        if (params === void 0) { params = null; }
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return null;
        }
        if (exports.utils.isShowCreateShortcutWidget()) {
            if (this.config.otherconfig.shortcutWidget) {
                var node = cc.instantiate(this.config.otherconfig.shortcutWidget);
                if (node) {
                    if (this._shortcutWidget && cc.isValid(this._shortcutWidget)) {
                        this._shortcutWidget.destroy();
                    }
                    this._shortcutWidget = node;
                    this._shortcutWidget.zIndex = 9999;
                    var widget = node.getComponent(cc.Widget);
                    var shortcutWidget = node.getComponent("YZ_ShortcutWidget");
                    if (shortcutWidget) {
                        shortcutWidget.Callback = callback;
                    }
                    if (params) {
                        if (params.group) {
                            node.group = params.group;
                        }
                        if (params.scale != null) {
                            node.scale = params.scale;
                        }
                        if (params.top != null) {
                            widget.isAlignTop = true;
                            widget.isAlignBottom = false;
                            widget.top = params.top;
                        }
                        else if (params.bottom != null) {
                            widget.isAlignTop = false;
                            widget.isAlignBottom = true;
                            widget.bottom = params.bottom;
                        }
                        if (params.left != null) {
                            widget.isAlignLeft = true;
                            widget.isAlignRight = false;
                            widget.left = params.left;
                        }
                        else if (params.right != null) {
                            widget.isAlignLeft = false;
                            widget.isAlignRight = true;
                            widget.right = params.right;
                        }
                        if (params.parent != null) {
                            node.parent = params.parent;
                        }
                        else {
                            cc.director.getScene().addChild(node, 1000);
                        }
                    }
                    widget.updateAlignment();
                    return node;
                }
            }
            else {
                exports.utils.showLog("warn:" + "未找到预制体 ShortcutWidge, 请查看CommonUtils组件上是否赋值！");
            }
        }
        else {
            exports.utils.showLog("warn:" + "不显示创建桌面图标");
        }
        return null;
    };
    /**
     * 隐藏快捷方式
     */
    Utils.prototype.hideCreateShortcutWidget = function (params) {
        if (params === void 0) { params = null; }
        if (this._shortcutWidget && cc.isValid(this._shortcutWidget)) {
            this._shortcutWidget.destroy();
        }
    };
    /**
     * 注册事件,事件在YZ_Constant类中定义
     * @param eventName : string 事件名 事件在 YZ_Constant 类中定义
     * @param callback 回调函数
     * @param target : cc.Node 目标对象
     */
    Utils.prototype.registerEvent = function (eventName, callback, target) {
        if (!eventName) {
            exports.utils.showLog("warn:" + "[Utils.registerEvent] param eventName is null!");
            return;
        }
        if (!callback) {
            exports.utils.showLog("warn:" + "[Utils.registerEvent] param callback is null!");
            return;
        }
        if (!target) {
            exports.utils.showLog("warn:" + "[Utils.registerEvent] param target is null!");
            return;
        }
        cc.game.on(eventName, callback, target);
    };
    /**
     * 取消注册事件
     * @param eventName 事件名
     */
    Utils.prototype.unregisterEvent = function (eventName) {
        cc.game.off(eventName);
    };
    /**
     * 发送事件
     * @param eventName 事件名
     */
    Utils.prototype.emitCommonEvent = function (eventName) {
        cc.game.emit(eventName);
    };
    /**
    * 显示游戏盒子
    * @param params
    */
    Utils.prototype.showGameBox = function (params) {
        if (params === void 0) { params = null; }
        if (PlatUtils_1.default.IsWechat) {
            var isShow = false;
            // console.log("utils.wechatTool.ServerConfig.openBox",utils.wechatTool.ServerConfig.openBox)
            if (exports.utils.wechatTool.ServerConfig && exports.utils.wechatTool.ServerConfig.openBox) {
                if (exports.utils.wechatTool.ServerConfig.openBox != "true") {
                    exports.utils.showLog("服务器游戏盒子配置为关闭状态！");
                    return;
                }
                exports.utils.showLog("服务器配置游戏盒子为打开状态");
                isShow = true;
            }
            else {
                var showTime = new Date().getTime() - new Date("2019-10-23").getTime();
                if (showTime > 0) {
                    isShow = true;
                    exports.utils.showLog("当前时间大于指定时间，可以显示游戏盒子");
                }
            }
            if (!isShow) {
                exports.utils.showLog("warn:" + "当前条件不满足要求，游戏盒子不显示！");
                return;
            }
            var node = cc.instantiate(this.config.otherconfig.gameBox);
            if (node) {
                if (this._gameBox && cc.isValid(this._gameBox)) {
                    this._gameBox.destroy();
                }
                this._gameBox = node;
                this._gameBox.zIndex = 9999;
                if (params.parent != null) {
                    node.parent = params.parent;
                }
            }
            else {
                exports.utils.showLog("warn:" + "未找到预制体 GameBox, 请查看CommonUtils组件上是否赋值！");
            }
        }
    };
    Utils.prototype.isShowNativeTryGamesWidget = function () {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return false;
        }
        if (this.Tool_Broswer)
            return true;
        if (this.ServerConfig
            && this.ServerConfig.icon_jump_native
            && parseInt(this.ServerConfig.icon_jump_native) > 0) {
            return true;
        }
        else {
            exports.utils.showLog("warn:" + "配置中没有icon_jump_native参数，原生试玩游戏挂件不显示！");
        }
        return false;
    };
    /**
    * 是否能显示6个元素的交叉推广组件
    */
    Utils.prototype.canShowCrossWidget6 = function () {
        if (!this._isConfigInit) {
            exports.utils.showLog("组件配置未初始化!");
            return false;
        }
        if (this.Tool_Broswer)
            return true;
        if (PlatUtils_1.default.IsWechat || PlatUtils_1.default.IsOPPO || PlatUtils_1.default.IsBaidu || PlatUtils_1.default.IsNativeAndroid || PlatUtils_1.default.IsNativeIOS) {
            if (exports.utils.isSupportnavigateToMiniGame()) {
                if (this.getConfigByKey("is_cross_game") == "true") {
                    return true;
                }
                else {
                    exports.utils.showLog("warn:" + "配置中没有is_cross_game参数，6元素交叉推广组件不显示！");
                }
            }
            else {
                exports.utils.showLog("warn:" + "当前平台不支持游戏内跳转，6元素交叉推广组件不显示！");
            }
        }
        else if (PlatUtils_1.default.IsDouyin) {
            if (exports.utils.isSupportnavigateToMiniGame() && exports.utils.Tool_Douyin.isShowMoreGamesModal()) {
                if (this.getConfigByKey("is_cross_game") == "true") {
                    return true;
                }
                else {
                    exports.utils.showLog("warn:" + "is_cross_game参数为false，6元素交叉推广组件不显示！");
                }
            }
            else {
                exports.utils.showLog("warn:" + "当前平台不支持游戏内跳转，6元素交叉推广组件不显示！");
            }
        }
        return false;
    };
    /**
     * 显示6元素交叉推广组件
     */
    Utils.prototype.showCrossWidget6 = function () {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return null;
        }
        if (this.canShowCrossWidget6()) {
            if (this.config.otherconfig.crossWidget6) {
                return cc.instantiate(this.config.otherconfig.crossWidget6);
            }
            else {
                exports.utils.showLog("warn:" + "未找到预制体 CrossWidget6, 请查看CommonUtils组件上是否赋值！");
            }
        }
        return null;
    };
    /**
     * 显示添加到我的小程序引导
     * @param param 参数值：
     *              type： bar（一直展示）/tip（3秒展示）
     */
    Utils.prototype.showFavoriteGuide = function (param) {
        if (PlatUtils_1.default.IsBaidu) {
            if (exports.utils._tool_Baidu.canShowFavoriteGuide()) {
                //@ts-ignore
                swan.showFavoriteGuide({
                    type: param ? param.type : 'tip',
                    content: '一键添加到我的小程序',
                    success: function (res) {
                        exports.utils.showLog('添加成功：', res);
                    },
                    fail: function (err) {
                        exports.utils.showLog('添加失败：', err);
                    }
                });
                exports.utils.showLog("显示我的小程序引导成功！");
            }
            else {
                exports.utils.showLog("当前平台不支持显示添加我的小程序引导");
            }
        }
    };
    /**
     * 验证是否自动弹出签到
     * true : 自动弹出，false : 不自动弹出
     */
    Utils.prototype.checkAutoSign = function () {
        if (this.getConfigByKey("auto_sign") == "true") {
            return true;
        }
        return false;
    };
    Object.defineProperty(Utils.prototype, "ServerConfig", {
        /**
         * 获取当前平台的配置文件
         */
        get: function () {
            if (this.cur_tool) {
                return this.cur_tool.ServerConfig ? this.cur_tool.ServerConfig : {};
            }
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Utils.prototype, "cur_tool", {
        /**
         * 获取当前平台的配置文件
         */
        get: function () {
            if (this._cur_tool)
                return this._cur_tool;
            if (PlatUtils_1.default.IsWechat) {
                this._cur_tool = exports.utils.wechatTool;
            }
            else if (PlatUtils_1.default.IsOPPO) {
                this._cur_tool = exports.utils.oppoTool;
            }
            else if (PlatUtils_1.default.IsVIVO) {
                this._cur_tool = exports.utils.Tool_Vivo;
            }
            else if (PlatUtils_1.default.IsQQ) {
                this._cur_tool = exports.utils.Tool_QQ;
            }
            else if (PlatUtils_1.default.IsDouyin) {
                this._cur_tool = exports.utils.Tool_Douyin;
            }
            else if (PlatUtils_1.default.IsBaidu) {
                this._cur_tool = exports.utils.Tool_Baidu;
            }
            else if (PlatUtils_1.default.IsQTT) {
                this._cur_tool = exports.utils.Tool_QTT;
            }
            else if (PlatUtils_1.default.IsXiaoMi) {
                this._cur_tool = exports.utils.Tool_XiaoMi;
            }
            else if (PlatUtils_1.default.ISUC) {
                this._cur_tool = exports.utils.Tool_UC;
            }
            else if (PlatUtils_1.default.ISCocos) {
                this._cur_tool = exports.utils.Tool_Cocosplay;
            }
            else if (PlatUtils_1.default.IsNativeAndroid) {
                this._cur_tool = exports.utils.Tool_Native;
            }
            else if (PlatUtils_1.default.Is4399) {
                this._cur_tool = exports.utils.Tool_4399;
            }
            else if (PlatUtils_1.default.IsKwai) {
                this._cur_tool = exports.utils._tool_Kwai;
            }
            else if (PlatUtils_1.default.IsNativeIOS) {
                this._cur_tool = exports.utils.Tool_IOS;
            }
            else if (PlatUtils_1.default.IsWiFi) {
                this._cur_tool = exports.utils._tool_Wifi;
            }
            else if (PlatUtils_1.default.IsHago) {
                this._cur_tool = exports.utils._tool_Hago;
            }
            else if (PlatUtils_1.default.IsHuaWei) {
                this._cur_tool = exports.utils.Tool_Huawei;
            }
            else if (PlatUtils_1.default.IsFaceBook) {
                this._cur_tool = exports.utils.Tool_Facebook;
            }
            else if (PlatUtils_1.default.IsGoogleWeb) {
                this._cur_tool = exports.utils.Tool_Facebook;
            }
            else {
                this._cur_tool = exports.utils._tool_Broswer;
            }
            return this._cur_tool;
        },
        enumerable: false,
        configurable: true
    });
    Utils.prototype.showLog = function (msg) {
        var _a;
        if (msg === void 0) { msg = ""; }
        var any = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            any[_i - 1] = arguments[_i];
        }
        // if (true) {
        //     console.log(msg, ...any);
        //     return;
        // }
        if (this.showLogView || this.serverShowLog) {
            if (this.config.otherconfig.logoutView) {
                if (cc.director.getScene()) {
                    var logooutView = cc.director.getScene().getChildByName("LogoutView");
                    if (!logooutView) {
                        logooutView = cc.instantiate(this.config.otherconfig.logoutView);
                        cc.director.getScene().addChild(logooutView, 1000);
                    }
                    (_a = logooutView.getComponent("LogOutView")).addLog.apply(_a, __spreadArrays([msg], any));
                }
            }
            else {
                exports.utils.showLog("warn:" + "未找到预制体 LogOutView, 请查看CommonUtils组件上是否赋值！");
            }
        }
        else {
            if (this.showLogToConsole) {
                console.log.apply(console, __spreadArrays([msg], any));
            }
            else {
                cc.log.apply(cc, __spreadArrays([msg], any));
            }
        }
    };
    /**
     * 屏幕震动功能
     * @param type 震动类型 传递枚举：VibrateType
     */
    Utils.prototype.vibrate = function (type) {
        if (type === void 0) { type = YZ_Constant_1.VibrateType.Short; }
        if (PlatUtils_1.default.IsWechat) {
            if (type == YZ_Constant_1.VibrateType.Short) {
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
            if (type == YZ_Constant_1.VibrateType.Short) {
                //@ts-ignore
                qg.vibrateShort({ success: function (res) { }, fail: function (res) { } }); //（20 ms）
            }
            else {
                //@ts-ignore
                qg.vibrateLong({ success: function (res) { }, fail: function (res) { } }); //400 ms
            }
        }
        else if (PlatUtils_1.default.IsVIVO) {
            if (type == YZ_Constant_1.VibrateType.Short) {
                //@ts-ignore
                qg.vibrateShort(); //（15 ms）
            }
            else {
                //@ts-ignore
                qg.vibrateLong(); //400 ms
            }
        }
        else if (PlatUtils_1.default.IsQQ) {
            if (type == YZ_Constant_1.VibrateType.Short) {
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
            if (type == YZ_Constant_1.VibrateType.Short) {
                //@ts-ignore
                tt.vibrateShort({ success: function (res) { }, fail: function (res) { } });
            }
            else {
                //@ts-ignore
                tt.vibrateLong({ success: function (res) { }, fail: function (res) { } }); //400 ms
            }
        }
        else if (PlatUtils_1.default.IsBaidu) {
            if (type == YZ_Constant_1.VibrateType.Short) {
                //@ts-ignore
                //（15 ms），仅在 iPhone 7/7 Plus 以上及 Android 机型生效。
                swan.vibrateShort({ success: function (res) { }, fail: function (res) { } });
            }
            else {
                //@ts-ignore
                swan.vibrateLong({ success: function (res) { }, fail: function (res) { } }); //400 ms
            }
        }
        else if (PlatUtils_1.default.IsWiFi) {
            if (type == YZ_Constant_1.VibrateType.Short) {
                //@ts-ignore
                //（15 ms），仅在 iPhone 7/7 Plus 以上及 Android 机型生效。
                wuji.vibrateShort({ success: function (res) { }, fail: function (res) { } });
            }
            else {
                //@ts-ignore
                wuji.vibrateLong({ success: function (res) { }, fail: function (res) { } }); //400 ms
            }
        }
        else if (PlatUtils_1.default.IsNativeAndroid) {
            if (type == YZ_Constant_1.VibrateType.Short) {
                //@ts-ignore
                jsb.reflection.callStaticMethod(exports.utils.Tool_Native.jniClassName, "vibrateShort", "()V");
            }
            else {
                //@ts-ignore
                jsb.reflection.callStaticMethod(exports.utils.Tool_Native.jniClassName, "vibrateLong", "()V");
            }
        }
    };
    /**
     * 游戏开始上报
     * @param level 当前关卡
     * @param model 当前模式： 没有则省略
     */
    Utils.prototype.StartGame = function (level, model) {
        AldUtils_1.default.StartGame(level, model);
        exports.utils.cur_tool && exports.utils.cur_tool.umaOnStart && exports.utils.cur_tool.umaOnStart(level);
        if (PlatUtils_1.default.IsDouyin || PlatUtils_1.default.IsKwai) {
            this.AutoStartRecord(level);
        }
    };
    /**
    * 游戏胜利上报,显示结算广告
    * @param level 当前关卡
    * @param star 获得星星： 默认为0
    * @param model 当前模式： 没有则省略
    * @param isShowAd 是否调用广告，默认开启调用
    * @returns json{ type:(1:6元素互推、2:单个原生广告),node:节点}
    *
    */
    Utils.prototype.GameWin = function (level, star, model, isShowAd) {
        if (star === void 0) { star = 0; }
        if (isShowAd === void 0) { isShowAd = true; }
        AldUtils_1.default.GameWin(level, star, model);
        exports.utils.cur_tool && exports.utils.cur_tool.umaReportedLevel && exports.utils.cur_tool.umaReportedLevel(level, YZ_Constant_1.LevelStatus.GameWin);
        if (PlatUtils_1.default.IsKwai) {
            exports.utils.kwaiTool.isClickEnd = false;
        }
        // if (PlatUtils.IsDouyin || PlatUtils.IsKwai) {
        this.recordEnd();
        // }
        return this.AutoShowStatement(level, true, isShowAd);
    };
    /**
    * 游戏失败上报,显示结算广告
    * @param level 当前关卡
    * @param model 当前模式： 没有则省略
    * @param isShowAd 是否调用广告，默认开启调用
    * @returns json{ type:(1:6元素互推、2:单个原生广告),node:节点}
    */
    Utils.prototype.GameFail = function (level, model, isShowAd) {
        if (isShowAd === void 0) { isShowAd = true; }
        AldUtils_1.default.GameFail(level, model);
        exports.utils.cur_tool && exports.utils.cur_tool.umaReportedLevel && exports.utils.cur_tool.umaReportedLevel(level, YZ_Constant_1.LevelStatus.GameFail);
        // if (PlatUtils.IsDouyin || PlatUtils.IsKwai) {
        this.recordEnd();
        // }
        return this.AutoShowStatement(level, false, isShowAd);
    };
    /**
     * 跳过关卡上报
     * @param level 当前关卡
     * @param model 当前模式： 没有则省略
     */
    Utils.prototype.GameSkip = function (level, model) {
        AldUtils_1.default.GameSkip(level, model);
    };
    /**
     * 事件上报
     * @param eventName 事件名称
     */
    Utils.prototype.SendEvent = function (eventName) {
        AldUtils_1.default.SendEvent(eventName);
    };
    /**
     * 友盟自定义事件上报
     * @param eventID 事件ID
     * @param params   事件内容 Type: obj
     */
    Utils.prototype.umaEvent = function (eventID, params) {
        exports.utils.showLog("\u4E8B\u4EF6\u4E0A\u62A5:" + eventID + "\uFF1A" + params);
        if (PlatUtils_1.default.IsNativeAndroid) {
            exports.utils.cur_tool && exports.utils.cur_tool.umaTrackEvent && exports.utils.cur_tool.umaTrackEvent("custom", eventID, params);
        }
        else {
            exports.utils.cur_tool && exports.utils.cur_tool.umaTrackEvent && exports.utils.cur_tool.umaTrackEvent(eventID, params);
        }
    };
    Utils.prototype.reportOverPageTouchEvent = function (overPage) {
        var _this = this;
        exports.utils.showLog("reportOverPageTouchEvent >>>>>>>");
        this.overPageInsertAdIsTouch = false;
        this.overPageShowTime = new Date().getTime();
        var node = new cc.Node();
        node.width = overPage.width * 2;
        node.height = overPage.height * 2;
        node.on(cc.Node.EventType.TOUCH_START, function () {
            var time = (new Date().getTime() - _this.overPageShowTime) / 1000;
            var json = {};
            json.data = time;
            exports.utils.SendEventNew("\u7ED3\u7B97\u9875\u9762\u70B9\u51FB\u65F6\u95F4", "overPageTouch", JSON.stringify(json));
            node.destroy();
            node.removeFromParent();
        }, overPage);
        node['_touchListener']['swallowTouches'] = false;
        overPage.addChild(node, cc.macro.MAX_ZINDEX);
    };
    /**
     * 自定义事件上报
     * @param eventName 事件名称
     */
    Utils.prototype.SendEventNew = function (eventName, eventId, eventData, isCallBack) {
        if (eventId === void 0) { eventId = "default"; }
        if (isCallBack === void 0) { isCallBack = true; }
        exports.utils.showLog("\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u4E0A\u62A5:" + eventName + "\uFF0C" + eventId + "," + eventData);
        exports.utils.cur_tool && exports.utils.cur_tool.SendEventNew && exports.utils.cur_tool.SendEventNew(eventName, eventId, eventData, isCallBack);
    };
    /**
     * 游戏中使用道具上报
     * @param level 当前关卡
     * @param tooName 道具名称
     * @param model 当前模式： 没有则省略
     */
    Utils.UseTool = function (level, toolName, model) {
        AldUtils_1.default.UseTool(level, toolName, model);
    };
    /**
     * 判断算界面是否能显示自动分享   自动强弹视频   自动弹插屏
     * type 1自动分享   2自动强弹视频    3自动弹插屏 4自动弹互推插屏
    */
    Utils.prototype.checkResultShow = function (type) {
        var level = exports.utils.currentLevel;
        var isSuccess = exports.utils.isSuccess;
        var config = exports.utils.ServerConfig;
        if (!config) {
            exports.utils.showLog("warn:" + "服务器配置不存在,只显示结算广告");
            return type == 3;
        }
        if (PlatUtils_1.default.IsDouyin) {
            if (config.auto_record_share_count) {
                var recoredCount = config.auto_record_share_count;
                if (recoredCount != 0 && exports.utils.recored_share_count >= recoredCount) {
                    exports.utils.showLog("\u670D\u52A1\u5668\u914D\u7F6E\u5206\u4EAB\u6B21\u6570\uFF1A" + recoredCount + " ,\u5DF2\u5230\u4E0A\u9650");
                }
                else {
                    var record_cap = config.auto_record_interval;
                    var checkShow_1 = false;
                    if (level > 0 && record_cap != 0) {
                        if (record_cap.indexOf(",") == -1) {
                            if (level % Number(record_cap) == 0) {
                                checkShow_1 = true;
                            }
                        }
                        else {
                            exports.utils.showLog("\u6307\u5B9A\u5173\u5361" + config.auto_record_interval + "\u5206\u4EAB\u5F55\u5C4F\uFF0C\u5F53\u524D\u5173\u5361\u4E3A\uFF1A" + level);
                            var record_cap_arr = record_cap.split(",");
                            record_cap_arr.forEach(function (str) {
                                if (level == Number(str)) {
                                    checkShow_1 = true;
                                }
                            });
                        }
                        if (checkShow_1) {
                            if (config.auto_record_share_type == "all") {
                                return type == 1;
                            }
                            if (config.auto_record_share_type == "success") {
                                if (exports.utils.isSuccess == true) {
                                    return type == 1;
                                }
                            }
                            if (config.auto_record_share_type == "fail") {
                                if (exports.utils.isSuccess == false) {
                                    return type == 1;
                                }
                            }
                        }
                    }
                }
            }
        }
        exports.utils.showLog("\u4E0D\u80FD\u81EA\u52A8\u5206\u4EAB\u5F55\u5C4F \u5206\u4EAB\u5F55\u5C4F\u95F4\u9694\u4E3A\uFF1A" + config.auto_record_interval + "  \u5206\u4EAB\u7C7B\u578B\u4E3A\uFF1A" + config.auto_record_share_type);
        if (config.auto_video_interval && config.auto_video_interval != 0) {
            var space = config.auto_video_interval;
            var showType = config.auto_video_show_type;
            if (level % space == 0) {
                if (showType == "all") {
                    return type == 2;
                }
                if (showType == "success") {
                    if (isSuccess == true) {
                        return type == 2;
                    }
                }
                if (showType == "fail") {
                    if (isSuccess == false) {
                        return type == 2;
                    }
                }
            }
        }
        exports.utils.showLog("\u4E0D\u80FD\u81EA\u52A8\u5F39\u89C6\u9891\u5F39\u89C6\u9891\u95F4\u9694\u4E3A\uFF1A" + config.auto_video_interval + " \u5F39\u89C6\u9891\u7C7B\u578B\u4E3A\uFF1A" + config.auto_video_show_type);
        if (config.auto_rec_insert_interval && config.auto_rec_insert_interval != 0) {
            var space = config.auto_rec_insert_interval;
            var showType = config.auto_rec_insert_type;
            if (level % space == 0) {
                if (showType == "all") {
                    return type == 4;
                }
                if (showType == "success") {
                    if (isSuccess == true) {
                        return type == 4;
                    }
                }
                if (showType == "fail") {
                    if (isSuccess == false) {
                        return type == 4;
                    }
                }
            }
        }
        exports.utils.showLog("\u4E0D\u80FD\u81EA\u52A8\u5F39\u4E92\u63A8\u63D2\u5C4F\u95F4\u9694\u4E3A\uFF1A" + config.auto_rec_insert_interval + " \u5F39\u89C6\u9891\u7C7B\u578B\u4E3A\uFF1A" + config.auto_rec_insert_type);
        return type == 3;
    };
    /**
     * 结算广告控制
     * level 当前关卡   isSuccess是否胜利
     * qq  若判断2通过弹游戏盒子  判断3通过弹插屏
     * 抖音  若判断2通过则弹视频   判断3过弹插屏
     * 趣头条 若判断2通过弹视频   判断3通过弹互动直弹
     * 其他平台若判断2通过则服务器配置有问题，联系运营修改
     *服务器控制 结算界面自动弹出视频
     */
    Utils.prototype.AutoShowStatement = function (level, isSuccess, isShowAd) {
        exports.utils.currentLevel = level;
        exports.utils.isSuccess = isSuccess;
        var res = { "type": -1, "node": null };
        if (!isShowAd) {
            exports.utils.showLog("isShowAd为false，只上报不显示广告");
            return res;
        }
        var isShowVideo = false;
        if (this.checkResultShow(2)) {
            if (this.getConfigByKey("result_auto_show_video") == "false")
                return;
            if (PlatUtils_1.default.IsDouyin) {
                exports.utils.showLog("服务器版本：", exports.utils.config.douyinconfig.version, "当前版本：", this.getConfigByKey("version"));
                if (exports.utils.config.douyinconfig.version != this.getConfigByKey("version")) {
                    exports.utils.showLog("版本不一致，自动播放视频！");
                    exports.utils.adManager.ShowVideo(function () { });
                    isShowVideo = true;
                }
            }
            else if (PlatUtils_1.default.IsQQ) {
                if (exports.utils.config.qqconfig.version != this.getConfigByKey("version")) {
                    exports.utils.showLog("版本不一致，自动播放视频！");
                    exports.utils.adManager.ShowVideo(function () { });
                    isShowVideo = true;
                }
            }
            else if (PlatUtils_1.default.IsWiFi) {
                if (exports.utils.config.wifiConfig.version != this.getConfigByKey("version")) {
                    exports.utils.showLog("版本不一致，自动播放视频！");
                    exports.utils.adManager.ShowVideo(function () { });
                    isShowVideo = true;
                }
            }
            else if (PlatUtils_1.default.IsBaidu) {
                if (exports.utils.config.baiduconfig.version != this.getConfigByKey("version")) {
                    exports.utils.showLog("版本不一致，自动播放视频！");
                    exports.utils.adManager.ShowVideo(function () { });
                    isShowVideo = true;
                }
            }
            else if (PlatUtils_1.default.IsKwai) {
                if (exports.utils.config.kwaiConfig.version != this.getConfigByKey("version")) {
                    exports.utils.showLog("版本不一致，自动播放视频！");
                    exports.utils.adManager.ShowVideo(function () { });
                    isShowVideo = true;
                }
            }
            else if (PlatUtils_1.default.IsHago) {
                if (exports.utils.config.hagoConfig.version != this.getConfigByKey("version")) {
                    exports.utils.showLog("版本不一致，自动播放视频！");
                    exports.utils.adManager.ShowVideo(function () { });
                    isShowVideo = true;
                }
            }
            else if (PlatUtils_1.default.IsNativeAndroid) {
                if (exports.utils.config.nativeAndroidConfig.version != this.getConfigByKey("version")) {
                    exports.utils.showLog("版本不一致，自动播放视频！");
                    if (exports.utils.ServerConfig && this.getConfigByKey("auto_video_type") == "reward_video") {
                        exports.utils.adManager.ShowVideo(function () { });
                    }
                    else {
                        exports.utils.adManager.showFullScreenVideo();
                    }
                    isShowVideo = true;
                }
                else {
                    exports.utils.showLog("与服务器版本一致，不自动播放视频！");
                }
            }
            else if (PlatUtils_1.default.IsNativeIOS) {
                if (exports.utils.config.nativeIoSConfig.version != this.getConfigByKey("version")) {
                    exports.utils.showLog("版本不一致，自动播放视频！");
                    if (exports.utils.ServerConfig && this.getConfigByKey("auto_video_type") == "reward_video") {
                        exports.utils.adManager.ShowVideo(function () { });
                    }
                    else {
                        exports.utils.adManager.showFullScreenVideo();
                    }
                    isShowVideo = true;
                }
            }
            else if (PlatUtils_1.default.IsVIVO) {
                exports.utils.showLog("服务器配置当前显示强弹视频，但当前平台不支持。需修改服务器配置");
                exports.utils.adManager.showStatementAds();
            }
            else {
                isShowVideo = true;
                exports.utils.adManager.ShowVideo(function () { });
            }
            if (isShowVideo && (PlatUtils_1.default.IsDouyin || PlatUtils_1.default.IsQQ || PlatUtils_1.default.IsNativeAndroid || PlatUtils_1.default.IsNativeIOS)) {
                exports.utils.showLog("当前强弹了视频，不显示插屏！");
            }
            else {
                res = exports.utils.adManager.showStatementAds();
            }
        }
        // if (this.canShowRedBag() && this.yzRedBagInfo.progress >= this.yzRedBagInfo.totalProgress) {
        //     utils.showLog("当前红包进度已满，显示获得红包窗口！");
        //     // this.showOpenRedBagPanel({ showType: 2 });
        // }
        if (this.checkResultShow(3)) {
            res = exports.utils.adManager.showStatementAds();
            // console.log(" this.checkResultShow(3)", res.node);
        }
        if (PlatUtils_1.default.IsDouyin || PlatUtils_1.default.IsNativeIOS || PlatUtils_1.default.IsBaidu || PlatUtils_1.default.IsNativeAndroid) {
            //抖音平台判断是否需要6元素互推
            res.type = 1;
            res.node = exports.utils.showCrossWidget6();
        }
        return res;
    };
    /**
     * 获得一次现金红包
     */
    Utils.prototype.addRedBagCount = function (callFun) {
        this.yzRedBagInfo.freeRedBagCount++;
        if (callFun) {
            this.rewardCloseFunc = callFun;
        }
        this.showOpenRedBagPanel({ showType: 3 });
        exports.utils.showLog("获得一个现金红包");
    };
    /**
     * 开始游戏自动录屏
     * 暂时只有头条平台有
     * 默认为0 表示不开启，例如3 表示每三关会自动录屏，例如3,6,9 表示只有第3,6,9指定的关卡会自动录屏
     */
    Utils.prototype.AutoStartRecord = function (level) {
        if (this.getConfigByKey("auto_record_interval") > 0) {
            exports.utils.recordStart();
        }
        else {
            exports.utils.showLog("warn:" + "服务器配置不存在auto_record_interva");
        }
    };
    /**
     * 显示录屏分享窗口
     * @param params
     */
    Utils.prototype.showShareRecordPanel = function (params) {
        if (params === void 0) { params = null; }
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return null;
        }
        if (this.config.otherconfig.shareRecordPanel) {
            var node = cc.instantiate(this.config.otherconfig.shareRecordPanel);
            if (node) {
                if (this.shareRecordPanel && cc.isValid(this.shareRecordPanel)) {
                    this.shareRecordPanel.destroy();
                }
                this.shareRecordPanel = node;
                this.shareRecordPanel.zIndex = 9999;
                var widget = node.getComponent(cc.Widget);
                if (params) {
                    if (params.group) {
                        node.group = params.group;
                    }
                    if (params.scale != null) {
                        node.scale = params.scale;
                    }
                    if (params.top != null) {
                        widget.isAlignTop = true;
                        widget.isAlignBottom = false;
                        widget.top = params.top;
                    }
                    else if (params.bottom != null) {
                        widget.isAlignTop = false;
                        widget.isAlignBottom = true;
                        widget.bottom = params.bottom;
                    }
                    if (params.left != null) {
                        widget.isAlignLeft = true;
                        widget.isAlignRight = false;
                        widget.left = params.left;
                    }
                    else if (params.right != null) {
                        widget.isAlignLeft = false;
                        widget.isAlignRight = true;
                        widget.right = params.right;
                    }
                    if (params.parent != null) {
                        node.parent = params.parent;
                    }
                    else {
                        cc.director.getScene().addChild(this.shareRecordPanel, 1000);
                    }
                }
                else {
                    cc.director.getScene().addChild(this.shareRecordPanel, 1000);
                }
                widget.updateAlignment();
                return node;
            }
        }
        else {
            exports.utils.showLog("未找到预制体 ShareRecordPanel, 请查看CommonUtils组件上是否赋值！");
        }
        return null;
    };
    Object.defineProperty(Utils.prototype, "otherConfig", {
        /**
         * 获取其他辅助配置
         */
        get: function () {
            if (!this._other_config) {
                this._other_config = this.config.otherconfig.localConfig.json.other;
            }
            return this._other_config;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 获取试用皮肤关卡间隔
     * 默认为每5关显示一次
     *
     */
    Utils.prototype.isShowTrySkin = function (curLevel) {
        var count = 5;
        if (exports.utils.ServerConfig && this.getConfigByKey("try_skin_level_count")) {
            count = this.getConfigByKey("try_skin_level_count");
        }
        if (curLevel % count == 0) {
            if (exports.utils.ServerConfig && this.getConfigByKey("try_skin_show_ad_interval") != undefined) {
                if (curLevel % this.getConfigByKey("try_skin_show_ad_interval") == 0) {
                    exports.utils.showLog("\u670D\u52A1\u5668\u914D\u7F6E\u95F4\u9694" + this.getConfigByKey("try_skin_show_ad_interval") + "\u5173\u8BD5\u7528\u76AE\u80A4\u5C55\u793A\u63D2\u5C4F\uFF01");
                    exports.utils.adManager.ShowInterstitial();
                }
            }
            return true;
        }
        return false;
    };
    /**
     * 延迟显示跳过或者关闭按钮
     * @param btn 延迟显示按钮的节点
     * @param isCloseBtn 是否返回或者关闭按钮
     * @param location 按钮所在的页面位置
     */
    Utils.prototype.showSkipBtn = function (btn, isCloseBtn, location) {
        if (isCloseBtn === void 0) { isCloseBtn = false; }
        if (location === void 0) { location = YZ_Constant_1.BannerLocation.None; }
        if (btn) {
            var delayShowBtn = PlatUtils_1.default.IsNativeAndroid ? 3 : 0;
            if (this.getConfigByKey("skip_btn_show_delay")) {
                delayShowBtn = this.getConfigByKey("skip_btn_show_delay");
            }
            if (isCloseBtn) {
                if (this.getConfigByKey("special_skip_btn_show_delay")) {
                    delayShowBtn = this.getConfigByKey("special_skip_btn_show_delay");
                }
            }
            if (PlatUtils_1.default.IsTest) {
                this.ServerConfig.over_page_skip_btn_show_delay = 3;
            }
            if (location == YZ_Constant_1.BannerLocation.Over) {
                if (this.getConfigByKey("over_page_skip_btn_show_delay")) {
                    delayShowBtn = this.getConfigByKey("over_page_skip_btn_show_delay");
                }
            }
            if (delayShowBtn > 0) {
                btn.opacity = 0;
                btn.active = false;
                this.scheduleOnce(function () {
                    if (btn && cc.isValid(btn)) {
                        btn.active = true;
                        btn.runAction(cc.fadeIn(0.3));
                    }
                }, delayShowBtn);
            }
            else {
                if (!btn.active) {
                    btn.active = true;
                }
            }
        }
    };
    /**
     * 抖音按钮延迟显示
     * 默认为0秒
     */
    Utils.prototype.delayShowNode = function (btn) {
        if (btn) {
            btn.opacity = 0;
            btn.active = true;
            var delayShowBtn = 0;
            if (this.getConfigByKey("next_btn_show_delay")) {
                delayShowBtn = this.getConfigByKey("next_btn_show_delay");
            }
            this.scheduleOnce(function () {
                if (btn && cc.isValid(btn)) {
                    btn.runAction(cc.fadeIn(0.3));
                }
            }, delayShowBtn);
        }
    };
    /**
     * 宝箱界面是否自动勾选
     */
    Utils.prototype.isBoxAutoSelectToggle = function () {
        var cap_level = 0;
        var level = exports.utils.currentLevel;
        if (this.getConfigByKey("box_auto_select_level")) {
            cap_level = Number(this.getConfigByKey("box_auto_select_level"));
        }
        else {
            exports.utils.showLog("服务器配置不存在，不自动勾选");
        }
        if (cap_level != 0 && (level % cap_level) == 0) {
            return true;
        }
        return false;
    };
    /**
     * 结算界面是否自动勾选
     */
    Utils.prototype.isResultAutoSelectToggle = function () {
        var cap_level = 0;
        var level = exports.utils.currentLevel;
        if (this.getConfigByKey("result_auto_select_level")) {
            cap_level = Number(this.getConfigByKey("result_auto_select_level"));
        }
        else {
            exports.utils.showLog("服务器配置不存在，不自动勾选");
        }
        if (cap_level != 0 && (level % cap_level) == 0) {
            return true;
        }
        return false;
    };
    /**
     * 试用皮肤界面是否自动勾选
     */
    Utils.prototype.isTrySkinAutoSelectToggle = function () {
        var cap_level = 0;
        var level = exports.utils.currentLevel;
        if (this.getConfigByKey("skin_auto_select_level")) {
            cap_level = Number(this.getConfigByKey("skin_auto_select_level"));
        }
        else {
            exports.utils.showLog("服务器配置不存在，不自动勾选");
        }
        if (cap_level != 0 && (level % cap_level) == 0) {
            return true;
        }
        return false;
    };
    Utils.prototype.changePic = function (node, picPath, callback) {
        var self = this;
        if (!node || !cc.isValid(node) || !node.getComponent(cc.Sprite)) {
            cc.warn('UiUtil.changePic node null');
            return;
        }
        // if (SDKPlatform.getLan() == 'tw') {
        //     if (picPath.indexOf('pic/font/cn') > -1) {
        //         let arr = picPath.split('/cn/')
        //         picPath = 'pic/font/tw/' + arr[1]
        //     }
        // }
        if (node.picurl == this.nodeName(picPath)) {
            return;
        }
        var SpriteFrame = cc.resources.get(picPath, cc.SpriteFrame);
        if (SpriteFrame) {
            node.picurl = self.nodeName(picPath);
            node.getComponent(cc.Sprite).spriteFrame = SpriteFrame;
            if (callback) {
                callback(SpriteFrame);
            }
        }
        else {
            node.getComponent(cc.Sprite).spriteFrame = null;
            cc.resources.load(picPath, cc.SpriteFrame, null, function (err, SpriteFrame) {
                if (!node || !cc.isValid(node) || !node.getComponent(cc.Sprite)) {
                    return;
                }
                if (SpriteFrame) {
                    node.picurl = self.nodeName(picPath);
                    node.getComponent(cc.Sprite).spriteFrame = SpriteFrame;
                }
                else {
                    node.picurl = "";
                }
                if (callback) {
                    callback(SpriteFrame);
                }
            });
        }
    };
    Utils.prototype.nodeName = function (name) {
        return name.replace(/\//g, '-').replace(/;/g, '-');
    };
    Object.defineProperty(Utils.prototype, "gameVersion", {
        /**
         * 游戏当前版本
         */
        get: function () {
            if (this.cur_tool && this.cur_tool.gameVersion)
                return this.cur_tool.gameVersion();
            return "-1";
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 界面控制
     * @param view
     * 界面类型：皮肤试用界面  宝箱界面
     *
     * 返回值类型
     * @param callback isSelect：按钮是否自动勾选上
     * @param callback msg:文字提示
     * @param callback btnType:初始按钮类型   true为看广告的文本  false为不看广告的文本
    */
    Utils.prototype.controView = function (view) {
        var result = { "isSelect": true, "msg": "观看视频获得奖励", "btnType": true, "is_open": false };
        var adTipsType;
        var selectType;
        if (!exports.utils.ServerConfig) {
            exports.utils.showLog("服务器配置不存在");
            return result;
        }
        //验证服务器是否开启勾选策略
        if (this.getConfigByKey("open_check_btn") == "false") {
            exports.utils.showLog("服务器配置不开启勾选！");
            return result;
        }
        result.is_open = true;
        switch (view) {
            case YZ_Constant_1.ViewLocation.sign:
                selectType = this.getConfigByKey("sign_auto_select_level") ? this.getConfigByKey("sign_auto_select_level") : 0;
                if (this.getConfigByKey("ad_tip_sign_random") == "true") {
                    adTipsType = Math.random() >= 0.5 ? true : false;
                }
                else {
                    adTipsType = true;
                }
                if (adTipsType) {
                    result.msg = "查看视频获得双倍奖励";
                }
                else {
                    result.msg = "不需要视频奖励";
                }
                break;
            case YZ_Constant_1.ViewLocation.trySkin:
                selectType = this.getConfigByKey("tryskin_auto_select_level") ? this.getConfigByKey("tryskin_auto_select_level") : 0;
                if (this.getConfigByKey("ad_tip_tryskin_random") == "true") {
                    adTipsType = Math.random() >= 0.5 ? true : false;
                }
                else {
                    adTipsType = true;
                }
                if (adTipsType) {
                    result.msg = "查看视频试用皮肤";
                }
                else {
                    result.msg = "不需要视频试用皮肤";
                }
                break;
            case YZ_Constant_1.ViewLocation.box:
                selectType = this.getConfigByKey("box_auto_select_level") ? this.getConfigByKey("box_auto_select_level") : 0;
                if (this.getConfigByKey("ad_tip_box_random") == "true") {
                    adTipsType = Math.random() >= 0.5 ? true : false;
                }
                else {
                    adTipsType = true;
                }
                if (adTipsType) {
                    result.msg = "查看视频获得五倍奖励";
                }
                else {
                    result.msg = "不需要视频奖励";
                }
                break;
            case YZ_Constant_1.ViewLocation.successBox:
                selectType = this.getConfigByKey("success_box_auto_select_level") ? this.getConfigByKey("success_box_auto_select_level") : 0;
                break;
            case YZ_Constant_1.ViewLocation.failBox:
                selectType = this.getConfigByKey("fail_box_auto_select_level") ? this.getConfigByKey("fail_box_auto_select_level") : 0;
                break;
            case YZ_Constant_1.ViewLocation.winPanel:
                selectType = this.getConfigByKey("win_panel_auto_select_level") ? this.getConfigByKey("win_panel_auto_select_level") : 0;
                break;
            case YZ_Constant_1.ViewLocation.turntable:
                selectType = this.getConfigByKey("turntable_auto_select_level") ? this.getConfigByKey("turntable_auto_select_level") : 0;
                break;
        }
        if (selectType == 0) {
            result.isSelect = false;
        }
        else if (selectType == 1) {
            result.isSelect = true;
        }
        else if (selectType == 2) {
            result.isSelect = Math.random() >= 0.5 ? true : false;
        }
        result.btnType = adTipsType == result.isSelect;
        return result;
    };
    /**
     * 是否能再下一关开始的时候强弹视频
    */
    Utils.prototype.canShowNextVideo = function (level) {
        if (exports.utils.ServerConfig && this.getConfigByKey("next_auto_video_interval")) {
            var cap = Number(this.getConfigByKey("next_auto_video_interval"));
            if (cap && cap != 0) {
                if (level % cap == 0) {
                    if (PlatUtils_1.default.IsDouyin) {
                        if (this.getConfigByKey("version") != exports.utils.config.douyinconfig.version) {
                            return true;
                        }
                    }
                    else if (PlatUtils_1.default.IsBaidu) {
                        if (this.getConfigByKey("version") != exports.utils.config.baiduconfig.version) {
                            return true;
                        }
                    }
                    else if (PlatUtils_1.default.ISUC) {
                        if (this.getConfigByKey("version") != exports.utils.config.ucConfig.version) {
                            return true;
                        }
                    }
                    else {
                        return true;
                    }
                }
                else {
                    if (PlatUtils_1.default.Is4399) {
                        cap = 3; //4399不能读取服务器配置写死间隔
                        if (cap != 0 && level % cap == 0) {
                            return this.true;
                        }
                    }
                }
            }
        }
        return false;
    };
    /**
     * 是否显示红包
     */
    Utils.prototype.canShowRedBag = function () {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return false;
        }
        if (this.Tool_Broswer)
            return true;
        if (this.ServerConfig && this.yzRedBagInfo && this.ServerConfig.show_red_bag && this.ServerConfig.show_red_bag == "true") {
            return true;
        }
        exports.utils.showLog("服务器配置不显示红包组件！");
        return false;
    };
    /**
     * 隐藏提现框挂件
     */
    Utils.prototype.hideWithdrawalWidget = function () {
        if (this._withdrawalWidget && cc.isValid(this._withdrawalWidget)) {
            this._withdrawalWidget.destroy();
        }
    };
    /**
     * 显示提现框挂件
     * @param params
     */
    Utils.prototype.showWithdrawalWidget = function (params) {
        if (params === void 0) { params = null; }
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return null;
        }
        if (!this.canShowRedBag())
            return null;
        if (this.config.otherconfig.withdrawalWidget) {
            var node = cc.instantiate(this.config.otherconfig.withdrawalWidget);
            if (node) {
                if (this._withdrawalWidget && cc.isValid(this._withdrawalWidget)) {
                    this._withdrawalWidget.destroy();
                }
                this._withdrawalWidget = node;
                this._withdrawalWidget.zIndex = 9999;
                var widget = node.getComponent(cc.Widget);
                if (params) {
                    if (params.group) {
                        node.group = params.group;
                    }
                    if (params.scale != null) {
                        node.scale = params.scale;
                    }
                    if (params.top != null) {
                        widget.isAlignTop = true;
                        widget.isAlignBottom = false;
                        widget.top = params.top;
                    }
                    else if (params.bottom != null) {
                        widget.isAlignTop = false;
                        widget.isAlignBottom = true;
                        widget.bottom = params.bottom;
                    }
                    if (params.left != null) {
                        widget.isAlignLeft = true;
                        widget.isAlignRight = false;
                        widget.left = params.left;
                    }
                    else if (params.right != null) {
                        widget.isAlignLeft = false;
                        widget.isAlignRight = true;
                        widget.right = params.right;
                    }
                    if (params.parent != null) {
                        node.parent = params.parent;
                    }
                }
                widget.updateAlignment();
                return node;
            }
        }
        else {
            exports.utils.showLog("warn:" + "未找到预制体 WithdrawalWidget, 请查看CommonUtils组件上是否赋值！");
        }
        return null;
    };
    /**
     * 隐藏红包进度挂件
     */
    Utils.prototype.hideRedBagProgressWidget = function () {
        if (this._redBagProgressWidget && cc.isValid(this._redBagProgressWidget)) {
            this._redBagProgressWidget.destroy();
        }
    };
    /**
    * 显示红包进度挂件
    * @param params
    */
    Utils.prototype.showRedBagProgressWidget = function (params) {
        if (params === void 0) { params = null; }
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return null;
        }
        if (!this.canShowRedBag())
            return null;
        if (this.config.otherconfig.redBagProgressWidget) {
            var node = cc.instantiate(this.config.otherconfig.redBagProgressWidget);
            if (node) {
                if (this._redBagProgressWidget && cc.isValid(this._redBagProgressWidget)) {
                    this._redBagProgressWidget.destroy();
                }
                this._redBagProgressWidget = node;
                this._redBagProgressWidget.zIndex = 9999;
                var widget = node.getComponent(cc.Widget);
                if (params) {
                    if (params.location) {
                        node.getComponent(RedBagProgressWidget_1.default).init(params);
                    }
                    if (params.group) {
                        node.group = params.group;
                    }
                    if (params.scale != null) {
                        node.scale = params.scale;
                    }
                    if (params.top != null) {
                        widget.isAlignTop = true;
                        widget.isAlignBottom = false;
                        widget.top = params.top;
                    }
                    else if (params.bottom != null) {
                        widget.isAlignTop = false;
                        widget.isAlignBottom = true;
                        widget.bottom = params.bottom;
                    }
                    if (params.left != null) {
                        widget.isAlignLeft = true;
                        widget.isAlignRight = false;
                        widget.left = params.left;
                    }
                    else if (params.right != null) {
                        widget.isAlignLeft = false;
                        widget.isAlignRight = true;
                        widget.right = params.right;
                    }
                    if (params.parent != null) {
                        node.parent = params.parent;
                    }
                }
                widget.updateAlignment();
                return node;
            }
        }
        else {
            exports.utils.showLog("warn:" + "未找到预制体 RedBagProgressWidget, 请查看CommonUtils组件上是否赋值！");
        }
        return null;
    };
    /**
   * 显示提现弹窗
   * @param params
   */
    Utils.prototype.showWithdrawalPanel = function (params) {
        if (params === void 0) { params = null; }
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return null;
        }
        if (!this.canShowRedBag())
            return null;
        if (this.config.otherconfig.withdrawalPanel) {
            var node = cc.instantiate(this.config.otherconfig.withdrawalPanel);
            if (node) {
                if (this._withdrawalPanel && cc.isValid(this._withdrawalPanel)) {
                    this._withdrawalPanel.destroy();
                }
                this._withdrawalPanel = node;
                cc.director.getScene().addChild(this._withdrawalPanel, 9999);
            }
            else {
                exports.utils.showLog("warn:" + "未找到预制体 WithdrawalPanel, 请查看CommonUtils组件上是否赋值！");
            }
            return null;
        }
    };
    /**
   * 显示开红包弹窗
   * @param params
   */
    Utils.prototype.showOpenRedBagPanel = function (params) {
        if (params === void 0) { params = null; }
        if (params && params.closeCallFunc) {
            this.rewardCloseFunc = params.closeCallFunc;
        }
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            this.rewardCloseFunc && this.rewardCloseFunc();
            return null;
        }
        if (!this.canShowRedBag()) {
            this.rewardCloseFunc && this.rewardCloseFunc();
            return null;
        }
        if (params && params.location && params.location === YZ_Constant_1.BannerLocation.Home) {
            if (this.yzRedBagInfo.progress < this.yzRedBagInfo.totalProgress && !this.yzRedBagInfo.isFreeRedBag) {
                exports.utils.showLog("当前红包进度不满足条件且没有免费红包领取，首页不显示拆红包窗口");
                this.rewardCloseFunc && this.rewardCloseFunc();
                return null;
            }
            else if (!this.yzRedBagInfo.isFreeRedBag) {
                params.showType = 2;
            }
        }
        if (this.config.otherconfig.openRedBagPanel) {
            var node = cc.instantiate(this.config.otherconfig.openRedBagPanel);
            if (node) {
                if (this._openRedBagPanel && cc.isValid(this._openRedBagPanel)) {
                    this._openRedBagPanel.destroy();
                }
                this._openRedBagPanel = node;
                if (params && params.showType) {
                    this._openRedBagPanel.getComponent(OpenRedBagPanel_1.default).initData(params.showType);
                }
                cc.director.getScene().addChild(node, 9999);
            }
            else {
                exports.utils.showLog("warn:" + "未找到预制体 OpenRedBagPanel, 请查看CommonUtils组件上是否赋值！");
            }
            return null;
        }
    };
    /**
   * 显示获得红包弹窗
   * @param params
   */
    Utils.prototype.showRewardRedBagPanel = function (params) {
        if (params === void 0) { params = null; }
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return null;
        }
        if (!this.canShowRedBag())
            return null;
        this._rewardRedBagPanelShowCount++;
        // if (this.ServerConfig && this.ServerConfig.show_reward_red_bag_interval) {
        if (this._rewardRedBagPanelShowCount % 3 != 0) {
            exports.utils.showLog("获得红包弹窗未达到服务器配置的间隔限制！");
            return;
        }
        // }
        if (this.config.otherconfig.rewardRedBagPanel) {
            var node = cc.instantiate(this.config.otherconfig.rewardRedBagPanel);
            if (node) {
                if (this._rewardRedBagPanel && cc.isValid(this._rewardRedBagPanel)) {
                    this._rewardRedBagPanel.destroy();
                }
                this._rewardRedBagPanel = node;
                cc.director.getScene().addChild(this._rewardRedBagPanel, 9999);
            }
            else {
                exports.utils.showLog("warn:" + "未找到预制体 OpenRedBagPanel, 请查看CommonUtils组件上是否赋值！");
            }
            return null;
        }
    };
    /**
    * 是否竖屏互推窗口
    */
    Utils.prototype.isVerticalRecommentPanel = function () {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return false;
        }
        if (this.Tool_Broswer)
            return true;
        if (PlatUtils_1.default.IsWechat) {
            if (exports.utils.isSupportnavigateToMiniGame()) {
                if (exports.utils.wechatTool
                    && exports.utils.wechatTool.ServerConfig
                    && exports.utils.wechatTool.ServerConfig.is_vertical_game) {
                    if (exports.utils.wechatTool.ServerConfig.is_vertical_game == "true") {
                        return true;
                    }
                    else {
                        exports.utils.showLog("warn:" + "is_vertical_game参数为false，更多游戏侧边栏组件不显示！");
                    }
                }
                else {
                    exports.utils.showLog("warn:" + "配置中没有is_vertical_game参数，更多游戏侧边栏组件不显示！");
                }
            }
            else {
                exports.utils.showLog("warn:" + "当前平台不支持游戏内跳转，更多游戏侧边栏组件不显示！");
            }
        }
        else if (PlatUtils_1.default.IsOPPO) {
            if (exports.utils.isSupportnavigateToMiniGame()) {
                if (exports.utils.oppoTool
                    && exports.utils.oppoTool.ServerConfig
                    && exports.utils.oppoTool.ServerConfig.is_vertical_game) {
                    if (exports.utils.oppoTool.ServerConfig.is_vertical_game == "true") {
                        return true;
                    }
                    else {
                        exports.utils.showLog("warn:" + "is_vertical_game参数为false，更多游戏侧边栏组件不显示！");
                    }
                }
                else {
                    exports.utils.showLog("warn:" + "配置中没有is_vertical_game参数，更多游戏侧边栏组件不显示！");
                }
            }
            else {
                exports.utils.showLog("warn:" + "当前平台不支持游戏内跳转，更多游戏侧边栏组件不显示！");
            }
        }
        else if (PlatUtils_1.default.IsDouyin) {
            if (PlatUtils_1.default.IsAndroid
                && exports.utils.isSupportnavigateToMiniGame()) {
                if (exports.utils.Tool_Douyin
                    && exports.utils.Tool_Douyin.ServerConfig
                    && exports.utils.Tool_Douyin.ServerConfig.is_vertical_game) {
                    if (exports.utils.Tool_Douyin.ServerConfig.is_vertical_game == "true") {
                        return true;
                    }
                    else {
                        exports.utils.showLog("warn:" + "is_vertical_game参数为false，更多游戏侧边栏组件不显示！");
                    }
                }
                else {
                    exports.utils.showLog("warn:" + "配置中没有is_vertical_game参数，更多游戏侧边栏组件不显示！");
                }
            }
            else {
                exports.utils.showLog("warn:" + "当前平台不支持游戏内跳转，更多游戏侧边栏组件不显示！");
            }
        }
        else if (PlatUtils_1.default.IsBaidu) {
            if (exports.utils.isSupportnavigateToMiniGame()) {
                if (exports.utils.Tool_Baidu
                    && exports.utils.Tool_Baidu.ServerConfig
                    && exports.utils.Tool_Baidu.ServerConfig.is_vertical_game) {
                    if (exports.utils.Tool_Baidu.ServerConfig.is_vertical_game == "true") {
                        return true;
                    }
                    else {
                        exports.utils.showLog("warn:" + "is_vertical_game参数为false，更多游戏侧边栏组件不显示！");
                    }
                }
                else {
                    exports.utils.showLog("warn:" + "配置中没有is_vertical_game参数，更多游戏侧边栏组件不显示！");
                }
            }
            else {
                exports.utils.showLog("warn:" + "当前平台不支持游戏内跳转，更多游戏侧边栏组件不显示！");
            }
        }
        else if (PlatUtils_1.default.IsQQ) {
            if (exports.utils.isSupportnavigateToMiniGame()) {
                if (exports.utils.Tool_QQ
                    && exports.utils.Tool_QQ.ServerConfig
                    && exports.utils.Tool_QQ.ServerConfig.is_vertical_game) {
                    if (exports.utils.Tool_QQ.ServerConfig.is_vertical_game == "true") {
                        return true;
                    }
                    else {
                        exports.utils.showLog("warn:" + "is_vertical_game参数为false，更多游戏侧边栏组件不显示！");
                    }
                }
                else {
                    exports.utils.showLog("warn:" + "配置中没有is_vertical_game参数，更多游戏侧边栏组件不显示！");
                }
            }
            else {
                exports.utils.showLog("warn:" + "当前平台不支持游戏内跳转，更多游戏侧边栏组件不显示！");
            }
        }
        else if (PlatUtils_1.default.Is4399) {
            return true;
        }
        else if (PlatUtils_1.default.IsNativeAndroid) {
            if (exports.utils.Tool_Native
                && exports.utils.Tool_Native.ServerConfig
                && exports.utils.Tool_Native.ServerConfig.is_vertical_game) {
                if (exports.utils.Tool_Native.ServerConfig.is_vertical_game == "true") {
                    return true;
                }
                else {
                    exports.utils.showLog("warn:" + "is_vertical_game参数为false，更多游戏侧边栏组件不显示！");
                }
            }
            else {
                exports.utils.showLog("warn:" + "配置中没有is_vertical_game参数，更多游戏侧边栏组件不显示！");
            }
        }
        else if (PlatUtils_1.default.IsNativeIOS) {
            if (exports.utils.Tool_IOS
                && exports.utils.Tool_IOS.ServerConfig
                && exports.utils.Tool_IOS.ServerConfig.is_vertical_game) {
                if (exports.utils.Tool_IOS.ServerConfig.is_vertical_game == "true") {
                    return true;
                }
                else {
                    exports.utils.showLog("warn:" + "is_vertical_game参数为false，更多游戏侧边栏组件不显示！");
                }
            }
            else {
                exports.utils.showLog("warn:" + "配置中没有is_vertical_game参数，更多游戏侧边栏组件不显示！");
            }
        }
        return false;
    };
    /**
        * 显示红包进度挂件
        * @param params
        */
    Utils.prototype.showVerticalRecommentPanel = function (params) {
        if (params === void 0) { params = null; }
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return null;
        }
        if (!this.isVerticalRecommentPanel())
            return null;
        if (this.config.otherconfig.verticalRecommentPanel) {
            var node = cc.instantiate(this.config.otherconfig.verticalRecommentPanel);
            if (node) {
                // if (this._redBagProgressWidget && cc.isValid(this._redBagProgressWidget)) {
                //     this._redBagProgressWidget.destroy();
                // }
                node.zIndex = 9999;
                var widget = node.getComponent(cc.Widget);
                if (params) {
                    if (params.group) {
                        node.group = params.group;
                    }
                    if (params.scale != null) {
                        node.scale = params.scale;
                    }
                    if (params.top != null) {
                        widget.isAlignTop = true;
                        widget.isAlignBottom = false;
                        widget.top = params.top;
                    }
                    else if (params.bottom != null) {
                        widget.isAlignTop = false;
                        widget.isAlignBottom = true;
                        widget.bottom = params.bottom;
                    }
                    if (params.left != null) {
                        widget.isAlignLeft = true;
                        widget.isAlignRight = false;
                        widget.left = params.left;
                    }
                    else if (params.right != null) {
                        widget.isAlignLeft = false;
                        widget.isAlignRight = true;
                        widget.right = params.right;
                    }
                    if (params.parent != null) {
                        node.parent = params.parent;
                    }
                    if (params.position != null) {
                        node.setPosition(CompatibleTool_1.default.position(params.position.x, params.position.y));
                    }
                }
                widget.updateAlignment();
                return node;
            }
        }
        else {
            exports.utils.showLog("warn:" + "未找到预制体 verticalRecommentPanel, 请查看CommonUtils组件上是否赋值！");
        }
        return null;
    };
    /**
     * 是否显示用户协议挂件
     */
    Utils.prototype.isShowPrivacyWidget = function () {
        if (this.Tool_Broswer)
            return true;
        if (this.getConfigByKey("is_privacy") == "true") {
            return true;
        }
        else {
            exports.utils.showLog("warn:" + "配置中没有is_privacy参数，更用户协议挂件组件不显示！");
        }
        return false;
    };
    /**
     * 显示用户协议挂件
     * @param params
     */
    Utils.prototype.showPrivacyWidget = function (params) {
        if (params === void 0) { params = null; }
        if (exports.utils.isShowPrivacyWidget()) {
            if (this.config.otherconfig.privacyWidget) {
                if (this._privacyWidget && cc.isValid(this._privacyWidget)) {
                    this._privacyWidget.destroy();
                }
                var node_1 = cc.instantiate(this.config.otherconfig.privacyWidget);
                this._privacyWidget = node_1;
                this._privacyWidget.zIndex = 9999;
                var widget = node_1.getComponent(cc.Widget);
                if (params) {
                    if (params.color) {
                        node_1.children[0].color = params.color;
                    }
                    if (params.group) {
                        node_1.group = params.group;
                    }
                    if (params.scale != null) {
                        node_1.scale = params.scale;
                    }
                    if (params.top != null) {
                        widget.isAlignTop = true;
                        widget.isAlignBottom = false;
                        widget.top = params.top;
                    }
                    else if (params.bottom != null) {
                        widget.isAlignTop = false;
                        widget.isAlignBottom = true;
                        widget.bottom = params.bottom;
                    }
                    if (params.left != null) {
                        widget.isAlignLeft = true;
                        widget.isAlignRight = false;
                        widget.left = params.left;
                    }
                    else if (params.right != null) {
                        widget.isAlignLeft = false;
                        widget.isAlignRight = true;
                        widget.right = params.right;
                    }
                    if (params.parent != null) {
                        node_1.parent = params.parent;
                    }
                }
                widget.updateAlignment();
                node_1.on(cc.Node.EventType.TOUCH_END, function () {
                    if (PlatUtils_1.default.IsNativeAndroid) {
                        exports.utils.Tool_Native && exports.utils.Tool_Native.showPrivacyAgreement();
                    }
                    else {
                        exports.utils.showPrivacyPanel({ is_widget_click: "true", group: node_1.group });
                    }
                }, this);
                return node_1;
            }
            else {
                exports.utils.showLog("warn:" + "隐私政策挂件预制体不存在！");
            }
        }
        else {
            exports.utils.showLog("warn:" + "不可显示更多游戏侧边栏");
        }
        return null;
    };
    /**
     * 隐藏隐私政策
     */
    Utils.prototype.hidePrivacyWidget = function () {
        if (this._privacyWidget && cc.isValid(this._privacyWidget)) {
            this._privacyWidget.destroy();
        }
    };
    /**
     * 是否显示用户隐私协议弹窗
     */
    Utils.prototype.isShowPrivacyPanel = function () {
        if (PlatUtils_1.default.IsHuaWei || PlatUtils_1.default.IsXiaoMi) {
            return true;
        }
        if (this.getConfigByKey("is_privacy_panel")) {
            if (this.getConfigByKey("is_privacy_panel") == "true") {
                return true;
            }
            else {
                exports.utils.showLog("warn:" + "is_privacy_panel参数为false，用户隐私政策弹窗组件不显示！");
            }
        }
        return false;
    };
    /**
     * 显示用户协议弹窗
     * @param params
     */
    Utils.prototype.showPrivacyPanel = function (params) {
        var _this = this;
        if (params === void 0) { params = null; }
        exports.utils.showLog("showPrivacyPanel>>>");
        var showPanel = function (showDesc) {
            if (_this.config.otherconfig.privacyPanel) {
                if (_this._privacyPanel && cc.isValid(_this._privacyPanel)) {
                    _this._privacyPanel.destroy();
                }
                var node = cc.instantiate(_this.config.otherconfig.privacyPanel);
                var yzUserPrivacyPanel = node.getComponent(YzUserPrivacyPanel_1.default);
                yzUserPrivacyPanel.showDesc = showDesc;
                _this._privacyPanel = node;
                _this._privacyPanel.zIndex = 9999;
                var widget = node.getComponent(cc.Widget);
                var subject = "深圳市优智信息技术有限公司";
                if (params && params.subject) {
                    subject = params.subject;
                }
                var content = cc.find("Panel/subject", node).getComponent(cc.Label).string;
                content = content.replace('subject', subject);
                cc.find("Panel/subject", node).getComponent(cc.Label).string = content;
                if (params) {
                    if (params.group) {
                        node.group = params.group;
                    }
                    if (params.scale != null) {
                        node.scale = params.scale;
                    }
                    if (params.top != null) {
                        widget.isAlignTop = true;
                        widget.isAlignBottom = false;
                        widget.top = params.top;
                    }
                    else if (params.bottom != null) {
                        widget.isAlignTop = false;
                        widget.isAlignBottom = true;
                        widget.bottom = params.bottom;
                    }
                    if (params.left != null) {
                        widget.isAlignLeft = true;
                        widget.isAlignRight = false;
                        widget.left = params.left;
                    }
                    else if (params.right != null) {
                        widget.isAlignLeft = false;
                        widget.isAlignRight = true;
                        widget.right = params.right;
                    }
                    if (params.parent != null) {
                        node.parent = params.parent;
                    }
                    else {
                        cc.find("Canvas").addChild(node, cc.macro.MAX_ZINDEX);
                    }
                }
                else {
                    cc.find("Canvas").addChild(node, cc.macro.MAX_ZINDEX);
                }
                widget.updateAlignment();
            }
            else {
                exports.utils.showLog("warn:" + "隐私政策弹窗预制体不存在！");
            }
        };
        if (params && params.is_widget_click) {
            showPanel(true);
        }
        else {
            var ysxy = YZ_LocalStorage_1.default.getItem(YZ_Constant_1.default.YZ_GAME_YSXY);
            if (ysxy) {
                exports.utils.emitPrivacyCloseEvent();
                exports.utils.showLog("已经同意过隐私协议，不显示隐私协议弹窗！");
                return;
            }
            exports.utils.registerServerDataLoadSuccessEvent(function () {
                showPanel();
            }, this);
        }
    };
    /**
     * 显示放大缩小动态
     * @param videoBtn 视频播放按钮
     * @param normalBtn 普通按钮
     * @param changeBtn 是否变换按钮位置
     * @param showHand 是否显示手势
     * @param location 按钮所属的页面位置
     * @returns
     */
    Utils.prototype.showScaleAction = function (videoBtn, normalBtn, changeBtn, showHand, location) {
        if (normalBtn === void 0) { normalBtn = null; }
        if (changeBtn === void 0) { changeBtn = true; }
        if (showHand === void 0) { showHand = true; }
        if (location === void 0) { location = YZ_Constant_1.BannerLocation.None; }
        if (changeBtn) {
            if (!cc.isValid(normalBtn) || !cc.isValid(videoBtn))
                return;
        }
        else {
            if (!cc.isValid(videoBtn))
                return;
        }
        if (CC_DEBUG) {
            this.ServerConfig.btn_show_scale = "true";
            this.ServerConfig.change_btn_position = "true";
            this.ServerConfig.over_page_change_btn = "false";
            this.ServerConfig.over_page_scale_btn = "false";
        }
        var scaleNode = videoBtn;
        if (this.getConfigByKey("change_btn_position") == "true" && changeBtn == true) {
            var changePosition = true;
            if (location == YZ_Constant_1.BannerLocation.Over) {
                if (this.getConfigByKey("over_page_change_btn") == "false") {
                    changePosition = false;
                    exports.utils.showLog("结算页面按钮配置不切换位置！");
                }
            }
            if (changePosition) {
                var rand = Math.floor(Math.random() * 2 + 1);
                var videoPos = videoBtn.position;
                var normalPos = normalBtn.position;
                if (rand % 2 == 0) {
                    normalBtn.position = videoPos;
                    videoBtn.position = normalPos;
                }
                else {
                    scaleNode = videoBtn;
                    normalBtn.position = normalPos;
                    videoBtn.position = videoPos;
                }
                scaleNode = normalBtn.position.y > videoBtn.position.y ? normalBtn : videoBtn;
            }
        }
        if (this.getConfigByKey("btn_show_scale") == "true") {
            if (location == YZ_Constant_1.BannerLocation.Over &&
                this.getConfigByKey("over_page_scale_btn") == "false") {
                exports.utils.showLog("结算页面按钮配置不缩放按钮！");
                return;
            }
            if (videoBtn) {
                videoBtn.stopAllActions();
                videoBtn.scale = 1;
            }
            if (normalBtn) {
                normalBtn.stopAllActions();
                normalBtn.scale = 1;
            }
            var action = cc.sequence(cc.scaleTo(this.runTime, this.maxScale), cc.scaleTo(this.runTime, this.minScale));
            scaleNode.runAction(action.repeatForever());
            if (showHand) {
                if (videoBtn) {
                    var child = videoBtn.parent.getChildByName("hand");
                    if (child) {
                        child.destroy();
                        child.removeFromParent();
                    }
                }
                if (normalBtn) {
                    var child = normalBtn.parent.getChildByName("hand");
                    if (child) {
                        child.destroy();
                        child.removeFromParent();
                    }
                }
                if (this.config.otherconfig.handPrefab) {
                    var hand = cc.instantiate(this.config.otherconfig.handPrefab);
                    hand.x = scaleNode.x + scaleNode.width / 2;
                    hand.y = scaleNode.y - 135;
                    scaleNode.parent.addChild(hand, cc.macro.MAX_ZINDEX + 1, "hand");
                }
            }
        }
    };
    /**
     * 上报原生广告点击
     */
    Utils.prototype.reportNativeAdClick = function () {
        if ((new Date().getTime() - this._lastReportAdTime) / 1000 > 3) {
            this._lastReportAdTime = new Date().getTime();
            cc.game.emit(YZ_Constant_1.default.YZ_NativeAdClick);
            this.showLog("上报原生广告点击！");
        }
        else {
            this.showLog("上报原生广告点击间隔时间小于3秒！");
        }
    };
    /**
     * 是否显示结算页面广告点击按钮
     */
    Utils.prototype.canShowOverPageAdBtn = function () {
        if (this.ServerConfig && this.ServerConfig.show_over_page_ad_btn && this.ServerConfig.show_over_page_ad_btn == "true") {
            return true;
        }
        return false;
    };
    /**
     * 显示小游戏官方互推banner
     */
    Utils.prototype.showRecBanner = function () {
        if (!exports.utils.adManager.checkShowAdTime()) {
            exports.utils.showLog("显示广告条时间未达限制！");
            return;
        }
        this.cur_tool && this.cur_tool.showRecBanner && this.cur_tool.showRecBanner();
    };
    /**
     * 显示小游戏官方互推九宫格
     */
    Utils.prototype.showGamePortal = function () {
        if (!exports.utils.adManager.checkShowAdTime()) {
            exports.utils.showLog("显示广告条时间未达限制！");
            return;
        }
        this.cur_tool && this.cur_tool.showGamePortal && this.cur_tool.showGamePortal();
    };
    Utils.prototype.showVivoGamePortalWidget = function (params) {
        if (params === void 0) { params = null; }
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return;
        }
        if (!PlatUtils_1.default.IsVIVO)
            return;
        if (!exports.utils.adManager.checkShowAdTime()) {
            exports.utils.showLog("显示广告条时间未达限制！");
            return;
        }
        if (this.getConfigByKey("vivo_game_protal") === "true") {
            if (params && params.location && (this.getConfigByKey("vivo_game_protal_locations").indexOf(params.location) < 0)) {
                exports.utils.showLog("当前位置服务器未配置显示VIVO九宫格挂件！");
                this.Tool_Vivo && this.Tool_Vivo.hideGamePortal();
                return;
            }
            this.Tool_Vivo && this.Tool_Vivo.showGamePortal(params.top);
        }
        else {
            exports.utils.showLog("服务器未配置显示VIVO九宫格挂件！");
        }
    };
    /**
     * 隐藏VIVO九宫格挂件
     * @param params
     */
    Utils.prototype.hideVivoGamePortalWidget = function () {
        this.Tool_Vivo && this.Tool_Vivo.hideGamePortal();
    };
    /*
    **
    * 显示OPPO互推抽屉盒子广告：
    * 只能显示在左侧，设置top值
    * @param params
    * ```
    * {
    * top:number       // 距离屏幕顶部的距离
    * }
    * ```
    */
    Utils.prototype.showOppoGameDrawerAdWidget = function (params) {
        if (params === void 0) { params = null; }
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return;
        }
        if (!PlatUtils_1.default.IsOPPO)
            return;
        if (!exports.utils.adManager.checkShowAdTime()) {
            exports.utils.showLog("显示广告条时间未达限制！");
            return;
        }
        if (CC_DEBUG) {
            this.ServerConfig.oppo_game_drawer = "true";
            this.ServerConfig.oppo_game_drawer_locations = "1, 2, 3, 4,5,6";
        }
        if (this.getConfigByKey("oppo_game_drawer") === "true") {
            if (params && params.location && (this.getConfigByKey("oppo_game_drawer_locations").indexOf(params.location) < 0)) {
                exports.utils.showLog("当前位置服务器未配置显示OPPO互推抽屉盒子！");
                this.oppoTool && this.oppoTool.hideGameDrawerAd();
                return;
            }
            // if (params && params.location && this._curGameDrawerAdLocation && this._curGameDrawerAdLocation != params.location) {
            //     this.oppoTool && this.oppoTool.hideGameDrawerAd();
            // }
            this.oppoTool && this.oppoTool.showGameDrawerAd(params);
        }
        else {
            exports.utils.showLog("服务器未配置显示OPPO互推抽屉盒子！");
        }
    };
    /**
     * 隐藏OPPO互推抽屉盒子广告
     * @param params
     */
    Utils.prototype.hideOppoGameDrawerAdWidget = function () {
        this.oppoTool && this.oppoTool.hideGameDrawerAd();
    };
    /*
    **
    * 显示OPPO互推横幅广告：
    * @param params
    * ```
    * {
    * top:number       // 距离屏幕顶部的距离
    * }
    * ```
    */
    Utils.prototype.showOppoRecBanner = function (params) {
        if (params === void 0) { params = null; }
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return;
        }
        if (!PlatUtils_1.default.IsOPPO)
            return;
        if (!exports.utils.adManager.checkShowAdTime()) {
            exports.utils.showLog("显示广告条时间未达限制！");
            return;
        }
        if (CC_DEBUG) {
            this.ServerConfig.oppo_rec_banner = "true";
            this.ServerConfig.oppo_rec_banner_locations = "1, 2, 3, 4";
        }
        if (this.getConfigByKey("oppo_rec_banner") === "true") {
            if (params && params.location && (this.getConfigByKey("oppo_rec_banner_locations").indexOf(params.location) < 0)) {
                exports.utils.showLog("当前位置服务器未配置显示OPPO互推Banner！");
                this.oppoTool && this.oppoTool.hideOppoRecBanner();
                return;
            }
            this.oppoTool && this.oppoTool.showOppoNewRecBanner(params);
        }
        else {
            exports.utils.showLog("服务器未配置显示OPPO互推Banner！");
        }
    };
    /**
     * 隐藏OPPO互推横幅广告
     * @param params
     */
    Utils.prototype.hideOppoRecBanner = function () {
        this.oppoTool && this.oppoTool.hideOppoRecBanner();
    };
    /**
     * 实名认证
     */
    Utils.prototype.realNameAuth = function (code, name, callBack) {
        exports.utils.showLog("\u8FDB\u884C\u5B9E\u540D\u5236\u8BA4\u8BC1\uFF1A#code=" + code + " #name=" + name);
        exports.utils.cur_tool && exports.utils.cur_tool.realNameAuth && exports.utils.cur_tool.realNameAuth(code, name, callBack);
    };
    /**
     * 退出游戏
     */
    Utils.prototype.GameExit = function () {
        this.cur_tool && this.cur_tool.GameExit && this.cur_tool.GameExit();
    };
    /**
     * 显示实名制认证弹窗
     * @param params
     */
    Utils.prototype.showYzRealNameAuthPanel = function (params) {
        if (params === void 0) { params = null; }
        exports.utils.showLog("显示实名制认证弹窗!");
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "组件配置未初始化!");
            return;
        }
        if (this.getRealNameAuthLocalData() && this.getRealNameAuthLocalData() == "1") {
            this._isRealNameAuth = true;
        }
        if (this._isRealNameAuth) {
            exports.utils.showLog("已经进行过实名制认证,不显示弹窗！");
            this.emitRealNameAuthCloseEvent();
            return;
        }
        var showTime = -1;
        if (PlatUtils_1.default.IsNativeAndroid || PlatUtils_1.default.IsNativeIOS) {
            showTime = 0;
        }
        if (this.getConfigByKey("show_real_name_auth")) {
            showTime = parseInt(this.getConfigByKey("show_real_name_auth"));
        }
        if (showTime == -1) {
            exports.utils.showLog("服务器控制不显示实名制弹窗！");
            this.emitRealNameAuthCloseEvent();
            return;
        }
        if (PlatUtils_1.default.IsNativeAndroid) {
            this.scheduleOnce(function () {
                exports.utils.Tool_Native.showRealNameAuthPanel(showTime + "");
            }, showTime);
            return;
        }
        if (this.config.otherconfig.yzRealNameAuthPanel) {
            if (this._yzRealNameAuthPanel && cc.isValid(this._yzRealNameAuthPanel)) {
                this._yzRealNameAuthPanel.destroy();
            }
            var node_2 = cc.instantiate(this.config.otherconfig.yzRealNameAuthPanel);
            if (showTime == -2) {
                //达到防沉迷要求，直接提示下线
                node_2.getComponent(YzRealNameAuthPanel_1.default)._isOffLine = true;
                showTime = 0;
            }
            this._yzRealNameAuthPanel = node_2;
            this._yzRealNameAuthPanel.zIndex = 9999;
            if (params) {
                if (params.group) {
                    node_2.group = params.group;
                }
                if (params.scale != null) {
                    node_2.scale = params.scale;
                }
                this.scheduleOnce(function () {
                    if (params.parent != null) {
                        node_2.parent = params.parent;
                    }
                    else {
                        cc.find("Canvas").addChild(node_2);
                    }
                }, showTime * 1000);
            }
            else {
                this.scheduleOnce(function () {
                    cc.find("Canvas").addChild(node_2);
                }, showTime * 1000);
            }
            return node_2;
        }
        exports.utils.showLog("warn:" + "实名制认证弹窗预制体不存在！");
        return null;
    };
    Utils.prototype.setRealNameAuthLocalData = function (value) {
        YZ_LocalStorage_1.default.setItem('yz_game_real_name', "" + value);
    };
    Utils.prototype.getRealNameAuthLocalData = function () {
        var realName = YZ_LocalStorage_1.default.getItem('yz_game_real_name');
        if (!realName) {
            realName = 0;
        }
        return realName;
    };
    /**
     * 通过字段名称获取服务器对应的配置
     * @param key 字段名称
     * @returns 服务器有配置则返回该配置，无则返回空字符串
     */
    Utils.prototype.getConfigByKey = function (key) {
        if (!this._isConfigInit) {
            exports.utils.showLog("warn:" + "本地数据未初始化!");
            return "";
        }
        if (key && this.ServerConfig && key in this.ServerConfig) {
            return this.ServerConfig[key];
        }
        this.showLog("warn:\u5B57\u6BB5\uFF1A" + key + " \u672A\u914D\u7F6E\uFF01");
        return "";
    };
    /**
     * 登录
     * @param successCallFunc 成功回调
     * @param failCallFunc 失败回调
     */
    Utils.prototype.login = function (successCallFunc, failCallFunc) {
        var _this = this;
        this.showLog("=====login====");
        if (successCallFunc) {
            if (PlatUtils_1.default.IsDouyin) {
                // if (YZ_LocalStorage.getItem("yz_login", "false") == "true") {
                //     successCallFunc && successCallFunc();
                //     return;
                // }
            }
            cc.game.targetOff(YZ_Constant_1.default.ST_LOGIN_SUCCESS);
            cc.game.on(YZ_Constant_1.default.ST_LOGIN_SUCCESS, successCallFunc, this);
        }
        if (failCallFunc) {
            var newFailFunc = function () {
                failCallFunc();
                _this.showLoginPanel();
            };
            cc.game.targetOff(YZ_Constant_1.default.ST_LOGIN_FAIL);
            cc.game.on(YZ_Constant_1.default.ST_LOGIN_FAIL, newFailFunc, this);
        }
        else {
            var newFailFunc = function () {
                _this.showLoginPanel();
            };
            cc.game.targetOff(YZ_Constant_1.default.ST_LOGIN_FAIL);
            cc.game.on(YZ_Constant_1.default.ST_LOGIN_FAIL, newFailFunc, this);
        }
        if (this.cur_tool && this.cur_tool.login) {
            this.cur_tool.login();
        }
        else {
            cc.game.targetOff(YZ_Constant_1.default.ST_LOGIN_SUCCESS);
            cc.game.targetOff(YZ_Constant_1.default.ST_LOGIN_FAIL);
            successCallFunc && successCallFunc();
        }
    };
    /**
     * 显示登录弹窗
     */
    Utils.prototype.showLoginPanel = function () {
        if (this.config.otherconfig.yzLoginPanel) {
            var node = cc.instantiate(this.config.otherconfig.yzLoginPanel);
            if (node) {
                if (this._yzLoginPanel && cc.isValid(this._yzLoginPanel)) {
                    this._yzLoginPanel.destroy();
                }
                this._yzLoginPanel = node;
                cc.find("Canvas").addChild(node, cc.macro.MAX_ZINDEX);
                return node;
            }
        }
        else {
            exports.utils.showLog("warn:" + "未找到预制体 YzLoginPanel, 请查看CommonUtils组件上是否赋值！");
        }
    };
    /**
     * 生成UUID
     * @returns uuid
     */
    Utils.prototype.generateUUID = function () {
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now(); //use high-precision timer if available
        }
        var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    /**
     *
     * @param lasttime
     */
    Utils.prototype.checkOneDay = function (lasttime) {
        var lastTime = parseInt(lasttime);
        var date = new Date(lastTime);
        var year = date.getFullYear();
        var mouth = date.getMonth();
        var day = date.getDay();
        var date1 = new Date();
        var nowyear = date1.getFullYear();
        var nowmouth = date1.getMonth();
        var nowday = date1.getDay();
        if (year == nowyear && mouth == nowmouth && day == nowday) { //年月日都相同则证明是同一天
            return true;
        }
        else {
            return false;
        }
    };
    /**
     *
     * @param lasttime
     * @returns
     */
    Utils.prototype.checkWeeHours = function (lasttime) {
        console.log("检查是否过了记录时间的凌晨:");
        var lastTime = parseInt(lasttime);
        var ret = false;
        var today = this.checkOneDay(lasttime);
        //检查前1天领取时间的时、分、秒
        var date = new Date(lastTime);
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        //记录的时间晚上12点的毫秒数
        var deltaTime = (24 - hour) * 60 * 60 - minute * 60 - second;
        var targetTime = lastTime + deltaTime * 1000;
        //现在的时间的毫秒数
        var nowTime = Date.now();
        if (!today) { //判断记录时间是否在当天内
            ret = nowTime > targetTime ? true : false; //若 现在的时间的秒数 > 记录的时间晚上12点的秒数 则 为true
            console.log("检查是否过了记录时间的凌晨:" + ret);
        }
        return ret;
    };
    __decorate([
        property({ displayName: "组件版本", readonly: true })
    ], Utils.prototype, "utilsVersion", null);
    __decorate([
        property({ displayName: "测试本地数据", tooltip: "勾选此选项则使用本地配置，否则会请求服务器配置!" })
    ], Utils.prototype, "DebugLoacalConfig", void 0);
    __decorate([
        property({ displayName: "显示日志框", tooltip: "勾选此选项则会显示日志框，用于调试!" })
    ], Utils.prototype, "showLogView", void 0);
    __decorate([
        property({ type: CommonConfig_1.default, displayName: "配置信息" })
    ], Utils.prototype, "config", void 0);
    Utils = __decorate([
        ccclass
    ], Utils);
    return Utils;
}(cc.Component));
exports.default = Utils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY29tbW9uLXBsdWdpblxcU2NyaXB0c1xcVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFDcEMsK0NBQTREO0FBQzVELDJDQUFzQztBQUN0Qyx5Q0FBb0M7QUFDcEMsK0NBQXNDO0FBQ3RDLGlEQUE0QztBQUM1QyxtREFBOEM7QUFDOUMsK0NBQTBDO0FBQzFDLG1EQUE4QztBQUM5Qyw2Q0FBb0c7QUFDcEcsMkNBQXNDO0FBRXRDLDZDQUF3QztBQUN4QyxtREFBOEM7QUFDOUMsdUNBQWtDO0FBQ2xDLDJDQUFzQztBQUN0Qyx5REFBb0Q7QUFDcEQsK0NBQTBDO0FBQzFDLDZDQUF3QztBQUN4QywrQ0FBMEM7QUFDMUMsK0NBQTBDO0FBQzFDLHFEQUFnRDtBQUNoRCwrQ0FBMEM7QUFDMUMsK0NBQTBDO0FBQzFDLCtEQUEwRDtBQUMxRCxtREFBOEM7QUFDOUMsbURBQThDO0FBQzlDLHFEQUFnRDtBQUNoRCx1REFBa0Q7QUFDbEQsNkRBQXdEO0FBQ3hELDJEQUFzRDtBQUN0RCxxREFBZ0Q7QUFFaEQseURBQW9EO0FBRXBELFlBQVk7QUFDWixJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMvQyxJQUFNLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQTtBQUNwQyxZQUFZO0FBQ1osMENBQTBDO0FBR3BDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRWpDLFFBQUEsS0FBSyxHQUFVLElBQUksQ0FBQztBQUUvQixJQUFNLFlBQVksR0FBVyxPQUFPLENBQUM7QUFHckM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUE2MElDO1FBcjBJRyx1QkFBaUIsR0FBWSxLQUFLLENBQUM7UUFHbkMsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFJN0IsWUFBTSxHQUFpQixJQUFJLENBQUM7UUFHNUI7O1dBRUc7UUFDSCxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFjLElBQUksQ0FBQztRQUVuQyxpQkFBVyxHQUFlLElBQUksQ0FBQztRQUcvQjs7V0FFRztRQUNJLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBTWhDOztXQUVHO1FBQ0ksaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFFcEM7O1dBRUc7UUFDSSxvQkFBYyxHQUFhLElBQUksQ0FBQztRQUV2Qzs7V0FFRztRQUNJLHFCQUFlLEdBQWEsSUFBSSxDQUFDO1FBRXhDOztXQUVHO1FBQ0ksaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFL0I7OztXQUdHO1FBQ0ksc0JBQWdCLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFHckM7O1dBRUc7UUFDSSwyQkFBcUIsR0FBVyxDQUFDLENBQUM7UUFHekM7OztXQUdHO1FBQ0kseUNBQW1DLEdBQVcsQ0FBQyxDQUFDO1FBRXZEOztXQUVHO1FBQ0ksMkJBQXFCLEdBQVcsQ0FBQyxDQUFDO1FBR3pDOzs7V0FHRztRQUNJLHlDQUFtQyxHQUFXLENBQUMsQ0FBQztRQUd2RDs7V0FFRztRQUNJLDZCQUF1QixHQUFhLElBQUksQ0FBQztRQUdoRDs7V0FFRztRQUNJLCtCQUF5QixHQUFhLElBQUksQ0FBQztRQUdsRDs7V0FFRztRQUNJLDZCQUF1QixHQUFhLElBQUksQ0FBQztRQUVoRDs7V0FFRztRQUNJLGtDQUE0QixHQUFhLElBQUksQ0FBQztRQUVyRDs7VUFFRTtRQUNLLGlDQUEyQixHQUFhLElBQUksQ0FBQztRQUVwRDs7V0FFRztRQUNJLGlDQUEyQixHQUFhLElBQUksQ0FBQztRQUdwRCxlQUFlO1FBQ1Isc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQ3BDOztXQUVHO1FBQ0ssbUJBQWEsR0FBUSxJQUFJLENBQUM7UUFVbEMsZUFBUyxHQUFhLElBQUksQ0FBQztRQVEzQixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFRaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBU2hDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQVdoQyxpQkFBVyxHQUFrQixJQUFJLENBQUM7UUFRbEMsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBUXBDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQVFoQyxrQkFBWSxHQUFtQixJQUFJLENBQUM7UUFRcEMsY0FBUSxHQUFlLElBQUksQ0FBQztRQVE1QixrQkFBWSxHQUFtQixJQUFJLENBQUM7UUFRcEMsZUFBUyxHQUFnQixJQUFJLENBQUM7UUFROUIsY0FBUSxHQUFlLElBQUksQ0FBQztRQVE1QixxQkFBZSxHQUFzQixJQUFJLENBQUM7UUFPMUMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBUWhDLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBUTlCLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQVFoQyxtQkFBYSxHQUFvQixJQUFJLENBQUM7UUFRdEMsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBUXBDLG9CQUFjLEdBQXFCLElBQUksQ0FBQztRQU94QyxxQkFBZSxHQUFzQixJQUFJLENBQUM7UUFVMUMsWUFBWTtRQUNaLG1CQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGFBQWE7UUFDYixtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQjs7V0FFRztRQUNILG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBbXBCM0IsMEJBQW9CLEdBQVksS0FBSyxDQUFDO1FBNEh0QywyQkFBcUIsR0FBWSxJQUFJLENBQUM7UUFvRnRDLHlCQUFtQixHQUFZLElBQUksQ0FBQztRQXdNcEMscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFxTGhDLHlCQUFtQixHQUFRLElBQUksQ0FBQztRQWdNaEMsOEJBQXdCLEdBQVEsSUFBSSxDQUFDO1FBZ0ZyQyxtQkFBYSxHQUFZLElBQUksQ0FBQztRQXlGOUIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUEwSGhDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUE2Q3pCLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUNuQyxpQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUN4QixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUEwSGpDLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFrRGpCLG1CQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9COztXQUVHO1FBQ0gsc0JBQWdCLEdBQVksS0FBSyxDQUFDO1FBa01sQyxzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFDN0IsNkJBQXVCLEdBQVksS0FBSyxDQUFDLENBQUMsa0JBQWtCO1FBd0M1RDs7V0FFRztRQUNJLHlCQUFtQixHQUFXLENBQUMsQ0FBQztRQXdQdkMsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBNmFqQyx1QkFBaUIsR0FBWSxJQUFJLENBQUM7UUE0RWxDLDJCQUFxQixHQUFZLElBQUksQ0FBQztRQTJFdEMsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBMkJqQyxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFvRGpDLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUNuQyxpQ0FBMkIsR0FBVyxDQUFDLENBQUM7UUErT3hDLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBb0cvQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQXdGOUIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUVyQixjQUFRLEdBQVcsR0FBRyxDQUFDO1FBRXZCLGFBQU8sR0FBVyxHQUFHLENBQUM7UUErR3RCLFlBQVk7UUFDWix1QkFBaUIsR0FBVyxDQUFDLENBQUM7UUFvRDlCOzs7Ozs7OztXQVFHO1FBQ0gsZ0NBQTBCLEdBQVcsRUFBRSxDQUFDO1FBcUN4Qyw4QkFBd0IsR0FBVyxFQUFFLENBQUM7UUE0SHRDLHFCQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLDBCQUFvQixHQUFZLElBQUksQ0FBQztRQXVLckMsbUJBQWEsR0FBWSxJQUFJLENBQUM7O0lBdUZsQyxDQUFDO0lBMTBJRyxzQkFBVywrQkFBWTthQUF2QjtZQUNJLE9BQU8sWUFBWSxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBNEhELHNCQUFXLDZCQUFVO2FBQXJCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ25CLGFBQUssQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUN4QztZQUVELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDJCQUFRO2FBQW5CO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLGFBQUssQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUN0QztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDJCQUFRO2FBQW5CO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xCLGFBQUssQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUN0QztZQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDJCQUFRO2FBQW5CO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xCLGFBQUssQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUN0QztZQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUlELHNCQUFXLDJCQUFRO2FBQW5CO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xCLGFBQUssQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUN0QztZQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQU1ELHNCQUFXLDZCQUFVO2FBQXJCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ25CLGFBQUssQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUN2QztZQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDhCQUFXO2FBQXRCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3BCLGFBQUssQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUN4QztZQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDRCQUFTO2FBQXBCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xCLGFBQUssQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUN0QztZQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDhCQUFXO2FBQXRCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3BCLGFBQUssQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUN4QztZQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDBCQUFPO2FBQWxCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hCLGFBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUNwQztZQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDhCQUFXO2FBQXRCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3BCLGFBQUssQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUN4QztZQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDJCQUFRO2FBQW5CO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLGFBQUssQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUNyQztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDBCQUFPO2FBQWxCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hCLGFBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUNwQztZQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLGlDQUFjO2FBQXpCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3ZCLGFBQUssQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUN2QztZQUNELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDRCQUFTO2FBQXBCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xCLGFBQUssQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUN0QztZQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDJCQUFRO2FBQW5CO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLGFBQUssQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUNyQztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDRCQUFTO2FBQXBCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLGFBQUssQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUNyQztZQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLCtCQUFZO2FBQXZCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3JCLDhCQUE4QjthQUNqQztZQUNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDhCQUFXO2FBQXRCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3BCLGFBQUssQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUN4QztZQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLGdDQUFhO2FBQXhCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3RCLGFBQUssQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQzthQUMxQztZQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLGlDQUFjO2FBQXpCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3ZCLGFBQUssQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQzthQUMzQztZQUNELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQWNEOzs7T0FHRztJQUNLLDJCQUFXLEdBQW5CO1FBQUEsaUJBdUVDO1FBdEVHLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyxDQUFDO1lBQzlDLE9BQU87U0FDVjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFO1lBQ3JDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BFLGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQzlCLElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksbUJBQVMsQ0FBQyxlQUFlLEVBQUU7b0JBQzNCLG9CQUFvQjtvQkFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTt3QkFDcEIsYUFBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDNUI7aUJBQ0o7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xELGlCQUFpQjtvQkFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDeEI7Z0JBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFHcEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG1CQUFTLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFFdEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLENBQUM7aUJBQzNDO2dCQUNELElBQUksbUJBQVMsQ0FBQyxNQUFNLEVBQUU7b0JBQ2xCLFlBQVk7b0JBQ1osUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUN0QjtnQkFDRCxhQUFLLENBQUMsWUFBWSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO2dCQUN4QyxhQUFLLENBQUMsdUJBQXVCLENBQUM7b0JBRTFCLElBQUksYUFBSyxDQUFDLFlBQVksRUFBRTt3QkFFcEIsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksTUFBTSxDQUFDO3dCQUN2RSxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLE1BQU0sQ0FBQzt3QkFDN0UsSUFBSSxLQUFJLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLEVBQUU7NEJBQy9DLGFBQUssQ0FBQyxZQUFZLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsQ0FBQzt5QkFDcEY7d0JBQ0QsSUFBSSxLQUFJLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLEVBQUU7NEJBQy9DLGFBQUssQ0FBQyxZQUFZLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsQ0FBQzt5QkFDcEY7d0JBRUQsSUFBSSxLQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7NEJBQ3ZDLGFBQUssQ0FBQyxZQUFZLENBQUMsZUFBZSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt5QkFDOUU7cUJBQ0o7b0JBQ0QsSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTt3QkFDbEIsWUFBWTt3QkFDWixFQUFFLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtxQkFDdEQ7b0JBRUQsNEJBQTRCO29CQUM1QixpREFBaUQ7b0JBQ2pELElBQUk7Z0JBRVIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO2FBRVg7aUJBQU07Z0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLENBQUMsQ0FBQzthQUNqRDtTQUNKO2FBQU07WUFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxvQ0FBb0MsQ0FBQyxDQUFDO1NBQ2pFO0lBQ0wsQ0FBQztJQUVPLGlDQUFpQixHQUF6QixVQUEwQixJQUFZO1FBQ2xDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNILE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQUVELHNCQUFNLEdBQU47UUFFSSxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxhQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWIsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxXQUFXO1lBQ1gsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQyxVQUFVO1FBQ1YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQy9CO1NBQ0o7SUFDTCxDQUFDO0lBRU8seUJBQVMsR0FBakIsVUFBa0IsSUFBWTtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLG1CQUFTLENBQUMsZUFBZSxFQUFFO1lBQ25ELGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLE9BQU87U0FDVjtRQUVELElBQUksbUJBQVMsQ0FBQyxlQUFlLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHdCQUFjLEVBQUUsQ0FBQztZQUN6QyxnQ0FBZ0M7U0FDbkM7YUFBTSxJQUFJLG1CQUFTLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxvQkFBVSxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7YUFBTSxJQUFJLG1CQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxzQkFBUSxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7YUFBTSxJQUFJLG1CQUFTLENBQUMsT0FBTyxFQUFFO1lBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx1QkFBYSxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7YUFBTSxJQUFJLG1CQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxzQkFBWSxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUI7YUFBTSxJQUFJLG1CQUFTLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSx3QkFBYyxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7YUFBTSxJQUFJLG1CQUFTLENBQUMsSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxvQkFBVSxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7YUFBTSxJQUFJLG1CQUFTLENBQUMsS0FBSyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBVyxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7YUFBTSxJQUFJLG1CQUFTLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSx3QkFBYyxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7YUFBTSxJQUFJLG1CQUFTLENBQUMsSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxvQkFBVSxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7YUFBTSxJQUFJLG1CQUFTLENBQUMsT0FBTyxFQUFFO1lBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSwyQkFBaUIsRUFBRSxDQUFDO1lBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25DO2FBQU0sSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksc0JBQVksRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO2FBQU0sSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRTtZQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQVcsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO2FBQU0sSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksc0JBQVksRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO2FBQU0sSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksc0JBQVksRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO2FBQU0sSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksc0JBQVksRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO2FBQU0sSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksc0JBQVksRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO2FBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsRUFBRTtZQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksd0JBQWMsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO2FBQU0sSUFBSSxtQkFBUyxDQUFDLFVBQVUsRUFBRTtZQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksMEJBQWdCLEVBQUUsQ0FBQztZQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQzthQUFNLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLDJCQUFpQixFQUFFLENBQUM7WUFDL0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7YUFBTSxJQUFJLG1CQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSx5QkFBZSxFQUFFLENBQUM7WUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBR0Q7Ozs7T0FJRztJQUNJLHlCQUFTLEdBQWhCLFVBQWlCLFFBQWtCLEVBQUUsS0FBYTtRQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsUUFBUSxFQUFFLENBQUM7YUFDZDtRQUNMLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNkLENBQUM7SUFFRDs7O1FBR0k7SUFDRyxxQkFBSyxHQUFaLFVBQWEsUUFBeUI7UUFBekIseUJBQUEsRUFBQSxlQUF5QjtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNyQyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3pFLENBQUM7SUFHRDs7T0FFRztJQUNJLDJCQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDckMsT0FBTztTQUNWO1FBRUQsSUFBSSxtQkFBUyxDQUFDLGVBQWUsRUFBRTtZQUMzQixFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLDJCQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDckMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlFLENBQUM7SUFFRDs7T0FFRztJQUNJLHlCQUFTLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDckMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzFFLENBQUM7SUFFRDs7T0FFRztJQUNJLDRCQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDckMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRTtZQUMzRSxPQUFPO2dCQUNILEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUN6QyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVzthQUNoRCxDQUFBO1NBQ0o7YUFBTTtZQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDekIsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSxxQ0FBcUIsR0FBNUI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNyQyxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDNUYsT0FBTztnQkFDSCxtQkFBbUIsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Z0JBQ2hELFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7YUFDM0MsQ0FBQztTQUNMO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7T0FZRztJQUNJLGtDQUFrQixHQUF6QixVQUEwQixJQUFTLEVBQUUsUUFBeUI7UUFBekIseUJBQUEsRUFBQSxlQUF5QjtRQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNyQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLG1CQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3BCLElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkUsT0FBTztpQkFDVjtnQkFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMzQyxJQUFJLFFBQVEsRUFBRTt3QkFDVixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ2xCO29CQUNELE9BQU87aUJBQ1Y7YUFDSjtTQUNKO2FBQU0sSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDMUQ7aUJBQU07Z0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLFFBQVEsRUFBRTtvQkFDVixRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ25CO2FBQ0o7U0FDSjthQUFNLElBQUksbUJBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDcEIsYUFBSyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzdEO2lCQUFNO2dCQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxRQUFRLEVBQUU7b0JBQ1YsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNuQjthQUNKO1NBQ0o7YUFBTSxJQUFJLG1CQUFTLENBQUMsZUFBZSxFQUFFO1lBQ2xDLElBQUksSUFBSSxFQUFFO2dCQUNOLGFBQUssQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDcEU7aUJBQU07Z0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLFFBQVEsRUFBRTtvQkFDVixRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ25CO2FBQ0o7U0FDSjthQUFNLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDOUIsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN0RDtpQkFBTTtnQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ3RDLElBQUksUUFBUSxFQUFFO29CQUNWLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbkI7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksMkNBQTJCLEdBQWxDO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDckMsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxJQUFJLG1CQUFTLENBQUMsUUFBUSxJQUFJLG1CQUFTLENBQUMsZUFBZSxJQUFJLG1CQUFTLENBQUMsV0FBVyxJQUFJLG1CQUFTLENBQUMsT0FBTyxFQUFFO1lBQy9GLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7YUFBTSxJQUFJLG1CQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsRDthQUFNLElBQUksbUJBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLGFBQWEsQ0FBQztTQUN4RzthQUFNLElBQUksbUJBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDdkIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHVCQUFPLEdBQWQsVUFBZSxHQUFXO1FBRXRCLElBQUksYUFBSyxDQUFDLFlBQVksRUFBRTtZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVEOztPQUVHO0lBQ0ksb0NBQW9CLEdBQTNCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDckMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELElBQUksbUJBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDO1NBQ3pDO2FBQU0sSUFBSSxtQkFBUyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7U0FDeEM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQ0FBaUIsR0FBeEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNyQyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFO1lBQ2xELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzVDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksOEJBQWMsR0FBckIsVUFBc0IsUUFBa0I7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDckMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxpQ0FBaUIsR0FBeEIsVUFBeUIsR0FBVyxFQUFFLFFBQWtCO1FBQ3BELDZCQUE2QjtRQUM3Qiw0Q0FBNEM7UUFDNUMsY0FBYztRQUNkLElBQUk7UUFFSixJQUFJLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQy9CLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUksT0FBTztRQUM5QixJQUFJLFVBQVUsR0FBVyxHQUFHLENBQUMsQ0FBQSw0R0FBNEc7UUFDekksYUFBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDNUIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1gsR0FBRyxDQUFDLGtCQUFrQixHQUFHO1lBQ3JCLGFBQUssQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9FLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7Z0JBQ3JCLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7b0JBQ3ZDLElBQUksZ0JBQWdCLEVBQUU7d0JBQ2xCLGlGQUFpRjt3QkFDakYsaUVBQWlFO3dCQUNqRSxXQUFXO3dCQUNYLGdEQUFnRDt3QkFDaEQsSUFBSTt3QkFDSixnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO3FCQUM1QztpQkFDSjtxQkFBTTtvQkFDSCxJQUFJLGdCQUFnQixFQUFFO3dCQUNsQixnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7cUJBQy9CO2lCQUNKO2FBQ0o7UUFDTCxDQUFDLENBQUE7UUFDRCxHQUFHLENBQUMsU0FBUyxHQUFHO1lBQ1osYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QixJQUFJLGdCQUFnQixFQUFFO2dCQUNsQixnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDL0I7UUFDTCxDQUFDLENBQUE7UUFDRCxHQUFHLENBQUMsT0FBTyxHQUFHLFVBQVUsR0FBRztZQUN2QixhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDbEIsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQy9CO1FBQ0wsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUVELDBCQUFVLEdBQVYsVUFBVyxPQUFPO1FBQ2QsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QyxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDMUcsT0FBTyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCwwQkFBVSxHQUFWLFVBQVcsVUFBVTtRQUNqQixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0MsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzlHLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNELENBQUM7SUFFRDs7T0FFRztJQUNILCtCQUFlLEdBQWYsVUFBZ0IsR0FBVztRQUN2Qiw0Q0FBNEM7UUFFNUMsSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTtZQUNsQixZQUFZO1lBQ1osR0FBRyxHQUFHLEdBQUcsSUFBRyxzQkFBb0IsYUFBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxpQ0FBNEIsYUFBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLGFBQVEsYUFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLGdCQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxzQkFBaUIsYUFBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxtQkFBYyxhQUFLLENBQUMsUUFBUSxDQUFDLFVBQVksQ0FBQSxDQUFDO1NBQzlRO2FBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsRUFBRTtZQUMzQixHQUFHLEdBQUcsR0FBRyxJQUFHLHNCQUFvQixhQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLG1DQUE4QixhQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsYUFBUSxhQUFLLENBQUMsWUFBWSxDQUFDLFNBQVcsQ0FBQSxDQUFDO1NBQzdKO2FBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsRUFBRTtZQUMzQixHQUFHLEdBQUcsR0FBRyxJQUFHLHNCQUFvQixhQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLG1DQUE4QixhQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsYUFBUSxhQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsZ0JBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLG9CQUFlLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxzQkFBaUIsYUFBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBUyxDQUFBLENBQUM7U0FDOVI7YUFBTSxJQUFJLG1CQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3pCLEdBQUcsR0FBRyxHQUFHLElBQUcsc0JBQW9CLGFBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssaUNBQTRCLGFBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxhQUFRLGFBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxnQkFBVyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sc0JBQWlCLGFBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQVMsQ0FBQSxDQUFBO1NBQ3RPO2FBQU0sSUFBSSxtQkFBUyxDQUFDLEtBQUssRUFBRTtZQUN4QixHQUFHLEdBQUcsR0FBRyxJQUFHLHNCQUFvQixhQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLHNDQUFpQyxhQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsYUFBUSxhQUFLLENBQUMsU0FBUyxDQUFDLFNBQVcsQ0FBQSxDQUFBO1NBQ3RKO2FBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsRUFBRTtZQUMzQixHQUFHLEdBQUcsR0FBRyxJQUFHLHNCQUFvQixhQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLG9DQUErQixhQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsYUFBUSxhQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsc0JBQWlCLGFBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQVMsQ0FBQSxDQUFBO1NBQzdNO2FBQU0sSUFBSSxtQkFBUyxDQUFDLElBQUksRUFBRTtZQUN2QixHQUFHLEdBQUcsR0FBRyxJQUFHLHNCQUFvQixhQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLCtCQUEwQixhQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsYUFBUSxhQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsc0JBQWlCLGFBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQVMsQ0FBQSxDQUFBO1NBQzFMO2FBQU0sSUFBSSxtQkFBUyxDQUFDLE9BQU8sRUFBRTtZQUMxQixHQUFHLEdBQUcsR0FBRyxJQUFHLHNCQUFvQixhQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLGtDQUE2QixhQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsYUFBUSxhQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsc0JBQWlCLGFBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQVMsQ0FBQSxDQUFBO1NBQ3pNO2FBQU0sSUFBSSxtQkFBUyxDQUFDLElBQUksRUFBRTtZQUN2QixHQUFHLEdBQUcsR0FBRyxJQUFHLHNCQUFvQixhQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLCtCQUEwQixhQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsYUFBUSxhQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsc0JBQWlCLGFBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQVMsQ0FBQSxDQUFBO1NBQzFMO2FBQU0sSUFBSSxtQkFBUyxDQUFDLE9BQU8sRUFBRTtZQUMxQixHQUFHLEdBQUcsR0FBRyxJQUFHLHNCQUFvQixhQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLGtDQUE2QixhQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsYUFBUSxhQUFLLENBQUMsZUFBZSxDQUFDLFNBQVcsQ0FBQSxDQUFBO1NBQ2hLO2FBQU0sSUFBSSxtQkFBUyxDQUFDLGVBQWUsRUFBRTtZQUNsQyxHQUFHLEdBQUcsR0FBRyxJQUFHLHVCQUFxQixhQUFLLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEtBQUssaUJBQVksYUFBSyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLG9CQUFlLGFBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxhQUFRLGFBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxrQ0FBNkIsYUFBSyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFTLENBQUEsQ0FBQTtTQUM1UTthQUFNLElBQUksbUJBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDekIsR0FBRyxHQUFHLEdBQUcsSUFBRyxzQkFBb0IsYUFBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxxQ0FBZ0MsYUFBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLGFBQVEsYUFBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLHNCQUFpQixhQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFTLENBQUEsQ0FBQTtTQUN4TTthQUFNLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDOUIsR0FBRyxHQUFHLEdBQUcsSUFBRyx1QkFBcUIsYUFBSyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxnQ0FBMkIsYUFBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLGFBQVEsYUFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLGtDQUE2QixhQUFLLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFTLENBQUEsQ0FBQTtTQUN0TjthQUFNLElBQUksbUJBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDekIsR0FBRyxHQUFHLEdBQUcsSUFBRyxzQkFBb0IsYUFBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxpQ0FBNEIsYUFBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLGFBQVEsYUFBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLHNCQUFpQixhQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFTLENBQUEsQ0FBQTtTQUNwTTthQUFNLElBQUksbUJBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDekIsR0FBRyxHQUFHLEdBQUcsSUFBRyxzQkFBb0IsYUFBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxpQ0FBNEIsYUFBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLGFBQVEsYUFBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLHNCQUFpQixhQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFTLENBQUEsQ0FBQTtTQUNwTTthQUFNLElBQUksbUJBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsR0FBRyxHQUFHLEdBQUcsSUFBRyxzQkFBb0IsYUFBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxtQ0FBOEIsYUFBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLGFBQVEsYUFBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLHNCQUFpQixhQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFTLENBQUEsQ0FBQTtTQUM1TTthQUFNLElBQUksbUJBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDN0IsR0FBRyxHQUFHLEdBQUcsSUFBRyxzQkFBb0IsYUFBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyx3Q0FBbUMsYUFBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLGFBQVEsYUFBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLHNCQUFpQixhQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFTLENBQUEsQ0FBQTtTQUN6TjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBRWYsQ0FBQztJQUlEOztPQUVHO0lBQ0ksd0JBQVEsR0FBZixVQUFnQixjQUFzQjtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNyQyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksdUNBQXVCLEdBQTlCLFVBQStCLFFBQWtCLEVBQUUsTUFBVztRQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNyQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsUUFBUSxFQUFFLENBQUM7YUFDZDtTQUNKO2FBQU07WUFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxxQkFBVyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDM0Q7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGtEQUFrQyxHQUF6QyxVQUEwQyxRQUFrQixFQUFFLE1BQVc7UUFFckUsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDM0IsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsUUFBUSxFQUFFLENBQUM7YUFDZDtTQUNKO2FBQU07WUFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxxQkFBVyxDQUFDLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN0RTtJQUNMLENBQUM7SUFHRDs7OztPQUlHO0lBQ0kseUNBQXlCLEdBQWhDLFVBQWlDLFFBQWtCLEVBQUUsTUFBVztRQUU1RCxJQUFJLElBQUksR0FBRyx5QkFBZSxDQUFDLE9BQU8sQ0FBQyxxQkFBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdELElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsUUFBUSxFQUFFLENBQUM7YUFDZDtTQUNKO2FBQU07WUFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxxQkFBVyxDQUFDLGVBQWUsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDN0Q7SUFDTCxDQUFDO0lBR0Q7Ozs7O01BS0U7SUFDSyxrQ0FBa0IsR0FBekIsVUFBMEIsY0FBc0IsRUFBRSxRQUFnQixFQUFFLE1BQWtCO1FBQWxCLHVCQUFBLEVBQUEsVUFBa0I7UUFDbEYsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDckMsT0FBTztTQUNWO1FBQ0QsSUFBSSxtQkFBUyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQzVDO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7U0FDMUg7SUFFTCxDQUFDO0lBRUQ7Ozs7O0lBS0E7SUFDTyxxQ0FBcUIsR0FBNUIsVUFBNkIsUUFBZ0I7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDckMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUcsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHlDQUF5QixHQUFoQyxVQUFpQyxNQUFXO1FBQ3hDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFLRDs7T0FFRztJQUNJLG1DQUFtQixHQUExQjtRQUVJLDBCQUEwQjtRQUMxQixzREFBc0Q7UUFDdEQsSUFBSTtRQUpSLGlCQXdCQztRQWpCRyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7WUFDakMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBRW5ELGFBQUssQ0FBQyx5QkFBeUIsQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3hDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFXLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDeEQsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNuRCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFVCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTVDLENBQUM7SUFJRDs7OztLQUlDO0lBQ00sOENBQThCLEdBQXJDLFVBQXNDLFFBQWtCLEVBQUUsTUFBVztRQUVqRSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUMzQixJQUFJLFFBQVEsRUFBRTtnQkFDVixRQUFRLEVBQUUsQ0FBQzthQUNkO1NBQ0o7YUFBTTtZQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLHFCQUFXLENBQUMseUJBQXlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0wsQ0FBQztJQUVNLDBDQUEwQixHQUFqQztRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxxQ0FBcUIsR0FBNUI7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFLRDs7T0FFRztJQUNJLG9DQUFvQixHQUEzQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JCLGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCw2REFBNkQ7UUFDN0QsbURBQW1EO1FBQ25ELElBQUk7UUFDSixJQUFJLG1CQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQ2pEO2FBQU0sSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTtZQUN6QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUMvQzthQUFNLElBQUksbUJBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDakQ7YUFBTSxJQUFJLG1CQUFTLENBQUMsZUFBZSxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQ2xEO2FBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUNsRDthQUFNLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUNuRDthQUFNLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDL0M7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBR0Q7O09BRUc7SUFDSSwwQ0FBMEIsR0FBakM7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixhQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBR0QsSUFBSSxJQUFJLENBQUMsWUFBWTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ25DLElBQUksYUFBSyxDQUFDLDJCQUEyQixFQUFFLEVBQUU7WUFDckMsSUFBSSxJQUFJLENBQUMsWUFBWTttQkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFO2dCQUM1QyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLElBQUksTUFBTSxFQUFFO29CQUNuRCxPQUFPLElBQUksQ0FBQztpQkFDZjtxQkFBTTtvQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLCtDQUErQyxDQUFDLENBQUM7aUJBQ2xFO2FBQ0o7aUJBQU07Z0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO2FBQ2xFO1NBQ0o7YUFBTTtZQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQztTQUNoRDtRQUdELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFHRDs7Ozs7Ozs7T0FRRztJQUNJLHdDQUF3QixHQUEvQixVQUFnQyxNQUFrQjtRQUFsQix1QkFBQSxFQUFBLGFBQWtCO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JCLGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxJQUFJLENBQUMsMEJBQTBCLEVBQUUsRUFBRTtZQUduQyxhQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRTlCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsb0JBQW9CLEVBQUU7Z0JBQzlDLElBQUksVUFBVSxHQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDdkYsSUFBSSxVQUFVLEVBQUU7b0JBQ1osSUFBSSxJQUFJLENBQUMscUJBQXFCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRTt3QkFDdEUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxDQUFDO3FCQUN4QztvQkFDRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsVUFBVSxDQUFDO29CQUN4QyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDekMsSUFBSSxNQUFNLEVBQUU7d0JBQ1IsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFOzRCQUNkLFVBQVUsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQzt5QkFDbkM7d0JBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFOzRCQUNkLFVBQVUsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQzt5QkFDbkM7cUJBQ0o7b0JBQ0QsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNsRCxPQUFPLElBQUksQ0FBQztpQkFDZjthQUNKO2lCQUFNO2dCQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLHFEQUFxRCxDQUFDLENBQUM7YUFDbEY7U0FDSjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7T0FFRztJQUNJLHdDQUF3QixHQUEvQjtRQUNJLElBQUksTUFBTSxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN0RCxJQUFJLE1BQU0sRUFBRTtZQUNSLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksd0NBQXdCLEdBQS9CO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDckMsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDbkMsSUFBSSxhQUFLLENBQUMsMkJBQTJCLEVBQUUsRUFBRTtZQUNyQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYzttQkFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLElBQUksTUFBTTttQkFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTO21CQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMzQyxPQUFPLElBQUksQ0FBQzthQUNmO2lCQUFNO2dCQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsb0RBQW9ELENBQUMsQ0FBQztnQkFDcEUsT0FBTyxLQUFLLENBQUM7YUFDaEI7U0FDSjthQUFNO1lBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUdEOzs7Ozs7Ozs7Ozs7T0FZRztJQUNJLHNDQUFzQixHQUE3QixVQUE4QixNQUFrQjtRQUFsQix1QkFBQSxFQUFBLGFBQWtCO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JCLGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFO1lBQzNDLElBQUksT0FBTyxHQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNqRixJQUFJLE9BQU8sRUFBRTtnQkFDVCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO29CQUNsRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ3RDO2dCQUNELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxPQUFPLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUV2QyxJQUFJLE1BQU0sR0FBYyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFeEQsSUFBSSxNQUFNLEVBQUU7b0JBQ1IsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO3dCQUNkLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztxQkFDaEM7b0JBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTt3QkFDdEIsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO3FCQUNoQztvQkFDRCxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFO3dCQUNwQixNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzt3QkFDekIsTUFBTSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7d0JBQzdCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztxQkFDM0I7eUJBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTt3QkFDOUIsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7d0JBQzFCLE1BQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO3dCQUM1QixNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7cUJBQ2pDO29CQUNELElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7d0JBQ3JCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO3dCQUMxQixNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzt3QkFDNUIsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO3FCQUM3Qjt5QkFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO3dCQUM3QixNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzt3QkFDM0IsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7d0JBQzNCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztxQkFDL0I7b0JBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTt3QkFDdkIsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO3FCQUNsQztpQkFDSjtnQkFDRCxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBRXpCLE9BQU8sT0FBTyxDQUFDO2FBQ2xCO1NBQ0o7YUFBTTtZQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLG1EQUFtRCxDQUFDLENBQUM7U0FDaEY7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7OztNQUdFO0lBQ0ssc0NBQXNCLEdBQTdCO1FBQ0ksSUFBSSxJQUFJLENBQUMsbUJBQW1CLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUNsRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxvQ0FBb0IsR0FBM0I7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNyQyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELElBQUksSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNuQyxJQUFJLG1CQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3BCLElBQUksYUFBSyxDQUFDLDJCQUEyQixFQUFFLEVBQUU7Z0JBQ3JDLElBQUksYUFBSyxDQUFDLFVBQVU7dUJBQ2IsYUFBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZO3VCQUM3QixhQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUU7b0JBQzVDLElBQUksYUFBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTt3QkFDN0MsT0FBTyxJQUFJLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsOEJBQThCLENBQUMsQ0FBQztxQkFDM0Q7aUJBQ0o7cUJBQU07b0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsNkJBQTZCLENBQUMsQ0FBQztpQkFDMUQ7YUFDSjtpQkFBTTtnQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyx5QkFBeUIsQ0FBQyxDQUFDO2FBQ3REO1NBQ0o7YUFBTSxJQUFJLG1CQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3pCLElBQUksYUFBSyxDQUFDLDJCQUEyQixFQUFFLEVBQUU7Z0JBQ3JDLElBQUksYUFBSyxDQUFDLFFBQVE7dUJBQ1gsYUFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZO3VCQUMzQixhQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUU7b0JBQzFDLElBQUksUUFBUSxDQUFDLGFBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDckQsT0FBTyxJQUFJLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsNkJBQTZCLENBQUMsQ0FBQztxQkFDMUQ7aUJBQ0o7cUJBQU07b0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsNkJBQTZCLENBQUMsQ0FBQztpQkFDMUQ7YUFDSjtpQkFBTTtnQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyx5QkFBeUIsQ0FBQyxDQUFDO2FBQ3REO1NBQ0o7YUFBTSxJQUFJLG1CQUFTLENBQUMsT0FBTyxFQUFFO1lBQzFCLElBQUksYUFBSyxDQUFDLDJCQUEyQixFQUFFLEVBQUU7Z0JBQ3JDLElBQUksYUFBSyxDQUFDLFVBQVU7dUJBQ2IsYUFBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZO3VCQUM3QixhQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUU7b0JBQzVDLElBQUksYUFBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTt3QkFDN0MsT0FBTyxJQUFJLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsOEJBQThCLENBQUMsQ0FBQztxQkFDM0Q7aUJBQ0o7cUJBQU07b0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsNkJBQTZCLENBQUMsQ0FBQztpQkFDMUQ7YUFDSjtpQkFBTTtnQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyx5QkFBeUIsQ0FBQyxDQUFDO2FBQ3REO1NBQ0o7YUFBTSxJQUFJLG1CQUFTLENBQUMsZUFBZSxFQUFFO1lBQ2xDLElBQUksYUFBSyxDQUFDLFdBQVc7bUJBQ2QsYUFBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZO21CQUM5QixhQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUU7Z0JBQzdDLElBQUksUUFBUSxDQUFDLGFBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDeEQsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7YUFDSjtpQkFBTTtnQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyw0QkFBNEIsQ0FBQyxDQUFDO2FBQ3pEO1NBQ0o7YUFBTSxJQUFJLG1CQUFTLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksYUFBSyxDQUFDLDJCQUEyQixFQUFFLEVBQUU7Z0JBQ3JDLElBQUksYUFBSyxDQUFDLFdBQVcsSUFBSSxhQUFLLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFO3VCQUMxRCxhQUFLLENBQUMsV0FBVyxDQUFDLFlBQVk7dUJBQzlCLGFBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRTtvQkFDN0MsSUFBSSxhQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFO3dCQUM5QyxPQUFPLElBQUksQ0FBQztxQkFDZjt5QkFBTTt3QkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyw4QkFBOEIsQ0FBQyxDQUFDO3FCQUMzRDtpQkFDSjtxQkFBTTtvQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyw2QkFBNkIsQ0FBQyxDQUFDO2lCQUMxRDthQUNKO2lCQUFNO2dCQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLHlCQUF5QixDQUFDLENBQUM7YUFDdEQ7U0FDSjthQUFNLElBQUksbUJBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDdkIsSUFBSSxhQUFLLENBQUMsMkJBQTJCLEVBQUUsRUFBRTtnQkFDckMsSUFBSSxhQUFLLENBQUMsT0FBTzt1QkFDVixhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVk7dUJBQzFCLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRTtvQkFDekMsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFO3dCQUMxQyxPQUFPLElBQUksQ0FBQztxQkFDZjt5QkFBTTt3QkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyw4QkFBOEIsQ0FBQyxDQUFDO3FCQUMzRDtpQkFDSjtxQkFBTTtvQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyw2QkFBNkIsQ0FBQyxDQUFDO2lCQUMxRDthQUNKO2lCQUFNO2dCQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLHlCQUF5QixDQUFDLENBQUM7YUFDdEQ7U0FDSjthQUFNLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUU7WUFFOUIsSUFBSSxhQUFLLENBQUMsUUFBUTttQkFDWCxhQUFLLENBQUMsUUFBUSxDQUFDLFlBQVk7bUJBQzNCLGFBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRTtnQkFDMUMsSUFBSSxhQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFO29CQUMzQyxPQUFPLElBQUksQ0FBQztpQkFDZjtxQkFBTTtvQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyw4QkFBOEIsQ0FBQyxDQUFDO2lCQUMzRDthQUNKO2lCQUFNO2dCQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLDZCQUE2QixDQUFDLENBQUM7YUFDMUQ7U0FFSjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFHRDs7Ozs7Ozs7Ozs7OztPQWFHO0lBQ0ksa0NBQWtCLEdBQXpCLFVBQTBCLE1BQWtCO1FBQWxCLHVCQUFBLEVBQUEsYUFBa0I7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDckMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELElBQUksYUFBSyxDQUFDLG9CQUFvQixFQUFFLEVBQUU7WUFDOUIsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3BHLGFBQUssQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO29CQUMxRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNsQztnQkFDRCxPQUFPLElBQUksQ0FBQzthQUNmO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hDLElBQUksSUFBSSxHQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzNFLElBQUksSUFBSSxFQUFFO29CQUNOLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRTt3QkFDMUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztxQkFDbEM7b0JBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7b0JBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDbkMsSUFBSSxNQUFNLEdBQWMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBRXJELElBQUksTUFBTSxFQUFFO3dCQUNSLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTs0QkFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7eUJBQzdCO3dCQUNELElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7NEJBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQzt5QkFDN0I7d0JBQ0QsSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRTs0QkFDcEIsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7NEJBQ3pCLE1BQU0sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDOzRCQUM3QixNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7eUJBQzNCOzZCQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7NEJBQzlCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDOzRCQUMxQixNQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzs0QkFDNUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO3lCQUNqQzt3QkFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFOzRCQUNyQixNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs0QkFDMUIsTUFBTSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7NEJBQzVCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDN0I7NkJBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTs0QkFDN0IsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7NEJBQzNCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDOzRCQUMzQixNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7eUJBQy9CO3dCQUNELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7NEJBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQzt5QkFDL0I7cUJBQ0o7b0JBQ0QsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN6QixPQUFPLElBQUksQ0FBQztpQkFDZjthQUNKO2lCQUFNO2dCQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLGdEQUFnRCxDQUFDLENBQUM7YUFDN0U7U0FDSjthQUFNO1lBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUM7U0FDdEM7UUFHRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksa0NBQWtCLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQzFELElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEM7SUFDTCxDQUFDO0lBQ0Q7O09BRUc7SUFDSSxxQ0FBcUIsR0FBNUI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNyQyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxRQUFRO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDL0MsSUFBSSxtQkFBUyxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLGFBQUssQ0FBQywyQkFBMkIsRUFBRSxFQUFFO2dCQUNyQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksTUFBTSxFQUFFO29CQUMvQyxPQUFPLElBQUksQ0FBQztpQkFDZjtxQkFBTTtvQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxtQ0FBbUMsQ0FBQyxDQUFDO2lCQUNoRTthQUNKO2lCQUFNO2dCQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLDRCQUE0QixDQUFDLENBQUM7YUFDekQ7U0FDSjthQUFNLElBQUksbUJBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDekIsSUFBSSxhQUFLLENBQUMsMkJBQTJCLEVBQUUsRUFBRTtnQkFDckMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLE1BQU0sRUFBRTtvQkFDL0MsSUFBSSxhQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxhQUFhLElBQUksTUFBTSxFQUFFO3dCQUNyRCxJQUFJLENBQUMsYUFBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFOzRCQUNwQyxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRywyQkFBMkIsQ0FBQyxDQUFDOzRCQUNyRCxPQUFPLEtBQUssQ0FBQzt5QkFDaEI7cUJBQ0o7b0JBQ0QsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsbUNBQW1DLENBQUMsQ0FBQztpQkFDaEU7YUFDSjtpQkFBTTtnQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyw0QkFBNEIsQ0FBQyxDQUFDO2FBQ3pEO1NBQ0o7YUFBTSxJQUFJLG1CQUFTLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksbUJBQVMsQ0FBQyxTQUFTO21CQUNoQixhQUFLLENBQUMsMkJBQTJCLEVBQUUsRUFBRTtnQkFDeEMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLE1BQU0sRUFBRTtvQkFDL0MsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsbUNBQW1DLENBQUMsQ0FBQztpQkFDaEU7YUFDSjtpQkFBTTtnQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyw0QkFBNEIsQ0FBQyxDQUFDO2FBQ3pEO1NBQ0o7YUFBTSxJQUFJLG1CQUFTLENBQUMsT0FBTyxFQUFFO1lBQzFCLElBQUksYUFBSyxDQUFDLDJCQUEyQixFQUFFLEVBQUU7Z0JBQ3JDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxNQUFNLEVBQUU7b0JBQy9DLE9BQU8sSUFBSSxDQUFDO2lCQUNmO3FCQUFNO29CQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLG1DQUFtQyxDQUFDLENBQUM7aUJBQ2hFO2FBQ0o7aUJBQU07Z0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsNEJBQTRCLENBQUMsQ0FBQzthQUN6RDtTQUNKO2FBQU0sSUFBSSxtQkFBUyxDQUFDLElBQUksRUFBRTtZQUN2QixJQUFJLGFBQUssQ0FBQywyQkFBMkIsRUFBRSxFQUFFO2dCQUNyQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksTUFBTSxFQUFFO29CQUMvQyxPQUFPLElBQUksQ0FBQztpQkFDZjtxQkFBTTtvQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxtQ0FBbUMsQ0FBQyxDQUFDO2lCQUNoRTthQUNKO2lCQUFNO2dCQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLDRCQUE0QixDQUFDLENBQUM7YUFDekQ7U0FDSjthQUFNLElBQUksbUJBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFNLElBQUksbUJBQVMsQ0FBQyxlQUFlLEVBQUU7WUFDbEMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLE1BQU0sRUFBRTtnQkFDL0MsT0FBTyxJQUFJLENBQUM7YUFDZjtpQkFBTTtnQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxtQ0FBbUMsQ0FBQyxDQUFDO2FBQ2hFO1NBQ0o7YUFBTSxJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFO1lBQzlCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxNQUFNLEVBQUU7Z0JBQy9DLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsbUNBQW1DLENBQUMsQ0FBQzthQUNoRTtTQUNKO2FBQU0sSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksTUFBTSxFQUFFO2dCQUMvQyxPQUFPLElBQUksQ0FBQzthQUNmO2lCQUFNO2dCQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLG1DQUFtQyxDQUFDLENBQUM7YUFDaEU7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFHRDs7Ozs7Ozs7Ozs7Ozs7T0FjRztJQUNJLG1DQUFtQixHQUExQixVQUEyQixNQUFrQjtRQUFsQix1QkFBQSxFQUFBLGFBQWtCO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JCLGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLDRCQUE0QixDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNyRyxhQUFLLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDckMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRTtnQkFDbEUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3RDO1lBR0QsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUlELElBQUksbUJBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDcEIsSUFBSSxhQUFLLENBQUMsV0FBVyxFQUFFO2dCQUNuQixJQUFJLGFBQUssQ0FBQyxxQkFBcUIsRUFBRSxFQUFFO29CQUMvQixJQUFJLGFBQUssQ0FBQyxXQUFXLENBQUMsb0JBQW9CLEVBQUUsRUFBRTt3QkFDMUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUU7NEJBQ3pDLElBQUksSUFBSSxHQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7NEJBQzVFLElBQUksSUFBSSxFQUFFO2dDQUNOLElBQUksSUFBSSxDQUFDLG1CQUFtQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7b0NBQ2xFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQ0FDdEM7Z0NBQ0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztnQ0FDaEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0NBQ3ZDLElBQUksTUFBTSxHQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dDQUVyRCxJQUFJLE1BQU0sRUFBRTtvQ0FDUixJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7d0NBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO3FDQUM3QjtvQ0FDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO3dDQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7cUNBQzdCO29DQUNELElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUU7d0NBQ3BCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO3dDQUN6QixNQUFNLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzt3Q0FDN0IsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO3FDQUMzQjt5Q0FBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO3dDQUM5QixNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzt3Q0FDMUIsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7d0NBQzVCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztxQ0FDakM7b0NBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTt3Q0FDckIsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7d0NBQzFCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO3dDQUM1QixNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7cUNBQzdCO3lDQUFNLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7d0NBQzdCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO3dDQUMzQixNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzt3Q0FDM0IsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO3FDQUMvQjtvQ0FDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO3dDQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7cUNBQy9CO2lDQUNKO2dDQUNELE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQ0FDekIsT0FBTyxJQUFJLENBQUM7NkJBQ2Y7eUJBQ0o7NkJBQU07NEJBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsZ0RBQWdELENBQUMsQ0FBQzt5QkFDN0U7cUJBQ0o7eUJBQU07d0JBQ0gsSUFBSSxHQUFHLEdBQUcsYUFBSyxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDeEQsSUFBSSxHQUFHLEVBQUU7NEJBQ0wsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7Z0NBQzFCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs2QkFDdEM7NEJBQ0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEdBQUcsQ0FBQzs0QkFDL0IsSUFBSSxNQUFNLEVBQUU7Z0NBQ1IsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO29DQUNkLEdBQUcsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztpQ0FDNUI7Z0NBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtvQ0FDdkIsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2lDQUM5Qjs2QkFDSjs0QkFDRCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQzt5QkFDbkM7NkJBQU07NEJBQ0gsT0FBTyxJQUFJLENBQUM7eUJBQ2Y7cUJBQ0o7aUJBRUo7cUJBQU07b0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO29CQUMzQyxPQUFPLElBQUksQ0FBQztpQkFDZjthQUNKO1NBQ0o7YUFBTTtZQUNILElBQUksYUFBSyxDQUFDLHFCQUFxQixFQUFFLEVBQUU7Z0JBRy9CLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFO29CQUN6QyxJQUFJLElBQUksR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUM1RSxJQUFJLElBQUksRUFBRTt3QkFDTixJQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFOzRCQUNsRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUM7eUJBQ3RDO3dCQUNELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7d0JBQ2hDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUN2QyxJQUFJLE1BQU0sR0FBYyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFFckQsSUFBSSxNQUFNLEVBQUU7NEJBQ1IsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO2dDQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQzs2QkFDN0I7NEJBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtnQ0FDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDOzZCQUM3Qjs0QkFDRCxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFO2dDQUNwQixNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQ0FDekIsTUFBTSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0NBQzdCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQzs2QkFDM0I7aUNBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtnQ0FDOUIsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0NBQzFCLE1BQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dDQUM1QixNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7NkJBQ2pDOzRCQUNELElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7Z0NBQ3JCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dDQUMxQixNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQ0FDNUIsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDOzZCQUM3QjtpQ0FBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO2dDQUM3QixNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQ0FDM0IsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0NBQzNCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQzs2QkFDL0I7NEJBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtnQ0FDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDOzZCQUMvQjt5QkFDSjt3QkFDRCxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7d0JBQ3pCLE9BQU8sSUFBSSxDQUFDO3FCQUNmO2lCQUNKO3FCQUFNO29CQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLGdEQUFnRCxDQUFDLENBQUM7aUJBQzdFO2FBQ0o7aUJBQU07Z0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLENBQUE7YUFDekM7U0FFSjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxtQ0FBbUIsR0FBMUIsVUFBMkIsV0FBaUI7UUFDeEMsSUFBSSxtQkFBUyxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLFdBQVcsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUN4QyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDekI7WUFDRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3RDO1NBQ0o7YUFBTTtZQUNILElBQUksV0FBVyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ3hDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN6QjtZQUNELElBQUksSUFBSSxDQUFDLG1CQUFtQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7Z0JBQ2xFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN0QztTQUNKO1FBRUQsSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDckQ7SUFDTCxDQUFDO0lBR00scUNBQXFCLEdBQTVCLFVBQTZCLE1BQWtCO1FBQWxCLHVCQUFBLEVBQUEsYUFBa0I7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDckMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELElBQUksTUFBTSxHQUFZLEtBQUssQ0FBQztRQUM1QixJQUFJLG1CQUFTLENBQUMsT0FBTyxFQUFFO1lBQ25CLElBQUksYUFBSyxDQUFDLFVBQVU7bUJBQ2IsYUFBSyxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRSxFQUFFO2dCQUM5QyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLDhCQUE4QixDQUFDLENBQUM7YUFDM0Q7U0FDSjtRQUdELElBQUksbUJBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDbkIsSUFBSSxhQUFLLENBQUMsVUFBVSxFQUFFO2dCQUNsQixJQUFJLE1BQU0sRUFBRTtvQkFDUixJQUFJLEdBQUcsR0FBRyxhQUFLLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM1RCxJQUFJLEdBQUcsRUFBRTt3QkFDTCxJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRTs0QkFDL0IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sRUFBRSxDQUFDO3lCQUMzQzt3QkFDRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsR0FBRyxDQUFDO3dCQUNwQyxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztxQkFDeEM7eUJBQU07d0JBQ0gsT0FBTyxJQUFJLENBQUM7cUJBQ2Y7aUJBQ0o7cUJBQU07b0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO29CQUM3QyxPQUFPLElBQUksQ0FBQztpQkFDZjthQUNKO1NBQ0o7SUFFTCxDQUFDO0lBRU0scUNBQXFCLEdBQTVCLFVBQTZCLFdBQWdCO1FBQ3pDLElBQUksbUJBQVMsQ0FBQyxPQUFPLElBQUksV0FBVyxFQUFFO1lBQ2xDLElBQUksV0FBVyxJQUFJLElBQUksRUFBRTtnQkFDckIsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3pCO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxrQ0FBa0IsR0FBekI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNyQyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELElBQUksSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUVuQyxJQUFJLG1CQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxNQUFNLEVBQUU7Z0JBQzlDLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7WUFDRCxhQUFLLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2xDO2FBQU0sSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLGFBQUssQ0FBQyxRQUFRLElBQUksYUFBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLElBQUksTUFBTSxFQUFFO2dCQUN4RyxPQUFPLElBQUksQ0FBQzthQUNmO1lBQ0QsYUFBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNsQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFHTSxnQ0FBZ0IsR0FBdkI7UUFDSSxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSxnQ0FBZ0IsR0FBdkIsVUFBd0IsTUFBa0I7UUFBbEIsdUJBQUEsRUFBQSxhQUFrQjtRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNyQyxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRzVDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFO1lBQ3RDLElBQUksSUFBSSxHQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDekUsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNoQztnQkFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNqQyxJQUFJLE1BQU0sR0FBYyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFckQsSUFBSSxNQUFNLEVBQUU7b0JBQ1IsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO3dCQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztxQkFDN0I7b0JBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTt3QkFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO3FCQUM3QjtvQkFFRCxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFO3dCQUNwQixNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzt3QkFDekIsTUFBTSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7d0JBQzdCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztxQkFDM0I7eUJBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTt3QkFDOUIsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7d0JBQzFCLE1BQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO3dCQUM1QixNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7cUJBQ2pDO29CQUNELElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7d0JBQ3JCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO3dCQUMxQixNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzt3QkFDNUIsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO3FCQUM3Qjt5QkFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO3dCQUM3QixNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzt3QkFDM0IsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7d0JBQzNCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztxQkFDL0I7b0JBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTt3QkFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO3FCQUMvQjtpQkFDSjtnQkFDRCxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3pCLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjthQUFNO1lBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsNkNBQTZDLENBQUMsQ0FBQztTQUMxRTtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFHRDs7T0FFRztJQUNJLDBDQUEwQixHQUFqQztRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JCLGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxJQUFJLENBQUMsWUFBWTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLE1BQU0sRUFBRTtnQkFDN0MsT0FBTyxJQUFJLENBQUM7YUFDZjtpQkFBTTtnQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7YUFDeEQ7U0FDSjthQUFNO1lBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQ3BEO1FBSUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUlEOzs7O09BSUc7SUFDSSx3Q0FBd0IsR0FBL0IsVUFBZ0MsUUFBeUIsRUFBRSxNQUFrQjtRQUE3Qyx5QkFBQSxFQUFBLGVBQXlCO1FBQUUsdUJBQUEsRUFBQSxhQUFrQjtRQUN6RSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNyQyxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsSUFBSSxhQUFLLENBQUMsMEJBQTBCLEVBQUUsRUFBRTtZQUNwQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRTtnQkFDeEMsSUFBSSxJQUFJLEdBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDM0UsSUFBSSxJQUFJLEVBQUU7b0JBQ04sSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO3dCQUMxRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO3FCQUNsQztvQkFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztvQkFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNuQyxJQUFJLE1BQU0sR0FBYyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDckQsSUFBSSxjQUFjLEdBQXNCLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDL0UsSUFBSSxjQUFjLEVBQUU7d0JBQ2hCLGNBQWMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO3FCQUN0QztvQkFFRCxJQUFJLE1BQU0sRUFBRTt3QkFDUixJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7NEJBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO3lCQUM3Qjt3QkFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFOzRCQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7eUJBQzdCO3dCQUVELElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUU7NEJBQ3BCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDOzRCQUN6QixNQUFNLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzs0QkFDN0IsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO3lCQUMzQjs2QkFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFOzRCQUM5QixNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzs0QkFDMUIsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7NEJBQzVCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQzt5QkFDakM7d0JBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTs0QkFDckIsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7NEJBQzFCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDOzRCQUM1QixNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7eUJBQzdCOzZCQUFNLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7NEJBQzdCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDOzRCQUMzQixNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzs0QkFDM0IsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO3lCQUMvQjt3QkFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFOzRCQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7eUJBQy9COzZCQUFNOzRCQUNILEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzt5QkFDL0M7cUJBQ0o7b0JBQ0QsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN6QixPQUFPLElBQUksQ0FBQztpQkFDZjthQUNKO2lCQUFNO2dCQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLDhDQUE4QyxDQUFDLENBQUM7YUFDM0U7U0FDSjthQUFNO1lBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUM7U0FDeEM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDO0lBR0Q7O09BRUc7SUFDSSx3Q0FBd0IsR0FBL0IsVUFBZ0MsTUFBa0I7UUFBbEIsdUJBQUEsRUFBQSxhQUFrQjtRQUM5QyxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDMUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFDRDs7Ozs7T0FLRztJQUNJLDZCQUFhLEdBQXBCLFVBQXFCLFNBQWlCLEVBQUUsUUFBa0IsRUFBRSxNQUFXO1FBQ25FLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDWixhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxnREFBZ0QsQ0FBQyxDQUFDO1lBQzFFLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRywrQ0FBK0MsQ0FBQyxDQUFDO1lBQ3pFLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDVCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyw2Q0FBNkMsQ0FBQyxDQUFDO1lBQ3ZFLE9BQU87U0FDVjtRQUVELEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLCtCQUFlLEdBQXRCLFVBQXVCLFNBQWlCO1FBQ3BDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7O09BR0c7SUFDSSwrQkFBZSxHQUF0QixVQUF1QixTQUFpQjtRQUNwQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBTUQ7OztNQUdFO0lBQ0ssMkJBQVcsR0FBbEIsVUFBbUIsTUFBa0I7UUFBbEIsdUJBQUEsRUFBQSxhQUFrQjtRQUNqQyxJQUFJLG1CQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3BCLElBQUksTUFBTSxHQUFZLEtBQUssQ0FBQztZQUM1Qiw2RkFBNkY7WUFDN0YsSUFBSSxhQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksSUFBSSxhQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3hFLElBQUksYUFBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxJQUFJLE1BQU0sRUFBRTtvQkFDakQsYUFBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUNqQyxPQUFPO2lCQUNWO2dCQUNELGFBQUssQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNqQjtpQkFBTTtnQkFDSCxJQUFJLFFBQVEsR0FBVyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUMvRSxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUU7b0JBQ2QsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDZCxhQUFLLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7aUJBQ3hDO2FBQ0o7WUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNULGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLG9CQUFvQixDQUFDLENBQUM7Z0JBQzlDLE9BQU87YUFDVjtZQUNELElBQUksSUFBSSxHQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEUsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUMzQjtnQkFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO29CQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7aUJBQy9CO2FBQ0o7aUJBQU07Z0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsd0NBQXdDLENBQUMsQ0FBQzthQUNyRTtTQUNKO0lBR0wsQ0FBQztJQUlELDBDQUEwQixHQUExQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JCLGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRW5DLElBQUksSUFBSSxDQUFDLFlBQVk7ZUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQjtlQUNsQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNyRCxPQUFPLElBQUksQ0FBQztTQUNmO2FBQU07WUFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxzQ0FBc0MsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNEOztNQUVFO0lBQ0ssbUNBQW1CLEdBQTFCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsYUFBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMzQixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELElBQUksSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNuQyxJQUFJLG1CQUFTLENBQUMsUUFBUSxJQUFJLG1CQUFTLENBQUMsTUFBTSxJQUFJLG1CQUFTLENBQUMsT0FBTyxJQUFJLG1CQUFTLENBQUMsZUFBZSxJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFO1lBQ25ILElBQUksYUFBSyxDQUFDLDJCQUEyQixFQUFFLEVBQUU7Z0JBQ3JDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsSUFBSSxNQUFNLEVBQUU7b0JBQ2hELE9BQU8sSUFBSSxDQUFDO2lCQUNmO3FCQUFNO29CQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLG9DQUFvQyxDQUFDLENBQUM7aUJBQ2pFO2FBQ0o7aUJBQU07Z0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsNEJBQTRCLENBQUMsQ0FBQzthQUN6RDtTQUNKO2FBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsRUFBRTtZQUMzQixJQUFJLGFBQUssQ0FBQywyQkFBMkIsRUFBRSxJQUFJLGFBQUssQ0FBQyxXQUFXLENBQUMsb0JBQW9CLEVBQUUsRUFBRTtnQkFDakYsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLE1BQU0sRUFBRTtvQkFDaEQsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcscUNBQXFDLENBQUMsQ0FBQztpQkFDbEU7YUFDSjtpQkFBTTtnQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyw0QkFBNEIsQ0FBQyxDQUFDO2FBQ3pEO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxnQ0FBZ0IsR0FBdkI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNyQyxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRTtZQUM1QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRTtnQkFDdEMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQy9EO2lCQUFNO2dCQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLDZDQUE2QyxDQUFDLENBQUM7YUFDMUU7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksaUNBQWlCLEdBQXhCLFVBQXlCLEtBQVc7UUFDaEMsSUFBSSxtQkFBUyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLGFBQUssQ0FBQyxXQUFXLENBQUMsb0JBQW9CLEVBQUUsRUFBRTtnQkFDMUMsWUFBWTtnQkFDWixJQUFJLENBQUMsaUJBQWlCLENBQUM7b0JBQ25CLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7b0JBQ2hDLE9BQU8sRUFBRSxZQUFZO29CQUNyQixPQUFPLEVBQUUsVUFBQSxHQUFHO3dCQUNSLGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNoQyxDQUFDO29CQUNELElBQUksRUFBRSxVQUFBLEdBQUc7d0JBQ0wsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ2hDLENBQUM7aUJBQ0osQ0FBQyxDQUFBO2dCQUNGLGFBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7YUFFakM7aUJBQU07Z0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0o7SUFDTCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0ksNkJBQWEsR0FBcEI7UUFDSSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksTUFBTSxFQUFFO1lBQzVDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBTUQsc0JBQVcsK0JBQVk7UUFIdkI7O1dBRUc7YUFDSDtZQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQ3ZFO1lBQ0QsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDOzs7T0FBQTtJQU9ELHNCQUFXLDJCQUFRO1FBSG5COztXQUVHO2FBQ0g7WUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTO2dCQUFFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMxQyxJQUFJLG1CQUFTLENBQUMsUUFBUSxFQUFFO2dCQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLGFBQUssQ0FBQyxVQUFVLENBQUM7YUFDckM7aUJBQU0sSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTtnQkFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFLLENBQUMsUUFBUSxDQUFDO2FBQ25DO2lCQUFNLElBQUksbUJBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBSyxDQUFDLFNBQVMsQ0FBQzthQUNwQztpQkFBTSxJQUFJLG1CQUFTLENBQUMsSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLGFBQUssQ0FBQyxPQUFPLENBQUM7YUFDbEM7aUJBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFLLENBQUMsV0FBVyxDQUFDO2FBQ3RDO2lCQUFNLElBQUksbUJBQVMsQ0FBQyxPQUFPLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBSyxDQUFDLFVBQVUsQ0FBQzthQUNyQztpQkFBTSxJQUFJLG1CQUFTLENBQUMsS0FBSyxFQUFFO2dCQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLGFBQUssQ0FBQyxRQUFRLENBQUM7YUFDbkM7aUJBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFLLENBQUMsV0FBVyxDQUFDO2FBQ3RDO2lCQUFNLElBQUksbUJBQVMsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBSyxDQUFDLE9BQU8sQ0FBQzthQUNsQztpQkFBTSxJQUFJLG1CQUFTLENBQUMsT0FBTyxFQUFFO2dCQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLGFBQUssQ0FBQyxjQUFjLENBQUM7YUFDekM7aUJBQU0sSUFBSSxtQkFBUyxDQUFDLGVBQWUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFLLENBQUMsV0FBVyxDQUFDO2FBQ3RDO2lCQUFNLElBQUksbUJBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBSyxDQUFDLFNBQVMsQ0FBQzthQUNwQztpQkFBTSxJQUFJLG1CQUFTLENBQUMsTUFBTSxFQUFFO2dCQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLGFBQUssQ0FBQyxVQUFVLENBQUM7YUFDckM7aUJBQU0sSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFLLENBQUMsUUFBUSxDQUFDO2FBQ25DO2lCQUFNLElBQUksbUJBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBSyxDQUFDLFVBQVUsQ0FBQzthQUNyQztpQkFBTSxJQUFJLG1CQUFTLENBQUMsTUFBTSxFQUFFO2dCQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLGFBQUssQ0FBQyxVQUFVLENBQUM7YUFDckM7aUJBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFLLENBQUMsV0FBVyxDQUFDO2FBQ3RDO2lCQUFNLElBQUksbUJBQVMsQ0FBQyxVQUFVLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBSyxDQUFDLGFBQWEsQ0FBQzthQUN4QztpQkFBTSxJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFO2dCQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLGFBQUssQ0FBQyxhQUFhLENBQUM7YUFDeEM7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFLLENBQUMsYUFBYSxDQUFDO2FBQ3hDO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBVU0sdUJBQU8sR0FBZCxVQUFlLEdBQWE7O1FBQWIsb0JBQUEsRUFBQSxRQUFhO1FBQUUsYUFBTTthQUFOLFVBQU0sRUFBTixxQkFBTSxFQUFOLElBQU07WUFBTiw0QkFBTTs7UUFDaEMsY0FBYztRQUNkLGdDQUFnQztRQUNoQyxjQUFjO1FBQ2QsSUFBSTtRQUNKLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3hDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO2dCQUNwQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQ3hCLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN0RSxJQUFJLENBQUMsV0FBVyxFQUFFO3dCQUNkLFdBQVcsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUNqRSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQ3REO29CQUNELENBQUEsS0FBQSxXQUFXLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFBLENBQUMsTUFBTSwyQkFBQyxHQUFHLEdBQUssR0FBRyxHQUFFO2lCQUM5RDthQUVKO2lCQUFNO2dCQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLDJDQUEyQyxDQUFDLENBQUM7YUFDeEU7U0FDSjthQUFNO1lBQ0gsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLE9BQVgsT0FBTyxrQkFBSyxHQUFHLEdBQUssR0FBRyxHQUFFO2FBQzVCO2lCQUFNO2dCQUNILEVBQUUsQ0FBQyxHQUFHLE9BQU4sRUFBRSxrQkFBSyxHQUFHLEdBQUssR0FBRyxHQUFFO2FBQ3ZCO1NBQ0o7SUFDTCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0ksdUJBQU8sR0FBZCxVQUFlLElBQXFDO1FBQXJDLHFCQUFBLEVBQUEsT0FBb0IseUJBQVcsQ0FBQyxLQUFLO1FBQ2hELElBQUksbUJBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDcEIsSUFBSSxJQUFJLElBQUkseUJBQVcsQ0FBQyxLQUFLLEVBQUU7Z0JBQzNCLFlBQVk7Z0JBQ1osMkRBQTJEO2dCQUMzRCxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsT0FBTyxZQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsSUFBSSxZQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3hEO2lCQUFNO2dCQUNILFlBQVk7Z0JBQ1osRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE9BQU8sWUFBQyxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksWUFBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFFLFFBQVE7YUFDakU7U0FDSjthQUFNLElBQUksbUJBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDekIsSUFBSSxJQUFJLElBQUkseUJBQVcsQ0FBQyxLQUFLLEVBQUU7Z0JBQzNCLFlBQVk7Z0JBQ1osRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLE9BQU8sWUFBQyxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksWUFBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBLFNBQVM7YUFDakU7aUJBQU07Z0JBQ0gsWUFBWTtnQkFDWixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsT0FBTyxZQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsSUFBSSxZQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUUsUUFBUTthQUNqRTtTQUNKO2FBQU0sSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLElBQUksSUFBSSx5QkFBVyxDQUFDLEtBQUssRUFBRTtnQkFDM0IsWUFBWTtnQkFDWixFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQSxTQUFTO2FBQzlCO2lCQUFNO2dCQUNILFlBQVk7Z0JBQ1osRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsUUFBUTthQUM3QjtTQUNKO2FBQU0sSUFBSSxtQkFBUyxDQUFDLElBQUksRUFBRTtZQUN2QixJQUFJLElBQUksSUFBSSx5QkFBVyxDQUFDLEtBQUssRUFBRTtnQkFDM0IsWUFBWTtnQkFDWiw4Q0FBOEM7Z0JBQzlDLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxPQUFPLFlBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLFlBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDeEQ7aUJBQU07Z0JBQ0gsWUFBWTtnQkFDWixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsT0FBTyxZQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsSUFBSSxZQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUTthQUNoRTtTQUNKO2FBQU0sSUFBSSxtQkFBUyxDQUFDLFFBQVEsRUFBRTtZQUMzQixJQUFJLElBQUksSUFBSSx5QkFBVyxDQUFDLEtBQUssRUFBRTtnQkFDM0IsWUFBWTtnQkFDWixFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsT0FBTyxZQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsSUFBSSxZQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3hEO2lCQUFNO2dCQUNILFlBQVk7Z0JBQ1osRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE9BQU8sWUFBQyxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksWUFBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVE7YUFDaEU7U0FDSjthQUFNLElBQUksbUJBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsSUFBSSxJQUFJLElBQUkseUJBQVcsQ0FBQyxLQUFLLEVBQUU7Z0JBQzNCLFlBQVk7Z0JBQ1osOENBQThDO2dCQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsT0FBTyxZQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsSUFBSSxZQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzFEO2lCQUFNO2dCQUNILFlBQVk7Z0JBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE9BQU8sWUFBQyxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksWUFBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVE7YUFDbEU7U0FDSjthQUFNLElBQUksbUJBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDekIsSUFBSSxJQUFJLElBQUkseUJBQVcsQ0FBQyxLQUFLLEVBQUU7Z0JBQzNCLFlBQVk7Z0JBQ1osOENBQThDO2dCQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsT0FBTyxZQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsSUFBSSxZQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzFEO2lCQUFNO2dCQUNILFlBQVk7Z0JBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE9BQU8sWUFBQyxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksWUFBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVE7YUFDbEU7U0FDSjthQUFNLElBQUksbUJBQVMsQ0FBQyxlQUFlLEVBQUU7WUFDbEMsSUFBSSxJQUFJLElBQUkseUJBQVcsQ0FBQyxLQUFLLEVBQUU7Z0JBQzNCLFlBQVk7Z0JBQ1osR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDMUY7aUJBQU07Z0JBQ0gsWUFBWTtnQkFDWixHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLGFBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN6RjtTQUNKO0lBQ0wsQ0FBQztJQUdEOzs7O09BSUc7SUFDSCx5QkFBUyxHQUFULFVBQVUsS0FBYSxFQUFFLEtBQWM7UUFDbkMsa0JBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLGFBQUssQ0FBQyxRQUFRLElBQUksYUFBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksYUFBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEYsSUFBSSxtQkFBUyxDQUFDLFFBQVEsSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTtZQUN4QyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUlEOzs7Ozs7OztNQVFFO0lBQ0YsdUJBQU8sR0FBUCxVQUFRLEtBQWEsRUFBRSxJQUFnQixFQUFFLEtBQWMsRUFBRSxRQUF3QjtRQUExRCxxQkFBQSxFQUFBLFFBQWdCO1FBQWtCLHlCQUFBLEVBQUEsZUFBd0I7UUFDN0Usa0JBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyQyxhQUFLLENBQUMsUUFBUSxJQUFJLGFBQUssQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLElBQUksYUFBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUseUJBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqSCxJQUFJLG1CQUFTLENBQUMsTUFBTSxFQUFFO1lBQ2xCLGFBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUNyQztRQUNELGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFekQsQ0FBQztJQUNEOzs7Ozs7TUFNRTtJQUNGLHdCQUFRLEdBQVIsVUFBUyxLQUFhLEVBQUUsS0FBYyxFQUFFLFFBQXdCO1FBQXhCLHlCQUFBLEVBQUEsZUFBd0I7UUFDNUQsa0JBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLGFBQUssQ0FBQyxRQUFRLElBQUksYUFBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsSUFBSSxhQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSx5QkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xILGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCx3QkFBUSxHQUFSLFVBQVMsS0FBYSxFQUFFLEtBQWM7UUFDbEMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7O09BR0c7SUFDSCx5QkFBUyxHQUFULFVBQVUsU0FBaUI7UUFDdkIsa0JBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUdEOzs7O09BSUc7SUFDSCx3QkFBUSxHQUFSLFVBQVMsT0FBZSxFQUFFLE1BQU87UUFDN0IsYUFBSyxDQUFDLE9BQU8sQ0FBQyw4QkFBUSxPQUFPLGNBQUksTUFBUSxDQUFDLENBQUM7UUFDM0MsSUFBSSxtQkFBUyxDQUFDLGVBQWUsRUFBRTtZQUMzQixhQUFLLENBQUMsUUFBUSxJQUFJLGFBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxJQUFJLGFBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDN0c7YUFBTTtZQUNILGFBQUssQ0FBQyxRQUFRLElBQUksYUFBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLElBQUksYUFBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ25HO0lBQ0wsQ0FBQztJQUtELHdDQUF3QixHQUF4QixVQUF5QixRQUFpQjtRQUExQyxpQkFpQkM7UUFoQkcsYUFBSyxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFO1lBQ25DLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDakUsSUFBSSxJQUFJLEdBQVEsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLGFBQUssQ0FBQyxZQUFZLENBQUMsa0RBQVUsRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVCLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2pELFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVEOzs7T0FHRztJQUNILDRCQUFZLEdBQVosVUFBYSxTQUFpQixFQUFFLE9BQTJCLEVBQUUsU0FBa0IsRUFBRSxVQUEwQjtRQUEzRSx3QkFBQSxFQUFBLG1CQUEyQjtRQUFzQiwyQkFBQSxFQUFBLGlCQUEwQjtRQUN2RyxhQUFLLENBQUMsT0FBTyxDQUFDLGdEQUFXLFNBQVMsY0FBSSxPQUFPLFNBQUksU0FBVyxDQUFDLENBQUM7UUFDOUQsYUFBSyxDQUFDLFFBQVEsSUFBSSxhQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksSUFBSSxhQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM1SCxDQUFDO0lBR0Q7Ozs7O09BS0c7SUFDVyxhQUFPLEdBQXJCLFVBQXNCLEtBQWEsRUFBRSxRQUFnQixFQUFFLEtBQWM7UUFDakUsa0JBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBTUQ7OztNQUdFO0lBQ0ssK0JBQWUsR0FBdEIsVUFBdUIsSUFBSTtRQUN2QixJQUFJLEtBQUssR0FBRyxhQUFLLENBQUMsWUFBWSxDQUFDO1FBQy9CLElBQUksU0FBUyxHQUFHLGFBQUssQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxNQUFNLEdBQUcsYUFBSyxDQUFDLFlBQVksQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1QsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUMsQ0FBQTtZQUMzQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUM7U0FDcEI7UUFDRCxJQUFJLG1CQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3BCLElBQUksTUFBTSxDQUFDLHVCQUF1QixFQUFFO2dCQUNoQyxJQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsdUJBQXVCLENBQUM7Z0JBQ2xELElBQUksWUFBWSxJQUFJLENBQUMsSUFBSSxhQUFLLENBQUMsbUJBQW1CLElBQUksWUFBWSxFQUFFO29CQUNoRSxhQUFLLENBQUMsT0FBTyxDQUFDLGlFQUFhLFlBQVksK0JBQVEsQ0FBQyxDQUFBO2lCQUNuRDtxQkFBTTtvQkFDSCxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUM7b0JBQzdDLElBQUksV0FBUyxHQUFZLEtBQUssQ0FBQztvQkFDL0IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLFVBQVUsSUFBSSxDQUFDLEVBQUU7d0JBQzlCLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTs0QkFDL0IsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQ0FDakMsV0FBUyxHQUFHLElBQUksQ0FBQzs2QkFDcEI7eUJBQ0o7NkJBQU07NEJBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyw2QkFBTyxNQUFNLENBQUMsb0JBQW9CLDBFQUFjLEtBQU8sQ0FBQyxDQUFDOzRCQUN2RSxJQUFJLGNBQWMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUMzQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztnQ0FDdEIsSUFBSSxLQUFLLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29DQUN0QixXQUFTLEdBQUcsSUFBSSxDQUFDO2lDQUNwQjs0QkFDTCxDQUFDLENBQUMsQ0FBQzt5QkFDTjt3QkFDRCxJQUFJLFdBQVMsRUFBRTs0QkFDWCxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsSUFBSSxLQUFLLEVBQUU7Z0NBQ3hDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQzs2QkFDcEI7NEJBQ0QsSUFBSSxNQUFNLENBQUMsc0JBQXNCLElBQUksU0FBUyxFQUFFO2dDQUM1QyxJQUFJLGFBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO29DQUN6QixPQUFPLElBQUksSUFBSSxDQUFDLENBQUM7aUNBQ3BCOzZCQUNKOzRCQUNELElBQUksTUFBTSxDQUFDLHNCQUFzQixJQUFJLE1BQU0sRUFBRTtnQ0FDekMsSUFBSSxhQUFLLENBQUMsU0FBUyxJQUFJLEtBQUssRUFBRTtvQ0FDMUIsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDO2lDQUNwQjs2QkFDSjt5QkFDSjtxQkFDSjtpQkFDSjthQUNKO1NBQ0o7UUFDRCxhQUFLLENBQUMsT0FBTyxDQUFDLHNHQUFvQixNQUFNLENBQUMsb0JBQW9CLDhDQUFXLE1BQU0sQ0FBQyxzQkFBd0IsQ0FBQyxDQUFDO1FBQ3pHLElBQUksTUFBTSxDQUFDLG1CQUFtQixJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLEVBQUU7WUFDL0QsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1lBQ3ZDLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQTtZQUMxQyxJQUFJLEtBQUssR0FBRyxLQUFLLElBQUksQ0FBQyxFQUFFO2dCQUNwQixJQUFJLFFBQVEsSUFBSSxLQUFLLEVBQUU7b0JBQ25CLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQztpQkFDcEI7Z0JBQ0QsSUFBSSxRQUFRLElBQUksU0FBUyxFQUFFO29CQUN2QixJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7d0JBQ25CLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQztxQkFDcEI7aUJBQ0o7Z0JBQ0QsSUFBSSxRQUFRLElBQUksTUFBTSxFQUFFO29CQUNwQixJQUFJLFNBQVMsSUFBSSxLQUFLLEVBQUU7d0JBQ3BCLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQztxQkFDcEI7aUJBQ0o7YUFDSjtTQUNKO1FBQ0QsYUFBSyxDQUFDLE9BQU8sQ0FBQyx5RkFBaUIsTUFBTSxDQUFDLG1CQUFtQixtREFBVyxNQUFNLENBQUMsb0JBQXNCLENBQUMsQ0FBQTtRQUVsRyxJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsSUFBSSxNQUFNLENBQUMsd0JBQXdCLElBQUksQ0FBQyxFQUFFO1lBQ3pFLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztZQUM1QyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUM7WUFDM0MsSUFBSSxLQUFLLEdBQUcsS0FBSyxJQUFJLENBQUMsRUFBRTtnQkFDcEIsSUFBSSxRQUFRLElBQUksS0FBSyxFQUFFO29CQUNuQixPQUFPLElBQUksSUFBSSxDQUFDLENBQUM7aUJBQ3BCO2dCQUNELElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRTtvQkFDdkIsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO3dCQUNuQixPQUFPLElBQUksSUFBSSxDQUFDLENBQUM7cUJBQ3BCO2lCQUNKO2dCQUNELElBQUksUUFBUSxJQUFJLE1BQU0sRUFBRTtvQkFDcEIsSUFBSSxTQUFTLElBQUksS0FBSyxFQUFFO3dCQUNwQixPQUFPLElBQUksSUFBSSxDQUFDLENBQUM7cUJBQ3BCO2lCQUNKO2FBQ0o7U0FDSjtRQUNELGFBQUssQ0FBQyxPQUFPLENBQUMsbUZBQWdCLE1BQU0sQ0FBQyx3QkFBd0IsbURBQVcsTUFBTSxDQUFDLG9CQUFzQixDQUFDLENBQUE7UUFFdEcsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBRXJCLENBQUM7SUFHRDs7Ozs7Ozs7T0FRRztJQUNJLGlDQUFpQixHQUF4QixVQUF5QixLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVE7UUFDL0MsYUFBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDM0IsYUFBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxHQUFHLEdBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFBO1FBQzNDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxhQUFLLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUE7WUFDeEMsT0FBTyxHQUFHLENBQUM7U0FDZDtRQUVELElBQUksV0FBVyxHQUFZLEtBQUssQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDekIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLElBQUksT0FBTztnQkFBRSxPQUFPO1lBQ3JFLElBQUksbUJBQVMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3BCLGFBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGFBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNwRyxJQUFJLGFBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUNyRSxhQUFLLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFBO29CQUM5QixhQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxjQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUN0QjthQUNKO2lCQUFNLElBQUksbUJBQVMsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksYUFBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQ2pFLGFBQUssQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUE7b0JBQzlCLGFBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLGNBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ3RCO2FBQ0o7aUJBQU0sSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTtnQkFDekIsSUFBSSxhQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDbkUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQTtvQkFDOUIsYUFBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsY0FBUSxDQUFDLENBQUMsQ0FBQztvQkFDckMsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDdEI7YUFDSjtpQkFBTSxJQUFJLG1CQUFTLENBQUMsT0FBTyxFQUFFO2dCQUMxQixJQUFJLGFBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUNwRSxhQUFLLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFBO29CQUM5QixhQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxjQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUN0QjthQUNKO2lCQUFNLElBQUksbUJBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLElBQUksYUFBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQ25FLGFBQUssQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUE7b0JBQzlCLGFBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLGNBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ3RCO2FBQ0o7aUJBQU0sSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTtnQkFDekIsSUFBSSxhQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDbkUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQTtvQkFDOUIsYUFBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsY0FBUSxDQUFDLENBQUMsQ0FBQztvQkFDckMsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDdEI7YUFDSjtpQkFBTSxJQUFJLG1CQUFTLENBQUMsZUFBZSxFQUFFO2dCQUNsQyxJQUFJLGFBQUssQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQzVFLGFBQUssQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUE7b0JBQzlCLElBQUksYUFBSyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksY0FBYyxFQUFFO3dCQUNoRixhQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxjQUFRLENBQUMsQ0FBQyxDQUFDO3FCQUN4Qzt5QkFBTTt3QkFDSCxhQUFLLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLENBQUM7cUJBQ3pDO29CQUNELFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ3RCO3FCQUFNO29CQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtpQkFDckM7YUFDSjtpQkFBTSxJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFO2dCQUM5QixJQUFJLGFBQUssQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUN4RSxhQUFLLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFBO29CQUM5QixJQUFJLGFBQUssQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLGNBQWMsRUFBRTt3QkFDaEYsYUFBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsY0FBUSxDQUFDLENBQUMsQ0FBQztxQkFDeEM7eUJBQU07d0JBQ0gsYUFBSyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO3FCQUN6QztvQkFDRCxXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUN0QjthQUNKO2lCQUFNLElBQUksbUJBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLGFBQUssQ0FBQyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtnQkFDaEQsYUFBSyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3RDO2lCQUFNO2dCQUNILFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ25CLGFBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLGNBQVEsQ0FBQyxDQUFDLENBQUM7YUFDeEM7WUFDRCxJQUFJLFdBQVcsSUFBSSxDQUFDLG1CQUFTLENBQUMsUUFBUSxJQUFJLG1CQUFTLENBQUMsSUFBSSxJQUFJLG1CQUFTLENBQUMsZUFBZSxJQUFJLG1CQUFTLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQzdHLGFBQUssQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUNuQztpQkFBTTtnQkFDSCxHQUFHLEdBQUcsYUFBSyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQzVDO1NBQ0o7UUFHRCwrRkFBK0Y7UUFDL0YsMkNBQTJDO1FBQzNDLG9EQUFvRDtRQUNwRCxJQUFJO1FBR0osSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3pCLEdBQUcsR0FBRyxhQUFLLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDekMscURBQXFEO1NBQ3hEO1FBTUQsSUFBSSxtQkFBUyxDQUFDLFFBQVEsSUFBSSxtQkFBUyxDQUFDLFdBQVcsSUFBSSxtQkFBUyxDQUFDLE9BQU8sSUFBSSxtQkFBUyxDQUFDLGVBQWUsRUFBRTtZQUMvRixpQkFBaUI7WUFDakIsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFDYixHQUFHLENBQUMsSUFBSSxHQUFHLGFBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBR0Q7O09BRUc7SUFDSSw4QkFBYyxHQUFyQixVQUFzQixPQUFrQjtRQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BDLElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7U0FDbEM7UUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQyxhQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsK0JBQWUsR0FBZixVQUFnQixLQUFLO1FBQ2pCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNqRCxhQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdkI7YUFBTTtZQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLDZCQUE2QixDQUFDLENBQUE7U0FDekQ7SUFDTCxDQUFDO0lBSUQ7OztPQUdHO0lBQ0ksb0NBQW9CLEdBQTNCLFVBQTRCLE1BQWtCO1FBQWxCLHVCQUFBLEVBQUEsYUFBa0I7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDckMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUMsSUFBSSxJQUFJLEdBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzdFLElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7b0JBQzVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDbkM7Z0JBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3BDLElBQUksTUFBTSxHQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUVyRCxJQUFJLE1BQU0sRUFBRTtvQkFDUixJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7d0JBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO3FCQUM3QjtvQkFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO3dCQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7cUJBQzdCO29CQUVELElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUU7d0JBQ3BCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO3dCQUN6QixNQUFNLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzt3QkFDN0IsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO3FCQUMzQjt5QkFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO3dCQUM5QixNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzt3QkFDMUIsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7d0JBQzVCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztxQkFDakM7b0JBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTt3QkFDckIsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7d0JBQzFCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO3dCQUM1QixNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7cUJBQzdCO3lCQUFNLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7d0JBQzdCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO3dCQUMzQixNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzt3QkFDM0IsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO3FCQUMvQjtvQkFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO3dCQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7cUJBQy9CO3lCQUFNO3dCQUNILEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDaEU7aUJBQ0o7cUJBQU07b0JBQ0gsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNoRTtnQkFDRCxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3pCLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjthQUFNO1lBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1NBQ3BFO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUtELHNCQUFXLDhCQUFXO1FBSHRCOztXQUVHO2FBQ0g7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUN2RTtZQUNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUVEOzs7O09BSUc7SUFDSSw2QkFBYSxHQUFwQixVQUFxQixRQUFnQjtRQUNqQyxJQUFJLEtBQUssR0FBVyxDQUFDLENBQUM7UUFFdEIsSUFBSSxhQUFLLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsRUFBRTtZQUNuRSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxRQUFRLEdBQUcsS0FBSyxJQUFJLENBQUMsRUFBRTtZQUN2QixJQUFJLGFBQUssQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLFNBQVMsRUFBRTtnQkFDckYsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDbEUsYUFBSyxDQUFDLE9BQU8sQ0FBQywrQ0FBVSxJQUFJLENBQUMsY0FBYyxDQUFDLDJCQUEyQixDQUFDLGlFQUFZLENBQUMsQ0FBQztvQkFDdEYsYUFBSyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2lCQUN0QzthQUNKO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFHRDs7Ozs7T0FLRztJQUNJLDJCQUFXLEdBQWxCLFVBQW1CLEdBQVksRUFBRSxVQUEyQixFQUFFLFFBQThDO1FBQTNFLDJCQUFBLEVBQUEsa0JBQTJCO1FBQUUseUJBQUEsRUFBQSxXQUEyQiw0QkFBYyxDQUFDLElBQUk7UUFDeEcsSUFBSSxHQUFHLEVBQUU7WUFFTCxJQUFJLFlBQVksR0FBVyxtQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLEVBQUU7Z0JBQzVDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUM7YUFDN0Q7WUFDRCxJQUFJLFVBQVUsRUFBRTtnQkFDWixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsNkJBQTZCLENBQUMsRUFBRTtvQkFDcEQsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsNkJBQTZCLENBQUMsQ0FBQztpQkFDckU7YUFDSjtZQUVELElBQUksbUJBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsNkJBQTZCLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZEO1lBQ0QsSUFBSSxRQUFRLElBQUksNEJBQWMsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQywrQkFBK0IsQ0FBQyxFQUFFO29CQUN0RCxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO2lCQUN2RTthQUNKO1lBRUQsSUFBSSxZQUFZLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQixHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDeEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ2xCLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNqQztnQkFDTCxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7YUFDcEI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7b0JBQ2IsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7aUJBQ3JCO2FBQ0o7U0FFSjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSw2QkFBYSxHQUFwQixVQUFxQixHQUFZO1FBQzdCLElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDaEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxZQUFZLEdBQVcsQ0FBQyxDQUFDO1lBQzdCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO2dCQUM1QyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2FBQzdEO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUN4QixHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDakM7WUFDTCxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxxQ0FBcUIsR0FBNUI7UUFDSSxJQUFJLFNBQVMsR0FBVyxDQUFDLENBQUM7UUFDMUIsSUFBSSxLQUFLLEdBQUcsYUFBSyxDQUFDLFlBQVksQ0FBQztRQUMvQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsRUFBRTtZQUM5QyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO2FBQU07WUFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUE7U0FDbEM7UUFDRCxJQUFJLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQ7O09BRUc7SUFDSSx3Q0FBd0IsR0FBL0I7UUFDSSxJQUFJLFNBQVMsR0FBVyxDQUFDLENBQUM7UUFDMUIsSUFBSSxLQUFLLEdBQUcsYUFBSyxDQUFDLFlBQVksQ0FBQztRQUMvQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsMEJBQTBCLENBQUMsRUFBRTtZQUNqRCxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFO2FBQU07WUFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUE7U0FDbEM7UUFDRCxJQUFJLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQ7O09BRUc7SUFDSSx5Q0FBeUIsR0FBaEM7UUFDSSxJQUFJLFNBQVMsR0FBVyxDQUFDLENBQUM7UUFDMUIsSUFBSSxLQUFLLEdBQUcsYUFBSyxDQUFDLFlBQVksQ0FBQztRQUMvQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsRUFBRTtZQUMvQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1NBQ3JFO2FBQU07WUFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUE7U0FDbEM7UUFDRCxJQUFJLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU0seUJBQVMsR0FBaEIsVUFBaUIsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRO1FBQ3BDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNmLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0QsRUFBRSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO1lBQ3JDLE9BQU07U0FDVDtRQUVELHNDQUFzQztRQUN0QyxpREFBaUQ7UUFDakQsMENBQTBDO1FBQzFDLDRDQUE0QztRQUM1QyxRQUFRO1FBQ1IsSUFBSTtRQUVKLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3ZDLE9BQU07U0FDVDtRQUVELElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUQsSUFBSSxXQUFXLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtZQUN0RCxJQUFJLFFBQVEsRUFBRTtnQkFDVixRQUFRLENBQUMsV0FBVyxDQUFDLENBQUE7YUFDeEI7U0FDSjthQUFNO1lBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtZQUMvQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsVUFBVSxHQUFHLEVBQUUsV0FBVztnQkFDdkUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDN0QsT0FBTTtpQkFDVDtnQkFFRCxJQUFJLFdBQVcsRUFBRTtvQkFDYixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7aUJBQ3pEO3FCQUFNO29CQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2lCQUNwQjtnQkFFRCxJQUFJLFFBQVEsRUFBRTtvQkFDVixRQUFRLENBQUMsV0FBVyxDQUFDLENBQUE7aUJBQ3hCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFRCx3QkFBUSxHQUFSLFVBQVMsSUFBSTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUN0RCxDQUFDO0lBS0Qsc0JBQUksOEJBQVc7UUFIZjs7V0FFRzthQUNIO1lBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVztnQkFBRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkYsT0FBTyxJQUFJLENBQUE7UUFDZixDQUFDOzs7T0FBQTtJQUNEOzs7Ozs7Ozs7TUFTRTtJQUNLLDBCQUFVLEdBQWpCLFVBQWtCLElBQWtCO1FBQ2hDLElBQUksTUFBTSxHQUFRLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQzdGLElBQUksVUFBbUIsQ0FBQztRQUN4QixJQUFJLFVBQWtCLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQUssQ0FBQyxZQUFZLEVBQUU7WUFDckIsYUFBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMxQixPQUFPLE1BQU0sQ0FBQztTQUNqQjtRQUVELGVBQWU7UUFDZixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxPQUFPLEVBQUU7WUFDbEQsYUFBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM3QixPQUFPLE1BQU0sQ0FBQztTQUNqQjtRQUdELE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBR3RCLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSywwQkFBWSxDQUFDLElBQUk7Z0JBQ2xCLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvRyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsSUFBSSxNQUFNLEVBQUU7b0JBQ3JELFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDcEQ7cUJBQU07b0JBQ0gsVUFBVSxHQUFHLElBQUksQ0FBQztpQkFDckI7Z0JBRUQsSUFBSSxVQUFVLEVBQUU7b0JBQ1osTUFBTSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUM7aUJBQzdCO3FCQUFNO29CQUNILE1BQU0sQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO2lCQUMxQjtnQkFDRCxNQUFNO1lBQ1YsS0FBSywwQkFBWSxDQUFDLE9BQU87Z0JBQ3JCLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNySCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsSUFBSSxNQUFNLEVBQUU7b0JBQ3hELFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDcEQ7cUJBQU07b0JBQ0gsVUFBVSxHQUFHLElBQUksQ0FBQztpQkFDckI7Z0JBRUQsSUFBSSxVQUFVLEVBQUU7b0JBQ1osTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUM7aUJBQzNCO3FCQUFNO29CQUNILE1BQU0sQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDO2lCQUM1QjtnQkFDRCxNQUFNO1lBRVYsS0FBSywwQkFBWSxDQUFDLEdBQUc7Z0JBQ2pCLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3RyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsSUFBSSxNQUFNLEVBQUU7b0JBQ3BELFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDcEQ7cUJBQU07b0JBQ0gsVUFBVSxHQUFHLElBQUksQ0FBQztpQkFDckI7Z0JBQ0QsSUFBSSxVQUFVLEVBQUU7b0JBQ1osTUFBTSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUM7aUJBQzdCO3FCQUFNO29CQUNILE1BQU0sQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO2lCQUMxQjtnQkFDRCxNQUFNO1lBQ1YsS0FBSywwQkFBWSxDQUFDLFVBQVU7Z0JBQ3hCLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3SCxNQUFNO1lBQ1YsS0FBSywwQkFBWSxDQUFDLE9BQU87Z0JBQ3JCLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2SCxNQUFNO1lBQ1YsS0FBSywwQkFBWSxDQUFDLFFBQVE7Z0JBQ3RCLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6SCxNQUFNO1lBQ1YsS0FBSywwQkFBWSxDQUFDLFNBQVM7Z0JBQ3ZCLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6SCxNQUFNO1NBQ2I7UUFDRCxJQUFJLFVBQVUsSUFBSSxDQUFDLEVBQUU7WUFDakIsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDM0I7YUFBTSxJQUFJLFVBQVUsSUFBSSxDQUFDLEVBQUU7WUFDeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDMUI7YUFBTSxJQUFJLFVBQVUsSUFBSSxDQUFDLEVBQUU7WUFDeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUN6RDtRQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDL0MsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVEOztNQUVFO0lBQ0YsZ0NBQWdCLEdBQWhCLFVBQWlCLEtBQUs7UUFDbEIsSUFBSSxhQUFLLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsMEJBQTBCLENBQUMsRUFBRTtZQUN2RSxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7WUFDbEUsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRTtnQkFDakIsSUFBSSxLQUFLLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRTtvQkFDbEIsSUFBSSxtQkFBUyxDQUFDLFFBQVEsRUFBRTt3QkFDcEIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLGFBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTs0QkFDckUsT0FBTyxJQUFJLENBQUM7eUJBQ2Y7cUJBQ0o7eUJBQU0sSUFBSSxtQkFBUyxDQUFDLE9BQU8sRUFBRTt3QkFDMUIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLGFBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTs0QkFDcEUsT0FBTyxJQUFJLENBQUM7eUJBQ2Y7cUJBQ0o7eUJBQU0sSUFBSSxtQkFBUyxDQUFDLElBQUksRUFBRTt3QkFDdkIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLGFBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTs0QkFDakUsT0FBTyxJQUFJLENBQUM7eUJBQ2Y7cUJBQ0o7eUJBQU07d0JBQ0gsT0FBTyxJQUFJLENBQUM7cUJBQ2Y7aUJBQ0o7cUJBQU07b0JBQ0gsSUFBSSxtQkFBUyxDQUFDLE1BQU0sRUFBRTt3QkFDbEIsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFBLG1CQUFtQjt3QkFDM0IsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFOzRCQUM5QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7eUJBQ3BCO3FCQUNKO2lCQUNKO2FBQ0o7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFJRDs7T0FFRztJQUNJLDZCQUFhLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDckMsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFbkMsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLElBQUksTUFBTSxFQUFFO1lBQ3RILE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxhQUFLLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFPRDs7T0FFRztJQUNJLG9DQUFvQixHQUEzQjtRQUNJLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDOUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG9DQUFvQixHQUEzQixVQUE0QixNQUFrQjtRQUFsQix1QkFBQSxFQUFBLGFBQWtCO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JCLGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBR3ZDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUMsSUFBSSxJQUFJLEdBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzdFLElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7b0JBQzlELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDcEM7Z0JBQ0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztnQkFDOUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3JDLElBQUksTUFBTSxHQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUVyRCxJQUFJLE1BQU0sRUFBRTtvQkFDUixJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7d0JBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO3FCQUM3QjtvQkFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO3dCQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7cUJBQzdCO29CQUNELElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUU7d0JBQ3BCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO3dCQUN6QixNQUFNLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzt3QkFDN0IsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO3FCQUMzQjt5QkFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO3dCQUM5QixNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzt3QkFDMUIsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7d0JBQzVCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztxQkFDakM7b0JBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTt3QkFDckIsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7d0JBQzFCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO3dCQUM1QixNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7cUJBQzdCO3lCQUFNLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7d0JBQzdCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO3dCQUMzQixNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzt3QkFDM0IsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO3FCQUMvQjtvQkFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO3dCQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7cUJBQy9CO2lCQUNKO2dCQUNELE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDekIsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO2FBQU07WUFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxpREFBaUQsQ0FBQyxDQUFDO1NBQzlFO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQVFEOztPQUVHO0lBQ0ksd0NBQXdCLEdBQS9CO1FBQ0ksSUFBSSxJQUFJLENBQUMscUJBQXFCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRTtZQUN0RSxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDeEM7SUFDTCxDQUFDO0lBQ0Q7OztNQUdFO0lBQ0ssd0NBQXdCLEdBQS9CLFVBQWdDLE1BQWtCO1FBQWxCLHVCQUFBLEVBQUEsYUFBa0I7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDckMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFdkMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRTtZQUM5QyxJQUFJLElBQUksR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDakYsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxJQUFJLENBQUMscUJBQXFCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRTtvQkFDdEUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUN4QztnQkFDRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO2dCQUNsQyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDekMsSUFBSSxNQUFNLEdBQWMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRXJELElBQUksTUFBTSxFQUFFO29CQUNSLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTt3QkFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyw4QkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDeEQ7b0JBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO3dCQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztxQkFDN0I7b0JBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTt3QkFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO3FCQUM3QjtvQkFDRCxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFO3dCQUNwQixNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzt3QkFDekIsTUFBTSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7d0JBQzdCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztxQkFDM0I7eUJBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTt3QkFDOUIsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7d0JBQzFCLE1BQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO3dCQUM1QixNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7cUJBQ2pDO29CQUNELElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7d0JBQ3JCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO3dCQUMxQixNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzt3QkFDNUIsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO3FCQUM3Qjt5QkFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO3dCQUM3QixNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzt3QkFDM0IsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7d0JBQzNCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztxQkFDL0I7b0JBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTt3QkFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO3FCQUMvQjtpQkFDSjtnQkFDRCxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3pCLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjthQUFNO1lBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcscURBQXFELENBQUMsQ0FBQztTQUNsRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFJRDs7O0tBR0M7SUFDTSxtQ0FBbUIsR0FBMUIsVUFBMkIsTUFBa0I7UUFBbEIsdUJBQUEsRUFBQSxhQUFrQjtRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNyQyxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQztRQUV2QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRTtZQUN6QyxJQUFJLElBQUksR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzVFLElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7b0JBQzVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDbkM7Z0JBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFDN0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ2hFO2lCQUFNO2dCQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLGdEQUFnRCxDQUFDLENBQUM7YUFDN0U7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQUdEOzs7S0FHQztJQUNNLG1DQUFtQixHQUExQixVQUEyQixNQUFrQjtRQUFsQix1QkFBQSxFQUFBLGFBQWtCO1FBRXpDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1NBQy9DO1FBR0QsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDL0MsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDL0MsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyw0QkFBYyxDQUFDLElBQUksRUFBRTtZQUN0RSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUU7Z0JBQ2pHLGFBQUssQ0FBQyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQy9DLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7aUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFO2dCQUN4QyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzthQUN2QjtTQUNKO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUU7WUFDekMsSUFBSSxJQUFJLEdBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM1RSxJQUFJLElBQUksRUFBRTtnQkFDTixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUM1RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ25DO2dCQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7Z0JBQzdCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMseUJBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ2pGO2dCQUNELEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzthQUUvQztpQkFBTTtnQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxnREFBZ0QsQ0FBQyxDQUFDO2FBQzdFO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7SUFJRDs7O0tBR0M7SUFDTSxxQ0FBcUIsR0FBNUIsVUFBNkIsTUFBa0I7UUFBbEIsdUJBQUEsRUFBQSxhQUFrQjtRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNyQyxPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQztRQUN2QyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUNuQyw2RUFBNkU7UUFDN0UsSUFBSSxJQUFJLENBQUMsMkJBQTJCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQyxhQUFLLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDdEMsT0FBTztTQUNWO1FBQ0QsSUFBSTtRQUVKLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUU7WUFDM0MsSUFBSSxJQUFJLEdBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzlFLElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksSUFBSSxDQUFDLGtCQUFrQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7b0JBQ2hFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDckM7Z0JBQ0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztnQkFDL0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ2xFO2lCQUFNO2dCQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLGdEQUFnRCxDQUFDLENBQUM7YUFDN0U7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQUlEOztNQUVFO0lBQ0ssd0NBQXdCLEdBQS9CO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDckMsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDbkMsSUFBSSxtQkFBUyxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLGFBQUssQ0FBQywyQkFBMkIsRUFBRSxFQUFFO2dCQUNyQyxJQUFJLGFBQUssQ0FBQyxVQUFVO3VCQUNiLGFBQUssQ0FBQyxVQUFVLENBQUMsWUFBWTt1QkFDN0IsYUFBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUU7b0JBQ25ELElBQUksYUFBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLElBQUksTUFBTSxFQUFFO3dCQUMxRCxPQUFPLElBQUksQ0FBQztxQkFDZjt5QkFBTTt3QkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyx3Q0FBd0MsQ0FBQyxDQUFDO3FCQUNyRTtpQkFDSjtxQkFBTTtvQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyx1Q0FBdUMsQ0FBQyxDQUFDO2lCQUNwRTthQUNKO2lCQUFNO2dCQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLDRCQUE0QixDQUFDLENBQUM7YUFDekQ7U0FDSjthQUFNLElBQUksbUJBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDekIsSUFBSSxhQUFLLENBQUMsMkJBQTJCLEVBQUUsRUFBRTtnQkFDckMsSUFBSSxhQUFLLENBQUMsUUFBUTt1QkFDWCxhQUFLLENBQUMsUUFBUSxDQUFDLFlBQVk7dUJBQzNCLGFBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFO29CQUNqRCxJQUFJLGFBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGdCQUFnQixJQUFJLE1BQU0sRUFBRTt3QkFDeEQsT0FBTyxJQUFJLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsd0NBQXdDLENBQUMsQ0FBQztxQkFDckU7aUJBQ0o7cUJBQU07b0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsdUNBQXVDLENBQUMsQ0FBQztpQkFDcEU7YUFDSjtpQkFBTTtnQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyw0QkFBNEIsQ0FBQyxDQUFDO2FBQ3pEO1NBQ0o7YUFBTSxJQUFJLG1CQUFTLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksbUJBQVMsQ0FBQyxTQUFTO21CQUNoQixhQUFLLENBQUMsMkJBQTJCLEVBQUUsRUFBRTtnQkFDeEMsSUFBSSxhQUFLLENBQUMsV0FBVzt1QkFDZCxhQUFLLENBQUMsV0FBVyxDQUFDLFlBQVk7dUJBQzlCLGFBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFO29CQUNwRCxJQUFJLGFBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGdCQUFnQixJQUFJLE1BQU0sRUFBRTt3QkFDM0QsT0FBTyxJQUFJLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsd0NBQXdDLENBQUMsQ0FBQztxQkFDckU7aUJBQ0o7cUJBQU07b0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsdUNBQXVDLENBQUMsQ0FBQztpQkFDcEU7YUFDSjtpQkFBTTtnQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyw0QkFBNEIsQ0FBQyxDQUFDO2FBQ3pEO1NBQ0o7YUFBTSxJQUFJLG1CQUFTLENBQUMsT0FBTyxFQUFFO1lBQzFCLElBQUksYUFBSyxDQUFDLDJCQUEyQixFQUFFLEVBQUU7Z0JBQ3JDLElBQUksYUFBSyxDQUFDLFVBQVU7dUJBQ2IsYUFBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZO3VCQUM3QixhQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDbkQsSUFBSSxhQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsSUFBSSxNQUFNLEVBQUU7d0JBQzFELE9BQU8sSUFBSSxDQUFDO3FCQUNmO3lCQUFNO3dCQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLHdDQUF3QyxDQUFDLENBQUM7cUJBQ3JFO2lCQUNKO3FCQUFNO29CQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLHVDQUF1QyxDQUFDLENBQUM7aUJBQ3BFO2FBQ0o7aUJBQU07Z0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsNEJBQTRCLENBQUMsQ0FBQzthQUN6RDtTQUNKO2FBQU0sSUFBSSxtQkFBUyxDQUFDLElBQUksRUFBRTtZQUN2QixJQUFJLGFBQUssQ0FBQywyQkFBMkIsRUFBRSxFQUFFO2dCQUNyQyxJQUFJLGFBQUssQ0FBQyxPQUFPO3VCQUNWLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWTt1QkFDMUIsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUU7b0JBQ2hELElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLElBQUksTUFBTSxFQUFFO3dCQUN2RCxPQUFPLElBQUksQ0FBQztxQkFDZjt5QkFBTTt3QkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyx3Q0FBd0MsQ0FBQyxDQUFDO3FCQUNyRTtpQkFDSjtxQkFBTTtvQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyx1Q0FBdUMsQ0FBQyxDQUFDO2lCQUNwRTthQUNKO2lCQUFNO2dCQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLDRCQUE0QixDQUFDLENBQUM7YUFDekQ7U0FDSjthQUFNLElBQUksbUJBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFNLElBQUksbUJBQVMsQ0FBQyxlQUFlLEVBQUU7WUFDbEMsSUFBSSxhQUFLLENBQUMsV0FBVzttQkFDZCxhQUFLLENBQUMsV0FBVyxDQUFDLFlBQVk7bUJBQzlCLGFBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFO2dCQUNwRCxJQUFJLGFBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGdCQUFnQixJQUFJLE1BQU0sRUFBRTtvQkFDM0QsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsd0NBQXdDLENBQUMsQ0FBQztpQkFDckU7YUFDSjtpQkFBTTtnQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyx1Q0FBdUMsQ0FBQyxDQUFDO2FBQ3BFO1NBQ0o7YUFBTSxJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFO1lBQzlCLElBQUksYUFBSyxDQUFDLFFBQVE7bUJBQ1gsYUFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZO21CQUMzQixhQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDakQsSUFBSSxhQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsSUFBSSxNQUFNLEVBQUU7b0JBQ3hELE9BQU8sSUFBSSxDQUFDO2lCQUNmO3FCQUFNO29CQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLHdDQUF3QyxDQUFDLENBQUM7aUJBQ3JFO2FBQ0o7aUJBQU07Z0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsdUNBQXVDLENBQUMsQ0FBQzthQUNwRTtTQUVKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7VUFHTTtJQUNDLDBDQUEwQixHQUFqQyxVQUFrQyxNQUFrQjtRQUFsQix1QkFBQSxFQUFBLGFBQWtCO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JCLGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFbEQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRTtZQUNoRCxJQUFJLElBQUksR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDbkYsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sOEVBQThFO2dCQUM5RSw0Q0FBNEM7Z0JBQzVDLElBQUk7Z0JBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksTUFBTSxHQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUVyRCxJQUFJLE1BQU0sRUFBRTtvQkFDUixJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7d0JBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO3FCQUM3QjtvQkFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO3dCQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7cUJBQzdCO29CQUNELElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUU7d0JBQ3BCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO3dCQUN6QixNQUFNLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzt3QkFDN0IsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO3FCQUMzQjt5QkFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO3dCQUM5QixNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzt3QkFDMUIsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7d0JBQzVCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztxQkFDakM7b0JBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTt3QkFDckIsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7d0JBQzFCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO3dCQUM1QixNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7cUJBQzdCO3lCQUFNLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7d0JBQzdCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO3dCQUMzQixNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzt3QkFDM0IsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO3FCQUMvQjtvQkFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO3dCQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7cUJBQy9CO29CQUVELElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7d0JBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsd0JBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO3FCQUNsRjtpQkFFSjtnQkFDRCxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3pCLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjthQUFNO1lBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsdURBQXVELENBQUMsQ0FBQztTQUNwRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFJRDs7T0FFRztJQUNJLG1DQUFtQixHQUExQjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNuQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksTUFBTSxFQUFFO1lBQzdDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7YUFBTTtZQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLGlDQUFpQyxDQUFDLENBQUM7U0FDOUQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBS0Q7OztPQUdHO0lBQ0ksaUNBQWlCLEdBQXhCLFVBQXlCLE1BQWtCO1FBQWxCLHVCQUFBLEVBQUEsYUFBa0I7UUFDdkMsSUFBSSxhQUFLLENBQUMsbUJBQW1CLEVBQUUsRUFBRTtZQUM3QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRTtnQkFDdkMsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO29CQUN4RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNqQztnQkFDRCxJQUFJLE1BQUksR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMxRSxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQUksQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNsQyxJQUFJLE1BQU0sR0FBYyxNQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFckQsSUFBSSxNQUFNLEVBQUU7b0JBRVIsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO3dCQUNkLE1BQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7cUJBQ3pDO29CQUVELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTt3QkFDZCxNQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7cUJBQzdCO29CQUNELElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7d0JBQ3RCLE1BQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztxQkFDN0I7b0JBQ0QsSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRTt3QkFDcEIsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7d0JBQ3pCLE1BQU0sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO3dCQUM3QixNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7cUJBQzNCO3lCQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7d0JBQzlCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO3dCQUMxQixNQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzt3QkFDNUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO3FCQUNqQztvQkFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO3dCQUNyQixNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzt3QkFDMUIsTUFBTSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7d0JBQzVCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztxQkFDN0I7eUJBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTt3QkFDN0IsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7d0JBQzNCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO3dCQUMzQixNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7cUJBQy9CO29CQUNELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7d0JBQ3ZCLE1BQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztxQkFDL0I7aUJBRUo7Z0JBQ0QsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN6QixNQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtvQkFDakMsSUFBSSxtQkFBUyxDQUFDLGVBQWUsRUFBRTt3QkFDM0IsYUFBSyxDQUFDLFdBQVcsSUFBSSxhQUFLLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFLENBQUM7cUJBQ2pFO3lCQUFNO3dCQUNILGFBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO3FCQUMxRTtnQkFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ1QsT0FBTyxNQUFJLENBQUM7YUFDZjtpQkFBTTtnQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMsQ0FBQTthQUMzQztTQUVKO2FBQU07WUFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMsQ0FBQTtTQUN6QztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFHRDs7T0FFRztJQUNJLGlDQUFpQixHQUF4QjtRQUNJLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUlEOztPQUVHO0lBQ0ksa0NBQWtCLEdBQXpCO1FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsSUFBSSxtQkFBUyxDQUFDLFFBQVEsRUFBRTtZQUMxQyxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDekMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksTUFBTSxFQUFFO2dCQUNuRCxPQUFPLElBQUksQ0FBQzthQUNmO2lCQUFNO2dCQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLHlDQUF5QyxDQUFDLENBQUM7YUFDdEU7U0FDSjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFHRDs7O09BR0c7SUFDSSxnQ0FBZ0IsR0FBdkIsVUFBd0IsTUFBa0I7UUFBMUMsaUJBZ0ZDO1FBaEZ1Qix1QkFBQSxFQUFBLGFBQWtCO1FBQ3RDLGFBQUssQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUVyQyxJQUFJLFNBQVMsR0FBYSxVQUFDLFFBQWU7WUFFdEMsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUU7Z0JBRXRDLElBQUksS0FBSSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtvQkFDdEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDaEM7Z0JBRUQsSUFBSSxJQUFJLEdBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDekUsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLDRCQUFrQixDQUFDLENBQUM7Z0JBQy9ELGtCQUFrQixDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2pDLElBQUksTUFBTSxHQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLE9BQU8sR0FBRyxlQUFlLENBQUM7Z0JBQzlCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7b0JBQzFCLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO2lCQUM1QjtnQkFDRCxJQUFJLE9BQU8sR0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDbkYsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7Z0JBQ3ZFLElBQUksTUFBTSxFQUFFO29CQUNSLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTt3QkFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7cUJBQzdCO29CQUNELElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7d0JBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztxQkFDN0I7b0JBQ0QsSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRTt3QkFDcEIsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7d0JBQ3pCLE1BQU0sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO3dCQUM3QixNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7cUJBQzNCO3lCQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7d0JBQzlCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO3dCQUMxQixNQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzt3QkFDNUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO3FCQUNqQztvQkFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO3dCQUNyQixNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzt3QkFDMUIsTUFBTSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7d0JBQzVCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztxQkFDN0I7eUJBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTt3QkFDN0IsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7d0JBQzNCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO3dCQUMzQixNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7cUJBQy9CO29CQUNELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7d0JBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztxQkFDL0I7eUJBQU07d0JBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQ3pEO2lCQUNKO3FCQUFNO29CQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUN6RDtnQkFDRCxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDLENBQUE7YUFDM0M7UUFDTCxDQUFDLENBQUE7UUFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsZUFBZSxFQUFFO1lBQ2xDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQjthQUFNO1lBQ0gsSUFBSSxJQUFJLEdBQUcseUJBQWUsQ0FBQyxPQUFPLENBQUMscUJBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM3RCxJQUFJLElBQUksRUFBRTtnQkFDTixhQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDOUIsYUFBSyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPO2FBQ1Y7WUFFRCxhQUFLLENBQUMsa0NBQWtDLENBQUM7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDO1lBQ2hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUVaO0lBR0wsQ0FBQztJQVNEOzs7Ozs7OztPQVFHO0lBQ0gsK0JBQWUsR0FBZixVQUFnQixRQUFpQixFQUFFLFNBQXlCLEVBQUUsU0FBeUIsRUFBRSxRQUF3QixFQUFFLFFBQThDO1FBQTlILDBCQUFBLEVBQUEsZ0JBQXlCO1FBQUUsMEJBQUEsRUFBQSxnQkFBeUI7UUFBRSx5QkFBQSxFQUFBLGVBQXdCO1FBQUUseUJBQUEsRUFBQSxXQUEyQiw0QkFBYyxDQUFDLElBQUk7UUFFN0osSUFBSSxTQUFTLEVBQUU7WUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO2dCQUFFLE9BQU87U0FDL0Q7YUFBTTtZQUNILElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFBRSxPQUFPO1NBQ3JDO1FBR0QsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7WUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUE7WUFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsR0FBRyxPQUFPLENBQUE7WUFDaEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsR0FBRyxPQUFPLENBQUE7U0FDbEQ7UUFFRCxJQUFJLFNBQVMsR0FBWSxRQUFRLENBQUM7UUFFbEMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLElBQUksTUFBTSxJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDM0UsSUFBSSxjQUFjLEdBQVksSUFBSSxDQUFDO1lBQ25DLElBQUksUUFBUSxJQUFJLDRCQUFjLENBQUMsSUFBSSxFQUFFO2dCQUNqQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsSUFBSSxPQUFPLEVBQUU7b0JBQ3hELGNBQWMsR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLGFBQUssQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDbkM7YUFDSjtZQUVELElBQUksY0FBYyxFQUFFO2dCQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQ2pDLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7Z0JBRW5DLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2YsU0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQzlCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO2lCQUNqQztxQkFBTTtvQkFDSCxTQUFTLEdBQUcsUUFBUSxDQUFDO29CQUNyQixTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztvQkFDL0IsUUFBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7aUJBQ2hDO2dCQUVELFNBQVMsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7YUFDakY7U0FFSjtRQUVELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLE1BQU0sRUFBRTtZQUNqRCxJQUFJLFFBQVEsSUFBSSw0QkFBYyxDQUFDLElBQUk7Z0JBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsSUFBSSxPQUFPLEVBQUU7Z0JBQ3ZELGFBQUssQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDaEMsT0FBTzthQUNWO1lBQ0QsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUMxQixRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzthQUN0QjtZQUVELElBQUksU0FBUyxFQUFFO2dCQUNYLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDM0IsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7YUFDdkI7WUFJRCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUNwQixFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUN2QyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDN0MsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztZQUU1QyxJQUFJLFFBQVEsRUFBRTtnQkFDVixJQUFJLFFBQVEsRUFBRTtvQkFDVixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDbEQsSUFBSSxLQUFLLEVBQUU7d0JBQ1AsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO3dCQUNoQixLQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztxQkFDNUI7aUJBQ0o7Z0JBQ0QsSUFBSSxTQUFTLEVBQUU7b0JBQ1gsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7b0JBQ25ELElBQUksS0FBSyxFQUFFO3dCQUNQLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDaEIsS0FBSyxDQUFDLGdCQUFnQixFQUFFLENBQUM7cUJBQzVCO2lCQUNKO2dCQUlELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO29CQUNwQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUM5RCxJQUFJLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQzNDLElBQUksQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBRTNCLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQ3BFO2FBQ0o7U0FDSjtJQUdMLENBQUM7SUFJRDs7T0FFRztJQUNILG1DQUFtQixHQUFuQjtRQUVJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDNUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDOUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDN0I7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUNyQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILG9DQUFvQixHQUFwQjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLElBQUksTUFBTSxFQUFFO1lBQ25ILE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBR0Q7O09BRUc7SUFDSCw2QkFBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLGFBQUssQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLEVBQUU7WUFDcEMsYUFBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM5QixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbEYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsOEJBQWMsR0FBZDtRQUVJLElBQUksQ0FBQyxhQUFLLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQ3BDLGFBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDOUIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3BGLENBQUM7SUFhTSx3Q0FBd0IsR0FBL0IsVUFBZ0MsTUFBa0I7UUFBbEIsdUJBQUEsRUFBQSxhQUFrQjtRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNyQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsbUJBQVMsQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUM5QixJQUFJLENBQUMsYUFBSyxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsRUFBRTtZQUNwQyxhQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzlCLE9BQU87U0FDVjtRQUVELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLE1BQU0sRUFBRTtZQUNwRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9HLGFBQUssQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNsRCxPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvRDthQUFNO1lBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUdEOzs7T0FHRztJQUNJLHdDQUF3QixHQUEvQjtRQUNJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBS0Q7Ozs7Ozs7Ozs7TUFVRTtJQUNLLDBDQUEwQixHQUFqQyxVQUFrQyxNQUFrQjtRQUFsQix1QkFBQSxFQUFBLGFBQWtCO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JCLGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxtQkFBUyxDQUFDLE1BQU07WUFBRSxPQUFPO1FBRzlCLElBQUksQ0FBQyxhQUFLLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQ3BDLGFBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDOUIsT0FBTztTQUNWO1FBR0QsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztZQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLDBCQUEwQixHQUFHLGdCQUFnQixDQUFBO1NBQ2xFO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLEtBQUssTUFBTSxFQUFFO1lBQ3BELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLDRCQUE0QixDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDL0csYUFBSyxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDbEQsT0FBTzthQUNWO1lBQ0Qsd0hBQXdIO1lBQ3hILHlEQUF5RDtZQUN6RCxJQUFJO1lBQ0osSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNEO2FBQU07WUFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDeEM7SUFDTCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0ksMENBQTBCLEdBQWpDO1FBQ0ksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUlEOzs7Ozs7Ozs7TUFTRTtJQUNLLGlDQUFpQixHQUF4QixVQUF5QixNQUFrQjtRQUFsQix1QkFBQSxFQUFBLGFBQWtCO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JCLGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxtQkFBUyxDQUFDLE1BQU07WUFBRSxPQUFPO1FBRTlCLElBQUksQ0FBQyxhQUFLLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQ3BDLGFBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDOUIsT0FBTztTQUNWO1FBRUQsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7WUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyx5QkFBeUIsR0FBRyxZQUFZLENBQUE7U0FDN0Q7UUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsS0FBSyxNQUFNLEVBQUU7WUFDbkQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUM5RyxhQUFLLENBQUMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUNuRCxPQUFPO2FBQ1Y7WUFDRCxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUMxQztJQUNMLENBQUM7SUFHRDs7O09BR0c7SUFDSSxpQ0FBaUIsR0FBeEI7UUFDSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBR0Q7O09BRUc7SUFDSSw0QkFBWSxHQUFuQixVQUFvQixJQUFZLEVBQUUsSUFBWSxFQUFFLFFBQWtCO1FBQzlELGFBQUssQ0FBQyxPQUFPLENBQUMsMkRBQWlCLElBQUksZUFBVSxJQUFNLENBQUMsQ0FBQztRQUNyRCxhQUFLLENBQUMsUUFBUSxJQUFJLGFBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxJQUFJLGFBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQUdEOztPQUVHO0lBQ0ksd0JBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4RSxDQUFDO0lBTUQ7OztPQUdHO0lBQ0ksdUNBQXVCLEdBQTlCLFVBQStCLE1BQWtCO1FBQWxCLHVCQUFBLEVBQUEsYUFBa0I7UUFDN0MsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNyQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLEdBQUcsRUFBRTtZQUMzRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUMvQjtRQUVELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN0QixhQUFLLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7WUFDbEMsT0FBTztTQUNWO1FBRUQsSUFBSSxRQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFMUIsSUFBSSxtQkFBUyxDQUFDLGVBQWUsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRTtZQUNwRCxRQUFRLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDNUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztTQUNuRTtRQUVELElBQUksUUFBUSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLGFBQUssQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztZQUNsQyxPQUFNO1NBQ1Q7UUFHRCxJQUFJLG1CQUFTLENBQUMsZUFBZSxFQUFFO1lBQzNCLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsYUFBSyxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDM0QsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRWIsT0FBTztTQUNWO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRTtZQUU3QyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO2dCQUNwRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDdkM7WUFFRCxJQUFJLE1BQUksR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDaEYsSUFBSSxRQUFRLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hCLGdCQUFnQjtnQkFDaEIsTUFBSSxDQUFDLFlBQVksQ0FBQyw2QkFBbUIsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3pELFFBQVEsR0FBRyxDQUFDLENBQUM7YUFDaEI7WUFFRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBSSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBRXhDLElBQUksTUFBTSxFQUFFO2dCQUNSLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtvQkFDZCxNQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7aUJBQzdCO2dCQUNELElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7b0JBQ3RCLE1BQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztpQkFDN0I7Z0JBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO3dCQUN2QixNQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7cUJBQy9CO3lCQUFNO3dCQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQUksQ0FBQyxDQUFDO3FCQUNwQztnQkFDTCxDQUFDLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO2FBRXZCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBSSxDQUFDLENBQUM7Z0JBQ3JDLENBQUMsRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDdkI7WUFDRCxPQUFPLE1BQUksQ0FBQztTQUNmO1FBQ0QsYUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQTtRQUN6QyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBR0Qsd0NBQXdCLEdBQXhCLFVBQXlCLEtBQUs7UUFDMUIseUJBQWUsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsS0FBRyxLQUFPLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsd0NBQXdCLEdBQXhCO1FBQ0ksSUFBSSxRQUFRLEdBQUcseUJBQWUsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsUUFBUSxHQUFHLENBQUMsQ0FBQztTQUNoQjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFJRDs7OztPQUlHO0lBQ0ksOEJBQWMsR0FBckIsVUFBc0IsR0FBVztRQUU3QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQztZQUNyQyxPQUFPLEVBQUUsQ0FBQztTQUNiO1FBRUQsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0RCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLDRCQUFXLEdBQUcsOEJBQU8sQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUdEOzs7O09BSUc7SUFDSSxxQkFBSyxHQUFaLFVBQWEsZUFBMEIsRUFBRSxZQUF1QjtRQUFoRSxpQkFvQ0M7UUFuQ0csSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRS9CLElBQUksZUFBZSxFQUFFO1lBQ2pCLElBQUksbUJBQVMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3BCLGdFQUFnRTtnQkFDaEUsNENBQTRDO2dCQUM1QyxjQUFjO2dCQUNkLElBQUk7YUFDUDtZQUNELEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNoRCxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxxQkFBVyxDQUFDLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUVuRTtRQUNELElBQUksWUFBWSxFQUFFO1lBQ2QsSUFBSSxXQUFXLEdBQUc7Z0JBQ2QsWUFBWSxFQUFFLENBQUM7Z0JBQ2YsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzFCLENBQUMsQ0FBQTtZQUNELEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMscUJBQVcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzVEO2FBQU07WUFDSCxJQUFJLFdBQVcsR0FBRztnQkFDZCxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDMUIsQ0FBQyxDQUFBO1lBQ0QsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM3QyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxxQkFBVyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDNUQ7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN6QjthQUFNO1lBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2hELEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0MsZUFBZSxJQUFJLGVBQWUsRUFBRSxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztJQUdEOztPQUVHO0lBQ0ksOEJBQWMsR0FBckI7UUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRTtZQUN0QyxJQUFJLElBQUksR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3pFLElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtvQkFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDaEM7Z0JBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0RCxPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7YUFBTTtZQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLDZDQUE2QyxDQUFDLENBQUM7U0FDMUU7SUFDTCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0ksNEJBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLElBQUksTUFBTSxDQUFDLFdBQVcsSUFBSSxPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxLQUFLLFVBQVUsRUFBRTtZQUNwRSxDQUFDLElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsdUNBQXVDO1NBQ2xFO1FBQ0QsSUFBSSxJQUFJLEdBQUcsa0NBQWtDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7WUFDdEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7O09BR0c7SUFDSCwyQkFBVyxHQUFYLFVBQWEsUUFBUTtRQUNqQixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFeEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUU1QixJQUFHLElBQUksSUFBSSxPQUFPLElBQUksS0FBSyxJQUFJLFFBQVEsSUFBSSxHQUFHLElBQUksTUFBTSxFQUFDLEVBQUcsZUFBZTtZQUN2RSxPQUFPLElBQUksQ0FBQztTQUNmO2FBQUk7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsNkJBQWEsR0FBYixVQUFjLFFBQVE7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDaEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxpQkFBaUI7UUFDakIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDL0IsZ0JBQWdCO1FBQ2hCLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUksTUFBTSxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDOUQsSUFBSSxVQUFVLEdBQUcsUUFBUSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDN0MsV0FBVztRQUNYLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFHLENBQUMsS0FBSyxFQUFDLEVBQUUsY0FBYztZQUN0QixHQUFHLEdBQUcsT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxvQ0FBb0M7WUFDL0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUN2QztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQXowSUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs2Q0FHakQ7SUFHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLENBQUM7b0RBQ3RDO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQzs4Q0FDckM7SUFJN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsc0JBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7eUNBQzFCO0lBZlgsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTYwSXpCO0lBQUQsWUFBQztDQTcwSUQsQUE2MElDLENBNzBJa0MsRUFBRSxDQUFDLFNBQVMsR0E2MEk5QztrQkE3MElvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkTWFuYWdlciBmcm9tIFwiLi9BZE1hbmFnZXJcIjtcclxuaW1wb3J0IENvbW1vbkNvbmZpZywgeyBZelJlZEJhZ0luZm8gfSBmcm9tIFwiLi9Db21tb25Db25maWdcIjtcclxuaW1wb3J0IFdlY2hhdFRvb2wgZnJvbSBcIi4vV2VjaGF0VG9vbFwiO1xyXG5pbXBvcnQgUGxhdFV0aWxzIGZyb20gXCIuL1BsYXRVdGlsc1wiO1xyXG5pbXBvcnQgT3Bwb1Rvb2wgZnJvbSBcIi4vWVpfVG9vbF9PcHBvXCI7XHJcbmltcG9ydCBZWl9Ub29sX0JhaWR1IGZyb20gXCIuL1laX1Rvb2xfQmFpZHVcIjtcclxuaW1wb3J0IFlaX1Rvb2xfTmF0aXZlIGZyb20gXCIuL1laX1Rvb2xfTmF0aXZlXCI7XHJcbmltcG9ydCBZWl9Ub29sX1Zpdm8gZnJvbSBcIi4vWVpfVG9vbF9WaXZvXCI7XHJcbmltcG9ydCBZWl9Ub29sX0RvdXlpbiBmcm9tIFwiLi9ZWl9Ub29sX0RvdXlpblwiO1xyXG5pbXBvcnQgWVpfQ29uc3RhbnQsIHsgQmFubmVyTG9jYXRpb24sIExldmVsU3RhdHVzLCBWaWJyYXRlVHlwZSwgVmlld0xvY2F0aW9uIH0gZnJvbSBcIi4vWVpfQ29uc3RhbnRcIjtcclxuaW1wb3J0IFlaX1Rvb2xfUVEgZnJvbSBcIi4vWVpfVG9vbF9RUVwiO1xyXG5pbXBvcnQgWVpfU2hvcnRjdXRXaWRnZXQgZnJvbSBcIi4vWVpfU2hvcnRjdXRXaWRnZXRcIjtcclxuaW1wb3J0IFlaX1Rvb2xfUVRUIGZyb20gXCIuL1laX1Rvb2xfUVRUXCI7XHJcbmltcG9ydCBZWl9Ub29sX1hpYW9taSBmcm9tIFwiLi9ZWl9Ub29sX1hpYW9taVwiO1xyXG5pbXBvcnQgQWxkVXRpbHMgZnJvbSBcIi4vQWxkVXRpbHNcIjtcclxuaW1wb3J0IFlaX1Rvb2xfVUMgZnJvbSBcIi4vWVpfVG9vbF9VQ1wiO1xyXG5pbXBvcnQgWVpfVG9vbF9Db2Nvc3BsYXkgZnJvbSBcIi4vWVpfVG9vbF9Db2Nvc3BsYXlcIjtcclxuaW1wb3J0IFlaX1Rvb2xfNDM5OSBmcm9tIFwiLi9ZWl9Ub29sXzQzOTlcIjtcclxuaW1wb3J0IFlaX1Rvb2xfSU9TIGZyb20gXCIuL1laX1Rvb2xfSU9TXCI7XHJcbmltcG9ydCBZWl9Ub29sX0JpbGkgZnJvbSBcIi4vWVpfVG9vbF9CaWxpXCI7XHJcbmltcG9ydCBZWl9Ub29sX0t3YWkgZnJvbSBcIi4vWVpfVG9vbF9Ld2FpXCI7XHJcbmltcG9ydCBZWl9Ub29sX0Jyb3N3ZXIgZnJvbSBcIi4vWVpfVG9vbF9Ccm9zd2VyXCI7XHJcbmltcG9ydCBZWl9Ub29sX1dpRmkgZnJvbSBcIi4vWVpfVG9vbF9XaWZpXCI7XHJcbmltcG9ydCBZWl9Ub29sX0hhZ28gZnJvbSBcIi4vWVpfVG9vbF9IYWdvXCI7XHJcbmltcG9ydCBSZWRCYWdQcm9ncmVzc1dpZGdldCBmcm9tIFwiLi9SZWRCYWdQcm9ncmVzc1dpZGdldFwiO1xyXG5pbXBvcnQgQ29tcGF0aWJsZVRvb2wgZnJvbSBcIi4vQ29tcGF0aWJsZVRvb2xcIjtcclxuaW1wb3J0IFlaX1Rvb2xfSHVhV2VpIGZyb20gXCIuL1laX1Rvb2xfSHVhV2VpXCI7XHJcbmltcG9ydCBPcGVuUmVkQmFnUGFuZWwgZnJvbSBcIi4vT3BlblJlZEJhZ1BhbmVsXCI7XHJcbmltcG9ydCBZWl9Ub29sX0ZhY2VCb29rIGZyb20gXCIuL1laX1Rvb2xfRmFjZUJvb2tcIjtcclxuaW1wb3J0IFl6UmVhbE5hbWVBdXRoUGFuZWwgZnJvbSBcIi4vWXpSZWFsTmFtZUF1dGhQYW5lbFwiO1xyXG5pbXBvcnQgWXpVc2VyUHJpdmFjeVBhbmVsIGZyb20gXCIuL1l6VXNlclByaXZhY3lQYW5lbFwiO1xyXG5pbXBvcnQgWVpfTG9jYWxTdG9yYWdlIGZyb20gXCIuL1laX0xvY2FsU3RvcmFnZVwiO1xyXG5pbXBvcnQgWXpMb2dpblBhbmVsIGZyb20gXCIuL1l6TG9naW5QYW5lbFwiO1xyXG5pbXBvcnQgWVpfVG9vbF9Hb29nbGVXZWIgZnJvbSBcIi4vWVpfVG9vbF9Hb29nbGVXZWJcIjtcclxuaW1wb3J0IE1zZyBmcm9tIFwiLi4vLi4vc2NyaXB0cy9GcmFtZXdvcmsvTXNnXCI7XHJcbi8vQHRzLWlnbm9yZVxyXG5jb25zdCBDcnlwdG9KUyA9IHJlcXVpcmUoXCIuL0VuY3J5cHQvQ3J5cHRvSlNcIik7XHJcbmNvbnN0IHNlY3JldEtleSA9IFwieW91emhpeHgxMjM0NTY3OFwiXHJcbi8vQHRzLWlnbm9yZVxyXG4vLyB2YXIgdW1hID0gcmVxdWlyZSgnLi9VTWVuZ1NESy91bWEuanMnKTtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGxldCB1dGlsczogVXRpbHMgPSBudWxsO1xyXG5cclxuY29uc3QgVVRJTFNWRVJTSU9OOiBzdHJpbmcgPSBcIjEuNi42XCI7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi57uE5Lu254mI5pysXCIsIHJlYWRvbmx5OiB0cnVlIH0pXHJcbiAgICBwdWJsaWMgZ2V0IHV0aWxzVmVyc2lvbigpIHtcclxuICAgICAgICByZXR1cm4gVVRJTFNWRVJTSU9OO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIua1i+ivleacrOWcsOaVsOaNrlwiLCB0b29sdGlwOiBcIuWLvumAieatpOmAiemhueWImeS9v+eUqOacrOWcsOmFjee9ru+8jOWQpuWImeS8muivt+axguacjeWKoeWZqOmFjee9riFcIiB9KVxyXG4gICAgRGVidWdMb2FjYWxDb25maWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLmmL7npLrml6Xlv5fmoYZcIiwgdG9vbHRpcDogXCLli77pgInmraTpgInpobnliJnkvJrmmL7npLrml6Xlv5fmoYbvvIznlKjkuo7osIPor5UhXCIgfSlcclxuICAgIHNob3dMb2dWaWV3OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IENvbW1vbkNvbmZpZywgZGlzcGxheU5hbWU6IFwi6YWN572u5L+h5oGvXCIgfSlcclxuICAgIGNvbmZpZzogQ29tbW9uQ29uZmlnID0gbnVsbDtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnuqLljIXkv6Hmga9cclxuICAgICAqL1xyXG4gICAgeXpSZWRCYWdJbmZvOiBZelJlZEJhZ0luZm8gPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBhZE1hbmFnZXI6IEFkTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgX3dlY2hhdFRvb2w6IFdlY2hhdFRvb2wgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+WJjeWFs+WNoVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3VycmVudExldmVsOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPliY3mmK/lkKbog5zliKlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU3VjY2VzczogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuWcqOW9leWxj+S4rVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNSZWNvcmRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa/gOWKsee7hOS7tuaIkOWKn+Wbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmV3YXJkQ2FsbEZ1bmM6IEZ1bmN0aW9uID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa/gOWKsee7hOS7tuWFs+mXreWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmV3YXJkQ2xvc2VGdW5jOiBGdW5jdGlvbiA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmv4DlirHnu4Tku7bljp/lp4vlpZblirFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJld2FyZFZhbHVlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiDlubjov5Dlrp3nrrHmmL7npLrmrKHmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGx1Y2tCb3hTaG93Q291bnQ6IG51bWJlciA9IC0xO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWOn+eUn+aPkuWxj+WxleekuueahOasoeaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbmF0aXZlSW5zZXJ0U2hvd0NvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqICAgICBcclxuICAgICAqIOWOn+eUn+aPkuWxj+a7oei2s+WFs+mXreaMiemSruiuvue9ruWkp+Wwj+adoeS7tuWQjuaYvuekuueahOasoeaVsO+8jOeUqOadpeWIpOaWremXtOmalOWkmuWwkeasoeS9v+eUqOacjeWKoeWZqOWkp+Wwj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbmF0aXZlSW5zZXJ0UmVzaXplQ2xvc2VCdG5TaG93Q291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljp/nlJ9CYW5uZXLlsZXnpLrnmoTmrKHmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIG5hdGl2ZUJhbm5lclNob3dDb3VudDogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgICAgXHJcbiAgICAgKiDljp/nlJ9iYW5uZXLmu6HotrPlhbPpl63mjInpkq7orr7nva7lpKflsI/mnaHku7blkI7mmL7npLrnmoTmrKHmlbDvvIznlKjmnaXliKTmlq3pl7TpmpTlpJrlsJHmrKHkvb/nlKjmnI3liqHlmajlpKflsI9cclxuICAgICAqL1xyXG4gICAgcHVibGljIG5hdGl2ZUJhbm5lclJlc2l6ZUNsb3NlQnRuU2hvd0NvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi9rOebmOaKveWlluWFs+mXreWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdHVyblRhYmxlUGFuZWxDbG9zZUZ1bmM6IEZ1bmN0aW9uID0gbnVsbDtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliIbkuqvlvZXlsY/nu4Tku7blhbPpl63lm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNoYXJlUmVjb3JkUGFuZWxDbG9zZUZ1bmM6IEZ1bmN0aW9uID0gbnVsbDtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAg5a6d566x5YWz6Zet5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZXdhcmRCb3hQYW5lbENsb3NlRnVuYzogRnVuY3Rpb24gPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5b+r5o235qGM6Z2i57uE5Lu25YWz6Zet5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZXdhcmRTaG9ydEN1dFBhbmVsQ2xvc2VGdW5jOiBGdW5jdGlvbiA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOaOqOiNkOa4uOaIj+e7hOS7tuWFs+mXreWbnuiwg1xyXG4gICAgKi9cclxuICAgIHB1YmxpYyByZXdhcmRSZWNHYW1lUGFuZWxDbG9zZUZ1bmM6IEZ1bmN0aW9uID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW5uOi/kOWuneeusee7hOS7tuWFs+mXreWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmV3YXJkTHVja0JveFBhbmVsQ2xvc2VGdW5jOiBGdW5jdGlvbiA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vQmFubmVy5bm/5ZGK5YWz6Zet55qE5pe26Ze0XHJcbiAgICBwdWJsaWMgX2Jhbm5lckNsb3NlVGltZTogbnVtYmVyID0gMDtcclxuICAgIC8qKlxyXG4gICAgICog5YW25LuW6YWN572u77ya5YyF5ZCr5YiG57uE55qE5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX290aGVyX2NvbmZpZzogYW55ID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHdlY2hhdFRvb2woKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl93ZWNoYXRUb29sKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3ZWNoYXQgdG9vbCBpcyBudWxsXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlY2hhdFRvb2w7XHJcbiAgICB9XHJcblxyXG4gICAgX29wcG9Ub29sOiBPcHBvVG9vbCA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IG9wcG9Ub29sKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fb3Bwb1Rvb2wpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIm9wcG8gdG9vbCBpcyBudWxsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fb3Bwb1Rvb2w7XHJcbiAgICB9XHJcblxyXG4gICAgX3Rvb2xfS3dhaTogWVpfVG9vbF9Ld2FpID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQga3dhaVRvb2woKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl90b29sX0t3YWkpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIkt3YWkgdG9vbCBpcyBudWxsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9vbF9Ld2FpO1xyXG4gICAgfVxyXG5cclxuICAgIF90b29sX1dpZmk6IFlaX1Rvb2xfV2lGaSA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IHdpZmlUb29sKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fdG9vbF9XaWZpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJXaWZpIHRvb2wgaXMgbnVsbFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rvb2xfV2lmaTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX3Rvb2xfSGFnbzogWVpfVG9vbF9IYWdvID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgaGFnb1Rvb2woKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl90b29sX0hhZ28pIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIkhhZ28gdG9vbCBpcyBudWxsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9vbF9IYWdvO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIF90b29sX0JhaWR1OiBZWl9Ub29sX0JhaWR1ID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgVG9vbF9CYWlkdSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3Rvb2xfQmFpZHUpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcInRvb2wgYmFpZHUgaXMgbnVsbFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rvb2xfQmFpZHU7XHJcbiAgICB9XHJcblxyXG4gICAgX3Rvb2xfTmF0aXZlOiBZWl9Ub29sX05hdGl2ZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IFRvb2xfTmF0aXZlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fdG9vbF9OYXRpdmUpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcInRvb2wgbmF0aXZlIGlzIG51bGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl90b29sX05hdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICBfdG9vbF9WaXZvOiBZWl9Ub29sX1Zpdm8gPSBudWxsO1xyXG4gICAgcHVibGljIGdldCBUb29sX1Zpdm8oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl90b29sX1Zpdm8pIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcInRvb2wgdml2byBpcyBudWxsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9vbF9WaXZvO1xyXG4gICAgfVxyXG5cclxuICAgIF90b29sX0RvdXlpbjogWVpfVG9vbF9Eb3V5aW4gPSBudWxsO1xyXG4gICAgcHVibGljIGdldCBUb29sX0RvdXlpbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3Rvb2xfRG91eWluKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ0b29sIGRvdXlpbiBpcyBudWxsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9vbF9Eb3V5aW47XHJcbiAgICB9XHJcblxyXG4gICAgX3Rvb2xfUVE6IFlaX1Rvb2xfUVEgPSBudWxsO1xyXG4gICAgcHVibGljIGdldCBUb29sX1FRKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fdG9vbF9RUSkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwidG9vbCBxcSBpcyBudWxsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9vbF9RUTtcclxuICAgIH1cclxuXHJcbiAgICBfdG9vbF9YaWFvTWk6IFlaX1Rvb2xfWGlhb21pID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgVG9vbF9YaWFvTWkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl90b29sX1hpYW9NaSkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwidG9vbCB4aWFvbWkgaXMgbnVsbFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rvb2xfWGlhb01pO1xyXG4gICAgfVxyXG5cclxuICAgIF90b29sX1FUVDogWVpfVG9vbF9RVFQgPSBudWxsO1xyXG4gICAgcHVibGljIGdldCBUb29sX1FUVCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3Rvb2xfUVRUKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ0b29sIHF0dCBpcyBudWxsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9vbF9RVFQ7XHJcbiAgICB9XHJcblxyXG4gICAgX3Rvb2xfVUM6IFlaX1Rvb2xfVUMgPSBudWxsO1xyXG4gICAgcHVibGljIGdldCBUb29sX1VDKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fdG9vbF9VQykge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwidG9vbCB1YyBpcyBudWxsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9vbF9VQztcclxuICAgIH1cclxuXHJcbiAgICBfdG9vbF9Db2Nvc3BsYXk6IFlaX1Rvb2xfQ29jb3NwbGF5ID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgVG9vbF9Db2Nvc3BsYXkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl90b29sX0NvY29zcGxheSkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwidG9vbCBjb2NvcyBpcyBudWxsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9vbF9Db2Nvc3BsYXk7XHJcbiAgICB9XHJcbiAgICBfdG9vbF80Mzk5OiBZWl9Ub29sXzQzOTkgPSBudWxsO1xyXG4gICAgcHVibGljIGdldCBUb29sXzQzOTkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl90b29sXzQzOTkpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcInRvb2wgNDM5OSBpcyBudWxsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9vbF80Mzk5O1xyXG4gICAgfVxyXG5cclxuICAgIF90b29sX0lvczogWVpfVG9vbF9JT1MgPSBudWxsO1xyXG4gICAgcHVibGljIGdldCBUb29sX0lPUygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3Rvb2xfSW9zKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ0b29sIGlvcyBpcyBudWxsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9vbF9Jb3M7XHJcbiAgICB9XHJcblxyXG4gICAgX3Rvb2xfYmlsaTogWVpfVG9vbF9CaWxpID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgVG9vbF9CaWxpKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fdG9vbF9Jb3MpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcInRvb2wgaW9zIGlzIG51bGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl90b29sX2JpbGk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Rvb2xfQnJvc3dlcjogWVpfVG9vbF9Ccm9zd2VyID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgVG9vbF9Ccm9zd2VyKCk6IFlaX1Rvb2xfQnJvc3dlciB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl90b29sX0Jyb3N3ZXIpIHtcclxuICAgICAgICAgICAgLy8gY2MubG9nKFwidG9vbCBxdHQgaXMgbnVsbFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rvb2xfQnJvc3dlcjtcclxuICAgIH1cclxuXHJcbiAgICBfdG9vbF9IdWF3ZWk6IFlaX1Rvb2xfSHVhV2VpID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgVG9vbF9IdWF3ZWkoKTogWVpfVG9vbF9IdWFXZWkge1xyXG4gICAgICAgIGlmICghdGhpcy5fdG9vbF9IdWF3ZWkpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcImh1YXdlaSB0b29sIGlzIG51bGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl90b29sX0h1YXdlaTtcclxuICAgIH1cclxuXHJcbiAgICBfdG9vbF9GYWNlYm9vazogWVpfVG9vbF9GYWNlQm9vayA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IFRvb2xfRmFjZWJvb2soKTogWVpfVG9vbF9GYWNlQm9vayB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl90b29sX0ZhY2Vib29rKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJmYWNlYm9vayB0b29sIGlzIG51bGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl90b29sX0ZhY2Vib29rO1xyXG4gICAgfVxyXG4gICAgX3Rvb2xfR29vZ2xlV2ViOiBZWl9Ub29sX0dvb2dsZVdlYiA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IFRvb2xfR29vZ2xlV2ViKCk6IFlaX1Rvb2xfR29vZ2xlV2ViIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3Rvb2xfR29vZ2xlV2ViKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJnb29nbGVXZWIgdG9vbCBpcyBudWxsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9vbF9Hb29nbGVXZWI7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyDmnKzlnLDphY3nva7mmK/lkKbliJ3lp4vljJZcclxuICAgIF9pc0NvbmZpZ0luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8vIOacjeWKoeWZqOmFjee9ruaYr+WQpuWIneWni+WMllxyXG4gICAgX2lzU2VydmVySW5pdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP6L+b5YWl5pe26Ze0XHJcbiAgICAgKi9cclxuICAgIF9nYW1lRW50cnlUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW6YWN572u5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gZGF0YSDphY3nva7mlbDmja5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfaW5pdENvbmZpZygpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNDb25maWdJbml0KSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLphY3nva7mlbDmja7lt7Lnu4/liJ3lp4vljJbvvIzor7fli7/ph43lpI3liJ3lp4vljJYhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWcub3RoZXJjb25maWcubG9jYWxDb25maWcpIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmNvbmZpZy5vdGhlcmNvbmZpZy5sb2NhbENvbmZpZy5qc29uKTtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIuacrOWcsOaVsOaNru+8mlwiICsgZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoUGxhdFV0aWxzLklzTmF0aXZlQW5kcm9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWuieWNk+mcgOimgeWFiOiOt+WPlkpOSe+8jOWGjeWPluacrOWcsOaVsOaNrlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFRvb2xzKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzQ29uZmlnSW5pdCA9IHRoaXMuX2luaXRMb2FjYWxDb25maWcoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5Ub29sX05hdGl2ZS5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0NvbmZpZ0luaXQgPSB0aGlzLl9pbml0TG9hY2FsQ29uZmlnKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOi/meS4quW/hemhu+WcqOW5v+WRiue7hOS7tuS5i+WJjeWIneWni+WMllxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFRvb2xzKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX290aGVyX2NvbmZpZyA9IHRoaXMuY29uZmlnLm90aGVyY29uZmlnLmxvY2FsQ29uZmlnLmpzb24ub3RoZXI7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYWRNYW5hZ2VyID0gbmV3IEFkTWFuYWdlcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZE1hbmFnZXIuSW5pdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vcHBvVG9vbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29wcG9Ub29sLmhpZGVEZWZhdWx0TG9hZGluZ1BhZ2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChQbGF0VXRpbHMuSXNLd2FpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAga3dhaWdhbWUucmVhZHlHbygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdXRpbHMueXpSZWRCYWdJbmZvID0gbmV3IFl6UmVkQmFnSW5mbygpO1xyXG4gICAgICAgICAgICAgICAgdXRpbHMucmVnaXN0ZXJTZXJ2ZXJJbml0RXZlbnQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodXRpbHMuU2VydmVyQ29uZmlnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcnZlclNob3dMb2cgPSB0aGlzLmdldENvbmZpZ0J5S2V5KFwiaXNfc2hvd19sb2dfdmlld1wiKSA9PSBcInRydWVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TG9nVG9Db25zb2xlID0gdGhpcy5nZXRDb25maWdCeUtleShcInNob3dfbG9nX3RvX2NvbnNvbGVcIikgPT0gXCJ0cnVlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldENvbmZpZ0J5S2V5KFwicmVkX2JhZ190b3RhbF9wcm9ncmVzc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMueXpSZWRCYWdJbmZvLnRvdGFsUHJvZ3Jlc3MgPSB0aGlzLmdldENvbmZpZ0J5S2V5KFwicmVkX2JhZ190b3RhbF9wcm9ncmVzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRDb25maWdCeUtleShcInJlZF9iYWdfcHJvZ3Jlc3NfaW5mb3NcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLnl6UmVkQmFnSW5mby5wcm9ncmVzc0luZm9zID0gdGhpcy5nZXRDb25maWdCeUtleShcInJlZF9iYWdfcHJvZ3Jlc3NfaW5mb3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldENvbmZpZ0J5S2V5KFwicmVkX2JhZ19tb25leXNcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLnl6UmVkQmFnSW5mby53aXRoZHJhd2FNb25leXMgPSB0aGlzLmdldENvbmZpZ0J5S2V5KFwicmVkX2JhZ19tb25leXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFBsYXRVdGlscy5Jc0hhZ28pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhnLmdhbWVMb2FkUmVzdWx0ICYmIGhnLmdhbWVMb2FkUmVzdWx0KHsgY29kZTogMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKFBsYXRVdGlscy5Jc0h1YVdlaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB1dGlscy5zaG93TXNnKFwi5Y2O5Li65bCP5ri45oiP6KaB55So5Y2O5Li65Y2V54us55qE57uE5Lu25a+55o6l77yB77yB77yB77yB77yB77yB77yB77yB77yBXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgIH0sIHRoaXMpXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuacrOWcsOmFjee9ruaWh+S7tuS4jeaYr+WQiOazleeahGpzb27mlofku7bvvIFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5pys5Zyw6YWN572u5paH5Lu25pyq5om+5Yiw77yM6K+35qOA5p+lIENvbW1vblV0aWxzIOe7hOS7tuS4iuaYr+WQpuWtmOWcqO+8gVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaW5pdExvYWNhbENvbmZpZyhkYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5jb25maWcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmluaXQoZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgdXRpbHMgPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyB1dGlscy5zaG93TG9nKFwi5bm/5ZGK57uE5Lu254mI5pysOlwiICsgdGhpcy51dGlsc1ZlcnNpb24pO1xyXG4gICAgICAgIGlmICghQ0NfREVCVUcpIHtcclxuICAgICAgICAgICAgLy8g5q2j5byP5YyF5YWz6Zet5q2k6YCJ6aG5XHJcbiAgICAgICAgICAgIHRoaXMuRGVidWdMb2FjYWxDb25maWcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZ2FtZUVudHJ5VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIC8vIOWIneWni+WMluacrOWcsOmFjee9rlxyXG4gICAgICAgIHRoaXMuX2luaXRDb25maWcoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0NvbmZpZ0luaXQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWRNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkTWFuYWdlci5PblVwZGF0ZShkdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0VG9vbHMoZGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NvbmZpZ0luaXQgJiYgIVBsYXRVdGlscy5Jc05hdGl2ZUFuZHJvaWQpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuacrOWcsOaVsOaNruacquWIneWni+WMliFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChQbGF0VXRpbHMuSXNOYXRpdmVBbmRyb2lkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Rvb2xfTmF0aXZlID0gbmV3IFlaX1Rvb2xfTmF0aXZlKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuX3Rvb2xfTmF0aXZlLmluaXQoZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNXZWNoYXQpIHtcclxuICAgICAgICAgICAgdGhpcy5fd2VjaGF0VG9vbCA9IG5ldyBXZWNoYXRUb29sKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlY2hhdFRvb2wuaW5pdChkYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc09QUE8pIHtcclxuICAgICAgICAgICAgdGhpcy5fb3Bwb1Rvb2wgPSBuZXcgT3Bwb1Rvb2woKTtcclxuICAgICAgICAgICAgdGhpcy5fb3Bwb1Rvb2wuaW5pdChkYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc0JhaWR1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Rvb2xfQmFpZHUgPSBuZXcgWVpfVG9vbF9CYWlkdSgpO1xyXG4gICAgICAgICAgICB0aGlzLl90b29sX0JhaWR1LmluaXQoZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNWSVZPKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Rvb2xfVml2byA9IG5ldyBZWl9Ub29sX1Zpdm8oKTtcclxuICAgICAgICAgICAgdGhpcy5fdG9vbF9WaXZvLmluaXQoZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNEb3V5aW4pIHtcclxuICAgICAgICAgICAgdGhpcy5fdG9vbF9Eb3V5aW4gPSBuZXcgWVpfVG9vbF9Eb3V5aW4oKTtcclxuICAgICAgICAgICAgdGhpcy5fdG9vbF9Eb3V5aW4uaW5pdChkYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc1FRKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Rvb2xfUVEgPSBuZXcgWVpfVG9vbF9RUSgpO1xyXG4gICAgICAgICAgICB0aGlzLl90b29sX1FRLmluaXQoZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNRVFQpIHtcclxuICAgICAgICAgICAgdGhpcy5fdG9vbF9RVFQgPSBuZXcgWVpfVG9vbF9RVFQoKTtcclxuICAgICAgICAgICAgdGhpcy5fdG9vbF9RVFQuaW5pdChkYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc1hpYW9NaSkge1xyXG4gICAgICAgICAgICB0aGlzLl90b29sX1hpYW9NaSA9IG5ldyBZWl9Ub29sX1hpYW9taSgpO1xyXG4gICAgICAgICAgICB0aGlzLl90b29sX1hpYW9NaS5pbml0KGRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklTVUMpIHtcclxuICAgICAgICAgICAgdGhpcy5fdG9vbF9VQyA9IG5ldyBZWl9Ub29sX1VDKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Rvb2xfVUMuaW5pdChkYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5JU0NvY29zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Rvb2xfQ29jb3NwbGF5ID0gbmV3IFlaX1Rvb2xfQ29jb3NwbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Rvb2xfQ29jb3NwbGF5LmluaXQoZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXM0Mzk5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Rvb2xfNDM5OSA9IG5ldyBZWl9Ub29sXzQzOTkoKTtcclxuICAgICAgICAgICAgdGhpcy5fdG9vbF80Mzk5LmluaXQoZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNOYXRpdmVJT1MpIHtcclxuICAgICAgICAgICAgdGhpcy5fdG9vbF9Jb3MgPSBuZXcgWVpfVG9vbF9JT1MoKTtcclxuICAgICAgICAgICAgdGhpcy5fdG9vbF9Jb3MuaW5pdChkYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc0JpbGkpIHtcclxuICAgICAgICAgICAgdGhpcy5fdG9vbF9iaWxpID0gbmV3IFlaX1Rvb2xfQmlsaSgpO1xyXG4gICAgICAgICAgICB0aGlzLl90b29sX2JpbGkuaW5pdChkYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc0t3YWkpIHtcclxuICAgICAgICAgICAgdGhpcy5fdG9vbF9Ld2FpID0gbmV3IFlaX1Rvb2xfS3dhaSgpO1xyXG4gICAgICAgICAgICB0aGlzLl90b29sX0t3YWkuaW5pdChkYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc1dpRmkpIHtcclxuICAgICAgICAgICAgdGhpcy5fdG9vbF9XaWZpID0gbmV3IFlaX1Rvb2xfV2lGaSgpO1xyXG4gICAgICAgICAgICB0aGlzLl90b29sX1dpZmkuaW5pdChkYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc0hhZ28pIHtcclxuICAgICAgICAgICAgdGhpcy5fdG9vbF9IYWdvID0gbmV3IFlaX1Rvb2xfSGFnbygpO1xyXG4gICAgICAgICAgICB0aGlzLl90b29sX0hhZ28uaW5pdChkYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc0h1YVdlaSkge1xyXG4gICAgICAgICAgICB0aGlzLl90b29sX0h1YXdlaSA9IG5ldyBZWl9Ub29sX0h1YVdlaSgpO1xyXG4gICAgICAgICAgICB0aGlzLl90b29sX0h1YXdlaS5pbml0KGRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzRmFjZUJvb2spIHtcclxuICAgICAgICAgICAgdGhpcy5fdG9vbF9GYWNlYm9vayA9IG5ldyBZWl9Ub29sX0ZhY2VCb29rKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Rvb2xfRmFjZWJvb2suaW5pdChkYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc0dvb2dsZVdlYikge1xyXG4gICAgICAgICAgICB0aGlzLl90b29sX0dvb2dsZVdlYiA9IG5ldyBZWl9Ub29sX0dvb2dsZVdlYigpO1xyXG4gICAgICAgICAgICB0aGlzLl90b29sX0dvb2dsZVdlYi5pbml0KGRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzVGVzdCkge1xyXG4gICAgICAgICAgICB0aGlzLl90b29sX0Jyb3N3ZXIgPSBuZXcgWVpfVG9vbF9Ccm9zd2VyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Rvb2xfQnJvc3dlci5pbml0KGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlu7bml7bosIPnlKjlh73mlbBcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayDlm57osIPlh73mlbBcclxuICAgICAqIEBwYXJhbSBkZWxheSDlu7bml7bml7bpl7RcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRlbGF5Q2FsbChjYWxsYmFjazogRnVuY3Rpb24sIGRlbGF5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGRlbGF5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAgKiBcclxuICAgICAgKiBAcGFyYW0gY2FsbGJhY2sgRnVuY3Rpb248cmV0OmJvb2xlYW4sIG1zZzpzdHJpbmc+IOWIhuS6q+Wbnuiwg1xyXG4gICAgICAqL1xyXG4gICAgcHVibGljIHNoYXJlKGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5pys5Zyw5pWw5o2u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cl90b29sICYmIHRoaXMuY3VyX3Rvb2wuc2hhcmUgJiYgdGhpcy5jdXJfdG9vbC5zaGFyZShjYWxsYmFjaylcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDms6jplIDmuLjmiI/pgIDlh7rlm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdhbWVFeGl0T2ZmKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNDb25maWdJbml0KSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLmnKzlnLDmlbDmja7mnKrliJ3lp4vljJYhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoUGxhdFV0aWxzLklzTmF0aXZlQW5kcm9pZCkge1xyXG4gICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC50YXJnZXRPZmYodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeL5b2V5bGPXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWNvcmRTdGFydCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5pys5Zyw5pWw5o2u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cl90b29sICYmIHRoaXMuY3VyX3Rvb2wucmVjb3JkU3RhcnQgJiYgdGhpcy5jdXJfdG9vbC5yZWNvcmRTdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uT5p2f5b2V5bGPXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWNvcmRFbmQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NvbmZpZ0luaXQpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuacrOWcsOaVsOaNruacquWIneWni+WMliFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJfdG9vbCAmJiB0aGlzLmN1cl90b29sLnJlY29yZEVuZCAmJiB0aGlzLmN1cl90b29sLnJlY29yZEVuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5YiG5Lqr5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTaGFyZUluZm8oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NvbmZpZ0luaXQpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuacrOWcsOaVsOaNruacquWIneWni+WMliFcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLnNoYXJlVGl0bGUgJiYgdGhpcy5jb25maWcub3RoZXJjb25maWcuc2hhcmVJbWdVcmwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmNvbmZpZy5vdGhlcmNvbmZpZy5zaGFyZVRpdGxlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6IHRoaXMuY29uZmlnLm90aGVyY29uZmlnLnNoYXJlSW1nVXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi5YiG5Lqr6YWN572u5Ye66ZSZ77yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmuLjmiI/lhoXkuqTlj4nmjqjlub/kv6Hmga8sIOa4uOaIj+WGhei3s+i9rOe7hOS7tuS9v+eUqFxyXG4gICAgICogQHJldHVybnMgb2JqZWN0IG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldElubmVyUmVjb21tZW5kRGF0YSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5pys5Zyw5pWw5o2u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLlNlcnZlckNvbmZpZyAmJiB0aGlzLlNlcnZlckNvbmZpZy5qdW1wX2xpc3QgJiYgdGhpcy5TZXJ2ZXJDb25maWcuanVtcF9saXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIFwianVtcF9yZWZyZXNoX3RpbWVcIjogdGhpcy5TZXJ2ZXJDb25maWcuaWNvbl9qdW1wLFxyXG4gICAgICAgICAgICAgICAgXCJqdW1wX2xpc3RcIjogdGhpcy5TZXJ2ZXJDb25maWcuanVtcF9saXN0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Lez6L2s5Yiw5YW25LuW5bCP5ri45oiPXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBcclxuICAgICAqIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOS6pOWPieaOqOW5v+aMguS7tuWGheWuueS/oeaBr1xyXG4gICAgICAgICAgICBcImljb25cIjogXCJodHRwOi8veGN4LnlvdWxldGQuY29tL2ltZy9pY29uL2ZnZHhjLnBuZ1wiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCLnv7vmu5rnmoTpppnogqDlpKflhpLpmalcIixcclxuICAgICAgICAgICAgXCJwYXRoXCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwianNfanVtcFwiOiBcInRydWVcIixcclxuICAgICAgICAgICAgXCJxcl9jb2RlXCI6IFwiaHR0cDovL3hjeC55b3VsZXRkLmNvbS9pbWcvcXJjb2RlL3FfZmdkeGMuanBnXCIsXHJcbiAgICAgICAgICAgIFwiYXBwaWRcIjogXCJ3eDJjNGVkNDIxODIyNGIwNDJcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBAcGFyYW0gY2FsbGJhY2sgRnVuY3Rpb24ocmV0KSDot7Povazlm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIG5hdmlnYXRlVG9NaW5pR2FtZShkYXRhOiBhbnksIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5pys5Zyw5pWw5o2u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFBsYXRVdGlscy5Jc1dlY2hhdCkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaXNfanVtcCAmJiBkYXRhLmlzX2p1bXAgPT0gXCJ0cnVlXCIgJiYgZGF0YS5hcHBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VjaGF0VG9vbC5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oZGF0YS5hcHBpZCwgY2FsbGJhY2ssIGRhdGEucGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaXNfanVtcCAmJiBkYXRhLmlzX2p1bXAgPT0gXCJmYWxzZVwiICYmIGRhdGEucXJfY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VjaGF0VG9vbC5wcmV2aWV3SW1hZ2UoZGF0YS5xcl9jb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzT1BQTykge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmFwcGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wcG9Ub29sLm5hdmlnYXRlVG9NaW5pR2FtZShkYXRhLmFwcGlkLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwiZGF0YSDmiJbogIUgYXBwaWQg5Li6bnVsbCFcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc0JhaWR1KSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuYXBwaWQpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLlRvb2xfQmFpZHUubmF2aWdhdGVUb01pbmlHYW1lKGRhdGEuYXBwaWQsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJkYXRhIOaIluiAhSBhcHBpZCDkuLpudWxsIVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzTmF0aXZlQW5kcm9pZCkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuVG9vbF9OYXRpdmUubmF2aWdhdGVUb0dhbWUoSlNPTi5zdHJpbmdpZnkoZGF0YSksIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJkYXRhIOaIluiAhSBhcHBpZCDkuLpudWxsIVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzTmF0aXZlSU9TKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuYXBwaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVG9vbF9JT1MubmF2aWdhdGVUb0dhbWUoZGF0YS5hcHBpZCwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcImRhdGEg5oiW6ICFIGFwcGlkIOS4um51bGwhXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2T5YmN54mI5pys5piv5ZCm5pSv5oyB6Lez6L2s5Yiw5YW25LuW5bCP5ri45oiPXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1N1cHBvcnRuYXZpZ2F0ZVRvTWluaUdhbWUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NvbmZpZ0luaXQpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuacrOWcsOaVsOaNruacquWIneWni+WMliFcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFBsYXRVdGlscy5Jc1dlY2hhdCB8fCBQbGF0VXRpbHMuSXNOYXRpdmVBbmRyb2lkIHx8IFBsYXRVdGlscy5Jc05hdGl2ZUlPUyB8fCBQbGF0VXRpbHMuSXNCYWlkdSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc09QUE8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3Bwb1Rvb2wuaXNPdmVyTWluaVZlcnNpb24oXCIxMDQ0XCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzRG91eWluKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLlRvb2xfRG91eWluLmlzU2hvd01vcmVHYW1lc01vZGFsKCkgJiYgdGhpcy5Ub29sX0RvdXlpbi5fc3lzSW5mby5hcHBOYW1lICE9IFwibGl2ZV9zdHJlYW1cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc1FRKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90b29sX1FRLmlzT3Zlck1pblZlcnNpb24oXCIxLjcuMVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65raI5oGv5o+Q56S6XHJcbiAgICAgKiBAcGFyYW0gbXNnIOa2iOaBr+aPkOekulxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd01zZyhtc2c6IHN0cmluZykge1xyXG5cclxuICAgICAgICBpZiAodXRpbHMuVG9vbF9Ccm9zd2VyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJfdG9vbCAmJiB0aGlzLmN1cl90b29sLnNob3dUb2FzdCAmJiB0aGlzLmN1cl90b29sLnNob3dUb2FzdChtc2cpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5bey57uP5Yib5bu66L+H5b+r5o235pa55byPXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYXNTaG9ydGN1dEluc3RhbGxlZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5pys5Zyw5pWw5o2u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChQbGF0VXRpbHMuSXNWSVZPICYmIHRoaXMuVG9vbF9WaXZvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLlRvb2xfVml2by5TaG9ydGN1dENyZWF0ZWQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNPUFBPICYmIHRoaXMub3Bwb1Rvb2wpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3Bwb1Rvb2wuU2hvcnRjdXRDcmVhdGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5Y+v5Lul5Yib5bu65qGM6Z2i5b+r5o235pa55byPLOW5s+WPsOaYr+WQpuaUr+aMgVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2FuQ3JlYXRlU2hvcnRjdXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NvbmZpZ0luaXQpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuacrOWcsOaVsOaNruacquWIneWni+WMliFcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cl90b29sICYmIHRoaXMuY3VyX3Rvb2wuY2FuQ3JlYXRlU2hvcnRjdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VyX3Rvb2wuY2FuQ3JlYXRlU2hvcnRjdXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65qGM6Z2i5b+r5o235pa55byPXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVTaG9ydGN1dChjYWxsYmFjazogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5pys5Zyw5pWw5o2u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cl90b29sICYmIHRoaXMuY3VyX3Rvb2wuY3JlYXRlU2hvcnRjdXQgJiYgdGhpcy5jdXJfdG9vbC5jcmVhdGVTaG9ydGN1dChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgJrnlKhodHRw6K+35rGC77yM5Y+q5bCB6KOF5LqGR0VU6K+35rGCXHJcbiAgICAgKiBAcGFyYW0gdXJsIOivt+axgueahHVybOWcsOWdgFxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIEZ1bmN0aW9uKHJldDpib29sZWFuLCBkYXRhOnN0cmluZykgXHJcbiAgICAgKiDor7fmsYLnu5PmnZ/lm57osIPvvIzmiJDlip9yZXTkuLp0cnVlLCBkYXRh5Li66L+U5Zue55qE5pWw5o2uc3RyaW5n44CCIOWksei0peS4unJldOS4umZhbHNlLCBkYXRh5Li656m6IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29tbW9tSHR0cFJlcXVlc3QodXJsOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIC8vIGlmICghdGhpcy5faXNDb25maWdJbml0KSB7XHJcbiAgICAgICAgLy8gICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLmnKzlnLDmlbDmja7mnKrliJ3lp4vljJYhXCIpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBsZXQgY29tcGxldGVDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIudGltZW91dCA9IDYwMDA7ICAgIC8vIOWNleS9jeavq+enklxyXG4gICAgICAgIGxldCByZXF1ZXN0VXJsOiBzdHJpbmcgPSB1cmw7Ly90aGlzLl9idWlsZFNlcnZlclVybCh1cmwpOyAvLyArIGAmdGltZV9zdGFtcD0keyhuZXcgRGF0ZSgpKS5nZXRUaW1lKCl9JnJlcXY9JHtZWl9Db25zdGFudC5TRVJWRVJfVkVSU0lPTn1gXHJcbiAgICAgICAgdXRpbHMuc2hvd0xvZyhcIuacjeWKoeWZqOWcsOWdgDpcIiArIHJlcXVlc3RVcmwpO1xyXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCByZXF1ZXN0VXJsKTtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLor7fmsYLnirbmgIHmlLnlj5gsIHJlYWVkeVN0YXRlPVwiLCB4aHIucmVhZHlTdGF0ZSwgXCI7IHN0YXR1cz1cIiwgeGhyLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChyZXF1ZXN0VXJsLmluZGV4T2YoXCJtPWdcIikgPiAtMSB8fCByZXF1ZXN0VXJsLmluZGV4T2YoXCJtPXJsZXZlbHYzXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbXBsZXRlQ2FsbGJhY2sodHJ1ZSwgdGhpcy5hZXNEZWNyeXB0KHhoci5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbXBsZXRlQ2FsbGJhY2sodHJ1ZSwgeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjayh0cnVlLCB4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlQ2FsbGJhY2soZmFsc2UsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi6K+35rGC6LaF5pe2IVwiKTtcclxuICAgICAgICAgICAgaWYgKGNvbXBsZXRlQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlQ2FsbGJhY2soZmFsc2UsIFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi6K+35rGC5Ye66ZSZISBlcnI9XCIsIEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgICAgICBpZiAoY29tcGxldGVDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjayhmYWxzZSwgXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWVzRW5jcnlwdChjb250ZW50KSB7XHJcbiAgICAgICAgbGV0IGtleSA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKHNlY3JldEtleSk7XHJcbiAgICAgICAgbGV0IHNyY3MgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZShjb250ZW50KTtcclxuICAgICAgICBsZXQgZW5jcnlwdGVkID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoc3Jjcywga2V5LCB7IG1vZGU6IENyeXB0b0pTLm1vZGUuRUNCLCBwYWRkaW5nOiBDcnlwdG9KUy5wYWQuUGtjczcgfSk7XHJcbiAgICAgICAgcmV0dXJuIGVuY3J5cHRlZC50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Kej5a+G5pa55rOVXHJcbiAgICAgKiBAcGFyYW0gZW5jcnlwdFN0ciDlr4bmlodcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IOaYjuaWh1xyXG4gICAgICovXHJcbiAgICBhZXNEZWNyeXB0KGVuY3J5cHRTdHIpIHtcclxuICAgICAgICBsZXQga2V5ID0gQ3J5cHRvSlMuZW5jLlV0ZjgucGFyc2Uoc2VjcmV0S2V5KTtcclxuICAgICAgICBsZXQgZGVjcnlwdCA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KGVuY3J5cHRTdHIsIGtleSwgeyBtb2RlOiBDcnlwdG9KUy5tb2RlLkVDQiwgcGFkZGluZzogQ3J5cHRvSlMucGFkLlBrY3M3IH0pO1xyXG4gICAgICAgIHJldHVybiBDcnlwdG9KUy5lbmMuVXRmOC5zdHJpbmdpZnkoZGVjcnlwdCkudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWinuWKoOW4uOeUqOWtl+autVxyXG4gICAgICovXHJcbiAgICBfYnVpbGRTZXJ2ZXJVcmwodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyB1dGlscy5zaG93TG9nKFwiIF9idWlsZFNlcnZlclVybCA+Pj4+Pi5cIik7XHJcblxyXG4gICAgICAgIGlmIChQbGF0VXRpbHMuSXNPUFBPKSB7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyBgJmt5eD10cnVlJmFwcF9pZD0ke3V0aWxzLmNvbmZpZy5vcHBvY29uZmlnLnBhY2thZ2VOYW1lfSZjaGFubmVsPW9wcG8mZGV2aWNlX3VpZD0ke3V0aWxzLm9wcG9Ub29sLnVpZH0mdWlkPSR7dXRpbHMub3Bwb1Rvb2wuc2VydmljZUlkfSZzb3VyY2U9JHt0aGlzLm9wcG9Ub29sLl9zb3VyY2V9JmdhbWVfdmVyc2lvbj0ke3V0aWxzLmNvbmZpZy5vcHBvY29uZmlnLnZlcnNpb259JmRldmljZV9pZD0ke3V0aWxzLm9wcG9Ub29sLl9kZXZpY2VfaWR9YDtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc1hpYW9NaSkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyBgJmt5eD10cnVlJmFwcF9pZD0ke3V0aWxzLmNvbmZpZy54aWFvbWlDb25maWcuYXBwSUR9JmNoYW5uZWw9eGlhb21pJmRldmljZV91aWQ9JHt1dGlscy5fdG9vbF9YaWFvTWkudWlkfSZ1aWQ9JHt1dGlscy5fdG9vbF9YaWFvTWkuc2VydmljZUlkfWA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNXZWNoYXQpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsICsgYCZreXg9dHJ1ZSZhcHBfaWQ9JHt1dGlscy5jb25maWcud2VjaGF0Y29uZmlnLmFwcElEfSZjaGFubmVsPXdlY2hhdCZkZXZpY2VfdWlkPSR7dXRpbHMud2VjaGF0VG9vbC51aWR9JnVpZD0ke3V0aWxzLndlY2hhdFRvb2wuc2VydmljZUlkfSZzb3VyY2U9JHt0aGlzLndlY2hhdFRvb2wuX3NvdXJjZV9hcHBfaWR9JnNvdXJlX3R5cGU9JHt0aGlzLndlY2hhdFRvb2wuX2x1YW5jaFR5cGV9JmdhbWVfdmVyc2lvbj0ke3V0aWxzLmNvbmZpZy53ZWNoYXRjb25maWcudmVyc2lvbn1gO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzVklWTykge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyBgJmt5eD10cnVlJmFwcF9pZD0ke3V0aWxzLmNvbmZpZy52aXZvY29uZmlnLmFwcElEfSZjaGFubmVsPXZpdm8mZGV2aWNlX3VpZD0ke3V0aWxzLl90b29sX1Zpdm8udWlkfSZ1aWQ9JHt1dGlscy5fdG9vbF9WaXZvLnNlcnZpY2VJZH0mc291cmNlPSR7dGhpcy5fdG9vbF9WaXZvLl9zb3VyY2V9JmdhbWVfdmVyc2lvbj0ke3V0aWxzLmNvbmZpZy52aXZvY29uZmlnLnZlcnNpb259YFxyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzUVRUKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCArIGAma3l4PXRydWUmYXBwX2lkPSR7dXRpbHMuY29uZmlnLnF0dGNvbmZpZy5hcHBJRH0mY2hhbm5lbD1xdXRvdXRpYW8mZGV2aWNlX3VpZD0ke3V0aWxzLl90b29sX1FUVC51aWR9JnVpZD0ke3V0aWxzLl90b29sX1FUVC5zZXJ2aWNlSWR9YFxyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzRG91eWluKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCArIGAma3l4PXRydWUmYXBwX2lkPSR7dXRpbHMuY29uZmlnLmRvdXlpbmNvbmZpZy5hcHBJRH0mY2hhbm5lbD10b3V0aWFvJmRldmljZV91aWQ9JHt1dGlscy5Ub29sX0RvdXlpbi51aWR9JnVpZD0ke3V0aWxzLlRvb2xfRG91eWluLnNlcnZpY2VJZH0mZ2FtZV92ZXJzaW9uPSR7dXRpbHMuY29uZmlnLmRvdXlpbmNvbmZpZy52ZXJzaW9ufWBcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc1FRKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCArIGAma3l4PXRydWUmYXBwX2lkPSR7dXRpbHMuY29uZmlnLnFxY29uZmlnLmFwcElEfSZjaGFubmVsPXFxJmRldmljZV91aWQ9JHt1dGlscy5fdG9vbF9RUS51aWR9JnVpZD0ke3V0aWxzLl90b29sX1FRLnNlcnZpY2VJZH0mZ2FtZV92ZXJzaW9uPSR7dXRpbHMuY29uZmlnLnFxY29uZmlnLnZlcnNpb259YFxyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzQmFpZHUpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsICsgYCZreXg9dHJ1ZSZhcHBfaWQ9JHt1dGlscy5jb25maWcuYmFpZHVjb25maWcuYXBwSUR9JmNoYW5uZWw9YmFpZHUmZGV2aWNlX3VpZD0ke3V0aWxzLl90b29sX0JhaWR1LnVpZH0mdWlkPSR7dXRpbHMuX3Rvb2xfQmFpZHUuc2VydmljZUlkfSZnYW1lX3ZlcnNpb249JHt1dGlscy5jb25maWcuYmFpZHVjb25maWcudmVyc2lvbn1gXHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSVNVQykge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyBgJmt5eD10cnVlJmFwcF9pZD0ke3V0aWxzLmNvbmZpZy51Y0NvbmZpZy5hcHBJRH0mY2hhbm5lbD11YyZkZXZpY2VfdWlkPSR7dXRpbHMuX3Rvb2xfVUMudWlkfSZ1aWQ9JHt1dGlscy5fdG9vbF9VQy5zZXJ2aWNlSWR9JmdhbWVfdmVyc2lvbj0ke3V0aWxzLmNvbmZpZy51Y0NvbmZpZy52ZXJzaW9ufWBcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5JU0NvY29zKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCArIGAma3l4PXRydWUmYXBwX2lkPSR7dXRpbHMuY29uZmlnLmNvY29zQ29uZmlnLmFwcElEfSZjaGFubmVsPWNvY29zJmRldmljZV91aWQ9JHt1dGlscy5fdG9vbF9Db2Nvc3BsYXkudWlkfSZ1aWQ9JHt1dGlscy5fdG9vbF9Db2Nvc3BsYXkuc2VydmljZUlkfWBcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc05hdGl2ZUFuZHJvaWQpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsICsgYCZreXg9ZmFsc2UmYXBwX2lkPSR7dXRpbHMuY29uZmlnLm5hdGl2ZUFuZHJvaWRDb25maWcuYXBwSUR9JmNoYW5uZWw9JHt1dGlscy5jb25maWcubmF0aXZlQW5kcm9pZENvbmZpZy5jaGFubmVsfSZkZXZpY2VfdWlkPSR7dXRpbHMuVG9vbF9OYXRpdmUudWlkfSZ1aWQ9JHt1dGlscy5Ub29sX05hdGl2ZS5zZXJ2aWNlSWR9JmdhbWVfdHlwZT0yJmdhbWVfdmVyc2lvbj0ke3V0aWxzLmNvbmZpZy5uYXRpdmVBbmRyb2lkQ29uZmlnLnZlcnNpb259YFxyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzS3dhaSkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyBgJmt5eD10cnVlJmFwcF9pZD0ke3V0aWxzLmNvbmZpZy5rd2FpQ29uZmlnLmFwcElEfSZjaGFubmVsPWt1YWlzaG91JmRldmljZV91aWQ9JHt1dGlscy5fdG9vbF9Ld2FpLnVpZH0mdWlkPSR7dXRpbHMuX3Rvb2xfS3dhaS5zZXJ2aWNlSWR9JmdhbWVfdmVyc2lvbj0ke3V0aWxzLmNvbmZpZy5rd2FpQ29uZmlnLnZlcnNpb259YFxyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzTmF0aXZlSU9TKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCArIGAma3l4PWZhbHNlJmFwcF9pZD0ke3V0aWxzLmNvbmZpZy5uYXRpdmVJb1NDb25maWcuYXBwSUR9JmNoYW5uZWw9aW9zJmRldmljZV91aWQ9JHt1dGlscy5Ub29sX0lPUy51aWR9JnVpZD0ke3V0aWxzLlRvb2xfSU9TLnNlcnZpY2VJZH0mZ2FtZV90eXBlPTImZ2FtZV92ZXJzaW9uPSR7dXRpbHMuY29uZmlnLm5hdGl2ZUlvU0NvbmZpZy52ZXJzaW9ufWBcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc1dpRmkpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsICsgYCZreXg9dHJ1ZSZhcHBfaWQ9JHt1dGlscy5jb25maWcud2lmaUNvbmZpZy5hcHBJRH0mY2hhbm5lbD13aWZpJmRldmljZV91aWQ9JHt1dGlscy5fdG9vbF9XaWZpLnVpZH0mdWlkPSR7dXRpbHMuX3Rvb2xfV2lmaS5zZXJ2aWNlSWR9JmdhbWVfdmVyc2lvbj0ke3V0aWxzLmNvbmZpZy53aWZpQ29uZmlnLnZlcnNpb259YFxyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzSGFnbykge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyBgJmt5eD10cnVlJmFwcF9pZD0ke3V0aWxzLmNvbmZpZy5oYWdvQ29uZmlnLmFwcElEfSZjaGFubmVsPWhhZ28mZGV2aWNlX3VpZD0ke3V0aWxzLl90b29sX0hhZ28udWlkfSZ1aWQ9JHt1dGlscy5fdG9vbF9IYWdvLnNlcnZpY2VJZH0mZ2FtZV92ZXJzaW9uPSR7dXRpbHMuY29uZmlnLmhhZ29Db25maWcudmVyc2lvbn1gXHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNIdWFXZWkpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsICsgYCZreXg9dHJ1ZSZhcHBfaWQ9JHt1dGlscy5jb25maWcuaHVhd2VpQ29uZmlnLmFwcElEfSZjaGFubmVsPWh1YXdlaSZkZXZpY2VfdWlkPSR7dXRpbHMuVG9vbF9IdWF3ZWkudWlkfSZ1aWQ9JHt1dGlscy5Ub29sX0h1YXdlaS5zZXJ2aWNlSWR9JmdhbWVfdmVyc2lvbj0ke3V0aWxzLmNvbmZpZy5odWF3ZWlDb25maWcudmVyc2lvbn1gXHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNGYWNlQm9vaykge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyBgJmt5eD10cnVlJmFwcF9pZD0ke3V0aWxzLmNvbmZpZy5mYWNlQm9va0NvbmZpZy5hcHBJRH0mY2hhbm5lbD1mYWNlYm9va3h5eCZkZXZpY2VfdWlkPSR7dXRpbHMuVG9vbF9GYWNlYm9vay51aWR9JnVpZD0ke3V0aWxzLlRvb2xfRmFjZWJvb2suc2VydmljZUlkfSZnYW1lX3ZlcnNpb249JHt1dGlscy5jb25maWcuZmFjZUJvb2tDb25maWcudmVyc2lvbn1gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIrmiqXlsI/muLjmiI/ot7Povazngrnlh7vmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3REYXRhKG90aGVyR2FtZUFwcElkOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5pys5Zyw5pWw5o2u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cl90b29sICYmIHRoaXMuY3VyX3Rvb2wucG9zdERhdGEgJiYgdGhpcy5jdXJfdG9vbC5wb3N0RGF0YShvdGhlckdhbWVBcHBJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDms6jlhozmnI3liqHlmajliJ3lp4vljJblrozmiJDkuovku7ZcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBcclxuICAgICAqIEBwYXJhbSB0YXJnZXQgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3RlclNlcnZlckluaXRFdmVudChjYWxsYmFjazogRnVuY3Rpb24sIHRhcmdldDogYW55KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NvbmZpZ0luaXQpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuacrOWcsOaVsOaNruacquWIneWni+WMliFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pc1NlcnZlckluaXQpIHtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZ2FtZS5vbihZWl9Db25zdGFudC5FQ19TZXJ2ZXJJbml0LCBjYWxsYmFjaywgdGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDms6jlhozmnI3liqHlmajliJ3lp4vljJblrozmiJDkuovku7ZcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBcclxuICAgICAqIEBwYXJhbSB0YXJnZXQgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3RlclNlcnZlckRhdGFMb2FkU3VjY2Vzc0V2ZW50KGNhbGxiYWNrOiBGdW5jdGlvbiwgdGFyZ2V0OiBhbnkpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzU2VydmVyTG9hZFN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZ2FtZS5vbihZWl9Db25zdGFudC5FQ19TZXJ2ZXJEYXRhTG9hZFN1Y2Nlc3MsIGNhbGxiYWNrLCB0YXJnZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDms6jlhozpmpDnp4HlvLnnqpflhbPpl63kuovku7ZcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBcclxuICAgICAqIEBwYXJhbSB0YXJnZXQgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3RlclByaXZhY3lDbG9zZUV2ZW50KGNhbGxiYWNrOiBGdW5jdGlvbiwgdGFyZ2V0OiBhbnkpIHtcclxuXHJcbiAgICAgICAgbGV0IHlzeHkgPSBZWl9Mb2NhbFN0b3JhZ2UuZ2V0SXRlbShZWl9Db25zdGFudC5ZWl9HQU1FX1lTWFkpO1xyXG4gICAgICAgIGlmICh5c3h5KSB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmdhbWUub24oWVpfQ29uc3RhbnQuWVpfUHJpdmFjeUNsb3NlLCBjYWxsYmFjaywgdGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDkuIrmiqXkupLmjqjnu4Tku7bmlbDmja5cclxuICAgICogQHBhcmFtIG90aGVyR2FtZUFwcElkIOi3s+i9rOeahElEXHJcbiAgICAqIEBwYXJhbSBsb2NhdGlvbiDlvZPliY3kvY3nva5cclxuICAgICogQHBhcmFtIHN0YXR1cyAwOueCueWHu++8jDE66Lez6L2s5oiQ5YqfXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHBvc3REYXRhQnlMb2NhdGlvbihvdGhlckdhbWVBcHBJZDogc3RyaW5nLCBsb2NhdGlvbjogc3RyaW5nLCBzdGF0dXM6IG51bWJlciA9IDApIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5pys5Zyw5pWw5o2u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoUGxhdFV0aWxzLklzQmFpZHUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuVG9vbF9CYWlkdSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Ub29sX0JhaWR1LnBvc3REYXRhKG90aGVyR2FtZUFwcElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyX3Rvb2wgJiYgdGhpcy5jdXJfdG9vbC5wb3N0RGF0YUJ5TG9jYXRpb24gJiYgdGhpcy5jdXJfdG9vbC5wb3N0RGF0YUJ5TG9jYXRpb24ob3RoZXJHYW1lQXBwSWQsIGxvY2F0aW9uLCBzdGF0dXMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAqIOS4iuaKpeS6kuaOqOe7hOS7tuaVsOaNrlxyXG4gICogQHBhcmFtIG90aGVyR2FtZUFwcElkIOi3s+i9rOeahElEXHJcbiAgKiBAcGFyYW0gbG9jYXRpb24g5b2T5YmN5L2N572uXHJcbiAgKiBAcGFyYW0gc3RhdHVzIDA654K55Ye777yMMTrot7PovazmiJDlip9cclxuICAqL1xyXG4gICAgcHVibGljIHBvc3RSZWNvbW1lbnRTaG93RGF0YShsb2NhdGlvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NvbmZpZ0luaXQpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuacrOWcsOaVsOaNruacquWIneWni+WMliFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJfdG9vbCAmJiB0aGlzLmN1cl90b29sLnBvc3RSZWNvbW1lbnRTaG93RGF0YSAmJiB0aGlzLmN1cl90b29sLnBvc3RSZWNvbW1lbnRTaG93RGF0YShsb2NhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDms6jplIDmnI3liqHlmajliJ3lp4vljJblrozmiJDkuovku7ZcclxuICAgICAqIEBwYXJhbSB0YXJnZXQgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1bnJlZ2lzdGVyU2VydmVySW5pdEV2ZW50KHRhcmdldDogYW55KSB7XHJcbiAgICAgICAgY2MuZ2FtZS50YXJnZXRPZmYodGFyZ2V0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX2lzU2VydmVyTG9hZFN1Y2Nlc3M6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPkemAgeacjeWKoeWZqOWIneWni+WMluWujOavleS6i+S7tlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW1pdFNlcnZlckluaXRFdmVudCgpIHtcclxuXHJcbiAgICAgICAgLy8gaWYgKFBsYXRVdGlscy5Jc1Rlc3QpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5nZXRDb25maWdCeUtleShcImlzX3ByaXZhY3lfcGFuZWwgPSBcInRydWVcIjtcclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1Nob3dQcml2YWN5UGFuZWwoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc1NlcnZlckxvYWRTdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFlaX0NvbnN0YW50LkVDX1NlcnZlckRhdGFMb2FkU3VjY2Vzcyk7XHJcblxyXG4gICAgICAgICAgICB1dGlscy5yZWdpc3RlclByaXZhY3lDbG9zZUV2ZW50KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzU2VydmVySW5pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoWVpfQ29uc3RhbnQuRUNfU2VydmVySW5pdCk7XHJcbiAgICAgICAgICAgICAgICBjYy5nYW1lLnRhcmdldE9mZihZWl9Db25zdGFudC5FQ19TZXJ2ZXJEYXRhTG9hZFN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICAgICAgY2MuZ2FtZS50YXJnZXRPZmYoWVpfQ29uc3RhbnQuWVpfUHJpdmFjeUNsb3NlKTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9pc1NlcnZlckluaXQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmdhbWUuZW1pdChZWl9Db25zdGFudC5FQ19TZXJ2ZXJJbml0KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgKiDms6jlhozlrp7lkI3liLborqTor4HlhbPpl63kuovku7ZcclxuICAgKiBAcGFyYW0gY2FsbGJhY2sgXHJcbiAgICogQHBhcmFtIHRhcmdldCBcclxuICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3RlclJlYWxOYW1lQXV0aENsb3NlRXZlbnQoY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXQ6IGFueSkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faXNTZXJ2ZXJMb2FkU3VjY2Vzcykge1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5nYW1lLm9uKFlaX0NvbnN0YW50LkVDX1JlYWxOYW1lQXV0aFBhbmVsQ2xvc2UsIGNhbGxiYWNrLCB0YXJnZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW1pdFJlYWxOYW1lQXV0aENsb3NlRXZlbnQoKSB7XHJcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFlaX0NvbnN0YW50LkVDX1JlYWxOYW1lQXV0aFBhbmVsQ2xvc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y+R6YCB6ZqQ56eB56Gu6K6k5by556qX5YWz6Zet5LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbWl0UHJpdmFjeUNsb3NlRXZlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5faXNTZXJ2ZXJJbml0ID0gdHJ1ZTtcclxuICAgICAgICBjYy5nYW1lLmVtaXQoWVpfQ29uc3RhbnQuWVpfUHJpdmFjeUNsb3NlKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS6pOWPieaOqOW5v+aVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0UmVjb21tb25kR2FtZUxpc3QoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NvbmZpZ0luaXQpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuacrOWcsOaVsOaNruacquWIneWni+WMliFcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAodGhpcy5jdXJfdG9vbCAmJiB0aGlzLmN1cl90b29sLmdldFJlY29tbW9uZEdhbWVMaXN0KSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLmN1cl90b29sLmdldFJlY29tbW9uZEdhbWVMaXN0KCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmIChQbGF0VXRpbHMuSXNXZWNoYXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2VjaGF0VG9vbC5nZXRSZWNvbW1vbmRHYW1lTGlzdCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzT1BQTykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHBvVG9vbC5nZXRSZWNvbW1vbmRHYW1lTGlzdCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzQmFpZHUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuVG9vbF9CYWlkdS5nZXRSZWNvbW1vbmRHYW1lTGlzdCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzTmF0aXZlQW5kcm9pZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Ub29sX05hdGl2ZS5nZXRSZWNvbW1vbmRHYW1lTGlzdCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzRG91eWluKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLlRvb2xfRG91eWluLmdldFJlY29tbW9uZEdhbWVMaXN0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLlRvb2xfQnJvc3dlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Ub29sX0Jyb3N3ZXIuZ2V0UmVjb21tb25kR2FtZUxpc3QoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc05hdGl2ZUlPUykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Ub29sX0lPUy5nZXRSZWNvbW1vbmRHYW1lTGlzdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbmmL7npLrlupXpg6jmm7TlpJrmuLjmiI9iYW5uZXLliJfooahcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2hvd1JlY29tbW9uZEdhbWVzQmFubmVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNDb25maWdJbml0KSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLmnKzlnLDmlbDmja7mnKrliJ3lp4vljJYhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuVG9vbF9Ccm9zd2VyKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAodXRpbHMuaXNTdXBwb3J0bmF2aWdhdGVUb01pbmlHYW1lKCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuU2VydmVyQ29uZmlnXHJcbiAgICAgICAgICAgICAgICAmJiB0aGlzLlNlcnZlckNvbmZpZy5pc19ib3R0b21fYmFubmVyX2xpc3QpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLlNlcnZlckNvbmZpZy5pc19ib3R0b21fYmFubmVyX2xpc3QgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcImlzX2JvdHRvbV9iYW5uZXJfbGlzdCDlj4LmlbDkuLpmYWxzZe+8jOW6lemDqOabtOWkmua4uOaIj+aoquW5hee7hOS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLphY3nva7kuK3msqHmnIkgaXNfYm90dG9tX2Jhbm5lcl9saXN0IOWPguaVsO+8jOW6lemDqOabtOWkmua4uOaIj+aoquW5hee7hOS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLlvZPliY3lubPlj7DkuI3mlK/mjIHmuLjmiI/lhoXot7PovazvvIzlupXpg6jmm7TlpJrmuLjmiI/mqKrluYXnu4Tku7bkuI3mmL7npLrvvIFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZWNvbW1lbmRHYW1lc0Jhbm5lcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuuW6lemDqOaOqOiNkOa4uOaIj0Jhbm5lclxyXG4gICAgICogQHBhcmFtIHBhcmFtcyBcclxuICAgICAqIOWPguaVsOaYr+S4gOS4quWvueixoS5cclxuICAgICAqIHtcclxuICAgICAqIGdyb3VwOnN0cmluZyAgLy/nu4Tku7bmiYDlnKjnmoTnu4TjgIJcclxuICAgICAqIHNjYWxlOm51bWJlciAgLy/nu4Tku7bnmoTnvKnmlL7lgLzjgIJcclxuICAgICAqIH1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dSZWNvbW1lbmRHYW1lc0Jhbm5lcihwYXJhbXM6IGFueSA9IG51bGwpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi57uE5Lu26YWN572u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaG93UmVjb21tb25kR2FtZXNCYW5uZXIoKSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLmmL7npLroh6rlrprkuYliYW5uZXIhXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLnJlY29tbWVuZEdhbWVzQmFubmVyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmFubmVyTm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLnJlY29tbWVuZEdhbWVzQmFubmVyKTtcclxuICAgICAgICAgICAgICAgIGlmIChiYW5uZXJOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3JlY29tbWVuZEdhbWVzQmFubmVyICYmIGNjLmlzVmFsaWQodGhpcy5fcmVjb21tZW5kR2FtZXNCYW5uZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlY29tbWVuZEdhbWVzQmFubmVyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVjb21tZW5kR2FtZXNCYW5uZXIgPSBiYW5uZXJOb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlY29tbWVuZEdhbWVzQmFubmVyLnpJbmRleCA9IDk5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYW5uZXJOb2RlLmdyb3VwID0gcGFyYW1zLmdyb3VwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuc2NhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbm5lck5vZGUuc2NhbGUgPSBwYXJhbXMuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZChiYW5uZXJOb2RlLCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLmnKrmib7liLDpooTliLbkvZMgUmVjb21tZW5kR2FtZXNCYW5uZXIsIOivt+afpeeci0NvbW1vblV0aWxz57uE5Lu25LiK5piv5ZCm6LWL5YC8IVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP5bqV6YOo5o6o6I2Q5ri45oiPQmFubmVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoaWRlUmVjb21tZW5kR2FtZXNCYW5uZXIoKSB7XHJcbiAgICAgICAgbGV0IGJhbm5lcjogY2MuTm9kZSA9IGNjLmZpbmQoXCJSZWNvbW1lbmRHYW1lc0Jhbm5lclwiKTtcclxuICAgICAgICBpZiAoYmFubmVyKSB7XHJcbiAgICAgICAgICAgIGJhbm5lci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbmmL7npLrmjqjojZDmuLjmiI/liJfooahcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2hvd1JlY29tbW9uZEdhbWVzTGlzdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi57uE5Lu26YWN572u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuVG9vbF9Ccm9zd2VyKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAodXRpbHMuaXNTdXBwb3J0bmF2aWdhdGVUb01pbmlHYW1lKCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuU2VydmVyQ29uZmlnLmlzX2Jhbm5lcl9saXN0XHJcbiAgICAgICAgICAgICAgICAmJiB0aGlzLlNlcnZlckNvbmZpZy5pc19iYW5uZXJfbGlzdCA9PSBcInRydWVcIlxyXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5TZXJ2ZXJDb25maWcuanVtcF9saXN0XHJcbiAgICAgICAgICAgICAgICAmJiB0aGlzLlNlcnZlckNvbmZpZy5qdW1wX2xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi6K+356Gu6K6k5a2X5q6177yaaXNfYmFubmVyX2xpc3TjgIFqdW1wX2xpc3Qg5piv5ZCm6L6+5Yiw5pi+56S66Ieq5a6a5LmJYmFubmVy55qE6KaB5rGCIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLlvZPliY3lubPlj7DkuI3mlK/mjIHmuLjmiI/lhoXot7PovazvvIzmm7TlpJrmuLjmiI/liJfooajnu4Tku7bkuI3mmL7npLrvvIFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVjb21tZW5kR2FtZXNMaXN0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65LqS5o6o5rua5Yqo5p2hXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zXHJcbiAgICAgKiBgYGBcclxuICAgICAqIHtcclxuICAgICAqIGdyb3VwOnN0cmluZyAgICAgLy8g57uE5Lu25omA5Zyo55qE57uEXHJcbiAgICAgKiBib3R0b206bnVtYmVyICAgIC8vIOe7hOS7tui3neemu+Wxj+W5leS4i+i+ueeahOi3neemu1xyXG4gICAgICogbGVmdDpudW1iZXIgICAgICAvLyDnu4Tku7bot53nprvlsY/luZXlt6bovrnnmoTot53nprtcclxuICAgICAqIHNjYWxlOm51bWJlciAgICAgLy8g57uE5Lu255qE57yp5pS+5q+U5L6LXHJcbiAgICAgKiBwYXJlbnQ6Y2MuTm9kZSAgIC8vIOeItuiKgueCuSzms6jmhI/vvJrlpoLmnpzkuI3kvKDmraTlj4LmlbDvvIzliJnlv4XpobvmjqXmlLbov5Tlm57lgLzvvIzlubblsIblhbbliqDlhaXliLDniLboioLngrnkuK3vvIzlkKbliJnnu4Tku7bkuI3kvJrmmL7npLrjgIJcclxuICAgICAqIH1cclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd1JlY29tbWVuZEdhbWVzTGlzdChwYXJhbXM6IGFueSA9IG51bGwpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi57uE5Lu26YWN572u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWcub3RoZXJjb25maWcucmVjb21tZW5kR2FtZXNCYXIpIHtcclxuICAgICAgICAgICAgbGV0IGJhck5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNvbmZpZy5vdGhlcmNvbmZpZy5yZWNvbW1lbmRHYW1lc0Jhcik7XHJcbiAgICAgICAgICAgIGlmIChiYXJOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmVjb21tZW5kR2FtZXNMaXN0ICYmIGNjLmlzVmFsaWQodGhpcy5fcmVjb21tZW5kR2FtZXNMaXN0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlY29tbWVuZEdhbWVzTGlzdC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWNvbW1lbmRHYW1lc0xpc3QgPSBiYXJOb2RlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVjb21tZW5kR2FtZXNMaXN0LnpJbmRleCA9IDk5OTk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHdpZGdldDogY2MuV2lkZ2V0ID0gYmFyTm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5ncm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXJOb2RlLmdyb3VwID0gcGFyYW1zLmdyb3VwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnNjYWxlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyTm9kZS5zY2FsZSA9IHBhcmFtcy5zY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy50b3AgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnblRvcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduQm90dG9tID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC50b3AgPSBwYXJhbXMudG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1zLmJvdHRvbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduVG9wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduQm90dG9tID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmJvdHRvbSA9IHBhcmFtcy5ib3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMubGVmdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmxlZnQgPSBwYXJhbXMubGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcmFtcy5yaWdodCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnblJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnJpZ2h0ID0gcGFyYW1zLnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhck5vZGUucGFyZW50ID0gcGFyYW1zLnBhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3aWRnZXQudXBkYXRlQWxpZ25tZW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhck5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5pyq5om+5Yiw6aKE5Yi25L2TIFJlY29tbWVuZEdhbWVzQmFyLCDor7fmn6XnnItDb21tb25VdGlsc+e7hOS7tuS4iuaYr+WQpui1i+WAvCAhXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOmakOiXj+S6kuaOqOa7muWKqOadoVxyXG4gICAgKiBAcGFyYW0gX3RyeUdhbWVzV2lkZ2V0IOabtOWkmua4uOaIj+aMguS7tlxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBoaWRlUmVjb21tZW5kR2FtZXNMaXN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9yZWNvbW1lbmRHYW1lc0xpc3QgJiYgY2MuaXNWYWxpZCh0aGlzLl9yZWNvbW1lbmRHYW1lc0xpc3QpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlY29tbWVuZEdhbWVzTGlzdC5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5pi+56S66K+V546p5oyC5Lu2XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1Nob3dUcnlHYW1lc1dpZGdldCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi57uE5Lu26YWN572u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuVG9vbF9Ccm9zd2VyKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAoUGxhdFV0aWxzLklzV2VjaGF0KSB7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc1N1cHBvcnRuYXZpZ2F0ZVRvTWluaUdhbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLndlY2hhdFRvb2xcclxuICAgICAgICAgICAgICAgICAgICAmJiB1dGlscy53ZWNoYXRUb29sLlNlcnZlckNvbmZpZ1xyXG4gICAgICAgICAgICAgICAgICAgICYmIHV0aWxzLndlY2hhdFRvb2wuU2VydmVyQ29uZmlnLmljb25fanVtcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1dGlscy53ZWNoYXRUb29sLlNlcnZlckNvbmZpZy5pY29uX2p1bXAgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCJpY29uX2p1bXDlj4LmlbDkuLpmYWxzZe+8jOivleeOqea4uOaIj+aMguS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLphY3nva7kuK3msqHmnIlpY29uX2p1bXDlj4LmlbDvvIzor5XnjqnmuLjmiI/mjILku7bkuI3mmL7npLrvvIFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5b2T5YmN5bmz5Y+w5LiN5pSv5oyB5ri45oiP5YaF6Lez6L2s77yM6K+V546p5ri45oiP5oyC5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNPUFBPKSB7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc1N1cHBvcnRuYXZpZ2F0ZVRvTWluaUdhbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLm9wcG9Ub29sXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdXRpbHMub3Bwb1Rvb2wuU2VydmVyQ29uZmlnXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdXRpbHMub3Bwb1Rvb2wuU2VydmVyQ29uZmlnLmljb25fanVtcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCh1dGlscy5vcHBvVG9vbC5TZXJ2ZXJDb25maWcuaWNvbl9qdW1wKSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcImljb25fanVtcOWPguaVsOS4umZhbHNl77yM6K+V546p5oiP5oyC5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIumFjee9ruS4reayoeaciWljb25fanVtcOWPguaVsO+8jOivleeOqea4uOaIj+aMguS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLlvZPliY3lubPlj7DkuI3mlK/mjIHmuLjmiI/lhoXot7PovazvvIzor5XnjqnmuLjmiI/mjILku7bkuI3mmL7npLrvvIFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc0JhaWR1KSB7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc1N1cHBvcnRuYXZpZ2F0ZVRvTWluaUdhbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLlRvb2xfQmFpZHVcclxuICAgICAgICAgICAgICAgICAgICAmJiB1dGlscy5Ub29sX0JhaWR1LlNlcnZlckNvbmZpZ1xyXG4gICAgICAgICAgICAgICAgICAgICYmIHV0aWxzLlRvb2xfQmFpZHUuU2VydmVyQ29uZmlnLmljb25fanVtcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1dGlscy5Ub29sX0JhaWR1LlNlcnZlckNvbmZpZy5pY29uX2p1bXAgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCJpY29uX2p1bXDlj4LmlbDkuLpmYWxzZe+8jOabtOWkmua4uOaIj+aMguS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLphY3nva7kuK3msqHmnIlpY29uX2p1bXDlj4LmlbDvvIzor5XnjqnmuLjmiI/mjILku7bkuI3mmL7npLrvvIFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5b2T5YmN5bmz5Y+w5LiN5pSv5oyB5ri45oiP5YaF6Lez6L2s77yM6K+V546p5ri45oiP5oyC5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNOYXRpdmVBbmRyb2lkKSB7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5Ub29sX05hdGl2ZVxyXG4gICAgICAgICAgICAgICAgJiYgdXRpbHMuVG9vbF9OYXRpdmUuU2VydmVyQ29uZmlnXHJcbiAgICAgICAgICAgICAgICAmJiB1dGlscy5Ub29sX05hdGl2ZS5TZXJ2ZXJDb25maWcuaWNvbl9qdW1wKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQodXRpbHMuVG9vbF9OYXRpdmUuU2VydmVyQ29uZmlnLmljb25fanVtcCkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi6YWN572u5Lit5rKh5pyJanVtcExpc3Tlj4LmlbDvvIzor5XnjqnmuLjmiI/mjILku7bkuI3mmL7npLrvvIFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc0RvdXlpbikge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNTdXBwb3J0bmF2aWdhdGVUb01pbmlHYW1lKCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5Ub29sX0RvdXlpbiAmJiB1dGlscy5Ub29sX0RvdXlpbi5pc1Nob3dNb3JlR2FtZXNNb2RhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdXRpbHMuVG9vbF9Eb3V5aW4uU2VydmVyQ29uZmlnXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdXRpbHMuVG9vbF9Eb3V5aW4uU2VydmVyQ29uZmlnLmljb25fanVtcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1dGlscy5Ub29sX0RvdXlpbi5TZXJ2ZXJDb25maWcuaWNvbl9qdW1wID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwiaWNvbl9qdW1w5Y+C5pWw5Li6ZmFsc2XvvIzor5XnjqnmuLjmiI/mjILku7bkuI3mmL7npLrvvIFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi6YWN572u5Lit5rKh5pyJaWNvbl9qdW1w5Y+C5pWw77yM6K+V546p5ri45oiP5oyC5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuW9k+WJjeW5s+WPsOS4jeaUr+aMgea4uOaIj+WGhei3s+i9rO+8jOivleeOqea4uOaIj+aMguS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzUVEpIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3VwcG9ydG5hdmlnYXRlVG9NaW5pR2FtZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuVG9vbF9RUVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHV0aWxzLlRvb2xfUVEuU2VydmVyQ29uZmlnXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdXRpbHMuVG9vbF9RUS5TZXJ2ZXJDb25maWcuaWNvbl9qdW1wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWxzLlRvb2xfUVEuU2VydmVyQ29uZmlnLmljb25fanVtcCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcImljb25fanVtcOWPguaVsOS4umZhbHNl77yM6K+V546p5ri45oiP5oyC5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIumFjee9ruS4reayoeaciWljb25fanVtcOWPguaVsO+8jOivleeOqea4uOaIj+aMguS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLlvZPliY3lubPlj7DkuI3mlK/mjIHmuLjmiI/lhoXot7PovazvvIzor5XnjqnmuLjmiI/mjILku7bkuI3mmL7npLrvvIFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc05hdGl2ZUlPUykge1xyXG5cclxuICAgICAgICAgICAgaWYgKHV0aWxzLlRvb2xfSU9TXHJcbiAgICAgICAgICAgICAgICAmJiB1dGlscy5Ub29sX0lPUy5TZXJ2ZXJDb25maWdcclxuICAgICAgICAgICAgICAgICYmIHV0aWxzLlRvb2xfSU9TLlNlcnZlckNvbmZpZy5pY29uX2p1bXApIHtcclxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5Ub29sX0lPUy5TZXJ2ZXJDb25maWcuaWNvbl9qdW1wID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwiaWNvbl9qdW1w5Y+C5pWw5Li6ZmFsc2XvvIzor5XnjqnmuLjmiI/mjILku7bkuI3mmL7npLrvvIFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi6YWN572u5Lit5rKh5pyJaWNvbl9qdW1w5Y+C5pWw77yM6K+V546p5ri45oiP5oyC5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIF90cnlHYW1lc1dpZGdldDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuuivleeOqeaMguS7tlxyXG4gICAgICogQHBhcmFtIHBhcmFtcyBcclxuICAgICAqIGBgYFxyXG4gICAgICoge1xyXG4gICAgICogZ3JvdXA6c3RyaW5nXHJcbiAgICAgKiBsZWZ0Om51bWJlclxyXG4gICAgICogYm90dG9tOm51bWJlclxyXG4gICAgICogc2NhbGU6bnVtYmVyXHJcbiAgICAgKiBwYXJlbnQ6Y2MuTm9kZVxyXG4gICAgICogfVxyXG4gICAgICogYGBgXHJcbiAgICAgKiBAcmV0dXJucyDnlJ/miJDnmoTnu4Tku7ZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dUcnlHYW1lc1dpZGdldChwYXJhbXM6IGFueSA9IG51bGwpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi57uE5Lu26YWN572u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1dGlscy5pc1Nob3dUcnlHYW1lc1dpZGdldCgpKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXMubG9jYXRpb24gJiYgKHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJ0cnlfZ2FtZV93aWRnZXRfbG9jYXRpb25zXCIpLmluZGV4T2YocGFyYW1zLmxvY2F0aW9uKSA8IDApKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi5b2T5YmN5L2N572u5pyN5Yqh5Zmo5pyq6YWN572u5pi+56S66K+V546p5oyC5Lu277yBXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RyeUdhbWVzV2lkZ2V0ICYmIGNjLmlzVmFsaWQodGhpcy5fdHJ5R2FtZXNXaWRnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJ5R2FtZXNXaWRnZXQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLnRyeUdhbWVzV2lkZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLnRyeUdhbWVzV2lkZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RyeUdhbWVzV2lkZ2V0ICYmIGNjLmlzVmFsaWQodGhpcy5fdHJ5R2FtZXNXaWRnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyeUdhbWVzV2lkZ2V0LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJ5R2FtZXNXaWRnZXQgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyeUdhbWVzV2lkZ2V0LnpJbmRleCA9IDk5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpZGdldDogY2MuV2lkZ2V0ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdyb3VwID0gcGFyYW1zLmdyb3VwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuc2NhbGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zY2FsZSA9IHBhcmFtcy5zY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnRvcCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnblRvcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnbkJvdHRvbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnRvcCA9IHBhcmFtcy50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1zLmJvdHRvbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnblRvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Cb3R0b20gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmJvdHRvbSA9IHBhcmFtcy5ib3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5sZWZ0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnblJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQubGVmdCA9IHBhcmFtcy5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcmFtcy5yaWdodCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnbkxlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnJpZ2h0ID0gcGFyYW1zLnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gcGFyYW1zLnBhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB3aWRnZXQudXBkYXRlQWxpZ25tZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5pyq5om+5Yiw6aKE5Yi25L2TIFRyeUdhbWVzV2lkZ2V0LCDor7fmn6XnnItDb21tb25VdGlsc+e7hOS7tuS4iuaYr+WQpui1i+WAvCAhXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuS4jeaUr+aMgei3s+i9rOe7hOS7tlwiKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj+abtOWkmua4uOaIj+aMguS7tlxyXG4gICAgICogQHBhcmFtIF90cnlHYW1lc1dpZGdldCDmm7TlpJrmuLjmiI/mjILku7ZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhpZGVUcnlHYW1lc1dpZGdldCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fdHJ5R2FtZXNXaWRnZXQgJiYgY2MuaXNWYWxpZCh0aGlzLl90cnlHYW1lc1dpZGdldCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJ5R2FtZXNXaWRnZXQuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5pi+56S65pu05aSa5ri45oiP5L6n6L655qCPXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1Nob3dNb3JlR2FtZXNXaWRnZXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NvbmZpZ0luaXQpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIue7hOS7tumFjee9ruacquWIneWni+WMliFcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLlRvb2xfQnJvc3dlciB8fCBDQ19ERUJVRykgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKFBsYXRVdGlscy5Jc1dlY2hhdCkge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNTdXBwb3J0bmF2aWdhdGVUb01pbmlHYW1lKCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldENvbmZpZ0J5S2V5KFwiaXNfbW9yZV9nYW1lXCIpID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLphY3nva7kuK3msqHmnIlpc19tb3JlX2dhbWXlj4LmlbDvvIzmm7TlpJrmuLjmiI/kvqfovrnmoI/nu4Tku7bkuI3mmL7npLrvvIFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5b2T5YmN5bmz5Y+w5LiN5pSv5oyB5ri45oiP5YaF6Lez6L2s77yM5pu05aSa5ri45oiP5L6n6L655qCP57uE5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNPUFBPKSB7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc1N1cHBvcnRuYXZpZ2F0ZVRvTWluaUdhbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJpc19tb3JlX2dhbWVcIikgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXRpbHMub3Bwb1Rvb2wuU2VydmVyQ29uZmlnLnNob3dfb3Bwb19yZWMgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF1dGlscy5vcHBvVG9vbC5jYW5TaG93UmVjb21tZW5kKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLlvZPliY3lubPlj7DkuI3mlK/mjIHlrpjmlrnkupLmjqjvvIzmm7TlpJrmuLjmiI/kvqfovrnmoI/nu4Tku7bkuI3mmL7npLrvvIFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLphY3nva7kuK3msqHmnIlpc19tb3JlX2dhbWXlj4LmlbDvvIzmm7TlpJrmuLjmiI/kvqfovrnmoI/nu4Tku7bkuI3mmL7npLrvvIFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5b2T5YmN5bmz5Y+w5LiN5pSv5oyB5ri45oiP5YaF6Lez6L2s77yM5pu05aSa5ri45oiP5L6n6L655qCP57uE5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNEb3V5aW4pIHtcclxuICAgICAgICAgICAgaWYgKFBsYXRVdGlscy5Jc0FuZHJvaWRcclxuICAgICAgICAgICAgICAgICYmIHV0aWxzLmlzU3VwcG9ydG5hdmlnYXRlVG9NaW5pR2FtZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRDb25maWdCeUtleShcImlzX21vcmVfZ2FtZVwiKSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi6YWN572u5Lit5rKh5pyJaXNfbW9yZV9nYW1l5Y+C5pWw77yM5pu05aSa5ri45oiP5L6n6L655qCP57uE5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuW9k+WJjeW5s+WPsOS4jeaUr+aMgea4uOaIj+WGhei3s+i9rO+8jOabtOWkmua4uOaIj+S+p+i+ueagj+e7hOS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzQmFpZHUpIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3VwcG9ydG5hdmlnYXRlVG9NaW5pR2FtZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRDb25maWdCeUtleShcImlzX21vcmVfZ2FtZVwiKSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi6YWN572u5Lit5rKh5pyJaXNfbW9yZV9nYW1l5Y+C5pWw77yM5pu05aSa5ri45oiP5L6n6L655qCP57uE5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuW9k+WJjeW5s+WPsOS4jeaUr+aMgea4uOaIj+WGhei3s+i9rO+8jOabtOWkmua4uOaIj+S+p+i+ueagj+e7hOS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzUVEpIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3VwcG9ydG5hdmlnYXRlVG9NaW5pR2FtZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRDb25maWdCeUtleShcImlzX21vcmVfZ2FtZVwiKSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi6YWN572u5Lit5rKh5pyJaXNfbW9yZV9nYW1l5Y+C5pWw77yM5pu05aSa5ri45oiP5L6n6L655qCP57uE5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuW9k+WJjeW5s+WPsOS4jeaUr+aMgea4uOaIj+WGhei3s+i9rO+8jOabtOWkmua4uOaIj+S+p+i+ueagj+e7hOS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzNDM5OSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc05hdGl2ZUFuZHJvaWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJpc19tb3JlX2dhbWVcIikgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIumFjee9ruS4reayoeaciWlzX21vcmVfZ2FtZeWPguaVsO+8jOabtOWkmua4uOaIj+S+p+i+ueagj+e7hOS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzTmF0aXZlSU9TKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldENvbmZpZ0J5S2V5KFwiaXNfbW9yZV9nYW1lXCIpID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLphY3nva7kuK3msqHmnIlpc19tb3JlX2dhbWXlj4LmlbDvvIzmm7TlpJrmuLjmiI/kvqfovrnmoI/nu4Tku7bkuI3mmL7npLrvvIFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc1ZJVk8pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJpc19tb3JlX2dhbWVcIikgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIumFjee9ruS4reayoeaciWlzX21vcmVfZ2FtZeWPguaVsO+8jOabtOWkmua4uOaIj+S+p+i+ueagj+e7hOS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgX21vcmVHYW1lc1NpZGVQYW5lbDogYW55ID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65pu05aSa5ri45oiP5L6n6L655qCPXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zIFxyXG4gICAgICogYGBgXHJcbiAgICAgKiB7XHJcbiAgICAgKiBncm91cDpzdHJpbmcgICAgLy8g57uE5Lu25omA5Zyo55qE57uEIFxyXG4gICAgICogbGVmdDpudW1iZXIgICAgICAvLyDnu4Tku7bot53nprvlsY/luZXlt6bovrnnmoTot53nprtcclxuICAgICAqIHJpZ2h0Om51bWJlciAgICAgLy8g57uE5Lu26Led56a75bGP5bmV5Y+z6L6555qE6Led56a7XHJcbiAgICAgKiB0b3A6bnVtYmVyICAgICAgIC8vIOi3neemu+Wxj+W5lemhtumDqOeahOi3neemu1xyXG4gICAgICogYm90dG9tOm51bWJlciAgICAvLyDot53nprvlsY/luZXlupXpg6jnmoTot53nprtcclxuICAgICAqIHNjYWxlOm51bWJlciAgICAgLy8g57yp5pS+5q+U5L6LXHJcbiAgICAgKiBwYXJlbnQ6Y2MuTm9kZSAgIC8vIOeItuiKgueCuVxyXG4gICAgICogfVxyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93TW9yZUdhbWVzV2lkZ2V0KHBhcmFtczogYW55ID0gbnVsbCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNDb25maWdJbml0KSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLnu4Tku7bphY3nva7mnKrliJ3lp4vljJYhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhcmFtcy5sb2NhdGlvbiAmJiAodGhpcy5nZXRDb25maWdCeUtleShcIm1vcmVfZ2FtZV93aWRnZXRfbG9jYXRpb25zXCIpLmluZGV4T2YocGFyYW1zLmxvY2F0aW9uKSA8IDApKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLlvZPliY3kvY3nva7mnI3liqHlmajmnKrphY3nva7mmL7npLrmm7TlpJrmuLjmiI/mjILku7bvvIFcIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9tb3JlR2FtZXNTaWRlUGFuZWwgJiYgY2MuaXNWYWxpZCh0aGlzLl9tb3JlR2FtZXNTaWRlUGFuZWwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3JlR2FtZXNTaWRlUGFuZWwuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIGlmIChQbGF0VXRpbHMuSXNEb3V5aW4pIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLlRvb2xfRG91eWluKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNTaG93TW9yZUdhbWVzV2lkZ2V0KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXRpbHMuVG9vbF9Eb3V5aW4uaXNTaG93TW9yZUdhbWVzTW9kYWwoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWcub3RoZXJjb25maWcubW9yZUdhbWVzV2lkZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLm1vcmVHYW1lc1dpZGdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tb3JlR2FtZXNTaWRlUGFuZWwgJiYgY2MuaXNWYWxpZCh0aGlzLl9tb3JlR2FtZXNTaWRlUGFuZWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vcmVHYW1lc1NpZGVQYW5lbC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vcmVHYW1lc1NpZGVQYW5lbCA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9yZUdhbWVzU2lkZVBhbmVsLnpJbmRleCA9IDk5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHdpZGdldDogY2MuV2lkZ2V0ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdyb3VwID0gcGFyYW1zLmdyb3VwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuc2NhbGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zY2FsZSA9IHBhcmFtcy5zY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnRvcCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnblRvcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnbkJvdHRvbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnRvcCA9IHBhcmFtcy50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1zLmJvdHRvbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnblRvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Cb3R0b20gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmJvdHRvbSA9IHBhcmFtcy5ib3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5sZWZ0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnblJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQubGVmdCA9IHBhcmFtcy5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcmFtcy5yaWdodCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnbkxlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnJpZ2h0ID0gcGFyYW1zLnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gcGFyYW1zLnBhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQudXBkYXRlQWxpZ25tZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5pyq5om+5Yiw6aKE5Yi25L2TIE1vcmVHYW1lc1dpZGdldCwg6K+35p+l55yLQ29tbW9uVXRpbHPnu4Tku7bkuIrmmK/lkKbotYvlgLzvvIFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYnRuID0gdXRpbHMuVG9vbF9Eb3V5aW4uc2hvd01vcmVHYW1lc0J1dHRvbihwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbW9yZUdhbWVzU2lkZVBhbmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9yZUdhbWVzU2lkZVBhbmVsLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vcmVHYW1lc1NpZGVQYW5lbCA9IGJ0bjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5ncm91cCA9IHBhcmFtcy5ncm91cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4ucGFyZW50ID0gcGFyYW1zLnBhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9yZUdhbWVzU2lkZVBhbmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi5b2T5YmN5bmz5Y+w54mI5pys5LiN5pSv5oyB5Lqk5Y+J5o6o5bm/LCDmm7TlpJrmuLjmiI/mjInpkq7kuI3mmL7npLohXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzU2hvd01vcmVHYW1lc1dpZGdldCgpKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5vdGhlcmNvbmZpZy5tb3JlR2FtZXNXaWRnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLm1vcmVHYW1lc1dpZGdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21vcmVHYW1lc1NpZGVQYW5lbCAmJiBjYy5pc1ZhbGlkKHRoaXMuX21vcmVHYW1lc1NpZGVQYW5lbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vcmVHYW1lc1NpZGVQYW5lbC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9yZUdhbWVzU2lkZVBhbmVsID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9yZUdhbWVzU2lkZVBhbmVsLnpJbmRleCA9IDk5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB3aWRnZXQ6IGNjLldpZGdldCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5ncm91cCA9IHBhcmFtcy5ncm91cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuc2NhbGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSBwYXJhbXMuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnRvcCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Ub3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduQm90dG9tID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnRvcCA9IHBhcmFtcy50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcmFtcy5ib3R0b20gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduVG9wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Cb3R0b20gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5ib3R0b20gPSBwYXJhbXMuYm90dG9tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5sZWZ0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnbkxlZnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQubGVmdCA9IHBhcmFtcy5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMucmlnaHQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5yaWdodCA9IHBhcmFtcy5yaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHBhcmFtcy5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnVwZGF0ZUFsaWdubWVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLmnKrmib7liLDpooTliLbkvZMgTW9yZUdhbWVzV2lkZ2V0LCDor7fmn6XnnItDb21tb25VdGlsc+e7hOS7tuS4iuaYr+WQpui1i+WAvO+8gVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLkuI3lj6/mmL7npLrmm7TlpJrmuLjmiI/kvqfovrnmoI9cIilcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP5L6n6L655qCP5oyJ6ZKuXHJcbiAgICAgKiBAcGFyYW0gbW9yZUdhbWVCdG4g5pu05aSa5ri45oiP5L6n6L655qCP5oyJ6ZKuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoaWRlTW9yZUdhbWVzV2lkZ2V0KG1vcmVHYW1lQnRuPzogYW55KSB7XHJcbiAgICAgICAgaWYgKFBsYXRVdGlscy5Jc0RvdXlpbikge1xyXG4gICAgICAgICAgICBpZiAobW9yZUdhbWVCdG4gJiYgY2MuaXNWYWxpZChtb3JlR2FtZUJ0bikpIHtcclxuICAgICAgICAgICAgICAgIG1vcmVHYW1lQnRuLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fbW9yZUdhbWVzU2lkZVBhbmVsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3JlR2FtZXNTaWRlUGFuZWwuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG1vcmVHYW1lQnRuICYmIGNjLmlzVmFsaWQobW9yZUdhbWVCdG4pKSB7XHJcbiAgICAgICAgICAgICAgICBtb3JlR2FtZUJ0bi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX21vcmVHYW1lc1NpZGVQYW5lbCAmJiBjYy5pc1ZhbGlkKHRoaXMuX21vcmVHYW1lc1NpZGVQYW5lbCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vcmVHYW1lc1NpZGVQYW5lbC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChQbGF0VXRpbHMuSXNWSVZPKSB7XHJcbiAgICAgICAgICAgIHRoaXMuVG9vbF9WaXZvICYmIHRoaXMuVG9vbF9WaXZvLmhpZGVHYW1lUG9ydGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9tb3JlR2FtZXNTaWRlUGFuZWxCYWlkdTogYW55ID0gbnVsbDtcclxuICAgIHB1YmxpYyBzaG93QmFpZHVNb3JlR2FtZXNCdG4ocGFyYW1zOiBhbnkgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NvbmZpZ0luaXQpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIue7hOS7tumFjee9ruacquWIneWni+WMliFcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGlzU2hvdzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChQbGF0VXRpbHMuSXNCYWlkdSkge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuVG9vbF9CYWlkdVxyXG4gICAgICAgICAgICAgICAgJiYgdXRpbHMuVG9vbF9CYWlkdS5jYW5TaG93UmVjb21tZW5kQnV0dG9uKCkpIHtcclxuICAgICAgICAgICAgICAgIGlzU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5b2T5YmN5bmz5Y+w5LiN5pSv5oyB5ri45oiP5YaF6Lez6L2s77yM55m+5bqm5pu05aSa5ri45oiP5L6n6L655qCP57uE5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKFBsYXRVdGlscy5Jc0JhaWR1KSB7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5Ub29sX0JhaWR1KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTaG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ0biA9IHV0aWxzLlRvb2xfQmFpZHUuc2hvd1JlY29tbWVuZGF0aW9uQnV0dG9uKHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbW9yZUdhbWVzU2lkZVBhbmVsQmFpZHUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vcmVHYW1lc1NpZGVQYW5lbEJhaWR1LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3JlR2FtZXNTaWRlUGFuZWxCYWlkdSA9IGJ0bjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vcmVHYW1lc1NpZGVQYW5lbEJhaWR1O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIuW9k+WJjeW5s+WPsOeJiOacrOS4jeaUr+aMgeS6pOWPieaOqOW5vywg55m+5bqm5pu05aSa5ri45oiP5oyJ6ZKu5LiN5pi+56S6IVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGVCYWlkdU1vcmVHYW1lc0J0bihtb3JlR2FtZUJ0bjogYW55KSB7XHJcbiAgICAgICAgaWYgKFBsYXRVdGlscy5Jc0JhaWR1ICYmIG1vcmVHYW1lQnRuKSB7XHJcbiAgICAgICAgICAgIGlmIChtb3JlR2FtZUJ0biAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBtb3JlR2FtZUJ0bi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbmmL7npLrlvZXlsY/nu4Tku7ZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2hvd1JlY29yZFdpZGdldCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi57uE5Lu26YWN572u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuVG9vbF9Ccm9zd2VyKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKFBsYXRVdGlscy5Jc0RvdXlpbikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRDb25maWdCeUtleShcInNob3dfcmVjb3JkXCIpID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi5pyN5Yqh5Zmo6YWN572u5LiN5pi+56S65b2V5bGP5oyJ6ZKu77yBXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzS3dhaSkge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMua3dhaVRvb2wgJiYgdXRpbHMua3dhaVRvb2wuY2hlY2tDYW5TaG93UmVjb3JlZCgpICYmIHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJzaG93X3JlY29yZFwiKSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIuacjeWKoeWZqOmFjee9ruS4jeaYvuekuuW9leWxj+aMiemSru+8gVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGhpZGVSZWNvcmRXaWRnZXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3JlY29yZFdpZGdldCAmJiBjYy5pc1ZhbGlkKHRoaXMuX3JlY29yZFdpZGdldCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVjb3JkV2lkZ2V0LmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcmVjb3JkV2lkZ2V0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65b2V5bGP5oyJ6ZKuXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd1JlY29yZFdpZGdldChwYXJhbXM6IGFueSA9IG51bGwpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi57uE5Lu26YWN572u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5pc1Nob3dSZWNvcmRXaWRnZXQoKSkgcmV0dXJuIG51bGw7XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWcub3RoZXJjb25maWcucmVjb3JkV2lkZ2V0KSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jb25maWcub3RoZXJjb25maWcucmVjb3JkV2lkZ2V0KTtcclxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZWNvcmRXaWRnZXQgJiYgY2MuaXNWYWxpZCh0aGlzLl9yZWNvcmRXaWRnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVjb3JkV2lkZ2V0LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlY29yZFdpZGdldCA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWNvcmRXaWRnZXQuekluZGV4ID0gOTk5OTtcclxuICAgICAgICAgICAgICAgIGxldCB3aWRnZXQ6IGNjLldpZGdldCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuZ3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5ncm91cCA9IHBhcmFtcy5ncm91cDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5zY2FsZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSBwYXJhbXMuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnRvcCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduVG9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Cb3R0b20gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnRvcCA9IHBhcmFtcy50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMuYm90dG9tICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Ub3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Cb3R0b20gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuYm90dG9tID0gcGFyYW1zLmJvdHRvbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5sZWZ0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25MZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25SaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQubGVmdCA9IHBhcmFtcy5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1zLnJpZ2h0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25MZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQucmlnaHQgPSBwYXJhbXMucmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBwYXJhbXMucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdpZGdldC51cGRhdGVBbGlnbm1lbnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuacquaJvuWIsOmihOWItuS9kyBSZWNvcmRXaWRnZXQsIOivt+afpeeci0NvbW1vblV0aWxz57uE5Lu25LiK5piv5ZCm6LWL5YC877yBXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbmmL7npLrliJvlu7rlv6vmjbfmlrnlvI/mjqfku7ZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2hvd0NyZWF0ZVNob3J0Y3V0V2lkZ2V0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNDb25maWdJbml0KSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLmnKzlnLDmlbDmja7mnKrliJ3lp4vljJYhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5Ub29sX0Jyb3N3ZXIpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmNhbkNyZWF0ZVNob3J0Y3V0KCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJpc19kZXNrdG9wXCIpID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLphY3nva7mlbDmja7kuK3msqHmnIkgaXNfZGVza3RvcCDlrZfmrrXvvIwg5Yib5bu65b+r5o235pa55byP5oyJ6ZKu5LiN5pi+56S6IVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLlvZPliY3lubPlj7DniYjmnKzkuI3mlK/mjIHliJvlu7rmoYzpnaLlv6vmjbfmlrnlvI8sIOWIm+W7uuW/q+aNt+aWueW8j+aMiemSruS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfc2hvcnRjdXRXaWRnZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rlv6vmjbfmlrnlvI9cclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayDngrnlh7vliJvlu7rlv6vmjbfmlrnlvI/mjInpkq7lkI7lm57osIPlh73mlbAgRnVuY3Rpb248cmV0OmJvb2xlYW4+XHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd0NyZWF0ZVNob3J0Y3V0V2lkZ2V0KGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwsIHBhcmFtczogYW55ID0gbnVsbCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNDb25maWdJbml0KSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLnu4Tku7bphY3nva7mnKrliJ3lp4vljJYhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU2hvd0NyZWF0ZVNob3J0Y3V0V2lkZ2V0KCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLnNob3J0Y3V0V2lkZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLnNob3J0Y3V0V2lkZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Nob3J0Y3V0V2lkZ2V0ICYmIGNjLmlzVmFsaWQodGhpcy5fc2hvcnRjdXRXaWRnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Nob3J0Y3V0V2lkZ2V0LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2hvcnRjdXRXaWRnZXQgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Nob3J0Y3V0V2lkZ2V0LnpJbmRleCA9IDk5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpZGdldDogY2MuV2lkZ2V0ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2hvcnRjdXRXaWRnZXQ6IFlaX1Nob3J0Y3V0V2lkZ2V0ID0gbm9kZS5nZXRDb21wb25lbnQoXCJZWl9TaG9ydGN1dFdpZGdldFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvcnRjdXRXaWRnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvcnRjdXRXaWRnZXQuQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5ncm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5ncm91cCA9IHBhcmFtcy5ncm91cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnNjYWxlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSBwYXJhbXMuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMudG9wICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduVG9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduQm90dG9tID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQudG9wID0gcGFyYW1zLnRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMuYm90dG9tICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduVG9wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnbkJvdHRvbSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuYm90dG9tID0gcGFyYW1zLmJvdHRvbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmxlZnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25MZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5sZWZ0ID0gcGFyYW1zLmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1zLnJpZ2h0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25SaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQucmlnaHQgPSBwYXJhbXMucmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBwYXJhbXMucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZChub2RlLCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB3aWRnZXQudXBkYXRlQWxpZ25tZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5pyq5om+5Yiw6aKE5Yi25L2TIFNob3J0Y3V0V2lkZ2UsIOivt+afpeeci0NvbW1vblV0aWxz57uE5Lu25LiK5piv5ZCm6LWL5YC877yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuS4jeaYvuekuuWIm+W7uuahjOmdouWbvuagh1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/lv6vmjbfmlrnlvI9cclxuICAgICAqL1xyXG4gICAgcHVibGljIGhpZGVDcmVhdGVTaG9ydGN1dFdpZGdldChwYXJhbXM6IGFueSA9IG51bGwpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2hvcnRjdXRXaWRnZXQgJiYgY2MuaXNWYWxpZCh0aGlzLl9zaG9ydGN1dFdpZGdldCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2hvcnRjdXRXaWRnZXQuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5rOo5YaM5LqL5Lu2LOS6i+S7tuWcqFlaX0NvbnN0YW5057G75Lit5a6a5LmJXHJcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIDogc3RyaW5nIOS6i+S7tuWQjSDkuovku7blnKggWVpfQ29uc3RhbnQg57G75Lit5a6a5LmJXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sg5Zue6LCD5Ye95pWwXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IDogY2MuTm9kZSDnm67moIflr7nosaFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlZ2lzdGVyRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbiwgdGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICBpZiAoIWV2ZW50TmFtZSkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwiW1V0aWxzLnJlZ2lzdGVyRXZlbnRdIHBhcmFtIGV2ZW50TmFtZSBpcyBudWxsIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCJbVXRpbHMucmVnaXN0ZXJFdmVudF0gcGFyYW0gY2FsbGJhY2sgaXMgbnVsbCFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIltVdGlscy5yZWdpc3RlckV2ZW50XSBwYXJhbSB0YXJnZXQgaXMgbnVsbCFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLmdhbWUub24oZXZlbnROYW1lLCBjYWxsYmFjaywgdGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPlua2iOazqOWGjOS6i+S7tlxyXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSDkuovku7blkI1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVucmVnaXN0ZXJFdmVudChldmVudE5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGNjLmdhbWUub2ZmKGV2ZW50TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj5HpgIHkuovku7ZcclxuICAgICAqIEBwYXJhbSBldmVudE5hbWUg5LqL5Lu25ZCNXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbWl0Q29tbW9uRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBjYy5nYW1lLmVtaXQoZXZlbnROYW1lKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIF9nYW1lQm94OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICog5pi+56S65ri45oiP55uS5a2QXHJcbiAgICAqIEBwYXJhbSBwYXJhbXMgXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHNob3dHYW1lQm94KHBhcmFtczogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIGlmIChQbGF0VXRpbHMuSXNXZWNoYXQpIHtcclxuICAgICAgICAgICAgbGV0IGlzU2hvdzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInV0aWxzLndlY2hhdFRvb2wuU2VydmVyQ29uZmlnLm9wZW5Cb3hcIix1dGlscy53ZWNoYXRUb29sLlNlcnZlckNvbmZpZy5vcGVuQm94KVxyXG4gICAgICAgICAgICBpZiAodXRpbHMud2VjaGF0VG9vbC5TZXJ2ZXJDb25maWcgJiYgdXRpbHMud2VjaGF0VG9vbC5TZXJ2ZXJDb25maWcub3BlbkJveCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLndlY2hhdFRvb2wuU2VydmVyQ29uZmlnLm9wZW5Cb3ggIT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi5pyN5Yqh5Zmo5ri45oiP55uS5a2Q6YWN572u5Li65YWz6Zet54q25oCB77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLmnI3liqHlmajphY3nva7muLjmiI/nm5LlrZDkuLrmiZPlvIDnirbmgIFcIik7XHJcbiAgICAgICAgICAgICAgICBpc1Nob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNob3dUaW1lOiBudW1iZXIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIG5ldyBEYXRlKFwiMjAxOS0xMC0yM1wiKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvd1RpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi5b2T5YmN5pe26Ze05aSn5LqO5oyH5a6a5pe26Ze077yM5Y+v5Lul5pi+56S65ri45oiP55uS5a2QXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNTaG93KSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5b2T5YmN5p2h5Lu25LiN5ruh6Laz6KaB5rGC77yM5ri45oiP55uS5a2Q5LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jb25maWcub3RoZXJjb25maWcuZ2FtZUJveCk7XHJcbiAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2FtZUJveCAmJiBjYy5pc1ZhbGlkKHRoaXMuX2dhbWVCb3gpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2FtZUJveC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lQm94ID0gbm9kZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVCb3guekluZGV4ID0gOTk5OTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHBhcmFtcy5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5pyq5om+5Yiw6aKE5Yi25L2TIEdhbWVCb3gsIOivt+afpeeci0NvbW1vblV0aWxz57uE5Lu25LiK5piv5ZCm6LWL5YC877yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBfbmF0aXZlVHJ5R2FtZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgdHJ5R2FtZURhdGU6IGFueVtdID0gW107XHJcbiAgICBuYXRpdmVOZWVkQ2hhbmdlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGlzU2hvd05hdGl2ZVRyeUdhbWVzV2lkZ2V0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNDb25maWdJbml0KSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLnu4Tku7bphY3nva7mnKrliJ3lp4vljJYhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLlRvb2xfQnJvc3dlcikgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLlNlcnZlckNvbmZpZ1xyXG4gICAgICAgICAgICAmJiB0aGlzLlNlcnZlckNvbmZpZy5pY29uX2p1bXBfbmF0aXZlXHJcbiAgICAgICAgICAgICYmIHBhcnNlSW50KHRoaXMuU2VydmVyQ29uZmlnLmljb25fanVtcF9uYXRpdmUpID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi6YWN572u5Lit5rKh5pyJaWNvbl9qdW1wX25hdGl2ZeWPguaVsO+8jOWOn+eUn+ivleeOqea4uOaIj+aMguS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgKiDmmK/lkKbog73mmL7npLo25Liq5YWD57Sg55qE5Lqk5Y+J5o6o5bm/57uE5Lu2XHJcbiAgICAqL1xyXG4gICAgcHVibGljIGNhblNob3dDcm9zc1dpZGdldDYoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NvbmZpZ0luaXQpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIue7hOS7tumFjee9ruacquWIneWni+WMliFcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLlRvb2xfQnJvc3dlcikgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKFBsYXRVdGlscy5Jc1dlY2hhdCB8fCBQbGF0VXRpbHMuSXNPUFBPIHx8IFBsYXRVdGlscy5Jc0JhaWR1IHx8IFBsYXRVdGlscy5Jc05hdGl2ZUFuZHJvaWQgfHwgUGxhdFV0aWxzLklzTmF0aXZlSU9TKSB7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc1N1cHBvcnRuYXZpZ2F0ZVRvTWluaUdhbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJpc19jcm9zc19nYW1lXCIpID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLphY3nva7kuK3msqHmnIlpc19jcm9zc19nYW1l5Y+C5pWw77yMNuWFg+e0oOS6pOWPieaOqOW5v+e7hOS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLlvZPliY3lubPlj7DkuI3mlK/mjIHmuLjmiI/lhoXot7PovazvvIw25YWD57Sg5Lqk5Y+J5o6o5bm/57uE5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNEb3V5aW4pIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3VwcG9ydG5hdmlnYXRlVG9NaW5pR2FtZSgpICYmIHV0aWxzLlRvb2xfRG91eWluLmlzU2hvd01vcmVHYW1lc01vZGFsKCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldENvbmZpZ0J5S2V5KFwiaXNfY3Jvc3NfZ2FtZVwiKSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwiaXNfY3Jvc3NfZ2FtZeWPguaVsOS4umZhbHNl77yMNuWFg+e0oOS6pOWPieaOqOW5v+e7hOS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLlvZPliY3lubPlj7DkuI3mlK/mjIHmuLjmiI/lhoXot7PovazvvIw25YWD57Sg5Lqk5Y+J5o6o5bm/57uE5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYvuekujblhYPntKDkuqTlj4nmjqjlub/nu4Tku7ZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dDcm9zc1dpZGdldDYoKTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NvbmZpZ0luaXQpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIue7hOS7tumFjee9ruacquWIneWni+WMliFcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jYW5TaG93Q3Jvc3NXaWRnZXQ2KCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLmNyb3NzV2lkZ2V0Nikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNjLmluc3RhbnRpYXRlKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLmNyb3NzV2lkZ2V0Nik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5pyq5om+5Yiw6aKE5Yi25L2TIENyb3NzV2lkZ2V0Niwg6K+35p+l55yLQ29tbW9uVXRpbHPnu4Tku7bkuIrmmK/lkKbotYvlgLzvvIFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65re75Yqg5Yiw5oiR55qE5bCP56iL5bqP5byV5a+8XHJcbiAgICAgKiBAcGFyYW0gcGFyYW0g5Y+C5pWw5YC877yaXHJcbiAgICAgKiAgICAgICAgICAgICAgdHlwZe+8miBiYXLvvIjkuIDnm7TlsZXnpLrvvIkvdGlw77yIM+enkuWxleekuu+8iVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd0Zhdm9yaXRlR3VpZGUocGFyYW0/OiBhbnkpIHtcclxuICAgICAgICBpZiAoUGxhdFV0aWxzLklzQmFpZHUpIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLl90b29sX0JhaWR1LmNhblNob3dGYXZvcml0ZUd1aWRlKCkpIHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgc3dhbi5zaG93RmF2b3JpdGVHdWlkZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogcGFyYW0gPyBwYXJhbS50eXBlIDogJ3RpcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+S4gOmUrua3u+WKoOWIsOaIkeeahOWwj+eoi+W6jycsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZygn5re75Yqg5oiQ5Yqf77yaJywgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coJ+a3u+WKoOWksei0pe+8micsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLmmL7npLrmiJHnmoTlsI/nqIvluo/lvJXlr7zmiJDlip/vvIFcIik7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIuW9k+WJjeW5s+WPsOS4jeaUr+aMgeaYvuekuua3u+WKoOaIkeeahOWwj+eoi+W6j+W8leWvvFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpqozor4HmmK/lkKboh6rliqjlvLnlh7rnrb7liLBcclxuICAgICAqIHRydWUgOiDoh6rliqjlvLnlh7rvvIxmYWxzZSA6IOS4jeiHquWKqOW8ueWHulxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2hlY2tBdXRvU2lnbigpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRDb25maWdCeUtleShcImF1dG9fc2lnblwiKSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW9k+WJjeW5s+WPsOeahOmFjee9ruaWh+S7tlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IFNlcnZlckNvbmZpZygpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cl90b29sKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cl90b29sLlNlcnZlckNvbmZpZyA/IHRoaXMuY3VyX3Rvb2wuU2VydmVyQ29uZmlnIDoge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX2N1cl90b29sID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5b2T5YmN5bmz5Y+w55qE6YWN572u5paH5Lu2XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY3VyX3Rvb2woKTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy5fY3VyX3Rvb2wpIHJldHVybiB0aGlzLl9jdXJfdG9vbDtcclxuICAgICAgICBpZiAoUGxhdFV0aWxzLklzV2VjaGF0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cl90b29sID0gdXRpbHMud2VjaGF0VG9vbDtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc09QUE8pIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VyX3Rvb2wgPSB1dGlscy5vcHBvVG9vbDtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc1ZJVk8pIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VyX3Rvb2wgPSB1dGlscy5Ub29sX1Zpdm87XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNRUSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJfdG9vbCA9IHV0aWxzLlRvb2xfUVE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNEb3V5aW4pIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VyX3Rvb2wgPSB1dGlscy5Ub29sX0RvdXlpbjtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc0JhaWR1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cl90b29sID0gdXRpbHMuVG9vbF9CYWlkdTtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc1FUVCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJfdG9vbCA9IHV0aWxzLlRvb2xfUVRUO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzWGlhb01pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cl90b29sID0gdXRpbHMuVG9vbF9YaWFvTWk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSVNVQykge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJfdG9vbCA9IHV0aWxzLlRvb2xfVUM7XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSVNDb2Nvcykge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJfdG9vbCA9IHV0aWxzLlRvb2xfQ29jb3NwbGF5O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzTmF0aXZlQW5kcm9pZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJfdG9vbCA9IHV0aWxzLlRvb2xfTmF0aXZlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzNDM5OSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJfdG9vbCA9IHV0aWxzLlRvb2xfNDM5OTtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc0t3YWkpIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VyX3Rvb2wgPSB1dGlscy5fdG9vbF9Ld2FpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzTmF0aXZlSU9TKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cl90b29sID0gdXRpbHMuVG9vbF9JT1M7XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNXaUZpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cl90b29sID0gdXRpbHMuX3Rvb2xfV2lmaTtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc0hhZ28pIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VyX3Rvb2wgPSB1dGlscy5fdG9vbF9IYWdvO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzSHVhV2VpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cl90b29sID0gdXRpbHMuVG9vbF9IdWF3ZWk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNGYWNlQm9vaykge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJfdG9vbCA9IHV0aWxzLlRvb2xfRmFjZWJvb2s7XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNHb29nbGVXZWIpIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VyX3Rvb2wgPSB1dGlscy5Ub29sX0ZhY2Vib29rO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cl90b29sID0gdXRpbHMuX3Rvb2xfQnJvc3dlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cl90b29sO1xyXG4gICAgfVxyXG5cclxuICAgIHNlcnZlclNob3dMb2c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65pel5b+X5Yiw5o6n5Yi25Y+wXHJcbiAgICAgKi9cclxuICAgIHNob3dMb2dUb0NvbnNvbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICog5pi+56S6TE9HXHJcbiAgICAgKi90cnVlXHJcbiAgICBwdWJsaWMgc2hvd0xvZyhtc2c6IGFueSA9IFwiXCIsIC4uLmFueSkge1xyXG4gICAgICAgIC8vIGlmICh0cnVlKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKG1zZywgLi4uYW55KTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAodGhpcy5zaG93TG9nVmlldyB8fCB0aGlzLnNlcnZlclNob3dMb2cpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLmxvZ291dFZpZXcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvZ29vdXRWaWV3ID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZShcIkxvZ291dFZpZXdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFsb2dvb3V0Vmlldykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvb3V0VmlldyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLmxvZ291dFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmFkZENoaWxkKGxvZ29vdXRWaWV3LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nb291dFZpZXcuZ2V0Q29tcG9uZW50KFwiTG9nT3V0Vmlld1wiKS5hZGRMb2cobXNnLCAuLi5hbnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLmnKrmib7liLDpooTliLbkvZMgTG9nT3V0Vmlldywg6K+35p+l55yLQ29tbW9uVXRpbHPnu4Tku7bkuIrmmK/lkKbotYvlgLzvvIFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93TG9nVG9Db25zb2xlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtc2csIC4uLmFueSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2cobXNnLCAuLi5hbnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWxj+W5lemch+WKqOWKn+iDvVxyXG4gICAgICogQHBhcmFtIHR5cGUg6ZyH5Yqo57G75Z6LIOS8oOmAkuaemuS4vu+8mlZpYnJhdGVUeXBlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2aWJyYXRlKHR5cGU6IFZpYnJhdGVUeXBlID0gVmlicmF0ZVR5cGUuU2hvcnQpIHtcclxuICAgICAgICBpZiAoUGxhdFV0aWxzLklzV2VjaGF0KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09IFZpYnJhdGVUeXBlLlNob3J0KSB7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIC8v5L2/5omL5py65Y+R55Sf6L6D55+t5pe26Ze055qE5oyv5Yqo77yIMTUgbXPvvInjgILku4XlnKggaVBob25lIDcgLyA3IFBsdXMg5Lul5LiK5Y+KIEFuZHJvaWQg5py65Z6L55Sf5pWIXHJcbiAgICAgICAgICAgICAgICB3eC52aWJyYXRlU2hvcnQoeyBzdWNjZXNzKHJlcykgeyB9LCBmYWlsKHJlcykgeyB9IH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICB3eC52aWJyYXRlTG9uZyh7IHN1Y2Nlc3MocmVzKSB7IH0sIGZhaWwocmVzKSB7IH0gfSk7ICAvLzQwMCBtc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNPUFBPKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09IFZpYnJhdGVUeXBlLlNob3J0KSB7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIHFnLnZpYnJhdGVTaG9ydCh7IHN1Y2Nlc3MocmVzKSB7IH0sIGZhaWwocmVzKSB7IH0gfSk7Ly/vvIgyMCBtc++8iVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBxZy52aWJyYXRlTG9uZyh7IHN1Y2Nlc3MocmVzKSB7IH0sIGZhaWwocmVzKSB7IH0gfSk7ICAvLzQwMCBtc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNWSVZPKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09IFZpYnJhdGVUeXBlLlNob3J0KSB7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIHFnLnZpYnJhdGVTaG9ydCgpOy8v77yIMTUgbXPvvIlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgcWcudmlicmF0ZUxvbmcoKTsgLy80MDAgbXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzUVEpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gVmlicmF0ZVR5cGUuU2hvcnQpIHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgLy/vvIgxNSBtc++8ie+8jOS7heWcqCBpUGhvbmUgNy83IFBsdXMg5Lul5LiK5Y+KIEFuZHJvaWQg5py65Z6L55Sf5pWI44CCXHJcbiAgICAgICAgICAgICAgICBxcS52aWJyYXRlU2hvcnQoeyBzdWNjZXNzKHJlcykgeyB9LCBmYWlsKHJlcykgeyB9IH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBxcS52aWJyYXRlTG9uZyh7IHN1Y2Nlc3MocmVzKSB7IH0sIGZhaWwocmVzKSB7IH0gfSk7IC8vNDAwIG1zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc0RvdXlpbikge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PSBWaWJyYXRlVHlwZS5TaG9ydCkge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICB0dC52aWJyYXRlU2hvcnQoeyBzdWNjZXNzKHJlcykgeyB9LCBmYWlsKHJlcykgeyB9IH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICB0dC52aWJyYXRlTG9uZyh7IHN1Y2Nlc3MocmVzKSB7IH0sIGZhaWwocmVzKSB7IH0gfSk7IC8vNDAwIG1zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc0JhaWR1KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09IFZpYnJhdGVUeXBlLlNob3J0KSB7XHJcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIC8v77yIMTUgbXPvvInvvIzku4XlnKggaVBob25lIDcvNyBQbHVzIOS7peS4iuWPiiBBbmRyb2lkIOacuuWei+eUn+aViOOAglxyXG4gICAgICAgICAgICAgICAgc3dhbi52aWJyYXRlU2hvcnQoeyBzdWNjZXNzKHJlcykgeyB9LCBmYWlsKHJlcykgeyB9IH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBzd2FuLnZpYnJhdGVMb25nKHsgc3VjY2VzcyhyZXMpIHsgfSwgZmFpbChyZXMpIHsgfSB9KTsgLy80MDAgbXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzV2lGaSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PSBWaWJyYXRlVHlwZS5TaG9ydCkge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAvL++8iDE1IG1z77yJ77yM5LuF5ZyoIGlQaG9uZSA3LzcgUGx1cyDku6XkuIrlj4ogQW5kcm9pZCDmnLrlnovnlJ/mlYjjgIJcclxuICAgICAgICAgICAgICAgIHd1amkudmlicmF0ZVNob3J0KHsgc3VjY2VzcyhyZXMpIHsgfSwgZmFpbChyZXMpIHsgfSB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgd3VqaS52aWJyYXRlTG9uZyh7IHN1Y2Nlc3MocmVzKSB7IH0sIGZhaWwocmVzKSB7IH0gfSk7IC8vNDAwIG1zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc05hdGl2ZUFuZHJvaWQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gVmlicmF0ZVR5cGUuU2hvcnQpIHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh1dGlscy5Ub29sX05hdGl2ZS5qbmlDbGFzc05hbWUsIFwidmlicmF0ZVNob3J0XCIsIFwiKClWXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHV0aWxzLlRvb2xfTmF0aXZlLmpuaUNsYXNzTmFtZSwgXCJ2aWJyYXRlTG9uZ1wiLCBcIigpVlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/lvIDlp4vkuIrmiqVcclxuICAgICAqIEBwYXJhbSBsZXZlbCDlvZPliY3lhbPljaFcclxuICAgICAqIEBwYXJhbSBtb2RlbCDlvZPliY3mqKHlvI/vvJog5rKh5pyJ5YiZ55yB55WlXHJcbiAgICAgKi9cclxuICAgIFN0YXJ0R2FtZShsZXZlbDogc3RyaW5nLCBtb2RlbD86IHN0cmluZykge1xyXG4gICAgICAgIEFsZFV0aWxzLlN0YXJ0R2FtZShsZXZlbCwgbW9kZWwpO1xyXG4gICAgICAgIHV0aWxzLmN1cl90b29sICYmIHV0aWxzLmN1cl90b29sLnVtYU9uU3RhcnQgJiYgdXRpbHMuY3VyX3Rvb2wudW1hT25TdGFydChsZXZlbCk7XHJcbiAgICAgICAgaWYgKFBsYXRVdGlscy5Jc0RvdXlpbiB8fCBQbGF0VXRpbHMuSXNLd2FpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQXV0b1N0YXJ0UmVjb3JkKGxldmVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICog5ri45oiP6IOc5Yip5LiK5oqlLOaYvuekuue7k+eul+W5v+WRilxyXG4gICAgKiBAcGFyYW0gbGV2ZWwg5b2T5YmN5YWz5Y2hXHJcbiAgICAqIEBwYXJhbSBzdGFyIOiOt+W+l+aYn+aYn++8miDpu5jorqTkuLowXHJcbiAgICAqIEBwYXJhbSBtb2RlbCDlvZPliY3mqKHlvI/vvJog5rKh5pyJ5YiZ55yB55WlXHJcbiAgICAqIEBwYXJhbSBpc1Nob3dBZCDmmK/lkKbosIPnlKjlub/lkYrvvIzpu5jorqTlvIDlkK/osIPnlKhcclxuICAgICogQHJldHVybnMganNvbnsgdHlwZTooMTo25YWD57Sg5LqS5o6o44CBMjrljZXkuKrljp/nlJ/lub/lkYopLG5vZGU66IqC54K5fSAgICAgICAgICAgICAgICAgIFxyXG4gICAgKiBcclxuICAgICovXHJcbiAgICBHYW1lV2luKGxldmVsOiBzdHJpbmcsIHN0YXI6IG51bWJlciA9IDAsIG1vZGVsPzogc3RyaW5nLCBpc1Nob3dBZDogYm9vbGVhbiA9IHRydWUpOiBhbnkge1xyXG4gICAgICAgIEFsZFV0aWxzLkdhbWVXaW4obGV2ZWwsIHN0YXIsIG1vZGVsKTtcclxuICAgICAgICB1dGlscy5jdXJfdG9vbCAmJiB1dGlscy5jdXJfdG9vbC51bWFSZXBvcnRlZExldmVsICYmIHV0aWxzLmN1cl90b29sLnVtYVJlcG9ydGVkTGV2ZWwobGV2ZWwsIExldmVsU3RhdHVzLkdhbWVXaW4pO1xyXG4gICAgICAgIGlmIChQbGF0VXRpbHMuSXNLd2FpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmt3YWlUb29sLmlzQ2xpY2tFbmQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKFBsYXRVdGlscy5Jc0RvdXlpbiB8fCBQbGF0VXRpbHMuSXNLd2FpKSB7XHJcbiAgICAgICAgdGhpcy5yZWNvcmRFbmQoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQXV0b1Nob3dTdGF0ZW1lbnQobGV2ZWwsIHRydWUsIGlzU2hvd0FkKTtcclxuXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICog5ri45oiP5aSx6LSl5LiK5oqlLOaYvuekuue7k+eul+W5v+WRilxyXG4gICAgKiBAcGFyYW0gbGV2ZWwg5b2T5YmN5YWz5Y2hXHJcbiAgICAqIEBwYXJhbSBtb2RlbCDlvZPliY3mqKHlvI/vvJog5rKh5pyJ5YiZ55yB55WlXHJcbiAgICAqIEBwYXJhbSBpc1Nob3dBZCDmmK/lkKbosIPnlKjlub/lkYrvvIzpu5jorqTlvIDlkK/osIPnlKhcclxuICAgICogQHJldHVybnMganNvbnsgdHlwZTooMTo25YWD57Sg5LqS5o6o44CBMjrljZXkuKrljp/nlJ/lub/lkYopLG5vZGU66IqC54K5fVxyXG4gICAgKi9cclxuICAgIEdhbWVGYWlsKGxldmVsOiBzdHJpbmcsIG1vZGVsPzogc3RyaW5nLCBpc1Nob3dBZDogYm9vbGVhbiA9IHRydWUpOiBhbnkge1xyXG4gICAgICAgIEFsZFV0aWxzLkdhbWVGYWlsKGxldmVsLCBtb2RlbCk7XHJcbiAgICAgICAgdXRpbHMuY3VyX3Rvb2wgJiYgdXRpbHMuY3VyX3Rvb2wudW1hUmVwb3J0ZWRMZXZlbCAmJiB1dGlscy5jdXJfdG9vbC51bWFSZXBvcnRlZExldmVsKGxldmVsLCBMZXZlbFN0YXR1cy5HYW1lRmFpbCk7XHJcbiAgICAgICAgLy8gaWYgKFBsYXRVdGlscy5Jc0RvdXlpbiB8fCBQbGF0VXRpbHMuSXNLd2FpKSB7XHJcbiAgICAgICAgdGhpcy5yZWNvcmRFbmQoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQXV0b1Nob3dTdGF0ZW1lbnQobGV2ZWwsIGZhbHNlLCBpc1Nob3dBZCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOi3s+i/h+WFs+WNoeS4iuaKpVxyXG4gICAgICogQHBhcmFtIGxldmVsIOW9k+WJjeWFs+WNoVxyXG4gICAgICogQHBhcmFtIG1vZGVsIOW9k+WJjeaooeW8j++8miDmsqHmnInliJnnnIHnlaVcclxuICAgICAqL1xyXG4gICAgR2FtZVNraXAobGV2ZWw6IHN0cmluZywgbW9kZWw/OiBzdHJpbmcpIHtcclxuICAgICAgICBBbGRVdGlscy5HYW1lU2tpcChsZXZlbCwgbW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LqL5Lu25LiK5oqlXHJcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIOS6i+S7tuWQjeensFxyXG4gICAgICovXHJcbiAgICBTZW5kRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBBbGRVdGlscy5TZW5kRXZlbnQoZXZlbnROYW1lKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPi+ebn+iHquWumuS5ieS6i+S7tuS4iuaKpVxyXG4gICAgICogQHBhcmFtIGV2ZW50SUQg5LqL5Lu2SURcclxuICAgICAqIEBwYXJhbSBwYXJhbXMgICDkuovku7blhoXlrrkgVHlwZTogb2JqXHJcbiAgICAgKi9cclxuICAgIHVtYUV2ZW50KGV2ZW50SUQ6IHN0cmluZywgcGFyYW1zPykge1xyXG4gICAgICAgIHV0aWxzLnNob3dMb2coYOS6i+S7tuS4iuaKpToke2V2ZW50SUR977yaJHtwYXJhbXN9YCk7XHJcbiAgICAgICAgaWYgKFBsYXRVdGlscy5Jc05hdGl2ZUFuZHJvaWQpIHtcclxuICAgICAgICAgICAgdXRpbHMuY3VyX3Rvb2wgJiYgdXRpbHMuY3VyX3Rvb2wudW1hVHJhY2tFdmVudCAmJiB1dGlscy5jdXJfdG9vbC51bWFUcmFja0V2ZW50KFwiY3VzdG9tXCIsIGV2ZW50SUQsIHBhcmFtcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXRpbHMuY3VyX3Rvb2wgJiYgdXRpbHMuY3VyX3Rvb2wudW1hVHJhY2tFdmVudCAmJiB1dGlscy5jdXJfdG9vbC51bWFUcmFja0V2ZW50KGV2ZW50SUQsIHBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvdmVyUGFnZVNob3dUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgb3ZlclBhZ2VJbnNlcnRBZElzVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTsgLy8g57uT566X6aG16Z2i55qE5o+S5bGP5bm/5ZGK5piv5ZCm6KKr54K55Ye76L+HXHJcbiAgICByZXBvcnRPdmVyUGFnZVRvdWNoRXZlbnQob3ZlclBhZ2U6IGNjLk5vZGUpIHtcclxuICAgICAgICB1dGlscy5zaG93TG9nKFwicmVwb3J0T3ZlclBhZ2VUb3VjaEV2ZW50ID4+Pj4+Pj5cIik7XHJcbiAgICAgICAgdGhpcy5vdmVyUGFnZUluc2VydEFkSXNUb3VjaCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3ZlclBhZ2VTaG93VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICBub2RlLndpZHRoID0gb3ZlclBhZ2Uud2lkdGggKiAyO1xyXG4gICAgICAgIG5vZGUuaGVpZ2h0ID0gb3ZlclBhZ2UuaGVpZ2h0ICogMjtcclxuICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5vdmVyUGFnZVNob3dUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgICAgIGxldCBqc29uOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAganNvbi5kYXRhID0gdGltZTtcclxuICAgICAgICAgICAgdXRpbHMuU2VuZEV2ZW50TmV3KGDnu5PnrpfpobXpnaLngrnlh7vml7bpl7RgLCBcIm92ZXJQYWdlVG91Y2hcIiwgSlNPTi5zdHJpbmdpZnkoanNvbikpO1xyXG4gICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgbm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgfSwgb3ZlclBhZ2UpO1xyXG4gICAgICAgIG5vZGVbJ190b3VjaExpc3RlbmVyJ11bJ3N3YWxsb3dUb3VjaGVzJ10gPSBmYWxzZTtcclxuICAgICAgICBvdmVyUGFnZS5hZGRDaGlsZChub2RlLCBjYy5tYWNyby5NQVhfWklOREVYKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiHquWumuS5ieS6i+S7tuS4iuaKpVxyXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSDkuovku7blkI3np7BcclxuICAgICAqL1xyXG4gICAgU2VuZEV2ZW50TmV3KGV2ZW50TmFtZTogc3RyaW5nLCBldmVudElkOiBzdHJpbmcgPSBcImRlZmF1bHRcIiwgZXZlbnREYXRhPzogc3RyaW5nLCBpc0NhbGxCYWNrOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIHV0aWxzLnNob3dMb2coYOiHquWumuS5ieS6i+S7tuS4iuaKpToke2V2ZW50TmFtZX3vvIwke2V2ZW50SWR9LCR7ZXZlbnREYXRhfWApO1xyXG4gICAgICAgIHV0aWxzLmN1cl90b29sICYmIHV0aWxzLmN1cl90b29sLlNlbmRFdmVudE5ldyAmJiB1dGlscy5jdXJfdG9vbC5TZW5kRXZlbnROZXcoZXZlbnROYW1lLCBldmVudElkLCBldmVudERhdGEsIGlzQ2FsbEJhY2spO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4uOaIj+S4reS9v+eUqOmBk+WFt+S4iuaKpVxyXG4gICAgICogQHBhcmFtIGxldmVsIOW9k+WJjeWFs+WNoVxyXG4gICAgICogQHBhcmFtIHRvb05hbWUg6YGT5YW35ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gbW9kZWwg5b2T5YmN5qih5byP77yaIOayoeacieWImeecgeeVpVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFVzZVRvb2wobGV2ZWw6IHN0cmluZywgdG9vbE5hbWU6IHN0cmluZywgbW9kZWw/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBBbGRVdGlscy5Vc2VUb29sKGxldmVsLCB0b29sTmFtZSwgbW9kZWwpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliIbkuqvmiJDlip/mrKHmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlY29yZWRfc2hhcmVfY291bnQ6IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIOWIpOaWreeul+eVjOmdouaYr+WQpuiDveaYvuekuuiHquWKqOWIhuS6qyAgIOiHquWKqOW8uuW8ueinhumikSAgIOiHquWKqOW8ueaPkuWxj1xyXG4gICAgICogdHlwZSAx6Ieq5Yqo5YiG5LqrICAgMuiHquWKqOW8uuW8ueinhumikSAgICAz6Ieq5Yqo5by55o+S5bGPIDToh6rliqjlvLnkupLmjqjmj5LlsY9cclxuICAgICovXHJcbiAgICBwdWJsaWMgY2hlY2tSZXN1bHRTaG93KHR5cGUpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgbGV2ZWwgPSB1dGlscy5jdXJyZW50TGV2ZWw7XHJcbiAgICAgICAgbGV0IGlzU3VjY2VzcyA9IHV0aWxzLmlzU3VjY2VzcztcclxuICAgICAgICBsZXQgY29uZmlnID0gdXRpbHMuU2VydmVyQ29uZmlnO1xyXG4gICAgICAgIGlmICghY29uZmlnKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLmnI3liqHlmajphY3nva7kuI3lrZjlnKgs5Y+q5pi+56S657uT566X5bm/5ZGKXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlID09IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChQbGF0VXRpbHMuSXNEb3V5aW4pIHtcclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5hdXRvX3JlY29yZF9zaGFyZV9jb3VudCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlY29yZWRDb3VudCA9IGNvbmZpZy5hdXRvX3JlY29yZF9zaGFyZV9jb3VudDtcclxuICAgICAgICAgICAgICAgIGlmIChyZWNvcmVkQ291bnQgIT0gMCAmJiB1dGlscy5yZWNvcmVkX3NoYXJlX2NvdW50ID49IHJlY29yZWRDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coYOacjeWKoeWZqOmFjee9ruWIhuS6q+asoeaVsO+8miR7cmVjb3JlZENvdW50fSAs5bey5Yiw5LiK6ZmQYClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlY29yZF9jYXAgPSBjb25maWcuYXV0b19yZWNvcmRfaW50ZXJ2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrU2hvdzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbCA+IDAgJiYgcmVjb3JkX2NhcCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWNvcmRfY2FwLmluZGV4T2YoXCIsXCIpID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgJSBOdW1iZXIocmVjb3JkX2NhcCkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKGDmjIflrprlhbPljaEke2NvbmZpZy5hdXRvX3JlY29yZF9pbnRlcnZhbH3liIbkuqvlvZXlsY/vvIzlvZPliY3lhbPljaHkuLrvvJoke2xldmVsfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlY29yZF9jYXBfYXJyID0gcmVjb3JkX2NhcC5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRfY2FwX2Fyci5mb3JFYWNoKHN0ciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxldmVsID09IE51bWJlcihzdHIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrU2hvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5hdXRvX3JlY29yZF9zaGFyZV90eXBlID09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZSA9PSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5hdXRvX3JlY29yZF9zaGFyZV90eXBlID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3VjY2VzcyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlID09IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5hdXRvX3JlY29yZF9zaGFyZV90eXBlID09IFwiZmFpbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3VjY2VzcyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZSA9PSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB1dGlscy5zaG93TG9nKGDkuI3og73oh6rliqjliIbkuqvlvZXlsY8g5YiG5Lqr5b2V5bGP6Ze06ZqU5Li677yaJHtjb25maWcuYXV0b19yZWNvcmRfaW50ZXJ2YWx9ICDliIbkuqvnsbvlnovkuLrvvJoke2NvbmZpZy5hdXRvX3JlY29yZF9zaGFyZV90eXBlfWApO1xyXG4gICAgICAgIGlmIChjb25maWcuYXV0b192aWRlb19pbnRlcnZhbCAmJiBjb25maWcuYXV0b192aWRlb19pbnRlcnZhbCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBzcGFjZSA9IGNvbmZpZy5hdXRvX3ZpZGVvX2ludGVydmFsO1xyXG4gICAgICAgICAgICBsZXQgc2hvd1R5cGUgPSBjb25maWcuYXV0b192aWRlb19zaG93X3R5cGVcclxuICAgICAgICAgICAgaWYgKGxldmVsICUgc3BhY2UgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNob3dUeXBlID09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZSA9PSAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNob3dUeXBlID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU3VjY2VzcyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlID09IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNob3dUeXBlID09IFwiZmFpbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU3VjY2VzcyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZSA9PSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB1dGlscy5zaG93TG9nKGDkuI3og73oh6rliqjlvLnop4bpopHlvLnop4bpopHpl7TpmpTkuLrvvJoke2NvbmZpZy5hdXRvX3ZpZGVvX2ludGVydmFsfSDlvLnop4bpopHnsbvlnovkuLrvvJoke2NvbmZpZy5hdXRvX3ZpZGVvX3Nob3dfdHlwZX1gKVxyXG5cclxuICAgICAgICBpZiAoY29uZmlnLmF1dG9fcmVjX2luc2VydF9pbnRlcnZhbCAmJiBjb25maWcuYXV0b19yZWNfaW5zZXJ0X2ludGVydmFsICE9IDApIHtcclxuICAgICAgICAgICAgbGV0IHNwYWNlID0gY29uZmlnLmF1dG9fcmVjX2luc2VydF9pbnRlcnZhbDtcclxuICAgICAgICAgICAgbGV0IHNob3dUeXBlID0gY29uZmlnLmF1dG9fcmVjX2luc2VydF90eXBlO1xyXG4gICAgICAgICAgICBpZiAobGV2ZWwgJSBzcGFjZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvd1R5cGUgPT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlID09IDQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvd1R5cGUgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTdWNjZXNzID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGUgPT0gNDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvd1R5cGUgPT0gXCJmYWlsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTdWNjZXNzID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlID09IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHV0aWxzLnNob3dMb2coYOS4jeiDveiHquWKqOW8ueS6kuaOqOaPkuWxj+mXtOmalOS4uu+8miR7Y29uZmlnLmF1dG9fcmVjX2luc2VydF9pbnRlcnZhbH0g5by56KeG6aKR57G75Z6L5Li677yaJHtjb25maWcuYXV0b19yZWNfaW5zZXJ0X3R5cGV9YClcclxuXHJcbiAgICAgICAgcmV0dXJuIHR5cGUgPT0gMztcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uT566X5bm/5ZGK5o6n5Yi2XHJcbiAgICAgKiBsZXZlbCDlvZPliY3lhbPljaEgICBpc1N1Y2Nlc3PmmK/lkKbog5zliKkgXHJcbiAgICAgKiBxcSAg6Iul5Yik5patMumAmui/h+W8uea4uOaIj+ebkuWtkCAg5Yik5patM+mAmui/h+W8ueaPkuWxj1xyXG4gICAgICog5oqW6Z+zICDoi6XliKTmlq0y6YCa6L+H5YiZ5by56KeG6aKRICAg5Yik5patM+i/h+W8ueaPkuWxj1xyXG4gICAgICog6Laj5aS05p2hIOiLpeWIpOaWrTLpgJrov4flvLnop4bpopEgICDliKTmlq0z6YCa6L+H5by55LqS5Yqo55u05by5XHJcbiAgICAgKiDlhbbku5blubPlj7Doi6XliKTmlq0y6YCa6L+H5YiZ5pyN5Yqh5Zmo6YWN572u5pyJ6Zeu6aKY77yM6IGU57O76L+Q6JCl5L+u5pS5XHJcbiAgICAgKuacjeWKoeWZqOaOp+WItiDnu5PnrpfnlYzpnaLoh6rliqjlvLnlh7rop4bpopFcclxuICAgICAqL1xyXG4gICAgcHVibGljIEF1dG9TaG93U3RhdGVtZW50KGxldmVsLCBpc1N1Y2Nlc3MsIGlzU2hvd0FkKTogYW55IHtcclxuICAgICAgICB1dGlscy5jdXJyZW50TGV2ZWwgPSBsZXZlbDtcclxuICAgICAgICB1dGlscy5pc1N1Y2Nlc3MgPSBpc1N1Y2Nlc3M7XHJcbiAgICAgICAgbGV0IHJlczogYW55ID0geyBcInR5cGVcIjogLTEsIFwibm9kZVwiOiBudWxsIH1cclxuICAgICAgICBpZiAoIWlzU2hvd0FkKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJpc1Nob3dBZOS4umZhbHNl77yM5Y+q5LiK5oql5LiN5pi+56S65bm/5ZGKXCIpXHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaXNTaG93VmlkZW86IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5jaGVja1Jlc3VsdFNob3coMikpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJyZXN1bHRfYXV0b19zaG93X3ZpZGVvXCIpID09IFwiZmFsc2VcIikgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoUGxhdFV0aWxzLklzRG91eWluKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi5pyN5Yqh5Zmo54mI5pys77yaXCIsIHV0aWxzLmNvbmZpZy5kb3V5aW5jb25maWcudmVyc2lvbiwgXCLlvZPliY3niYjmnKzvvJpcIiwgdGhpcy5nZXRDb25maWdCeUtleShcInZlcnNpb25cIikpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmNvbmZpZy5kb3V5aW5jb25maWcudmVyc2lvbiAhPSB0aGlzLmdldENvbmZpZ0J5S2V5KFwidmVyc2lvblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLniYjmnKzkuI3kuIDoh7TvvIzoh6rliqjmkq3mlL7op4bpopHvvIFcIilcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hZE1hbmFnZXIuU2hvd1ZpZGVvKCgpID0+IHsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTaG93VmlkZW8gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc1FRKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuY29uZmlnLnFxY29uZmlnLnZlcnNpb24gIT0gdGhpcy5nZXRDb25maWdCeUtleShcInZlcnNpb25cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi54mI5pys5LiN5LiA6Ie077yM6Ieq5Yqo5pKt5pS+6KeG6aKR77yBXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYWRNYW5hZ2VyLlNob3dWaWRlbygoKSA9PiB7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2hvd1ZpZGVvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNXaUZpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuY29uZmlnLndpZmlDb25maWcudmVyc2lvbiAhPSB0aGlzLmdldENvbmZpZ0J5S2V5KFwidmVyc2lvblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLniYjmnKzkuI3kuIDoh7TvvIzoh6rliqjmkq3mlL7op4bpopHvvIFcIilcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hZE1hbmFnZXIuU2hvd1ZpZGVvKCgpID0+IHsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTaG93VmlkZW8gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc0JhaWR1KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuY29uZmlnLmJhaWR1Y29uZmlnLnZlcnNpb24gIT0gdGhpcy5nZXRDb25maWdCeUtleShcInZlcnNpb25cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi54mI5pys5LiN5LiA6Ie077yM6Ieq5Yqo5pKt5pS+6KeG6aKR77yBXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYWRNYW5hZ2VyLlNob3dWaWRlbygoKSA9PiB7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2hvd1ZpZGVvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNLd2FpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuY29uZmlnLmt3YWlDb25maWcudmVyc2lvbiAhPSB0aGlzLmdldENvbmZpZ0J5S2V5KFwidmVyc2lvblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLniYjmnKzkuI3kuIDoh7TvvIzoh6rliqjmkq3mlL7op4bpopHvvIFcIilcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hZE1hbmFnZXIuU2hvd1ZpZGVvKCgpID0+IHsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTaG93VmlkZW8gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc0hhZ28pIHtcclxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5jb25maWcuaGFnb0NvbmZpZy52ZXJzaW9uICE9IHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJ2ZXJzaW9uXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIueJiOacrOS4jeS4gOiHtO+8jOiHquWKqOaSreaUvuinhumike+8gVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFkTWFuYWdlci5TaG93VmlkZW8oKCkgPT4geyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpc1Nob3dWaWRlbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzTmF0aXZlQW5kcm9pZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmNvbmZpZy5uYXRpdmVBbmRyb2lkQ29uZmlnLnZlcnNpb24gIT0gdGhpcy5nZXRDb25maWdCeUtleShcInZlcnNpb25cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi54mI5pys5LiN5LiA6Ie077yM6Ieq5Yqo5pKt5pS+6KeG6aKR77yBXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWxzLlNlcnZlckNvbmZpZyAmJiB0aGlzLmdldENvbmZpZ0J5S2V5KFwiYXV0b192aWRlb190eXBlXCIpID09IFwicmV3YXJkX3ZpZGVvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuYWRNYW5hZ2VyLlNob3dWaWRlbygoKSA9PiB7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmFkTWFuYWdlci5zaG93RnVsbFNjcmVlblZpZGVvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzU2hvd1ZpZGVvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIuS4juacjeWKoeWZqOeJiOacrOS4gOiHtO+8jOS4jeiHquWKqOaSreaUvuinhumike+8gVwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc05hdGl2ZUlPUykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmNvbmZpZy5uYXRpdmVJb1NDb25maWcudmVyc2lvbiAhPSB0aGlzLmdldENvbmZpZ0J5S2V5KFwidmVyc2lvblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLniYjmnKzkuI3kuIDoh7TvvIzoh6rliqjmkq3mlL7op4bpopHvvIFcIilcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXRpbHMuU2VydmVyQ29uZmlnICYmIHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJhdXRvX3ZpZGVvX3R5cGVcIikgPT0gXCJyZXdhcmRfdmlkZW9cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5hZE1hbmFnZXIuU2hvd1ZpZGVvKCgpID0+IHsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuYWRNYW5hZ2VyLnNob3dGdWxsU2NyZWVuVmlkZW8oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTaG93VmlkZW8gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc1ZJVk8pIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLmnI3liqHlmajphY3nva7lvZPliY3mmL7npLrlvLrlvLnop4bpopHvvIzkvYblvZPliY3lubPlj7DkuI3mlK/mjIHjgILpnIDkv67mlLnmnI3liqHlmajphY3nva5cIilcclxuICAgICAgICAgICAgICAgIHV0aWxzLmFkTWFuYWdlci5zaG93U3RhdGVtZW50QWRzKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpc1Nob3dWaWRlbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5hZE1hbmFnZXIuU2hvd1ZpZGVvKCgpID0+IHsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzU2hvd1ZpZGVvICYmIChQbGF0VXRpbHMuSXNEb3V5aW4gfHwgUGxhdFV0aWxzLklzUVEgfHwgUGxhdFV0aWxzLklzTmF0aXZlQW5kcm9pZCB8fCBQbGF0VXRpbHMuSXNOYXRpdmVJT1MpKSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi5b2T5YmN5by65by55LqG6KeG6aKR77yM5LiN5pi+56S65o+S5bGP77yBXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gdXRpbHMuYWRNYW5hZ2VyLnNob3dTdGF0ZW1lbnRBZHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLmNhblNob3dSZWRCYWcoKSAmJiB0aGlzLnl6UmVkQmFnSW5mby5wcm9ncmVzcyA+PSB0aGlzLnl6UmVkQmFnSW5mby50b3RhbFByb2dyZXNzKSB7XHJcbiAgICAgICAgLy8gICAgIHV0aWxzLnNob3dMb2coXCLlvZPliY3nuqLljIXov5vluqblt7Lmu6HvvIzmmL7npLrojrflvpfnuqLljIXnqpflj6PvvIFcIik7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuc2hvd09wZW5SZWRCYWdQYW5lbCh7IHNob3dUeXBlOiAyIH0pO1xyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrUmVzdWx0U2hvdygzKSkge1xyXG4gICAgICAgICAgICByZXMgPSB1dGlscy5hZE1hbmFnZXIuc2hvd1N0YXRlbWVudEFkcygpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmNoZWNrUmVzdWx0U2hvdygzKVwiLCByZXMubm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYgKFBsYXRVdGlscy5Jc0RvdXlpbiB8fCBQbGF0VXRpbHMuSXNOYXRpdmVJT1MgfHwgUGxhdFV0aWxzLklzQmFpZHUgfHwgUGxhdFV0aWxzLklzTmF0aXZlQW5kcm9pZCkge1xyXG4gICAgICAgICAgICAvL+aKlumfs+W5s+WPsOWIpOaWreaYr+WQpumcgOimgTblhYPntKDkupLmjqhcclxuICAgICAgICAgICAgcmVzLnR5cGUgPSAxO1xyXG4gICAgICAgICAgICByZXMubm9kZSA9IHV0aWxzLnNob3dDcm9zc1dpZGdldDYoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X5LiA5qyh546w6YeR57qi5YyFXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRSZWRCYWdDb3VudChjYWxsRnVuPzogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLnl6UmVkQmFnSW5mby5mcmVlUmVkQmFnQ291bnQrKztcclxuICAgICAgICBpZiAoY2FsbEZ1bikge1xyXG4gICAgICAgICAgICB0aGlzLnJld2FyZENsb3NlRnVuYyA9IGNhbGxGdW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd09wZW5SZWRCYWdQYW5lbCh7IHNob3dUeXBlOiAzIH0pO1xyXG4gICAgICAgIHV0aWxzLnNob3dMb2coXCLojrflvpfkuIDkuKrnjrDph5HnuqLljIVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4vmuLjmiI/oh6rliqjlvZXlsY9cclxuICAgICAqIOaaguaXtuWPquacieWktOadoeW5s+WPsOaciVxyXG4gICAgICog6buY6K6k5Li6MCDooajnpLrkuI3lvIDlkK/vvIzkvovlpoIzIOihqOekuuavj+S4ieWFs+S8muiHquWKqOW9leWxj++8jOS+i+WmgjMsNiw5IOihqOekuuWPquacieesrDMsNiw55oyH5a6a55qE5YWz5Y2h5Lya6Ieq5Yqo5b2V5bGPXHJcbiAgICAgKi9cclxuICAgIEF1dG9TdGFydFJlY29yZChsZXZlbCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdldENvbmZpZ0J5S2V5KFwiYXV0b19yZWNvcmRfaW50ZXJ2YWxcIikgPiAwKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnJlY29yZFN0YXJ0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuacjeWKoeWZqOmFjee9ruS4jeWtmOWcqGF1dG9fcmVjb3JkX2ludGVydmFcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNoYXJlUmVjb3JkUGFuZWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrlvZXlsY/liIbkuqvnqpflj6NcclxuICAgICAqIEBwYXJhbSBwYXJhbXMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93U2hhcmVSZWNvcmRQYW5lbChwYXJhbXM6IGFueSA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi57uE5Lu26YWN572u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWcub3RoZXJjb25maWcuc2hhcmVSZWNvcmRQYW5lbCkge1xyXG4gICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLnNoYXJlUmVjb3JkUGFuZWwpO1xyXG4gICAgICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hhcmVSZWNvcmRQYW5lbCAmJiBjYy5pc1ZhbGlkKHRoaXMuc2hhcmVSZWNvcmRQYW5lbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXJlUmVjb3JkUGFuZWwuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZVJlY29yZFBhbmVsID0gbm9kZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVSZWNvcmRQYW5lbC56SW5kZXggPSA5OTk5O1xyXG4gICAgICAgICAgICAgICAgbGV0IHdpZGdldDogY2MuV2lkZ2V0ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5ncm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdyb3VwID0gcGFyYW1zLmdyb3VwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnNjYWxlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zY2FsZSA9IHBhcmFtcy5zY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMudG9wICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Ub3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnbkJvdHRvbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQudG9wID0gcGFyYW1zLnRvcDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcmFtcy5ib3R0b20gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnblRvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnbkJvdHRvbSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5ib3R0b20gPSBwYXJhbXMuYm90dG9tO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmxlZnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnbkxlZnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnblJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5sZWZ0ID0gcGFyYW1zLmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMucmlnaHQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnbkxlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25SaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5yaWdodCA9IHBhcmFtcy5yaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHBhcmFtcy5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZCh0aGlzLnNoYXJlUmVjb3JkUGFuZWwsIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZCh0aGlzLnNoYXJlUmVjb3JkUGFuZWwsIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd2lkZ2V0LnVwZGF0ZUFsaWdubWVudCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi5pyq5om+5Yiw6aKE5Yi25L2TIFNoYXJlUmVjb3JkUGFuZWwsIOivt+afpeeci0NvbW1vblV0aWxz57uE5Lu25LiK5piv5ZCm6LWL5YC877yBXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWFtuS7lui+heWKqemFjee9rlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG90aGVyQ29uZmlnKCk6IGFueSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9vdGhlcl9jb25maWcpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3RoZXJfY29uZmlnID0gdGhpcy5jb25maWcub3RoZXJjb25maWcubG9jYWxDb25maWcuanNvbi5vdGhlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX290aGVyX2NvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluivleeUqOearuiCpOWFs+WNoemXtOmalFxyXG4gICAgICog6buY6K6k5Li65q+PNeWFs+aYvuekuuS4gOasoVxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1Nob3dUcnlTa2luKGN1ckxldmVsOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgY291bnQ6IG51bWJlciA9IDU7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5TZXJ2ZXJDb25maWcgJiYgdGhpcy5nZXRDb25maWdCeUtleShcInRyeV9za2luX2xldmVsX2NvdW50XCIpKSB7XHJcbiAgICAgICAgICAgIGNvdW50ID0gdGhpcy5nZXRDb25maWdCeUtleShcInRyeV9za2luX2xldmVsX2NvdW50XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VyTGV2ZWwgJSBjb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5TZXJ2ZXJDb25maWcgJiYgdGhpcy5nZXRDb25maWdCeUtleShcInRyeV9za2luX3Nob3dfYWRfaW50ZXJ2YWxcIikgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VyTGV2ZWwgJSB0aGlzLmdldENvbmZpZ0J5S2V5KFwidHJ5X3NraW5fc2hvd19hZF9pbnRlcnZhbFwiKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhg5pyN5Yqh5Zmo6YWN572u6Ze06ZqUJHt0aGlzLmdldENvbmZpZ0J5S2V5KFwidHJ5X3NraW5fc2hvd19hZF9pbnRlcnZhbFwiKX3lhbPor5XnlKjnmq7ogqTlsZXnpLrmj5LlsY/vvIFgKTtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hZE1hbmFnZXIuU2hvd0ludGVyc3RpdGlhbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW7tui/n+aYvuekuui3s+i/h+aIluiAheWFs+mXreaMiemSrlxyXG4gICAgICogQHBhcmFtIGJ0biDlu7bov5/mmL7npLrmjInpkq7nmoToioLngrlcclxuICAgICAqIEBwYXJhbSBpc0Nsb3NlQnRuIOaYr+WQpui/lOWbnuaIluiAheWFs+mXreaMiemSrlxyXG4gICAgICogQHBhcmFtIGxvY2F0aW9uIOaMiemSruaJgOWcqOeahOmhtemdouS9jee9rlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd1NraXBCdG4oYnRuOiBjYy5Ob2RlLCBpc0Nsb3NlQnRuOiBib29sZWFuID0gZmFsc2UsIGxvY2F0aW9uOiBCYW5uZXJMb2NhdGlvbiA9IEJhbm5lckxvY2F0aW9uLk5vbmUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoYnRuKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGVsYXlTaG93QnRuOiBudW1iZXIgPSBQbGF0VXRpbHMuSXNOYXRpdmVBbmRyb2lkID8gMyA6IDA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldENvbmZpZ0J5S2V5KFwic2tpcF9idG5fc2hvd19kZWxheVwiKSkge1xyXG4gICAgICAgICAgICAgICAgZGVsYXlTaG93QnRuID0gdGhpcy5nZXRDb25maWdCeUtleShcInNraXBfYnRuX3Nob3dfZGVsYXlcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzQ2xvc2VCdG4pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldENvbmZpZ0J5S2V5KFwic3BlY2lhbF9za2lwX2J0bl9zaG93X2RlbGF5XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsYXlTaG93QnRuID0gdGhpcy5nZXRDb25maWdCeUtleShcInNwZWNpYWxfc2tpcF9idG5fc2hvd19kZWxheVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFBsYXRVdGlscy5Jc1Rlc3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2VydmVyQ29uZmlnLm92ZXJfcGFnZV9za2lwX2J0bl9zaG93X2RlbGF5ID0gMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobG9jYXRpb24gPT0gQmFubmVyTG9jYXRpb24uT3Zlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJvdmVyX3BhZ2Vfc2tpcF9idG5fc2hvd19kZWxheVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5U2hvd0J0biA9IHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJvdmVyX3BhZ2Vfc2tpcF9idG5fc2hvd19kZWxheVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRlbGF5U2hvd0J0biA+IDApIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYnRuICYmIGNjLmlzVmFsaWQoYnRuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLnJ1bkFjdGlvbihjYy5mYWRlSW4oMC4zKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgZGVsYXlTaG93QnRuKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghYnRuLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaKlumfs+aMiemSruW7tui/n+aYvuekulxyXG4gICAgICog6buY6K6k5Li6MOenklxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVsYXlTaG93Tm9kZShidG46IGNjLk5vZGUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoYnRuKSB7XHJcbiAgICAgICAgICAgIGJ0bi5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBkZWxheVNob3dCdG46IG51bWJlciA9IDA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldENvbmZpZ0J5S2V5KFwibmV4dF9idG5fc2hvd19kZWxheVwiKSkge1xyXG4gICAgICAgICAgICAgICAgZGVsYXlTaG93QnRuID0gdGhpcy5nZXRDb25maWdCeUtleShcIm5leHRfYnRuX3Nob3dfZGVsYXlcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ0biAmJiBjYy5pc1ZhbGlkKGJ0bikpIHtcclxuICAgICAgICAgICAgICAgICAgICBidG4ucnVuQWN0aW9uKGNjLmZhZGVJbigwLjMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgZGVsYXlTaG93QnRuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlrp3nrrHnlYzpnaLmmK/lkKboh6rliqjli77pgIlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzQm94QXV0b1NlbGVjdFRvZ2dsZSgpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgY2FwX2xldmVsOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBsZXZlbCA9IHV0aWxzLmN1cnJlbnRMZXZlbDtcclxuICAgICAgICBpZiAodGhpcy5nZXRDb25maWdCeUtleShcImJveF9hdXRvX3NlbGVjdF9sZXZlbFwiKSkge1xyXG4gICAgICAgICAgICBjYXBfbGV2ZWwgPSBOdW1iZXIodGhpcy5nZXRDb25maWdCeUtleShcImJveF9hdXRvX3NlbGVjdF9sZXZlbFwiKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIuacjeWKoeWZqOmFjee9ruS4jeWtmOWcqO+8jOS4jeiHquWKqOWLvumAiVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FwX2xldmVsICE9IDAgJiYgKGxldmVsICUgY2FwX2xldmVsKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uT566X55WM6Z2i5piv5ZCm6Ieq5Yqo5Yu+6YCJXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1Jlc3VsdEF1dG9TZWxlY3RUb2dnbGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGNhcF9sZXZlbDogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgbGV2ZWwgPSB1dGlscy5jdXJyZW50TGV2ZWw7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJyZXN1bHRfYXV0b19zZWxlY3RfbGV2ZWxcIikpIHtcclxuICAgICAgICAgICAgY2FwX2xldmVsID0gTnVtYmVyKHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJyZXN1bHRfYXV0b19zZWxlY3RfbGV2ZWxcIikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLmnI3liqHlmajphY3nva7kuI3lrZjlnKjvvIzkuI3oh6rliqjli77pgIlcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhcF9sZXZlbCAhPSAwICYmIChsZXZlbCAlIGNhcF9sZXZlbCkgPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOivleeUqOearuiCpOeVjOmdouaYr+WQpuiHquWKqOWLvumAiVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNUcnlTa2luQXV0b1NlbGVjdFRvZ2dsZSgpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgY2FwX2xldmVsOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBsZXZlbCA9IHV0aWxzLmN1cnJlbnRMZXZlbDtcclxuICAgICAgICBpZiAodGhpcy5nZXRDb25maWdCeUtleShcInNraW5fYXV0b19zZWxlY3RfbGV2ZWxcIikpIHtcclxuICAgICAgICAgICAgY2FwX2xldmVsID0gTnVtYmVyKHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJza2luX2F1dG9fc2VsZWN0X2xldmVsXCIpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi5pyN5Yqh5Zmo6YWN572u5LiN5a2Y5Zyo77yM5LiN6Ieq5Yqo5Yu+6YCJXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYXBfbGV2ZWwgIT0gMCAmJiAobGV2ZWwgJSBjYXBfbGV2ZWwpID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYW5nZVBpYyhub2RlLCBwaWNQYXRoLCBjYWxsYmFjaykgey8vLS1pbWFnZXZpZXfmjaLlm75cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgICAgICBpZiAoIW5vZGUgfHwgIWNjLmlzVmFsaWQobm9kZSkgfHwgIW5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpIHtcclxuICAgICAgICAgICAgY2Mud2FybignVWlVdGlsLmNoYW5nZVBpYyBub2RlIG51bGwnKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIChTREtQbGF0Zm9ybS5nZXRMYW4oKSA9PSAndHcnKSB7XHJcbiAgICAgICAgLy8gICAgIGlmIChwaWNQYXRoLmluZGV4T2YoJ3BpYy9mb250L2NuJykgPiAtMSkge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGFyciA9IHBpY1BhdGguc3BsaXQoJy9jbi8nKVxyXG4gICAgICAgIC8vICAgICAgICAgcGljUGF0aCA9ICdwaWMvZm9udC90dy8nICsgYXJyWzFdXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGlmIChub2RlLnBpY3VybCA9PSB0aGlzLm5vZGVOYW1lKHBpY1BhdGgpKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIFNwcml0ZUZyYW1lID0gY2MucmVzb3VyY2VzLmdldChwaWNQYXRoLCBjYy5TcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgaWYgKFNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgIG5vZGUucGljdXJsID0gc2VsZi5ub2RlTmFtZShwaWNQYXRoKVxyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gU3ByaXRlRnJhbWVcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhTcHJpdGVGcmFtZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBudWxsXHJcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBpY1BhdGgsIGNjLlNwcml0ZUZyYW1lLCBudWxsLCBmdW5jdGlvbiAoZXJyLCBTcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFub2RlIHx8ICFjYy5pc1ZhbGlkKG5vZGUpIHx8ICFub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5waWN1cmwgPSBzZWxmLm5vZGVOYW1lKHBpY1BhdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IFNwcml0ZUZyYW1lXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucGljdXJsID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhTcHJpdGVGcmFtZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5vZGVOYW1lKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gbmFtZS5yZXBsYWNlKC9cXC8vZywgJy0nKS5yZXBsYWNlKC87L2csICctJylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4uOaIj+W9k+WJjeeJiOacrFxyXG4gICAgICovXHJcbiAgICBnZXQgZ2FtZVZlcnNpb24oKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJfdG9vbCAmJiB0aGlzLmN1cl90b29sLmdhbWVWZXJzaW9uKSByZXR1cm4gdGhpcy5jdXJfdG9vbC5nYW1lVmVyc2lvbigpO1xyXG4gICAgICAgIHJldHVybiBcIi0xXCJcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog55WM6Z2i5o6n5Yi2XHJcbiAgICAgKiBAcGFyYW0gdmlldyAgXHJcbiAgICAgKiDnlYzpnaLnsbvlnovvvJrnmq7ogqTor5XnlKjnlYzpnaIgIOWuneeuseeVjOmdolxyXG4gICAgICogXHJcbiAgICAgKiDov5Tlm57lgLznsbvlnotcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBpc1NlbGVjdO+8muaMiemSruaYr+WQpuiHquWKqOWLvumAieS4ilxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIG1zZzrmloflrZfmj5DnpLpcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBidG5UeXBlOuWIneWni+aMiemSruexu+WeiyAgIHRydWXkuLrnnIvlub/lkYrnmoTmlofmnKwgIGZhbHNl5Li65LiN55yL5bm/5ZGK55qE5paH5pysXHJcbiAgICAqL1xyXG4gICAgcHVibGljIGNvbnRyb1ZpZXcodmlldzogVmlld0xvY2F0aW9uKTogYW55IHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7IFwiaXNTZWxlY3RcIjogdHJ1ZSwgXCJtc2dcIjogXCLop4LnnIvop4bpopHojrflvpflpZblirFcIiwgXCJidG5UeXBlXCI6IHRydWUsIFwiaXNfb3BlblwiOiBmYWxzZSB9O1xyXG4gICAgICAgIGxldCBhZFRpcHNUeXBlOiBib29sZWFuO1xyXG4gICAgICAgIGxldCBzZWxlY3RUeXBlOiBudW1iZXI7XHJcbiAgICAgICAgaWYgKCF1dGlscy5TZXJ2ZXJDb25maWcpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIuacjeWKoeWZqOmFjee9ruS4jeWtmOWcqFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6aqM6K+B5pyN5Yqh5Zmo5piv5ZCm5byA5ZCv5Yu+6YCJ562W55WlXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJvcGVuX2NoZWNrX2J0blwiKSA9PSBcImZhbHNlXCIpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIuacjeWKoeWZqOmFjee9ruS4jeW8gOWQr+WLvumAie+8gVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXN1bHQuaXNfb3BlbiA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICBzd2l0Y2ggKHZpZXcpIHtcclxuICAgICAgICAgICAgY2FzZSBWaWV3TG9jYXRpb24uc2lnbjpcclxuICAgICAgICAgICAgICAgIHNlbGVjdFR5cGUgPSB0aGlzLmdldENvbmZpZ0J5S2V5KFwic2lnbl9hdXRvX3NlbGVjdF9sZXZlbFwiKSA/IHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJzaWduX2F1dG9fc2VsZWN0X2xldmVsXCIpIDogMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldENvbmZpZ0J5S2V5KFwiYWRfdGlwX3NpZ25fcmFuZG9tXCIpID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRUaXBzVHlwZSA9IE1hdGgucmFuZG9tKCkgPj0gMC41ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZFRpcHNUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWRUaXBzVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5tc2cgPSBcIuafpeeci+inhumikeiOt+W+l+WPjOWAjeWlluWKsVwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQubXNnID0gXCLkuI3pnIDopoHop4bpopHlpZblirFcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZpZXdMb2NhdGlvbi50cnlTa2luOlxyXG4gICAgICAgICAgICAgICAgc2VsZWN0VHlwZSA9IHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJ0cnlza2luX2F1dG9fc2VsZWN0X2xldmVsXCIpID8gdGhpcy5nZXRDb25maWdCeUtleShcInRyeXNraW5fYXV0b19zZWxlY3RfbGV2ZWxcIikgOiAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJhZF90aXBfdHJ5c2tpbl9yYW5kb21cIikgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZFRpcHNUeXBlID0gTWF0aC5yYW5kb20oKSA+PSAwLjUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkVGlwc1R5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhZFRpcHNUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm1zZyA9IFwi5p+l55yL6KeG6aKR6K+V55So55qu6IKkXCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5tc2cgPSBcIuS4jemcgOimgeinhumikeivleeUqOearuiCpFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFZpZXdMb2NhdGlvbi5ib3g6XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RUeXBlID0gdGhpcy5nZXRDb25maWdCeUtleShcImJveF9hdXRvX3NlbGVjdF9sZXZlbFwiKSA/IHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJib3hfYXV0b19zZWxlY3RfbGV2ZWxcIikgOiAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJhZF90aXBfYm94X3JhbmRvbVwiKSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkVGlwc1R5cGUgPSBNYXRoLnJhbmRvbSgpID49IDAuNSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRUaXBzVHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYWRUaXBzVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5tc2cgPSBcIuafpeeci+inhumikeiOt+W+l+S6lOWAjeWlluWKsVwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQubXNnID0gXCLkuI3pnIDopoHop4bpopHlpZblirFcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZpZXdMb2NhdGlvbi5zdWNjZXNzQm94OlxyXG4gICAgICAgICAgICAgICAgc2VsZWN0VHlwZSA9IHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJzdWNjZXNzX2JveF9hdXRvX3NlbGVjdF9sZXZlbFwiKSA/IHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJzdWNjZXNzX2JveF9hdXRvX3NlbGVjdF9sZXZlbFwiKSA6IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBWaWV3TG9jYXRpb24uZmFpbEJveDpcclxuICAgICAgICAgICAgICAgIHNlbGVjdFR5cGUgPSB0aGlzLmdldENvbmZpZ0J5S2V5KFwiZmFpbF9ib3hfYXV0b19zZWxlY3RfbGV2ZWxcIikgPyB0aGlzLmdldENvbmZpZ0J5S2V5KFwiZmFpbF9ib3hfYXV0b19zZWxlY3RfbGV2ZWxcIikgOiAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVmlld0xvY2F0aW9uLndpblBhbmVsOlxyXG4gICAgICAgICAgICAgICAgc2VsZWN0VHlwZSA9IHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJ3aW5fcGFuZWxfYXV0b19zZWxlY3RfbGV2ZWxcIikgPyB0aGlzLmdldENvbmZpZ0J5S2V5KFwid2luX3BhbmVsX2F1dG9fc2VsZWN0X2xldmVsXCIpIDogMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZpZXdMb2NhdGlvbi50dXJudGFibGU6XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RUeXBlID0gdGhpcy5nZXRDb25maWdCeUtleShcInR1cm50YWJsZV9hdXRvX3NlbGVjdF9sZXZlbFwiKSA/IHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJ0dXJudGFibGVfYXV0b19zZWxlY3RfbGV2ZWxcIikgOiAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxlY3RUeXBlID09IDApIHtcclxuICAgICAgICAgICAgcmVzdWx0LmlzU2VsZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RUeXBlID09IDEpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmlzU2VsZWN0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdFR5cGUgPT0gMikge1xyXG4gICAgICAgICAgICByZXN1bHQuaXNTZWxlY3QgPSBNYXRoLnJhbmRvbSgpID49IDAuNSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdC5idG5UeXBlID0gYWRUaXBzVHlwZSA9PSByZXN1bHQuaXNTZWxlY3Q7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuiDveWGjeS4i+S4gOWFs+W8gOWni+eahOaXtuWAmeW8uuW8ueinhumikVxyXG4gICAgKi9cclxuICAgIGNhblNob3dOZXh0VmlkZW8obGV2ZWwpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodXRpbHMuU2VydmVyQ29uZmlnICYmIHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJuZXh0X2F1dG9fdmlkZW9faW50ZXJ2YWxcIikpIHtcclxuICAgICAgICAgICAgbGV0IGNhcCA9IE51bWJlcih0aGlzLmdldENvbmZpZ0J5S2V5KFwibmV4dF9hdXRvX3ZpZGVvX2ludGVydmFsXCIpKTtcclxuICAgICAgICAgICAgaWYgKGNhcCAmJiBjYXAgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxldmVsICUgY2FwID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoUGxhdFV0aWxzLklzRG91eWluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldENvbmZpZ0J5S2V5KFwidmVyc2lvblwiKSAhPSB1dGlscy5jb25maWcuZG91eWluY29uZmlnLnZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNCYWlkdSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRDb25maWdCeUtleShcInZlcnNpb25cIikgIT0gdXRpbHMuY29uZmlnLmJhaWR1Y29uZmlnLnZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSVNVQykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRDb25maWdCeUtleShcInZlcnNpb25cIikgIT0gdXRpbHMuY29uZmlnLnVjQ29uZmlnLnZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoUGxhdFV0aWxzLklzNDM5OSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXAgPSAzOy8vNDM5OeS4jeiDveivu+WPluacjeWKoeWZqOmFjee9ruWGmeatu+mXtOmalFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FwICE9IDAgJiYgbGV2ZWwgJSBjYXAgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuaYvuekuue6ouWMhVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2FuU2hvd1JlZEJhZygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi57uE5Lu26YWN572u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuVG9vbF9Ccm9zd2VyKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuU2VydmVyQ29uZmlnICYmIHRoaXMueXpSZWRCYWdJbmZvICYmIHRoaXMuU2VydmVyQ29uZmlnLnNob3dfcmVkX2JhZyAmJiB0aGlzLlNlcnZlckNvbmZpZy5zaG93X3JlZF9iYWcgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHV0aWxzLnNob3dMb2coXCLmnI3liqHlmajphY3nva7kuI3mmL7npLrnuqLljIXnu4Tku7bvvIFcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIF93aXRoZHJhd2FsV2lkZ2V0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj+aPkOeOsOahhuaMguS7tlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGlkZVdpdGhkcmF3YWxXaWRnZXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3dpdGhkcmF3YWxXaWRnZXQgJiYgY2MuaXNWYWxpZCh0aGlzLl93aXRoZHJhd2FsV2lkZ2V0KSkge1xyXG4gICAgICAgICAgICB0aGlzLl93aXRoZHJhd2FsV2lkZ2V0LmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrmj5DnjrDmoYbmjILku7ZcclxuICAgICAqIEBwYXJhbSBwYXJhbXMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93V2l0aGRyYXdhbFdpZGdldChwYXJhbXM6IGFueSA9IG51bGwpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi57uE5Lu26YWN572u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93UmVkQmFnKCkpIHJldHVybiBudWxsO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLndpdGhkcmF3YWxXaWRnZXQpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNvbmZpZy5vdGhlcmNvbmZpZy53aXRoZHJhd2FsV2lkZ2V0KTtcclxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl93aXRoZHJhd2FsV2lkZ2V0ICYmIGNjLmlzVmFsaWQodGhpcy5fd2l0aGRyYXdhbFdpZGdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93aXRoZHJhd2FsV2lkZ2V0LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX3dpdGhkcmF3YWxXaWRnZXQgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2l0aGRyYXdhbFdpZGdldC56SW5kZXggPSA5OTk5O1xyXG4gICAgICAgICAgICAgICAgbGV0IHdpZGdldDogY2MuV2lkZ2V0ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5ncm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdyb3VwID0gcGFyYW1zLmdyb3VwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnNjYWxlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zY2FsZSA9IHBhcmFtcy5zY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy50b3AgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnblRvcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduQm90dG9tID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC50b3AgPSBwYXJhbXMudG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1zLmJvdHRvbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduVG9wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduQm90dG9tID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmJvdHRvbSA9IHBhcmFtcy5ib3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMubGVmdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmxlZnQgPSBwYXJhbXMubGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcmFtcy5yaWdodCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnblJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnJpZ2h0ID0gcGFyYW1zLnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gcGFyYW1zLnBhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3aWRnZXQudXBkYXRlQWxpZ25tZW50KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLmnKrmib7liLDpooTliLbkvZMgV2l0aGRyYXdhbFdpZGdldCwg6K+35p+l55yLQ29tbW9uVXRpbHPnu4Tku7bkuIrmmK/lkKbotYvlgLzvvIFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgX3JlZEJhZ1Byb2dyZXNzV2lkZ2V0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP57qi5YyF6L+b5bqm5oyC5Lu2XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoaWRlUmVkQmFnUHJvZ3Jlc3NXaWRnZXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3JlZEJhZ1Byb2dyZXNzV2lkZ2V0ICYmIGNjLmlzVmFsaWQodGhpcy5fcmVkQmFnUHJvZ3Jlc3NXaWRnZXQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZEJhZ1Byb2dyZXNzV2lkZ2V0LmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICog5pi+56S657qi5YyF6L+b5bqm5oyC5Lu2XHJcbiAgICAqIEBwYXJhbSBwYXJhbXMgXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHNob3dSZWRCYWdQcm9ncmVzc1dpZGdldChwYXJhbXM6IGFueSA9IG51bGwpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi57uE5Lu26YWN572u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93UmVkQmFnKCkpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWcub3RoZXJjb25maWcucmVkQmFnUHJvZ3Jlc3NXaWRnZXQpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNvbmZpZy5vdGhlcmNvbmZpZy5yZWRCYWdQcm9ncmVzc1dpZGdldCk7XHJcbiAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmVkQmFnUHJvZ3Jlc3NXaWRnZXQgJiYgY2MuaXNWYWxpZCh0aGlzLl9yZWRCYWdQcm9ncmVzc1dpZGdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWRCYWdQcm9ncmVzc1dpZGdldC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWRCYWdQcm9ncmVzc1dpZGdldCA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWRCYWdQcm9ncmVzc1dpZGdldC56SW5kZXggPSA5OTk5O1xyXG4gICAgICAgICAgICAgICAgbGV0IHdpZGdldDogY2MuV2lkZ2V0ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5sb2NhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChSZWRCYWdQcm9ncmVzc1dpZGdldCkuaW5pdChwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ3JvdXAgPSBwYXJhbXMuZ3JvdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuc2NhbGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNjYWxlID0gcGFyYW1zLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnRvcCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduVG9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Cb3R0b20gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnRvcCA9IHBhcmFtcy50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMuYm90dG9tICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Ub3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Cb3R0b20gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuYm90dG9tID0gcGFyYW1zLmJvdHRvbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5sZWZ0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25MZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25SaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQubGVmdCA9IHBhcmFtcy5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1zLnJpZ2h0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25MZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQucmlnaHQgPSBwYXJhbXMucmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBwYXJhbXMucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdpZGdldC51cGRhdGVBbGlnbm1lbnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuacquaJvuWIsOmihOWItuS9kyBSZWRCYWdQcm9ncmVzc1dpZGdldCwg6K+35p+l55yLQ29tbW9uVXRpbHPnu4Tku7bkuIrmmK/lkKbotYvlgLzvvIFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfd2l0aGRyYXdhbFBhbmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAqIOaYvuekuuaPkOeOsOW8ueeql1xyXG4gICAqIEBwYXJhbSBwYXJhbXMgXHJcbiAgICovXHJcbiAgICBwdWJsaWMgc2hvd1dpdGhkcmF3YWxQYW5lbChwYXJhbXM6IGFueSA9IG51bGwpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi57uE5Lu26YWN572u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93UmVkQmFnKCkpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWcub3RoZXJjb25maWcud2l0aGRyYXdhbFBhbmVsKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jb25maWcub3RoZXJjb25maWcud2l0aGRyYXdhbFBhbmVsKTtcclxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl93aXRoZHJhd2FsUGFuZWwgJiYgY2MuaXNWYWxpZCh0aGlzLl93aXRoZHJhd2FsUGFuZWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2l0aGRyYXdhbFBhbmVsLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX3dpdGhkcmF3YWxQYW5lbCA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmFkZENoaWxkKHRoaXMuX3dpdGhkcmF3YWxQYW5lbCwgOTk5OSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5pyq5om+5Yiw6aKE5Yi25L2TIFdpdGhkcmF3YWxQYW5lbCwg6K+35p+l55yLQ29tbW9uVXRpbHPnu4Tku7bkuIrmmK/lkKbotYvlgLzvvIFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9vcGVuUmVkQmFnUGFuZWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICog5pi+56S65byA57qi5YyF5by556qXXHJcbiAgICogQHBhcmFtIHBhcmFtcyBcclxuICAgKi9cclxuICAgIHB1YmxpYyBzaG93T3BlblJlZEJhZ1BhbmVsKHBhcmFtczogYW55ID0gbnVsbCk6IGNjLk5vZGUge1xyXG5cclxuICAgICAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5jbG9zZUNhbGxGdW5jKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmV3YXJkQ2xvc2VGdW5jID0gcGFyYW1zLmNsb3NlQ2FsbEZ1bmM7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NvbmZpZ0luaXQpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIue7hOS7tumFjee9ruacquWIneWni+WMliFcIik7XHJcbiAgICAgICAgICAgIHRoaXMucmV3YXJkQ2xvc2VGdW5jICYmIHRoaXMucmV3YXJkQ2xvc2VGdW5jKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNob3dSZWRCYWcoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJld2FyZENsb3NlRnVuYyAmJiB0aGlzLnJld2FyZENsb3NlRnVuYygpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmxvY2F0aW9uICYmIHBhcmFtcy5sb2NhdGlvbiA9PT0gQmFubmVyTG9jYXRpb24uSG9tZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy55elJlZEJhZ0luZm8ucHJvZ3Jlc3MgPCB0aGlzLnl6UmVkQmFnSW5mby50b3RhbFByb2dyZXNzICYmICF0aGlzLnl6UmVkQmFnSW5mby5pc0ZyZWVSZWRCYWcpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLlvZPliY3nuqLljIXov5vluqbkuI3mu6HotrPmnaHku7bkuJTmsqHmnInlhY3otLnnuqLljIXpooblj5bvvIzpppbpobXkuI3mmL7npLrmi4bnuqLljIXnqpflj6NcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJld2FyZENsb3NlRnVuYyAmJiB0aGlzLnJld2FyZENsb3NlRnVuYygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMueXpSZWRCYWdJbmZvLmlzRnJlZVJlZEJhZykge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnNob3dUeXBlID0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLm9wZW5SZWRCYWdQYW5lbCkge1xyXG4gICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLm9wZW5SZWRCYWdQYW5lbCk7XHJcbiAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fb3BlblJlZEJhZ1BhbmVsICYmIGNjLmlzVmFsaWQodGhpcy5fb3BlblJlZEJhZ1BhbmVsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29wZW5SZWRCYWdQYW5lbC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vcGVuUmVkQmFnUGFuZWwgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuc2hvd1R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vcGVuUmVkQmFnUGFuZWwuZ2V0Q29tcG9uZW50KE9wZW5SZWRCYWdQYW5lbCkuaW5pdERhdGEocGFyYW1zLnNob3dUeXBlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQobm9kZSwgOTk5OSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuacquaJvuWIsOmihOWItuS9kyBPcGVuUmVkQmFnUGFuZWwsIOivt+afpeeci0NvbW1vblV0aWxz57uE5Lu25LiK5piv5ZCm6LWL5YC877yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfcmV3YXJkUmVkQmFnUGFuZWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgX3Jld2FyZFJlZEJhZ1BhbmVsU2hvd0NvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICog5pi+56S66I635b6X57qi5YyF5by556qXXHJcbiAgICogQHBhcmFtIHBhcmFtcyBcclxuICAgKi9cclxuICAgIHB1YmxpYyBzaG93UmV3YXJkUmVkQmFnUGFuZWwocGFyYW1zOiBhbnkgPSBudWxsKTogY2MuTm9kZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NvbmZpZ0luaXQpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIue7hOS7tumFjee9ruacquWIneWni+WMliFcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNob3dSZWRCYWcoKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgdGhpcy5fcmV3YXJkUmVkQmFnUGFuZWxTaG93Q291bnQrKztcclxuICAgICAgICAvLyBpZiAodGhpcy5TZXJ2ZXJDb25maWcgJiYgdGhpcy5TZXJ2ZXJDb25maWcuc2hvd19yZXdhcmRfcmVkX2JhZ19pbnRlcnZhbCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9yZXdhcmRSZWRCYWdQYW5lbFNob3dDb3VudCAlIDMgIT0gMCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi6I635b6X57qi5YyF5by556qX5pyq6L6+5Yiw5pyN5Yqh5Zmo6YWN572u55qE6Ze06ZqU6ZmQ5Yi277yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLnJld2FyZFJlZEJhZ1BhbmVsKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jb25maWcub3RoZXJjb25maWcucmV3YXJkUmVkQmFnUGFuZWwpO1xyXG4gICAgICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jld2FyZFJlZEJhZ1BhbmVsICYmIGNjLmlzVmFsaWQodGhpcy5fcmV3YXJkUmVkQmFnUGFuZWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmV3YXJkUmVkQmFnUGFuZWwuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmV3YXJkUmVkQmFnUGFuZWwgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZCh0aGlzLl9yZXdhcmRSZWRCYWdQYW5lbCwgOTk5OSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5pyq5om+5Yiw6aKE5Yi25L2TIE9wZW5SZWRCYWdQYW5lbCwg6K+35p+l55yLQ29tbW9uVXRpbHPnu4Tku7bkuIrmmK/lkKbotYvlgLzvvIFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOaYr+WQpuerluWxj+S6kuaOqOeql+WPo1xyXG4gICAgKi9cclxuICAgIHB1YmxpYyBpc1ZlcnRpY2FsUmVjb21tZW50UGFuZWwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NvbmZpZ0luaXQpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIue7hOS7tumFjee9ruacquWIneWni+WMliFcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLlRvb2xfQnJvc3dlcikgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKFBsYXRVdGlscy5Jc1dlY2hhdCkge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNTdXBwb3J0bmF2aWdhdGVUb01pbmlHYW1lKCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1dGlscy53ZWNoYXRUb29sXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdXRpbHMud2VjaGF0VG9vbC5TZXJ2ZXJDb25maWdcclxuICAgICAgICAgICAgICAgICAgICAmJiB1dGlscy53ZWNoYXRUb29sLlNlcnZlckNvbmZpZy5pc192ZXJ0aWNhbF9nYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWxzLndlY2hhdFRvb2wuU2VydmVyQ29uZmlnLmlzX3ZlcnRpY2FsX2dhbWUgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcImlzX3ZlcnRpY2FsX2dhbWXlj4LmlbDkuLpmYWxzZe+8jOabtOWkmua4uOaIj+S+p+i+ueagj+e7hOS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLphY3nva7kuK3msqHmnIlpc192ZXJ0aWNhbF9nYW1l5Y+C5pWw77yM5pu05aSa5ri45oiP5L6n6L655qCP57uE5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuW9k+WJjeW5s+WPsOS4jeaUr+aMgea4uOaIj+WGhei3s+i9rO+8jOabtOWkmua4uOaIj+S+p+i+ueagj+e7hOS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzT1BQTykge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNTdXBwb3J0bmF2aWdhdGVUb01pbmlHYW1lKCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5vcHBvVG9vbFxyXG4gICAgICAgICAgICAgICAgICAgICYmIHV0aWxzLm9wcG9Ub29sLlNlcnZlckNvbmZpZ1xyXG4gICAgICAgICAgICAgICAgICAgICYmIHV0aWxzLm9wcG9Ub29sLlNlcnZlckNvbmZpZy5pc192ZXJ0aWNhbF9nYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWxzLm9wcG9Ub29sLlNlcnZlckNvbmZpZy5pc192ZXJ0aWNhbF9nYW1lID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCJpc192ZXJ0aWNhbF9nYW1l5Y+C5pWw5Li6ZmFsc2XvvIzmm7TlpJrmuLjmiI/kvqfovrnmoI/nu4Tku7bkuI3mmL7npLrvvIFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi6YWN572u5Lit5rKh5pyJaXNfdmVydGljYWxfZ2FtZeWPguaVsO+8jOabtOWkmua4uOaIj+S+p+i+ueagj+e7hOS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLlvZPliY3lubPlj7DkuI3mlK/mjIHmuLjmiI/lhoXot7PovazvvIzmm7TlpJrmuLjmiI/kvqfovrnmoI/nu4Tku7bkuI3mmL7npLrvvIFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc0RvdXlpbikge1xyXG4gICAgICAgICAgICBpZiAoUGxhdFV0aWxzLklzQW5kcm9pZFxyXG4gICAgICAgICAgICAgICAgJiYgdXRpbHMuaXNTdXBwb3J0bmF2aWdhdGVUb01pbmlHYW1lKCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5Ub29sX0RvdXlpblxyXG4gICAgICAgICAgICAgICAgICAgICYmIHV0aWxzLlRvb2xfRG91eWluLlNlcnZlckNvbmZpZ1xyXG4gICAgICAgICAgICAgICAgICAgICYmIHV0aWxzLlRvb2xfRG91eWluLlNlcnZlckNvbmZpZy5pc192ZXJ0aWNhbF9nYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWxzLlRvb2xfRG91eWluLlNlcnZlckNvbmZpZy5pc192ZXJ0aWNhbF9nYW1lID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCJpc192ZXJ0aWNhbF9nYW1l5Y+C5pWw5Li6ZmFsc2XvvIzmm7TlpJrmuLjmiI/kvqfovrnmoI/nu4Tku7bkuI3mmL7npLrvvIFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi6YWN572u5Lit5rKh5pyJaXNfdmVydGljYWxfZ2FtZeWPguaVsO+8jOabtOWkmua4uOaIj+S+p+i+ueagj+e7hOS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLlvZPliY3lubPlj7DkuI3mlK/mjIHmuLjmiI/lhoXot7PovazvvIzmm7TlpJrmuLjmiI/kvqfovrnmoI/nu4Tku7bkuI3mmL7npLrvvIFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc0JhaWR1KSB7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc1N1cHBvcnRuYXZpZ2F0ZVRvTWluaUdhbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLlRvb2xfQmFpZHVcclxuICAgICAgICAgICAgICAgICAgICAmJiB1dGlscy5Ub29sX0JhaWR1LlNlcnZlckNvbmZpZ1xyXG4gICAgICAgICAgICAgICAgICAgICYmIHV0aWxzLlRvb2xfQmFpZHUuU2VydmVyQ29uZmlnLmlzX3ZlcnRpY2FsX2dhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXRpbHMuVG9vbF9CYWlkdS5TZXJ2ZXJDb25maWcuaXNfdmVydGljYWxfZ2FtZSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwiaXNfdmVydGljYWxfZ2FtZeWPguaVsOS4umZhbHNl77yM5pu05aSa5ri45oiP5L6n6L655qCP57uE5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIumFjee9ruS4reayoeaciWlzX3ZlcnRpY2FsX2dhbWXlj4LmlbDvvIzmm7TlpJrmuLjmiI/kvqfovrnmoI/nu4Tku7bkuI3mmL7npLrvvIFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5b2T5YmN5bmz5Y+w5LiN5pSv5oyB5ri45oiP5YaF6Lez6L2s77yM5pu05aSa5ri45oiP5L6n6L655qCP57uE5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNRUSkge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNTdXBwb3J0bmF2aWdhdGVUb01pbmlHYW1lKCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5Ub29sX1FRXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdXRpbHMuVG9vbF9RUS5TZXJ2ZXJDb25maWdcclxuICAgICAgICAgICAgICAgICAgICAmJiB1dGlscy5Ub29sX1FRLlNlcnZlckNvbmZpZy5pc192ZXJ0aWNhbF9nYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWxzLlRvb2xfUVEuU2VydmVyQ29uZmlnLmlzX3ZlcnRpY2FsX2dhbWUgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcImlzX3ZlcnRpY2FsX2dhbWXlj4LmlbDkuLpmYWxzZe+8jOabtOWkmua4uOaIj+S+p+i+ueagj+e7hOS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLphY3nva7kuK3msqHmnIlpc192ZXJ0aWNhbF9nYW1l5Y+C5pWw77yM5pu05aSa5ri45oiP5L6n6L655qCP57uE5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuW9k+WJjeW5s+WPsOS4jeaUr+aMgea4uOaIj+WGhei3s+i9rO+8jOabtOWkmua4uOaIj+S+p+i+ueagj+e7hOS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoUGxhdFV0aWxzLklzNDM5OSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKFBsYXRVdGlscy5Jc05hdGl2ZUFuZHJvaWQpIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLlRvb2xfTmF0aXZlXHJcbiAgICAgICAgICAgICAgICAmJiB1dGlscy5Ub29sX05hdGl2ZS5TZXJ2ZXJDb25maWdcclxuICAgICAgICAgICAgICAgICYmIHV0aWxzLlRvb2xfTmF0aXZlLlNlcnZlckNvbmZpZy5pc192ZXJ0aWNhbF9nYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuVG9vbF9OYXRpdmUuU2VydmVyQ29uZmlnLmlzX3ZlcnRpY2FsX2dhbWUgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcImlzX3ZlcnRpY2FsX2dhbWXlj4LmlbDkuLpmYWxzZe+8jOabtOWkmua4uOaIj+S+p+i+ueagj+e7hOS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLphY3nva7kuK3msqHmnIlpc192ZXJ0aWNhbF9nYW1l5Y+C5pWw77yM5pu05aSa5ri45oiP5L6n6L655qCP57uE5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChQbGF0VXRpbHMuSXNOYXRpdmVJT1MpIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLlRvb2xfSU9TXHJcbiAgICAgICAgICAgICAgICAmJiB1dGlscy5Ub29sX0lPUy5TZXJ2ZXJDb25maWdcclxuICAgICAgICAgICAgICAgICYmIHV0aWxzLlRvb2xfSU9TLlNlcnZlckNvbmZpZy5pc192ZXJ0aWNhbF9nYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuVG9vbF9JT1MuU2VydmVyQ29uZmlnLmlzX3ZlcnRpY2FsX2dhbWUgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcImlzX3ZlcnRpY2FsX2dhbWXlj4LmlbDkuLpmYWxzZe+8jOabtOWkmua4uOaIj+S+p+i+ueagj+e7hOS7tuS4jeaYvuekuu+8gVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLphY3nva7kuK3msqHmnIlpc192ZXJ0aWNhbF9nYW1l5Y+C5pWw77yM5pu05aSa5ri45oiP5L6n6L655qCP57uE5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICAgKiDmmL7npLrnuqLljIXov5vluqbmjILku7ZcclxuICAgICAgICAqIEBwYXJhbSBwYXJhbXMgXHJcbiAgICAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93VmVydGljYWxSZWNvbW1lbnRQYW5lbChwYXJhbXM6IGFueSA9IG51bGwpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi57uE5Lu26YWN572u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5pc1ZlcnRpY2FsUmVjb21tZW50UGFuZWwoKSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5vdGhlcmNvbmZpZy52ZXJ0aWNhbFJlY29tbWVudFBhbmVsKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jb25maWcub3RoZXJjb25maWcudmVydGljYWxSZWNvbW1lbnRQYW5lbCk7XHJcbiAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5fcmVkQmFnUHJvZ3Jlc3NXaWRnZXQgJiYgY2MuaXNWYWxpZCh0aGlzLl9yZWRCYWdQcm9ncmVzc1dpZGdldCkpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLl9yZWRCYWdQcm9ncmVzc1dpZGdldC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBub2RlLnpJbmRleCA9IDk5OTk7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2lkZ2V0OiBjYy5XaWRnZXQgPSBub2RlLmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ3JvdXAgPSBwYXJhbXMuZ3JvdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuc2NhbGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNjYWxlID0gcGFyYW1zLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnRvcCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduVG9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Cb3R0b20gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnRvcCA9IHBhcmFtcy50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMuYm90dG9tICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Ub3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Cb3R0b20gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuYm90dG9tID0gcGFyYW1zLmJvdHRvbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5sZWZ0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25MZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25SaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQubGVmdCA9IHBhcmFtcy5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1zLnJpZ2h0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25MZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQucmlnaHQgPSBwYXJhbXMucmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBwYXJhbXMucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5wb3NpdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oQ29tcGF0aWJsZVRvb2wucG9zaXRpb24ocGFyYW1zLnBvc2l0aW9uLngsIHBhcmFtcy5wb3NpdGlvbi55KSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd2lkZ2V0LnVwZGF0ZUFsaWdubWVudCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5pyq5om+5Yiw6aKE5Yi25L2TIHZlcnRpY2FsUmVjb21tZW50UGFuZWwsIOivt+afpeeci0NvbW1vblV0aWxz57uE5Lu25LiK5piv5ZCm6LWL5YC877yBXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5pi+56S655So5oi35Y2P6K6u5oyC5Lu2XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1Nob3dQcml2YWN5V2lkZ2V0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLlRvb2xfQnJvc3dlcikgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJpc19wcml2YWN5XCIpID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLphY3nva7kuK3msqHmnIlpc19wcml2YWN55Y+C5pWw77yM5pu055So5oi35Y2P6K6u5oyC5Lu257uE5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBfcHJpdmFjeVdpZGdldDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuueUqOaIt+WNj+iuruaMguS7tlxyXG4gICAgICogQHBhcmFtIHBhcmFtcyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dQcml2YWN5V2lkZ2V0KHBhcmFtczogYW55ID0gbnVsbCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmICh1dGlscy5pc1Nob3dQcml2YWN5V2lkZ2V0KCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLnByaXZhY3lXaWRnZXQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wcml2YWN5V2lkZ2V0ICYmIGNjLmlzVmFsaWQodGhpcy5fcHJpdmFjeVdpZGdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcml2YWN5V2lkZ2V0LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jb25maWcub3RoZXJjb25maWcucHJpdmFjeVdpZGdldCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcml2YWN5V2lkZ2V0ID0gbm9kZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ByaXZhY3lXaWRnZXQuekluZGV4ID0gOTk5OTtcclxuICAgICAgICAgICAgICAgIGxldCB3aWRnZXQ6IGNjLldpZGdldCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuY2hpbGRyZW5bMF0uY29sb3IgPSBwYXJhbXMuY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ3JvdXAgPSBwYXJhbXMuZ3JvdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuc2NhbGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNjYWxlID0gcGFyYW1zLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnRvcCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduVG9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Cb3R0b20gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnRvcCA9IHBhcmFtcy50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMuYm90dG9tICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Ub3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Cb3R0b20gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuYm90dG9tID0gcGFyYW1zLmJvdHRvbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5sZWZ0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25MZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25SaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQubGVmdCA9IHBhcmFtcy5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1zLnJpZ2h0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25MZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQucmlnaHQgPSBwYXJhbXMucmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBwYXJhbXMucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3aWRnZXQudXBkYXRlQWxpZ25tZW50KCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChQbGF0VXRpbHMuSXNOYXRpdmVBbmRyb2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLlRvb2xfTmF0aXZlICYmIHV0aWxzLlRvb2xfTmF0aXZlLnNob3dQcml2YWN5QWdyZWVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2hvd1ByaXZhY3lQYW5lbCh7IGlzX3dpZGdldF9jbGljazogXCJ0cnVlXCIsIGdyb3VwOiBub2RlLmdyb3VwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi6ZqQ56eB5pS/562W5oyC5Lu26aKE5Yi25L2T5LiN5a2Y5Zyo77yBXCIpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuS4jeWPr+aYvuekuuabtOWkmua4uOaIj+S+p+i+ueagj1wiKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/pmpDnp4HmlL/nrZZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhpZGVQcml2YWN5V2lkZ2V0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9wcml2YWN5V2lkZ2V0ICYmIGNjLmlzVmFsaWQodGhpcy5fcHJpdmFjeVdpZGdldCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fcHJpdmFjeVdpZGdldC5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbmmL7npLrnlKjmiLfpmpDnp4HljY/orq7lvLnnqpdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2hvd1ByaXZhY3lQYW5lbCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoUGxhdFV0aWxzLklzSHVhV2VpIHx8IFBsYXRVdGlscy5Jc1hpYW9NaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJpc19wcml2YWN5X3BhbmVsXCIpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldENvbmZpZ0J5S2V5KFwiaXNfcHJpdmFjeV9wYW5lbFwiKSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwiaXNfcHJpdmFjeV9wYW5lbOWPguaVsOS4umZhbHNl77yM55So5oi36ZqQ56eB5pS/562W5by556qX57uE5Lu25LiN5pi+56S677yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgX3ByaXZhY3lQYW5lbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuueUqOaIt+WNj+iuruW8ueeql1xyXG4gICAgICogQHBhcmFtIHBhcmFtcyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dQcml2YWN5UGFuZWwocGFyYW1zOiBhbnkgPSBudWxsKSB7XHJcbiAgICAgICAgdXRpbHMuc2hvd0xvZyhcInNob3dQcml2YWN5UGFuZWw+Pj5cIik7XHJcblxyXG4gICAgICAgIGxldCBzaG93UGFuZWw6IEZ1bmN0aW9uID0gKHNob3dEZXNjOiBmYWxzZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLnByaXZhY3lQYW5lbCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wcml2YWN5UGFuZWwgJiYgY2MuaXNWYWxpZCh0aGlzLl9wcml2YWN5UGFuZWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJpdmFjeVBhbmVsLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLnByaXZhY3lQYW5lbCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgeXpVc2VyUHJpdmFjeVBhbmVsID0gbm9kZS5nZXRDb21wb25lbnQoWXpVc2VyUHJpdmFjeVBhbmVsKTtcclxuICAgICAgICAgICAgICAgIHl6VXNlclByaXZhY3lQYW5lbC5zaG93RGVzYyA9IHNob3dEZXNjO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJpdmFjeVBhbmVsID0gbm9kZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ByaXZhY3lQYW5lbC56SW5kZXggPSA5OTk5O1xyXG4gICAgICAgICAgICAgICAgbGV0IHdpZGdldDogY2MuV2lkZ2V0ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICAgICAgICAgIGxldCBzdWJqZWN0ID0gXCLmt7HlnLPluILkvJjmmbrkv6Hmga/mioDmnK/mnInpmZDlhazlj7hcIjtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnN1YmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0ID0gcGFyYW1zLnN1YmplY3Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudDogc3RyaW5nID0gY2MuZmluZChcIlBhbmVsL3N1YmplY3RcIiwgbm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKCdzdWJqZWN0Jywgc3ViamVjdCk7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiUGFuZWwvc3ViamVjdFwiLCBub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5ncm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdyb3VwID0gcGFyYW1zLmdyb3VwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnNjYWxlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zY2FsZSA9IHBhcmFtcy5zY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy50b3AgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnblRvcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduQm90dG9tID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC50b3AgPSBwYXJhbXMudG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1zLmJvdHRvbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduVG9wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduQm90dG9tID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmJvdHRvbSA9IHBhcmFtcy5ib3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMubGVmdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmxlZnQgPSBwYXJhbXMubGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcmFtcy5yaWdodCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnblJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnJpZ2h0ID0gcGFyYW1zLnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gcGFyYW1zLnBhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmFkZENoaWxkKG5vZGUsIGNjLm1hY3JvLk1BWF9aSU5ERVgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5hZGRDaGlsZChub2RlLCBjYy5tYWNyby5NQVhfWklOREVYKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdpZGdldC51cGRhdGVBbGlnbm1lbnQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLpmpDnp4HmlL/nrZblvLnnqpfpooTliLbkvZPkuI3lrZjlnKjvvIFcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuaXNfd2lkZ2V0X2NsaWNrKSB7XHJcbiAgICAgICAgICAgIHNob3dQYW5lbCh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgeXN4eSA9IFlaX0xvY2FsU3RvcmFnZS5nZXRJdGVtKFlaX0NvbnN0YW50LllaX0dBTUVfWVNYWSk7XHJcbiAgICAgICAgICAgIGlmICh5c3h5KSB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5lbWl0UHJpdmFjeUNsb3NlRXZlbnQoKTtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLlt7Lnu4/lkIzmhI/ov4fpmpDnp4HljY/orq7vvIzkuI3mmL7npLrpmpDnp4HljY/orq7lvLnnqpfvvIFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHV0aWxzLnJlZ2lzdGVyU2VydmVyRGF0YUxvYWRTdWNjZXNzRXZlbnQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2hvd1BhbmVsKCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgbWluU2NhbGU6IG51bWJlciA9IDE7XHJcblxyXG4gICAgbWF4U2NhbGU6IG51bWJlciA9IDEuMztcclxuXHJcbiAgICBydW5UaW1lOiBudW1iZXIgPSAwLjM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrmlL7lpKfnvKnlsI/liqjmgIEgXHJcbiAgICAgKiBAcGFyYW0gdmlkZW9CdG4g6KeG6aKR5pKt5pS+5oyJ6ZKuXHJcbiAgICAgKiBAcGFyYW0gbm9ybWFsQnRuIOaZrumAmuaMiemSrlxyXG4gICAgICogQHBhcmFtIGNoYW5nZUJ0biDmmK/lkKblj5jmjaLmjInpkq7kvY3nva5cclxuICAgICAqIEBwYXJhbSBzaG93SGFuZCDmmK/lkKbmmL7npLrmiYvlir9cclxuICAgICAqIEBwYXJhbSBsb2NhdGlvbiDmjInpkq7miYDlsZ7nmoTpobXpnaLkvY3nva5cclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBzaG93U2NhbGVBY3Rpb24odmlkZW9CdG46IGNjLk5vZGUsIG5vcm1hbEJ0bjogY2MuTm9kZSA9IG51bGwsIGNoYW5nZUJ0bjogYm9vbGVhbiA9IHRydWUsIHNob3dIYW5kOiBib29sZWFuID0gdHJ1ZSwgbG9jYXRpb246IEJhbm5lckxvY2F0aW9uID0gQmFubmVyTG9jYXRpb24uTm9uZSkge1xyXG5cclxuICAgICAgICBpZiAoY2hhbmdlQnRuKSB7XHJcbiAgICAgICAgICAgIGlmICghY2MuaXNWYWxpZChub3JtYWxCdG4pIHx8ICFjYy5pc1ZhbGlkKHZpZGVvQnRuKSkgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghY2MuaXNWYWxpZCh2aWRlb0J0bikpIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAoQ0NfREVCVUcpIHtcclxuICAgICAgICAgICAgdGhpcy5TZXJ2ZXJDb25maWcuYnRuX3Nob3dfc2NhbGUgPSBcInRydWVcIjtcclxuICAgICAgICAgICAgdGhpcy5TZXJ2ZXJDb25maWcuY2hhbmdlX2J0bl9wb3NpdGlvbiA9IFwidHJ1ZVwiXHJcbiAgICAgICAgICAgIHRoaXMuU2VydmVyQ29uZmlnLm92ZXJfcGFnZV9jaGFuZ2VfYnRuID0gXCJmYWxzZVwiXHJcbiAgICAgICAgICAgIHRoaXMuU2VydmVyQ29uZmlnLm92ZXJfcGFnZV9zY2FsZV9idG4gPSBcImZhbHNlXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzY2FsZU5vZGU6IGNjLk5vZGUgPSB2aWRlb0J0bjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJjaGFuZ2VfYnRuX3Bvc2l0aW9uXCIpID09IFwidHJ1ZVwiICYmIGNoYW5nZUJ0biA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFuZ2VQb3NpdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbiA9PSBCYW5uZXJMb2NhdGlvbi5PdmVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRDb25maWdCeUtleShcIm92ZXJfcGFnZV9jaGFuZ2VfYnRuXCIpID09IFwiZmFsc2VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVBvc2l0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIue7k+eul+mhtemdouaMiemSrumFjee9ruS4jeWIh+aNouS9jee9ru+8gVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNoYW5nZVBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIgKyAxKTtcclxuICAgICAgICAgICAgICAgIGxldCB2aWRlb1BvcyA9IHZpZGVvQnRuLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vcm1hbFBvcyA9IG5vcm1hbEJ0bi5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZCAlIDIgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbEJ0bi5wb3NpdGlvbiA9IHZpZGVvUG9zO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvQnRuLnBvc2l0aW9uID0gbm9ybWFsUG9zO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZU5vZGUgPSB2aWRlb0J0bjtcclxuICAgICAgICAgICAgICAgICAgICBub3JtYWxCdG4ucG9zaXRpb24gPSBub3JtYWxQb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9CdG4ucG9zaXRpb24gPSB2aWRlb1BvcztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzY2FsZU5vZGUgPSBub3JtYWxCdG4ucG9zaXRpb24ueSA+IHZpZGVvQnRuLnBvc2l0aW9uLnkgPyBub3JtYWxCdG4gOiB2aWRlb0J0bjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdldENvbmZpZ0J5S2V5KFwiYnRuX3Nob3dfc2NhbGVcIikgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgaWYgKGxvY2F0aW9uID09IEJhbm5lckxvY2F0aW9uLk92ZXIgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJvdmVyX3BhZ2Vfc2NhbGVfYnRuXCIpID09IFwiZmFsc2VcIikge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIue7k+eul+mhtemdouaMiemSrumFjee9ruS4jee8qeaUvuaMiemSru+8gVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmlkZW9CdG4pIHtcclxuICAgICAgICAgICAgICAgIHZpZGVvQnRuLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB2aWRlb0J0bi5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChub3JtYWxCdG4pIHtcclxuICAgICAgICAgICAgICAgIG5vcm1hbEJ0bi5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsQnRuLnNjYWxlID0gMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKHRoaXMucnVuVGltZSwgdGhpcy5tYXhTY2FsZSksXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKHRoaXMucnVuVGltZSwgdGhpcy5taW5TY2FsZSkpO1xyXG4gICAgICAgICAgICBzY2FsZU5vZGUucnVuQWN0aW9uKGFjdGlvbi5yZXBlYXRGb3JldmVyKCkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNob3dIYW5kKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmlkZW9CdG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSB2aWRlb0J0bi5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChub3JtYWxCdG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBub3JtYWxCdG4ucGFyZW50LmdldENoaWxkQnlOYW1lKFwiaGFuZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWcub3RoZXJjb25maWcuaGFuZFByZWZhYikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYW5kID0gY2MuaW5zdGFudGlhdGUodGhpcy5jb25maWcub3RoZXJjb25maWcuaGFuZFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZC54ID0gc2NhbGVOb2RlLnggKyBzY2FsZU5vZGUud2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmQueSA9IHNjYWxlTm9kZS55IC0gMTM1O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY2FsZU5vZGUucGFyZW50LmFkZENoaWxkKGhhbmQsIGNjLm1hY3JvLk1BWF9aSU5ERVggKyAxLCBcImhhbmRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+WOn+eUn+W5v+WRiuacgOWQjuS4iuaKpeaXtumXtFxyXG4gICAgX2xhc3RSZXBvcnRBZFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIOS4iuaKpeWOn+eUn+W5v+WRiueCueWHu1xyXG4gICAgICovXHJcbiAgICByZXBvcnROYXRpdmVBZENsaWNrKCkge1xyXG5cclxuICAgICAgICBpZiAoKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5fbGFzdFJlcG9ydEFkVGltZSkgLyAxMDAwID4gMykge1xyXG4gICAgICAgICAgICB0aGlzLl9sYXN0UmVwb3J0QWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChZWl9Db25zdGFudC5ZWl9OYXRpdmVBZENsaWNrKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93TG9nKFwi5LiK5oql5Y6f55Sf5bm/5ZGK54K55Ye777yBXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvZyhcIuS4iuaKpeWOn+eUn+W5v+WRiueCueWHu+mXtOmalOaXtumXtOWwj+S6jjPnp5LvvIFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5pi+56S657uT566X6aG16Z2i5bm/5ZGK54K55Ye75oyJ6ZKuXHJcbiAgICAgKi9cclxuICAgIGNhblNob3dPdmVyUGFnZUFkQnRuKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLlNlcnZlckNvbmZpZyAmJiB0aGlzLlNlcnZlckNvbmZpZy5zaG93X292ZXJfcGFnZV9hZF9idG4gJiYgdGhpcy5TZXJ2ZXJDb25maWcuc2hvd19vdmVyX3BhZ2VfYWRfYnRuID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65bCP5ri45oiP5a6Y5pa55LqS5o6oYmFubmVyXHJcbiAgICAgKi9cclxuICAgIHNob3dSZWNCYW5uZXIoKSB7XHJcbiAgICAgICAgaWYgKCF1dGlscy5hZE1hbmFnZXIuY2hlY2tTaG93QWRUaW1lKCkpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIuaYvuekuuW5v+WRiuadoeaXtumXtOacqui+vumZkOWItu+8gVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJfdG9vbCAmJiB0aGlzLmN1cl90b29sLnNob3dSZWNCYW5uZXIgJiYgdGhpcy5jdXJfdG9vbC5zaG93UmVjQmFubmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrlsI/muLjmiI/lrpjmlrnkupLmjqjkuZ3lrqvmoLxcclxuICAgICAqL1xyXG4gICAgc2hvd0dhbWVQb3J0YWwoKSB7XHJcblxyXG4gICAgICAgIGlmICghdXRpbHMuYWRNYW5hZ2VyLmNoZWNrU2hvd0FkVGltZSgpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLmmL7npLrlub/lkYrmnaHml7bpl7TmnKrovr7pmZDliLbvvIFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VyX3Rvb2wgJiYgdGhpcy5jdXJfdG9vbC5zaG93R2FtZVBvcnRhbCAmJiB0aGlzLmN1cl90b29sLnNob3dHYW1lUG9ydGFsKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S6VklWT+S5neWuq+agvOaMguS7tlxyXG4gICAgICogQHBhcmFtIHBhcmFtcyBcclxuICAgICAqIGBgYFxyXG4gICAgICoge1xyXG4gICAgICogdG9wOm51bWJlciAgICAgICAvLyDot53nprvlsY/luZXpobbpg6jnmoTot53nprtcclxuICAgICAqIH1cclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICBfY3VyVml2b0dhbWVQb3J0YWxMb2NhdGlvbjogU3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBzaG93Vml2b0dhbWVQb3J0YWxXaWRnZXQocGFyYW1zOiBhbnkgPSBudWxsKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NvbmZpZ0luaXQpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIue7hOS7tumFjee9ruacquWIneWni+WMliFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghUGxhdFV0aWxzLklzVklWTykgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdXRpbHMuYWRNYW5hZ2VyLmNoZWNrU2hvd0FkVGltZSgpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLmmL7npLrlub/lkYrmnaHml7bpl7TmnKrovr7pmZDliLbvvIFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdldENvbmZpZ0J5S2V5KFwidml2b19nYW1lX3Byb3RhbFwiKSA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMubG9jYXRpb24gJiYgKHRoaXMuZ2V0Q29uZmlnQnlLZXkoXCJ2aXZvX2dhbWVfcHJvdGFsX2xvY2F0aW9uc1wiKS5pbmRleE9mKHBhcmFtcy5sb2NhdGlvbikgPCAwKSkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIuW9k+WJjeS9jee9ruacjeWKoeWZqOacqumFjee9ruaYvuekulZJVk/kuZ3lrqvmoLzmjILku7bvvIFcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRvb2xfVml2byAmJiB0aGlzLlRvb2xfVml2by5oaWRlR2FtZVBvcnRhbCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLlRvb2xfVml2byAmJiB0aGlzLlRvb2xfVml2by5zaG93R2FtZVBvcnRhbChwYXJhbXMudG9wKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi5pyN5Yqh5Zmo5pyq6YWN572u5pi+56S6VklWT+S5neWuq+agvOaMguS7tu+8gVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JePVklWT+S5neWuq+agvOaMguS7tlxyXG4gICAgICogQHBhcmFtIHBhcmFtcyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhpZGVWaXZvR2FtZVBvcnRhbFdpZGdldCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLlRvb2xfVml2byAmJiB0aGlzLlRvb2xfVml2by5oaWRlR2FtZVBvcnRhbCgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgX2N1ckdhbWVEcmF3ZXJBZExvY2F0aW9uOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLypcclxuICAgICoqXHJcbiAgICAqIOaYvuekuk9QUE/kupLmjqjmir3lsYnnm5LlrZDlub/lkYrvvJpcclxuICAgICog5Y+q6IO95pi+56S65Zyo5bem5L6n77yM6K6+572udG9w5YC8XHJcbiAgICAqIEBwYXJhbSBwYXJhbXMgXHJcbiAgICAqIGBgYFxyXG4gICAgKiB7XHJcbiAgICAqIHRvcDpudW1iZXIgICAgICAgLy8g6Led56a75bGP5bmV6aG26YOo55qE6Led56a7XHJcbiAgICAqIH1cclxuICAgICogYGBgXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHNob3dPcHBvR2FtZURyYXdlckFkV2lkZ2V0KHBhcmFtczogYW55ID0gbnVsbCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNDb25maWdJbml0KSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLnu4Tku7bphY3nva7mnKrliJ3lp4vljJYhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIVBsYXRVdGlscy5Jc09QUE8pIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgIGlmICghdXRpbHMuYWRNYW5hZ2VyLmNoZWNrU2hvd0FkVGltZSgpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLmmL7npLrlub/lkYrmnaHml7bpl7TmnKrovr7pmZDliLbvvIFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAoQ0NfREVCVUcpIHtcclxuICAgICAgICAgICAgdGhpcy5TZXJ2ZXJDb25maWcub3Bwb19nYW1lX2RyYXdlciA9IFwidHJ1ZVwiO1xyXG4gICAgICAgICAgICB0aGlzLlNlcnZlckNvbmZpZy5vcHBvX2dhbWVfZHJhd2VyX2xvY2F0aW9ucyA9IFwiMSwgMiwgMywgNCw1LDZcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5nZXRDb25maWdCeUtleShcIm9wcG9fZ2FtZV9kcmF3ZXJcIikgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmxvY2F0aW9uICYmICh0aGlzLmdldENvbmZpZ0J5S2V5KFwib3Bwb19nYW1lX2RyYXdlcl9sb2NhdGlvbnNcIikuaW5kZXhPZihwYXJhbXMubG9jYXRpb24pIDwgMCkpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLlvZPliY3kvY3nva7mnI3liqHlmajmnKrphY3nva7mmL7npLpPUFBP5LqS5o6o5oq95bGJ55uS5a2Q77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHBvVG9vbCAmJiB0aGlzLm9wcG9Ub29sLmhpZGVHYW1lRHJhd2VyQWQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiAocGFyYW1zICYmIHBhcmFtcy5sb2NhdGlvbiAmJiB0aGlzLl9jdXJHYW1lRHJhd2VyQWRMb2NhdGlvbiAmJiB0aGlzLl9jdXJHYW1lRHJhd2VyQWRMb2NhdGlvbiAhPSBwYXJhbXMubG9jYXRpb24pIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMub3Bwb1Rvb2wgJiYgdGhpcy5vcHBvVG9vbC5oaWRlR2FtZURyYXdlckFkKCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgdGhpcy5vcHBvVG9vbCAmJiB0aGlzLm9wcG9Ub29sLnNob3dHYW1lRHJhd2VyQWQocGFyYW1zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi5pyN5Yqh5Zmo5pyq6YWN572u5pi+56S6T1BQT+S6kuaOqOaKveWxieebkuWtkO+8gVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JePT1BQT+S6kuaOqOaKveWxieebkuWtkOW5v+WRilxyXG4gICAgICogQHBhcmFtIHBhcmFtcyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhpZGVPcHBvR2FtZURyYXdlckFkV2lkZ2V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3Bwb1Rvb2wgJiYgdGhpcy5vcHBvVG9vbC5oaWRlR2FtZURyYXdlckFkKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgKipcclxuICAgICog5pi+56S6T1BQT+S6kuaOqOaoquW5heW5v+WRiu+8mlxyXG4gICAgKiBAcGFyYW0gcGFyYW1zIFxyXG4gICAgKiBgYGBcclxuICAgICoge1xyXG4gICAgKiB0b3A6bnVtYmVyICAgICAgIC8vIOi3neemu+Wxj+W5lemhtumDqOeahOi3neemu1xyXG4gICAgKiB9XHJcbiAgICAqIGBgYFxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBzaG93T3Bwb1JlY0Jhbm5lcihwYXJhbXM6IGFueSA9IG51bGwpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ29uZmlnSW5pdCkge1xyXG4gICAgICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi57uE5Lu26YWN572u5pyq5Yid5aeL5YyWIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFQbGF0VXRpbHMuSXNPUFBPKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICghdXRpbHMuYWRNYW5hZ2VyLmNoZWNrU2hvd0FkVGltZSgpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLmmL7npLrlub/lkYrmnaHml7bpl7TmnKrovr7pmZDliLbvvIFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChDQ19ERUJVRykge1xyXG4gICAgICAgICAgICB0aGlzLlNlcnZlckNvbmZpZy5vcHBvX3JlY19iYW5uZXIgPSBcInRydWVcIjtcclxuICAgICAgICAgICAgdGhpcy5TZXJ2ZXJDb25maWcub3Bwb19yZWNfYmFubmVyX2xvY2F0aW9ucyA9IFwiMSwgMiwgMywgNFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmdldENvbmZpZ0J5S2V5KFwib3Bwb19yZWNfYmFubmVyXCIpID09PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5sb2NhdGlvbiAmJiAodGhpcy5nZXRDb25maWdCeUtleShcIm9wcG9fcmVjX2Jhbm5lcl9sb2NhdGlvbnNcIikuaW5kZXhPZihwYXJhbXMubG9jYXRpb24pIDwgMCkpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLlvZPliY3kvY3nva7mnI3liqHlmajmnKrphY3nva7mmL7npLpPUFBP5LqS5o6oQmFubmVy77yBXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHBvVG9vbCAmJiB0aGlzLm9wcG9Ub29sLmhpZGVPcHBvUmVjQmFubmVyKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vcHBvVG9vbCAmJiB0aGlzLm9wcG9Ub29sLnNob3dPcHBvTmV3UmVjQmFubmVyKHBhcmFtcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIuacjeWKoeWZqOacqumFjee9ruaYvuekuk9QUE/kupLmjqhCYW5uZXLvvIFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj09QUE/kupLmjqjmqKrluYXlub/lkYpcclxuICAgICAqIEBwYXJhbSBwYXJhbXMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoaWRlT3Bwb1JlY0Jhbm5lcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9wcG9Ub29sICYmIHRoaXMub3Bwb1Rvb2wuaGlkZU9wcG9SZWNCYW5uZXIoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlrp7lkI3orqTor4FcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWxOYW1lQXV0aChjb2RlOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY2FsbEJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdXRpbHMuc2hvd0xvZyhg6L+b6KGM5a6e5ZCN5Yi26K6k6K+B77yaI2NvZGU9JHtjb2RlfSAjbmFtZT0ke25hbWV9YCk7XHJcbiAgICAgICAgdXRpbHMuY3VyX3Rvb2wgJiYgdXRpbHMuY3VyX3Rvb2wucmVhbE5hbWVBdXRoICYmIHV0aWxzLmN1cl90b29sLnJlYWxOYW1lQXV0aChjb2RlLCBuYW1lLCBjYWxsQmFjayk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCA5Ye65ri45oiPXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBHYW1lRXhpdCgpIHtcclxuICAgICAgICB0aGlzLmN1cl90b29sICYmIHRoaXMuY3VyX3Rvb2wuR2FtZUV4aXQgJiYgdGhpcy5jdXJfdG9vbC5HYW1lRXhpdCgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgX2lzUmVhbE5hbWVBdXRoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBfeXpSZWFsTmFtZUF1dGhQYW5lbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuuWunuWQjeWItuiupOivgeW8ueeql1xyXG4gICAgICogQHBhcmFtIHBhcmFtcyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dZelJlYWxOYW1lQXV0aFBhbmVsKHBhcmFtczogYW55ID0gbnVsbCk6IGNjLk5vZGUge1xyXG4gICAgICAgIHV0aWxzLnNob3dMb2coXCLmmL7npLrlrp7lkI3liLborqTor4HlvLnnqpchXCIpXHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NvbmZpZ0luaXQpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIue7hOS7tumFjee9ruacquWIneWni+WMliFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdldFJlYWxOYW1lQXV0aExvY2FsRGF0YSgpICYmIHRoaXMuZ2V0UmVhbE5hbWVBdXRoTG9jYWxEYXRhKCkgPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5faXNSZWFsTmFtZUF1dGggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzUmVhbE5hbWVBdXRoKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLlt7Lnu4/ov5vooYzov4flrp7lkI3liLborqTor4Es5LiN5pi+56S65by556qX77yBXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXRSZWFsTmFtZUF1dGhDbG9zZUV2ZW50KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzaG93VGltZTogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgICAgIGlmIChQbGF0VXRpbHMuSXNOYXRpdmVBbmRyb2lkIHx8IFBsYXRVdGlscy5Jc05hdGl2ZUlPUykge1xyXG4gICAgICAgICAgICBzaG93VGltZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5nZXRDb25maWdCeUtleShcInNob3dfcmVhbF9uYW1lX2F1dGhcIikpIHtcclxuICAgICAgICAgICAgc2hvd1RpbWUgPSBwYXJzZUludCh0aGlzLmdldENvbmZpZ0J5S2V5KFwic2hvd19yZWFsX25hbWVfYXV0aFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2hvd1RpbWUgPT0gLTEpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIuacjeWKoeWZqOaOp+WItuS4jeaYvuekuuWunuWQjeWItuW8ueeql++8gVwiKTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0UmVhbE5hbWVBdXRoQ2xvc2VFdmVudCgpO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAoUGxhdFV0aWxzLklzTmF0aXZlQW5kcm9pZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5Ub29sX05hdGl2ZS5zaG93UmVhbE5hbWVBdXRoUGFuZWwoc2hvd1RpbWUgKyBcIlwiKTtcclxuICAgICAgICAgICAgfSwgc2hvd1RpbWUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLnl6UmVhbE5hbWVBdXRoUGFuZWwpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl95elJlYWxOYW1lQXV0aFBhbmVsICYmIGNjLmlzVmFsaWQodGhpcy5feXpSZWFsTmFtZUF1dGhQYW5lbCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3l6UmVhbE5hbWVBdXRoUGFuZWwuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY29uZmlnLm90aGVyY29uZmlnLnl6UmVhbE5hbWVBdXRoUGFuZWwpO1xyXG4gICAgICAgICAgICBpZiAoc2hvd1RpbWUgPT0gLTIpIHtcclxuICAgICAgICAgICAgICAgIC8v6L6+5Yiw6Ziy5rKJ6L+36KaB5rGC77yM55u05o6l5o+Q56S65LiL57q/XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChZelJlYWxOYW1lQXV0aFBhbmVsKS5faXNPZmZMaW5lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNob3dUaW1lID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5feXpSZWFsTmFtZUF1dGhQYW5lbCA9IG5vZGU7XHJcbiAgICAgICAgICAgIHRoaXMuX3l6UmVhbE5hbWVBdXRoUGFuZWwuekluZGV4ID0gOTk5OTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuZ3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmdyb3VwID0gcGFyYW1zLmdyb3VwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5zY2FsZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zY2FsZSA9IHBhcmFtcy5zY2FsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gcGFyYW1zLnBhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHNob3dUaW1lICogMTAwMCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9LCBzaG93VGltZSAqIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1dGlscy5zaG93TG9nKFwid2FybjpcIiArIFwi5a6e5ZCN5Yi26K6k6K+B5by556qX6aKE5Yi25L2T5LiN5a2Y5Zyo77yBXCIpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldFJlYWxOYW1lQXV0aExvY2FsRGF0YSh2YWx1ZSkge1xyXG4gICAgICAgIFlaX0xvY2FsU3RvcmFnZS5zZXRJdGVtKCd5el9nYW1lX3JlYWxfbmFtZScsIGAke3ZhbHVlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlYWxOYW1lQXV0aExvY2FsRGF0YSgpIHtcclxuICAgICAgICBsZXQgcmVhbE5hbWUgPSBZWl9Mb2NhbFN0b3JhZ2UuZ2V0SXRlbSgneXpfZ2FtZV9yZWFsX25hbWUnKTtcclxuICAgICAgICBpZiAoIXJlYWxOYW1lKSB7XHJcbiAgICAgICAgICAgIHJlYWxOYW1lID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlYWxOYW1lO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgJrov4flrZfmrrXlkI3np7Dojrflj5bmnI3liqHlmajlr7nlupTnmoTphY3nva5cclxuICAgICAqIEBwYXJhbSBrZXkg5a2X5q615ZCN56ewXHJcbiAgICAgKiBAcmV0dXJucyDmnI3liqHlmajmnInphY3nva7liJnov5Tlm57or6XphY3nva7vvIzml6DliJnov5Tlm57nqbrlrZfnrKbkuLJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldENvbmZpZ0J5S2V5KGtleTogc3RyaW5nKTogYW55IHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NvbmZpZ0luaXQpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIndhcm46XCIgKyBcIuacrOWcsOaVsOaNruacquWIneWni+WMliFcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGtleSAmJiB0aGlzLlNlcnZlckNvbmZpZyAmJiBrZXkgaW4gdGhpcy5TZXJ2ZXJDb25maWcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuU2VydmVyQ29uZmlnW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd0xvZyhgd2FybjrlrZfmrrXvvJoke2tleX0g5pyq6YWN572u77yBYCk7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55m75b2VXHJcbiAgICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxGdW5jIOaIkOWKn+Wbnuiwg1xyXG4gICAgICogQHBhcmFtIGZhaWxDYWxsRnVuYyDlpLHotKXlm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvZ2luKHN1Y2Nlc3NDYWxsRnVuYz86IEZ1bmN0aW9uLCBmYWlsQ2FsbEZ1bmM/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuc2hvd0xvZyhcIj09PT09bG9naW49PT09XCIpO1xyXG5cclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxGdW5jKSB7XHJcbiAgICAgICAgICAgIGlmIChQbGF0VXRpbHMuSXNEb3V5aW4pIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIChZWl9Mb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInl6X2xvZ2luXCIsIFwiZmFsc2VcIikgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBzdWNjZXNzQ2FsbEZ1bmMgJiYgc3VjY2Vzc0NhbGxGdW5jKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLmdhbWUudGFyZ2V0T2ZmKFlaX0NvbnN0YW50LlNUX0xPR0lOX1NVQ0NFU1MpO1xyXG4gICAgICAgICAgICBjYy5nYW1lLm9uKFlaX0NvbnN0YW50LlNUX0xPR0lOX1NVQ0NFU1MsIHN1Y2Nlc3NDYWxsRnVuYywgdGhpcyk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmFpbENhbGxGdW5jKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdGYWlsRnVuYyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZhaWxDYWxsRnVuYygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TG9naW5QYW5lbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLmdhbWUudGFyZ2V0T2ZmKFlaX0NvbnN0YW50LlNUX0xPR0lOX0ZBSUwpO1xyXG4gICAgICAgICAgICBjYy5nYW1lLm9uKFlaX0NvbnN0YW50LlNUX0xPR0lOX0ZBSUwsIG5ld0ZhaWxGdW5jLCB0aGlzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbmV3RmFpbEZ1bmMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMb2dpblBhbmVsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MuZ2FtZS50YXJnZXRPZmYoWVpfQ29uc3RhbnQuU1RfTE9HSU5fRkFJTCk7XHJcbiAgICAgICAgICAgIGNjLmdhbWUub24oWVpfQ29uc3RhbnQuU1RfTE9HSU5fRkFJTCwgbmV3RmFpbEZ1bmMsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VyX3Rvb2wgJiYgdGhpcy5jdXJfdG9vbC5sb2dpbikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cl90b29sLmxvZ2luKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZ2FtZS50YXJnZXRPZmYoWVpfQ29uc3RhbnQuU1RfTE9HSU5fU1VDQ0VTUyk7XHJcbiAgICAgICAgICAgIGNjLmdhbWUudGFyZ2V0T2ZmKFlaX0NvbnN0YW50LlNUX0xPR0lOX0ZBSUwpO1xyXG4gICAgICAgICAgICBzdWNjZXNzQ2FsbEZ1bmMgJiYgc3VjY2Vzc0NhbGxGdW5jKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF95ekxvZ2luUGFuZWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrnmbvlvZXlvLnnqpdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dMb2dpblBhbmVsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5vdGhlcmNvbmZpZy55ekxvZ2luUGFuZWwpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNvbmZpZy5vdGhlcmNvbmZpZy55ekxvZ2luUGFuZWwpO1xyXG4gICAgICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3l6TG9naW5QYW5lbCAmJiBjYy5pc1ZhbGlkKHRoaXMuX3l6TG9naW5QYW5lbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl95ekxvZ2luUGFuZWwuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5feXpMb2dpblBhbmVsID0gbm9kZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuYWRkQ2hpbGQobm9kZSwgY2MubWFjcm8uTUFYX1pJTkRFWCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCJ3YXJuOlwiICsgXCLmnKrmib7liLDpooTliLbkvZMgWXpMb2dpblBhbmVsLCDor7fmn6XnnItDb21tb25VdGlsc+e7hOS7tuS4iuaYr+WQpui1i+WAvO+8gVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55Sf5oiQVVVJRFxyXG4gICAgICogQHJldHVybnMgdXVpZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2VuZXJhdGVVVUlEKCkge1xyXG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdXVpZCA9ICd4eHh4eHh4eHh4eHg0eHh4eXh4eHh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSAqIDE2KSAlIDE2IHwgMDtcclxuICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZCAvIDE2KTtcclxuICAgICAgICAgICAgcmV0dXJuIChjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCkpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdXVpZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGxhc3R0aW1lIFxyXG4gICAgICovXHJcbiAgICBjaGVja09uZURheSAobGFzdHRpbWUpIHtcclxuICAgICAgICB2YXIgbGFzdFRpbWUgPSBwYXJzZUludChsYXN0dGltZSk7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShsYXN0VGltZSk7XHJcbiAgICAgICAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgdmFyIG1vdXRoID0gZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xyXG5cclxuICAgICAgICB2YXIgZGF0ZTEgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBub3d5ZWFyID0gZGF0ZTEuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICB2YXIgbm93bW91dGggPSBkYXRlMS5nZXRNb250aCgpO1xyXG4gICAgICAgIHZhciBub3dkYXkgPSBkYXRlMS5nZXREYXkoKTtcclxuXHJcbiAgICAgICAgaWYoeWVhciA9PSBub3d5ZWFyICYmIG1vdXRoID09IG5vd21vdXRoICYmIGRheSA9PSBub3dkYXkpeyAgLy/lubTmnIjml6Xpg73nm7jlkIzliJnor4HmmI7mmK/lkIzkuIDlpKlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBsYXN0dGltZSBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBjaGVja1dlZUhvdXJzKGxhc3R0aW1lKXsgLy/mo4Dmn6XmmK/lkKbov4fkuoborrDlvZXml7bpl7TnmoTlh4zmmagodG9kYXnkuLp0cnVl77yM6KGo56S65Yik5pat6K6w5b2V5pe26Ze05piv5ZCm5Zyo5b2T5aSp5YaFKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5qOA5p+l5piv5ZCm6L+H5LqG6K6w5b2V5pe26Ze055qE5YeM5pmoOlwiKTtcclxuICAgICAgICB2YXIgbGFzdFRpbWUgPSBwYXJzZUludChsYXN0dGltZSk7XHJcbiAgICAgICAgdmFyIHJldCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCB0b2RheSA9IHRoaXMuY2hlY2tPbmVEYXkobGFzdHRpbWUpO1xyXG4gICAgICAgIC8v5qOA5p+l5YmNMeWkqemihuWPluaXtumXtOeahOaXtuOAgeWIhuOAgeenklxyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUobGFzdFRpbWUpO1xyXG4gICAgICAgIHZhciBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICAgIHZhciBtaW51dGUgPSBkYXRlLmdldE1pbnV0ZXMoKTtcclxuICAgICAgICB2YXIgc2Vjb25kID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgICAgLy/orrDlvZXnmoTml7bpl7TmmZrkuIoxMueCueeahOavq+enkuaVsFxyXG4gICAgICAgIHZhciBkZWx0YVRpbWUgPSAoMjQgLSBob3VyKSAqIDYwICogNjAgLSAgbWludXRlICogNjAgLSBzZWNvbmQ7XHJcbiAgICAgICAgdmFyIHRhcmdldFRpbWUgPSBsYXN0VGltZSArIGRlbHRhVGltZSAqIDEwMDA7XHJcbiAgICAgICAgLy/njrDlnKjnmoTml7bpl7TnmoTmr6vnp5LmlbBcclxuICAgICAgICB2YXIgbm93VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgaWYoIXRvZGF5KXsgLy/liKTmlq3orrDlvZXml7bpl7TmmK/lkKblnKjlvZPlpKnlhoVcclxuICAgICAgICAgICAgcmV0ID0gbm93VGltZSA+IHRhcmdldFRpbWUgPyB0cnVlIDogZmFsc2U7IC8v6IulIOeOsOWcqOeahOaXtumXtOeahOenkuaVsCA+IOiusOW9leeahOaXtumXtOaZmuS4ijEy54K555qE56eS5pWwIOWImSDkuLp0cnVlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5qOA5p+l5piv5ZCm6L+H5LqG6K6w5b2V5pe26Ze055qE5YeM5pmoOlwiICsgcmV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDsgXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==