import Constant from "../Framework/Constant";
import { cocosz } from "../Framework/CocosZ";
import Msg from "../Framework/Msg";
// @ts-ignore
const i18n = require('LanguageData');

const { ccclass, property } = cc._decorator;

@ccclass
export default class PhysicalBord extends cc.Component {

    private _layout: cc.Node = null;
    private _icon: cc.Node = null;
    private _adBtn: cc.Node = null;

    onLoad() {
        this._layout = this.node.getChildByName("tilayout");
        this._icon = this.node.getChildByName("Icon");
        this._adBtn = this.node.getChildByName("BtnAD");
        if (this._adBtn) {
            this._adBtn.on(cc.Node.EventType.TOUCH_END, (() => {
               
            }));
            this._adBtn.active = cocosz.isADON;
        }
    }

    onEnable() {
        cc.game.on(Constant.E_GAME_LOGIC, this._onGameMessageHandler, this);

        this._updateLayout();
    }

    onDisable() {
        cc.game.targetOff(this);
    }

    private _onGameMessageHandler(event: any) {
        switch (event.type) {
            case Constant.E_Diamond_CHANGE: {
                this._updateLayout();
                break;
            }
        }
    }

    private _updateLayout() {
        for(let i = 0; i < this._layout.childrenCount; i++){
            this._layout.children[i].active = false;
        }

        for(let i = 0; i < cocosz.dataMgr.PhysicalCount; i++){
            this._layout.children[i].active = true;
        }

    }

    /**
     * 获取Icon的世界坐标位置(金币动画飞入使用)
     */
    public getLocation() {
        let pos = this._icon.convertToWorldSpaceAR(cc.Vec3.ZERO);
        // let temp = cc.v2(pos.x, cc.winSize.height - 76)
        return pos;
    }

    private _addGold() {
        cocosz.dataMgr.CoinCount += 200;
        Msg.Show(i18n.t("msg.gxhdjb") + "200");//恭喜获得金币
    }
}
