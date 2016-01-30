import {AbstractButton} from './AbstractButton';

export class Button extends AbstractButton {

    constructor() {
        super();
        this._scaleOnPress = 1.2;
        this.on('touch', this._onTouch, this);
        this.on('release', this._onRelease, this);
    }

    destroy(destroyChildren) {
        super.destroy(destroyChildren);
        this.off('touch', this._onTouch, this);
        this.off('release', this._onRelease, this);
    }

    setScaleOnPress(scale) {
        this._scaleOnPress = scale;
    }

    _onTouch() {
        this.getAdapter().changeState('press');
        this.scale.x *= this._scaleOnPress;
        this.scale.y *= this._scaleOnPress;
    }

    _onRelease() {
        this.getAdapter().changeState(this.getAdapter().getDefaultState());
        this.scale.x /= this._scaleOnPress;
        this.scale.y /= this._scaleOnPress;
    }

}
