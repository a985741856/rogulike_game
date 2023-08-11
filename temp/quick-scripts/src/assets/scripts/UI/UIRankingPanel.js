"use strict";
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