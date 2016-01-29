import PIXI from '@mifunstudio/pixi.js';
import {AdapterView} from './AdapterView';
import {Recycler} from './Recycler';
import {HBox, VBox} from '../layout';

export class ListView extends AdapterView {

    constructor(layoutManager) {
        super(0, 0);
        this.setLayoutManager(layoutManager || new VBox());
        this._recycler = new Recycler();
        this._buildListRequired = true;
    }

    onLayout() {
        this._buildList();
        super.onLayout();
    }

    requestBuildList() {
        this._buildListRequired = true;
    }

    destroy(destroyChildren) {
        super.destroy(destroyChildren);
        this._recycler.clear();
    }

    _handleDataChanged() {
        this.requestBuildList();
    }

    _removeChildrenToScrap() {
        let recycler = this._recycler;
        let adapter = this.getAdapter();
        let children = this.children;
        for(let i=0,len=children.length; i<len; i++) {
            let view = children[i];
            let viewType = adapter.getViewType(i);
            this._recycler.addScrap(view, viewType);
        }
        this._removeChildren();
    }

    _buildList() {
        if(!this._buildListRequired)  return;
        let adapter = this.getAdapter();
        if(!adapter) return;

        this._removeChildrenToScrap();

        let recycler = this._recycler;
        let count = adapter.getCount();
        for(let i=0; i<count; i++) {
            let viewType = adapter.getViewType(i);
            let scrapView = recycler.shiftScrap(viewType);
            let view = adapter.getView(i, scrapView);
            this._addChildAt(view, i);
        }

        this._buildListRequired = false;
        this.requestLayout();
    }

}
