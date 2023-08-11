

const { ccclass, executeInEditMode } = cc._decorator;

@ccclass
@executeInEditMode
export default class ShowDate extends cc.Component {

    start() {
        if (CC_EDITOR) {
            let label = this.node.getComponent(cc.Label);
            if (label) {
                let d = new Date();
                label.string = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
            }
        }
        this.node.zIndex = cc.macro.MAX_ZINDEX;
    }

}
