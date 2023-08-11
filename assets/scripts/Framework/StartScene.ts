// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class StartScene extends cc.Component {
    levelBtn : cc.Node = null;
    reinBtn : cc.Node = null;
    
    protected start(): void {
        cc.director.loadScene("Load");
        // this.levelBtn = this.node.getChildByName("levelButton");
        // this.reinBtn = this.node.getChildByName('reinButton');
        // this.levelBtn.on('touchend',function(){
        //     cc.director.loadScene("Load");
        // });
        // this.reinBtn.on('touchend',function(){
        //     cc.director.loadScene("Load");
        // });
    }
}
