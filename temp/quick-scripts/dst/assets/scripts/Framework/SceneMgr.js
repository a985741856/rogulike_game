
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Framework/SceneMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a162cN35T1OAIoKBFHGNLm8', 'SceneMgr');
// scripts/Framework/SceneMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gameMgr_1 = require("../Game/gameMgr");
var setMap_1 = require("../Game/setMap");
var GuideLayer_1 = require("../UI/GuideLayer");
var CocosZ_1 = require("./CocosZ");
var SceneMgr = /** @class */ (function () {
    function SceneMgr() {
        this._activeScene = "";
        this._timeInterval = 0;
    }
    Object.defineProperty(SceneMgr, "inst", {
        get: function () {
            if (!SceneMgr._inst) {
                SceneMgr._inst = new SceneMgr();
            }
            return SceneMgr._inst;
        },
        enumerable: false,
        configurable: true
    });
    SceneMgr.prototype.loadScene = function (name, onLunch) {
        var _this = this;
        if (this._activeScene == name) {
            var curTime = (new Date()).getTime();
            if (curTime - this._timeInterval < 1000) {
                return;
            }
        }
        this._timeInterval = new Date().getTime();
        // 加载场景开始前
        this.loadBefore(name, function () {
            // 加载场景
            cc.director.loadScene(name, function () {
                _this._activeScene = name;
                onLunch();
                // 加载场景完成后
                _this.loadFinish(name);
            });
        });
    };
    /** 加载场景开始前 */
    SceneMgr.prototype.loadBefore = function (name, call) {
        // 显示加载动画
        if (GuideLayer_1.guideLayer && GuideLayer_1.guideLayer.isValid) {
            if (name == "Home") {
                GuideLayer_1.guideLayer.node.zIndex = cc.macro.MAX_ZINDEX;
                GuideLayer_1.guideLayer.hideFjAni();
                GuideLayer_1.guideLayer.showBgAni();
            }
            else if (name == "Game") {
                console.log(CocosZ_1.cocosz.gameMode);
                GuideLayer_1.guideLayer.node.zIndex = cc.macro.MAX_ZINDEX;
                if ([5, 7].includes(CocosZ_1.cocosz.gameMode)) {
                    // 夺旗模式
                    GuideLayer_1.guideLayer.hideFjAni();
                    GuideLayer_1.guideLayer.showBgAni();
                }
                else {
                    GuideLayer_1.guideLayer.hideBgAni();
                    GuideLayer_1.guideLayer.showFjAni();
                }
            }
        }
        // 跳转前释放
        if (name == "Home") {
            // 逐帧释放关卡节点
            if (gameMgr_1.gameMgr && gameMgr_1.gameMgr.map && gameMgr_1.gameMgr.map.isValid) {
                var mapTs_1 = gameMgr_1.gameMgr.map.getComponent(setMap_1.default);
                if (mapTs_1) {
                    setTimeout(function () { mapTs_1.release(call); }, 100);
                    return;
                }
            }
        }
        call && call();
    };
    /** 加载场景完成后 */
    SceneMgr.prototype.loadFinish = function (name) {
        if (name == "Home") {
            // 加载动画(zindex)
            if (GuideLayer_1.guideLayer && GuideLayer_1.guideLayer.isValid) {
                GuideLayer_1.guideLayer.node.zIndex = cc.macro.MIN_ZINDEX;
            }
            // 释放资源
            // this.releaseRes();
        }
        else if (name == "Game") {
            if (GuideLayer_1.guideLayer && GuideLayer_1.guideLayer.isValid) {
                GuideLayer_1.guideLayer.node.zIndex = cc.macro.MIN_ZINDEX;
            }
        }
        // 刷新背景音效
        CocosZ_1.cocosz.audioMgr.playBgm();
    };
    /** 释放游戏资源 */
    SceneMgr.prototype.releaseRes = function () {
        // 释放游戏音效
        var audio_game = [];
        CocosZ_1.cocosz.getDirWithPath("audio_game", cc.AudioClip, audio_game);
        CocosZ_1.cocosz.resMgr.releaseResArray(audio_game, cc.AudioClip);
        if (6 == CocosZ_1.cocosz.gameMode || 8 == CocosZ_1.cocosz.gameMode) {
            // 释放地下城音效
            var audio_zombie = [];
            CocosZ_1.cocosz.getDirWithPath("audio_zombie", cc.AudioClip, audio_zombie);
            CocosZ_1.cocosz.resMgr.releaseResArray(audio_zombie, cc.AudioClip);
            // 释放僵尸预制体
            var prefab_zombie = [];
            CocosZ_1.cocosz.getDirWithPath("prefab_zombie", cc.Prefab, prefab_zombie);
            CocosZ_1.cocosz.resMgr.releaseResArray(prefab_zombie, cc.Prefab);
            // 释放技能预制体
            var prefab_zombie_skill = [];
            CocosZ_1.cocosz.getDirWithPath("prefab_zombie_skill", cc.Prefab, prefab_zombie_skill);
            CocosZ_1.cocosz.resMgr.releaseResArray(prefab_zombie_skill, cc.Prefab);
            // 释放技能图片
            var tex_zombie = [];
            CocosZ_1.cocosz.getDirWithPath("tex_zombie", cc.SpriteFrame, tex_zombie);
            CocosZ_1.cocosz.resMgr.releaseResArray(tex_zombie, cc.SpriteFrame);
        }
    };
    return SceneMgr;
}());
exports.default = SceneMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRnJhbWV3b3JrXFxTY2VuZU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEwQztBQUMxQyx5Q0FBb0M7QUFDcEMsK0NBQTBEO0FBQzFELG1DQUFrQztBQUVsQztJQUFBO1FBVVksaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsa0JBQWEsR0FBVyxDQUFDLENBQUM7SUFzR3RDLENBQUM7SUE5R0csc0JBQWtCLGdCQUFJO2FBQXRCO1lBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7Z0JBQ2pCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQzthQUNuQztZQUNELE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUtNLDRCQUFTLEdBQWhCLFVBQWlCLElBQVksRUFBRSxPQUFpQjtRQUFoRCxpQkFrQkM7UUFqQkcsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRTtZQUMzQixJQUFJLE9BQU8sR0FBVyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM3QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksRUFBRTtnQkFDckMsT0FBTzthQUNWO1NBQ0o7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUMsVUFBVTtRQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQ2xCLE9BQU87WUFDUCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3hCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixPQUFPLEVBQUUsQ0FBQztnQkFDVixVQUFVO2dCQUNWLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7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RUFBRTtZQUM5QyxVQUFVO1lBQ1YsSUFBSSxZQUFZLEdBQVEsRUFBRSxDQUFDO1lBQzNCLGVBQU0sQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDbEUsZUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxRCxVQUFVO1lBQ1YsSUFBSSxhQUFhLEdBQVEsRUFBRSxDQUFDO1lBQzVCLGVBQU0sQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDakUsZUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4RCxVQUFVO1lBQ1YsSUFBSSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7WUFDbEMsZUFBTSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFDN0UsZUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlELFNBQVM7WUFDVCxJQUFJLFVBQVUsR0FBUSxFQUFFLENBQUM7WUFDekIsZUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNoRSxlQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzdEO0lBQ0wsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQWpIQSxBQWlIQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2FtZU1nciB9IGZyb20gXCIuLi9HYW1lL2dhbWVNZ3JcIjtcclxuaW1wb3J0IHNldE1hcCBmcm9tIFwiLi4vR2FtZS9zZXRNYXBcIjtcclxuaW1wb3J0IEd1aWRlTGF5ZXIsIHsgZ3VpZGVMYXllciB9IGZyb20gXCIuLi9VSS9HdWlkZUxheWVyXCI7XHJcbmltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuL0NvY29zWlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVNZ3Ige1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0OiBTY2VuZU1ncjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3QoKTogU2NlbmVNZ3Ige1xyXG4gICAgICAgIGlmICghU2NlbmVNZ3IuX2luc3QpIHtcclxuICAgICAgICAgICAgU2NlbmVNZ3IuX2luc3QgPSBuZXcgU2NlbmVNZ3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNjZW5lTWdyLl9pbnN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2FjdGl2ZVNjZW5lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBfdGltZUludGVydmFsOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBsb2FkU2NlbmUobmFtZTogc3RyaW5nLCBvbkx1bmNoOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmVTY2VuZSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJUaW1lOiBudW1iZXIgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBpZiAoY3VyVGltZSAtIHRoaXMuX3RpbWVJbnRlcnZhbCA8IDEwMDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl90aW1lSW50ZXJ2YWwgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAvLyDliqDovb3lnLrmma/lvIDlp4vliY1cclxuICAgICAgICB0aGlzLmxvYWRCZWZvcmUobmFtZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyDliqDovb3lnLrmma9cclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKG5hbWUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FjdGl2ZVNjZW5lID0gbmFtZTtcclxuICAgICAgICAgICAgICAgIG9uTHVuY2goKTtcclxuICAgICAgICAgICAgICAgIC8vIOWKoOi9veWcuuaZr+WujOaIkOWQjlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRmluaXNoKG5hbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Yqg6L295Zy65pmv5byA5aeL5YmNICovXHJcbiAgICBsb2FkQmVmb3JlKG5hbWU6IHN0cmluZywgY2FsbDogRnVuY3Rpb24pIHtcclxuICAgICAgICAvLyDmmL7npLrliqDovb3liqjnlLtcclxuICAgICAgICBpZiAoZ3VpZGVMYXllciAmJiBndWlkZUxheWVyLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgaWYgKG5hbWUgPT0gXCJIb21lXCIpIHtcclxuICAgICAgICAgICAgICAgIGd1aWRlTGF5ZXIubm9kZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xyXG4gICAgICAgICAgICAgICAgZ3VpZGVMYXllci5oaWRlRmpBbmkoKTtcclxuICAgICAgICAgICAgICAgIGd1aWRlTGF5ZXIuc2hvd0JnQW5pKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PSBcIkdhbWVcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29jb3N6LmdhbWVNb2RlKTtcclxuICAgICAgICAgICAgICAgIGd1aWRlTGF5ZXIubm9kZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xyXG4gICAgICAgICAgICAgICAgaWYgKFs1LCA3XS5pbmNsdWRlcyhjb2Nvc3ouZ2FtZU1vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5aS65peX5qih5byPXHJcbiAgICAgICAgICAgICAgICAgICAgZ3VpZGVMYXllci5oaWRlRmpBbmkoKTtcclxuICAgICAgICAgICAgICAgICAgICBndWlkZUxheWVyLnNob3dCZ0FuaSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBndWlkZUxheWVyLmhpZGVCZ0FuaSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGd1aWRlTGF5ZXIuc2hvd0ZqQW5pKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6Lez6L2s5YmN6YeK5pS+XHJcbiAgICAgICAgaWYgKG5hbWUgPT0gXCJIb21lXCIpIHtcclxuICAgICAgICAgICAgLy8g6YCQ5bin6YeK5pS+5YWz5Y2h6IqC54K5XHJcbiAgICAgICAgICAgIGlmIChnYW1lTWdyICYmIGdhbWVNZ3IubWFwICYmIGdhbWVNZ3IubWFwLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBtYXBUcyA9IGdhbWVNZ3IubWFwLmdldENvbXBvbmVudChzZXRNYXApO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hcFRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IG1hcFRzLnJlbGVhc2UoY2FsbCkgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbCAmJiBjYWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWKoOi9veWcuuaZr+WujOaIkOWQjiAqL1xyXG4gICAgbG9hZEZpbmlzaChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAobmFtZSA9PSBcIkhvbWVcIikge1xyXG4gICAgICAgICAgICAvLyDliqDovb3liqjnlLsoemluZGV4KVxyXG4gICAgICAgICAgICBpZiAoZ3VpZGVMYXllciAmJiBndWlkZUxheWVyLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIGd1aWRlTGF5ZXIubm9kZS56SW5kZXggPSBjYy5tYWNyby5NSU5fWklOREVYO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOmHiuaUvui1hOa6kFxyXG4gICAgICAgICAgICAvLyB0aGlzLnJlbGVhc2VSZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PSBcIkdhbWVcIikge1xyXG4gICAgICAgICAgICBpZiAoZ3VpZGVMYXllciAmJiBndWlkZUxheWVyLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIGd1aWRlTGF5ZXIubm9kZS56SW5kZXggPSBjYy5tYWNyby5NSU5fWklOREVYO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWIt+aWsOiDjOaZr+mfs+aViFxyXG4gICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5QmdtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOmHiuaUvua4uOaIj+i1hOa6kCAqL1xyXG4gICAgcmVsZWFzZVJlcygpIHtcclxuICAgICAgICAvLyDph4rmlL7muLjmiI/pn7PmlYhcclxuICAgICAgICBsZXQgYXVkaW9fZ2FtZTogYW55ID0gW107XHJcbiAgICAgICAgY29jb3N6LmdldERpcldpdGhQYXRoKFwiYXVkaW9fZ2FtZVwiLCBjYy5BdWRpb0NsaXAsIGF1ZGlvX2dhbWUpO1xyXG4gICAgICAgIGNvY29zei5yZXNNZ3IucmVsZWFzZVJlc0FycmF5KGF1ZGlvX2dhbWUsIGNjLkF1ZGlvQ2xpcCk7XHJcblxyXG4gICAgICAgIGlmICg2ID09IGNvY29zei5nYW1lTW9kZSB8fCA4ID09IGNvY29zei5nYW1lTW9kZSkge1xyXG4gICAgICAgICAgICAvLyDph4rmlL7lnLDkuIvln47pn7PmlYhcclxuICAgICAgICAgICAgbGV0IGF1ZGlvX3pvbWJpZTogYW55ID0gW107XHJcbiAgICAgICAgICAgIGNvY29zei5nZXREaXJXaXRoUGF0aChcImF1ZGlvX3pvbWJpZVwiLCBjYy5BdWRpb0NsaXAsIGF1ZGlvX3pvbWJpZSk7XHJcbiAgICAgICAgICAgIGNvY29zei5yZXNNZ3IucmVsZWFzZVJlc0FycmF5KGF1ZGlvX3pvbWJpZSwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICAgICAgLy8g6YeK5pS+5YO15bC46aKE5Yi25L2TXHJcbiAgICAgICAgICAgIGxldCBwcmVmYWJfem9tYmllOiBhbnkgPSBbXTtcclxuICAgICAgICAgICAgY29jb3N6LmdldERpcldpdGhQYXRoKFwicHJlZmFiX3pvbWJpZVwiLCBjYy5QcmVmYWIsIHByZWZhYl96b21iaWUpO1xyXG4gICAgICAgICAgICBjb2Nvc3oucmVzTWdyLnJlbGVhc2VSZXNBcnJheShwcmVmYWJfem9tYmllLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICAvLyDph4rmlL7mioDog73pooTliLbkvZNcclxuICAgICAgICAgICAgbGV0IHByZWZhYl96b21iaWVfc2tpbGw6IGFueSA9IFtdO1xyXG4gICAgICAgICAgICBjb2Nvc3ouZ2V0RGlyV2l0aFBhdGgoXCJwcmVmYWJfem9tYmllX3NraWxsXCIsIGNjLlByZWZhYiwgcHJlZmFiX3pvbWJpZV9za2lsbCk7XHJcbiAgICAgICAgICAgIGNvY29zei5yZXNNZ3IucmVsZWFzZVJlc0FycmF5KHByZWZhYl96b21iaWVfc2tpbGwsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgIC8vIOmHiuaUvuaKgOiDveWbvueJh1xyXG4gICAgICAgICAgICBsZXQgdGV4X3pvbWJpZTogYW55ID0gW107XHJcbiAgICAgICAgICAgIGNvY29zei5nZXREaXJXaXRoUGF0aChcInRleF96b21iaWVcIiwgY2MuU3ByaXRlRnJhbWUsIHRleF96b21iaWUpO1xyXG4gICAgICAgICAgICBjb2Nvc3oucmVzTWdyLnJlbGVhc2VSZXNBcnJheSh0ZXhfem9tYmllLCBjYy5TcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==