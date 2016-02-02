import PIXI from '@mifunstudio/pixi.js';
import {Button} from './Button';
import {ImageView} from './ImageView';
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

        let normalImageView = new ImageView(normalTexture);
        normalImageView.anchor.set(0.5);
        normalImageView.interactive = true;

        let pressImageView;
        if(!pressTexture) {
            pressImageView = new ImageView(pressTexture);
            pressImageView.anchor.set(0.5);
            pressImageView.interactive = true;
        }

        this.getAdapter().addAll([{
            state: 'normal',
            isDefault: true,
            view: normalImageView
        }, {
            state: 'press',
            view: pressImageView || normalImageView
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
                this._updateSize();
            });
        }
    }

}
