import {Adapter} from './Adapter';

export class ArrayAdapter extends Adapter {

    constructor(rawArray) {
        super();
        this._rawArray = rawArray || [];
    }

    findItem(find) {
        var found;
        this.eachItem((item, index) => {
            if(find(item, index)) {
                found = item;
                return false;
            }
        });
        return found;
    }

    eachItem(iterator) {
        if(!this._rawArray || this._rawArray.length === 0) return;
        for(let i=0,len=this._rawArray.length; i<len; i++) {
            if(false === iterator(this._rawArray[i], i)) {
                return;
            }
        }
    }

    getCount() {
        return this._rawArray.length;
    }

    getItem(key) {
        return this._rawArray[key];
    }

    add(item) {
        this._rawArray.push(item);
        this.emitDataChanged();
    }

    addAll(items) {
        for(let i=0,len=items.length; i<len; i++) {
            let item = items[i];
            this._rawArray.push(item);
        }
        this.emitDataChanged();
    }

    insert(item, index) {
        this._rawArray.splice(index, 0, item);
    }

    remove(item) {
        var index = this._rawArray.indexOf(item);
        if(index !== -1) {
            this._rawArray.splice(index, 1);
            this.emitDataChanged();
        }
    }

    sort(comparator) {
        this._rawArray.sort(comparator);
        this.emitDataChanged();
    }

    clear() {
        this._rawArray.length = 0;
        this.emitDataChanged();
    }

}
