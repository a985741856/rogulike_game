
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI/UIBackPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXFVJQmFja1BhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwyREFBMEQ7QUFDMUQsOENBQTZDO0FBQzdDLGtEQUFrRDtBQUNsRCx3REFBbUQ7QUFDbkQsOENBQXlDO0FBSXpDLGtEQUE0QztBQUU1QyxhQUFhO0FBQ2IsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQy9CLElBQUEsS0FBdUIsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUcsUUFBUSxjQUFpQixDQUFDO0FBVzNDO0lBQUE7SUFvQkEsQ0FBQztJQW5CRzs7OztNQUlFO0lBQ1ksZ0JBQVEsR0FBdEIsVUFBdUIsR0FBVSxFQUFDLFFBQXlFO1FBQ3ZHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUMsVUFBQyxHQUFHLEVBQUUsR0FBTztnQkFDeEMsSUFBSSxHQUFHLEVBQUU7b0JBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNmO3FCQUFNO29CQUNILElBQUcsUUFBUSxFQUFDO3dCQUNSLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDakI7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNoQjtZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0wsY0FBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksMEJBQU87QUF1QnBCO0lBQXlDLCtCQUFNO0lBVTNDO1FBQUEsWUFDSSxrQkFBTyxvQkFBUyxDQUFDLFdBQVcsQ0FBQyxTQUVoQztRQVpPLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMzQixlQUFTLEdBQVMsSUFBSSxDQUFDO1FBQ3ZCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBQzlCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFDMUIsUUFBRSxHQUFXLElBQUksQ0FBQztRQUNsQixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixVQUFJLEdBQXFCLEVBQUUsQ0FBQztRQUloQyxLQUFJLENBQUMsT0FBTyxFQUFFLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztJQUNwQyxDQUFDO0lBRVMsNEJBQU0sR0FBaEI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFeEQsSUFBSSxHQUFHLEdBQVcsa0JBQVEsQ0FBQyxjQUFjLEdBQUcsNEJBQTRCLEdBQUcsa0JBQVEsQ0FBQyxhQUFhLENBQUEsQ0FBQyw2Q0FBNkM7UUFDL0ksYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakMsYUFBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNO1lBQ3JDLElBQUksR0FBRyxFQUFFO2dCQUNMLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDaEMsYUFBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNILGFBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDNUI7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILG1DQUFtQztRQUNuQywwQ0FBMEM7UUFDMUMsSUFBSTtRQUNKLHNCQUFzQjtRQUV0QixJQUFJLFFBQVEsR0FBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQUksR0FBRyxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsR0FBRztnQkFBRSxTQUFRO1lBQ2xCLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUVyRSxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksVUFBVSxFQUFFO2dCQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQzthQUN4QjtTQUNKO0lBQ0wsQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBWSxHQUFVO1FBQ2xCLElBQUksT0FBTyxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDM0IsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFDMUIsTUFBTSxHQUFHO1lBQ0wsUUFBUSxFQUFHLE9BQU87WUFDbEIsTUFBTSxFQUFHLE9BQU87WUFDaEIsT0FBTyxFQUFHLE9BQU87U0FDcEIsQ0FBQTtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCx3Q0FBa0IsR0FBbEIsVUFBb0IsTUFBTTtRQUN0QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVksSUFBUSxFQUFDLElBQVk7UUFDN0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksUUFBUSxHQUFhLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkQsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0IsSUFBRyxRQUFRLEVBQUM7WUFDUixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxrQkFBUSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3JGLElBQUcsT0FBTyxJQUFJLEVBQUUsRUFBQztnQkFDYixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUMsVUFBUyxHQUFHLEVBQUMsVUFBVTtvQkFDdEQsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRTt3QkFDOUIsSUFBSSxVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUNoRCxRQUFRLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztxQkFDckM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUE7YUFDTDtpQkFBSTtnQkFDRCxlQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztvQkFDdkUsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRTt3QkFDOUIsUUFBUSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7cUJBQzlCO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ047U0FDSjtRQUVELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RSxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFbEMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pFLFlBQVksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDOUMsQ0FBQztJQUVELHFDQUFlLEdBQWYsVUFBaUIsSUFBSSxFQUFFLEdBQUc7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxxQ0FBZSxHQUFmLFVBQWlCLElBQUksRUFBQyxHQUFHO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0QsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0RCxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbkUsSUFBSSxjQUFjLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hFLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNyRSxJQUFHLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFDO1lBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsS0FBSyxHQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDdEQ7YUFBSTtZQUNELE9BQU8sQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLEtBQUssR0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3REO1FBQ0QsU0FBUyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBQztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWxCLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25DLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFDO2dCQUNqQixJQUFJLEdBQUcsR0FBVyxrQkFBUSxDQUFDLGNBQWMsR0FBRyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQSxDQUFDLDZDQUE2QztnQkFDdEksYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLGFBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTtvQkFDckMsSUFBSSxHQUFHLEVBQUU7d0JBQ0wsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDdEIsSUFBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUM7NEJBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUMzQjs2QkFBSTs0QkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7eUJBQ2xDO3dCQUNELGFBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztxQkFDdEI7eUJBQU07d0JBQ0gsYUFBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztxQkFDNUI7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2xDLENBQUMsRUFBQyxNQUFNLENBQUMsQ0FBQztTQUNiO0lBQ0wsQ0FBQztJQUVTLDRCQUFNLEdBQWhCO1FBQ0ksVUFBVTtRQUNWLGFBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDL0IsYUFBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVPLGdDQUFVLEdBQWxCO1FBQ0kscUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0Qsc0JBQXNCO0lBQzFCLENBQUM7SUFFRCxpQ0FBVyxHQUFYO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDL0MsQ0FBQztJQUVTLDBDQUFvQixHQUE5QixVQUFnQyxLQUFnQixFQUFHLElBQVE7UUFDdkQsZUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVoQyxRQUFRLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ3ZCLEtBQUssVUFBVSxDQUFDLENBQUM7Z0JBQ2IsZUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsb0JBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDL0MsTUFBTTthQUNUO1NBQ0o7SUFDTCxDQUFDO0lBRVMsK0JBQVMsR0FBbkI7UUFDSSxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUEzTGdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E0TC9CO0lBQUQsa0JBQUM7Q0E1TEQsQUE0TEMsQ0E1THdDLGdCQUFNLEdBNEw5QztrQkE1TG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tIFwiY3J5cHRvXCI7XHJcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi1wbHVnaW4vU2NyaXB0cy9VdGlsc1wiO1xyXG5pbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgeyBQYW5lbE5hbWUgfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcbmltcG9ydCBUd2VlbkVmZmVjdCBmcm9tIFwiLi4vRnJhbWV3b3JrL1R3ZWVuRWZmZWN0XCI7XHJcbmltcG9ydCBVSVBhZ2UgZnJvbSBcIi4uL0ZyYW1ld29yay9VSVBhZ2VcIjtcclxuaW1wb3J0IGxpc3QgZnJvbSBcIi4uL2NvbW1vblVpL2xpc3RcIlxyXG5pbXBvcnQgTXNnIGZyb20gXCIuLi9GcmFtZXdvcmsvTXNnXCI7XHJcbmltcG9ydCB7IHR5cGUgfSBmcm9tIFwib3NcIjtcclxuaW1wb3J0IENvbnN0YW50IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIlxyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5jb25zdCBpMThuID0gcmVxdWlyZSgnTGFuZ3VhZ2VEYXRhJyk7XHJcbmNvbnN0IHtjY2NsYXNzICwgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbnR5cGUgZ29vZERhdGEgPSB7XHJcbiAgICBhdmF0YXIgPzogc3RyaW5nO1xyXG4gICAgZ29vZHNOYW1lID86IHN0cmluZztcclxuICAgIHF1YW50aXR5ID86IHN0cmluZztcclxuICAgIGlkID86IG51bWJlcjtcclxuICAgIGdvb2RzSW1hZ2UgPzogc3RyaW5nO1xyXG4gICAgcmVtYXJrID86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIGxvYWRSZXMge1xyXG4gICAgLyoqICDliqjmgIHliqDovb3otYTmupDvvIzlj6/ku6XluKblm57osIPlh73mlbAg77yM6L+U5ZuecHJvbWlzZeWvueixoVxyXG4gICAgKiAgQHBhcmFtIHVybCByZXNvdXJjZXPmlofku7bot6/lvoRcclxuICAgICogQHBhcmFtIHR5cGUg6LWE5rqQ57G75Z6LXHJcbiAgICAqIEBwYXJhbSBjYWxsYmFjayDlm57osIPlh73mlbBcclxuICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRfcmVzKHVybDpzdHJpbmcsY2FsbGJhY2s/OiB7ICh2YWx1ZTogYW55KTogdm9pZDsgKHZhbHVlOiBhbnkpOiB2b2lkOyAoYXJnMDogYW55KTogdm9pZDsgfSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUodXJsLChlcnIsIHJlczphbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQmFja1BhbmVsIGV4dGVuZHMgVUlQYWdlIHtcclxuICAgIHByaXZhdGUgX3BhbmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2J0bkNsb3NlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBfYmFja0xpc3QgOiBsaXN0PSBudWxsO1xyXG4gICAgcHVibGljIGNvbnRlbnRQYW5hbCA6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHVibGljIHNob3dQYW5lbCA6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBiZzpjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgdGltZUludGVydmFsID0gbnVsbDtcclxuICAgIHByaXZhdGUgZGF0YSA6IEFycmF5PGdvb2REYXRhPiA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlciAoUGFuZWxOYW1lLlVJQmFja1BhbmVsKTtcclxuICAgICAgICB0aGlzLmlzVmFsaWQoKSAmJiB0aGlzLm9uTG9hZCgpOyAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLl9wYW5lbCA9IHRoaXMuX3BhZ2UuZ2V0Q2hpbGRCeU5hbWUoXCJQYW5lbFwiKTtcclxuICAgICAgICB0aGlzLmJnID0gdGhpcy5fcGFuZWwuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKTtcclxuICAgICAgICB0aGlzLl9iYWNrTGlzdCA9IHRoaXMuYmcuZ2V0Q2hpbGRCeU5hbWUoJ2JhY2tTY3JvbGxWaWV3JykuZ2V0Q29tcG9uZW50KCdsaXN0Jyk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50UGFuYWwgPSB0aGlzLmJnLmdldENoaWxkQnlOYW1lKCdiYWNrU2Nyb2xsVmlldycpO1xyXG4gICAgICAgIHRoaXMuc2hvd1BhbmVsID0gdGhpcy5fcGFnZS5nZXRDaGlsZEJ5TmFtZSgnc2hvd1BhbmVsJyk7XHJcbiAgICAgICBcclxuICAgICAgICBsZXQgdXJsOiBzdHJpbmcgPSBDb25zdGFudC5XRUJfTElORV9USVRMRSArICcvcXdrL2RldGFpbHMvZ2V0R2FtZVByb3BzLycgKyBDb25zdGFudC5QRVJTT05fVFBLS0VOIC8vQ29uc3RhbnQuUEVSU09OX1RQS0tFTjsgICAvL+eUqOaIt2lk5LiO5ri45oiPaWTnm67liY3kuLox5ZKMMVxyXG4gICAgICAgIHV0aWxzLnNob3dMb2coXCLkuIrmiqXmlbDmja4sIHVybD1cIiwgdXJsKTtcclxuICAgICAgICB1dGlscy5jb21tb21IdHRwUmVxdWVzdCh1cmwsIChyZXQsIGpzZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmV0KSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNoYW5nZURhdGFUb1BlcnNvbihqc2RhdGEpO1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIuaVsOaNruS4iuaKpeaIkOWKn++8gVwiKTtcclxuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlUGFuZWwoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLmlbDmja7kuIrmiqXlpLHotKXvvIFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZm9yKGxldCBpID0gMCA7IGkgPCAxMDAwIDsgaSsrKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5kYXRhLnB1c2godGhpcy5wZXJzb25EYXRhKGkpKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gc2VsZi51cGRhdGVQYW5lbCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBidG5OYW1lczogc3RyaW5nW10gPSBbXCJCdG5DbG9zZVwiXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ0bk5hbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBidG46IGNjLk5vZGUgPSBjYy5maW5kKGJ0bk5hbWVzW2ldLCB0aGlzLl9wYW5lbCk7XHJcbiAgICAgICAgICAgIGlmICghYnRuKSBjb250aW51ZVxyXG4gICAgICAgICAgICBidG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl9vbkJ0bkNsaWNrZWRIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChidG4ubmFtZSA9PSBcIkJ0bkNsb3NlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2J0bkNsb3NlID0gYnRuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBlcnNvbkRhdGEgKGlkeDpudW1iZXIpIHtcclxuICAgICAgICBsZXQgbmV3bmFtZSA9ICdnb29kJyArIGlkeDtcclxuICAgICAgICBsZXQgZ29vZHVybCA9ICcnO1xyXG4gICAgICAgIGxldCBnb29kTnVtID0gcGFyc2VJbnQoKE1hdGgucmFuZG9tKCkgKiAxMDApLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGxldCBvYmplY3QgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICAgICAgb2JqZWN0ID0ge1xyXG4gICAgICAgICAgICBnb29kTmFtZSA6IG5ld25hbWUsXHJcbiAgICAgICAgICAgIGF2YXRhciA6IGdvb2R1cmwsXHJcbiAgICAgICAgICAgIGdvb2ROdW0gOiBnb29kTnVtXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZURhdGFUb1BlcnNvbiAoanNkYXRhKSB7XHJcbiAgICAgICAgbGV0IGRhdGFqc29uID0gSlNPTi5wYXJzZShqc2RhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFqc29uKTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhanNvbi5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUl0ZW0gKGRhdGE6YW55LG5vZGU6Y2MuTm9kZSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgZ29vZE5vZGUgOiBjYy5Ob2RlID0gbm9kZS5nZXRDaGlsZEJ5TmFtZSgnZ29vZFNwJyk7XHJcbiAgICAgICAgbGV0IHNwcl9uYW1lID0gZ29vZE5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5nb29kc0ltYWdlKTtcclxuICAgICAgICBpZihzcHJfbmFtZSl7XHJcbiAgICAgICAgICAgIGxldCBoZWFkdXJsID0gZGF0YS5nb29kc0ltYWdlID09IFwiXCIgPyBcIlwiIDogQ29uc3RhbnQuV0VCX0xJTkVfVElUTEUgKyBkYXRhLmdvb2RzSW1hZ2U7XHJcbiAgICAgICAgICAgIGlmKGhlYWR1cmwgIT0gJycpe1xyXG4gICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoaGVhZHVybCxmdW5jdGlvbihlcnIsaW1hZ2VBc3NldCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwcl9uYW1lICYmIHNwcl9uYW1lLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNwcml0ZUZyYW0gPSBuZXcgY2MuU3ByaXRlRnJhbWUoaW1hZ2VBc3NldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcl9uYW1lLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvY29zei5yZXNNZ3IubG9hZEFuZENhY2hlUmVzKFwiaGVhZC9oZWFkXCIgLCBjYy5TcHJpdGVGcmFtZSwgbnVsbCwgKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwcl9uYW1lICYmIHNwcl9uYW1lLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByX25hbWUuc3ByaXRlRnJhbWUgPSByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBnb29kTGFiZWwgPSBub2RlLmdldENoaWxkQnlOYW1lKCdnb29kTGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIGdvb2RMYWJlbC5zdHJpbmcgPSBkYXRhLmdvb2RzTmFtZTtcclxuXHJcbiAgICAgICAgdmFyIGdvb2ROdW1MYWJlbCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2dvb2ROdW0nKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIGdvb2ROdW1MYWJlbC5zdHJpbmcgPSBcInhcIiArIGRhdGEucXVhbnRpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgaXRlbVJlbmRlckV2ZW50IChpdGVtLCBpZHgpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZUl0ZW0odGhpcy5kYXRhW2lkeF0saXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXRlbVNlbGVjdEV2ZW50IChpdGVtLGlkeCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi54K55Ye75Yiw5LqGaXRlbVwiK1wiOlwiK2lkeCk7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBmcm9tUG9zID0gdGhpcy5zaG93UGFuZWwuY29udmVydFRvTm9kZVNwYWNlQVIoaXRlbS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZnJvbVBvcyk7XHJcbiAgICAgICAgbGV0IG9wZW5Hb29kcyA9IHRoaXMuc2hvd1BhbmVsLmdldENoaWxkQnlOYW1lKCdvcGVuR29vZHMnKTtcclxuICAgICAgICBsZXQgbmFtZUxhYmVsID0gb3Blbkdvb2RzLmdldENoaWxkQnlOYW1lKCduYW1lTGFiZWwnKTtcclxuICAgICAgICBuYW1lTGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmRhdGFbaWR4XS5nb29kc05hbWU7XHJcbiAgICAgICAgbGV0IGludHJvZHVjZUxhYmVsID0gb3Blbkdvb2RzLmdldENoaWxkQnlOYW1lKCdpbnRyb2R1Y2VMYWJlbCcpO1xyXG4gICAgICAgIGludHJvZHVjZUxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5kYXRhW2lkeF0ucmVtYXJrO1xyXG4gICAgICAgIGlmKGZyb21Qb3MueCA+IDI3MCl7XHJcbiAgICAgICAgICAgIGZyb21Qb3MueCAtPSBvcGVuR29vZHMud2lkdGgvMiArIGl0ZW0ud2lkdGgvMiArIDEwO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBmcm9tUG9zLnggKz0gb3Blbkdvb2RzLndpZHRoLzIgKyBpdGVtLndpZHRoLzIgKyAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3Blbkdvb2RzLnBvc2l0aW9uID0gY2MudjMoZnJvbVBvcy54LGZyb21Qb3MueSwwKTtcclxuICAgICAgICB0aGlzLnNob3dQYW5lbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hvd1BhbmVsLnRhcmdldE9mZih0aGlzLnNob3dQYW5lbClcclxuICAgICAgICB0aGlzLnNob3dQYW5lbC5vbigndG91Y2hlbmQnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCflhbPpl63kuobvvIHvvIHvvIEnKTtcclxuICAgICAgICAgICAgc2VsZi5zaG93UGFuZWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSx0aGlzLnNob3dQYW5lbCk7XHJcblxyXG4gICAgICAgIGxldCB1c2VCdG4gPSBvcGVuR29vZHMuZ2V0Q2hpbGRCeU5hbWUoJ3VzZUJ0bicpO1xyXG4gICAgICAgIHVzZUJ0bi50YXJnZXRPZmYodXNlQnRuKVxyXG4gICAgICAgIGlmICghdXNlQnRuLmhhc0V2ZW50TGlzdGVuZXIoJ2NsaWNrJykpIHtcclxuICAgICAgICAgICAgdXNlQnRuLm9uKFwidG91Y2hlbmRcIixmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGxldCB1cmw6IHN0cmluZyA9IENvbnN0YW50LldFQl9MSU5FX1RJVExFICsgJy9xd2svZGV0YWlscy91c2VQcm9wcy8nICsgc2VsZi5kYXRhW2lkeF0uaWQgLy9Db25zdGFudC5QRVJTT05fVFBLS0VOOyAgIC8v55So5oi3aWTkuI7muLjmiI9pZOebruWJjeS4ujHlkowxXHJcbiAgICAgICAgICAgICAgICB1dGlscy5zaG93TG9nKFwi5LiK5oql5pWw5o2uLCB1cmw9XCIsIHVybCk7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5jb21tb21IdHRwUmVxdWVzdCh1cmwsIChyZXQsIGpzZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFqc29uID0gSlNPTi5wYXJzZShqc2RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhanNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFkYXRhanNvbi5kYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZGF0YS5zcGxpY2UoaWR4LDEpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRhdGFbaWR4XSA9IGRhdGFqc29uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2hvd0xvZyhcIuaVsOaNruS4iuaKpeaIkOWKn++8gVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVQYW5lbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLnNob3dMb2coXCLmlbDmja7kuIrmiqXlpLHotKXvvIFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dQYW5lbC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSx1c2VCdG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25PcGVuKCkge1xyXG4gICAgICAgIC8vIOS4iuaKpSDpppbpobXnrb7liLBcclxuICAgICAgICB1dGlscy51bWFFdmVudChcImdhbWVnYW1lYmFja1wiKTtcclxuICAgICAgICB1dGlscy5TZW5kRXZlbnQoXCLpobXpnaIt6IOM5YyFXCIpO1xyXG4gICAgICAgIHRoaXMuX2luaXRQYW5lbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2luaXRQYW5lbCgpIHtcclxuICAgICAgICBUd2VlbkVmZmVjdC5wYW5lbF9vcGVuX3NjYWxlKHRoaXMuX3BhbmVsKTtcclxuICAgICAgICB0aGlzLl9iYWNrTGlzdC5yZW5kZXJFdmVudCA9IHRoaXMuaXRlbVJlbmRlckV2ZW50LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fYmFja0xpc3Quc2VsZWN0ZWRFdmVudCA9IHRoaXMuaXRlbVNlbGVjdEV2ZW50LmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy51cGRhdGVQYW5lbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBhbmVsICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xyXG4gICAgICAgIHRoaXMuX2JhY2tMaXN0Lm51bUl0ZW1zID0gdGhpcy5kYXRhLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX29uQnRuQ2xpY2tlZEhhbmRsZXIgKGV2ZW50IDogY2MuRXZlbnQgLCBkYXRhOmFueSkge1xyXG4gICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5QnRuRWZmZWN0KCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkJ0bkNsb3NlXCI6IHtcclxuICAgICAgICAgICAgICAgIGNvY29zei51aU1nci5jbG9zZVBhbmVsKFBhbmVsTmFtZS5VSUJhY2tQYW5lbCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95ICgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZUludGVydmFsKTtcclxuICAgIH1cclxufVxyXG4iXX0=