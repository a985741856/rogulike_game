
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Framework/GameMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a6femhqDpCk53HbKVrUmes', 'GameMgr');
// scripts/Framework/GameMgr.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameCtr_1 = require("./GameCtr");
var CocosZ_1 = require("./CocosZ");
var Constant_1 = require("./Constant");
var Msg_1 = require("./Msg");
var Utils_1 = require("../../common-plugin/Scripts/Utils");
var YZ_Constant_1 = require("../../common-plugin/Scripts/YZ_Constant");
var YZ_LocalStorage_1 = require("../../common-plugin/Scripts/YZ_LocalStorage");
var UpgradeMgr_1 = require("../Game/UpgradeMgr");
// @ts-ignore
var i18n = require('LanguageData');
/**
 * 游戏管理
 */
var GameMgr = /** @class */ (function () {
    function GameMgr() {
        this._state = Constant_1.GameState.None;
        this._gameCtr = new GameCtr_1.default();
        this.gameStartTime = 0;
        this.canTry = true;
        this.canGame = true;
    }
    Object.defineProperty(GameMgr, "inst", {
        get: function () {
            if (!GameMgr._inst) {
                GameMgr._inst = new GameMgr();
            }
            return GameMgr._inst;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameMgr.prototype, "State", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(GameMgr.prototype, "gameCtr", {
        get: function () {
            return this._gameCtr;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 开始游戏
     * @param 关卡ID
     */
    GameMgr.prototype.gameStart = function (levelId) {
        return __awaiter(this, void 0, void 0, function () {
            var rangeLevel;
            return __generator(this, function (_a) {
                YZ_LocalStorage_1.default.setItem(YZ_Constant_1.default.ST_RED_BAG_PROGRESS, '0');
                CocosZ_1.cocosz.curLevel = levelId;
                // 重置
                if (this.canTry) {
                    this.canTry = false;
                    this.gameCtr.curUseSkinId = -1;
                    // 能否弹试用
                    if (CocosZ_1.cocosz.isShowAd && CocosZ_1.cocosz.isADON && (CocosZ_1.cocosz.isDeBug || Utils_1.utils.isShowTrySkin(levelId))) {
                        rangeLevel = CocosZ_1.cocosz.dataMgr.getGunInfo(CocosZ_1.cocosz.dataMgr.CurRange).Level;
                        if (Math.random() < 0.5 && (rangeLevel < 3)) {
                            // 武器升级弹窗
                            CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UIWeaponLevelPanel);
                        }
                        else {
                            // 皮肤试用弹窗
                            // cocosz.uiMgr.openPanel(PanelName.UITrySkinPanel);
                        }
                    }
                    // 进入游戏
                    else if (this.canGame) {
                        this.canGame = false;
                        this._loadGameScene();
                    }
                }
                // 能否进入游戏
                else if (this.canGame) {
                    this.canGame = false;
                    this._loadGameScene();
                }
                return [2 /*return*/];
            });
        });
    };
    GameMgr.prototype._loadGameScene = function () {
        var _this = this;
        // 使用皮肤
        if (this.gameCtr.curUseSkinId < 0) {
            this.gameCtr.curUseSkinId = CocosZ_1.cocosz.dataMgr.CurSkinId;
        }
        //上报游戏开始
        Utils_1.utils.StartGame(CocosZ_1.cocosz.getLevelId().toString());
        //进入游戏场景
        CocosZ_1.cocosz.sceneMgr.loadScene("Game", function () {
            _this.gameStartTime = new Date().getTime();
            _this.canTry = true;
            _this.canGame = true;
            _this._gamePrepare();
            //显示过度页面
            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UIGameLoadingPage);
        });
    };
    /** 游戏预加载 */
    GameMgr.prototype._gamePrepare = function () {
        try {
            this.State = Constant_1.GameState.Prepare;
            //调用游戏初始化
            this.gameCtr.init();
        }
        catch (error) {
            cc.error("erro >>", error);
            // 资源没有准备好, 无法进入游戏
            CocosZ_1.cocosz.sceneMgr.loadScene("Home", function () {
                CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UIHomePage);
                Msg_1.default.Show(i18n.t("msg.net_error")); //当前网络状态不佳，请重启游戏
            });
        }
    };
    /** 游戏胜利 */
    GameMgr.prototype.gameSuccess = function () {
        cc.log('游戏胜利!');
        this.State = Constant_1.GameState.Success;
        CocosZ_1.cocosz.audioMgr.playEffectWinner();
        // 上报游戏时间
        var gameTime = Math.round((new Date().getTime() - this.gameStartTime) / 1000 / 60);
        Utils_1.utils.SendEvent("游戏时间:" + gameTime + "分钟");
        //保存关卡解锁数据
        var rewardCallFunc = function (res) {
            cc.log("获取激励组件奖励+" + res.rewardValue);
            if (res) {
                CocosZ_1.cocosz.dataMgr.CoinCount += res.rewardValue;
                cc.game.emit(Constant_1.default.E_GAME_LOGIC, { type: Constant_1.default.E_COIN_CHANGE });
            }
        };
        var closeCallFunc = function () {
            cc.log("激励组件关闭！！！！！！");
            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UIOverPage);
        };
        //显示结算前广告
        Utils_1.utils.adManager.showBeforGameOverAd(CocosZ_1.cocosz.getLevelId(), YZ_Constant_1.LevelStatus.GameWin, 100, closeCallFunc, rewardCallFunc);
    };
    /** 游戏失败 */
    GameMgr.prototype.gameFailed = function () {
        cc.log('游戏失败!');
        this.State = Constant_1.GameState.Failed;
        CocosZ_1.cocosz.audioMgr.playEffectFailed();
        // 上报游戏时间
        var gameTime = Math.round((new Date().getTime() - this.gameStartTime) / 1000 / 60);
        Utils_1.utils.SendEvent("游戏时间:" + gameTime + "分钟");
        console.log("当前游戏等级为" + UpgradeMgr_1.upgradeMgr.curLevel.toString());
        var url = Constant_1.default.WEB_LINE_TITLE + '/qwk/charts/updateTheCharts/' + Constant_1.default.PERSON_TPKKEN + "/" + Constant_1.default.GAME_ID + "/"; //用户id与游戏id目前为1和1
        url += (gameTime * 60 * UpgradeMgr_1.upgradeMgr.curLevel).toString();
        Utils_1.utils.showLog("上报数据, url=", url);
        Utils_1.utils.commomHttpRequest(url, function (ret, jsdata) {
            if (ret) {
                Utils_1.utils.showLog("数据上报成功！");
            }
            else {
                Utils_1.utils.showLog("数据上报失败！");
            }
        });
        var rewardCallFunc = function (res) {
            cc.log("获取激励组件奖励+" + res.rewardValue);
            if (res) {
                //保存奖励值到本地
                CocosZ_1.cocosz.dataMgr.CoinCount += res.rewardValue;
                cc.game.emit(Constant_1.default.E_GAME_LOGIC, { type: Constant_1.default.E_COIN_CHANGE });
            }
        };
        var closeCallFunc = function () {
            cc.log("激励组件关闭！！！！！！");
            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UIOverPage);
        };
        Utils_1.utils.adManager.showBeforGameOverAd(CocosZ_1.cocosz.getLevelId(), YZ_Constant_1.LevelStatus.GameFail, 50, closeCallFunc, rewardCallFunc);
    };
    return GameMgr;
}());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRnJhbWV3b3JrXFxHYW1lTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQWdDO0FBQ2hDLG1DQUFrQztBQUNsQyx1Q0FBc0U7QUFDdEUsNkJBQXdCO0FBQ3hCLDJEQUEwRDtBQUMxRCx1RUFBOEY7QUFDOUYsK0VBQTBFO0FBQzFFLGlEQUE2QztBQUM3QyxhQUFhO0FBQ2IsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRXJDOztHQUVHO0FBQ0g7SUFBQTtRQVVjLFdBQU0sR0FBYyxvQkFBUyxDQUFDLElBQUksQ0FBQztRQVFyQyxhQUFRLEdBQVksSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFNbkMsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDekIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixZQUFPLEdBQVksSUFBSSxDQUFDO0lBc0lwQyxDQUFDO0lBN0pHLHNCQUFrQixlQUFJO2FBQXRCO1lBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQzthQUNqQztZQUNELE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDBCQUFLO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFDRCxVQUFpQixLQUFnQjtZQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FIQTtJQUt5QyxDQUFDO0lBQzNDLHNCQUFXLDRCQUFPO2FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBTUQ7OztPQUdHO0lBQ1UsMkJBQVMsR0FBdEIsVUFBdUIsT0FBZTs7OztnQkFDbEMseUJBQWUsQ0FBQyxPQUFPLENBQUMscUJBQVcsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDOUQsZUFBTSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7Z0JBQzFCLEtBQUs7Z0JBQ0wsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDL0IsUUFBUTtvQkFDUixJQUFJLGVBQU0sQ0FBQyxRQUFRLElBQUksZUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLGVBQU0sQ0FBQyxPQUFPLElBQUksYUFBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFO3dCQUNsRixVQUFVLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsZUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQzFFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsRUFBRTs0QkFDekMsU0FBUzs0QkFDVCxlQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxvQkFBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7eUJBQ3hEOzZCQUFNOzRCQUNILFNBQVM7NEJBQ1Qsb0RBQW9EO3lCQUN2RDtxQkFDSjtvQkFDRCxPQUFPO3lCQUNGLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTt3QkFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztxQkFDekI7aUJBQ0o7Z0JBQ0QsU0FBUztxQkFDSixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7aUJBQ3pCOzs7O0tBQ0o7SUFFTyxnQ0FBYyxHQUF0QjtRQUFBLGlCQWdCQztRQWZHLE9BQU87UUFDUCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztTQUN4RDtRQUNELFFBQVE7UUFDUixhQUFLLENBQUMsU0FBUyxDQUFDLGVBQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELFFBQVE7UUFDUixlQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDOUIsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixRQUFRO1lBQ1IsZUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFlBQVk7SUFDSiw4QkFBWSxHQUFwQjtRQUNJLElBQUk7WUFDQSxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFTLENBQUMsT0FBTyxDQUFDO1lBQy9CLFNBQVM7WUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3ZCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzQixrQkFBa0I7WUFDbEIsZUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUM5QixlQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMzQyxhQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFBLGdCQUFnQjtZQUN0RCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVELFdBQVc7SUFDSiw2QkFBVyxHQUFsQjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxvQkFBUyxDQUFDLE9BQU8sQ0FBQztRQUMvQixlQUFNLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDbkMsU0FBUztRQUNULElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDbkYsYUFBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzNDLFVBQVU7UUFDVixJQUFJLGNBQWMsR0FBRyxVQUFDLEdBQWM7WUFDaEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ3JDLElBQUksR0FBRyxFQUFFO2dCQUNMLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUM7Z0JBQzVDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFRLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLGtCQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQzthQUN6RTtRQUNMLENBQUMsQ0FBQztRQUVGLElBQUksYUFBYSxHQUFHO1lBQ2hCLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdkIsZUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUE7UUFFRCxTQUFTO1FBQ1QsYUFBSyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxlQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUseUJBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUV0SCxDQUFDO0lBRUQsV0FBVztJQUNKLDRCQUFVLEdBQWpCO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFTLENBQUMsTUFBTSxDQUFDO1FBQzlCLGVBQU0sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuQyxTQUFTO1FBQ1QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNuRixhQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFFM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUMsdUJBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLEdBQUcsR0FBVyxrQkFBUSxDQUFDLGNBQWMsR0FBRyw4QkFBOEIsR0FBSSxrQkFBUSxDQUFDLGFBQWEsR0FBRyxHQUFHLEdBQUcsa0JBQVEsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUcsaUJBQWlCO1FBQ3hKLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4RCxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqQyxhQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07WUFDckMsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsYUFBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM1QjtpQkFBTTtnQkFDSCxhQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzVCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLGNBQWMsR0FBRyxVQUFDLEdBQWM7WUFDaEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ3JDLElBQUksR0FBRyxFQUFFO2dCQUNMLFVBQVU7Z0JBQ1YsZUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQztnQkFDNUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQVEsQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsa0JBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO2FBQ3pFO1FBQ0wsQ0FBQyxDQUFDO1FBRUYsSUFBSSxhQUFhLEdBQUc7WUFDaEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN2QixlQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQTtRQUVELGFBQUssQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsZUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLHlCQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDdEgsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQWhLQSxBQWdLQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVDdHIgZnJvbSBcIi4vR2FtZUN0clwiO1xyXG5pbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi9Db2Nvc1pcIjtcclxuaW1wb3J0IENvbnN0YW50LCB7IFBhZ2VOYW1lLCBHYW1lU3RhdGUsIFBhbmVsTmFtZSB9IGZyb20gXCIuL0NvbnN0YW50XCI7XHJcbmltcG9ydCBNc2cgZnJvbSBcIi4vTXNnXCI7XHJcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi1wbHVnaW4vU2NyaXB0cy9VdGlsc1wiO1xyXG5pbXBvcnQgWVpfQ29uc3RhbnQsIHsgTGV2ZWxTdGF0dXMsIFlaX1Jld2FyZCB9IGZyb20gXCIuLi8uLi9jb21tb24tcGx1Z2luL1NjcmlwdHMvWVpfQ29uc3RhbnRcIjtcclxuaW1wb3J0IFlaX0xvY2FsU3RvcmFnZSBmcm9tIFwiLi4vLi4vY29tbW9uLXBsdWdpbi9TY3JpcHRzL1laX0xvY2FsU3RvcmFnZVwiO1xyXG5pbXBvcnQge3VwZ3JhZGVNZ3J9IGZyb20gXCIuLi9HYW1lL1VwZ3JhZGVNZ3JcIlxyXG4vLyBAdHMtaWdub3JlXHJcbmNvbnN0IGkxOG4gPSByZXF1aXJlKCdMYW5ndWFnZURhdGEnKTtcclxuXHJcbi8qKlxyXG4gKiDmuLjmiI/nrqHnkIZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNZ3Ige1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0OiBHYW1lTWdyO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdCgpOiBHYW1lTWdyIHtcclxuICAgICAgICBpZiAoIUdhbWVNZ3IuX2luc3QpIHtcclxuICAgICAgICAgICAgR2FtZU1nci5faW5zdCA9IG5ldyBHYW1lTWdyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBHYW1lTWdyLl9pbnN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfc3RhdGU6IEdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5Ob25lO1xyXG4gICAgcHVibGljIGdldCBTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IFN0YXRlKHZhbHVlOiBHYW1lU3RhdGUpIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dhbWVDdHI6IEdhbWVDdHIgPSBuZXcgR2FtZUN0cigpOztcclxuICAgIHB1YmxpYyBnZXQgZ2FtZUN0cigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZUN0cjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdhbWVTdGFydFRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNhblRyeTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGNhbkdhbWU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4vmuLjmiI9cclxuICAgICAqIEBwYXJhbSDlhbPljaFJRFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2FtZVN0YXJ0KGxldmVsSWQ6IG51bWJlcikge1xyXG4gICAgICAgIFlaX0xvY2FsU3RvcmFnZS5zZXRJdGVtKFlaX0NvbnN0YW50LlNUX1JFRF9CQUdfUFJPR1JFU1MsICcwJyk7XHJcbiAgICAgICAgY29jb3N6LmN1ckxldmVsID0gbGV2ZWxJZDtcclxuICAgICAgICAvLyDph43nva5cclxuICAgICAgICBpZiAodGhpcy5jYW5UcnkpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5UcnkgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lQ3RyLmN1clVzZVNraW5JZCA9IC0xO1xyXG4gICAgICAgICAgICAvLyDog73lkKblvLnor5XnlKhcclxuICAgICAgICAgICAgaWYgKGNvY29zei5pc1Nob3dBZCAmJiBjb2Nvc3ouaXNBRE9OICYmIChjb2Nvc3ouaXNEZUJ1ZyB8fCB1dGlscy5pc1Nob3dUcnlTa2luKGxldmVsSWQpKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlTGV2ZWwgPSBjb2Nvc3ouZGF0YU1nci5nZXRHdW5JbmZvKGNvY29zei5kYXRhTWdyLkN1clJhbmdlKS5MZXZlbDtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41ICYmIChyYW5nZUxldmVsIDwgMykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmrablmajljYfnuqflvLnnqpdcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhbmVsKFBhbmVsTmFtZS5VSVdlYXBvbkxldmVsUGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDnmq7ogqTor5XnlKjlvLnnqpdcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb2Nvc3oudWlNZ3Iub3BlblBhbmVsKFBhbmVsTmFtZS5VSVRyeVNraW5QYW5lbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g6L+b5YWl5ri45oiPXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY2FuR2FtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5HYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkR2FtZVNjZW5lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6IO95ZCm6L+b5YWl5ri45oiPXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jYW5HYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuR2FtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkR2FtZVNjZW5lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRHYW1lU2NlbmUoKSB7XHJcbiAgICAgICAgLy8g5L2/55So55qu6IKkXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUN0ci5jdXJVc2VTa2luSWQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUN0ci5jdXJVc2VTa2luSWQgPSBjb2Nvc3ouZGF0YU1nci5DdXJTa2luSWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiK5oql5ri45oiP5byA5aeLXHJcbiAgICAgICAgdXRpbHMuU3RhcnRHYW1lKGNvY29zei5nZXRMZXZlbElkKCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgLy/ov5vlhaXmuLjmiI/lnLrmma9cclxuICAgICAgICBjb2Nvc3ouc2NlbmVNZ3IubG9hZFNjZW5lKFwiR2FtZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNhblRyeSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuR2FtZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhbWVQcmVwYXJlKCk7XHJcbiAgICAgICAgICAgIC8v5pi+56S66L+H5bqm6aG16Z2iXHJcbiAgICAgICAgICAgIGNvY29zei51aU1nci5vcGVuUGFnZShQYWdlTmFtZS5VSUdhbWVMb2FkaW5nUGFnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOa4uOaIj+mihOWKoOi9vSAqL1xyXG4gICAgcHJpdmF0ZSBfZ2FtZVByZXBhcmUoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5TdGF0ZSA9IEdhbWVTdGF0ZS5QcmVwYXJlO1xyXG4gICAgICAgICAgICAvL+iwg+eUqOa4uOaIj+WIneWni+WMllxyXG4gICAgICAgICAgICB0aGlzLmdhbWVDdHIuaW5pdCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwiZXJybyA+PlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIC8vIOi1hOa6kOayoeacieWHhuWkh+WlvSwg5peg5rOV6L+b5YWl5ri45oiPXHJcbiAgICAgICAgICAgIGNvY29zei5zY2VuZU1nci5sb2FkU2NlbmUoXCJIb21lXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvY29zei51aU1nci5vcGVuUGFnZShQYWdlTmFtZS5VSUhvbWVQYWdlKTtcclxuICAgICAgICAgICAgICAgIE1zZy5TaG93KGkxOG4udChcIm1zZy5uZXRfZXJyb3JcIikpOy8v5b2T5YmN572R57uc54q25oCB5LiN5L2z77yM6K+36YeN5ZCv5ri45oiPXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5ri45oiP6IOc5YipICovXHJcbiAgICBwdWJsaWMgZ2FtZVN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgY2MubG9nKCfmuLjmiI/og5zliKkhJyk7XHJcbiAgICAgICAgdGhpcy5TdGF0ZSA9IEdhbWVTdGF0ZS5TdWNjZXNzO1xyXG4gICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5RWZmZWN0V2lubmVyKCk7XHJcbiAgICAgICAgLy8g5LiK5oql5ri45oiP5pe26Ze0XHJcbiAgICAgICAgbGV0IGdhbWVUaW1lID0gTWF0aC5yb3VuZCgobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLmdhbWVTdGFydFRpbWUpIC8gMTAwMCAvIDYwKTtcclxuICAgICAgICB1dGlscy5TZW5kRXZlbnQoXCLmuLjmiI/ml7bpl7Q6XCIgKyBnYW1lVGltZSArIFwi5YiG6ZKfXCIpO1xyXG4gICAgICAgIC8v5L+d5a2Y5YWz5Y2h6Kej6ZSB5pWw5o2uXHJcbiAgICAgICAgbGV0IHJld2FyZENhbGxGdW5jID0gKHJlczogWVpfUmV3YXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuiOt+WPlua/gOWKsee7hOS7tuWlluWKsStcIiArIHJlcy5yZXdhcmRWYWx1ZSlcclxuICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50ICs9IHJlcy5yZXdhcmRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX0dBTUVfTE9HSUMsIHsgdHlwZTogQ29uc3RhbnQuRV9DT0lOX0NIQU5HRSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBjbG9zZUNhbGxGdW5jID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5sb2coXCLmv4DlirHnu4Tku7blhbPpl63vvIHvvIHvvIHvvIHvvIHvvIFcIik7XHJcbiAgICAgICAgICAgIGNvY29zei51aU1nci5vcGVuUGFnZShQYWdlTmFtZS5VSU92ZXJQYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5pi+56S657uT566X5YmN5bm/5ZGKXHJcbiAgICAgICAgdXRpbHMuYWRNYW5hZ2VyLnNob3dCZWZvckdhbWVPdmVyQWQoY29jb3N6LmdldExldmVsSWQoKSwgTGV2ZWxTdGF0dXMuR2FtZVdpbiwgMTAwLCBjbG9zZUNhbGxGdW5jLCByZXdhcmRDYWxsRnVuYyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmuLjmiI/lpLHotKUgKi9cclxuICAgIHB1YmxpYyBnYW1lRmFpbGVkKCkge1xyXG4gICAgICAgIGNjLmxvZygn5ri45oiP5aSx6LSlIScpO1xyXG4gICAgICAgIHRoaXMuU3RhdGUgPSBHYW1lU3RhdGUuRmFpbGVkO1xyXG4gICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5RWZmZWN0RmFpbGVkKCk7XHJcbiAgICAgICAgLy8g5LiK5oql5ri45oiP5pe26Ze0XHJcbiAgICAgICAgbGV0IGdhbWVUaW1lID0gTWF0aC5yb3VuZCgobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLmdhbWVTdGFydFRpbWUpIC8gMTAwMCAvIDYwKTtcclxuICAgICAgICB1dGlscy5TZW5kRXZlbnQoXCLmuLjmiI/ml7bpl7Q6XCIgKyBnYW1lVGltZSArIFwi5YiG6ZKfXCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIuW9k+WJjea4uOaIj+etiee6p+S4ulwiK3VwZ3JhZGVNZ3IuY3VyTGV2ZWwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgbGV0IHVybDogc3RyaW5nID0gQ29uc3RhbnQuV0VCX0xJTkVfVElUTEUgKyAnL3F3ay9jaGFydHMvdXBkYXRlVGhlQ2hhcnRzLycgICsgQ29uc3RhbnQuUEVSU09OX1RQS0tFTiArIFwiL1wiICsgQ29uc3RhbnQuR0FNRV9JRCArIFwiL1wiOyAgIC8v55So5oi3aWTkuI7muLjmiI9pZOebruWJjeS4ujHlkowxXHJcbiAgICAgICAgdXJsICs9IChnYW1lVGltZSAqIDYwICogdXBncmFkZU1nci5jdXJMZXZlbCkudG9TdHJpbmcoKTtcclxuICAgICAgICB1dGlscy5zaG93TG9nKFwi5LiK5oql5pWw5o2uLCB1cmw9XCIsIHVybCk7XHJcbiAgICAgICAgdXRpbHMuY29tbW9tSHR0cFJlcXVlc3QodXJsLCAocmV0LCBqc2RhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJldCkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIuaVsOaNruS4iuaKpeaIkOWKn++8gVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLmlbDmja7kuIrmiqXlpLHotKXvvIFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHJld2FyZENhbGxGdW5jID0gKHJlczogWVpfUmV3YXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuiOt+WPlua/gOWKsee7hOS7tuWlluWKsStcIiArIHJlcy5yZXdhcmRWYWx1ZSlcclxuICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgLy/kv53lrZjlpZblirHlgLzliLDmnKzlnLBcclxuICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkNvaW5Db3VudCArPSByZXMucmV3YXJkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9HQU1FX0xPR0lDLCB7IHR5cGU6IENvbnN0YW50LkVfQ09JTl9DSEFOR0UgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgY2xvc2VDYWxsRnVuYyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY2MubG9nKFwi5r+A5Yqx57uE5Lu25YWz6Zet77yB77yB77yB77yB77yB77yBXCIpO1xyXG4gICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVUlPdmVyUGFnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1dGlscy5hZE1hbmFnZXIuc2hvd0JlZm9yR2FtZU92ZXJBZChjb2Nvc3ouZ2V0TGV2ZWxJZCgpLCBMZXZlbFN0YXR1cy5HYW1lRmFpbCwgNTAsIGNsb3NlQ2FsbEZ1bmMsIHJld2FyZENhbGxGdW5jKTtcclxuICAgIH1cclxufVxyXG4iXX0=