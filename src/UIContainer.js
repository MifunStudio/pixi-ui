import PIXI from '@mifunstudio/pixi.js';
import {Size} from './math';

export class UIContainer extends PIXI.Container {

    get isUIContainer() { return true; }

    get size() { return this._size; }

    get layoutManager() { return this._layoutManager; }

    constructor(width, height) {
        super();
        this._size = new Size(width, height);
        this._layoutManager = null;
    }

    setSize(size) {
        if(!this._size || !size || this._size === size) {
            return;
        }
        if(this._size && this._size.equals(size)) {
            return;
        }
        this._size = size;
        this.onSizeChange();
        this.emitEvent('sizechange', true);
    }

    setLayoutManager(layoutManager) {
        this._layoutManager = layoutManager;
        if(this._layoutManager) {
            this._layoutManager.setContainer(this);
            this._layoutManager.requestLayout();
        }
    }

    updateTransform() {
        if (!this.visible) return;
        this.displayObjectUpdateTransform();
        this.onLayout();
        for (var i=0,len=this.children.length; i<len; i++) {
            this.children[i].updateTransform();
        }
    }

    onChildrenChange() {
        this.requestLayout();
    }

    onSizeChange() {
    }

    requestLayout() {
        this._layoutManager && this._layoutManager.requestLayout();
    }

    onLayout() {
        this._layoutManager && this._layoutManager.layout();
    }

}
