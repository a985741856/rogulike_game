// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { cocosz } from "./CocosZ";
import Constant , { PageName } from "./Constant";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameLevel extends cc.Component {
    returnBtn : cc.Node = null;

    PageView : cc.Node = null;

    pageindex : number = 0;

    lockedNode : cc.Node [] = [];
    
    protected start(): void {
        let self = this;
        this.returnBtn = this.node.getChildByName('BtnReturn');
        this.PageView = this.node.getChildByName('PageView');
        this.returnBtn.on('touchend',function(){
            cc.director.loadScene("GameStart")
        });

        for (let i : number = 0 ; i < self.PageView.getChildByName('view').getChildByName('content').children.length; i++) {
            let childnode = self.PageView.getChildByName('view').getChildByName('content').children[i];
            let lock = childnode.getChildByName('lock');
            let btn = childnode.getChildByName('button');
            // this.lockedNode.push(lock);

            let levelinfo = cocosz.dataMgr.getLevelInfo((1001 + i));
            console.log(levelinfo);
            // self.isLocked(levelinfo);
            if(levelinfo.State == 0){
                lock.active = true;
            }else{
                lock.active = false;
            }


            btn.on('touchend',function() {
                self.touchevent();
            });
        }
        

        this.PageView.on('page-turning',function(event,target){
            console.log(target);
            self.pageindex = self.PageView.getComponent(cc.PageView).getCurrentPageIndex();
            console.log(self.pageindex);

            
        });
    }

    touchevent () {
        console.log('点击按钮'+ (1001 + this.pageindex));
        Constant.currentLevel = this.pageindex + 1;
        cocosz.uiMgr.openPage(PageName.UIHomePage);
    }

    isLocked (levelinfo) {
        let self = this;
        console.log(levelinfo.State);
        if(levelinfo.State == 0){
            this.lockedNode[this.pageindex].active = true;
        }else{
            this.lockedNode[this.pageindex].active = false;
        }
    }
}
