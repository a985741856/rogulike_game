// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { cocosz } from "../Framework/CocosZ";
import { gameMgr } from "./gameMgr";
import Person from "./person";
import Weapon from "./weapon";
import { upgradeMgr } from "./UpgradeMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Prop extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    @property () 
    weaponSprite : cc.Node = null;

    idx : number = 0;

    start () {
        gameMgr && gameMgr.setMapTs.checkNode(this.node, true);
        cc.tween(this.node)
        .delay(5)
        .blink(3, 3)
        .call(() => {
            upgradeMgr.createPropArr.splice(this.idx,1);
            this.node.destroy();
            upgradeMgr.createNum --;
        })
        .start();
        
        // console.log('当前idx为：'+this.idx);
        // console.log('当前武器为：'+ Weapon.WeaponName[this.idx - 1]);
        let weaponSp = this.node.getChildByName('weaponSp');
        weaponSp.getComponent(cc.Sprite).spriteFrame = cocosz.resMgr.getRes("w_" + Weapon.WeaponName[this.idx - 1], cc.SpriteFrame);
    }

    onCollisionEnter(other: any, self: any) {
        let ts = other.getComponent(Person)
        if (other.tag == 1 && ts.isPlayer) {
            upgradeMgr.createPropArr.splice(this.idx,1);
            this.node.destroy();
            upgradeMgr.createNum --;
            ts.setNewWeapon(this.idx - 1);
        }
    }
    // update (dt) {}
}
