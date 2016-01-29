import {UIContainer} from '../UIContainer';

export class AdapterView extends UIContainer {

    constructor() {
        super();
    }

    addChild() {
        throw new Error('addChild(...) is not supported in AdapterView');
    }

    addChildAt() {
        throw new Error('addChildAt(...) is not supported in AdapterView');
    }

    swapChildren() {
        throw new Error('swapChildren(...) is not supported in AdapterView');
    }

    setChildIndex() {
        throw new Error('setChildIndex(...) is not supported in AdapterView');
    }

    removeChild() {
        throw new Error('removeChild(...) is not supported in AdapterView');
    }

    removeChildAt() {
        throw new Error('removeChildAt(...) is not supported in AdapterView');
    }

    removeChildren() {
        throw new Error('removeChildren(...) is not supported in AdapterView');
    }

    setAdapter(adapter) {
        let mAdater = this.getAdapter();
        if(mAdater) {
            mAdater.off('datachanged', this._handleDataChanged, this);
        }
        this._adapter = adapter;
        this._adapter.on('datachanged', this._handleDataChanged, this);
    }

    getAdapter() {
        return this._adapter;
    }

    _addChildAt(child, index) {
        super.addChildAt(child, index);
    }

    _removeChildAt(child, index) {
        super.removeChildAt(child, index);
    }

    _removeChildren() {
        super.removeChildren();
    }

    _handleDataChanged() {

    }
}
