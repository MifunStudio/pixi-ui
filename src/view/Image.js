import PIXI from '@mifunstudio/pixi.js';
import * as UI from '../UI';

export class Image extends PIXI.Sprite {

    constructor(texture) {
        super(texture);
    }

    updateTransform() {
        super.updateTransform();
        if(this.hasActivedTweens()) {
            UI.invalidate(this);
        }
    }

    hasActivedTweens() {
        return this.tweenTransform.tweens.length > 0;
    }

    _onTextureUpdate() {
        super._onTextureUpdate();
        UI.invalidate(this);
    }

}
