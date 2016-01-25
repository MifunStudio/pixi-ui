import PIXI from '@mifunstudio/pixi.js';

export class UIContainer extends PIXI.Container {

    get size() { return this._size; }
    set size(value) { this._size = value; }

    get layoutManager() { return this._layoutManager; }
    set layoutManager(value) {
        this._layoutManager = value;
        if(this._layoutManager) {
            this._layoutManager.setContainer(this);
            this._layoutManager.requestLayout();
        }
    }

    constructor() {
        super();
        this._size = new PIXI.Point(0, 0);
        this._layoutManager = null;
    }

    updateTransform() {
        super.updateTransform();
        if(this._layoutManager && this._layoutManager.layoutRequired) {
            this._layoutManager.doLayout();
        }
    }

    onChildrenChange() {
        this._layoutManager && this._layoutManager.requestLayout();
    }

}
