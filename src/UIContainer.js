import PIXI from '@mifunstudio/pixi.js';
import {Size} from './math';
import * as UI from './UI';

export class UIContainer extends PIXI.Container {

    get isUIContainer() { return true; }

    get size() { return this._size; }

    get layoutManager() { return this._layoutManager; }

    get align() { return this._align; }
    get alignWidth() { return this.size.width; }

    get valign() { return this._valign; }
    get valignHeight() { return this.size.height; }

    constructor(width, height) {
        super();
        this._size = new Size(width || 100, height || 100);
        this._layoutManager = null;
        this._align = UI.ALIGN_NONE;
        this._valign = UI.ALIGN_NONE;
    }

    renderWebGL(renderer) {
        super.renderWebGL(renderer);
        if(UI.debugDraw) {
            UI.debugDrawUIContainer(renderer, this);
        }
    }

    renderCanvas(renderer) {
        super.renderCanvas(renderer);
        if(UI.debugDraw) {
            UI.debugDrawUIContainer(renderer, this);
        }
    }

    setAlign(align, valign) {
        this._align = align;
        if(valign) {
            this._valign = valign;
        }
        this.emitEvent('alignchange', true);
    }

    setValign(valign) {
        this._valign = valign;
        this.emitEvent('alignchange', true);
    }

    invalidate() {
        UI.invalidateUIStage();
    }

    updateTransform() {
        this.uiContainerUpdateTransform();
        if(this.hasActivedTweens()) {
            this.invalidate();
        }
    }

    hasActivedTweens() {
        return this.tweenTransform.tweens.length > 0;
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

    uiContainerUpdateTransform() {
        if (!this.visible) return;
        this.displayObjectUpdateTransform();
        this.onLayout();
        for (var i=0,len=this.children.length; i<len; i++) {
            this.children[i].updateTransform();
        }
    }

    onChildrenChange() {
        this.requestLayout();
        this.invalidate();
    }

    onSizeChange() {
        this.requestLayout();
        this.invalidate();
    }

    requestLayout() {
        if(this._layoutManager) {
            this._layoutManager.requestLayout();
        }
    }

    onLayout() {
        this._layoutManager && this._layoutManager.layout();
    }

}
