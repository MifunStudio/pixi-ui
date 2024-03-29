import PIXI from '@mifunstudio/pixi.js';
import '../../src/UIStage';
import * as UI from '../../src/UI';
import {ListView} from '../../src/view/ListView';
import {ScrollView} from '../../src/view/ScrollView';
import {ArrayAdapter} from '../../src/view/ArrayAdapter';
import {VBox} from '../../src/layout';

var stage = new PIXI.Stage({
    view: document.getElementById('canvas'),
    dragAndDrop: true
});
stage.ticker.start();
window.stage = stage;


let uiStage = UI.createUIStage(stage);

export class MyAdapter extends ArrayAdapter {

    getView(key, scrapView) {
        let item = this.getItem(key);
        let view = scrapView;
        if(!view) {
            view = new PIXI.Text('', {
                fill: '#FFFFFF',
                font: 'normal 30px Arial'
            });
        }
        view.text = 'item_' + item;
        return view;
    }
}


var listView = new ListView();
listView.setAdapter(new MyAdapter([
    "abc", "bcd","bcd","bcd","bcd","bcd","bcd","bcd","bcd","bcd"
]));

window.listView = listView;

var scrollView = new ScrollView(500, 300, listView);
uiStage.addChild(scrollView);

stage.addChild(uiStage);
