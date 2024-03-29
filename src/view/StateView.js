import PIXI from '@mifunstudio/pixi.js';
import {AdapterView} from './AdapterView';
import {StateAdapter} from './StateAdapter';
import {Size} from '../math';
import * as UI from '../UI';

export class StateView extends AdapterView {

    constructor() {
        super();
        this.setAdapter(new StateAdapter());
    }

    destroy(destroyChildren) {
        this.setCurrentView(null);
        this._destroyStateViews();
        super.destroy(destroyChildren);
    }

    getCurrentView() {
        return this._currentView;
    }

    setCurrentView(view) {
        if(this._currentView) {
            this._removeChildAt(0);
        }
        if(view) {
            this._currentView = view;
            this._addChildAt(view, 0);
        }
        this._updateSize();
    }

    setAdapter(adapter) {
        let mAdapter = this.getAdapter();
        if(mAdapter) {
            mAdapter.off('statechanged', this._handleStateChanged, this);
        }
        super.setAdapter(adapter);
        this._handleStateChanged();
        if(adapter) {
            adapter.on('statechanged', this._handleStateChanged, this);
        }
    }

    _destroyStateViews() {
        let adapter = this.getAdapter();
        adapter.eachItem((item) => {
            let view = adapter.getItemView(item);
            if(view) {
                view.destroy();
            }
        });
    }

    _updateSize() {
        if(!this._currentView) {
            this.setSize(new Size(0, 0));
            return;
        }
        this.setSize(UI.getSize(this._currentView).clone());
    }

    _handleStateChanged() {
        this.setCurrentView(this.getAdapter().getCurrentStateView());
        this.invalidate();
    }



}
