import {Padding, Margin} from './math';

export class LayoutManager {

    get container() { return this._container; }
    get padding() { return this._padding; }
    get childMargin() { return this._childMargin; }

    get layoutRequired() { return this._layoutRequired; }

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

    doLayout() {

    }

}
