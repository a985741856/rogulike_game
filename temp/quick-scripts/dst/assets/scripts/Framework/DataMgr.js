
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Framework/DataMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b76fObtN5FOKzSrvF3Frcp', 'DataMgr');
// scripts/Framework/DataMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var weapon_1 = require("../Game/weapon");
var CocosZ_1 = require("./CocosZ");
var Constant_1 = require("./Constant");
/**
 * 数据管理类
 */
var DataMgr = /** @class */ (function () {
    function DataMgr() {
        this._dataPool = {};
    }
    Object.defineProperty(DataMgr, "inst", {
        get: function () {
            if (!DataMgr._inst) {
                DataMgr._inst = new DataMgr();
            }
            return DataMgr._inst;
        },
        enumerable: false,
        configurable: true
    });
    DataMgr.prototype.init = function () {
        // cc.sys.localStorage.clear();
        if (cc.sys.localStorage.getItem(Constant_1.default.ST_GameData)) {
            this._dataPool = JSON.parse(cc.sys.localStorage.getItem(Constant_1.default.ST_GameData));
        }
        else {
            // 初始金币
            this._dataPool[Constant_1.default.ST_CoinCount] = "9000";
            // 初始钻石
            this._dataPool[Constant_1.default.ST_DiamondCount] = "9000";
            // 初始钻石
            this._dataPool[Constant_1.default.ST_PhysicalCount] = "3";
            //初始化皮肤
            this._dataPool[Constant_1.default.ST_CurSkinId] = "0";
            //初始化武器
            this._dataPool[Constant_1.default.ST_CurMeleeId] = "13";
            this._dataPool[Constant_1.default.ST_CurRangeId] = "0";
            //初始签到信息
            this._dataPool[Constant_1.default.ST_LastDailyBonusIndex] = "-1";
            this._dataPool[Constant_1.default.ST_LastDailyBonusTime] = "0";
            this._dataPool[Constant_1.default.ST_LastPhycicalTime] = "0";
            //初始化关卡信息
            this._initLevelData();
            // 初始化皮肤数据
            this._initSkinData();
            //初始化枪械数据
            this._initGunData();
            this._save();
        }
    };
    /**
      * 初始化关卡信息
      */
    DataMgr.prototype._initLevelData = function () {
        "";
        var levelItemObj = {};
        // 简单
        var levelitem = new Constant_1.Levelitem("{\"Id\":\"" + 1001 + "\",\"State\":\"" + 1 + "\",\"Grade\":\"0\"}");
        levelItemObj["1001"] = levelitem;
        for (var i = 1002; i <= 1000 + Constant_1.default.CT_TotalLevelCount; i++) {
            var levelitem_1 = new Constant_1.Levelitem("{\"Id\":\"" + i + "\",\"State\":\"" + 0 + "\",\"Grade\":\"0\"}");
            levelItemObj[i.toString()] = levelitem_1;
        }
        // 困难
        for (var i = 2001; i <= 2000 + Constant_1.default.CT_TotalLevelCount; i++) {
            var levelitem_2 = new Constant_1.Levelitem("{\"Id\":\"" + i + "\",\"State\":\"" + 0 + "\",\"Grade\":\"0\"}");
            levelItemObj[i.toString()] = levelitem_2;
        }
        // 英雄
        for (var i = 3001; i <= 3000 + Constant_1.default.CT_TotalLevelCount; i++) {
            var levelitem_3 = new Constant_1.Levelitem("{\"Id\":\"" + i + "\",\"State\":\"" + 0 + "\",\"Grade\":\"0\"}");
            levelItemObj[i.toString()] = levelitem_3;
        }
        this._dataPool[Constant_1.default.ST_LevelItem] = JSON.stringify(levelItemObj);
    };
    DataMgr.prototype._initSkinData = function () {
        // 皮肤数据读表
        var price = [0, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000];
        var skinInfoArr = [];
        var skinInfo = new Constant_1.SkinInfo("{\"Id\":\"" + 0 + "\",\"State\":\"2\",\"Price\":\"" + price[0] + "\",\"Level\":\"0\",\"VideoCount\":\"0\"}");
        skinInfoArr.push(skinInfo);
        for (var i = 1; i < price.length; i++) {
            var skinInfo_1 = new Constant_1.SkinInfo("{\"Id\":\"" + i + "\",\"State\":\"0\",\"Price\":\"" + price[i] + "\",\"Level\":\"0\",\"VideoCount\":\"0\"}");
            skinInfoArr.push(skinInfo_1);
        }
        this._dataPool[Constant_1.default.ST_SkinInfo] = JSON.stringify(skinInfoArr);
    };
    DataMgr.prototype._initGunData = function () {
        // 武器数据读表
        var price = [
            0, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
            1000, 1000, 1000, 0, 1000, 1000, 1000, 1000, 1000, 1000,
            1000, 1000, 1000, 1000, 1000
        ];
        var gunInfoArr = [];
        for (var i = 0; i < price.length; i++) {
            var gunInfo = null;
            if (i == 0 || i == 13) {
                gunInfo = new Constant_1.GunInfo("{\"Id\":\"" + i + "\",\"State\":\"2\",\"Price\":\"" + price[i] + "\",\"Level\":\"0\",\"VideoCount\":\"0\"}");
            }
            else {
                gunInfo = new Constant_1.GunInfo("{\"Id\":\"" + i + "\",\"State\":\"0\",\"Price\":\"" + price[i] + "\",\"Level\":\"0\",\"VideoCount\":\"0\"}");
            }
            gunInfoArr.push(gunInfo);
        }
        this._dataPool[Constant_1.default.ST_GunInfo] = JSON.stringify(gunInfoArr);
    };
    Object.defineProperty(DataMgr.prototype, "AudioOn", {
        //////////////////////////////////////////////////// 当前使用
        /** 声音开关 */
        get: function () {
            return this.getItem(Constant_1.default.ST_AudioOn, "1") == "1";
        },
        set: function (value) {
            this.setItem(Constant_1.default.ST_AudioOn, value ? "1" : "0");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "ShakeOn", {
        /** 震动开关 */
        get: function () {
            return this.getItem(Constant_1.default.ST_ShakeOn, "1") == "1";
        },
        set: function (value) {
            this.setItem(Constant_1.default.ST_ShakeOn, value ? "1" : "0");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "CoinCount", {
        /** 金币数据 */
        get: function () {
            return parseInt(this.getItem(Constant_1.default.ST_CoinCount, "0"));
        },
        set: function (value) {
            this.setItem(Constant_1.default.ST_CoinCount, value + "");
            cc.game.emit(Constant_1.default.E_GAME_LOGIC, { type: Constant_1.default.E_COIN_CHANGE });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "DiamondCount", {
        /** 取钻石数据 */
        get: function () {
            return parseInt(this.getItem(Constant_1.default.ST_DiamondCount, "0"));
        },
        set: function (value) {
            this.setItem(Constant_1.default.ST_DiamondCount, value + "");
            cc.game.emit(Constant_1.default.E_GAME_LOGIC, { type: Constant_1.default.E_Diamond_CHANGE });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "PhysicalCount", {
        /** 取体力数据 */
        get: function () {
            return parseInt(this.getItem(Constant_1.default.ST_PhysicalCount, "0"));
        },
        set: function (value) {
            this.setItem(Constant_1.default.ST_PhysicalCount, value + "");
            cc.game.emit(Constant_1.default.E_GAME_LOGIC, { type: Constant_1.default.E_Diamond_CHANGE });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "TotoalCount_6", {
        /** 总局数_割草模式 */
        get: function () {
            return parseInt(this.getItem(Constant_1.default.ST_TotoalCount + "6", "1"));
        },
        set: function (value) {
            this.setItem(Constant_1.default.ST_TotoalCount + "6", value + "");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "LastDailyBonusIndex", {
        /** 最后奖励的天数 */
        get: function () {
            return parseInt(this.getItem(Constant_1.default.ST_LastDailyBonusIndex, "-1"));
        },
        set: function (value) {
            this.setItem(Constant_1.default.ST_LastDailyBonusIndex, value + "");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "LastDailyBonusTime", {
        /** 最后一次签到的时间 */
        get: function () {
            return this.getItem(Constant_1.default.ST_LastDailyBonusTime, "0");
        },
        set: function (value) {
            this.setItem(Constant_1.default.ST_LastDailyBonusTime, value + "");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "LastPhycicalTime", {
        /** 记录上一次的时间 */
        get: function () {
            return this.getItem(Constant_1.default.ST_LastPhycicalTime, "0");
        },
        set: function (value) {
            this.setItem(Constant_1.default.ST_LastPhycicalTime, value + "");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "LastLoadDate", {
        /** 加载游戏日期 */
        get: function () {
            return this.getItem(Constant_1.default.ST_LastLoadDate, "");
        },
        set: function (v) {
            this.setItem(Constant_1.default.ST_LastLoadDate, v);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "OnlineToday", {
        /** 今日在线时间 */
        get: function () {
            return parseInt(this.getItem(Constant_1.default.ST_OnlineToday, "0"));
        },
        set: function (v) {
            this.setItem(Constant_1.default.ST_OnlineToday, v + "");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "receiveToday", {
        /** 今日在线奖励领取数量 */
        get: function () {
            return JSON.parse(this.getItem(Constant_1.default.ST_ReceiveToday, "[0, 0, 0, 0, 0]"));
        },
        set: function (v) {
            this.setItem(Constant_1.default.ST_ReceiveToday, JSON.stringify(v));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "CurSkinId", {
        /**
         * 当前皮肤ID
         */
        get: function () {
            return parseInt(this.getItem(Constant_1.default.ST_CurSkinId, "0"));
        },
        /**
         * 设置当前皮肤ID
         */
        set: function (value) {
            if (value == this.CurSkinId) {
                return;
            }
            var preId = this.CurSkinId;
            var skinInfo = this.getSkinInfo(preId);
            if (skinInfo) {
                skinInfo.State = 1;
                this.setSkinInfo(preId, skinInfo);
            }
            var curSkinInfo = this.getSkinInfo(value);
            if (curSkinInfo) {
                curSkinInfo.State = 2;
                this.setSkinInfo(value, curSkinInfo);
            }
            this.setItem(Constant_1.default.ST_CurSkinId, value + "");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 获取皮肤信息
     * @param id 皮肤ID
     */
    DataMgr.prototype.getSkinInfo = function (id) {
        var skinInfos = this.getItem(Constant_1.default.ST_SkinInfo, "");
        if (skinInfos) {
            var skinInfoArr = JSON.parse(skinInfos);
            if (id >= 0 && id < skinInfoArr.length) {
                return skinInfoArr[id];
            }
        }
        return null;
    };
    /**
     * 保存皮肤信息
     * @param id 皮肤ID
     * @param info  皮肤信息
     */
    DataMgr.prototype.setSkinInfo = function (id, info) {
        var skinInfos = this.getItem(Constant_1.default.ST_SkinInfo, "");
        if (skinInfos) {
            var skinInfoArr = JSON.parse(skinInfos);
            if (id >= 0 && id < skinInfoArr.length) {
                skinInfoArr[id] = info;
                this.setItem(Constant_1.default.ST_SkinInfo, JSON.stringify(skinInfoArr));
            }
        }
    };
    /**
     * 随机获取3个未解锁的皮肤id
     */
    DataMgr.prototype.getRandomLockSkin = function () {
        var ids = [];
        var skinInfos = this.getItem(Constant_1.default.ST_SkinInfo, "");
        if (skinInfos) {
            var skinInfoArr = JSON.parse(skinInfos);
            for (var i = 0; i < skinInfoArr.length; i++) {
                if (skinInfoArr[i].State == 0) {
                    ids.push(skinInfoArr[i].Id);
                }
            }
        }
        return ids;
    };
    /**
     * 获取武器信息
     * @param id 武器ID
     */
    DataMgr.prototype.getGunInfo = function (id) {
        var gunInfos = this.getItem(Constant_1.default.ST_GunInfo, "");
        if (gunInfos) {
            var gunInfoArr = JSON.parse(gunInfos);
            if (id >= 0 && id < gunInfoArr.length) {
                return gunInfoArr[id];
            }
        }
        return null;
    };
    /**
     * 保存武器信息
     * @param id 皮肤ID
     * @param info  皮肤信息
     */
    DataMgr.prototype.setGunInfo = function (id, info) {
        var gunInfos = this.getItem(Constant_1.default.ST_GunInfo, "");
        if (gunInfos) {
            var gunInfoArr = JSON.parse(gunInfos);
            if (id >= 0 && id < gunInfoArr.length) {
                gunInfoArr[id] = info;
                this.setItem(Constant_1.default.ST_GunInfo, JSON.stringify(gunInfoArr));
            }
        }
    };
    /**
   * 获取关卡信息
   * @param id 关卡ID
   */
    DataMgr.prototype.getLevelInfo = function (id) {
        var levelInfos = this.getItem(Constant_1.default.ST_LevelItem, "");
        if (levelInfos) {
            var levelInfoArr = JSON.parse(levelInfos);
            if (id && levelInfoArr[id]) {
                return levelInfoArr[id];
            }
        }
        return null;
    };
    /**
     * 保存关卡信息
     * @param id 关卡ID
     * @param info  皮肤信息
     */
    DataMgr.prototype.setLevelInfo = function (id, info) {
        var levelInfos = this.getItem(Constant_1.default.ST_LevelItem, "");
        if (levelInfos) {
            var levelInfoArr = JSON.parse(levelInfos);
            if (id && levelInfoArr[id]) {
                levelInfoArr[id] = info;
                this.setItem(Constant_1.default.ST_LevelItem, JSON.stringify(levelInfoArr));
            }
        }
    };
    Object.defineProperty(DataMgr.prototype, "CurMelee", {
        /**
        * 当前近战武器
        */
        get: function () {
            return parseInt(this.getItem(Constant_1.default.ST_CurMeleeId, "13"));
        },
        set: function (id) {
            if (id == this.CurMelee || !weapon_1.default.meleeWaapon.includes(id + 1)) {
                return;
            }
            var preId = this.CurMelee;
            var gunInfo = this.getGunInfo(preId);
            if (gunInfo) {
                gunInfo.State = 1;
                this.setGunInfo(preId, gunInfo);
            }
            var curGunInfo = this.getGunInfo(id);
            if (curGunInfo) {
                curGunInfo.State = 2;
                this.setGunInfo(id, curGunInfo);
            }
            this.setItem(Constant_1.default.ST_CurMeleeId, id + "");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "CurRange", {
        /**
        * 当前远程武器
        */
        get: function () {
            if (CocosZ_1.cocosz.gameMode == 6) {
                return 0;
            }
            else {
                return parseInt(this.getItem(Constant_1.default.ST_CurRangeId, "0"));
            }
        },
        set: function (id) {
            if (id == this.CurRange || !weapon_1.default.rangeWeapon.includes(id + 1)) {
                return;
            }
            var preId = this.CurRange;
            var gunInfo = this.getGunInfo(preId);
            if (gunInfo) {
                gunInfo.State = 1;
                this.setGunInfo(preId, gunInfo);
            }
            var curGunInfo = this.getGunInfo(id);
            if (curGunInfo) {
                curGunInfo.State = 2;
                this.setGunInfo(id, curGunInfo);
            }
            this.setItem(Constant_1.default.ST_CurRangeId, id + "");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "curWeapon", {
        get: function () {
            return this.CurRange;
        },
        set: function (id) {
            if (weapon_1.default.meleeWaapon.includes(id + 1)) {
                this.CurMelee = id;
            }
            else if (weapon_1.default.rangeWeapon.includes(id + 1)) {
                this.CurRange = id;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "guide_skill", {
        /** 技能指引 */
        get: function () {
            return this.getItem(Constant_1.default.ST_Guide_Skill, false);
        },
        /** 技能指引 */
        set: function (value) {
            this.setItem(Constant_1.default.ST_Guide_Skill, value);
            cc.game.emit(Constant_1.default.E_ShareOrVideo);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "best_time", {
        ///////////////// 历史最佳 //////////////////////
        // 游戏时间
        get: function () {
            return parseInt(this.getItem("best_time", "0"));
        },
        set: function (v) {
            if (v > this.best_time) {
                this.setItem("best_time", v + "");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "best_kill", {
        // 击杀数
        get: function () {
            return parseInt(this.getItem("best_kill", "0"));
        },
        set: function (v) {
            if (v > this.best_kill) {
                this.setItem("best_kill", v + "");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "best_level", {
        // 等级
        get: function () {
            return parseInt(this.getItem("best_level", "0"));
        },
        set: function (v) {
            if (v > this.best_level) {
                this.setItem("best_level", v + "");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "best_coin", {
        // 金币
        get: function () {
            return parseInt(this.getItem("best_coin", "0"));
        },
        set: function (v) {
            if (v > this.best_coin) {
                this.setItem("best_coin", v + "");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "shareNum", {
        // 分享次数
        get: function () {
            return this.getItem(Constant_1.default.ST_ShareNum, 0);
        },
        set: function (v) {
            this.setItem(Constant_1.default.ST_ShareNum, v);
            // 发送事件更新图标
            cc.game.emit(Constant_1.default.E_ShareOrVideo);
            cc.log("今日分享了", v, "次");
        },
        enumerable: false,
        configurable: true
    });
    ////////////////////////////////////////////////////////////////////////////////
    DataMgr.prototype.getItem = function (key, defaultValue) {
        if (this._dataPool[key] != undefined && this._dataPool[key] != null) {
            return this._dataPool[key];
        }
        return defaultValue;
    };
    DataMgr.prototype.setItem = function (key, value) {
        this._dataPool[key] = value;
        this._save();
    };
    DataMgr.prototype._save = function () {
        cc.sys.localStorage.setItem(Constant_1.default.ST_GameData, JSON.stringify(this._dataPool));
    };
    return DataMgr;
}());
exports.default = DataMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRnJhbWV3b3JrXFxEYXRhTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLG1DQUFrQztBQUNsQyx1Q0FBK0U7QUFFL0U7O0dBRUc7QUFDSDtJQUFBO1FBVVksY0FBUyxHQUFRLEVBQUUsQ0FBQztJQW1kaEMsQ0FBQztJQTFkRyxzQkFBa0IsZUFBSTthQUF0QjtZQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO2dCQUNoQixPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7YUFDakM7WUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFJTSxzQkFBSSxHQUFYO1FBQ0ksK0JBQStCO1FBRS9CLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDbEY7YUFBTTtZQUNILE9BQU87WUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQy9DLE9BQU87WUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFRLENBQUMsZUFBZSxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQ2xELE9BQU87WUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDaEQsT0FBTztZQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDNUMsT0FBTztZQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUM3QyxRQUFRO1lBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBUSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUVyRCxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFRLENBQUMsbUJBQW1CLENBQUMsR0FBRyxHQUFHLENBQUM7WUFFbkQsU0FBUztZQUNULElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixVQUFVO1lBQ1YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLFNBQVM7WUFDVCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFFcEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQUNEOztRQUVJO0lBQ0ksZ0NBQWMsR0FBdEI7UUFDSSxFQUFFLENBQUE7UUFDRixJQUFJLFlBQVksR0FBaUMsRUFBRSxDQUFDO1FBQ3BELEtBQUs7UUFDTCxJQUFJLFNBQVMsR0FBYyxJQUFJLG9CQUFTLENBQUMsZUFBVSxJQUFJLHVCQUFjLENBQUMsd0JBQWdCLENBQUMsQ0FBQztRQUN4RixZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLEdBQUcsa0JBQVEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3RCxJQUFJLFdBQVMsR0FBYyxJQUFJLG9CQUFTLENBQUMsZUFBVSxDQUFDLHVCQUFjLENBQUMsd0JBQWdCLENBQUMsQ0FBQztZQUNyRixZQUFZLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsV0FBUyxDQUFDO1NBQzFDO1FBQ0QsS0FBSztRQUNMLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLEdBQUcsa0JBQVEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3RCxJQUFJLFdBQVMsR0FBYyxJQUFJLG9CQUFTLENBQUMsZUFBVSxDQUFDLHVCQUFjLENBQUMsd0JBQWdCLENBQUMsQ0FBQztZQUNyRixZQUFZLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsV0FBUyxDQUFDO1NBQzFDO1FBQ0QsS0FBSztRQUNMLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLEdBQUcsa0JBQVEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3RCxJQUFJLFdBQVMsR0FBYyxJQUFJLG9CQUFTLENBQUMsZUFBVSxDQUFDLHVCQUFjLENBQUMsd0JBQWdCLENBQUMsQ0FBQztZQUNyRixZQUFZLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsV0FBUyxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVPLCtCQUFhLEdBQXJCO1FBQ0ksU0FBUztRQUNULElBQUksS0FBSyxHQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RixJQUFJLFdBQVcsR0FBZSxFQUFFLENBQUM7UUFDakMsSUFBSSxRQUFRLEdBQWEsSUFBSSxtQkFBUSxDQUFDLGVBQVUsQ0FBQyx1Q0FBMEIsS0FBSyxDQUFDLENBQUMsQ0FBQyw2Q0FBaUMsQ0FBQyxDQUFDO1FBQ3RILFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxVQUFRLEdBQWEsSUFBSSxtQkFBUSxDQUFDLGVBQVUsQ0FBQyx1Q0FBMEIsS0FBSyxDQUFDLENBQUMsQ0FBQyw2Q0FBaUMsQ0FBQyxDQUFDO1lBQ3RILFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBUSxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU8sOEJBQVksR0FBcEI7UUFDSSxTQUFTO1FBQ1QsSUFBSSxLQUFLLEdBQWE7WUFDbEIsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUN2RCxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ3ZELElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1NBQy9CLENBQUM7UUFDRixJQUFJLFVBQVUsR0FBYyxFQUFFLENBQUM7UUFDL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxPQUFPLEdBQVksSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNuQixPQUFPLEdBQUcsSUFBSSxrQkFBTyxDQUFDLGVBQVUsQ0FBQyx1Q0FBMEIsS0FBSyxDQUFDLENBQUMsQ0FBQyw2Q0FBaUMsQ0FBQyxDQUFDO2FBQ3pHO2lCQUFNO2dCQUNILE9BQU8sR0FBRyxJQUFJLGtCQUFPLENBQUMsZUFBVSxDQUFDLHVDQUEwQixLQUFLLENBQUMsQ0FBQyxDQUFDLDZDQUFpQyxDQUFDLENBQUM7YUFDekc7WUFDRCxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUlELHNCQUFXLDRCQUFPO1FBRmxCLHlEQUF5RDtRQUN6RCxXQUFXO2FBQ1g7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDO1FBQ3pELENBQUM7YUFDRCxVQUFtQixLQUFjO1lBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELENBQUM7OztPQUhBO0lBS0Qsc0JBQVcsNEJBQU87UUFEbEIsV0FBVzthQUNYO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUN6RCxDQUFDO2FBQ0QsVUFBbUIsS0FBYztZQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6RCxDQUFDOzs7T0FIQTtJQUtELHNCQUFXLDhCQUFTO1FBRHBCLFdBQVc7YUFDWDtZQUNJLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5RCxDQUFDO2FBQ0QsVUFBcUIsS0FBYTtZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsWUFBWSxFQUFFLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNoRCxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxrQkFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDMUUsQ0FBQzs7O09BSkE7SUFNRCxzQkFBVyxpQ0FBWTtRQUR2QixZQUFZO2FBQ1o7WUFDSSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakUsQ0FBQzthQUNELFVBQXdCLEtBQWE7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLGVBQWUsRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDbkQsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQVEsQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsa0JBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFDN0UsQ0FBQzs7O09BSkE7SUFPRCxzQkFBVyxrQ0FBYTtRQUR4QixZQUFZO2FBQ1o7WUFDSSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDO2FBQ0QsVUFBeUIsS0FBYTtZQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3BELEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFRLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLGtCQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQzdFLENBQUM7OztPQUpBO0lBT0Qsc0JBQVcsa0NBQWE7UUFEeEIsZUFBZTthQUNmO1lBQ0ksT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLGNBQWMsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0RSxDQUFDO2FBQ0QsVUFBeUIsS0FBYTtZQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsY0FBYyxHQUFHLEdBQUcsRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDNUQsQ0FBQzs7O09BSEE7SUFNRCxzQkFBVyx3Q0FBbUI7UUFEOUIsY0FBYzthQUNkO1lBQ0ksT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQzthQUNELFVBQStCLEtBQWE7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLHNCQUFzQixFQUFFLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM5RCxDQUFDOzs7T0FIQTtJQU1ELHNCQUFXLHVDQUFrQjtRQUQ3QixnQkFBZ0I7YUFDaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3RCxDQUFDO2FBQ0QsVUFBOEIsS0FBYTtZQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMscUJBQXFCLEVBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzdELENBQUM7OztPQUhBO0lBTUQsc0JBQVcscUNBQWdCO1FBRDNCLGVBQWU7YUFDZjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNELENBQUM7YUFDRCxVQUE0QixLQUFhO1lBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDM0QsQ0FBQzs7O09BSEE7SUFNRCxzQkFBVyxpQ0FBWTtRQUR2QixhQUFhO2FBQ2I7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDckQsQ0FBQzthQUNELFVBQXdCLENBQVM7WUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFXLGdDQUFXO1FBRHRCLGFBQWE7YUFDYjtZQUNJLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDO2FBQ0QsVUFBdUIsQ0FBUztZQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNsRCxDQUFDOzs7T0FIQTtJQUtELHNCQUFXLGlDQUFZO1FBRHZCLGlCQUFpQjthQUNqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsZUFBZSxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUNqRixDQUFDO2FBQ0QsVUFBd0IsQ0FBVztZQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxDQUFDOzs7T0FIQTtJQVFELHNCQUFXLDhCQUFTO1FBSHBCOztXQUVHO2FBQ0g7WUFDSSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUVEOztXQUVHO2FBQ0gsVUFBcUIsS0FBYTtZQUM5QixJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUN6QixPQUFPO2FBQ1Y7WUFFRCxJQUFJLEtBQUssR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ25DLElBQUksUUFBUSxHQUFhLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakQsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3JDO1lBRUQsSUFBSSxXQUFXLEdBQWEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRCxJQUFJLFdBQVcsRUFBRTtnQkFDYixXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDeEM7WUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsWUFBWSxFQUFFLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNwRCxDQUFDOzs7T0F4QkE7SUEwQkQ7OztPQUdHO0lBQ0ksNkJBQVcsR0FBbEIsVUFBbUIsRUFBVTtRQUN6QixJQUFJLFNBQVMsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksU0FBUyxFQUFFO1lBQ1gsSUFBSSxXQUFXLEdBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwRCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3BDLE9BQU8sV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzFCO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDZCQUFXLEdBQWxCLFVBQW1CLEVBQVUsRUFBRSxJQUFjO1FBQ3pDLElBQUksU0FBUyxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDL0QsSUFBSSxTQUFTLEVBQUU7WUFDWCxJQUFJLFdBQVcsR0FBZSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BELElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRTtnQkFDcEMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDbkU7U0FDSjtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLG1DQUFpQixHQUF4QjtRQUNJLElBQUksR0FBRyxHQUFhLEVBQUUsQ0FBQztRQUN2QixJQUFJLFNBQVMsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksU0FBUyxFQUFFO1lBQ1gsSUFBSSxXQUFXLEdBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekMsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTtvQkFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQy9CO2FBQ0o7U0FDSjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDRCQUFVLEdBQWpCLFVBQWtCLEVBQVU7UUFDeEIsSUFBSSxRQUFRLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksVUFBVSxHQUFjLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakQsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFO2dCQUNuQyxPQUFPLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN6QjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUdEOzs7O09BSUc7SUFDSSw0QkFBVSxHQUFqQixVQUFrQixFQUFVLEVBQUUsSUFBYTtRQUN2QyxJQUFJLFFBQVEsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdELElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBSSxVQUFVLEdBQWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ25DLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQ2pFO1NBQ0o7SUFDTCxDQUFDO0lBRUM7OztLQUdDO0lBQ00sOEJBQVksR0FBbkIsVUFBb0IsRUFBVTtRQUM1QixJQUFJLFVBQVUsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLElBQUksVUFBVSxFQUFFO1lBQ1osSUFBSSxZQUFZLEdBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkQsSUFBSSxFQUFFLElBQUksWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUN4QixPQUFPLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMzQjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUdEOzs7O09BSUc7SUFDSSw4QkFBWSxHQUFuQixVQUFvQixFQUFVLEVBQUUsSUFBZTtRQUMzQyxJQUFJLFVBQVUsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLElBQUksVUFBVSxFQUFFO1lBQ1osSUFBSSxZQUFZLEdBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkQsSUFBSSxFQUFFLElBQUksWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUN4QixZQUFZLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzthQUNyRTtTQUNKO0lBQ0wsQ0FBQztJQUtELHNCQUFXLDZCQUFRO1FBSG5COztVQUVFO2FBQ0Y7WUFDSSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEUsQ0FBQzthQUNELFVBQXFCLEVBQVU7WUFDM0IsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQzdELE9BQU87YUFDVjtZQUNELElBQUksS0FBSyxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbEMsSUFBSSxPQUFPLEdBQVksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QyxJQUFJLE9BQU8sRUFBRTtnQkFDVCxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDbkM7WUFDRCxJQUFJLFVBQVUsR0FBWSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLElBQUksVUFBVSxFQUFFO2dCQUNaLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUNuQztZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxhQUFhLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELENBQUM7OztPQWpCQTtJQXFCRCxzQkFBVyw2QkFBUTtRQUhuQjs7VUFFRTthQUNGO1lBQ0ksSUFBRyxlQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBQztnQkFDcEIsT0FBTyxDQUFDLENBQUM7YUFDWjtpQkFBSTtnQkFDRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDOUQ7UUFDTCxDQUFDO2FBQ0QsVUFBcUIsRUFBVTtZQUMzQixJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDN0QsT0FBTzthQUNWO1lBQ0QsSUFBSSxLQUFLLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNsQyxJQUFJLE9BQU8sR0FBWSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlDLElBQUksT0FBTyxFQUFFO2dCQUNULE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQzthQUNuQztZQUNELElBQUksVUFBVSxHQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUMsSUFBSSxVQUFVLEVBQUU7Z0JBQ1osVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ25DO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLGFBQWEsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQzs7O09BakJBO0lBa0JELHNCQUFXLDhCQUFTO2FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7YUFDRCxVQUFxQixFQUFVO1lBQzNCLElBQUksZ0JBQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7YUFDdEI7aUJBQU0sSUFBSSxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzthQUN0QjtRQUNMLENBQUM7OztPQVBBO0lBVUQsc0JBQVcsZ0NBQVc7UUFEdEIsV0FBVzthQUNYO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFDRCxXQUFXO2FBQ1gsVUFBdUIsS0FBYztZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzdDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUMsQ0FBQzs7O09BTEE7SUFTRCxzQkFBVyw4QkFBUztRQUZwQiw2Q0FBNkM7UUFDN0MsT0FBTzthQUNQO1lBQ0ksT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwRCxDQUFDO2FBQ0QsVUFBcUIsQ0FBUztZQUMxQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDckM7UUFDTCxDQUFDOzs7T0FMQTtJQU9ELHNCQUFXLDhCQUFTO1FBRHBCLE1BQU07YUFDTjtZQUNJLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQzthQUNELFVBQXFCLENBQVM7WUFDMUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2FBQ3JDO1FBQ0wsQ0FBQzs7O09BTEE7SUFPRCxzQkFBVywrQkFBVTtRQURyQixLQUFLO2FBQ0w7WUFDSSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUM7YUFDRCxVQUFzQixDQUFTO1lBQzNCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUN0QztRQUNMLENBQUM7OztPQUxBO0lBT0Qsc0JBQVcsOEJBQVM7UUFEcEIsS0FBSzthQUNMO1lBQ0ksT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwRCxDQUFDO2FBQ0QsVUFBcUIsQ0FBUztZQUMxQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDckM7UUFDTCxDQUFDOzs7T0FMQTtJQU9ELHNCQUFXLDZCQUFRO1FBRG5CLE9BQU87YUFDUDtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNoRCxDQUFDO2FBQ0QsVUFBb0IsQ0FBUztZQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLFdBQVc7WUFDWCxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDOzs7T0FOQTtJQVFELGdGQUFnRjtJQUN6RSx5QkFBTyxHQUFkLFVBQWUsR0FBVyxFQUFFLFlBQWlCO1FBQ3pDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDakUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQUNNLHlCQUFPLEdBQWQsVUFBZSxHQUFXLEVBQUUsS0FBVTtRQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNPLHVCQUFLLEdBQWI7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUwsY0FBQztBQUFELENBN2RBLEFBNmRDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2VhcG9uIGZyb20gXCIuLi9HYW1lL3dlYXBvblwiO1xyXG5pbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi9Db2Nvc1pcIjtcclxuaW1wb3J0IENvbnN0YW50LCB7IFNraW5JbmZvLCBMZXZlbGl0ZW0sIFNraWxsSW5mbywgR3VuSW5mbyB9IGZyb20gXCIuL0NvbnN0YW50XCI7XHJcblxyXG4vKipcclxuICog5pWw5o2u566h55CG57G7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhTWdyIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdDogRGF0YU1ncjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3QoKTogRGF0YU1nciB7XHJcbiAgICAgICAgaWYgKCFEYXRhTWdyLl9pbnN0KSB7XHJcbiAgICAgICAgICAgIERhdGFNZ3IuX2luc3QgPSBuZXcgRGF0YU1ncigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gRGF0YU1nci5faW5zdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kYXRhUG9vbDogYW55ID0ge307XHJcblxyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50LlNUX0dhbWVEYXRhKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhUG9vbCA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50LlNUX0dhbWVEYXRhKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g5Yid5aeL6YeR5biBXHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFQb29sW0NvbnN0YW50LlNUX0NvaW5Db3VudF0gPSBcIjkwMDBcIjtcclxuICAgICAgICAgICAgLy8g5Yid5aeL6ZK755+zXHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFQb29sW0NvbnN0YW50LlNUX0RpYW1vbmRDb3VudF0gPSBcIjkwMDBcIjtcclxuICAgICAgICAgICAgLy8g5Yid5aeL6ZK755+zXHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFQb29sW0NvbnN0YW50LlNUX1BoeXNpY2FsQ291bnRdID0gXCIzXCI7XHJcbiAgICAgICAgICAgIC8v5Yid5aeL5YyW55qu6IKkXHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFQb29sW0NvbnN0YW50LlNUX0N1clNraW5JZF0gPSBcIjBcIjtcclxuICAgICAgICAgICAgLy/liJ3lp4vljJbmrablmahcclxuICAgICAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU1RfQ3VyTWVsZWVJZF0gPSBcIjEzXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFQb29sW0NvbnN0YW50LlNUX0N1clJhbmdlSWRdID0gXCIwXCI7XHJcbiAgICAgICAgICAgIC8v5Yid5aeL562+5Yiw5L+h5oGvXHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFQb29sW0NvbnN0YW50LlNUX0xhc3REYWlseUJvbnVzSW5kZXhdID0gXCItMVwiO1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhUG9vbFtDb25zdGFudC5TVF9MYXN0RGFpbHlCb251c1RpbWVdID0gXCIwXCI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9kYXRhUG9vbFtDb25zdGFudC5TVF9MYXN0UGh5Y2ljYWxUaW1lXSA9IFwiMFwiO1xyXG5cclxuICAgICAgICAgICAgLy/liJ3lp4vljJblhbPljaHkv6Hmga9cclxuICAgICAgICAgICAgdGhpcy5faW5pdExldmVsRGF0YSgpO1xyXG4gICAgICAgICAgICAvLyDliJ3lp4vljJbnmq7ogqTmlbDmja5cclxuICAgICAgICAgICAgdGhpcy5faW5pdFNraW5EYXRhKCk7XHJcbiAgICAgICAgICAgIC8v5Yid5aeL5YyW5p6q5qKw5pWw5o2uXHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRHdW5EYXRhKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zYXZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgICog5Yid5aeL5YyW5YWz5Y2h5L+h5oGvXHJcbiAgICAgICovXHJcbiAgICBwcml2YXRlIF9pbml0TGV2ZWxEYXRhKCkge1xyXG4gICAgICAgIGBgXHJcbiAgICAgICAgbGV0IGxldmVsSXRlbU9iajogeyBba2V5OiBzdHJpbmddOiBMZXZlbGl0ZW0gfSA9IHt9O1xyXG4gICAgICAgIC8vIOeugOWNlVxyXG4gICAgICAgIGxldCBsZXZlbGl0ZW06IExldmVsaXRlbSA9IG5ldyBMZXZlbGl0ZW0oYHtcIklkXCI6XCIkezEwMDF9XCIsXCJTdGF0ZVwiOlwiJHsxfVwiLFwiR3JhZGVcIjpcIjBcIn1gKTtcclxuICAgICAgICBsZXZlbEl0ZW1PYmpbXCIxMDAxXCJdID0gbGV2ZWxpdGVtO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxMDAyOyBpIDw9IDEwMDAgKyBDb25zdGFudC5DVF9Ub3RhbExldmVsQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbGV2ZWxpdGVtOiBMZXZlbGl0ZW0gPSBuZXcgTGV2ZWxpdGVtKGB7XCJJZFwiOlwiJHtpfVwiLFwiU3RhdGVcIjpcIiR7MH1cIixcIkdyYWRlXCI6XCIwXCJ9YCk7XHJcbiAgICAgICAgICAgIGxldmVsSXRlbU9ialtpLnRvU3RyaW5nKCldID0gbGV2ZWxpdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlm7Dpmr5cclxuICAgICAgICBmb3IgKGxldCBpID0gMjAwMTsgaSA8PSAyMDAwICsgQ29uc3RhbnQuQ1RfVG90YWxMZXZlbENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGxldmVsaXRlbTogTGV2ZWxpdGVtID0gbmV3IExldmVsaXRlbShge1wiSWRcIjpcIiR7aX1cIixcIlN0YXRlXCI6XCIkezB9XCIsXCJHcmFkZVwiOlwiMFwifWApO1xyXG4gICAgICAgICAgICBsZXZlbEl0ZW1PYmpbaS50b1N0cmluZygpXSA9IGxldmVsaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6Iux6ZuEXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDMwMDE7IGkgPD0gMzAwMCArIENvbnN0YW50LkNUX1RvdGFsTGV2ZWxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBsZXZlbGl0ZW06IExldmVsaXRlbSA9IG5ldyBMZXZlbGl0ZW0oYHtcIklkXCI6XCIke2l9XCIsXCJTdGF0ZVwiOlwiJHswfVwiLFwiR3JhZGVcIjpcIjBcIn1gKTtcclxuICAgICAgICAgICAgbGV2ZWxJdGVtT2JqW2kudG9TdHJpbmcoKV0gPSBsZXZlbGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2RhdGFQb29sW0NvbnN0YW50LlNUX0xldmVsSXRlbV0gPSBKU09OLnN0cmluZ2lmeShsZXZlbEl0ZW1PYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2luaXRTa2luRGF0YSgpIHtcclxuICAgICAgICAvLyDnmq7ogqTmlbDmja7or7vooahcclxuICAgICAgICBsZXQgcHJpY2U6IG51bWJlcltdID0gWzAsIDEwMDAsIDEwMDAsIDEwMDAsIDEwMDAsIDEwMDAsIDEwMDAsIDEwMDAsIDEwMDAsIDEwMDAsIDEwMDAsIDEwMDBdO1xyXG4gICAgICAgIGxldCBza2luSW5mb0FycjogU2tpbkluZm9bXSA9IFtdO1xyXG4gICAgICAgIGxldCBza2luSW5mbzogU2tpbkluZm8gPSBuZXcgU2tpbkluZm8oYHtcIklkXCI6XCIkezB9XCIsXCJTdGF0ZVwiOlwiMlwiLFwiUHJpY2VcIjpcIiR7cHJpY2VbMF19XCIsXCJMZXZlbFwiOlwiMFwiLFwiVmlkZW9Db3VudFwiOlwiMFwifWApO1xyXG4gICAgICAgIHNraW5JbmZvQXJyLnB1c2goc2tpbkluZm8pO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcHJpY2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHNraW5JbmZvOiBTa2luSW5mbyA9IG5ldyBTa2luSW5mbyhge1wiSWRcIjpcIiR7aX1cIixcIlN0YXRlXCI6XCIwXCIsXCJQcmljZVwiOlwiJHtwcmljZVtpXX1cIixcIkxldmVsXCI6XCIwXCIsXCJWaWRlb0NvdW50XCI6XCIwXCJ9YCk7XHJcbiAgICAgICAgICAgIHNraW5JbmZvQXJyLnB1c2goc2tpbkluZm8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kYXRhUG9vbFtDb25zdGFudC5TVF9Ta2luSW5mb10gPSBKU09OLnN0cmluZ2lmeShza2luSW5mb0Fycik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaW5pdEd1bkRhdGEoKSB7XHJcbiAgICAgICAgLy8g5q2m5Zmo5pWw5o2u6K+76KGoXHJcbiAgICAgICAgbGV0IHByaWNlOiBudW1iZXJbXSA9IFtcclxuICAgICAgICAgICAgMCwgMTAwMCwgMTAwMCwgMTAwMCwgMTAwMCwgMTAwMCwgMTAwMCwgMTAwMCwgMTAwMCwgMTAwMCxcclxuICAgICAgICAgICAgMTAwMCwgMTAwMCwgMTAwMCwgMCwgMTAwMCwgMTAwMCwgMTAwMCwgMTAwMCwgMTAwMCwgMTAwMCxcclxuICAgICAgICAgICAgMTAwMCwgMTAwMCwgMTAwMCwgMTAwMCwgMTAwMFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgbGV0IGd1bkluZm9BcnI6IEd1bkluZm9bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpY2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGd1bkluZm86IEd1bkluZm8gPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoaSA9PSAwIHx8IGkgPT0gMTMpIHtcclxuICAgICAgICAgICAgICAgIGd1bkluZm8gPSBuZXcgR3VuSW5mbyhge1wiSWRcIjpcIiR7aX1cIixcIlN0YXRlXCI6XCIyXCIsXCJQcmljZVwiOlwiJHtwcmljZVtpXX1cIixcIkxldmVsXCI6XCIwXCIsXCJWaWRlb0NvdW50XCI6XCIwXCJ9YCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBndW5JbmZvID0gbmV3IEd1bkluZm8oYHtcIklkXCI6XCIke2l9XCIsXCJTdGF0ZVwiOlwiMFwiLFwiUHJpY2VcIjpcIiR7cHJpY2VbaV19XCIsXCJMZXZlbFwiOlwiMFwiLFwiVmlkZW9Db3VudFwiOlwiMFwifWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGd1bkluZm9BcnIucHVzaChndW5JbmZvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU1RfR3VuSW5mb10gPSBKU09OLnN0cmluZ2lmeShndW5JbmZvQXJyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIOW9k+WJjeS9v+eUqFxyXG4gICAgLyoqIOWjsOmfs+W8gOWFsyAqL1xyXG4gICAgcHVibGljIGdldCBBdWRpb09uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW0oQ29uc3RhbnQuU1RfQXVkaW9PbiwgXCIxXCIpID09IFwiMVwiO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBBdWRpb09uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtKENvbnN0YW50LlNUX0F1ZGlvT24sIHZhbHVlID8gXCIxXCIgOiBcIjBcIik7XHJcbiAgICB9XHJcbiAgICAvKiog6ZyH5Yqo5byA5YWzICovXHJcbiAgICBwdWJsaWMgZ2V0IFNoYWtlT24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbShDb25zdGFudC5TVF9TaGFrZU9uLCBcIjFcIikgPT0gXCIxXCI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IFNoYWtlT24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnNldEl0ZW0oQ29uc3RhbnQuU1RfU2hha2VPbiwgdmFsdWUgPyBcIjFcIiA6IFwiMFwiKTtcclxuICAgIH1cclxuICAgIC8qKiDph5HluIHmlbDmja4gKi9cclxuICAgIHB1YmxpYyBnZXQgQ29pbkNvdW50KCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLmdldEl0ZW0oQ29uc3RhbnQuU1RfQ29pbkNvdW50LCBcIjBcIikpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBDb2luQ291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0SXRlbShDb25zdGFudC5TVF9Db2luQ291bnQsIHZhbHVlICsgXCJcIik7XHJcbiAgICAgICAgY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfR0FNRV9MT0dJQywgeyB0eXBlOiBDb25zdGFudC5FX0NPSU5fQ0hBTkdFIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqIOWPlumSu+efs+aVsOaNriAqL1xyXG4gICAgcHVibGljIGdldCBEaWFtb25kQ291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuZ2V0SXRlbShDb25zdGFudC5TVF9EaWFtb25kQ291bnQsIFwiMFwiKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IERpYW1vbmRDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtKENvbnN0YW50LlNUX0RpYW1vbmRDb3VudCwgdmFsdWUgKyBcIlwiKTtcclxuICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9HQU1FX0xPR0lDLCB7IHR5cGU6IENvbnN0YW50LkVfRGlhbW9uZF9DSEFOR0UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWPluS9k+WKm+aVsOaNriAqL1xyXG4gICAgcHVibGljIGdldCBQaHlzaWNhbENvdW50KCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLmdldEl0ZW0oQ29uc3RhbnQuU1RfUGh5c2ljYWxDb3VudCwgXCIwXCIpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgUGh5c2ljYWxDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtKENvbnN0YW50LlNUX1BoeXNpY2FsQ291bnQsIHZhbHVlICsgXCJcIik7XHJcbiAgICAgICAgY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfR0FNRV9MT0dJQywgeyB0eXBlOiBDb25zdGFudC5FX0RpYW1vbmRfQ0hBTkdFIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmgLvlsYDmlbBf5Ymy6I2J5qih5byPICovXHJcbiAgICBwdWJsaWMgZ2V0IFRvdG9hbENvdW50XzYoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuZ2V0SXRlbShDb25zdGFudC5TVF9Ub3RvYWxDb3VudCArIFwiNlwiLCBcIjFcIikpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBUb3RvYWxDb3VudF82KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldEl0ZW0oQ29uc3RhbnQuU1RfVG90b2FsQ291bnQgKyBcIjZcIiwgdmFsdWUgKyBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5pyA5ZCO5aWW5Yqx55qE5aSp5pWwICovXHJcbiAgICBwdWJsaWMgZ2V0IExhc3REYWlseUJvbnVzSW5kZXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuZ2V0SXRlbShDb25zdGFudC5TVF9MYXN0RGFpbHlCb251c0luZGV4LCBcIi0xXCIpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgTGFzdERhaWx5Qm9udXNJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtKENvbnN0YW50LlNUX0xhc3REYWlseUJvbnVzSW5kZXgsIHZhbHVlICsgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOacgOWQjuS4gOasoeetvuWIsOeahOaXtumXtCAqL1xyXG4gICAgcHVibGljIGdldCBMYXN0RGFpbHlCb251c1RpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbShDb25zdGFudC5TVF9MYXN0RGFpbHlCb251c1RpbWUsIFwiMFwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgTGFzdERhaWx5Qm9udXNUaW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNldEl0ZW0oQ29uc3RhbnQuU1RfTGFzdERhaWx5Qm9udXNUaW1lLCB2YWx1ZSArIFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDorrDlvZXkuIrkuIDmrKHnmoTml7bpl7QgKi9cclxuICAgIHB1YmxpYyBnZXQgTGFzdFBoeWNpY2FsVGltZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtKENvbnN0YW50LlNUX0xhc3RQaHljaWNhbFRpbWUsIFwiMFwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgTGFzdFBoeWNpY2FsVGltZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtKENvbnN0YW50LlNUX0xhc3RQaHljaWNhbFRpbWUsIHZhbHVlICsgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWKoOi9vea4uOaIj+aXpeacnyAqL1xyXG4gICAgcHVibGljIGdldCBMYXN0TG9hZERhdGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtKENvbnN0YW50LlNUX0xhc3RMb2FkRGF0ZSwgXCJcIilcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgTGFzdExvYWREYXRlKHY6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2V0SXRlbShDb25zdGFudC5TVF9MYXN0TG9hZERhdGUsIHYpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDku4rml6XlnKjnur/ml7bpl7QgKi9cclxuICAgIHB1YmxpYyBnZXQgT25saW5lVG9kYXkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5nZXRJdGVtKENvbnN0YW50LlNUX09ubGluZVRvZGF5LCBcIjBcIikpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBPbmxpbmVUb2RheSh2OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldEl0ZW0oQ29uc3RhbnQuU1RfT25saW5lVG9kYXksIHYgKyBcIlwiKTtcclxuICAgIH1cclxuICAgIC8qKiDku4rml6XlnKjnur/lpZblirHpooblj5bmlbDph48gKi9cclxuICAgIHB1YmxpYyBnZXQgcmVjZWl2ZVRvZGF5KCk6IG51bWJlcltdIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmdldEl0ZW0oQ29uc3RhbnQuU1RfUmVjZWl2ZVRvZGF5LCBcIlswLCAwLCAwLCAwLCAwXVwiKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IHJlY2VpdmVUb2RheSh2OiBudW1iZXJbXSkge1xyXG4gICAgICAgIHRoaXMuc2V0SXRlbShDb25zdGFudC5TVF9SZWNlaXZlVG9kYXksIEpTT04uc3RyaW5naWZ5KHYpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+WJjeearuiCpElEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgQ3VyU2tpbklkKCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLmdldEl0ZW0oQ29uc3RhbnQuU1RfQ3VyU2tpbklkLCBcIjBcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5b2T5YmN55qu6IKkSURcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBDdXJTa2luSWQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB0aGlzLkN1clNraW5JZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcHJlSWQ6IG51bWJlciA9IHRoaXMuQ3VyU2tpbklkO1xyXG4gICAgICAgIGxldCBza2luSW5mbzogU2tpbkluZm8gPSB0aGlzLmdldFNraW5JbmZvKHByZUlkKTtcclxuICAgICAgICBpZiAoc2tpbkluZm8pIHtcclxuICAgICAgICAgICAgc2tpbkluZm8uU3RhdGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnNldFNraW5JbmZvKHByZUlkLCBza2luSW5mbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY3VyU2tpbkluZm86IFNraW5JbmZvID0gdGhpcy5nZXRTa2luSW5mbyh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKGN1clNraW5JbmZvKSB7XHJcbiAgICAgICAgICAgIGN1clNraW5JbmZvLlN0YXRlID0gMjtcclxuICAgICAgICAgICAgdGhpcy5zZXRTa2luSW5mbyh2YWx1ZSwgY3VyU2tpbkluZm8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRJdGVtKENvbnN0YW50LlNUX0N1clNraW5JZCwgdmFsdWUgKyBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluearuiCpOS/oeaBr1xyXG4gICAgICogQHBhcmFtIGlkIOearuiCpElEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTa2luSW5mbyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHNraW5JbmZvczogc3RyaW5nID0gdGhpcy5nZXRJdGVtKENvbnN0YW50LlNUX1NraW5JbmZvLCBcIlwiKTtcclxuICAgICAgICBpZiAoc2tpbkluZm9zKSB7XHJcbiAgICAgICAgICAgIGxldCBza2luSW5mb0FycjogU2tpbkluZm9bXSA9IEpTT04ucGFyc2Uoc2tpbkluZm9zKTtcclxuICAgICAgICAgICAgaWYgKGlkID49IDAgJiYgaWQgPCBza2luSW5mb0Fyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBza2luSW5mb0FycltpZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkv53lrZjnmq7ogqTkv6Hmga9cclxuICAgICAqIEBwYXJhbSBpZCDnmq7ogqRJRFxyXG4gICAgICogQHBhcmFtIGluZm8gIOearuiCpOS/oeaBr1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0U2tpbkluZm8oaWQ6IG51bWJlciwgaW5mbzogU2tpbkluZm8pIHtcclxuICAgICAgICBsZXQgc2tpbkluZm9zOiBzdHJpbmcgPSB0aGlzLmdldEl0ZW0oQ29uc3RhbnQuU1RfU2tpbkluZm8sIFwiXCIpO1xyXG4gICAgICAgIGlmIChza2luSW5mb3MpIHtcclxuICAgICAgICAgICAgbGV0IHNraW5JbmZvQXJyOiBTa2luSW5mb1tdID0gSlNPTi5wYXJzZShza2luSW5mb3MpO1xyXG4gICAgICAgICAgICBpZiAoaWQgPj0gMCAmJiBpZCA8IHNraW5JbmZvQXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc2tpbkluZm9BcnJbaWRdID0gaW5mbztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbShDb25zdGFudC5TVF9Ta2luSW5mbywgSlNPTi5zdHJpbmdpZnkoc2tpbkluZm9BcnIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmaj+acuuiOt+WPljPkuKrmnKrop6PplIHnmoTnmq7ogqRpZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0UmFuZG9tTG9ja1NraW4oKSB7XHJcbiAgICAgICAgbGV0IGlkczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBsZXQgc2tpbkluZm9zOiBzdHJpbmcgPSB0aGlzLmdldEl0ZW0oQ29uc3RhbnQuU1RfU2tpbkluZm8sIFwiXCIpO1xyXG4gICAgICAgIGlmIChza2luSW5mb3MpIHtcclxuICAgICAgICAgICAgbGV0IHNraW5JbmZvQXJyOiBTa2luSW5mb1tdID0gSlNPTi5wYXJzZShza2luSW5mb3MpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNraW5JbmZvQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2tpbkluZm9BcnJbaV0uU3RhdGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkcy5wdXNoKHNraW5JbmZvQXJyW2ldLklkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaWRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5q2m5Zmo5L+h5oGvXHJcbiAgICAgKiBAcGFyYW0gaWQg5q2m5ZmoSURcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEd1bkluZm8oaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBndW5JbmZvczogc3RyaW5nID0gdGhpcy5nZXRJdGVtKENvbnN0YW50LlNUX0d1bkluZm8sIFwiXCIpO1xyXG4gICAgICAgIGlmIChndW5JbmZvcykge1xyXG4gICAgICAgICAgICBsZXQgZ3VuSW5mb0FycjogR3VuSW5mb1tdID0gSlNPTi5wYXJzZShndW5JbmZvcyk7XHJcbiAgICAgICAgICAgIGlmIChpZCA+PSAwICYmIGlkIDwgZ3VuSW5mb0Fyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBndW5JbmZvQXJyW2lkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkv53lrZjmrablmajkv6Hmga9cclxuICAgICAqIEBwYXJhbSBpZCDnmq7ogqRJRFxyXG4gICAgICogQHBhcmFtIGluZm8gIOearuiCpOS/oeaBr1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0R3VuSW5mbyhpZDogbnVtYmVyLCBpbmZvOiBHdW5JbmZvKSB7XHJcbiAgICAgICAgbGV0IGd1bkluZm9zOiBzdHJpbmcgPSB0aGlzLmdldEl0ZW0oQ29uc3RhbnQuU1RfR3VuSW5mbywgXCJcIik7XHJcbiAgICAgICAgaWYgKGd1bkluZm9zKSB7XHJcbiAgICAgICAgICAgIGxldCBndW5JbmZvQXJyOiBHdW5JbmZvW10gPSBKU09OLnBhcnNlKGd1bkluZm9zKTtcclxuICAgICAgICAgICAgaWYgKGlkID49IDAgJiYgaWQgPCBndW5JbmZvQXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgZ3VuSW5mb0FycltpZF0gPSBpbmZvO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJdGVtKENvbnN0YW50LlNUX0d1bkluZm8sIEpTT04uc3RyaW5naWZ5KGd1bkluZm9BcnIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICog6I635Y+W5YWz5Y2h5L+h5oGvXHJcbiAgICAgKiBAcGFyYW0gaWQg5YWz5Y2hSURcclxuICAgICAqL1xyXG4gICAgICBwdWJsaWMgZ2V0TGV2ZWxJbmZvKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgbGV2ZWxJbmZvczogc3RyaW5nID0gdGhpcy5nZXRJdGVtKENvbnN0YW50LlNUX0xldmVsSXRlbSwgXCJcIik7XHJcbiAgICAgICAgaWYgKGxldmVsSW5mb3MpIHtcclxuICAgICAgICAgICAgbGV0IGxldmVsSW5mb0FycjogTGV2ZWxpdGVtW10gPSBKU09OLnBhcnNlKGxldmVsSW5mb3MpO1xyXG4gICAgICAgICAgICBpZiAoaWQgJiYgbGV2ZWxJbmZvQXJyW2lkXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxldmVsSW5mb0FycltpZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5L+d5a2Y5YWz5Y2h5L+h5oGvXHJcbiAgICAgKiBAcGFyYW0gaWQg5YWz5Y2hSURcclxuICAgICAqIEBwYXJhbSBpbmZvICDnmq7ogqTkv6Hmga9cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldExldmVsSW5mbyhpZDogbnVtYmVyLCBpbmZvOiBMZXZlbGl0ZW0pIHtcclxuICAgICAgICBsZXQgbGV2ZWxJbmZvczogc3RyaW5nID0gdGhpcy5nZXRJdGVtKENvbnN0YW50LlNUX0xldmVsSXRlbSwgXCJcIik7XHJcbiAgICAgICAgaWYgKGxldmVsSW5mb3MpIHtcclxuICAgICAgICAgICAgbGV0IGxldmVsSW5mb0FycjogTGV2ZWxpdGVtW10gPSBKU09OLnBhcnNlKGxldmVsSW5mb3MpO1xyXG4gICAgICAgICAgICBpZiAoaWQgJiYgbGV2ZWxJbmZvQXJyW2lkXSkge1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxJbmZvQXJyW2lkXSA9IGluZm87XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW0oQ29uc3RhbnQuU1RfTGV2ZWxJdGVtLCBKU09OLnN0cmluZ2lmeShsZXZlbEluZm9BcnIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICog5b2T5YmN6L+R5oiY5q2m5ZmoXHJcbiAgICAqL1xyXG4gICAgcHVibGljIGdldCBDdXJNZWxlZSgpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5nZXRJdGVtKENvbnN0YW50LlNUX0N1ck1lbGVlSWQsIFwiMTNcIikpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXQgQ3VyTWVsZWUoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChpZCA9PSB0aGlzLkN1ck1lbGVlIHx8ICFXZWFwb24ubWVsZWVXYWFwb24uaW5jbHVkZXMoaWQgKyAxKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwcmVJZDogbnVtYmVyID0gdGhpcy5DdXJNZWxlZTtcclxuICAgICAgICBsZXQgZ3VuSW5mbzogR3VuSW5mbyA9IHRoaXMuZ2V0R3VuSW5mbyhwcmVJZCk7XHJcbiAgICAgICAgaWYgKGd1bkluZm8pIHtcclxuICAgICAgICAgICAgZ3VuSW5mby5TdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0R3VuSW5mbyhwcmVJZCwgZ3VuSW5mbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjdXJHdW5JbmZvOiBHdW5JbmZvID0gdGhpcy5nZXRHdW5JbmZvKGlkKTtcclxuICAgICAgICBpZiAoY3VyR3VuSW5mbykge1xyXG4gICAgICAgICAgICBjdXJHdW5JbmZvLlN0YXRlID0gMjtcclxuICAgICAgICAgICAgdGhpcy5zZXRHdW5JbmZvKGlkLCBjdXJHdW5JbmZvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtKENvbnN0YW50LlNUX0N1ck1lbGVlSWQsIGlkICsgXCJcIik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICog5b2T5YmN6L+c56iL5q2m5ZmoXHJcbiAgICAqL1xyXG4gICAgcHVibGljIGdldCBDdXJSYW5nZSgpIHtcclxuICAgICAgICBpZihjb2Nvc3ouZ2FtZU1vZGUgPT0gNil7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5nZXRJdGVtKENvbnN0YW50LlNUX0N1clJhbmdlSWQsIFwiMFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXQgQ3VyUmFuZ2UoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChpZCA9PSB0aGlzLkN1clJhbmdlIHx8ICFXZWFwb24ucmFuZ2VXZWFwb24uaW5jbHVkZXMoaWQgKyAxKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwcmVJZDogbnVtYmVyID0gdGhpcy5DdXJSYW5nZTtcclxuICAgICAgICBsZXQgZ3VuSW5mbzogR3VuSW5mbyA9IHRoaXMuZ2V0R3VuSW5mbyhwcmVJZCk7XHJcbiAgICAgICAgaWYgKGd1bkluZm8pIHtcclxuICAgICAgICAgICAgZ3VuSW5mby5TdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0R3VuSW5mbyhwcmVJZCwgZ3VuSW5mbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjdXJHdW5JbmZvOiBHdW5JbmZvID0gdGhpcy5nZXRHdW5JbmZvKGlkKTtcclxuICAgICAgICBpZiAoY3VyR3VuSW5mbykge1xyXG4gICAgICAgICAgICBjdXJHdW5JbmZvLlN0YXRlID0gMjtcclxuICAgICAgICAgICAgdGhpcy5zZXRHdW5JbmZvKGlkLCBjdXJHdW5JbmZvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtKENvbnN0YW50LlNUX0N1clJhbmdlSWQsIGlkICsgXCJcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGN1cldlYXBvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5DdXJSYW5nZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgY3VyV2VhcG9uKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoV2VhcG9uLm1lbGVlV2FhcG9uLmluY2x1ZGVzKGlkICsgMSkpIHtcclxuICAgICAgICAgICAgdGhpcy5DdXJNZWxlZSA9IGlkO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoV2VhcG9uLnJhbmdlV2VhcG9uLmluY2x1ZGVzKGlkICsgMSkpIHtcclxuICAgICAgICAgICAgdGhpcy5DdXJSYW5nZSA9IGlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5oqA6IO95oyH5byVICovXHJcbiAgICBwdWJsaWMgZ2V0IGd1aWRlX3NraWxsKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW0oQ29uc3RhbnQuU1RfR3VpZGVfU2tpbGwsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIC8qKiDmioDog73mjIflvJUgKi9cclxuICAgIHB1YmxpYyBzZXQgZ3VpZGVfc2tpbGwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnNldEl0ZW0oQ29uc3RhbnQuU1RfR3VpZGVfU2tpbGwsIHZhbHVlKTtcclxuICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9TaGFyZU9yVmlkZW8pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vIOWOhuWPsuacgOS9syAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyDmuLjmiI/ml7bpl7RcclxuICAgIHB1YmxpYyBnZXQgYmVzdF90aW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuZ2V0SXRlbShcImJlc3RfdGltZVwiLCBcIjBcIikpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBiZXN0X3RpbWUodjogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHYgPiB0aGlzLmJlc3RfdGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEl0ZW0oXCJiZXN0X3RpbWVcIiwgdiArIFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOWHu+adgOaVsFxyXG4gICAgcHVibGljIGdldCBiZXN0X2tpbGwoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5nZXRJdGVtKFwiYmVzdF9raWxsXCIsIFwiMFwiKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGJlc3Rfa2lsbCh2OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodiA+IHRoaXMuYmVzdF9raWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbShcImJlc3Rfa2lsbFwiLCB2ICsgXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g562J57qnXHJcbiAgICBwdWJsaWMgZ2V0IGJlc3RfbGV2ZWwoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5nZXRJdGVtKFwiYmVzdF9sZXZlbFwiLCBcIjBcIikpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBiZXN0X2xldmVsKHY6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh2ID4gdGhpcy5iZXN0X2xldmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbShcImJlc3RfbGV2ZWxcIiwgdiArIFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOmHkeW4gVxyXG4gICAgcHVibGljIGdldCBiZXN0X2NvaW4oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5nZXRJdGVtKFwiYmVzdF9jb2luXCIsIFwiMFwiKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGJlc3RfY29pbih2OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodiA+IHRoaXMuYmVzdF9jb2luKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbShcImJlc3RfY29pblwiLCB2ICsgXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g5YiG5Lqr5qyh5pWwXHJcbiAgICBwdWJsaWMgZ2V0IHNoYXJlTnVtKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbShDb25zdGFudC5TVF9TaGFyZU51bSwgMClcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgc2hhcmVOdW0odjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtKENvbnN0YW50LlNUX1NoYXJlTnVtLCB2KTtcclxuICAgICAgICAvLyDlj5HpgIHkuovku7bmm7TmlrDlm77moIdcclxuICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9TaGFyZU9yVmlkZW8pO1xyXG4gICAgICAgIGNjLmxvZyhcIuS7iuaXpeWIhuS6q+S6hlwiLCB2LCBcIuasoVwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgcHVibGljIGdldEl0ZW0oa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RhdGFQb29sW2tleV0gIT0gdW5kZWZpbmVkICYmIHRoaXMuX2RhdGFQb29sW2tleV0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVBvb2xba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YVBvb2xba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3NhdmUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX3NhdmUoKSB7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50LlNUX0dhbWVEYXRhLCBKU09OLnN0cmluZ2lmeSh0aGlzLl9kYXRhUG9vbCkpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=