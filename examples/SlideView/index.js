import PIXI from '@mifunstudio/pixi.js';
import * as UI from '../../src/UI';
import '../../src/UIStage';
import {SlideView, HORIZONTAL, VERTICAL} from '../../src/view/SlideView';
import {Image} from '../../src/view/Image';
import {ArrayAdapter} from '../../src/view/ArrayAdapter';
import {Size} from '../../src/math';

var stage = new PIXI.Stage({
    view: document.getElementById('canvas'),
    dragAndDrop: true,
    webgl: true,
    gestures: 'tap panstart panmove panend pancancel swipeleft swiperight swipeup swipedown'
});
stage.ticker.start();
window.stage = stage;

let uiStage = UI.createUIStage(stage);
stage.addChild(uiStage);

export class MyAdapter extends ArrayAdapter {

    getView(key, scrapView) {
        let item = this.getItem(key);
        let view = scrapView;
        if(!view) {
            view = new PIXI.Text('', {
                fill: '#FFFFFF',
                font: 'normal 80px Arial'
            });
            view.anchor.set(0.5);
        }
        view.text = 'item_' + item;
        return view;
    }
}

let slideView = new SlideView(HORIZONTAL, new Size(500, 500));
console.log(slideView);
slideView.setAdapter(new MyAdapter([
    'item1',
    'item2'
]));

uiStage.addChild(slideView);


stage.addChild(uiStage);
