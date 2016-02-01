import PIXI from '@mifunstudio/pixi.js';
import * as UI from '../../src/UI';
import '../../src/UIStage';
import {SlideView, HORIZONTAL, VERTICAL} from '../../src/view/SlideView';
import {ImageView} from '../../src/view/ImageView';
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
            view = new ImageView();
            view.anchor.set(0.5);
        }
        view.texture = PIXI.Texture.fromImage(item);
        return view;
    }
}

let slideView = new SlideView(HORIZONTAL, new Size(500, 500));
console.log(slideView);
slideView.setAdapter(new MyAdapter([
    'images/280.png',
    'images/finder.png'
]));

uiStage.addChild(slideView);


stage.addChild(uiStage);
