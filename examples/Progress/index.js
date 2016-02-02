import PIXI from '@mifunstudio/pixi.js';
import * as UI from '../../src/UI';
import '../../src/UIStage';
import {ProgressBar, L2R, R2L, U2D, D2U, CLOCK, ANTI_CLOCK} from '../../src/view/ProgressBar';

var stage = new PIXI.Stage({
    view: document.getElementById('canvas'),
    dragAndDrop: true
});
stage.ticker.start();
window.stage = stage;

let uiStage = UI.createUIStage(stage);
stage.addChild(uiStage);

let direction = [CLOCK, ANTI_CLOCK, L2R, R2L, U2D, D2U];

function nextDir() {
    var dir = direction.shift();
    direction.push(dir);
    return dir;
}

let progressBar = new ProgressBar(
    nextDir(),
    PIXI.Texture.fromImage('images/280.png'),
    PIXI.Texture.fromImage('images/finder.png')
);

progressBar.position.set(100, 100);
progressBar.setOffset(new PIXI.Point(0, 16));
uiStage.addChild(progressBar);

stage.scheduler.loop(() => {
    var progress = progressBar.progress + 1;
    if(progress > 100) {
        progress = 0;
        progressBar.setDirection(nextDir());
    }
    progressBar.setProgress(progress);
});
