import PIXI from '@mifunstudio/pixi.js';
import {ScrollView} from '../../src/view/ScrollView';

var stage = new PIXI.Stage({
    view: document.getElementById('canvas'),
    dragAndDrop: true
});
stage.ticker.start();
window.stage = stage;

var sprite = PIXI.Sprite.fromImage('images/pig.jpg');
var scrollView = new ScrollView(500, 300, sprite);
scrollView.position.set(50, 50);
stage.addChild(scrollView);
