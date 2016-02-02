import PIXI from '@mifunstudio/pixi.js';
import * as UI from '../../src/UI';
import '../../src/UIStage';
import {ScrollView, HORIZONTAL, VERTICAL} from '../../src/view/ScrollView';
import {ImageView} from '../../src/view/ImageView';

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

var sprite = new ImageView(PIXI.Texture.fromImage('images/pig.jpg'));
var scrollView = new ScrollView(500, 300, sprite);
scrollView.position.set(50, 50);
console.log(scrollView);
uiStage.addChild(scrollView);

stage.addChild(uiStage);
