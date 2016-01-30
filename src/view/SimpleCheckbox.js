import {Checkbox} from './Checkbox';

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

        let uncheckedSprite = new PIXI.Sprite(uncheckedTexture);
        uncheckedSprite.anchor.set(0.5);
        uncheckedSprite.interactive = true;

        let checkedSprite = new PIXI.Sprite(checkedTexture);
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

}
