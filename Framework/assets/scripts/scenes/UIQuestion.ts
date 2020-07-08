// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIQuestion extends cc.Component {
    @property(cc.Label)
    lable: cc.Label = null

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    setInfo (data: string) {
        this.lable.string = data;
    }

    // update (dt) {}
}
