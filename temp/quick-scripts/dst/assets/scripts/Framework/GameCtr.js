
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Framework/GameCtr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '127578MG9RJ17mctwhLeqSx', 'GameCtr');
// scripts/Framework/GameCtr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constant_1 = require("./Constant");
var CocosZ_1 = require("./CocosZ");
var gameMgr_1 = require("../Game/gameMgr");
/**
 * 游戏控制类
 * 实现游戏的基础逻辑
 */
var GameCtr = /** @class */ (function () {
    function GameCtr() {
        this.curUseSkinId = -1; // 使用皮肤id
        this.loadProgress = 0; // 总加载进度
        this._loadMapPro = 0; // 地图加载进度
        this._totalCount = 0; // 资源总数
        this._compCount = 0; // 资源完成数量
        this._pathBack = "";
        this._prefabBack = null;
    }
    //游戏初始化
    GameCtr.prototype.init = function () {
        this.loadProgress = 0;
        this._loadMapPro = 0;
        this._totalCount = 0;
        this._compCount = 0;
        this.loadRes();
    };
    GameCtr.prototype.updateLoadRes = function () {
        this.loadProgress = (this._loadMapPro + this._compCount / this._totalCount) / 2;
        // 开启地图加载
        if (this._compCount >= this._totalCount && this._loadMapPro == 0) {
            this._loadMapPro = 0.01;
            this.loadMap();
        }
        cc.game.emit(Constant_1.default.E_GAME_LOGIC, { type: Constant_1.default.E_UPDATE_PROGRESS, data: this.loadProgress });
    };
    GameCtr.prototype.loadRes = function () {
        var _this = this;
        // 游戏音效
        var mess1 = [];
        // 地下城音效
        var mess2 = [];
        // 地下城技能预制体
        var mess3 = [];
        // 游戏音效
        CocosZ_1.cocosz.getDirWithPath("audio_game", cc.AudioClip, mess1);
        CocosZ_1.cocosz.resMgr.loadAndCacheResArray(mess1, cc.AudioClip, null, function () {
            _this._compCount++;
            _this.updateLoadRes();
        });
        // 地下城
        if (6 == CocosZ_1.cocosz.gameMode || 8 == CocosZ_1.cocosz.gameMode) {
            // 音效
            CocosZ_1.cocosz.getDirWithPath("audio_zombie", cc.AudioClip, mess2);
            CocosZ_1.cocosz.resMgr.loadAndCacheResArray(mess2, cc.AudioClip, null, function () {
                _this._compCount++;
                _this.updateLoadRes();
            });
            // 预制体
            CocosZ_1.cocosz.getDirWithPath("prefab_zombie_skill", cc.Prefab, mess3);
            CocosZ_1.cocosz.resMgr.loadAndCacheResArray(mess3, cc.Prefab, null, function () {
                _this._compCount++;
                _this.updateLoadRes();
            });
        }
        // 资源总数
        this._totalCount = mess1.length + mess2.length + mess3.length;
    };
    GameCtr.prototype.loadMap = function () {
        var _this = this;
        var path = "maps/mapzombie";
        // 释放地图资源
        if (this._pathBack != path && this._prefabBack && this._prefabBack.isValid) {
            cc.assetManager.releaseAsset(this._prefabBack);
        }
        // 加载地图
        CocosZ_1.cocosz.resMgr.loadRes(path, cc.Prefab, (function (cur, total) {
            if (cur / total > _this._loadMapPro) {
                _this._loadMapPro = cur / total;
            }
            if (_this._loadMapPro > 0.99)
                _this._loadMapPro = 0.99;
            _this.updateLoadRes();
        }), (function (err, res) {
            if (err) {
                console.log(err);
                CocosZ_1.cocosz.sceneMgr.loadScene("Home", (function () {
                    CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UIHomePage);
                }));
            }
            else {
                _this._pathBack = path;
                _this._prefabBack = res;
                gameMgr_1.gameMgr.map = cc.instantiate(res);
                gameMgr_1.gameMgr.initPos();
                gameMgr_1.gameMgr.mapSize = gameMgr_1.gameMgr.map.getContentSize();
                gameMgr_1.gameMgr.node.addChild(gameMgr_1.gameMgr.map, -5);
                _this._loadMapPro = 1;
                _this.updateLoadRes();
            }
        }));
    };
    return GameCtr;
}());
exports.default = GameCtr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRnJhbWV3b3JrXFxHYW1lQ3RyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXNFO0FBQ3RFLG1DQUFrQztBQUNsQywyQ0FBMEM7QUFHMUM7OztHQUdHO0FBRUg7SUFBQTtRQUNXLGlCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQSxTQUFTO1FBRW5DLGlCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUEsUUFBUTtRQUNoQyxnQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFBLFNBQVM7UUFDakMsZ0JBQVcsR0FBVyxDQUFDLENBQUMsQ0FBQSxPQUFPO1FBQy9CLGVBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQSxTQUFTO1FBRWhDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBYyxJQUFJLENBQUM7SUFzRjFDLENBQUM7SUFwRkcsT0FBTztJQUNBLHNCQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELCtCQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEYsU0FBUztRQUNULElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxFQUFFO1lBQzlELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxPQUFP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LEdBQUcsRUFBRSxHQUFRO1lBQ2YsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsZUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQy9CLGVBQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLG1CQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQy9DLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDUDtpQkFDSTtnQkFDRCxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsS0FBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7Z0JBQ3ZCLGlCQUFPLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLGlCQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2xCLGlCQUFPLENBQUMsT0FBTyxHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUMvQyxpQkFBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsS0FBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN4QjtRQUNMLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDUCxDQUFDO0lBQ0wsY0FBQztBQUFELENBL0ZBLEFBK0ZDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uc3RhbnQsIHsgR2FtZVN0YXRlLCBQYWdlTmFtZSwgUGFuZWxOYW1lIH0gZnJvbSBcIi4vQ29uc3RhbnRcIjtcclxuaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4vQ29jb3NaXCI7XHJcbmltcG9ydCB7IGdhbWVNZ3IgfSBmcm9tIFwiLi4vR2FtZS9nYW1lTWdyXCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIOa4uOaIj+aOp+WItuexu1xyXG4gKiDlrp7njrDmuLjmiI/nmoTln7rnoYDpgLvovpFcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ3RyIHtcclxuICAgIHB1YmxpYyBjdXJVc2VTa2luSWQ6IG51bWJlciA9IC0xOy8vIOS9v+eUqOearuiCpGlkXHJcblxyXG4gICAgcHVibGljIGxvYWRQcm9ncmVzczogbnVtYmVyID0gMDsvLyDmgLvliqDovb3ov5vluqZcclxuICAgIHByaXZhdGUgX2xvYWRNYXBQcm86IG51bWJlciA9IDA7Ly8g5Zyw5Zu+5Yqg6L296L+b5bqmXHJcbiAgICBwcml2YXRlIF90b3RhbENvdW50OiBudW1iZXIgPSAwOy8vIOi1hOa6kOaAu+aVsFxyXG4gICAgcHJpdmF0ZSBfY29tcENvdW50OiBudW1iZXIgPSAwOy8vIOi1hOa6kOWujOaIkOaVsOmHj1xyXG5cclxuICAgIHByaXZhdGUgX3BhdGhCYWNrOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBfcHJlZmFiQmFjazogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICAvL+a4uOaIj+WIneWni+WMllxyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkUHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIHRoaXMuX2xvYWRNYXBQcm8gPSAwO1xyXG4gICAgICAgIHRoaXMuX3RvdGFsQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX2NvbXBDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5sb2FkUmVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTG9hZFJlcygpIHtcclxuICAgICAgICB0aGlzLmxvYWRQcm9ncmVzcyA9ICh0aGlzLl9sb2FkTWFwUHJvICsgdGhpcy5fY29tcENvdW50IC8gdGhpcy5fdG90YWxDb3VudCkgLyAyO1xyXG4gICAgICAgIC8vIOW8gOWQr+WcsOWbvuWKoOi9vVxyXG4gICAgICAgIGlmICh0aGlzLl9jb21wQ291bnQgPj0gdGhpcy5fdG90YWxDb3VudCAmJiB0aGlzLl9sb2FkTWFwUHJvID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZE1hcFBybyA9IDAuMDE7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZE1hcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9HQU1FX0xPR0lDLCB7IHR5cGU6IENvbnN0YW50LkVfVVBEQVRFX1BST0dSRVNTLCBkYXRhOiB0aGlzLmxvYWRQcm9ncmVzcyB9KVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRSZXMoKSB7XHJcbiAgICAgICAgLy8g5ri45oiP6Z+z5pWIXHJcbiAgICAgICAgbGV0IG1lc3MxOiBhbnkgPSBbXTtcclxuICAgICAgICAvLyDlnLDkuIvln47pn7PmlYhcclxuICAgICAgICBsZXQgbWVzczI6IGFueSA9IFtdO1xyXG4gICAgICAgIC8vIOWcsOS4i+WfjuaKgOiDvemihOWItuS9k1xyXG4gICAgICAgIGxldCBtZXNzMzogYW55ID0gW107XHJcblxyXG4gICAgICAgIC8vIOa4uOaIj+mfs+aViFxyXG4gICAgICAgIGNvY29zei5nZXREaXJXaXRoUGF0aChcImF1ZGlvX2dhbWVcIiwgY2MuQXVkaW9DbGlwLCBtZXNzMSk7XHJcbiAgICAgICAgY29jb3N6LnJlc01nci5sb2FkQW5kQ2FjaGVSZXNBcnJheShtZXNzMSwgY2MuQXVkaW9DbGlwLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbXBDb3VudCsrO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxvYWRSZXMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyDlnLDkuIvln45cclxuICAgICAgICBpZiAoNiA9PSBjb2Nvc3ouZ2FtZU1vZGUgfHwgOCA9PSBjb2Nvc3ouZ2FtZU1vZGUpIHtcclxuICAgICAgICAgICAgLy8g6Z+z5pWIXHJcbiAgICAgICAgICAgIGNvY29zei5nZXREaXJXaXRoUGF0aChcImF1ZGlvX3pvbWJpZVwiLCBjYy5BdWRpb0NsaXAsIG1lc3MyKTtcclxuICAgICAgICAgICAgY29jb3N6LnJlc01nci5sb2FkQW5kQ2FjaGVSZXNBcnJheShtZXNzMiwgY2MuQXVkaW9DbGlwLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21wQ291bnQrKztcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTG9hZFJlcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8g6aKE5Yi25L2TXHJcbiAgICAgICAgICAgIGNvY29zei5nZXREaXJXaXRoUGF0aChcInByZWZhYl96b21iaWVfc2tpbGxcIiwgY2MuUHJlZmFiLCBtZXNzMyk7XHJcbiAgICAgICAgICAgIGNvY29zei5yZXNNZ3IubG9hZEFuZENhY2hlUmVzQXJyYXkobWVzczMsIGNjLlByZWZhYiwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29tcENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxvYWRSZXMoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6LWE5rqQ5oC75pWwXHJcbiAgICAgICAgdGhpcy5fdG90YWxDb3VudCA9IG1lc3MxLmxlbmd0aCArIG1lc3MyLmxlbmd0aCArIG1lc3MzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTWFwKCkge1xyXG4gICAgICAgIGxldCBwYXRoID0gXCJtYXBzL21hcHpvbWJpZVwiO1xyXG4gICAgICAgIC8vIOmHiuaUvuWcsOWbvui1hOa6kFxyXG4gICAgICAgIGlmICh0aGlzLl9wYXRoQmFjayAhPSBwYXRoICYmIHRoaXMuX3ByZWZhYkJhY2sgJiYgdGhpcy5fcHJlZmFiQmFjay5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5yZWxlYXNlQXNzZXQodGhpcy5fcHJlZmFiQmFjaylcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Yqg6L295Zyw5Zu+XHJcbiAgICAgICAgY29jb3N6LnJlc01nci5sb2FkUmVzKHBhdGgsIGNjLlByZWZhYiwgKChjdXIsIHRvdGFsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjdXIgLyB0b3RhbCA+IHRoaXMuX2xvYWRNYXBQcm8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRNYXBQcm8gPSBjdXIgLyB0b3RhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fbG9hZE1hcFBybyA+IDAuOTkpIHRoaXMuX2xvYWRNYXBQcm8gPSAwLjk5O1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxvYWRSZXMoKTtcclxuICAgICAgICB9KSwgKChlcnIsIHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouc2NlbmVNZ3IubG9hZFNjZW5lKFwiSG9tZVwiLCAoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvY29zei51aU1nci5vcGVuUGFnZShQYWdlTmFtZS5VSUhvbWVQYWdlKTtcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhdGhCYWNrID0gcGF0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ByZWZhYkJhY2sgPSByZXM7XHJcbiAgICAgICAgICAgICAgICBnYW1lTWdyLm1hcCA9IGNjLmluc3RhbnRpYXRlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBnYW1lTWdyLmluaXRQb3MoKTtcclxuICAgICAgICAgICAgICAgIGdhbWVNZ3IubWFwU2l6ZSA9IGdhbWVNZ3IubWFwLmdldENvbnRlbnRTaXplKCk7XHJcbiAgICAgICAgICAgICAgICBnYW1lTWdyLm5vZGUuYWRkQ2hpbGQoZ2FtZU1nci5tYXAsIC01KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRNYXBQcm8gPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMb2FkUmVzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSlcclxuICAgIH1cclxufVxyXG4iXX0=