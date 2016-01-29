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

    getView(key, convertView) {
        var item = this.getItem(key);
        return new PIXI.Text('item'+item, {
            fill: '#FFFFFF',
            font: 'normal 30px Arial'
        });
    }
}


var listView = new ListView();
listView.setAdapter(new MyAdapter(["abc", "bcd"]));

var scrollView = new ScrollView(500, 300, listView);

stage.addChild(scrollView);
