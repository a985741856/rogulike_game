import { randomInt } from "crypto";
import { utils } from "../../common-plugin/Scripts/Utils";
import { cocosz } from "../Framework/CocosZ";
import { PanelName } from "../Framework/Constant";
import TweenEffect from "../Framework/TweenEffect";
import UIPage from "../Framework/UIPage";
import list from "../commonUi/list"
import Msg from "../Framework/Msg";
import { type } from "os";
import Constant from "../Framework/Constant"

// @ts-ignore
const i18n = require('LanguageData');
const {ccclass , property} = cc._decorator;

type goodData = {
    avatar ?: string;
    goodsName ?: string;
    quantity ?: string;
    id ?: number;
    goodsImage ?: string;
    remark ?: string;
}

export class loadRes {
    /**  动态加载资源，可以带回调函数 ，返回promise对象
    *  @param url resources文件路径
    * @param type 资源类型
    * @param callback 回调函数
    */
    public static load_res(url:string,callback?: { (value: any): void; (value: any): void; (arg0: any): void; }){
        return new Promise((resolve, reject) => {
            cc.assetManager.loadRemote(url,(err, res:any) => {
                if (err) {
                    reject(err);
                } else {
                    if(callback){
                        callback(res);
                    }
                    resolve(res);
                }
            });
        })
    }
}

@ccclass
export default class UIBackPanel extends UIPage {
    private _panel: cc.Node = null;
    private _btnClose: cc.Node = null;
    public _backList : list= null;
    public contentPanal : cc.Node = null;
    public showPanel : cc.Node = null;
    private bg:cc.Node = null;
    private timeInterval = null;
    private data : Array<goodData> = [];

    constructor () {
        super (PanelName.UIBackPanel);
        this.isValid() && this.onLoad();    
    }

    protected onLoad(): void {
        var self = this;
        this._panel = this._page.getChildByName("Panel");
        this.bg = this._panel.getChildByName("bg");
        this._backList = this.bg.getChildByName('backScrollView').getComponent('list');
        this.contentPanal = this.bg.getChildByName('backScrollView');
        this.showPanel = this._page.getChildByName('showPanel');
       
        let url: string = Constant.WEB_LINE_TITLE + '/qwk/details/getGameProps/' + Constant.PERSON_TPKKEN //Constant.PERSON_TPKKEN;   //用户id与游戏id目前为1和1
        utils.showLog("上报数据, url=", url);
        utils.commomHttpRequest(url, (ret, jsdata) => {
            if (ret) {
                self.changeDataToPerson(jsdata);
                utils.showLog("数据上报成功！");
                self.updatePanel();
            } else {
                utils.showLog("数据上报失败！");
            }
        });

        // for(let i = 0 ; i < 1000 ; i++){
        //     this.data.push(this.personData(i));
        // }
        // self.updatePanel();
        
        let btnNames: string[] = ["BtnClose"];
        for (let i = 0; i < btnNames.length; i++) {
            let btn: cc.Node = cc.find(btnNames[i], this._panel);
            if (!btn) continue
            btn.on(cc.Node.EventType.TOUCH_END, this._onBtnClickedHandler, this);

            if (btn.name == "BtnClose") {
                this._btnClose = btn;
            }
        }
    }

    personData (idx:number) {
        let newname = 'good' + idx;
        let goodurl = '';
        let goodNum = parseInt((Math.random() * 100).toString());
        let object = new Object();
        object = {
            goodName : newname,
            avatar : goodurl,
            goodNum : goodNum
        }

        return object;
    }

    changeDataToPerson (jsdata) {
        let datajson = JSON.parse(jsdata);
        console.log(datajson);
        this.data = datajson.data;
    }

    changeItem (data:any,node:cc.Node) {
        let self = this;
        let goodNode : cc.Node = node.getChildByName('goodSp');
        let spr_name = goodNode.getComponent(cc.Sprite);
        console.log(data.goodsImage);
        if(spr_name){
            let headurl = data.goodsImage == "" ? "" : Constant.WEB_LINE_TITLE + data.goodsImage;
            if(headurl != ''){
                cc.assetManager.loadRemote(headurl,function(err,imageAsset){
                    if (spr_name && spr_name.isValid) {
                        let spriteFram = new cc.SpriteFrame(imageAsset);
                        spr_name.spriteFrame = spriteFram;
                    }
                })
            }else{
                cocosz.resMgr.loadAndCacheRes("head/head" , cc.SpriteFrame, null, (err, res) => {
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
    }

    itemRenderEvent (item, idx) {
        this.changeItem(this.data[idx],item);
    }

    itemSelectEvent (item,idx) {
        console.log("点击到了item"+":"+idx);
        let self = this;
        let fromPos = this.showPanel.convertToNodeSpaceAR(item.convertToWorldSpaceAR(cc.Vec2.ZERO));
        console.log(fromPos);
        let openGoods = this.showPanel.getChildByName('openGoods');
        let nameLabel = openGoods.getChildByName('nameLabel');
        nameLabel.getComponent(cc.Label).string = this.data[idx].goodsName;
        let introduceLabel = openGoods.getChildByName('introduceLabel');
        introduceLabel.getComponent(cc.Label).string = this.data[idx].remark;
        if(fromPos.x > 270){
            fromPos.x -= openGoods.width/2 + item.width/2 + 10;
        }else{
            fromPos.x += openGoods.width/2 + item.width/2 + 10;
        }
        openGoods.position = cc.v3(fromPos.x,fromPos.y,0);
        this.showPanel.active = true;
        this.showPanel.targetOff(this.showPanel)
        this.showPanel.on('touchend',function(){
            console.log('关闭了！！！');
            self.showPanel.active = false;
        },this.showPanel);

        let useBtn = openGoods.getChildByName('useBtn');
        useBtn.targetOff(useBtn)
        if (!useBtn.hasEventListener('click')) {
            useBtn.on("touchend",function() {
                let url: string = Constant.WEB_LINE_TITLE + '/qwk/details/useProps/' + self.data[idx].id //Constant.PERSON_TPKKEN;   //用户id与游戏id目前为1和1
                utils.showLog("上报数据, url=", url);
                utils.commomHttpRequest(url, (ret, jsdata) => {
                    if (ret) {
                        let datajson = JSON.parse(jsdata);
                        console.log(datajson);
                        if(!datajson.data){
                            self.data.splice(idx,1); 
                        }else{
                            self.data[idx] = datajson.data;
                        }
                        utils.showLog("数据上报成功！");
                        self.updatePanel();
                    } else {
                        utils.showLog("数据上报失败！");
                    }
                });
                self.showPanel.active = false;
            },useBtn);
        }
    }

    protected onOpen() {
        // 上报 首页签到
        utils.umaEvent("gamegameback");
        utils.SendEvent("页面-背包");
        this._initPanel();
    }

    private _initPanel() {
        TweenEffect.panel_open_scale(this._panel);
        this._backList.renderEvent = this.itemRenderEvent.bind(this);
        this._backList.selectedEvent = this.itemSelectEvent.bind(this);
        // this.updatePanel();
    }

    updatePanel () {
        console.log(this.data);
        this._backList.numItems = this.data.length;
    }

    protected _onBtnClickedHandler (event : cc.Event , data:any) {
        cocosz.audioMgr.playBtnEffect();

        switch (event.target.name) {
            case "BtnClose": {
                cocosz.uiMgr.closePanel(PanelName.UIBackPanel);
                break;
            }
        }
    }

    protected onDestroy () {
        clearInterval(this.timeInterval);
    }
}
