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

type personData = {
    avatar ?: string;
    combatPower ?: string;
    createBy ?: string;
    createTime ?: string;
    gameId ?: number;
    id ?: number;
    nikeName ?: string;
    remark ?: string;
    updateBy ?: null;
    updateTime ?: null;
    userId ?: number;
}

type rewardData = {
    createBy ?: string;
    createTime ?: string;
    gameId ?: number;
    id ?: number;
    remark ?: string;
    updateBy ?: null;
    updateTime ?: null;
    goodsId ?: number;
    goodsImg ?: string;
    goodsName ?: string;
    goodsNumber ?: number;
    sort ?: number;
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
export default class UIRankingPanel extends UIPage {
    private _panel: cc.Node = null;
    private _btnClose: cc.Node = null;
    public _rankList : list= null;
    private bg:cc.Node = null;
    private timeInterval = null;
    private data : Array<personData> = [];

    private myData : personData = null;

    private reward : Array<rewardData> = [];

    private loadRewardSp : Array<cc.SpriteFrame> = [];

    private loadHeardSp : Array<cc.SpriteFrame> = [];

    constructor () {
        super (PanelName.UIRankingPanel);
        this.isValid() && this.onLoad();    
    }

    protected onLoad(): void {
        var self = this;
        this._panel = this._page.getChildByName("Panel");
        this.bg = this._panel.getChildByName("bg");
        this._rankList = this.bg.getChildByName('rankingScrollView').getComponent('list');

        // function A () {
        //     return new Promise(function(resolve, reject){
                let rewardUrl: string = Constant.WEB_LINE_TITLE + '/qwk/reward/getRewardList/' + Constant.GAME_ID;   //用户id与游戏id目前为1和1
                utils.commomHttpRequest(rewardUrl, (rewardRet, rewardJsdata) => {
                    if (rewardRet) {
                        let rewardDatajson = JSON.parse(rewardJsdata);
                        console.log(rewardDatajson);
                        self.reward = rewardDatajson.data;
                        // self.loadspFunc();
                        // resolve(rewardDatajson);
                    } else {
                        utils.showLog("获取奖励数据上报失败！");
                    }
                });
        //     })
           
        // }

       
    //    function B () {
    //         // do something
    //         return new Promise(function(resolve, reject){
                let url: string = Constant.WEB_LINE_TITLE + '/qwk/charts/getTheCharts/' + Constant.PERSON_TPKKEN + "/" + Constant.GAME_ID;   //用户id与游戏id目前为1和1
                utils.showLog("上报数据, url=", url);
                // setTimeout(function(){
                    utils.commomHttpRequest(url, (ret, jsdata) => {
                        if (ret) {
                            self.changeDataToPerson(jsdata);
                            utils.showLog("数据上报成功！");
                            self.updatePanel();
                            self.updateMyPanel();
                            // resolve(jsdata);
                        } else {
                            utils.showLog("数据上报失败！");
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

        this.timeInterval = setInterval(function(){  //setInterval
            var lastGameTime = cc.sys.localStorage.getItem("rggame_lastGameTime"); //上一次游戏的时间
            if(!(lastGameTime == null || lastGameTime == undefined || lastGameTime === "")){ //有记录时间
                let checkisover  = utils.checkWeeHours(lastGameTime);
                if(checkisover){
                    let url: string = Constant.WEB_LINE_TITLE + '/qwk/charts/getTheCharts/' + Constant.PERSON_TPKKEN + "/" + Constant.GAME_ID;   //用户id与游戏id目前为1和1
                    utils.showLog("上报数据, url=", url);
                    utils.commomHttpRequest(url, (ret, jsdata) => {
                        if (ret) {
                            self.changeDataToPerson(jsdata);
                            utils.showLog("数据上报成功！");
                            self.updatePanel();
                            self.updateMyPanel();

                            cc.sys.localStorage.setItem('rggame_lastGameTime', Date.now());
                        } else {
                            utils.showLog("数据上报失败！");
                        }
                    });
                }
            }else{
                cc.sys.localStorage.setItem('rggame_lastGameTime', Date.now());
                
            }
        }.bind(this),3000);
        
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

    async loadspFunc () {
        let self = this;
        for(let i in this.reward){
            let rewardUrl = Constant.WEB_LINE_TITLE + this.reward[i].goodsImg;
            await loadFunc (rewardUrl,(spriteFram)=>{
                self.loadRewardSp.push(spriteFram);
            });
        } 
        
        function loadFunc (rewardUrl,callback?: { (value: any): void; (value: any): void; (arg0: any): void; }) {
            return new Promise((resolve, reject) => {
                cc.assetManager.loadRemote(rewardUrl, (err, value) => {  
                    let spriteFram = new cc.SpriteFrame(value);
                    if(callback){
                        callback(spriteFram);
                    }
                    resolve(spriteFram);
                    
                });
            });
        }
    }

    personData (idx:number) {
        let newranknum = idx;
        let newname = 'player' + idx;
        let newpicurl = '';
        let newnumber = 1000 + (idx * 150);
        let rewardurl = '';
        let rewardNum = parseInt((Math.random() * 100).toString());
        let object = new Object();
        object = {
            rankNum : newranknum,
            name : newname,
            picurl : newpicurl,
            number : newnumber,
            rewardurl : rewardurl,
            rewardNum : rewardNum
        }

        return object;
    }

    updateMyPanel(){
        let bottomNode = this.bg.getChildByName('bottomNode');
        let myRanknum = bottomNode.getChildByName('paihangLabel');
        let myFightnum = bottomNode.getChildByName('fightlabel');
        let picNode = bottomNode.getChildByName('headNode').getChildByName('headSprite');
        if(parseInt(this.myData.remark) <= 100){
            myRanknum.getComponent(cc.Label).string = this.myData.remark.toString();
        }else{
            myRanknum.getComponent(cc.Label).string = '暂未上榜';
        }
        myFightnum.getComponent(cc.Label).string = this.myData.combatPower.toString();
        if(picNode.getComponent(cc.Sprite)){
            let headurl = this.myData.avatar == "" ? "head/head" : Constant.WEB_LINE_TITLE + this.myData.avatar;
            if(headurl != ''){
                cc.assetManager.loadRemote(headurl,function(err,imageAsset){
                    if (picNode.getComponent(cc.Sprite) && picNode.getComponent(cc.Sprite).isValid) {
                        let spriteFram = new cc.SpriteFrame(imageAsset);
                        picNode.getComponent(cc.Sprite).spriteFrame = spriteFram;
                    }
                })
            }else{
                cocosz.resMgr.loadAndCacheRes(headurl , cc.SpriteFrame, null, (err, res) => {
                    if (picNode.getComponent(cc.Sprite) && picNode.getComponent(cc.Sprite).isValid) {
                        picNode.getComponent(cc.Sprite).spriteFrame = res;
                    }
                });
            }
        }
    }

    changeDataToPerson (jsdata) {
        let datajson = JSON.parse(jsdata);
        console.log(datajson);
        this.data = datajson.theCharts;
        this.myData = datajson.myData;
    }

    async loadHeardFunc () {
        let self = this;
        for(let i in this.data){
            let headUrl = Constant.WEB_LINE_TITLE + this.data[i].avatar;
            await loadFunc (headUrl,(spriteFram)=>{
                self.loadHeardSp.push(spriteFram);
            });
        } 
        
        function loadFunc (headUrl,callback?: { (value: any): void; (value: any): void; (arg0: any): void; }) {
            return new Promise((resolve, reject) => {
                cc.assetManager.loadRemote(headUrl, (err, value) => {  
                    let spriteFram = new cc.SpriteFrame(value);
                    if(callback){
                        callback(spriteFram);
                    }
                    resolve(spriteFram);
                    
                });
            });
        }
    }

    changeItem (idx,data:any,node:cc.Node) {
        let self = this;
        let rankNode : cc.Node = node.getChildByName('topNode');
        let rankindexNode = node.getChildByName('rankingLabel');
        let rankindexLabel : cc.Label = rankindexNode.getComponent(cc.Label);
        let spr_name = rankNode.getComponent(cc.Sprite);
        rankindexLabel.string = idx;
        rankindexNode.active = true;
        if(idx <= 3){
            rankindexNode.active = false;
            rankNode.active = true;
            if (spr_name) {
                cocosz.resMgr.loadAndCacheRes("ranking/top_" + idx , cc.SpriteFrame, null, (err, res) => {
                    if (spr_name && spr_name.isValid) {
                        spr_name.spriteFrame = res;
                    }
                });
            }
        }else{
            rankNode.active = false;
        }
        
        var head = node.getChildByName('headNode').getChildByName('headSprite').getComponent(cc.Sprite);
        if(head){
            let headurl = data.avatar == "" ? "head/head" : Constant.WEB_LINE_TITLE + data.avatar;
            if(headurl != ''){
                cc.assetManager.loadRemote(headurl,function(err,imageAsset){
                    if (head && head.isValid) {
                        let spriteFram = new cc.SpriteFrame(imageAsset);
                        head.spriteFrame = spriteFram;
                    }
                })
            }else{
                cocosz.resMgr.loadAndCacheRes(headurl , cc.SpriteFrame, null, (err, res) => {
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

        let rewardnumNode = node.getChildByName('rewardLabel');
        let rewardSp = node.getChildByName('rewardSp').getComponent(cc.Sprite);
        node.getChildByName('rewardSp').active = false;
        rewardnumNode.active = false;

        for(let i in this.reward){
            if(this.reward[i].sort == idx){  //goodsImg
                let rewardUrl = Constant.WEB_LINE_TITLE + this.reward[i].goodsImg;    
                cc.assetManager.loadRemote(rewardUrl, (err, value) => {  
                    if (rewardSp && rewardSp.isValid) {
                        node.getChildByName('rewardSp').active = true;
                        let spriteFram = new cc.SpriteFrame(value);
                        rewardSp.spriteFrame = spriteFram;
                    }

                    if(self.reward[i].goodsNumber > 1){
                        rewardnumNode.active = true;
                        rewardnumNode.getComponent(cc.Label).string = 'X' + self.reward[i].goodsNumber;
                    }else{
                        rewardnumNode.active = false;
                    }
                });
            }
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
    }

    async loadSpriteFunc (node,rewardSp,rewardnumNode,idx) {
        let self = this;
        let rewardUrl = Constant.WEB_LINE_TITLE + this.reward[idx].goodsImg;
        console.log(rewardUrl);  
        let spritenode = cc.find("sprite"+(idx+1), this._panel);
        await loadFunc (rewardUrl,(spriteFram)=>{
            // if (rewardSp && rewardSp.isValid) {
                node.getChildByName('rewardSp').active = true;
                rewardSp.spriteFrame = spriteFram;
            // }

            if(self.reward[idx].goodsNumber > 1){
                rewardnumNode.active = true;
                rewardnumNode.getComponent(cc.Label).string = 'X' + self.reward[idx].goodsNumber;
            }else{
                rewardnumNode.active = false;
            }
        });
        

        function loadFunc (rewardUrl,callback?: { (value: any): void; (value: any): void; (arg0: any): void; }) {
            return new Promise((resolve, reject) => {
                cc.assetManager.loadRemote(rewardUrl, (err, value) => {  
                    let spriteFram = new cc.SpriteFrame(value);
                    if(callback){
                        callback(spriteFram);
                    }
                    resolve(spriteFram);
                    
                });
            });
        }
    }

    itemRenderEvent (item, idx) {
        this.changeItem((parseInt(idx)+1),this.data[idx],item);
    }

    protected onOpen() {
        // 上报 首页签到
        utils.umaEvent("gamegameranking");
        utils.SendEvent("页面-排行榜");
        this._initPanel();
    }

    private _initPanel() {
        TweenEffect.panel_open_scale(this._panel);
        // this._rankList.frameByFrameRenderNum = -1;
        this._rankList.renderEvent = this.itemRenderEvent.bind(this);
        // this.updatePanel();
    }

    updatePanel () {
        this._rankList.numItems = this.data.length;
    }

    private _updateDayItem() {
        
    }

    protected _onBtnClickedHandler (event : cc.Event , data:any) {
        cocosz.audioMgr.playBtnEffect();

        switch (event.target.name) {
            case "BtnClose": {
                cocosz.uiMgr.closePanel(PanelName.UIRankingPanel);
                break;
            }
        }
    }

    protected onDestroy () {
        clearInterval(this.timeInterval);
    }
}
