import PIXI from '@mifunstudio/pixi.js';
import {UIContainer} from '../UIContainer';
import {HBox, VBox} from '../layout';

function isArray(test) {
    return Object.prototype.toString.call(test) === '[object Array]';
}

export class ListView extends UIContainer {

    get data() {
        return this._data;
    }

    constructor(layoutManager) {
        super(0, 0);
        this.layoutManager = layoutManager || new VBox();
        this._listData = null;
    }

    setListData(data) {
        if(isArray(data)) {
            data = new ArrayListData(data);
        }
        this._listData = data;
        this._onListDataChange();
    }

    getItemViewAt(index) {
        if(index >= this.getItemCount()) {
            return;
        }
        return this.getChildAt(index);
    }

    setItemViewAt(index, itemView) {
        this.children[index] = itemView;
        this.onChildrenChange();
    }

    getItemCount() {
        return this.children.length;
    }

    removeItemView(itemView) {
        this.removeChild(itemView);
    }

    removeItemViewAt(index) {
        if(index >= this.getItemCount()) return;
        this.removeChildAt(index);
    }

    _onListDataChange() {
        if(!this._listData || this._listData.getCount() <= 0) {
            this.removeChildren();
            return;
        }
        this._updateListView();
    }

    _updateListView() {
        let listData = this._listData;
        let len = Math.max(listData.getCount(), this.getItemCount());
        let oldChildren = this.children.slice(0);
        this.removeChildren();
        for(let i=0; i<len; i++) {
            let itemData = listData.getAt(i);
            let itemView = oldChildren[i];
            let newItemView = this._updateItemView(i, itemView, itemData);
            if(newItemView) {
                this.addChild(newItemView);
            }
        }
    }

    _updateItemView(index, originItemView, itemData) {
        return new PIXI.Sprite();
    }

}

export class ListData {

    getAt(index) {}

    getCount() {}

}

export class ArrayListData extends ListData {

    constructor(arrayData) {
        super();
        this._arrayData = arrayData;
    }

    getAt(index) {
        return this._arrayData[index];
    }

    getCount() {
        return this._arrayData.length;
    }
}
