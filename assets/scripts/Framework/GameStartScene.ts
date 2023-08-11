// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { cocosz } from "./CocosZ";
import { PageName } from "./Constant";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameStartScene extends cc.Component {
    levelBtn : cc.Node = null;
    reinBtn : cc.Node = null;
    
    protected start(): void {
        this.levelBtn = this.node.getChildByName("levelButton");
        this.reinBtn = this.node.getChildByName('reinButton');
        this.levelBtn.on('touchend',function(){
            cocosz.gameMode = 8;
            cc.director.loadScene("GameLevel");
        });
        this.reinBtn.on('touchend',function(){
            cocosz.gameMode = 6;
            cocosz.uiMgr.openPage(PageName.UIHomePage);
        });
    }
}
