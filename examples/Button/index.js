import PIXI from '@mifunstudio/pixi.js';
import * as UI from '../../src/UI';
import '../../src/UIStage';
import {ListView} from '../../src/view/ListView';
import {SimpleButton} from '../../src/view/SimpleButton';
import {SimpleCheckbox} from '../../src/view/SimpleCheckbox';
import {VBox} from '../../src/layout';

var stage = new PIXI.Stage({
    view: document.getElementById('canvas'),
    dragAndDrop: true
});
stage.ticker.start();
window.stage = stage;


let uiStage = UI.createUIStage(stage);
stage.addChild(uiStage);

var button1 = SimpleButton.fromImage('images/280.png', 'images/finder.png');
button1.position.set(200, 200);
uiStage.addChild(button1);

var checkbox = SimpleCheckbox.fromImage('images/280.png', 'images/finder.png');
checkbox.position.set(500, 200);
uiStage.addChild(checkbox);

PIXI.loader.add('images/pack.json', () => {
    var button2 = SimpleButton.fromFrame('light/光.png', 'light/暗.png');
    button2.position.set(400, 200);
    uiStage.addChild(button2);
});
PIXI.loader.load();
