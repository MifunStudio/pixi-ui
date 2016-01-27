import {Padding, Margin} from './math';

export class LayoutManager {

    get container() { return this._container; }
    get padding() { return this._padding; }
    get childMargin() { return this._childMargin; }

    get layoutRequired() { return this._layoutRequired; }
    set layoutRequired(value) { this._layoutRequired = value; }

    constructor() {
        this._container = null;
        this._padding = new Padding(0, 0, 0, 0);
        this._childMargin = new Margin(0, 0, 0, 0);
        this._layoutRequired = true;
    }

    setContainer(container) {
        this._container = container;
    }

    requestLayout() {
        this._layoutRequired = true;
    }

    layout() {
        if(!this.layoutRequired) return;
        this.doLayout();
        this.layoutRequired = false;
    }

    doLayout() {

    }

    getUIWidth(ui) {
        if(ui.isUIContainer) {
            return ui.size.width;
        }
        return ui.width || 0;
    }

    getUIHeight(ui) {
        if(ui.isUIContainer) {
            return ui.size.height;
        }
        return ui.height || 0;
    }

}
