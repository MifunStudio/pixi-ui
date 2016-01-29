import PIXI from '@mifunstudio/pixi.js';
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

export class MyAdapter extends ArrayAdapter {

    getView(key, scrapView) {
        let item = this.getItem(key);
        let view = scrapView;
        if(!view) {
            view = new PIXI.Text('', {
                fill: '#FFFFFF',
                font: 'normal 30px Arial'
            });
        } else {
            console.log('scrap view ', key);
        }
        view.text = 'item_' + key;
        return view;
    }
}


var listView = new ListView();
listView.setAdapter(new MyAdapter(["abc", "bcd"]));

setTimeout(() => {
    listView.getAdapter().data.push(Date.now());
}, 1000);

var scrollView = new ScrollView(500, 300, listView);

stage.addChild(scrollView);
