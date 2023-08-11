"use strict";
cc._RF.push(module, '91a9bfI3shFxaB1UDA99j9p', 'UIBackPanel');
// scripts/UI/UIBackPanel.ts

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
var UIBackPanel = /** @class */ (function (_super) {
    __extends(UIBackPanel, _super);
    function UIBackPanel() {
        var _this = _super.call(this, Constant_1.PanelName.UIBackPanel) || this;
        _this._panel = null;
        _this._btnClose = null;
        _this._backList = null;
        _this.contentPanal = null;
        _this.showPanel = null;
        _this.bg = null;
        _this.timeInterval = null;
        _this.data = [];
        _this.isValid() && _this.onLoad();
        return _this;
    }
    UIBackPanel.prototype.onLoad = function () {
        var self = this;
        this._panel = this._page.getChildByName("Panel");
        this.bg = this._panel.getChildByName("bg");
        this._backList = this.bg.getChildByName('backScrollView').getComponent('list');
        this.contentPanal = this.bg.getChildByName('backScrollView');
        this.showPanel = this._page.getChildByName('showPanel');
        var url = Constant_2.default.WEB_LINE_TITLE + '/qwk/details/getGameProps/' + Constant_2.default.PERSON_TPKKEN; //Constant.PERSON_TPKKEN;   //用户id与游戏id目前为1和1
        Utils_1.utils.showLog("上报数据, url=", url);
        Utils_1.utils.commomHttpRequest(url, function (ret, jsdata) {
            if (ret) {
                self.changeDataToPerson(jsdata);
                Utils_1.utils.showLog("数据上报成功！");
                self.updatePanel();
            }
            else {
                Utils_1.utils.showLog("数据上报失败！");
            }
        });
        // for(let i = 0 ; i < 1000 ; i++){
        //     this.data.push(this.personData(i));
        // }
        // self.updatePanel();
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
    UIBackPanel.prototype.personData = function (idx) {
        var newname = 'good' + idx;
        var goodurl = '';
        var goodNum = parseInt((Math.random() * 100).toString());
        var object = new Object();
        object = {
            goodName: newname,
            avatar: goodurl,
            goodNum: goodNum
        };
        return object;
    };
    UIBackPanel.prototype.changeDataToPerson = function (jsdata) {
        var datajson = JSON.parse(jsdata);
        console.log(datajson);
        this.data = datajson.data;
    };
    UIBackPanel.prototype.changeItem = function (data, node) {
        var self = this;
        var goodNode = node.getChildByName('goodSp');
        var spr_name = goodNode.getComponent(cc.Sprite);
        console.log(data.goodsImage);
        if (spr_name) {
            var headurl = data.goodsImage == "" ? "" : Constant_2.default.WEB_LINE_TITLE + data.goodsImage;
            if (headurl != '') {
                cc.assetManager.loadRemote(headurl, function (err, imageAsset) {
                    if (spr_name && spr_name.isValid) {
                        var spriteFram = new cc.SpriteFrame(imageAsset);
                        spr_name.spriteFrame = spriteFram;
                    }
                });
            }
            else {
                CocosZ_1.cocosz.resMgr.loadAndCacheRes("head/head", cc.SpriteFrame, null, function (err, res) {
                    if (spr_name && spr_name.isValid) {
                        spr_name.spriteFrame = res;
                    }
                });
            }
        }
        var goodLabel = node.getChildByName('goodLabel').getComponent(cc.Label);
        goodLabel.string = data.goodsName;
        var goodNumLabel = node.getChildByName('goodNum').getComponent(cc.Label);
        goodNumLabel.string = "x" + data.quantity;
    };
    UIBackPanel.prototype.itemRenderEvent = function (item, idx) {
        this.changeItem(this.data[idx], item);
    };
    UIBackPanel.prototype.itemSelectEvent = function (item, idx) {
        console.log("点击到了item" + ":" + idx);
        var self = this;
        var fromPos = this.showPanel.convertToNodeSpaceAR(item.convertToWorldSpaceAR(cc.Vec2.ZERO));
        console.log(fromPos);
        var openGoods = this.showPanel.getChildByName('openGoods');
        var nameLabel = openGoods.getChildByName('nameLabel');
        nameLabel.getComponent(cc.Label).string = this.data[idx].goodsName;
        var introduceLabel = openGoods.getChildByName('introduceLabel');
        introduceLabel.getComponent(cc.Label).string = this.data[idx].remark;
        if (fromPos.x > 270) {
            fromPos.x -= openGoods.width / 2 + item.width / 2 + 10;
        }
        else {
            fromPos.x += openGoods.width / 2 + item.width / 2 + 10;
        }
        openGoods.position = cc.v3(fromPos.x, fromPos.y, 0);
        this.showPanel.active = true;
        this.showPanel.targetOff(this.showPanel);
        this.showPanel.on('touchend', function () {
            console.log('关闭了！！！');
            self.showPanel.active = false;
        }, this.showPanel);
        var useBtn = openGoods.getChildByName('useBtn');
        useBtn.targetOff(useBtn);
        if (!useBtn.hasEventListener('click')) {
            useBtn.on("touchend", function () {
                var url = Constant_2.default.WEB_LINE_TITLE + '/qwk/details/useProps/' + self.data[idx].id; //Constant.PERSON_TPKKEN;   //用户id与游戏id目前为1和1
                Utils_1.utils.showLog("上报数据, url=", url);
                Utils_1.utils.commomHttpRequest(url, function (ret, jsdata) {
                    if (ret) {
                        var datajson = JSON.parse(jsdata);
                        console.log(datajson);
                        if (!datajson.data) {
                            self.data.splice(idx, 1);
                        }
                        else {
                            self.data[idx] = datajson.data;
                        }
                        Utils_1.utils.showLog("数据上报成功！");
                        self.updatePanel();
                    }
                    else {
                        Utils_1.utils.showLog("数据上报失败！");
                    }
                });
                self.showPanel.active = false;
            }, useBtn);
        }
    };
    UIBackPanel.prototype.onOpen = function () {
        // 上报 首页签到
        Utils_1.utils.umaEvent("gamegameback");
        Utils_1.utils.SendEvent("页面-背包");
        this._initPanel();
    };
    UIBackPanel.prototype._initPanel = function () {
        TweenEffect_1.default.panel_open_scale(this._panel);
        this._backList.renderEvent = this.itemRenderEvent.bind(this);
        this._backList.selectedEvent = this.itemSelectEvent.bind(this);
        // this.updatePanel();
    };
    UIBackPanel.prototype.updatePanel = function () {
        console.log(this.data);
        this._backList.numItems = this.data.length;
    };
    UIBackPanel.prototype._onBtnClickedHandler = function (event, data) {
        CocosZ_1.cocosz.audioMgr.playBtnEffect();
        switch (event.target.name) {
            case "BtnClose": {
                CocosZ_1.cocosz.uiMgr.closePanel(Constant_1.PanelName.UIBackPanel);
                break;
            }
        }
    };
    UIBackPanel.prototype.onDestroy = function () {
        clearInterval(this.timeInterval);
    };
    UIBackPanel = __decorate([
        ccclass
    ], UIBackPanel);
    return UIBackPanel;
}(UIPage_1.default));
exports.default = UIBackPanel;

cc._RF.pop();