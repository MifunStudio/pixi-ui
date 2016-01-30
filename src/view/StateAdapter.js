import {ArrayAdapter} from './ArrayAdapter';

export class StateAdapter extends ArrayAdapter {

    get state() {
        return this._state;
    }

    constructor(rawArray) {
        super(rawArray);
        if(rawArray && this.rawArray.length > 0) {
            this.changeState(this.getDefaultState());
        }
    }

    emitStateChanged() {
        this._onStateChanged();
        this.emit('statechanged');
    }

    changeState(state) {
        if(!state) return;
        if(this._state === state) return;
        this._state = state;
        this.emitStateChanged();
    }

    getDefaultState() {
        var item = this.getDefaultItem();
        if(!item) return;
        return this.getItemState(item);
    }

    getDefaultItem() {
        return this.findItem((item) => this.isDefaultItem(item));
    }

    getItemState(item) {
        return item.state;
    }

    isDefaultItem(item) {
        return item.isDefault;
    }

    getItemByState(state) {
        return this.findItem((item) => this.getItemState(item));
    }

    getViewByState(state) {
        var item = this.findItem((item) => this.getItemState(item) === state);
        if(!item) return;
        return this.getItemView(item);
    }

    getItemView(item) {
        return item.view;
    }

    getCurrentStateView() {
        return this.getViewByState(this._state);
    }

    getCurrentState() {
        return this._state;
    }

    getView() {
        throw new Error('getView(key, scrapView) is unsupported, use getItemView(item) instead');
    }

    _onDataChanged() {
        super._onDataChanged();
        if(!this._state) {
            this.changeState(this.getDefaultState());
        }
    }

    _onStateChanged() {

    }

}
