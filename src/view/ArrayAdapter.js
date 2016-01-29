import 'object.observe';
import {Adapter} from './Adapter';

export class ArrayAdapter extends Adapter {

    get data() { return this._data; }

    constructor(data) {
        super();
        this._listeners = {
            onRawDataChanged: () => this.emitDataChanged()
        };
        this.setData(data);
    }

    getCount() {
        return this.data.length;
    }

    getItem(key) {
        return this.data[key];
    }

    setData(data) {
        if(this._data) {
            Object.unobserve(this._data, this._listeners.onRawDataChanged);
        }
        this._data = data;
        if(data) {
            Object.observe(data, this._listeners.onRawDataChanged);
        }
    }
}
