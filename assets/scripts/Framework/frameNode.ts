
const { ccclass, property } = cc._decorator;

@ccclass
export default class frameNode extends cc.Component{
    @property(cc.SpriteFrame)
    commonSprite : cc.SpriteFrame[] = []

    @property(cc.SpriteFrame)
    selectSprite : cc.SpriteFrame[] = []

    start () {

    }
}


