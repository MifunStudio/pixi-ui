import EventEmitter from 'eventemitter3';

export class Adapter extends EventEmitter {

    getItem(key) {
        return null;
    }

    getView(key, scrapView) {
        return null;
    }

    getViewType(key) {
        return 0;
    }

    getViewTypeCount() {
        return 1;
    }

    emitDataChanged() {
        this._onDataChanged();
        this.emit('datachanged');
    }

    _onDataChanged() {

    }

}
