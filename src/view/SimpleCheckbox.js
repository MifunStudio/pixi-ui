import {Checkbox} from './Checkbox';
import {Size} from '../math';
import {ImageView} from './ImageView';

export class SimpleCheckbox extends Checkbox {

    static fromImage(uncheckedImage, checkedImage) {
        return new SimpleCheckbox(
            PIXI.Texture.fromImage(uncheckedImage),
            PIXI.Texture.fromImage(checkedImage)
        );
    }

    static fromFrame(uncheckedFrame, checkedFrame) {
        return new SimpleCheckbox(
            PIXI.Texture.fromFrame(uncheckedFrame),
            PIXI.Texture.fromFrame(checkedFrame)
        );
    }

    constructor(uncheckedTexture, checkedTexture) {
        super();

        let uncheckedSprite = new ImageView(uncheckedTexture);
        uncheckedSprite.anchor.set(0.5);
        uncheckedSprite.interactive = true;

        let checkedSprite = new ImageView(checkedTexture);
        checkedSprite.anchor.set(0.5);
        checkedSprite.interactive = true;

        this.getAdapter().addAll([{
            state: 'unchecked',
            isDefault: true,
            view: uncheckedSprite
        }, {
            state: 'checked',
            view: checkedSprite
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
