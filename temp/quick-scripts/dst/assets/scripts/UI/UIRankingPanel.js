
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI/UIRankingPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4321coAQJVAirFQ0UEXn1GJ', 'UIRankingPanel');
// scripts/UI/UIRankingPanel.ts

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
exports.loadRes = void 0;
var Utils_1 = require("../../common-plugin/Scripts/Utils");
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var TweenEffect_1 = require("../Framework/TweenEffect");
var UIPage_1 = require("../Framework/UIPage");
var Constant_2 = require("../Framework/Constant");
// @ts-ignore
var i18n = require('LanguageData');
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var loadRes = /** @class */ (function () {
    function loadRes() {
    }
    /**  动态加载资源，可以带回调函数 ，返回promise对象
    *  @param url resources文件路径
    * @param type 资源类型
    * @param callback 回调函数
    */
    loadRes.load_res = function (url, callback) {
        return new Promise(function (resolve, reject) {
            cc.assetManager.loadRemote(url, function (err, res) {
                if (err) {
                    reject(err);
                }
                else {
                    if (callback) {
                        callback(res);
                    }
                    resolve(res);
                }
            });
        });
    };
    return loadRes;
}());
exports.loadRes = loadRes;
var UIRankingPanel = /** @class */ (function (_super) {
    __extends(UIRankingPanel, _super);
    function UIRankingPanel() {
        var _this = _super.call(this, Constant_1.PanelName.UIRankingPanel) || this;
        _this._panel = null;
        _this._btnClose = null;
        _this._rankList = null;
        _this.bg = null;
        _this.timeInterval = null;
        _this.data = [];
        _this.myData = null;
        _this.reward = [];
        _this.loadRewardSp = [];
        _this.loadHeardSp = [];
        _this.isValid() && _this.onLoad();
        return _this;
    }
    UIRankingPanel.prototype.onLoad = function () {
        var self = this;
        this._panel = this._page.getChildByName("Panel");
        this.bg = this._panel.getChildByName("bg");
        this._rankList = this.bg.getChildByName('rankingScrollView').getComponent('list');
        // function A () {
        //     return new Promise(function(resolve, reject){
        var rewardUrl = Constant_2.default.WEB_LINE_TITLE + '/qwk/reward/getRewardList/' + Constant_2.default.GAME_ID; //用户id与游戏id目前为1和1
        Utils_1.utils.commomHttpRequest(rewardUrl, function (rewardRet, rewardJsdata) {
            if (rewardRet) {
                var rewardDatajson = JSON.parse(rewardJsdata);
                console.log(rewardDatajson);
                self.reward = rewardDatajson.data;
                // self.loadspFunc();
                // resolve(rewardDatajson);
            }
            else {
                Utils_1.utils.showLog("获取奖励数据上报失败！");
            }
        });
        //     })
        // }
        //    function B () {
        //         // do something
        //         return new Promise(function(resolve, reject){
        var url = Constant_2.default.WEB_LINE_TITLE + '/qwk/charts/getTheCharts/' + Constant_2.default.PERSON_TPKKEN + "/" + Constant_2.default.GAME_ID; //用户id与游戏id目前为1和1
        Utils_1.utils.showLog("上报数据, url=", url);
        // setTimeout(function(){
        Utils_1.utils.commomHttpRequest(url, function (ret, jsdata) {
            if (ret) {
                self.changeDataToPerson(jsdata);
                Utils_1.utils.showLog("数据上报成功！");
                self.updatePanel();
                self.updateMyPanel();
                // resolve(jsdata);
            }
            else {
                Utils_1.utils.showLog("数据上报失败！");
            }
        });
        // }, 1000);
        //     })
        // }
        // function C(jsdata) {
        //     return new Promise(function(resolve, reject){
        //         setTimeout(function(){
        //             self.changeDataToPerson(jsdata);
        //             self.updatePanel();
        //             self.updateMyPanel();
        //         }, 1000);
        //     })
        // }
        // A()
        // .then(function(){
        //     return B();
        // })
        // .then(function(jsdata){
        //     return C(jsdata);
        // })
        this.timeInterval = setInterval(function () {
            var lastGameTime = cc.sys.localStorage.getItem("rggame_lastGameTime"); //上一次游戏的时间
            if (!(lastGameTime == null || lastGameTime == undefined || lastGameTime === "")) { //有记录时间
                var checkisover = Utils_1.utils.checkWeeHours(lastGameTime);
                if (checkisover) {
                    var url_1 = Constant_2.default.WEB_LINE_TITLE + '/qwk/charts/getTheCharts/' + Constant_2.default.PERSON_TPKKEN + "/" + Constant_2.default.GAME_ID; //用户id与游戏id目前为1和1
                    Utils_1.utils.showLog("上报数据, url=", url_1);
                    Utils_1.utils.commomHttpRequest(url_1, function (ret, jsdata) {
                        if (ret) {
                            self.changeDataToPerson(jsdata);
                            Utils_1.utils.showLog("数据上报成功！");
                            self.updatePanel();
                            self.updateMyPanel();
                            cc.sys.localStorage.setItem('rggame_lastGameTime', Date.now());
                        }
                        else {
                            Utils_1.utils.showLog("数据上报失败！");
                        }
                    });
                }
            }
            else {
                cc.sys.localStorage.setItem('rggame_lastGameTime', Date.now());
            }
        }.bind(this), 3000);
        var btnNames = ["BtnClose"];
        for (var i = 0; i < btnNames.length; i++) {
            var btn = cc.find(btnNames[i], this._panel);
            if (!btn)
                continue;
            btn.on(cc.Node.EventType.TOUCH_END, this._onBtnClickedHandler, this);
            if (btn.name == "BtnClose") {
                this._btnClose = btn;
            }
        }
    };
    UIRankingPanel.prototype.loadspFunc = function () {
        return __awaiter(this, void 0, void 0, function () {
            function loadFunc(rewardUrl, callback) {
                return new Promise(function (resolve, reject) {
                    cc.assetManager.loadRemote(rewardUrl, function (err, value) {
                        var spriteFram = new cc.SpriteFrame(value);
                        if (callback) {
                            callback(spriteFram);
                        }
                        resolve(spriteFram);
                    });
                });
            }
            var self, _a, _b, _i, i, rewardUrl;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        self = this;
                        _a = [];
                        for (_b in this.reward)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        i = _a[_i];
                        rewardUrl = Constant_2.default.WEB_LINE_TITLE + this.reward[i].goodsImg;
                        return [4 /*yield*/, loadFunc(rewardUrl, function (spriteFram) {
                                self.loadRewardSp.push(spriteFram);
                            })];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UIRankingPanel.prototype.personData = function (idx) {
        var newranknum = idx;
        var newname = 'player' + idx;
        var newpicurl = '';
        var newnumber = 1000 + (idx * 150);
        var rewardurl = '';
        var rewardNum = parseInt((Math.random() * 100).toString());
        var object = new Object();
        object = {
            rankNum: newranknum,
            name: newname,
            picurl: newpicurl,
            number: newnumber,
            rewardurl: rewardurl,
            rewardNum: rewardNum
        };
        return object;
    };
    UIRankingPanel.prototype.updateMyPanel = function () {
        var bottomNode = this.bg.getChildByName('bottomNode');
        var myRanknum = bottomNode.getChildByName('paihangLabel');
        var myFightnum = bottomNode.getChildByName('fightlabel');
        var picNode = bottomNode.getChildByName('headNode').getChildByName('headSprite');
        if (parseInt(this.myData.remark) <= 100) {
            myRanknum.getComponent(cc.Label).string = this.myData.remark.toString();
        }
        else {
            myRanknum.getComponent(cc.Label).string = '暂未上榜';
        }
        myFightnum.getComponent(cc.Label).string = this.myData.combatPower.toString();
        if (picNode.getComponent(cc.Sprite)) {
            var headurl = this.myData.avatar == "" ? "head/head" : Constant_2.default.WEB_LINE_TITLE + this.myData.avatar;
            if (headurl != '') {
                cc.assetManager.loadRemote(headurl, function (err, imageAsset) {
                    if (picNode.getComponent(cc.Sprite) && picNode.getComponent(cc.Sprite).isValid) {
                        var spriteFram = new cc.SpriteFrame(imageAsset);
                        picNode.getComponent(cc.Sprite).spriteFrame = spriteFram;
                    }
                });
            }
            else {
                CocosZ_1.cocosz.resMgr.loadAndCacheRes(headurl, cc.SpriteFrame, null, function (err, res) {
                    if (picNode.getComponent(cc.Sprite) && picNode.getComponent(cc.Sprite).isValid) {
                        picNode.getComponent(cc.Sprite).spriteFrame = res;
                    }
                });
            }
        }
    };
    UIRankingPanel.prototype.changeDataToPerson = function (jsdata) {
        var datajson = JSON.parse(jsdata);
        console.log(datajson);
        this.data = datajson.theCharts;
        this.myData = datajson.myData;
    };
    UIRankingPanel.prototype.loadHeardFunc = function () {
        return __awaiter(this, void 0, void 0, function () {
            function loadFunc(headUrl, callback) {
                return new Promise(function (resolve, reject) {
                    cc.assetManager.loadRemote(headUrl, function (err, value) {
                        var spriteFram = new cc.SpriteFrame(value);
                        if (callback) {
                            callback(spriteFram);
                        }
                        resolve(spriteFram);
                    });
                });
            }
            var self, _a, _b, _i, i, headUrl;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        self = this;
                        _a = [];
                        for (_b in this.data)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        i = _a[_i];
                        headUrl = Constant_2.default.WEB_LINE_TITLE + this.data[i].avatar;
                        return [4 /*yield*/, loadFunc(headUrl, function (spriteFram) {
                                self.loadHeardSp.push(spriteFram);
                            })];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UIRankingPanel.prototype.changeItem = function (idx, data, node) {
        var self = this;
        var rankNode = node.getChildByName('topNode');
        var rankindexNode = node.getChildByName('rankingLabel');
        var rankindexLabel = rankindexNode.getComponent(cc.Label);
        var spr_name = rankNode.getComponent(cc.Sprite);
        rankindexLabel.string = idx;
        rankindexNode.active = true;
        if (idx <= 3) {
            rankindexNode.active = false;
            rankNode.active = true;
            if (spr_name) {
                CocosZ_1.cocosz.resMgr.loadAndCacheRes("ranking/top_" + idx, cc.SpriteFrame, null, function (err, res) {
                    if (spr_name && spr_name.isValid) {
                        spr_name.spriteFrame = res;
                    }
                });
            }
        }
        else {
            rankNode.active = false;
        }
        var head = node.getChildByName('headNode').getChildByName('headSprite').getComponent(cc.Sprite);
        if (head) {
            var headurl = data.avatar == "" ? "head/head" : Constant_2.default.WEB_LINE_TITLE + data.avatar;
            if (headurl != '') {
                cc.assetManager.loadRemote(headurl, function (err, imageAsset) {
                    if (head && head.isValid) {
                        var spriteFram = new cc.SpriteFrame(imageAsset);
                        head.spriteFrame = spriteFram;
                    }
                });
            }
            else {
                CocosZ_1.cocosz.resMgr.loadAndCacheRes(headurl, cc.SpriteFrame, null, function (err, res) {
                    if (head && head.isValid) {
                        head.spriteFrame = res;
                    }
                });
            }
        }
        var nameLabel = node.getChildByName('headNode').getChildByName('nameLabel').getComponent(cc.Label);
        nameLabel.string = data.nikeName;
        var fightLabel = node.getChildByName('fightLabel').getComponent(cc.Label);
        fightLabel.string = data.combatPower;
        var rewardnumNode = node.getChildByName('rewardLabel');
        var rewardSp = node.getChildByName('rewardSp').getComponent(cc.Sprite);
        node.getChildByName('rewardSp').active = false;
        rewardnumNode.active = false;
        var _loop_1 = function (i) {
            if (this_1.reward[i].sort == idx) { //goodsImg
                var rewardUrl = Constant_2.default.WEB_LINE_TITLE + this_1.reward[i].goodsImg;
                cc.assetManager.loadRemote(rewardUrl, function (err, value) {
                    if (rewardSp && rewardSp.isValid) {
                        node.getChildByName('rewardSp').active = true;
                        var spriteFram = new cc.SpriteFrame(value);
                        rewardSp.spriteFrame = spriteFram;
                    }
                    if (self.reward[i].goodsNumber > 1) {
                        rewardnumNode.active = true;
                        rewardnumNode.getComponent(cc.Label).string = 'X' + self.reward[i].goodsNumber;
                    }
                    else {
                        rewardnumNode.active = false;
                    }
                });
            }
        };
        var this_1 = this;
        for (var i in this.reward) {
            _loop_1(i);
        }
        // function load_res(url:string,type:any,callback?: { (value: any): void; (value: any): void; (arg0: any): void; }){
        //     return new Promise((resolve, reject) => {
        //         // setTimeout(() => {
        //             cc.assetManager.loadRemote(url, type,(err, res:any) => {
        //                 if (err) {
        //                     reject(err);
        //                 } else {
        //                     Msg.Show(i18n.t(res));
        //                     let spriteFram = new cc.SpriteFrame(res);
        //                     if(callback){
        //                         callback(res);
        //                     }
        //                     resolve(spriteFram);
        //                 }
        //             });
        //         // }, 2000)
        //     })
        // }
    };
    UIRankingPanel.prototype.loadSpriteFunc = function (node, rewardSp, rewardnumNode, idx) {
        return __awaiter(this, void 0, void 0, function () {
            function loadFunc(rewardUrl, callback) {
                return new Promise(function (resolve, reject) {
                    cc.assetManager.loadRemote(rewardUrl, function (err, value) {
                        var spriteFram = new cc.SpriteFrame(value);
                        if (callback) {
                            callback(spriteFram);
                        }
                        resolve(spriteFram);
                    });
                });
            }
            var self, rewardUrl, spritenode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        rewardUrl = Constant_2.default.WEB_LINE_TITLE + this.reward[idx].goodsImg;
                        console.log(rewardUrl);
                        spritenode = cc.find("sprite" + (idx + 1), this._panel);
                        return [4 /*yield*/, loadFunc(rewardUrl, function (spriteFram) {
                                // if (rewardSp && rewardSp.isValid) {
                                node.getChildByName('rewardSp').active = true;
                                rewardSp.spriteFrame = spriteFram;
                                // }
                                if (self.reward[idx].goodsNumber > 1) {
                                    rewardnumNode.active = true;
                                    rewardnumNode.getComponent(cc.Label).string = 'X' + self.reward[idx].goodsNumber;
                                }
                                else {
                                    rewardnumNode.active = false;
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UIRankingPanel.prototype.itemRenderEvent = function (item, idx) {
        this.changeItem((parseInt(idx) + 1), this.data[idx], item);
    };
    UIRankingPanel.prototype.onOpen = function () {
        // 上报 首页签到
        Utils_1.utils.umaEvent("gamegameranking");
        Utils_1.utils.SendEvent("页面-排行榜");
        this._initPanel();
    };
    UIRankingPanel.prototype._initPanel = function () {
        TweenEffect_1.default.panel_open_scale(this._panel);
        // this._rankList.frameByFrameRenderNum = -1;
        this._rankList.renderEvent = this.itemRenderEvent.bind(this);
        // this.updatePanel();
    };
    UIRankingPanel.prototype.updatePanel = function () {
        this._rankList.numItems = this.data.length;
    };
    UIRankingPanel.prototype._updateDayItem = function () {
    };
    UIRankingPanel.prototype._onBtnClickedHandler = function (event, data) {
        CocosZ_1.cocosz.audioMgr.playBtnEffect();
        switch (event.target.name) {
            case "BtnClose": {
                CocosZ_1.cocosz.uiMgr.closePanel(Constant_1.PanelName.UIRankingPanel);
                break;
            }
        }
    };
    UIRankingPanel.prototype.onDestroy = function () {
        clearInterval(this.timeInterval);
    };
    UIRankingPanel = __decorate([
        ccclass
    ], UIRankingPanel);
    return UIRankingPanel;
}(UIPage_1.default));
exports.default = UIRankingPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXFVJUmFua2luZ1BhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwyREFBMEQ7QUFDMUQsOENBQTZDO0FBQzdDLGtEQUFrRDtBQUNsRCx3REFBbUQ7QUFDbkQsOENBQXlDO0FBSXpDLGtEQUE0QztBQUU1QyxhQUFhO0FBQ2IsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQy9CLElBQUEsS0FBdUIsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUcsUUFBUSxjQUFpQixDQUFDO0FBK0IzQztJQUFBO0lBb0JBLENBQUM7SUFuQkc7Ozs7TUFJRTtJQUNZLGdCQUFRLEdBQXRCLFVBQXVCLEdBQVUsRUFBQyxRQUF5RTtRQUN2RyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFDLFVBQUMsR0FBRyxFQUFFLEdBQU87Z0JBQ3hDLElBQUksR0FBRyxFQUFFO29CQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDZjtxQkFBTTtvQkFDSCxJQUFHLFFBQVEsRUFBQzt3QkFDUixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ2pCO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDaEI7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNMLGNBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLDBCQUFPO0FBdUJwQjtJQUE0QyxrQ0FBTTtJQWdCOUM7UUFBQSxZQUNJLGtCQUFPLG9CQUFTLENBQUMsY0FBYyxDQUFDLFNBRW5DO1FBbEJPLFlBQU0sR0FBWSxJQUFJLENB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QUMsSUFBSSxDQUFDLENBQUM7UUFDN0Qsc0JBQXNCO0lBQzFCLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDL0MsQ0FBQztJQUVPLHVDQUFjLEdBQXRCO0lBRUEsQ0FBQztJQUVTLDZDQUFvQixHQUE5QixVQUFnQyxLQUFnQixFQUFHLElBQVE7UUFDdkQsZUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVoQyxRQUFRLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ3ZCLEtBQUssVUFBVSxDQUFDLENBQUM7Z0JBQ2IsZUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsb0JBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDbEQsTUFBTTthQUNUO1NBQ0o7SUFDTCxDQUFDO0lBRVMsa0NBQVMsR0FBbkI7UUFDSSxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUExWWdCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0EyWWxDO0lBQUQscUJBQUM7Q0EzWUQsQUEyWUMsQ0EzWTJDLGdCQUFNLEdBMllqRDtrQkEzWW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tIFwiY3J5cHRvXCI7XHJcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi1wbHVnaW4vU2NyaXB0cy9VdGlsc1wiO1xyXG5pbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgeyBQYW5lbE5hbWUgfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcbmltcG9ydCBUd2VlbkVmZmVjdCBmcm9tIFwiLi4vRnJhbWV3b3JrL1R3ZWVuRWZmZWN0XCI7XHJcbmltcG9ydCBVSVBhZ2UgZnJvbSBcIi4uL0ZyYW1ld29yay9VSVBhZ2VcIjtcclxuaW1wb3J0IGxpc3QgZnJvbSBcIi4uL2NvbW1vblVpL2xpc3RcIlxyXG5pbXBvcnQgTXNnIGZyb20gXCIuLi9GcmFtZXdvcmsvTXNnXCI7XHJcbmltcG9ydCB7IHR5cGUgfSBmcm9tIFwib3NcIjtcclxuaW1wb3J0IENvbnN0YW50IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIlxyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5jb25zdCBpMThuID0gcmVxdWlyZSgnTGFuZ3VhZ2VEYXRhJyk7XHJcbmNvbnN0IHtjY2NsYXNzICwgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbnR5cGUgcGVyc29uRGF0YSA9IHtcclxuICAgIGF2YXRhciA/OiBzdHJpbmc7XHJcbiAgICBjb21iYXRQb3dlciA/OiBzdHJpbmc7XHJcbiAgICBjcmVhdGVCeSA/OiBzdHJpbmc7XHJcbiAgICBjcmVhdGVUaW1lID86IHN0cmluZztcclxuICAgIGdhbWVJZCA/OiBudW1iZXI7XHJcbiAgICBpZCA/OiBudW1iZXI7XHJcbiAgICBuaWtlTmFtZSA/OiBzdHJpbmc7XHJcbiAgICByZW1hcmsgPzogc3RyaW5nO1xyXG4gICAgdXBkYXRlQnkgPzogbnVsbDtcclxuICAgIHVwZGF0ZVRpbWUgPzogbnVsbDtcclxuICAgIHVzZXJJZCA/OiBudW1iZXI7XHJcbn1cclxuXHJcbnR5cGUgcmV3YXJkRGF0YSA9IHtcclxuICAgIGNyZWF0ZUJ5ID86IHN0cmluZztcclxuICAgIGNyZWF0ZVRpbWUgPzogc3RyaW5nO1xyXG4gICAgZ2FtZUlkID86IG51bWJlcjtcclxuICAgIGlkID86IG51bWJlcjtcclxuICAgIHJlbWFyayA/OiBzdHJpbmc7XHJcbiAgICB1cGRhdGVCeSA/OiBudWxsO1xyXG4gICAgdXBkYXRlVGltZSA/OiBudWxsO1xyXG4gICAgZ29vZHNJZCA/OiBudW1iZXI7XHJcbiAgICBnb29kc0ltZyA/OiBzdHJpbmc7XHJcbiAgICBnb29kc05hbWUgPzogc3RyaW5nO1xyXG4gICAgZ29vZHNOdW1iZXIgPzogbnVtYmVyO1xyXG4gICAgc29ydCA/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBsb2FkUmVzIHtcclxuICAgIC8qKiAg5Yqo5oCB5Yqg6L296LWE5rqQ77yM5Y+v5Lul5bim5Zue6LCD5Ye95pWwIO+8jOi/lOWbnnByb21pc2Xlr7nosaFcclxuICAgICogIEBwYXJhbSB1cmwgcmVzb3VyY2Vz5paH5Lu26Lev5b6EXHJcbiAgICAqIEBwYXJhbSB0eXBlIOi1hOa6kOexu+Wei1xyXG4gICAgKiBAcGFyYW0gY2FsbGJhY2sg5Zue6LCD5Ye95pWwXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkX3Jlcyh1cmw6c3RyaW5nLGNhbGxiYWNrPzogeyAodmFsdWU6IGFueSk6IHZvaWQ7ICh2YWx1ZTogYW55KTogdm9pZDsgKGFyZzA6IGFueSk6IHZvaWQ7IH0pe1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHVybCwoZXJyLCByZXM6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVJhbmtpbmdQYW5lbCBleHRlbmRzIFVJUGFnZSB7XHJcbiAgICBwcml2YXRlIF9wYW5lbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9idG5DbG9zZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgX3JhbmtMaXN0IDogbGlzdD0gbnVsbDtcclxuICAgIHByaXZhdGUgYmc6Y2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHRpbWVJbnRlcnZhbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGRhdGEgOiBBcnJheTxwZXJzb25EYXRhPiA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgbXlEYXRhIDogcGVyc29uRGF0YSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSByZXdhcmQgOiBBcnJheTxyZXdhcmREYXRhPiA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgbG9hZFJld2FyZFNwIDogQXJyYXk8Y2MuU3ByaXRlRnJhbWU+ID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkSGVhcmRTcCA6IEFycmF5PGNjLlNwcml0ZUZyYW1lPiA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlciAoUGFuZWxOYW1lLlVJUmFua2luZ1BhbmVsKTtcclxuICAgICAgICB0aGlzLmlzVmFsaWQoKSAmJiB0aGlzLm9uTG9hZCgpOyAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLl9wYW5lbCA9IHRoaXMuX3BhZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJQYW5lbFwiKTtcclxuICAgICAgICB0aGlzLmJnID0gdGhpcy5fcGFuZWwuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKTtcclxuICAgICAgICB0aGlzLl9yYW5rTGlzdCA9IHRoaXMuYmcuZ2V0Q2hpbGRCeU5hbWUoJ3JhbmtpbmdTY3JvbGxWaWV3JykuZ2V0Q29tcG9uZW50KCdsaXN0Jyk7XHJcblxyXG4gICAgICAgIC8vIGZ1bmN0aW9uIEEgKCkge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcclxuICAgICAgICAgICAgICAgIGxldCByZXdhcmRVcmw6IHN0cmluZyA9IENvbnN0YW50LldFQl9MSU5FX1RJVExFICsgJy9xd2svcmV3YXJkL2dldFJld2FyZExpc3QvJyArIENvbnN0YW50LkdBTUVfSUQ7ICAgLy/nlKjmiLdpZOS4jua4uOaIj2lk55uu5YmN5Li6MeWSjDFcclxuICAgICAgICAgICAgICAgIHV0aWxzLmNvbW1vbUh0dHBSZXF1ZXN0KHJld2FyZFVybCwgKHJld2FyZFJldCwgcmV3YXJkSnNkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJld2FyZFJldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmV3YXJkRGF0YWpzb24gPSBKU09OLnBhcnNlKHJld2FyZEpzZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJld2FyZERhdGFqc29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZXdhcmQgPSByZXdhcmREYXRhanNvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWxmLmxvYWRzcEZ1bmMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVzb2x2ZShyZXdhcmREYXRhanNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIuiOt+WPluWlluWKseaVsOaNruS4iuaKpeWksei0pe+8gVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICBcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgXHJcbiAgICAvLyAgICBmdW5jdGlvbiBCICgpIHtcclxuICAgIC8vICAgICAgICAgLy8gZG8gc29tZXRoaW5nXHJcbiAgICAvLyAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHVybDogc3RyaW5nID0gQ29uc3RhbnQuV0VCX0xJTkVfVElUTEUgKyAnL3F3ay9jaGFydHMvZ2V0VGhlQ2hhcnRzLycgKyBDb25zdGFudC5QRVJTT05fVFBLS0VOICsgXCIvXCIgKyBDb25zdGFudC5HQU1FX0lEOyAgIC8v55So5oi3aWTkuI7muLjmiI9pZOebruWJjeS4ujHlkowxXHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi5LiK5oql5pWw5o2uLCB1cmw9XCIsIHVybCk7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuY29tbW9tSHR0cFJlcXVlc3QodXJsLCAocmV0LCBqc2RhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jaGFuZ2VEYXRhVG9QZXJzb24oanNkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLmlbDmja7kuIrmiqXmiJDlip/vvIFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVBhbmVsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZU15UGFuZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlc29sdmUoanNkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLmlbDmja7kuIrmiqXlpLHotKXvvIFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIH0sIDEwMDApO1xyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gQyhqc2RhdGEpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XHJcbiAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgc2VsZi5jaGFuZ2VEYXRhVG9QZXJzb24oanNkYXRhKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBzZWxmLnVwZGF0ZVBhbmVsKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgc2VsZi51cGRhdGVNeVBhbmVsKCk7XHJcbiAgICAgICAgLy8gICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQSgpXHJcbiAgICAgICAgLy8gLnRoZW4oZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIEIoKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIC50aGVuKGZ1bmN0aW9uKGpzZGF0YSl7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBDKGpzZGF0YSk7XHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgdGhpcy50aW1lSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpeyAgLy9zZXRJbnRlcnZhbFxyXG4gICAgICAgICAgICB2YXIgbGFzdEdhbWVUaW1lID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmdnYW1lX2xhc3RHYW1lVGltZVwiKTsgLy/kuIrkuIDmrKHmuLjmiI/nmoTml7bpl7RcclxuICAgICAgICAgICAgaWYoIShsYXN0R2FtZVRpbWUgPT0gbnVsbCB8fCBsYXN0R2FtZVRpbWUgPT0gdW5kZWZpbmVkIHx8IGxhc3RHYW1lVGltZSA9PT0gXCJcIikpeyAvL+acieiusOW9leaXtumXtFxyXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNraXNvdmVyICA9IHV0aWxzLmNoZWNrV2VlSG91cnMobGFzdEdhbWVUaW1lKTtcclxuICAgICAgICAgICAgICAgIGlmKGNoZWNraXNvdmVyKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXJsOiBzdHJpbmcgPSBDb25zdGFudC5XRUJfTElORV9USVRMRSArICcvcXdrL2NoYXJ0cy9nZXRUaGVDaGFydHMvJyArIENvbnN0YW50LlBFUlNPTl9UUEtLRU4gKyBcIi9cIiArIENvbnN0YW50LkdBTUVfSUQ7ICAgLy/nlKjmiLdpZOS4jua4uOaIj2lk55uu5YmN5Li6MeWSjDFcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi5LiK5oql5pWw5o2uLCB1cmw9XCIsIHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuY29tbW9tSHR0cFJlcXVlc3QodXJsLCAocmV0LCBqc2RhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jaGFuZ2VEYXRhVG9QZXJzb24oanNkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLmlbDmja7kuIrmiqXmiJDlip/vvIFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVBhbmVsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZU15UGFuZWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JnZ2FtZV9sYXN0R2FtZVRpbWUnLCBEYXRlLm5vdygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLmlbDmja7kuIrmiqXlpLHotKXvvIFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JnZ2FtZV9sYXN0R2FtZVRpbWUnLCBEYXRlLm5vdygpKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpLDMwMDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBidG5OYW1lczogc3RyaW5nW10gPSBbXCJCdG5DbG9zZVwiXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ0bk5hbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBidG46IGNjLk5vZGUgPSBjYy5maW5kKGJ0bk5hbWVzW2ldLCB0aGlzLl9wYW5lbCk7XHJcbiAgICAgICAgICAgIGlmICghYnRuKSBjb250aW51ZVxyXG4gICAgICAgICAgICBidG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl9vbkJ0bkNsaWNrZWRIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChidG4ubmFtZSA9PSBcIkJ0bkNsb3NlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2J0bkNsb3NlID0gYnRuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvYWRzcEZ1bmMgKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBmb3IobGV0IGkgaW4gdGhpcy5yZXdhcmQpe1xyXG4gICAgICAgICAgICBsZXQgcmV3YXJkVXJsID0gQ29uc3RhbnQuV0VCX0xJTkVfVElUTEUgKyB0aGlzLnJld2FyZFtpXS5nb29kc0ltZztcclxuICAgICAgICAgICAgYXdhaXQgbG9hZEZ1bmMgKHJld2FyZFVybCwoc3ByaXRlRnJhbSk9PntcclxuICAgICAgICAgICAgICAgIHNlbGYubG9hZFJld2FyZFNwLnB1c2goc3ByaXRlRnJhbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gbG9hZEZ1bmMgKHJld2FyZFVybCxjYWxsYmFjaz86IHsgKHZhbHVlOiBhbnkpOiB2b2lkOyAodmFsdWU6IGFueSk6IHZvaWQ7IChhcmcwOiBhbnkpOiB2b2lkOyB9KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShyZXdhcmRVcmwsIChlcnIsIHZhbHVlKSA9PiB7ICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlRnJhbSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShzcHJpdGVGcmFtKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGVyc29uRGF0YSAoaWR4Om51bWJlcikge1xyXG4gICAgICAgIGxldCBuZXdyYW5rbnVtID0gaWR4O1xyXG4gICAgICAgIGxldCBuZXduYW1lID0gJ3BsYXllcicgKyBpZHg7XHJcbiAgICAgICAgbGV0IG5ld3BpY3VybCA9ICcnO1xyXG4gICAgICAgIGxldCBuZXdudW1iZXIgPSAxMDAwICsgKGlkeCAqIDE1MCk7XHJcbiAgICAgICAgbGV0IHJld2FyZHVybCA9ICcnO1xyXG4gICAgICAgIGxldCByZXdhcmROdW0gPSBwYXJzZUludCgoTWF0aC5yYW5kb20oKSAqIDEwMCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgbGV0IG9iamVjdCA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgICBvYmplY3QgPSB7XHJcbiAgICAgICAgICAgIHJhbmtOdW0gOiBuZXdyYW5rbnVtLFxyXG4gICAgICAgICAgICBuYW1lIDogbmV3bmFtZSxcclxuICAgICAgICAgICAgcGljdXJsIDogbmV3cGljdXJsLFxyXG4gICAgICAgICAgICBudW1iZXIgOiBuZXdudW1iZXIsXHJcbiAgICAgICAgICAgIHJld2FyZHVybCA6IHJld2FyZHVybCxcclxuICAgICAgICAgICAgcmV3YXJkTnVtIDogcmV3YXJkTnVtXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU15UGFuZWwoKXtcclxuICAgICAgICBsZXQgYm90dG9tTm9kZSA9IHRoaXMuYmcuZ2V0Q2hpbGRCeU5hbWUoJ2JvdHRvbU5vZGUnKTtcclxuICAgICAgICBsZXQgbXlSYW5rbnVtID0gYm90dG9tTm9kZS5nZXRDaGlsZEJ5TmFtZSgncGFpaGFuZ0xhYmVsJyk7XHJcbiAgICAgICAgbGV0IG15RmlnaHRudW0gPSBib3R0b21Ob2RlLmdldENoaWxkQnlOYW1lKCdmaWdodGxhYmVsJyk7XHJcbiAgICAgICAgbGV0IHBpY05vZGUgPSBib3R0b21Ob2RlLmdldENoaWxkQnlOYW1lKCdoZWFkTm9kZScpLmdldENoaWxkQnlOYW1lKCdoZWFkU3ByaXRlJyk7XHJcbiAgICAgICAgaWYocGFyc2VJbnQodGhpcy5teURhdGEucmVtYXJrKSA8PSAxMDApe1xyXG4gICAgICAgICAgICBteVJhbmtudW0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm15RGF0YS5yZW1hcmsudG9TdHJpbmcoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbXlSYW5rbnVtLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJ+aaguacquS4iuamnCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG15RmlnaHRudW0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm15RGF0YS5jb21iYXRQb3dlci50b1N0cmluZygpO1xyXG4gICAgICAgIGlmKHBpY05vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpe1xyXG4gICAgICAgICAgICBsZXQgaGVhZHVybCA9IHRoaXMubXlEYXRhLmF2YXRhciA9PSBcIlwiID8gXCJoZWFkL2hlYWRcIiA6IENvbnN0YW50LldFQl9MSU5FX1RJVExFICsgdGhpcy5teURhdGEuYXZhdGFyO1xyXG4gICAgICAgICAgICBpZihoZWFkdXJsICE9ICcnKXtcclxuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGhlYWR1cmwsZnVuY3Rpb24oZXJyLGltYWdlQXNzZXQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWNOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpICYmIHBpY05vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlRnJhbSA9IG5ldyBjYy5TcHJpdGVGcmFtZShpbWFnZUFzc2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGljTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3oucmVzTWdyLmxvYWRBbmRDYWNoZVJlcyhoZWFkdXJsICwgY2MuU3ByaXRlRnJhbWUsIG51bGwsIChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWNOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpICYmIHBpY05vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWNOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZURhdGFUb1BlcnNvbiAoanNkYXRhKSB7XHJcbiAgICAgICAgbGV0IGRhdGFqc29uID0gSlNPTi5wYXJzZShqc2RhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFqc29uKTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhanNvbi50aGVDaGFydHM7XHJcbiAgICAgICAgdGhpcy5teURhdGEgPSBkYXRhanNvbi5teURhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9hZEhlYXJkRnVuYyAoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiB0aGlzLmRhdGEpe1xyXG4gICAgICAgICAgICBsZXQgaGVhZFVybCA9IENvbnN0YW50LldFQl9MSU5FX1RJVExFICsgdGhpcy5kYXRhW2ldLmF2YXRhcjtcclxuICAgICAgICAgICAgYXdhaXQgbG9hZEZ1bmMgKGhlYWRVcmwsKHNwcml0ZUZyYW0pPT57XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvYWRIZWFyZFNwLnB1c2goc3ByaXRlRnJhbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gbG9hZEZ1bmMgKGhlYWRVcmwsY2FsbGJhY2s/OiB7ICh2YWx1ZTogYW55KTogdm9pZDsgKHZhbHVlOiBhbnkpOiB2b2lkOyAoYXJnMDogYW55KTogdm9pZDsgfSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoaGVhZFVybCwgKGVyciwgdmFsdWUpID0+IHsgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcHJpdGVGcmFtID0gbmV3IGNjLlNwcml0ZUZyYW1lKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFjayl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHNwcml0ZUZyYW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHNwcml0ZUZyYW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VJdGVtIChpZHgsZGF0YTphbnksbm9kZTpjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCByYW5rTm9kZSA6IGNjLk5vZGUgPSBub2RlLmdldENoaWxkQnlOYW1lKCd0b3BOb2RlJyk7XHJcbiAgICAgICAgbGV0IHJhbmtpbmRleE5vZGUgPSBub2RlLmdldENoaWxkQnlOYW1lKCdyYW5raW5nTGFiZWwnKTtcclxuICAgICAgICBsZXQgcmFua2luZGV4TGFiZWwgOiBjYy5MYWJlbCA9IHJhbmtpbmRleE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICBsZXQgc3ByX25hbWUgPSByYW5rTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICByYW5raW5kZXhMYWJlbC5zdHJpbmcgPSBpZHg7XHJcbiAgICAgICAgcmFua2luZGV4Tm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmKGlkeCA8PSAzKXtcclxuICAgICAgICAgICAgcmFua2luZGV4Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmFua05vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHNwcl9uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3oucmVzTWdyLmxvYWRBbmRDYWNoZVJlcyhcInJhbmtpbmcvdG9wX1wiICsgaWR4ICwgY2MuU3ByaXRlRnJhbWUsIG51bGwsIChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzcHJfbmFtZSAmJiBzcHJfbmFtZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcl9uYW1lLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJhbmtOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgaGVhZCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2hlYWROb2RlJykuZ2V0Q2hpbGRCeU5hbWUoJ2hlYWRTcHJpdGUnKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBpZihoZWFkKXtcclxuICAgICAgICAgICAgbGV0IGhlYWR1cmwgPSBkYXRhLmF2YXRhciA9PSBcIlwiID8gXCJoZWFkL2hlYWRcIiA6IENvbnN0YW50LldFQl9MSU5FX1RJVExFICsgZGF0YS5hdmF0YXI7XHJcbiAgICAgICAgICAgIGlmKGhlYWR1cmwgIT0gJycpe1xyXG4gICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoaGVhZHVybCxmdW5jdGlvbihlcnIsaW1hZ2VBc3NldCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhlYWQgJiYgaGVhZC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcHJpdGVGcmFtID0gbmV3IGNjLlNwcml0ZUZyYW1lKGltYWdlQXNzZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvY29zei5yZXNNZ3IubG9hZEFuZENhY2hlUmVzKGhlYWR1cmwgLCBjYy5TcHJpdGVGcmFtZSwgbnVsbCwgKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhlYWQgJiYgaGVhZC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWQuc3ByaXRlRnJhbWUgPSByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBuYW1lTGFiZWwgPSBub2RlLmdldENoaWxkQnlOYW1lKCdoZWFkTm9kZScpLmdldENoaWxkQnlOYW1lKCduYW1lTGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIG5hbWVMYWJlbC5zdHJpbmcgPSBkYXRhLm5pa2VOYW1lO1xyXG5cclxuICAgICAgICB2YXIgZmlnaHRMYWJlbCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2ZpZ2h0TGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIGZpZ2h0TGFiZWwuc3RyaW5nID0gZGF0YS5jb21iYXRQb3dlcjtcclxuXHJcbiAgICAgICAgbGV0IHJld2FyZG51bU5vZGUgPSBub2RlLmdldENoaWxkQnlOYW1lKCdyZXdhcmRMYWJlbCcpO1xyXG4gICAgICAgIGxldCByZXdhcmRTcCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3Jld2FyZFNwJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgncmV3YXJkU3AnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICByZXdhcmRudW1Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgaW4gdGhpcy5yZXdhcmQpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnJld2FyZFtpXS5zb3J0ID09IGlkeCl7ICAvL2dvb2RzSW1nXHJcbiAgICAgICAgICAgICAgICBsZXQgcmV3YXJkVXJsID0gQ29uc3RhbnQuV0VCX0xJTkVfVElUTEUgKyB0aGlzLnJld2FyZFtpXS5nb29kc0ltZzsgICAgXHJcbiAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShyZXdhcmRVcmwsIChlcnIsIHZhbHVlKSA9PiB7ICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmV3YXJkU3AgJiYgcmV3YXJkU3AuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCdyZXdhcmRTcCcpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcHJpdGVGcmFtID0gbmV3IGNjLlNwcml0ZUZyYW1lKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkU3Auc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5yZXdhcmRbaV0uZ29vZHNOdW1iZXIgPiAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkbnVtTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRudW1Ob2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJ1gnICsgc2VsZi5yZXdhcmRbaV0uZ29vZHNOdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZG51bU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBmdW5jdGlvbiBsb2FkX3Jlcyh1cmw6c3RyaW5nLHR5cGU6YW55LGNhbGxiYWNrPzogeyAodmFsdWU6IGFueSk6IHZvaWQ7ICh2YWx1ZTogYW55KTogdm9pZDsgKGFyZzA6IGFueSk6IHZvaWQ7IH0pe1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUodXJsLCB0eXBlLChlcnIsIHJlczphbnkpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBNc2cuU2hvdyhpMThuLnQocmVzKSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlRnJhbSA9IG5ldyBjYy5TcHJpdGVGcmFtZShyZXMpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHNwcml0ZUZyYW0pO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgLy8gfSwgMjAwMClcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9hZFNwcml0ZUZ1bmMgKG5vZGUscmV3YXJkU3AscmV3YXJkbnVtTm9kZSxpZHgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHJld2FyZFVybCA9IENvbnN0YW50LldFQl9MSU5FX1RJVExFICsgdGhpcy5yZXdhcmRbaWR4XS5nb29kc0ltZztcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXdhcmRVcmwpOyAgXHJcbiAgICAgICAgbGV0IHNwcml0ZW5vZGUgPSBjYy5maW5kKFwic3ByaXRlXCIrKGlkeCsxKSwgdGhpcy5fcGFuZWwpO1xyXG4gICAgICAgIGF3YWl0IGxvYWRGdW5jIChyZXdhcmRVcmwsKHNwcml0ZUZyYW0pPT57XHJcbiAgICAgICAgICAgIC8vIGlmIChyZXdhcmRTcCAmJiByZXdhcmRTcC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCdyZXdhcmRTcCcpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXdhcmRTcC5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW07XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHNlbGYucmV3YXJkW2lkeF0uZ29vZHNOdW1iZXIgPiAxKXtcclxuICAgICAgICAgICAgICAgIHJld2FyZG51bU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJld2FyZG51bU5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAnWCcgKyBzZWxmLnJld2FyZFtpZHhdLmdvb2RzTnVtYmVyO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJld2FyZG51bU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbG9hZEZ1bmMgKHJld2FyZFVybCxjYWxsYmFjaz86IHsgKHZhbHVlOiBhbnkpOiB2b2lkOyAodmFsdWU6IGFueSk6IHZvaWQ7IChhcmcwOiBhbnkpOiB2b2lkOyB9KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShyZXdhcmRVcmwsIChlcnIsIHZhbHVlKSA9PiB7ICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlRnJhbSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhzcHJpdGVGcmFtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShzcHJpdGVGcmFtKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXRlbVJlbmRlckV2ZW50IChpdGVtLCBpZHgpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZUl0ZW0oKHBhcnNlSW50KGlkeCkrMSksdGhpcy5kYXRhW2lkeF0saXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uT3BlbigpIHtcclxuICAgICAgICAvLyDkuIrmiqUg6aaW6aG1562+5YiwXHJcbiAgICAgICAgdXRpbHMudW1hRXZlbnQoXCJnYW1lZ2FtZXJhbmtpbmdcIik7XHJcbiAgICAgICAgdXRpbHMuU2VuZEV2ZW50KFwi6aG16Z2iLeaOkuihjOamnFwiKTtcclxuICAgICAgICB0aGlzLl9pbml0UGFuZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pbml0UGFuZWwoKSB7XHJcbiAgICAgICAgVHdlZW5FZmZlY3QucGFuZWxfb3Blbl9zY2FsZSh0aGlzLl9wYW5lbCk7XHJcbiAgICAgICAgLy8gdGhpcy5fcmFua0xpc3QuZnJhbWVCeUZyYW1lUmVuZGVyTnVtID0gLTE7XHJcbiAgICAgICAgdGhpcy5fcmFua0xpc3QucmVuZGVyRXZlbnQgPSB0aGlzLml0ZW1SZW5kZXJFdmVudC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMudXBkYXRlUGFuZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQYW5lbCAoKSB7XHJcbiAgICAgICAgdGhpcy5fcmFua0xpc3QubnVtSXRlbXMgPSB0aGlzLmRhdGEubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZURheUl0ZW0oKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9vbkJ0bkNsaWNrZWRIYW5kbGVyIChldmVudCA6IGNjLkV2ZW50ICwgZGF0YTphbnkpIHtcclxuICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheUJ0bkVmZmVjdCgpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCdG5DbG9zZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3oudWlNZ3IuY2xvc2VQYW5lbChQYW5lbE5hbWUuVUlSYW5raW5nUGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSAoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVJbnRlcnZhbCk7XHJcbiAgICB9XHJcbn1cclxuIl19