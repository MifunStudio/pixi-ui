import PIXI from '@mifunstudio/pixi.js';
import {AdapterView} from './AdapterView';
import {HBox, VBox} from '../layout';

export class ListView extends AdapterView {

    constructor(layoutManager) {
        super(0, 0);
        this.layoutManager = layoutManager || new VBox();
        this._buildListRequired = true;
    }

    onLayout() {
        this._buildList();
        super.onLayout();
    }

    requestBuildList() {
        this._buildListRequired = true;
    }

    _handleDataChanged() {
        this.requestBuildList();
    }

    _buildList() {
        if(!this._buildListRequired)  return;
        let adapter = this.getAdapter();
        if(!adapter) return;

        this._removeChildren();

        let count = adapter.getCount();
        for(let i=0; i<count; i++) {
            let view = adapter.getView(i, null);
            this._addChildAt(view, i);
        }

        this._buildListRequired = false;
        this.requestLayout();
    }

}
