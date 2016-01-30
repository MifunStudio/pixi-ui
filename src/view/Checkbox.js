import {AbstractButton} from './AbstractButton';

export class Checkbox extends AbstractButton {

    constructor() {
        super();
        this.on('tap', this._onTap, this);
    }

    destroy(destroyChildren) {
        super.destroy(destroyChildren);
        this.off('tap', this._onTap, this);
    }

    toggle() {
        this.setChecked(!this.isChecked());
    }

    isChecked() {
        return this.getAdapter().getCurrentState() === 'checked';
    }

    setChecked(checked) {
        this.getAdapter().changeState(checked ? 'checked' : 'unchecked');
    }

    _onTap() {
        this.toggle();
    }

}
