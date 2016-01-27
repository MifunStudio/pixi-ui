import PIXI from '@mifunstudio/pixi.js';
import {Size} from './math';

export class UIContainer extends PIXI.Container {

    get isUIContainer() { return true; }

    get size() { return this._size; }
    set size(value) {
        this._size = value;
        this.onSizeChange();
        this.emit('sizechange');
    }

    get layoutManager() { return this._layoutManager; }
    set layoutManager(value) {
        this._layoutManager = value;
        if(this._layoutManager) {
            this._layoutManager.setContainer(this);
            this._layoutManager.requestLayout();
        }
    }

    constructor(width, height) {
        super();
        this._size = new Size(width, height);
        this._layoutManager = null;
    }

    updateTransform() {
        if (!this.visible) return;
        this.displayObjectUpdateTransform();
        this._layoutManager && this._layoutManager.layout();
        for (var i=0,len=this.children.length; i<len; i++) {
            this.children[i].updateTransform();
        }
    }

    onChildrenChange() {
        this._layoutManager && this._layoutManager.requestLayout();
    }

    onSizeChange() {

    }

}
