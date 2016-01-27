import PIXI from '@mifunstudio/pixi.js';
import {ListView} from '../../src/view/ListView';
import {VBox} from '../../src/layout';

var stage = new PIXI.Stage({
    view: document.getElementById('canvas'),
    dragAndDrop: true
});
stage.ticker.start();
window.stage = stage;

export class MyListView extends ListView {

    constructor() {
        super(new VBox());
    }

    _updateItemView(index, originItemView, itemData) {
        if(!itemData) {
            originItemView.destroy();
            return null;
        }
        if(!originItemView) {
            originItemView = new PIXI.Text(itemData, {
                font: '30px',
                fill: '#FFFFFF'
            });
        }
        originItemView.text = itemData;
        return originItemView;
    }

}


let listData = [];
for(let i=0; i<30; i++) {
    listData.push('item' + i);
}
let myListView = new MyListView();
myListView.setListData(listData);

stage.addChild(myListView);
