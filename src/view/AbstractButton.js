import PIXI from '@mifunstudio/pixi.js';
import {StateView} from './StateView';

var sharedPoint = new PIXI.Point(0, 0);

export class AbstractButton extends StateView {

    constructor() {
        super();
        this.interactive = true;
        this.interactiveChildren = false;
    }

    containsPoint(point) {
        let hit;
        if(this.hitArea) {
            this.worldTransform.applyInverse(point, sharedPoint);
            return this.hitArea.contains(sharedPoint.x, sharedPoint.y);
        }
        let view = this.getCurrentView();
        if(view.hitArea) {
            view.worldTransform.applyInverse(point, sharedPoint);
            hit = view.hitArea.contains(sharedPoint.x, sharedPoint.y);
        } else if(view.containsPoint) {
            hit = view.containsPoint(point);
        }
        return hit;
    }

}
