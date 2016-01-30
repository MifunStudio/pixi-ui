import PIXI from '@mifunstudio/pixi.js';
import {Button} from './Button';
import {Size} from '../math';

export class SimpleButton extends Button {

    static fromImage(normalImage, pressImage) {
        return new SimpleButton(
            PIXI.Texture.fromImage(normalImage),
            PIXI.Texture.fromImage(pressImage || normalImage)
        );
    }

    static fromFrame(normalFrame, pressFrame) {
        return new SimpleButton(
            PIXI.Texture.fromFrame(normalFrame),
            PIXI.Texture.fromFrame(pressFrame || normalFrame)
        );
    }

    constructor(normalTexture, pressTexture) {
        super();
        if(!pressTexture) {
            pressTexture = normalTexture;
        }

        let normalSprite = new PIXI.Sprite(normalTexture);
        normalSprite.anchor.set(0.5);
        normalSprite.interactive = true;

        let pressSprite = new PIXI.Sprite(pressTexture);
        pressSprite.anchor.set(0.5);
        pressSprite.interactive = true;

        this.getAdapter().addAll([{
            state: 'normal',
            isDefault: true,
            view: normalSprite
        }, {
            state: 'press',
            view: pressSprite
        }]);
    }

    setCurrentView(view) {
        super.setCurrentView(view);
        this._checkTextureLoaded();
    }

    _checkTextureLoaded() {
        let view = this.getCurrentView();
        if(!view || !view.texture) return;
        let texture = view.texture;
        if(!texture.baseTexture.hasLoaded) {
            texture.once('update', () => {
                this.setSize(new Size(view.width, view.height));
            });
        }
    }

}
