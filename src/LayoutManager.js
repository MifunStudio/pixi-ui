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

}
